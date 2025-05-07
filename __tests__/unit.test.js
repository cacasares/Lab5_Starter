// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//test phone numbers
test('test ucsd phone number', () => {
  expect(isPhoneNumber('858-534-2230')).toBe(true);
});
test('test shabu works', () => {
  expect(isPhoneNumber('858-860-5730')).toBe(true);
});
test('test number that is too short', () => {
  expect(isPhoneNumber('1234')).toBe(false);
});
test('test empty', () => {
  expect(isPhoneNumber('')).toBe(false);
});

//test emails
test('test smtown', () => {
  expect(isEmail('help@smtown.com')).toBe(true);
});
test('test random email', () => {
  expect(isEmail('johndoe@gmail.com')).toBe(true);
});
test('test name', () => {
  expect(isEmail('johndoe')).toBe(false);
});
test('test empty', () => {
  expect(isEmail('')).toBe(false);
});

//test passwords
test('test password that meets all requirements 1', () => {
  expect(isStrongPassword('Slayer123_')).toBe(true);
});
test('test password that meets all requirements 1', () => {
  expect(isStrongPassword('RV12345')).toBe(true);
});
test('test password not starting with a letter', () => {
  expect(isStrongPassword('12345')).toBe(false);
});
test('test too short', () => {
  expect(isStrongPassword('He')).toBe(false);
});

//test dates
test('test my birthday', () => {
  expect(isDate('05/16/2003')).toBe(true);
});
test('test Jay birthday', () => {
  expect(isDate('01/31/2004')).toBe(true);
});
test('test date too short', () => {
  expect(isDate('3/2003')).toBe(false);
});
test('test date too long', () => {
  expect(isDate('123/23/2004')).toBe(false);
});

//test HexColors
test('test white', () => {
  expect(isHexColor('ffffff')).toBe(true);
});
test('test prtty pink', () => {
  expect(isHexColor('ffdada')).toBe(true);
});
test('test 2 character', () => {
  expect(isHexColor('ff')).toBe(false);
});
test('test 7 character', () => {
  expect(isHexColor('fffffff')).toBe(false);
});