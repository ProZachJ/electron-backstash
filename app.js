'use strict'
const Backbone = require('backbone')

const Hello = Backbone.View.extend({
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.append('<h1>Here we have rendered a backbone view.</h1>')
  }
})

new Hello({el: document.querySelector('.container')})
