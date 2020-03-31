'use strict'

const express = require('express')
const router = require('./router')
const app = express()
const portForDev = 4000

app.set('trust proxy', 1)

app.set('port', process.env.PORT || portForDev)

app.disable('x-powered-by')

app.use(router)

// サーバを立てる
app.listen(app.get('port'), () => {
  console.log('■■■ Main server listening on: http://localhost:' + app.get('port'))
})
