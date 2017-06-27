'use strict';

const { loadWasm } = require('./utils');

const importObject = {
    console: {
        log: arg => console.log(arg)
    }
};


loadWasm('./simple.wasm', importObject)
    .then(instance => instance.exports.e())
    .catch(e => console.log(e));
