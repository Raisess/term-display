import Display from "./Display";

const display: Display = new Display({ x: 100, y: 20 }, ".");

display.setPixel({ x: 1, y: 0 }, "abacaxi", [33, 89]);

display.setPixel({ x: 10, y: 3 }, "O", [34, 89]);

display.show();

display.clear();

console.log("\n");

display.show();

