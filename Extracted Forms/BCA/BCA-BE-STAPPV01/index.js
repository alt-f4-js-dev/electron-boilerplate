document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(
    "cn2-master-head"
  ).title = `APPLICATION FOR APPROVAL OF STRUCTURAL PLANS <br> [Section 5/Section 5A of Building Control Act (Cap 29)]`;

  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    document.getElementById("FeeComForBuilWork10").click();
    document.getElementById("FeeComForBuilWork20").click();

    let run = setTimeout(() => {
      getProjPermitList();

      getPlanFeeRateType();
      clearTimeout(run);
    }, 300);
  }

  for (let f of document.querySelectorAll(".feeTable_textbox")) {
    f.addEventListener("focus", (e) => {
      let val = e.target.value;

      if (parseFloat(val) == 0) {
        e.target.removeAttribute("mandatory");
        e.target.value = "";
      }
    });
  }

  for (let f of document.querySelectorAll(".feeTable_textbox")) {
    f.addEventListener("blur", (e) => {
      let val = e.target.value;

      if (val.trim() == "") e.target.value = "0";
    });
  }
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
  let value = document.getElementById(element.id);
  let textarea = document.getElementById("Addr20");
  if (value.value == "BCA") {
    textarea.value =
      "Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550\n";
  } else {
    textarea.value =
      "Defence Science & Technology Agency\nBuilding & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
  }
  textarea.adjustHeigth();
}

function DCSubmissionDate20_change(element) {
  let datefield = document.getElementById("PartOfAppl_FirsApplDateFor10");
  let mandSign = document.getElementById("projDetaDate");
  if (element.checked) {
    datefield.value = "";
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory");
    mandSign.textContent = "";
  } else {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
    mandSign.textContent = "*";
  }
}

function bimSubYesNo_change(element) {
  let selectedId = element.id;
  let BIMsRadio = document.querySelectorAll("[name='bimSubYesNo']");
  let groupYes = [
    document.getElementById("PartOfAppl_3DBIMSubmYes20"),
    document.getElementById("PartOfAppl_3DBIMSubmYes30"),
  ];
  for (let radio of BIMsRadio) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  switch (selectedId) {
    case "PartOfAppl_3DBIMSubmYes10":
      for (let member of groupYes) {
        member.removeAttribute("disabled");
        member.setAttribute("checked", "");
        member.setAttribute("mandatory", "");
      }
      break;
    case "PartOfAppl_3DBIMSubmNo10":
      for (let member of groupYes) {
        member.setAttribute("disabled", "");
        member.checked = false;
        member.removeAttribute("checked");
        member.removeAttribute("mandatory");
      }
      break;
  }
}

function PartOfAppl_PsiRefNo10_change(element) {
  let referenceGroup = [
    document.getElementById("Project_SubmFromPSISDSM10"),
    document.getElementById("Project_SubmFromPSISDSD10"),
    document.getElementById("Project_SubmFromPSISDSMB10"),
    document.getElementById("Project_SubmFromPSISDENF10"),
  ];
  let fieldGroups = [
    document.getElementById("PartOfAppl_PsiSmRefNo10"),
    document.getElementById("PartOfAppl_PsiSmRefNo20"),
    document.getElementById("PartOfAppl_PsiSmRefNo30"),
    document.getElementById("PartOfAppl_PsiSdRefNo10"),
    document.getElementById("PartOfAppl_PsiSdRefNo20"),
    document.getElementById("PartOfAppl_PsiSmbRefNo10"),
    document.getElementById("PartOfAppl_PsiSmbRefNo20"),
    document.getElementById("PartOfAppl_PsiSmbRefNo30"),
    document.getElementById("PartOfAppl_PsiSmbRefNo40"),
    document.getElementById("PartOfAppl_PsiEnfRefNo10"),
    document.getElementById("PartOfAppl_PsiEnfRefNo20"),
  ];
  let labelId = [
    document.getElementById("smId"),
    document.getElementById("sdId"),
    document.getElementById("smbId"),
    document.getElementById("enfId"),
  ];

  let hiddenCheckboxOFF = document.getElementById("PartOfAppl_PsiRefNoNot10");

  if (element.checked) {
    for (let refMember of referenceGroup) {
      refMember.removeAttribute("disabled");
    }
  } else {
    jsonData[hiddenCheckboxOFF.id].value = "on";

    for (let label of labelId) {
      if (label.innerHTML.includes("*")) {
        label.innerHTML = label.innerHTML.trim().slice(0, -2);
      }
    }
    for (let refMember of referenceGroup) {
      refMember.setAttribute("disabled", "");
      refMember.checked = false;
    }
    for (let fieldMember of fieldGroups) {
      fieldMember.setAttribute("disabled", "");
      fieldMember.removeAttribute("mandatory");
      fieldMember.value = "";
    }
  }
}

function DeclByAppl_change() {
  let pass = false;
  let span = document.getElementById("ClassOfWorkSpan_id");
  let checkboxes = document.querySelectorAll("[group-id='DeclByAppl_id']");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    span.innerHTML = "Classification of works";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    span.innerHTML = "Classification of works *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function refRb_change(element) {
  let refId = element.id;

  let groupSm = [
    document.getElementById("PartOfAppl_PsiSmRefNo10"),
    document.getElementById("PartOfAppl_PsiSmRefNo20"),
    document.getElementById("PartOfAppl_PsiSmRefNo30"),
  ];

  let groupSd = [
    document.getElementById("PartOfAppl_PsiSdRefNo10"),
    document.getElementById("PartOfAppl_PsiSdRefNo20"),
  ];

  let groupSmb = [
    document.getElementById("PartOfAppl_PsiSmbRefNo10"),
    document.getElementById("PartOfAppl_PsiSmbRefNo20"),
    document.getElementById("PartOfAppl_PsiSmbRefNo30"),
    document.getElementById("PartOfAppl_PsiSmbRefNo40"),
  ];

  let groupEnf = [
    document.getElementById("PartOfAppl_PsiEnfRefNo10"),
    document.getElementById("PartOfAppl_PsiEnfRefNo20"),
  ];

  let targetMembers = new Array();
  let otherMembers = new Array();

  switch (refId) {
    case "Project_SubmFromPSISDSM10":
      targetMembers = groupSm;
      otherMembers = otherMembers.concat(groupSd, groupSmb, groupEnf);
      document.getElementById("smId").innerHTML = "SM *";
      document.getElementById("sdId").innerHTML = "SD";
      document.getElementById("smbId").innerHTML = "SMB";
      document.getElementById("enfId").innerHTML = "ENF";
      break;
    case "Project_SubmFromPSISDSD10":
      targetMembers = groupSd;
      otherMembers = otherMembers.concat(groupSm, groupSmb, groupEnf);
      document.getElementById("sdId").innerHTML = "SD *";
      document.getElementById("smId").innerHTML = "SM";
      document.getElementById("smbId").innerHTML = "SMB";
      document.getElementById("enfId").innerHTML = "ENF";
      break;
    case "Project_SubmFromPSISDSMB10":
      targetMembers = groupSmb;
      otherMembers = otherMembers.concat(groupSm, groupSd, groupEnf);
      document.getElementById("smbId").innerHTML = "SMB *";
      document.getElementById("sdId").innerHTML = "SD";
      document.getElementById("smId").innerHTML = "SM";
      document.getElementById("enfId").innerHTML = "ENF";

      break;
    case "Project_SubmFromPSISDENF10":
      targetMembers = groupEnf;
      otherMembers = otherMembers.concat(groupSm, groupSmb, groupSd);
      document.getElementById("enfId").innerHTML = "ENF *";
      document.getElementById("sdId").innerHTML = "SD";
      document.getElementById("smId").innerHTML = "SM";
      document.getElementById("smbId").innerHTML = "SMB";
      break;
  }

  for (let member of targetMembers) {
    member.removeAttribute("disabled");
    member.setAttribute("mandatory", "");
  }

  for (let member of otherMembers) {
    member.setAttribute("disabled", "");
    member.removeAttribute("mandatory");
    member.value = "";
  }
}

function DeclByAppl_TypeOfWork20_change(element) {
  let checkboxGroup = [
    document.getElementById("DeclByAppl_TypeOfWork_BorePile10"),
    document.getElementById("DeclByAppl_TypeOfWork_BoreMicrPile10"),
    document.getElementById("DeclByAppl_TypeOfWork_DrivSteeMicrPile10"),
    document.getElementById("DeclByAppl_TypeOfWork_DrivRcPile10"),
    document.getElementById("DeclByAppl_TypeOfWork_JackRcPile10"),
    document.getElementById("DeclByAppl_TypeOfWork_Others10"),
  ];

  if (element.checked) {
    document.getElementById("TOPPiliWork_span_id").innerHTML = "Piling Works *";
    for (let member of checkboxGroup) {
      member.removeAttribute("disabled");
      member.setAttribute("checked", "");
      member.setAttribute("mandatory", "");
    }
  } else {
    document.getElementById("TOPPiliWork_span_id").innerHTML = "Piling Works";
    for (let member of checkboxGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
      member.removeAttribute("checked");
      member.removeAttribute("mandatory");
    }
  }
}

function DeclByAppl_TypeOf_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='DeclByAppl_TypeOf_id']"
  );
  let pass = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    document.getElementById("TOP_span_id").innerHTML = "Type of works";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    document.getElementById("TOP_span_id").innerHTML = "Type of works *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_TypeOfWork_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='DeclByAppl_TypeOfWorkcid']"
  );
  let pass = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    document.getElementById("TOPPiliWork_span_id").innerHTML = "Piling Works";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    document.getElementById("TOPPiliWork_span_id").innerHTML = "Piling Works *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_TypeOfWork70_change(element) {
  let inputGroup = [
    document.getElementById("DeclByAppl_TypeOfWork_NoOfBaseLeve10"),
    document.getElementById("DeclByAppl_TypeOfWork_TotaDept10"),
  ];
  let labelIds = document.querySelectorAll("[group-id='basementLabelId']");
  if (element.checked) {
    for (let input of inputGroup) {
      input.removeAttribute("disabled");
      input.setAttribute("mandatory", "");
    }
    for (let label of labelIds) {
      label.innerHTML = label.innerHTML + " *";
    }
  } else {
    for (let input of inputGroup) {
      input.setAttribute("disabled", "");
      input.removeAttribute("mandatory");
      input.value = "";
    }
    for (let label of labelIds) {
      label.innerHTML = label.innerHTML.trim().slice(0, -2);
    }
  }
}

function DeclByAppl_TypeOfWork30_change(element) {
  let input = document.getElementById("DeclByAppl_TypeOfWork_FootRaftFounNo");
  let divLabel = document.getElementById("footRaftFounDivId");
  if (element.checked) {
    divLabel.innerHTML = divLabel.innerHTML + " *";
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
  } else {
    divLabel.innerHTML = divLabel.innerHTML.trim().slice(0, -2);
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
  }
}

function DeclByAppl_TypeOfWork90_change(element) {
  let select = document.getElementById("DeclByAppl_TypeOfWork_TuneSeweWork10");
  let label = document.getElementById("tunelSeweWork_id");
  if (element.checked) {
    label.innerHTML = label.innerHTML + " *";
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
  } else {
    label.innerHTML = label.innerHTML.trim().slice(0, -2);
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    select.value = "";
  }
}

function setTuneSeweWork20(element) {
  let tuneSeweWork10 = element.value;
  let tuneSeweWork20 = document.getElementById(
    "DeclByAppl_TypeOfWork_TuneSeweWork20"
  );

  if (tuneSeweWork10 != "") {
    tuneSeweWork20.value = tuneSeweWork10;
  } else {
    tuneSeweWork20.value = "";
  }
}

function DeclByAppl_usage_change() {
  let checkboxes = document.querySelectorAll("[group-id='DeclByAppl_idUsage']");
  let pass = false;
  let label = document.getElementById("usage_label_id");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    label.innerHTML = "Usage";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    label.innerHTML = "Usage *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_DesiBuil_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='DeclByAppl_DesiBuil_id']"
  );
  let pass = false;
  let label = document.getElementById("TypeOfDeve_id");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    label.innerHTML = "Type of Development";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    label.innerHTML = "Type of Development *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_TypeOfWork60_change(element) {
  let radioGroup = [
    document.getElementById("DeclByAppl_TypeOfWork_DeptLessThanFour10"),
    document.getElementById("DeclByAppl_TypeOfWork_DeptMoreThanFour10"),
    document.getElementById("DeclByAppl_TypeOfWork_DeptMoreThanSix10"),
  ];
  let checkboxGroup = [
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS20"),
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS50"),
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS30"),
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS60"),
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS40"),
    document.getElementById("DeclByAppl_TypeOfWork_TypeOfERSS70"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth20"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth50"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth30"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth60"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth40"),
    document.getElementById("DeclByAppl_TypeOfWork_ConsMeth70"),
    document.getElementById("DeclByAppl_TypeOfWork_WallType20"),
    document.getElementById("DeclByAppl_TypeOfWork_WallType40"),
    document.getElementById("DeclByAppl_TypeOfWork_WallType30"),
    document.getElementById("DeclByAppl_TypeOfWork_WallType50"),
  ];
  let otherGroup = [
    document.getElementById("DeclByAppl_TypeOfWork_DeptMoreThanSix20"),
    document.getElementById("DeclByAppl_TypeOfWork_TheEartRetaStru10"),
  ];

  let selectElement = document.getElementById(
    "DeclByAppl_TypeOfWork_TheEartRetaStru10"
  );

  if (element.checked) {
    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
      radio.setAttribute("mandatory", "");
      radio.setAttribute("checked", "");
    }
    for (let checkbox of checkboxGroup) {
      checkbox.removeAttribute("disabled");
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
    selectElement.removeAttribute("disabled");
    selectElement.setAttribute("mandatory", "");
  } else {
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.removeAttribute("mandatory");
      radio.removeAttribute("checked");
      radio.checked = false;
    }
    for (let checkbox of checkboxGroup) {
      checkbox.setAttribute("disabled", "");
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }
    for (let other of otherGroup) {
      other.setAttribute("disabled", "");
      other.removeAttribute("mandatory");
      other.value = "";
    }
  }
}

