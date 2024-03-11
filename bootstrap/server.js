var module = require("./dbmodule");
var url = require("url");
var querystring = require("querystring");
var http = require("http");

http
  .createServer(function (request, response) {
    var data1 = "";

    request.on("data", function (chunk) {
      data1 += chunk;
    });

    request.on("end", function () {
      var phno = querystring.parse(data1)["phno"];
      console.log(phno);
      var fname = querystring.parse(data1)["fname"];
      console.log(fname);
      var lname = querystring.parse(data1)["lname"];
      console.log(lname);
      var password = querystring.parse(data1)["password"];
      var email = querystring.parse(data1)["email"];
      console.log(email);
      var password = querystring.parse(data1)["password"];
      console.log(password);
      var password1 = querystring.parse(data1)["password1"];
      console.log(password1);

      if (request.url === "/login") {
        module.authenticateUser(email, password, response);
      } else if (request.url === "/save") {
        module.saveUser(phno, fname, lname ,email,password, password1, response);
      }
    });
  })
  .listen(3000);
console.log("Server started");

