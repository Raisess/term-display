import validatePlace from "./utils/validatePlace";
import { IPlace } from "./interfaces/IPlace";

// data
import colors from "./data/colors.json";
import bgColors from "./data/bgColors.json"

export const COLOR:    any = colors;
export const BG_COLOR: any = bgColors;

export default class Display {
	// Display memory and display previous memory state.
	private display:       Array<Array<string>> = [];
	private previousState: Array<Array<string>> = [];

	// Display size.
	private x: number = 50;
	private y: number = 50;
	// No set pixel mark.
	private whiteSpace: string = "x";
	// Current background color
	private currentBgColor: string = "\x1b[0m";

	/**
	 * @param: {
	 *  size: {              // Size of display.
	 *  	x: number;
	 *  	y: number;
	 *  },
	 *  whiteSpace?: string; // White space mark (optional).
	 * }
	 */
	constructor(size: IPlace, whiteSpace?: string) {
		this.x          = size.x;
		this.y          = size.y;
		this.whiteSpace = whiteSpace ? whiteSpace : this.whiteSpace;

		this.clear();
	}

	// Show display.
	public show(): void {
		for (let i: number = 0; i < this.y; i++) {
			console.log(this.display[i].join(""));
		}
	}

	// Clear all display pixels.
	public clear(): void {
		this.previousState = this.display;
		
		for (let i: number = 0; i < this.y; i++) {
			this.display[i] = [];
			
			for (let j: number = 0; j < this.x; j++) {
				this.display[i][j] = this.whiteSpace;
			}
		}
	}

	// @TODO: Fix update BG color in runtime
	// Set the background color.
	public setBgColor(color: number): void {
		this.whiteSpace     = `\x1b[${color}m\x1b[${color - 10}m${this.whiteSpace}\x1b[89m\x1b[49m\x1b[0m`;
		this.currentBgColor = `\x1b[${color}m`;
	
		this.clear();
		this.display = this.previousState;
	}

	// Set a pixel in the display.
	// Can add more than 1 pixel with a string.
	/**
	 * @param: {
	 * 		place: {               // Location to set pixel.
	 * 			x: number;
	 * 			y: number;
	 * 		},
	 * 		value:  string;        // Value of the pixel.
	 * 		color?: number; // Color of the pixel (optional, default is white \x1b[0m).
	 * }
	 */
	public setPixel(place: IPlace, value: string, color?: number): void {
		const color_: string = color ? color.toString() : "0";

		if (validatePlace(place, { x: this.x, y: this.y })) {
			if (value.length > 1) { // Check if is more than 1 pixel.
				for (let i: number = 0; i < value.length; i++) {
					this.display[place.y][place.x + i] = `${this.currentBgColor}\x1b[${color_}m${value[i]}\x1b[89m\x1b[0m\x1b[49m`;
				}
			} else {
				this.display[place.y][place.x] = `${this.currentBgColor}\x1b[${color_}m${value}\x1b[89m\x1b[0m\x1b[49m`;
			}

			this.previousState = this.display;
		}
	}

	// Clear one pixel on the display.
	/**
	 * @param: {
	 * 		place: { // Location to clear pixel.
	 * 			x: number;
	 * 			y: number;
	 * 		}
	 * }
	 */
	public clearPixel(place: IPlace): void {
		if (validatePlace(place, { x: this.x, y: this.y })) {
			this.display[place.y][place.x] = this.whiteSpace;	
		}

		this.previousState = this.display;
	}
}

