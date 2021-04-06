document.addEventListener("DOMContentLoaded", function (event) {
  let hour24total2 = document.querySelectorAll(
    "[prefix='SubmDeta_24Hour_TotaSyst']"
  );
  for (let i = 0; i < hour24total2.length; i++) {
    if (!hour24total2[i].value) {
      hour24total2[i].value = 0;
    }
  }
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

function chkPartOfAppl_BuilType_change(element, textArea) {
  let prefix, suffix;
  select = document.getElementById(element.id);
  value = element.value;
  if (select.getAttribute("prefix") !== null) {
    prefix = select.getAttribute("prefix");
  }
  if (select.getAttribute("suffix") !== null) {
    suffix = select.getAttribute("suffix");
  } else {
    suffix = "";
  }

  let idInc = element.id.substring(
    prefix.length,
    element.id.length - suffix.length
  );

  textArea =
    document.getElementById(textArea).getAttribute("prefix") +
    idInc +
    document.getElementById(textArea).getAttribute("suffix");
  if (value === "Others") {
    document.getElementById(textArea).removeAttribute("disabled");
    document.getElementById(textArea).setAttribute("mandatory", "");
  } else {
    document.getElementById(textArea).setAttribute("disabled", "");
    document.getElementById(textArea).removeAttribute("mandatory");
    document.getElementById(textArea).value = "";
  }
  otherAsterisk();
}

function otherAsterisk() {
  let asterisk = document.getElementById("PartOfAppl_GfaOthe_aste");
  let buildingType = document.querySelectorAll(
    `[prefix="chkPartOfAppl_BuilType"]`
  );
  let test = false;

  for (let btype of buildingType) {
    if (btype.value == "Others") {
      test = true;
    }
  }

  if (test == true) {
    asterisk.innerHTML = "*";
  } else {
    asterisk.innerHTML = "";
  }
}

function SubmDeta_UnitSystSplitSyst10_change(element) {
  let field = document.getElementById("SubmDeta_AirCondConf10");
  let field2 = document.getElementById("SubmDeta_AirConServedBy10");
  let field3 = document.getElementById("SubmDeta_TotaInstCapa_Rt10");
  let field4 = document.getElementById("SubmDeta_TotaSystEffi_Kwrt10");
  let field5 = document.getElementById("SubmDeta_TotaInstCapa_Kw10");
  let field6 = document.getElementById("SubmDeta_TotaSystEffi_Cop10");
  if (element.checked) {
    field.removeAttribute("disabled");
    field2.setAttribute("mandatory", "");
    field2.removeAttribute("disabled");
    field3.removeAttribute("disabled");
    field4.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory");
    field3.setAttribute("disabled", "");
    field4.setAttribute("disabled", "");
    field.value = "";
    field2.value = "";
    field3.value = "";
    field4.value = "";
    field5.value = 0;
    field6.value = 0;
  }
}
function SubmChec_ASetOfThes10_change(element) {
  let field = document.getElementById("SubmChec_TheGmEFili10");
  let field2 = document.getElementById("SubmChec_TheTotaGreeMark10");
  let initialValue = field.getAttribute("template").replace(/#/g, " ");
  if (element.checked) {
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
    field2.setAttribute("mandatory", "");
    field2.removeAttribute("disabled");
  } else {
    field.value = initialValue;
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory");
  }
}
function DeclByMechEngi_TheWorksForMajo10_change(element) {
  let field = document.getElementById("DeclByMechEngi_TheWorksForMajo20");

  if (element.checked) {
    field.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field.value = "";
  }
}
function getIdInc(element) {
  let prefix, suffix;
  select = document.getElementById(element.id);
  value = element.value;
  if (select.getAttribute("prefix") !== null) {
    prefix = select.getAttribute("prefix");
  }
  if (select.getAttribute("suffix") !== null) {
    suffix = select.getAttribute("suffix");
  } else {
    suffix = "";
  }

  return (idInc = element.id.substring(
    prefix.length,
    element.id.length - suffix.length
  ));
}

function SubmDeta_Curr_Chil_change(element, totalPrefix) {
  let idInc = getIdInc(element);
  let textboxs = document
    .getElementById(element.id)
    .parentNode.parentNode.querySelectorAll("cn2-textbox");
  let totalId = totalPrefix + idInc + "0";
  let total = 0;
  for (var x = 0; x < textboxs.length; x++) {
    if (textboxs[x].getAttribute("prefix") !== totalPrefix) {
      if (textboxs[x].value.length === 0) {
        total = total + 0;
      } else {
        total = total + parseFloat(textboxs[x].value);
      }
    }
  }
  document.getElementById(totalId).value = total;
}
function chkPartOfAppl_Other_change(parent) {
  let total = document.getElementById("PartOfAppl_TotalGFA10");
  let total2 = document.getElementById("PaymentGFA1");
  let fees = 8900;
  let fees1 = document.getElementById("PaymentTotal1");
  let fees2 = document.getElementById("PaymMode_Paym10");
  let totalValue = 0;
  let textBoxs = chkPartOfAppl_Other_filterTextbox(parent);

  for (var x = 0; x < textBoxs.length; x++) {
    if (textBoxs[x].value.length !== 0) {
      totalValue = totalValue + parseFloat(textBoxs[x].value);
    }
  }

  total.value = totalValue;
  total2.value = totalValue;

  if (total.value <= 15000) {
    fees1.value = fees;
    fees2.value = fees;
  } else {
    fees = fees + 0.15 * (total.value - 15000);
    fees1.value = fees;
    fees2.value = fees;
  }
}

function disableTextboxes() {
  checkboxs = document
    .getElementById("psda-container4")
    .querySelectorAll("cn2-checkbox");
  for (var x = 0; x < checkboxs.length; x++) {
    if (!checkboxs[x].checked) {
      SubmDeta_Curr_24Hrs_change(checkboxs[x]);
    }
  }
}

function chkPartOfAppl_Other_filterTextbox(parent) {
  parentDiv = document.getElementById(parent);
  textBoxs = parentDiv.querySelectorAll("cn2-textbox");
  returnBoxs = [];
  for (var x = 0; x < textBoxs.length; x++) {
    if (textBoxs[x].getAttribute("prefix") === "chkPartOfAppl_Other") {
      returnBoxs.push(textBoxs[x]);
    }
  }
  return returnBoxs;
}
function SubmDeta_change(element, id) {
  value = parseFloat(element.value) * 3.517;
  document.getElementById(id).value = value.toFixed(2);
}
function SubmDeta_Cool(element) {
  if (element.checked) {
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .removeAttribute("disabled");
    document.getElementById("SubmDeta_ChilPlanConf10").value = "";
  } else {
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_ChilPlanConf10").value = "";
  }
}
function SubmDeta_ChillPlanSyst10_change(element) {
  //function
  tableAddDeleteEnabled(element);
  if (element.checked) {
    //radio button
    document.getElementById("SubmDeta_AirCool10").removeAttribute("disabled");
    document.getElementById("SubmDeta_WateCool10").removeAttribute("disabled");
    document.getElementById("SubmDeta_AirCool10").checked = false;
    document.getElementById("SubmDeta_WateCool10").checked = false;
    //textbox
    document
      .getElementById("SubmDeta_DaytAverCoolLoad10")
      .removeAttribute("disabled");
    document
      .getElementById("SubmDeta_DaytAverCoolLoad10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SubmDeta_AirConServedByChillerPlan10")
      .removeAttribute("disabled");
    document
      .getElementById("SubmDeta_AirConServedByChillerPlan10")
      .setAttribute("mandatory", "");
    //button
    document.getElementById("addButton").removeAttribute("disabled");
  } else {
    //radio button
    document.getElementById("SubmDeta_AirCool10").setAttribute("disabled", "");
    document.getElementById("SubmDeta_WateCool10").setAttribute("disabled", "");
    document.getElementById("SubmDeta_AirCool10").checked = false;
    document.getElementById("SubmDeta_WateCool10").checked = false;
    //textbox
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_ChilPlanConf10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_ChilPlanConf10").value = "";

    document
      .getElementById("SubmDeta_DaytAverCoolLoad10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_DaytAverCoolLoad10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_DaytAverCoolLoad10").value = "";
    document
      .getElementById("SubmDeta_AirConServedByChillerPlan10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_AirConServedByChillerPlan10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_AirConServedByChillerPlan10").value = "";
    document.getElementById("SubmDeta_NighAverCoolLoad20").value = 0;
    document.getElementById("SubmDeta_DaytAverCoolLoad20").value = 0;
    document.getElementById("SubmDeta_NighAverCoolLoad10").value = "";
    document
      .getElementById("SubmDeta_NighAverCoolLoad10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_NighAverCoolLoad10")
      .removeAttribute("mandatory");
    //button
    document.getElementById("addButton").setAttribute("disabled", "");
  }
}
function tableAddDeleteEnabled(element) {
  textboxs = document
    .getElementById("psda-container4")
    .querySelectorAll("cn2-textbox");
  checkboxs = document
    .getElementById("psda-container4")
    .querySelectorAll("cn2-checkbox");
  buttons = document
    .getElementById("psda-container4")
    .querySelectorAll("cn2-button");
  if (element.checked) {
    for (var x = 0; x < textboxs.length; x++) {
      if (
        !textboxs[x].getAttribute("prefix").includes("Night") &&
        textboxs[x].getAttribute("prefix") !== "SubmDeta_Curr_Dayt_TotaSyst"
      ) {
        textboxs[x].removeAttribute("disabled");
        textboxs[x].setAttribute("mandatory", "");
      }
    }
    for (var x = 0; x < checkboxs.length; x++) {
      checkboxs[x].removeAttribute("disabled");
    }
    for (var x = 0; x < buttons.length; x++) {
      buttons[x].removeAttribute("disabled");
    }
  } else {
    for (var x = 0; x < textboxs.length; x++) {
      if (!textboxs[x].getAttribute("prefix").includes("Tota")) {
        textboxs[x].removeAttribute("mandatory");
        textboxs[x].setAttribute("disabled", "");
        textboxs[x].value = "";
      } else {
        textboxs[x].value = 0;
      }
    }
    for (var x = 0; x < checkboxs.length; x++) {
      checkboxs[x].setAttribute("disabled", "");
      checkboxs[x].checked = false;
    }
    for (var x = 0; x < buttons.length; x++) {
      buttons[x].setAttribute("disabled", "");
    }
  }
}
function SubmDeta_CoolLoad10_change(element, set) {
  let airconValue = document.getElementById(
    "SubmDeta_AirConServedByChillerPlan10"
  ).value;
  if (airconValue.length === 0) {
    airconValue = 0;
  }
  let value =
    (parseFloat(document.getElementById(element.id).value) * 3.517 * 1000) /
    parseFloat(airconValue);

  if (!isFinite(value)) {
    document.getElementById(set).value = 0;
  } else {
    document.getElementById(set).value = value.toFixed(2);
  }
}
function SubmDeta_AirConServedByChillerPlan10_change(element) {
  let airconValue1 = document.getElementById("SubmDeta_DaytAverCoolLoad10")
    .value;
  let airconValue2 = document.getElementById("SubmDeta_NighAverCoolLoad10")
    .value;
  if (airconValue1.length === 0) {
    airconValue1 = 0;
  }
  if (airconValue2.length === 0) {
    airconValue2 = 0;
  }

  let value =
    (parseFloat(airconValue1) * 3.517 * 1000) /
    parseFloat(document.getElementById(element.id).value);
  let value1 =
    (parseFloat(airconValue2) * 3.517 * 1000) /
    parseFloat(document.getElementById(element.id).value);
  if (value === 0 || !isFinite(value)) {
    document.getElementById("SubmDeta_DaytAverCoolLoad20").value = 0;
  } else {
    document.getElementById(
      "SubmDeta_DaytAverCoolLoad20"
    ).value = value.toFixed(2);
  }
  if (value1 === 0 || !isFinite(value)) {
    document.getElementById("SubmDeta_NighAverCoolLoad20").value = 0;
  } else {
    document.getElementById(
      "SubmDeta_NighAverCoolLoad20"
    ).value = value1.toFixed(2);
  }
}

function DeclByMechEngi_TheWorksForMajo10_change(element) {
  let dateField = document.getElementById("DeclByMechEngi_TheWorksForMajo20");

  if (element.checked) {
    dateField.removeAttribute("disabled");
    dateField.setAttribute("mandatory", "");
  } else {
    dateField.setAttribute("disabled", "");
    dateField.removeAttribute("mandatory");
    dateField.value = "";
  }
}

// function SubmDeta_Curr_24Hrs_change(element) {
//   let idInc = getIdInc(element);
//   let textboxs = select.parentNode.parentNode.parentNode.querySelectorAll(
//     "cn2-textbox"
//   );

//   if (element.checked) {
//     document
//       .getElementById("SubmDeta_NighAverCoolLoad10")
//       .setAttribute("mandatory", "");
//     document
//       .getElementById("SubmDeta_NighAverCoolLoad10")
//       .removeAttribute("disabled");
//     for (var x = 0; x < textboxs.length; x++) {
//       if (
//         textboxs[x].getAttribute("prefix").includes("Night") &&
//         textboxs[x].getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
//       ) {
//         textboxs[x].removeAttribute("disabled");
//         textboxs[x].setAttribute("mandatory", "");
//       }
//     }
//     for (var x = 0; x < textboxs.length; x++) {
//       if (
//         textboxs[x].getAttribute("prefix").includes("24Hour") &&
//         textboxs[x].getAttribute("prefix") !== "SubmDeta_Curr_24Hour_TotaSyst10"
//       ) {
//         textboxs[x].removeAttribute("disabled");
//         textboxs[x].setAttribute("mandatory", "");
//       }
//     }
//   } else {
//     let parent = document
//       .getElementById("psda-container4")
//       .querySelectorAll("cn2-checkbox");
//     var tempCtr = 0;
//     for (var x = 0; x < parent.length; x++) {
//       if (parent[x].checked) {
//         tempCtr++;
//       }
//     }
//     if (tempCtr === 0) {
//       document
//         .getElementById("SubmDeta_NighAverCoolLoad10")
//         .setAttribute("disabled", "");
//       document
//         .getElementById("SubmDeta_NighAverCoolLoad10")
//         .removeAttribute("mandatory");
//       document.getElementById("SubmDeta_NighAverCoolLoad10").value = "";
//     }
//     for (var x = 0; x < textboxs.length; x++) {
//       if (
//         textboxs[x].getAttribute("prefix").includes("Night") &&
//         textboxs[x].getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
//       ) {
//         textboxs[x].removeAttribute("mandatory");
//         textboxs[x].setAttribute("disabled", "");
//         textboxs[x].value = "";
//       } else if (
//         textboxs[x].getAttribute("prefix") === "SubmDeta_Curr_Night_TotaSyst"
//       ) {
//         textboxs[x].value = 0;
//       }
//     }

//     for (var x = 0; x < textboxs.length; x++) {
//       if (
//         textboxs[x].getAttribute("prefix").includes("24Hour") &&
//         textboxs[x].getAttribute("prefix") !== "SubmDeta_Curr_24Hour_TotaSyst10"
//       ) {
//         textboxs[x].removeAttribute("mandatory");
//         textboxs[x].setAttribute("disabled", "");
//         textboxs[x].value = "";
//       } else if (
//         textboxs[x].getAttribute("prefix") === "SubmDeta_Curr_24Hour_TotaSyst10"
//       ) {
//         textboxs[x].value = 0;
//       }
//     }
//   }
// }

function checkBoxCheck(checkCheck) {
  if (!document.getElementById(checkCheck).checked) {
    console.log("Error! Checkbox is not checked!");
  }
}

function disableDelete(containerName, deleteid) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteid).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteid);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
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

function removeMandatoryField(parent) {
  parent = document.getElementById(parent);

  let tempDiv = [];

  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      tempDiv.push(div);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let textboxes = targetDiv.querySelectorAll("cn2-textbox");
  for (let textbox of textboxes) {
    if (
      textbox.getAttribute("prefix").includes("Night") &&
      textbox.getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
    ) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
    }
  }
}