function earthRb_change(element) {
  let refId = element.id;
  let item12 = document.getElementById("DeclByAppl_Appo20");
  // let item12Manda = document.getElementById("no12Manda");
  let targetInput = document.getElementById(
    "DeclByAppl_TypeOfWork_DeptMoreThanSix20"
  );
  let hiddenTypeOfWork20 = document.getElementById(
    "DeclByAppl_EartRetaStru_TypeOfWork20"
  );

  switch (refId) {
    case "DeclByAppl_TypeOfWork_DeptMoreThanSix10":
      targetInput.removeAttribute("disabled");
      targetInput.setAttribute("mandatory", "");
      item12.setAttribute("mandatory", "");
      item12.setAttribute("checked", "");
      // item12Manda.textContent = "*";
      break;
    default:
      targetInput.setAttribute("disabled", "");
      targetInput.removeAttribute("mandatory");
      targetInput.value = "";
      item12.removeAttribute("mandatory");
      item12.removeAttribute("checked");
      // item12Manda.textContent = "";
      break;
  }
  if (refId == "DeclByAppl_TypeOfWork_DeptMoreThanSix10") {
    hiddenTypeOfWork20.value = "DG6M";
  } else if (refId == "DeclByAppl_TypeOfWork_DeptMoreThanFour10") {
    hiddenTypeOfWork20.value = "DG4L6";
  } else if (refId == "DeclByAppl_TypeOfWork_DeptLessThanFour10") {
    hiddenTypeOfWork20.value = "DL4M";
  } else {
    hiddenTypeOfWork20.value = "";
  }
}

function DeclByAppl_UseOfSpecCons_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='DeclByAppl_UseOfSpecCons_id']"
  );
  let pass = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    document.getElementById("UseOfSpecConsLabel_id").innerHTML =
      "Use of special construction/ systems:";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    document.getElementById("UseOfSpecConsLabel_id").innerHTML =
      "Use of special construction/ systems: *";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_UseOfSpecCons10_change(element) {
  let checkboxGroup = [
    document.getElementById("DeclByAppl_UseOfSpecCons_PPVC20"),
    document.getElementById("DeclByAppl_UseOfSpecCons_HighStreStruStee10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_RecyConcAggr10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_PPVCConc10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_HighStreStreConc10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_GrouGranBlasSlag10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_VoidForm10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_FibrReinPolyFor10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_WashCoppSlag10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_GlueLamiTimb10"),
    document.getElementById("DeclByAppl_UseOfSpecCons_CrosLamiTimb10"),
  ];

  let inputGroup = [
    document.getElementById("DeclByAppl_UseOfSpecCons_RecyConcAggr20"),
    document.getElementById("DeclByAppl_UseOfSpecCons_GrouGranBlasSlag20"),
    document.getElementById("DeclByAppl_UseOfSpecCons_WashCoppSlag20"),
  ];

  if (element.checked) {
    document.getElementById("UseOfSpecConsLabel_id").innerHTML =
      "Use of special construction/ systems: *";
    for (let checkbox of checkboxGroup) {
      checkbox.removeAttribute("disabled");
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    document.getElementById("UseOfSpecConsLabel_id").innerHTML =
      "Use of special construction/ systems:";
    for (let checkbox of checkboxGroup) {
      checkbox.setAttribute("disabled", "");
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
    for (let input of inputGroup) {
      input.setAttribute("disabled", "");
      input.removeAttribute("mandatory");
      input.removeAttribute("data-invalid");
      input.value = "";
    }
  }
}

function DeclByAppl_IHereApplFor_AmenPlanToProj20_change(element, parent) {
  let inputGroup = document.querySelectorAll(
    "[id-group='DeclByAppl_ThePlanAre_AmenPlanToStru_B']"
  );
  parent = document.getElementById(parent);
  let addButton = document.getElementById("DeclByAppl_Add10");
  let buttonGroup = parent.querySelectorAll("cn2-button");
  if (element.checked) {
    for (let input of inputGroup) {
      input.removeAttribute("disabled");
      input.setAttribute("mandatory", "");
    }
    for (let button of buttonGroup) {
      button.removeAttribute("disabled");
    }
    addButton.removeAttribute("disabled");
  } else {
    for (let input of inputGroup) {
      input.setAttribute("disabled", "");
      input.removeAttribute("mandatory");
      input.value = "";
    }
    for (let button of buttonGroup) {
      button.setAttribute("disabled", "");
    }
    addButton.setAttribute("disabled", "");
  }
  document.querySelector(".DeclByAppl_Delete").setAttribute("disabled", "");

  let formField = document.querySelectorAll(".Bfields");
  for (let i = 0; i < formField.length; i++) {
    if (i != 0) {
      formField[i].parentNode.removeChild(formField[i]);
    }
  }
}

function DeclByAppl_UseOfSpecCons_RecyConcAggr10_change(element) {
  let input = document.getElementById(
    "DeclByAppl_UseOfSpecCons_RecyConcAggr20"
  );

  if (element.checked) {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    input.removeAttribute("data-invalid");
  } else {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.removeAttribute("data-invalid");
    input.value = "";
  }
}

function DeclByAppl_UseOfSpecCons_GrouGranBlasSlag10_change(element) {
  let input = document.getElementById(
    "DeclByAppl_UseOfSpecCons_GrouGranBlasSlag20"
  );

  if (element.checked) {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    input.removeAttribute("data-invalid");
  } else {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.removeAttribute("data-invalid");
    input.value = "";
  }
}

function DeclByAppl_UseOfSpecCons_WashCoppSlag10_change(element) {
  let input = document.getElementById(
    "DeclByAppl_UseOfSpecCons_WashCoppSlag20"
  );

  if (element.checked) {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    input.removeAttribute("data-invalid");
  } else {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.removeAttribute("data-invalid");
    input.value = "";
  }
}

function UseOfStruStee_UseOfStruSteeYes10_change(element) {
  let input = document.getElementById("UseOfStruStee_TotalTonnOfStru10");

  if (element.checked) {
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
  } else {
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
  }
}

function UseOfStruStee_UseOfStruStee10_change(element) {
  let input = document.getElementById("UseOfStruStee_TotalTonnOfStru10");
  let switchElement = document.querySelector(
    "[switch-id='UseOfStruStee_UseOfStruSteeYes10']"
  );
  let span = document.getElementById("UseOfStruSteeLabel_Id");
  if (element.checked) {
    span.innerHTML = "Use of structural steel *";
    switchElement.removeAttribute("disabled");
  } else {
    span.innerHTML = "Use of structural steel";
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
    switchElement.setAttribute("disabled", "");
    switchElement.checked = false;
  }
}

function TypeOfBuilWork_NewBuilBuilWork10_change(element) {
  let input = document.getElementById("AreaStorSub_StatGrosFlooArea10");
  let input2 = document.getElementById("CompFees10");
  let input3 = document.getElementById("SubsCompFees10");
  let input4 = document.getElementById("AreaStorSub_StatGrosFlooArea210");
  let label = document.getElementById("AllBuil");

  if (element.checked) {
    label.innerHTML = "All Building";
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    input4.removeAttribute("disabled");
    input.value = "0";
  } else {
    label.innerHTML = "All Building";
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input4.setAttribute("disabled", "");
    input4.removeAttribute("mandatory");
    input.value = "0";
    input2.value = "0";
    input3.value = "0";
    input4.value = "0";
  }

  PaymMode_Paym10_update();
}

function AreaStorSub_StatGrosFlooArea10_change(element) {
  let value = document.getElementById("AreaStorSub_StatGrosFlooArea10").value;
  let resultField = document.getElementById("CompFees10");
  let resultField2 = document.getElementById("SubsCompFees10");
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea210");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value != "" || sgfaField2.value != "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(200 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(200 * temp).toFixed(2);
    }
  } else if (sgfaField2.value == "" || sgfaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "200.00";
  }

  PaymMode_Paym10_update();
}

function TypeOfBuilWork_NewStru10_change(element) {
  let input = document.getElementById("AreaStorSub_PlanArea10");
  let input2 = document.getElementById("CompFees20");
  let input3 = document.getElementById("SubsCompFees20");
  let input4 = document.getElementById("AreaStorSub_PlanArea210");
  let label = document.getElementById("AllStru");

  if (element.checked) {
    label.innerHTML = "All Structures";
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
    input4.removeAttribute("disabled");
    input.value = "0";
  } else {
    label.innerHTML = "All Structures";
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input4.setAttribute("disabled", "");
    input4.removeAttribute("mandatory");
    input.value = "0";
    input2.value = "0";
    input3.value = "0";
    input4.value = "0";
  }

  PaymMode_Paym10_update();
}

// function AreaStorSub_NoOfStor10_change(element) {
//   let targetInput = document.getElementById("CompFees30");

//   targetInput.value = calculationFormula2(element.value, 200);
//   PaymMode_Paym10_update();
// }

// function Crit_ResiBuil10_change(element) {
//   let input = document.getElementById("AreaStorSub_ResiBuilNoOfStor10");
//   let input2 = document.getElementById("CompFees40");

//   if (element.checked) {
//     input.removeAttribute("disabled");
//   } else {
//     input.setAttribute("disabled", "");
//     input.value = 0;
//     input2.value = 0;
//   }

//   PaymMode_Paym10_update();
// }

// function AreaStorSub_ResiBuilNoOfStor10_change(element) {
//   let targetInput = document.getElementById("CompFees40");

//   targetInput.value = calculationFormula2(element.value, 200);
//   PaymMode_Paym10_update();
// }

// function Crit_NonResiBuil10_change(element) {
//   let input = document.getElementById("AreaStorSub_NonResiBuilNoOfStor10");
//   let input2 = document.getElementById("CompFees50");

//   if (element.checked) {
//     input.removeAttribute("disabled");
//   } else {
//     input.setAttribute("disabled", "");
//     input.value = 0;
//     input2.value = 0;
//   }

//   PaymMode_Paym10_update();
// }

// function AreaStorSub_NonResiBuilNoOfStor10_change(element) {
//   let targetInput = document.getElementById("CompFees50");

//   targetInput.value = calculationFormula2(element.value, 400);
//   PaymMode_Paym10_update();
// }

// function TypeOfBuilWork_AmenDeviToAppr10_change(element) {
//   let input = document.getElementById("Crit_AllBuilStruNoOfStor10");
//   let input2 = document.getElementById("CompFees60");

//   if (element.checked) {
//     input.removeAttribute("disabled");
//   } else {
//     input.setAttribute("disabled", "");
//     input.value = 0;
//     input2.value = 0;
//   }

//   PaymMode_Paym10_update();
// }

// function Crit_AllBuilStruNoOfStor10_change(element) {
//   let targetInput = document.getElementById("CompFees60");

//   targetInput.value = calculationFormula2(element.value, 200);
//   PaymMode_Paym10_update();
// }

// function TypeOfBuilWork_Demolition10_change(element) {
//   let inputGroup1 = [
//     document.getElementById("GenBldg_DemolitionNoOfStor10"),
//     document.getElementById("SpecBldg_DemolitionHeightOfBldg10")
//   ];
//   let inputGroup2 = [
//     document.getElementById("CompFees70"),
//     document.getElementById("CompFees80")
//   ];

//   if (element.checked) {
//     for (let input of inputGroup1) {
//       input.removeAttribute("disabled");
//     }
//   } else {
//     for (let input of inputGroup1) {
//       input.setAttribute("disabled", "");
//       input.value = 0;
//     }
//     for (let input of inputGroup2) {
//       input.value = 0;
//     }
//   }

//   PaymMode_Paym10_update();
// }

// function GenBldg_DemolitionNoOfStor10_change(element) {
//   let targetInput = document.getElementById("CompFees70");

//   targetInput.value = calculationFormula2(element.value, 200);
//   PaymMode_Paym10_update();
// }

// function SpecBldg_DemolitionHeightOfBldg10_change(element) {
//   let targetInput = document.getElementById("CompFees80");

//   targetInput.value = calculationFormula3(element.value, 200, 5);
//   PaymMode_Paym10_update();
// }

// function TypeOfBuilWork_NewStru15_change(element) {
//   let inputGroup1 = [
//     document.getElementById("AreaStorSub_PlanArea15"),
//     document.getElementById("AreaStorSub_PlanArea18")
//   ];
//   let inputGroup2 = [
//     document.getElementById("CompFees25"),
//     document.getElementById("CompFees28")
//   ];

//   if (element.checked) {
//     for (let input of inputGroup1) {
//       input.removeAttribute("disabled");
//     }
//   } else {
//     for (let input of inputGroup1) {
//       input.setAttribute("disabled", "");
//       input.value = 0;
//     }
//     for (let input of inputGroup2) {
//       input.value = 0;
//     }
//   }

//   PaymMode_Paym10_update();
// }

function AreaStorSub_StatGrosFlooArea90_change(element) {
  let resultField = document.getElementById("CompFees90");
  let value = element.value;

  if ((value != "" || value != "0") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0") {
    resultField.value = "0";
  } else {
    resultField.value = "400.00";
  }

  PaymMode_Paym10_update();
}

function AreaStorSub_StatGrosFlooArea100_change(element) {
  let value = document.getElementById("AreaStorSub_StatGrosFlooArea23").value;
  let resultField = document.getElementById("CompFees100");
  let resultField2 = document.getElementById("SubsCompFees100");
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea223");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(150 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(150 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "150.00";
  }

  if (
    (sgfaField2.value != "" || sgfaField2.value != "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(220 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(220 * temp).toFixed(2);
    }
  } else if (sgfaField2.value == "" || sgfaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "220.00";
  }

  PaymMode_Paym10_update();
}

