function enableAttachmentField(e, pdiv) {
  let element = document.getElementById(e.id);
  let parentDiv = element.parentNode.parentNode.querySelector("cn2-textarea");
  let divs = document.getElementById(pdiv).getElementsByTagName("div");
  let span = document.getElementById("attcOth_id");
  for (let div of divs) {
    if (div.hasAttribute("id")) {
      if (div.querySelector("cn2-checkbox").checked) {
        span.innerHTML = "Others, please specify*";
        break;
      } else {
        span.innerHTML = "Others, please specify";
      }
    }
  }
  if (element.checked) {
    parentDiv.removeAttribute("disabled", "");
    parentDiv.setAttribute("mandatory", "");
  } else {
    parentDiv.setAttribute("disabled", "");
    parentDiv.removeAttribute("mandatory", "");
    parentDiv.value = "";
  }
}

function addSetDisabled(pDiv) {
  let parent = document.getElementById(pDiv).getElementsByTagName("div");
  let checkbox;
  let textarea;
  for (let x = 0; x < parent.length; x++) {
    if (parent[x].hasAttribute("id")) {
      checkbox = parent[x].querySelector("cn2-checkbox");
      textarea = parent[x].querySelector("cn2-textarea");
      parent[x].querySelector("cn2-button").removeAttribute("disabled");
      if (checkbox.checked) {
        textarea.setAttribute("mandatory", "");
        textarea.removeAttribute("disabled");
      } else {
        textarea.setAttribute("disabled", "");
        textarea.removeAttribute("mandatory");
        textarea.value = "";
      }
    }
  }
}

function attachment_deleteButton(parentDiv) {
  parentDiv = document.getElementById(parentDiv);
  let tempDivs = parentDiv.getElementsByTagName("div");
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length == 1) {
    let button = targetDivs[0].querySelector("cn2-button");
    button.setAttribute("disabled", "");
  }
}

function setAsterisk() {
  let el = document.querySelectorAll("[prefix='SubmChec_A']");

  stopHere: for (let x of el) {
    if (x.hasAttribute("mandatory")) {
      document.getElementById("attcOth_id").innerHTML =
        "Others, please specify*";
      break stopHere;
    } else {
      document.getElementById("attcOth_id").innerHTML =
        "Others, please specify";
    }
  }
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
          if (["Addr10"].includes(id)) {
            jsonData[id] = "PUBBPU";
          } else if ([].includes(id)) {
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
          if (field.id == "Addr10") {
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

function insertDuplicate(pDiv, idDiv) {
  let parentDiv = document.getElementById(pDiv);
  let firstChild = document.getElementById(idDiv);

  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        if (checkPage(menuList[i].getAttribute("target"))) {
          menuList[i].removeAttribute("valid");
          menuList[i].setAttribute("warning", "");
        } else {
          menuList[i].removeAttribute("warning");
          menuList[i].setAttribute("valid", "");
        }
      }
    }
  }

  let clone = firstChild.cloneNode(true);

  let counter = parentDiv.childElementCount + 1;
  for (let field of clone.querySelectorAll("[id]")) {
    let prefix = field.getAttribute("prefix");
    console.log(field);
    console.log(["cn2-textarea"].includes(field.tagName.toLowerCase()));
    if (["cn2-textarea"].includes(field.tagName.toLowerCase())) {
      if (
        parentDiv.childElementCount + 1 == 2 &&
        !document.getElementById(prefix)
      )
        counter = "";
      if (
        parentDiv.childElementCount + 1 >= 3 &&
        document.getElementById(prefix)
      )
        counter = counter - 1;
      field.value = "";
      field.removeAttribute("mandatory");
      field.removeAttribute("disabled");
      field.setAttribute("disabled", "");
    } else {
      field.checked = false;
      counter = parentDiv.childElementCount + 1;
    }

    console.log(counter);

    field.id = `${prefix}${counter}`;
    jsonData[field.id] =
      field.tagName.toLowerCase() != "cn2-checkbox" ? "" : "off";
  }

  clone.querySelector("cn2-button").removeAttribute("disabled");

  parentDiv.appendChild(clone);
}
