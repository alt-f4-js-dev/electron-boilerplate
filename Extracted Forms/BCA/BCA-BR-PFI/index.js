let PartOfBuil_Id = "PartOfBuil_SingOwne10";

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

function ApplType_change(element) {
  let refId = element.id;
  resetparticularsOfBldg(false);
  resetparticularsOfOwner(false);
  facaInspCert(false);
  facaInvsCert(false);
  certForRprs(false);
  resetConfirmation(false);
  resetparticularsOfQPandConfirmation();
  resetDeclarationofQp();
  document.querySelector("[target='page3']").setAttribute("hidden", "");
  document.getElementById("confirmAppoint").setAttribute("hidden", "");
  document.getElementById("facaInspCert").setAttribute("hidden", "");
  document.getElementById("facaInvsCert").setAttribute("hidden", "");
  document.getElementById("certForRprs").setAttribute("hidden", "");
  document.getElementById("declaQp").setAttribute("hidden", "");
  document
    .getElementById("DeclOfQP_Type_Atta_Others_field10")
    .removeAttribute("mandatory");
  document
    .getElementById("DeclOfQP_Type_Atta_Others_field10")
    .setAttribute("hidden", "");
  document.getElementById("DeclOfQP_Type_Atta_Others_field10").value = "";
  switch (refId) {
    case "App_Type_Comp_Person10":
      document
        .getElementsByTagName("cn2-master-head")[0]
        .setAttribute(
          "title",
          "APPOINTMENT OF COMPETENT PERSON<br>The Building Control Act (Cap 29) [Section 28]"
        );
      document.querySelector("[target='page3']").removeAttribute("hidden");
      document
        .querySelector("[target='page4']")
        .setAttribute("page-number", "4");
      document
        .querySelector("[target='page4']")
        .setAttribute(
          "label",
          "Particulars and Confirmation of Appointment by Competent"
        );
      document.getElementById("confirmAppoint").removeAttribute("hidden");
      resetparticularsOfBldg(true);
      resetparticularsOfOwner(true);
      resetConfirmation(true);
      break;
    case "App_Type_Facade_Insp_Cert10":
      facaInspCert(true);
      document
        .getElementsByTagName("cn2-master-head")[0]
        .setAttribute(
          "title",
          "FACADE INSPECTION CERTIFICATION<br>The Building Control Act (Cap 29) [Section 28]"
        );
      document
        .querySelector("[target='page4']")
        .setAttribute("page-number", "3");
      document
        .querySelector("[target='page4']")
        .setAttribute(
          "label",
          "Particulars and Declaration by Competent Person"
        );
      document.getElementById("facaInspCert").removeAttribute("hidden");
      document.getElementById("declaQp").removeAttribute("hidden");
      document.getElementById("declaLabel").innerHTML =
        "Declaration by Competent Person*";
      break;
    case "App_Type_Facade_Inv_Cert10":
      facaInvsCert(true);
      document
        .getElementsByTagName("cn2-master-head")[0]
        .setAttribute(
          "title",
          "FULL FACADE INVESTIGATION CERTIFICATION<br>The Building Control Act (Cap 29) [Section 28]"
        );
      document
        .querySelector("[target='page4']")
        .setAttribute("page-number", "3");
      document
        .querySelector("[target='page4']")
        .setAttribute(
          "label",
          "Particulars and Declaration by Competent Person"
        );
      document.getElementById("facaInvsCert").removeAttribute("hidden");
      document.getElementById("declaQp").removeAttribute("hidden");
      document.getElementById("declaLabel").innerHTML =
        "Declaration by Competent Person";
      break;
    case "App_Type_Cert_Repairs10":
      certForRprs(true);
      document
        .getElementsByTagName("cn2-master-head")[0]
        .setAttribute(
          "title",
          "CERTIFICATION FOR REPAIRS<br>The Building Control Act (Cap 29) [Section 28]"
        );
      document
        .querySelector("[target='page4']")
        .setAttribute("page-number", "3");
      document
        .querySelector("[target='page4']")
        .setAttribute(
          "label",
          "Particulars and Declaration by Competent Person"
        );
      document.getElementById("certForRprs").removeAttribute("hidden");
      document.getElementById("declaQp").removeAttribute("hidden");
      document.getElementById("declaLabel").innerHTML =
        "Declaration by Competent Person*";
      break;
  }
}

function resetparticularsOfBldg(condition) {
  let textBox = [
    document.getElementById("PartOfBuil_NotiRefeNo10"),
    document.getElementById("PartOfBuil_NotiRefeNo20"),
    document.getElementById("PartOfBuil_NotiRefeNo30"),
    document.getElementById("PartOfBuil_Lot_Mukim_No10"),
    document.getElementById("PartOfBuil_Lot_Mukim_field10"),
    document.getElementById("PartOfBuil_Buil_Address10"),
    document.getElementById("PartOfBuil_BP_ST_No10"),
    document.getElementById("PartOfBuil_BP_ST_field10"),
    document.getElementById("ProjectAddress_Building_Name10"),
    document.getElementById("Decl_Owner_Role10"),
    document.getElementById("Decl_Owner_Faca_Buil_Type10"),
    document.getElementById("Decl_Owner_Role20"),
    document.getElementById("Decl_Owner_Faca_Buil_Type20"),
  ];

  for (let text of textBox) {
    text.value = "";
    if (text.hasAttribute("data-invalid")) {
      text.removeAttribute("data-invalid");
    }
  }

  if (condition) {
    document.getElementById("planType").removeAttribute("hidden");
    document.getElementById("lotMukim").removeAttribute("hidden");
  } else {
    document.getElementById("planType").setAttribute("hidden", "");
    document.getElementById("lotMukim").setAttribute("hidden", "");
  }
}

