userConf = confirm(`Tell me three most important words 💚`)

if (userConf) {
    finalString = ``;

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
        } while (!mainWord || !letters)
        console.log(`Word #${word}: ${mainWord}`);

        do {
            typeTransform = prompt(`Choose type of transfromation for "${mainWord}": uppercase|lowercase|capitalize`, `uppercase`)

            if(typeTransform)
                typeTransform = typeTransform.toLowerCase().replaceAll(` `,``);

            if (typeTransform === `uppercase`) {
                typeTransformWord = mainWord.toUpperCase();
            } else if (typeTransform === `lowercase`) {
                typeTransformWord = mainWord.toLowerCase();
            } else if (typeTransform === `capitalize`) {
                typeTransformWord = mainWord.charAt(0).toUpperCase() + mainWord.slice(1);
            }
        } while (!typeTransform || typeTransform !== `uppercase` && typeTransform !== `lowercase` && typeTransform !== `capitalize`)

        console.log(`Transform type for word #${word}: ${typeTransform}`);
        console.log(`Transformed word #${word}: ${typeTransformWord}`);

        finalString += typeTransformWord;
        finalString += word === 3 ? `!` : ` `;
    }
    console.log(`******`);
    console.log(finalString);
}