function AreaStorSub_PlanArea15_change(element) {
  let resultField = document.getElementById("CompFees25");
  let value = element.value;

  if ((value != "" || value != "0") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0") {
    resultField.value = "";
  } else {
    resultField.value = "400.00";
  }
}

function AreaStorSub_StatGrosFlooArea28_change(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees28");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 240;
    let final = 7500 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = "";
  }
  PaymMode_Paym10_update();
}

// function AreaStorSub_PlanArea15_change(element) {
//  let targetInput = document.getElementById("CompFees25");

//    targetInput.value = calculationFormula2(element.value, 400);
//    PaymMode_Paym10_update();
//  }

function PaymMode_Paym10_update() {
  let input = document.getElementById("PaymMode_Paym10");
  let memberList = [
    document.getElementById("CompFees10"),
    document.getElementById("SubsCompFees10"),
    document.getElementById("CompFees20"),
    document.getElementById("SubsCompFees20"),
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
    document.getElementById("CompFees35"),
    document.getElementById("CompFees38"),
    document.getElementById("SubsCompFees38"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    document.getElementById("CompFees70"),
    document.getElementById("CompFees80"),
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
  ];

  let total = 0;

  for (let member of memberList) {
    let targetValue = member.value;
    if (targetValue) {
      let floatValue = parseFloat(targetValue);
      total += floatValue;
    }
  }

  input.value = total;
}

function pMode_change(element) {
  let refId = element.id;

  // let chequeGroup = [
  //   document.getElementById("PaymMode_Cheq20"),
  //   document.getElementById("PaymMode_Cheq40"),
  //   document.getElementById("PaymMode_Cheq30"),
  //   document.getElementById("PaymMode_Cheq50"),
  // ];

  // let giroGroup = [
  //   document.getElementById("PaymMode_Giro20"),
  //   document.getElementById("PaymMode_Giro50"),
  //   document.getElementById("PaymMode_Giro40"),
  // ];

  // let paidEarlierGroup = [document.getElementById("PaymMode_PaidEarl20")];

  switch (
    refId
    // case "PaymMode_Cheq10":
    //   for (let member of chequeGroup) {
    //     member.removeAttribute("disabled");
    //     member.setAttribute("mandatory", "");
    //   }

    //   for (let member of giroGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }

    //   for (let member of paidEarlierGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }
    //   break;
    // case "PaymMode_Giro10":
    //   for (let member of chequeGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }

    //   for (let member of giroGroup) {
    //     member.removeAttribute("disabled");
    //     member.setAttribute("mandatory", "");
    //   }

    //   for (let member of paidEarlierGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }
    //   break;
    // case "PaymMode_PaidEarl10":
    //   for (let member of chequeGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }

    //   for (let member of giroGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }

    //   for (let member of paidEarlierGroup) {
    //     member.removeAttribute("disabled");
    //     member.setAttribute("mandatory", "");
    //   }
    //   break;
    // default:
    //   for (let member of chequeGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //   }

    //   for (let member of giroGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }

    //   for (let member of paidEarlierGroup) {
    //     member.setAttribute("disabled", "");
    //     member.removeAttribute("mandatory");
    //     member.value = "";
    //   }
    //   break;
  ) {
  }
}

function DeclByAppl_BefoMakeThisAppl10_change(element) {
  let radioGroup = [
    document.getElementById("DeclByAppl_Appo_AccrChecUndeSect10"),
    document.getElementById("DeclByAppl_Appo_AccrChecActiOn10"),
  ];
  let inputGroup = [
    document.getElementById("MemberRole_Professional_No_AC10"),
    document.getElementById("Member_Member_Name_ACO20"),
    document.getElementById("MemberRole_Professional_No_ACO10"),
    document.getElementById("MemberRole_Professional_No_AC20"),
    document.getElementById("Member_Member_SID_AC10"),
    document.getElementById("Member_Member_SID_ACO20"),
    document.getElementById("Member_Member_SID_AC20"),
  ];
  let selectGroup = [
    document.getElementById("Member_Member_Name_AC10"),
    document.getElementById("Member_Member_Name_ACO10"),
    document.getElementById("Member_Member_Name_AC20"),
  ];

  if (element.checked) {
    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
    }
  } else {
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let input of inputGroup) {
      input.setAttribute("disabled", "");
      input.removeAttribute("mandatory");
      input.value = "";
    }
    for (let select of selectGroup) {
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
    }
  }

  if (
    document.getElementById("DeclByAppl_ValuOfBuilWork10").value >= 15000000
  ) {
    document
      .getElementById("Member_Member_Name_AC20")
      .setAttribute("disabled", "");
    document
      .getElementById("Member_Member_Name_AC20")
      .removeAttribute("mandatory");
    document
      .getElementById("MemberRole_Professional_No_AC20")
      .setAttribute("disabled", "");
    document
      .getElementById("MemberRole_Professional_No_AC20")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByAppl_Appo_AccrChecActiOn10")
      .setAttribute("disabled", "");
  }
}

function RDACName_change(element) {
  let refId = element.id;
  let selectGroup1 = [
    document.getElementById("Member_Member_Name_AC10"),
    document.getElementById("Member_Member_Name_ACO10"),
    document.getElementById("Member_Member_Name_ACO20"),
  ];
  let inputGroup1 = [
    document.getElementById("MemberRole_Professional_No_AC10"),
    document.getElementById("MemberRole_Professional_No_ACO10"),
  ];
  let selectGroup2 = [document.getElementById("Member_Member_Name_AC20")];
  let inputGroup2 = [
    document.getElementById("MemberRole_Professional_No_AC20"),
  ];
  let sid1 = document.getElementById("Member_Member_SID_AC10");
  let sid2 = document.getElementById("Member_Member_SID_ACO20");
  let sid3 = document.getElementById("Member_Member_SID_AC20");

  switch (refId) {
    case "DeclByAppl_Appo_AccrChecUndeSect10":
      for (let select of selectGroup1) {
        select.removeAttribute("disabled");
        select.setAttribute("mandatory", "");
      }
      for (let select of selectGroup2) {
        select.setAttribute("disabled", "");
        select.removeAttribute("mandatory");
        select.value = "";
      }
      // for (let input of inputGroup1) {
      //   input.removeAttribute("disabled");
      //   input.setAttribute("mandatory", "");
      // }
      for (let input of inputGroup2) {
        // input.setAttribute("disabled", "");
        // input.removeAttribute("mandatory");
        input.value = "";
      }

      sid1.value = "";
      sid2.value = "";
      sid3.value = "";
      break;
    case "DeclByAppl_Appo_AccrChecActiOn10":
      for (let select of selectGroup1) {
        select.setAttribute("disabled", "");
        select.removeAttribute("mandatory");
        select.value = "";
      }
      for (let select of selectGroup2) {
        select.removeAttribute("disabled");
        select.setAttribute("mandatory", "");
      }
      for (let input of inputGroup1) {
        // input.setAttribute("disabled", "");
        // input.removeAttribute("mandatory");
        input.value = "";
      }
      // for (let input of inputGroup2) {
      //   input.removeAttribute("disabled");
      //   input.setAttribute("mandatory", "");
      // }
      sid1.value = "";
      sid2.value = "";
      sid3.value = "";
      break;
  }
}

function DeclByAppl_BefoMakeThisAppl20_change(element) {
  let select = document.getElementById("Member_Member_Name_AC30");
  let input = document.getElementById("MemberRole_Professional_No_AC30");
  let sid = document.getElementById("Member_Member_SID_AC30");

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
    sid.value = "";
  } else {
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    select.value = "";
    input.setAttribute("disabled", "");
    input.value = "";
    sid.value = "";
  }
}

function DeclByQualPer_IConfThatI10_change(element) {
  let radioGroup = [
    document.getElementById("RDDev3"),
    document.getElementById("RDBuilder3"),
  ];
  let inputGroup = [
    document.getElementById("Member_Firm_Name_OWNER40"),
    document.getElementById("Member_Firm_Name_BLDR40"),
    document.getElementById("Member_Member_SID_OWNER40"),
    document.getElementById("Member_Member_SID_BLDR40"),
  ];
  let selectGroup = [
    document.getElementById("Member_Member_Name_OWNER40"),
    document.getElementById("Member_Member_Name_BLDR40"),
  ];

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_OWNER40")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Name_OWNER40")
      .setAttribute("mandatory", "");
    document.getElementById("RDDev3").checked = true;
    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
    }
  } else {
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let input of inputGroup) {
      input.removeAttribute("mandatory");
      input.value = "";
    }
    for (let select of selectGroup) {
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
    }
  }
}

function QPDev_change(element) {
  let refId = element.id;
  let select1 = document.getElementById("Member_Member_Name_OWNER40");
  let select2 = document.getElementById("Member_Member_Name_BLDR40");
  let input1 = document.getElementById("Member_Firm_Name_OWNER40");
  let input2 = document.getElementById("Member_Firm_Name_BLDR40");
  let sid1 = document.getElementById("Member_Member_SID_OWNER40");
  let sid2 = document.getElementById("Member_Member_SID_BLDR40");

  switch (refId) {
    case "RDDev3":
      select1.removeAttribute("disabled");
      select1.setAttribute("mandatory", "");
      select2.setAttribute("disabled", "");
      select2.removeAttribute("mandatory");
      select2.value = "";
      input2.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
    case "RDBuilder3":
      select2.removeAttribute("disabled");
      select2.setAttribute("mandatory", "");
      select1.setAttribute("disabled", "");
      select1.removeAttribute("mandatory");
      select1.value = "";
      input1.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
  }
}

function DeclByQualPers_IConfThat10_change(element) {
  let radioGroup = [
    document.getElementById("RDDev2"),
    document.getElementById("RDBuilder2"),
  ];
  let inputGroup = [
    document.getElementById("Member_Firm_Name_OWNER30"),
    document.getElementById("Member_Firm_Name_BLDR30"),
    document.getElementById("Member_Member_SID_OWNER30"),
    document.getElementById("Member_Member_SID_BLDR30"),
  ];
  let selectGroup = [
    document.getElementById("Member_Member_Name_OWNER30"),
    document.getElementById("Member_Member_Name_BLDR30"),
  ];

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_OWNER30")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Name_OWNER30")
      .setAttribute("mandatory", "");
    document.getElementById("RDDev2").checked = true;

    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
    }
  } else {
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let input of inputGroup) {
      input.value = "";
    }
    for (let select of selectGroup) {
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
    }
  }
}

function StuctWorksDec_change(element) {
  let refId = element.id;
  let select1 = document.getElementById("Member_Member_Name_OWNER30");
  let select2 = document.getElementById("Member_Member_Name_BLDR30");
  let input1 = document.getElementById("Member_Firm_Name_OWNER30");
  let input2 = document.getElementById("Member_Firm_Name_BLDR30");

  let sid1 = document.getElementById("Member_Member_SID_OWNER30");
  let sid2 = document.getElementById("Member_Member_SID_BLDR30");

  switch (refId) {
    case "RDDev2":
      select1.removeAttribute("disabled");
      select1.setAttribute("mandatory", "");
      select2.setAttribute("disabled", "");
      select2.removeAttribute("mandatory");
      select2.value = "";
      input2.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
    case "RDBuilder2":
      select2.removeAttribute("disabled");
      select2.setAttribute("mandatory", "");
      select1.setAttribute("disabled", "");
      select1.removeAttribute("mandatory");
      select1.value = "";
      input1.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
  }
}

function RDII_change(element) {
  let refId = element.id;
  let checkboxGroup = [
    document.getElementById("SubmChec_MultiLeveTranStruc10"),
    document.getElementById("SubmChec_NonVertInclStruc10"),
    document.getElementById("SubmChec_StrucWithUncoGeom10"),
    document.getElementById("SubmChec_LargSpanStrucOr10"),
    document.getElementById("SubmChec_ObtaALettFrom10"),
  ];
  let input = document.getElementById("SubmChec_ThePreConsComp10");

  switch (refId) {
    case "SubmChec_InvoOneOrMore10":
      for (let checkbox of checkboxGroup) {
        checkbox.removeAttribute("disabled");
      }
      break;
    default:
      for (let checkbox of checkboxGroup) {
        checkbox.setAttribute("disabled", "");
        checkbox.checked = false;
      }
      input.setAttribute("disabled", "");
      input.removeAttribute("mandatory");
      input.value = "";
      break;
  }
}

