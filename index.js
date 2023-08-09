var express = require ("express");
var bodyparser = require ("body-parser")

var app = express();
app.use(express.json());
app.use(bodyparser.json({limit : '50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb', extended:true}));
app.use(express.static("assets"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS"){
        res.header("Access-Control-Aallow-Methods", "GET, PUT, POST, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.get("/", (req,res)=>{
    res.end("Welcome To LMS Back End");
 });

 app.use("/product", require("./routes/product"));

 app.listen(8081, ()=>{
    console.log("API Project Is Running On http://localhost:8081");
});