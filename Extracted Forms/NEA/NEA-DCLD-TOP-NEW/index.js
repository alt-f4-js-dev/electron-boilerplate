document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  let datefield = document.getElementById(
    "PartOfAppl_DateCBPU_DC_Clearance_A1"
  );
  if (!datefield.value) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    console.log(today);
    today = yyyy + "-" + mm + "-" + dd;
    datefield.value = today;
    jsonData["PartOfAppl_DateCBPU_DC_Clearance_A1"] = today;
  }
});

function psda_container_leadingZeros(element) {
  let currentValue = element.value;
  if (currentValue < 100) {
    if (parseInt(currentValue) == 0) {
      element.value = "001";
    } else {
      if (parseInt(currentValue) < 10) {
        element.value = "00" + element.value;
      } else {
        element.value = "0" + element.value;
      }
    }
  }
}

function PartOfAppl_NA_CleaCertForBuil10_changeStatus(
  elementStatus,
  caseID,
  dated
) {
  let caseNo = document.getElementById(caseID);
  let date = document.getElementById(dated);
  if (elementStatus) {
    caseNo.value = "";
    caseNo.removeAttribute("mandatory");
    caseNo.setAttribute("disabled", "");
    date.value = "";
    date.removeAttribute("mandatory");
    date.setAttribute("disabled", "");
  } else {
    caseNo.removeAttribute("disabled");
    caseNo.setAttribute("mandatory", "");
    date.removeAttribute("disabled");
  }
}

function disableOtherCheckbox(elementStatus, otherElement) {
  if (elementStatus) {
    document.getElementById(otherElement).setAttribute("disabled", "");
  } else {
    document.getElementById(otherElement).removeAttribute("disabled");
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function add_change(containerName) {
  let formContainer = document.getElementById(containerName);
  let field = document.querySelectorAll(".planType_B");
  let formCount = formContainer.childElementCount;
  if (formCount > 1) {
    for (let i = 0; i < field.length; i++) {
      field[field.length - 1].value = "001";
    }
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

function PartOfAppl_PlanType_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value.trim() === "000") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Data of field is limited to 3 digits. Please try again"
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

function clearTextBox() {
  let parentDiv = document.getElementById("psda-container");
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  for (let target of childDiv) {
    if (target.hasAttribute("id")) {
      tempDiv.push(target);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let targetTextBox = targetDiv.querySelectorAll("cn2-textbox");
  let field = targetDiv.querySelector("cn2-select");
  field.value = "BP";
  for (let textbox of targetTextBox) {
    if (textbox.hasAttribute("data-invalid")) {
      textbox.removeAttribute("data-invalid");
    }
  }
}

function fileRef_change(el) {
  if (el.id === "PartOfAppl_RefeNumb_CleaCertForBuil10") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuil10")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuil10")
        .removeAttribute("mandatory");
    }
  } else if (el.id === "PartOfAppl_RefeNumb_CleaCertForBuilENVH10") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuilENVH10")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuilENVH10")
        .removeAttribute("mandatory");
    }
  } else if (el.id === "PartOfAppl_RefeNumb_PlanSubmForlocaMechEqui10") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_PlanSubmForlocaMechEqui10")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_PlanSubmForlocaMechEqui10")
        .removeAttribute("mandatory");
    }
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
