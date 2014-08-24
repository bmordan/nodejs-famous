/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine')
    var View = require('famous/core/View')
    var Modifier = require('famous/core/Modifier')
    var Transform = require('famous/core/Transform')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    
    var mainContext = Engine.createContext()
    
    function _createBrick(){
      var brick = new View()
      var brickMod = new Modifier({
        origin: [0.5,0.5],
        align: [0.5,0.5]
      })
      var brickSurface = new ImageSurface({
        size: [200,200],
        content: 'content/images/2.png'
      })
      brick.add(brickMod).add(brickSurface)
      return mainContext.add(brick)
    }
    
    _createBrick()
    
});
