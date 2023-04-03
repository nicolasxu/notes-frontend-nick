
 Number.MAX_SAFE_INTEGER (which is 253 - 1) accurately

const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;

const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");


const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n

const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt