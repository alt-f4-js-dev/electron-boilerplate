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

function getDisplayValue(el) {
  let index = document.getElementById(el.id).shadowRoot.querySelector("select")
    .selectedIndex;

  for (
    let i = 0;
    i <
    document.getElementById(el.id).shadowRoot.querySelectorAll("option").length;
    ++i
  ) {
    if (i === index)
      document
        .getElementById(el.id)
        .shadowRoot.querySelectorAll("option")
        [i].setAttribute("cn2-selected", "");
    else
      document
        .getElementById(el.id)
        .shadowRoot.querySelectorAll("option")
        [i].removeAttribute("cn2-selected");
  }

  CateOfShel_PleaSeleCate10_change(document.getElementById(el.id));
}

function CateOfShel_PleaSeleCate10_change(element) {
  let value = document
    .getElementById(element.id)
    .shadowRoot.querySelector("[cn2-selected]").innerHTML;
  let projType = document.getElementById("CateOfShel_ProjType10");
  let projTypeSign = document.getElementById("CateOfShel_ProjType10_span");

  let projCat = document.getElementById("CateOfShel_ProjCate10");

  let noOfHs = document.getElementById("CateOfShel_NoOfHSIn10");
  let noOfSS = document.getElementById("CateOfShel_NoOfSSIn10");

  let shelType = document.getElementById("CateOfShel_ShelType10");
  let shelTypeSign = document.getElementById("CateOfShel_ShelType10_span");
  let shelTypeRow = document.getElementById("shelterType_row");

  let title = document.querySelector("title");

  jsonData["FormName10"] = jsonData["form__name"];

  declareQP(false);
  switch (value) {
    case "Household Shelter":
      title.innerHTML = "BCA-CD-PLAN02-HS";
      jsonData["FormName10"] = "BCA-CD-PLAN02-HS";
      document.getElementById(element.id).nextElementSibling.value = "HS";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(false);
      enableNoOfHs(true);
      enableProjCat(true, "NA");
      enableProjType(true, "HHS");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Household Shelter (PPVC)":
      title.innerHTML = "BCA-CD-PLAN02-HS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN02-HS-P";
      document.getElementById(element.id).nextElementSibling.value = "HS-P";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(false);
      enableNoOfHs(true);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Household &amp; Storey Shelters":
      title.innerHTML = "BCA-CD-PLAN02-HS-SS";
      jsonData["FormName10"] = "BCA-CD-PLAN02-HS-SS";
      document.getElementById(element.id).nextElementSibling.value = "HS/SS";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(true);
      enableProjCat(true, "NA");
      enableProjType(true, "others");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Household &amp; Storey Shelters (PPVC)":
      title.innerHTML = "BCA-CD-PLAN02-HS/SS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN02-HS/SS-P";
      document.getElementById(element.id).nextElementSibling.value = "HS/SS-P";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(true);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Public Shelter":
      title.innerHTML = "BCA-CD-PLAN02-PS";
      jsonData["FormName10"] = "BCA-CD-PLAN02-PS";
      document.getElementById(element.id).nextElementSibling.value = "PS";
      declareQp2(true);
      declareQP(false);
      enableClassOfworks(true);
      enableCheckboxes(true);
      enableNoOfSS(false);
      enableNoOfHs(false);
      enableProjCat(false, "default");
      enableProjType(false, "default");
      shelTypeRow.removeAttribute("hidden");
      if (!shelTypeRow.hasAttribute("hidden")) {
        shelType.value = "";
        shelType.removeAttribute("disabled");
        shelType.setAttribute("mandatory", "");
        shelTypeSign.textContent = "*";
        shelType.setAttribute(
          "options",
          "S1:S1,S2:S2,S3:S3,S4:S4,S5:S5,S6:S6,S7:S7,S8:S8,S9:S9"
        );
      }
      break;
    case "Storey Shelter":
      title.innerHTML = "BCA-CD-PLAN02-SS";
      jsonData["FormName10"] = "BCA-CD-PLAN02-SS";
      document.getElementById(element.id).nextElementSibling.value = "SS";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "NA");
      enableProjType(true, "others");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Storey Shelter (PPVC)":
      title.innerHTML = "BCA-CD-PLAN02-SS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN02-SS-P";
      document.getElementById(element.id).nextElementSibling.value = "SS-P";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Storey Shelter (Non-Residential)":
      title.innerHTML = "BCA-CD-PLAN02-SS-NR";
      jsonData["FormName10"] = "BCA-CD-PLAN02-SS-NR";
      document.getElementById(element.id).nextElementSibling.value = "SS-NR";
      declareQp2(false);
      declareQP(true);
      enableClassOfworks(false);
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "NA");
      enableProjType(true, "default");
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      break;
    case "Transit Shelter":
      title.innerHTML = "BCA-CD-PLAN02-TS";
      jsonData["FormName10"] = "BCA-CD-PLAN02-TS";
      document.getElementById(element.id).nextElementSibling.value = "TS";
      declareQp2(true);
      declareQP(false);
      enableClassOfworks(true);
      enableCheckboxes(true);
      enableNoOfSS(false);
      enableNoOfHs(false);
      enableProjCat(false, "default");
      enableProjType(false, "default");
      shelTypeRow.removeAttribute("hidden");
      if (!shelTypeRow.hasAttribute("hidden")) {
        shelType.value = "";
        shelType.removeAttribute("disabled");
        shelType.setAttribute("mandatory", "");
        shelTypeSign.textContent = "*";
        shelType.setAttribute(
          "options",
          "S1:S1,S2:S2,S3:S3,S4:S4,S5:S5,S6:S6,S7:S7,S8:S8,S9:S9,S10:S10,S11:S11,S12:S12,S13:S13,S14:S14,S15:S15,S16:S16,S17:S17,S18:S18,S19:S19,S20:S20,S21:S21,S22:S22,S23:S23,S24:S24,S25:S25,S26:S26,S27:S27,S28:S28,S29:S29"
        );
      }
      break;
  }
}

