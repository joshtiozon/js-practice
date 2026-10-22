const item = "Skyflakes";
const price = 8;
const qty = 3;
console.log(`${qty} x ${item} = ₱${price * qty}`);

const name = "Josh";
const age = 17;
const strand = "ICT";
const isIntern = true;
console.log(`${name}, ${age}, ${strand} strand`);
console.log(`Intern? ${isIntern}`);
console.log(`09940654402`);

let baon = 150;
const lunch = 45;
const jeep = 13;
const snacks = 20;
baon -= lunch;
baon -= jeep;
baon -= snacks;
console.log(`Baon left: ₱${baon}`);

//Exercise 1.8 — Fair fare (with if) 
const distance = 10;
const minFare = 13;
const extraKm = distance - 4;
const extraCost = extraKm * 1.80;
const totalFare = minFare + extraCost;
if (distance <= 4) {
    console.log(`Fare for ${distance} km: ₱${minFare.toFixed(2)}`);
} else {
    console.log(`Fare for ${distance} km: ₱${totalFare.toFixed(2)}`);
}
console.log(`Fare for 3 km: ₱${minFare.toFixed(2)}`);
const studentDiscount = 20;
const discountedFare = totalFare * 0.80;
console.log(`Student fare: ₱${discountedFare.toFixed(2)}`);

const n = 7;
if (n % 2 !== 0) {
    console.log(`${n} is odd.`);
} else if (n % 2 === 0) {
    console.log(`${n} is even.`);
}

const grade = 90;
if (grade >= 90) {
    console.log(`Grade ${grade}: Outstanding!`);
} else if (grade >= 89) {
    console.log(`Grade ${grade}: Very Satisfactory`);
} else if (grade >= 85) {
    console.log(`Grade ${grade}: Satisfactory`);
} else if (grade >= 79) {
    console.log(`Grade ${grade}: Fairly Satisfactory`);
} else if (grade >= 75) {
    console.log(`Grade ${grade}: Good!`);
} else if (grade >= 74) {
    console.log(`Grade ${grade}: Did not meet expectations.`);
}
if (grade >= 75) {
    console.log("Passed ✅");
} else {
    console.log("Failed ❌");
}

