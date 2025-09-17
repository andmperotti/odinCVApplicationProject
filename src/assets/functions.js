function changeArrayObjectValue(
  category,
  property,
  value,
  person,
  setPerson,
  index,
) {
  let newPerson = { ...person };
  newPerson[category][index][property] = value;
  setPerson(newPerson);
}

function validityChecker(inputElement, errorMessage, errorMessageId) {
  //check if specific error message is active, if so delete
  if (document.querySelector(`#${errorMessageId}`)) {
    document.querySelector(`#${errorMessageId}`).remove();
  }
  //check if input is valid, remove styling
  if (inputElement.checkValidity() === true) {
    inputElement.style.outline = "none";
  } else {
    inputElement.style.outline = "1px solid red";
    let errorSpan = document.createElement("span");
    errorSpan.textContent = errorMessage;
    errorSpan.id = errorMessageId;
    errorSpan.className = "error-message";
    inputElement.parentNode.after(errorSpan);
  }
}

function saveInput(event, property, person, setPerson) {
  let newPerson = { ...person };
  newPerson[property] = event.target.value;
  setPerson({ ...newPerson });
}

function verifyInputs(section, setStatus) {
  //if submit button error message shown then delete it
  if (document.querySelector(`#${section}-submit-button-error`)) {
    document.querySelector(`#${section}-submit-button-error`).remove();
  }

  //apply outline color if required input fields are invalid
  let invalidInputs = document.querySelectorAll(
    `#${section}-input input[required]:invalid`,
  );
  invalidInputs.forEach((input) => (input.style.outline = "1px solid red"));

  //checks if any required inputs are invalid/blank and displays error message if so
  if (invalidInputs.length === 0) {
    setStatus("submit");
  } else {
    //add error message below span, but somehow limit the number of them, and take them away when the button is pressed again
    let submitErrorMessageSpan = document.createElement("span");
    submitErrorMessageSpan.className = "error-message";
    submitErrorMessageSpan.id = `${section}-submit-button-error`;
    submitErrorMessageSpan.textContent =
      "There are invalid or missing input in the fields above, please input entry into fields, and follow any error prompts  that follow your entry";
    document
      .querySelector(`#submit-${section}-button`)
      .after(submitErrorMessageSpan);
  }
}

function changeResponsibility(
  professionIndex,
  responsibilityIndex,
  newValue,
  person,
  setPerson,
) {
  let newPerson = { ...person };
  newPerson.professional[professionIndex].responsibilities[
    responsibilityIndex
  ] = newValue;
  setPerson(newPerson);
}

export {
  changeArrayObjectValue,
  validityChecker,
  saveInput,
  verifyInputs,
  changeResponsibility,
};
