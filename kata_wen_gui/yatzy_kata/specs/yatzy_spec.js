const assert=require('assert')

const yatzy = require ('../models/yatzy.js')
const { chance } = require('../models/yatzy.js')

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
        const actual = chance(noOne)
        assert.strictEqual(actual,16 )

    })



})