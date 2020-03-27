'use strict'

const express = require('express')
const app = express()
const portForDev = 4000

//app.set('trust proxy', 1)

app.set('port', process.env.PORT || portForDev)

app.disable('x-powered-by')

app.get('/',(req, res) => {
  res.send('Network Test' + req.ip)
  console.log(req.ip)
  console.log(req.ips)
})

// サーバを立てる
app.listen(app.get('port'), () => {
  console.log('■■■ Main server listening on: http://localhost:' + app.get('port'))
})
