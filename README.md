Prerequisites
=======================

You will need to install [NodeJS](https://nodejs.org) if you don't have it yet.

OSX:
 - Install [Homebrew](https://brew.sh)
 - `brew install nodejs`

Ubuntu:
 - `sudo apt-get install nodejs`

Installation
========================

In terminal: `npm install`

Testing
======================

Tests will be run using [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/):
 - To test one file: `npm test levelN/file.js`
 - To test multiple files: `npm test levelN/file1.js levelN/file2.js ...`
 - To run all tests: `npm run test-all`

Note that with the `npm test` command, the path argument is always relative to the root directory of this repository, i.e. to the directory where package.json is.

Suggested order of exercises
=====================================

Level1:
1. equalsWithEpsilon.js
2. camelize.js
3. countWords.js
4. Counter.js
5. City.js
6. isPrime.js
7. reverseString.js
8. greet.js
9. isPalindrome.js
10. countLetters.js
11. summarize.js
12. genPrimes.js
