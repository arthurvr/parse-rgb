import test from 'ava';
import parseRgb from './';

test('Normal rgb() value', t => {
	const result = parseRgb('rgb(11,33,44)');

	t.is(result.red, 11);
	t.is(result.green, 33);
	t.is(result.blue, 44);

	t.end();
});

test('ignores whitespace', t => {
	const result = parseRgb('   rgb(11,33,44)   ');

	t.is(result.red, 11);
	t.is(result.green, 33);
	t.is(result.blue, 44);

	t.end();
});

test('ignores whitespace inside brackets', t => {
	const result = parseRgb('rgb(   1,2,3  )');

	t.is(result.red, 1);
	t.is(result.green, 2);
	t.is(result.blue, 3);

	t.end();
});

test('ignores whitespace around comma\'s', t => {
	const result = parseRgb('rgb(1 , 2   ,3  )');

	t.is(result.red, 1);
	t.is(result.green, 2);
	t.is(result.blue, 3);

	t.end();
});

test('should return actual negative value', t => {
	const result = parseRgb('rgb(-10, -22, 3)');

	t.is(result.red, -10);
	t.is(result.green, -22);
	t.is(result.blue, 3);

	t.end();
});
