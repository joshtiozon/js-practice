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