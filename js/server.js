(function() {
  var baseUrl;

  global.requirejs = require('requirejs');

  global.express = require('express');

  requirejs.config({
    nodeRequire: require
  }, baseUrl = 'js');

  requirejs(['templates'], function(Templates) {
    var Server, server;
    Server = (function() {

      function Server(port) {
        this.port = port;
        this.app = express.createServer();
        this.app.configure(function() {});
        this.app.get("/", function(req, res) {
          return res.send(Templates.getQrCode("http://localhost:3000"));
        });
      }

      Server.prototype.start = function() {
        return this.app.listen(this.port);
      };

      return Server;

    })();
    server = new Server(3000);
    return server.start();
  });

}).call(this);
