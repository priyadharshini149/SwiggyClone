const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const fetch = require("cross-fetch");

const app = express();
app.use(cors({origin: '*'}));
const router = express.Router();

const SWIGGY_API_URL = "https://www.swiggy.com/dapi";

router.get('/',(req,res)=>{
  res.send('app is running')
})

router.get('/restaurants', (req, res) => {
  console.log("request recieved");
  const url = `${SWIGGY_API_URL}/restaurants/list/v5?lat=11.0261194&lng=77.0191128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});


router.get('/restoMenu', (req, res) => {
  console.log("request recieved :menu");
  console.log(req.query);
  const {id}=req.query;
  const url = `${SWIGGY_API_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0261194&lng=77.0191128&restaurantId=${id}`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});
router.get('/restoCollection', (req, res) => {
  console.log("request recieved :menu");
  console.log(req.query);
  const {id ,title}=req.query;
  const url = `${SWIGGY_API_URL}/restaurants/list/v5?lat=11.0394444&lng=77.0401709&collection=${id}&tags=layout_CCS_${title}&type=rcv2`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});

app.use(`/api/`, router);


module.exports = app;
module.exports.handler = serverless(app);
