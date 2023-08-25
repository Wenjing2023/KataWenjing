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


    switch(rollCase) {
        case "chance":
            result = calculateChanceScore(diceRoll)
            break;
        case "yatzy":
            result = checkForYatzyByEvery(diceRoll)
            break;
    }

    return result;
}

module.exports = yatzy;





