import Display from "./Display";

const display: Display = new Display({ x: 10, y: 10 }, ".");

//display.setBgColor(45);

display.setPixel({ x: 1, y: 0 }, "abacaxi", [33, 89]);

display.show();

console.log("\n");

//display.clearPixel({ x: 10, y: 3 });

display.setBgColor(46);

display.show();

