const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "please provide company name"],
      maxLength: 50,
    },
    designation: {
      type: String,
      required: [true, "please provide company designation"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      requires: [true, "please provide author"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
