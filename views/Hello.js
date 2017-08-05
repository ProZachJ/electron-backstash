'use strict'
const Backbone = require('backbone')
const Mustache = require('mustache')
const fs = require('fs')

module.exports = Backbone.View.extend({
  events: {
    'click #greet': 'greet'
  },
  initialize: function () {
    this.template = fs.readFileSync('templates/hello.html', {encoding: 'utf8'})
    this.render()
  },
  render: function () {
    this.$el.html(Mustache.render(this.template, this.model.attributes))
  },
  greet: function () {
    this.model.set({'greeted': !this.model.get('greeted')})
    this.render()
  }
})
