const express = require('express')
require("dotenv").config();
const cors = require("cors")
const path = require("path")
const connectDb = require("./config/db")
const app = express()
connectDb();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")))
const port= process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/api/users', usersHandler)

// const usersHandler = (req, res) => {
//   res.send('Hello user!')
// }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
