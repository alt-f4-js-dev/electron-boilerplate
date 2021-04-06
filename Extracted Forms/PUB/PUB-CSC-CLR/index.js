function toggleDecl(el) {
  switch (el.id) {
    case "Atta_TopClerForSani30":
      let textbox = document.getElementById("Atta_TopClerForSani20");
      if (el.checked) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      } else {
        textbox.setAttribute("mandatory", "");
        textbox.removeAttribute("disabled");
      }
      break;
    case "Atta_TopClerForDrai30":
      let textbox4 = document.getElementById("Atta_TopClerForDrai20");
      if (el.checked) {
        textbox4.setAttribute("disabled", "");
        textbox4.removeAttribute("mandatory");
        textbox4.value = "";
      } else {
        textbox4.setAttribute("mandatory", "");
        textbox4.removeAttribute("disabled");
      }
      break;
    case "Atta_TopClerForSani10":
      let textbox2 = document.getElementById("Atta_TopClerForSani20");
      let checkbox2 = document.getElementById("Atta_TopClerForSani30");
      if (el.checked) {
        textbox2.setAttribute("mandatory", "");
        checkbox2.setAttribute("mandatory", "");
        textbox2.removeAttribute("disabled");
        checkbox2.removeAttribute("disabled");
      } else {
        textbox2.setAttribute("disabled", "");
        checkbox2.setAttribute("disabled", "");
        textbox2.removeAttribute("mandatory");
        checkbox2.removeAttribute("mandatory");
        textbox2.value = "";
        checkbox2.checked = false;
      }
      break;
    case "Atta_TopClerForDrai10":
      let textbox3 = document.getElementById("Atta_TopClerForDrai20");
      let checkbox3 = document.getElementById("Atta_TopClerForDrai30");
      if (el.checked) {
        textbox3.setAttribute("mandatory", "");
        checkbox3.setAttribute("mandatory", "");
        textbox3.removeAttribute("disabled");
        checkbox3.removeAttribute("disabled");
      } else {
        textbox3.setAttribute("disabled", "");
        checkbox3.setAttribute("disabled", "");
        textbox3.removeAttribute("mandatory");
        checkbox3.removeAttribute("mandatory");
        textbox3.value = "";
        checkbox3.checked = false;
      }
      break;
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    let planType = document.querySelectorAll(".planType");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
      if (planType[i].value == "") {
        planType[i].value = "001";
      }
    }
  }
}

//

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function validateDate(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  var d = new Date(year, month - 1, day);
  if (
    (d.getFullYear() != year &&
      d.getMonth() != month - 1 &&
      d.getDate() != day) ||
    d.getFullYear() > 2999 ||
    d.getFullYear < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");
  let uenField = document.getElementById(el.id);
  if (el.value.trim().length !== maxlength && el.value.trim() !== "") {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
        );
    } else {
      uenField.removeAttribute("data-invalid");
      uenField.removeAttribute("data-invalid-message");
    }
  } else if (el.value.trim() === "") {
    if (uenField.hasAttribute("mandatory")) {
      uenField.removeAttribute("mandatory");
      uenField.setAttribute("mandatory", "");
    }
    uenField.value = "";
    uenField.removeAttribute("data-invalid");
    uenField.removeAttribute("data-invalid-message");
  } else {
    uenField.removeAttribute("data-invalid");
    uenField.removeAttribute("data-invalid-message");
  }
}

function PartOfAppl_PlanType_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value.trim() === "000") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Plan Type should not be 000. Please try again"
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

function PartOfAppl_PlanType_keypress(event, element) {
  let textBox = document.getElementById(element.id);
  let keynum;
  if (window.event) {
    keynum = event.keyCode;
  } else if (event.which) {
    keynum = event.which;
  }
  let pressed = String.fromCharCode(keynum);

  if (textBox.value === "00") {
    if (pressed === "0") {
      event.preventDefault();
    }
  }
}

function checkEmail(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateEmail(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Invalid Format. Please try again."
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}
