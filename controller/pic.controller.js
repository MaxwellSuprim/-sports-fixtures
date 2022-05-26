
import sharp from "sharp";
export const picCompress=(req,res,next)=>{

    console.log("hello pic")
    sharp('../public/uploads/abc.png')
  .resize(320, 240)
  .toFile('output.webp', (err, info) => {console.log(err) });
}