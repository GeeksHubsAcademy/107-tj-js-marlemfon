const formarPalabras = require('./test01.js');

	test('FormarPalabras with null', function () {
		var expected = "null";
		var result = formarPalabras(null);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with []', function () {
		var expected = "vacio";
		var result = formarPalabras([]);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'a\']', function () {
		var expected = "a";
		var result = formarPalabras(['a']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'a\', \'z\']', function () {
		var expected = "az";
		var result = formarPalabras(['a', 'z']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'x\', \'z\', \'y\']', function () {
		var expected = "xy";
		var result = formarPalabras(['x', 'z', 'y']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'h\', \'z\', \'i\', \'!\']', function () {
		var expected = "hi!";
		var result = formarPalabras(['h', 'z', 'i', '!']);
		expect(result).toEqual(expected);
	});

	
	test('FormarPalabras with [\'[\', \'o\, \'%\', \'a\', \']\']', function () {
		var expected = "[%]";
		var result = formarPalabras(['[', 'o', '%', 'a', ']']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'h\', \'o\, \'l\', \'a\', \'!\']', function () {
		var expected = "hl!";
		var result = formarPalabras(['h', 'o', 'l', 'a', '!']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'h\', \'o\', \'o\', \'l\', \'l\', \'a\', \'a\', \'!\']', function () {
		var expected = "hola!";
		var result = formarPalabras(['h', 'o', 'o', 'l', 'l', 'a', 'a', '!']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'c\', \'o\', \'a\', \'l\', \'s\', \'a\', \'a\', \'!\']', function () {
		var expected = "casa!";
		var result = formarPalabras(['c', 'o', 'a', 'l', 's', 'a', 'a', '!']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'g\', \'e\', \'e\', \'e\', \'e\', \'k\',  \'k\', \'s\', \'s\', \'!\']', function () {
		var expected = "geeks!";
		var result = formarPalabras(['g', 'e', 'e', 'e', 'e', 'k', 'k', 's', 's', '!']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'f\', \'o\', \'o\', \'o\']', function () {
		var expected = "foo";
		var result = formarPalabras(['f', 'o', 'o', 'o']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'b\', \'u\', \'u\', \'u\']', function () {
		var expected = "buu";
		var result = formarPalabras(['b', 'u', 'u', 'u']);
		expect(result).toEqual(expected);
	});

	test('FormarPalabras with [\'b\', \'u\', \'u\' ]', function () {
		var expected = "bu";
		var result = formarPalabras(['b', 'u', 'u']);
		expect(result).toEqual(expected);
	});
