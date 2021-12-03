const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/air-quality/aqi_ranges', (req, res)=> {
  console.log(req.body);
  console.log(req.params);
  var aqi_ranges = req.params.aqi_ranges
  res.sendFile('api ${req.params.aqi_ranges}').type('json');
});

app.post('/api/air-quality/aqi_ranges', (req, res)=>{
  console.log(req.body);
  console.log(req.params);
  res.sendFile('api ${req.params.aqi_ranges}').type('json')
});

app.get('/api/air-quality/limits', (req, res)=>{
  console.log(req.body);
  console.log(req.params);
  var limits = req.params.limits
  res.sendFile('api ${req.params.limits}').type('json')
});

module.exports=app;