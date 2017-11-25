const express = require('express')
const app = express()

app.use(express.static('./server/public'))

app.get('/', (req, res) => {
  res.send(response)
})

app.listen('3000', console.log('listening'))
