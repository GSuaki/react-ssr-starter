require( "babel-register" )( {
    presets: [
        "env",
        "stage-0",
        'es2015',
        'react'
    ],
    ignore: ['node_modules']
} );

const express = require( 'express' );

const app = express();

app.use(require( "./app/server" ).default);
app.use('/api', require( "./api/server" ).default);

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at Promise', p, 'reason:', reason); // eslint-disable-line
});

module.exports = app

app.listen( 9000 );