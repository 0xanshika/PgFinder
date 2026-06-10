const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});




// Index Route and create route 
router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
);

// new  Route
router.get("/new",isLoggedIn, listingController.renderNewForm);

// show route and update route and delete route
router
    .route("/:id")
    .get(wrapAsync(listingController.showListings))
    .put(isLoggedIn,
        isOwner,
        upload.single("image"),
        validateListing, 
        wrapAsync(listingController.updateListing) )
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// edit route
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.renderEditForm));
// category 
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const listings = await listing.find({ category });
  res.render("listings/index.ejs", { allListings: listings, category });
});


module.exports = router;