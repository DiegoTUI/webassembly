'use strict';

const fs = require('fs');

exports.readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, file) => {
            if (err) {
                return reject(err);
            }

            return resolve(file);
        });
    });
}

exports.loadWasm = async (filename, importObject) => {
    const fileBuffer = await exports.readFile(filename);
    const mod = await WebAssembly.compile(fileBuffer);
    return await WebAssembly.Instance(mod, importObject)
}