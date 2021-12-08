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
    return res.status(500).json({
      status: "error",
      message: "Some info is missing, please fill all fields.",
    });
  } else if (!email.includes("@")) {
    return res.status(500).json({
      status: "error",
      message: "Please provide a valid email address.",
    });
  }
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");

    let existUser = await db.collection("users").findOne({ email });
    console.log(existUser);
    if (existUser) {
      return res.status(500).json({
        status: "error",
        message: " email address already exist.",
      });
    }

    let newUser = await db.collection("users").insertOne({ ...req.body });
    console.log(newUser);
    if (newUser.acknowledged && newUser.insertedId) {
      return res
        .status(201)
        .json({
          status: 201,
          user: { name, email, age, gender, handicap, zipCode },
        });
    } else {
      return res.status(500).json({
        status: "error",
        message: " Fail to create new user.",
      });
    }
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
  const { email } = req.body;

  //let result = users.find((user) => user.email == req.body.email);
  // if (result) {
  // if (result.password == req.body.password) {
  //  res.status(201).json({
  //  message: "Successful singin",
  // });
  //} else {
  // res.status(500).json({
  //   status: 500,
  //   message: "Something went wrong, please try again later",
  // });
  //  }
  // }
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const user = await db.collection("users").findOne({ email });
    console.log(user);
    user
      ? res.status(200).json({ status: 200, data: user })
      : res.status(500).json({
          status: 500,
          data: " user not exist",
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

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");

    const allUsers = await db.collection("users").find().toArray();
    console.log(allUsers);
    allUsers
      ? res.status(200).json({ status: 200, data: allUsers })
      : res.status(404).json({ status: 404, data: "users not found" });
    client.close();
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later.",
    });
  }
};

const getUsersByName = async (req, res) => {
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
  const { gender } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ gender });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: " not found" });
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
  const { handicap } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ handicap });
    results
      ? res.status(200).json({ status: 200, data: results })
      : res.status(404).json({ status: 404, data: " not found" });
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
  const { zipCode } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("users").findOne({ zipCode });
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
  const { golfCourse, teeTime, date, description } = req.body;
  if (!date || !golfCourse || !teeTime || !description) {
    return res.status(500).json({
      status: "error",
      message: "Some info is missing, please fill all fields.",
    });
  }
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    let newPost = await db.collection("posts").insertOne({ ...req.body, _id });
    res.status(201).json({ status: 201, data: newPost });
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
      ? res.status(200).json({ status: 200, data: allPosts })
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
  const { teeTime } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("posts").findOne({ teeTime });
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
  const { golfCourse } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Golfbuddy");
    const results = await db.collection("posts").findOne({ golfCourse });
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
  getUsers,
  getUsersByName,
  getUserByGender,
  getUserByZipCode,
  getUserByHandicap,
  getPosts,
  addPost,
  getPostByName,
  getPostByTeeTime,
  getPostByGolfCourse,
};