function resetparticularsOfOwner(condition) {
  let textBox = [
    document.getElementById("PartOfOwner_Member_Name10"),
    document.getElementById("PartOfOwner_Member_Firm_Name10"),
    document.getElementById("PartOfOwner_Member_UEN10"),
    document.getElementById("PartOfOwner_Member_Address10"),
    document.getElementById("PartOfOwner_Member_Tele_No10"),
    document.getElementById("PartOfOwner_Member_Hand_No10"),
    document.getElementById("PartOfOwner_Member_Email_Add10"),
    document.getElementById("Decl_Owner_Role10"),
    document.getElementById("Decl_Owner_Faca_Buil_Type10"),
    document.getElementById("Decl_Owner_Role20"),
    document.getElementById("Decl_Owner_Faca_Buil_Type20"),
  ];
  let checkBox1 = document.getElementById("Decl_Owner_Appo_Comp_Pers_Chkbx10");
  let checkBox2 = document.getElementById("Decl_Owner_Auth_Comp_Pers_Chkbx10");

  for (let text of textBox) {
    text.value = "";
    if (text.hasAttribute("data-invalid")) {
      text.removeAttribute("data-invalid");
    }
    if (text.hasAttribute("mandatory")) {
      text.removeAttribute("mandatory");
      text.setAttribute("disabled", "");
    }
  }

  document.getElementById("PartOfOwner_Member_Owner10").checked = true;
  document.getElementById("PartOfOwner_Member_MCST10").checked = false;
  document.getElementById("mcstno").innerHTML = "";
  document.getElementById("PartOfOwner_Member_MCST_No10").value = "";
  document
    .getElementById("PartOfOwner_Member_MCST_No10")
    .setAttribute("hidden", "");

  if (condition) {
    document
      .getElementById("PartOfOwner_Member_Tele_No10")
      .setAttribute("mandatory", "");
    document
      .getElementById("PartOfOwner_Member_Tele_No10")
      .removeAttribute("disabled");
    document
      .getElementById("PartOfOwner_Member_Email_Add10")
      .setAttribute("mandatory", "");
    document
      .getElementById("PartOfOwner_Member_Email_Add10")
      .removeAttribute("disabled");

    checkBox1.setAttribute("checked", "");
    checkBox1.setAttribute("mandatory", "");
    checkBox1.checked = false;
    checkBox2.setAttribute("checked", "");
    checkBox2.setAttribute("mandatory", "");
    checkBox2.checked = false;

    document.getElementById("qualPersLabel").innerHTML = "Section II";
  } else {
    document
      .getElementById("PartOfOwner_Member_Tele_No10")
      .removeAttribute("mandatory");
    document
      .getElementById("PartOfOwner_Member_Email_Add10")
      .removeAttribute("mandatory");

    checkBox1.removeAttribute("checked");
    checkBox1.removeAttribute("mandatory");
    checkBox1.checked = false;
    checkBox2.removeAttribute("checked");
    checkBox2.removeAttribute("mandatory");
    checkBox2.checked = false;
    document.getElementById("qualPersLabel").innerHTML = "Section I";
  }
}

function facaInspCert(condition) {
  let checkBox = [
    document.getElementById("DeclOfQualPers_Chkbox10"),
    document.getElementById("DeclOfQualPers_Chkbox20"),
    document.getElementById("DeclOfQP_Type_Faca_Chkbox10"),
    document.getElementById("DeclOfQP_Chkbox30"),
    document.getElementById("DeclOfQP_Chkbox40"),
  ];

  if (condition) {
    for (let chkBox of checkBox) {
      chkBox.setAttribute("checked", "");
      chkBox.setAttribute("mandatory", "");
    }
  } else {
    for (let chkBox of checkBox) {
      chkBox.removeAttribute("checked");
      chkBox.removeAttribute("mandatory");
    }
  }
}

function facaInvsCert(condition) {
  let checkBox = [
    document.getElementById("DeclOfQP_Chkbox50"),
    document.getElementById("DeclOfQP_Chkbox70"),
    document.getElementById("DeclOfQP_Chkbox80"),
  ];

  if (condition) {
    for (let chkBox of checkBox) {
      chkBox.setAttribute("checked", "");
      chkBox.setAttribute("mandatory", "");
    }
  } else {
    for (let chkBox of checkBox) {
      chkBox.removeAttribute("checked");
      chkBox.removeAttribute("mandatory");
    }
  }
}

function certForRprs(condition) {
  let checkBox = [
    document.getElementById("DeclOfQP_Chkbox90"),
    document.getElementById("DeclOfQP_Chkbox100"),
  ];

  if (condition) {
    for (let chkBox of checkBox) {
      chkBox.setAttribute("checked", "");
      chkBox.setAttribute("mandatory", "");
    }
  } else {
    for (let chkBox of checkBox) {
      chkBox.removeAttribute("checked");
      chkBox.removeAttribute("mandatory");
    }
  }
}

