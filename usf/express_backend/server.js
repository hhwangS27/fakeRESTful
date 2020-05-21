import express from "express";
import bodyParser from "body-parser";
import fs from "fs";//for reading file
import path from "path";//for path manipulation

const app = express();

app.use(bodyParser.json())

//cors setting
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //allow all source request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //allowed methods
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/api/', (req, res)=>{
  const filePath = path.join(__dirname, '../data/list_chair.json');
  fs.readFile(filePath, "utf-8", (err, data)=>{
    if(err){
      res.send("file reading error");
    } else {
      res.send(data)
    }
  })
})

app.listen(4000, ()=>{
  console.log("app is listning to port 4000")
})