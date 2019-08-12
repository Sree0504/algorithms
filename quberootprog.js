function fastCubeRoot(num) {
  
  var cubes_10 = {
      '0': 0,
      '1': 1,
      '8': 8,
     '27': 7,
     '64': 4,
    '125': 5,
    '216': 6,
    '343': 3,
    '512': 2,
    '729': 9
  };
  
  // get last 3 numbers and the remaining numbers
  var arr = num.toString().split('');
  var last = arr.slice(-3);
  var first = parseInt(arr.slice(0, -3).join(''));
  
  // answer will be stored here
  var lastDigit = 0, firstDigit = 0, index = 0;
  
  // get last digit of cube root
  for (var i in cubes_10) {
    if (index === parseInt(last[last.length-1])) { lastDigit = cubes_10[i]; }
    index++;
  }
  
  // get first digit of cube root
  index = 0;
  for (var i in cubes_10) {
    if (parseInt(i) <= first) { firstDigit = index; }
    index++;
  }
  
  // return cube root answer
  return firstDigit + '' + lastDigit;
  
}

fastCubeRoot(238748); 