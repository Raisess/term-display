import validatePlace from "./modules/validatePlace";
import generateDisplayablePixel from "./modules/generateDisplayablePixel";

// interfaces
import { IPlace } from "./interfaces/IPlace";
import { IPixel } from "./interfaces/IPixel";

// data
import { colors } from "./data/colors";
import { bgColors } from "./data/bgColors";

// colors data
export const COLOR:    any = colors;
export const BG_COLOR: any = bgColors;
// terminal size
export const TERM_WIDTH:  number = process.stdout.columns - 1;
export const TERM_HEIGHT: number = process.stdout.rows - 1;

export default class Display {
	// Display memory and pixels memory.
	private display: Array<Array<string>> = [];
	public  pixels:  Array<IPixel>        = [];

	// Display size.
	private size: IPlace = {
		x: 0,
		y: 0
	};
	// No set pixel mark.
	private whiteSpace: string = "x";
	// Current background color
	private currentBgColor: number = 0;

	/**
	 * @param: {
	 *  size: {              // Size of display.
	 *    x: number;
	 *    y: number;
	 *  },
	 *  whiteSpace?: string; // White space mark (optional).
	 * }
	 */
	constructor(size: IPlace, whiteSpace?: string) {
		this.size.x     = Math.round(size.x) + 1;
		this.size.y     = Math.round(size.y) + 1;
		this.whiteSpace = whiteSpace ? whiteSpace : this.whiteSpace;

		this.clear(); // Creates the window.
	}

	// Show display.
	public show(): void {
		for (let i: number = 0; i < this.size.y; i++) {
			console.log(this.display[i].join(""));
		}
	}

	// Clear all display pixels.
	/**
	 * @param: {
	 *  clearPixelsMem: boolean; // If is it false, the pixels memory is not cleared, just only display memory is cleared.
	 * }
	 */
	public clear(clearPixelsMem: boolean = true): void {
		for (let i: number = 0; i < this.size.y; i++) {
			this.display[i] = [];
			
			for (let j: number = 0; j < this.size.x; j++) {
				if (this.currentBgColor !== 0) {
					this.display[i][j] = generateDisplayablePixel(this.currentBgColor, this.currentBgColor - 10, this.whiteSpace);
				} else {
					this.display[i][j] = generateDisplayablePixel(0, 0, this.whiteSpace);
				}
			}
		}

		if (clearPixelsMem) this.pixels = [];
	}

	// Set the background color.
	/**
	 * @param: {
	 *  color: number;
	 * }
	 */
	public setBgColor(color: number): void {
		this.currentBgColor = color;

		this.clear(false);
		
		for (let pixel of this.pixels) {
			this.setPixel(pixel.place, pixel.value, pixel.color, true);
		}
	}

	// Set a pixel in the display.
	// Can add more than 1 pixel with a string.
	/**
	 * @param: {
	 * 	place: {        // Location to set pixel.
	 * 	  x: number;
	 * 	  y: number;
	 * 	},
	 *  value:  string; // Value of the pixel.
	 *  color?: number; // Color of the pixel (optional, default is white \x1b[0m).
	 * }
	 */
	public setPixel(place: IPlace, value: string, color?: number, noSave: boolean = false): void {
		const color_: number = color ? color : 0;

		if (validatePlace(place, this.size)) {
			if (value.length > 1) { // Check if is more than 1 pixel.
				for (let i: number = 0; i < value.length; i++) {
					this.display[Math.round(place.y)][Math.round(place.x) + i] = generateDisplayablePixel(this.currentBgColor, color_, value[i]);
				}
			} else {
				this.display[Math.round(place.y)][Math.round(place.x)] = generateDisplayablePixel(this.currentBgColor, color_, value);
			}

			if (!noSave) {
				this.pixels.push({
					place: {
						x: Math.round(place.x),
						y: Math.round(place.y)
					},
					idx:       this.pixels.length,
					value:     value,
					color:     color,
					size:      value.length,
					isCompost: value.length > 1 ? true : false
				});
			}
		}
	}

	// Get a specific pixel value.
	/**
	 * @param: {
	 *  place: {
	 *    x: number;
	 *    y: number;
	 *  }
	 * }
	 * @returns: IPixel || undefined;
	 */
	public getPixel(place: IPlace): IPixel | undefined {
		if (validatePlace(place, this.size)) {
			for (let pixel of this.pixels) {
				if(pixel) { // When clear, pixel is setted to undefined.
					if (Math.round(place.x) === pixel.place.x && Math.round(place.y) === pixel.place.y) {
						return pixel;
					}
				}
			}

			return undefined;
		}
	}

	// Clear one pixel on the display.
	/**
	 * @param: {
	 *  place: { // Location to clear pixel.
	 *    x: number;
	 *    y: number;
	 *  }
	 * }
	 */
	public clearPixel(place: IPlace): void {
		if (validatePlace(place, this.size)) {
			const pixel: IPixel | undefined = this.getPixel(place);

			if (pixel) {
				delete this.pixels[pixel.idx];
				
				this.clear(false);
				
				for (let pix of this.pixels) {
					if (pix) this.setPixel(pix.place, pix.value, pix.color, true);
				}
			}
		}
	}
}

