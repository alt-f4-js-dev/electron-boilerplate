function PartOfAppl_NA_CleaCertForBuil10_change(element) {
  let input = document.getElementById("PartOfAppl_RefeNumb_CleaCertForBuil10");
  let dateField = document.getElementById("PartOfAppl_Date_CleaCertForBuil10");

  if (element.checked) {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
    dateField.setAttribute("disabled", "");
    dateField.removeAttribute("mandatory");
    dateField.value = "";
  } else {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    dateField.removeAttribute("disabled");
  }
}

function PartOfAppl_NA_CleaCertForBuilPlan10_change(element) {
  let input = document.getElementById(
    "PartOfAppl_RefeNumb_CleaCertForBuilPlan10"
  );
  let dateField = document.getElementById(
    "PartOfAppl_Date_CleaCertForBuilPlan10"
  );

  if (element.checked) {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
    dateField.setAttribute("disabled", "");
    dateField.removeAttribute("mandatory");
    dateField.value = "";
  } else {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    dateField.removeAttribute("disabled");
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
  } else if (el.id === "PartOfAppl_RefeNumb_CleaCertForBuilPlan10") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuilPlan10")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForBuilPlan10")
        .removeAttribute("mandatory");
    }
  }
}

function toggleDecl() {
  let status = document.getElementById("DeclByQualPers_NoRoofGutter11").checked;

  let textBox = document.getElementById("DeclByQualPers_NoGutter11a");
  let dateField = document.getElementById("fieldSubmConf_NoGutter11");

  if (status) {
    textBox.value = "";
    textBox.removeAttribute("disabled");
    dateField.value = "";
    dateField.removeAttribute("disabled");
  } else {
    dateField.setAttribute("disabled", "");
    dateField.value = "";
    textBox.setAttribute("disabled", "");
    textBox.value = "";
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
  let parentDiv = document.getElementById("planTypeForm");
  let childDiv = parentDiv.getElementsByTagName("div");
  let tempDiv = [];
  for (let target of childDiv) {
    if (target.hasAttribute("id")) {
      tempDiv.push(target);
    }
  }
  let targetDiv = tempDiv[tempDiv.length - 1];
  let targetTextBox = targetDiv.querySelectorAll("cn2-textbox");
  let targetSelectBox = targetDiv.querySelectorAll("cn2-select");
  for (let textbox of targetTextBox) {
    if (textbox.hasAttribute("data-invalid")) {
      textbox.removeAttribute("data-invalid");
    }
  }
  for (let selectDrop of targetSelectBox) {
    selectDrop.value = "BP";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("cn2-master-head")
    .setAttribute(
      "title",
      "APPLICATION FOR COMPLIANCE CERTIFICATE - NEW SUBMISSION<br>[Under Section 33(7) Of The Environmental Protection And Management Act (Chapter 94A)]"
    );

  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

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

function envipollCheckBox(element, checkBox) {
  if (element.checked) {
    document.getElementById(checkBox.id).checked = true;
  } else {
    document.getElementById(checkBox.id).checked = false;
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
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
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