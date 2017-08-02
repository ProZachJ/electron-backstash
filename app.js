$ = require('jquery');
_ = require('underscore');
Backbone = require('backbone');

var clientForm = Backbone.View.extend({
    initialize: function(){
        this.$el.children().remove();
        this.render();
    },
    render: function(){
        this.$el.append("<h1>H1!</h1>");
    }
});
var form = new clientForm({el:$(".container")});