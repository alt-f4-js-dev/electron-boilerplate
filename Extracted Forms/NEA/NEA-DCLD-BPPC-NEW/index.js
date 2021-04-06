function makeDateManda(field, datefield) {
  field = document.getElementById(field);
  dateField = document.getElementById(datefield);

  if (field.value && !dateField.value) {
    dateField.setAttribute("mandatory", "");
  } else {
    dateField.removeAttribute("mandatory");
  }
}

function DeclByQualPers_ThePartOfProj15_change(element) {
  let componentList = [
    document.getElementById("Member_Email_Address1_QP10_1"),
    document.getElementById("Member_Email_Address1_QP11")
  ];

  if (element.checked) {
    for (let component of componentList) {
      component.removeAttribute("disabled");
    }
    document
      .getElementById("DeclByQualPers_ThePartOfProj18")
      .removeAttribute("disabled");
    document.getElementById("DeclByQualPers_ThePartOfProj18").checked = true;
  } else {
    for (let component of componentList) {
      component.setAttribute("disabled", "");
      component.value = "";
    }
    document
      .getElementById("DeclByQualPers_ThePartOfProj18")
      .setAttribute("disabled", "");
    document.getElementById("DeclByQualPers_ThePartOfProj18").checked = false;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute(
    "title",
    `APPLICATION FOR CLEARANCE CERTIFICATE FOR BUILDING PLAN ON POLLUTION CONTROL FOR INDUSTRIAL PLANT WORKS - NEW SUBMISSION
    <br>[Under Section 33(1) Of The Environmental Protection And Managemenet Act (EPMA), Cpter 94A]`
  );
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
    d.getFullYear() < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
  document.getElementById("Members_UEN_OWNER" + id + "0").value = "";
  document
    .getElementById("Members_UEN_OWNER" + id + "0")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + id + "0")
    .removeAttribute("data-invalid-message");
}

function togglePartQp() {
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
    .removeAttribute("data-invalid-message");
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
