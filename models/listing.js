const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title:{
        type:String,
        // required: true,
    },
    description:{
        type:String,
        // required: true,
    },
    image: {
      url: String,
      filename: String,       
    },
     price: Number,
    location: String,
    country: String,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Review"
      }
    ],
    owner: [
      {
        type: Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  category: {
    type : String,
    enum: ["trending", "rooms", "cities", "mountains", "castles", "pools", "camping", "farms", "arctic"],
    required: true
  }
});

// post mongoose middleware
// maily used to delete reviews form data base also...whwn list is deleted ther reviews also deleted
listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in: listing.reviews}});
  }
})

const listing = mongoose.model("listing", listingSchema);

module.exports = listing;