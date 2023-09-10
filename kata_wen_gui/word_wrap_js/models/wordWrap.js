const wordWrap = function (str, num) {
  const arr = [];
  const strLength = str.length;
  let startIndex = 0;
  let endIndex = num;

      if (strLength <= num) {
    arr.push(str);
    return arr.length;
  }

  while (startIndex < strLength) {
    const subString = str.slice(startIndex, endIndex);
    const lastIndexOfSpace = subString.lastIndexOf(" ");
      
        console.log(startIndex);
        if (lastIndexOfSpace !== -1) {
              const subSubString = subString.slice(startIndex, lastIndexOfSpace);
              startIndex = lastIndexOfSpace + 1;
              endIndex = startIndex + num;
              arr.push(subSubString);
        } else if (lastIndexOfSpace === -1) {
                  arr.push(subString); 
                  startIndex = endIndex
                  endIndex = endIndex + num; 
              
             
            
              //     } else if (lastIndexOfSpace === -1 && subString.length > num) {
              //           for (let i = 0; i < subString.length; i += num){
              //                 subSubString = subString.slice(i, i + num)
              //                 arr.push(subSubString);
              //           } 
              //           break;
              
        }
 
  }
  console.log(arr);
  return arr.length;
};

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
