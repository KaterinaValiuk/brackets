/*jshint esversion: 8 */


//let str = '|()|';

const openBrs = ['(', '{', '|', '['];
  const brsPair = {
    [')']: '(',
    ['}']: '{',
    ['|']: '|',
    [']']: '[',
  };

module.exports = function check(str, bracketsConfig) {

//function check() {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (openBrs.includes(currentSymbol)) {
      stack.push(currentSymbol);
      } else {
      if (stack.length === 0) {
        return(false);
      }
      let topElement = stack[stack.length - 1];

      if (brsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return(false);
      }
      
    }
  }
//console.log(stack);
  return stack.length === 0;
};

//check (str);