function SubmDeta_Curr_24Hrs_change(element) {
  let checkbox = document.getElementById(element.id);
  let parent = checkbox.parentNode.parentNode.parentNode;
  if (element.checked) {
    for (let textbox of parent.querySelectorAll("cn2-textbox")) {
      if (
        textbox.getAttribute("prefix").includes("Night") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
      ) {
        textbox.removeAttribute("disabled");
        textbox.setAttribute("mandatory", "");
      }

      if (
        textbox.getAttribute("prefix").includes("24Hour") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Curr_24Hour_TotaSyst"
      ) {
        textbox.removeAttribute("disabled");
      }
    }
  } else {
    for (let textbox of parent.querySelectorAll("cn2-textbox")) {
      if (
        textbox.getAttribute("prefix").includes("Night") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
      ) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }

      if (
        textbox.getAttribute("prefix").includes("24Hour") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Curr_24Hour_TotaSyst"
      ) {
        textbox.setAttribute("disabled", "");
        textbox.value = "";
      }
    }
  }
}

function SubmDeta_24Hrs_change(element) {
  let checkbox = document.getElementById(element.id);
  let parent = checkbox.parentNode.parentNode.parentNode;
  if (element.checked) {
    for (let textbox of parent.querySelectorAll("cn2-textbox")) {
      if (
        textbox.getAttribute("prefix").includes("Night") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Night_TotaSyst"
      ) {
        textbox.removeAttribute("disabled");
        textbox.setAttribute("mandatory", "");
      }

      if (
        textbox.getAttribute("prefix").includes("24Hour") &&
        textbox.getAttribute("prefix") !== "SubmDeta_24Hour_TotaSyst"
      ) {
        textbox.removeAttribute("disabled");
      }
    }
  } else {
    for (let textbox of parent.querySelectorAll("cn2-textbox")) {
      if (
        textbox.getAttribute("prefix").includes("Night") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Night_TotaSyst"
      ) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }
      if (
        textbox.getAttribute("prefix").includes("24Hour") &&
        textbox.getAttribute("prefix") !== "SubmDeta_24Hour_TotaSyst"
      ) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }
    }
  }
}

