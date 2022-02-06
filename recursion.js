function factorialIterativo(num) {
  let acum = 1;
  if (num === 0 || num === 1) {
    return acum;
  } else {
    for (i = 2; i <= num; i++) {
      acum *= i;
    }
    return acum;
  }
}

function factorial(num) {
  let acum = 1;
  if (num === 0) {
    return acum;
  } else {
    acum = factorial(num - 1) * num;
    return acum;
  }
}

function fib(num) {
  if (num < 2) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}
function factores(num, primos = [], posF = 2) {
  if (num === 1) {
    return primos;
  } else if (num % posF === 0) {
    primos.push(posF);
    num = num / posF;
  } else {
    posF++;
  }
  return factores(num, primos, posF);
}
