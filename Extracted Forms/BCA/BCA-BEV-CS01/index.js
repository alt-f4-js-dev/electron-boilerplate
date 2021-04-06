// Global variables
var flag;
var test;

let localStructLow;
let localStructHigh;
let localLow;
let localHigh;

let globalVariable = {
  GFALow: 5000,
  GFAHigh: 25000,
  minStructLow: 25,
  minLow: 40,
  minStructHigh: 35,
  minHigh: 50,
  l1StrLow: 30,
  l1TotLow: 45,
  l1StrHigh: 40,
  l1TotHigh: 55,
  l2StrLow: 33,
  l2TotLow: 48,
  l2StrHigh: 43,
  l2TotHigh: 53,
  l3StrLow: 28,
  l3TotLow: 43,
  l3StrHigh: 38,
  l3TotHigh: 53,
};

document.addEventListener("DOMContentLoaded", function () {
  // document
  //   .querySelector("[page-number='5']")
  //   .shadowRoot.querySelector("[id = 'menuLabel']").style.paddingRight = "0px";
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

function Project_Dtls_change(element, textId1, textId2) {
  let newWork = document.getElementById(textId1);
  let workExis = document.getElementById(textId2);
  let subTotal1 = document.getElementById("Project_Dtls_SubTota_NewWork10");
  let subTotal2 = document.getElementById(
    "Project_Dtls_SubTota_WorkWithExisBldg10"
  );
  if (element.checked) {
    newWork.removeAttribute("disabled");
    workExis.removeAttribute("disabled");
    newWork.setAttribute("placeholder", "0");
    workExis.setAttribute("placeholder", "0");
    newWork.value = "";
    workExis.value = "";
  } else {
    newWork.value = "";
    workExis.value = "";
    newWork.removeAttribute("mandatory");
    workExis.removeAttribute("mandatory");
    newWork.setAttribute("disabled", "");
    workExis.setAttribute("disabled", "");
    newWork.removeAttribute("placeholder");
    workExis.removeAttribute("placeholder");
    newWork.value = "";
    workExis.value = "";
  }

  Project_Dtls_NewWork_change();
  Project_Dtls_WorkExis_change();
  //CopLogic

  let radioGroup = document.querySelectorAll("[copLogic]");
  let radioSelected = "";

  for (let t of radioGroup) {
    if (document.getElementById(t.id).checked == true) {
      radioSelected = t.id;
    }
  }
  if (radioSelected.length != 0) {
    copLogic(document.getElementById(radioSelected));
  }
}

function Project_Dtls_NewWork_change() {
  let textboxes = document.querySelectorAll("[NewWorkProject_Dtls]");
  let total = 0;
  let subTotal1 = document.getElementById("Project_Dtls_SubTota_NewWork10");
  for (let textbox of textboxes) {
    let val1 = !isNaN(parseFloat(total)) ? parseFloat(total).toFixed(2) : 0.0;
    let val2 = !isNaN(parseFloat(textbox.value))
      ? parseFloat(textbox.value).toFixed(2)
      : 0.0;
    total = parseFloat(val1) + parseFloat(val2);
  }
  subTotal1.value = total;
  getGrandTotal();

  //CopLogic

  let radioGroup = document.querySelectorAll("[copLogic]");
  let radioSelected = "";

  for (let t of radioGroup) {
    if (document.getElementById(t.id).checked == true) {
      radioSelected = t.id;
      copLogic(document.getElementById(radioSelected));
    }
  }

  minScoreDiff();
}
function Project_Dtls_WorkExis_change() {
  let textboxes = document.querySelectorAll("[WorkExisProject_Dtls]");
  let total = 0;
  let subTotal1 = document.getElementById(
    "Project_Dtls_SubTota_WorkWithExisBldg10"
  );
  for (let textbox of textboxes) {
    let val1 = !isNaN(parseFloat(total)) ? parseFloat(total).toFixed(2) : 0.0;
    let val2 = !isNaN(parseFloat(textbox.value))
      ? parseFloat(textbox.value).toFixed(2)
      : 0.0;
    total = parseFloat(val1) + parseFloat(val2);
  }
  subTotal1.value = total;
  getGrandTotal();

  //CopLogic

  let radioGroup = document.querySelectorAll("[copLogic]");
  let radioSelected = "";

  for (let t of radioGroup) {
    if (document.getElementById(t.id).checked == true) {
      radioSelected = t.id;
      copLogic(document.getElementById(radioSelected));
    }
  }

  minScoreDiff();
}

function getGrandTotal() {
  let subTotal1 = document.getElementById("Project_Dtls_SubTota_NewWork10");
  let subTotal2 = document.getElementById(
    "Project_Dtls_SubTota_WorkWithExisBldg10"
  );
  let grandTotal = document.getElementById("Project_Dtls_TotaGFA10");
  let t1 = 0;
  let t2 = 0;
  if (subTotal1.value !== "") {
    t1 = parseFloat(subTotal1.value);
  }
  if (subTotal2.value !== "") {
    t2 = parseFloat(subTotal2.value);
  }

  grandTotal.value = t1 + t2;

  let copLogicTrigger = document.querySelectorAll("[copLogic]");

  for (let copRad of copLogicTrigger) {
    let radElement = document.getElementById(copRad.id);
    if (radElement.checked == true) {
      copLogic(radElement);
    }
  }
}

// Commmon
function validate(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
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

// Functions for the ID manipulation and the multiple block logic (UX) - royette.v
function addBlock() {
  let totalBlockCounts = document.getElementById(
    "ConsScorSummSheet_TotaNoOfBloc10"
  );
  document.getElementById("mask").removeAttribute("hidden");
  let navParent = document.getElementById("menu");
  let navChild = navParent.querySelectorAll("cn2-nav-button");
  let blockCount = 1;

  for (let ch of navChild) {
    if (ch.getAttribute("navType") == "block") {
      blockCount++;
    }
  }

  totalBlockCounts.value = blockCount;

  if (blockCount > 1) {
    let deleteBtn = document.querySelectorAll("[prefix='blockDelBtn']");

    for (let delete1 of deleteBtn) {
      if (delete1.id != "blockDelBtn10") {
        delete1.removeAttribute("disabled");
        delete1.removeAttribute("hidden", "");
      }
    }
  }

  addNewRowToSmryTbl(blockCount);

  // Properties of the new block nav
  let navProp = { target: "", pageNum: "", label: "" };

  navProp.target = "block" + blockCount + "0";
  navProp.pageNum = "B";
  navProp.label = "Block " + blockCount;
  navProp.id = "navBlock" + blockCount;
  navProp.blockNo = blockCount;

  createNewBlockNode();
  navParent.append(createNewBlockNav(navProp));
  waitUntilElementExists("block" + blockCount + "0", "menu");

  //Edit radio btn name
  let rad1 = document.getElementById(
    "MEP_AirConDuct_PrefDuct" + blockCount + 0
  );
  let rad2 = document.getElementById(
    "MEP_AirConDuct_PrefAndPreInsu" + blockCount + 0
  );

  rad1.removeAttribute("name");
  rad1.setAttribute("name", "MEP_AirConDuct_name" + blockCount);

  rad2.removeAttribute("name");
  rad2.setAttribute("name", "MEP_AirConDuct_name" + blockCount);

  for (let a of document.querySelectorAll("[coplogic]")) {
    if (a.checked == true) {
      copLogic(document.getElementById(a.id));
    }
  }
}

function addNewRowToSmryTbl(blockCount) {
  let table = document.getElementById("summaryTable");
  let rowTemp = document.getElementById("rowTemplate").cloneNode(true);
  rowTemp.removeAttribute("hidden");
  rowTemp.setAttribute("id", "rowBlock" + blockCount + "0");

  let rowCount = 2 + blockCount;
  let rowNode = nodeIdHandler(rowTemp, blockCount, "add");
  table.querySelectorAll("tr")[rowCount - 1].after(rowNode);
  // console.log($("#summaryTable > tbody > tr"))
  // $("#summaryTable > tbody > tr")
  //   .eq(rowCount - 1)
  //   .after(rowNode);
}

function createNewBlockNode() {
  let rowParent = document.getElementById("page");
  let blockTemplate = document.getElementById("blockTemplate");
  let navParent = document.getElementById("menu");
  let blockCount = 1;
  let navChild = navParent.querySelectorAll("cn2-nav-button");

  // Create a copy of template
  let node = blockTemplate.cloneNode(true);

  for (let ch of navChild) {
    if (ch.getAttribute("navType") == "block") {
      blockCount++;
    }
  }

  node.setAttribute("id", "block" + blockCount + "0");

  node = nodeIdHandler(node, blockCount, "add");
  rowParent.append(node);
}

function createNewBlockNav(navProp) {
  let navElem = document.createElement("cn2-nav-button");

  if (navProp != null) {
    navElem.setAttribute("target", navProp.target);
    navElem.setAttribute("page-number", navProp.pageNum);
    navElem.setAttribute("navType", "block");
    navElem.setAttribute("label", navProp.label);
    navElem.setAttribute("id", navProp.id);
    navElem.setAttribute("block-number", navProp.blockNo);
  }

  return navElem;
}

function waitUntilElementExists(nodeEl, navEl) {
  let loader = setInterval(function () {
    if (
      document.getElementById(nodeEl).lastElementChild &&
      document.getElementById(navEl).lastElementChild
    ) {
      setTimeout(function () {
        document.getElementById("mask").setAttribute("hidden", "");
        clearInterval(loader);
      }, 3000);
    }
  }, 1);
}

function nodeIdHandler(node, blockCount, mode) {
  let newId = "";
  let newBlockCount;
  let exceptFields = [
    "ConsScorSummShee_TotaFlooArea10",
    "ConsScorSummShee_TotaPercOfFloo10",
    "ConsScorSummShee_TotaAppoStruSystCSco10",
    "ConsScorSummShee_TotaAppoConsCSco10",
  ];
  for (let nd of node.getElementsByTagName("cn2-textbox")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") == null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      if (!exceptFields.includes(nd.getAttribute("id"))) {
        delete jsonData[id.getAttribute("id")];
        nd.setAttribute("id", newId);
      }
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId + "_10");
      jsonData[newId + "_10"] = "";
    }
  }

  for (let nd of node.getElementsByTagName("span")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") == null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      if (!exceptFields.includes(nd.getAttribute("id"))) {
        delete jsonData[id.getAttribute("id")];
        nd.setAttribute("id", newId);
      }
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId + "_10");
    }
  }

  for (let nd of node.getElementsByTagName("cn2-select")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("cn2-checkbox")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = false;
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("cn2-textarea")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("input")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = false;
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("p")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = nd.textContent;
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("cn2-button")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") == null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
    } else if (nd.getAttribute("id") != null && mode == "delete") {
      delete jsonData[nd.getAttribute("id")];
    } else if (nd.getAttribute("id") != null && mode == "update") {
      newBlockCount = nd
        .getAttribute("id")
        .replace(nd.getAttribute("prefix"), "")
        .replace(nd.getAttribute("suffix"), "");
      newId =
        nd.getAttribute("prefix") +
        (newBlockCount - 1) +
        nd.getAttribute("suffix");
      nd.setAttribute("id", newId);
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "add" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
      nd.setAttribute("id", newId + "_10");
    }

    for (let nd of node.getElementsByTagName("table")) {
      if (
        nd.getAttribute("prefix") != null &&
        nd.getAttribute("suffix") != null &&
        mode == "add" &&
        nd.getAttribute("sub-suffix") != null
      ) {
        newId =
          nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
        nd.setAttribute("id", newId);
      }
    }

    for (let nd of node.getElementsByTagName("tr")) {
      if (
        nd.getAttribute("prefix") != null &&
        nd.getAttribute("suffix") != null &&
        mode == "add" &&
        nd.getAttribute("sub-suffix") == null
      ) {
        newId =
          nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
        nd.setAttribute("id", newId);
      }
      if (
        nd.getAttribute("prefix") != null &&
        nd.getAttribute("suffix") != null &&
        mode == "add" &&
        nd.getAttribute("sub-suffix") != null
      ) {
        newId =
          nd.getAttribute("prefix") + blockCount + nd.getAttribute("suffix");
        nd.setAttribute("id", newId + "_10");
      }
    }
  }

  return node;
}

function deleteBlock() {
  blockSibId = [];

  let index = flag.getAttribute("id").replace("blockDelBtn", "");

  let rowBlock = document.getElementById("rowBlock" + index);
  let navToDelete = document.querySelector("[target='block" + index + "']");

  let nodeToDelete = document.getElementById("block" + index);
  let deleteBlockCount = document.querySelectorAll("[prefix='blockDelBtn']")
    .length;

  nodeIdHandler(nodeToDelete, index.replace("0", ""), "delete");
  updateNodeSibling(nodeToDelete);
  nodeToDelete.remove();

  updateRowSibling(rowBlock, navToDelete, index);

  if (deleteBlockCount == 2) {
    let deleteBtns = document.querySelectorAll("[prefix='blockDelBtn']");

    for (let d of deleteBtns) {
      d.setAttribute("disabled", "");
    }
  }

  let totalBlockCounts = document.getElementById(
    "ConsScorSummSheet_TotaNoOfBloc10"
  );
  totalBlockCounts.value = deleteBlockCount - 1;

  computeTotalFlrArea();
  computeAppConstCscore();
  computeAppoStrucSyst();
  minScoreDiff();

  let copLogicTrigger = document.querySelectorAll("[copLogic]");

  for (let copRad of copLogicTrigger) {
    let radElement = document.getElementById(copRad.id);
    if (radElement.checked == true) {
      copLogic(radElement);
    }
  }
}

