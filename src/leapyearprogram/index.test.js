import leapYear from './index';

it ('should not be a leap year if divisible by 100 or 4 and not 100', () => {
  const input = 1990;
  const expectedOutput = false;
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});

it('should be a leap year if divisible by 4, not 100', () => {
  const input = 1984;
  const expectedOutput = true;
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});