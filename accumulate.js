'use strict';

const { loadWasm } = require('./utils');

loadWasm('./accumulate.wasm')
    .then(instance => {
        const integers = new Uint32Array(instance.exports.memory.buffer);
        for (let i = 0; i < 10; i++) {
            integers[i] = i;
        }

        var sum = instance.exports.accumulate(0, 10);
        console.log(sum);
    })
    .catch(e => console.log(e));
