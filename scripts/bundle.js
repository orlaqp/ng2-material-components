const path    = require('path');
const fs      = require('fs');
const q       = require('q');
const Builder = require('systemjs-builder');
const name    = require('../package.json').name;

const builder = new Builder();
const config = {
  baseURL: '.',
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'cjs'
  },
  map: {
    'typescript': 'node_modules/typescript/lib/typescript',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
  },
  paths: {
    'ts-helpers': 'node_modules/ts-helpers/index.js',
    'dist/*': 'dist/*.js',
  },
  meta: {
    'node_modules/@angular/*': { build: false },
    'node_modules/rxjs/*': { build: false },
    'tether': { build: false },
  },
};

builder.config(config);

function bundle(options) {
  return builder.bundle('dist/' + name, options).then((output) => {
      const deferred = q.defer();
    const outputFile = path.resolve(__dirname, '../dist', `${name}.bundle${options.minify ? '.min' : ''}.js`);
    fs.writeFile(outputFile, output.source.replace(/dist\//g, `${name}/`), function(err) {
      if(err) {
        deferred.reject(err);
        return;
      }
      deferred.resolve();
    });
    return deferred.promise;
  });
}

module.exports = bundle;
