require( "babel-register" )( {
    presets: [
        "env",
        "stage-0",
        'es2015',
        'react'
    ],
} );

require( "./api/server" );
