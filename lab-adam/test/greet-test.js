'use strict';
const greetings = require ('../lib/greet');
const assert = require('assert');

describe('testing module greet', function(){
  describe('testing #sayHello()', function(){
    it('should return "name" when passed "name"', function(){
      let result = greetings.greet('name');
      assert.ok(result === 'hello name', 'was not hello name');
    });

    it('should throw a missing a name error if given no argument', function(){
      assert.throws(function() {
        greetings.greet();
      }, 'shoulda thrown that err');
    });
    
    it('should process an input from CLI', function() {
      var name = process.argv[2] = 'adam';
      let result = greetings.greet(name);
      assert.ok(result === 'hello ' + name, 'did not take CLI input');
    });
  });
});
