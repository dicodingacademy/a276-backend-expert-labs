const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const detectTriangle = require('../../src/detectTriangle');

let actualAnswer;

Given('Saya memiliki nilai sisi {int}, {int}, {int}', (sideA, sideB, sideC) => {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
});

When('Saya mendeteksi segitiga', () => {
  actualAnswer = detectTriangle(this.sideA, this.sideB, this.sideC);
});

Then('Menghasilkan {string}', (expectedAnswer) => {
  assert.strictEqual(actualAnswer, expectedAnswer);
});
