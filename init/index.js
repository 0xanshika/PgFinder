const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: "../.env" });

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to database.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68cacd916f4dec9ac9392ef4",
  }));

  await Listing.insertMany(initData.data);

  console.log("data was initialized");
};

initDB();