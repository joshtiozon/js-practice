const money = 100;
const items = 67;

if (money < items) {
	console.log("Kulang po ang bayad!");
} else {
	let sukli = money - items;
	console.log(`Sukli: ₱${sukli}`);

	const twenties = Math.floor(sukli / 20);
	sukli %= 20;
	const tens = Math.floor(sukli / 10);
	sukli %= 10;
	const fives = Math.floor(sukli / 5);
	sukli %= 5;
	const ones = sukli;

	console.log(`₱20 x ${twenties}`);
	console.log(`₱10 x ${tens}`);
	console.log(`₱5 x ${fives}`);
	console.log(`₱1 x ${ones}`);
}