function isDivisible(divisor, dividend) {
  return divisor % dividend === 0;
}

function halfSquare(number) {
  return number * number / 2;
}

function isInteger(number) {
  return Number(number.toFixed()) === number
}

function halfSquaresOfIntegers(numbers) {
  return numbers.filter(isInteger).map(halfSquare);
}

function countWords(sentence) {
  let wordCount = 0;
  
  for(let i = 0; i < sentence.length; i++) {
    const previousCharacter = sentence[i - 1];
    const isLetter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(sentence[i]);
    
    if (isLetter && (previousCharacter === ' ' || i === 0)) {
      wordCount++;
    }
  }
  
  return wordCount;
  
  // Regex version:
  // const sentence = /[^A-Za-z']+/g
  // return sentence.split(/[^A-Za-z']+/g).filter((word) => word !== '').length;
  
  // Or, an even more accurate regex (will work with all weird edge cases)
  // and with a simpler way to count patterns:
  // const regex = /\b[A-Za-z'-]+\b/g
  // return (sentence.match(regex) || []).length;
}


function exclaim(sentence) {
  while (sentence.endsWith('!')) {
    sentence = sentence.slice(0, -1);
  }
  
  return sentence + '!';
}

function titleCase(title) {
  let titleCased = '';
  for (let i = 0; i < title.length; i++) {
    if (i === 0 || title[i - 1] === ' ') {
      titleCased += title[i].toUpperCase();
    } else {
      titleCased += title[i].toLowerCase();
    }
  }
  
  return titleCased;
  
  // Alternate array-based method:
  // return title
  //   .split(' ')
  //   .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  //   .join(' ');
}

function isLong(string) {
  return string.length > 15;
}

function isShort(string) {
  return !isLong(string);
}

function punchyTitles(titles) {
  return titles
    .filter(isShort)
    .map(exclaim)
    .map(titleCase);
}

function shorten(string) {
  return string.length > 10
    ? `${string.slice(0, 10)}...`
    : string;
}

function randomIntegerInRange(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

function digits(number) {
  const numberString = number.toString();
  const digitsArray = [];
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== '-' && numberString[i] !== '.') {
      digitsArray.push(Number(numberString[i]));
    }
  }
  
  return digitsArray;
  
  // Array method version:
  // return number
  //   .toString()
  //   .split('')
  //   .map((digitCharacter) => Number(digitCharacter))
  //   .filter((digit) => !Number.isNaN(digit));
  
  // Regex version:
  // const regex = /\d/g;
  // return number.toString().match(regex).map((character) => Number(character));
}

function containsDigit(string) {
  let digit = 0;
  while (digit <= 9) {
    if (string.includes(digit.toString())) {
      return true;
    }
    digit++;
  }
  
  return false;
  
  // Alternate regex version:
  // return /\d/g.test(string);
}

function containsLowercaseLetter(string) {
  // const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  // for (let i = 0; i < string.length; i++) {
  //   if (lowercaseLetters.includes(string[i])) {
  //     return true;
  //   }
  // }
  
  // return false;
  
  // Version using array methods:
  // const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  // return string.split('').some((character) => {
    //   return lowercaseLetters.includes(character);
    // });  
    
  // Version using regex:
  const regex = /[a-z]/g;
  
  return regex.test(string);
}
  
function containsUppercaseLetter(string) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < string.length; i++) {
    if (uppercaseLetters.includes(string[i])) {
      return true;
    }
  }

  return false;
}

function isAlphanumeric(char) {
  return containsLowercaseLetter(char)
    || containsUppercaseLetter(char)
    || containsDigit(char);
}

function containsNonAlphanumeric(string) {
  for (let i = 0; i < string.length; i++) {
    if (!isAlphanumeric(string[i])) {
      return true;
    }
  }

  return false;

  // regex version:
  // const regex = /[^A-Za-z0-9]/g;

  // return regex.test(string);
}

function containsSpace(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      return true;
    }
  }

  return false;

  // regex version:
  // const regex = /[ ]/g;
  
  // return regex.test(string);
}

function isValidPassword(password) {
  return !containsSpace(password)
    && containsNonAlphanumeric(password)
    && containsUppercaseLetter(password)
    && containsLowercaseLetter(password);
}

const person = {
  firstName: '',
  lastName: '',
  age: 4,
  school: 'preschool',

  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },

  ageUp: function(yearsPassed = 1) {
    this.age += yearsPassed;
    
    if (this.age < 5) {
      this.school = 'preschool'
    } else if (this.age >= 5 && this.age <= 10) {
      this.school = 'elementary school';
    } else if (this.age >= 11 && this.age <= 13) {
      this.school = 'middle school';
    } else if (this.age >= 14 && this.age <= 17) {
      this.school = 'high school';
    } else if (this.age >= 18 && this.age <= 21) {
      this.school = 'college';
    } else {
      this.school = 'graduate'
    }
  }
}

module.exports = {
  isDivisible,
  halfSquare,
  isInteger,
  halfSquaresOfIntegers,
  countWords,
  exclaim,
  titleCase,
  isLong,
  punchyTitles,
  shorten,
  randomIntegerInRange,
  digits,
  containsDigit,
  containsLowercaseLetter,
  containsUppercaseLetter,
  containsNonAlphanumeric,
  isValidPassword,
  person,
}