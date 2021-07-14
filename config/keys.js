const mongoose = require('mongoose');

const URI = 'mongodb+srv://brad:brad123@cluster0.paci8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  console.log('db connected..!');
};

module.exports = connectDB;
