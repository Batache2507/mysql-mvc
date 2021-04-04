//import de la classe userModel
let User = require('../models/userModel');

//import de la connection à la base de données 
let connection = require('../db');


exports.userList = function (request, response) {
    connection.query("SELECT * FROM user;", function(error, result) {
        if (error) console(error);
        response.render('userList.ejs', {users: result});
    });
}; 

exports.userFormNew = function(request, response) {
    response.render("userAdd.ejs");
}

exports.userNew = function (request, response) {
    let user  = {"first_name":request.body.first_name, "last_name":request.body.last_name};
    connection.query("INSERT INTO user SET ? ", user , function(error, result) {
        if (error) console.log(error);
        response.redirect('/user');
    });
}

exports.userFormUpdate = function (request, response) {
    let i = request.params.i; 
    connection.query("SELECT * FROM user WHERE user_id = ?", i,  function(error, result) {
          if (error) console.log(error);
          response.render("userUpdate.ejs", {"user_id": result[0].user_id, "first_name": result[0].first_name, "last_name": result[0].last_name});
      });
  }

  exports.userUpdate = function (request, response) {
    let i = request.body.user_id; 
    let user = {"first_name":request.body.first_name, "last_name":request.body.last_name};
    connection.query("UPDATE user SET ? WHERE user_id = ?", [user, i], function(error, result) {
        if (error) console.log(error);
        response.redirect('/user');
    });
}

exports.userDelete = function (request, response) {
    let i = request.params.i; 
    connection.query("DELETE FROM user WHERE user_id = ?", i,  function(error, result) {
          if (error) console.log(error);
          response.redirect('/user');
      });
  }


