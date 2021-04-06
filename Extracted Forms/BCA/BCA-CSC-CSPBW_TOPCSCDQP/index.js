document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

function ToAgency_id_change(element) {
  let value = document.getElementById(element.id).value.trim();
  let textarea = document.getElementById("Addr20");
  if (value === "BCA") {
    textarea.value = `Commisioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550`;
  } else {
    textarea.value = `Defence Science & Technology Agency\nBuilding & Infrastructure \n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
  }
}

function formTitle() {
  let radio = document.getElementById("ApplType_BuilWork10");
  let formTitle = document.querySelector("cn2-master-head");

  if (radio.checked) {
    jsonData["FormName10"] = "BCA-CSC-CSPBW";
    formTitle.title =
      "CERTIFICATE OF SUPERVISION OF BUILDING WORKS<br>[Section 12 of the Building Control Act (Cap 29)]";
  } else {
    jsonData["FormName10"] = "BCA-CSC-TOPCSCDQP";
    formTitle.title =
      "DECLARATION BY QUALIFIED PERSON FOR THE APPLICATION OF TEMPORARY OCCUPATION PERMIT/<br>CERTIFICATE OF STATUTORY COMPLETION FOR BUILDING WORKS<br>[Section 12 of the Building Control Act (Cap 29)]";
  }
}

function resetPartQp() {
  let fields = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("Member_Member_IC_Passport_No_QP10"),
    document.getElementById("MemberRole_Professional_No_QP10"),
    document.getElementById("Member_Firm_Name_QP10"),
    document.getElementById("Members_UEN_QP10"),
    document.getElementById("Members_Address_QP10"),
    document.getElementById("Member_Tel_No_QP10"),
    document.getElementById("Member_Mobile_No_QP10"),
    document.getElementById("Member_Email_Address1_QP10"),
  ];
  document
    .getElementById("Member_Member_Name_QP10")
    .removeAttribute("mandatory");
  document
    .getElementById("Member_Member_Name_QP10")
    .setAttribute("mandatory", "");

  for (let field of fields) {
    if (field) {
      field.value = "";
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  }
}

function ApplType_change(element) {
  //Form Title
  formTitle();
  // - >Instructions
  // let instruc1 = document.getElementById("CertOfSupeOfBuilWork_List_id");
  // let instruc2 = document.getElementById("ExceCertOfSupeOfBuilWork_List_id");
  // - >Declarations
  let decl1 = document.getElementById("ApplType_BuilWork10_decl");
  let decl3 = document.getElementById("ApplType_BuilWork20_decl");
  let decl4 = document.getElementById("ApplType_BuilWork30_decl");
  let decl5 = document.getElementById("ApplType_BuilWork40_decl");
  //let decl2 = document.getElementById("ApplType_ApplforTopCsc10_decl");
  // - >td
  let builDesc = document.getElementById("Project_Title20_td");
  // - >tr
  let idtr = document.getElementById("Member_Member_IC_Passport_No_QP10_tr");
  let nameOfDev = document.getElementById("PartOfAppl_NameOfDeve10_tr");
  let typeOfAppl = document.getElementById("PartOfAppl_ApplType10_tr");
  //let //devForm = document.getElementById("dvForm_tr");
  let accFund = document.getElementById("PartOfAppl_AcceFund_tr");
  let contPers = document.getElementById("PartOfAppl_ContPers10_tr");
  let ApplType_BuilWork10Fields = [
    document.getElementById("PartOfAppl_DateOfPermTo10_tr"),
    document.getElementById("PartOfAppl_DateOfComp10_tr"),
    document.getElementById("PartOfAppl_StatGrosFlooArea10_tr"),
    document.getElementById("PartOfAppl_FinaBuilCostExcl10_tr"),
    document.getElementById("PartOfAppl_Rema10_tr"),
  ];
  // - >strings
  let descString1 = "Description of Building Works";
  //let descString2 = "Description of completed building works";
  // - >pages
  // let partOfDev = document.querySelector("[target='page3']");
  // let partOfQp = document.querySelector("[target='page4']");
  //let bookingReq = document.querySelector("[target='page5']");
  // - >Fields
  let PartOfAppl_ApplType10 = document.getElementById("PartOfAppl_ApplType10");
  let PartOfAppl_DevtType10 = document.getElementById("PartOfAppl_DevtType10");
  // ->Divs
  //let submCheck = document.getElementById("SubmCheck_div");
  //let stanRegu = document.getElementById("StanRegu_div");
  //Buttons
  //let addButton = document.getElementById("PlanTypeAdd_id");
  //let deleteButton = document.getElementById("delete1");

  resetPartQp();
  resetApplicationDetails();
  resetDecl1(false);
  resetStanRequ(false);
  resetDecl3(false);
  switch (element.id) {
    case "ApplType_BuilWork10":
      idtr.setAttribute("hidden", "");
      // instruc1.removeAttribute("hidden");
      // instruc2.setAttribute("hidden", "");
      builDesc.innerHTML = descString1;
      nameOfDev.setAttribute("hidden", "");
      typeOfAppl.setAttribute("hidden", "");
      PartOfAppl_ApplType10.removeAttribute("mandatory");
      PartOfAppl_DevtType10.removeAttribute("mandatory");
      //devForm.setAttribute("hidden", "");
      accFund.setAttribute("hidden", "");
      contPers.setAttribute("hidden", "");
      //addButton.removeAttribute("hidden");
      //deleteButton.removeAttribute("hidden");

      // for (let tr of ApplType_BuilWork10Fields) {
      //   tr.removeAttribute("hidden");
      // }
      // Logic for Pages
      // partOfDev.setAttribute("hidden", "");
      // partOfQp.setAttribute("page-number", "3");
      //bookingReq.setAttribute("hidden", "");
      // Declaration Logics
      document.getElementById("declH2").innerHTML =
        "Declaration by Qualified Person";
      decl1.removeAttribute("hidden");
      decl3.setAttribute("hidden", "");
      decl5.setAttribute("hidden", "");
      decl4.setAttribute("hidden", "");
      decl5.querySelector("#BuilDeta_Heig10").removeAttribute("mandatory");
      resetDecl1(true);
      //resetDecl2(false);
      // submCheck.setAttribute("hidden", "");
      // resetSubmCheck(false);
      //stanRegu.setAttribute("hidden", "");
      //resetBookingInsp(false);
      document.querySelector(".declByQualPers").removeAttribute("hidden");
      document
        .querySelector(".declByQualPers")
        .querySelector("#DeclByQualPers_IHereCertThat10")
        .setAttribute("mandatory", "");
      document
        .querySelector(".declByQualPers")
        .querySelector("#DeclByQualPers_IHereCertThat10")
        .setAttribute("checked", "");
      [
        ...document.querySelectorAll(
          `[group-id="ApplType_DeclQualPersFor10_tr"]`
        ),
      ].map((grp) => grp.setAttribute("hidden", ""));
      break;
    case "ApplType_DeclQualPersFor10":
      // Declaration by Qualified Person for the Application of Temporary Occupation Permit / Certificate of Statutory  Completion for Building Works
      idtr.setAttribute("hidden", "");
      resetApplicationDetails();
      //setPlanTypeOption(false);
      // instruc2.removeAttribute("hidden");
      // instruc1.setAttribute("hidden", "");
      builDesc.innerHTML = descString1;
      nameOfDev.setAttribute("hidden", "");
      typeOfAppl.setAttribute("hidden", "");
      PartOfAppl_ApplType10.removeAttribute("mandatory", "");
      PartOfAppl_DevtType10.removeAttribute("mandatory");
      //devForm.setAttribute("hidden", "");
      accFund.setAttribute("hidden", "");
      contPers.setAttribute("hidden", "");

      // for (let tr of ApplType_BuilWork10Fields) {
      //   tr.setAttribute("hidden", "");
      // }

      // Logic for Pages
      // partOfDev.setAttribute("hidden", "");
      // partOfQp.setAttribute("page-number", "3");
      //bookingReq.setAttribute("hidden", "");

      // Declaration Logics
      document.getElementById("declH2").innerHTML =
        "Declaration by Qualified Person For Supervision of Building Works";
      decl1.setAttribute("hidden", "");
      decl3.removeAttribute("hidden");
      decl5.removeAttribute("hidden");
      decl4.removeAttribute("hidden");
      decl5.querySelector("#BuilDeta_Heig10").setAttribute("mandatory", "");
      //resetDecl2(false);
      resetDecl3(true);
      //submCheck.setAttribute("hidden", "");
      //stanRegu.removeAttribute("hidden");
      //resetSubmCheck(false);
      resetStanRequ(true);
      //addButton.setAttribute("hidden", "");
      //deleteButton.setAttribute("hidden", "");
      //resetBookingInsp(false);
      document.querySelector(".declByQualPers").setAttribute("hidden", "");
      document
        .querySelector(".declByQualPers")
        .querySelector("#DeclByQualPers_IHereCertThat10")
        .removeAttribute("mandatory", "");
      document
        .querySelector(".declByQualPers")
        .querySelector("#DeclByQualPers_IHereCertThat10")
        .removeAttribute("checked", "");
      [
        ...document.querySelectorAll(
          `[group-id="ApplType_DeclQualPersFor10_tr"]`
        ),
      ].map((grp) => grp.removeAttribute("hidden"));
      break;
  }
}

function resetStanRequ(pass) {
  let selects = [
    document.getElementById("StanRequ_NoOccuOfBuil10"),
    document.getElementById("StanRequ_SiteOffiStru10"),
    document.getElementById("StanRequ_PartTop10"),
    document.getElementById("StanRequ_FlooDiag10"),
    document.getElementById("BuilDeta_Heig10"),
  ];
  if (pass) {
    for (let select of selects) {
      select.setAttribute("mandatory", "");
      select.value = "";
    }
  } else {
    for (let select of selects) {
      select.removeAttribute("mandatory");
      select.value = "";
    }
  }
}
function SubmChec_change(element) {
  let pass = false;
  let checkboxes = document.querySelectorAll('[group-id="SubmChec_groupid"]');

  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}
function resetDecl3(pass) {
  //1st Table
  let table1 = document.getElementById("ApplType_BuilWork10_decl");
  let textBox1 = table1.getElementsByTagName("cn2-textbox");
  let checkBox1 = table1.getElementsByTagName("cn2-checkbox");
  let select1 = table1.getElementsByTagName("cn2-select");
  let radioBtn1 = table1.getElementsByTagName("input");
  let td = document.getElementById("ApplType_DeclQualPersFor10_td");
  let trs = document.querySelectorAll(
    "[group-id='ApplType_DeclQualPersFor10_tr']"
  );
  //3rd table
  let table3 = document.getElementById("ApplType_BuilWork30_decl");
  let textBox3 = table3.getElementsByTagName("cn2-textbox");
  let checkBox3 = table3.getElementsByTagName("cn2-checkbox");
  if (pass) {
    for (let tr of trs) {
      tr.removeAttribute("hidden");
    }
    td.innerHTML =
      "I am the appropriate Qualified Person appointed under the Building Control Act in respect of the building works herein described. *";
    //1st table
    for (let checkbox1 of checkBox1) {
      if (
        checkbox1.id != "DeclByQualPers_ICertThatThe20" &&
        checkbox1.id != "DeclByQualPers_RecoPlanRP10"
      ) {
        checkbox1.setAttribute("checked", "");
        checkbox1.setAttribute("mandatory", "");
        checkbox1.checked = false;
      } else {
        checkbox1.checked = false;
      }
    }
    for (let radio1 of radioBtn1) {
      if (
        radio1.id != "DeclByQualPers_NoDeviFromThe10" &&
        radio1.id != "DeclByQualPers_MinoDeviFromThe10"
      ) {
        radio1.setAttribute("checked", "");
        radio1.setAttribute("mandatory", "");
      }
    }
    //3rd table
    for (let checkbox3 of checkBox3) {
      checkbox3.setAttribute("checked", "");
      checkbox3.setAttribute("mandatory", "");
      checkbox3.checked = false;
    }
  } else {
    td.innerHTML =
      "I hereby certify that I have supervised the erection of the building works and that such works have been completed in accordance with the provisions of the Building Control Act, the regulations made thereunder and the conditions under which plans were approved.";
    for (let tr of trs) {
      tr.setAttribute("hidden", "");
    }
    //1st table
    for (let checkbox2 of checkBox1) {
      checkbox2.removeAttribute("checked");
      checkbox2.removeAttribute("mandatory");
      checkbox2.checked = false;

      if (checkbox2.id == "DeclByQualPers_RecoPlanRP10") {
        checkbox2.setAttribute("disabled", "");
      }
    }
    for (let radio2 of radioBtn1) {
      radio2.removeAttribute("checked");
      radio2.removeAttribute("mandatory");
      radio2.checked = false;
    }
    for (let textbox2 of textBox1) {
      textbox2.value = "";
      textbox2.removeAttribute("mandatory");
      if (
        textbox2.id == "DeclByQualPers_TheLastApprPlan20" ||
        textbox2.id == "DeclByQualPers_SubmToShowThe10"
      ) {
        textbox2.setAttribute("disabled", "");
        textbox2.removeAttribute("data-invalid");
        textbox2.removeAttribute("data-invalid-message");
      }
    }
    for (let selection2 of select1) {
      selection2.value = "";
    }
    document
      .getElementById("DeclByQualPers_IHaveInspThe10")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByQualPers_IHaveInspThe10")
      .setAttribute("disabled", "");
    document.getElementById("DeclByQualPers_IHaveInspThe10").value = "";
  }
  //3rd table
  for (let checkbox4 of checkBox3) {
    checkbox4.removeAttribute("checked");
    checkbox4.removeAttribute("mandatory");
    checkbox4.checked = false;
  }

  for (let textbox4 of textBox3) {
    textbox4.setAttribute("hidden", "");
    textbox4.removeAttribute("mandatory");
    textbox4.value = "";
  }
}
function resetSubmCheck(pass) {
  let radios = document.querySelectorAll(
    "[name='SubmChec_NotiOfAppoAuth_name']"
  );
  let checkboxes = document.querySelectorAll("[group-id='SubmChec_groupid']");
  let textboxes = [
    document.getElementById("SubmChec_NotiOfAppoAuth40"),
    document.getElementById("SubmChec_TheBuilDesiScor10"),
    document.getElementById("SubmChec_ForGfaOf10"),
    document.getElementById("SubmChec_TheConsScorIs10"),
    document.getElementById("SubmChec_OtheDocuRema10"),
  ];
  if (pass) {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
  }
}
function resetDecl2(pass) {
  let optCheckboxes = [
    document.getElementById("DeclByQualPers_IHaveObta10"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances10"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances20"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances30"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances60"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances40"),
    document.getElementById("DeclByQualPers_IHaveObtaClearances50"),
  ];
  let mandCheckboxes = [
    document.getElementById("DeclByQualPers_IAmTheQual10"),
    document.getElementById("DeclByQualPers_TheBuilWorkHave10"),
  ];
  let datefield = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20"
  );
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_TheBuilWorkHave_name']"
  );

  if (pass) {
    for (let checkbox of mandCheckboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory");
    datefield.value = "";
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let checkbox of optCheckboxes) {
      checkbox.checked = false;
    }
    for (let checkbox of mandCheckboxes) {
      checkbox.checked = false;
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  }
}
function resetDecl1(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat10");
  if (!pass) {
    checkbox.checked = false;
  }
}
function DeclByQualPers_IHaveInspThe20_change(element) {
  let datefield = document.getElementById("DeclByQualPers_IHaveInspThe10");
  if (element.checked) {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  } else {
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory");
    datefield.value = "";
  }
}
function DeclByQualPers_ICertThatThe20_change(element) {
  let textbox = document.getElementById("DeclByQualPers_TheLastApprPlan20");
  let textbox1 = document.getElementById("DeclByQualPers_SubmToShowThe10");
  let checkbox = document.getElementById("DeclByQualPers_RecoPlanRP10");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");

    checkbox.removeAttribute("disabled");
  } else {
    textbox1.setAttribute("disabled", "");
    textbox1.removeAttribute("mandatory");
    textbox1.value = "";
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
    checkbox.setAttribute("disabled", "");
    checkbox.checked = false;
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
    textbox1.removeAttribute("data-invalid");
    textbox1.removeAttribute("data-invalid-message");
  }
}
function DeclByQualPers_ResiBuil_change(element) {
  for (let radio of document.querySelectorAll(
    "name='DeclByQualPers_ResiBuil_name'"
  )) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}
function DeclByQualPers_RecoPlanRP10_change(element) {
  let textbox = document.getElementById("DeclByQualPers_SubmToShowThe10");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  }
}
// function setPlanTypeOption(pass) {
//   let select = document.getElementById("PartOfAppl_PlanType10");
//   if (pass) {
//     select.removeAttribute("mandatory");
//     select.setAttribute("disabled", "");
//     select.value = "BP";
//   } else {
//     select.setAttribute("options", "BP:BP,ST:ST");
//     select.removeAttribute("disabled");
//     select.setAttribute("mandatory", "");
//     document.getElementById("delete1").setAttribute("hidden", "");
//   }
// }
function resetApplicationDetails() {
  let fields = [
    document.getElementById("PartOfAppl_NameOfDeve10"),
    document.getElementById("PartOfAppl_DateOfPermTo10"),
    document.getElementById("PartOfAppl_DateOfComp10"),
    document.getElementById("PartOfAppl_ApplType10"),
    document.getElementById("PartOfAppl_StatGrosFlooArea10"),
    document.getElementById("PartOfAppl_FinaBuilCostExcl10"),
    document.getElementById("PartOfAppl_Rema10"),
  ];
  let disabledField = document.getElementById("PartOfAppl_ContPers10");
  let checkbox = document.getElementById("PartOfAppl_AcceFund");

  // Reset checkbox
  checkbox.checked = false;

  // Reset disabled field
  disabledField.value = "";
  disabledField.setAttribute("disabled", "");
  disabledField.removeAttribute("mandatory");

  // Reset Plan Type fields
  for (let div of document.getElementById("stForm").querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      let button = div.querySelector("cn2-button");
      removeDuplicate(button.id, "A1", "stForm");
    }
  }
  let planTypeSelect = document.getElementById("PartOfAppl_PlanType10");
  let planTypeText = document.getElementById("PartOfAppl_PlanType20");
  let planTypeButton = document.getElementById("delete1");

  planTypeButton.setAttribute("disabled", "");
  planTypeText.removeAttribute("data-invalid");
  planTypeText.removeAttribute("data-invalid-message");
  planTypeText.value = "";
  planTypeSelect.value = "";
  planTypeSelect.removeAttribute("mandatory");
  planTypeSelect.setAttribute("mandatory", "");

  // Reset Development field
  for (let div of document.getElementById("dvForm").querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      let button = div.querySelector("cn2-button");
      removeDuplicate(button.id, "B1", "dvForm");
    }
  }
  let devSelect = document.getElementById("PartOfAppl_DevtType10");
  devSelect.value = "";

  // Reset optional and enabled fields
  for (let field of fields) {
    field.value = "";
  }
}

function SubmChec_OtheDocuRema20_change(element) {
  let textarea = document.getElementById("SubmChec_OtheDocuRema10");

  if (element.checked) {
    textarea.removeAttribute("disabled");
    textarea.setAttribute("mandatory", "");
  } else {
    textarea.removeAttribute("mandatory");
    textarea.setAttribute("disabled", "");
    textarea.value = "";
  }
}
function SubmChec_TheFollDocuMust_FormBpdCcs01Cert10_change(element) {
  let textbox = document.getElementById("SubmChec_TheConsScorIs10");

  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}
function SubmChec_TheFollDocuMust_FormBpdBs03AsBuil10_change(element) {
  let textboxes = [
    document.getElementById("SubmChec_TheBuilDesiScor10"),
    document.getElementById("SubmChec_ForGfaOf10"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}
function SubmChec_NotiOfAppoAuth_change(element) {
  let datefield = document.getElementById("SubmChec_NotiOfAppoAuth40");
  switch (element.id) {
    case "SubmChec_NotiOfAppoAuth20":
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("disabled", "");
      datefield.value = "";
      break;
    case "SubmChec_NotiOfAppoAuth30":
      datefield.removeAttribute("disabled");
      datefield.setAttribute("mandatory", "");
      break;
  }
}
function SubmChec_NotiOfAppoAuth10_change(element) {
  let datefield = document.getElementById("SubmChec_NotiOfAppoAuth40");
  let radios = document.querySelectorAll(
    "[name='SubmChec_NotiOfAppoAuth_name']"
  );
  if (element.checked) {
    document.getElementById("SubmChec_NotiOfAppoAuth20").checked = true;
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";

    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
  }
}
// Dev Form functions

function dvFormAdd_click(parent) {
  parent = document.getElementById(parent);
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      div.querySelector("cn2-button").removeAttribute("disabled");
    }
  }
}
function dvFormDelete_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length == 1) {
    targetDiv[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}

// ST Form functions

function stFormAdd_Click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
      div.querySelector("cn2-button").removeAttribute("disabled");
      div.querySelector("cn2-textbox").removeAttribute("data-invalid");
      div.querySelector("cn2-textbox").removeAttribute("data-invalid-message");
    }
  }
  let target = targetDiv[targetDiv.length - 1];
  if (document.getElementById("ApplType_BuilWork10").checked) {
    target.querySelector("cn2-select").value = "BP";
  }
}
function stFormDelete_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length == 1) {
    targetDiv[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}
function PartOfAppl_PlanTypeB_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value == "000") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Plan Type should not be 000. Please try again."
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

//particular of dev functions
function particularsOfApplicationFormAdd_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id") && !div.hasAttribute("child")) {
      targetDiv.push(div);
      div.querySelector("cn2-button").removeAttribute("disabled");
      div
        .querySelector("[prefix='Members_UEN_OWNER']")
        .removeAttribute("data-invalid");
      div
        .querySelector("[prefix='Members_UEN_OWNER']")
        .removeAttribute("data-invalid-message");
    }
  }
}
function particularsOfApplicationFormDelete_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id") && div.hasAttribute("parent")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length == 1) {
    targetDiv[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
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
    d.getFullYear < 1900
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
function removeMandatoryCheck(element) {
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}
function DeclByQualPers_TheBuilWorkHave10_change(element) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_TheBuilWorkHave_name']"
  );
  let textbox = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20"
  );
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function DeclByQualPers_TheBuilWorkHave_change(element) {
  let datefield = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20"
  );

  switch (element.id) {
    case "DeclByQualPers_TheBuilWorkHave20":
      datefield.setAttribute("mandatory", "");
      datefield.removeAttribute("disabled");
      break;
    case "DeclByQualPers_TheBuilWorkHave_WithAPerm10":
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("disabled", "");
      datefield.value = "";
      break;
  }
}

function togglePartQp() {
  document.getElementById("Members_UEN_QP10").value = "";
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
    .removeAttribute("data-invalid-message");
}
function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function atLeastOne(e) {
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

function otherTextBox(el, field) {
  if (el.checked) {
    document.getElementById(field).removeAttribute("hidden");
    document.getElementById(field).setAttribute("mandatory", "");
  } else {
    document.getElementById(field).removeAttribute("mandatory");
    document.getElementById(field).setAttribute("hidden", "");
    document.getElementById(field).value = "";
  }
}

function DeclByQualPers_LiftAndEsca_change(el) {
  if (el.value == 0) {
    document.getElementById(el.id).value = "";
  } else {
    document.getElementById(el.id).value = el.value;
  }
}

function PartOfAppl_DateOfPermTo10_change() {
  let permit = document.getElementById("PartOfAppl_DateOfPermTo10");
  let completion = document.getElementById("PartOfAppl_DateOfComp10");

  if (completion.value) {
    if (permit.value > completion.value) {
      permit.setAttribute("data-invalid", "");
      permit.setAttribute(
        "data-invalid-message",
        "Date of Permit to commence work field should not be later than the Date of completion"
      );
      completion.removeAttribute("data-invalid");
      completion.removeAttribute("data-invalid-message");
    } else {
      permit.removeAttribute("data-invalid");
      permit.removeAttribute("data-invalid-message");
    }
  } else {
    permit.removeAttribute("data-invalid");
    permit.removeAttribute("data-invalid-message");
  }
}

function PartOfAppl_DateOfComp10_change() {
  let permit = document.getElementById("PartOfAppl_DateOfPermTo10");
  let completion = document.getElementById("PartOfAppl_DateOfComp10");

  if (permit.value) {
    if (completion.value < permit.value) {
      completion.setAttribute("data-invalid", "");
      completion.setAttribute(
        "data-invalid-message",
        "Date of Completion field should not be earlier than Date of Permit to commence work"
      );
      permit.removeAttribute("data-invalid");
      permit.removeAttribute("data-invalid-message");
    } else {
      completion.removeAttribute("data-invalid");
      completion.removeAttribute("data-invalid-message");
    }
  } else {
    completion.removeAttribute("data-invalid");
    completion.removeAttribute("data-invalid-message");
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
          if (
            [
              "PartOfAppl_FinaBuilCostExcl10",
              "PartOfAppl_PlanType20",
              "DeclByQualPers_TheLastApprPlan20",
              "DeclByQualPers_SubmToShowThe10",
            ].includes(id)
          ) {
            jsonData[id] = +targetElement.value + "";
          } else if ([].includes(id)) {
            jsonData[id] =
              targetElement.value == "0" ? "" : targetElement.value;
          } else if ([].includes(id)) {
            jsonData[id] = targetElement.value || "0.00";
          } else if ([].includes(id)) {
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
