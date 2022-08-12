<!-- ![](https://i.imgur.com/XgsioqF.jpg) -->

 <center>
<img src="./public/logo.png" style="width: 200px" />
</center>

</br></br>

## Table Of Contents

</br>

&nbsp; &nbsp;[Introduction](#🧰-access+)

&nbsp; &nbsp;[Problem](#➕-solution)

&nbsp; &nbsp;[Solution](#➕-solution)

&nbsp; &nbsp;[Features](#➕-features)

&nbsp; &nbsp;[Getting Started](#🏁-getting-started)

&nbsp; &nbsp;[Environmental Variables](#🔑-environment-variables)

&nbsp; &nbsp;[Tech Stack](#👩‍💻-tech-stack)

&nbsp; &nbsp;[API Reference](#📚-api-reference)

&nbsp; &nbsp;[Running Tests](#🧪-running-tests)

&nbsp; &nbsp;[About Us](#🚀-about-us)

&nbsp; &nbsp;[Lessons Learned](#🎓-lessons-learned)

&nbsp; &nbsp;[Team Github Profiles](#🔗-team-github-profiles)

&nbsp; &nbsp;[Acknowledgements](#❤️-acknowledgements)

</br></br>

## ♿ Access+ App

&nbsp; Hello and thanks for your interest in our web app.

&nbsp; We hope you find this document helpful in understanding the problem we aimed to solve, the solution&nbsp; &nbsp; or app we created to solve this problem, how to install the app, details about what's going on in the &nbsp; &nbsp; &nbsp; &nbsp; code and how to use it. 

</br></br>

## :x: The Problem 

</br>

- 1 in 4 households are impacted by disability
  

- 98% of disabled people look for accessibility information before visiting somewhere for the first time.

- Over 75% of disabled people don’t visit somewhere they wanted to go because they couldn’t find the accessibility information they needed.

- This results in disabled people making 26% fewer trips than those without a disability.

</br></br>

[Back to Top](#table-of-contents)

</br>

## :white_check_mark: Our Solution 

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Access+ is here to take the stress out of planning. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our aim is to provide you with all the accessibility information you need in order to feel assured & 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wherever you want to go has what you need. 

</br>

[Back to Top](#table-of-contents)

</br></br>

![GitHub last commit](https://img.shields.io/github/last-commit/SchoolOfCode/final-project_front-end-undefined)
![GitHub contributors](https://img.shields.io/github/contributors/SchoolOfCode/final-project_front-end-undefined)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/SchoolOfCode/final-project_front-end-undefined)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SchoolOfCode/final-project_front-end-undefined)
![Lines of code](https://img.shields.io/tokei/lines/github/SchoolOfCode/final-project_front-end-undefined)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/SchoolOfCode/final-project_front-end-undefined)

</br>

[Back to Top](#table-of-contents)

</br>

## ➕ Features

</br>

- Welcome Tutorial to Walk You Through the Features of the App.
- Add the Location You'd Like to Visit to the Search Input.
- Dropdown to Choose Your Category From What?.
- Dropdown to Choose the Accessbility Rating.
- Search Button to Enable Your Search Filters/Preferences.
- Search Results Return as Individual Cards on Left Of Screen
- Click on Any Card For More Information About That Place
- Add Location Button To Add A Place to Our Database.
- Change the Map Styling with the Map Style Button to Suit Your Needs

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🏁 Getting Started

</br>

### Front End.

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the front end repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-undefined.git
```

Step 3.

To start using the front end, do the following.

```bash
  cd frontend
  npm i
  npm start
```

</br>

### Back End

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the back end repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-undefined.git
```

Step 3.

Add environment variables into your .env file in your IDE.(Details in Environment Variables section)

Step 4.

To start using the back end, do the following.

```bash
  npm i
  npm run dev
```

</br>

[Back to Top](#table-of-contents)
</br></br>

## 🔑 Environment Variables

</br>

To run the back end repo of this project, you will need to add your own credentials from the database you're using to draw from. (e.g.: Heroku)

In your .env file, you'll need to use the following format.

```

PGHOST=

PGUSER=

PGDATABASE=

PGPASSWORD=

PGPORT=

```

</br>

After this, first run the create table script in the terminal.

```
npm run db:createTable
```

Next, populate the table with the data from the libs folder with the following script.

```
npm run db:populateTable
```

If you'd like to drop the table completely, run the following script:

```
npm run db:dropTable

```

</br>

[Back to Top](#table-of-contents)
</br></br>

## 👩‍💻 Tech Stack

</br>

**Client:** React, CSS

**Server:** Node, Express, PostgreSQL

</br>

[Back to Top](#table-of-contents)

</br></br>

## 📚 API Reference

</br>

### To GET All Resources:

</br>

GET http://localhost:3001/resources/

This returns the entire contents of the database.

</br>

### To GET Resources by ID:

</br>

GET http://localhost:3001/resources/{id}

e.g. GET http://localhost:3001/resources/4

</br>

This returns:

```
 {

"success": true,

 "payload": [
     {
         "id": 4,
         "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
         "title": "React useReducer vs React useState: When to use one over the other?",
         "type": "Article",
         "topic": "React",
         "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
         "isFavourite": "false"
     }
 ]

}
```

</br>

The value of isFavourite is a string instead of a boolean.

### To GET Resources by title:

</br>

GET http://localhost:3001/resources?title=value

</br>

e.g. GET http://localhost:3001/resources?title=react

</br>

This returns:

```
{

    "success": true,
    "payload": [
        {
            "id": 2,
            "url": "https://testing-library.com/docs/react-testing-library/cheatsheet/",
            "title": "A cheatsheet for the React Testing Library",
            "type": "Documentation",
            "topic": "React",
            "description": "A short guide to all the exported functions in React Testing Library"
            "isFavourite": "false"
        },
        {
            "id": 4,
            "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
            "title": "React useReducer vs React useState: When to use one over the other?",
            "type": "Article",
            "topic": "React",
            "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
            "isFavourite": "false"
        }
    ]
}
```

### To Add To Database:

</br>

POST http://localhost:3001/resources

</br>

e.g. POST http://localhost:3001/resources

Post an object with this structure:

```

{

"url": "newurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

}

```

The value of id is automatically set and the value of isFavourite is automatically set to "false"

</br>

### To Update Database:

</br>

PUT: http://localhost:3001/resources/{id}

</br>

e.g. PUT http://localhost:3001/resources/5

Update using an object with this structure:

```

{
"url": "updatedurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

"isFavourite": "true/false"

}

```

Reminder: the value of isFavourite is a string so update this value with a lowercase string.

</br>

### To Delete Entry From Database:

</br>

DELETE: http://localhost:3001/resources/{id}

</br>

e.g. DELETE http://localhost:3001/resources/5

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🧪 Running Tests

</br>

To run tests, run the following commands..

</br>

### Front End

The front end runs tests based from the React Testing Library.

```bash
  npm run test
```

</br>

### Back End

The back end runs tests in Supertest and Jest.

```bash
  npm run test
```

[Back to Top](#table-of-contents)
</br></br>

## 🚀 About Us

</br>

We're a group of five young, talented, ambitious full stack developers that wanted to create an app that solved the problem of accessing resources.

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🎓 Lessons Learned

</br>

Teamwork makes the dream work..

</br>

Break down every problem and then do it again and again..

</br>

Standups and Retros really helped us keep a great rhythm and revise our plan incrementally..

</br>

Keep open communication and share the problems you have when needed, we’re better together..

</br>

Take your breaks after the mini sprints, stay hydrated and encourage everyone to take a break from the screen..

</br>

Let things go if need be.. Sometimes it’s just not worth it..

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🔗 Team Github Profiles

</br>

[Dan Hawkesford](https://github.com/DHawkesford)

</br>

[Jena Azzubaydi](https://github.com/jena-84)

</br>

[Simran Rai](https://github.com/srai98i)

</br>

[Kendall Mason](https://github.com/kendallgmason)

</br>

[Shabana Kauser](https://github.com/shabana89)

</br>

[Back to Top](#table-of-contents)

</br></br>

## ❤️ Acknowledgements

</br>

- [Chris Meah's Express generator module](https://www.npmjs.com/package/express-generator-esmodules)

 </br>

- [React Hooks by Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)

 </br>

- [Async functions with useeffect by devtrium](https://devtrium.com/posts/async-functions-useeffect)

 </br>

- [How to handle multiple inputs in React](https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el)

 </br>

- [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

 </br>

- [React + Fetch - HTTP POST Request Examples | Jason Watmore's Blog](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

 </br>

[Back to Top](#table-of-contents)

