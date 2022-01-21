const mongoose = require("mongoose");

const ModelsSauce = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  heat: { type: Number, required: true },
  userId: { type: String, required: true },
  imageUrl: { type: String },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: { type: ["String <userId>"] },
  usersdisLiked: { type: ["String <userId>"] },
});

module.exports = mongoose.model("ModelsSauce", ModelsSauce);
