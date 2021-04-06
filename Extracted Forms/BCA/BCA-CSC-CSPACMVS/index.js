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

function ToAgency_id_change(element) {
  let select = document.getElementById(element.id);
  let textarea = document.getElementById("Addr20");
  if (select.value === "BCA") {
    textarea.value = `Commissioner of Building Control \nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550\nWebsite : http://www.bca.gov.sg`;
  } else {
    textarea.value = `Building & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
  }
  textarea.adjustHeigth();
}
function DeclByQualPers_IHaveSupeThe70_checked(element) {
  let selectGroup = [
    document.getElementById("DeclByQualPers_IHaveSupeThe10"),
    document.getElementById("DeclByQualPers_IHaveSupeThe20"),
    document.getElementById("DeclByQualPers_IHaveSupeThe50"),
  ];
  if (element.checked) {
    for (let select of selectGroup) {
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
    }
  } else {
    for (let select of selectGroup) {
      select.removeAttribute("mandatory");
      select.setAttribute("disabled", "");
      select.value = "";
    }
    document.getElementById("DeclByQualPers_IHaveSupeThe30").value = "";
    document.getElementById("DeclByQualPers_IHaveSupeThe40").value = "";
  }
}

function DeclByQualPers_TheDesiAndInst30_checked(element) {
  let selectGroup = [
    document.getElementById("DeclByQualPers_TheDesiAndInst10"),
    document.getElementById("DeclByQualPers_TheDesiAndInst20"),
  ];
  if (element.checked) {
    for (let select of selectGroup) {
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
    }
  } else {
    for (let select of selectGroup) {
      select.removeAttribute("mandatory");
      select.setAttribute("disabled", "");
      select.value = "";
    }
  }
}

function DeclByQualPers_IHaveSupeThe10_change(element) {
  let attribute = document.getElementById(element.id).valueLabel;
  if (attribute !== "Please Select") {
    document.getElementById(
      "DeclByQualPers_IHaveSupeThe30"
    ).value = document.getElementById(
      "DeclByQualPers_IHaveSupeThe10"
    ).valueLabel;
  } else {
    document.getElementById("DeclByQualPers_IHaveSupeThe30").value = "";
  }
}

function DeclByQualPers_IHaveSupeThe20_change(element) {
  let attribute = document.getElementById(element.id).valueLabel;
  if (attribute !== "Please Select") {
    document.getElementById(
      "DeclByQualPers_IHaveSupeThe40"
    ).value = document.getElementById(
      "DeclByQualPers_IHaveSupeThe20"
    ).valueLabel;
  } else {
    document.getElementById("DeclByQualPers_IHaveSupeThe40").value = "";
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

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
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

function togglePartQp() {
  document.getElementById("Members_UEN_PEEMM10").value = "";
  document
    .getElementById("Members_UEN_PEEMM10")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_PEEMM10")
    .removeAttribute("data-invalid-message");
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
          if (id == "DeclByQualPers_IHaveSupeThe50"){
            let newValue = targetElement.value.split(";").join(":");
            jsonData[id] = newValue;
            
            break;
          }
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