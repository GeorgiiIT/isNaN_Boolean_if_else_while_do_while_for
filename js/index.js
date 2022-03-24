userConf = confirm(`Tell me three most important words 💚`)

if (userConf) {
	for (word = 1; word <= 3; word++) {
		do {
			mainWord = prompt(`Enter word #${word}`);
			letters = true;
			if (mainWord) {
				for (i = 0; i < 9; i++) {
					if (mainWord.includes(i)) {
						letters = false;
						break;
					}
				}
			}
		} while (!Boolean(mainWord) || mainWord === null || !letters)
		console.log(`Word #${word}: ${mainWord}`)
		do {
			typeTransform = prompt(`Choose type of transfromation for "${mainWord}": uppercase|lowercase|capitalize`, `uppercase`)

			if (typeTransform === `uppercase`) {
				typeTransformWord = mainWord.toUpperCase();

			} else if (typeTransform === `lowercase`) {
				typeTransformWord = mainWord.toLowerCase();

			} else if (typeTransform === `capitalize`) {
				typeTransformWord = mainWord.charAt(0).toUpperCase() + mainWord.slice(1);

			} else typeTransform === ``

		} while (!typeTransform || typeTransform !== `uppercase` && typeTransform !== `lowercase` && typeTransform !== `capitalize`)

		if (word === 1) {
			firstWord = typeTransformWord;
			
			console.log(`Transform type for word #${word}: ${typeTransform}`)
			console.log(`Transformed word #${word}: ${typeTransformWord}`)
			console.log(`Sentanse: ${firstWord}`)
		} else if (word === 2) {
			secondWord = typeTransformWord;
			
			console.log(`Transform type for word #${word}: ${typeTransform}`)
			console.log(`Transformed word #${word}: ${typeTransformWord}`)
			console.log(`Sentanse: ${firstWord} ${secondWord}`)
		} else if (word === 3) {
			thirdWord = typeTransformWord;
			
			console.log(`Transform type for word #${word}: ${typeTransform}`)
			console.log(`Transformed word #${word}: ${typeTransformWord}`)
			console.log(`Sentanse: ${firstWord} ${secondWord} ${thirdWord}!`)
		}
	}
	console.log(`******`);
	console.log(`${firstWord} ${secondWord} ${thirdWord}!`);
}
