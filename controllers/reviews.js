const Review = require("../models/review.js");
const listing = require("../models/listing.js");

module.exports.createReview  = async (req, res) => {
        let foundListing = await listing.findById(req.params.id);
        let newReview = new Review(req.body.review);
        newReview.author = req.user._id;
        foundListing.reviews.push(newReview);
        await newReview.save();

        // ✅ push ObjectId instead of whole doc
        
        await foundListing.save();
        req.flash("success"," New review created");
        res.redirect(`/listings/${foundListing._id}`);
};

module.exports.destroyReview = async(req, res)=>{
    let {id, reviewId}= req.params;

    await listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted");
    res.redirect(`/listings/${id}`);
};