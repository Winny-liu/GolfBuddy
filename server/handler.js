"use strict";
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//just incase I need it later
const { v4: uuidv4 } = require("uuid");
//importing standard stuff
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// api functions
////////////////////////////////////////////////////////////////////////////

// post newuser information
const addUser = async (req, res) => {
  const _id = uuidv4();
  const { name, email, password, age, gender, handicap, zipCode } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    !age ||
    !gender ||
    !handicap ||
    !zipCode
  ) {
    res.status(400).json({
      status: "error",
      message: "Some info is missing, please fill all fields.",
    });
  } else if (!email.includes("@")) {
    res.status(400).json({
      status: "error",
      message: "Please provide a valid email address.",
    });
  }
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    let newUser = await db.collection("users").insertOne({ ...req.body, _id });
    res.status(200).json({ status: 200, data: newUser });
  } catch (err) {
    console.log(err),
      res.status(500).json({
        status: 500,
        message: "Something went wrong, please try again later.",
      });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

///login verifications
const getUser = async (req, res) => {
  const { password } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const user = await db.collection("users").findOne({ password });
    user
      ? res.status(200).json({ status: 200, data: user })
      : res.status(404).json({
          status: 404,
          data: "Incorrect user",
        });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getUserByName = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ name });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "name not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getUserByGender = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ name });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "name not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getUserByHandicap = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ name });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "name not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getUserByZipCode = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ name });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "name not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

// post a new post

const addPost = async (req, res) => {
  const _id = uuidv4();
  const { name, golfCourse, teeTime, placesOfOping, email } = req.body;
  if (!name || !golfCourse || !teeTime || !placesOfOping || !email) {
    res.status(400).json({
      status: "error",
      message: "Some info is missing, please fill all fields.",
    });
  } else if (!email.includes("@")) {
    res.status(400).json({
      status: "error",
      message: "Please provide a valid email address.",
    });
  }
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    let newPost = await db.collection("posts").insertOne({ ...req.body, _id });
    res.status(200).json({ status: 200, data: newPost });
  } catch (err) {
    console.log(err),
      res.status(500).json({
        status: 500,
        message: "Something went wrong, please try again later.",
      });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

//get all the posts
const getPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");

    const allPosts = await db.collection("posts").find().toArray();
    console.log(allPosts);
    allPosts
      ? res.status(200).json({ status: 200, data: allCategories })
      : res.status(404).json({ status: 404, data: "post not found" });
    client.close();
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  }
};
//get post by name
const getPostByName = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("posts").findOne({ name });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "Posts not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getPostByTeeTime = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("posts").findOne({ teetime });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "Posts not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const getPostByGolfCourse = async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("posts").findOne({ golfcourse });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: "Posts not found" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

//////////////////////////////////////////////////////////////////////////
module.exports = {
  addUser,
  getUser,
  getUserByName,
  getUserByGender,
  getUserByZipCode,
  getUserByHandicap,
  getPosts,
  addPost,
  getPostByName,
  getPostByTeeTime,
  getPostByGolfCourse,
};
