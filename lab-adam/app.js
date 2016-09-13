'use strict';

var greetings = require('./lib/greet.js');
var name = process.argv[2];

console.log(greetings.greet(name));
