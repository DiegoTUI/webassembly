'use strict';

const { loadWasm } = require('./utils');

var importObject = {
    js: {
        memory : new WebAssembly.Memory({ initial: 1 }),
        table : new WebAssembly.Table({ initial: 1, element: "anyfunc" })
    }
};

Promise.all([
    loadWasm('./shared0.wasm', importObject),
    loadWasm('./shared1.wasm', importObject)
])
.then(instances => console.log(instances[1].exports.doIt()))
.catch(e => console.log(e));
