import multer from "multer";
// import pkg from "multer-gridfs-storage";

// const { GridFsStorage } = pkg;
import  GridFsStorage  from "multer-gridfs-storage";
//import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";
dotenv.config();

const storage = new GridFsStorage({
  
  url:  `mongodb+srv://touqeeransari:Ansari@cluster0.ucoo2jo.mongodb.net/?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
