const express = require("express");
const router = express.Router({ mergeParams: true }); // mergeParams: true is used to merge id ie. /listings/:id/reviews(parent) with /(child)
const Review = require("../models/review.js");
const listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const{validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js");

const reviewController = require("../controllers/reviews.js");



// reviews

router.post("/", isLoggedIn ,validateReview, wrapAsync(reviewController.createReview));

// delete reviews
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;