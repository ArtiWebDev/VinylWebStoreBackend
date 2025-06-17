const mongoose = require('mongoose')

const vinylSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      //  required: true,
    },
    // Genre
    category: {
      type: String,
      //  required: true,
    },
    // label: {
    //   type: String,
    //   required: true,
    // },
    trending: {
      type: Boolean,
      // required: true,
    },
    coverImage: {
      type: String,
      // required: true,
    },
    oldPrice: {
      type: Number,
      //required: true,
    },
    newPrice: {
      type: Number,
      // required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const Vinyl = mongoose.model('vinylSchema', vinylSchema)

module.exports = Vinyl
