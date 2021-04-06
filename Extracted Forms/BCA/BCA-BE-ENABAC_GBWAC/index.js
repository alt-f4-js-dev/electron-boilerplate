document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let title = `ENDORSEMENTS ON RECORD PILING / STRUCTURAL PLAN CERTIFICATE <BR>
               TO BE ENDORSED BY THE ACCREDITED CHECKER / SPECIALIST ACCREDITED CHECKER`;
    document.querySelector("cn2-master-head").setAttribute("title", title);
  }
  formNameVersion("form__name", "form__version");
});

function ToAgency_id_change(element) {
  let textarea = document.getElementById("Addr20");
  let value = document.getElementById(element.id).value;
  if (value === "BCA") {
    textarea.value =
      "Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550";
  } else if (value === "DSTA") {
    textarea.value =
      "Building & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
  }
}

function enableDelete(parent) {
  parent = document.getElementById(parent);

  let tempDivs = parent.querySelectorAll("div");

  let targetDivs = [];

  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  for (let div of targetDivs) {
    div.querySelector("cn2-button").removeAttribute("disabled");
  }
  let target = targetDivs[targetDivs.length - 1];

  target.querySelector("cn2-textbox").removeAttribute("data-invalid");
  target.querySelector("cn2-textbox").removeAttribute("data-invalid-message");
}

