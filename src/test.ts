import Display from "./Display";

const window: any = {
	width: 100,
	height: 20
};

const display: Display = new Display({ x: window.width, y: window.height }, ".");

display.setBgColor(40);

const title: string = "center title asdfghjkl";

display.setPixel({ x: (window.width / 2) - (Math.round(title.length / 2)), y: 0 }, title, 33);
display.setPixel({ x: 10, y: 3 }, "O", 34);
display.setPixel({ x: 30, y: 12 }, "test", 31);

display.show();

console.log("\n");

display.clearPixel({ x: 10, y: 3 });

display.show();

