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

//function that displays a custom errorMessage when the user has entered invalid data to that field which is defined by type and or pattern
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

//method used to replace simple property value pairs
function saveInput(event, property, person, setPerson) {
  let newPerson = { ...person };
  newPerson[property] = event.target.value;
  setPerson({ ...newPerson });
}

//Called on submit button of components, verifies that entry to input elements in a component are valid before changing that component to 'submit' status, else displays an error message below submit button it's called on
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

//function swaps out saved value for new entry by user
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

function deleteResponsibility(
  professionIndex,
  responsibilityIndex,
  person,
  setPerson,
) {
  console.log(professionIndex);
  let newPerson = { ...person };
  newPerson.professional[professionIndex].responsibilities.splice(
    responsibilityIndex,
    1,
  );
  setPerson(newPerson);
}

function deleteExperience(professionalIndex, person, setPerson) {
  let newPerson = { ...person };
  newPerson.professional.splice(professionalIndex, 1);
  setPerson(newPerson);
}

function addProfession(person, setPerson) {
  let newPerson = { ...person };
  newPerson.professional.push({
    companyName: "",
    positionHeld: "",
    startDate: "",
    endDate: "",
    responsibilities: [""],
  });
  setPerson(newPerson);
}

function addEducation(person, setPerson) {
  if (person.education.length < 10) {
    let newPerson = { ...person };
    newPerson.education.push({
      institutionName: "",
      courseTitle: "",
      startDate: "",
      endDate: "",
    });
    setPerson(newPerson);
  } else {
    //tell the user that there are only ten educations allowed
    let educationLimitError = document.createElement("span");
    educationLimitError.id = "education-limit-error-message";
    educationLimitError.textContent =
      "You cannot have more than ten education objects";
    document.querySelector("#add-education-button").after(educationLimitError);
    setTimeout(() => {
      educationLimitError.remove();
    }, 5000);
  }
}

function addResponsibility(person, setPerson, index) {
  let newPerson = { ...person };
  newPerson.professional[index].responsibilities.push("");
  setPerson(newPerson);
}

function addSkill(person, setPerson) {
  let newPerson = { ...person };
  newPerson.skills.push("");
  setPerson(newPerson);
}

function deleteSkill(person, setPerson, index) {
  let newPerson = { ...person };
  newPerson.skills.splice(index, 1);
  setPerson(newPerson);
}

function changeSkill(person, setPerson, newValue, index) {
  let newPerson = { ...person };
  newPerson.skills[index] = newValue;
  setPerson(newPerson);
}

export {
  changeArrayObjectValue,
  validityChecker,
  saveInput,
  verifyInputs,
  changeResponsibility,
  deleteResponsibility,
  deleteExperience,
  addProfession,
  addEducation,
  addSkill,
  deleteSkill,
  addResponsibility,
  changeSkill,
};
