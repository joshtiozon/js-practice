function computeFare(km) {
  const baseFare = 13;
  const baseDistance = 4; 
  const ratePerKm = 1.80;

  if (km <= baseDistance) {
    return baseFare;
  }

  return baseFare + (km - baseDistance) * ratePerKm;
}

console.log(`3 km: ₱${computeFare(3).toFixed(2)}`);
console.log(`4 km: ₱${computeFare(4).toFixed(2)}`);
console.log(`10 km: ₱${computeFare(10).toFixed(2)}`);
