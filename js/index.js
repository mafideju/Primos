const Primos = (num) => {
  let primos = [];
  let result = [];

  for (let i = 0; i <= num; i++) {
    primos[i] = true;
  }

  primos[0] = false;
  primos[1] = false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primos[i * j] = false
    }
  }

  for (let i = 0; i < primos.length; i++) {
    if (primos[i]) {
      result.push(i);
    }
  }
  return result;
}

console.log(Primos(20));