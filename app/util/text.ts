export function makeFirstLetterUppercase(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getFirstSentence(paragraph: string): string | undefined {
	let match = paragraph.match(/^(.*?\.)/);
	if (match && match[1]) {
		return match[1];
	} else {
		return paragraph; // Returns the entire paragraph if no period is found
	}
}