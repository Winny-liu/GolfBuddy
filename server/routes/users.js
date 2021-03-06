const express = require("express");
const bycrype = require("bcrypt")

const router = express.Router();

const {
  addUser,
  getUser,
  getUsers,
  getUsersByName,
  getUserByGender,
  getUserByZipCode,
  getUserByHandicap,
} = require("../handlers");

/////////////////////////////////////////////////////////////////////////////

// add new users to db after signup process is successfull
router.post("/api/signup", addUser);

//get user at login
router.post("/api/signin", getUser);

//get all users
router.get("/api/users/:password", getUser);

router.get("/api/users", getUsers);

//get user by name
router.get("/api/users/:name", getUsersByName);

//get user by gender
router.get("/api/users/:gender", getUserByGender);

//get user by gender
router.get("/api/users/:handicap", getUserByHandicap);

//get user by gender
router.get("/api/users/:zipCode", getUserByZipCode);

module.exports = router;
/////////////////////////////////////////////////////////////////////////////
