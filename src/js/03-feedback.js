import throttle from 'lodash.throttle';

const feedbackFormElement = document.querySelector('.feedback-form');
const inputElement = document.querySelector('input');
const textareaElement = document.querySelector('textarea');

const handleSaveTextToLS = () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ name: inputElement.value, message: textareaElement.value })
  );
};

const loadTextToForm = () => {
  if (!localStorage.getItem('feedback-form-state')) {
    inputElement.value = '';
    textareaElement.value = '';
    return;
  }

  inputElement.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).name;
  textareaElement.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
};

feedbackFormElement.addEventListener('input', handleSaveTextToLS);
loadTextToForm();

const handleClearFormText = event => {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  loadTextToForm();
  event.preventDefault();
};

feedbackFormElement.addEventListener(
  'submit',
  throttle(handleClearFormText, 500)
);
