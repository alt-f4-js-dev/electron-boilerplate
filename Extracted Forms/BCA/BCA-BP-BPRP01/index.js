function OtheChanPleaWrit20_change(element) {
  if (element.checked) {
    document.getElementById("OtheChanPleaWrit10").removeAttribute("disabled");
    document.getElementById("OtheChanPleaWrit10").setAttribute("mandatory", "");
  } else {
    document.getElementById("OtheChanPleaWrit10").removeAttribute("mandatory");
    document.getElementById("OtheChanPleaWrit10").setAttribute("disabled", "");
  }
}

function Member_Member_Name_OWNER10_change(element) {
  let parent = document.getElementById("particularsOfDeveloperForm");
  let selects = parent.querySelectorAll("cn2-select");
  let textBox = document.getElementById("FIELD2");
  textBox.value = "";
  //let textBoxValue = textBox.value;
  let finalValue = "";

  for (let select of selects) {
    console.log(select.id);
    let tempSelectValue = document.getElementById(select.id).valueLabel;
    console.log(tempSelectValue);
    if (tempSelectValue !== "Please Select") {
      finalValue += tempSelectValue + "\n";
    }
  }
  textBox.value = finalValue;
}

function PartOfAppl_RefOfPlan_change(element) {
  let nonBP = document.getElementById("nonBP");
  let bp = document.getElementById("BP");
  let label = document.querySelector('[target="page5"');

  let bpChckBxGrp = [
    document.getElementById("ChanOrObstIn10"),
    document.getElementById("ShifOfAcceCar10"),
    document.getElementById("ChanToTheStai10"),
    document.getElementById("ChanToTheWidt10"),
    document.getElementById("ChanToTheNumb10"),
    document.getElementById("ChanToTheFaca10"),
    document.getElementById("ChanToTheArea10"),
    document.getElementById("ChanToTheSize10"),
    document.getElementById("MinoChanInSize10"),
    document.getElementById("OtheChanPleaWrit20"),
  ];

  document.getElementById("PartOfAppl_StruPlanOfProjC10").value = "";
  document
    .getElementById("PartOfAppl_StruPlanOfProjC10")
    .removeAttribute("data-invalid");
  document
    .getElementById("PartOfAppl_StruPlanOfProjC10")
    .removeAttribute("mandatory");
  document
    .getElementById("PartOfAppl_StruPlanOfProjC10")
    .setAttribute("mandatory", "");

  if (element.value.trim() === "BP") {
    bp.removeAttribute("hidden");
    nonBP.setAttribute("hidden", "");
    label.removeAttribute("label");
    label.setAttribute(
      "label",
      "Record of<br>Immaterial Changes<br>for Non-structural Building Works"
    );
    document.getElementById("RecOfImmaChan_IConfThatThe10").value = "";
  } else {
    bp.setAttribute("hidden", "");
    nonBP.removeAttribute("hidden");
    label.removeAttribute("label");
    label.setAttribute(
      "label",
      "Record of<br>Immaterial Changes<br>for Lift/Escalator/MCPS Works"
    );
    label.shadowRoot.querySelector("[id='menuLabel']").style =
      "padding-left: 10px; padding-right: 0px; word-wrap:break-word;";
    for (let target of bpChckBxGrp) {
      target.checked = false;
    }
    document.getElementById("OtheChanPleaWrit10").removeAttribute("mandatory");
    document.getElementById("OtheChanPleaWrit10").setAttribute("disabled", "");
    document.getElementById("OtheChanPleaWrit10").value = "";
  }
}

function removeUENerror(parent) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let UENfields = document.querySelectorAll(`[prefix="Members_UEN_OWNER"]`);
  if (childCount > 1) {
    UENfields[UENfields.length - 1].removeAttribute("data-invalid");
    UENfields[UENfields.length - 1].removeAttribute("data-invalid-message");
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`.${deleteClass}`).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(`.${deleteClass}`);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function DeclByQualPers_ICertThatQP10_change() {
  let textArea = document.getElementById("FIELD2");
  textArea.value = "";
  let checkBox = document.getElementById("DeclByQualPers_ICertThatQP10");
  if (checkBox.checked) {
    let parentDiv = document.querySelectorAll(".Afield");
    for (let x = 0; x < parentDiv.length; x++) {
      if (
        parentDiv[x].querySelector("cn2-select").valueLabel !== "Please Select"
      ) {
        textArea.value +=
          parentDiv[x].querySelector("cn2-select").valueLabel + "\n";
      }
    }
  } else {
    textArea.value = "";
  }
}

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
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

//

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
    d.getFullYear() > 9999
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
      "Reference to Plan Number should not be 000. Please try again"
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

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let child = parent.querySelector(`[prefix="${prefix}"]`);
  let index = 0;
  child.setAttribute("raw-value", child.value);
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function nricMaskingAccorDelete(prefix) {
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let index = 0;
  let index2 = 0;
  let x = 1;
  for (let i = 0; i < masked.length; i++) {
    x++;
    index2 = index2 + 10;
    delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    if (x == masked.length) {
      index2 = index2 + 10;
      delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    }
  }
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
}
