const products = [
{ name: "Kopiko", price: 8, stock: 24 },
{ name: "Coke Mismo", price: 20, stock: 0 },
{ name: "Piattos", price: 25, stock: 6 },
{ name: "Skyflakes", price: 8, stock: 0 },
{ name: "Nova", price: 22, stock: 10 }
];

console.log(`Out of stock: ${products.filter(p => p.stock === 0).map(p => p.name).join(', ')}`);

console.log(`₱10 and below: ${products.filter(p => p.price <= 10).map(p => p.name).join(', ')}`);

const piattos = products.find(p => p.name === "Piattos");
console.log(`${piattos.name} costs ₱${piattos.price} (${piattos.stock} left)`);