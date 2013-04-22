define([
    'backbone',
    'converter'
], function(
    Backbone,
    Converter
) {
  var Router = Backbone.Router.extend({
    routes: {
        '*path': 'open'
    },

    initialize: function() {
        var self = this;
        self.title = document.title;
        if ($('#content').hasClass('hidden')) {
            this.content = $('#content').html();
        }
        $('body').on('click', 'a[href^="/"]', function(event) {
            event.preventDefault();
            var dest = $(this).attr('href');
            if (dest.length > 1) {
                self.navigate(dest, {trigger: true});
            } else {
                window.location.replace('/');
            }
        });
    },
      
    open: function(path) {
        var self = this;
        if (path && path != '404.html') {
            $.get('/contents/' + path + '.md')
            .done(function(data) {
                if (/^\<\!doctype\ html\>/i.test(data)) { // when get the 404.html
                    $('#content').show(); // show the not found message 
                } else {
                    $('#content').html(Converter.render(data)).show();
                    var title = $('#content h1').first().text();
                    if (title)
                        document.title = title + ' - ' + self.title;
                    else
                        document.title = self.title;
                }
            })
            .fail(function() {
                window.location.replace('/404.html');
            });
        } else {
            $('#content').show();
        }
    }
  });
  return Router;
});