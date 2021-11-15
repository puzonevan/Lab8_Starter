// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('basic number 111-111-1111', () =>{
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});
test('() number (111)-111-1111', () =>{
    expect(functions.isPhoneNumber("(111)-111-1111")).toBe(true);
});
test('invalid number 111-11-11111', () =>{
    expect(functions.isPhoneNumber("111-11-11111")).toBe(false);
});
test('invalid number 2 111-111', () =>{
    expect(functions.isPhoneNumber("111-111")).toBe(false);
});

test('basic email johndoe@gmail.com', () =>{
    expect(functions.isEmail("johndoe@gmail.com")).toBe(true);
});
test('long email johndoeslonglostfourthcousininlaw@gmail.com', () =>{
    expect(functions.isEmail("johndoeslonglostfourthcousininlaw@gmail.com")).toBe(true);
});
test('invalid email johndoe@gmail.pandas', () =>{
    expect(functions.isEmail("johndoe@gmail.pandas")).toBe(false);
});
test('no @ email johndoe', () =>{
    expect(functions.isEmail("johndoe")).toBe(false);
});

test('basic password asdfghjkl', () =>{
    expect(functions.isStrongPassword("asdfghjkl")).toBe(true);
});
test('harder password asdfghjkl1234_', () =>{
    expect(functions.isStrongPassword("asdfghjkl1234_")).toBe(true);
});
test('too long password asdfghjklqwertyui', () =>{
    expect(functions.isStrongPassword("asdfghjklqwertyui")).toBe(false);
});
test('too short password qwe', () =>{
    expect(functions.isStrongPassword("qwe")).toBe(false);
});

test('basic date 01/01/2001', () =>{
    expect(functions.isDate("01/01/2001")).toBe(true);
});
test('1 digit date 1/1/2001', () =>{
    expect(functions.isDate("01/01/2001")).toBe(true);
});
test('invalid date 990/99/2001', () =>{
    expect(functions.isDate("990/99/2001")).toBe(false);
});
test('missing date /99/2001', () =>{
    expect(functions.isDate("/99/2001")).toBe(false);
});

test('basic 6 hex #FFFFFF', () =>{
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
test('basic 3 hex #FFF', () =>{
    expect(functions.isHexColor("#FFF")).toBe(true);
});
test('out of bounds hex #FFFFFG', () =>{
    expect(functions.isHexColor("#FFFFG")).toBe(false);
});
test('out of bounds 3 hex #FFG', () =>{
    expect(functions.isHexColor("#FFG")).toBe(false);
});