function SubmDeta_Curr_TotaInstCapa_Rt10_change() {
  let target = document.getElementById("SubmDeta_Curr_TotaInstCapa_Kw10");
  let field = document.getElementById("SubmDeta_Curr_TotaInstCapa_Rt10");

  let final;
  if (field.value) {
    final = parseFloat(field.value) * 3.517;
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Curr_TotaInstCapa_Kw10_change() {
  let target = document.getElementById("SubmDeta_Curr_TotaInstCapa_Rt10");
  let field = document.getElementById("SubmDeta_Curr_TotaInstCapa_Kw10");
  let final;
  if (field.value) {
    final = parseFloat(field.value) / 3.517;
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Curr_TotaSystEffi_Kwrt10_change(element) {
  let el = document.getElementById(element.id);
  let target = document.getElementById("SubmDeta_Curr_TotaSystEffi_Cop10");
  let final;

  if (el.value) {
    final = 3.516 / parseFloat(el.value);
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Curr_TotaSystEffi_Cop10_change(element) {
  let el = document.getElementById(element.id);
  let target = document.getElementById("SubmDeta_Curr_TotaSystEffi_Kwrt10");
  let final;

  if (el.value) {
    final = 3.517 / parseFloat(el.value);
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function PaymMode_change() {
  let rad1 = document.getElementById("PaymMode_Cheq10");
  let rad2 = document.getElementById("PaymMode_ePay10");
  let rad3 = document.getElementById("PaymMode_PaidEarl10");

  let rad1Field = document.getElementById("PaymMode_Cheq20");
  let rad1MandField1 = document.getElementById("PaymMode_Cheq40");
  let rad1Date = document.getElementById("PaymMode_Cheq30");
  let rad1MandField2 = document.getElementById("PaymMode_Cheq50");
  let rad3MandField = document.getElementById("PaymMode_PaidEarl20");
  let rad3Aste = document.getElementById("PaymMode_PaidEarl20_aste");

  if (rad1.checked) {
    //enabled
    rad1Field.removeAttribute("disabled");
    rad1Field.setAttribute("mandatory", "");
    rad1MandField1.removeAttribute("disabled");
    rad1Date.removeAttribute("disabled");
    rad1Date.setAttribute("mandatory", "");
    rad1MandField2.removeAttribute("disabled");
    rad1MandField1.setAttribute("mandatory", "");
    rad1MandField2.setAttribute("mandatory", "");

    //disabled
    rad3MandField.removeAttribute("mandatory");
    rad3MandField.setAttribute("disabled", "");
    rad3MandField.value = "";
    rad3Aste.innerHTML = "";
  } else if (rad2.checked) {
    //disabled
    rad1Field.setAttribute("disabled", "");
    rad1Field.removeAttribute("mandatory");
    rad1MandField1.setAttribute("disabled", "");
    rad1Date.setAttribute("disabled", "");
    rad1Date.removeAttribute("mandatory");
    rad1MandField2.setAttribute("disabled", "");
    rad1MandField1.removeAttribute("mandatory");
    rad1MandField2.removeAttribute("mandatory");
    rad1Field.value = "";
    rad1MandField1.value = "";
    rad1MandField2.value = "";
    rad1Date.value = "";
    rad3MandField.removeAttribute("mandatory");
    rad3MandField.setAttribute("disabled", "");
    rad3MandField.value = "";
    rad3Aste.innerHTML = "";
  } else if (rad3.checked) {
    //enabled
    rad3MandField.setAttribute("mandatory", "");
    rad3MandField.removeAttribute("disabled");
    rad3Aste.innerHTML = "*";

    //disabled
    rad1Field.setAttribute("disabled", "");
    rad1Field.removeAttribute("mandatory");
    rad1MandField1.setAttribute("disabled", "");
    rad1Date.setAttribute("disabled", "");
    rad1Date.removeAttribute("mandatory");
    rad1MandField2.setAttribute("disabled", "");
    rad1MandField1.removeAttribute("mandatory");
    rad1MandField2.removeAttribute("mandatory");
    rad1Field.value = "";
    rad1MandField1.value = "";
    rad1MandField2.value = "";
    rad1Date.value = "";
  }
}

function calcChillerTable(el) {
  let parent = document.getElementById(el.id);
  let prefix = parent.getAttribute("prefix");
  let suffix = parent.getAttribute("suffix");
  let id = getIdInc(el) + suffix;
  switch (prefix) {
    case "SubmDeta_Curr_Dayt_Chil":
    case "SubmDeta_Curr_Dayt_ChilWatePump":
    case "SubmDeta_Curr_Dayt_CondWatePump":
    case "SubmDeta_Curr_Dayt_CoolTowe":
      let x1 =
        document.getElementById("SubmDeta_Curr_Dayt_Chil" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Dayt_Chil" + id).value
          )
          : 0;
      let x2 =
        document.getElementById("SubmDeta_Curr_Dayt_ChilWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Dayt_ChilWatePump" + id)
              .value
          )
          : 0;
      let x3 =
        document.getElementById("SubmDeta_Curr_Dayt_CondWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Dayt_CondWatePump" + id)
              .value
          )
          : 0;
      let x4 =
        document.getElementById("SubmDeta_Curr_Dayt_CoolTowe" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Dayt_CoolTowe" + id).value
          )
          : 0;
      document.getElementById("SubmDeta_Curr_Dayt_TotaSyst" + id).value =
        x1 + x2 + x3 + x4;
      break;
    case "SubmDeta_Curr_Night_Chil":
    case "SubmDeta_Curr_Night_ChilWatePump":
    case "SubmDeta_Curr_Night_CondWatePump":
    case "SubmDeta_Curr_Night_CoolTowe":
      let y1 =
        document.getElementById("SubmDeta_Curr_Night_Chil" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Night_Chil" + id).value
          )
          : 0;
      let y2 =
        document.getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
              .value
          )
          : 0;
      let y3 =
        document.getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
              .value
          )
          : 0;
      let y4 =
        document.getElementById("SubmDeta_Curr_Night_CoolTowe" + id).value !==
          ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_Night_CoolTowe" + id).value
          )
          : 0;
      document.getElementById("SubmDeta_Curr_Night_TotaSyst" + id).value =
        y1 + y2 + y3 + y4;
      break;
    case "SubmDeta_Curr_24Hour_Chil":
    case "SubmDeta_Curr_24Hour_ChilWatePump":
    case "SubmDeta_Curr_24Hour_CondWatePump":
    case "SubmDeta_Curr_24Hour_CoolTowe":
      let z1 =
        document.getElementById("SubmDeta_Curr_24Hour_Chil" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_24Hour_Chil" + id).value
          )
          : 0;
      let z2 =
        document.getElementById("SubmDeta_Curr_24Hour_ChilWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_24Hour_ChilWatePump" + id)
              .value
          )
          : 0;
      let z3 =
        document.getElementById("SubmDeta_Curr_24Hour_CondWatePump" + id)
          .value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_24Hour_CondWatePump" + id)
              .value
          )
          : 0;
      let z4 =
        document.getElementById("SubmDeta_Curr_24Hour_CoolTowe" + id).value !==
          ""
          ? parseFloat(
            document.getElementById("SubmDeta_Curr_24Hour_CoolTowe" + id)
              .value
          )
          : 0;
      document.getElementById("SubmDeta_Curr_24Hour_TotaSyst" + id).value =
        z1 + z2 + z3 + z4;
      break;
    case "SubmDeta_Curr_24Hrs":
      if (document.getElementById("SubmDeta_Curr_24Hrs" + id).checked) {
        document
          .getElementById("SubmDeta_Curr_Night_Chil" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Curr_Night_Chil" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Curr_Night_CoolTowe" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Curr_Night_CoolTowe" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_NighAverCoolLoad10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_NighAverCoolLoad10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("SubmDeta_Curr_Night_Chil" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Curr_Night_Chil" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Curr_Night_Chil" + id).value = "";
        document
          .getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Curr_Night_ChilWatePump" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Curr_Night_ChilWatePump" + id).value =
          "";
        document
          .getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Curr_Night_CondWatePump" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Curr_Night_CondWatePump" + id).value =
          "";
        document
          .getElementById("SubmDeta_Curr_Night_CoolTowe" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Curr_Night_CoolTowe" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Curr_Night_CoolTowe" + id).value = "";
        document.getElementById("SubmDeta_Curr_Night_TotaSyst" + id).value = "";

        let flag = false;
        let checkboxes = document.querySelectorAll(
          "cn2-checkbox[prefix = SubmDeta_Curr_24Hrs]"
        );
        for (let checkbox of checkboxes) {
          if (checkbox.checked) {
            flag = true;
          }
        }

        if (!flag) {
          document
            .getElementById("SubmDeta_NighAverCoolLoad10")
            .removeAttribute("mandatory");
          document
            .getElementById("SubmDeta_NighAverCoolLoad10")
            .setAttribute("disabled", "");
          document.getElementById("SubmDeta_NighAverCoolLoad10").value = "";
          document.getElementById("SubmDeta_NighAverCoolLoad20").value = "";
        }
      }
      break;
  }
}
function calcChillerTable2(el) {
  let parent = document.getElementById(el.id);
  let prefix = parent.getAttribute("prefix");
  let suffix = parent.getAttribute("suffix");
  let id = getIdInc(el) + suffix;
  switch (prefix) {
    case "SubmDeta_Dayt_Chil":
    case "SubmDeta_Dayt_ChilWatePump":
    case "SubmDeta_Dayt_CondWatePump":
    case "SubmDeta_Dayt_CoolTowe":
      let x1 =
        document.getElementById("SubmDeta_Dayt_Chil" + id).value !== ""
          ? parseFloat(document.getElementById("SubmDeta_Dayt_Chil" + id).value)
          : 0;
      let x2 =
        document.getElementById("SubmDeta_Dayt_ChilWatePump" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Dayt_ChilWatePump" + id).value
          )
          : 0;
      let x3 =
        document.getElementById("SubmDeta_Dayt_CondWatePump" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Dayt_CondWatePump" + id).value
          )
          : 0;
      let x4 =
        document.getElementById("SubmDeta_Dayt_CoolTowe" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Dayt_CoolTowe" + id).value
          )
          : 0;
      document.getElementById("SubmDeta_Dayt_TotaSyst" + id).value =
        x1 + x2 + x3 + x4;
      break;
    case "SubmDeta_Night_Chil":
    case "SubmDeta_Night_ChilWatePump":
    case "SubmDeta_Night_CondWatePump":
    case "SubmDeta_Night_CoolTowe":
      let y1 =
        document.getElementById("SubmDeta_Night_Chil" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Night_Chil" + id).value
          )
          : 0;
      let y2 =
        document.getElementById("SubmDeta_Night_ChilWatePump" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Night_ChilWatePump" + id).value
          )
          : 0;
      let y3 =
        document.getElementById("SubmDeta_Night_CondWatePump" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Night_CondWatePump" + id).value
          )
          : 0;
      let y4 =
        document.getElementById("SubmDeta_Night_CoolTowe" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_Night_CoolTowe" + id).value
          )
          : 0;
      document.getElementById("SubmDeta_Night_TotaSyst" + id).value =
        y1 + y2 + y3 + y4;
      break;
    case "SubmDeta_24Hour_Chil":
    case "SubmDeta_24Hour_ChilWatePump":
    case "SubmDeta_24Hour_CondWatePump":
    case "SubmDeta_24Hour_CoolTowe":
      let z1 =
        document.getElementById("SubmDeta_24Hour_Chil" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_24Hour_Chil" + id).value
          )
          : 0;
      let z2 =
        document.getElementById("SubmDeta_24Hour_ChilWatePump" + id).value !==
          ""
          ? parseFloat(
            document.getElementById("SubmDeta_24Hour_ChilWatePump" + id).value
          )
          : 0;
      let z3 =
        document.getElementById("SubmDeta_24Hour_CondWatePump" + id).value !==
          ""
          ? parseFloat(
            document.getElementById("SubmDeta_24Hour_CondWatePump" + id).value
          )
          : 0;
      let z4 =
        document.getElementById("SubmDeta_24Hour_CoolTowe" + id).value !== ""
          ? parseFloat(
            document.getElementById("SubmDeta_24Hour_CoolTowe" + id).value
          )
          : 0;
      document.getElementById("SubmDeta_24Hour_TotaSyst" + id).value =
        z1 + z2 + z3 + z4;
      break;
    case "SubmDeta_24Hrs10":
      if (document.getElementById("SubmDeta_24Hrs10" + id).checked) {
        document
          .getElementById("SubmDeta_Night_Chil" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Night_Chil" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Night_ChilWatePump" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Night_ChilWatePump" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Night_CondWatePump" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Night_CondWatePump" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Night_CoolTowe" + id)
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Night_CoolTowe" + id)
          .removeAttribute("disabled");
        document
          .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("SubmDeta_Night_Chil" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Night_Chil" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Night_Chil" + id).value = "";
        document
          .getElementById("SubmDeta_Night_ChilWatePump" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Night_ChilWatePump" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Night_ChilWatePump" + id).value = "";
        document
          .getElementById("SubmDeta_Night_CondWatePump" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Night_CondWatePump" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Night_CondWatePump" + id).value = "";
        document
          .getElementById("SubmDeta_Night_CoolTowe" + id)
          .removeAttribute("mandatory");
        document
          .getElementById("SubmDeta_Night_CoolTowe" + id)
          .setAttribute("disabled", "");
        document.getElementById("SubmDeta_Night_CoolTowe" + id).value = "";
        document.getElementById("SubmDeta_Night_TotaSyst" + id).value = "";

        let flag = false;
        let checkboxes = document.querySelectorAll(
          "cn2-checkbox[prefix = SubmDeta_24Hrs]"
        );
        for (let checkbox of checkboxes) {
          if (checkbox.checked) {
            flag = true;
          }
        }

        if (!flag) {
          document
            .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
            .removeAttribute("mandatory");
          document
            .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
            .setAttribute("disabled", "");
          document.getElementById("SubmDeta_Prop_NighAverCoolLoad10").value =
            "";
          document.getElementById("SubmDeta_Prop_NighAverCoolLoad20").value =
            "";
        }
      }
      break;
  }
}
function remoMand(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function SubmDeta_Curr_UnitSystSplitSyst10_change(el) {
  let field = [
    document.getElementById("SubmDeta_Curr_AirConAreaUni10"),
    document.getElementById("SubmDeta_Curr_TotaInstCapa_Rt10"),
    document.getElementById("SubmDeta_Curr_TotaInstCapa_Kw10"),
    document.getElementById("SubmDeta_Curr_TotaSystEffi_Kwrt10"),
    document.getElementById("SubmDeta_Curr_TotaSystEffi_Cop10"),
  ];
  let mandField = document.getElementById("SubmDeta_AirConServedBy10");
  let aste = document.getElementById("SubmDeta_AirConServedBy10_aste");

  if (el.checked) {
    for (let target of field) {
      target.removeAttribute("disabled");
    }
    mandField.setAttribute("mandatory", "");
    mandField.removeAttribute("disabled");
    aste.innerHTML = "*";
  } else {
    for (let target of field) {
      target.setAttribute("disabled", "");
      target.value = "";
    }
    mandField.removeAttribute("mandatory");
    mandField.setAttribute("disabled", "");
    mandField.value = "";
    aste.innerHTML = "";
  }
}

function SubmDeta_Curr_ChillPlanSyst10_change(element) {
  let aste = document.querySelectorAll(`[cps]`);
  let rad1 = document.getElementById("SubmDeta_Curr_AirCool10");
  let rad2 = document.getElementById("SubmDeta_Curr_WateCool10");
  let cpc = document.getElementById("SubmDeta_Curr_ChilPlanConf10");
  let hour24 = document.querySelectorAll("[prefix='SubmDeta_Curr_24Hrs']");
  let pass = false;
  let hour24Target = document.getElementById(
    "SubmDeta_Curr_NighAverCoolLoad10"
  );
  let cpcSign = document.getElementById("cpcManda");
  let mandFields = [
    document.getElementById("SubmDeta_Curr_AirConAreaChill10"),
    document.getElementById("SubmDeta_Curr_DaytAverCoolLoad10"),
  ];
  let disabledFields = [
    document.getElementById("SubmDeta_Curr_NighAverCoolLoad10"),
    document.getElementById("SubmDeta_Curr_NighAverCoolLoad20"),
    document.getElementById("SubmDeta_Curr_DaytAverCoolLoad20"),
  ];
  for (let i = 0; i < hour24.length; i++) {
    if (hour24[i].checked) {
      pass = true;
    }
  }
  if (element.checked) {
    toggleCPS24(true);
    // cpc.removeAttribute("disabled")
    rad1.removeAttribute("disabled");
    rad2.removeAttribute("disabled");
    if (pass == true) {
      hour24Target.removeAttribute("disabled");
      hour24Target.setAttribute("mandatory", "");
    }
    for (let target of aste) {
      target.innerHTML = "*";
    }
    for (target of mandFields) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
    }
  } else {
    toggleCPS24(false);
    cpc.setAttribute("disabled", "");
    cpc.removeAttribute("mandatory", "");
    cpc.value = "";
    cpcSign.textContent = "";
    rad1.setAttribute("disabled", "");
    rad2.setAttribute("disabled", "");
    for (let target of aste) {
      target.innerHTML = "";
    }
    for (target of mandFields) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of disabledFields) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
    rad1.checked = false;
    rad2.checked = false;

    document.getElementById("SubmDeta_Curr_DaytAverCoolLoad20").value = 0;
    document.getElementById("SubmDeta_Curr_NighAverCoolLoad20").value = 0;
  }
}