function setProjType20(element) {
  let projType10 = document.getElementById("CateOfShel_ProjType10").value;
  let projType20 = document.getElementById("CateOfShel_ProjType20");
  if (!projType10 == "") {
    projType20.value = "";
    projType20.value = projType10;
  } else {
    projType20.value = "";
  }
}

function setShelType20(element) {
  let shelType10 = element.value;
  let shelType20 = document.getElementById("CateOfShel_ShelType20");

  if (!shelType10 == "") {
    shelType20.value = shelType10;
  } else {
    shelType20.value = "";
  }
}

function setClasOfWork20(element) {
  let clasOfWork10 = element.value;
  let clasOfWork20 = document.getElementById("CateOfShel_ClasOfWork20");

  if (!clasOfWork10 == "") {
    clasOfWork20.value = clasOfWork10;
  } else {
    clasOfWork20.value = "";
  }
}

function setApplication20(element) {
  let app10 = element.value;
  let app20 = document.getElementById("Project_Type_Application20");

  if (!app10 == "") {
    app20.value = app10;
  } else {
    app20.value = "";
  }
}

function enableClassOfworks(c) {
  let field = document.getElementById("CateOfShel_ClasOfWork10");
  let fieldManda = document.getElementById("CateOfShel_ClasOfWork10_span");
  field.value = "";
  if (c == true) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    fieldManda.textContent = "*";
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    fieldManda.textContent = "";
  }
}
function enableNoOfSS(c) {
  let noOfSs = document.getElementById("CateOfShel_NoOfSSIn10");
  let noOfSsSign = document.getElementById("CateOfShel_NoOfSSIn10_span");
  noOfSs.value = "";
  if (c == true) {
    noOfSs.removeAttribute("disabled");
    noOfSs.setAttribute("mandatory", "");
    noOfSsSign.textContent = "*";
  } else {
    noOfSsSign.textContent = "";
    noOfSs.removeAttribute("mandatory");
    noOfSs.setAttribute("disabled", "");
  }
}
function enableNoOfHs(c) {
  let noOfHs = document.getElementById("CateOfShel_NoOfHSIn10");
  let noOfHsSign = document.getElementById("CateOfShel_NoOfHSIn10_span");
  noOfHs.value = "";
  if (c == true) {
    noOfHs.removeAttribute("disabled");
    noOfHs.setAttribute("mandatory", "");
    noOfHsSign.textContent = "*";
  } else {
    noOfHsSign.textContent = "";
    noOfHs.removeAttribute("mandatory");
    noOfHs.setAttribute("disabled", "");
  }
}

function enableProjCat(c, option) {
  let projCat = document.getElementById("CateOfShel_ProjCate10");
  projCat.value = "";
  if (c == true) {
    projCat.setAttribute("disabled", "");
  } else {
    projCat.removeAttribute("disabled");
  }
  switch (option) {
    case "PPVC":
      projCat.value = "PPVC";
      break;
    case "NA":
      projCat.value = "Not Applicable";
    default:
      break;
  }
}
function enableProjType(c, option) {
  let projType = document.getElementById("CateOfShel_ProjType10");
  let projTypeSign = document.getElementById("CateOfShel_ProjType10_span");
  projType.value = "";
  if (c == true) {
    projType.removeAttribute("disabled");
    projType.setAttribute("mandatory", "");
    projTypeSign.textContent = "*";
  } else {
    projType.value = "";
    projType.setAttribute("disabled", "");
    projType.removeAttribute("mandatory");
    projTypeSign.textContent = "";
  }
  projType.removeAttribute("options");
  switch (option) {
    case "HHS":
      projType.setAttribute(
        "options",
        "HDB:HDB,Condominium/Apartment:CA,Private Landed:PL"
      );
      break;
    case "others":
      projType.setAttribute("options", "HDB:HDB,Condominium/Apartment:CA");
      break;
    default:
      projType.setAttribute(
        "options",
        "HDB:HDB,Condominium/Apartment:CA,Private Landed:PL,Goverment Building/Institution:GBI"
      );
      break;
  }
}
function disableSheltertype() {
  let shelType = document.getElementById("CateOfShel_ShelType10");
  let shelTypeSign = document.getElementById("CateOfShel_ShelType10_span");
  shelType.value = "";
  shelTypeSign.textContent = "";
  shelType.setAttribute("disabled", "");
  shelType.removeAttribute("mandatory");
}
function enableCheckboxes(condition) {
  let checkboxes = [
    document.getElementById("CateOfAppl_Pill10"),
    document.getElementById("CateOfAppl_ShocDesi10"),
    document.getElementById("CateOfAppl_Mech10"),
    document.getElementById("CateOfAppl_Elec10"),
    document.getElementById("CateOfAppl_MethStatFor10"),
    document.getElementById("CateOfAppl_CommTestRepoFor10"),
  ];
  let fields = [
    document.getElementById("CateOfAppl_ShocDesi20"),
    document.getElementById("CateOfAppl_Mech20"),
    document.getElementById("CateOfAppl_Elec20"),
    document.getElementById("CateOfAppl_MethStatFor20"),
    document.getElementById("CateOfAppl_CommTestRepoFor20"),
  ];
  for (c of checkboxes) {
    c.checked = false;
  }
  for (f of fields) {
    f.setAttribute("disabled", "");
    f.removeAttribute("mandatory");
    f.value = "";
  }
  if (condition == true) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
    }
  }
}

