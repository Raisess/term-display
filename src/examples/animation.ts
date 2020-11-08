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
let pixel: Array<IPixel> = [
	{
		x:         1,
		y:         1,
		value:     "X",
		color:     COLOR.red
	},
	{
		x:         1,
		y:         2,
		value:     "Hi",
		color:     COLOR.magenta
	},
	{
		x:         1,
		y:         3,
		value:     "Hey",
		color:     COLOR.blue
	},
];

let i: number = 0;

const anim: any = setInterval(() => {
	if (i === size.width) {
		clearInterval(anim);

		return;
	}

	display.clear();
	
	for (let j: number = 0; j < pixel.length; j++) {
		display.setPixel({
			x: i === size.width - 1 ? pixel[j].x = size.width - (pixel[j].value.length - (pixel[j].value.length - (pixel[j].value.length - 1))) : pixel[j].x + i,
			y: pixel[j].y
		}, pixel[j].value, pixel[j].color);
	}
	
	display.show();

	i++;
}, 100);

