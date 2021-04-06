document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  // for (let sel of document.querySelectorAll("[xfd-hidden]")) {
  //  let id = sel.getAttribute("xfd-hidden");
  //   le t txt = document.createElement("cn2-textbox");
  //   txt.setAttribute("no-label", "");
  //   txt.setAttribute("id", id);
  //   txt.setAttribute("hidden", "");

  //   sel.parentElement.appendChild(txt);
  //   jsonData[id] = "";

  //   sel.shadowRoot.querySelector("select").addEventListener("change", (e) => {
  //     let value = e.target.value;
  //     document.getElementById(id).value = value;
  //   });

  //   sel.removeAttribute("xfd-hidden");
  // }
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
  let shelCate = document.getElementById("CateOfShel_PleaSeleCate20");
  let projCat = document.getElementById("CateOfShel_ProjCate10");

  let noOfHs = document.getElementById("CateOfShel_NoOfHSIn10");
  let noOfSS = document.getElementById("CateOfShel_NoOfSSIn10");

  let shelType = document.getElementById("CateOfShel_ShelType10");
  let shelTypeSign = document.getElementById("CateOfShel_ShelType10_span");
  let shelTypeRow = document.getElementById("shelterType_row");
  document.getElementById("CateOfAppl_Buil10").checked = false;
  document.getElementById("CateOfAppl_Stru10").checked = false;
  let title = document.querySelector("title");
  switch (value) {
    case "Household Shelter":
      title.innerHTML = "BCA-CD-PLAN01-HS";
      jsonData["FormName10"] = "BCA-CD-PLAN01-HS";
      shelCate.value = "HS";
      enableCheckboxes(false);
      enableNoOfSS(false);
      enableNoOfHs(true);
      enableProjCat(true, "NA");
      enableProjType(true, "HHS");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Household Shelter (PPVC)":
      title.innerHTML = "BCA-CD-PLAN01-HS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN01-HS-P";
      shelCate.value = "HS-P";
      enableCheckboxes(false);
      enableNoOfSS(false);
      enableNoOfHs(true);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Household &amp; Storey Shelters":
      title.innerHTML = "BCA-CD-PLAN01-HS-SS";
      jsonData["FormName10"] = "BCA-CD-PLAN01-HS-SS";
      shelCate.value = "HS/SS";
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(true);
      enableProjCat(true, "NA");
      enableProjType(true, "others");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Household &amp; Storey Shelters (PPVC)":
      title.innerHTML = "BCA-CD-PLAN01-HS-SS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN01-HS-SS-P";
      shelCate.value = "HS/SS-P";
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(true);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Public Shelter":
      title.innerHTML = "BCA-CD-PLAN01-PS";
      jsonData["FormName10"] = "BCA-CD-PLAN01-PS";
      shelCate.value = "PS";
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
      title.innerHTML = "BCA-CD-PLAN01-SS";
      jsonData["FormName10"] = "BCA-CD-PLAN01-SS";
      shelCate.value = "SS";
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "NA");
      enableProjType(true, "others");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Storey Shelter (PPVC)":
      title.innerHTML = "BCA-CD-PLAN01-SS-P";
      jsonData["FormName10"] = "BCA-CD-PLAN01-SS-P";
      shelCate.value = "SS-P";
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "PPVC");
      enableProjType(true, "others");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Storey Shelter (Non-Residential)":
      title.innerHTML = "BCA-CD-PLAN01-SS-NR";
      jsonData["FormName10"] = "BCA-CD-PLAN01-SS-NR";
      shelCate.value = "SS-NR";
      enableCheckboxes(false);
      enableNoOfSS(true);
      enableNoOfHs(false);
      enableProjCat(true, "NA");
      enableProjType(true, "default");
      disableSheltertype();
      shelTypeRow.setAttribute("hidden", "");
      break;
    case "Transit Shelter":
      title.innerHTML = "BCA-CD-PLAN01-TS";
      jsonData["FormName10"] = "BCA-CD-PLAN01-TS";
      shelCate.value = "TS";
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

