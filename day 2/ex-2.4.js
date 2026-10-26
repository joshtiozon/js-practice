const prices = [8, 15, 12, 25];
let total = 0;
for (const price of prices) {
total += price;
}
console.log(`Items: ${prices.length}`);
console.log(`Total: ₱${total}`);