define(function(require, exports, module) {
  var port = 1338
  var host = '192.168.1.12'
  var dgram = require('udp')
  var client = dgram.createSocket('udp4')
  function send(packet) {
    var p = new Buffer(packet)
    client.send(p, 0, p.length, port, host, function(err, bytes) {
    if (err) throw err
      console.log('UDP message sent to ' + host +':'+ port);
    })
  }
  module.exports = send
})