function SubmChec_ObtaALettFrom10_change(element) {
  let input = document.getElementById("SubmChec_ThePreConsComp10");
  let inputManda = document.getElementById("SubmChec_ThePreConsComp10_input");
  if (element.checked) {
    inputManda.textContent = "*";
    input.removeAttribute("disabled");
    input.setAttribute("mandatory", "");
  } else {
    inputManda.textContent = "";
    input.setAttribute("disabled", "");
    input.removeAttribute("mandatory");
    input.value = "";
  }
}

function app_change(element) {
  let refId = element.id;
  let radioGroup1 = [
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_GrosFlooAreaLess10"
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_WillBeSubmAt10" //DeclByQualPers_BuilDesiCalcAre_Appl_WillBeSubmAt10
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_BuilScorSubmIn10" //DeclByQualPers_BuilDesiCalcAre_Appl_BuilScorSubmIn10
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_BuilScorSubmIn20" //DeclByQualPers_BuilDesiCalcAre_Appl_BuilScorSubmIn20
    ),
  ];
  let inputGroup1 = [
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_TheStruBuilScor20"
    ),
    document.getElementById("DeclByQualPers_BuilDesiCalcAre_Appl_ForGFAOf10"),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_ThePlanPermWas10" // DeclByQualPers_BuilDesiCalcAre_Appl_ThePlanPermWas10
    ),
  ];
  let radioGroup2 = [
    document.getElementById("DeclByQualPers_BuilDesiCalcAre_PlanPermAppl10"),
    document.getElementById("DeclByQualPers_BuilDesiCalcAre_WaivObta10"),
    document.getElementById("DeclByQualPers_BuilDesiCalcAre_Exem10"),
  ];
  let radioGroup2_1 = [
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_GFA10"
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_GFA500010"
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_PlanPermApplBefo10"
    ),
  ];

  switch (refId) {
    case "DeclByQualPers_BuilDesiCalcAre_NotApplReas10":
      for (let radio of radioGroup1) {
        radio.removeAttribute("disabled");
      }
      for (let radio of radioGroup2) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      for (let radio of radioGroup2_1) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      break;
    case "DeclByQualPers_BuilDesiCalcAre_NotAppl10":
      for (let radio of radioGroup2) {
        radio.removeAttribute("disabled");
      }
      for (let radio of radioGroup1) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      for (let input of inputGroup1) {
        input.setAttribute("disabled", "");
        input.removeAttribute("mandatory");
        input.value = "";
      }
      break;
  }
}

function RDappSub_change(element) {
  let refId = element.id;
  let inputGroup = [
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_TheStruBuilScor20"
    ),
    document.getElementById("DeclByQualPers_BuilDesiCalcAre_Appl_ForGFAOf10"),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_Appl_ThePlanPermWas10" // DeclByQualPers_BuilDesiCalcAre_Appl_ThePlanPermWas10
    ),
  ];

  switch (refId) {
    case "DeclByQualPers_BuilDesiCalcAre_Appl_GrosFlooAreaLess10":
      for (let input of inputGroup) {
        input.removeAttribute("disabled");
        input.setAttribute("mandatory", "");
      }
      break;
    default:
      for (let input of inputGroup) {
        input.setAttribute("disabled", "");
        input.removeAttribute("mandatory");
        input.value = "";
      }
      break;
  }
}

function app2_change(element) {
  let refId = element.id;
  let radioGroup = [
    document.getElementById("DeclByQualPers_HousHoldShel_TheIsNoResi10"),
    document.getElementById("DeclByQualPers_HousHoldShel_ItIsAddiAnd10"),
    document.getElementById("DeclByQualPers_HousHoldShel_QPHadSougAdvi10"),
  ];
  switch (element.id) {
    case "DeclByQualPers_HousHoldShel_Appl10":
      for (let radio of radioGroup) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      break;
    case "DeclByQualPers_HousHoldShel_ApplNot10":
      for (let radio of radioGroup) {
        radio.removeAttribute("disabled");
      }
      break;
  }
}

function BuilWorkHave_change(element) {
  let radio = element.id;
  let fields = document.querySelectorAll("[BuilWork_commence]");

  if (radio == "DeclByQualPers_BuilWorkHave_Comm10") {
    for (let field of fields) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
    }
  } else if (radio == "DeclByQualPers_BuilWorkHave_NotComm10") {
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function appointQp1_change(element) {
  let refId = element.id;
  let select1 = document.getElementById("Member_Member_Name_OWNER10");
  let select2 = document.getElementById("Member_Member_Name_BLDR10");
  let input1 = document.getElementById("Member_Firm_Name_OWNER10");
  let input2 = document.getElementById("Member_Firm_Name_BLDR10");
  let sid1 = document.getElementById("Member_Member_SID_OWNER10");
  let sid2 = document.getElementById("Member_Member_SID_BLDR10");
  let inputGroup = [
    document.getElementById("DeclByAppl_Appo_QualPersForStru_Name10"),
    document.getElementById("DeclByAppl_Appo_QualPersForStru_PERegiNo10"),
  ];

  switch (refId) {
    case "RDDev":
      select1.removeAttribute("disabled");
      select1.setAttribute("mandatory", "");
      select2.setAttribute("disabled", "");
      select2.removeAttribute("mandatory");
      select2.value = "";
      input2.value = "";
      sid1.value = "";
      sid2.value = "";
      for (let input of inputGroup) {
        input.value = "";
      }
      break;
    case "RDBuilder":
      select2.removeAttribute("disabled");
      select2.setAttribute("mandatory", "");
      select1.setAttribute("disabled", "");
      select1.removeAttribute("mandatory");
      select1.value = "";
      input1.value = "";
      sid1.value = "";
      sid2.value = "";
      for (let input of inputGroup) {
        input.value = "";
      }
      break;
  }
}

function appointQp2_change(element) {
  let refId = element.id;
  let select1 = document.getElementById("Member_Member_Name_OWNER20");
  let select2 = document.getElementById("Member_Member_Name_BLDR20");
  let input1 = document.getElementById("Member_Firm_Name_OWNER20");
  let input2 = document.getElementById("Member_Firm_Name_BLDR20");
  let sid1 = document.getElementById("Member_Member_SID_OWNER20");
  let sid2 = document.getElementById("Member_Member_SID_BLDR20");

  switch (refId) {
    case "RADIO1":
      select1.removeAttribute("disabled");
      select1.setAttribute("mandatory", "");
      select2.setAttribute("disabled", "");
      select2.removeAttribute("mandatory");
      select2.value = "";
      input2.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
    case "RDBuilder1":
      select2.removeAttribute("disabled");
      select2.setAttribute("mandatory", "");
      select1.setAttribute("disabled", "");
      select1.removeAttribute("mandatory");
      select1.value = "";
      input1.value = "";
      sid1.value = "";
      sid2.value = "";
      break;
  }
}

function DeclByAppl_Appo10_change(element) {
  let particularName = document.getElementById("Member_Member_Name_HDBPE10");
  let mandatorySign = document.getElementById(
    "Member_Member_Name_HDBPE10_span"
  );
  let radioGroup = [
    document.getElementById("RDDev"),
    document.getElementById("RDBuilder"),
  ];

  let selectGroup = [
    document.getElementById("Member_Member_Name_OWNER10"),
    document.getElementById("Member_Member_Name_BLDR10"),
  ];

  let inputGroup = [
    document.getElementById("Member_Firm_Name_OWNER10"),
    document.getElementById("Member_Firm_Name_BLDR10"),
    document.getElementById("DeclByAppl_Appo_QualPersForStru_Name10"),
    document.getElementById("DeclByAppl_Appo_QualPersForStru_PERegiNo10"),
    document.getElementById("Member_Member_SID_OWNER10"),
    document.getElementById("Member_Member_SID_BLDR10"),
  ];

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_OWNER10")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Name_OWNER10")
      .setAttribute("mandatory", "");
    document.getElementById("RDDev").checked = true;
    if (!particularName.value) {
      particularName.setAttribute("mandatory", "");
    }
    mandatorySign.textContent = "*";
    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
    }
  } else {
    particularName.removeAttribute("mandatory");
    mandatorySign.textContent = "";
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }

    for (let select of selectGroup) {
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
    }

    for (let input of inputGroup) {
      input.value = "";
    }
  }
}

function DeclByAppl_Appo20_change(element) {
  let radioGroup = [
    document.getElementById("RADIO1"),
    document.getElementById("RDBuilder1"),
    document.getElementById("RDDev3"),
    document.getElementById("RDBuilder3"),
  ];

  let selectGroup = [
    document.getElementById("Member_Member_Name_OWNER20"),
    document.getElementById("Member_Member_Name_BLDR20"),
    document.getElementById("Member_Member_Name_OWNER40"),
    document.getElementById("Member_Member_Name_BLDR40"),
  ];

  let inputGroup = [
    document.getElementById("Member_Firm_Name_OWNER20"),
    document.getElementById("Member_Firm_Name_OWNER40"),
    document.getElementById("Member_Firm_Name_BLDR20"),
    document.getElementById("Member_Firm_Name_BLDR40"),
    document.getElementById("DeclByAppl_Appo_QualPersForGeot_Name10"),
    document.getElementById("DeclByAppl_Appo_QualPersForGeot_PERegiNo10"),
    document.getElementById("Member_Member_SID_OWNER20"),
    document.getElementById("Member_Member_SID_BLDR20"),
  ];

  let qpGeo = document.getElementById("Member_Member_Name_HDBPE20");

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_OWNER20")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Name_OWNER20")
      .setAttribute("mandatory", "");
    document.getElementById("RADIO1").checked = true;
    enableGeo(true);
    for (let radio of radioGroup) {
      radio.removeAttribute("disabled");
    }
    qpGeo.removeAttribute("disabled");
    if (qpGeo.value !== "") {
      document.getElementById("DeclByAppl_Appo_QualPersForGeot_Name10").value =
        qpGeo.valueLabel;
      document.getElementById(
        "DeclByAppl_Appo_QualPersForGeot_PERegiNo10"
      ).value = document.getElementById(
        "MemberRole_Professional_No_HDBPE20"
      ).value;
    }
  } else {
    enableGeo(false);
    for (let radio of radioGroup) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }

    for (let select of selectGroup) {
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
    }

    for (let input of inputGroup) {
      input.value = "";
    }
  }
}

function ppa_change(element) {
  let refId = element.id;
  let radioGroup = [
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_GFA10"
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_GFA500010"
    ),
    document.getElementById(
      "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl_PlanPermApplBefo10"
    ),
  ];

  switch (refId) {
    case "DeclByQualPers_BuilDesiCalcAre_PlanPermAppl10":
      for (let radio of radioGroup) {
        radio.removeAttribute("disabled");
      }
      break;
    default:
      for (let radio of radioGroup) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      break;
  }
}

function qpChange(el) {
  switch (el.id) {
    case "Member_Member_Name_HDBPE10":
      document.getElementById(
        "DeclByAppl_Appo_QualPersForStru_Name10"
      ).value = document.getElementById("Member_Member_Name_HDBPE10").data[
        document.getElementById("Member_Member_Name_HDBPE10").value
      ].Member_Member_Name_HDBPE10;
      document.getElementById(
        "DeclByAppl_Appo_QualPersForStru_PERegiNo10"
      ).value = document.getElementById(
        "MemberRole_Professional_No_HDBPE10"
      ).value;
      break;
    case "Member_Member_Name_HDBPE20":
      if (document.getElementById("DeclByAppl_Appo20").checked) {
        document.getElementById(
          "DeclByAppl_Appo_QualPersForGeot_Name10"
        ).value = document.getElementById(el.id).valueLabel;
        document.getElementById(
          "DeclByAppl_Appo_QualPersForGeot_PERegiNo10"
        ).value = document.getElementById(
          "MemberRole_Professional_No_HDBPE20"
        ).value;
      }
      break;
  }
}

function validEmail(el) {
  if (el.value) {
    if (validateEmail(el.value)) {
      document.getElementById(el.id).removeAttribute("data-invalid");
    } else {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "Invalid Format. Please Enter a valid Email Address."
        );
    }
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

function removeUENerror(parent) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let UENfields = document.querySelectorAll(`[prefix="Members_UEN_OWNER"]`);
  if (childCount > 1) {
    UENfields[UENfields.length - 1].removeAttribute("data-invalid");
    UENfields[UENfields.length - 1].removeAttribute("data-invalid-message");
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`.${deleteClass}`).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(`.${deleteClass}`);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function DeclByAppl_ValuOfBuilWork10_change(element) {
  let textbox = document.getElementById(element.id);
  let acCheckbox = document.getElementById("DeclByAppl_Appo_AccrChecActiOn10");
  let fields = [
    document.getElementById("Member_Member_Name_AC20"),
    document.getElementById("MemberRole_Professional_No_AC20"),
  ];

  if (element.value < 1 && element.value) {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "Value of Building Works can't be equal to zero."
    );
    textbox.value = 0;
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  }

  if (element.value >= 15000000) {
    acCheckbox.setAttribute("disabled", "");
    acCheckbox.checked = false;
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
  } else {
    if (document.getElementById("DeclByAppl_BefoMakeThisAppl10").checked) {
      acCheckbox.removeAttribute("disabled");
      // if(document.getElementById("DeclByAppl_Appo_AccrChecUndeSect10").checked){
      //   acCheckbox.removeAttribute("disabled");
      // }else{
      //   acCheckbox.removeAttribute("disabled");

      // }
    }
  }
}

// function enableField(this,fieldID){
//   let checkbox = document.getElementById(element.id);
//   let field = document.getElementById(fieldID);

