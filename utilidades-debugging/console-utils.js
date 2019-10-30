console.log("Un %s y un %s", "perrito", "gatito");
console.info("Hello World");
console.warn('Errrrror');

console.assert(42 == '34');
//console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');