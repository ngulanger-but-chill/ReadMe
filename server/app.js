if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const router = require('./routes/index.js')
const cors = require('cors')
const error = require('./middlewares/errorHandler.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(error)

app.listen(PORT, () => {
    console.log(`Connecting to PORT ${PORT}`);
})

