document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(
    "cn2-master-head"
  ).title = `APPLICATION FOR APPROVAL OF PERIODIC AUDIT REPORT OF ENERGY <br> EFFICIENCY OF BUILDING COOLING SYSTEM <br>
  [Section 22FF of the Building Control Act (Cap.29) (the "Act")]
  `;
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
  console.log(jsonData);
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

function chkPartOfAppl_Other_change(parent) {
  let total = document.getElementById("PartOfAppl_TotalGFA10");
  let totalValue = 0;
  let textBoxs = chkPartOfAppl_Other_filterTextbox(parent);

  for (var x = 0; x < textBoxs.length; x++) {
    if (textBoxs[x].value.length !== 0) {
      totalValue = totalValue + parseFloat(textBoxs[x].value);
    }
  }

  if (totalValue != 0) {
    total.value = totalValue;
  } else {
    total.value = "";
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

function calckWRate(element) {
  let target = document.getElementById("SubmDeta_TotaInstCapa_Kw10");
  let field = document.getElementById(element.id);
  let final;
  if (field.value) {
    final = parseFloat(field.value) * 3.517;
    target.value = final.toFixed(2);
  } else {
    target.value = "";
  }
}

// function calcCoolLoad() {
//   let area =
//     document.getElementById("SubmDeta_AirConArea10").value !== ""
//       ? parseFloat(document.getElementById("SubmDeta_AirConArea10").value)
//       : 0;
//   let dayLoad =
//     document.getElementById("SubmDeta_DaytAverCoolLoad10").value !== ""
//       ? parseFloat(document.getElementById("SubmDeta_DaytAverCoolLoad10").value)
//       : 0;
//   let nightLoad =
//     document.getElementById("SubmDeta_NighAverCoolLoad10").value !== ""
//       ? parseFloat(document.getElementById("SubmDeta_NighAverCoolLoad10").value)
//       : 0;
//   if (area !== 0) {
//     document.getElementById("SubmDeta_DaytAverCoolLoad20").value =
//       parseFloat(dayLoad * 3.517 * 1000) / area;
//     document.getElementById("SubmDeta_NighAverCoolLoad20").value =
//       parseFloat(nightLoad * 3.517 * 1000) / area;
//   } else {
//     document.getElementById("SubmDeta_DaytAverCoolLoad20").value = "0";
//     document.getElementById("SubmDeta_NighAverCoolLoad20").value = "0";
//   }
// }

function calcChillerTable(el) {
  // let final = document.querySelectorAll("")
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

function toggleDecl(el) {
  switch (el.id) {
    case "DeclByMechEngi_TheEnerAudit10":
      if (el.checked) {
        document
          .getElementById("DeclByMechEngi_TheEnerAudit20")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByMechEngi_TheEnerAudit20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByMechEngi_TheEnerAudit30")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByMechEngi_TheEnerAudit30")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("DeclByMechEngi_TheEnerAudit20")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclByMechEngi_TheEnerAudit20")
          .setAttribute("disabled", "");
        document.getElementById("DeclByMechEngi_TheEnerAudit20").value = "";
        document
          .getElementById("DeclByMechEngi_TheEnerAudit30")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclByMechEngi_TheEnerAudit30")
          .setAttribute("disabled", "");
        document.getElementById("DeclByMechEngi_TheEnerAudit30").value = "";
      }
  }
}

function handlePercentBox(element) {
  let text =
    document.getElementById("SubmDeta_HeatBalaWithErro10").value +
    "" +
    element.key;
  let value = text !== "" ? parseFloat(text) : 0;
  if (value > 100) {
    element.preventDefault();
  }
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  console.log(1);
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

function removeUENerror(parent) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let UENfields = document.querySelectorAll(`[prefix="PartOfTheBuil_Uen"]`);
  let EmailFields = document.querySelectorAll(
    `[prefix="PartOfTheBuil_Email_Addr"]`
  );
  if (childCount > 1) {
    UENfields[UENfields.length - 1].removeAttribute("data-invalid");
    UENfields[UENfields.length - 1].removeAttribute("data-invalid-message");
    EmailFields[EmailFields.length - 1].removeAttribute("data-invalid");
    EmailFields[EmailFields.length - 1].removeAttribute("data-invalid-message");
  }
}

function removeManda(el) {
  let main = document.getElementById(el.id);
  if (main.checked) {
    main.removeAttribute("mandatory");
    main.removeAttribute("checked");
  } else {
    main.setAttribute("mandatory", "");
    main.setAttribute("checked", "");
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

function PartOfAppl_BuilAge10_change(element) {
  let textBox = document.getElementById(element.id);
  if (textBox.value) {
    if (textBox.value == 0) {
      textBox.setAttribute("data-invalid", "");
      textBox.setAttribute(
        "data-invalid-message",
        "Data of field is limited to 3 digits. Please try again."
      );
    } else {
      textBox.removeAttribute("data-invalid");
      textBox.removeAttribute("data-invalid-message");
    }
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

function disableOthers(element) {
  let others = document.querySelectorAll("[prefix='PartOfAppl_GfaOthe']");
  let childCount = document.getElementById("psda-container2").childElementCount;
  if (childCount > 1) {
    others[others.length - 1].setAttribute("disabled", "");
    others[others.length - 1].removeAttribute("mandatory");
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteClass).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(deleteClass);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
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

function atLeastOne(element) {
  let name = document.querySelectorAll(`[name='${element.name}']`);
  let pass = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < name.length; i++) {
      name[i].removeAttribute("mandatory");
      name[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].setAttribute("checked", "");
    }
  }
}

function SubmDeta_DaytAverCoolLoad(element) {
  let field = document.getElementById(element.id);
  let airConField = document.getElementById("SubmDeta_AirConArea10");
  let target = document.getElementById("SubmDeta_DaytAverCoolLoad20");
  if (field.value && airConField.value) {
    let final =
      (parseFloat(field.value) * 3.517 * 1000) / parseFloat(airConField.value);
    if (final.toString().includes(".")) {
      target.value = final.toFixed(3);
    } else {
      target.value = final;
    }
  } else {
    target.value = 0;
  }
}
function SubmDeta_DaytAverCoolLoad2(element) {
  let field = document.getElementById(element.id);
  let airConField = document.getElementById("SubmDeta_AirConArea10");
  let target = document.getElementById("SubmDeta_NighAverCoolLoad20");
  if (field.value && airConField.value) {
    let final =
      (parseFloat(field.value) * 3.517 * 1000) / parseFloat(airConField.value);
    if (final.toString().includes(".")) {
      target.value = final.toFixed(3);
    } else {
      target.value = final;
    }
  } else {
    target.value = 0;
  }
}

function airconCalc() {
  let day = document.getElementById("SubmDeta_DaytAverCoolLoad10");
  let dayCompute = document.getElementById("SubmDeta_DaytAverCoolLoad20");
  let night = document.getElementById("SubmDeta_NighAverCoolLoad10");
  let nightCompute = document.getElementById("SubmDeta_NighAverCoolLoad20");
  let airConField = document.getElementById("SubmDeta_AirConArea10");
  if (day.value) {
    let final =
      (parseFloat(day.value) * 3.517 * 1000) / parseFloat(airConField.value);
    if (!isNaN(final)) {
      if (final.toString().includes(".")) {
        dayCompute.value = final.toFixed(3);
      } else {
        dayCompute.value = final;
      }
    } else {
      dayCompute.value = 0;
    }
  } else {
    dayCompute.value = 0;
  }

  if (night.value) {
    let final =
      (parseFloat(night.value) * 3.517 * 1000) / parseFloat(airConField.value);
    if (!isNaN(final)) {
      if (final.toString().includes(".")) {
        nightCompute.value = final.toFixed(3);
      } else {
        nightCompute.value = final;
      }
    } else {
      nightCompute.value = 0;
    }
  } else {
    nightCompute.value = 0;
  }
}

//added by Jerome

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
function checkAdd24hrs() {
  let checkboxGroup = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_24Hrs']"
  );
  let field = document.getElementById("SubmDeta_NighAverCoolLoad10");
  let fieldManda = document.getElementById("SubmDeta_NighAverCoolLoad10_span");
  let pass = false;
  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    fieldManda.textContent = "*";
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    fieldManda.textContent = "";
  }
}
function SubmDeta_Curr_24Hrs_change(element) {
  let checkbox = document.getElementById(element.id);
  let parent = checkbox.parentNode.parentNode.parentNode;
  let checkboxGroup = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_24Hrs']"
  );
  let field = document.getElementById("SubmDeta_NighAverCoolLoad10");
  let fieldManda = document.getElementById("SubmDeta_NighAverCoolLoad10_span");
  let pass = false;

  let fields24hrs = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CoolTowe']"),
  ];
  let nightTimetotal = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_Night_TotaSyst']"
  );
  let total24hrs = document.querySelectorAll(
    "[prefix='SubmDeta_Curr_24Hour_TotaSyst']"
  );
  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      nightTimetotal[i].value = 0;
      total24hrs[i].value = 0;
      for (f of fields24hrs) {
        for (let j = 0; j < f.length; j++) {
          f[i].removeAttribute("disabled");
        }
      }
      pass = true;
    } else {
      for (let j = 0; j < nightTimetotal.length; j++) {
        nightTimetotal[i].value = "";
        total24hrs[i].value = "";
      }
      for (f of fields24hrs) {
        for (let j = 0; j < f.length; j++) {
          f[i].setAttribute("disabled", "");
          f[i].value = "";
        }
      }
    }
  }
  if (pass == true) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    fieldManda.textContent = "*";
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    fieldManda.textContent = "";
    document.getElementById("SubmDeta_NighAverCoolLoad20").value = 0;
  }

  if (element.checked) {
    for (let textbox of parent.querySelectorAll("cn2-textbox")) {
      if (
        textbox.getAttribute("prefix").includes("Night") &&
        textbox.getAttribute("prefix") !== "SubmDeta_Curr_Night_TotaSyst"
      ) {
        textbox.removeAttribute("disabled");
        textbox.setAttribute("mandatory", "");
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
    }
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

// function cal24HourAverage(){

//   let fields24hrs = [
//     document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_Chil']"),
//     document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_ChilWatePump']"),
//     document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CondWatePump']"),
//     document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CoolTowe']"),
//   ]
//   let total = document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_TotaSyst']");
//   let totalvalue = 0;
//   for (let i = 0; i < total.length; i++) {
//     for(f of fields24hrs){
//       for (let j = 0; j < f.length; j++) {
//         if(f[i].value){
//           totalvalue +=  parseInt(f[i].value);
//         }
//       }
//     }
//     total[i].value = totalvalue;
//     totalvalue = 0;

//   }

// }

function disable24hrs() {
  let childCount = document.getElementById("chillerForm").childElementCount;
  let fields24hrs = [
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_Chil']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_ChilWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CondWatePump']"),
    document.querySelectorAll("[prefix='SubmDeta_Curr_24Hour_CoolTowe']"),
  ];

  if (childCount > 1) {
    for (f of fields24hrs) {
      f[f.length - 1].setAttribute("disabled", "");
    }
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
          if (
            targetElement.hasAttribute("data-options") &&
            !targetElement.hasAttribute("options")
          ) {
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;
          } else {
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
              "chkPartOfAppl_Other10",
              "PartOfAppl_TotalGFA10",
              "SubmDeta_TotaInstCapa_Rt10",
              "SubmDeta_TotaInstCapa_Kw10",
              "RtKwRate10",
              "SubmDeta_AirConArea10",
              "SubmDeta_DaytAverCoolLoad10",
              "SubmDeta_NighAverCoolLoad10",
              "SubmDeta_DaytAverCoolLoad20",
              "SubmDeta_NighAverCoolLoad20",
              "SubmDeta_Curr_Dayt_Chil10",
              "SubmDeta_Curr_Dayt_ChilWatePump10",
              "SubmDeta_Curr_Dayt_CondWatePump10",
              "SubmDeta_Curr_Dayt_CoolTowe10",
              "SubmDeta_Curr_Dayt_TotaSyst10",
              "SubmDeta_Curr_Night_Chil10",
              "SubmDeta_Curr_Night_ChilWatePump10",
              "SubmDeta_Curr_Night_CondWatePump10",
              "SubmDeta_Curr_Night_CoolTowe10",
              "SubmDeta_Curr_Night_TotaSyst10",
              "SubmDeta_HeatBalaWithErro10",
            ].includes(id)
          ) {
            jsonData[id] = +targetElement.value + "";
          } else {
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
