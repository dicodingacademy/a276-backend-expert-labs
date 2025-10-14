import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import detectTriangle from '../../src/detectTriangle.js';

let actualAnswer;

Given('Saya memiliki nilai sisi {int}, {int}, {int}', function(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
});

When('Saya mendeteksi segitiga', function() {
  actualAnswer = detectTriangle(this.sideA, this.sideB, this.sideC);
});

Then('Menghasilkan {string}', (expectedAnswer) => {
  assert.strictEqual(actualAnswer, expectedAnswer);
});
