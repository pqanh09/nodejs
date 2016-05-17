//http://mongoosejs.com/docs/guide.html#versionKey


//Lets load the mongoose module in our program
var mongoose = require('mongoose');

// Connection URL
var url = 'mongodb://localhost:27017/database1';

//Lets connect to our database using the DB server URL.
mongoose.connect(url);

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Schema = mongoose.Schema;
var schema = new Schema({name: String, roles: Array, age: Number},
  { timestamps: { createdAt: 'created_at' }});

  //disable versionKey
  // schema.set('versionKey', false);

  //changing the version key
  schema.set('versionKey', 'version');
var User = mongoose.model('User', schema);


var moduluName = 'abc';
moduluName = moduluName.toUpperCase();
//Lets create a new user
var user1 = new User({name: moduluName, age: 42, roles: ['admin', 'moderator', 'user']});

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);
//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

// find & update

//Lets try to Find a user
User.findOne({name: moduluName}, function (err, userObj) {
  if (err) {
    console.log(err);
  } else if (userObj) {
    console.log('Found:', userObj);

    //For demo purposes lets update the user on condition.
    if (userObj.age != 30) {
      //Some demo manipulation
      userObj.age += 30;
      userObj.increment();
      //Lets save it
      userObj.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated', userObj);
        }
      });
    }
  } else {
    console.log('User not found!');
  }
});