//   if(checkbox.checked){
//     field.removeAttribute("disabled");
//   }else{
//     field.setAttribute("disabled","");
//     field.value = "";
//   }
// }

////////////////////////////////////////////////////////////////COMPUTATION NUMBER 1

function TypeOfBuilWork_NewBuilBuilWork25_change(element) {
  let field = [
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("AreaStorSub_PlanArea18"),
  ];
  let feeField = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
  ];
  let mandaField = document.querySelectorAll("#noManda");
  if (element.checked) {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "*";
    }
    for (f of field) {
      f.removeAttribute("disabled", "");
      f.setAttribute("mandatory", "");
    }
  } else {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "";
    }
    for (f of feeField) {
      f.value = "";
    }
  }
}

function TypeOfBuilWork_NewBuilBuilWork15_change(element) {
  let field = [
    document.getElementById("AreaStorSub_StatGrosFlooArea15"),
    document.getElementById("AreaStorSub_StatGrosFlooArea18"),
    document.getElementById("AreaStorSub_StatGrosFlooArea218"),
  ];
  let feeField = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
  ];
  let mandaField = document.querySelectorAll("#no1Manda");
  let input4 = document.getElementById("AreaStorSub_StatGrosFlooArea218");
  if (element.checked) {
    input4.removeAttribute("disabled");
    input4.removeAttribute("mandatory");
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("disabled");
      f.setAttribute("mandatory", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  } else {
    input4.setAttribute("disabled", "");
    input4.removeAttribute("mandatory");
    input4.value = "";
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  }
}

function AreaStorSub_StatGrosFlooArea15_change(element) {
  let resultField = document.getElementById("CompFees15");
  let value = element.value;

  if ((value != "" || value != "0") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0" || parseFloat(value) == 0) {
    resultField.value = "0";
  } else {
    resultField.value = "400.00";
  }
}

function AreaStorSub_PlanArea25_change(element) {
  let resultField = document.getElementById("CompFees35");
  let value = element.value;

  if ((value != "" || value != "0") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0") {
    resultField.value = "0";
  } else {
    resultField.value = "400.00";
  }
}