function SubmDeta_Curr_DaytAverCoolLoad10_change(element) {
  let el = document.getElementById("SubmDeta_Curr_DaytAverCoolLoad10");
  let airconArea = document.getElementById("SubmDeta_Curr_AirConAreaChill10");
  let target = document.getElementById("SubmDeta_Curr_DaytAverCoolLoad20");
  let final;

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
  } else {
    target.value = 0;
  }
}
function SubmDeta_Curr_AirConAreaChill10_change(element) {
  let el = document.getElementById("SubmDeta_Curr_DaytAverCoolLoad10");
  let airconArea = document.getElementById("SubmDeta_Curr_AirConAreaChill10");
  let target = document.getElementById("SubmDeta_Curr_DaytAverCoolLoad20");
  let el2 = document.getElementById("SubmDeta_Curr_NighAverCoolLoad10");
  let target2 = document.getElementById("SubmDeta_Curr_NighAverCoolLoad20");
  let final, final2;

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
  } else {
    target.value = 0;
  }

  if (el2.value && airconArea.value) {
    final2 =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target2.value = final2.toFixed(2);
  } else {
    target2.value = 0;
  }
}

function SubmDeta_Curr_NighAverCoolLoad10_change(element) {
  let airconArea = document.getElementById("SubmDeta_Curr_AirConAreaChill10");
  let el = document.getElementById(element.id);
  let target = document.getElementById("SubmDeta_Curr_NighAverCoolLoad20");

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
  } else {
    target.value = 0;
  }
}

