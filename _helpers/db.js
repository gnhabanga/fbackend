const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB connection string
const uri =
  "mongodb+srv://gladston:Gladston2@cluster0.jyxsh90.mongodb.net/firstDB?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the client
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  // If connection is successful
  console.log("Connected to MongoDB");

  // Get a reference to the database
  const db = client.db("firstDB");

  // Perform database operations
  // ...

  // Close the connection when finished
  client.close();
});

module.exports = {
  User: require("../users/user.model"),
};
