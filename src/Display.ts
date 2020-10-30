import { IDisplay } from "./interfaces/IDisplay";

export default class Display {
	private display: Array<Array<string>> = [];
	
	private x: number = 50;
	private y: number = 50;

	constructor(size: IDisplay, whiteSpace?: string) {
		this.x = size.x;
		this.y = size.y;

		for (let i: number = 0; i < this.y; i++) {
			this.display[i] = [];
			
			for (let j: number = 0; j < this.x; j++) {
				this.display[i][j] = whiteSpace ? whiteSpace : "x";
			}
		}
	}

	public show(): void {
		for (let i: number = 0; i < this.y; i++) {
			console.log(this.display[i].join(""));
		}

		return;
	}

	public setPixel(place: IDisplay, value: string, color?: Array<number>): void {
		const colorStart: string = color ? color[0].toString() : "0";
		const colorEnd:   string = color ? color[1].toString() : "0";

		if (value.length > 1) {
			for (let i: number = 0; i < value.length; i++) {
				this.display[place.y][place.x + i] = `\x1b[${colorStart}m${value[i]}\x1b[${colorEnd}m\x1b[0m`;
			}
		} else {
			this.display[place.y][place.x] = `\x1b[${colorStart}m${value}\x1b[${colorEnd}m\x1b[0m`;
		}

		return;
	}
}

