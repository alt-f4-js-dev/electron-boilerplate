// document.querySelector("cn2-master-head").setAttribute("agency","bca-logo.png");

function getDetails() {
  let data = [
    {
      "BCA (ST)": [
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

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "BCA") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550`;
    agencyAdd.removeAttribute("hidden");
  } else if (element.value == "DSTA") {
    agencyAdd.value = `Defence Science & Technology Agency
Building & Infrastructure
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
    agencyAdd.removeAttribute("hidden");
  } else {
    agencyAdd.setAttribute("hidden", "");
  }
}

function atLeastOne(element) {
  let checks = document.querySelectorAll(`[name="${element.name}"]`);
  let pass = false;
  for (let c of checks) {
    if (c.checked) {
      pass = true;
    }
  }
  if (pass) {
    for (let c of checks) {
      c.removeAttribute("checked");
      c.removeAttribute("mandatory");
    }
  } else {
    for (let c of checks) {
      c.setAttribute("checked", "");
      c.setAttribute("mandatory", "");
    }
  }
}

function EndoType_AccrChecCert10_change(element) {
  let othersSign = document.getElementById("othersManda");
  let planType = document.getElementById("planType");
  let regNo = document.getElementById("MemberRole_Professional_No");
  let designation = document.getElementById("Member_Designation");
  let page = document.querySelector("[target='page4']");
  let DeclByAppl_div = document.getElementById("DeclByAppl_div");
  let DeclByAppl_fields = [
    document.getElementById("DeclByAppl_IBeinARegi20"),
    document.getElementById("DeclByAppl_IAppeMyEval30"),
    document.getElementById("DeclByAccrChec_IAccrChecCert10"),
    document.getElementById("DeclByAccrChec_IFurtCertThat10"),
    document.getElementById("DeclByAccrChec_TotaNumbOfStru10"),
  ];
  let particulars = [
    document.getElementById("Member_Member_SID_AC10"),
    document.getElementById("Member_Member_Name_AC10"),
    document.getElementById("Member_Firm_Name_AC10"),
    //document.getElementById("Members_UEN_AC10"),
    document.getElementById("Members_UEN_OWNER10"),
    document.getElementById("Member_Address_AC10"),
    document.getElementById("Member_Tel_No_AC10"),
    document.getElementById("Member_Mobile_No_AC10"),
    document.getElementById("Member_Email_Address1_AC10"),
    document.getElementById("MemberRole_Professional_No_AC10"),
    document.getElementById("MemberRole_Professional_No_ACCRCHECK20"),
    document.getElementById("Member_Designation_AC10"),
  ];
  let fields = [
    //document.getElementById("PartOfAppl_PlanType10"),
    document.getElementById("PartOfAppl_PlanType20"),
  ];

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_AC10")
      .setAttribute("mandatory", "");
    planType.removeAttribute("hidden");
    page.removeAttribute("hidden");
    regNo.removeAttribute("hidden");
    designation.removeAttribute("hidden");
    DeclByAppl_div.removeAttribute("hidden");
    formNameVersion("form__name1", "form__version");

    enableMandatoryCheck("DeclByAppl");

    for (field of fields) {
      field.setAttribute("mandatory", "");
    }

    for (field of DeclByAppl_fields) {
      field.setAttribute("disabled", "");
    }
  } else {
    othersSign.textContent = "";
    document
      .getElementById("DeclByAppl_InArriAtMy_Othe10")
      .removeAttribute("mandatory");
    document.getElementById("Members_UEN_OWNER10").removeAttribute("data-invalid");
    document
      .getElementById("Members_UEN_OWNER10")
      .removeAttribute("data-invalid-message");
    for (p of particulars) {
      p.value = "";
      p.removeAttribute("mandatory");
    }
    page.setAttribute("hidden", "");
    planType.setAttribute("hidden", "");
    regNo.setAttribute("hidden", "");
    designation.setAttribute("hidden", "");
    DeclByAppl_div.setAttribute("hidden", "");
    //others field
    document.getElementById("DeclByAppl_InArriAtMy_Othe20").checked = false;
    document.getElementById("DeclByAppl_InArriAtMy_Othe10").value = "";
    document
      .getElementById("DeclByAppl_InArriAtMy_Othe10")
      .setAttribute("hidden", "");
    document.getElementById("Remarks10").value = "";
    removeMandatoryCheck("DeclByAppl");

    for (field of fields) {
      field.removeAttribute("mandatory");
    }
    for (field of DeclByAppl_fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function EndoType_SpecAccrChec10_change(element) {
  let specRegNo = document.getElementById("member_role_specialist");
  let specDesignation = document.getElementById("specialDesignation");
  let DeclByAppl_special_div = document.getElementById(
    "DeclByAppl_special_div"
  );
  let page = document.querySelector("[target='page5']");
  let page4 = document.querySelector("[target='page4']");
  let fields = [
    document.getElementById("DeclByAppl_IBeinARegi40"),
    document.getElementById("DeclByAppl_IAppeMyEval10"),
    document.getElementById("DeclByAppl_IBeinARegi60"),
    document.getElementById("DeclBySac_IAppeMyEval10"),
    document.getElementById("DeclBySac_IAppeMyEval30"),
  ];
  let particulars = [
    document.getElementById("Member_Member_SID_AC20"),
    document.getElementById("Member_Member_Name_AC20"),
    document.getElementById("MemberRole_Professional_No_AC20"),
    document.getElementById("Member_Firm_Name_AC20"),
    document.getElementById("Members_UEN_AC20"),
    document.getElementById("Member_Designation_AC20"),
    document.getElementById("Member_Address_AC20"),
    document.getElementById("Member_Tel_No_AC20"),
    document.getElementById("Member_Mobile_No_AC20"),
    document.getElementById("Member_Email_Address1_AC20"),
  ];
  if (element.checked) {
    document
      .getElementById("Member_Member_Name_AC20")
      .setAttribute("mandatory", "");
    page.removeAttribute("hidden");
    specRegNo.removeAttribute("hidden");
    specDesignation.removeAttribute("hidden");
    DeclByAppl_special_div.removeAttribute("hidden");
    formNameVersion("form__name2", "form__version");

    enableMandatoryCheck("DeclByAppl_special");
    for (field of fields) {
      field.setAttribute("disabled", "");
    }
  } else {
    for (p of particulars) {
      p.value = "";
      p.removeAttribute("mandatory");
    }
    document.getElementById("Members_UEN_AC20").removeAttribute("data-invalid");
    document
      .getElementById("Members_UEN_AC20")
      .removeAttribute("data-invalid-message");
    page.setAttribute("hidden", "");
    specRegNo.setAttribute("hidden", "");
    specDesignation.setAttribute("hidden", "");
    DeclByAppl_special_div.setAttribute("hidden", "");

    removeMandatoryCheck("DeclByAppl_special");
    document.getElementById("Remarks10").value = "";
    for (field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function pageNumbering() {
  let page4 = document.querySelector("[target='page4']");
  let page5 = document.querySelector("[target='page5']");
  if (page4.hasAttribute("hidden")) {
    page5.setAttribute("page-number", "4");
    document.getElementById("sectNumb2").innerHTML = "I";
    let spanLabel = document.querySelectorAll("[group-id = 'sectNumbDec']");

    for (x = 0; x < spanLabel.length; x++) {
      spanLabel[x].innerHTML = "I";
    }
  } else if (page4.hasAttribute("hidden")) {
    page4.setAttribute("page-number", "4");
    document.getElementById("sectNumb").innerHTML = "I";
  } else {
    page4.setAttribute("page-number", "4");
    document.getElementById("sectNumb").innerHTML = "I";
    page5.setAttribute("page-number", "5");
    document.getElementById("sectNumb2").innerHTML = "II";
    let spanLabel = document.querySelectorAll("[group-id = 'sectNumbDec']");

    for (x = 0; x < spanLabel.length; x++) {
      spanLabel[x].innerHTML = "II";
    }
  }
}

function DeclByAppl_InArriAtMy_Othe20_change(element) {
  let others = document.getElementById("DeclByAppl_InArriAtMy_Othe10");
  let manda = document.getElementById("othersManda");
  if (element.checked) {
    others.removeAttribute("hidden");
    manda.textContent = "*";
  } else {
    others.setAttribute("hidden", "");
    others.removeAttribute("mandatory", "");
    others.value = "";
    manda.textContent = "";
  }
}

function enableField(element, fieldID) {
  let field = document.getElementById(fieldID);
  if (element.checked) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory", "");
    field.value = "";
  }
}

function enableMandatoryCheck(groupID) {
  let checks = document.querySelectorAll(`[group="${groupID}"]`);
  for (let i = 0; i < checks.length; i++) {
    checks[i].setAttribute("mandatory", "");
    checks[i].setAttribute("checked", "");
  }
}

function removeMandatoryCheck(groupID) {
  let checks = document.querySelectorAll(`[group="${groupID}"]`);
  for (let i = 0; i < checks.length; i++) {
    checks[i].removeAttribute("mandatory");
    checks[i].removeAttribute("checked");
    checks[i].checked = false;
  }
}

function removeManda(element) {
  let check = document.getElementById(element.id);
  if (check.checked) {
    check.removeAttribute("mandatory");
    check.removeAttribute("checked");
  } else {
    check.setAttribute("mandatory", "");
    check.setAttribute("checked", "");
  }
}

function DeclByAppl_IBeinARegi10_change(element) {
  let name = document.getElementById("Member_Member_Name_AC10").valueLabel;
  let field = document.getElementById("DeclByAppl_IBeinARegi20");
  if (element.checked) {
    if (name != "Please Select") {
      field.value = name;
    }
  }
}

function Member_Member_Name_AC10_change(element) {
  let field = document.getElementById(element.id);
  let c = document.getElementById("DeclByAppl_IBeinARegi10");
  let c2 = document.getElementById("DeclByAccrChec_IAccrChecCert20");
  let target = document.getElementById("DeclByAppl_IBeinARegi20");
  let target2 = document.getElementById("DeclByAccrChec_IAccrChecCert10");

  if (element.value) {
    if (c.checked) {
      target.value = field.valueLabel;
    }
    if (c2.checked) {
      target2.value = field.valueLabel;
    }
  }
}

function DeclByAppl_IBeinARegi30_change(element) {
  let name = document.getElementById("Member_Member_Name_AC20");
  let field = document.getElementById("DeclByAppl_IBeinARegi40");
  if (element.checked) {
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

function Member_Member_Name_AC20_change(element) {
  let c = document.getElementById("DeclByAppl_IBeinARegi30");
  let c2 = document.getElementById("DeclByAppl_IBeinARegi50");
  let name = document.getElementById("Member_Member_Name_AC20");
  let target = document.getElementById("DeclByAppl_IBeinARegi40");
  let target2 = document.getElementById("DeclByAppl_IBeinARegi60");
  if (element.value) {
    if (c.checked) {
      target.value = name.valueLabel;
    }
    if (c2.checked) {
      target2.value = name.valueLabel;
    }
  }
}

function DeclByAppl_IBeinARegi50_change(element) {
  let name = document.getElementById("Member_Member_Name_AC20");
  let field = document.getElementById("DeclByAppl_IBeinARegi60");
  if (element.checked) {
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

function DeclByAccrChec_IAccrChecCert20_change(element) {
  let name = document.getElementById("Member_Member_Name_AC10");
  let field = document.getElementById("DeclByAccrChec_IAccrChecCert10");
  if (element.checked) {
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

//

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  //formNameVersion("form__name", "form__version");
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

function setStruPlanNo20(element) {
  let Plan10 = element.value;
  let Plan20 = document.getElementById("PartOfAppl_StruPlanNo20");

  if (!Plan10 == "") {
    Plan20.value = Plan10;
  } else {
    Plan20.value = "";
  }
}

function setUEN10(element) {
  let UEN20 = element.value;
  let UEN10 = document.getElementById("Members_UEN_AC10");

  if (!UEN20 == "") {
    UEN10.value = UEN20;
  } else {
    UEN10.value = "";
  }
}

function setRemarks10(element) {
  let Remarks20 = element.value;
  let Remarks10 = document.getElementById("Remarks");

  if (!Remarks20 == "") {
    Remarks10.value = Remarks20;
  } else {
    Remarks10.value = "";
  }
}

function setFIELD2(element) {
  let Field10 = element.value;
  let Field20 = document.getElementById("FIELD2");

  if (!Field10 == "") {
    Field20.value = Field10;
  } else {
    Field20.value = "";
  }
}

function setProjRef10(element) {
  let ProjRef20 = element.value;
  let ProjRef10 = document.getElementById("Dec_Project_Ref_No10");

  if (!ProjRef20 == "") {
    ProjRef10.value = ProjRef20;
  } else {
    ProjRef10.value = "";
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

function togglePartQp(el) {
  document.getElementById(el).value = "";
  document.getElementById(el).removeAttribute("data-invalid");
  document.getElementById(el).removeAttribute("data-invalid-message");
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
