function PartOfAppl_BuilProjPlanNumb_WorkAffeMinorDrain10_change(value) {
  let elementIDs = [
    "DeteTank_GravDisc10",
    "DeteTank_PumpDisc10",
    "ABCWateDesiFeatk10",
    "FlooProtMeas10",
    "PumpDrainSystWith10",
    "DrainWrk_PumpDraiSystWith10",
    "DrainWrk_PumpDraiSystWithNo10",
    "DrainReceRuno10",
    "RoadDrain10",
    "EntrCulv10",
    "DraiRese10"
  ];

  if (value) {
    for (let element of elementIDs) {
      document.getElementById(element).removeAttribute("disabled");
    }
  } else {
    for (let element of elementIDs) {
      document.getElementById(element).checked = false;
      document.getElementById(element).setAttribute("disabled", "");
    }
  }
}

function toggleCaseIDAndDate(value, textbox, date) {
  let txtBox = document.getElementById(textbox);
  let dateField = document.getElementById(date);

  if (value) {
    txtBox.value = "";
    txtBox.setAttribute("disabled", "");
    txtBox.removeAttribute("mandatory");
    dateField.removeAttribute("mandatory");
    dateField.setAttribute("disabled", "");
    dateField.value = "";
  } else {
    txtBox.removeAttribute("disabled");
    txtBox.setAttribute("mandatory", "");
    dateField.removeAttribute("disabled");
  }
}

function enableDate(value, date) {
  let dateField = document.getElementById(date);

  if (value.checked) {
    dateField.removeAttribute("disabled");
    dateField.setAttribute("mandatory", "");
  } else {
    dateField.value = "";
    dateField.removeAttribute("mandatory");
    dateField.setAttribute("disabled", "");
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  console.log(formCount);
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  let datefield = document.getElementById(
    "PartOfAppl_DateCBPU_DC_Clearance_A1"
  );
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  datefield.value = today;
});

function IAmTheQual_change(element) {
  let checkBox = document.getElementById(element.id);

  if (checkBox.checked) {
    checkBox.removeAttribute("checked");
  } else {
    checkBox.setAttribute("checked", "");
  }
}

function fileRef_change(el) {
  if (el.id === "PartOfAppl_RefeNumb_CleaCertForDetaPlanDrainOn10") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn10")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn10")
        .removeAttribute("mandatory");
    }
  } else if (el.id === "PartOfAppl_RefeNumb_CleaCertForDetaPlanDrainOn20") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn20")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn20")
        .removeAttribute("mandatory");
    }
  } else if (el.id === "PartOfAppl_RefeNumb_CleaCertForDetaPlanDrainOn30") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn30")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn30")
        .removeAttribute("mandatory");
    }
  } else if (el.id === "PartOfAppl_RefeNumb_CleaCertForDetaPlanDrainOn40") {
    if (el.value !== "" && el.value !== null) {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn40")
        .setAttribute("mandatory", "");
    } else {
      document
        .getElementById("PartOfAppl_Date_CleaCertForDetaPlanDrainOn40")
        .removeAttribute("mandatory");
    }
  }
}

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
          // if (
          //   [
          //     "DetaOfDemoWork_TotaFlooAreaTo10",
          //     "DetaOfDemoWork_TotaFlooAreaTo20",
          //     "DemoWastQuan_QuanOfConcWast10",
          //     "DemoWastQuan_QuanOfBricWast10",
          //     "DemoWastQuan_QuanOfOtheWast10",
          //     "DemoWastQuan_TotaDemoWastColl10",
          //     "Project_ProjCost10",
          //     "DeclByThePers_OfPE10",
          //     "DeclByThePers_OfPE30",
          //     "MemberRole_Professional_No_PE10",
          //     "MemberRole_Professional_No_PE20",
          //     "SubmChec_UndeTheBuilCont_Appl_BuilScorIs10",
          //     "MemberRole_Professional_No_PE90",
          //     "SubmChec_UndeTheBuilCont_GFA10",
          //     "MemberRole_Professional_No_PE80",
          //   ].includes(id) &&
          //   jsonData["FormName10"].includes("BCA-BE-PERMIT")
          // ) {
          //   jsonData[id] = +targetElement.value + "";
          // } else if ([].includes(id)) {

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
