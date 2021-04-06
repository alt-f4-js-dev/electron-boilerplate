function PartOfAppl_NA_SIPDIPFromCBPU_change(element) {
  let input = document.getElementById("lblPartOfAppl_RefeNumb10");
  let dateField = document.getElementById("PartOfAppl_Date_SIPDIPFromCBPU");

  if (element.checked) {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory", "");
    input.value = "";
    dateField.setAttribute("disabled", "");
    dateField.value = "";
  } else {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    dateField.removeAttribute("disabled");
  }
}

function PartOfAppl_NA_DCCleaFromCBPU_change(element) {
  let input = document.getElementById("PartOfAppl_RefeNumb_DCCleaFromCBPU");
  let dateField = document.getElementById("PartOfAppl_Date_DCCleaFromCBPU");

  if (element.checked) {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
    dateField.setAttribute("disabled", "");
    dateField.value = "";
  } else {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    dateField.removeAttribute("disabled");
  }
}

function DeclByQualPers_ThePartOfProj15_change(element) {
  let componentList = [
    document.getElementById("Member_Email_Address1_QP10_1"),
    document.getElementById("Member_Email_Address1_QP11"),
    document.getElementById("DeclByQualPers_ThePartOfProj18")
  ];

  if (element.checked) {
    for (let component of componentList) {
      component.removeAttribute("disabled");
    }
  } else {
    for (let component of componentList) {
      component.setAttribute("disabled", "");
      component.value = "";
      component.checked = false;
    }
  }
}

function confirmation_AntiMosquito_change(element) {
  let refId = element.id;

  let dateField = document.getElementById(
    "FieldDeclByQualPers_IHereDeclThat12"
  );

  switch (refId) {
    case "DeclByQualPers_IHereDeclThat11":
      dateField.removeAttribute("disabled");
      break;
    default:
      dateField.value = "";
      dateField.setAttribute("disabled", "");
      break;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

function rangeEvent(element) {
  element.value > 25 ? (element.value = "") : "";
}

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
