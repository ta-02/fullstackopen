const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// const url = `mongodb+srv://Talal:${password}@cluster0.6ksv5fc.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`;
const url = process.env.MONGODB_URL;

console.log("connecting to", url);
mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
