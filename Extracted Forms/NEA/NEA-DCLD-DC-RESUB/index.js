function confirmation1Selection(element) {
  let groupBList = [
    document.getElementById("DeclByQualPers_NoGutter11a"),
    document.getElementById("fieldSubmConf_NoGutter11")
  ];
  let groupC = document.getElementById("fieldSubmConf_NoGutter11d");

  switch (element.id) {
    case "DeclByQualPers_NoRoofGutter11":
      for (let element of groupBList) {
        element.removeAttribute("disabled");
      }
      groupC.value = "";
      groupC.setAttribute("disabled", "");
      break;
    case "DeclByQualPers_NoRoofGutter12":
      for (let element of groupBList) {
        element.setAttribute("disabled", "");
        element.value = "";
      }
      groupC.removeAttribute("disabled");
      break;
    default:
      for (let element of groupBList) {
        element.setAttribute("disabled", "");
        element.value = "";
      }
      groupC.setAttribute("disabled", "");
      groupC.value = "";
      break;
  }
}
function DeclByQualPers_ThePartOfProj14_mandatory(status, element) {
  let email = document.getElementById("Member_Email_Address1_QP10").value;
  let checkBox = document.getElementById(status.id);

  if (checkBox.checked) {
    document.getElementById("attachChecklist").innerHTML =
      "Attachment of DC Checklist*";
    document.getElementById(element).removeAttribute("disabled");
    document.getElementById(element).setAttribute("mandatory", "");
    checkBox.removeAttribute("checked");
    checkBox.removeAttribute("mandatory");

    if (email != null && email !== "") {
      document.getElementById("Member_Email_Address1_QP10_1").value = email;
    }
  } else {
    document.getElementById("attachChecklist").innerHTML =
      "Attachment of DC Checklist";
    checkBox.setAttribute("checked", "");
    checkBox.setAttribute("mandatory", "");
    document.getElementById(element).removeAttribute("mandatory");
    document.getElementById(element).setAttribute("disabled", "");
    document.getElementById(element).value = "";
  }
}

function Member_Member_Name_QP10_change() {
  let email = document.getElementById("Member_Email_Address1_QP10").value;
  let checkBox = document.getElementById("DeclByQualPers_ThePartOfProj14");
  if (checkBox.hasAttribute("checked")) {
    document.getElementById("Member_Email_Address1_QP10_1").value = "";
  } else {
    document.getElementById("Member_Email_Address1_QP10_1").value = email;
  }
}

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