function SubmDeta_Prop_TotaInstCapa_Rt10_change(element) {
  let target = document.getElementById("SubmDeta_Prop_TotaInstCapa_Kw10");
  let field = document.getElementById(element.id);

  let final;
  if (field.value) {
    final = parseFloat(field.value) * 3.517;
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Prop_TotaInstCapa_Kw10_change(element) {
  let target = document.getElementById("SubmDeta_Prop_TotaInstCapa_Rt10");
  let field = document.getElementById(element.id);

  let final;
  if (field.value) {
    final = parseFloat(field.value) / 3.517;
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Prop_TotaSystEffi_Kwrt10_change(element) {
  let el = document.getElementById(element.id);
  let target = document.getElementById("SubmDeta_Prop_TotaSystEffi_Cop10");
  let final;

  if (el.value) {
    final = 3.516 / parseFloat(el.value);
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Prop_TotaSystEffi_Cop10_change(element) {
  let el = document.getElementById(element.id);
  let target = document.getElementById("SubmDeta_Prop_TotaSystEffi_Kwrt10");
  let final;

  if (el.value) {
    final = 3.516 / parseFloat(el.value);
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

function SubmDeta_Prop_UnitSystSplitSyst10_change(element) {
  let field = [
    document.getElementById("SubmDeta_Prop_AirCondConf10"),
    document.getElementById("SubmDeta_Prop_TotaInstCapa_Rt10"),
    document.getElementById("SubmDeta_Prop_TotaInstCapa_Kw10"),
    document.getElementById("SubmDeta_Prop_TotaSystEffi_Kwrt10"),
    document.getElementById("SubmDeta_Prop_TotaSystEffi_Cop10"),
  ];
  let mandField = document.getElementById("SubmDeta_Prop_AirConAreaUni10");

  if (element.checked) {
    mandField.setAttribute("mandatory", "");
    mandField.removeAttribute("disabled");
    for (let target of field) {
      target.removeAttribute("disabled");
    }
  } else {
    mandField.removeAttribute("mandatory");
    mandField.setAttribute("disabled", "");
    mandField.value = "";
    for (let target of field) {
      target.setAttribute("disabled", "");
      target.value = "";
    }
  }
}

function SubmDeta_Prop_DaytAverCoolLoad10_change(element) {
  let el = document.getElementById("SubmDeta_Prop_DaytAverCoolLoad10");
  let airconArea = document.getElementById("SubmDeta_Prop_AirConAreaChill10");
  let target = document.getElementById("SubmDeta_Prop_DaytAverCoolLoad20");
  let final;

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
  } else {
    target.value = 0;
  }
}
function SubmDeta_Prop_NighAverCoolLoad10_change(element) {
  let el = document.getElementById("SubmDeta_Prop_NighAverCoolLoad10");
  let airconArea = document.getElementById("SubmDeta_Prop_AirConAreaChill10");
  let target = document.getElementById("SubmDeta_Prop_NighAverCoolLoad20");
  let final;

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
    console.log(final);
  } else {
    target.value = 0;
  }
}

function SubmDeta_Prop_NighAverCoolLoad10_change(element) {
  let airconArea = document.getElementById("SubmDeta_Prop_AirConAreaChill10");
  let el = document.getElementById("SubmDeta_Prop_DaytAverCoolLoad10");
  let target = document.getElementById("SubmDeta_Prop_DaytAverCoolLoad20");
  let el2 = document.getElementById("SubmDeta_Prop_NighAverCoolLoad10");
  let target2 = document.getElementById("SubmDeta_Prop_NighAverCoolLoad20");
  let final, final2;

  if (el.value && airconArea.value) {
    final =
      (parseFloat(el.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target.value = final.toFixed(2);
  } else {
    target.value = 0;
  }

  if (el2.value && airconArea.value) {
    final2 =
      (parseFloat(el2.value) * 3.517 * 1000) / parseFloat(airconArea.value);
    target2.value = final2.toFixed(2);
  } else {
    target2.value = 0;
  }
}

function SubmDeta_Prop_ChillPlanSyst10_change(element) {
  let rad1 = document.getElementById("SubmDeta_Prop_AirCool10");
  let rad2 = document.getElementById("SubmDeta_Prop_WateCool10");
  let fieldSign = document.getElementById("cpc2Manda");
  let daytime2sign = document.getElementById("daytime2sign");
  let mandField = [
    document.getElementById("SubmDeta_Prop_AirConAreaChill10"),
    document.getElementById("SubmDeta_Prop_DaytAverCoolLoad10"),
  ];
  let disabledField = [
    document.getElementById("SubmDeta_Prop_DaytAverCoolLoad20"),
    document.getElementById("SubmDeta_Prop_NighAverCoolLoad20"),
    document.getElementById("SubmDeta_Prop_NighAverCoolLoad10"),
  ];

  if (element.checked) {
    daytime2sign.textContent = "*";
    toggle2ndCPS24(true);
    // document.getElementById('SubmDeta_Prop_ChilPlanConf10').removeAttribute("disabled");
    rad1.removeAttribute("disabled");
    rad2.removeAttribute("disabled");
    for (let target of mandField) {
      target.setAttribute("mandatory", "");
      target.removeAttribute("disabled");
    }
  } else {
    toggle2ndCPS24(false);
    fieldSign.textContent = "";
    daytime2sign.textContent = "";
    document
      .getElementById("SubmDeta_Prop_ChilPlanConf10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_Prop_ChilPlanConf10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_Prop_ChilPlanConf10").value = "";
    document
      .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmDeta_Prop_NighAverCoolLoad10")
      .removeAttribute("mandatory");
    document.getElementById("SubmDeta_Prop_NighAverCoolLoad10").value = "";
    rad1.setAttribute("disabled", "");
    rad1.checked = false;
    rad2.setAttribute("disabled", "");
    rad2.checked = false;
    for (let target of mandField) {
      target.removeAttribute("mandatory");
      target.setAttribute("disabled", "");
      target.value = "";
    }
    for (let target of disabledField) {
      target.value = "";
    }
    document.getElementById("SubmDeta_Prop_DaytAverCoolLoad20").value = 0;
    document.getElementById("SubmDeta_Prop_NighAverCoolLoad20").value = 0;
  }
}

function enableCurrNight() {
  let checkbox = document.querySelectorAll(`[prefix="SubmDeta_Curr_24Hrs"]`);
  let chillerCheckbox = document.getElementById(
    "SubmDeta_Curr_ChillPlanSyst10"
  );
  let nightTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_Night_TotaSyst']"
  );
  let hour24Total = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_24Hour_TotaSyst']"
  );
  let night = document.getElementById("SubmDeta_Curr_NighAverCoolLoad10");
  let test = false;
  let i;
  for (let i = 0; i < checkbox.length; i++) {
    if (!checkbox[i].checked) {
      nightTotal[i].value = 0;
      hour24Total[i].value = 0;
    }
  }

  for (let target of checkbox) {
    if (target.checked && chillerCheckbox.checked) {
      test = true;
    }
  }

  if (test == true) {
    night.removeAttribute("disabled");
    night.setAttribute("mandatory", "");
  } else {
    night.setAttribute("disabled", "");
    night.removeAttribute("mandatory");
    night.value = "";
  }
}

function enableCurrNight2() {
  let checkbox = document.querySelectorAll(`[prefix="SubmDeta_24Hrs"]`);
  let chillerCheckbox = document.getElementById(
    "SubmDeta_Prop_ChillPlanSyst10"
  );
  let nightTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Night_TotaSyst']"
  );
  let hour24Total = document.querySelectorAll(
    "[prefix='SubmDeta_24Hour_TotaSyst']"
  );
  let night = document.getElementById("SubmDeta_Prop_NighAverCoolLoad10");
  let test = false;
  let i;
  for (let i = 0; i < checkbox.length; i++) {
    if (!checkbox[i].checked) {
      nightTotal[i].value = 0;
      hour24Total[i].value = 0;
    }
  }

  for (let target of checkbox) {
    if (target.checked && chillerCheckbox.checked) {
      test = true;
    }
  }

  if (test == true) {
    night.removeAttribute("disabled");
    night.setAttribute("mandatory", "");
  } else {
    night.setAttribute("disabled", "");
    night.removeAttribute("mandatory");
    night.value = "";
  }
}

//Application Type
function ApplicationType() {
  let type1 = document.getElementById("ApplType_DesiScorForBldg10");
  let type2 = document.getElementById("ApplType_CompOfMajoEner10");

  toggleCPS24(false);
  toggle2ndCPS24(false);
  document.getElementById("SubmDeta_Prop_ChillPlanSyst10").checked = false;
  if (type1.checked) {
    document.querySelector("cn2-master-head").title =
      "APPLICATION FOR APPROVAL OF DESIGN SCORE FOR BUILDING UNDERGOING<br>MAJOR ENERGY-USE CHANGE<br>[Section 22FB of the Building Control Act (Cap.29)]";
  } else if (type2.checked) {
    document.querySelector("cn2-master-head").title =
      "APPLICATION FOR APPROVAL OF COMPLETION OF MAJOR ENERGY-USE<br>CHANGE AND SUBMISSION OF AS-BUILT SCORE<br>[Section 22FE of the Building Control Act (Cap.29)]";
  }
  page4(type1, type2);
  page5(type1, type2);
  page6(type1, type2);
}

//page4
function page4(type1, type2) {
  resetParticulars();
  //type1
  let display1 = document.getElementById("decAppType1");
  let check1Mand = document.querySelectorAll(`[group="type1DecMandCheckbox"]`);

  //type2
  let display2 = document.getElementById("decAppType2");
  let check2Mand = document.querySelectorAll(`[group="type2DecMandCheckbox"]`);
  let check2 = document.getElementById("DeclByMechEngi_IHaveDeclaredThat10");
  let date2 = document.getElementById("DeclByMechEngi_TheWorksForMajo20");
  document.querySelector(".type1num1").checked = false;
  document.querySelector(".type2num1").checked = false;
  if (type1.checked) {
    document
      .querySelector(".type1num1")
      .setAttribute("id", "DeclByMachEngi_IConfThat10");
    document.querySelector(".type2num1").removeAttribute("id");
    //enabled
    display1.removeAttribute("hidden");
    for (let target of check1Mand) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }

    //disabeld
    display2.setAttribute("hidden", "");
    date2.removeAttribute("mandatory");
    date2.setAttribute("disabled", "");
    date2.value = "";
    check2.checked = false;
    check2.setAttribute("disabled", "");
    for (let target of check2Mand) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.checked = false;
    }
  } else if (type2.checked) {
    document
      .querySelector(".type2num1")
      .setAttribute("id", "DeclByMachEngi_IConfThat10");
    document.querySelector(".type1num1").removeAttribute("id");

    //enabled
    check2.removeAttribute("disabled");
    display2.removeAttribute("hidden");
    for (let target of check2Mand) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }

    //disabled
    display1.setAttribute("hidden", "");
    for (let target of check1Mand) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.checked = false;
    }
  }
}

function page5(type1, type2) {
  //reset changes
  let check = document.querySelectorAll(`[group="page5Check"]`);
  let disableText = document.querySelectorAll(`[group="page5DisableText"]`);
  let aste = document.querySelectorAll(`[group="page5Aste"]`);
  let disableRadio = document.querySelectorAll(`[group="page5DisableRadio"]`);
  let mandCheck = document.querySelectorAll(`[group="page5MandCheck"]`);

  //type1
  let DisplayA1 = document.getElementById("subAppType1");
  let DisplayB1 = document.getElementById("bAppType1");
  let DisplayC1 = document.getElementById("section4AppType1");
  let DisplayD1 = document.getElementById("section5AppType1");
  let textMand1 = document.querySelectorAll(`[group="page5MandText1"]`);
  let text1 = document.querySelectorAll(`[group="page5Text1"]`);
  let radio1 = document.querySelectorAll(`[group="page5Radio1"]`);
  let dateMand1 = document.querySelectorAll(`[group="page5MandDate1"]`);
  let check1 = document.querySelectorAll(`[group="page5Check1"]`);
  let checkMand1 = document.querySelectorAll(`[group="page5MandCheck1"]`);

  //type2
  let DisplayA2 = document.getElementById("subAppType2");
  let DisplayC2 = document.getElementById("section4AppType2");
  let DisplayD2 = document.getElementById("section5AppType2");
  let check2 = document.querySelectorAll(`[group="page5Check2"]`);
  let checkMand2 = document.querySelectorAll(`[group="page5MandCheck2"]`);
  let textMand2 = document.querySelectorAll(`[group="page5MandText2"]`);
  let text2 = document.querySelectorAll(`[group="page5Text2"]`);
  let heatField = document.getElementById("SubmDeta_HeatBalaWithErro10");
  let heatFieldTable = document.getElementById("heatFieldTable");
  document.getElementById("SubmDeta_Curr_DaytAverCoolLoad20").value = 0;
  document.getElementById("SubmDeta_Curr_NighAverCoolLoad20").value = 0;
  document.getElementById("SubmDeta_Prop_DaytAverCoolLoad20").value = 0;
  document.getElementById("SubmDeta_Prop_NighAverCoolLoad20").value = 0;

  if (type1.checked) {
    heatField.removeAttribute("mandatory");
    heatFieldTable.setAttribute("hidden", "");
    //enabled
    DisplayA1.removeAttribute("hidden");
    DisplayB1.removeAttribute("hidden");
    DisplayC1.removeAttribute("hidden");
    DisplayD1.removeAttribute("hidden");
    for (let target of textMand1) {
      target.setAttribute("mandatory", "");
    }
    for (let target of checkMand1) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }

    //disabled
    DisplayA2.setAttribute("hidden", "");
    DisplayC2.setAttribute("hidden", "");
    DisplayD2.setAttribute("hidden", "");
    for (let target of check) {
      target.checked = false;
    }
    for (let target of disableRadio) {
      target.setAttribute("disabled", "");
      target.checked = false;
    }
    for (let target of disableText) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of mandCheck) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
      target.checked = false;
    }
    for (let target of aste) {
      target.innerHTML = "";
    }
    for (let target of textMand2) {
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of checkMand2) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.checked = false;
    }
  } else if (type2.checked) {
    heatFieldTable.removeAttribute("hidden");
    heatField.setAttribute("mandatory", "");
    heatField.value = "";
    //enabled
    DisplayA2.removeAttribute("hidden");
    DisplayC2.removeAttribute("hidden");
    DisplayD2.removeAttribute("hidden");
    for (let target of textMand2) {
      target.setAttribute("mandatory", "");
    }
    for (let target of checkMand2) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }

    //disabled
    DisplayA1.setAttribute("hidden", "");
    DisplayB1.setAttribute("hidden", "");
    DisplayC1.setAttribute("hidden", "");
    DisplayD1.setAttribute("hidden", "");
    for (let target of check) {
      target.checked = false;
    }
    for (let target of disableRadio) {
      target.setAttribute("disabled", "");
      target.checked = false;
    }
    for (let target of disableText) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of mandCheck) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
      target.checked = false;
    }
    for (let target of aste) {
      target.innerHTML = "";
    }
    for (let target of textMand1) {
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of text1) {
      target.value = "";
    }
    for (let target of radio1) {
      target.checked = false;
    }
    for (let target of checkMand1) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.checked = false;
    }
  }
}

