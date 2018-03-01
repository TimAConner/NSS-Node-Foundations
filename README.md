# NSS-Node-Foundations
## Motivation
Solo practice in NodeJS done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).
---
### Comand Line Arguments

### Requirements

Create a JavaScript file to act as a Node.js program named `args.js`. This program
should accept at least one number as a command-line argument. The arguments
should be [summed up][sum] into a single value.

Don't worry about [floating point][floats] rounding errors.

Expected:

```bash
$ ./args.js 1
1
$ ./args.js -.42 0 3.14
2.72
$ ./args.js .1 .2
0.30000000000000004
```

### Bonus

-   Return 0 if no arguments are passed to the program
-   Use [Array.prototype.map][map] to change each argument into
    a proper `Number` primitive
-   Use [Array.prototype.filter][filter] to limit the arguments
    array to only the parts needed
-   Use [Array.prototype.reduce][reduce] to apply a summation
    function to each number
-   As an alternative to `.filter`, use
    [ES6 Array Destructuring][array_dest] to access only the
    values needed from the arguments array
---
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