function updateNodeSibling(node) {
  if (!node.nextElementSibling || node.nextElementSibling.id == null) {
    return;
  }
  nodeIdHandler(node.nextElementSibling, 0, "update");
  updateNodeSibling(node.nextElementSibling);
}

function updateNavSibling(nav) {
  let blk = nav.getAttribute("block-number");
  let allNav = document.querySelectorAll("[navType='block']");
  let blockNo;

  for (let j of allNav) {
    if (j.getAttribute("block-number") > blk) {
      blockNo = j.getAttribute("block-number");
      j.setAttribute("target", "block" + (blockNo - 1) + "0");
      j.setAttribute("block-number", blockNo - 1);
      j.setAttribute("label", "Block " + (blockNo - 1));
      document
        .getElementById("rowBlock" + blockNo + "0")
        .setAttribute("id", "rowBlock" + (blockNo - 1) + "0");
      document
        .getElementById("block" + blockNo + "0")
        .setAttribute("id", "block" + (blockNo - 1) + "0");
    }
  }
}

function updateRowSibling(rowBlockEl, navEl, index) {
  let fieldGrp = [
    "ConsScorSummShee_BlockNo",
    "ConsScorSummShee_NoOfFloo",
    "ConsScorSummShee_FlooArea",
    "ConsScorSummShee_PercOfFlooArea",
    "ConsScorSummShee_StruSystCSco",
    "ConsScorSummShee_AppoStruSystCSco",
    "ConsScorSummShee_ConsScor",
    "ConsScorSummShee_AppoConsScor",
  ];

  for (let fld of fieldGrp) {
    delete jsonData[fld + index];
  }

  updateNodeSibling(rowBlockEl);
  rowBlockEl.parentNode.removeChild(rowBlockEl);

  updateNavSibling(navEl);
  navEl.parentNode.removeChild(navEl);
}

/*
Functions for calculation logic of forms
  - Logic used on .XDP form will be commented above the function (if possible)

create by : royette.v
updated by : gabriel.r -02/21/2020
*/
function copLogic(el) {
  let copId = el.id;

  switch (copId) {
    case "Project_Dtls_COP10": {
      selected = 1;
      localStructLow = globalVariable.minStructLow;
      localStructHigh = globalVariable.minStructHigh;
      localLow = globalVariable.minLow;
      localHigh = globalVariable.minHigh;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP20": {
      selected = 2;
      localStructLow = globalVariable.l1StrLow;
      localStructHigh = globalVariable.l1StrHigh;
      localLow = globalVariable.l1TotLow;
      localHigh = globalVariable.l1TotHigh;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP30": {
      selected = 3;
      localStructLow = globalVariable.l1StrLow;
      localStructHigh = globalVariable.l1StrHigh;
      localLow = globalVariable.l1TotLow;
      localHigh = globalVariable.l1TotHigh;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP40": {
      selected = 4;
      localStructLow = 33;
      localStructHigh = 43;
      localLow = 48;
      localHigh = 58;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP50": {
      selected = 5;
      localStructLow = 28;
      localStructHigh = 38;
      localLow = 43;
      localHigh = 53;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP60": {
      selected = 6;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 47;
      localHigh = 57;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP70": {
      selected = 9;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 47;
      localHigh = 57;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP80": {
      selected = 7;
      localStructLow = 35;
      localStructHigh = 45;
      localLow = 50;
      localHigh = 60;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP90": {
      selected = 8;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 47;
      localHigh = 57;
      coplogicChange(true);
      break;
    }
    case "Project_Dtls_COP100": {
      selected = 10;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 50;
      localHigh = 60;
      coplogicChange(false);
      break;
    }
    case "Project_Dtls_COP110": {
      selected = 11;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 50;
      localHigh = 60;
      coplogicChange(false);
      break;
    }
    case "Project_Dtls_COP120": {
      selected = 12;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 50;
      localHigh = 60;
      coplogicChange(false);
      break;
    }
    case "Project_Dtls_COP130": {
      selected = 13;
      localStructLow = 32;
      localStructHigh = 42;
      localLow = 50;
      localHigh = 60;
      coplogicChange(false);
      break;
    }
  }
  calcMinStrucSystScore(selected);
  calcMinConsScore();
  minScoreDiff();
}

