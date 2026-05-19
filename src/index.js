export function greet(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}!`;
}
 
export function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('numbers must be an array');
  }
  return numbers.reduce((acc, n) => acc + n, 0);
}
