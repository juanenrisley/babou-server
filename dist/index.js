"use strict";

var _index = require("graphql-yoga/dist/index");

// const { GraphQLServer } = require('graphql-yoga');
var typeDefs = "\n  type Query {\n    hello(name: String): String!\n  }\n";
var resolvers = {
  Query: {
    hello: function hello(_, _ref) {
      var name = _ref.name;
      return "Hello ".concat(name || 'World');
    }
  }
};
var server = new _index.GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.start({
  endpoint: '/graphql',
  port: 8081
}, function (_ref2) {
  var port = _ref2.port;
  return console.log("Server is running on localhost:".concat(port));
});