function coplogicChange(condition) {
  //A section
  let strutFree = document.querySelectorAll("[prefix = 'strutFree']");
  let strutMaxVal = document.querySelectorAll("[prefix = 'strutMaxVal']");
  let StruInnoSyst_StruFreeDeepBase_Cscore = document.querySelectorAll(
    "[prefix='StruInnoSyst_StruFreeDeepBase_CScore']"
  );
  let structMethod = document.querySelectorAll("[asectionMethod]");
  let seekBCA = document.querySelectorAll("[aSectionAfterCop]");
  let seekBCA2 = document.querySelectorAll("[aSectionAfterCop2]");
  let userofTower = document.querySelectorAll(
    "[prefix = 'StruInnoSyst_UseOfToweCran_MaxiAlloPts']"
  );

  //Bsection
  let amepInnov = document.querySelectorAll("[prefix = 'amepInnov']");
  let amepInnovScore = document.querySelectorAll("[prefix = 'amepInnovScore']");
  let amepCscoreMxTotal = document.querySelectorAll(
    "[prefix = 'amepCscoreMxTotal']"
  );
  let amepInnovCd = document.querySelectorAll("[beforeCopLogic]");
  let beforeCopLabel = document.querySelectorAll("[prefix = 'beforeCop']");
  let AMEPInnoSyst_UseOfScisLift_IfAppi = document.querySelectorAll(
    "[prefix = 'AMEPInnoSyst_UseOfScisLift_IfAppi']"
  );

  let AMEPInnoSyst_UseOfBoomLift_IfAppi = document.querySelectorAll(
    "[prefix = 'AMEPInnoSyst_UseOfBoomLift_IfAppi']"
  );
  let AMEInnoSyst_AnyOtheInnoIn_CScore = document.querySelectorAll(
    "[prefix = 'AMEInnoSyst_AnyOtheInnoIn_CScore']"
  );
  let amepSubTotaAMEP = document.querySelectorAll(
    "[prefix = 'amepSubTotaAMEP']"
  );
  let beforeCop2 = document.querySelectorAll("[beforeCop2]");
  //Csection
  let beforeCop = document.querySelectorAll("[beforeCop]");
  let afterCop = document.querySelectorAll("[afterCop]");
  let GOODTotal = document.querySelectorAll("[prefix='GOODTotal']");
  let GOODsubTotal = document.querySelectorAll("[prefix='GOODsubTotal']");
  let GOODDescDelBtn = document.querySelectorAll("[prefix='GOODDescDelBtn']");
  let GOODDesc = document.querySelectorAll("[prefix='GOODDesc']");

  if (condition) {
    for (let desc of GOODDesc) {
      if (desc.hasAttribute("id")) {
        desc.setAttribute("hidden", "");
      } else {
        desc.setAttribute("hidden", "");
      }
    }
    for (let cSectionTable of GOODDescDelBtn) {
      if (cSectionTable.hasAttribute("id")) {
        let id = cSectionTable.id.slice(-3);
        if (id != "_10") {
          deleteDescRow("GOODDesc", document.getElementById(cSectionTable.id));
        }
        if (id == "_10") {
          disableDeleteC3Sect(document.getElementById(cSectionTable.id));
        }
        if (id == "_10") {
          let index = cSectionTable.id.slice(14, -3);
          document.getElementById(
            "GoodInduPrac_AnyOtheInnoIn_Desc" + index + id
          ).value = "";
        }
        if (id == "_10") {
          let index = cSectionTable.id.slice(14, -3);
          document.getElementById(
            "GoodInduPrac_AnyOtheInnoIn_CScore" + index + id
          ).value = "";
          document
            .getElementById("GoodInduPrac_AnyOtheInnoIn_CScore" + index + id)
            .removeAttribute("mandatory");
          document
            .getElementById("GoodInduPrac_AnyOtheInnoIn_CScore" + index + id)
            .setAttribute("disabled", "");
        }
      }
    }
    document.getElementById("GOODDescDelBtn10_10").setAttribute("disabled", "");
    //a section Cop logic
    for (let a of strutFree) {
      a.innerHTML = "Strut free basement construction";
    }

    for (let b of strutMaxVal) {
      b.innerHTML = "4";
    }
    for (let c of StruInnoSyst_StruFreeDeepBase_Cscore) {
      c.removeAttribute("event-blur");
      c.setAttribute(
        "event-blur",
        "StruInnoSyst_StruFreeDeepBase_Cscore_change(this, 4)"
      );
      if (c.hasAttribute("id")) {
        let field = document.getElementById(c.id);
        StruInnoSyst_StruFreeDeepBase_Cscore_change(field, 4);
      }
    }
    for (let r of structMethod) {
      r.innerHTML = "METHODS, SYSTEMS, PROCESSES, PLANT AND EQUIPMENT";
    }

    for (let p of seekBCA) {
      p.innerHTML = ")";
    }

    for (let q of seekBCA2) {
      q.innerHTML =
        "the extent of the innovative method, system, process, plant & equipment on labour usage)";
    }

    for (let u of userofTower) {
      u.innerHTML = "3";
      if (u.id.length != 0) {
        let idIndex = u.id.slice(-2);

        StruInnoSyst_UseOfToweCran_UsagPerc_change(
          document.getElementById(
            "StruInnoSyst_UseOfToweCran_UsagPerc" + idIndex
          ),
          "StruInnoSyst_UseOfToweCran_CScore"
        );
      }
    }

    //b section Cop logic
    for (let d of amepInnov) {
      d.innerHTML =
        "3. AMEP INNOVATIVE METHODS / SYSTEMS /PROCESSES, PLANT AND EQUIPMENT";
    }

    for (let e of amepInnovScore) {
      e.innerHTML = "(max 25 pts)";
    }

    for (let f of amepInnovCd) {
      f.removeAttribute("hidden");
    }

    for (let g of beforeCopLabel) {
      g.innerHTML =
        "(e) Any other Innovative methods, systems, processes, plant and equipment";
    }

    // for (let h of AMEPInnoSyst_UseOfScisLift_IfAppi) {
    //   if (h.hasAttribute("id")) {
    //     let field = document.getElementById(h.id);
    //     field.checked = false;
    //     AMEPInnoSyst_change(field);
    //     subTotalB3Section(document.getElementById(h.id));
    //   }
    // }

    // for (let w of AMEPInnoSyst_UseOfBoomLift_IfAppi) {
    //   if (w.hasAttribute("id")) {
    //     let field = document.getElementById(w.id);
    //     field.checked = false;
    //     AMEPInnoSyst_change(field);
    //     subTotalB3Section(document.getElementById(w.id));
    //   }
    // }

    for (let i of AMEInnoSyst_AnyOtheInnoIn_CScore) {
      i.removeAttribute("event-blur");
      i.setAttribute(
        "event-blur",
        "onBlurDescB3Cscore(this);formatDecimal(this, 2);maxValueValidation(this, 25)"
      );

      let field = document.getElementById(i.id);
      if (i.hasAttribute("id")) {
        field.removeAttribute("event-blur");
        field.setAttribute(
          "event-blur",
          "onBlurDescB3Cscore(this);formatDecimal(this, 2);maxValueValidation(this, 25)"
        );
        maxValueValidation(field, 25);
      }
    }

    for (let j of amepSubTotaAMEP) {
      j.innerHTML = "(max 50 pts)";
    }

    //c section Cop logic
    for (let k of beforeCop) {
      k.removeAttribute("hidden");

      let checkBox = k.getElementsByTagName("cn2-checkbox");
      //let textBox = k.getElementsByTagName("cn2-textbox");

      let checkBoxPref1 = "GoodInduPrac_AdopVirtDesiAnd_Yes";
      let checkBoxPref2 = "GoodInduPrac_ToAdopATrad_Yes";
      let checkBoxPref3 = "GoodInduPrac_ToProdAndDist_Yes";
      let checkBoxPref4 = "GoodInduPrac_CondMontWorkStud_Yes";
      let checkBoxPref5 = "GoodInduPrac_UseToLikeCCTV_Yes";
      let checkBoxPref6 = "GoodInduPrac_ToCondTheFoll_Yes";
      //let checkBoxPref7 = "GoodInduPrac_UseOfScisLiftAnd_Yes"

      for (let counterCheckBox of afterCop) {
        let cSectcheck = counterCheckBox.getElementsByTagName("cn2-checkbox");

        if (cSectcheck.length != 0) {
          if (cSectcheck[0].hasAttribute("id")) {
            let index = cSectcheck[0].getAttribute("id").slice(-2);
            if (
              document.getElementById(checkBoxPref1 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToUseBldgInfo_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToUseBldgInfo_Yes" + index
                ),
                "GoodInduPrac_ToUseBldgInfo_CScore",
                5
              );
            }
            if (
              document.getElementById(checkBoxPref2 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToAdopATradB_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToAdopATradB_Yes" + index
                ),
                "GoodInduPrac_ToAdopATradB_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref3 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToProdAndDistC_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToProdAndDistC_Yes" + index
                ),
                "GoodInduPrac_ToProdAndDistC_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref4 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToCondMontWork_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToCondMontWork_Yes" + index
                ),
                "GoodInduPrac_ToCondMontWork_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref5 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToUseToolLike_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToUseToolLike_Yes" + index
                ),
                "GoodInduPrac_ToUseToolLike_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref6 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToCondTheFollF_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToCondTheFollF_Yes" + index
                ),
                "GoodInduPrac_ToCondTheFollF_CScore",
                1
              );
            }
            // if (document.getElementById(checkBoxPref7 + index).checked == true) {
            //   document.getElementById("GoodInduPrac_ToCondTheFollG_Yes" + index).checked = true;
            //   goodIndustryPracChckBox_change(document.getElementById("GoodInduPrac_ToCondTheFollG_Yes" + index), 'GoodInduPrac_ToCondTheFollG_CScore', 1);
            // }
          }
        }
      }

      if (checkBox.length != 0) {
        if (checkBox[0].hasAttribute("id")) {
          //checkBox[0].checked = false;
          if (
            checkBox[0].getAttribute("prefix") ==
            "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_Yes"
          ) {
            checkBox[0].setAttribute("disabled", "");
          }
        }
      }

      // if (textBox.length != 0) {
      //   if (textBox[0].hasAttribute("id")) {
      //     //textBox[0].value = "";
      //     //if (textBox[0].hasAttribute("placeholder")) {
      //     subTotalC3Section(document.getElementById(textBox[0].id));
      //     //}
      //   }
      // }
    }

    for (let l of afterCop) {
      l.setAttribute("hidden", "");

      let checkBox = l.getElementsByTagName("cn2-checkbox");
      let textBox = l.getElementsByTagName("cn2-textbox");

      if (checkBox.length != 0) {
        if (checkBox[0].hasAttribute("id")) {
          checkBox[0].checked = false;
          if (
            checkBox[0].getAttribute("prefix") ==
            "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_Yes"
          ) {
            checkBox[0].setAttribute("disabled", "");
          }
        }
      }

      if (textBox.length != 0) {
        if (textBox[0].hasAttribute("id")) {
          textBox[0].value = "";
          if (textBox[0].hasAttribute("placeholder")) {
            subTotalC3Section(document.getElementById(textBox[0].id));
          }
        }
      }
    }

    for (let m of GOODsubTotal) {
      m.innerHTML = "(max 10 pts)";

      if (m.hasAttribute("id")) {
        let index = m.id.slice(-2);
        subTotalC3Section(
          document.getElementById("GrandInduPrac_SubTota" + index)
        );
      }
    }

    for (let n of GOODTotal) {
      n.innerHTML = "(max 10 pts)";

      if (n.hasAttribute("id")) {
        let index = n.id.slice(-2);
        subTotalC3Section(
          document.getElementById("GrandInduPrac_SubTota" + index)
        );
      }
    }

    for (let o of amepCscoreMxTotal) {
      o.innerHTML = "(max 50 pts)";
    }

    for (let t of beforeCop2) {
      t.innerHTML =
        "Any other Innovative methods, systems, processes, plant and equipment";
    }

    //AfterCop
  } else {
    for (let desc of GOODDesc) {
      if (desc.hasAttribute("id")) {
        if (desc.id != "tempGOODDesc") {
          desc.removeAttribute("hidden");
        } else {
          desc.setAttribute("hidden", "");
        }
      } else {
        desc.setAttribute("hidden", "");
      }
    }
    for (let a of strutFree) {
      a.innerHTML = "Strut free deep basement construction";
    }

    for (let b of strutMaxVal) {
      b.innerHTML = "6";
    }

    for (let c of StruInnoSyst_StruFreeDeepBase_Cscore) {
      c.removeAttribute("event-blur");
      c.setAttribute(
        "event-blur",
        "StruInnoSyst_StruFreeDeepBase_Cscore_change(this, 6)"
      );
      if (c.hasAttribute("id")) {
        let field = document.getElementById(c.id);
        StruInnoSyst_StruFreeDeepBase_Cscore_change(field, 6);
      }
    }
    for (let r of structMethod) {
      r.innerHTML = "SYSTEMS";
    }

    for (let p of seekBCA) {
      p.innerHTML = " and determine the number of points to be awarded)";
    }

    for (let q of seekBCA2) {
      q.innerHTML =
        "the impact of the innovative system on labour usage and determine the number of points to be awarded)";
    }

    for (let u of userofTower) {
      u.innerHTML = "5";

      if (u.id.length != 0) {
        let idIndex = u.id.slice(-2);

        StruInnoSyst_UseOfToweCran_UsagPerc_change(
          document.getElementById(
            "StruInnoSyst_UseOfToweCran_UsagPerc" + idIndex
          ),
          "StruInnoSyst_UseOfToweCran_CScore"
        );
      }
    }

    //b section Cop logic
    for (let d of amepInnov) {
      d.innerHTML = "3. AMEP INNOVATIVE SYSTEMS";
    }

    for (let e of amepInnovScore) {
      e.innerHTML = "(max 20 pts)";
    }

    for (let f of amepInnovCd) {
      f.setAttribute("hidden", "");
    }

    for (let g of beforeCopLabel) {
      g.innerHTML = "(c) Any other innovations in AMEP systems";
    }

    for (let h of AMEPInnoSyst_UseOfScisLift_IfAppi) {
      if (h.hasAttribute("id")) {
        let field = document.getElementById(h.id);
        field.checked = false;
        AMEPInnoSyst_change(field);
        subTotalB3Section(document.getElementById(h.id));
      }
    }

    for (let w of AMEPInnoSyst_UseOfBoomLift_IfAppi) {
      if (w.hasAttribute("id")) {
        let field = document.getElementById(w.id);
        field.checked = false;
        AMEPInnoSyst_change(field);
        subTotalB3Section(document.getElementById(w.id));
      }
    }

    for (let i of AMEInnoSyst_AnyOtheInnoIn_CScore) {
      i.removeAttribute("event-blur");
      i.setAttribute(
        "event-blur",
        "onBlurDescB3Cscore(this);formatDecimal(this, 2);maxValueValidation(this, 20)"
      );

      let field = document.getElementById(i.id);
      if (i.hasAttribute("id")) {
        field.removeAttribute("event-blur");
        field.setAttribute(
          "event-blur",
          "onBlurDescB3Cscore(this);formatDecimal(this, 2);maxValueValidation(this, 20)"
        );
        maxValueValidation(field, 20);
      }
    }

    for (let j of amepSubTotaAMEP) {
      j.innerHTML = "(max 45 pts)";
    }

    //c section Cop logic
    for (let k of afterCop) {
      k.removeAttribute("hidden");

      let checkBox = k.getElementsByTagName("cn2-checkbox");
      //let textBox = k.getElementsByTagName("cn2-textbox");

      let checkBoxPref1 = "GoodInduPrac_ToUseBldgInfo_Yes";
      let checkBoxPref2 = "GoodInduPrac_ToAdopATradB_Yes";
      let checkBoxPref3 = "GoodInduPrac_ToProdAndDistC_Yes";
      let checkBoxPref4 = "GoodInduPrac_ToCondMontWork_Yes";
      let checkBoxPref5 = "GoodInduPrac_ToUseToolLike_Yes";
      let checkBoxPref6 = "GoodInduPrac_ToCondTheFollF_Yes";
      //let checkBoxPref7 = "GoodInduPrac_ToCondTheFollG_Yes"

      for (let counterCheckBox of beforeCop) {
        let cSectcheck = counterCheckBox.getElementsByTagName("cn2-checkbox");

        if (cSectcheck.length != 0) {
          if (cSectcheck[0].hasAttribute("id")) {
            let index = cSectcheck[0].getAttribute("id").slice(-2);
            if (
              document.getElementById(checkBoxPref1 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_AdopVirtDesiAnd_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_AdopVirtDesiAnd_Yes" + index
                ),
                "GoodInduPrac_AdopVirtDesiAnd_CScore",
                2
              );
              GoodInduPrac_AdopVirtDesiAnd_Yes_change(
                document.getElementById(
                  "GoodInduPrac_AdopVirtDesiAnd_Yes" + index
                )
              );
            }
            if (
              document.getElementById(checkBoxPref2 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToAdopATrad_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById("GoodInduPrac_ToAdopATrad_Yes" + index),
                "GoodInduPrac_ToAdopATrad_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref3 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToProdAndDist_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToProdAndDist_Yes" + index
                ),
                "GoodInduPrac_ToProdAndDist_CScore",
                2
              );
            }
            if (
              document.getElementById(checkBoxPref4 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_CondMontWorkStud_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_CondMontWorkStud_Yes" + index
                ),
                "GoodInduPrac_CondMontWorkStud_CScore",
                1
              );
            }
            if (
              document.getElementById(checkBoxPref5 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_UseToLikeCCTV_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_UseToLikeCCTV_Yes" + index
                ),
                "GoodInduPrac_UseToLikeCCTV_CScore",
                1
              );
            }
            if (
              document.getElementById(checkBoxPref6 + index).checked == true
            ) {
              document.getElementById(
                "GoodInduPrac_ToCondTheFoll_Yes" + index
              ).checked = true;
              goodIndustryPracChckBox_change(
                document.getElementById(
                  "GoodInduPrac_ToCondTheFoll_Yes" + index
                ),
                "GoodInduPrac_ToCondTheFoll_CScore",
                1
              );
            }
            // if (document.getElementById(checkBoxPref7 + index).checked == true) {
            //   document.getElementById("GoodInduPrac_UseOfScisLiftAnd_Yes" + index).checked = true;
            //   goodIndustryPracChckBox_change(document.getElementById("GoodInduPrac_UseOfScisLiftAnd_Yes" + index), 'GoodInduPrac_UseOfScisLiftAnd_CScore', 1);
            // }
          }
        }
      }

      if (checkBox.length != 0) {
        if (checkBox[0].hasAttribute("id")) {
          //checkBox[0].checked = false;
          // if (
          //   checkBox[0].getAttribute("prefix") ==
          //   "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_Yes"
          // ) {
          //   checkBox[0].setAttribute("disabled", "");
          // }
        }
      }

      // if (textBox.length != 0) {
      //   if (textBox[0].hasAttribute("id")) {
      //     textBox[0].value = "";
      //     if (textBox[0].hasAttribute("placeholder")) {
      //       subTotalC3Section(document.getElementById(textBox[0].id));
      //     }
      //   }
      // }
    }

    for (let l of beforeCop) {
      l.setAttribute("hidden", "");

      let checkBox = l.getElementsByTagName("cn2-checkbox");
      let textBox = l.getElementsByTagName("cn2-textbox");

      if (checkBox.length != 0) {
        if (checkBox[0].hasAttribute("id")) {
          checkBox[0].checked = false;
          if (
            checkBox[0].getAttribute("prefix") ==
            "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_Yes"
          ) {
            checkBox[0].setAttribute("disabled", "");
          }
        }
      }

      if (textBox.length != 0) {
        if (textBox[0].hasAttribute("id")) {
          textBox[0].value = "";
          if (textBox[0].hasAttribute("placeholder")) {
            subTotalC3Section(document.getElementById(textBox[0].id));
          }
        }
      }
    }

    for (let m of GOODsubTotal) {
      m.innerHTML = "(max 15 pts)";

      if (m.hasAttribute("id")) {
        let index = m.id.slice(-2);
        subTotalC3Section(
          document.getElementById("GrandInduPrac_SubTota" + index)
        );
      }
    }

    for (let n of GOODTotal) {
      n.innerHTML = "(max 15 pts)";

      if (n.hasAttribute("id")) {
        let index = n.id.slice(-2);
        subTotalC3Section(
          document.getElementById("GrandInduPrac_SubTota" + index)
        );
      }
    }

    for (let o of amepCscoreMxTotal) {
      o.innerHTML = "(max 45 pts)";
    }

    for (let t of beforeCop2) {
      t.innerHTML = "Any other innovations in structural systems";
    }
  }
  minScoreDiff();
}

function calcMinStrucSystScore(sel) {
  let totalGFA = document.getElementById("Project_Dtls_TotaGFA10").value;
  let field = document.getElementById("ConsScorSummShee_MiniStruSyst10");
  let blockFlrArea = document.querySelectorAll(
    "[prefix = 'ConsScorSummShee_NoOfFloo']"
  );
  let totalFloor = document.getElementById("ConsScorSummShee_TotaFlooArea10");
  let totalFloorArea = !isNaN(parseInt(totalFloor.value))
    ? parseInt(totalFloor.value)
    : 0;
  let minScorePts = document.querySelectorAll("[prefix='minMumScore']");
  let blockFlrAreaCount = blockFlrArea.length - 1;
  let totalScore = 0;
  let flr = 0;
  if (sel <= 9) {
    if (totalGFA < globalVariable.GFALow) {
      field.value = 0;
    } else {
      if (totalGFA < globalVariable.GFALow) {
        field.value = localStructLow;
      } else {
        if (totalGFA < globalVariable.GFAHigh) {
          field.value = localStructLow;
        } else {
          field.value = localStructHigh;
        }
      }
    }
  } else {
    for (let blockFlr of blockFlrArea) {
      if (blockFlr.hasAttribute("id")) {
        flr = !isNaN(parseInt(blockFlr.value)) ? parseInt(blockFlr.value) : 0;
        index = blockFlr
          .getAttribute("id")
          .replace(blockFlr.getAttribute("prefix"), "");
        flrArea = document.getElementById("ConsScorSummShee_FlooArea" + index);
        flrAreaValue = !isNaN(parseInt(flrArea.value))
          ? parseInt(flrArea.value)
          : 0;
        if (totalGFA < globalVariable.GFALow) {
          field.value = 0;
        } else {
          if (totalGFA < globalVariable.GFALow) {
            field.value = localStructLow;
          } else {
            if (flrAreaValue != 0) {
              if (totalGFA < globalVariable.GFAHigh && flr > 6) {
                totalScore += (flrAreaValue / totalFloorArea) * 35;
              } else if (totalGFA < globalVariable.GFAHigh && flr <= 6) {
                totalScore += (flrAreaValue / totalFloorArea) * 32;
              } else if (totalGFA >= globalVariable.GFAHigh && flr > 6) {
                totalScore += (flrAreaValue / totalFloorArea) * 45;
              } else if (totalGFA >= globalVariable.GFAHigh && flr <= 6) {
                totalScore += (flrAreaValue / totalFloorArea) * 42;
              }
            } else {
              totalScore += 0;
            }
            let minSScore = Number(Math.round(totalScore + "e2") + "e-2");
            if (blockFlrAreaCount != 1) {
              field.value = Math.round(minSScore);
            } else {
              field.value = Math.round(minSScore);
            }
          }
        }
      }
    }
  }
  for (let minScore of minScorePts) {
    minScore.innerHTML = "(min " + field.value + " pts)";
  }
}

