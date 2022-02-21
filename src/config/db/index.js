const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/my_blog_dev');
    console.log('Connect to DB successfully!');
  } catch (error) {
    console.log('Connect to DB failure!');
  }
}

module.exports = { connect };
