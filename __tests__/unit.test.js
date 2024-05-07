// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Valid phone number: 858-209-5906', () => {
  expect(isPhoneNumber('858-209-5906')).toBeTruthy();
});

test('Valid phone number: 999-999-9999', () => {
  expect(isPhoneNumber('999-999-9999')).toBeTruthy();
});

test('Invalid phone number (has letters)', () => {
  expect(isPhoneNumber('abc-efg-hijk')).toBeFalsy();
});

test('Invalid phone number (not enough numbers)', () => {
  expect(isPhoneNumber('8-8-8')).toBeFalsy();
});

test('Valid email: salnav@gmail.com', () => {
  expect(isEmail('salnav@gmail.com')).toBeTruthy();
});

test('Valid email: abc@yahoo.com', () => {
  expect(isEmail('abc@yahoo.com')).toBeTruthy();
});

test('Invalid email (invalid domain)', () => {
  expect(isEmail('abc@5.com')).toBeFalsy();
});

test('Invalid email (No @ symbol)', () => {
  expect(isEmail('salgmail.com')).toBeFalsy();
});

test('Valid strong password: iAmAChicken24', () => {
  expect(isStrongPassword('iAmAChicken24')).toBeTruthy();
});

test('Valid strong password: ThisIsStrong', () => {
  expect(isStrongPassword('ThisIsStrong')).toBeTruthy();
});

test('Invalid strong password (not enough characters)', () => {
  expect(isStrongPassword('abc')).toBeFalsy();
});

test('Invalid strong password (invalid characters)', () => {
  expect(isStrongPassword('abc!)$')).toBeFalsy();
});

test('Valid date: 12/12/2001', () => {
  expect(isDate('12/12/2001')).toBeTruthy();
});

test('Valid date: 5/5/2005', () => {
  expect(isDate('5/5/2005')).toBeTruthy();
});

test('Invalid date (year not long enough)', () => {
  expect(isDate('6/12/14')).toBeFalsy();
});

test('Invalid date (non-date string)', () => {
  expect(isDate('abc')).toBeFalsy();
});

test('Valid hex color: #FF0000', () => {
  expect(isHexColor('#FF0000')).toBeTruthy();
});

test('Valid hex color: #A52A2A', () => {
  expect(isHexColor('#A52A2A')).toBeTruthy();
});

test('Invalid hex color (4 numbers)', () => {
  expect(isHexColor('#0000')).toBeFalsy();
});

test('Invalid hex color (too many digits)', () => {
  expect(isHexColor('#FF00000')).toBeFalsy();
});