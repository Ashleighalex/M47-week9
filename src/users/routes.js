const {Router} = require("express");
// This imports just the Router method from the express library
const userRouter = Router();
// This renames Router to be userRouter

const {registerUser, login, readUsers, updateUser, deleteUser} = require("./controllers");
const { hashThePassword, comparePasswords, validateEmail, tokenCheck } = require ("../middleware")

//CREATE

//TODO: Email validation middleware added to the register route
userRouter.post("/users/register", validateEmail, hashThePassword, registerUser);
// Creates the end point /users/register for a HTTP POST request and causes it to run registerUser

// this is the login function for after an account has been created
userRouter.post("/users/login", comparePasswords, login)

// READ - This allows you to view what users are stored in the database
userRouter.get("/users/readUsers", readUsers) // protected route

//UPDATE - this allows the update of the users data
userRouter.put("/users/update", updateUser)

//DELETE - This function allows you to remove data if needed
userRouter.delete("/users/delete", deleteUser)


module.exports = userRouter;