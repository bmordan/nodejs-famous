/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        dgram: '../lib/dgram/dgram.min',
        sockjs: '../lib/sockjs/sockjs'
    },
    packages: [

    ]
});
require(['main'],['client']);
