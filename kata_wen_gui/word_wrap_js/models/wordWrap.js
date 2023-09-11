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
    if (
      lastIndexOfSpace !== -1 &&
      subString.length === num &&
      str[endIndex] === " "
      // # the cat saw the sea
    ) {
          arr.push(subString)
          startIndex = endIndex + 1;
          endIndex = startIndex + num;   
    } else if (
      lastIndexOfSpace !== -1 &&
      subString.length === num &&
      str[endIndex] !== " "
      // # Tanpopo the black...
    ) {
      const subSubString = subString.slice(0, lastIndexOfSpace);
      arr.push(subSubString);
      startIndex += lastIndexOfSpace + 1;
      endIndex = startIndex + num;
    } else if (lastIndexOfSpace !== -1 && subString.length < num) {
      arr.push(subString);
      startIndex = endIndex;
      endIndex = endIndex + num;
    } else if (lastIndexOfSpace === -1) {
      if ( str[endIndex] === " ") {
        arr.push(subString );
        startIndex = endIndex +1;
        endIndex = endIndex + num;
      }
      else if (endIndex < strLength && str[endIndex] !==" " ) {
        arr.push(subString + "-");
        startIndex = endIndex;
        endIndex = endIndex + num;
      }
      else{
        arr.push(subString);
        startIndex = endIndex;
        endIndex = endIndex + num;
      }
     
    }
  }

  for (const el of arr) {
    if (arr.indexOf(el) !== arr.length - 1) {
      console.log(el + "\n");
    } else {
      console.log(el);
    }
  }

  return arr.length;
};

module.exports = wordWrap;
