const CapitalizeWords = (word: string) => {
	const wordSplitted = word.trim().split(' ');
	const joinWords = wordSplitted
		.map((word) => {
			return word[0].toLocaleUpperCase().concat(word.substring(1));
		})
		.join(' ');

	return joinWords;
};

export default CapitalizeWords;
