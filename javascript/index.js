hamburgerPrice = ``;
cheeseburgerPrice = ``;
potatoPrice = ``;
saucePrice = ``;



do {
	typeOfRoll = prompt(`Hamburger or Cheeseburger?`);
} while (typeOfRoll !== `Hamburger` && typeOfRoll !== `Cheeseburger`)
console.log(typeOfRoll);

if (typeOfRoll === `Hamburger`) {
	hamburgerPrice = 10
} else if (typeOfRoll === `Cheeseburger`) {
	hamburgerPrice = 15
}
console.log(hamburgerPrice)


doubleCheese = confirm(`Would you like double cheese?`);
if (doubleCheese) {
	doubleCheese = 5
}
console.log(doubleCheese)

potato = confirm(`Would you like potato?`);
if (potato) {
	potato = prompt(`Choose potato size: small/middle/big`)
}
switch (true) {
	case potato === `small` || potato === `` || !potato:
		potatoPrice = 10;
		potato = `small`
		break;
	case potato === `middle`:
		potatoPrice = 15;
		break;
	case potato === `big`:
		potatoPrice = 20;
		break;
}
console.log(potatoPrice)


sauce = confirm(`Would you like sauce?`);
if (sauce) {
	sauce = prompt(`Choose sauce: ketchup/mayonnaise`)
}
if (sauce === `ketchup` || sauce === `` || !sauce) {
	saucePrice = 10;
	sauce = `ketchup`
} else if (sauce === `mayonnaise`) {
	saucePrice = 10;
	sauce = `mayonnaise`;
}
console.log(saucePrice)

price = Number((hamburgerPrice) + Number(cheeseburgerPrice) + Number(potatoPrice) + Number(saucePrice) + Number(doubleCheese))

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${typeOfRoll} </li>
		<li>Potato 🍟: ${potato} </li>
		<li>Sauce 🧂: ${sauce} </li>
	</ul>

	<p>Price: $${price} </p>
`);

