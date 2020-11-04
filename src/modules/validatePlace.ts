import { IPlace } from "../interfaces/IPlace";

export default function validatePlace(place: IPlace, size: IPlace): boolean | void {
	if (Math.round(place.y) <= size.y && Math.round(place.x) <= size.x) return true;

	throw new Error(`Invalid pixel location ${place.x}:${place.y}!`);
}

