const twoSum = require('./index');

test('twoSum function is defined', () => {
  expect(twoSum).toBeDefined();
});

test('Calling twoSum with `[2,7,11,15]` with target 9 will return `[0,1]` ', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});

test('Calling twoSum with `[3,2,4]` with target 6 will return `[1,2]` ', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});

test('Calling twoSum with `[3,3]` with target 6 will return `[0,1]` ', () => {
  expect(twoSum([3,3], 6)).toEqual([0,1]);
});