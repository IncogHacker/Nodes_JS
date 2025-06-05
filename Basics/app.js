// console.log(global);

// global.console.log("Same Like Window only We use Global Here")

//    console.log(globalThis);

globalThis.console.log("Using Global thi same output as global")

// globalThis.console.log(module);
  
//!we can use like this cosnole.log(globalThis.module)-- gived undefined


// !Modeule Output
// {
//   id: '.',
//   path: 'C:\\Users\\risha\\Desktop\\Node & Express JS\\Nodejs',
//   exports: {},
//   filename: 'C:\\Users\\risha\\Desktop\\Node & Express JS\\Nodejs\\app.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\risha\\Desktop\\Node & Express JS\\Nodejs\\node_modules',
//     'C:\\Users\\risha\\Desktop\\Node & Express JS\\node_modules',
//     'C:\\Users\\risha\\Desktop\\node_modules',
//     'C:\\Users\\risha\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }


console.log(globalThis.process);//give output of  process 

// process {
//   version: 'v23.11.1',
//   versions: {
//     node: '23.11.1',
//     acorn: '8.14.1',
//     ada: '3.2.1',
//     amaro: '0.4.1',
//     ares: '1.34.5',
//     brotli: '1.1.0',
//     cjs_module_lexer: '2.1.0',
//     cldr: '46.0',
//     icu: '76.1',
//     llhttp: '9.2.1',
//     modules: '131',
//     napi: '10',
//     nbytes: '0.1.1',
//     ncrypto: '0.0.1',
//     nghttp2: '1.64.0',
//     openssl: '3.0.16',
//     simdjson: '3.12.2',
//     simdutf: '6.0.3',
//     sqlite: '3.49.1',
//     tz: '2025a',
//     undici: '6.21.2',
//     unicode: '16.0',
//     uv: '1.50.0',
//     uvwasi: '0.0.21',
//     v8: '12.9.202.28-node.14',
//     zlib: '1.3.0.1-motley-788cb3c',
//     zstd: '1.5.6'
//   },give more