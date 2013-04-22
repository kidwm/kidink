require({
  paths: {
    jquery: 'lib/jquery-2.0.0.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
	showdown: 'lib/showdown'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
	'showdown': {
		exports: 'Showdown'
	}
  }
}, [
  'app'
  ], function(
    App
  ) {
    App.start();
});
