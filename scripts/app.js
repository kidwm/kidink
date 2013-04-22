define([
  'router'
], function(
  Router
) {
  'use strict';
  var App = {};
  App.start = function() {
    App.router = new Router;
    //Backbone.history.start();
    Backbone.history.start({ pushState: true });
  };
  return App;
});