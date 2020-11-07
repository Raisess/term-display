import Display, { BG_COLOR, COLOR } from "../Display";
import { ISize } from "../interfaces/ISize";

interface IPixel {
	x:     number;
	y:     number,
	value: string;
	color: number;
}

const size: ISize = {
	width:  30,
	height: 10
};

const display: Display = new Display(size, ".");

display.setBgColor(BG_COLOR.white);

// animate
let pixel: IPixel = {
	x:         1,
	y:         1,
	value:     "X",
	color:     COLOR.red
};

let i: number = 0;

const anim: any = setInterval(() => {
	if (i === size.width) {
		clearInterval(anim);

		return;
	}

	console.clear();
	display.clear();
	
	display.setPixel({
		x: pixel.x + i,
		y: pixel.y
	}, pixel.value, pixel.color);

	display.show();

	i++;
}, 250);

