const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/air-quality/aqi-ranges', (req, res)=> {
  res.json(aqi_ranges)
});

app.post('/api/air-quality/aqi-ranges', (req, res)=>{
  var ranges = req.body;
  aqi_ranges.push(ranges);
  res.json(aqi_ranges)
});

app.get('/api/air-quality/limits', (req, res)=>{
  res.json(limits)
});

module.exports=app;