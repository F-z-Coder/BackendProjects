// create server with express modules
const Express=require('express');
const Path=require("path")
const app=Express();
app.listen(80,()=>{
    console.log("server start listening....");
});

app.use(Express.static("./public"));


// app.get("/",(req,res)=>{
//     res.status(200).sendFile(Path.resolve("index.html"));
// });
app.all("*",(req,res)=>{
    res.status(404).send(" resources not found")
})