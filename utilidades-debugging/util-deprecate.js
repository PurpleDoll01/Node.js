const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello pinche Pluto');
}, 'Pluto is deprecated. Its not a planet anymore');

helloPluto();