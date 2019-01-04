const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
     	const roosterCall = Rooster.announceDawn();
      assert.ok(expected == roosterCall);
    })
   
  })
  describe('timeAtDawn', () => {
    it( 'returns its argument as a string', ()=> {
      const inputNumber = 12;
      const expected = '12';
      const actual = 	Rooster.timeAtDawn(inputNumber)
      assert.equal(expected, actual)
     
    })
    it('throws an error if passed a number greater than 23', ()=> {
      const inputNumber = 55;
      
      const expected = RangeError;
     
      assert.throws(()=> Rooster.timeAtDawn(inputNumber), expected);
    })
  })
});
