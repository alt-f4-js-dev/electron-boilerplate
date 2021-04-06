function PartOfProp_PleaTickThisBox10_change(element) {
  if (element.checked) {
    document
      .getElementById("PartOfProp_PleaQuotTheOSSC10")
      .removeAttribute("disabled");
    document
      .getElementById("PartOfProp_PleaQuotTheOSSC10")
      .setAttribute("mandatory", "");
    document.getElementById("corEsubmNo").innerHTML =
      "Please quote CORENET e-Submission No*";
  } else {
    document
      .getElementById("PartOfProp_PleaQuotTheOSSC10")
      .removeAttribute("mandatory");
    document
      .getElementById("PartOfProp_PleaQuotTheOSSC10")
      .setAttribute("disabled", "");
    document.getElementById("PartOfProp_PleaQuotTheOSSC10").value = "";
    document.getElementById("corEsubmNo").innerHTML =
      "Please quote CORENET e-Submission No";
  }
}
function PartOfProp_ProjNatu10_change(element, textarea) {
  textarea = document.getElementById(textarea);
  if (element.value.trim() === "Others") {
    textarea.setAttribute("mandatory", "");
    textarea.removeAttribute("hidden");
  } else {
    textarea.setAttribute("hidden", "");
    textarea.removeAttribute("mandatory");
    textarea.value = "";
  }
}
function PropUsagOfThe_NetUsabFlooArea10_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseInt(element.value) < 100 || parseInt(element.value) > 99999) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field is ranged from 100 to 99999"
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function PropUsagOfThe_MainUsagOfThe10_change() {
  let selectVal = document
    .getElementById("PropUsagOfThe_MainUsagOfThe10")
    .value.trim();
  console.log(selectVal);

  if (selectVal === "Others") {
    document
      .getElementById("PropUsagOfThe_MainUsagOfThe20")
      .removeAttribute("hidden");
  } else {
    document
      .getElementById("PropUsagOfThe_MainUsagOfThe20")
      .setAttribute("hidden", "");
    document.getElementById("PropUsagOfThe_MainUsagOfThe20").value = "";
  }
}
function DeclByArchProf_IHereSubmThe10_change(element) {
  if (element.checked) {
    document.getElementById(element.id).removeAttribute("checked")
    document.getElementById(element.id).removeAttribute("mandatory")
    document
      .getElementById("Member_Member_Name_QP10_1")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Name_QP10_1")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById(element.id).setAttribute("checked", "")
    document.getElementById(element.id).setAttribute("mandatory", "")
    document
      .getElementById("Member_Member_Name_QP10_1")
      .removeAttribute("mandatory");
    document
      .getElementById("Member_Member_Name_QP10_1")
      .setAttribute("disabled", "");
    document.getElementById("Member_Member_Name_QP10_1").value = "";
  }
}
function dropDownSelection_change(element) {
  let refId = element.id;

  let qpGroup = [
    document.getElementById("PartOfTheQP_ContPersRegaSubm10"),
    document.getElementById("PartOfTheQP_ContPersTeleHand10"),
    document.getElementById("PartOfTheQP_ContPersEmaiAddr10"),
  ];

  let consGroup = [
    document.getElementById("PartOfThePEMEE_ContPersRegaSubm10"),
    document.getElementById("PartOfThePEMEE_ContPersTeleHand10"),
    document.getElementById("PartOfThePEMEE_ContPersEmaiAddr10"),
  ];

  let qpDropDownValLength = document.getElementById("Member_Member_Name_QP10")
    .value;
  let consDropDownValLength = document.getElementById(
    "Member_Member_Name_PEMEE10"
  ).value;

  switch (refId) {
    case "Member_Member_Name_QP10":
      if (qpDropDownValLength.length != "0") {
        for (let target of qpGroup) {
          target.removeAttribute("disabled");
          target.setAttribute("mandatory", "");
        }
        document.getElementById("contactPers10").innerHTML =
          "Contact person regarding submission*";
        document.getElementById("telOrHandPhne10").innerHTML =
          "Telephone/Handphone No.*";
        document.getElementById("emailAdd10").innerHTML = "Email Address*";
      }
      break;
    case "Member_Member_Name_PEMEE10":
      if (consDropDownValLength.length != "0") {
        for (let target of consGroup) {
          target.removeAttribute("disabled");
          target.setAttribute("mandatory", "");
        }
        document.getElementById("contactPers20").innerHTML =
          "Contact person regarding submission*";
        document.getElementById("telOrHandPhne20").innerHTML =
          "Telephone/Handphone No.*";
        document.getElementById("emailAdd20").innerHTML = "Email Address*";
      }
      break;
  }
}
function MainDistLeadPipeMDF_1_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseFloat(textbox.value) < 1 || parseFloat(textbox.value) > 99) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field must be numeric. Data of field is ranged from 1 to 99. Please try again."
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function MainDistFramMDF_1000_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseFloat(textbox.value) < 1000 || parseFloat(textbox.value) > 999999) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field must be numeric. Data of field is ranged from 1000 to 999999. Please try again."
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function MainDistFramMDF_10002_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseFloat(textbox.value) < 1000 || parseFloat(textbox.value) > 999999) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field must be numeric. Data of field is ranged from 1000 to 99999. Please try again."
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function MainDistFramMDF_1_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseFloat(textbox.value) < 2 || parseFloat(textbox.value) > 99) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field must be numeric. Data of field is ranged from 2 to 99. Please try again."
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function MainDistFramMDF_100_change(element) {
  let textbox = document.getElementById(element.id);
  if (parseFloat(textbox.value) < 100 || parseFloat(textbox.value) > 9999) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Data of field must be numeric. Data of field is ranged from 100 to 9999. Please try again."
    );
  } else {
    textbox.removeAttribute("data-invalid");
  }
}

