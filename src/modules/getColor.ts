import { IColor } from "../interfaces/IColor";

import { colors } from "../data/colors";

export default function getColor(colorValue: number): IColor {
	const colorNames:  Array<[string, unknown]> = Object.entries(colors);
	const colorValues: Array<number> = Object.values(colors);

	for (let i: number = 0; i < colorValues.length; i++) {
		if (colorValue === colorValues[i]) {
			return {
				name:  colorNames[i][0],
				value: colorValues[i],
				type:  "PX"
			};
		}
	}

	return {
		name:  "<invalid-color>",
		value: -1,
		type:  "PX"
	};
}

