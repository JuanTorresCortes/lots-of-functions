console.log("/////////////////////////");
console.log("sayHi \n");

function sayHi(name) {
  let greeting = "hi";
  return `${greeting} ${name}!!`;
}
console.log(sayHi("juan"));
console.log(sayHi("MacLovin"));

console.log("/////////////////////////");
console.log("bigString \n");

function bigString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  }
  return "Equal in size";
}
console.log(bigString("d", "cats are awesome"));
console.log(bigString("dogs", "cat"));
console.log(bigString("dog", "cat"));

console.log("/////////////////////////");
console.log("bigNumber \n");

function bigNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
  return "Both numbers are equal";
}

console.log(bigNumber(1, 2));
console.log(bigNumber(4, 5));
console.log(bigNumber(1, 1));

console.log("/////////////////////////");
console.log("fiveMoreOdd \n");
function fiveMoreOdd(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum % 2 !== 0) {
      newArray.push(currentNum + 5);
    } else if (currentNum % 2 === 0) {
      newArray.push(currentNum);
    }
  }
  return newArray;
}
console.log(fiveMoreOdd([1, 2, 3, 4, 5, 6]));
console.log(fiveMoreOdd([1, 2, 3]));

console.log("/////////////////////////");
console.log("arraySummer \n");

function arraySummer(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNu = array[i];
    result += currentNu;
  }
  return result;
}
console.log(arraySummer([1, 2, 3]));
console.log(arraySummer([1, 2, 3, 4]));

console.log("/////////////////////////");
console.log("everyDivisible \n");
function everyDivisible(n) {
  let result = [];

  for (let i = n; i <= 100; i++) {
    const current = [i];

    if (current % n === 0) {
      result.push(current);
      console.log(current.toString());
    }
  }
  return result;
}
console.log(everyDivisible(7));
console.log("/////////////////////////");
