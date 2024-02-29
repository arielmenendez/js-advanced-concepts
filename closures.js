function counter() {
  let count = 0;

  function increment() {
    return (count += 1);
  }

  return increment;
}

const generateId = counter();

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
