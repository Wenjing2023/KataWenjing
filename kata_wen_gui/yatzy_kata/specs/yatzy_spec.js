const assert=require('assert')

const yatzy = require ('../models/yatzy.js')

describe('yatzy', function(){
    let noOne 
    let oneOne
    let twoOnes
    let threeOnes
    let fourOnes
    let yatzyOne
    let smallStraight
    let largeStraight
    let fullHouse
    let twoFours

    beforeEach(function(){
        noOne = [2,3,2,4,5]
        oneOne = [1,4,6,3,5]
        twoOnes = [1,1,3,4,6]
        threeOnes = [1,4,1,1,3]
        fourOnes = [1,1,1,1,4]
        yatzyOne = [1,1,1,1,1]
        smallStraight = [1,2,3,4,5]
        largeStraight = [2,3,4,5,6]
        fullHouse = [2,2,3,3,3]
        twoFours = [4,4,3,1,1]
    })

    it('should caculate sum of all dice', function(){
        const actual = yatzy(noOne, "chance");
        assert.strictEqual(actual, 16);

    })

    it('should identify that an array is actually a yatzy', function() {
        const actual = yatzy(yatzyOne, "yatzy");
        assert.strictEqual(actual, 50);
    })

    it('should identify that an array is not actually a yatzy', function() {
        const actual = yatzy(noOne, "yatzy");
        assert.strictEqual(actual, 0);
    })

    it("should calculate score for ones", function(){
        const actual = yatzy(oneOne, "ones");
        assert.strictEqual(actual,1)
    })
    
    it("should calculate score for fives", function(){
        const actual = yatzy(oneOne, "fives");
        assert.strictEqual(actual,5)
    })
    
    it("should calculate score for sixs", function(){
        const actual = yatzy(twoOnes, "sixes");
        assert.strictEqual(actual,6)
    })
    
    it("should calculate score for fours", function(){
        const actual = yatzy(twoFours, "fours");
        assert.strictEqual(actual,8)
    })
    
    it("should give 0 if no one for ones", function(){
        const actual = yatzy(noOne, "ones");
        assert.strictEqual(actual,0)
    })
   
    it('should be able to calculate the score for one pair', function() {
        const actual = yatzy(twoOnes, "pair")
        assert.strictEqual(actual, 2);
    })
    
    it('should be able to calculate the score for the highest pair if there are two', function() {
        const actual = yatzy(twoFours, "pair")
        assert.strictEqual(actual, 8);
    })
    
    it('should be able to calculate the score for no pair', function() {
        const actual = yatzy(smallStraight, "pair")
        assert.strictEqual(actual, 0);
    })

    it('should only count a pair even if there are 3 of the same numbers', function() {
        const actual = yatzy(threeOnes, "pair")
        assert.strictEqual(actual, 2);
    })

    it('should calculate the score for 2 pairs', function() {
        const actual = yatzy(fullHouse, "twoPairs")
        assert.strictEqual(actual, 10);
    })

    it("should calculate as 0 for only one pair", function(){
        const actual = yatzy(noOne, "twoPairs")
        assert.strictEqual(actual, 0)
    })

    it("should calculate as 0 for 4 of a kind", function(){
        const actual = yatzy(fourOnes, "twoPairs")
        assert.strictEqual(actual, 0)
    })

    it("should calculate as 3 for three ones", function(){
        const actual = yatzy(threeOnes, "threeOfAKind")
        assert.strictEqual(actual, 3)
    })

    it("should calculate as 3 for four ones in three of a kind category", function(){
        const actual = yatzy(fourOnes, "threeOfAKind")
        assert.strictEqual(actual, 3)
    })

    it("should calculate as 4 for four ones", function(){
        const actual = yatzy(fourOnes, "fourOfAKind")
        assert.strictEqual(actual, 4)
    })
})