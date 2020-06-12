const express = require('express')
const router = express.Router()
const axios = require("axios");

router.get('/', (req, res) =>{
    axios
    .get({
        "method":"GET",
        "url":"https://twinword-word-graph-dictionary.p.rapidapi.com/definition/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"twinword-word-graph-dictionary.p.rapidapi.com",
        "x-rapidapi-key":"84a39a4595msh895ce1484c40affp1d89eajsn055f4da5f716",
        "useQueryString":true
        },"params":{
        "entry":"mask"
        }
    })
    .then((data)=>{
      res.status(200).json({
        meaning: data.meaning
      })
    })
    .catch((error)=>{
      res.status(500).json({
        errors: error.message
      })
    })
})

module.exports = router

