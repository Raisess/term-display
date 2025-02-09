import Display, { COLOR, BG_COLOR, TERM_WIDTH, TERM_HEIGHT } from "./Display";

const window: any = {
	width:  TERM_WIDTH,
	height: TERM_HEIGHT
};

console.log(window);

const display: Display = new Display(window, ".");

const title: string = "center title asdfghjkl";

display.setPixel({
	x: (window.width / 2) - (title.length / 2),
	y: 1
}, title.toUpperCase(), COLOR.yellow);

display.setPixel({ x: 10, y: 3 }, "O");
display.setPixel({ x: 30, y: 12 }, "test", COLOR.brMagenta);
display.setPixel({ x: 50, y: 15 }, "Hello World", COLOR.red);
display.setPixel({ x: TERM_WIDTH, y: TERM_HEIGHT }, "Z", COLOR.blue);

display.show();

console.log(display.getPixel({ x: 30, y: 12 }));
console.log(display.getPixel({ x: 100, y: 10 }));

display.setBgColor(BG_COLOR.white);

display.show();

console.log("");

display.setBgColor(BG_COLOR.black);

display.clearPixel({ x: 50, y: 15 });

console.log(display.pixels);

display.show();
display.clear(false);

