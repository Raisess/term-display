import Display from "./Display";

const display: Display = new Display({ x: 100, y: 20 }, ".");

display.setBgColor(40);

display.setPixel({ x: 1, y: 0 }, "abacaxi", 33);
display.setPixel({ x: 10, y: 3 }, "O", 34);
display.setPixel({ x: 30, y: 12 }, "test", 31);

display.show();

console.log("\n");

display.clearPixel({ x: 10, y: 3 });

display.show();