function calcMinConsScore() {
  let totalGFA = document.getElementById("Project_Dtls_TotaGFA10").value;
  let field = document.getElementById("ConsScorSummShee_MinConsScorRequ10");

  if (totalGFA < globalVariable.GFALow) {
    field.value = 0;
  } else {
    if (totalGFA < globalVariable.GFALow) {
      field.value = localLow;
    } else {
      if (totalGFA < globalVariable.GFAHigh) {
        field.value = localLow;
      } else {
        field.value = localHigh;
      }
    }
  }
}

function ConsScorSummShee_NoOfFloo_change(element) {
  let value = document.getElementById(element.id).value;

  if (value == 0 || value == "" || value == undefined) {
    showMessage("No. of Floors cannot be 0 or empty");
    document.getElementById(element.id).value = 1;
  }

  let copLogicTrigger = document.querySelectorAll("[copLogic]");

  for (let copRad of copLogicTrigger) {
    let radElement = document.getElementById(copRad.id);
    if (radElement.checked == true) {
      copLogic(radElement);
    }
  }
}

//Section A
//--Start
function ExternalAccessCompute(el) {
  let sectionName = "ExteAcceSyst_";
  let colNameArr = [
    "NoExteScaf_",
    "SelfClimPeriScaf_",
    "CranLiftPeriScaf_",
    "TradExteScaf_",
  ];
  let rowNameArr = ["MaxiAlloPts", "BldgPeri", "PercOfLeng", "CScore"];

  let fieldVar;
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let totA1 = document.getElementById(
    "ExteAcceSyst_SubTotaForA1_BldgPeri" + index
  );
  let totA1Perc = document.getElementById(
    "ExteAcceSyst_SubTotaForA1_PercOfLeng" + index
  );
  let totA1CScore = document.getElementById(
    "ExteAcceSyst_SubTotaForA1_CScore" + index
  );

  fieldVar = createArrayOfFields(sectionName, colNameArr, rowNameArr, index);

  let bldgPerMet = 0;
  for (let g of colNameArr) {
    bldgPerMet = bldgPerMet + Number(fieldVar[sectionName + g]["BldgPeri"]);
  }
  totA1.value = bldgPerMet.toFixed(2);

  let percOfLenVal = 0;
  let percOfLenValTotal = 0;
  let cscoreVal = 0;
  let cscoreTotal = 0;
  for (let d of colNameArr) {
    percOfLenVal = !isNaN(
      (Number(fieldVar[sectionName + d]["BldgPeri"]) / bldgPerMet) * 100
    )
      ? (Number(fieldVar[sectionName + d]["BldgPeri"]) / bldgPerMet) * 100
      : 0.0;
    document.getElementById(
      sectionName + d + "PercOfLeng" + index
    ).value = percOfLenVal.toFixed(2);
    percOfLenValTotal = percOfLenValTotal + percOfLenVal;

    cscoreVal = !isNaN(
      (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
    )
      ? (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
      : 0.0;
    document.getElementById(
      sectionName + d + "CScore" + index
    ).value = cscoreVal.toFixed(2);
    cscoreTotal = cscoreTotal + cscoreVal;
  }
  totA1Perc.value = percOfLenValTotal.toFixed(2);
  totA1CScore.value = cscoreTotal.toFixed(2) > 15 ? 15 : cscoreTotal.toFixed(2);
  subTotalASection(el);
  aSectionTotal(el);
  populateProjectDet(el);
}

function FormWorkACompute(el) {
  let sectionName = "FormSyst_";
  let colNameArr = [
    "NFVertContArea_",
    "TTMFVertContArea_",
    "VertForm_SystFormBand1_",
    "VertForm_SystFormBand2_",
    "VertForm_SystFormBand3_",
    "VertForm_SystFormBand4_",
    "VertForm_SystFormBand5_",
  ];

  let rowNameArr = ["MaxiAlloPts", "VertContArea", "PercOfCont", "CScore"];

  let fieldVar;
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let totA1 = document.getElementById(
    "FormSyst_SubTotaForA2a_VertContArea" + index
  );
  let totA1Perc = document.getElementById(
    "FormSyst_SubTotaForA2a_PercOfCont" + index
  );
  let totA1CScore = document.getElementById(
    "FormSyst_SubTotaForA2a_CScore" + index
  );

  fieldVar = createArrayOfFields(sectionName, colNameArr, rowNameArr, index);

  let bldgPerMet = 0;
  for (let g of colNameArr) {
    bldgPerMet = bldgPerMet + Number(fieldVar[sectionName + g]["VertContArea"]);
  }
  totA1.value = bldgPerMet.toFixed(2);

  let percOfLenVal = 0;
  let percOfLenValTotal = 0;
  let cscoreVal = 0;
  let cscoreTotal = 0;
  for (let d of colNameArr) {
    percOfLenVal = !isNaN(
      (Number(fieldVar[sectionName + d]["VertContArea"]) / bldgPerMet) * 100
    )
      ? (Number(fieldVar[sectionName + d]["VertContArea"]) / bldgPerMet) * 100
      : 0.0;
    document.getElementById(
      sectionName + d + "PercOfCont" + index
    ).value = percOfLenVal.toFixed(2);
    percOfLenValTotal = percOfLenValTotal + percOfLenVal;

    cscoreVal = !isNaN(
      (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
    )
      ? (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
      : 0.0;
    document.getElementById(
      sectionName + d + "CScore" + index
    ).value = cscoreVal.toFixed(2);
    cscoreTotal = cscoreTotal + cscoreVal;
  }
  totA1Perc.value = percOfLenValTotal.toFixed(2);
  totA1CScore.value = cscoreTotal.toFixed(2);
  totA1CScore.setAttribute("raw-value", cscoreTotal);
  subTotalASection(el);
  aSectionTotal(el);
  populateProjectDet(el);
}

function FormWorkBCompute(el) {
  let sectionName = "FormSyst_";
  let colNameArr = [
    "NFFlooArea_",
    "TTMFFlooArea_",
    "HoriForm_SystFormBand1_",
    "HoriForm_SystFormBand2_",
    "HoriForm_SystFormBand3_",
    "HoriForm_SystFormBand4_",
    "HoriForm_SystFormBand5_",
  ];

  let rowNameArr = ["MaxiAlloPts", "FlooArea", "PercOfCont", "CScore"];

  let fieldVar;
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let totA1 = document.getElementById(
    "FormSyst_SubTotaForA2b_FlooArea" + index
  );
  let totA1Perc = document.getElementById(
    "FormSyst_SubTotaForA2b_PercOfCont" + index
  );
  let totA1CScore = document.getElementById(
    "FormSyst_SubTotaForA2b_CScore" + index
  );

  fieldVar = createArrayOfFields(sectionName, colNameArr, rowNameArr, index);

  let bldgPerMet = 0;
  for (let g of colNameArr) {
    bldgPerMet = bldgPerMet + Number(fieldVar[sectionName + g]["FlooArea"]);
  }
  totA1.value = bldgPerMet.toFixed(2);

  let percOfLenVal = 0;
  let percOfLenValTotal = 0;
  let cscoreVal = 0;
  let cscoreTotal = 0;
  for (let d of colNameArr) {
    percOfLenVal = !isNaN(
      (Number(fieldVar[sectionName + d]["FlooArea"]) / bldgPerMet) * 100
    )
      ? (Number(fieldVar[sectionName + d]["FlooArea"]) / bldgPerMet) * 100
      : 0.0;
    document.getElementById(
      sectionName + d + "PercOfCont" + index
    ).value = percOfLenVal.toFixed(2);
    percOfLenValTotal = percOfLenValTotal + percOfLenVal;

    cscoreVal = !isNaN(
      (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
    )
      ? (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
      : 0.0;
    document.getElementById(
      sectionName + d + "CScore" + index
    ).value = cscoreVal.toFixed(2);
    cscoreTotal = cscoreTotal + cscoreVal;
  }
  totA1Perc.value = percOfLenValTotal.toFixed(2);
  totA1CScore.value = cscoreTotal.toFixed(2);
  totA1CScore.setAttribute("raw-value", cscoreTotal);
  subTotalASection(el);
  aSectionTotal(el);
  populateProjectDet(el);
}

function StruInnoSystCompute(el) {
  let sectionName = "StruInnoSyst_";
  let colNameArr = [
    "UseOfSelfComp_",
    "UseOfHydrStat_",
    "UseOfToweCran_",
    "StruFreeDeepBase_",
  ];

  let descName = "AnyOtheInnoIn_";

  let rowNameArr = ["MaxiAlloPts", "UsagPerc", "PercOfCont", "CScore"];

  let fieldVar;
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  //   let totA1 = document.getElementById(
  //     "FormSyst_SubTotaForA2b_FlooArea" + index
  //   );
  //   let totA1Perc = document.getElementById(
  //     "FormSyst_SubTotaForA2b_PercOfCont" + index
  //   );
  //   let totA1CScore = document.getElementById(
  //     "FormSyst_SubTotaForA2b_CScore" + index
  //   );

  fieldVar = createArrayOfFields(sectionName, colNameArr, rowNameArr, index);

  let bldgPerMet = 0;
  for (let g of colNameArr) {
    bldgPerMet = bldgPerMet + Number(fieldVar[sectionName + g]["FlooArea"]);
  }
  // totA1.value = bldgPerMet.toFixed(2);

  let percOfLenVal = 0;
  let percOfLenValTotal = 0;
  let cscoreVal = 0;
  let cscoreTotal = 0;
  for (let d of colNameArr) {
    percOfLenVal = !isNaN(
      (Number(fieldVar[sectionName + d]["FlooArea"]) / bldgPerMet) * 100
    )
      ? (Number(fieldVar[sectionName + d]["FlooArea"]) / bldgPerMet) * 100
      : 0.0;
    document.getElementById(
      sectionName + d + "PercOfCont" + index
    ).value = percOfLenVal.toFixed(2);
    percOfLenValTotal = percOfLenValTotal + percOfLenVal;

    cscoreVal = !isNaN(
      (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
    )
      ? (percOfLenVal * Number(fieldVar[sectionName + d]["MaxiAlloPts"])) / 100
      : 0.0;
    document.getElementById(
      sectionName + d + "CScore" + index
    ).value = cscoreVal.toFixed(2);
    cscoreTotal = cscoreTotal + cscoreVal;
  }
  //totA1Perc.value = percOfLenValTotal.toFixed(2);
  //totA1CScore.value = cscoreTotal.toFixed(2);
}

function StruInnoSyst_UseOfSelfComp_UsagPerc10_change(el, prefix) {
  let field = document.getElementById(el.id);
  let id = field.id.slice(35);
  el.value = el.value > 100 ? 100 : el.value;
  let csCoreField = document.getElementById(prefix + id);
  let ifValue = 2;
  let elseValue = 0;
  if (field.value >= 5) {
    csCoreField.value = ifValue.toFixed(2);
  } else {
    csCoreField.value = elseValue.toFixed(2);
  }
  subTotalA3Section(field);
}

function StruInnoSyst_UseOfHydrStat_UsagPerc_change(el, prefix) {
  let field = document.getElementById(el.id);
  let id = field.id.slice(-2);
  let csCoreField = document.getElementById(prefix + id);
  let ifValue = 2;
  let elseValue = 0;
  if (el.checked) {
    csCoreField.value = ifValue.toFixed(2);
  } else {
    csCoreField.value = elseValue.toFixed(2);
  }
  subTotalA3Section(field);
}

function StruInnoSyst_UseOfToweCran_UsagPerc_change(el, prefix) {
  let field = document.getElementById(el.id);
  let id = field.id.slice(-2);
  let csCoreField = document.getElementById(prefix + id);
  let ifValue = parseInt(
    document.getElementById("StruInnoSyst_UseOfToweCran_MaxiAlloPts" + id)
      .innerHTML
  );
  let elseValue = 0;
  if (el.checked) {
    csCoreField.value = ifValue.toFixed(2);
  } else {
    csCoreField.value = elseValue.toFixed(2);
  }
  subTotalA3Section(field);
}
function StruInnoSyst_StruFreeDeepBase_UsagPerc_change(el, prefix) {
  let field = document.getElementById(el.id);
  let id = field.id.slice(38);
  let csCoreField = document.getElementById(prefix + id);
  if (el.checked) {
    csCoreField.removeAttribute("disabled");
    csCoreField.setAttribute("mandatory", "");
  } else {
    csCoreField.removeAttribute("mandatory");
    csCoreField.setAttribute("disabled", "");
    csCoreField.value = "";
  }
  subTotalA3Section(field);
}

function StruInnoSyst_StruFreeDeepBase_Cscore_change(el, maxValue) {
  let field = document.getElementById(el.id);

  if (field.value < maxValue) {
    field.value = !isNaN(parseFloat(field.value))
      ? parseFloat(field.value).toFixed(2)
      : "";
  } else {
    field.value = parseFloat(maxValue).toFixed(2);
  }
  subTotalA3Section(field);
}

function StruInnoSyst_AnyOtheInnoIn_Desc_Change(el) {
  let descField = el.value;
  let suffix = el.id.slice(31, -3);
  let index = el.id.slice(-3);
  let fieldId = "StruInnoSyst_AnyOtheInnoIn_CScore" + suffix + index;

  if (descField.length != 0) {
    document.getElementById(fieldId).removeAttribute("disabled");
    document.getElementById(fieldId).setAttribute("mandatory", "");
  } else {
    document.getElementById(fieldId).removeAttribute("mandatory");
    document.getElementById(fieldId).setAttribute("disabled", "");
    document.getElementById(fieldId).value = "";
  }
}

function subTotalA3Section(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let field1 = document.getElementById(
    "StruInnoSyst_UseOfSelfComp_CScore" + index
  );
  let field2 = document.getElementById(
    "StruInnoSyst_UseOfHydrStat_CScore" + index
  );
  let field3 = document.getElementById(
    "StruInnoSyst_UseOfToweCran_CScore" + index
  );
  let field4 = document.getElementById(
    "StruInnoSyst_StruFreeDeepBase_CScore" + index
  );

  let a3TotalValue = document.getElementById("StruInnoSyst_SubtTotaA3" + index);

  let field1Val = !isNaN(parseFloat(field1.value))
    ? parseFloat(field1.value).toFixed(2)
    : 0.0;
  let field2Val = !isNaN(parseFloat(field2.value))
    ? parseFloat(field2.value).toFixed(2)
    : 0.0;
  let field3Val = !isNaN(parseFloat(field3.value))
    ? parseFloat(field3.value).toFixed(2)
    : 0.0;
  let field4Val = !isNaN(parseFloat(field4.value))
    ? parseFloat(field4.value).toFixed(2)
    : 0.0;

  //Add/Delete Section subtotal :
  let descContainer = document.getElementById("SISDescTbl" + index);
  let allValueField = descContainer.querySelectorAll(
    "[prefix = 'StruInnoSyst_AnyOtheInnoIn_CScore']"
  );
  let subTotal = 0;
  for (let field4 of allValueField) {
    subTotal += parseFloat(
      !isNaN(parseFloat(field4.value))
        ? parseFloat(field4.value).toFixed(2)
        : 0.0
    );
  }
  let a3Total = 0;
  a3Total = (
    parseFloat(field1Val) +
    parseFloat(field2Val) +
    parseFloat(field3Val) +
    parseFloat(field4Val) +
    subTotal
  ).toFixed(2);

  if (a3Total < 15) {
    a3TotalValue.value = !isNaN(parseFloat(a3Total))
      ? parseFloat(a3Total).toFixed(2)
      : 0.0;
  } else {
    a3TotalValue.value = parseFloat(15.0).toFixed(2);
  }
  aSectionTotal(el);
}
function subTotalASection(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let subTotalA2a = document.getElementById(
    "FormSyst_SubTotaForA2a_CScore" + index
  );
  let subTotalA2b = document.getElementById(
    "FormSyst_SubTotaForA2b_CScore" + index
  );
  let totalA2 = document.getElementById("FormSyst_SubtTotaA2" + index);

  let a2aValue = !isNaN(parseFloat(subTotalA2a.value))
    ? parseFloat(subTotalA2a.value).toFixed(2)
    : 0.0;
  let a2bValue = !isNaN(parseFloat(subTotalA2b.value))
    ? parseFloat(subTotalA2b.value).toFixed(2)
    : 0.0;

  let a2aValueRaw = subTotalA2a.getAttribute("raw-value");
  let a2bValueRaw = subTotalA2b.getAttribute("raw-value");
  totalA2.value = (parseFloat(a2aValueRaw) + parseFloat(a2bValueRaw)).toFixed(
    2
  ); //(parseFloat(a2aValue) + parseFloat(a2bValue)).toFixed(2);
  aSectionTotal(el);
}

function aSectionTotal(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let totalA1 = document.getElementById(
    "ExteAcceSyst_SubTotaForA1_CScore" + index
  );
  let totalA2 = document.getElementById("FormSyst_SubtTotaA2" + index);
  let totalA3 = document.getElementById("StruInnoSyst_SubtTotaA3" + index);

  let grandTotalASect = document.getElementById(
    "StruSyst_SubTotaStruSyst" + index
  );

  let secta1Value = !isNaN(parseFloat(totalA1.value))
    ? parseFloat(totalA1.value).toFixed(2)
    : 0.0;
  let secta2Value = !isNaN(parseFloat(totalA2.value))
    ? parseFloat(totalA2.value).toFixed(2)
    : 0.0;
  let secta3Value = !isNaN(parseFloat(totalA3.value))
    ? parseFloat(totalA3.value).toFixed(2)
    : 0.0;

  grandTotalASect.value = (
    parseFloat(secta1Value) +
    parseFloat(secta2Value) +
    parseFloat(secta3Value)
  ).toFixed(2);

  blockGrandTotal(el);
  populateStrucSCscore(el);
}

function enableDeleteA3Sect(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let descContainer = document.getElementById("SISDescTbl" + index);
  let childCount = descContainer.querySelectorAll("[child]");

  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "AlabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "AlabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "AlabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "AlabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    }
  }
}

function disableDeleteA3Sect(el) {
  let index = el.id.slice(13, -3);
  let descContainer = document.getElementById("SISDescTbl" + index);
  let childCount = descContainer.querySelectorAll("[child]");

  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("AlabelNo" + labelIndex).innerHTML = x;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("AlabelNo" + labelIndex).innerHTML = x;
      }
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("AlabelNo" + labelIndex).innerHTML = x + 1;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("AlabelNo" + labelIndex).innerHTML = x + 1;
      }
    }
  }
  subTotalA3Section(descContainer);
}
//End--

//Section B
//Start--

//B1--Start
function ArchNoScreOnFlooCompute(el) {
  let index = el.id.slice(28);
  let fieldVal = el.value;
  el.value = !isNaN(parseFloat(el.value > 100 ? 100 : el.value).toFixed(2))
    ? parseFloat(el.value > 100 ? 100 : el.value).toFixed(2)
    : "";
  let field = "Arch_NoScreOnFloo_CScore";
  let fieldId = document.getElementById(field + index);
  let csCoreField = 0;

  csCoreField = parseFloat((5 * fieldVal) / 100).toFixed(2);

  fieldId.value = parseFloat(csCoreField > 5.0 ? 5.0 : csCoreField).toFixed(2);
  b1SectionSubTotal(document.getElementById(el.id));
}
function ArchRCWallLeftUnplCompute(el) {
  let index = el.id.slice(30);
  let fieldVal = el.value;
  el.value = !isNaN(parseFloat(el.value > 100 ? 100 : el.value).toFixed(2))
    ? parseFloat(el.value > 100 ? 100 : el.value).toFixed(2)
    : "";
  let field = "Arch_RCWallLeftUnpl_CScore";
  let fieldId = document.getElementById(field + index);
  let csCoreField = 0;

  csCoreField = parseFloat((5 * fieldVal) / 100).toFixed(2);

  fieldId.value = parseFloat(csCoreField > 5.0 ? 5.0 : csCoreField).toFixed(2);
  b1SectionSubTotal(document.getElementById(el.id));
}

function ArchUseOfSpraPainPercOfUsagCompute(el) {
  let index = el.id.slice(29);
  let fieldVal = el.value;
  el.value = !isNaN(parseFloat(el.value > 100 ? 100 : el.value).toFixed(2))
    ? parseFloat(el.value > 100 ? 100 : el.value).toFixed(2)
    : "";
  let field = "Arch_UseOfSpraPain_CScore";
  let fieldId = document.getElementById(field + index);

  fieldId.value = (fieldVal >= 50 ? 3.0 : 0.0).toFixed(2);
  b1SectionSubTotal(document.getElementById(el.id));
}

function b1SectionSubTotal(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let archB1 = document.getElementById("Arch_NoScreOnFloo_CScore" + index);
  let archB2 = document.getElementById("Arch_RCWallLeftUnpl_CScore" + index);
  let archB3 = document.getElementById("Arch_UseOfSpraPain_CScore" + index);

  let totalB1 = document.getElementById("Arch_SubTotaForB1" + index);

  let archB1Val = !isNaN(parseFloat(archB1.value))
    ? parseFloat(archB1.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB2Val = !isNaN(parseFloat(archB2.value))
    ? parseFloat(archB2.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB3Val = !isNaN(parseFloat(archB3.value))
    ? parseFloat(archB3.value).toFixed(2)
    : parseFloat(0).toFixed(2);

  totalB1.value = (
    parseFloat(archB1Val) +
    parseFloat(archB2Val) +
    parseFloat(archB3Val)
  ).toFixed(2);

  bSectionTotal(el);
}
//B1--End
//B2--Start
function MEPPipeWorkPercOfUsagCompute(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById("MEP_PipeWork_PercOfUsag" + index);
  let fieldVal = fieldElement.value;
  fieldElement.value = !isNaN(
    parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
  )
    ? parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
    : "";
  let field = "MEP_PipeWork_CScore";
  let fieldId = document.getElementById(field + index);

  let lengthField = document.getElementById("MEP_PipeWork_Leng" + index);
  lengthField.value = !isNaN(parseFloat(lengthField.value))
    ? parseFloat(lengthField.value).toFixed(2)
    : "";
  if (lengthField.value.length != 0 && lengthField.value != "0.00") {
    fieldId.value = (fieldVal >= 80 ? 3.0 : 0.0).toFixed(2);
  } else {
    fieldId.value = (0.0).toFixed(2);
  }

  b2SectionSubTotal(document.getElementById(el.id));
}

function MEPPipeWorkPrefDuctPercOfUsagCompute(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById(
    "MEP_PipeWork_PrefDuct_PercOfUsag" + index
  );
  let fieldVal = fieldElement.value;
  fieldElement.value = !isNaN(
    parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
  )
    ? parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
    : "";
  let field = "MEP_PipeWork_PrefDuct_CScore";
  let fieldId = document.getElementById(field + index);

  let lengthField = document.getElementById(
    "MEP_PipeWork_PrefDuct_Leng" + index
  );
  lengthField.value = !isNaN(parseFloat(lengthField.value))
    ? parseFloat(lengthField.value).toFixed(2)
    : "";
  let radBtn = document.getElementById("MEP_AirConDuct_PrefDuct" + index);
  if (radBtn.checked == true) {
    if (lengthField.value.length != 0 && lengthField.value != "0.00") {
      fieldId.value = (fieldVal >= 80 ? 3.0 : 0.0).toFixed(2);
      document.getElementById(
        "MEP_PipeWork_PrefAndPreInsu_CScore" + index
      ).value = (0.0).toFixed(2);
    } else {
      fieldId.value = (0.0).toFixed(2);
    }
  } else {
    //fieldId.value = (0.0).toFixed(2);
    document.getElementById(
      "MEP_PipeWork_PrefDuct_CScore" + index
    ).value = (0.0).toFixed(2);
  }
  b2SectionSubTotal(document.getElementById(el.id));
}

function MEPPipeWorkPrefAndPreInsuPercOfUsagCompute(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById(
    "MEP_PipeWork_PrefAndPreInsu_PercOfUsag" + index
  );
  let fieldVal = fieldElement.value;
  fieldElement.value = !isNaN(
    parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
  )
    ? parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
    : "";
  let field = "MEP_PipeWork_PrefAndPreInsu_CScore";
  let fieldId = document.getElementById(field + index);

  let lengthField = document.getElementById(
    "MEP_PipeWork_PrefAndPreInsu_Leng" + index
  );
  lengthField.value = !isNaN(parseFloat(lengthField.value))
    ? parseFloat(lengthField.value).toFixed(2)
    : "";
  let radBtn = document.getElementById("MEP_AirConDuct_PrefAndPreInsu" + index);
  if (radBtn.checked == true) {
    if (lengthField.value.length != 0 && lengthField.value != "0.00") {
      fieldId.value = (fieldVal >= 80 ? 6.0 : 0.0).toFixed(2);
      document.getElementById(
        "MEP_PipeWork_PrefDuct_CScore" + index
      ).value = (0.0).toFixed(2);
    } else {
      fieldId.value = (0.0).toFixed(2);
    }
  } else {
    //fieldId.value = (0.0).toFixed(2);
    document.getElementById(
      "MEP_PipeWork_PrefAndPreInsu_CScore" + index
    ).value = (0.0).toFixed(2);
  }

  b2SectionSubTotal(document.getElementById(el.id));
}

function MEPUseOfFlexWatePercOfUsagCompute(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById(
    "MEP_UseOfFlexWate_PercOfUsag" + index
  );
  let fieldVal = fieldElement.value;
  fieldElement.value = !isNaN(
    parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
  )
    ? parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
    : "";
  let field = "MEP_UseOfFlexWate_CScore";
  let fieldId = document.getElementById(field + index);

  let lengthField = document.getElementById("MEP_UseOfFlexWate_Leng" + index);
  lengthField.value = !isNaN(parseFloat(lengthField.value))
    ? parseFloat(lengthField.value).toFixed(2)
    : "";
  if (lengthField.value.length != 0 && lengthField.value != "0.00") {
    fieldId.value = (fieldVal >= 80 ? 3.0 : 0.0).toFixed(2);
  } else {
    fieldId.value = (0.0).toFixed(2);
  }
  b2SectionSubTotal(document.getElementById(el.id));
}

function MEPUseOfMechJoinPercOfUsagCompute(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById(
    "MEP_UseOfMechJoin_PercOfUsag" + index
  );
  let fieldVal = fieldElement.value;
  fieldElement.value = !isNaN(
    parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
  )
    ? parseFloat(fieldElement.value > 100 ? 100 : fieldElement.value).toFixed(2)
    : "";
  let field = "MEP_UseOfMechJoin_CScore";
  let fieldId = document.getElementById(field + index);

  let lengthField = document.getElementById("MEP_UseOfMechJoin_Leng" + index);
  lengthField.value = !isNaN(parseFloat(lengthField.value))
    ? parseFloat(lengthField.value).toFixed(2)
    : "";
  if (lengthField.value.length != 0 && lengthField.value != "0.00") {
    fieldId.value = (fieldVal >= 80 ? 2.0 : 0.0).toFixed(2);
  } else {
    fieldId.value = (0.0).toFixed(2);
  }
  b2SectionSubTotal(document.getElementById(el.id));
}

function b2SectionSubTotal(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let archB1 = document.getElementById("MEP_PipeWork_CScore" + index);
  let archB2 = document.getElementById("MEP_PipeWork_PrefDuct_CScore" + index);
  let archB3 = document.getElementById(
    "MEP_PipeWork_PrefAndPreInsu_CScore" + index
  );
  let archB4 = document.getElementById("MEP_UseOfFlexWate_CScore" + index);
  let archB5 = document.getElementById("MEP_UseOfMechJoin_CScore" + index);

  let totalB2 = document.getElementById("MEP_SubTotaForB2" + index);

  let archB1Val = !isNaN(parseFloat(archB1.value))
    ? parseFloat(archB1.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB2Val = !isNaN(parseFloat(archB2.value))
    ? parseFloat(archB2.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB3Val = !isNaN(parseFloat(archB3.value))
    ? parseFloat(archB3.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB4Val = !isNaN(parseFloat(archB4.value))
    ? parseFloat(archB4.value).toFixed(2)
    : parseFloat(0).toFixed(2);
  let archB5Val = !isNaN(parseFloat(archB5.value))
    ? parseFloat(archB5.value).toFixed(2)
    : parseFloat(0).toFixed(2);

  totalB2.value = (
    parseFloat(archB1Val) +
    parseFloat(archB2Val) +
    parseFloat(archB3Val) +
    parseFloat(archB4Val) +
    parseFloat(archB5Val)
  ).toFixed(2);

  bSectionTotal(el);
}
//B2--End
//B3--Start
function MEP_AirConDuct_change(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let radId = indexElement.getAttribute("prefix") + index;
  switch (radId) {
    case "MEP_AirConDuct_PrefDuct" + index:
      MEPPipeWorkPrefDuctPercOfUsagCompute(el);
      break;
    case "MEP_AirConDuct_PrefAndPreInsu" + index:
      MEPPipeWorkPrefAndPreInsuPercOfUsagCompute(el);
      break;
  }
  subTotalB3Section(el);
}

function AMEPInnoSyst_change(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let checkBoxId = indexElement.getAttribute("prefix") + index;
  let checkElement = document.getElementById(checkBoxId);

  switch (checkBoxId) {
    case "AMEPInnoSyst_UseOfCeilInse_IfAppi" + index:
      let field = document.getElementById(
        "AMEPInnoSyst_UseOfCeilInse_CScore" + index
      );
      if (checkElement.checked) {
        field.value = (2.0).toFixed(2);
      } else {
        field.value = (0.0).toFixed(2);
      }
      break;
    case "AMEPInnoSyst_PrefPlanPipiModu_IfAppi" + index:
      let field2 = document.getElementById(
        "AMEPInnoSyst_PrefPlanPipiModu_CScore" + index
      );
      if (checkElement.checked) {
        field2.value = (3.0).toFixed(2);
      } else {
        field2.value = (0.0).toFixed(2);
      }
      break;
    case "AMEPInnoSyst_UseOfScisLift_IfAppi" + index:
      let field3 = document.getElementById(
        "AMEPInnoSyst_UseOfScisLift_CScore" + index
      );
      if (checkElement.checked) {
        field3.value = (2.0).toFixed(2);
      } else {
        field3.value = (0.0).toFixed(2);
      }
      break;
    case "AMEPInnoSyst_UseOfBoomLift_IfAppi" + index:
      let field4 = document.getElementById(
        "AMEPInnoSyst_UseOfBoomLift_CScore" + index
      );
      if (checkElement.checked) {
        field4.value = (2.0).toFixed(2);
      } else {
        field4.value = (0.0).toFixed(2);
      }
      break;
  }
  subTotalB3Section(el);
}

function enableDeleteB3Sect(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let descContainer = document.getElementById("AMEPDescTbl" + index);
  let childCount = descContainer.querySelectorAll("[child]");

  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "BlabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "BlabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "BlabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "BlabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    }
  }
}

function disableDeleteB3Sect(el) {
  let index = el.id.slice(14, -3);
  let descContainer = document.getElementById("AMEPDescTbl" + index);

  let childCount = descContainer.querySelectorAll("[child]");

  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("BlabelNo" + labelIndex).innerHTML = x;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("BlabelNo" + labelIndex).innerHTML = x;
      }
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("BlabelNo" + labelIndex).innerHTML = x + 1;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("BlabelNo" + labelIndex).innerHTML = x + 1;
      }
    }
  }
  subTotalB3Section(descContainer);
}