function CateOfAppl10_change(element, selectBox) {
  let fields = document.querySelectorAll(`[name="CateOfAppl10_fields"]`);
  let select = document.getElementById(selectBox);
  let planType = document.getElementById("CateOfAppl_PlanType10");
  let otherField = document.querySelectorAll(`[name="pleaSpecField"]`);
  let shelPlan = document.getElementById("CateOfAppl_PleaSeleShelPlan10");

  for (let i = 0; i < fields.length; i++) {
    fields[i].setAttribute("disabled", "");
    fields[i].removeAttribute("mandatory");
    fields[i].value = "";
  }
  for (let x = 0; x < otherField.length; x++) {
    otherField[x].setAttribute("hidden", "");
    otherField[x].setAttribute("disabled", "");
    otherField[x].removeAttribute("mandatory");
    otherField[x].value = "";
  }

  document.getElementById("mechOth10").setAttribute("hidden", "");
  document.getElementById("eleOth10").setAttribute("hidden", "");

  switch (element.id) {
    case "CateOfAppl_Buil10":
      planType.value = "CD";
      shelPlan.value = "ARCH";
      break;
    case "CateOfAppl_Pill10":
      planType.value = "CS";
      shelPlan.value = "PILING";
      break;
    case "CateOfAppl_Stru10":
      planType.value = "CS";
      shelPlan.value = "STRUCT";
      break;
    case "CateOfAppl_ShocDesi10":
      planType.value = "CD";
      shelPlan.value = "SHOCK";
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    case "CateOfAppl_Mech10":
      planType.value = "CD";
      shelPlan.value = "MECH";
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    case "CateOfAppl_Elec10":
      planType.value = "CD";
      shelPlan.value = "ELECT";
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    case "CateOfAppl_MethStatFor10":
      planType.value = "CD";
      shelPlan.value = "MTHDSTMT";
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    case "CateOfAppl_CommTestRepoFor10":
      planType.value = "CT";
      shelPlan.value = "TESTRPT";
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    default:
      break;
  }
}
function CateOfAppl_MethStatFor10_change(element) {
  let field = document.getElementById(element.id);
  let planType = document.getElementById("CateOfAppl_PlanType10");
  if (field.valueLabel == "Internal Overpressure Test") {
    planType.value = "CT";
  } else {
    planType.value = "CD";
  }
}
function CateOfAppl_Elec20_change(element) {
  let field = document.getElementById(element.id);
  let planType = document.getElementById("CateOfAppl_PlanType10");
  let peneForField = document.getElementById("CateOfAppl_Elec_PeneFor10");
  let otherField = document.getElementById("CateOfAppl_Elec_Othe10");
  if (field.valueLabel == "Communication Systems") {
    planType.value = "CE";
  } else {
    planType.value = "CD";
  }

  if (field.valueLabel == "Penetration for Electrical Services") {
    document.getElementById("eleOth10").removeAttribute("hidden");
    peneForField.removeAttribute("hidden");
    peneForField.removeAttribute("disabled");
    peneForField.setAttribute("mandatory", "");
    peneForField.value = "";
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");
    otherField.setAttribute("hidden", "");
    otherField.value = "";
  } else if (field.valueLabel == "Others") {
    document.getElementById("eleOth10").removeAttribute("hidden");
    otherField.removeAttribute("hidden");
    otherField.removeAttribute("disabled");
    otherField.setAttribute("mandatory", "");
    otherField.value = "";
    peneForField.removeAttribute("mandatory");
    peneForField.setAttribute("disabled", "");
    peneForField.setAttribute("hidden", "");
    peneForField.value = "";
  } else {
    document.getElementById("eleOth10").setAttribute("hidden", "");
    peneForField.removeAttribute("mandatory");
    peneForField.setAttribute("disabled", "");
    peneForField.setAttribute("hidden", "");
    peneForField.value = "";
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");
    otherField.setAttribute("hidden", "");
    otherField.value = "";
  }
}
function CateOfAppl_Mech10_change(element) {
  let field = document.getElementById(element.id);
  let planType = document.getElementById("CateOfAppl_PlanType10");
  let peneForField = document.getElementById("CateOfAppl_PeneFor10");
  let otherField = document.getElementById("CateOfAppl_Othe10");
  if (field.valueLabel == "Fire Protection System") {
    planType.value = "CM ";
  } else {
    planType.value = "CD";
  }

  if (field.valueLabel == "Penetration for Mechanical Services") {
    document.getElementById("mechOth10").removeAttribute("hidden");
    peneForField.removeAttribute("hidden");
    peneForField.removeAttribute("disabled");
    peneForField.setAttribute("mandatory", "");
    peneForField.value = "";
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");
    otherField.setAttribute("hidden", "");
    otherField.value = "";
  } else if (field.valueLabel == "Others") {
    document.getElementById("mechOth10").removeAttribute("hidden");
    otherField.removeAttribute("hidden");
    otherField.removeAttribute("disabled");
    otherField.setAttribute("mandatory", "");
    otherField.value = "";
    peneForField.removeAttribute("mandatory");
    peneForField.setAttribute("disabled", "");
    peneForField.setAttribute("hidden", "");
    peneForField.value = "";
  } else {
    document.getElementById("mechOth10").setAttribute("hidden", "");
    peneForField.removeAttribute("mandatory");
    peneForField.setAttribute("disabled", "");
    peneForField.setAttribute("hidden", "");
    peneForField.value = "";
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");
    otherField.setAttribute("hidden", "");
    otherField.value = "";
  }
}