function resetparticularsOfQPandConfirmation() {
  let textBox = [
    document.getElementById("PartOfQualPers_Name10"),
    document.getElementById("PartOfQualPers_Regi_No10"),
    document.getElementById("PartOfQualPers_Firm_Name10"),
    document.getElementById("PartOfQualPers_UEN10"),
    document.getElementById("PartOfQualPers_Add10"),
    document.getElementById("PartOfQualPers_Hand_No10"),
    document.getElementById("PartOfQualPers_Email_Add10"),
  ];

  let select = [
    document.getElementById("ConfOfApp_Role10"),
    document.getElementById("ConfOfAppRole_Name10"),
    document.getElementById("ConfOfApp_Faca_Buil_Type10"),
    document.getElementById("ConfOfApp_Faca_Buil_Type20"),
    document.getElementById("ConfOfApp_Role_Name20"),
  ];

  let checkBox = [
    document.getElementById("ConfOfApp_App_Pers_Chkbox10"),
    document.getElementById("ConfOfApp_Faca_Buil_Type_Chkbox10"),
    document.getElementById("ConfOfApp_Decl_Chkbox10"),
  ];

  document.getElementById("PartOfQualPers_Arch10").checked = false;
  document
    .getElementById("PartOfQualPers_Arch10")
    .setAttribute("mandatory", "");
  document.getElementById("PartOfQualPers_Arch10").setAttribute("checked", "");
  document.getElementById("PartOfQualPers_Prof_Eng10").checked = false;
  document
    .getElementById("PartOfQualPers_Prof_Eng10")
    .setAttribute("mandatory", "");
  document
    .getElementById("PartOfQualPers_Prof_Eng10")
    .setAttribute("checked", "");

  for (let text of textBox) {
    text.value = "";
    if (text.hasAttribute("data-invalid")) {
      text.removeAttribute("data-invalid");
    }
  }

  for (let sel of select) {
    sel.value = "";
    if (sel.id != "ConfOfApp_Role10") {
      sel.removeAttribute("mandatory");
      sel.setAttribute("disabled", "");
    } else {
      sel.removeAttribute("mandatory");
    }
  }

  for (let chk of checkBox) {
    chk.checked = false;
    chk.removeAttribute("checked");
    chk.removeAttribute("mandatory");
  }
}

function resetConfirmation(condition) {
  let select = document.getElementById("ConfOfApp_Role10");

  let checkBox = [
    document.getElementById("ConfOfApp_App_Pers_Chkbox10"),
    document.getElementById("ConfOfApp_Faca_Buil_Type_Chkbox10"),
    document.getElementById("ConfOfApp_Decl_Chkbox10"),
  ];

  if (condition) {
    select.setAttribute("mandatory", "");

    for (let checkBx of checkBox) {
      checkBx.setAttribute("checked", "");
      checkBx.setAttribute("mandatory", "");
    }
  } else {
    select.removeAttribute("mandatory");

    for (let checkBx of checkBox) {
      checkBx.removeAttribute("checked", "");
      checkBx.removeAttribute("mandatory", "");
    }
  }
}

