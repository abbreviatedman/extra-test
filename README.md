# Extra Test


Pay careful attention to the directions! There's a lot of detail there.


* Create a function called `isDivisible` that takes in two numbers and returns `true` if the first number is evenly divisible by the second and `false` otherwise.

```javascript
isDivisible(8, 2); // -> true

isDivisible(5, 2); // -> false

isDivisible(100, 3); // -> false
```



* Create a function called `halfSquare` that takes a given number and returns half its square.

```javascript
halfSquare(10); // -> 50
halfSquare(12); // -> 72
halfSquare(3); // -> 4.5
halfSquare(5); // -> 12.5
```

* Create a function called `isInteger` that takes in a number and returns `true` if the number is an integer and `false` if it is not.

```javascript
isInteger(3); // -> true
isInteger(-5); // -> true
isInteger(0); // -> true
isInteger(0.99); // -> false
isInteger(3.14); // -> false
isInteger(-1.5); // -> false
```

* Create a function called `halfSquaresOfIntegers` that takes in an array of numbers and returns an array of half squares of only those numbers that are integers. Do not modify the original array.

```javascript
halfSquaresOfIntegers([10, 12, 5.3, 2.8, 5]); // -> [50, 72, 12.5]
```


* Create a function called `countWords` that takes in a string and returns the number of words in it.

```javascript
countWords('I love code'); // -> 3
countWords('Hey there stranger, how\'s it hanging.'); // -> 6
countWords('What even is this I don't know. WAT.'); // -> 8
countWords('spaaaaaace...       spaaaaaaaaaaaaaaace'); // -> 2
countWords(''); // -> 0;
```


* Create a function called `exclaim` that takes in a string and returns the string with one exclamation point at the end, regardless of how many were at the end of the original string.

```javascript
exclaim('hello'); // -> 'hello!'
exclaim('hey!'); // -> 'hey!'
exclaim('OMG!!!'); // -> 'OMG!'
```

* Create a function called `titleCase` that takes in a string and returns a string where each letter is the same as in the original except for case, which should be upper for the first letter of any word and lower for any other letter.

```javascript
titleCase('i AM your father'); // -> 'I Am Your Father'
```

* Create a function called `isLong` that returns `true` if a given string has more than 15 characters and `false` if not.

```javascript
isLong('hey there'); // -> false
isLong('greetings fellow human child'); // -> true
```

* Create a function called `punchyTitles` that takes in an array of strings and returns an array of those strings that are no longer than 15 characters, with each string transformed into title case with a single exclamation point at the end. Do not modify the original array.

```javascript
punchyTitles(['quarantine', 'the lord of the rings', 'The mAtRiX']);
// -> ['Quarantine!', 'The Matrix!']
```


* Create a function called `shorten` that takes in a string and returns a string of the first ten characters followed by `'...'`. If the string is already ten characters or fewer, return the string unchanged.

```javascript
shorten('A really really really really long string.'); // -> 'A really r...'
shorten('Not long.'); // -> 'Not long.'
```

* Create a function called `randomIntegerInRange` that takes in two numbers and returns a random integer between those two numbers, inclusive.

```javascript
// If the two arguments were 3 and 7, you could get a 3 or a 4 or a 5 or a 6 or a 7, but no other number.
```


* Create a function called `digits` that takes any number and returns an array of its digits.

```javascript
digits(536); // -> [5, 3, 6]
digits(2); // -> [2]
digits(-500); // -> [5, 0, 0]
digits(4.04); // -> [4, 0, 4]
```


* Create a function called `containsDigit` that takes in a string and returns `true` if it contains at least one digit and `false` otherwise.

```javascript
containsDigit('There is 1 difficult thing in programming.'); // -> true
containsDigit('The first is naming things.'); // -> false
containsDigit('Another is off by 1 errors.'); // -> true
containsDigit('That is the number 3 joke in programming.'); // -> true
containsDigit('If fortune is with you you\'ll never hear the first 2.'); // -> true
```


* Create a function called `containsLowercaseLetter` that takes in a string and returns `true` if it contains at least one lowercase letter and `false` otherwise.

```javascript
containsLowercaseLetter('What even.'); // -> true
containsLowercaseLetter('wat'); // -> true
containsLowercaseLetter('WAT!!'); // -> false
```


* Create a function called `containsUppercaseLetter` that takes in a string and returns `true` if it contains at least one uppercase letter and `false` otherwise.

```javascript
containsUppercaseLetter('NO SRLSY'); // -> true
containsUppercaseLetter('I hate to love this.'); // -> true
containsUppercaseLetter('it\'s the BOMB'); // -> true
containsUppercaseLetter('it\'s total trash!') // -> false
```

* Create a function called `containsNonAlphanumeric` that takes in a string and returns `true` if it contains at least one character that isn't a letter or a number and `false` otherwise.

```javascript
containsNonAlphanumeric('@abbreviatedman'); // -> true
containsNonAlphanumeric('My twitter handle y\'all.'); // -> true
containsNonAlphanumeric('oh$#!@'); // -> true
containsNonAlphanumeric('ihave10000000followers'); // -> false
containsNonAlphanumeric('andidontevencare'); // -> false
```

* Create a function called `isValidPassword` that takes in a string and returns `true` if it follows the following rules, and `false` otherwise.
    * Contains at least one non-alphanumeric character.
    * Contains at least one lowercase letter.
    * Contains at least one uppercase letter.
    * Contains at least one number.
    * Does not contain a space.

```javascript
isValidPassword('Lov3MyPiano'); // -> true
isValidPassword('1Ki77y'); // -> true
isValidPassword('a11Black$'); // -> true
isValidPassword('BankLogin!3'); // -> true
isValidPassword('jelly22fi$h'); // -> false
isValidPassword('ebay.44'); // -> false
isValidPassword('usher'); // -> false
isValidPassword('passw0rd'); // -> false
isValidPassword(''); // -> false
```


* Create an object called `person` that has `firstName` and `lastName` properties and set their values to two different string values.
* Add a property to the object called `age` and set it to `4`.
* Add a property to the object called `school` and set it to hold the string `'preschool'`.
* Add a method to the object called `fullName` that returns the `firstName` and `lastName` properties with a space character in between.
* Add a method to the object called `ageUp` that takes in a number and increases the `age` property by that number. Negative numbers should be usable if the user wants to age the `person` down. Given no argument, it should increase the age by `1`. It should also modify the `school` property in the following way:
    * If the new `age` value is lower than `5`, set `school` to `'preschool'`.
    * If the new `age` value is between `5` and `10` inclusive, set `school` to `'elementary school'`.
    * If the new `age` value is between `11` and `13` inclusive, set `school` to `'middle school'`.
    * If the new `age` value is between `14` and `17` inclusive, set `school` to `'high school'`.
    * If the new `age` value is between `18` and `21` inclusive, set `school` to `'college'`.
    * If the new `age` value is greater than `21`, set `school` to `'graduate'`.