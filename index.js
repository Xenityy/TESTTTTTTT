const express = require("express");//Set up the express module
const app = express();
const router = express.Router();
const path = require("path"); //Include the Path module <--

app.use(express.static(__dirname + "/public"));

//Set up the Express router
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.use("/", router);

//Navigate your website
router.get("/home", function(req, res){
  res.sendFile(path.join(__dirname, "views/index.html"));
});

router.get("/commands", function(req, res){
  res.sendFile(path.join(__dirname, "views/commands.html"));
});

router.get("/projects", function(req, res){
  res.sendFile(path.join(__dirname, "views/projects.html"));
});

router.get("/server", function(req, res){
  res.sendFile(path.join(__dirname, "views/server.html"));
});


//404 Error
app.use((req, res, next) => {
    res.status(404);
    res.sendFile(__dirname + "/views/404.html");
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});