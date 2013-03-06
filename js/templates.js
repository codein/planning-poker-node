(function() {

  define([], function() {
    var Templates;
    return Templates = (function() {

      function Templates() {}

      Templates.getHomePage = function(data) {
        return "        <!DOCTYPE html>        <html>        <body>        <img src=\'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data + "\' alt=\'Smiley face\' width=\'150\' height=\'150\'>        </body>        </html>      ";
      };

      return Templates;

    })();
  });

}).call(this);
