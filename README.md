planning-poker-node
===================

Porting the scrum planning poker app to node

Build
=====
We use grunt.js(http://gruntjs.com/) as out build tool
Just build
`grunt`

Continious build
`grunt watch`

Deploy
======

```
source bashrc
run_server
```

Debug
=====

This will run the node server in a node-inspector(https://github.com/dannycoates/node-inspector) instance at http://127.0.0.1:8080/debug?port=5858
```
source bashrc
debug_server
```