function page6(type1, type2) {
  let Display1 = document.getElementById("page6Display1");
  let Display2 = document.getElementById("page6Display2");
  let navBar6 = document.querySelector(`[target="page6"]`);
  let text = document.querySelectorAll(`[group="page6text"]`);
  let disableText = document.querySelectorAll(`[group="page6DisableText"]`);
  let dateField = document.querySelectorAll(`[group="page6Date"]`);
  let mandText = document.querySelectorAll(`[group="page6MandText"]`);
  let dropdown = document.getElementById("PaymMode_PaidEarl20");

  if (type1.checked) {
    //enabled
    Display1.removeAttribute("hidden");
    Display2.removeAttribute("hidden");
    navBar6.removeAttribute("hidden");
  } else if (type2.checked) {
    //disabled
    Display1.setAttribute("hidden", "");
    Display2.setAttribute("hidden", "");
    navBar6.setAttribute("hidden", "");
    for (let target of disableText) {
      target.value = "";
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
    }
    for (let target of text) {
      target.value = "";
    }
  }
}

function disableOthers() {
  let childCount = document.getElementById("psda-container2").childElementCount;
  let othersField = document.querySelectorAll("[prefix='PartOfAppl_GfaOthe']");
  if (childCount > 1) {
    othersField[othersField.length - 1].setAttribute("disabled", "");
    othersField[othersField.length - 1].removeAttribute("mandatory");
  }
}

