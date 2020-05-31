# Intention Timer: An Application for the Active User

## Group project from 5/26/20 - 6/3/20 of Module 1 at Turing School of Software and Design

## Contributors

 - Jenna Dilullo: https://github.com/jennadilullo8
 - Erin Untermeyer: https://github.com/ErinUntermeyer

Performed the driver-navigator approach throughout the development of the entire project.

## About

The user can use this application to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time.

## Setup

One partner will;
- Create a `repo` in github
- `git clone` the `repo`
- Add `src` directory containing `main.js` and `activity.js`
- Add `index.html` and `styles.css` files
- Add `assets` directory
- Add all teammates and instructors as collaborators

## Learning Goals

- Develop your skills in writing:
  - Semantic HTML
  - Clean & organized CSS styles
  - DRY and organized JavaScript
- Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Understand event bubbling and use event delegation on dynamic elements
- Persist data across page refreshes by using local storage

## Wins

- Obtaining a better understanding of `grid`
- Update the data model before the DOM
- Added functionality to the 'Start Activity' button
- Created SRP functions
- Explaining how to create a timer

## Challenges

- Understanding how to use `grid` and `flex-box` together
- Manipulating the inputs to display error messages
- Using descriptive but unique variable names
- Creating the timer

## Technologies used

- HTML
- CSS
- JavaScript
- Git/GitHub

## In Action

### Iteration 0

- Create a page layout that is identical to the comp layout

#### Comp Layout:

<img src="/assets/comp-desktop.png" alt="Desktop layout comp" height=auto width=75%/>

#### Our Layout:

<img src="/assets/Our-Comp_layout.png" alt="Our desktop layout" height=auto width=75%/>

### Iteration 1

- Create the Activity class

### Iteration 2

The gif will show;

- When an activity category is clicked on, the border and icon will change colors to give a visual indication that it has been selected
- As the user types into the input fields; the minutes and seconds fields should only accept numbers
- When the Start Activity button is clicked, the user should no longer see the form, and instead see a timer clock. The timer clock should display the user-provided minutes and seconds, as well as the description. The category color will appear as the outline of the circle
- If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, and if the minutes and seconds inputs are not filled out properly an error message will also appear

<img src="http://g.recordit.co/W4WGWnhdbl.gif" alt="Start Activity Timer Display" height=auto width=75%/>

### Iteration 3

The gif will show;

- When the user clicks on the 'START' button, the timer will count down by seconds and when the timer decrements to 0, the user will then see a congratulatory message

<img src="http://g.recordit.co/SPKQV1Bm4p.gif" alt="Count Down Timer" height=auto width=75%/>
