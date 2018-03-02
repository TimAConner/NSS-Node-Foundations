# NSS-Node-Foundations
## Motivation
Solo practice in NodeJS done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

---
## Third Party Modules Exercise
### Requirements

For this exercise we are going to use a popular Node.js module: [chalk][chalk]

Create a JavaScript file to act as a Node.js program named `flag.js`. This program
print out a red, white, and blue American flag in the terminal. The stars should
be white bold text with a blue background, the red stripes should be spaces with
a red background, and the white stripes should be spaces with a white
background.

Because of the limitations of the terminal, don't worry about getting all 50
stars exactly as they are on the official flag. However, make sure all 13
stripes are on the flag. Additionally make the flag 50 characters wide and have
1 space of padding before and after the stars.

Use the following format below.

Expected:

```bash
$ ./flag.js
```

![Terminal Flag](http://i.imgur.com/DOMxrXU.png)

### Bonus

- [x] Use ES6 Object Destructuring to access specific colors needed from the
    module
- [x] Use a Unicode or emoji star instead of an asterisk
- [ ] Use two variables names `STAR_MARGIN` and `STARS_PADDING` which define the
    separation character or characters between the stars and around the stars.
    Use this variable to quickly change both the margin and the padding to two
    or three spaces. Make sure the output is still aligned and 50 characters
    wide.
---
## Comand Line Arguments Exercise

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

- [x] Return 0 if no arguments are passed to the program
- [x] Use [Array.prototype.map][map] to change each argument into
    a proper `Number` primitive
- [x] Use [Array.prototype.filter][filter] to limit the arguments
    array to only the parts needed
- [x] Use [Array.prototype.reduce][reduce] to apply a summation
    function to each number
- [x] As an alternative to `.filter`, use
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
