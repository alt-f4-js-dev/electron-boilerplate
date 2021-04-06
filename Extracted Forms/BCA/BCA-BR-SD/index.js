document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    document.getElementById("PartOfAppl_SD1").click();
  }
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function fieldMand() {
  let checkbox = document.getElementById("DeclByQualPers_AsRequUndeSect20");
  let field = document.getElementById("DeclByQualPers_AsRequUndeSect10");
  let field2 = document.getElementById("DeclByQualPers_AsRequUndeSect30");
  let apptype = document.getElementById("PartOfAppl_SD");

  if (apptype.checked) {
    if (checkbox.checked) {
      checkbox.removeAttribute("checked");
      field.setAttribute("mandatory", "");
      field.removeAttribute("disabled");
      field2.setAttribute("mandatory", "");
      field2.removeAttribute("disabled");
    } else {
      checkbox.setAttribute("checked", "");
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.value = "";
      field2.removeAttribute("mandatory");
      field2.setAttribute("disabled", "");
      field2.value = "";
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

function yearValidation(year, ev) {
  var text = /^[0-9]+$/;
  let yearVal = document.getElementById(year.id);
  if (
    ev.type == "blur" ||
    (yearVal.value.length == 4 && ev.keyCode != 8 && ev.keyCode != 46)
  ) {
    if (yearVal.value != 0) {
      if (yearVal.value != "" && !text.test(year.value)) {
        showMessage("Please Enter Numeric Values Only");
        yearVal.value = "";
        return false;
      }

      if (yearVal.value.length != 4) {
        showMessage("Year Field should be YYYY format. Please try again");
        yearVal.value = "";
        return false;
      }
      var current_year = new Date().getFullYear();
      if (yearVal.value < 1920 || yearVal.value > current_year) {
        showMessage("Year should be in range 1920 to current year");
        yearVal.value = "";
        return false;
      }
      return true;
    }
  }
  if (yearVal.value == "0000") {
    showMessage("Year should be in range 1920 to current year");
    yearVal.value = "";
  }
}

function PartOfTheOWNER_change(element) {
  let radio = document.getElementById(element.id);
  let textbox = document.getElementById("Part_Owner_MCST_No10");
  let col = document.getElementById("PartOfTheOWNER_MCSTNo10_hide");
  switch (radio.id) {
    case "Part_Owner_Owner10":
      textbox.setAttribute("disabled", "");
      col.setAttribute("hidden", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      document.getElementById("mcstno").innerHTML = "";
      break;
    case "Part_Owner_MCST10":
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
      col.removeAttribute("hidden");
      document.getElementById("mcstno").innerHTML = "No.*";

      break;
  }
}

function onBlurorChange(el) {
  // let declaCheckBox = document.getElementById("Decl_Owner_QP10");
  //let confirmCheckBox = document.getElementById("Decl_QualPers_Chkbox10");

  let declaRationName = document.getElementById("Decl_Owner_NameQP10");
  let declaPEregisNo = document.getElementById("Decl_Owner_RegiNo_QP10");

  let confirmName = document.getElementById("Decl_QualPers_Er10");
  let confirmRole = document.getElementById("Decl_QualPers_Owner_Mana10");

  let textbox1 = document.getElementById("Decl_QualPers_Er10");
  let textbox2 = document.getElementById("Decl_QualPers_Owner_Mana10");
  let rad1 = document.getElementById("Part_Owner_Owner10");
  let rad2 = document.getElementById("Part_Owner_MCST10");
  let memberName = document.getElementById("Member_Name_QP10");

  switch (el.id) {
    case "Member_Name_QP10":
      //  if (declaCheckBox.checked) {
      if (el.value.length != 0) {
        declaRationName.innerHTML = el.value;
      } else {
        declaRationName.innerHTML = "";
      }
      //  }
      //if (confirmCheckBox.checked) {
      if (el.value.length != 0) {
        confirmName.innerHTML = el.value;
      } else {
        confirmName.innerHTML = "";
      }
      if (rad1.checked == true) {
        textbox2.innerHTML = "Owner";
      } else if (rad2.checked == true) {
        textbox2.innerHTML = "MCST";
      } else {
        textbox2.innerHTML = "";
      }
      //}
      break;
    case "Member_RegiNo_QP10":
      // if (declaCheckBox.checked) {
      if (el.value.length != 0) {
        declaPEregisNo.innerHTML = el.value;
      } else {
        declaPEregisNo.innerHTML = "";
      }
      //  }
      if (rad1.checked == true) {
        textbox2.innerHTML = "Owner";
      } else if (rad2.checked == true) {
        textbox2.innerHTML = "MCST";
      } else {
        textbox2.innerHTML = "";
      }
      break;
    case "Part_Owner_Owner10":
      // if (confirmCheckBox.checked) {
      confirmRole.innerHTML = "Owner";
      //  }
      break;
    case "Part_Owner_MCST10":
      // if (confirmCheckBox.checked) {
      confirmRole.innerHTML = "MCST";
      // }
      break;
  }
}

function UENchange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateUen(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function Member_Email_Address1_OWNMCST10_change(el) {
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

function validateUen(uen) {
  let re = /^(([0-9]{9}))(([a-zA-Z]{1}))$/;
  return re.test(uen);
}

function showByAppType(el) {
  let checkbox = document.getElementById("DeclByQualPers_AsRequUndeSect20");
  let NameOfBuildingField = document.getElementById(
    "ProjectAddress_Building_Name10"
  );
  let DeclarationQP = document.getElementById("SD");
  let ParticularsOfOwner = document.getElementById("SD1");
  let sect1Manda = document
    .getElementById("sectIPart")
    .querySelectorAll("[mandaSD1]");
  let sect2Manda = document
    .getElementById("sectIIPart")
    .querySelectorAll("[mandaSD1]");

  if (el.id == "PartOfAppl_SD") {
    document
      .querySelector("cn2-master-head")
      .setAttribute(
        "title",
        "SUBMISSION OF STRUCTURAL INVESTIGATION REPORT<br/>The Building Control Act (Cap 29) [Section 24]"
      );
    document
      .querySelector("[target='page3']")
      .setAttribute("label", "Declaration by Qualified Person");
    document.querySelector("[target='page4']").setAttribute("hidden", "");

    DeclarationQP.removeAttribute("hidden");
    checkbox.setAttribute("checked", "");
    ParticularsOfOwner.setAttribute("hidden", "");

    for (sect1 of sect1Manda) {
      sect1.removeAttribute("mandatory");
    }
    for (sect2 of sect2Manda) {
      sect2.removeAttribute("mandatory");
    }
  } else if (el.id == "PartOfAppl_SD1") {
    document
      .querySelector("cn2-master-head")
      .setAttribute(
        "title",
        "APPOINTMENT OF STRUCTURAL ENGINEER<br/>The Building Control Act (Cap 29) [Section 24]"
      );
    document
      .querySelector("[target='page3']")
      .setAttribute(
        "label",
        "Particulars and Declaration by Owner / Management Corporation"
      );
    document.querySelector("[target='page4']").removeAttribute("hidden");

    NameOfBuildingField.value = "";
    checkbox.removeAttribute("checked");
    DeclarationQP.setAttribute("hidden", "");
    ParticularsOfOwner.removeAttribute("hidden");

    for (sect1 of sect1Manda) {
      sect1.setAttribute("mandatory", "");
    }
    for (sect2 of sect2Manda) {
      sect2.setAttribute("mandatory", "");
    }
  }

  resetPages();
}

function resetPages() {
  let fieldsPage2 = document
    .getElementById("page2")
    .querySelectorAll("cn2-textbox, cn2-textarea");
  let fieldsPage3 = document
    .getElementById("page3")
    .querySelectorAll("cn2-textbox, cn2-textarea, cn2-checkbox");

  let fieldsPage4 = document
    .getElementById("page4")
    .querySelectorAll("cn2-textbox, cn2-textarea");

  let declaRationName = document.getElementById("Decl_Owner_NameQP10");
  let declaPEregisNo = document.getElementById("Decl_Owner_RegiNo_QP10");

  let confirmName = document.getElementById("Decl_QualPers_Er10");
  let confirmRole = document.getElementById("Decl_QualPers_Owner_Mana10");

  for (let a of fieldsPage2) {
    a.value = "";
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-invalid-message");
    a.removeAttribute("not-filledup");
  }

  for (let a of fieldsPage3) {
    a.value = "";
    a.checked = false;
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-invalid-message");
    a.removeAttribute("not-filledup");

    let page3textbox = document
      .getElementById("SD")
      .querySelectorAll("cn2-textbox");
    for (b of page3textbox) {
      if (b.hasAttribute("mandatory")) {
        b.removeAttribute("mandatory");
        b.setAttribute("disabled", "");
      }
    }
  }

  declaRationName.innerHTML = "";
  declaPEregisNo.innerHTML = "";
  confirmName.innerHTML = "";
  confirmRole.innerHTML = "";

  for (let a of fieldsPage4) {
    a.value = "";
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-invalid-message");
    a.removeAttribute("not-filledup");
  }

  document.getElementById("Part_Owner_Owner10").checked = true;
  document
    .getElementById("Project_Location_Description10")
    .removeAttribute("mandatory");
  document
    .getElementById("Project_Location_Description10")
    .setAttribute("mandatory", "");
  document
    .getElementById("PartOfTheOWNER_MCSTNo10_hide")
    .setAttribute("hidden", "");
  document.getElementById("Part_Owner_MCST_No10").removeAttribute("mandatory");
  document.getElementById("Part_Owner_MCST_No10").value = "";
  document.getElementById("mcstno").innerHTML = "";

  [...document.querySelectorAll(`cn2-nav-button`)].map((nav) => {
    nav.removeAttribute("valid");
    nav.removeAttribute("warning");
  });
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

          if (id == "PartOfAppl_SD" && targetElement.checked) {
            jsonData["FormName10"] = "BCA-ESID-SIS_SF-SD";
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
          jsonData[id] = targetElement.value;
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
