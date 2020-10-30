import validatePlace from "./utils/validatePlace";
import { IPlace } from "./interfaces/IPlace";

export default class Display {
	private display:       Array<Array<string>> = [];
	private previousState: Array<Array<string>> = [];
	
	private x:          number = 50;
	private y:          number = 50;
	private whiteSpace: string = "x";

	constructor(size: IPlace, whiteSpace?: string) {
		this.x          = size.x;
		this.y          = size.y;
		this.whiteSpace = whiteSpace ? whiteSpace : this.whiteSpace;

		this.clear();
	}

	public show(): void {
		for (let i: number = 0; i < this.y; i++) {
			console.log(this.display[i].join(""));
		}
	}

	public clear(): void {
		this.previousState = this.display;
		
		for (let i: number = 0; i < this.y; i++) {
			this.display[i] = [];
			
			for (let j: number = 0; j < this.x; j++) {
				this.display[i][j] = this.whiteSpace;
			}
		}
	}

	public setBgColor(color: number): void {
		this.whiteSpace = `\x1b[${color}m${this.whiteSpace}\x1b[49m\x1b[0m`;
	
		this.clear();
		this.display = this.previousState;
	}

	public setPixel(place: IPlace, value: string, color?: Array<number>): void {
		const colorStart: string = color ? color[0].toString() : "0";
		const colorEnd:   string = color ? color[1].toString() : "0";

		if (validatePlace(place, { x: this.x, y: this.y })) {
			if (value.length > 1) {
				for (let i: number = 0; i < value.length; i++) {
					this.display[place.y][place.x + i] = `\x1b[${colorStart}m${value[i]}\x1b[${colorEnd}m\x1b[0m`;
				}
			} else {
				this.display[place.y][place.x] = `\x1b[${colorStart}m${value}\x1b[${colorEnd}m\x1b[0m`;
			}

			this.previousState = this.display;
		}
	}

	public clearPixel(place: IPlace): void {
		if (validatePlace(place, { x: this.x, y: this.y })) {
			this.display[place.y][place.x] = this.whiteSpace;	
		}

		this.previousState = this.display;
	}
}