function resetDeclarationofQp() {
  let addBtn = document.getElementById("DeclOfQP_Type_Faca_Add10");
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  let addBtn1 = document.getElementById("Add10");
  let deleteBtn1 = document.querySelectorAll(".deleteBtn2");
  let parent = "pfi-container";
  let tempDiv2 = document.getElementById(parent).querySelectorAll("div");
  let parent1 = "decla-container";
  let tempDiv1 = document.getElementById(parent1).querySelectorAll("div");

  //Inspection Declaration
  let inpectionTable = document.getElementById("facaInspCert");
  let inspTextBox = inpectionTable.getElementsByTagName("cn2-textbox");
  let inspCheckBox = inpectionTable.getElementsByTagName("cn2-checkbox");
  let inspSelect = inpectionTable.getElementsByTagName("cn2-select");
  let inspDate = inpectionTable.getElementsByTagName("cn2-datefield");

  for (let instTxt of inspTextBox) {
    if (
      instTxt.id != "DeclOfQP_Type_Buil_Others_field10" &&
      instTxt.id != "DeclOfQP_Type_Faca_Others_field10"
    ) {
      instTxt.removeAttribute("mandatory");
      instTxt.setAttribute("disabled", "");
      instTxt.value = "";
    } else {
      instTxt.removeAttribute("mandatory");
      instTxt.setAttribute("hidden", "");
      instTxt.value = "";
    }
    if (instTxt.id == "DeclOfQP_Buil_Deta_No_Buildings10") {
      instTxt.value = "";
    }
  }

  for (let instSel of inspSelect) {
    instSel.removeAttribute("mandatory");
    instSel.setAttribute("disabled", "");
    instSel.value = "";
  }

  for (let instDate of inspDate) {
    instDate.removeAttribute("mandatory");
    instDate.setAttribute("disabled", "");
    instDate.value = "";
  }

  for (let instChk of inspCheckBox) {
    instChk.removeAttribute("mandatory");
    instChk.removeAttribute("checked");
    instChk.checked = false;

    if (
      instChk.id != "DeclOfQualPers_Chkbox10" &&
      instChk.id != "DeclOfQualPers_Chkbox20" &&
      instChk.id != "DeclOfQP_Type_Faca_Chkbox10" &&
      instChk.id != "DeclOfQP_Chkbox30" &&
      instChk.id != "DeclOfQP_Chkbox40"
    ) {
      instChk.setAttribute("disabled", "");
    }
  }

  for (let div of tempDiv2) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "form1", parent);
    }
  }

  for (let div of tempDiv1) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "formA1", parent1);
    }
  }

  addBtn.setAttribute("disabled", "");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].setAttribute("disabled", "");
  }

  addBtn1.setAttribute("disabled", "");
  for (let i = 0; i < deleteBtn1.length; i++) {
    deleteBtn1[i].setAttribute("disabled", "");
  }

  //Investigation Declaration
  let investiTable = document.getElementById("facaInvsCert");
  let invsTextBox = investiTable.getElementsByTagName("cn2-textbox");
  let invsCheckBox = investiTable.getElementsByTagName("cn2-checkbox");
  let invsSelect = investiTable.getElementsByTagName("cn2-select");
  let invsDate = investiTable.getElementsByTagName("cn2-datefield");
  let addBtn2 = document.getElementById("addBtn10");
  let deleteBtn2 = document.querySelectorAll(".deleteBtn3");

  addBtn2.setAttribute("disabled", "");
  let parent2 = "decla1-container";
  let tempDiv3 = document.getElementById(parent2).querySelectorAll("div");

  for (let div of tempDiv3) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "formB1", parent2);
    }
  }

  for (let i = 0; i < deleteBtn2.length; i++) {
    deleteBtn2[i].setAttribute("disabled", "");
  }

  for (let invsTxt of invsTextBox) {
    invsTxt.removeAttribute("mandatory");
    invsTxt.setAttribute("disabled", "");
    invsTxt.value = "";
  }

  for (let instSel of invsSelect) {
    instSel.removeAttribute("mandatory");
    instSel.setAttribute("disabled", "");
    instSel.value = "";
  }

  for (let instDate of invsDate) {
    instDate.removeAttribute("mandatory");
    instDate.setAttribute("disabled", "");
    instDate.value = "";
  }

  for (let instChk of invsCheckBox) {
    instChk.removeAttribute("mandatory");
    instChk.removeAttribute("checked");
    instChk.checked = false;

    if (
      instChk.id != "DeclOfQP_Chkbox50" &&
      instChk.id != "DeclOfQP_Chkbox60" &&
      instChk.id != "DeclOfQP_Chkbox70" &&
      instChk.id != "DeclOfQP_Chkbox80"
    ) {
      instChk.setAttribute("disabled", "");
    }
  }

  //Certificate
  //Inspection Declaration
  let certTable = document.getElementById("certForRprs");
  let certTextBox = certTable.getElementsByTagName("cn2-textbox");
  let certCheckBox = certTable.getElementsByTagName("cn2-checkbox");
  let certSelect = certTable.getElementsByTagName("cn2-select");
  let certDate = certTable.getElementsByTagName("cn2-datefield");

  for (let certTxt of certTextBox) {
    certTxt.removeAttribute("mandatory");
    certTxt.setAttribute("disabled", "");
    certTxt.value = "";
  }

  for (let certSel of certSelect) {
    certSel.removeAttribute("mandatory");
    certSel.setAttribute("disabled", "");
    certSel.value = "";
  }

  for (let certrDate of certDate) {
    certrDate.removeAttribute("mandatory");
    certrDate.setAttribute("disabled", "");
    certrDate.value = "";
  }

  for (let certChk of certCheckBox) {
    certChk.removeAttribute("mandatory");
    certChk.removeAttribute("checked");
    certChk.checked = false;

    if (
      certChk.id != "DeclOfQP_Chkbox90" &&
      certChk.id != "DeclOfQP_Chkbox100"
    ) {
      certChk.setAttribute("disabled", "");
    }
  }
}

