/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        dgram: '../lib/dgram/dgram.min'
    },
    packages: [

    ]
});
require(['main'],['client']);
