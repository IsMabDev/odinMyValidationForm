const users=require("../storages/userStorage")
exports.test = (req, res) => {
  res.send("this is the controller")
}

exports.testViews = (req, res) => {
  res.render("errors")
}

exports.usersListsGet = (req, res) => {
  res.render("index", { users: users.getUsersList() })
  
}

exports.addUserGet = (req, res) => {
  res.render("create")
}
exports.addUserPost = (req, res) => {
  users.addUser({firstName:req.body.firstName,lastName:req.body.lastName})
  res.redirect("/") 
}
exports.deleteUserPost = (req, res) => {
  users.deleteUser(req.params.id)
  console.log("users after delete", users.getUsersList());
  res.redirect("/")
}

exports.updateUserGet = (req, res) => {
  id = req.params.id;
  res.render("update", { user: users.getUsersList()[id] })
  // console.log('users.getUsersList() in get: ', users.getUsersList());
  console.log("user get ", req.params.id );
}

exports.updateUserPost = ( req, res)=> { 
  
  users.updateUser(req.params.id, req.body.firstName, req.body.lastName)
  console.log('user post ', users );
  res.redirect("/")
}