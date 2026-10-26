const distance = 10;
const minFare = 13;
const extraKm = distance - 4;
const extraCost = extraKm * 1.80;
const totalFare = minFare + extraCost;
console.log(`Fare for 10km: ₱${totalFare.toFixed(2)}`);