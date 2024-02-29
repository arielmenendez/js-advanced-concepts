const person = {
  name: 'John',
  email: 'john@email.com',
};

console.log(Reflect.get(person, 'name'));
console.log(Reflect.has(person, 'email'));
console.log(Reflect.has(person, 'phone'));
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getOwnPropertyDescriptor(person, 'name'));
console.log(Reflect.ownKeys(person));

Reflect.defineProperty(person, 'phone', { writable: true });
console.log(Reflect.has(person, 'phone'));
Reflect.set(person, 'phone', '8295733035');
console.log(Reflect.ownKeys(person));
Reflect.deleteProperty(person, 'name');
console.log(Reflect.ownKeys(person));
