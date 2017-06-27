'use strict';

const { loadWasm } = require('./utils');

const memory = new WebAssembly.Memory({initial:1});

const importObject = {
    console: {
        log: (offset, length) => {
            var bytes = new Uint8Array(memory.buffer, offset, length);
            var string = String.fromCharCode.apply(null, bytes);
            console.log(string);
        }
    },
    js: {
        memory: memory
    }
};


loadWasm('./sayhi.wasm', importObject)
    .then(instance => instance.exports.read(0, 8))
    .catch(e => console.log(e));