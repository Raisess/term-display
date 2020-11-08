import { IColor } from "../interfaces/IColor";

import { colors } from "../data/colors";

export default function getColor(colorValue: number): IColor {
	const colorTuples:  Array<[string, number]> = Object.entries(colors);

	for (let i: number = 0; i < colorTuples.length; i++) {
		if (colorValue === colorTuples[i][1]) {
			return {
				name:  colorTuples[i][0],
				value: colorTuples[i][1],
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

