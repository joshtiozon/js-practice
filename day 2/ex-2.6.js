const grades = [88, 92, 75, 79];
const addBonus = (grade) => grade + 2;
const withBonus = grades.map(addBonus);

console.log("Original: " + grades.join(", "));
console.log("With bonus: " + withBonus.join(", "));