const { greet, calculateSum1 } = require('./app');

describe('Unit Tests', () => {
  test('greet returns correct greeting', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('calculateSum1 adds two numbers', () => {
    expect(calculateSum1(2, 3)).toBe(5);
  });
});

describe('Integration Tests', () => {
  test('greet and calculateSum1 work together', () => {
    const sum = calculateSum1(1, 2);
    const message = greet(`Sum is ${sum}`);
    expect(message).toBe('Hello, Sum is 3!');
  });
});
