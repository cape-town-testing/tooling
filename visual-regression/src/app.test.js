const sum = (a, b) => a + b;

describe('sum', () => {
  it('adds 2 numbers', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });
});
