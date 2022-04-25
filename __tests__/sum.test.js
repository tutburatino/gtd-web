import sum from './__fixtures__/sum';

test('init test check. add 2, 6, 4 to equal 12', () => {
  expect(sum(2, 6, 4)).toBe(12);
});
