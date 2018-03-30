# NSS-Node-Foundations
## Motivation
Solo practice in NodeJS done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

---
## Prompt Training Exercise
### Instructions
Build a command line interface for adding/deleting/viewing a training program to a table in a SQLite db

You will need to construct a single table with these columns:

+ no_of_seats
+ instructor_name
+ start_date
+ end_date
+ course_category

The app should enable the following actions:
GET all/one course
DELETE a course
POST a course

Use test-driven development to build that logic of your app ( Do not test the UI functionality). Remember to practice `red green refactor` and write no feature before the test for that feature, and only write enough code in each iteraction to make the test pass.

### The UI
Use the [prompt npm package](https://www.npmjs.com/package/prompt)
to facilitate interaction with the user on the command line. You can use the [colors](https://www.npmjs.com/package/colors) package to spice up the terminal view

Example prompt: ( You do not need to make all of these actions available. Start with add new and view all, then move outward from there as stretch goals. )

```bash
> Welcome the the Bangazon Continuing Ed Course Creator
  Please choose an action from the following:
    1 create a new course
    2 edit an existing course
    3 remove a course
    4 view an upcoming course
    5 view all upcoming courses
    6 view a past course
    7 view all past courses
```

The above would be a single prompt. When the user enters a number, use that value to choose what action to take. If view all, then call the appropriate method for fetching all the classes ( which, of course, you build using TDD). If they want to add a new course,`prompt.get` again for that data:

```bash
  > Enter the course name:
  > Enter the instructor name:
  > Enter the start date:
  > Enter the end date:
  > Enter the number of seats:
```

Then take that data and save it to the db with a TDD-created save method.
---
## Chinook Exercise
Use the [Chinook Database](https://chinookdatabase.codeplex.com/) and the [DB Browser for SQLite](http://sqlitebrowser.org/) we downloaded in the ERD exercise.

For each of the following exercises, provide the appropriate query.

Keep your successful queries in a `chinook-queries.sql` file.

1. Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.
2. Provide a query only showing the Customers from Brazil.
3. Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country.
4. Provide a query showing only the Employees who are Sales Agents.
5. Provide a query showing a unique list of billing countries from the Invoice table.
6. Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name.
7. Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.
8. How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?
9. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
10. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
11. Provide a query that includes the track name with each invoice line item.
12. Provide a query that includes the purchased track name AND artist name with each invoice line item.
13. Provide a query that shows the # of invoices per country. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
14. Provide a query that shows the total number of tracks in each playlist. The Playlist name should be included on the resultant table.
15. Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre.
16. Provide a query that shows all Invoices but includes the # of invoice line items.
17. Provide a query that shows total sales made by each sales agent.
18. Which sales agent made the most in sales in 2009?
19. Which sales agent made the most in sales in 2010?
20. Which sales agent made the most in sales over all?
21. Provide a query that shows the # of customers assigned to each sales agent.
22. Provide a query that shows the total sales per country. Which country's customers spent the most?
23. Provide a query that shows the most purchased track of 2013.
24. Provide a query that shows the top 5 most purchased tracks over all.
25. Provide a query that shows the top 3 best selling artists.
26. Provide a query that shows the most purchased Media Type.
27. Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.
---
## Express Middleware Exercise
### Exercise: In-App Easter Egg
1. Create a simple express app that includes the following routes:
  - /home
  - /see-our-chickens
  - /see-our-eggs

2. Create a directory in your project for your simple html pages. Each route should have its own webpage.

3. Use a middleware to let your app know which static (cough, hint) html files it should use.

4. Create your own middleware that will place an Easter Egg in your app (see below for specs).

5. Create a middleware that 'catches' the end of the stream if the requested route doesn't match your three defined routes and sends an error back to the browser with `res.send()`.

### Output
If the user goes to any of your routes, they should see the corresponding html page. If they go to a url that contains the word 'egg', the terminal console should display the following:

```
You found the Easter Egg at Mon Sep 12 2016 15:36:57 GMT-0500 (CDT)

        ,ggadddd8888888bbbbaaa,_
     ,ad888,      `Y88,      `Y888baa,
   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,
  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,
 ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        `"Y8ba,_      `Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   `8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         `""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
`b,"Y88ba,         ""Y88baa,_         """Y888bd"
 `b, `"Y88ba,_         ""Y888baa,_         ,8"
  `8,   `""Y88ba,_         `"""Y8888baaaaaP"
   `Ya,     `""Y888ba,_           `"d88P"
     `"Yb,,_     `""Y888baa,__,,adP""'
         `"""YYYY8888888PPPP"""'
```
Experiment with where in your file you place the middelware functions. Does it make a difference if one comes before the other? What if they run before or after you tell Express where to find your static files?

---
## Express Hello World Exercise
### Requirements

Make a Node.js program named `express-hello-world.js` that outputs "Hello World"
to browsers making a GET request to the root (/) url.

Also, to browsers that make a GET request to the /time url, send the current
date and time in ISO format: `2015-12-31T23:59:59.999Z`.

Finally, use an environment variable named `PORT` for the port number if one is
provided. If one is not provided use 8080.

i.e. The command below should start a server on the port 1337.

```bash
PORT=1337 node express-hello-world.js
```

and the command below should start a server on the port 8080.

```bash
node express-hello-world.js
```
---
## Bangazon ERD Exercise

Build an ERD to define the properties of the following resources and the relationships between them. There are some properties defined for each resources, but they are the bare minimum. Use your own life skills and knowledge to add appropriate properties to each one where you see fit.

> **Technical Note:** These are the main resources that are needed in the database and is *not* an all-inclusive list of tables that should be created.

#### Employees
* An employee can only be assigned to one department
* An employee can sign up for one, or more, training programs

#### Departments
* A department has a supervisor, which is a specific kind of Employee
* A department has an expense budget

#### Computers
* Track when a computer was purchased by the company
* Track when a computer was decommissioned by the company
* A computer can only be assigned to one employee at a time

#### Training Programs
* A training program must have a start date
* A training program must have an end date
* A training program must have maximum attendees specified

#### Product Types
* These are categories of Products

#### Products
* A product can only have one type
* A product has a price
* A product has a title
* A product has a description
* Products will be created by customers, so make sure that you have the appropriate column on the Product table

#### Orders
* A customer can only have one active order at a time

#### Payment Types
* A customer can have multiple payment types (Visa, Amex, bank account, etc)
* A payment type must have an account number
* An order must be given a payment type before it is complete, but it not needed when order is created

#### Customers
* A customer's first and last name should be recorded separately
* The date that a customer created an account must be tracked

---
## HTTP-SERVER Exercise
### Requirments

Create a valid html file called `index.html`. It should contain an h1 saying:
"My First Node.js Web Server" and an image linking to the Node.js logo:
https://rawgit.com/nodejs/nodejs.org/886b30fde80f35fd0db98793f258d78a9ae0a997/static/images/logo-light.svg

Create a Node.js server in a file called `server01.js`. Use the createServer method along with
the createReadStream method to pipe the html file to the browser.
---
## Relational Database ERD
### Requirements
1. Create an ERD for the Music History databse
  * Open in your Database Browser
  * Use one of the tools listed above to create an ERD

  [ERD Photo](./Relational-Database-ERD/movie-history-erd.jpg)

## Bag-o-Loot
---
## Requirements

**Write a test before you write implementation code**

1. Items can be added to bag.
1. Items can be removed from bag, per child only. Removing `ball` from the bag should not be allowed. A child's name must be specified.
1. Must be able to list all children who are getting a toy.
1. Must be able to list all toys for a given child's name.
1. Must be able to set the *delivered* property of a child, which defaults to `false` to `true`.
---
## Modularity Diceroll Exercise
### Requirements

Create a program that performs a dice roll. You will need a folder `dice-roll` with at
least 5 files to accomplish this task. See the 01 templates folder in this
milestone for starter code and structure:

```
01/
    bin/
        diceroll
    lib/
        cli.js
        dice.js
        math.js
        parse-args.js
README.md
package.json
```

This library should be globally installed or linked such that you can execute it
anywhere on your system.

The file without an extension should be the only file that has permissions to
execute. It should also include only single line of code that requires the
`cli.js` lib file and a shebang.

The math file should export an `Object` with a method called `randomInt` that
accepts two arguments, a lower bound and an upper bound. This function
should return a random integer inclusive of the lower bound and the upper bound.

This parse-args file should export a single function to parse your command line
arguments. The function should accept an array containing the arguments passed
on the command line. Convert these arguments to an object with a count and sides
property.

The dice file should export an object with at least two methods called
`roll` and `toDiceNotation`. The `toDiceNotation` method should accept
an object with a sides and count property and convert it to a `String`
with the dice notation i.e. "1d6" or "2d40". The `roll` method should
accept a dice notation `String` and produce a random `Number` which is
the result of the dice roll.

The `cli.js` file should work like a controller. It should have no logic
on its own. Use the sample code from [this file](https://github.com/nashville-software-school/node-milestones/blob/master/01-foundations/templates/01/lib/cli.js) as-is.
---
## SQLite Create DB Exercise
### Instructions

A friend of yours owns a small family business and wants to start moving all of their business records into a database. Using your NodeJS skills, they want you to create a SQLite database to store information about their employees.

1. Create a database that is saved on disk.

1. Create a table titled `employees` with the following columns:
  - id, firstName, lastName, jobTitle, address

1. Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the `employees` table.
  ```js
  eg: let array = [
    { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
    ...,
  ]
  ```  

1. Insert each of the employee objects into the database.

1. Write a statement to query the database and `console.log()` all employee records.

1. Write a statement to query the database and `console.log()` each employees `jobTitle`.

1. Write a statement to query the database and `console.log()` each employees `firstName`, `lastName` and `address` only.

### Bonus Features

1. Instead of using an array in the .js file, create a JSON file of employees to require into the js file. Use this to populate the table.

1. Your friend has decided that they want to add a salary column to the employees table. Make sure to add a salary key value pair to each of the employee objects. Then drop the existing employees table, update the schema to accept a salary column, and repopulate the table.

1. Write a statement that returns all employees of a specified `jobTitle`.
---
## Relational Databases Exercise
### Instructions

1. Open up the database file in the *DB Browser for SQLite* application to see it
1. Copy and paste the queries below into your `queries.sql` file and comment them out. Then you can write a query for each requrement and refer back to them later as a resource
1. When you have written a query, paste it into DB Browser and test it by clicking the tab labeled "Execute SQL"

For each of the following exercises, provide the appropriate query. Everything from class and the [Sqlite](http://www.sqlite.org/) documentation for SQL [keywords](https://www.sqlite.org/lang.html) and [functions](https://www.sqlite.org/lang_corefunc.html) is fair game. Note that 

1. Query all of the entries in the `Genre` table
1. Using the `INSERT` statement, add one of your favorite artists to the `Artist` table.
1. Using the `INSERT` statement, add one, or more, albums by your artist to the `Album` table.
1. Using the `INSERT` statement, add some songs that are on that album to the `Song` table.
1. Write a `SELECT` query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the [`LEFT JOIN`](https://www.tutorialspoint.com/sql/sql-using-joins.htm) keyword sequence to connect the tables, and the `WHERE` keyword to filter the results to the album and artist you added. Here is some more info on [joins](http://www.dofactory.com/sql/join) that might help.
    > **Reminder:** Direction of join matters. Try the following statements and see the difference in results.

    ```
    SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
    SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;
    ```
1. Write a `SELECT` statement to display how many songs exist for each album. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Write a `SELECT` statement to display how many songs exist for each artist. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Write a `SELECT` statement to display how many songs exist for each genre. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Using `MAX()` function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
1. Using `MAX()` function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
1. Modify the previous query to also display the title of the album.
---
## Streaming File IO Exercise
### Requirements

Create a JavaScript file to act as a Node.js program named `streams.js`. This program
should read a file `languages.json` and output to a file `languages_caps.json`. Use the second
command-line argument to declare the destination. You will not need to make your own `Readable` for this exercise. Simply use
[`fs.createReadStream`][createreadstream] instead. In between, all letters
should be capitalized with your own `Transform` stream. Then the data should be passed to your own `Writable` stream. The [`fs.appendFile`][appendfile] will be helpful
for this task.

In addition, use some other method in the `fs` module make sure executing the
program multiple times does not continue making a larger and larger
`09.Caps.json` file.

Expected:

```bash
$ cat 09.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
$ ./09.js 09_Caps.json
$ cat 09_Caps.json
{
  "LANGUAGES": {
    "JAVASCRIPT": "AWESOME",
    "C++": "DIFFICULT",
    "BASIC": "OLD"
  }
}
```

### Bonus

- [x] ES6 Object Destructuring


---
## File IO Exercise
### Requirements

Create a JavaScript file to act as a Node.js program named `file-io.js`. This program
should accept a single argument which should be a file path. Executing the
program will print the contents of that file onto the terminal though the stdout
stream. Executing the program without an argument should simply return without
printing anything. This functionality to be similar to the `cat` command.

Optional: create a second file named `file-io.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

Expected:

```bash
$ ./file-io.js 07.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```

Note: Make sure with `pwd` before executing that you are in the directory that
file is in.

### Bonus

- [x] ES6 Object Destructuring
- [x] Avoid `.toString`. Return a String primitive rather than a Buffer object
    from `readFileSync`

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
