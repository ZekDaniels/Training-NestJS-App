const addNumbers = (num1, num2) => num1+num2

describe('add Numbers', () => {
  it('adds to numbers', () => {
    expect(addNumbers(2,2)).toEqual(4);
  });
});

// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toEqual(true);
//   });
// });
