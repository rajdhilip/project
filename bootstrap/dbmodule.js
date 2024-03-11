var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function (phno, password, response) {
  db.users.find(
    {
      phoneno: phno,
      password: password,
    },
    function (err, users) {
      if (err || !users) {
        response.write("Not authorized user");
        response.end();
      } else if (users.length == 0) {
        response.write("Not authorized user");
        response.end();
      } else {
        response.write("Authorized user");
        response.end();
      }
    }
  );
};

exports.saveUser = function (phno,fname, lname,email, password, password1, response) {
  console.log("Saving user to mongo");
  db.users.insert(
    {
        phno: phno,
        firstname: fname,
        lastname:lname,
        email: email,
        password: password,
        Confirmpassword: password1,
    },
    function (err, saved) {
      if (err || !saved) console.log(err);
      else response.write("User Saved");
      response.end();
    }
  );
};

