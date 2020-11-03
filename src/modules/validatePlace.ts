import { IPlace } from "../interfaces/IPlace";

export default function validatePlace(place: IPlace, size: IPlace): boolean | void {
	if (place.y <= size.y && place.x <= size.x) return true;

	throw new Error(`Invalid pixel location ${place.x}:${place.y}!`);
}

