const express = require("express");
const app = express();
app.use(express.json());

let users = [
    {id:1, firstName:'sai',lastName:'yadav',email:'sai@123.com'},
    {id:2,firstName:'krishna',lastName:'yadav',email:'krishna@123.com'}
];

//get all users
app.get("/users", (request, response) => {
  response.json(users);
});

//Add new users 
app.post("/users",(request,response)=>{
  const newUser = {
    id: Date.now(),...request.body
  };
  users.push(newUser);
  response.json(newUser);
});

//update user 
app.put("/users/:id", (request,response) => {
  const id = parseInt(request.params.id);
  users = users.map(user => user.id === id? {...user,...request.body}: user);
  response.json({message: 'User Updated'});
});

//Delete user 
app.delete("/users/:id", (request,response) => {
  const id = parseInt(request.params.id);
  users = users.filter(user => user.id !== id);
  response.json({message:"User deleted"});
});

app.listen(3000,()=> console.log("Server running on port 3000"));