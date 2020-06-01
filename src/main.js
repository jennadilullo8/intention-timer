var buttonSection = document.querySelector('.button-select-category');
var activityButton = document.querySelector('.start-activity');
var minInput = document.querySelector('#minutes-input');
var secInput = document.querySelector('#seconds-input');
var descInput = document.querySelector('#description-input');
var timerButton = document.querySelector('.timer');
var timerInput = document.querySelector('h3');
var completeActiveDisplay = document.querySelector('.completed-activity-display');
var newActiveDisplay = document.querySelector('.new-activity-display');
var currentActiveDisplay = document.querySelector('.current-activity');
var pastActivitiesParagraphs = document.querySelector('.past-activities-paragraphs');
var createNewActivitySection = document.querySelector('.create-a-new-activity');
var timerView = document.querySelector('.timer-view');
var logActivityButton = document.querySelector('.log-activity');
var createNewActivityButton = document.querySelector('.create');
var exerciseButton = document.querySelector('.exercise');
var meditateButton = document.querySelector('.meditate');
var studyButton = document.querySelector('.study');
var exerciseImage = document.querySelector('#exercise-icon');
var meditateImage = document.querySelector('#meditate-icon');
var studyImage = document.querySelector('#study-icon');

var savedActivities = [];
var currentActivity;
var currentCategory;

logActivityButton.addEventListener('click', displayActivity);
buttonSection.addEventListener('click', clickHandler);
minInput.addEventListener('input', displayMinError);
secInput.addEventListener('input', displaySecError);
descInput.addEventListener('input', displayDescError);
buttonSection.addEventListener('keyup', enableStartActivityButton);
createNewActivityButton.addEventListener('click', resetNewActivityPage);
timerButton.addEventListener('click', function() {
  currentActivity.startTimer();
});

function clickHandler(event) {
  if (event.target.classList.contains('study')) {
    changeStudyButton();
  } else if (event.target.classList.contains('meditate')) {
    changeMeditateButton();
  } else if (event.target.classList.contains('exercise')) {
    changeExerciseButton();
  } else if (event.target.classList.contains('start-activity')) {
    newActivity();
  }
};

function changeStudyButton() {
  studyButton.classList.toggle('study-active');
  studyImage.src = studyImage.src.match('assets/study.svg') ? 'assets/study-active.svg' : 'assets/study.svg';
  currentCategory = 'study';
};

function changeMeditateButton() {
  meditateButton.classList.toggle('meditate-active');
  meditateImage.src = meditateImage.src.match('assets/meditate.svg') ? 'assets/meditate-active.svg' : 'assets/meditate.svg';
  currentCategory = 'meditate';
};

function changeExerciseButton() {
  exerciseButton.classList.toggle('exercise-active');
  exerciseImage.src = exerciseImage.src.match('assets/exercise.svg') ? 'assets/exercise-active.svg' : 'assets/exercise.svg';
  currentCategory = 'exercise';
};

function newActivity() {
  var timerView = document.querySelector('.timer-view');
  buttonSection.classList.add('hidden');
  timerView.classList.remove('hidden');
  var category = currentCategory;
  currentActivity = new Activity(category, descInput.value, minInput.value, secInput.value);
  savedActivities.push(currentActivity);
  updateColor();
  updateDescription();
  updateTimer();
};

function clearInputs() {
  minInput.value = '';
  secInput.value = '';
  descInput.value = '';
  currentActivity.value = '';
};

function clearCategory() {
  studyButton.classList.remove('study-active');
  meditateButton.classList.remove('meditate-active');
  exerciseButton.classList.remove('exercise-active');
  exerciseImage.src = 'assets/exercise.svg';
  studyImage.src = 'assets/study.svg';
  meditateImage.src = 'assets/meditate.svg';
};

function updateDescription() {
  var userDescription = document.querySelector('.desc-input');
  userDescription.innerText = descInput.value;
};

function updateTimer() {
  newActiveDisplay.classList.add('hidden');
  currentActiveDisplay.classList.remove('hidden');
  timerInput.innerText = `${minInput.value}:${secInput.value}`;
};

function updateColor() {
  if (currentCategory === 'study') {
    timerButton.classList.add('study-button');
  }
  if (currentCategory === 'meditate') {
    timerButton.classList.add('meditate-button');
  }
  if (currentCategory === 'exercise') {
    timerButton.classList.add('exercise-button');
  }
};

function displayMinError() {
  var minErrorMessage = document.querySelector('.min');
  if (minInput.checkValidity() === false) {
    minErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
};

function displaySecError() {
  var secErrorMessage = document.querySelector('.sec');
  if (secInput.checkValidity() === false) {
    secErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
};

function displayDescError() {
  var descErrorMessage = document.querySelector('.desc');
  if (descInput.value === '') {
    descErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
};

function enableStartActivityButton() {
  if (currentCategory !== '' && descInput.value !== '' && minInput.value !== '' && secInput.value !== '') {
    activityButton.disabled = false;
  }
};

function displayActivity() {
  timerView.classList.add('hidden');
  createNewActivitySection.classList.remove('hidden');
  currentActiveDisplay.classList.add('hidden');
  completeActiveDisplay.classList.remove('hidden');
  pastActivitiesParagraphs.innerText = '';
  for (var i = 0; i < savedActivities.length; i++) {
    var className = updateColorBorder(savedActivities[i].category);
    var pastActivityHTML = `
    <article class='past-activities-article ${className}' data-id=${savedActivities[i].id}>
     <h4 class='category-display'>${savedActivities[i].category.toUpperCase()}</h4>
     <p class='time-display'>${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
     <p class='description-display'>${savedActivities[i].description}</p>
     </article> `
     pastActivitiesParagraphs.insertAdjacentHTML('beforeend', pastActivityHTML);
  }
};

function resetNewActivityPage() {
  completeActiveDisplay.classList.add('hidden');
  newActiveDisplay.classList.remove('hidden');
  buttonSection.classList.remove('hidden');
  createNewActivitySection.classList.add('hidden');
  clearInputs();
  clearCategory();
};

function updateColorBorder(category) {
  var className = null;
  if (category === 'study') {
    className = 'border-right-study';
  } else if (category === 'exercise') {
    className = 'border-right-exercise';
  } else if (category === 'meditate') {
    className = 'border-right-meditate';
  }
  return className;
};
