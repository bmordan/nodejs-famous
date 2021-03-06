/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var SockJS = require('sockjs')
    var Engine = require('famous/core/Engine')
    var View = require('famous/core/View')
    var Modifier = require('famous/core/Modifier')
    var StateModifier = require('famous/modifiers/StateModifier')
    var Transform = require('famous/core/Transform')
    var Surface = require('famous/core/Surface')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    var TouchSync = require('famous/inputs/TouchSync')
    var MouseSync = require('famous/inputs/MouseSync')
    var GenericSync = require('famous/inputs/GenericSync')
    GenericSync.register({
      "mouse" : MouseSync,
      "touch" : TouchSync
    })
    // create socket
    var sock = new SockJS('http://192.168.1.10:9000/echo')
    sock.onopen = function() {
        console.log('open')
    }
    sock.onmessage = function(e) {
        console.log('message', e.data)
    }
    sock.onclose = function() {
        console.log('close')
    }
    // setup
    
    var mainContext = Engine.createContext()
    var sync = new GenericSync({
      "mouse" : {},
      "touch" : {}
    })
    var position = [0,0]
    // helper functions
    function _createBrick(){
      var brick = new View()
      var brickMod = new Modifier({
        origin: [0.5,0.5],
        align: [0.5,0.5],
        transform: function(){
          return Transform.translate(position[0], position[1], 0)
        }
      })
      var brickSurface = new ImageSurface({
        size: [200,200],
        content: 'content/images/2.png'
      })
      // events
      brickSurface.pipe(sync)
      sync.on('update', function(data){
        position[0] += data.delta[0]
        console.log(position[0])
      })
      sync.on('end', function(data){ 
        var min = 0 - mainContext.getSize()[0]/2
        var max = mainContext.getSize()[0]/2
        if(position[0] < min) position[0] = min+75
        if(position[0] > max) position[0] = max-75
      })
      // add to the render tree
      brick.add(brickMod).add(brickSurface)
      mainContext.add(brick)
    }
    
    _createBrick()
});
