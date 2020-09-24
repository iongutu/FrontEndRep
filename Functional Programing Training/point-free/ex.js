"use strict";

// function output(txt) {
// 	console.log(txt);
// }



// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			return output(msg)
// 		}
// 	};
// }

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

var isLongEnougth = not(isShortEnough);

function not(fn)
{
  return function negated(...args)
  {
    return !fn(...args)
  }
}
var output =console.log.bind(console);
function when(fn) {
	return function(predicate){
		return function(...args){
			if (predicate( ...args )) {
				return fn( ...args );
			}
		};
	};
}
var printIF = when(console); 



var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