function disableDelete(parent) {
  parent = document.getElementById(parent);
  let tempDivs = parent.querySelectorAll("div");
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length == 1) {
    targetDivs[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}

function ApplType_change() {
  let checkboxes = [
    document.getElementById("ApplType_Endo10"),
    document.getElementById("ApplType_Endo20"),
  ];
  let introListId = document.getElementById("Instructions_section_id");
  let acSPID = document.getElementById("AccrSpecIntroList_id");
  let acId = document.getElementById("AccCheckIntroList_id");
  let spac = document.getElementById("SpecAcctIntroList_id");
  let formField = document.querySelectorAll(".Afields");
  let ctr = 0;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      ctr++;
    }
  }
  //conditions for label changes
  if (ctr == 2) {
    introListId.removeAttribute("hidden");
    acSPID.removeAttribute("hidden");
    spac.setAttribute("hidden", "");
    acId.setAttribute("hidden", "");
    document.getElementById("id1").innerHTML =
      "Section II Particulars of Specialist Accredited Checker";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (document.getElementById("ApplType_Endo10").checked) {
    formNameVersion("form__name10", "form__version");
    acSPID.setAttribute("hidden", "");
    acId.removeAttribute("hidden");
    spac.setAttribute("hidden", "");
    introListId.removeAttribute("hidden");
    document.getElementById("id1").innerHTML =
      "Section II Particulars of Specialist Accredited Checker";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (document.getElementById("ApplType_Endo20").checked) {
    formNameVersion("form__name20", "form__version");
    introListId.removeAttribute("hidden");
    acSPID.setAttribute("hidden", "");
    spac.removeAttribute("hidden");
    acId.setAttribute("hidden", "");
    document.getElementById("id1").innerHTML =
      "Section I Particulars of Specialist Accredited Checker";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else {
    introListId.setAttribute("hidden", "");
    spac.setAttribute("hidden", "");
    acId.setAttribute("hidden", "");
    acSPID.setAttribute("hidden", "");
    document.getElementById("Project_Title20").value = document.getElementById(
      "Project_Title10"
    ).value;
    document.getElementById("PartOfAppl_StruPlanOfProjC10").value = "";
    document.getElementById("id1").innerHTML =
      "Section I Particulars of Specialist Accredited Checker";
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        formField[i].parentNode.removeChild(formField[i]);
      }
    }

    for (let checkbox of checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
  }
}

function ApplType_Endo10_change(element) {
  let page = document.querySelector("[target='page4']");
  let page5 = document.querySelector("[target='page5']");
  let otherCheckbox = document.getElementById("ApplType_Endo20");
  let textboxes = document.querySelectorAll("[group-id='partAc_id']");
  let toBox = document.getElementById("Addr10");
  let options =
    "Building and Construction Authority:BCA,Defence Science & Technology Agency:DSTA";

  let disTextboxes = [
    document.getElementById("DeclByAccrChec_IAccrChecCert10"),
    document.getElementById("DeclByAccrChec_IAccrChecHere10"),
    document.getElementById("DeclByAccrChec_IFurtCertThat10"),
    document.getElementById("DeclByAccrChec_TotaNumbOfStru10"),
  ];
  let checkboxes = [
    document.getElementById("DeclByAccrChec_IAccrChecCert20"),
    document.getElementById("DeclByAccrChec_IAccrChecHere20"),
    document.getElementById("DeclByAccrChec_IFurtCertThat20"),
    document.getElementById("DeclByAccrChec_TotaNumbOfStru20"),
    document.getElementById("DeclByAccrChec_IHereDeclThat10"),
  ];
  let remarks = document.getElementById("DeclByAccrChec_Rema10");
  let mandTextbox = document.getElementById("Member_Member_Name_AC10");
  let span1 = document.getElementById("AC2Label");
  let span2 = document.getElementById("AC3Label");
  if (element.checked) {
    toBox.setAttribute("options", options);
    page.removeAttribute("hidden");
    if (otherCheckbox.checked) {
      page5.setAttribute("page-number", "5");
    }
    mandTextbox.setAttribute("mandatory", "");
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    span1.innerHTML =
      "I further certify that these detailed structural plans and design calculations are in reference to Project Reference Number:";
    span2.innerHTML = "Total number of structural plans checked :";
    if (toBox.value === "DSTA") {
      document.getElementById("Addr20").value = "";
      toBox.removeAttribute("mandatory");
      toBox.value = "";
      toBox.setAttribute("mandatory", "");
    }
    toBox.setAttribute(
      "options",
      "Building and Construction Authority:BCA"
    );

    page.setAttribute("hidden", "");
    if (otherCheckbox.checked) {
      page5.setAttribute("page-number", "4");
    }
    mandTextbox.removeAttribute("mandatory");
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    }
    for (let textbox of disTextboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
    remarks.value = "";
  }
}

function ApplType_Endo20_change(element) {
  let page = document.querySelector("[target='page5']");
  let textboxes = document.querySelectorAll("[group-id='page5PartAcGeoID']");
  let otherCheckbox = document.getElementById("ApplType_Endo10");
  let disTextboxes = [
    document.getElementById("DeclBySac_CertOfRecoPlan10"),
    document.getElementById("DeclBySac_StanEndoForSpec10"),
    document.getElementById("DeclBySac_IAppeMyEval10"),
    document.getElementById("DeclBySac_IAppeMyEval30"),
  ];
  let checkboxes = [
    document.getElementById("DeclBySac_CertOfRecoPlan20"),
    document.getElementById("DeclBySac_StanEndoForSpec20"),
    document.getElementById("DeclBySac_IAppeMyEval20"),
    document.getElementById("DeclBySac_IHereDeclThat20"),
  ];
  let span = document.getElementById("SACLabel");
  let remarks = document.getElementById("DeclBySac_Remark");
  if (element.checked) {
    page.removeAttribute("hidden");
    if (otherCheckbox.checked) {
      page.setAttribute("page-number", "5");
    } else {
      page.setAttribute("page-number", "4");
    }
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
      checkbox.checked = false;
    }
  } else {
    span.innerHTML = "";
    page.setAttribute("hidden", "");
    remarks.value = "";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    }
    for (let textbox of disTextboxes) {
      textbox.value = "";
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("disabled", "");
    }
    if (otherCheckbox.checked) {
      page.setAttribute("page-number", "4");
    }
  }
}

function DeclByAccrChec_IFurtCertThat20_change(element, textbox) {
  let checkbox = document.getElementById(element.id);
  textbox = document.getElementById(textbox);
  let span = document.getElementById("AC2Label");
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
    span.innerHTML =
      " I further certify that these detailed structural plans and design calculations are in reference to Project Reference Number: *";
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
    span.innerHTML =
      " I further certify that these detailed structural plans and design calculations are in reference to Project Reference Number:";
  }
}