function setICertThatThe50(element) {
  let ICertThatThe30 = element.value;
  let ICertThatThe50 = document.getElementById("DeclByQualPers_ICertThatThe50");

  if (!ICertThatThe30 == "") {
    ICertThatThe50.value = ICertThatThe30;
  } else {
    ICertThatThe50.value = "";
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

function setProjType20(element) {
  let projType10 = element.value;
  let projType20 = document.getElementById("CateOfShel_ProjType20");

  if (!projType10 == "") {
    projType20.value = projType10;
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
    document.getElementById("CateOfAppl_ShocDesi30"),
    document.getElementById("CateOfAppl_Mech20"),
    document.getElementById("CateOfAppl_Elec20"),
    document.getElementById("CateOfAppl_MethStatFor30"),
    document.getElementById("CateOfAppl_CommTestRepoFor30"),
  ];
  for (c of checkboxes) {
    c.checked = false;
  }
  for (f of fields) {
    f.setAttribute("disabled", "");
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
    for (field of fields) {
      field.removeAttribute("mandatory");
    }
  }
}
function CateOfAppl10_change(element, selectBox) {
  let select = document.getElementById(selectBox);
  if (element.checked) {
    select.removeAttribute("mandatory");
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory", "");
  }
}

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
function removeManda(element) {
  let c = document.getElementById(element.id);
  if (c.checked) {
    c.removeAttribute("mandatory");
    c.removeAttribute("checked");
  } else {
    c.setAttribute("mandatory", "");
    c.setAttribute("checked", "");
  }
}

function ContOfAppl_OthePleaSpec20_change(element) {
  let field = document.getElementById("ContOfAppl_OthePleaSpec10");
  let fieldMandaSign = document.getElementById(
    "ContOfAppl_OthePleaSpec10_span"
  );
  if (element.checked) {
    field.removeAttribute("hidden");
    field.setAttribute("mandatory", "");
    fieldMandaSign.textContent = "*";
  } else {
    field.setAttribute("hidden", "");
    field.removeAttribute("mandatory");
    field.value = "";
    fieldMandaSign.textContent = "";
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

function setHiddenCheckboxField() {
  let Buil10 = document.getElementById("CateOfAppl_Buil10");
  let Pill10 = document.getElementById("CateOfAppl_Pill10");
  let Stru10 = document.getElementById("CateOfAppl_Stru10");
  let ShocDesi10 = document.getElementById("CateOfAppl_ShocDesi10");
  let Mech10 = document.getElementById("CateOfAppl_Mech10");
  let Elec10 = document.getElementById("CateOfAppl_Elec10");
  let MethStatFor10 = document.getElementById("CateOfAppl_MethStatFor10");
  let CommTestRepoFor10 = document.getElementById("CateOfAppl_CommTestRepoFor10");

  if (Buil10.checked) {
    document.getElementById("CateOfAppl_Buil20").value = "ARCH";
  } else {
    document.getElementById("CateOfAppl_Buil20").value = "";
  }
  if (Pill10.checked) {
    document.getElementById("CateOfAppl_Pill20").value = "PILING";
  } else {
    document.getElementById("CateOfAppl_Pill20").value = "";
  }
  if (Stru10.checked) {
    document.getElementById("CateOfAppl_Stru20").value = "STRUCT";
  } else {
    document.getElementById("CateOfAppl_Stru20").value = "";
  }
  if (ShocDesi10.checked) {
    document.getElementById("CateOfAppl_ShocDesi20").value = "SHOCK";
  } else {
    document.getElementById("CateOfAppl_ShocDesi20").value = "";
  }
  if (Mech10.checked) {
    document.getElementById("CateOfAppl_Mech30").value = "MECH";
  } else {
    document.getElementById("CateOfAppl_Mech30").value = "";
  }
  if (Elec10.checked) {
    document.getElementById("CateOfAppl_Elec30").value = "ELECT";
  } else {
    document.getElementById("CateOfAppl_Elec30").value = "";
  }
  if (MethStatFor10.checked) {
    document.getElementById("CateOfAppl_MethStatFor20").value = "MTHDSTMT";
  } else {
    document.getElementById("CateOfAppl_MethStatFor20").value = "";
  }
  if (CommTestRepoFor10.checked) {
    document.getElementById("CateOfAppl_CommTestRepoFor20").value = "TESTRPT";
  } else {
    document.getElementById("CateOfAppl_CommTestRepoFor20").value = "";
  }
}

function setHiddenDropdownField() {
  let CateOfAppl_Elec20 = document.getElementById("CateOfAppl_Elec20").value;
  let CateOfAppl_Elec40 = document.getElementById("CateOfAppl_Elec40");
  let CateOfAppl_Mech20 = document.getElementById("CateOfAppl_Mech20").value;
  let CateOfAppl_Mech40 = document.getElementById("CateOfAppl_Mech40");

  if (!CateOfAppl_Elec20 == "") {
    CateOfAppl_Elec40.value = CateOfAppl_Elec20;
  } else {
    CateOfAppl_Elec40.value = "";
  }

  if (!CateOfAppl_Mech20 == "") {
    CateOfAppl_Mech40.value = CateOfAppl_Mech20;
  } else {
    CateOfAppl_Mech40.value = "";
  }
}

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
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
