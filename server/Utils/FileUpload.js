import multer from "multer";
import path from "path";
import fs from "fs"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let filepath = "public/uploads";
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(filepath, { recursive: true });
    }
    cb(null, filepath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    let filename = path.basename(file.originalname, ext);

    filename += Date.now() + ext;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpeg|JPEG|jpg|JPG|png|PNG|gif|GIF|svg|SVG)$/)) {
    return cb(new Error("Invalid image files format!"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 20000000, // 20 MB limit
  },
});

export default upload;
