# 📺 TERM-DISPLAY

## ⁉️  What the f#ck is this?

Term Display is a lib to create colored displays on terminal, based on coordinates.

## 🔮 Getting Started

### 💾 Installing

* To use this package you need Typescript installed.

```shell
npm i --save term-display
```
### 🔧 Using lib

Preparing to use, create a declaration file, like **_.d.ts** in you project root.

```ts
declare module "term-display";
```

You need to use that, because the lib compiles to Javascript when installed.

* **The lib auto round's X and Y place values and size values.**

#### 🔨 Basics

```ts
import Display, { COLOR, BG_COLOR } from "term-display";

const windowSize: any = {
	width:  100,
	height: 30
};

// Instacing the display.
const display: any = new Display(windowSize, "."); // The second param is the white space value, default is "x".

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
/**
 * @param: {
 *  clearConsole:   boolean; // Clear the console data.
 *  clearPixelsMem: boolean; // Clear pixels in memory.
 * }
 */
display.clear();

display.show(); // Shows a blank display.
```

##### 🗺️  Map coordinates

```ts
display.setPixel({ x: 10, y: 3 }, "O", COLOR.blue);
```

On display:

```shell
  1
  --------------------------
1|..........................
 |..........................
 |.........O................
 |..........................
 |..........................
 |..........................
 |..........................
 |..........................
 |..........................

axis:
	x -
	y |
```

The display pixels starts to count by **1**.

#### 🔨 Getting and cleaning specific pixels

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
console.log(display.getPixel({ x: 10, y: 3 }));
// logs "{ place: { x: 10, y: 3 }, value: "X", color: { name: "blue", value: 34, type: "PX" }, compost: false }".
// if pixel don't exist's return undefined.

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

#### 🔨 Current terminal window size

```ts
import Display, { TERM_WIDTH, TERM_HEIGHT } from "term-display";

const windowSize: any = {
	width:  TERM_WIDTH,
	height: TERM_HEIGHT
};

const display: any = new Display(windowSize);
```

That code set the current terminal window size to display, yeah you can use in fullscreen if want.

