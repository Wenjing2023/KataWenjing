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

    beforeEach(function(){
        noOne = [2,3,2,4,5]
        oneOne = [1,4,6,3,5]
        twoOnes = [1,1,3,4,6]
        threeOnes = [1,1,1,3,4]
        fourOnes = [1,1,1,1,4]
        yatzyOne = [1,1,1,1,1]
        smallStraight = [1,2,3,4,5]
        largeStraight = [2,3,4,5,6]
        fullHouse = [2,2,3,3,3]
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
        assert.strictEqual(actual, false);
    })

})