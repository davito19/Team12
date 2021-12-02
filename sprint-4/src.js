const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get(/api/air-quality/aqi-ranges, (req, res)=> {
console.log("aqi-ranges")
res.status().json
});

app.post(/api/air-quality/aqi-ranges, (req, res)=>{
//range creation
});

app.get(
    /api/air-quality/limits,
    //retorna los limites
);
app.listen(3001)

module.exports=app;