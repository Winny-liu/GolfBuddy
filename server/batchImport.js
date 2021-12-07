let fs = require("file-system");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const posts = JSON.parse(fs.readFileSync("./data/posts.json"));
const users = JSON.parse(fs.readFileSync("./data/users.json"));

const batchImport = async () => {
  try {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
    console.log(MONGO_URI);

    // connect to the client
    await client.connect();

    const db = client.db("Golfbuddy");

    await db.collection("posts").insertMany(posts);
    await db.collection("users").insertMany(users);

    client.close();
    console.log("success");
  } catch (err) {
    console.log("error");
    console.log(err);
  }

  console.log("client closed");
};

batchImport();
