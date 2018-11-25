// staging.js
var deployd = require('deployd');

var server = deployd({
    port: process.env.PORT || 5000,
    env: 'staging',
    db: {
        host: '127.0.0.1',
        port: 27105,
        name: 'my-db',
        credentials: {
            username: 'username',
            password: 'password'
        }
    }
});

// remove all data in the 'todos' collection
var todos = server.createStore('todos');

todos.remove(function() {
    // all todos removed
    server.listen();
});

server.on('error', function(err) {
    console.error(err);
    process.nextTick(function() { // Give the server a chance to return an error
        process.exit();
    });
});