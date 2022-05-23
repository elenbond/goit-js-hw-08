import throttle from "lodash.throttle";

const inputForm = document.querySelector(".feedback-form");

const LOCALSTORAGE_FEEDBACK_FORM = "feedback-form-state";
const data = localStorage.getItem(LOCALSTORAGE_FEEDBACK_FORM);
const savedData = JSON.parse(data);

const formData = (savedData != null || savedData != undefined) ? savedData : {};

const inputData = (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_FEEDBACK_FORM, JSON.stringify(formData));
}

const saveToLocalStorage = () => {
    if (savedData) {
        const { email, message } = savedData;
        inputForm.email.value = email;
        inputForm.message.value = message;
    }
}
saveToLocalStorage();

const removeSavedData = (event) => {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_FEEDBACK_FORM);
    console.log(formData);
}

inputForm.addEventListener("input", throttle(inputData, 500))
inputForm.addEventListener("submit", removeSavedData);