import multer from 'multer'

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = file.originalname
      cb(null, uniqueSuffix)
    }
  })
  
  const fileFilter = (req, file, cb) => {

    if(file.mimetype.startsWith('image/')){
        cb(null,true)
    }else{

        cb(new Error('only image accepted'))
    }
  
}

const fileSize ={
    limits: 1024 * 1024 * 10
}

// optional
const maxFileCount = 1

const upload = multer({
    storage,
    fileFilter,
    limits: {...fileSize, files:maxFileCount}
})

export default upload