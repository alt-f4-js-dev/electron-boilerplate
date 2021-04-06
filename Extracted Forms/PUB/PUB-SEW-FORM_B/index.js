function toggleDecl(el) {
  switch (el.id) {
    case "PartOfThePLUMBCONTR10":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_LPLUMB10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_LPLUMB10")
          .removeAttribute("disabled");
        document.getElementById("prtclrPlumb").innerHTML = "Name*";
      } else {
        clearFields("LPLUMB10");
        document.getElementById("prtclrPlumb").innerHTML = "Name";
      }
      break;
    case "PartOfTheCont10":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_PLUMBCONTR10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_PLUMBCONTR10")
          .removeAttribute("disabled");
        document.getElementById("prtclrCont").innerHTML = "Name*";
      } else {
        document.getElementById("prtclrCont").innerHTML = "Name";
        clearFields("PLUMBCONTR10");
      }
      break;
    case "PartOfCCTVCont10":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_PLUMBCONT10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_PLUMBCONT10")
          .removeAttribute("disabled");
        document.getElementById("prtclrCcCont").innerHTML = "Name*";
      } else {
        document.getElementById("prtclrCcCont").innerHTML = "Name";
        clearFields("PLUMBCONT10");
      }
      break;
    case "PartOfTheCompPers10":
      if (el.checked) {
        document
          .getElementById("PartOfTheCompPers_AuthManaName10")
          .setAttribute("mandatory", "");
        document
          .getElementById("PartOfTheCompPers_AuthManaName10")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfTheCompPers_MOMCertRefNo10")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfTheCompPers_ContNo10")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .removeAttribute("disabled");
        document.getElementById("authManCont").innerHTML =
          "Authorized Manager Name*";
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .setAttribute("placeholder", "name@example.com");
      } else {
        document
          .getElementById("PartOfTheCompPers_AuthManaName10")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfTheCompPers_AuthManaName10")
          .removeAttribute("mandatory");
        document
          .getElementById("PartOfTheCompPers_MOMCertRefNo10")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfTheCompPers_ContNo10")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .setAttribute("disabled", "");
        document.getElementById("PartOfTheCompPers_AuthManaName10").value = "";
        document.getElementById("PartOfTheCompPers_MOMCertRefNo10").value = "";
        document.getElementById("PartOfTheCompPers_ContNo10").value = "";
        document.getElementById("PartOfTheCompPers_EmailAddr10").value = "";
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .removeAttribute("data-invalid");
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .removeAttribute("data-invalid-message");
        document.getElementById("authManCont").innerHTML =
          "Authorized Manager Name";
        document
          .getElementById("PartOfTheCompPers_EmailAddr10")
          .removeAttribute("placeholder");
      }
      break;
    case "PartOfAppl_TypeOfWork10":
      if (el.value === "Others") {
        document.getElementById("workDescription10").removeAttribute("hidden");
        document
          .getElementById("PartOfAppl_WorkDesc10")
          .setAttribute("mandatory", "");
        document
          .getElementById("PartOfAppl_WorkDesc10")
          .removeAttribute("disabled");
      } else {
        document.getElementById("workDescription10").setAttribute("hidden", "");
        document
          .getElementById("PartOfAppl_WorkDesc10")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfAppl_WorkDesc10")
          .removeAttribute("mandatory");
        document.getElementById("PartOfAppl_WorkDesc10").value = "";
      }
      break;
    case "DeclByBCARegi_ITheUndeConf10":
      if (el.checked) {
        document.getElementById("POPUP1").setAttribute("mandatory", "");
        document.getElementById("POPUP1").removeAttribute("disabled");
        document.getElementById("POPUP1").value = "QP";
      } else {
        document.getElementById("POPUP1").removeAttribute("mandatory");
        document.getElementById("POPUP1").setAttribute("disabled", "");
        document.getElementById("POPUP1").value = "";
      }
      break;
  }
}

function clearFields(id) {
  document
    .getElementById("Member_Member_Name_" + id)
    .setAttribute("disabled", "");
  document
    .getElementById("Member_Member_Name_" + id)
    .removeAttribute("mandatory");
  document.getElementById("Member_Member_Name_" + id).value = "";
  document.getElementById("Member_Designation_" + id).value = "";
  document.getElementById("Member_Firm_Name_" + id).value = "";
  document.getElementById("Member_Address_" + id).value = "";
  document.getElementById("Member_Tel_No_" + id).value = "";
  document.getElementById("Member_Email_Address1_" + id).value = "";
}

function openUrl() {
  ipcRenderer.send(
    "open-default-browser",
    "https://bpu.pub.gov.sg/Forms/EForms"
  );
}

function emailBlur(element) {
  let textbox = document.getElementById(element.id);
  let message = `Email field should contain @ and . symbol. Data of field is limited to 50 characters. Please try again`;
  if (textbox.value.length !== 0) {
    if (validateEmail(textbox.value)) {
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    } else {
      textbox.setAttribute("data-invalid", "");
      textbox.setAttribute("data-invalid-message", message);
    }
  } else {
    textbox.removeAttribute("data-invalid");
  }
}

function PartOfAppl_RiskAsseVali_From10_change(element, datefield) {
  let value = element.value;
  let date = document.getElementById(datefield);

  date.setAttribute("min", value);
}

function PartOfAppl_RiskAsseVali_To10_change(element, datefield) {
  let value = element.value;
  let date = document.getElementById(datefield);

  date.setAttribute("max", value);
}

document.addEventListener("DOMContentLoaded", function (event) {
  let title = `APPLICATION TO WORK IN PUBLIC SEWERAGE SYSTEM <br>[FORM B/QP]`;
  document.querySelector("cn2-master-head").setAttribute("title", title);
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

//

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
            let val = innerSelect.options[innerSelect.selectedIndex].text;
            jsonData[id] = val == "Please Select" ? "" : val;
          } else {
            jsonData[id] =
              targetElement.value == "Please Select" ? "" : targetElement.value;
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
          if (["Addr10"].includes(id)){
            jsonData[id] = "PUBBPU";
          }
          else if ([].includes(id)) {
            jsonData[id] =
              targetElement.value == "0" ? "" : targetElement.value;
          } else if ([].includes(id)) {
            jsonData[id] = targetElement.value || "0.00";
          } else if (["Member_PE_No_SS10"].includes(id)) {
            jsonData[id] = targetElement.value || "undefined";
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
          if (field.id == "Addr10"){
            field.value = "PUB";
            break;
          }
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
