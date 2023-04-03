/*
This is necessary because not all characters can be used in a URI,
and some characters may have a special meaning within a URI.

For example, the encodeURI() function would replace spaces with %20,
and other special characters like #, &, and = with their corresponding
escape sequences. This ensures that the URI is properly formatted and
can be used in a web request without causing any errors or unexpected behavior.
*/

const uri = 'https://example.com/search?q=hello world';

const encodedUri = encodeURI(uri);

console.log(encodedUri);
// Output: "https://example.com/search?q=hello%20world"
