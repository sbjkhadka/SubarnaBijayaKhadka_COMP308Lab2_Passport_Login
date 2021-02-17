// Load mongoose model and schema object
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define a new user schema
const StudentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    validate: [(password) => password.length >= 8, "at least 8 characters"],
  },
  major: String,
  minor: String,
});

mongoose.model("Student", StudentSchema);
