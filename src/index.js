module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBrackets = ['(', '{', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const pairsBrackets = {
    ')':'(',
    '}':'{',
    '1':'1',
    '2':'2',
    '3':'3',
    '4':'4',
    '5':'5',
    '6':'6',
    '7':'7',
    '8':'8',
    '9':'9'
  }
  
  let arr2 = bracketsConfig.map(el => el.join(''));
  let arr3 = arr2.join('');

  function findResult (str) {
  let glass = [];
  for(let i = 0; i < str.length; i++) {
    let element = str[i];
    if(openBrackets.includes(element)) {
      glass.push(element);
    } else {
      if(glass.length === 0) {
      return false;
    }
    let topElement = glass[glass.length - 1];
    if(pairsBrackets[element] === topElement) {
      glass.pop();
    } else {
      return false;
    }
    }
  }
  return glass.length === 0;
}

 if(findResult(str) === 'false' || findResult(arr3) === 'false') {
   return false;
 } else {
   return true;
 }

}
