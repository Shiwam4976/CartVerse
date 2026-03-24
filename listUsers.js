const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/amazonClone');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

async function listUsers() {
  try {
    const users = await User.find({});
    console.log('Users in database:');
    if (users.length === 0) {
      console.log('No users found.');
    } else {
      users.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
        // Password hidden for security
      });
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

listUsers();