function removeUENerror(parent, prefix) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let UENfields = document.querySelectorAll(`[prefix="${prefix}"]`);
  if (childCount > 1) {
    UENfields[UENfields.length - 1].removeAttribute("data-invalid");
    UENfields[UENfields.length - 1].removeAttribute("data-invalid-message");
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

function enableCPC(element) {
  let radios = document.querySelectorAll(`[name=${element.name}]`);
  let cpc = document.getElementById("SubmDeta_Curr_ChilPlanConf10");
  let cpcSign = document.getElementById("cpcManda");
  let pass = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      pass = true;
    }
  }

  if (pass == true) {
    cpc.setAttribute("mandatory", "");
    cpc.removeAttribute("disabled");
    cpcSign.textContent = "*";
  }
}

function makeDefaultZero() {
  let childCount = document.getElementById("chillerForm").childElementCount;
  let fields = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_Dayt_TotaSyst']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Night_TotaSyst']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_TotaSyst']"),
  ];
  if (childCount > 1) {
    for (field of fields) {
      field[field.length - 1].value = 0;
    }
  }
}

function makeDefaultZero2() {
  let childCount = document.getElementById("chiller2Form").childElementCount;
  let fields = [
    document.querySelectorAll("[prefix='SubmDeta_Dayt_TotaSyst']"),
    document.querySelectorAll("[prefix='SubmDeta_Night_TotaSyst']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_TotaSyst']"),
  ];
  if (childCount > 1) {
    for (field of fields) {
      field[field.length - 1].value = 0;
    }
  }
}

function toggleCPS24(condition) {
  let addBtn = document.getElementById("chillerFormAdd");
  let deleteBtns = document.querySelectorAll("[prefix='chillerform_delete']");
  let checkboxes = document.querySelectorAll("[prefix='SubmDeta_Curr_24Hrs']");
  let childCount = document.getElementById("chillerForm").childElementCount;
  let formField = document.querySelectorAll(".chill1");
  let daytimeFields = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_Dayt_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Dayt_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Dayt_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Dayt_CoolTowe']"),
  ];
  let dayTimeTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_Dayt_TotaSyst']"
  );
  let nighttimeFields = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_Night_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Night_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Night_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_Night_CoolTowe']"),
  ];
  let nighttimeTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_Night_TotaSyst']"
  );
  let hours24Fields = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CoolTowe']"),
  ];
  let hours24Total = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_24Hour_TotaSyst']"
  );

  if (condition == true) {
    addBtn.removeAttribute("disabled");
    for (let a = 0; a < checkboxes.length; a++) {
      checkboxes[a].removeAttribute("disabled");
    }
    for (fields of daytimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("disabled");
        fields[a].setAttribute("mandatory", "");
      }
    }
  } else {
    addBtn.setAttribute("disabled", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let a = 0; a < checkboxes.length; a++) {
      checkboxes[a].setAttribute("disabled", "");
      checkboxes[a].checked = false;
    }
    for (fields of daytimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("mandatory");
        fields[a].setAttribute("disabled", "");
        fields[a].value = "";
      }
    }
    for (fields of nighttimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("mandatory");
        fields[a].setAttribute("disabled", "");
        fields[a].value = "";
      }
    }
    for (fields of hours24Fields) {
      for (let b = 0; b < fields.length; b++) {
        fields[b].setAttribute("disabled", "");
        fields[b].value = "";
      }
    }
    for (let c = 0; c < dayTimeTotal.length; c++) {
      dayTimeTotal[c].value = 0;
      nighttimeTotal[c].value = 0;
      hours24Total[c].value = 0;
      deleteBtns[c].setAttribute("disabled", "");
    }
  }
}

function toggle2ndCPS24(condition) {
  let addBtn = document.getElementById("chillerFormAdd2");
  let deleteBtns = document.querySelectorAll("[prefix='chiller2form_delete']");
  let checkboxes = document.querySelectorAll("[prefix='SubmDeta_24Hrs']");
  let childCount = document.getElementById("chiller2Form").childElementCount;
  let formField = document.querySelectorAll(".chillf2");
  let daytimeFields = [
    document.querySelectorAll("[prefix='SubmDeta_Dayt_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Dayt_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Dayt_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Dayt_CoolTowe']"),
  ];
  let dayTimeTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Dayt_TotaSyst']"
  );
  let nighttimeFields = [
    document.querySelectorAll("[prefix='SubmDeta_Night_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Night_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Night_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Night_CoolTowe']"),
  ];
  let nighttimeTotal = document.querySelectorAll(
    "[prefix='SubmDeta_Night_TotaSyst']"
  );
  let hours24Fields = [
    document.querySelectorAll("[prefix='SubmDeta_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_CoolTowe']"),
  ];
  let hours24Total = document.querySelectorAll(
    "[prefix='SubmDeta_24Hour_TotaSyst']"
  );

  if (condition == true) {
    addBtn.removeAttribute("disabled");
    for (let a = 0; a < checkboxes.length; a++) {
      checkboxes[a].removeAttribute("disabled");
    }
    for (fields of daytimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("disabled");
        fields[a].setAttribute("mandatory", "");
      }
    }
  } else {
    addBtn.setAttribute("disabled", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let a = 0; a < checkboxes.length; a++) {
      checkboxes[a].setAttribute("disabled", "");
      checkboxes[a].checked = false;
    }
    for (fields of daytimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("mandatory");
        fields[a].setAttribute("disabled", "");
        fields[a].value = "";
      }
    }
    for (fields of nighttimeFields) {
      for (let a = 0; a < fields.length; a++) {
        fields[a].removeAttribute("mandatory");
        fields[a].setAttribute("disabled", "");
        fields[a].value = "";
      }
    }
    for (fields of hours24Fields) {
      for (let b = 0; b < fields.length; b++) {
        fields[b].setAttribute("disabled", "");
        fields[b].value = "";
      }
    }
    for (let c = 0; c < dayTimeTotal.length; c++) {
      dayTimeTotal[c].value = 0;
      nighttimeTotal[c].value = 0;
      hours24Total[c].value = 0;
      deleteBtns[c].setAttribute("disabled", "");
    }
  }
}

