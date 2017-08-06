'use strict'
const $ = require('jquery')
const Hello = require('./views/Hello.js')
const Sidebar = require('./views/Sidebar.js')

var Greeter = require('./models/Greeter.js')

module.exports = function () {
  new Sidebar({
    el: $('.sidebar')
  })

  new Hello({
    el: $('.container'),
    model: new Greeter()
  })
}
