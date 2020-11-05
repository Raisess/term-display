import { ISize } from "../interfaces/ISize";
import { IPlace } from "../interfaces/IPlace";

export default function validatePlace(place: IPlace, size: ISize): boolean | void {
	if (Math.round(place.y) <= size.height && Math.round(place.x) <= size.width) return true;

	throw new Error(`Invalid pixel location ${place.x}:${place.y}!`);
}

