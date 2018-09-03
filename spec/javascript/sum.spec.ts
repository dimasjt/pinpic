import sum from "utils/sum"

test('1 + 1 equals 2', () => (
  expect(1 + 1).toBe(2)
))

test('sum 1 + 2 equals 3', () => {
  expect(sum(1 + 2)).toBe(3)
})
