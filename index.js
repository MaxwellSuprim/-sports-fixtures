import  express from "express"
import dotenv from 'dotenv';
import multer from "multer";
import cors from "cors"


import  './config/db.config.js';

import routes from "./router/index.router.js";
import { picCompress } from "./controller/pic.controller.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));





dotenv.config({ path:'./config/config.env' });

const allowedDomains =
  process.env.MODE === 'DEVELOPMENT'
    ? ['http://localhost:3000',"http://127.0.0:3000"]
    : ['production client url'];



    app.use(cors())
app.use('/api',routes)

// const fileStorageEngine =multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./public/uploads')
//     },
//     filename:(req,file,cb)=>{
//         cb(null, Date.now()+"--"+file.originalname)
//     }
// })

const storage=multer.memoryStorage()
const upload =multer({storage})

app.post("/single",upload.single('image'),picCompress)

app.post("/multiple",upload.array('images',2),(req,res)=>{
    console.log(req.files)
    console.log(req.body.name)

    res.send("multiple image added successfully")
})



app.use((req,res,next)=>{

    let er = "undefined path error"
    next({
        er:er,
        status:404
    })
})

app.use((error,req,res,next)=>{

    let status=error.status||500
    let erro = error.er||null

    res.status(status).json({
        error:erro
    })
})


const PORT = process.env.PORT;
console.log(PORT)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