function SubmDeta_Prop_change(element) {
  let radios = document.querySelectorAll(`[name='${element.name}']`);
  let fieldSign = document.getElementById("cpc2Manda");
  let field = document.getElementById("SubmDeta_Prop_ChilPlanConf10");
  let pass = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
    fieldSign.textContent = "*";
  }
}

function disablehour24fields2() {
  let childCount = document.getElementById("chillerForm").childElementCount;
  let hours24Fields = [
    document.querySelectorAll("[prefix='SubmDeta_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_24Hour_CoolTowe']"),
  ];
  if (childCount > 1) {
    for (field of hours24Fields) {
      field[field.length - 1].setAttribute("disabled", "");
    }
  }
}

function disablehour24fields() {
  let childCount = document.getElementById("chillerForm").childElementCount;
  let hours24Fields = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CoolTowe']"),
  ];
  if (childCount > 1) {
    for (field of hours24Fields) {
      field[field.length - 1].setAttribute("disabled", "");
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

function resetParticulars() {
  let fields = [
    document.getElementById("Member_Member_Name_PEME10"),
    document.getElementById("MemberRole_Professional_No_PEME10"),
    document.getElementById("Member_Firm_Name_PEME10"),
    document.getElementById("Members_UEN_PEME10"),
    document.getElementById("Member_Address_PEME10"),
    document.getElementById("Member_Tel_No_PEME10"),
    document.getElementById("Member_Mobile_No_PEME10"),
    document.getElementById("Member_Email_Address1_PEME10"),
  ];

  let uen = document.getElementById("Members_UEN_PEME10");
  for (f of fields) {
    f.value = "";
  }

  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid-message");
}

function togglePartQp(el) {
  document.getElementById(el).removeAttribute("data-invalid");
  document.getElementById(el).removeAttribute("data-invalid-message");
  if (el === "Members_UEN_PEME10") {
    document.getElementById(el).removeAttribute("mandatory");
    document.getElementById(el).setAttribute("mandatory", "");
  }
}

// override common functions
function saveFormDataToJson() {
  for (let [id, value] of Object.entries(jsonData)) {
    let targetElement = document.getElementById(id);
    if (targetElement) {
      switch (targetElement.tagName) {
        case "CN2-CHECKBOX":
        case "CN2-SWITCHBUTTON":
          jsonData[id] = targetElement.checked ? "on" : "off";
          break;
        case "INPUT":
          // Radio Button
          if (
            targetElement.hasAttribute("type") &&
            targetElement.getAttribute("type") == "radio"
          ) {
            jsonData[id] = targetElement.checked ? "on" : "off";
          }
          break;
        case "CN2-SELECT":
          if (id == "Member_Member_Name_PEME10"){
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            if (innerSelect.options[innerSelect.selectedIndex].text == "Please Select"){
              jsonData[id] = "";
            }
            else{
            jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;
            }
            

            break;
          }
          if (
            targetElement.hasAttribute("data-options") &&
            !targetElement.hasAttribute("options")
          ) {
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;
          }
           else {
            jsonData[id] = targetElement.value;
          }
          break;
        case "CN2-DATEFIELD":
          let newDateFormat = targetElement.value
            .split("-")
            .reverse()
            .join("/");
          jsonData[id] = newDateFormat;
          break;
        default:
          if (
            [
              "SubmDeta_AirConArea10",
              "SubmDeta_AirConServedBy10",
              "SubmDeta_Curr_Dayt_Chil10",
              "SubmDeta_Curr_Dayt_ChilWatePump10",
              "SubmDeta_Curr_Dayt_CondWatePump10",
              "SubmDeta_Curr_Dayt_CoolTowe10",
              "SubmDeta_Curr_Night_Chil10",
              "SubmDeta_Curr_Night_ChilWatePump10",
              "SubmDeta_Curr_Night_CondWatePump10",
              "SubmDeta_Curr_Night_CoolTowe10",
              "SubmDeta_Curr_Dayt_Chil20",
              "SubmDeta_Curr_Dayt_ChilWatePump20",
              "SubmDeta_Curr_Dayt_CondWatePump20",
              "SubmDeta_Curr_Dayt_CoolTowe20",
              "SubmDeta_Curr_Night_Chil20",
              "SubmDeta_Curr_Night_ChilWatePump20",
              "SubmDeta_Curr_Night_CondWatePump20",
              "SubmDeta_Curr_Night_CoolTowe20",
              "SubmDeta_Curr_DaytAverCoolLoad20",
              "SubmDeta_HeatBalaWithErro10",
              "SubmDeta_Curr_NighAverCoolLoad20",
              "chkPartOfAppl_Other10",
              "chkPartOfAppl_Other20",
              "chkPartOfAppl_Other30",
              "chkPartOfAppl_Other40",
              "chkPartOfAppl_Other50",
              "chkPartOfAppl_Other60",
              "chkPartOfAppl_Other70",
              "chkPartOfAppl_Other80",
              "chkPartOfAppl_Other90",
              "chkPartOfAppl_Other100",
              "chkPartOfAppl_Other110",
              "chkPartOfAppl_Other120",
              "SubmDeta_BuilEnerPrioRetro10",
              "SubmDeta_BuilEnerAfteRetro10",
              "PartOfAppl_TotalGFA10",
            ].includes(id) &&
            targetElement.value != ""
          ) {
            jsonData[id] = +targetElement.value + "";
          } else if ([].includes(id)) {
            jsonData[id] =
              targetElement.value == "0" ? "" : targetElement.value;
          } else if ([].includes(id)) {
            jsonData[id] = targetElement.value || "0.00";
          } else if((id == "SubmDeta_Curr_Dayt_TotaSyst10" ||
                    id == "SubmDeta_Curr_Night_TotaSyst10" ||
                    id == "SubmDeta_Curr_Dayt_TotaSyst20" ||
                    id == "SubmDeta_Curr_Night_TotaSyst20" ||
                    id == "SubmDeta_Dayt_TotaSyst10" ||
                    id == "SubmDeta_Night_TotaSyst10") && targetElement.value != "" ) {
                      if (targetElement.value != 0)
                        jsonData[id] = targetElement.value + " subTotal";
                      else
                        jsonData[id] = "undefined subTotal";
          }
          
          else {
          jsonData[id] = targetElement.value;
        }
          break;
      }
    }
  }

  jsonData["form__title"] = document
    .querySelector("cn2-master-head")
    .getAttribute("title");
}

function loadFormData() {
  for (let [objectKey, objectValue] of Object.entries(jsonData)) {
    let field = document.getElementById(objectKey);
    if (field) {
      switch (field.nodeName) {
        case "CN2-SELECT":
          if (
            field.hasAttribute("data-options") &&
            !field.hasAttribute("options") &&
            objectValue != ""
          ) {
            field.setAttribute("load-value", objectValue);
          } else {
            field.value = objectValue;
          }
          break;
        case "CN2-TEXTBOX":
        case "CN2-TEXTAREA":
          field.value = objectValue;
          break;
        case "CN2-DATEFIELD":
          if (!objectValue.includes("-")) {
            let newDateFormat = objectValue.split("/").reverse().join("-");
            field.value = newDateFormat;
          } else {
            field.value = objectValue;
          }
          break;
        case "CN2-CHECKBOX":
          let cn2switch = document.querySelector(
            "cn2-switchbutton[switch-id=" + field.id + "]"
          );
          if (cn2switch !== null) {
            cn2switch.checked =
              objectValue === true || objectValue === "on" ? true : false;
          }
          field.checked =
            objectValue === true || objectValue === "on" ? true : false;
          break;
        case "CN2-SWITCHBUTTON":
          field.checked =
            objectValue === true || objectValue === "on" ? true : false;
          break;
        case "INPUT":
          // Radio Button
          if (
            field.hasAttribute("type") &&
            field.getAttribute("type") == "radio"
          ) {
            field.checked =
              objectValue === true || objectValue === "on" ? true : false;
          }
          break;
      }
    }
  }
}