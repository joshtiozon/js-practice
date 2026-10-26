const distance = 10;
const minFare = 13;
const extraKm = distance - 4;
const extraCost = extraKm * 1.80;
const totalFare = minFare + extraCost;
const studentDiscount = 20;
const discountedFare = totalFare * 0.80;
console.log(`Student fare: ₱${discountedFare.toFixed(2)}`);

if (distance <= 4) {
    console.log(`Fare for ${distance} km: ₱${minFare.toFixed(2)}`);
} else {
    console.log(`Fare for ${distance} km: ₱${totalFare.toFixed(2)}`);
}
console.log(`Fare for 3 km: ₱${minFare.toFixed(2)}`);
