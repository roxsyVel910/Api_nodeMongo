require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))
const port = process.env.PORT || 8002
/**
 ** ROUTES **/
app.use("/api/tracks", require('./routes/tracks'))
app.use("/api/storage", require('./routes/storage'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
dbConnect()