'use strict';
var test = require('ava');
var parseRgb = require('./');

test('Normal rgb() value', function (t) {
	var result = parseRgb('rgb(11,33,44)');
	t.assert(result.red === 11);
	t.assert(result.green === 33);
	t.assert(result.blue === 44);
});

test('ignores whitespace', function (t) {
	var result = parseRgb('   rgb(11,33,44)   ');
	t.assert(result.red === 11);
	t.assert(result.green === 33);
	t.assert(result.blue === 44);
});

test('ignores whitespace inside brackets', function (t) {
	var result = parseRgb('rgb(   1,2,3  )');
	t.assert(result.red === 1);
	t.assert(result.green === 2);
	t.assert(result.blue === 3);
});

test('ignores whitespace around comma\'s', function (t) {
	var result = parseRgb('rgb(1 , 2   ,3  )');
	t.assert(result.red === 1);
	t.assert(result.green === 2);
	t.assert(result.blue === 3);
});

test('should return actual negative value', function (t) {
	var result = parseRgb('rgb(-10, -22, 3)');
	t.assert(result.red === -10);
	t.assert(result.green === -22);
	t.assert(result.blue === 3);
});
