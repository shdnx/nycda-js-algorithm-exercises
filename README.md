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

Tests will be run using [Mocha](https://mochajs.org/):
 - To test one file: `npm test levelN/file.js`
 - To test multiple files: `npm test levelN/file1.js levelN/file2.js ...`
 - To run all tests: `npm run test-all`

Note that with the `npm test` command, the path argument is always relative to the root directory of this repository, i.e. to the directory where `package.json` is.

The test implementations currently all use the `assert` library provided by [Chai](http://chaijs.com/).

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
10. isDiagonal.js
11. countLetters.js
12. summarize.js
13. genPrimes.js

Updating your local copy
============================

Occassionally, I will make updates to this repository, which will mainly involve creating new exercises or reorganising existing ones. When this happens, you can update your local repository like so:

1. Create a commit with all your local changes. You need to have a clean working directory to continue.
2. Fetch the new upstream commits: `git fetch origin master`
3. Rebase over them: `git rebase origin/master`

You might have merge conflicts after the last step. If you do, you'll have to sort them out yourself: make sure to incorporate all of my changes (i.e. the changes coming from the remote) into your local copy.

Once you've fixed the conflicts in the files, use `git add` to mark those conflicts as resolved, and then execute `git rebase --continue`. You may have to repeat this until the rebase is complete.

Solutions
================

The reference solutions can be found on the [solutions branch](https://github.com/shdnx/nycda-js-algorithm-exercises/tree/solutions). Please do not abuse this fact.