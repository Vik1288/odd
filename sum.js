const conditionalSum = (arr, condition) => {
    const add = (num1, num2) => {
       if(condition === 'even' && num2 % 2 === 0){
          return num1 + num2;
       }
       if(condition === 'odd' && num2 % 2 === 1){
          return num1 + num2;
       };
       return num1;
    }
    return arr.reduce((acc, val) => add(acc, val), 0);
 }
 console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
 console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
 console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
 console.log(conditionalSum([], "odd"));