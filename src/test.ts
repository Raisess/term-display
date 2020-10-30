import Display from "./Display";

const display: Display = new Display({ x: 100, y: 20 });

display.setPixel({ x: 1, y: 0 }, "abacaxi");

display.show();

