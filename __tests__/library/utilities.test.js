const Utilities = require('../../library/utilities');

jest.useFakeTimers();

describe('Utilities', () => {

  describe('wait', () => {
    const { wait } = Utilities;

    it('resolves a promise', done => {
      const waiting = wait(0);
      waiting.then(done);
    });
  });

  describe('properCase', () => {
    const { properCase } = Utilities;
    test('multiple words', () => {
      const sentence = 'the fox says uwu';
      expect(properCase(sentence)).toEqual('The Fox Says Uwu');
    });
  });

  describe('randomFromArray', () => {
    const arr = [1,2,3];
    const ogRandom = Math.random;
    const rndArray = Utilities.randomFromArray;

    afterEach(() => {
      Math.random = ogRandom;
    });

    it('picks 1', () => {
      Math.random = () => .3;
      expect(rndArray(arr)).toEqual(1);
    });
    it('picks 2', () => {
      Math.random = () => .4;
      expect(rndArray(arr)).toEqual(2);
    });
    it('picks 3', () => {
      Math.random = () => .8;
      expect(rndArray(arr)).toEqual(3);
    });
  });
});