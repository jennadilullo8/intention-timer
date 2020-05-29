var buttonSection = document.querySelector('.button-select-category');

var currentActivity;
var currentCategory

buttonSection.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.classList.contains('study')) {
    changeStudyButton(event);
  } else if (event.target.classList.contains('meditate')) {
    changeMeditateButton();
  } else if (event.target.classList.contains('exercise')) {
    changeExerciseButton();
  } else if (event.target.classList.contains('start-activity')) {
    newActivity(event);
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
  var category = currentCategory;
  var description = document.querySelector('#description-input').value;
  var minutes = document.querySelector("#minutes-input").value;
  var seconds = document.querySelector("#seconds-input").value;
  currentActivity = new Activity(category, description, minutes, seconds);
}
