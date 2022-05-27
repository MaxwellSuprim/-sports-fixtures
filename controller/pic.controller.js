import sharp from "sharp"

export const picCompress=(req,res,next)=>{
    console.log('tala')
  console.log(req.file)
    console.log(process.cwd())
    sharp(req.file.buffer)
  .resize(320, 240)
  .toFile(`public/converted/${req.file.originalname}`, (err, info) => {console.log(err) });
    res.status(200).json("successfully converted")
}       