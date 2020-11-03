export default function generateDisplayablePixel(currentBgColor: number, color: number, value: string): string {
	return `\x1b[${currentBgColor}m\x1b[${color}m${value}\x1b[89m\x1b[0m\x1b[49m`;
}

