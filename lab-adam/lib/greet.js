'use strict';
exports = module.exports = {};

exports.greet = function(name){
  if (arguments.length === 0 || arguments[0] === undefined) throw new Error('missing a name');
  return 'hello ' + name ;
};

exports.sayGoodbye = function(){
  return('Seeya');
};  
