define([
  'showdown'
], function(
  Showdown
) {
  'use strict';
  var Converter = new Showdown.converter();
  Converter.render = Converter.makeHtml;
  return Converter;
});