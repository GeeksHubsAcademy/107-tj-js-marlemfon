<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>

    Considere el siguiente problema:

    Escriba un programa corto que permita obtener las letras de los elementos en posición par del array 
	y devuelva una string con la unión de los mismos
    
     N = 4 
    
         ['h', 'o', 'l', 'a', '!']
	i =    0    1    2    3    4

     Resultado
	 
         "hl!"


    En caso de que el array tenga un 'size' par, debe de contarse la última posición.
	En caso de que el array sea nulo, el resultado debe de devolver "nulo". 
	En caso de que el array sea vacío, el resultado debe de devolver "vacio". 
	El array no contiene valores nulos ni números, solamente letras.   
    
    Se atiente al siguiente ejemplo:
   
   	    N = 1        N = 2              N = 3                N = 4               
      
        ['h']        ['f', 'o']         ['f', 'o', 'o']      ['g', 'e', 'e', 'k']          
                 
    Resultado:
 	
	    "h"	 	 "fo"	   	    "fo"            	  "gek"        	              
                                  


    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
	test('FormarPalabras with null', function () {
		var expected = "null"
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

	test('FormarPalabras with [\'g\', \'e\', \'e\', \'e\', \'e\', \'k\', \'k\', \'s\', \'s\', \'!\']', function () {
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

	 PASS  test/suite.test.js
	√ FormarPalabras with null (4ms)
	√ FormarPalabras with [] (1ms)
	√ FormarPalabras with ['a']
	√ FormarPalabras with ['a', 'z']
	√ FormarPalabras with ['x', 'z', 'y']
	√ FormarPalabras with ['h', 'z', 'i', '!'] (1ms)
	√ FormarPalabras with ['[', 'o, '%', 'a', ']'] (1ms)
	√ FormarPalabras with ['h', 'o, 'l', 'a', '!']
	√ FormarPalabras with ['h', 'o', 'o', 'l', 'l', 'a', 'a', '!']
	√ FormarPalabras with ['c', 'o', 'a', 'l', 's', 'a', 'a', '!'] (1ms)
	√ FormarPalabras with ['g', 'e', 'e', 'e', 'e', 'k',  'k', 's', 's', '!']
	√ FormarPalabras with ['f', 'o', 'o', 'o'] (1ms)
	√ FormarPalabras with ['b', 'u', 'u', 'u']
	√ FormarPalabras with ['b', 'u', 'u' ]

    Test Suites: 1 passed, 1 total
    Tests:       13 passed, 13 total
    Snapshots:   0 total
    Time:        3.022s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
