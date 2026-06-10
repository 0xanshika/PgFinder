const listing = require("../models/listing");
const  maptiler = require("@maptiler/client");
maptiler.config.apiKey = process.env.MAP_TOKEN;
// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = new maptiler({ apiKey: mapToken });


module.exports.index = async (req, res) => {
    let { search } = req.query;

    let allListings;

    if (search && search.trim() !== "") {
        allListings = await listing.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } }
            ]
        });
    } else {
        allListings = await listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm =  (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListings = async(req,res)=>{
    const {id}= req.params;
    const Listing = await listing.findById(id).populate({path: "reviews",
        populate:{
            path: "author",
        }
}).populate("owner");
    //this will show all data of reviews
    if(!Listing){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{Listing});
};

module.exports.createListing = async(req,res,next)=>{
    const response = await maptiler.geocoding.forward(req.body.listing.location, { limit: 1 });

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image ={url, filename};
    newListing.geometry = response.features[0].geometry;

    let savedListings = await newListing.save();
    console.log(savedListings);

    req.flash("success"," New listing created");
    res.redirect("/listings");
    
};

module.exports.renderEditForm = async(req,res)=>{
    let {id}= req.params;
    const Listing = await listing.findById(id);
    if(!Listing){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    let orignalImageUrl  = Listing.image.url;
    orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs",{Listing, orignalImageUrl});
};
// module.exports.updateListing = async(req,res)=>{
//     let {id}= req.params;
//     let updatedListing = await listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
//     if(typeof req.file !== "undefined"){
//         let url = req.file.path;
//         let filename = req.file.filename;

//         updatedListing.image = {url, filename};
//         await updatedListing.save();
//     }
//     req.flash("success","Listing updated");
//     res.redirect(`/listings/${id}`);
// };

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body.listing };

  // 🗺️ If the user updated the location, geocode it again
  if (req.body.listing.location) {
    const response = await maptiler.geocoding.forward(req.body.listing.location, { limit: 1 });

    if (response && response.features && response.features.length > 0) {
      updatedData.geometry = response.features[0].geometry;
    }
  }

  // 🖼️ If a new image was uploaded, replace the old one
  if (typeof req.file !== "undefined") {
    updatedData.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  // 🧩 Update listing safely
  const updatedListing = await listing.findByIdAndUpdate(id, updatedData, { new: true });

  req.flash("success", "Listing updated successfully!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async(req,res)=>{
    let {id}= req.params;
    let deletedListing= await listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");

};
