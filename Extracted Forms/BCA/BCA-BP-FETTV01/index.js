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

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function SubmChec_SheeOfAppe_checked(element) {
  let refId = element.id;

  switch (refId) {
    case "SubmChec_SheeOfAppe120":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfAppe110_aste").innerHTML = "*";
        document
          .getElementById("SubmChec_SheeOfAppe110")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfAppe110")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfAppe110_aste").innerHTML = "";
        document
          .getElementById("SubmChec_SheeOfAppe110")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfAppe110")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfAppe110").value = "";
      }
      break;
    case "SubmChec_SheeOfAppe220":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfAppe210_aste").innerHTML = "*";
        document
          .getElementById("SubmChec_SheeOfAppe210")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfAppe210")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfAppe210_aste").innerHTML = "";
        document
          .getElementById("SubmChec_SheeOfAppe210")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfAppe210")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfAppe210").value = "";
      }
      break;
    case "SubmChec_SheeOfAppe320":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfAppe310_aste").innerHTML = "*";
        document
          .getElementById("SubmChec_SheeOfAppe310")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfAppe310")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfAppe310_aste").innerHTML = "";
        document
          .getElementById("SubmChec_SheeOfAppe310")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfAppe310")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfAppe310").value = "";
      }
      break;
    case "SubmChec_SheeOfAppe420":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfAppe410_aste").innerHTML = "*";
        document
          .getElementById("SubmChec_SheeOfAppe410")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfAppe410")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfAppe410_aste").innerHTML = "";
        document
          .getElementById("SubmChec_SheeOfAppe410")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfAppe410")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfAppe410").value = "";
      }
      break;
    case "SubmChec_SheeOfDetaCalc20":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfDetaCalc10_aste").innerHTML =
          "*";
        document
          .getElementById("SubmChec_SheeOfDetaCalc10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfDetaCalc10")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfDetaCalc10_aste").innerHTML =
          "";
        document
          .getElementById("SubmChec_SheeOfDetaCalc10")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfDetaCalc10")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfDetaCalc10").value = "";
      }
      break;
    case "SubmChec_SheeOfDrawSket20":
      if (element.checked) {
        document.getElementById("SubmChec_SheeOfDrawSket10_aste").innerHTML =
          "*";
        document
          .getElementById("SubmChec_SheeOfDrawSket10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_SheeOfDrawSket10")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("SubmChec_SheeOfDrawSket10_aste").innerHTML =
          "";
        document
          .getElementById("SubmChec_SheeOfDrawSket10")
          .removeAttribute("mandatory");
        document
          .getElementById("SubmChec_SheeOfDrawSket10")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_SheeOfDrawSket10").value = "";
      }
      break;
  }
}

