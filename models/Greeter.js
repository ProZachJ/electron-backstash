const Backbone = require('Backbone')

module.exports = Backbone.Model.extend({
  defaults: {
    'greeted': false,
    b: 'backbone',
    m: 'mustache'
  }
})
