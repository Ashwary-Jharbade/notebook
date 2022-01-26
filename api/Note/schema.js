const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    title: { type: String, required: true },
    userId: { type: String, required: true },
    tags: [String],
    location: {
      type: { type: String },
      coordinates: [Number],
      required: false,
    },
    content: { type: String, required: false, text: true },
    category: { type: String, required: false },
    thumbnails: [
      {
        path: { type: String, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        deviceType: {
          type: String,
          required: false,
          enum: ["web", "mobile", "tablet"],
        },
      },
    ],
    isPrivate: { type: Boolean, required: false, default: true },
    contributors: [
      {
        userId: { type: String, required: true, unique: true },
        userAccess: {
          type: String,
          required: true,
          enum: ["viewer", "editor"],
          default: "viewer",
        },
      },
    ],
    noteBookId: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
  },
  { timestamps: true }
);

const Note = Mongoose.model("note", schema);
module.exports = Note;
