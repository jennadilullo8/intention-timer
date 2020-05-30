var buttonSection = document.querySelector('.button-select-category');

var minInput = document.querySelector('#minutes-input');
var secInput = document.querySelector('#seconds-input');
var descInput = document.querySelector(‘#description-input');

var currentActivity;
var currentCategory;

buttonSection.addEventListener('click', clickHandler);


function clickHandler(event) {
  if (event.target.classList.contains('study')) {
    changeStudyButton(event);
  } else if (event.target.classList.contains('meditate')) {
    changeMeditateButton();
  } else if (event.target.classList.contains('exercise')) {
    changeExerciseButton();
  } else if (event.target.classList.contains('start-activity')) {
    newActivity();
  }
}

function changeStudyButton() {
  var studyButton = document.querySelector('.study');
  var studyImage = document.querySelector('#study-icon');
  studyButton.classList.toggle('study-active');
  studyImage.src = studyImage.src.match('assets/study.svg') ? 'assets/study-active.svg' : 'assets/study.svg';
  currentCategory = 'study';
}

function changeMeditateButton() {
  var meditateButton = document.querySelector('.meditate');
  var meditateImage = document.querySelector('#meditate-icon');
  meditateButton.classList.toggle('meditate-active');
  meditateImage.src = meditateImage.src.match('assets/meditate.svg') ? 'assets/meditate-active.svg' : 'assets/meditate.svg';
  currentCategory = 'meditate';
}

function changeExerciseButton() {
  var exerciseButton = document.querySelector('.exercise');
  var exerciseImage = document.querySelector('#exercise-icon');
  exerciseButton.classList.toggle('exercise-active');
  exerciseImage.src = exerciseImage.src.match('assets/exercise.svg') ? 'assets/exercise-active.svg' : 'assets/exercise.svg';
  currentCategory = 'exercise';
}

function newActivity() {
  var timerView = document.querySelector('.timer-view');
  buttonSection.classList.add('hidden');
  timerView.classList.remove('hidden');
  var category = currentCategory;
  currentActivity = new Activity(category, descInput.value, minInput.value, secInput.value);
  updateColor();
  updateDescription();
  updateTimer();
}

function updateDescription() {
  var descInput = document.querySelector('.descInput');
  descInput.innerText = descInput.value;
}

function updateTimer() {
  var timerInput = document.querySelector('h3');
  timerInput.innerText = `${minInput.value}:${secInput.value}`;
}

function updateColor() {
  var timerButton = document.querySelector('.timer');
  if (currentCategory === 'study') {
    timerButton.classList.add('study-button');
  }
  if (currentCategory === 'meditate') {
    timerButton.classList.add('meditate-button');
  }
  if (currentCategory === 'exercise') {
    timerButton.classList.add('exercise-button');
  }
}