function AMEPInnoSyst_AnyOtheInnoIn_Desc_Change(el) {
  let descField = el.value;
  let suffix = el.id.slice(31, -3);
  let index = el.id.slice(-3);
  let fieldId = "AMEInnoSyst_AnyOtheInnoIn_CScore" + suffix + index;

  if (descField.length != 0) {
    document.getElementById(fieldId).removeAttribute("disabled");
    document.getElementById(fieldId).setAttribute("mandatory", "");
  } else {
    document.getElementById(fieldId).removeAttribute("mandatory");
    document.getElementById(fieldId).setAttribute("disabled", "");
    document.getElementById(fieldId).value = "";
  }
  onBlurDescB3Cscore(el);
}

function onBlurDescB3Cscore(el) {
  let field = document.getElementById(el.id).parentNode.parentNode.parentNode
    .parentNode;
  let containerIdElement = document.getElementById(field.id);
  subTotalB3Section(containerIdElement);
}

function subTotalB3Section(el) {
  let elementId = document.getElementById(el.id);
  let index = elementId
    .getAttribute("id")
    .replace(elementId.getAttribute("prefix"), "");
  let field1 = document.getElementById(
    "AMEPInnoSyst_UseOfCeilInse_CScore" + index
  );
  let field2 = document.getElementById(
    "AMEPInnoSyst_PrefPlanPipiModu_CScore" + index
  );
  let field3 = document.getElementById(
    "AMEPInnoSyst_UseOfScisLift_CScore" + index
  );
  let field4 = document.getElementById(
    "AMEPInnoSyst_UseOfBoomLift_CScore" + index
  );

  let b3TotalValue = document.getElementById("AMEPInnoSyst_SubtTotaA3" + index);

  let field1Val = !isNaN(parseFloat(field1.value))
    ? parseFloat(field1.value).toFixed(2)
    : 0.0;
  let field2Val = !isNaN(parseFloat(field2.value))
    ? parseFloat(field2.value).toFixed(2)
    : 0.0;
  let field3Val = !isNaN(parseFloat(field3.value))
    ? parseFloat(field3.value).toFixed(2)
    : 0.0;
  let field4Val = !isNaN(parseFloat(field4.value))
    ? parseFloat(field4.value).toFixed(2)
    : 0.0;

  //Add/Delete Section subtotal :
  let descContainer = document.getElementById("AMEPDescTbl" + index);
  let allValueField = descContainer.querySelectorAll(
    "[prefix = 'AMEInnoSyst_AnyOtheInnoIn_CScore']"
  );
  let subTotal = 0;
  for (let field4 of allValueField) {
    subTotal += parseFloat(
      !isNaN(parseFloat(field4.value))
        ? parseFloat(field4.value).toFixed(2)
        : 0.0
    );
  }
  let b3Total = 0;
  b3Total = (
    parseFloat(field1Val) +
    parseFloat(field2Val) +
    parseFloat(field3Val) +
    parseFloat(field4Val) +
    subTotal
  ).toFixed(2);

  let amepInnovScore = document.querySelectorAll("[prefix = 'amepInnovScore']");

  for (let amepScore of amepInnovScore) {
    if (amepScore.hasAttribute("id")) {
      if (amepScore.innerHTML == "(max 25 pts)") {
        if (b3Total < 25) {
          b3TotalValue.value = !isNaN(parseFloat(b3Total))
            ? parseFloat(b3Total).toFixed(2)
            : 0.0;
        } else {
          b3TotalValue.value = parseFloat(25.0).toFixed(2);
        }
      } else {
        if (b3Total < 20) {
          b3TotalValue.value = !isNaN(parseFloat(b3Total))
            ? parseFloat(b3Total).toFixed(2)
            : 0.0;
        } else {
          b3TotalValue.value = parseFloat(20.0).toFixed(2);
        }
      }
    }
  }
  bSectionTotal(document.getElementById(el.id));
}

