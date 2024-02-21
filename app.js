const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const port = 8000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})