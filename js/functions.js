// Функция для проверки длины строки.
const checkStringLength = (str, num) => {
  if (str.length <= num) {
    return true;
  } else {
    return false;
  }
};
console.log(checkStringLength("str", 3));

//Функция для проверки, является ли строка палиндромом.
const checkPalindrom = (str) => {
  let reverseArr = [];
  let exodusArr = [];
  let exodusStr;
  let reverseStr;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      exodusArr.push(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reverseArr.unshift(str[i]);
    }
  }
  reverseStr = reverseArr.join(" ");
  exodusStr = exodusArr.join(" ");
  if (exodusStr === reverseStr) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPalindrom("do d"));
