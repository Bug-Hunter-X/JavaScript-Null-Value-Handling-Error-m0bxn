# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript: improper null value handling.  The `bug.js` file contains a function that does not properly handle `null` values as input, leading to unexpected behavior.  The `bugSolution.js` file shows a corrected version.

The issue is that the function returns `null` if either input is `null`, instead of providing a more robust or default behavior. This is a common pitfall when dealing with potentially null values in JavaScript functions.