function bSectionTotal(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  // Total Values
  let totalB1 = document.getElementById("Arch_SubTotaForB1" + index);
  let totalB2 = document.getElementById("MEP_SubTotaForB2" + index);
  let totalB3 = document.getElementById("AMEPInnoSyst_SubtTotaA3" + index);

  let grandTotalBSect = document.getElementById("AMEP_SubTotaAMEPB" + index);

  let sectb1Value = !isNaN(parseFloat(totalB1.value))
    ? parseFloat(totalB1.value).toFixed(2)
    : 0.0;
  let sectb2Value = !isNaN(parseFloat(totalB2.value))
    ? parseFloat(totalB2.value).toFixed(2)
    : 0.0;
  let sectb3Value = !isNaN(parseFloat(totalB3.value))
    ? parseFloat(totalB3.value).toFixed(2)
    : 0.0;

  let grandBtotal = 0;
  grandBtotal = (
    parseFloat(sectb1Value) +
    parseFloat(sectb2Value) +
    parseFloat(sectb3Value)
  ).toFixed(2);

  let amepSubTotaAMEP = document.querySelectorAll(
    "[prefix = 'amepSubTotaAMEP']"
  );

  for (let amepScore of amepSubTotaAMEP) {
    if (amepScore.hasAttribute("id")) {
      if (amepScore.innerHTML == "(max 50 pts)") {
        if (grandBtotal < 50) {
          grandTotalBSect.value = !isNaN(parseFloat(grandBtotal))
            ? parseFloat(grandBtotal).toFixed(2)
            : 0.0;
        } else {
          grandTotalBSect.value = parseFloat(50.0).toFixed(2);
        }
      } else {
        if (grandBtotal < 45) {
          grandTotalBSect.value = !isNaN(parseFloat(grandBtotal))
            ? parseFloat(grandBtotal).toFixed(2)
            : 0.0;
        } else {
          grandTotalBSect.value = parseFloat(45.0).toFixed(2);
        }
      }
    }
  }
  blockGrandTotal(el);
}
//B3--End
//End--

//Section C
//Start--
function goodIndustryPracChckBox_change(el, field, value) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let checkboxPref = indexElement.getAttribute("prefix");
  let checkboxId = document.getElementById(checkboxPref + index);
  let fieldId = document.getElementById(field + index);

  if (checkboxId.checked) {
    fieldId.value = parseFloat(value).toFixed(2);
  } else {
    fieldId.value = (0.0).toFixed(2);
  }
  subTotalC3Section(indexElement);
}

function GoodInduPrac_AdopVirtDesiAnd_Yes_change(el) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let checkBoxtoUnable = document.getElementById(
    "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_Yes" + index
  );

  if (el.checked) {
    checkBoxtoUnable.removeAttribute("disabled");
  } else {
    checkBoxtoUnable.setAttribute("disabled", "");
    checkBoxtoUnable.checked = false;
    GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_change(
      checkBoxtoUnable,
      "GoodInduPrac_AdopVirtDesiAnd_CScore"
    );
  }
}

function GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_change(el, field) {
  let indexElement = document.getElementById(el.id);
  let index = indexElement
    .getAttribute("id")
    .replace(indexElement.getAttribute("prefix"), "");
  let fieldElement = document.getElementById(field + index);
  let total = 0;
  if (el.checked) {
    total = parseFloat(fieldElement.value) + 3;
  } else {
    total = parseFloat(fieldElement.value) - 3;
  }
  fieldElement.value = total.toFixed(2);
  subTotalC3Section(indexElement);
}
function enableDeleteC3Sect(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let descContainer = document.getElementById("GOODDescTbl" + index);
  let childCount = descContainer.querySelectorAll("[child]");

  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "ClabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "ClabelNo" + index + "_" + (childCount.length - 1) + "0"
      ).innerHTML = childCount.length - 1;
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      document.getElementById(
        "ClabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      document.getElementById(
        "ClabelNo" + index + "_" + childCount.length + "0"
      ).innerHTML = childCount.length;
    }
  }
}

