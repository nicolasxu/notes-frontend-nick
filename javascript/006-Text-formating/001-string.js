
// Hexadecimal escape sequences
"\xA9" // "©"


// Unicode escape sequences
"\u00A9" // "©"
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"



charAt(), charCodeAt(), codePointAt() 	Return the character or character code at the specified position in string.
indexOf(), lastIndexOf() 	Return the position of specified substring in the string or last position of specified substring, respectively.
startsWith(), endsWith(), includes() 	Returns whether or not the string starts, ends or contains a specified string.
concat() 	Combines the text of two strings and returns a new string.
split() 	Splits a String object into an array of strings by separating the string into substrings.
slice() 	Extracts a section of a string and returns a new string.
substring(), substr() 	Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.
match(), matchAll(), replace(), replaceAll(), search() 	Work with regular expressions.
toLowerCase(), toUpperCase()

Return the string in all lowercase or all uppercase, respectively.
normalize() 	Returns the Unicode Normalization Form of the calling string value.
repeat() 	Returns a string consisting of the elements of the object repeated the given times.
trim() 	Trims whitespace from the beginning and end of the string.


////////////////////////////////////////
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"