function AreaStorSub_StatGrosFlooArea18_change(element) {
  let value = document.getElementById("AreaStorSub_StatGrosFlooArea18").value;
  let resultField = document.getElementById("CompFees18");
  let resultField2 = document.getElementById("SubsCompFees18");
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea218");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value != "" || sgfaField2.value != "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (sgfaField2.value == "" || sgfaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  PaymMode_Paym10_update();
}

function AreaStorSub_PlanArea28_change(element) {
  let value = document.getElementById("AreaStorSub_PlanArea28").value;
  let resultField = document.getElementById("CompFees38");
  let resultField2 = document.getElementById("SubsCompFees38");
  let areaField2 = document.getElementById("AreaStorSub_PlanArea228");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (areaField2.value != "" || areaField2.value != "0.00") &&
    areaField2.value >= 100
  ) {
    let temp = parseInt(areaField2.value / 100);
    if (temp != areaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (areaField2.value == "" || areaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  PaymMode_Paym10_update();
}

////////////////////////////////////////////////////////////////COMPUTATION NUMBER 2

function TypeOfBuilWork_NewStru20_change(element) {
  let field = [
    document.getElementById("AreaStorSub_StatGrosFlooArea20"),
    document.getElementById("AreaStorSub_StatGrosFlooArea23"),
    document.getElementById("AreaStorSub_StatGrosFlooArea223"),
  ];
  let feeField = [
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
  ];
  let mandaField = document.querySelectorAll("#no7Manda");
  if (element.checked) {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("disabled", "");
      f.setAttribute("mandatory", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  } else {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  }
  PaymMode_Paym10_update();
}

function TypeOfBuilWork_NewStru25_change(element) {
  let field = [
    document.getElementById("AreaStorSub_PlanArea25"),
    document.getElementById("AreaStorSub_PlanArea28"),
    document.getElementById("AreaStorSub_PlanArea228"),
  ];
  let feeField = [
    document.getElementById("CompFees35"),
    document.getElementById("CompFees38"),
    document.getElementById("SubsCompFees38"),
  ];
  let mandaField = document.querySelectorAll("#no2Manda");
  if (element.checked) {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "*";
    }
    for (f of field) {
      f.removeAttribute("disabled", "");
      f.setAttribute("mandatory", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  } else {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  }
  PaymMode_Paym10_update();
}

function TypeOfBuilWork_NewStru15_change(element) {
  let field = [
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("AreaStorSub_PlanArea18"),
    document.getElementById("AreaStorSub_PlanArea218"),
  ];
  let feeField = [
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
  ];
  let mandaField = document.querySelectorAll("#noManda");
  if (element.checked) {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("disabled", "");
      f.setAttribute("mandatory", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  } else {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  }
  PaymMode_Paym10_update();
}

function AreaStorSub_NewStru10_change(element) {
  let targetInput = document.getElementById("CompFees20");

  targetInput.value = calculationFormula1(element.value, 2500, 240, 300, 100);
  PaymMode_Paym10_update();
}

function AreaStorSub_PlanArea10_change(element) {
  let value = document.getElementById("AreaStorSub_PlanArea10").value;
  let resultField = document.getElementById("CompFees20");
  let resultField2 = document.getElementById("SubsCompFees20");
  let sgfaField2 = document.getElementById("AreaStorSub_PlanArea210");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value != "" || sgfaField2.value != "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(200 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(200 * temp).toFixed(2);
    }
  } else if (sgfaField2.value == "" || sgfaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "200.00";
  }

  PaymMode_Paym10_update();
}

function AreaStorSub_PlanArea18_change(element) {
  let value = document.getElementById("AreaStorSub_PlanArea18").value;
  let resultField = document.getElementById("CompFees28");
  let resultField2 = document.getElementById("SubsCompFees28");
  let areaField2 = document.getElementById("AreaStorSub_PlanArea218");
  let price,
    final = 0;

  if ((value != "" || value != "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (areaField2.value != "" || areaField2.value != "0.00") &&
    areaField2.value >= 100
  ) {
    let temp = parseInt(areaField2.value / 100);
    if (temp != areaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (areaField2.value == "" || areaField2.value == "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  PaymMode_Paym10_update();
}

////////////////////////////////////////////////////////////////COMPUTATION NUMBER 3
function TypeOfBuilWork_AddiAlteWorkOr10_change(element) {
  let field = document.getElementById("AreaStorSub_NoOfStor10");
  let feeField = document.getElementById("CompFees30");
  let mandaField = document.querySelector("#no3Manda");
  if (element.checked) {
    mandaField.textContent = "";
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    field.value = "0";
    feeField.value = "0";
  } else {
    mandaField.textContent = "";
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "0";
    feeField.value = "0";
  }
}

function AreaStorSub_NoOfStor10_change(element) {
  let resultField = document.getElementById("CompFees30");
  if (element.value) {
    let price = element.value * 200;
    let final = price.toFixed(2);
    resultField.value = final;
  } else {
    resultField.value = "";
  }
}

////////////////////////////////////////////////////////////////COMPUTATION NUMBER 4
function TypeOfBuilWork_AddiAlteWorkWith10_change(element) {
  let checkboxes = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  let fields = [
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("CompFees40"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
    document.getElementById("CompFees50"),
  ];

  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
    for (f of fields) {
      f.value = "0";
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
      c.checked = false;
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "0";
    }
  }
}

function Crit_ResiBuil10_change(element) {
  let field = document.getElementById("AreaStorSub_ResiBuilNoOfStor10");
  let feeField = document.getElementById("CompFees40");
  let mandaField = document.querySelector("#no4aManda");
  if (element.checked) {
    mandaField.textContent = "";
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    field.value = "0";
    feeField.value = "0";
  } else {
    mandaField.textContent = "";
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.value = "0";
    feeField.value = "0";
  }
}

function Crit_NonResiBuil10_change(element) {
  let field = document.getElementById("AreaStorSub_NonResiBuilNoOfStor10");
  let feeField = document.getElementById("CompFees50");
  let mandaField = document.querySelector("#no4bManda");
  if (element.checked) {
    mandaField.textContent = "";
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    field.value = "0";
    feeField.value = "0";
  } else {
    mandaField.textContent = "";
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.value = "0";
    feeField.value = "0";
  }
}

function AreaStorSub_ResiBuilNoOfStor10_change(element) {
  let resultField = document.getElementById("CompFees40");

  if (element.value) {
    let price = element.value * 200;
    let final = price.toFixed(2);
    resultField.value = final;
  } else {
    resultField.value = "";
  }
}

function AreaStorSub_NonResiBuilNoOfStor10_change(element) {
  let resultField = document.getElementById("CompFees50");
  if (element.value) {
    let price = element.value * 400;
    let final = price.toFixed(2);
    resultField.value = final;
  } else {
    resultField.value = "";
  }
}
////////////////////////////////////////////////////////////////COMPUTATION NUMBER 5
function TypeOfBuilWork_AmenDeviToAppr10_change(element) {
  let field = document.getElementById("Crit_AllBuilStruNoOfStor10");
  let feeField = document.getElementById("CompFees60");
  let mandaField = document.querySelector("#no5Manda");
  if (element.checked) {
    mandaField.textContent = "";
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    feeField.value = "0";
    field.value = "0";
  } else {
    mandaField.textContent = "";
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    feeField.value = "0";
    field.value = "0";
  }
}

function Crit_AllBuilStruNoOfStor10_change(element) {
  let resultField = document.getElementById("CompFees60");
  if (element.value) {
    let price = element.value * 200;
    let final = price.toFixed(2);
    resultField.value = final;
  } else {
    resultField.value = "";
  }
}
////////////////////////////////////////////////////////////////COMPUTATION NUMBER 6
function TypeOfBuilWork_Demolition10_change(element) {
  let field = [
    document.getElementById("GenBldg_DemolitionNoOfStor10"),
    document.getElementById("SpecBldg_DemolitionHeightOfBldg10"),
  ];
  let feeField = [
    document.getElementById("CompFees70"),
    document.getElementById("CompFees80"),
  ];
  let mandaField = document.querySelectorAll("#no6Manda");
  if (element.checked) {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("disabled", "");
      f.setAttribute("mandatory", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  } else {
    for (let i = 0; i < mandaField.length; i++) {
      mandaField[i].textContent = "";
    }
    for (f of field) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "0";
    }
    for (f of feeField) {
      f.value = "0";
    }
  }
}

function GenBldg_DemolitionNoOfStor10_change(element) {
  let resultField = document.getElementById("CompFees70");
  if (element.value) {
    let price = element.value * 200;
    let final = price.toFixed(2);
    resultField.value = final;
  } else {
    resultField.value = "";
  }
}

function SpecBldg_DemolitionHeightOfBldg10_change(element) {
  let resultField = document.getElementById("CompFees80");
  let value = element.value;

  if ((value != "" || value != "0") && value >= 5) {
    let temp = parseInt(value / 5);
    if (temp != value / 5) {
      resultField.value = parseFloat(200 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(200 * temp).toFixed(2);
    }
  } else if (value == "" || value == "0") {
    resultField.value = "0";
  } else {
    resultField.value = "200.00";
  }
}

function totalPlanfee() {
  let compFees = [
    document.getElementById("CompFees10"),
    document.getElementById("SubsCompFees10"),
    document.getElementById("CompFees20"),
    document.getElementById("SubsCompFees20"),
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees35"),
    document.getElementById("CompFees38"),
    document.getElementById("SubsCompFees38"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    document.getElementById("CompFees70"),
    document.getElementById("CompFees80"),
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
  ];

  let totalPlanField = document.getElementById("PaymMode_Paym10");
  let final = 0;
  for (c of compFees) {
    if (c.value) {
      let converted = parseFloat(c.value);
      final += converted;
    }
  }

  let finalDecimal = final.toFixed(2);
  totalPlanField.value = finalDecimal;
}

function atLeastOne(element) {
  let name = document.querySelectorAll(`[name=${element.name}]`);
  let pass = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < name.length; i++) {
      name[i].removeAttribute("mandatory");
      name[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].setAttribute("checked", "");
    }
  }
}

function removeSTerror(parent) {
  let textbox = document.querySelectorAll(
    `[prefix='DeclByAppl_ThePlanAre_AmenPlanToStru_B']`
  );
  parent = document.getElementById(parent);
  let childCount = parent.childElementCount;
  if (childCount > 1) {
    textbox[textbox.length - 1].removeAttribute("data-invalid");
    textbox[textbox.length - 1].removeAttribute("data-invalid-message");
  }
}

function numbering(element) {
  let numbering = document.querySelectorAll("#numbering");
  let numCount = 2;
  for (let i = 0; i < numbering.length; i++) {
    if (
      !numbering[
        i
      ].parentElement.parentElement.parentElement.parentElement.parentElement.hasAttribute(
        "hidden"
      )
    ) {
      numbering[i].textContent = numCount;
      numCount++;
    }
  }
}

/////////////////////////////////////////////////////////////////////DEMOLITION
function demo_change(element) {
  let demolitionDiv = document.getElementById("demolitionWorks_table");
  let checkboxes = [
    document.getElementById("DeclByQP_InAccoWithRegu10"),
    document.getElementById("DeclByQP_IFurtCertThat10"),
    document.getElementById("DeclByQP_TotaNumbOfStruc10"),
    document.getElementById("DeclByQP_TotaNumbOfPage10"),
  ];
  let fields = [
    document.getElementById("DeclByQP_InAccoWithRegu20"),
    document.getElementById("Project_Project_Ref_No20"),
    document.getElementById("DeclByQP_TotaNumbOfStruc20"),
    document.getElementById("DeclByQP_TotaNumbOfPage20"),
  ];
  if (element.checked) {
    demolitionDiv.removeAttribute("hidden");
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
    }
  } else {
    demolitionDiv.setAttribute("hidden", "");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
    document.getElementById("Rema10").value = "";
  }
}

function enableOptionalField(element, fieldID) {
  let field = document.getElementById(fieldID);
  if (element.checked) {
    field.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field.value = "";
  }
}

function enableMandatoryField(element, fieldID) {
  let field = document.getElementById(fieldID);
  if (element.checked) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }
}

function removeManda(el) {
  let c = document.getElementById(el.id);
  if (c.checked) {
    c.removeAttribute("mandatory");
    c.removeAttribute("checked");
  } else {
    c.setAttribute("mandatory", "");
    c.setAttribute("checked", "");
  }
}

/////////////////////////////////////////////////////////////////////All works
function allStructWorks_change(element) {
  let allChangeDiv = document.getElementById("allStructuralWorks_table");
  let allWorksCheckboxes = [
    document.getElementById("DeclByAppl_TypeOfWork130"),
    document.getElementById("DeclByAppl_TypeOfWork110"),
    document.getElementById("DeclByAppl_TypeOfWork30"),
    document.getElementById("DeclByAppl_TypeOfWork70"),
    document.getElementById("DeclByAppl_TypeOfWork90"),
    document.getElementById("DeclByAppl_TypeOfWork60"),
    document.getElementById("DeclByAppl_TypeOfWork40"),
    document.getElementById("DeclByAppl_TypeOfWork20"),
    document.getElementById("DeclByAppl_TypeOfWork50"),
    document.getElementById("DeclByAppl_TypeOfWork80"),
    document.getElementById("DeclByAppl_ClasOfWork10"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_InAccoWithRegu20"),
    document.getElementById("DeclByAccrChec_IFurtCertThat20"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru20"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage20"),
  ];
  let fields = [
    document.getElementById("DeclByQualPers_InAccoWithRegu10"),
    document.getElementById("DeclByAccrChec_IFurtCertThat10"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru10"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage10"),
  ];
  let numbering = document.querySelectorAll("#numbering");
  let numCount = 6;

  let pass = false;
  for (c of allWorksCheckboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  if (pass == true) {
    allChangeDiv.removeAttribute("hidden");
    for (c of checkboxes) {
      if (!c.checked) {
        c.setAttribute("mandatory", "");
        c.setAttribute("checked", "");
      } else {
        c.removeAttribute("mandatory");
        c.removeAttribute("checked");
      }
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
    }
  } else {
    allChangeDiv.setAttribute("hidden", "");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
    document.getElementById("DeclByQualPers_Rema10").value = "";
  }
}

/////////////////////////////////////////////////////////////////////Involve A&A
function invoAA_change(element) {
  let invoAAtable = document.getElementById("involveAA_table");
  let checkbox = document.getElementById("DeclByProfEngi_IHaveInspThe10");
  let field = document.getElementById("DeclByProfEngi_Rema10");

  if (element.checked) {
    invoAAtable.removeAttribute("hidden");
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    invoAAtable.setAttribute("hidden", "");
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
    checkbox.checked = false;
    field.value = "";
  }
}

/////////////////////////////////////////////////////////////////////Involve Retaining Wall DUMMY
function invoWall_change(element) {
  let involveRetaWall = document.querySelectorAll("#involveRetaWall_table");
  let checkboxes = [
    document.getElementById("DeclByQualPers_ITheQualPers10"),
    document.getElementById("DeclByQualPers_ICertThatThe10"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage20"),
    document.getElementById("DeclByQualPers_IConfThatThe30"),
  ];
  let fields = [
    document.getElementById("DeclByQualPers_QPNAME10"),
    document.getElementById("DeclByQualPers_ICertThatThe_AffeThePublSewe10"),
    document.getElementById("DeclByQualPers_ICertThatThe_EncrOnAnyDrai10"),
    document.getElementById("DeclByQualPers_ICertThatThe_EncrOnAnyRoad10"),
    document.getElementById("DeclByQualPers_IConfThatThe10"),
    document.getElementById("DeclByQualPers_IConfThatThe20"),
  ];
  if (element.checked) {
    for (let i = 0; i < involveRetaWall.length; i++) {
      involveRetaWall[i].removeAttribute("hidden");
    }
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
    }
  } else {
    for (let i = 0; i < involveRetaWall.length; i++) {
      involveRetaWall[i].setAttribute("hidden", "");
    }
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
    document.getElementById("DeclByQualPers_Rema10").value = "";
  }
}

function DeclByQualPers_ICertThatThe10_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers_ICertThatThe_AffeThePublSewe10"),
    document.getElementById("DeclByQualPers_ICertThatThe_EncrOnAnyDrai10"),
    document.getElementById("DeclByQualPers_ICertThatThe_EncrOnAnyRoad10"),
  ];

  if (element.checked) {
    for (f of fields) {
      f.removeAttribute("disabled");
      f.setAttribute("mandatory", "");
    }
  } else {
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
  }
}

function DeclByQualPers_IConfThatThe30_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers_IConfThatThe10"),
    document.getElementById("DeclByQualPers_IConfThatThe20"),
  ];

  if (element.checked) {
    for (f of fields) {
      f.removeAttribute("disabled");
      f.setAttribute("mandatory", "");
    }
  } else {
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
  }
}

function DeclByAppl_TypeOfWork100_change(element) {
  let checkboxes = [
    document.getElementById("DeclByAppl_PermitToST_ToApp10"),
    //document.getElementById("DeclByAppl_PermitToST_AppCon10"),
    document.getElementById("DeclByAppl_PermitToST_PerNo10"),
  ];
  let stField = document.getElementById("DeclByAppl_PermitToST_PerNo20");
  if (stField.options != null) {
    let stFieldOptions = stField.shadowRoot.querySelector("select").options;
    if (element.checked) {
      stField.value = "";
      for (let i = 0; i < stFieldOptions.length; i++) {
        if (stFieldOptions[i].value == "Sample Demolition Permit") {
          stFieldOptions[i].setAttribute("disabled", "");
        }
      }
      if (document.getElementById("DeclByAppl_TypeOfWork100").checked) {
        for (c of checkboxes) {
          c.checked = false;
        }
      }
    } else {
      for (let i = 0; i < stFieldOptions.length; i++) {
        if (stFieldOptions[i].value == "Sample Demolition Permit") {
          stFieldOptions[i].removeAttribute("disabled");
        }
      }
    }
  }
}

function DeclByAppl_PermitToST_PerNo10_change(element) {
  console.log("HELLO");
  let checkboxes = [
    document.getElementById("DeclByAppl_PermitToST_ToApp10"),
    //document.getElementById("DeclByAppl_PermitToST_AppCon10"),
  ];

  if (element.checked) {
    if (document.getElementById("DeclByAppl_TypeOfWork100").checked) {
      for (c of checkboxes) {
        c.checked = false;
      }
    }
    document
      .getElementById("DeclByAppl_PermitToST_PerNo20")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByAppl_PermitToST_PerNo20")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("DeclByAppl_PermitToST_PerNo20").value = "";
    document
      .getElementById("DeclByAppl_PermitToST_PerNo20")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByAppl_PermitToST_PerNo20")
      .setAttribute("disabled", "");
  }
}

function DeclByAppl_PermitToST_ToApp10_change(element) {
  let checkboxes = [
    document.getElementById("DeclByAppl_PermitToST_PerNo10"),
    //document.getElementById("DeclByAppl_PermitToST_AppCon10"),
  ];
  if (element.checked) {
    if (document.getElementById("DeclByAppl_TypeOfWork100").checked) {
      for (c of checkboxes) {
        c.checked = false;
      }
      document
        .getElementById("DeclByAppl_PermitToST_PerNo20")
        .removeAttribute("mandatory");
      document
        .getElementById("DeclByAppl_PermitToST_PerNo20")
        .setAttribute("disabled", "");
      document.getElementById("DeclByAppl_PermitToST_PerNo20").value = "";
    }
  }
}

function DeclByAppl_PermitToST_AppCon10_change(element) {
  let checkboxes = [
    document.getElementById("DeclByAppl_PermitToST_PerNo10"),
    document.getElementById("DeclByAppl_PermitToST_ToApp10"),
  ];
  if (element.checked) {
    if (document.getElementById("DeclByAppl_TypeOfWork100").checked) {
      for (c of checkboxes) {
        c.checked = false;
      }
    }
  }
}

function hundredPercent(element) {
  let field = document.getElementById(element.id);
  if (field.value > 100) {
    field.setAttribute("data-invalid", "");
    field.setAttribute(
      "data-invalid-message",
      "Value should not be greater than 100."
    );
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

function DeclByQualPers_InAccoWithRegu20_change(element) {
  let name = document.getElementById("Member_Member_Name_HDBPE10");
  let field = document.getElementById("DeclByQualPers_InAccoWithRegu10");
  if (element.checked) {
    field.setAttribute("disabled", "");
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

function DeclByQualPers_ITheQualPers10_change(element) {
  let name = document.getElementById("Member_Member_Name_HDBPE10");
  let field = document.getElementById("DeclByQualPers_QPNAME10");
  if (element.checked) {
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  } else {
    field.value = "";
  }
}

function DeclByQP_InAccoWithRegu10_change(element) {
  let name = document.getElementById("Member_Member_Name_HDBPE10");
  let field = document.getElementById("DeclByQP_InAccoWithRegu20");
  if (element.checked) {
    field.setAttribute("disabled", "");
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

function Member_Member_Name_HDBPE10_change(element) {
  let field = document.getElementById(element.id);
  let c = document.getElementById("DeclByQualPers_InAccoWithRegu20");
  let c2 = document.getElementById("DeclByQualPers_ITheQualPers10");
  let c3 = document.getElementById("DeclByQP_InAccoWithRegu10");
  let target = document.getElementById("DeclByQualPers_InAccoWithRegu10");
  let target2 = document.getElementById("DeclByQualPers_QPNAME10");
  let target3 = document.getElementById("DeclByQP_InAccoWithRegu20");
  if (c.checked) {
    target.value = field.valueLabel;
  }
  if (c2.checked) {
    target2.value = field.valueLabel;
  }
  if (c3.checked) {
    target3.value = field.valueLabel;
  }
}

function enableGeo(condition) {
  let fieldsParticulars = [
    document.getElementById("Member_Member_Name_HDBPE20"),
    document.getElementById("MemberRole_Professional_No_HDBPE20"),
    document.getElementById("Member_Firm_Name_HDBPE20"),
    document.getElementById("Members_UEN_HDBPE20"),
    document.getElementById("Member_Address_HDBPE20"),
    document.getElementById("Member_Tel_No_HDBPE20"),
    document.getElementById("Member_Mobile_No_HDBPE20"),
    document.getElementById("Member_Mobile_No_HDBPE20"),
    document.getElementById("Member_Email_Address1_HDBPE20"),
  ];
  let declarationFields = [
    document.getElementById("Member_Member_Name_OWNER40"),
    document.getElementById("Member_Firm_Name_OWNER40"),
    document.getElementById("Member_Member_Name_BLDR40"),
    document.getElementById("Member_Firm_Name_BLDR40"),
    document.getElementById("DeclByQualPers_InAccoWithRegu10_1"),
    document.getElementById("DeclByAccrChec_IFurtCertThat10_1"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru10_1"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage10_1"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPer_IConfThatI10"),
    document.getElementById("DeclByQualPers_InAccoWithRegu20_1"),
    document.getElementById("DeclByAccrChec_IFurtCertThat20_1"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru20_1"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage20_1"),
  ];
  let radio = [
    document.getElementById("RDDev3"),
    document.getElementById("RDBuilder3"),
  ];

  let geoPage = document.querySelector("[target='page6']");
  let lastPage = document.querySelector("[target='page7']");
  if (condition == true) {
    geoPage.removeAttribute("hidden", "");
    lastPage.setAttribute("page-number", "7");
    document
      .getElementById("Member_Member_Name_HDBPE20")
      .setAttribute("mandatory", "");
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    geoPage.setAttribute("hidden", "");
    lastPage.setAttribute("page-number", "6");
    document
      .getElementById("Member_Member_Name_HDBPE20")
      .removeAttribute("mandatory");
    document
      .getElementById("Members_UEN_HDBPE20")
      .removeAttribute("data-invalid");
    document
      .getElementById("Members_UEN_HDBPE20")
      .removeAttribute("data-invalid-message");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (r of radio) {
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
    }
    for (p of fieldsParticulars) {
      p.value = "";
    }
    for (d of declarationFields) {
      d.value = "";
      d.removeAttribute("mandatory");
    }
  }
}

function DeclByQualPers_InAccoWithRegu20_1_change(element) {
  let name = document.getElementById("Member_Member_Name_HDBPE20");
  let field = document.getElementById("DeclByQualPers_InAccoWithRegu10_1");
  if (element.checked) {
    field.setAttribute("disabled", "");
    if (name.valueLabel != "Please Select") {
      field.value = name.valueLabel;
    }
  }
}

function Member_Member_Name_HDBPE20_change(element) {
  let field = document.getElementById(element.id);
  let c = document.getElementById("DeclByQualPers_InAccoWithRegu20_1");
  let field2 = document.getElementById("MemberRole_Professional_No_HDBPE20");
  let targetReg = document.getElementById(
    "DeclByAppl_Appo_QualPersForGeot_PERegiNo10"
  );
  let target = document.getElementById("DeclByQualPers_InAccoWithRegu10_1");
  let targetDec = document.getElementById(
    "DeclByAppl_Appo_QualPersForGeot_Name10"
  );
  if (c.checked) {
    target.value = field.valueLabel;
  }
  targetDec.value = field.valueLabel;
  targetReg.value = field2.value;
}

function resetFee() {
  let fields = document.querySelectorAll(".feeTable_textbox");
  let compFees = document.querySelectorAll(".feeTable_textbox10");

  let checkboxes = document.querySelectorAll(".feeTable_checkBox");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  for (let x = 0; x < fields.length; x++) {
    fields[x].removeAttribute("mandatory", "");
    fields[x].setAttribute("disabled", "");
    fields[x].value = "0";
  }

  let c = document.getElementById("TypeOfBuilWork_Demolition10");
  let sign = document.querySelectorAll(".sign");
  document.getElementById("PaymMode_Paym10").value = "0.00";
  c.checked = false;

  let Crit_ResNonResiBuils = document.querySelectorAll(".feeTable_CritBuil");
  for (a = 0; a < Crit_ResNonResiBuils.length; a++) {
    Crit_ResNonResiBuils[a].checked = false;
    Crit_ResNonResiBuils[a].setAttribute("disabled", "");

    for (c of compFees) {
      c.value = "0";
    }
  }

  for (let i = 0; i < sign.length; i++) {
    sign[i].textContent = "";
  }
}

function FCFP_change(element) {
  let fee = document.querySelectorAll("#feeTable");
  let feeTable_SGFAGenBuil = document.querySelectorAll(
    "#feeTable_NewSGFAGenBuil"
  );
  let feeTable_SGFATypGenBuil = document.querySelectorAll(
    "#feeTable_NewSGFATyp1GenBuil"
  );
  let feeTable_NewBuilWorks = document.querySelectorAll(
    "#feeTable_NewBuilWorks"
  );
  let feeTable_NewStru = document.querySelectorAll("#feeTable_NewStru");
  let feeTable_NewAreaOfPlanView10 = document.querySelectorAll(
    "#feeTable_NewAreaOfPlanView10"
  );
  let feeTable_NewAreaOfPlanView20 = document.querySelectorAll(
    "#feeTable_NewAreaOfPlanView20"
  );
  let label1 = document.getElementById("noFee1");
  let label2 = document.getElementById("noFee2");
  let label3 = document.getElementById("noFee3");
  let label4 = document.getElementById("noFee4");
  let hiddenLabel = document.querySelectorAll("[group-id='structureHidden']");
  for (let a of hiddenLabel) {
    a.innerHTML = " or (2)";
  }
  let hiddenLabel2 = document.querySelector("[group-id='structureHidden2']");
  hiddenLabel2.removeAttribute("hidden");
  switch (element.id) {
    case "FeeComForBuilWork10":
      resetFee();
      label1.innerHTML = "3.";
      label2.innerHTML = "4.";
      label3.innerHTML = "5.";

      for (let i = 0; i < fee.length; i++) {
        if (fee != null) {
          feeTable_SGFATypGenBuil[i].setAttribute("hidden", "");
          feeTable_SGFAGenBuil[i].setAttribute("hidden", "");
          feeTable_NewAreaOfPlanView10[i].setAttribute("hidden", "");
          feeTable_NewAreaOfPlanView20[i].setAttribute("hidden", "");
          feeTable_NewBuilWorks[0].removeAttribute("hidden", "");
          feeTable_NewStru[0].removeAttribute("hidden", "");
          fee[i].setAttribute("hidden", "");
        }
      }
      break;

    case "FeeComForBuilWork20":
      resetFee();
      label1.innerHTML = "3.";
      label2.innerHTML = "4.";
      label3.innerHTML = "5.";

      for (let i = 0; i < fee.length; i++) {
        feeTable_SGFATypGenBuil[i].setAttribute("hidden", "");
        feeTable_SGFAGenBuil[i].removeAttribute("hidden", "");
        feeTable_NewAreaOfPlanView10[i].removeAttribute("hidden", "");
        fee[i].setAttribute("hidden", "");
        feeTable_NewAreaOfPlanView20[i].setAttribute("hidden", "");
        feeTable_NewBuilWorks[0].setAttribute("hidden", "");
        feeTable_NewStru[0].setAttribute("hidden", "");
      }
      break;

    case "FeeComForBuilWork30":
      resetFee();
      label1.innerHTML = "3.";
      label2.innerHTML = "4.";
      label3.innerHTML = "5.";
      label4.innerHTML = "6.";

      for (let i = 0; i < fee.length; i++) {
        feeTable_SGFATypGenBuil[i].setAttribute("hidden", "");
        feeTable_SGFAGenBuil[i].removeAttribute("hidden", "");
        feeTable_NewAreaOfPlanView10[i].removeAttribute("hidden", "");
        fee[i].removeAttribute("hidden");
        feeTable_NewAreaOfPlanView20[i].setAttribute("hidden", "");
        feeTable_NewBuilWorks[0].setAttribute("hidden", "");
        feeTable_NewStru[0].setAttribute("hidden", "");
      }
      break;
    case "FeeComForBuilWork40":
      resetFee();
      label1.innerHTML = "4.";
      label2.innerHTML = "5.";
      label3.innerHTML = "6.";
      label4.innerHTML = "7.";
      hiddenLabel2.setAttribute("hidden", "");
      for (let a of hiddenLabel) {
        a.innerHTML = ", (2) or (3)";
      }
      for (let i = 0; i < fee.length; i++) {
        feeTable_SGFAGenBuil[i].removeAttribute("hidden", "");
        feeTable_SGFATypGenBuil[i].removeAttribute("hidden", "");
        feeTable_NewAreaOfPlanView20[i].removeAttribute("hidden", "");
        fee[i].removeAttribute("hidden");
        feeTable_NewAreaOfPlanView10[i].setAttribute("hidden", "");
        feeTable_NewBuilWorks[0].setAttribute("hidden", "");
        feeTable_NewStru[0].setAttribute("hidden", "");
      }
      break;
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

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid-message");
}

function togglePartQp(el) {
  document.getElementById(el).removeAttribute("data-invalid");
  document.getElementById(el).removeAttribute("data-invalid-message");
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

// START WEB SERVICE
function validWS(res) {
  if (typeof res == "object") {
    return true;
  } else {
    return false;
  }
}

function convertTextboxToSelect(id) {
  let text = document.getElementById(id);
  if (text.tagName.toLowerCase() == "cn2-textbox") {
    let attrs = {};
    for (
      var i = 0, atts = text.attributes, n = atts.length, arr = [];
      i < n;
      i++
    ) {
      attrs[atts[i].nodeName] = atts[i].nodeValue;
    }

    let select = document.createElement("cn2-select");
    for (let attr in attrs) {
      select.setAttribute(attr, attrs[attr]);
    }

    text.parentNode.replaceChild(select, text);
  }
}

function getProjPermitList() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;

  let query = `projRefNo=${projRefNo}`;

  jsonData["agencyUrl10"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl10"].url,
    query
  );

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      if (dataResponse.status && dataResponse.permitNo) {
        if (dataResponse.status.toUpperCase() == "SUCCESS") {
          let permitNos = dataResponse.permitNo
            .split(",")
            .map((i) => `${i}:${i}`)
            .join(",");
          document
            .getElementById("DeclByAppl_PermitToST_PerNo20")
            .setAttribute("options", permitNos);
          convertTextboxToSelect("DeclByAppl_PermitToST_PerNo20");
          document.getElementById("DeclByAppl_PermitToST_PerNo20").value = "";
        } else {
          convertSelectToTextbox("DeclByAppl_PermitToST_PerNo20");
        }
      } else {
        convertSelectToTextbox("DeclByAppl_PermitToST_PerNo20");
      }
    } else {
      convertSelectToTextbox("DeclByAppl_PermitToST_PerNo20");
    }
  }
}

function checkPageForMandatories(onlyPage) {
  let run = setTimeout(() => {
    if (onlyPage) {
      let parent = document.getElementById(onlyPage);
      let elements = parent.getElementsByTagName("*");
      for (let element of elements) {
        if (
          (element.hasAttribute("id") &&
            element.hasAttribute("mandatory") &&
            !element.hasAttribute("hidden") &&
            !element.hasAttribute("disabled") &&
            element.value == "") ||
          element.hasAttribute("checked") ||
          element.hasAttribute("data-invalid")
        ) {
          if (element.hasAttribute("id")) {
            let targetEl = document.getElementById(element.id);
            let tagName = element.tagName.toLowerCase();
            if (element.hasAttribute("checked")) {
              if (!element.checked) {
                if (["cn2-checkbox"].includes(tagName)) {
                  targetEl.setAttribute("not-filledup", "");
                } else if (
                  tagName == "input" &&
                  element.getAttribute("type") == "radio"
                ) {
                  let flag = document.createElement("sup");
                  flag.innerHTML = "!";
                  flag.setAttribute("not-filledup", "");
                  flag.setAttribute(
                    "style",
                    "font-weight: bold; color: red; margin-left: 5px; margin-right: 5px;"
                  );
                  if (element.parentElement.clientWidth < 52) {
                    if (element.parentElement.hasAttribute("width"))
                      element.parentElement.setAttribute(
                        "default-width",
                        element.parentElement.getAttribute("width")
                      );
                    else
                      element.parentElement.setAttribute(
                        "default-width",
                        element.parentElement.clientWidth + "px"
                      );
                    element.parentElement.style.width = "52px";
                  }
                  element.after(flag);
                  if (element.hasAttribute("name")) {
                    element.addEventListener("change", () => {
                      for (let a of document.querySelectorAll(
                        `[name="${element.getAttribute("name")}"]`
                      )) {
                        a.parentElement
                          .querySelector("[not-filledup]")
                          .remove();
                        a.parentElement.style.width = a.parentElement.getAttribute(
                          "default-width"
                        );
                      }

                      if (
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("warning") ||
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("valid")
                      )
                        checkPageForMandatories(parent.getAttribute("target"));
                    });
                  } else {
                    element.addEventListener("change", () => {
                      element.parentElement
                        .querySelector("[not-filledup]")
                        .remove();
                      element.parentElement.style.width = a.parentElement.getAttribute(
                        "default-width"
                      );

                      if (
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("warning") ||
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("valid")
                      )
                        checkPageForMandatories(parent.getAttribute("target"));
                    });
                  }
                }
              }
            } else if (
              element.value.trim() == "" ||
              element.hasAttribute("data-invalid")
            ) {
              if (
                [
                  "cn2-textbox",
                  "cn2-textarea",
                  "cn2-select",
                  "cn2-datefield",
                ].includes(tagName)
              ) {
                targetEl.setAttribute("not-filledup", "");
              }
            }
          }
        } else if (
          element.hasAttribute("id") &&
          element.hasAttribute("mandatory") &&
          !element.hasAttribute("hidden") &&
          element.value !== ""
        ) {
          let targetEl = document.getElementById(element.id);
          let tagName = element.tagName.toLowerCase();
          if (
            [
              "cn2-textbox",
              "cn2-textarea",
              "cn2-select",
              "cn2-datefield",
            ].includes(tagName)
          ) {
            targetEl.removeAttribute("not-filledup", "");
          }
        }
      }

      let count = parent.querySelectorAll("[not-filledup]").length;
      parent.setAttribute("mandatory-fields-count", count);
    } else {
      [...document.querySelectorAll("[not-filledup]")].map((el) => {
        if (el.tagName.toLowerCase() == "sup") el.remove();
        else el.removeAttribute("not-filledup");
      });
      [...document.getElementById("page").children]
        .map((el) => el.getAttribute("id"))
        .map((target) => {
          let parent = document.getElementById(target);
          let elements = parent.getElementsByTagName("*");
          for (let element of elements) {
            if (
              (element.hasAttribute("id") &&
                element.hasAttribute("mandatory") &&
                !element.hasAttribute("hidden") &&
                !element.hasAttribute("disabled") &&
                element.value == "") ||
              element.hasAttribute("checked") ||
              element.hasAttribute("data-invalid")
            ) {
              if (element.hasAttribute("id")) {
                let targetEl = document.getElementById(element.id);
                let tagName = element.tagName.toLowerCase();
                if (element.hasAttribute("checked")) {
                  if (!element.checked) {
                    if (["cn2-checkbox"].includes(tagName)) {
                      targetEl.setAttribute("not-filledup", "");
                    } else if (
                      tagName == "input" &&
                      element.getAttribute("type") == "radio"
                    ) {
                      let flag = document.createElement("sup");
                      flag.innerHTML = "!";
                      flag.setAttribute("not-filledup", "");
                      flag.setAttribute(
                        "style",
                        "font-weight: bold; color: red; margin-left: 5px; margin-right: 5px;"
                      );
                      if (element.parentElement.clientWidth < 52) {
                        if (element.parentElement.hasAttribute("width"))
                          element.parentElement.setAttribute(
                            "default-width",
                            element.parentElement.getAttribute("width")
                          );
                        else
                          element.parentElement.setAttribute(
                            "default-width",
                            element.parentElement.clientWidth + "px"
                          );
                        element.parentElement.style.width = "52px";
                      }
                      element.after(flag);
                      if (element.hasAttribute("name")) {
                        element.addEventListener("change", () => {
                          for (let a of document.querySelectorAll(
                            `[name="${element.getAttribute("name")}"]`
                          )) {
                            a.parentElement
                              .querySelector("[not-filledup]")
                              .remove();
                            a.parentElement.style.width = a.parentElement.getAttribute(
                              "default-width"
                            );
                          }

                          if (
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("warning") ||
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("valid")
                          )
                            checkPageForMandatories(
                              parent.getAttribute("target")
                            );
                        });
                      } else {
                        element.addEventListener("change", () => {
                          element.parentElement
                            .querySelector("[not-filledup]")
                            .remove();
                          element.parentElement.style.width = a.parentElement.getAttribute(
                            "default-width"
                          );

                          if (
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("warning") ||
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("valid")
                          )
                            checkPageForMandatories(
                              parent.getAttribute("target")
                            );
                        });
                      }
                    }
                  }
                } else if (element.value.trim() == "") {
                  if (
                    [
                      "cn2-textbox",
                      "cn2-textarea",
                      "cn2-select",
                      "cn2-datefield",
                    ].includes(tagName)
                  ) {
                    targetEl.setAttribute("not-filledup", "");
                  }
                }
              }
            } else if (
              element.hasAttribute("id") &&
              element.hasAttribute("mandatory") &&
              !element.hasAttribute("hidden") &&
              element.value !== ""
            ) {
              let targetEl = document.getElementById(element.id);
              let tagName = element.tagName.toLowerCase();
              if (
                [
                  "cn2-textbox",
                  "cn2-textarea",
                  "cn2-select",
                  "cn2-datefield",
                ].includes(tagName)
              ) {
                targetEl.removeAttribute("not-filledup", "");
              }
            }
          }

          let count = parent.querySelectorAll("[not-filledup]").length;
          parent.setAttribute("mandatory-fields-count", count);
        });
    }

    clearTimeout(run);
  }, 0);
}

function validWS(res) {
  if (typeof res == "object") {
    return true;
  } else {
    return false;
  }
}

function validateCaseRefNo(element) {
  let el = document.getElementById(element.id);

  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let applicationType = "ST";
  let planType = document.getElementById("PartOfAppl_PlanType10").value;
  let planNo = el.value;

  let query = `projRefNo=${projRefNo}&applicationType=${applicationType}&planType=${planType}&planNo=${planNo}`;

  jsonData["agencyUrl20"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl20"].url,
    query
  );

  el.removeAttribute("data-valid");
  el.removeAttribute("data-valid-message");
  el.removeAttribute("data-invalid");
  el.removeAttribute("data-invalid-message");

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      if (dataResponse.isRecordExist == "N") {
        el.setAttribute("data-valid", "");
        el.setAttribute("data-valid-message", "Plan number is valid");
      } else if (dataResponse.isRecordExist == "Y") {
        el.setAttribute("data-invalid", "");
        el.setAttribute("data-invalid-message", "Plan number is invalid");
      }
    }
  }
}

// END WEB SERVICE

function convertSelectToTextbox(id) {
  let select = document.getElementById(id);
  if (select.tagName.toLowerCase() == "cn2-select") {
    let attrs = {};
    for (
      var i = 0, atts = select.attributes, n = atts.length, arr = [];
      i < n;
      i++
    ) {
      attrs[atts[i].nodeName] = atts[i].nodeValue;
    }

    let text = document.createElement("cn2-textbox");
    for (let attr in attrs) {
      text.setAttribute(attr, attrs[attr]);
    }

    select.parentNode.replaceChild(text, select);

    text.value = "";
  }
}

function planSTPlan() {
  let fields = document.getElementById("DeclByAppl_PermitToST_PerNo20");
  if (fields.hasAttribute("d-list")) {
    options = fields.shadowRoot.querySelector("select").options;
    let yesDemo = false;
    let yesStruc = false;
    if (document.getElementById("DeclByAppl_TypeOfWork100").checked === true) {
      yesDemo = true;
      yesStruc = false;
    }

    if (document.getElementById("DeclByAppl_ClasOfWork10").checked === true) {
      yesDemo = true;
      yesStruc = true;
    }

    if (document.getElementById("DeclByAppl_ClasOfWork20").checked === true) {
      yesStruc = true;
      yesDemo = true;
    }

    if (document.getElementById("DeclByAppl_ClasOfWork30").checked === true) {
      yesStruc = true;
      yesDemo = true;
    }
    for (let i = 0; i < options.length; i++) {
      options[i].removeAttribute("disabled");
      options[i].setAttribute("disabled", "");
      if (yesDemo && options[i].value == "Demolition ST nos sample")
        options[i].removeAttribute("disabled");
      if (yesStruc && options[i].value == "ST Nos from ISPS2 database sample")
        options[i].removeAttribute("disabled");
    }
  }
}

function rangeValue(el, type, params) {
  let val = el.value;
  let e = document.getElementById(el.id);
  if (type === "planNo" && val != "") {
    let from = parseFloat(params[0].split("-")[0]);
    let to = parseFloat(params[0].split("-")[1]);
    val = parseFloat(val);

    if (val != 0) {
      if (val >= from && val <= to) {
        if (val < 10) e.value = "00" + val;
        else if (val > 9 && val < 100) e.value = "0" + val;
      } else {
        e.value = "";
        showMessage(`Value should be from ${from} to ${to}`);
      }
      e.removeAttribute("data-invalid");
      e.removeAttribute("data-invalid-message");
    } else {
      e.setAttribute("data-invalid", "");
      e.setAttribute(
        "data-invalid-message",
        "Plan Number should not be " + el.value + ". Please try again"
      );
    }
  } else if (type === "range" && val != "") {
    let from = parseFloat(params.split("-")[0]);
    let to = parseFloat(params.split("-")[1]);
    val = parseFloat(val);

    if (!(val >= from && val <= to)) {
      e.value = "";
      showMessage(`Value should be from ${from} to ${to}`);
    }
  } else {
    if (val == "") {
      e.removeAttribute("data-invalid");
      e.removeAttribute("data-invalid-message");
    }
  }

  AreaStorSub_StatGrosFlooArea10_change();
  AreaStorSub_StatGrosFlooArea18_change();
  AreaStorSub_StatGrosFlooArea100_change();
  AreaStorSub_PlanArea10_change();
  AreaStorSub_PlanArea28_change();
  AreaStorSub_PlanArea18_change();
}
// override common functions
function saveFormDataToJson() {
  for (let [id, value] of Object.entries(jsonData)) {
    let targetElement = document.getElementById(id);

    if (targetElement) {
      switch (targetElement.tagName) {
        case "CN2-CHECKBOX":
          //case "CN2-SWITCHBUTTON":
          jsonData[id] = targetElement.checked ? "on" : "off";

          break;
        case "CN2-SWITCHBUTTON":
          jsonData[id] = targetElement.checked ? "Yes" : "No";

          if (id == "Switch_Button_For_PsiRefNo") {
            jsonData["PartOfAppl_PsiRefNoNot10"] = targetElement.checked
              ? "off"
              : "on";
            jsonData["PartOfAppl_PsiRefNo10"] = targetElement.checked
              ? "on"
              : "off";
          }

          break;
        case "INPUT":
          // Radio Button
          if (
            targetElement.hasAttribute("type") &&
            targetElement.getAttribute("type") == "radio"
          ) {
            if (
              id != "DeclByAppl_TypeOfWork_DeptLessThanFour10" &&
              id != "DeclByAppl_TypeOfWork_DeptMoreThanFour10" &&
              id != "DeclByAppl_TypeOfWork_DeptMoreThanSix10"
            ) {
              jsonData[id] = targetElement.checked ? "on" : "off";
            } else {
              jsonData[id] = targetElement.checked ? "on" : "";
            }
          }

          break;
        case "CN2-SELECT":
          if (
            targetElement.hasAttribute("data-options") &&
            !targetElement.hasAttribute("options")
          ) {
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;

            if (
              targetElement.value == "" &&
              id != "Member_Member_Name_BLDR40" &&
              id != "Member_Member_Name_AC30"
            ) {
              jsonData[id] = "";
            } else if (
              targetElement.value == "" &&
              (id == "Member_Member_Name_BLDR40" ||
                id == "Member_Member_Name_AC30")
            ) {
              jsonData[id] = "Please Select";
            }
          } else if (
            //!targetElement.hasAttribute("data-options") &&
            targetElement.hasAttribute("options")
          ) {
            if (
              targetElement.value == "" &&
              id != "DeclByAppl_TypeOfWork_TheEartRetaStru10"
            ) {
              jsonData[id] = "Please Select";
            } else if (
              targetElement.value == "" &&
              id == "DeclByAppl_TypeOfWork_TheEartRetaStru10"
            ) {
              jsonData[id] = "Select";
            } else {
              jsonData[id] = targetElement.value;
            }
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
        // default:
        //   jsonData[id] = targetElement.value;
        //   break;
        default:
          if (
            [
              //"CompFees10",
              //"CompFees20",
              "CompFees15",
              "CompFees18",
              "CompFees25",
              "CompFees28",
              "CompFees35",
              "CompFees38",
              "CompFees30",
              "CompFees40",
              "CompFees50",
              "CompFees60",
              //"CompFees70",
              //"CompFees80",
              "CompFees90",
              "CompFees100",
            ].includes(id) &&
            targetElement.value != ""
          ) {
            jsonData[id] = +targetElement.value + "";
            if (
              (id == "CompFees15" ||
                id == "CompFees18" ||
                id == "CompFees25" ||
                id == "CompFees28" ||
                id == "CompFees30" ||
                id == "CompFees40" ||
                id == "CompFees50" ||
                id == "CompFees60") &&
              targetElement.value == "0"
            ) {
              jsonData[id] = "0.00";
            }
          } else if ([].includes(id)) {
            jsonData[id] =
              targetElement.value == "0" ? "" : targetElement.value;
          } else if (
            ["CompFees10", "CompFees20", "CompFees70", "CompFees80"].includes(
              id
            )
          ) {
            jsonData[id] =
              targetElement.value != "0" ? targetElement.value + "" : "0.00";
          } else if (["Member_PE_No_SS10"].includes(id)) {
            jsonData[id] = targetElement.value || "undefined";
          } else if (
            id == "AreaStorSub_StatGrosFlooArea10" ||
            id == "AreaStorSub_StatGrosFlooArea210" ||
            id == "AreaStorSub_PlanArea10" ||
            id == "AreaStorSub_PlanArea210" ||
            id == "AreaStorSub_StatGrosFlooArea15" ||
            id == "AreaStorSub_StatGrosFlooArea18" ||
            id == "AreaStorSub_StatGrosFlooArea218" ||
            id == "AreaStorSub_StatGrosFlooArea223" ||
            id == "AreaStorSub_StatGrosFlooArea23" ||
            id == "AreaStorSub_PlanArea15" ||
            id == "AreaStorSub_PlanArea18" ||
            id == "AreaStorSub_PlanArea218" ||
            id == "AreaStorSub_PlanArea28" ||
            id == "AreaStorSub_PlanArea228" ||
            id == "AreaStorSub_ResiBuilNoOfStor10" ||
            id == "AreaStorSub_NonResiBuilNoOfStor10" ||
            id == "Crit_AllBuilStruNoOfStor10" ||
            id == "GenBldg_DemolitionNoOfStor10" ||
            id == "SpecBldg_DemolitionHeightOfBldg10"
          ) {
            if (targetElement.value == "") {
              jsonData[id] = "0";
            } else {
              let fieldValue = targetElement.value;

              let splitFieldValue = fieldValue.split(".");

              if ((splitFieldValue[1] = "00")) {
                jsonData[id] = splitFieldValue[0] + "";
              } else {
                jsonData[id] = targetElement.value + "";
              }
            }
          } else if (
            (id == "CompFees10" ||
              id == "CompFees20" ||
              id == "CompFees15" ||
              id == "CompFees18" ||
              id == "CompFees25" ||
              id == "CompFees28" ||
              id == "CompFees30" ||
              id == "CompFees40" ||
              id == "CompFees50" ||
              id == "CompFees60" ||
              id == "CompFees70" ||
              id == "CompFees80") &&
            targetElement.value == ""
          ) {
            jsonData[id] = "0.00";
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

function defaultWhenEmpty(element, val) {
  let el = document.getElementById(element.id);

  if (el.value.trim() == "") el.value = val;
}

function getPlanFeeRateType() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let applicationType = "ST";

  let query = `projRefNo=${projRefNo}&applicationType=${applicationType}`;

  jsonData["agencyUrl30"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl30"].url,
    query
  );

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      function disabledRadios() {
        document
          .getElementById("FeeComForBuilWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("FeeComForBuilWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("FeeComForBuilWork30")
          .setAttribute("disabled", "");
      }

      if (
        dataResponse.planFeeType.toLowerCase() ==
        "Before 10 Sep 2017".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork10").click();
        disabledRadios();
      } else if (
        dataResponse.planFeeType.toLowerCase() ==
        "On or after 10 Sep 2017 but before 2 Apr 2018".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork20").click();
        disabledRadios();
      } else if (
        dataResponse.planFeeType.toLowerCase() ==
        "On or after 2 Apr 2018".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork30").click();
        disabledRadios();
      }
    }
  }
}
