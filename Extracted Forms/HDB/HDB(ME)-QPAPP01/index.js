document.addEventListener("DOMContentLoaded", function(event) {
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

function PartOfAppl_TypeOfWork_Othe10_change(element) {
  let textarea = document.getElementById("PartOfAppl_TypeOfWork_Othe20");
  if (element.checked) {
    document.getElementById("otherLbl").innerHTML = " Others*";
    textarea.setAttribute("mandatory", "");
    textarea.removeAttribute("disabled");
    textarea.removeAttribute("hidden");
  } else {
    document.getElementById("otherLbl").innerHTML = " Others";
    textarea.setAttribute("disabled", "");
    textarea.removeAttribute("mandatory");
    textarea.setAttribute("hidden", "");
    textarea.value = "";
  }
}
function PartOfAppl_change(element) {
  let checkboxes = document.querySelectorAll("[group-id='PartOfAppl_id']");
  let ctr = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      ctr = true;
      break;
    }
  }
  if (ctr) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "false");
    }
  }
}
function PartOfAppl_ProjType10_change(element) {
  let selectValue = document.getElementById(element.id).valueLabel.trim();
  let textarea = document.getElementById("PartOfAppl_ProjType_Othe20");
  if (
    selectValue === "A&amp;A Works (HDB's specific programme)" ||
    selectValue === "Others"
  ) {
    textarea.setAttribute("mandatory", "");
    textarea.removeAttribute("disabled");
    textarea.removeAttribute("hidden");
  } else {
    textarea.setAttribute("disabled", "");
    textarea.removeAttribute("mandatory");
    textarea.setAttribute("hidden", "");
    textarea.value = "";
  }
}
function CHECK1_change(element) {
  let select = document.getElementById("Member_Member_Name_QP10_1");
  if (element.checked) {
    select.setAttribute("mandatory", "");
    select.removeAttribute("disabled");
  } else {
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    select.value = "";
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
  document.getElementById("Members_UEN_QP10").value = "";
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
    .removeAttribute("data-invalid-message");
}