function DeclByAccrChec_TotaNumbOfStru20_change(element, textbox) {
  let checkbox = document.getElementById(element.id);
  textbox = document.getElementById(textbox);
  let span = document.getElementById("AC3Label");
  if (element.checked) {
    span.innerHTML = "Total number of structural plans checked: *";
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    span.innerHTML = "Total number of structural plans checked:";
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function Member_Member_Name_AC10_change(element) {
  let value = document.getElementById(element.id).valueLabel.trim();

  if (value !== "Please Select") {
    if (document.getElementById("DeclByAccrChec_IAccrChecCert20").checked) {
      document.getElementById("DeclByAccrChec_IAccrChecCert10").value = value;
    }
    if (document.getElementById("DeclByAccrChec_IAccrChecHere20").checked) {
      document.getElementById("DeclByAccrChec_IAccrChecHere10").value = value;
    }
  }
}

function DeclByAccrChec_IAccrChecCert20_change(element) {
  let textbox = document.getElementById("DeclByAccrChec_IAccrChecCert10");
  let value = document
    .getElementById("Member_Member_Name_AC10")
    .valueLabel.trim();
  element = document.getElementById(element.id);
  if (value !== "Please Select") {
    if (element.checked) {
      element.removeAttribute("checked");
      element.removeAttribute("mandatory");
      textbox.value = value;
    } else {
      element.setAttribute("checked", "");
      element.setAttribute("mandatory", "");
      textbox.value = "";
    }
  }
}

function DeclByAccrChec_IAccrChecHere20_change(element) {
  let textbox = document.getElementById("DeclByAccrChec_IAccrChecHere10");
  let value = document
    .getElementById("Member_Member_Name_AC10")
    .valueLabel.trim();
  element = document.getElementById(element.id);
  if (value !== "Please Select") {
    if (element.checked) {
      element.removeAttribute("checked");
      element.removeAttribute("mandatory");
      textbox.value = value;
    } else {
      element.setAttribute("checked", "");
      element.setAttribute("mandatory", "");
      textbox.value = "";
    }
  }
}

function DeclBySac_CertOfRecoPlan20_change(element) {
  let textbox = document.getElementById("DeclBySac_CertOfRecoPlan10");
  let value = document
    .getElementById("Member_Member_Name_ACGEO10")
    .valueLabel.trim();
  element = document.getElementById(element.id);
  if (value !== "Please Select") {
    if (element.checked) {
      element.removeAttribute("checked");
      element.removeAttribute("mandatory");
      textbox.value = value;
    } else {
      element.setAttribute("checked", "");
      element.setAttribute("mandatory", "");
      textbox.value = "";
    }
  }
}

function DeclBySac_StanEndoForSpec20_change(element) {
  let textbox = document.getElementById("DeclBySac_StanEndoForSpec10");
  let value = document
    .getElementById("Member_Member_Name_ACGEO10")
    .valueLabel.trim();
  element = document.getElementById(element.id);
  if (value !== "Please Select") {
    if (element.checked) {
      element.removeAttribute("checked");
      element.removeAttribute("mandatory");
      textbox.value = value;
    } else {
      element.setAttribute("checked", "");
      element.setAttribute("mandatory", "");
      textbox.value = "";
    }
  }
}

function Member_Member_Name_ACGEO10_change(element) {
  let value = document.getElementById(element.id).valueLabel.trim();

  if (value !== "Please Select") {
    if (document.getElementById("DeclBySac_CertOfRecoPlan20").checked) {
      document.getElementById("DeclBySac_CertOfRecoPlan10").value = value;
    }
    if (document.getElementById("DeclBySac_StanEndoForSpec20").checked) {
      document.getElementById("DeclBySac_StanEndoForSpec10").value = value;
    }
  }
}

function DeclBySac_IAppeMyEval20_change(element) {
  let textboxes = [
    document.getElementById("DeclBySac_IAppeMyEval10"),
    document.getElementById("DeclBySac_IAppeMyEval30"),
  ];
  element = document.getElementById(element.id);
  let span = document.getElementById("SACLabel");
  if (element.checked) {
    span.innerHTML = "*";
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    span.innerHTML = "";
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
    element.checked = false;
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}

function DeclBySac_IHereDeclThat20_change(element) {
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  }
}

function DeclByAccrChec_IHereDeclThat10_change(element) {
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  }
}

function getDetails() {
  let data = [
    {
      "BCA(ST)": [
        {
          Email: "wai_hui_ling@bca.gov.sg",
          TelNo: "68044609",
          AreaOfSupp: "Policies",
        },
        {
          Email: "chang_heng_choy@bca.gov.sg",
          TelNo: "68044646",
          AreaOfSupp: "Policies",
        },
      ],
    },
  ];
  return data;
}

function addSTtable(parentDiv) {
  parentDiv = document.getElementById(parentDiv);
  let tempDivs = parentDiv.getElementsByTagName("div");
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length != 1) {
    let select = targetDivs[targetDivs.length - 1].querySelector("cn2-select");
    select.value = "ST";
  }
}

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

function togglePartSpecAcc(el) {
  document.getElementById(el).removeAttribute("data-invalid");
  document.getElementById(el).removeAttribute("data-invalid-message");
}
