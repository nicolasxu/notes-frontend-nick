
Decimal literals can start with a zero (0) followed by another decimal digit,
but if all digits after the leading 0 are smaller than 8, the number
is interpreted as an octal number.

0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal


//////////////////////////////////////////////

0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607


//////////////////////////////////////////////
// Octal numbers
0O755 // 493
0o644 // 420


//////////////////////////////////////////////
// hex number
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10



////////////////////////////////////////////
/// Exponentiation

0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
