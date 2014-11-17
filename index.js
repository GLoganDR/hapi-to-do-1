'use strict';

var port    = process.env.PORT,
    db      = process.env.DB,
    Hapi    = require('hapi'),
    server  = new Hapi.Server(port);


require('./routes')(server);

require('./plugins')(server, function(){
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