function SubmChec_FacaFaciOTTV_checked(element) {
  let refId = element.id;

  let field1Group = [
    document.getElementById("SubmChec_Faca1FaciOTTV10"),
    document.getElementById("SubmChec_Faca1FaciOTTV20"),
  ];
  let aste1 = document.getElementById("SubmChec_Faca1FaciOTTV10_aste");
  let aste1b = document.getElementById("SubmChec_Faca1FaciOTTV10_aste2");
  let field2Group = [
    document.getElementById("SubmChec_Faca2FaciOTTV10"),
    document.getElementById("SubmChec_Faca2FaciOTTV20"),
  ];
  let aste2 = document.getElementById("SubmChec_Faca2FaciOTTV10_aste");
  let aste2b = document.getElementById("SubmChec_Faca2FaciOTTV10_aste2");
  let field3Group = [
    document.getElementById("SubmChec_Faca3FaciOTTV10"),
    document.getElementById("SubmChec_Faca3FaciOTTV20"),
  ];
  let aste3 = document.getElementById("SubmChec_Faca3FaciOTTV10_aste");
  let aste3b = document.getElementById("SubmChec_Faca3FaciOTTV10_aste2");
  let field4Group = [
    document.getElementById("SubmChec_Faca4FaciOTTV10"),
    document.getElementById("SubmChec_Faca4FaciOTTV20"),
  ];
  let aste4 = document.getElementById("SubmChec_Faca4FaciOTTV10_aste");
  let aste4b = document.getElementById("SubmChec_Faca4FaciOTTV10_aste2");
  let field5Group = [
    document.getElementById("SubmChec_Faca5FaciOTTV10"),
    document.getElementById("SubmChec_Faca5FaciOTTV20"),
  ];
  let aste5 = document.getElementById("SubmChec_Faca5FaciOTTV10_aste");
  let aste5b = document.getElementById("SubmChec_Faca5FaciOTTV10_aste2");
  let field6Group = [
    document.getElementById("SubmChec_Faca6FaciOTTV10"),
    document.getElementById("SubmChec_Faca6FaciOTTV20"),
  ];
  let aste6 = document.getElementById("SubmChec_Faca6FaciOTTV10_aste");
  let aste6b = document.getElementById("SubmChec_Faca6FaciOTTV10_aste2");
  let field7Group = [
    document.getElementById("SubmChec_Faca7FaciOTTV10"),
    document.getElementById("SubmChec_Faca7FaciOTTV20"),
  ];
  let aste7 = document.getElementById("SubmChec_Faca7FaciOTTV10_aste");
  let aste7b = document.getElementById("SubmChec_Faca7FaciOTTV10_aste2");
  let field8Group = [
    document.getElementById("SubmChec_Faca8FaciOTTV10"),
    document.getElementById("SubmChec_Faca8FaciOTTV20"),
  ];
  let aste8 = document.getElementById("SubmChec_Faca8FaciOTTV10_aste");
  let aste8b = document.getElementById("SubmChec_Faca8FaciOTTV10_aste2");

  switch (refId) {
    case "SubmChec_Faca1FaciOTTV30":
      if (element.checked) {
        for (let fields of field1Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste1.innerHTML = "*";
          aste1b.innerHTML = "*";
        }
      } else {
        for (let fields of field1Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste1.innerHTML = "";
          aste1b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca2FaciOTTV30":
      if (element.checked) {
        for (let fields of field2Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste2.innerHTML = "*";
          aste2b.innerHTML = "*";
        }
      } else {
        for (let fields of field2Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste2.innerHTML = "";
          aste2b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca3FaciOTTV30":
      if (element.checked) {
        for (let fields of field3Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste3.innerHTML = "*";
          aste3b.innerHTML = "*";
        }
      } else {
        for (let fields of field3Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste3.innerHTML = "";
          aste3b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca4FaciOTTV30":
      if (element.checked) {
        for (let fields of field4Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste4.innerHTML = "*";
          aste4b.innerHTML = "*";
        }
      } else {
        for (let fields of field4Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste4.innerHTML = "";
          aste4b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca5FaciOTTV30":
      if (element.checked) {
        for (let fields of field5Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste5.innerHTML = "*";
          aste5b.innerHTML = "*";
        }
      } else {
        for (let fields of field5Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste5.innerHTML = "";
          aste5b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca6FaciOTTV30":
      if (element.checked) {
        for (let fields of field6Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste6.innerHTML = "*";
          aste6b.innerHTML = "*";
        }
      } else {
        for (let fields of field6Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste6.innerHTML = "";
          aste6b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca7FaciOTTV30":
      if (element.checked) {
        for (let fields of field7Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste7.innerHTML = "*";
          aste7b.innerHTML = "*";
        }
      } else {
        for (let fields of field7Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste7.innerHTML = "";
          aste7b.innerHTML = "";
        }
      }
      break;
    case "SubmChec_Faca8FaciOTTV30":
      if (element.checked) {
        for (let fields of field8Group) {
          fields.removeAttribute("disabled");
          fields.setAttribute("mandatory", "");
          aste8.innerHTML = "*";
          aste8b.innerHTML = "*";
        }
      } else {
        for (let fields of field8Group) {
          fields.removeAttribute("mandatory");
          fields.setAttribute("disabled", "");
          fields.removeAttribute("data-invalid");
          fields.removeAttribute("data-invalid-message");
          fields.value = "";
          aste8.innerHTML = "";
          aste8b.innerHTML = "";
        }
      }
      break;
  }
}

function SubmChec_TheAverOTTVOf20_checked(element) {
  if (element.checked) {
    document.getElementById("SubmChec_TheAverOTTVOf10_aste").innerHTML = "*";
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .removeAttribute("disabled");
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("SubmChec_TheAverOTTVOf10_aste").innerHTML = "";
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .removeAttribute("mandatory");
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .setAttribute("disabled", "");
    document.getElementById("SubmChec_TheAverOTTVOf10").value = "";
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .removeAttribute("data-invalid");
    document
      .getElementById("SubmChec_TheAverOTTVOf10")
      .removeAttribute("data-invalid-message");
  }
}

function DeclByQualPers_ITheQualPers10_1_change(element) {
  let textbox = document.getElementById("DeclByQualPers_ShallBeHaveBeen10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function ToAgency_id_change(element) {
  let to = document.getElementById("Addr20");
  let el = document.getElementById("Addr10");

  if (el.value == "BCA") {
    to.value =
      "Commissioner of Builder Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550";
  } else {
    to.value =
      "Defence Science & Technology Agency\nBuilding & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
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

function Asterisk(checkbox, asterisk) {
  let aste = document.getElementById(asterisk);

  if (checkbox.checked) {
    aste.innerHTML = "*";
  } else {
    aste.innerHTML = "";
  }
}

function removeUenError(uenID) {
  let uenField = document.getElementById(uenID);

  uenField.value = "";
  uenField.removeAttribute("data-invalid");
  uenField.removeAttribute("data-invalid-message");
}

function errorNotInRange(element) {
  let field = document.getElementById(element.id);

  if (field.value) {
    if (field.value > 9999.99) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Value can't be more than 9999.99"
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

function maxV(element, event, length) {
  let field = document.getElementById(element.id);
  let finalLen = length - 1;
  if (event.keyCode != 46 && !field.value.includes(".")) {
    if (field.value.length > finalLen) {
      event.preventDefault();
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
              "SubmChec_Faca1FaciOTTV20",
              "SubmChec_Faca2FaciOTTV20",
              "SubmChec_Faca3FaciOTTV20",
              "SubmChec_Faca4FaciOTTV20",
              "SubmChec_Faca5FaciOTTV20",
              "SubmChec_Faca6FaciOTTV20",
              "SubmChec_Faca7FaciOTTV20",
              "SubmChec_Faca8FaciOTTV20",
              "SubmChec_TheAverOTTVOf10",
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
