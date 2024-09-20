import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../model/userModel.js'
import cloudinary from '../config/cloudinary.js'

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const file = req.file

    if (!name || !email || !password) {
        return res.status(400).json({error: 'all field are required'})
    }

    // const existingUser = await User.findOne({email})
    // if (existingUser) {
    //     return res.status(400).json({error: 'user already exist'})
    // }

    // if(!file || !file.path){
    //     return res.status(400).json({error: 'image is required'})    
    // }
    let image = null
    if (file) {
        const result = await cloudinary.uploader.upload(file.path,{resource_type:"image"})
        image = result.secure_url
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    
    const createUser = new User({
        name,
        email,
        password: hashedPassword,
        profile: image
    });
    await createUser.save();

    res.status(200).json({
        message: 'user registered successfully',
        data:createUser
    })

    } catch (error) {
        console.log('error registering user', error);
        res.status(500).json({error: error.message})
    }

}

export const login = async (req, res) => {

        const {email, password} = req.body 
        
        const user  = await User.findOne({email})
        if (!user) {
        return res.status(400).json({error: 'incorrect email or password'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const accessToken = jwt.sign({name: user.name, role: user.role}, process.env.ACCESS_TOKEN_KEY)
            
            if(user.role === 'Admin'){
                return res.json({message: 'Welcome Admin!', accessToken})
            }else{
                return res.json({message: 'Welcome User!', accessToken})
            }
        
            }else{
                return res.status(400).send('Invalid Username or Password')
            }    
}