require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
const port = process.env.PORT || 8002
/**
 ** ROUTES **/
app.use("/api/tracks", require('./routes/tracks'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
dbConnect()