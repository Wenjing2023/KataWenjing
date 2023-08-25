const yatzy = function(diceRoll, rollCase){
    let result = false;

    const calculateChanceScore = function(arr) {
        return arr.reduce((sum, num) => sum += num);
    }

    const checkForYatzy = (arr) => {
        const yatzyAchieved = arr.filter((num) => num === arr[0]);
        if (yatzyAchieved.length === 5) {
            return 50
        } else { 
            return false
        }
    }


    switch(rollCase) {
        case "chance":
            result = calculateChanceScore(diceRoll)
            break;
        case "yatzy":
            result = checkForYatzy(diceRoll)
            break;
    }

    return result;
}

module.exports = yatzy;





