# NSS-Node-Foundations
## Motivation
Solo practice in NodeJS done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Global Objects Exercise
### Requirements

Create a JavaScript file to act as a Node.js program named `global.js`. The file
should contain JavaScript code to output detailed `version` information of Node.js
and the underlying V8 JavaScript engine to the terminal using the `process` 
global object. In addition, the program should be able to directly execute.

Expected:

```bash
$ ./global.js
Node.js version: v6.3.1
V8 version: 5.0.71.57
```

#### Bonus

- [x] Use an ES6 Template Literal and its string interpolation feature
- [x] Use a single call to `console.log`
- [x] Use ES6 Destructuring Assignment to extract the two variables from the
    `versions` object
