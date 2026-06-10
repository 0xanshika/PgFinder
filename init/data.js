const sampleListings = [
  {
    title: "Affordable PG Near Delhi University",
    description: "Comfortable PG with WiFi, food, laundry, and study area near college campus.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "North Campus, Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139],
    },
    category: "trending",
  },

  {
    title: "Boys PG in Bangalore",
    description: "Modern boys PG with furnished rooms and high-speed WiFi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Koramangala, Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
    category: "cities",
  },

  {
    title: "AC Room PG in Pune",
    description: "Air-conditioned PG rooms with attached washroom and peaceful environment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Hinjewadi, Pune",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204],
    },
    category: "mountains",
  },

  {
    title: "Shared PG for Students",
    description: "Affordable shared PG with meals and daily housekeeping.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Laxmi Nagar, Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2794, 28.6304],
    },
    category: "castles",
  },

  {
    title: "Affordable Student Stay",
    description: "Budget-friendly PG near coaching institutes and metro station.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Mukherjee Nagar, Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2057, 28.7005],
    },
    category: "camping",
  },

  {
    title: "Popular Girls PG in Jaipur",
    description: "Safe girls PG with CCTV, meals, and furnished rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Vaishali Nagar, Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
    category: "trending",
  },

  {
    title: "AC PG Near IT Park",
    description: "Spacious AC rooms with food and laundry facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Electronic City, Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.6603, 12.8399],
    },
    category: "mountains",
  },

  {
    title: "Girls PG with Balcony",
    description: "Premium girls PG with attached washroom and balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "South Extension, Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2195, 28.5689],
    },
    category: "rooms",
  },

  {
    title: "Luxury Single Room PG",
    description: "Private single room PG with AC and smart furniture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Gurgaon Sector 45",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0266, 28.4595],
    },
    category: "arctic",
  },

  {
    title: "Single Room PG in Hyderabad",
    description: "Comfortable single occupancy room with study desk and WiFi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Madhapur, Hyderabad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.3913, 17.4483],
    },
    category: "farms",
  },
];

module.exports = { data: sampleListings };