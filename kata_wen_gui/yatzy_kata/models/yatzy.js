const yatzy = function(diceRoll, rollCase){
    let result = 0;

    const calculateChanceScore = function(arr) {
        return arr.reduce((sum, num) => sum += num);
    }

    const checkForYatzyByFilter = (arr) => {
        const yatzyAchieved = arr.filter((num) => num === arr[0]);
        if (yatzyAchieved.length === 5) {
            return 50
        } else { 
            return 0
        }
    }

    const checkForYatzyByEvery = (arr) => {
        const yatzyAchieved = arr.every((index) => arr[index] === arr[0])
        if (yatzyAchieved) {
            return 50
        }
        return 0
    }

    const rollCaseForNums = (rollCase)=>{
        let oneToSix; 
        switch(rollCase){
            case "ones":
                oneToSix = 1
                break;
            case "twos":
                oneToSix = 2
                break;
            case "threes":
                oneToSix = 3
                break;
            case "fours":
                oneToSix = 4
                break;
            case "fives":
                oneToSix = 5
                break;
            case "sixes":
                oneToSix = 6
                break;
        }
        return oneToSix
    }

    const calculateNumsScore = (arr,rollCase)=>{
        const oneToSix = rollCaseForNums(rollCase)
       // console.log("oneToSix: ",oneToSix);
        const filteredArray = arr.filter((num)=>num === oneToSix); 
        return filteredArray.reduce((sum,num)=> {
            return sum += num
        },0);
    }

    const checkAndCalculateforPair = function(arr) {
        const dictOfNumbers = {}
        for (let i = 1; i <= 6; i++) {
            const numArray = arr.filter((num)=>num === i)
            dictOfNumbers["arrayOf" + i + "s"] = numArray.length >= 2 ? numArray[0] + numArray[1] : 0;
        }
        return Math.max(...Object.values(dictOfNumbers))
    }

    const checkAndCalculateforTwoPairs = (arr) => {
        const dictOfNumbers = {}
        for (let i = 1; i <= 6; i++) {
            const numArray = arr.filter((num)=>num === i)
            dictOfNumbers["arrayOf" + i + "s"] = numArray.length >= 2 ? numArray[0] + numArray[1] : 0;
        }
        let counter = 0
        for (const value in dictOfNumbers){
            if (dictOfNumbers[value]!==0){
                counter ++
            }
        }
        if (counter ===2){
        return Object.values(dictOfNumbers).reduce((sum, num) => sum += num)
        }

        return 0
    }

    const checkAndCalculateforThreeOfAKind = (arr) =>{
        const dictOfNumbers = {}
        for (let i = 1; i <= 6; i++) {
            const numArray = arr.filter((num)=>num === i)
            dictOfNumbers["arrayOf" + i + "s"] = numArray.length >= 3 ? numArray[0] + numArray[1] + numArray[2]: 0;
        }
        return Object.values(dictOfNumbers).reduce((sum, num) => sum += num)
    }

    const checkAndCalculateforFourOfAKind = (arr) => {
        const dictOfNumbers = {}
        for (let i = 1; i <= 6; i++) {
            const numArray = arr.filter((num)=>num === i)
            if (numArray.length >= 4) {
                dictOfNumbers["arrayOf" + i + "s"] = 0
                for (let j=0; j<4; j++) {
                    dictOfNumbers["arrayOf" + i + "s"] += numArray[i]
                }
                return Object.values(dictOfNumbers)[0]
            }
        }
        return 0
    }

    const checkForSmallStraight = function(arr) {
        const smallStraightArray = [1,2,3,4,5]
        const sortedArr = arr.sort((a,b) => a-b)
        const compareArrays = (smallStraightArray, sortedArr) => {
            smallStraightArray.length === sortedArr.lenth &&
            smallStraightArray.every((element, index) => element === sortedArr[index])
        }
        if (compareArrays) {
            return 15
        }
        return 0
    }

    const checkForLargeStraight = function(arr) {
        const largeStraightArray = [2,3,4,5,6]
        const sortedArr = arr.sort((a,b) => a-b)
        const compareArrays = (largeStraightArray, sortedArr) => {
            largeStraightArray.length === sortedArr.lenth &&
            largeStraightArray.every((element, index) => element === sortedArr[index])
        }
        if (compareArrays) {
            return 20
        }
        return 0
    }

    const checkForFullHouse = (arr) => {
        let superArray = []
        for (let i = 1; i <= 6; i++ ){
            const numArray = arr.filter((num)=>num === i)
            if (numArray.length === 3 || numArray.length === 2){
                superArray.push(numArray)
            }
        }
        if ((superArray.length === 2 && superArray[0].length === 2 && superArray[1].length === 3) ||
        superArray.length === 2 && superArray[0].length === 3 && superArray[1].length === 2) {
            superArray = [...superArray[0], ...superArray[1]]
            return superArray.reduce((sum, num) => sum += num)
        }
        return 0
    }



    switch(rollCase) {
        case "chance":
            result = calculateChanceScore(diceRoll)
            break;
        case "yatzy":
            result = checkForYatzyByEvery(diceRoll)
            break;
        case "ones":
        case "twos":
        case "threes":
        case "fours":    
        case "fives":
        case "sixes":    
            result = calculateNumsScore(diceRoll, rollCase)
            break;
        case "pair":
            result = checkAndCalculateforPair(diceRoll)
            break;
        case "twoPairs":
            result = checkAndCalculateforTwoPairs(diceRoll)
            break;
        case "threeOfAKind":
            result = checkAndCalculateforThreeOfAKind(diceRoll)
            break;
        case "fourOfAKind":
            result = checkAndCalculateforFourOfAKind(diceRoll)
            break;
        case "smallStraight":
            result = checkForSmallStraight(diceRoll)
            break;
        case "largeStraight":
            result = checkForLargeStraight(diceRoll)
            break;
        case "fullHouse":
            result = checkForFullHouse(diceRoll)
            break;
    }

    return result;
}

module.exports = yatzy;





