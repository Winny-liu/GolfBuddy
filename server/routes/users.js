const express = require("express");

const router = express.Router();

const {
  addUser,
  getUser,
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
