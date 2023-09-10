const wordWrap = function (str, num) {
      const arr = []
      const strLength = str.length
      let startIndex = 0
      let endIndex = num
      let subString = str.slice(startIndex, endIndex)
      let lastIndexOfSpace = subString.lastIndexOf(" ")

      while (startIndex < strLength) {
            subString = str.slice(startIndex, endIndex)
            console.log(subString);
            lastIndexOfSpace = subString.lastIndexOf(" ")
            console.log(lastIndexOfSpace);
            let subSubString = ""
            if (lastIndexOfSpace !== -1) {
                  subSubString = subString.slice(startIndex, lastIndexOfSpace)
                  startIndex = lastIndexOfSpace + 1
                  endIndex = startIndex + num
                  // console.log(lastIndexOfSpace);
            } else if (lastIndexOfSpace === -1) {
                  subSubString = subString.slice(0, subString.length)
                  console.log(subSubString);
                  arr.push(subSubString)
                  break
            }
            arr.push(subSubString)
      }
      
      



      
      console.log(arr);
      return arr.length
}



module.exports = wordWrap;


      // const subString = str.slice(indexOfPreviousSpace, num)
      //       const lastIndexOfWhitespace = subString.lastIndexOf('\\s')
      //       if (lastIndexOfWhitespace > 0) {
      //             const subSubString = subString.slice(indexOfPreviousSpace, lastIndexOfWhitespace)
      //             indexOfPreviousSpace = lastIndexOfWhitespace + 1
      //             arr.push(subSubString)
      //       }
      // const stringLengthChecker = (str, num) => {
      //       if (remainingStringLength <= num) {
      //             console.log(str);
      //             arr.push(str)
      //             return 1
      //       } 
      // }