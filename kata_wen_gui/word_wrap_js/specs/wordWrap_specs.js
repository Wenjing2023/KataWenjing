const assert=require('assert')

const wordWrap = require("../models/wordWrap.js")

describe("wordWrap", function () {
      let easy;
      let cat;
      let chemistry;
      

      beforeEach(function () {
            easy = "Hello World"
            cat = "Tanpopo the black and white cat catches the birds"
            chemistry = "methylamphetalamine"
      })

      // it("returns 2 lines for an easy string with a column number of 8", function () {
      //       const actual = wordWrap(easy, 8)
      //       assert.strictEqual(actual,2)
      // })

      // it("returns 1 lines for an easy string with a column number of 20", function () {
      //       const actual = wordWrap(easy, 20)
      //       assert.strictEqual(actual,1)
      // })

      // it("returns 1 lines for an easy string with a column number of 3", function () {
      //       const actual = wordWrap(easy, 3)
      //       assert.strictEqual(actual,4)
      // })

      // it('should return 1 line for the cat string with 50 length', function() {
      //       assert.strictEqual(wordWrap(cat, 50), 1)
      // })
      
      it('should return 2 lines for the cat string with 30 length', function() {
            assert.strictEqual(wordWrap(cat, 30), 2)
      })
})