const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    location: {
      type: { type: String },
      coordinates: [Number],
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    thumbnails: [
      {
        path: { type: String, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        deviceType: {
          type: String,
          required: true,
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
        },
      },
    ],
    notes: [
      {
        noteId: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
    tags: [String],
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamp: true,
  }
);

const NoteBook = Mongoose.model("notebook", schema);
module.exports = NoteBook;