function validEmail(el) {
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

function removeInvalidMDF() {
  let parentDiv = document.getElementById("addressForm");
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  for (let target of childDiv) {
    if (target.hasAttribute("id")) {
      tempDiv.push(target);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let targetTextBox = targetDiv.querySelectorAll("cn2-textbox");
  for (let textbox of targetTextBox) {
    if (textbox.hasAttribute("data-invalid")) {
      textbox.removeAttribute("data-invalid");
    }
  }
}

function removeInvalidTER() {
  let parentDiv = document.getElementById("terForm");
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  for (let target of childDiv) {
    if (target.hasAttribute("id")) {
      tempDiv.push(target);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let targetTextBox = targetDiv.querySelectorAll("cn2-textbox");
  for (let textbox of targetTextBox) {
    if (textbox.hasAttribute("data-invalid")) {
      textbox.removeAttribute("data-invalid");
    }
  }
}

function removeInvalidTRD() {
  let parentDiv = document.getElementById("trdForm");
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  for (let target of childDiv) {
    if (target.hasAttribute("id")) {
      tempDiv.push(target);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let targetTextBox = targetDiv.querySelectorAll("cn2-textbox");
  for (let textbox of targetTextBox) {
    if (textbox.hasAttribute("data-invalid")) {
      textbox.removeAttribute("data-invalid");
    }
  }
}

function addDeleteValidation(formId) {
  let parentDiv = document.getElementById(formId.id);
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  if (childDiv.length > 1) {
    for (let target of childDiv) {
      if (target.hasAttribute("id")) {
        tempDiv.push(target);
      }
    }
    for (x = 0; x < tempDiv.length; x++) {
      let targetDiv = tempDiv[x];
      let targetButton = targetDiv.querySelectorAll("cn2-button");
      for (let button of targetButton) {
        if (button.hasAttribute("danger")) {
          button.removeAttribute("disabled");
        }
      }
    }
  } else {
    for (let target of childDiv) {
      if (target.hasAttribute("id")) {
        tempDiv.push(target);
      }
    }
    let targetDiv = tempDiv[0];
    let targetButton = targetDiv.querySelectorAll("cn2-button");
    for (let button of targetButton) {
      if (button.hasAttribute("danger")) {
        button.setAttribute("disabled", "");
      }
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
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

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
  document.getElementById("Members_UEN_DEVP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_DEVP10")
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

function resetUen(sourceId) {
  if (document.getElementById(sourceId).hasAttribute("data-invalid")) {
    document.getElementById(sourceId).removeAttribute("data-invalid");
    document.getElementById(sourceId).removeAttribute("data-invalid-message");
  }
  document.getElementById(sourceId).value = "";
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}
