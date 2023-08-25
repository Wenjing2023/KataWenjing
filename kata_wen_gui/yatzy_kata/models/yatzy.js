const yatzy = function(diceRoll, rollCase){
    let result = false;

    const calculateChanceScore = function(arr) {
        return arr.reduce((sum, num) => sum += num);
    }

    const checkForYatzyByFilter = (arr) => {
        const yatzyAchieved = arr.filter((num) => num === arr[0]);
        if (yatzyAchieved.length === 5) {
            return 50
        } else { 
            return false
        }
    }

    const checkForYatzyByEvery = (arr) => {
        const yatzyAchieved = arr.every((index) => arr[index] === arr[0])
        if (yatzyAchieved) {
            return 50
        }
        return yatzyAchieved
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
            case "sixs":
                oneToSix = 6
                break;
        }
        return oneToSix
    }
    const calculateNumsScore = (arr,rollCase)=>{
        const oneToSix = rollCaseForNums(rollCase)
        console.log("oneToSix: ",oneToSix);
        const filteredArray = arr.filter((num)=>num === oneToSix); 
        return filteredArray.reduce((sum,num)=> {
            return sum += num
        },0);
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
            result = calculateNumsScore(diceRoll, rollCase)
            break;
    }

    return result;
}

module.exports = yatzy;





