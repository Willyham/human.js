// Semi-common Date timestamp conversion quirk.
+new Date();
// Instead use
new Date().getTime();

// Numeric literal call expressions
2..toString();
2 .toString();
(2).toString();

// Instead use
var numberTwo = 2;
numberTwo.toString();