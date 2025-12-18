const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Jorge', () => {
    expect(values.firstName).toEqual('Jorge');
  });
  test('lastName is Ramirez', () => {
    expect(values.lastName).toEqual('Ramirez');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2004', () => {
    expect(values.birthYear).toEqual(2004);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Jorge Ramirez and I am 21 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Jorge Ramirez', () => {
    expect(values.fullName).toEqual('Jorge Ramirez');
  });
  test('age is 21', () => {
    expect(values.age).toEqual(21);
  });
});
