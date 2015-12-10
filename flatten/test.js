var assert = require('assert');
var flatten = require('./');

describe('flatten', function() {
  var arr = [1, [2], [3, 4, [5]]];

  it('will return another array', function() {
    assert.notEqual(flatten(arr), arr);
  });

  it('will flatten an simple array', function() {
    assert.deepEqual(flatten([1, 2, 3, 4, [5]]), [1, 2, 3, 4, 5]);
  });

  it('will flatten an array', function() {
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5]);
  });
});

var flatten = function(toFlatten) {
	  var isArray = Object.prototype.toString.call(toFlatten) === '[object Array]';

	  if (isArray && toFlatten.length > 0) {
	    var head = toFlatten[0];
	    var tail = toFlatten.slice(1);

	    return flatten(head).concat(flatten(tail));
	  } else {
	    return [].concat(toFlatten);
	  }
	};
	
	function testFlat()
	{
		alert(flatten([1,[2,3],4,[[5,6],7]]));
	}
