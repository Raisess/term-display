import { IPlace } from "./IPlace";
import { IColor } from "./IColor";

export interface IPixel {
	idx:       number;
	place:     IPlace;
	value:     string;
	color:     IColor;
	size:      number;
	isCompost: boolean;
}

