const express = require("express");
const router = express.Router();
const settingModel = require("../models/settingSchema");
const multer = require("multer");
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");
// get All Images
router.get("/", async (req, res) => {
  const data = await settingModel.find();
  res.send(data);
});
// get image by Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const target = await settingModel.findOne({ _id: id });
    if (!target) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.json(target);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// post image
router.post("/", async (req, res) => {
  console.log(req.body);
  upload(req, res, (err) => {
    if (err) {
    } else {
      const newImage = new settingModel({
        image: {
          name: req.file.originalname,
          data: req.file.originalname,
          contentType: "image/png/jpg",
        },
        num: req.body.num,
      });
      newImage
        .save()
        .then(() => {
          res.send("image uploaded");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
});
// delete image
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await settingModel.findByIdAndDelete(id);
  res.send("Item Deleted");
});
// update image
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const target = await settingModel.findByIdAndUpdate(id, { ...req.body });
  res.send("Item Updated", target);
});

module.exports = router;
