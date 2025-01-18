// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Schema and Model
const feedItemSchema = new mongoose.Schema({
  title: String,
  hashtags: [String],
  readTime: Number,
  image: String,
});

const FeedItem = mongoose.model("FeedItem", feedItemSchema);

// API Routes

// GET /api/feed - Retrieve all feed items
app.get("/api/feed", async (req, res) => {
  try {
    const feedItems = await FeedItem.find();
    res.json(feedItems);
  } catch (error) {
    console.error("Error fetching feed items:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST /api/feed - Create a new feed item
app.post("/api/feed", async (req, res) => {
  const { title, hashtags, readTime, image } = req.body;

  try {
    const newFeedItem = new FeedItem({ title, hashtags, readTime, image });
    const savedItem = await newFeedItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error creating feed item:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
