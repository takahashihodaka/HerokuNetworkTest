const router = require('express').Router()

router.get('/',(req, res) => {
  res.send('Network Test' + req.ip)
  console.log(req.ip)
  console.log(req.ips)
})

module.exports = router