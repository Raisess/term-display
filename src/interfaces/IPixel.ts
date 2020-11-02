import { IPlace } from "./IPlace";

export interface IPixel {
	idx:       number;
	place:     IPlace;
	value:     string;
	color?:    number;
	size:      number;
	isCompost: boolean;
}

