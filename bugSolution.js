function foo(a, b) {
  // Handle null values by providing default values or alternative behavior
  a = a === null ? 0 : a; // Use 0 as default if a is null
  b = b === null ? 0 : b; // Use 0 as default if b is null
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0