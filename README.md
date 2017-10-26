Prerequisites
=======================

You will need to install [NodeJS](https://nodejs.org) if you don't have it yet.

OSX:
 - Install [Homebrew](https://brew.sh)
 - `brew install nodejs`

Ubuntu:
 - `sudo apt-get install nodejs`

Setup
========================

In terminal: `npm install`

Testing
======================

Tests will be run using [Mocha](https://mochajs.org/):
 - To test one file: `npm test levelN/file.js`
 - To test multiple files: `npm test levelN/file1.js levelN/file2.js ...`
 - To run all tests: `npm run test-all`

The test implementations currently all use the `assert` library provided by [Chai](http://chaijs.com/).

Suggested order of exercises
=====================================

Level 1:
1. equalsWithEpsilon
2. camelize
3. countWords
4. Counter
5. isSorted
6. isPrime
7. reverseString
8. isPalindrome
9. countLetters

Level 2:
1. City
2. isDiagonal
3. map
4. summarize
5. isCorrectlyParanthesised
6. genPrimes
7. greet

Level 3:

Level 4:
1. isCorrectlyBracketed
2. StudentCourse

Performing the exercises
=============================

After cloning and setting up the repository, you are strongly encouraged to create your own Git branch to work on. Whenever you solve an exercise, create a commit.

With each exercise, first make sure to read the comments on top of the file. These will generally explain to you, in human terms, what are you trying to achieve and inform you of any constraints.

Afterwards, look through the tests and try to understand what they mean. For example, if you see a line such as `let foo = new Foo(42);`, you can immediately note two things:
1. You will need to define the type `Foo`, i.e. you will definitely need a `class Foo`.
2. The constructor of `Foo` is supposed to accept a single numeric parameter. (Note that this parameter may be optional, and there might be other optional parameters as well!)

Similarly, if you later see something like `foo.bar`, then you will know that the `foo` object is supposed to have an attribute `bar`.

The tests are run by performing a series of checks that aim to verify that the code you wrote functions as intended. These checks are encoded as *assertions* in the testing code. The meaning of these assertions should be fairly evident: `assert.equals()` for example checks that the provided two values are equal: the check will pass if they are, but fail otherwise.
Assertions are grouped into `it` statements which are meant to test one aspect of the functionality that your code is meant to provide.

As you work through an exercise, start simple and aim to produce a working (or at least partially working) solution before making the solution clean and elegant. A solution that satisfies all of the tests is a great start, but remember to pay a lot of attention to having a clean coding style: neatly and consistently formatted code; good and describe variable/attribute/function/class names; comments pointing out any caveats or explaining your approach and idea.

It should be self-explanatory that you are not allowed to modify the testing code.

Updating your local copy
============================

Occassionally, I will make updates to this repository, which will mainly involve creating new exercises or reorganising existing ones. When this happens, you can update your local repository like so:

1. Commit any uncommited changes you may have. You need to have a clean working directory to continue.
2. Switch to the `master` branch: `git checkout master`
3. Pull the changes: `git pull`
4. Switch back to your own branch
5. Merge in the updates from the `master` branch: `git merge master`

You might have merge conflicts after the last step. If you do, you'll have to sort them out yourself: make sure to incorporate all of my changes (i.e. the changes coming from the remote) into your local copy.
Once you've fixed the conflicts in the files, use `git add` to mark those conflicts as resolved, and finally create a commit to indicate that all conflicts have been resolved.

Solutions
================

The reference solutions can be found on the [solutions branch](https://github.com/shdnx/nycda-js-algorithm-exercises/tree/solutions). Please do not abuse this fact.

Contributions
=================

If you have spotted a bug or have an idea for an improvement, please open an issue for it in the [issue tracker](https://github.com/shdnx/nycda-js-algorithm-exercises/issues). However, you're strongly encouraged to fix it yourself and [submit a pull request](https://github.com/shdnx/nycda-js-algorithm-exercises/pulls).

License
===========

MIT