'use strict'
const $ = require('jquery')
const Hello = require('./views/Hello.js')

var Greeter = require('./models/Greeter.js')

new Hello({
  el: $('.container'),
  model: new Greeter()
})
