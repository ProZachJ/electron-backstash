'use strict'
const $ = require('jquery')
const {remote} = require('electron')
const {Menu,MenuItem} = remote

const Hello = require('./views/Hello.js')

var Greeter = require('./models/Greeter.js')

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function () {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function () {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))
new Hello({
  el: $('.container'),
  model: new Greeter()
})