function disableDeleteC3Sect(el) {
  let index = el.id.slice(14, -3);
  let descContainer = document.getElementById("GOODDescTbl" + index);

  let childCount = descContainer.querySelectorAll("[child]");
  if (index == 10) {
    if (childCount.length > 2) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("ClabelNo" + labelIndex).innerHTML = x;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 1; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("ClabelNo" + labelIndex).innerHTML = x;
      }
    }
  } else {
    if (childCount.length > 1) {
      for (let b of childCount) {
        b.removeAttribute("disabled");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("ClabelNo" + labelIndex).innerHTML = x + 1;
      }
    } else {
      for (let b of childCount) {
        b.setAttribute("disabled", "");
      }
      for (var x = 0; x < childCount.length; x++) {
        let labelIndex = childCount[x].id.slice(-5);
        document.getElementById("ClabelNo" + labelIndex).innerHTML = x + 1;
      }
    }
  }
  subTotalC3Section(descContainer);
}

function GoodInduPrac_AnyOtheInnoIn_Desc_Change(el) {
  let descField = el.value;
  let suffix = el.id.slice(31, -3);
  let index = el.id.slice(-3);
  let fieldId = "GoodInduPrac_AnyOtheInnoIn_CScore" + suffix + index;

  if (descField.length != 0) {
    document.getElementById(fieldId).removeAttribute("disabled");
    document.getElementById(fieldId).setAttribute("mandatory", "");
  } else {
    document.getElementById(fieldId).removeAttribute("mandatory");
    document.getElementById(fieldId).setAttribute("disabled", "");
    document.getElementById(fieldId).value = "";
  }
  onBlurDescC3Cscore(el);
}

function onBlurDescC3Cscore(el) {
  let field = document.getElementById(el.id).parentNode.parentNode.parentNode
    .parentNode;
  let containerIdElement = document.getElementById(field.id);
  subTotalC3Section(containerIdElement);
}

function subTotalC3Section(el) {
  let elementId = document.getElementById(el.id);
  let index = elementId
    .getAttribute("id")
    .replace(elementId.getAttribute("prefix"), "");
  let field1 = document.getElementById(
    "GoodInduPrac_ToUseBldgInfo_CScore" + index
  );
  let field2 = document.getElementById(
    "GoodInduPrac_ToAdopATradB_CScore" + index
  );
  let field3 = document.getElementById(
    "GoodInduPrac_ToProdAndDistC_CScore" + index
  );
  let field4 = document.getElementById(
    "GoodInduPrac_ToCondMontWork_CScore" + index
  );
  let field5 = document.getElementById(
    "GoodInduPrac_ToUseToolLike_CScore" + index
  );
  let field6 = document.getElementById(
    "GoodInduPrac_ToCondTheFollF_CScore" + index
  );
  let field7 = document.getElementById(
    "GoodInduPrac_AdopVirtDesiAnd_CScore" + index
  );
  // let field8 = document.getElementById(
  //   "GoodInduPrac_AdopVirtDesiAnd_ImplVariVDCTech_CScore" + index
  // );
  let field9 = document.getElementById(
    "GoodInduPrac_EngaBCACertCons_CScore" + index
  );
  let field10 = document.getElementById(
    "GoodInduPrac_ToAdopATrad_CScore" + index
  );
  let field11 = document.getElementById(
    "GoodInduPrac_ToProdAndDist_CScore" + index
  );
  let field12 = document.getElementById(
    "GoodInduPrac_CondMontWorkStud_CScore" + index
  );
  let field13 = document.getElementById(
    "GoodInduPrac_UseToLikeCCTV_CScore" + index
  );
  let field14 = document.getElementById(
    "GoodInduPrac_ToCondTheFoll_CScore" + index
  );
  let field15 = document.getElementById(
    "GoodInduPrac_UseOfScisLiftAnd_CScore" + index
  );
  let field16 = document.getElementById(
    "GoodInduPrac_UseOfBoomLift_CScore" + index
  );
  // let field17 = document.getElementById(
  //   "GoodInduPrac_ToCondTheFollG_CScore" + index
  // );

  let c3TotalValue = document.getElementById("GrandInduPrac_SubTota" + index);

  let field1Val = !isNaN(parseFloat(field1.value))
    ? parseFloat(field1.value).toFixed(2)
    : 0.0;
  let field2Val = !isNaN(parseFloat(field2.value))
    ? parseFloat(field2.value).toFixed(2)
    : 0.0;
  let field3Val = !isNaN(parseFloat(field3.value))
    ? parseFloat(field3.value).toFixed(2)
    : 0.0;
  let field4Val = !isNaN(parseFloat(field4.value))
    ? parseFloat(field4.value).toFixed(2)
    : 0.0;
  let field5Val = !isNaN(parseFloat(field5.value))
    ? parseFloat(field5.value).toFixed(2)
    : 0.0;
  let field6Val = !isNaN(parseFloat(field6.value))
    ? parseFloat(field6.value).toFixed(2)
    : 0.0;
  let field7Val = !isNaN(parseFloat(field7.value))
    ? parseFloat(field7.value).toFixed(2)
    : 0.0;
  // let field8Val = !isNaN(parseFloat(field8.value))
  //   ? parseFloat(field8.value).toFixed(2)
  //   : 0.0;
  let field9Val = !isNaN(parseFloat(field9.value))
    ? parseFloat(field9.value).toFixed(2)
    : 0.0;
  let field10Val = !isNaN(parseFloat(field10.value))
    ? parseFloat(field10.value).toFixed(2)
    : 0.0;
  let field11Val = !isNaN(parseFloat(field11.value))
    ? parseFloat(field11.value).toFixed(2)
    : 0.0;
  let field12Val = !isNaN(parseFloat(field12.value))
    ? parseFloat(field12.value).toFixed(2)
    : 0.0;
  let field13Val = !isNaN(parseFloat(field13.value))
    ? parseFloat(field13.value).toFixed(2)
    : 0.0;
  let field14Val = !isNaN(parseFloat(field14.value))
    ? parseFloat(field14.value).toFixed(2)
    : 0.0;
  let field15Val = !isNaN(parseFloat(field15.value))
    ? parseFloat(field15.value).toFixed(2)
    : 0.0;
  let field16Val = !isNaN(parseFloat(field16.value))
    ? parseFloat(field16.value).toFixed(2)
    : 0.0;
  // let field17Val = !isNaN(parseFloat(field17.value))
  //   ? parseFloat(field17.value).toFixed(2)
  //   : 0.0;

  //Add/Delete Section subtotal :
  let descContainer = document.getElementById("GOODDescTbl" + index);
  let allValueField = descContainer.querySelectorAll(
    "[prefix = 'GoodInduPrac_AnyOtheInnoIn_CScore']"
  );
  let subTotal = 0;
  for (let field4 of allValueField) {
    subTotal += parseFloat(
      !isNaN(parseFloat(field4.value))
        ? parseFloat(field4.value).toFixed(2)
        : 0.0
    );
  }

  let c3Total = 0;

  c3Total = (
    parseFloat(field1Val) +
    parseFloat(field2Val) +
    parseFloat(field3Val) +
    parseFloat(field4Val) +
    parseFloat(field5Val) +
    parseFloat(field6Val) +
    parseFloat(field7Val) +
    //parseFloat(field8Val) +
    parseFloat(field9Val) +
    parseFloat(field10Val) +
    parseFloat(field11Val) +
    parseFloat(field12Val) +
    parseFloat(field13Val) +
    parseFloat(field14Val) +
    parseFloat(field15Val) +
    parseFloat(field16Val) +
    //parseFloat(field17Val) +
    subTotal
  ).toFixed(2);

  let GOODsubTotal = document.querySelectorAll("[prefix = 'GOODsubTotal']");

  for (let goodTotScore of GOODsubTotal) {
    if (goodTotScore.hasAttribute("id")) {
      if (goodTotScore.innerHTML == "(max 10 pts)") {
        if (c3Total < 10) {
          c3TotalValue.value = !isNaN(parseFloat(c3Total))
            ? parseFloat(c3Total).toFixed(2)
            : 0.0;
        } else {
          c3TotalValue.value = parseFloat(10.0).toFixed(2);
        }
      } else {
        if (c3Total < 15) {
          c3TotalValue.value = !isNaN(parseFloat(c3Total))
            ? parseFloat(c3Total).toFixed(2)
            : 0.0;
        } else {
          c3TotalValue.value = parseFloat(15.0).toFixed(2);
        }
      }
    }
  }
  blockGrandTotal(el);
}
//End--

//Common
//--Start
function blockGrandTotal(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");

  let subfield1 = document.getElementById("StruSyst_SubTotaStruSyst" + index);
  let subfield2 = document.getElementById("AMEP_SubTotaAMEPB" + index);
  let subfield3 = document.getElementById("GrandInduPrac_SubTota" + index);

  let grandTotalValue = document.getElementById(
    "ConsScorSummShee_GranTotaSCore" + index
  );

  let field1Val = !isNaN(parseFloat(subfield1.value))
    ? parseFloat(subfield1.value).toFixed(2)
    : 0.0;
  let field2Val = !isNaN(parseFloat(subfield2.value))
    ? parseFloat(subfield2.value).toFixed(2)
    : 0.0;
  let field3Val = !isNaN(parseFloat(subfield3.value))
    ? parseFloat(subfield3.value).toFixed(2)
    : 0.0;

  grandTotalValue.value = (
    parseFloat(field1Val) +
    parseFloat(field2Val) +
    parseFloat(field3Val)
  ).toFixed(2);

  populateConstCscore(el);
  minScoreDiff();
}
function createArrayOfFields(sectionName, colArr, rowArr, index) {
  let objArr = [];

  let obj;

  for (let col of colArr) {
    obj = generateNewObj(rowArr);
    for (let row of rowArr) {
      if (row == "MaxiAlloPts") {
        obj[row] = document.getElementById(
          sectionName + col + row + index
        ).innerHTML;
      } else {
        obj[row] =
          document.getElementById(sectionName + col + row + index).value == ""
            ? 0
            : document.getElementById(sectionName + col + row + index).value;
      }
    }
    objArr[sectionName + col] = obj;
  }
  test = objArr;
  return objArr;
}

function descEnableCscore(el) {
  let field = document.getElementById(el.id).parentNode.parentNode.parentNode
    .parentNode;
  let containerIdElement = document.getElementById(field.id);
  subTotalA3Section(containerIdElement);
}

function generateNewObj(rowArr) {
  let retObj = {};

  for (let i of rowArr) {
    retObj[i] = "";
  }

  return retObj;
}

