price = 0

do {
	typeOfRoll = prompt(`Hamburger or Cheeseburger?`);
	if(typeOfRoll){
		 typeOfRoll = typeOfRoll.replaceAll(` `,``).toLowerCase();
	}
} while (typeOfRoll !== `hamburger` && typeOfRoll !== `cheeseburger`)
console.log(typeOfRoll);

if (typeOfRoll === `hamburger`)
    price += 10;

if (typeOfRoll === `cheeseburger`) {
    price += 15;
}
console.log(price)

if (typeOfRoll === `cheeseburger`) {
	
	doubleCheese = confirm(`Would you like double cheese?`);
	if (doubleCheese)
		 price += 5
}

potato = confirm(`Would you like potato?`);
if (potato) {
    potatoType = prompt(`Choose potato size: small/middle/big`);
    if(potatoType)
       potatoType = potatoType.replaceAll(` `,``).toLowerCase();

    switch (potatoType) {
        case potatoType = `middle`:
            price += 15;
            break;
        case potatoType = `big`:
            price += 20;
            break;
        default:
            potatoType = `small`
            price += 10;
    }
}
console.log(price)


sauce = confirm(`Would you like sauce?`);
if (sauce) {
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`);
    if(sauceType)
        sauceType = sauceType.replaceAll(` `,``).toLowerCase();

    if(sauceType !== `mayonnaise`){
        sauceType = `ketchup`
    }

    price += 10;
}
console.log(price)



document.write(`<h2>Your order:</h2>
    <ul>
        <li>Bulka 🍔: ${typeOfRoll} </li>
        ${potato ? `<li>Potato 🍟: ${potatoType}</li>` : ``}
        ${sauce ? `<li>Sauce 🧂: ${sauceType}</li>` : ``}
    </ul>
    <p>Price: $${price}</p>
`);