// to validate the inputted date
function validateDate(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  let d = new Date(year, month - 1, day);
  if (
    (d.getFullYear() != year &&
      d.getMonth() != month - 1 &&
      d.getDate() != day) ||
    year > 2999 ||
    year < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  } else if (
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

function removeRadioMandatory(pass, radios) {
  if (pass) {
    for (let radio of radios) {
      radio.removeAttribute("mandatory");
      radio.removeAttribute("checked");
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("mandatory", "");
      radio.setAttribute("checked", "");
      radio.checked = false;
    }
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

function PartOfTheOWNER_change(element) {
  let radio = document.getElementById(element.id);
  let textbox = document.getElementById("PartOfOwner_Member_MCST_No10");

  switch (radio.id) {
    case "PartOfOwner_Member_Owner10":
      textbox.setAttribute("hidden", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      document.getElementById("mcstno").innerHTML = "";
      break;
    case "PartOfOwner_Member_MCST10":
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("hidden");
      document.getElementById("mcstno").innerHTML = "No. *";
      break;
  }
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
      "Plan Type should not be 000. Please try again"
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

// function lotNoValidate(el) {
//   let maxlength = document.getElementById(el.id).getAttribute("maxlength");
//   let uenField = document.getElementById(el.id);
//   if (el.value.trim().length !== maxlength && el.value.trim() !== "") {
//     if (/\s/.test(el.value)) {
//       document.getElementById(el.id).setAttribute("data-invalid", "");
//       document
//         .getElementById(el.id)
//         .setAttribute(
//           "data-invalid-message",
//           "This field is limited to 6 characters, the format is #####@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
//         );
//     } else {
//       uenField.removeAttribute("data-invalid");
//       uenField.removeAttribute("data-invalid-message");
//     }
//   } else if (el.value.trim() === "") {
//     if (uenField.hasAttribute("mandatory")) {
//       uenField.removeAttribute("mandatory");
//       uenField.setAttribute("mandatory", "");
//     }
//     uenField.value = "";
//     uenField.removeAttribute("data-invalid");
//     uenField.removeAttribute("data-invalid-message");
//   } else {
//     uenField.removeAttribute("data-invalid");
//     uenField.removeAttribute("data-invalid-message");
//   }
// }

function disableDelete(containerName, className) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;

  let noBldg = document.querySelectorAll(
    "[prefix = 'DeclOfQP_Buil_Deta_No_Buildings']"
  );

  for (let noBldgNo of noBldg) {
    noBldgNo.value = formCount;
  }
  if (formCount < 2) {
    document.querySelector(className).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(className);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function yearValidation(year, ev) {
  var text = /^[0-9]+$/;
  let yearVal = document.getElementById(year.id);
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
  } else {
    showMessage("Year Field should be YYYY format. Please try again");
    yearVal.value = "";
  }
}

function monthValidation(month, ev) {
  var text = /^[0-9]+$/;
  let monthVal = document.getElementById(month.id);
  if (
    ev.type == "blur" ||
    (monthVal.value.length == 4 && ev.keyCode != 8 && ev.keyCode != 46)
  ) {
    if (monthVal.value != 0) {
      if (monthVal.value != "" && !text.test(monthVal.value)) {
        showMessage("Please Enter Numeric Values Only");
        monthVal.value = "";
        return false;
      }

      if (monthVal.value.length != 2) {
        showMessage("Month Field should be MM format. Please try again");
        monthVal.value = "";
        return false;
      }

      if (monthVal.value > 12 && monthVal.value != 0) {
        showMessage("Month should be in range of 1 to 12");
        monthVal.value = "";
        return false;
      }
      return true;
    }
  }
}

// Function
function updateAgencyUrl(jsonKey, query) {
  const agencyUrl = jsonData[jsonKey];
  let hostname =
    typeof agencyUrl === "object" && agencyUrl.length == 2
      ? typeof agencyUrl[0] === "object"
        ? agencyUrl[0].url
        : agencyUrl[0]
      : typeof agencyUrl === "object"
      ? agencyUrl.url
      : agencyUrl;

  jsonData[jsonKey]["method"] = "GET";
  jsonData[jsonKey]["url"] = hostname;
  jsonData[jsonKey]["params"] = query;
}

//webservice validation
function validatePfiReference() {
  let year = document.getElementById("PartOfBuil_NotiRefeNo10");
  let month = document.getElementById("PartOfBuil_NotiRefeNo20");
  let reference = document.getElementById("PartOfBuil_NotiRefeNo30");
  let agencyURL = jsonData["agencyUrl10"].url;

  if (year.value != "" && month.value != "" && reference.value != "") {
    removeValidationsPsiReference();

    let pfiReference =
      "psiReference=" + year.value + month.value + reference.value;
    updateAgencyUrl("agencyUrl10", pfiReference);
    let dataResponse = ipcRenderer.sendSync(
      "client-request",
      "GET",
      agencyURL,
      pfiReference
    );

    if (dataResponse === 501) {
      // No Webservice
    } else {
      if (typeof dataResponse === "object") {
        if ("Y" == dataResponse.isRecordExist) {
          year.setAttribute("data-valid", "");
          month.setAttribute("data-valid", "");
          reference.setAttribute("data-valid", "");
          month.setAttribute("inline", "2");
        } else if ("N" == dataResponse.isRecordExist) {
          year.setAttribute("data-invalid", "");
          month.setAttribute("data-invalid", "");
          reference.setAttribute("data-invalid", "");
          month.setAttribute("inline", "2");
        } else {
          removeValidationsPsiReference();
        }
      }
    }
  }
}

function removeValidationsPsiReference() {
  let year = document.getElementById("PartOfBuil_NotiRefeNo10");
  let month = document.getElementById("PartOfBuil_NotiRefeNo20");
  let reference = document.getElementById("PartOfBuil_NotiRefeNo30");
  removeValidations(year);
  removeValidations(month);
  removeValidations(reference);

  month.setAttribute("inline", "2");
  reference.setAttribute("inline", "2");
}

function Decl_Owner_change(el) {
  let textbox = [
    document.getElementById("Decl_Owner_Role10"),
    document.getElementById("Decl_Owner_Faca_Buil_Type10"),
  ];

  let textbox2 = [
    document.getElementById("Decl_Owner_Role20"),
    document.getElementById("Decl_Owner_Faca_Buil_Type20"),
  ];
  if (el.id == "Decl_Owner_Appo_Comp_Pers_Chkbx10") {
    if (el.checked) {
      for (let text of textbox) {
        text.removeAttribute("disabled");
        text.setAttribute("mandatory", "");
      }
    } else {
      for (let text of textbox) {
        text.removeAttribute("mandatory");
        text.setAttribute("disabled", "");
        text.value = "";
      }
    }
  } else {
    if (el.checked) {
      for (let text of textbox2) {
        text.removeAttribute("disabled");
        text.setAttribute("mandatory", "");
      }
    } else {
      for (let text of textbox2) {
        text.removeAttribute("mandatory");
        text.setAttribute("disabled", "");
        text.value = "";
      }
    }
  }
}

function ConfOfApp_App_Pers_change(el) {
  let select = [
    document.getElementById("ConfOfAppRole_Name10"),
    document.getElementById("ConfOfApp_Faca_Buil_Type10"),
  ];

  let select2 = [
    document.getElementById("ConfOfApp_Faca_Buil_Type20"),
    document.getElementById("ConfOfApp_Role_Name20"),
  ];

  if (el.id == "ConfOfApp_App_Pers_Chkbox10") {
    if (el.checked) {
      for (let sel of select) {
        sel.removeAttribute("disabled");
        sel.setAttribute("mandatory", "");
      }
    } else {
      for (let sel of select) {
        sel.removeAttribute("mandatory");
        sel.setAttribute("disabled", "");
        sel.value = "";
      }
    }
  } else {
    if (el.checked) {
      for (let sel of select2) {
        sel.removeAttribute("disabled");
        sel.setAttribute("mandatory", "");
      }
    } else {
      for (let sel of select2) {
        sel.removeAttribute("mandatory");
        sel.setAttribute("disabled", "");
        sel.value = "";
      }
    }
  }
}

function DeclOfQualPers_Chkbox_change(el) {
  let refId = el.id;
  switch (refId) {
    case "DeclOfQualPers_Chkbox10":
      let textbox = [
        document.getElementById("DeclOfQualPers_Role10"),
        document.getElementById("DeclOfQualPers_Role_field10"),
        document.getElementById("DeclOfQualPers_From_Date10"),
        document.getElementById("DeclOfQualPers_To_Date10"),
      ];

      if (el.checked) {
        for (let text of textbox) {
          text.removeAttribute("disabled");
          text.setAttribute("mandatory", "");
        }
      } else {
        for (let text of textbox) {
          text.removeAttribute("mandatory");
          text.setAttribute("disabled", "");
          text.value = "";
        }
      }
      break;
    case "DeclOfQualPers_Chkbox20":
      let container = document.getElementById("pfi-container");
      let textBoxes = container.getElementsByTagName("cn2-textbox");
      let datefield = container.getElementsByTagName("cn2-datefield");
      let checkBox = container.getElementsByTagName("cn2-checkbox");

      let addBtn = document.getElementById("DeclOfQP_Type_Faca_Add10");
      let deleteBtn = document.querySelectorAll(".deleteBtn");

      if (el.checked) {
        addBtn.removeAttribute("disabled");
        document.getElementById("DeclOfQP_Buil_Deta_No_Buildings10").value =
          "1";
        for (let text of textBoxes) {
          if (
            text.id != "DeclOfQP_Type_Buil_Others_field10" &&
            text.id != "DeclOfQP_Type_Faca_Others_field10" &&
            text.id != "DeclOfQP_Buil_Deta_No_Buildings10"
          ) {
            text.removeAttribute("disabled");
            text.setAttribute("mandatory", "");
          }
        }

        for (let dateBox of datefield) {
          dateBox.removeAttribute("disabled");
          dateBox.setAttribute("mandatory", "");
        }

        for (let chkbx of checkBox) {
          chkbx.removeAttribute("disabled");
          if (chkbx.hasAttribute("name")) {
            chkbx.setAttribute("mandatory", "");
            chkbx.setAttribute("checked", "");
          }
        }
      } else {
        addBtn.setAttribute("disabled", "");
        document.getElementById("DeclOfQP_Buil_Deta_No_Buildings10").value = "";
        let parent = "pfi-container";
        let tempDiv = document.getElementById(parent).querySelectorAll("div");

        for (let div of tempDiv) {
          if (div.hasAttribute("id")) {
            removeDuplicate(
              div.querySelector("cn2-button").id,
              "form1",
              parent
            );
          }
        }

        for (let i = 0; i < deleteBtn.length; i++) {
          deleteBtn[i].setAttribute("disabled", "");
        }

        for (let text of textBoxes) {
          if (
            text.id != "DeclOfQP_Type_Buil_Others_field10" &&
            text.id != "DeclOfQP_Type_Faca_Others_field10"
          ) {
            text.removeAttribute("mandatory");
            text.setAttribute("disabled", "");
            text.value = "";
          } else {
            text.removeAttribute("mandatory");
            text.setAttribute("hidden", "");
            text.value = "";
          }
          if (text.id == "DeclOfQP_Buil_Deta_No_Buildings10") {
            text.value = "";
          }
        }

        for (let dateBox of datefield) {
          dateBox.removeAttribute("mandatory");
          dateBox.setAttribute("disabled", "");
          dateBox.value = "";
        }

        for (let chkbx of checkBox) {
          chkbx.setAttribute("disabled", "");
          chkbx.removeAttribute("mandatory");
          chkbx.removeAttribute("checked");
          chkbx.checked = false;
        }
      }
      break;
    case "DeclOfQP_Type_Faca_Chkbox10":
      let checkbox = [
        document.getElementById("DeclOfQP_Safe10"),
        document.getElementById("DeclOfQP_Require_Repa10"),
        document.getElementById("DeclOfQP_Unsafe10"),
        document.getElementById("DeclOfQP_ReqFaca_Inves10"),
      ];

      if (el.checked) {
        for (let chckBx of checkbox) {
          chckBx.setAttribute("checked", "");
          chckBx.setAttribute("mandatory", "");
          chckBx.removeAttribute("disabled");
        }
      } else {
        for (let chckBx of checkbox) {
          chckBx.setAttribute("disabled", "");
          chckBx.removeAttribute("mandatory");
          chckBx.removeAttribute("checked");
          chckBx.checked = false;
        }
      }
      break;
    case "DeclOfQP_Chkbox30":
      let containerSect4 = document.getElementById("decla-container");
      let textBoxesSect4 = containerSect4.getElementsByTagName("cn2-textbox");

      let addBtn1 = document.getElementById("Add10");
      let deleteBtn1 = document.querySelectorAll(".deleteBtn2");

      if (el.checked) {
        addBtn1.removeAttribute("disabled");

        for (let facatxtBx of textBoxesSect4) {
          facatxtBx.removeAttribute("disabled");
        }
        document
          .getElementById("DeclOfQP_Deta_Facade_Insp_FI_RegNo10")
          .setAttribute("mandatory", "");
      } else {
        addBtn1.setAttribute("disabled", "");

        for (let facatxtBx of textBoxesSect4) {
          facatxtBx.removeAttribute("mandatory");
          facatxtBx.setAttribute("disabled", "");
          facatxtBx.value = "";
        }

        let parent1 = "decla-container";
        let tempDiv1 = document.getElementById(parent1).querySelectorAll("div");

        for (let div of tempDiv1) {
          if (div.hasAttribute("id")) {
            removeDuplicate(
              div.querySelector("cn2-button").id,
              "formA1",
              parent1
            );
          }
        }
        for (let i = 0; i < deleteBtn1.length; i++) {
          deleteBtn1[i].setAttribute("disabled", "");
        }
      }
      break;
    case "DeclOfQP_Chkbox40":
      if (el.checked) {
        document
          .getElementById("DeclOfQP_Role_Name10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclOfQP_Role_Name10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("DeclOfQP_Role_Name10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclOfQP_Role_Name10")
          .removeAttribute("mandatory");
      }
      break;
    case "DeclOfQP_Chkbox50":
      let textbox2 = [
        document.getElementById("DeclOfQP_Role10"),
        document.getElementById("DeclOfQP_Role_field10"),
        document.getElementById("DeclOfQP_From_Date10"),
        document.getElementById("DeclOfQP_To_Date10"),
      ];

      if (el.checked) {
        for (let text of textbox2) {
          text.removeAttribute("disabled");
          text.setAttribute("mandatory", "");
        }
      } else {
        for (let text of textbox2) {
          text.removeAttribute("mandatory");
          text.setAttribute("disabled", "");
          text.value = "";
        }
      }
      break;
    case "DeclOfQP_Chkbox60":
      let containerSect2 = document.getElementById("decla1-container");
      let textBoxesSect2 = containerSect2.getElementsByTagName("cn2-textbox");

      let addBtn2 = document.getElementById("addBtn10");
      let deleteBtn2 = document.querySelectorAll(".deleteBtn3");

      if (el.checked) {
        addBtn2.removeAttribute("disabled");

        for (let facatxtBx of textBoxesSect2) {
          facatxtBx.removeAttribute("disabled");
        }
        document
          .getElementById("DeclOfQP_Deta_Facade_Invs_FI_RegNo10")
          .setAttribute("mandatory", "");
      } else {
        addBtn2.setAttribute("disabled", "");

        for (let facatxtBx of textBoxesSect2) {
          facatxtBx.removeAttribute("mandatory");
          facatxtBx.setAttribute("disabled", "");
          facatxtBx.value = "";
        }

        let parent2 = "decla1-container";
        let tempDiv3 = document.getElementById(parent2).querySelectorAll("div");

        for (let div of tempDiv3) {
          if (div.hasAttribute("id")) {
            removeDuplicate(
              div.querySelector("cn2-button").id,
              "formB1",
              parent2
            );
          }
        }
        for (let i = 0; i < deleteBtn2.length; i++) {
          deleteBtn2[i].setAttribute("disabled", "");
        }
      }
      break;
    case "DeclOfQP_Chkbox70":
      let Invescheckbox = [
        document.getElementById("DeclOfQP_Inves_Require_Repa10"),
        document.getElementById("DeclOfQP_Inves_Unsafe10"),
      ];

      if (el.checked) {
        for (let chckBx of Invescheckbox) {
          chckBx.setAttribute("checked", "");
          chckBx.setAttribute("mandatory", "");
          chckBx.removeAttribute("disabled");
        }
      } else {
        for (let chckBx of Invescheckbox) {
          chckBx.setAttribute("disabled", "");
          chckBx.removeAttribute("mandatory");
          chckBx.removeAttribute("checked");
          chckBx.checked = false;
        }
      }
      break;
    case "DeclOfQP_Chkbox80":
      if (el.checked) {
        document
          .getElementById("DeclOfQP_Role_Name20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclOfQP_Role_Name20")
          .setAttribute("mandatory", "");
      } else {
        document
          .getElementById("DeclOfQP_Role_Name20")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclOfQP_Role_Name20")
          .setAttribute("disabled", "");
        document.getElementById("DeclOfQP_Role_Name20").value = "";
      }
      break;
    case "DeclOfQP_Chkbox90":
      let textbox3 = [
        document.getElementById("DeclOfQP_Role20"),
        document.getElementById("DeclOfQP_Role_Field20"),
        document.getElementById("DeclOfQP_From_Date20"),
        document.getElementById("DeclOfQP_To_Date20"),
      ];

      if (el.checked) {
        for (let text of textbox3) {
          text.removeAttribute("disabled");
          text.setAttribute("mandatory", "");
        }
      } else {
        for (let text of textbox3) {
          text.removeAttribute("mandatory");
          text.setAttribute("disabled", "");
          text.value = "";
        }
      }
      break;
    case "DeclOfQP_Chkbox100":
      if (el.checked) {
        document
          .getElementById("DeclOfQP_Report_Date10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclOfQP_Report_Date10")
          .setAttribute("mandatory", "");
      } else {
        document
          .getElementById("DeclOfQP_Report_Date10")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclOfQP_Report_Date10")
          .setAttribute("disabled", "");
        document.getElementById("DeclOfQP_Report_Date10").value = "";
      }
      break;
  }
}

function removeManda(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function addUncheckBox(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;

  let form = formContainer.querySelectorAll(".form");
  let formDiv = form[formCount - 1];
  let checkBox = formDiv.getElementsByTagName("cn2-checkbox");
  let textBox = formDiv.getElementsByTagName("cn2-textbox");
  let datefield = formDiv.getElementsByTagName("cn2-datefield");

  let noBldg = document.querySelectorAll(
    "[prefix = 'DeclOfQP_Buil_Deta_No_Buildings']"
  );

  for (let noBldgNo of noBldg) {
    noBldgNo.value = formCount;
  }
  if (formCount > 1) {
    for (let chckBx of checkBox) {
      chckBx.checked = false;
      if (chckBx.hasAttribute("name")) {
        chckBx.setAttribute("mandatory", "");
        chckBx.setAttribute("checked", "");
      }
    }

    for (let textBx of textBox) {
      if (textBx.hasAttribute("other")) {
        textBx.setAttribute("hidden", "");
        textBx.removeAttribute("mandatory");
      }
      if (textBx.hasAttribute("buildingNo")) {
        textBx.value = formCount;
      }
    }
    for (let datefld of datefield) {
      if (datefld.hasAttribute("disabled")) {
        datefld.removeAttribute("disabled");
        datefld.setAttribute("mandatory", "");
      }
    }
  }
}

function atLeastOne(e) {
  let formIndex = e.id.slice(-2);
  let formDiv = document.getElementById("form" + formIndex.slice(0, -1));
  let items = formDiv.querySelectorAll(`[name="${e.name}"]`);
  pass = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].removeAttribute("mandatory");
      items[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("mandatory", "");
      items[i].setAttribute("checked", "");
    }
  }
}

function altAtLeastOne(e) {
  let items = document.querySelectorAll(`[name="${e.name}"]`);
  pass = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].removeAttribute("mandatory");
      items[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("mandatory", "");
      items[i].setAttribute("checked", "");
    }
  }
}

function otherTextBox(el, prefix) {
  let index = el.id.slice(-2);

  if (el.checked) {
    document.getElementById(prefix + index).removeAttribute("hidden");
    document.getElementById(prefix + index).setAttribute("mandatory", "");
  } else {
    document.getElementById(prefix + index).removeAttribute("mandatory");
    document.getElementById(prefix + index).setAttribute("hidden", "");
    document.getElementById(prefix + index).value = "";
  }
}

function decimalFunc1(element, event, length) {
  let field = document.getElementById(element.id);
  let finalLen = length - 1;
  let arr = [];

  if (event.keyCode != 46 && !field.value.includes(".")) {
    if (field.value.length > finalLen) {
      event.preventDefault();
    }
  } else if (field.value.includes(".")) {
    if (event.keyCode == 46) {
      event.preventDefault();
    }
  }
}

function decimalFunc2(element, event, decimalVal) {
  let field = document.getElementById(element.id);
  if (validate(field.value)) {
    if (field.value.includes(".")) {
      arr = field.value.split(".");
      if (arr[1].length > decimalVal) {
        event.preventDefault();
        field.value = arr[0] + "." + arr[1].substring(0, arr[1].length - 1);
      }
    }
  } else {
    field.value = field.value.substring(0, field.value.length - 1);
  }
}

function displayZero(el) {
  if (document.getElementById(el.id).value.slice(0, 1) == ".") {
    // display zero in front when the first character of the value is a decimal
    document.getElementById(el.id).value =
      "0" + document.getElementById(el.id).value;
  }
}

function DeclOfQP_Buil_Deta_Date_NA_PSI_click(el) {
  index = document
    .getElementById(el.id)
    .getAttribute("id")
    .replace(document.getElementById(el.id).getAttribute("prefix"), "");
  datePrefix = "DeclOfQP_Buil_Deta_Date_PSI";
  document.getElementById(datePrefix + index).value = "";
  if (el.checked) {
    document.getElementById(datePrefix + index).removeAttribute("mandatory");
    document.getElementById(datePrefix + index).setAttribute("disabled", "");
  } else {
    document.getElementById(datePrefix + index).setAttribute("mandatory", "");
    document.getElementById(datePrefix + index).removeAttribute("disabled");
  }
}
