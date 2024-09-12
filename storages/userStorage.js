let userID = 0;
const users={}
const userStorage = function () {
  
  const addUser = ({ firstName, lastName }) => {
    id=userID++
    users[id]={id,firstName,lastName}
  }

  const getUsersList = () => {
    return Object.values(users);
  }

  const deleteUser = (id) => {
    delete users[id]
  }
  const updateUser = (id,firstName,lastName) => {
    users[id]={id,firstName,lastName}
  }


  return {addUser,getUsersList,deleteUser,updateUser}
}
const newUser = userStorage();
newUser.addUser({ firstName: "minzo", lastName: "ben" })
newUser.addUser({ firstName: "minzosd", lastName: "benfs" });
// newUser.deleteUser(0)
// newUser.updateUser(0, "up", "dated");

// a = newUser.getUsersList()
// a

module.exports = newUser;