function CateOfAppl_ShocDesi20_change(element) {
  let field = document.getElementById(element.id);
  let planType = document.getElementById("CateOfAppl_PlanType10");
  if (field.valueLabel == "Architectural/Civil") {
    planType.value = "CKS";
  } else if (field.valueLabel == "Mechanical") {
    planType.value = "CKM";
  } else if (field.valueLabel == "Electrical") {
    planType.value = "CKE";
  } else {
    planType.value = "CD";
  }
}
function toggleDecl(el) {
  switch (el.id) {
    case "ContOfAppl_OthePleaSpec20":
      if (el.checked) {
        document.getElementById("ContOfAppl_OthePleaSpec20_span").textContent =
          "*";
        document
          .getElementById("ContOfAppl_OthePleaSpec10")
          .removeAttribute("hidden");
        document
          .getElementById("ContOfAppl_OthePleaSpec10")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("ContOfAppl_OthePleaSpec20_span").textContent =
          "";
        document.getElementById("ContOfAppl_OthePleaSpec10").value = "";
        document
          .getElementById("ContOfAppl_OthePleaSpec10")
          .setAttribute("hidden", "");
        document
          .getElementById("ContOfAppl_OthePleaSpec10")
          .removeAttribute("mandatory", "");
      }
      break;
    case "DeclByQualPers_TechRequForS1040":
      if (el.checked) {
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .setAttribute("checked", "");
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .setAttribute("checked", "");
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .setAttribute("checked", "");

        if (
          document.getElementById("DeclByQualPers_TechRequForS1020").checked
        ) {
          document
            .getElementById("DeclByQualPers_TechRequForS1030")
            .removeAttribute("disabled");
          document
            .getElementById("DeclByQualPers_TechRequForS1030")
            .setAttribute("mandatory", "");
        }
      } else {
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .removeAttribute("checked");
        document
          .getElementById("DeclByQualPers_TechRequForS110")
          .removeAttribute("mandatory");
        document.getElementById(
          "DeclByQualPers_TechRequForS110"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .removeAttribute("checked");
        document
          .getElementById("DeclByQualPers_CDShelRequForMRT10")
          .removeAttribute("mandatory");
        document.getElementById(
          "DeclByQualPers_CDShelRequForMRT10"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .removeAttribute("checked");
        document
          .getElementById("DeclByQualPers_TechRequForS1020")
          .removeAttribute("mandatory");
        document.getElementById(
          "DeclByQualPers_TechRequForS1020"
        ).checked = false;

        document.getElementById("DeclByQualPers_TechRequForS1030").value = "";
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .removeAttribute("mandatory", "");
      }
      break;
    case "DeclByQualPers_TechRequForS1020":
      if (el.checked) {
        document.getElementById("DeclByQualPers_ICertThatThe10").value = "Othe";
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .setAttribute("mandatory", "");
      } else {
        document.getElementById("DeclByQualPers_ICertThatThe10").value = "";
      }
      break;
    case "DeclByQualPers_TechRequForS110":
      if (el.checked) {
        document.getElementById("DeclByQualPers_ICertThatThe10").value =
          "TechRequForS1";
      } else {
        document.getElementById("DeclByQualPers_ICertThatThe10").value = "";
      }
      break;
    case "DeclByQualPers_CDShelRequForMRT10":
      if (el.checked) {
        document.getElementById("DeclByQualPers_ICertThatThe10").value =
          "CDShelRequForMRT";
        document.getElementById("DeclByQualPers_TechRequForS1030").value = "";
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .removeAttribute("mandatory");
      } else {
        document.getElementById("DeclByQualPers_ICertThatThe10").value = "";
      }
      break;
    case "DeclByQualPers_ICertThatThe20":
      if (el.checked) {
        document.getElementById("DeclByQualPers_ApprOnWaivOf40").value =
          "ApprOnWaivOf";
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .setAttribute("checked", "");
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .setAttribute("checked", "");
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .setAttribute("mandatory", "");
        if (document.getElementById("DeclByQualPers_ApprOnWaivOf10").checked) {
          document
            .getElementById("DeclByQualPers_ApprOnWaivOf20")
            .removeAttribute("disabled");
          document
            .getElementById("DeclByQualPers_ApprOnWaivOf20")
            .setAttribute("mandatory", "");
        }
      } else {
        document.getElementById("DeclByQualPers_ApprOnWaivOf40").value =
          "ApprOnWaivOf";
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .removeAttribute("checked");
        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .removeAttribute("mandatory");
        document.getElementById(
          "DeclByQualPers_WaivOfShelTech10"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .removeAttribute("checked");
        document.getElementById(
          "DeclByQualPers_ApprOnWaivOf10"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .removeAttribute("mandatory", "");
        document.getElementById("DeclByQualPers_ApprOnWaivOf20").value = "";
        document.getElementById("FIELD1").setAttribute("disabled", "");
        document.getElementById("FIELD1").value = "";
      }

      break;
    case "DeclByQualPers_ApprOnWaivOf10":
      if (el.checked) {
        document.getElementById("FIELD1").removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .setAttribute("mandatory", "");
      }
      break;
    case "DeclByQualPers_WaivOfShelTech10":
      if (el.checked) {
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .setAttribute("disabled", "");
        document.getElementById("FIELD1").setAttribute("disabled", "");
        document.getElementById("FIELD1").value = "";
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .removeAttribute("mandatory", "");
        document.getElementById("DeclByQualPers_ApprOnWaivOf20").value = "";
      }
      break;
    case "CateOfShel_PleaSeleCate10":
      let check1Cond = [
        "Household Shelter",
        "Storey Shelter",
        "Household Shelter & Storey Shelter",
      ];
      let check2Cond = ["Public Shelter", "Transit Shelter"];
      if (check1Cond.includes(el.value.trim())) {
        document
          .getElementById("DeclByQualPers_TechRequForS1040")
          .setAttribute("disabled", "");
        document.getElementById(
          "DeclByQualPers_TechRequForS1040"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_ICertThatThe20")
          .removeAttribute("disabled", "");

        document
          .getElementById("CateOfShel_ProjType10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_ProjType10")
          .setAttribute("mandatory", "");
        document
          .getElementById("CateOfShel_NoOfHSIn10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_NoOfHSIn10")
          .setAttribute("mandatory", "");
        document
          .getElementById("CateOfShel_NoOfSSIn10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_NoOfSSIn10")
          .setAttribute("mandatory", "");

        document.getElementById("CateOfShel_ShelType10").value = "";
        document
          .getElementById("CateOfShel_ShelType10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfShel_ShelType10")
          .removeAttribute("mandatory", "");
        document.getElementById("CateOfShel_ClasOfWork10").value = "";
        document
          .getElementById("CateOfShel_ClasOfWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfShel_ClasOfWork10")
          .removeAttribute("mandatory", "");

        document.getElementById("DeclByQualPers_TechRequForS1030").value = "";
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_TechRequForS1030")
          .removeAttribute("mandatory", "");

        document
          .getElementById("CateOfAppl_Pill10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfAppl_ShocDesi10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfAppl_Mech10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfAppl_Elec10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfAppl_MethStatFor10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfAppl_CommTestRepoFor20")
          .setAttribute("disabled", "");
        if (el.value.trim() === "Household Shelter") {
          document
            .getElementById("CateOfShel_NoOfSSIn10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfShel_NoOfSSIn10")
            .removeAttribute("mandatory");
          document.getElementById("CateOfShel_NoOfSSIn10").value = "";
        } else if (el.value.trim() === "Storey Shelter") {
          document
            .getElementById("CateOfShel_NoOfHSIn10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfShel_NoOfHSIn10")
            .removeAttribute("mandatory");
          document.getElementById("CateOfShel_NoOfHSIn10").value = "";
        }
      } else if (check2Cond.includes(el.value.trim())) {
        document
          .getElementById("DeclByQualPers_ICertThatThe20")
          .setAttribute("disabled", "");
        document.getElementById(
          "DeclByQualPers_ICertThatThe20"
        ).checked = false;
        document
          .getElementById("DeclByQualPers_TechRequForS1040")
          .removeAttribute("disabled", "");

        document
          .getElementById("CateOfShel_ShelType10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_ShelType10")
          .setAttribute("mandatory", "");
        document
          .getElementById("CateOfShel_ClasOfWork10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_ClasOfWork10")
          .setAttribute("mandatory", "");

        document.getElementById("CateOfShel_ProjType10").value = "";
        document
          .getElementById("CateOfShel_ProjType10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfShel_ProjType10")
          .removeAttribute("mandatory", "");
        document.getElementById("CateOfShel_NoOfHSIn10").value = "";
        document
          .getElementById("CateOfShel_NoOfHSIn10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfShel_NoOfHSIn10")
          .removeAttribute("mandatory", "");
        document.getElementById("CateOfShel_NoOfSSIn10").value = "";
        document
          .getElementById("CateOfShel_NoOfSSIn10")
          .setAttribute("disabled", "");
        document
          .getElementById("CateOfShel_NoOfSSIn10")
          .removeAttribute("mandatory", "");

        document
          .getElementById("DeclByQualPers_WaivOfShelTech10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByQualPers_ApprOnWaivOf20")
          .removeAttribute("mandatory", "");
        document.getElementById("DeclByQualPers_ApprOnWaivOf20").value = "";
        document.getElementById("FIELD1").setAttribute("disabled", "");

        document
          .getElementById("CateOfAppl_Pill10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfAppl_ShocDesi10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfAppl_Mech10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfAppl_Elec10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfAppl_MethStatFor10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfAppl_CommTestRepoFor20")
          .removeAttribute("disabled");
      }
      switch (el.value) {
        case check1Cond[0]:
          document.title = "BCA-CD-PLAN02-HS";
          break;
        case check1Cond[1]:
          document.title = "BCA-CD-PLAN02-SS";
          break;
        case check1Cond[2]:
          document.title = "BCA-CD-PLAN02-HS-SS";
          break;
        case check2Cond[0]:
          document.title = "BCA-CD-PLAN02-PS";
          break;
        case check2Cond[1]:
          document.title = "BCA-CD-PLAN02-TS";
          break;
        default:
          document.title = "BCA-CD-PLAN02";
      }
      handleCategoryAppl();
      break;
    case "CateOfAppl_Mech20":
      switch (el.value) {
        case "Penetration for Mechanical Services":
          document
            .getElementById("CateOfAppl_PeneFor10")
            .removeAttribute("disabled");
          document
            .getElementById("CateOfAppl_PeneFor10")
            .setAttribute("mandatory", "");

          document.getElementById("CateOfAppl_Othe10").value = "";
          document
            .getElementById("CateOfAppl_Othe10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Othe10")
            .removeAttribute("mandatory", "");
          break;
        case "Others":
          document
            .getElementById("CateOfAppl_Othe10")
            .removeAttribute("disabled");
          document
            .getElementById("CateOfAppl_Othe10")
            .setAttribute("mandatory", "");

          document.getElementById("CateOfAppl_PeneFor10").value = "";
          document
            .getElementById("CateOfAppl_PeneFor10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_PeneFor10")
            .removeAttribute("mandatory", "");
          break;
        default:
          document.getElementById("CateOfAppl_Othe10").value = "";
          document
            .getElementById("CateOfAppl_Othe10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Othe10")
            .removeAttribute("mandatory", "");
          document.getElementById("CateOfAppl_PeneFor10").value = "";
          document
            .getElementById("CateOfAppl_PeneFor10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_PeneFor10")
            .removeAttribute("mandatory", "");
      }
      break;
    case "CateOfAppl_Elec20":
      switch (el.value) {
        case "Penetration for Electrical Services":
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .removeAttribute("disabled");
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .setAttribute("mandatory", "");

          document.getElementById("CateOfAppl_Elec_Othe10").value = "";
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .removeAttribute("mandatory", "");
          break;
        case "Others":
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .removeAttribute("disabled");
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .setAttribute("mandatory", "");

          document.getElementById("CateOfAppl_Elec_PeneFor10").value = "";
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .removeAttribute("mandatory", "");
          break;
        default:
          document.getElementById("CateOfAppl_Elec_Othe10").value = "";
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Elec_Othe10")
            .removeAttribute("mandatory", "");
          document.getElementById("CateOfAppl_Elec_PeneFor10").value = "";
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .setAttribute("disabled", "");
          document
            .getElementById("CateOfAppl_Elec_PeneFor10")
            .removeAttribute("mandatory", "");
      }
      break;
    case "PhasSubm10":
      if (el.value === "Yes") {
        document.getElementById("PhasSubm30").removeAttribute("disabled");
        document.getElementById("PhasSubm30").setAttribute("mandatory", "");
      } else {
        document.getElementById("PhasSubm30").value = "";
        document.getElementById("PhasSubm30").setAttribute("disabled", "");
        document.getElementById("PhasSubm30").removeAttribute("mandatory", "");
      }
      break;
  }
}

function handleCategoryAppl() {
  if (
    document.getElementById("CateOfAppl_ShocDesi10").checked &&
    !document.getElementById("CateOfAppl_ShocDesi10").hasAttribute("disabled")
  ) {
    document
      .getElementById("CateOfAppl_ShocDesi20")
      .removeAttribute("disabled");
    document
      .getElementById("CateOfAppl_ShocDesi20")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("CateOfAppl_ShocDesi20").value = "";
    document
      .getElementById("CateOfAppl_ShocDesi20")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_ShocDesi20")
      .removeAttribute("mandatory", "");
  }

  if (
    document.getElementById("CateOfAppl_Mech10").checked &&
    !document.getElementById("CateOfAppl_Mech10").hasAttribute("disabled")
  ) {
    document.getElementById("CateOfAppl_Mech20").removeAttribute("disabled");
    document.getElementById("CateOfAppl_Mech20").setAttribute("mandatory", "");
  } else {
    document.getElementById("CateOfAppl_Mech20").value = "";
    document.getElementById("CateOfAppl_Mech20").setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_Mech20")
      .removeAttribute("mandatory", "");
    document.getElementById("CateOfAppl_PeneFor10").value = "";
    document
      .getElementById("CateOfAppl_PeneFor10")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_PeneFor10")
      .removeAttribute("mandatory", "");
    document.getElementById("CateOfAppl_Othe10").value = "";
    document.getElementById("CateOfAppl_Othe10").setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_Othe10")
      .removeAttribute("mandatory", "");
  }

  if (
    document.getElementById("CateOfAppl_Elec10").checked &&
    !document.getElementById("CateOfAppl_Elec10").hasAttribute("disabled")
  ) {
    document.getElementById("CateOfAppl_Elec20").removeAttribute("disabled");
    document.getElementById("CateOfAppl_Elec20").setAttribute("mandatory", "");
  } else {
    document.getElementById("CateOfAppl_Elec20").value = "";
    document.getElementById("CateOfAppl_Elec20").setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_Elec20")
      .removeAttribute("mandatory", "");
    document.getElementById("CateOfAppl_Elec_PeneFor10").value = "";
    document
      .getElementById("CateOfAppl_Elec_PeneFor10")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_Elec_PeneFor10")
      .removeAttribute("mandatory", "");
    document.getElementById("CateOfAppl_Elec_Othe10").value = "";
    document
      .getElementById("CateOfAppl_Elec_Othe10")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_Elec_Othe10")
      .removeAttribute("mandatory", "");
  }

  if (
    document.getElementById("CateOfAppl_MethStatFor10").checked &&
    !document
      .getElementById("CateOfAppl_MethStatFor10")
      .hasAttribute("disabled")
  ) {
    document
      .getElementById("CateOfAppl_MethStatFor20")
      .removeAttribute("disabled");
    document
      .getElementById("CateOfAppl_MethStatFor20")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("CateOfAppl_MethStatFor20").value = "";
    document
      .getElementById("CateOfAppl_MethStatFor20")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_MethStatFor20")
      .removeAttribute("mandatory", "");
  }

  if (
    document.getElementById("CateOfAppl_CommTestRepoFor10").checked &&
    !document
      .getElementById("CateOfAppl_CommTestRepoFor10")
      .hasAttribute("disabled")
  ) {
    document
      .getElementById("CateOfAppl_CommTestRepoFor20")
      .removeAttribute("disabled");
    document
      .getElementById("CateOfAppl_CommTestRepoFor20")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("CateOfAppl_CommTestRepoFor20").value = "";
    document
      .getElementById("CateOfAppl_CommTestRepoFor20")
      .setAttribute("disabled", "");
    document
      .getElementById("CateOfAppl_CommTestRepoFor20")
      .removeAttribute("mandatory", "");
  }
  document.getElementById(
    "CateOfAppl_PlanType10"
  ).value = document.querySelectorAll(
    'input[type="radio"][name = "applicationCategory"]:checked'
  )[0].value;
  handleGFACalc();
}

function handleSubmDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var date = yyyy + "-" + mm + "-" + dd;
  console.log(date);
  if (document.getElementById("DCSubmissionDate10").value > date) {
    showMessage("Date cannot be later than Today. Please re-enter date");
    document.getElementById("DCSubmissionDate10").value = "";
  } else {
    handleGFACalc();
  }
}

function handleGFACalc() {
  let gfa =
    document.getElementById("Project_Overall_GFA10").value === ""
      ? 0
      : parseInt(document.getElementById("Project_Overall_GFA10").value);
  //: parseFloat(document.getElementById("Project_Overall_GFA10").value);

  let d = document.getElementById("DCSubmissionDate10").value;
  let date = new Date(d);
  let bim = document.getElementById("Project_3DSubm10").value;
  let field2 = document.getElementById("FIELD2");
  let building = document.getElementById("CateOfAppl_Buil10").checked;
  let piling = document.getElementById("CateOfAppl_Pill10").checked;
  let structural = document.getElementById("CateOfAppl_Stru10").checked;
  let shockDesign = document.getElementById("CateOfAppl_ShocDesi10").checked;
  let mechanical = document.getElementById("CateOfAppl_Mech10").checked;
  let electrical = document.getElementById("CateOfAppl_Elec10").checked;

  let date2013 = new Date("2013-07-01");
  let date2014 = new Date("2014-07-01");
  let date2015 = new Date("2015-07-01");
  if (bim === "No") {
    field2.value = "No";
    if (
      date.getTime() >= date2013.getTime() &&
      date.getTime() < date2014.getTime() &&
      gfa > 20000 &&
      building
    ) {
      showMessage(
        "From 1 July 2013, all architectural plans, starting with DC submissions,  for new building projects with gross floor area (GFA) above 20,000 sq. m. are to be submitted in BIM format for regulatory approval"
      );
      document.getElementById("Project_3DSubm10").value = "";
      document.getElementById("Project_3DSubm10").removeAttribute("mandatory");
      document.getElementById("Project_3DSubm10").setAttribute("mandatory", "");
    }

    if (
      date.getTime() >= date2014.getTime() &&
      date.getTime() < date2015.getTime() &&
      gfa > 20000 &&
      (piling || structural || shockDesign || mechanical || electrical)
    ) {
      showMessage(
        "From 1 July 2014, all engineering plans, starting with DC submissions, for new building projects with gross floor area (GFA) above 20,000 sq. m. are to  be submitted in BIM format for regulatory approval."
      );
      document.getElementById("Project_3DSubm10").value = "";
      document.getElementById("Project_3DSubm10").removeAttribute("mandatory");
      document.getElementById("Project_3DSubm10").setAttribute("mandatory", "");
    }

    if (
      date.getTime() >= date2015.getTime() &&
      gfa > 5000 &&
      (building ||
        piling ||
        structural ||
        shockDesign ||
        mechanical ||
        electrical)
    ) {
      showMessage(
        "From 1 July 2015, all plans for new building projects with gross floor area (GFA) above 5,000 sq. m. are to be submitted in BIM format for regulatory approval."
      );
      document.getElementById("Project_3DSubm10").value = "";
      document.getElementById("Project_3DSubm10").removeAttribute("mandatory");
      document.getElementById("Project_3DSubm10").setAttribute("mandatory", "");
    }
  } else {
    field2.value = "Yes";
  }
}
// function PhasSubm10_change(element) {
//   let textbox = document.getElementById("PhasSubm30");
//   if (element.value.trim() === "Yes") {
//     textbox.setAttribute("mandatory", "");
//     textbox.removeAttribute("disabled");
//   } else {
//     textbox.removeAttribute("mandatory");
//     textbox.setAttribute("disabled", "");
//     textbox.value = "";
//   }
// }

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteClass).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(deleteClass);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function addRemoveError(element) {
  let uen = document.querySelectorAll('[prefix="Members_UEN_OWNER"]');
  let childCount = document.getElementById("ownerForm").childElementCount;
  let title = document.querySelectorAll('[prefix="Member_Member_Title_OWNER"]');
  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
    title[title.length - 1].value = "Mr";
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
    d.getFullYear < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function atLeastOne(element) {
  let c = document.querySelectorAll(`[name="${element.name}"]`);
  let pass = false;
  for (let i = 0; i < c.length; i++) {
    if (c[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < c.length; i++) {
      c[i].removeAttribute("checked");
      c[i].removeAttribute("mandatory");
    }
  } else {
    for (let i = 0; i < c.length; i++) {
      c[i].setAttribute("checked", "");
      c[i].setAttribute("mandatory", "");
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

function declareQp2(condition) {
  let checkbox = document.getElementById("DeclByQualPers_TechRequForS1040");
  let sign = document.getElementById("DeclByQualPers_TechRequForS1040_span");
  let radios = document.querySelectorAll("[name='declRequirement']");
  let textarea = document.getElementById("DeclByQualPers_TechRequForS1030");
  checkbox.checked = false;
  textarea.value = "";
  for (let x = 0; x < radios.length; x++) {
    radios[x].setAttribute("disabled", "");
    radios[x].checked = false;
  }
  if (condition == true) {
    sign.textContent = "*";
    checkbox.removeAttribute("disabled");
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    sign.textContent = "";
    checkbox.setAttribute("disabled", "");
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
    textarea.setAttribute("disabled", "");
    for (let i = 0; i < radios.length; i++) {
      radios[i].removeAttribute("mandatory");
      radios[i].removeAttribute("checked");
    }
  }
}

function declareQP(condition) {
  let checkbox = document.getElementById("DeclByQualPers_ICertThatThe20");
  let radios = document.querySelectorAll("[name='declConfirm']");
  let date = document.getElementById("DeclByQualPers_ApprOnWaivOf20");
  let mandaSign = document.getElementById("DeclByQualPers_ICertThatThe20_span");
  let field = document.getElementById("FIELD1");
  checkbox.checked = false;
  date.value = "";
  field.value = "";
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  if (condition == true) {
    mandaSign.textContent = "*";
    checkbox.removeAttribute("disabled");
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    mandaSign.textContent = "";
    checkbox.setAttribute("disabled", "");
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
    date.setAttribute("disabled", "");
    date.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    for (let i = 0; i < radios.length; i++) {
      radios[i].removeAttribute("mandatory");
      radios[i].removeAttribute("checked");
      radios[i].setAttribute("disabled", "");
    }
  }
}

function removeUenError(element) {
  // let name = document.getElementById(element.id);
  // console.log(name);
  let id = getId(element.id);
  let uen = document.getElementById(`Members_UEN_OWNER${id}0`);

  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeUenError2() {
  let uen = document.getElementById("Members_UEN_QP10");
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
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
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let child = parent.querySelector(`[prefix="${prefix}"]`);
  let index = 0;
  child.setAttribute("raw-value", child.value);
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function nricMaskingAccorDelete(prefix) {
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let index = 0;
  let index2 = 0;
  let x = 1;
  for (let i = 0; i < masked.length; i++) {
    x++;
    index2 = index2 + 10;
    delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    if (x == masked.length) {
      index2 = index2 + 10;
      delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    }
  }
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
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
  let applicationType = "CD";
  let planType = document.getElementById("CateOfAppl_PlanType10").value;
  let planNo = el.value;

  let query = `projRefNo=${projRefNo}&applicationType=${applicationType}&planType=${planType}&planNo=${planNo}`;

  jsonData["agencyUrl10"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl10"].url,
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
