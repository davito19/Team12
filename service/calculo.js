const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async (req, res, next) => {
    const response = await fetch('https://misiontic2022upb.vercel.app/api/air-quality/limits');
    const response2 = await fetch('https://misiontic2022upb.vercel.app/api/air-quality/aqi-ranges');
    const data = await response.json();
    const data2 = await response2.json();
    console.log(data);
    console.log(data2);
    res.json({Data: data, Data2: data2})
});

module.exports = router;

//Documentacion utilizada
//https://github.com/node-fetch/node-fetch#installation