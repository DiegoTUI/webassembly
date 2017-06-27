'use strict';

const { loadWasm } = require('./utils');

loadWasm('./tables.wasm')
    .then(instance => {
        console.log(instance.exports.callByIndex(0)); // returns 42
        console.log(instance.exports.callByIndex(1)); // returns 13
    })
    .catch(e => console.log(e));
