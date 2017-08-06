'use strict'
const Backbone = require('backbone')
const Mustache = require('mustache')
const fs = require('fs')
const path = require('path')

module.exports = Backbone.View.extend({
  initialize: function () {
    this.template = fs.readFileSync(path.join(__dirname, 'sidebar.html'), {encoding: 'utf8'})
    this.render()
  },
  render: function () {
    this.$el.append(this.template)
  }
})
