function toggleDecl(el) {
  let textField = document.getElementById("DeclByProfEngi_ITheProfEngi10");
  let checkbox = document.getElementById(el.id);

  if (el.checked) {
    if (document.getElementById("Member_Member_Name_PE10").value !== "")
      textField.value = document.getElementById("Member_Member_Name_PE10").data[
        document.getElementById("Member_Member_Name_PE10").value
      ].Member_Member_Name_PE10;
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
    textField.value = "";
  }
}

function removeMandatoryChecked(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function engi_change(el) {
  let textField = document.getElementById("DeclByProfEngi_ITheProfEngi10");

  if (document.getElementById("DeclByProfEngi_ITheProfEngi20").checked) {
    textField.value = document.getElementById("Member_Member_Name_PE10").data[
      document.getElementById("Member_Member_Name_PE10").value
    ].Member_Member_Name_PE10;
  } else {
    textField.value = "";
  }
}

function PartOfProj_DeveType10_change(el) {
  let textfield = document.getElementById("PartOfProj_DeveType20");
  if (el.value === "Others") {
    textfield.removeAttribute("hidden");
    textfield.removeAttribute("disabled");
    textfield.setAttribute("mandatory", "");
  } else {
    textfield.setAttribute("hidden", "");
    textfield.setAttribute("disabled", "");
    textfield.removeAttribute("mandatory");
    textfield.value = "";
  }
}

function PPC_Change(el) {
  if (el.checked) {
    document.getElementById("prePlanwPUB").innerText =
      document.getElementById("prePlanwPUB").innerText + " *";
    document
      .getElementById("PartOfProj_DateOfPrePlan10")
      .setAttribute("mandatory", "");
    document
      .getElementById("PartOfProj_DateOfPrePlan10")
      .removeAttribute("disabled");
  } else {
    document.getElementById("prePlanwPUB").innerText = document
      .getElementById("prePlanwPUB")
      .innerText.slice(0, -1);
    document
      .getElementById("PartOfProj_DateOfPrePlan10")
      .setAttribute("disabled", "");
    document
      .getElementById("PartOfProj_DateOfPrePlan10")
      .removeAttribute("mandatory");
    document.getElementById("PartOfProj_DateOfPrePlan10").value = "";
  }
}

function subType_Change(el) {
  switch (el.id) {
    case "PartOfProj_TypeOfSubm10":
      if (el.checked) {
        document
          .getElementById("PartOfProj_PubRef10")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfProj_PubRef10")
          .removeAttribute("mandatory");
        document.getElementById("PartOfProj_PubRef10").value = "";
        document
          .getElementById("PartOfProj_PubRef20")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfProj_PubRef20")
          .removeAttribute("mandatory");
        document.getElementById("PartOfProj_PubRef20").value = "";
        document
          .getElementById("PartOfProj_PubRef30")
          .setAttribute("disabled", "");
        document
          .getElementById("PartOfProj_PubRef30")
          .removeAttribute("mandatory");
        document.getElementById("PartOfProj_PubRef30").value = "";
      }
      break;
    case "PartOfProj_TypeOfSubm20":
      if (el.checked) {
        document
          .getElementById("PartOfProj_PubRef10")
          .setAttribute("mandatory", "");
        document
          .getElementById("PartOfProj_PubRef10")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfProj_PubRef20")
          .setAttribute("mandatory", "");
        document
          .getElementById("PartOfProj_PubRef20")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfProj_PubRef30")
          .setAttribute("mandatory", "");
        document
          .getElementById("PartOfProj_PubRef30")
          .removeAttribute("disabled");
      }
      break;
  }
}

function Project_Commence_Date10_change(element, datefield) {
  let max = document.getElementById(datefield);
  let min = document.getElementById(element.id);
  max.setAttribute("min", min.value);
}

function Project_Complete_Date10_change(element, datefield) {
  let min = document.getElementById(datefield);
  let max = document.getElementById(element.id);
  min.setAttribute("max", max.value);
}

//

document.addEventListener("DOMContentLoaded", function (event) {
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

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
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
            jsonData[id] = "PUBWTR";
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
            field.value = "PUB Water";
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

