const express = require('express')
const router = express.Router()
const axios = require("axios");

router.get('/', (req, res)=>{
	axios
		.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
		.then(data=>{
			res.status(200).json({
				items: data.response.items
			})
		})
		.catch(err=>{
			res.status(500).json({
				errors: err.message
			})
		})
})

module.exports = router

