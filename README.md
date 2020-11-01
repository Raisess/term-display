# TERM-DISPLAY

## What the f#ck is this?

Term Display is a lib to create colored displays on terminal, based on coordenates.

## Getting Started

### Installing

* To use this package you need Typescript installed.

```shell
npm i --save term-display
```

### How to use with javascript

Go to project node modules folder, then go to term display folder and execute `npm run compile` command.

```shell
cd node_modules/term-display | npm run compile
```

update the lib **package.json** main value to `./dist/Display.js`.

### Using lib

#### Basics

```ts
import Display, { COLOR, BG_COLOR } from "term-display";

const windowSize: any = {
	x: 100,
	y: 30
};

// Instacing the display.
const display: Display = new Display(windowSize, "."); // The second param is the withe space value, default is "x".

// Creating a pixel or a string.
/**
 * @param: {
 * 	place: { // Location to set pixel.
 * 		x: number;
 * 		y: number;
 * 	},
 * 	value:  string; // Value of pixel.
 * 	color?: number; // Color of pixel.
 * }
 */
display.setPixel({ x: 10, y: 3 }, "X", COLOR.green);
display.setPixel({ x: 40, y: 10 }, "Hello World!", COLOR.red);

// Setting up a background color.
// @param: number;
display.setBgColor(BG_COLOR.white);

// Showing display on the terminal :).
display.show();

// Clear all pixels on memory.
display.clear();

display.show(); // shows a blank display
```

### Getting and clear specific pixels

```ts
// Getting a pixel.
/**
 * @param: {
 * 	place: { // Location to get pixel.
 * 		x: number;
 * 		y: number;
 * 	}
 * }
 */
console.log(display.getPixel({ x: 10, y: 3 })); // "{ place: { x: 10, y: 3 }, value: "X", color: 31 }".

// Cleaning a pixel
/**
 * @param: {
 * 	place: { // Location to clear pixel.
 * 		x: number;
 * 		y: number;
 * 	}
 * }
 */
display.clearPixel({ x: 10, y: 3 });
```

