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
        console.log(dictOfNumbers);
        const total = Object.values(dictOfNumbers).reduce((sum, num) => sum += num)
        console.log(total);
        return total
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
        
    }

    return result;
}

module.exports = yatzy;