function complexNodeIdHandler(node, mainCount, subCount, mode) {
  let newId = "";
  let newBlockCount;

  let sibId = node.getAttribute("id");
  let usIndex = sibId.indexOf("_");
  let prefId = sibId.slice(0, usIndex);
  let sufId = sibId
    .slice(usIndex + 1)
    .replace(node.getAttribute("sub-suffix"), "");

  for (let nd of node.getElementsByTagName("cn2-textbox")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      nd.getAttribute("sub-suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        nd.getAttribute("suffix") +
        "_" +
        (subCount + 1) +
        nd.getAttribute("sub-suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "update" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        "_" +
        (sufId - 1) +
        nd.getAttribute("sub-suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("span")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      nd.getAttribute("sub-suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        nd.getAttribute("suffix") +
        "_" +
        (subCount + 1) +
        nd.getAttribute("sub-suffix");
      nd.setAttribute("id", newId);
      jsonData[newId] = "";
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "update" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        "_" +
        (sufId - 1) +
        nd.getAttribute("sub-suffix");
      jsonData[newId] = nd.value;
      delete jsonData[nd.getAttribute("id")];
      nd.setAttribute("id", newId);
    }
  }

  for (let nd of node.getElementsByTagName("cn2-button")) {
    if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      nd.getAttribute("sub-suffix") != null &&
      mode == "add"
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        nd.getAttribute("suffix") +
        "_" +
        (subCount + 1) +
        nd.getAttribute("sub-suffix");
      nd.setAttribute("id", newId);
    } else if (
      nd.getAttribute("prefix") != null &&
      nd.getAttribute("suffix") != null &&
      mode == "update" &&
      nd.getAttribute("sub-suffix") != null
    ) {
      newId =
        nd.getAttribute("prefix") +
        mainCount +
        "_" +
        (sufId - 1) +
        nd.getAttribute("sub-suffix");
      nd.setAttribute("id", newId);
    }
  }

  if (mode == "update") {
    newId =
      node.getAttribute("prefix") +
      mainCount +
      "_" +
      (sufId - 1) +
      node.getAttribute("sub-suffix");
    node.setAttribute("id", newId);
  }

  return node;
}

function appendDescRow(tblId, templId, descSuffix, btnEl) {
  let btnId = btnEl.getAttribute("id");
  let index = btnId.replace(
    document.getElementById(btnId).getAttribute("prefix"),
    ""
  );
  let tableId = tblId + index;

  let table = document.getElementById(tableId);
  let subCount = table.querySelectorAll("tr[id^='" + descSuffix + "']").length;
  let tempNode = document.getElementById(templId).cloneNode(true);
  tempNode.removeAttribute("hidden");
  tempNode.setAttribute(
    "id",
    tempNode.getAttribute("prefix") +
      index +
      "_" +
      (subCount + 1) +
      tempNode.getAttribute("sub-suffix")
  );

  let node = complexNodeIdHandler(
    tempNode,
    index.replace("0", ""),
    subCount,
    "add"
  );
  document.getElementById("ref" + descSuffix + index).before(node);
}

function deleteDescRow(rowPrefix, btnEl) {
  let btnId = btnEl.getAttribute("id");
  let btnIndex = btnId.replace(
    document.getElementById(btnId).getAttribute("prefix"),
    ""
  );

  let undIndex = btnIndex.indexOf("_");

  let index = btnIndex.slice(0, undIndex); //.replace(document.getElementById(btnId).getAttribute('suffix'), '');

  let rowToDelete = document.getElementById(rowPrefix + btnIndex);

  updateDescSiblings(index, rowToDelete);
  rowToDelete.parentNode.removeChild(rowToDelete);
}

function updateDescSiblings(index, sibling) {
  if (
    !sibling.nextElementSibling ||
    sibling.nextElementSibling.getAttribute("id") == null ||
    sibling.nextElementSibling.getAttribute("sub-suffix") == null
  ) {
    return;
  }

  complexNodeIdHandler(sibling.nextElementSibling, index, 0, "update");
  updateDescSiblings(index, sibling.nextElementSibling);
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function showConfirm(el) {
  let modal = document.getElementById("confirmationModal");
  modal.style.display = "block";

  flag = el;

  let index = flag.getAttribute("id").replace("blockDelBtn", "");
  let navToDelete = document.querySelector("[target='block" + index + "']");

  document.getElementById("blockNo").innerHTML = navToDelete.getAttribute(
    "label"
  );
}

function hideConfirm() {
  let modal = document.getElementById("confirmationModal");
  modal.style.display = "none";
}

function formatDecimal(el, place) {
  !isNaN(parseFloat(el.value).toFixed(place))
    ? (document.getElementById(el.id).value = parseFloat(el.value).toFixed(
        place
      ))
    : (document.getElementById(el.id).value = "");

  //Auto Compute floor Area
  let copLogicTrigger = document.querySelectorAll("[copLogic]");

  for (let copRad of copLogicTrigger) {
    let radElement = document.getElementById(copRad.id);
    if (radElement.checked == true) {
      copLogic(radElement);
    }
  }
}

function populateProjectDet(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let projectDetField1 = document.getElementById(
    "ConsScorSummShee_FlooArea" + index
  );

  let blockAreaField = document.getElementById(
    "FormSyst_SubTotaForA2b_FlooArea" + index
  );

  projectDetField1.value = blockAreaField.value;
  computeTotalFlrArea();
}

function computeTotalFlrArea() {
  //let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let totalfield = document.getElementById("ConsScorSummShee_TotaFlooArea10");
  let allValueField = document.querySelectorAll(
    "[prefix = 'ConsScorSummShee_FlooArea']"
  );
  let subTotal = 0;
  for (let fields of allValueField) {
    subTotal += parseFloat(
      !isNaN(parseFloat(fields.value)) ? parseFloat(fields.value) : 0.0
    );
  }
  totalValue = Number(Math.round(subTotal + "e2") + "e-2");
  totalfield.value = Math.round(totalValue);
  computePercentage();
}

function computePercentage() {
  let tableCount = document.querySelectorAll(
    "[prefix='ConsScorSummShee_FlooArea']"
  );
  let totalField = document.getElementById("ConsScorSummShee_TotaFlooArea10");
  let floorArea = "ConsScorSummShee_FlooArea";
  let percentField = "ConsScorSummShee_PercOfFlooArea";
  let percentTotalField = document.getElementById(
    "ConsScorSummShee_TotaPercOfFloo10"
  );

  //compute percentage per block
  if (tableCount.length == 2) {
    for (x = 0; tableCount.length - 1 > x; x++) {
      let percentFieldId = document.getElementById(percentField + (x + 1) + 0);
      let floorAreaField = document.getElementById(floorArea + (x + 1) + 0);
      percentFieldId.value = !isNaN(
        parseFloat((floorAreaField.value / totalField.value) * 100)
      )
        ? parseFloat(
            Math.round((floorAreaField.value / totalField.value) * 100)
          ).toFixed(2)
        : 0.0;
    }
  } else {
    for (x = 0; tableCount.length - 1 > x; x++) {
      let percentFieldId = document.getElementById(percentField + (x + 1) + 0);
      let floorAreaField = document.getElementById(floorArea + (x + 1) + 0);
      percentFieldId.value = !isNaN(
        parseFloat((floorAreaField.value / totalField.value) * 100)
      )
        ? parseFloat((floorAreaField.value / totalField.value) * 100).toFixed(2)
        : 0.0;
    }
  }
  //compute total percentage
  let total = 0;
  for (let a of document.querySelectorAll(
    "[prefix = 'ConsScorSummShee_PercOfFlooArea']"
  )) {
    percentagePerRaw = !isNaN(parseInt(a.value)) ? parseInt(a.value) : 0.0;
    total += percentagePerRaw;
  }
  if (total != 0) {
    percentTotalField.value = "100" + "%";
  } else {
    percentTotalField.value = "";
  }
}

function populateStrucSCscore(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let projectDetField = document.getElementById(
    "ConsScorSummShee_StruSystCSco" + index
  );
  let blockAreaField = document.getElementById(
    "StruSyst_SubTotaStruSyst" + index
  );

  projectDetField.value = parseFloat(blockAreaField.value).toFixed(2);
  computeAppoStrucSyst();
}
function computeAppoStrucSyst() {
  let tableCount = document.querySelectorAll(
    "[prefix='ConsScorSummShee_StruSystCSco']"
  );
  let totalField = document.getElementById(
    "ConsScorSummShee_TotaAppoStruSystCSco10"
  );
  let percentField = "ConsScorSummShee_PercOfFlooArea";
  let ssCscore = "ConsScorSummShee_StruSystCSco";
  let appCscore = "ConsScorSummShee_AppoStruSystCSco";
  let appFields = document.querySelectorAll(
    "[prefix='ConsScorSummShee_AppoStruSystCSco']"
  );
  let ssprojTotal = document.getElementById(
    "ConsScorSummShee_TotaStruSystScor10"
  );
  let total = 0;
  //compute percentage per block
  for (x = 0; tableCount.length - 1 > x; x++) {
    let percentFieldId = document.getElementById(percentField + (x + 1) + 0);
    let ssCscoreId = document.getElementById(ssCscore + (x + 1) + 0);
    let totalAppoCscore = document.getElementById(appCscore + (x + 1) + 0);
    let percentValue = percentFieldId.value;
    totalAppoCscore.value = !isNaN(
      parseFloat((percentValue / 100) * ssCscoreId.value)
    )
      ? parseFloat((percentValue / 100) * ssCscoreId.value).toFixed(2)
      : 0.0;
  }
  //compute total percentage
  for (let fields of appFields) {
    total += parseFloat(
      !isNaN(parseFloat(fields.value))
        ? parseFloat(fields.value).toFixed(2)
        : 0.0
    );
  }
  totalField.value = total.toFixed(2);
  ssprojTotal.value = Math.round(totalField.value);
}

function populateConstCscore(el) {
  let index = el.getAttribute("id").replace(el.getAttribute("prefix"), "");
  let projectDetField1 = document.getElementById(
    "ConsScorSummShee_ConsScor" + index
  );

  let blockAreaField = document.getElementById(
    "ConsScorSummShee_GranTotaSCore" + index
  );

  projectDetField1.value = parseFloat(blockAreaField.value).toFixed(2);
  computeAppConstCscore();
}

function computeAppConstCscore() {
  let tableCount = document.querySelectorAll(
    "[prefix='ConsScorSummShee_ConsScor']"
  );
  let totalField = document.getElementById(
    "ConsScorSummShee_TotaAppoConsCSco10"
  );
  let percentField = "ConsScorSummShee_PercOfFlooArea";
  let ssCscore = "ConsScorSummShee_ConsScor";
  let appCscore = "ConsScorSummShee_AppoConsScor";
  let appFields = document.querySelectorAll(
    "[prefix='ConsScorSummShee_AppoConsScor']"
  );
  let csproj = document.getElementById("ConsScorSummShee_TotaConsScorFor10");
  let total = 0;
  //compute percentage per block
  for (x = 0; tableCount.length - 1 > x; x++) {
    let percentFieldId = document.getElementById(percentField + (x + 1) + 0);
    let ssCscoreId = document.getElementById(ssCscore + (x + 1) + 0);
    let totalAppoCscore = document.getElementById(appCscore + (x + 1) + 0);
    let percentValue = percentFieldId.value;
    totalAppoCscore.value = !isNaN(
      parseFloat((percentValue / 100) * ssCscoreId.value)
    )
      ? parseFloat((percentValue / 100) * ssCscoreId.value).toFixed(2)
      : 0.0;
  }
  //compute total percentage
  for (let fields of appFields) {
    total += parseFloat(
      !isNaN(parseFloat(fields.value))
        ? parseFloat(fields.value).toFixed(2)
        : 0.0
    );
  }
  totalField.value = total.toFixed(2);
  csproj.value = Math.round(totalField.value);
}

function Member_Email_Address1_BLDR10_change(el) {
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

function projectRefNoChange(el) {
  let fieldValue = document.getElementById(el.id).value;
  let projectField = document.getElementById("Project_Project_Ref_No20");

  if (fieldValue.length != 0) {
    projectField.value = fieldValue;
  } else {
    projectField.value = "";
  }
}

function ConsScorSummShee_BlockNo_change(el) {
  let index = el.id.slice(24);
  let prefix = "StruSyst_BlocNoName";
  let blockName = document.getElementById(el.id);
  let fieldElement = document.getElementById(prefix + index);
  let pageName = document.querySelector("[target='block" + index + "']");
  if (blockName.value.length != 0) {
    pageName.removeAttribute("label");
    pageName.setAttribute("label", blockName.value);
    fieldElement.value = blockName.value;
  } else {
    pageName.removeAttribute("label");
    fieldElement.value = "";
  }
}

function maxValueValidation(el, maxValue) {
  let field = document.getElementById(el.id);

  if (field.value < maxValue) {
    field.value = !isNaN(parseFloat(field.value))
      ? parseFloat(field.value).toFixed(2)
      : parseFloat(0).toFixed(2);
  } else {
    field.value = !isNaN(parseFloat(maxValue))
      ? parseFloat(maxValue).toFixed(2)
      : parseFloat(0).toFixed(2);
  }
}

function minScoreDiff() {
  let totalStrucScore = document.getElementById(
    "ConsScorSummShee_TotaStruSystScor10"
  ).value;
  let minStrucScore = document.getElementById("ConsScorSummShee_MiniStruSyst10")
    .value;
  let totalConsScore = document.getElementById(
    "ConsScorSummShee_TotaConsScorFor10"
  ).value;
  let minConsScore = document.getElementById(
    "ConsScorSummShee_MinConsScorRequ10"
  ).value;

  let partAppConScore = document.getElementById("Project_TotaCScore10");

  partAppConScore.value = totalConsScore;

  if (totalStrucScore < minStrucScore) {
    document.getElementById("minStrucScore10").removeAttribute("hidden");
  } else {
    document.getElementById("minStrucScore10").setAttribute("hidden", "");
  }

  if (totalConsScore < minConsScore) {
    document.getElementById("minConsScore10").removeAttribute("hidden");
  } else {
    document.getElementById("minConsScore10").setAttribute("hidden", "");
  }
}

function Project_Dtls_AddiInfo_change() {
  let preConcreVol = document.getElementById(
    "Project_Dtls_AddiInfo_PrecConcVolFor10"
  );
  let preTotalConcreVol = document.getElementById(
    "Project_Dtls_AddiInfo_TotaConcVolFor10"
  );
  let perCentValue = document.getElementById(
    "Project_Dtls_AddiInfo_PrecLevel10"
  );

  let val1 = !isNaN(parseFloat(preConcreVol.value))
    ? parseFloat(preConcreVol.value)
    : parseFloat(0);

  let val2 = !isNaN(parseFloat(preTotalConcreVol.value))
    ? parseFloat(preTotalConcreVol.value)
    : parseFloat(0);

  let percentage = 0;

  if (val2 != 0 && val1 != 0) {
    if (val2 < val1) {
      showMessage("Total volume cannot be less than the Precast Volume");
      preTotalConcreVol.value = "";
    } else {
      percentage = Math.round((val1 / val2) * 100);

      perCentValue.value = !isNaN(parseFloat(percentage))
        ? parseFloat(percentage)
        : "";
    }
  } else {
    perCentValue.value = "";
  }
}

function projectRefchange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateRefNo(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "The Project Reference must be in the following format A9999-99999-YYYY or A999-99999-YYYY"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function validateRefNo(projectRef) {
  let re = /^(([a-zA-Z]{1}))(([0-9]{4}))-(([0-9]{5}))-(([0-9]{4}))$/;
  let re2 = /^(([a-zA-Z]{1}))(([0-9]{3}))-(([0-9]{5}))-(([0-9]{4}))$/;

  if (re.test(projectRef)) {
    return re.test(projectRef);
  } else if (re2.test(projectRef)) {
    return re2.test(projectRef);
  } else {
    return false;
  }
}
//End--
