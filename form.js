const scriptURL = "https://script.google.com/macros/s/AKfycbwwjnjGJo7RuWO35o2lQ6-YAKoWDJdmGHvYJwCSud1v2x2gpRhXdosxN_URPDHJ_U8/exec"
const form = document.forms['Form-Pendaftaran'];
const formEl = document.querySelector(".form");
const responseSuccess = document.querySelector(".response-success");
const responseFailed = document.querySelector(".response-failed");
const loadingSpinner = document.querySelector(".loading-spinner");

const onFormSubmitHandle = (ev) => {
  ev.preventDefault();
  loadingSpinner.classList.remove("sr-only");
  formEl.classList.add("sr-only");

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      form.reset();
      loadingSpinner.classList.add("sr-only");
      responseSuccess.classList.remove("sr-only");
    })
    .catch(error => {
      loadingSpinner.classList.add("sr-only");
      formEl.classList.remove("sr-only");
      responseFailed.classList.remove("sr-only");
    });
};

formEl.addEventListener("submit", onFormSubmitHandle);