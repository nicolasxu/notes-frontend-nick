// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
//
//
/*


Object.is() is also not equivalent to the === operator. T
he only difference between Object.is() and === is in their
treatment of signed zeros and NaN values. The === operator
(and the == operator) treats the number values -0 and +0 as equal,
but treats NaN as not equal to each other.


 */

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
