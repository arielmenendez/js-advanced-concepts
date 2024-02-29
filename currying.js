const transaction = (fee, balance, amount) => {
  return balance + amount - fee;
};

const curry = (fn, ...args) => {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
};

const freeTransaction = curry(transaction, 0);
const regularTransaction = curry(transaction, 15);

console.log(freeTransaction(10, 90));
console.log(regularTransaction(10, 90));
