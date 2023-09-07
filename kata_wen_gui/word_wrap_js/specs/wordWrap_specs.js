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

      it("can return 2 lines for an easy string with a column number of 10", function () {
            const actual = wordWrap(easy, 10)
            assert.strictEqual(actual,2)
      })
})