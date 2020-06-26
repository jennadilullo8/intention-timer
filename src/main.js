var body = document.querySelector('body');
var buttonSection = document.querySelector('.button-select-category');
var createNewActivitySection = document.querySelector('.create-a-new-activity');
var timerView = document.querySelector('.timer-view');
var activityButton = document.querySelector('.start-activity');
var timerButton = document.querySelector('.timer');
var logActivityButton = document.querySelector('.log-activity');
var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
var createNewActivityButton = document.querySelector('.create');
var descInput = document.querySelector('#description-input');
var minInput = document.querySelector('#minutes-input');
var secInput = document.querySelector('#seconds-input');
var timerInput = document.querySelector('h3');
var descErrorMessage = document.querySelector('.desc');
var minErrorMessage = document.querySelector('.min');
var secErrorMessage = document.querySelector('.sec');
var completeActiveDisplay = document.querySelector('.completed-activity-display');
var newActiveDisplay = document.querySelector('.new-activity-display');
var currentActiveDisplay = document.querySelector('.current-activity');
var studyImage = document.querySelector('#study-icon');
var meditateImage = document.querySelector('#meditate-icon');
var exerciseImage = document.querySelector('#exercise-icon');

var savedActivities = [];
var currentActivity;
var currentCategory;

window.onload = localStorageActivity();
body.addEventListener('click', clickHandler);
buttonSection.addEventListener('input', inputHandler);
buttonSection.addEventListener('keyup', enableStartActivityButton);

function clickHandler(event) {
  if (event.target.classList.contains('study')) {
    changeStudyButton();
  } else if (event.target.classList.contains('meditate')) {
    changeMeditateButton();
  } else if (event.target.classList.contains('exercise')) {
    changeExerciseButton();
  } else if (event.target.classList.contains('start-activity')) {
    newActivity();
  } else if (event.target.classList.contains('create')) {
    resetNewActivityPage();
  } else if (event.target.classList.contains('timer')) {
    currentActivity.startTimer();
  } else if (event.target.classList.contains('log-activity')) {
    displayActivity();
    currentActivity.markComplete();
    currentActivity.saveToStorage();
  }
};

function inputHandler(event) {
  if (event.target.matches('#minutes-input') || event.target.matches('#seconds-input') || event.target.matches('#description-input')) {
    displayError();
    hideError();
  }
};

function changeStudyButton() {
  studyButton.classList.toggle('study-active');
  studyImage.src = studyImage.src.match('assets/study.svg') ? 'assets/study-active.svg' : 'assets/study.svg';
  currentCategory = 'study';
  enableStartActivityButton();
};

function changeMeditateButton() {
  meditateButton.classList.toggle('meditate-active');
  meditateImage.src = meditateImage.src.match('assets/meditate.svg') ? 'assets/meditate-active.svg' : 'assets/meditate.svg';
  currentCategory = 'meditate';
  enableStartActivityButton();
};

function changeExerciseButton() {
  exerciseButton.classList.toggle('exercise-active');
  exerciseImage.src = exerciseImage.src.match('assets/exercise.svg') ? 'assets/exercise-active.svg' : 'assets/exercise.svg';
  currentCategory = 'exercise';
  enableStartActivityButton();
};

function newActivity() {
  var timerView = document.querySelector('.timer-view');
  buttonSection.classList.add('hidden');
  timerView.classList.remove('hidden');
  currentActivity = new Activity(currentCategory, descInput.value, parseInt(minInput.value), parseInt(secInput.value));
  savedActivities.push(currentActivity);
  updateTimerPageDisplay();
};

function updateTimerPageDisplay() {
  updateColor();
  updateDescription();
  updateTimer();
}

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

function updateDescription() {
  var userDescription = document.querySelector('.desc-input');
  userDescription.innerText = descInput.value;
};

function updateTimer() {
  newActiveDisplay.classList.add('hidden');
  currentActiveDisplay.classList.remove('hidden');
  timerInput.innerText = `${minInput.value.padStart(2, '0')}:${secInput.value.padStart(2, '0')}`;
};

function showTimerComplete() {
  timerButton.innerText = `You crushed and did it!`;
  logActivityButton.classList.remove('hidden');
}

function displayError() {
  if (minInput.checkValidity() === false) {
    minErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
  if (secInput.checkValidity() === false) {
    secErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
  if (descInput.value === '') {
    descErrorMessage.classList.remove('hidden');
    activityButton.disabled = true;
  }
};

function hideError() {
  if (minInput.checkValidity() === true) {
    minErrorMessage.classList.add('hidden');
  }
  if (secInput.checkValidity() === true) {
    secErrorMessage.classList.add('hidden');
  }
  if (descInput.value !== '') {
    descErrorMessage.classList.add('hidden');
  }
};

function enableStartActivityButton() {
  if (currentCategory !== undefined && descInput.value !== '' && minInput.value !== '' && secInput.value !== '') {
    activityButton.disabled = false;
  }
};

function displayActivity() {
  var pastActivitiesParagraphs = document.querySelector('.past-activities-paragraphs');
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
  activityButton.disabled = true;
};

function updateColorBorder(category) {
  var className = null;
  switch (category) {
    case 'study':
      className = 'border-right-study';
      break;
    case 'meditate':
      className = 'border-right-meditate';
      break;
    case 'exercise':
      className = 'border-right-exercise';
      break;
    }
  return className;
};

function resetNewActivityPage() {
  completeActiveDisplay.classList.add('hidden');
  newActiveDisplay.classList.remove('hidden');
  buttonSection.classList.remove('hidden');
  createNewActivitySection.classList.add('hidden');
  descErrorMessage.classList.add('hidden');
  minErrorMessage.classList.add('hidden');
  secErrorMessage.classList.add('hidden');
  clearInputs();
  clearCategory();
  resetTimerView();
};

function clearInputs() {
  minInput.value = '';
  secInput.value = '';
  descInput.value = '';
};

function clearCategory() {
  currentCategory = undefined;
  studyButton.classList.remove('study-active');
  studyImage.src = 'assets/study.svg';
  meditateButton.classList.remove('meditate-active');
  meditateImage.src = 'assets/meditate.svg';
  exerciseButton.classList.remove('exercise-active');
  exerciseImage.src = 'assets/exercise.svg';
};

function resetTimerView() {
  logActivityButton.classList.add('hidden');
  timerButton.innerText = 'START';
  timerButton.classList.remove('study-button');
  timerButton.classList.remove('meditate-button');
  timerButton.classList.remove('exercise-button');
};

function localStorageActivity() {
  if (localStorage) {
    for (var i = 0; i < localStorage.length; i++) {
      var activityID = localStorage.key(i);
      var activityObject = JSON.parse(localStorage.getItem(activityID));
      activityObject = new Activity(activityObject.category, activityObject.description, activityObject.minutes, activityObject.seconds);
      savedActivities.push(activityObject);
      displayActivity();
      createNewActivitySection.classList.add('hidden');
      completeActiveDisplay.classList.add('hidden');
    };
  };
};
