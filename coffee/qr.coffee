# Module dependencies.
global.requirejs = require('requirejs')
global.express = require('express')

requirejs.config
    nodeRequire: require
    baseUrl = 'js'

# actual code starts here
requirejs [
  'templates'
], (
  Templates
) ->
  class Server
    constructor: (@port) ->
      @app = express.createServer()

      # Configuration
      @app.configure ->

      # Routes
      @app.get "/", (req, res) ->
        res.send Templates.getQrCode("http://localhost:3000")

    start: () ->
      @app.listen @port

  server = new Server(3000)
  server.start()