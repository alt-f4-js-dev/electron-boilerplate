document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png"); 
});

function removeSelectUENerror(uenFieldID){
  let uen = document.getElementById(uenFieldID);
  uen.value = "";
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}


function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute('maxlength');
  let uenField = document.getElementById(el.id);
  if (el.value.trim().length !== maxlength && el.value.trim() !== '') {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute('data-invalid', '');
      document
        .getElementById(el.id)
        .setAttribute(
          'data-invalid-message',
          'This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character'
        );
    } else {
      uenField.removeAttribute('data-invalid');
      uenField.removeAttribute('data-invalid-message');
    }
  } else if (el.value.trim() === '') {
    if (uenField.hasAttribute("mandatory")) {
      uenField.removeAttribute("mandatory");
      uenField.setAttribute("mandatory", "");
    }
    uenField.value = '';
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
  } else {
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
  }
}
function PartOfAppl_ProjType10_changed(element) {
  let textarea = document.getElementById("PartOfAppl_ProjType_Othe20");
  if (
    element.value.trim() === "A&A Works" ||
    element.value.trim() === "Others"
  ) {
    textarea.removeAttribute("disabled");
    textarea.setAttribute("mandatory", "");
    textarea.removeAttribute("hidden");
  } else {
    textarea.removeAttribute("mandatory");
    textarea.setAttribute("disabled", "");
    textarea.setAttribute("hidden", "");
    textarea.value = "";
  }
}

function DeclByAppl_TotaNumbOfPlan10_clicked(element) {
  let textbox = document.getElementById("DeclByAppl_TotaNumbOfPlan20");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function Project_BS(element) {
  let radio = document.getElementById("Project_PlanSubm_1Subm10");
  let radio1 = document.getElementById("Project_PlanSubm_AmenPlan10");
  if (element.id === "Project_PlanSubm10") {
    document.querySelector("[target='page6']").setAttribute("hidden", "");
    document.querySelector("[target='page5']").removeAttribute("hidden");
    radio.removeAttribute("disabled");
    radio.checked = true;
    radio1.removeAttribute("disabled");
  } else {
    document.querySelector("[target='page5']").setAttribute("hidden", "");
    document.querySelector("[target='page6']").removeAttribute("hidden");
    radio.setAttribute("disabled", "");
    radio.checked = false;
    radio1.checked = false;
    radio1.setAttribute("disabled", "");
  }
}
function DeclByAppl_TheQualPersOf10_change(element, text) {
  let textbox = document.getElementById(text);
  let name = document
    .getElementById("Member_Member_Name_QP10")
    .valueLabel.trim();
  if (element.checked) {
    if (name === "Please Select") {
      textbox.value = "";
    } else {
      textbox.value = name;
      textbox.setAttribute("mandatory", "");
    }
  } else {
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}
function Member_Member_Name_QP10_change(element) {
  let value = document.getElementById(element.id).valueLabel.trim();
  let textbox = document.getElementById("DeclByAppl_I10");
  let textbox2 = document.getElementById("ConfByQualPers_I10");
  let radioButton = document.getElementById("Project_PlanSubm10");
  let checked = document.getElementById("DeclByAppl_TheQualPersOf10").checked;
  if (radioButton.checked) {
    if (checked) {
      textbox.value = value;
      textbox.setAttribute("mandatory", "");
    } else {
      textbox.value = "";
      textbox.removeAttribute("mandatory");
    }
  } else {
    ConfByQualPers_change(textbox2.id);
  }
}
function DeclByAppl_TotaNumbOfPlan10_change(element, tbox) {
  let textbox = document.getElementById(tbox);
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}
function ConfByQualPers_change(box) {
  let textbox = document.getElementById(box);
  let checkboxes = [
    document.getElementById("ConfByQualPers_IHaveInsp"),
    document.getElementById("ConfByQualPers_AllMajoAmen"),
    document.getElementById("ConfByQualPers_MinoAmenAre"),
    document.getElementById("ConfByQualPers_TherAreNoDepa")
  ];
  let select = document.getElementById("Member_Member_Name_QP10");

  let ctr = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      ctr = true;
      break;
    }
  }
  if (ctr) {
    if (select.valueLabel.trim() === "Please Select") {
      textbox.value = "";
    } else {
      textbox.value = select.valueLabel.trim();
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    textbox.value = "";
    textbox.removeAttribute("mandatory");
  }
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
