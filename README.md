# Intention Timer: An Application for the Active User

## Group project from 5/26/20 - 6/3/20 of Module 1 at Turing School of Software and Design

## Contributors

 - Jenna Dilullo: https://github.com/jennadilullo8
 - Erin Untermeyer: https://github.com/ErinUntermeyer

Performed the driver-navigator approach throughout the development of the entire project.

## About

The user can use this application to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time.

## Setup

- Fork and clone down this repository
- `cd` into the repository
- In Terminal enter the command: `open index.html`
- Have fun!

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
- Successfully using localStorage

## Challenges

- Understanding how to use `grid` and `flex-box` together
- Manipulating the inputs to display error messages
- Using descriptive but unique variable names
- Creating the timer
- Reseting timer display
- Refactoring elements to show `SRP` and `DRY` code

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

#### Mobile Comp Layout:

<img src="/assets/mobile-1.png" alt="Mobile Comp Layout One" height=auto width=75%/>

<img src="/assets/mobile-2.png" alt="Mobile Comp Layout Two" height=auto width=75%/>

#### Our Mobile Layout:

<img src="/assets/Our-Mobile-1.png" alt="Our Mobile Layout One" height=auto width=75%/>

<img src="/assets/Our-mobile-2.png" alt="Our Mobile Layout Two" height=auto width=75%/>

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

### Iteration 4

The gif will show;

- When the user acknowledges the message and completion of the activity by clicking the 'Log Activity' button, a card with the category, time, and the users input will display.
- The card should also have a small color-coded visual indicator of the category.

<img src="http://g.recordit.co/u58U9UCEAc.gif" alt="Count Down Timer" height=auto width=75%/>


### Iteration 5

The gif will show;

- When the user refreshes the page,
    - Their past activities are still displayed!

<img src="http://g.recordit.co/0Pk9uKytjW.gif" alt="Count Down Timer" height=auto width=75%/>
