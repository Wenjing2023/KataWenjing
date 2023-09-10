const wordWrap = function (str, num) {
  const arr = [];
  const strLength = str.length;
  let startIndex = 0;
  let endIndex = num;

      if (strLength <= num) {
    console.log(str);
    return 1;
  }

  while (startIndex < strLength) {
    const subString = str.slice(startIndex, endIndex);
    const lastIndexOfSpace = subString.lastIndexOf(" ");
      if (lastIndexOfSpace !== -1) {
              const subSubString = subString.slice(0, lastIndexOfSpace);
              startIndex += lastIndexOfSpace + 1;
              endIndex = startIndex + num;
              arr.push(subSubString);
      } else if (lastIndexOfSpace === -1) {
            if ((startIndex + num) < strLength) {
                  arr.push(subString +"-");
            } else {
                  arr.push(subString);                  
            }
            startIndex = endIndex;
            endIndex = endIndex + num;
        }
 
  }

  for (const el of arr) {
      if (arr.indexOf(el) !== arr.length-1){
            console.log(el.length);
            console.log(el + "\n");
      } else {
            console.log(el);
      }
  }

  return arr.length;
};

module.exports = wordWrap;