document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "BCA") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550 `;
    agencyAdd.removeAttribute("hidden");
  } else if (element.value == "DSTA") {
    agencyAdd.value = `Defence Science & Technology Agency
Building & Infrastructure
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
    agencyAdd.removeAttribute("hidden");
  } else {
    agencyAdd.setAttribute("hidden", "");
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

function EmailValidate(element) {
  let field = document.getElementById(element.id);
  if (!validateEmail(element.value)) {
    field.setAttribute("data-invalid", "");
    field.setAttribute(
      "data-invalid-message",
      "Invalid Format. Please enter a valid Email Address."
    );
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

function removeManda(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}
