'use strict'
const $ = require('jquery')
const Backbone = require('backbone')
const Mustache = require('mustache')

const Hello = Backbone.View.extend({
  initialize: function () {
    this.render()
  },
  render: function () {
    const data = { b: 'backbone', m: 'mustache' }
    this.$el.append(Mustache.render('<h1>Here we have rendered a {{m}} template in a {{b}} view.</h1>', data))
  }
})

new Hello({el: $('.container')})
