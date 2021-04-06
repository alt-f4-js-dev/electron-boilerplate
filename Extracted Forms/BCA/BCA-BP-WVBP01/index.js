document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    PartOfAppl_PlanType10_change(
      document.getElementById("PartOfAppl_PlanType10")
    );
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

function formValidation() {
  let planTpVal = document.getElementById("PartOfAppl_PlanType10");
  if (!document.querySelector("[target='page2']").hasAttribute("selected")) {
    isValid = true;

    if (planTpVal.value == "") {
      isValid = false;
    }

    if (!isValid) {
      for (let b of document.querySelectorAll("[target]")) {
        if (b.getAttribute("target") == "page2") {
          b.shadowRoot.querySelector("button").click();
        } else {
          if (b.hasAttribute("selected")) b.removeAttribute("selected");
        }
      }

      showMessage(
        "Please select [Plan Type] under 'Particulars of Application' "
      );
    }
  }
}

function pMode_change(element) {
  let refId = element.id;

  let chequeGroup = [
    document.getElementById("PaymMode_Cheq20"),
    document.getElementById("PaymMode_Cheq40"),
    document.getElementById("PaymMode_Cheq30"),
    document.getElementById("PaymMode_Cheq50"),
  ];

  let giroGroup = [
    document.getElementById("PaymMode_Giro20"),
    document.getElementById("PaymMode_Giro50"),
    document.getElementById("PaymMode_Giro40"),
  ];

  switch (refId) {
    case "PaymMode_Cheq10":
      for (let member of chequeGroup) {
        member.removeAttribute("disabled");
        member.setAttribute("mandatory", "");
      }

      for (let member of giroGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.value = "";
      }
      break;
    case "PaymMode_Giro10":
      for (let member of chequeGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.value = "";
      }

      for (let member of giroGroup) {
        member.removeAttribute("disabled");
        member.setAttribute("mandatory", "");
      }
      break;
    case "PaymMode_PaidEarl10":
      for (let member of chequeGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.value = "";
      }

      for (let member of giroGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.value = "";
      }
      break;
    default:
      break;
  }
}

function TypeOfBuilWork_NewBuilBuilWork10_change(element) {
  if (element.checked) {
    document
      .getElementById("AreaStorSub_StatGrosFlooArea10")
      .removeAttribute("disabled");
  } else {
    document
      .getElementById("AreaStorSub_StatGrosFlooArea10")
      .setAttribute("disabled", "");
    document.getElementById("AreaStorSub_StatGrosFlooArea10").value = "0";
    document.getElementById("CompFees10").value = "0";
    document.getElementById("PaymMode_Paym10").innerHTML = "0";
  }
}

function radioOnChange() {
  let value = document.getElementById("AreaStorSub_StatGrosFlooArea10").value;

  if (value !== "0") {
    let newVal = value * 100;

    document.getElementById("CompFees10").value = newVal;
    document.getElementById("PaymMode_Paym10").innerHTML = newVal;
  }
}

function updateDeclSpan() {
  let divs = document
    .getElementById("planType1DeclarationQPForm")
    .getElementsByTagName("div");
  let duplicateDivs = new Array();

  for (let div of divs) {
    if (div.id) {
      duplicateDivs.push(div);
    }
  }
  for (let x = 0; x < duplicateDivs.length; x++) {
    let spans = duplicateDivs[x].querySelectorAll("span[class = label1Count]");
    for (let span of spans) {
      span.innerHTML = x + 1;
    }
  }
}

function setLast() {
  let divs = document
    .getElementById("planType1DeclarationQPForm")
    .getElementsByTagName("div");
  let duplicateDivs = new Array();

  for (let div of divs) {
    if (div.id) {
      duplicateDivs.push(div);
    }
  }
  duplicateDivs[duplicateDivs.length - 1].querySelector(
    "input[type=radio][prefix=DeclByQualPers_Access]"
  ).checked = true;
  let selectSuffix = document
    .getElementById("DeclByQualPers_IApplForA10")
    .getAttribute("suffix");
  let areaSuffix = document
    .getElementById("DeclByQualPers_IApplForA_OfBuilRegu10")
    .getAttribute("suffix");
  let area2Suffix = document
    .getElementById("DeclByQualPers_IApplForA_WvSt10")
    .getAttribute("suffix");
  let select = document.getElementById(
    "DeclByQualPers_IApplForA" + duplicateDivs.length + selectSuffix
  );
  let area = document.getElementById(
    "DeclByQualPers_IApplForA_OfBuilRegu" + duplicateDivs.length + areaSuffix
  );
  let area2 = document.getElementById(
    "DeclByQualPers_IApplForA_WvSt" + duplicateDivs.length + area2Suffix
  );

  select.removeAttribute("disabled");
  area.removeAttribute("mandatory");
  area.setAttribute("disabled", "");
  area2.removeAttribute("mandatory");
  area2.setAttribute("disabled", "");
}

function addressTo(element) {
  let address = document.getElementById("Addr20");

  if (element.value == "BCA") {
    address.value =
      "Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550";
  } else if (element.value == "DSTA") {
    address.value =
      "Defence Science & Technology Agency\nBuilding & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
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

function PartOfAppl_PlanType10_change(el) {
  let plan = document.getElementById("PartOfAppl_PlanType20");
  let show1 = document.querySelectorAll(`[planType1]`);
  let show2 = document.querySelectorAll(`[planType2]`);
  let field1 = document.querySelectorAll(`[page4Mand1]`);
  let field2 = document.querySelectorAll(`[page4Mand2]`);
  let rad1 = document.querySelectorAll(`[page4Rad1]`);
  let disfield1 = document.querySelectorAll(`[page4Disable1]`);
  let rad2 = document.querySelectorAll(`[page4Rad2]`);
  let disfield2 = document.querySelectorAll(`[page4Disable2]`);
  let defaultRad1 = document.getElementById("DeclByQualPers_Access10");
  let defaultRad2 = document.getElementById("DeclByQualPers_IApplForB10");
  let formField1 = document.querySelectorAll(".planType1qpform1");
  let formField2 = document.querySelectorAll(".Y1");
  let innerformField2 = document.querySelectorAll(".Z10_10");
  let planNoField = document.getElementById("PartOfAppl_PlanType20");

  //DeclarationBPSTPermitFields
  let dropDownList1 = document.getElementById("DeclByQualPers_IApplForA10");
  let waiverField = document.getElementById("DeclByQualPers_IApplForA_WvSt10");
  let otherField = document.getElementById(
    "DeclByQualPers_IApplForA_OfBuilRegu10"
  );
  let provMadeOnfield = document.getElementById("DeclByQualPers_ProvMadeOn10");
  let descMadeOn = document.getElementById("DeclByQualPers_DescOnProvMade10");
  let reasonField1 = document.getElementById("DeclByQualPers_ReasInSuppOf10");
  let clauseFieldl = document.getElementById("DeclByQualPers_Clause10");
  let locationField1 = document.getElementById("DeclByQualPers_LocOfWaiv10");
  let deleteButtonDecla1 = document.getElementById("planType1qpDelete1");
  //End

  //DeclarationLPMPEPFields
  let textADfiedl = document.getElementById("DeclByQualPers_LiftEscaMCPS10");
  let deleteButtonInside = document.getElementById("testDelete10_10");

  let otherField2 = document.getElementById("DeclByQualPers_Othe10");
  let provMadeOnfield2 = document.getElementById("DeclByQualPers_ProvMadeOn20");
  let catProvisionField = document.getElementById(
    "DeclByQualPers_CateOfProv10"
  );
  let regClauField = document.getElementById("DeclByQualPers_ReguClau10");
  let decOnProviField = document.getElementById(
    "DeclByQualPers_DescOnProvMade20"
  );
  let deleteButtonDecla2 = document.getElementById("outerDelete1");
  //End

  let tempArray = new Array();

  planNoField.value = "";
  planNoField.removeAttribute("mandatory");
  planNoField.removeAttribute("data-invalid");
  planNoField.setAttribute("mandatory", "");

  if (el.value == "Permit") {
    plan.removeAttribute("mandatory");
    plan.setAttribute("disabled", "");
    plan.removeAttribute("data-invalid");
    plan.removeAttribute("data-invalid-message");
    plan.value = "";
  } else {
    plan.setAttribute("mandatory", "");
    plan.removeAttribute("disabled");
  }
  //page4 changes
  if (el.value == "BP" || el.value == "Permit" || el.value == "ST") {
    //dafault
    defaultRad1.checked = true;
    for (let i = 0; i < formField1.length; i++) {
      if (i != 0) {
        formField1[i].parentNode.removeChild(formField1[i]);
      }
    }
    for (let i = 0; i < formField2.length; i++) {
      if (i != 0) {
        formField2[i].parentNode.removeChild(formField2[i]);
      }
    }
    for (let i = 0; i < innerformField2.length; i++) {
      if (i != 0) {
        innerformField2[i].parentNode.removeChild(innerformField2[i]);
      }
    }

    deleteButtonDecla1.setAttribute("disabled", "");

    document.getElementById("DeclByQualPers_PlanAre_Atta10").checked = false;
    document.getElementById("DeclByQualPers_PlanAre_NotAtta10").checked = false;

    waiverField.value = "";
    waiverField.removeAttribute("mandatory");
    waiverField.setAttribute("disabled", "");

    otherField.value = "";
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");

    let declaFields = tempArray.concat(
      dropDownList1,
      provMadeOnfield,
      descMadeOn,
      reasonField1,
      clauseFieldl,
      locationField1
    );

    for (let targetFields of declaFields) {
      targetFields.value = "";
      targetFields.removeAttribute("mandatory");
      targetFields.setAttribute("mandatory", "");
    }
    //show
    for (let target of show1) {
      target.removeAttribute("hidden");
    }
    for (let target of field1) {
      target.setAttribute("mandatory", "");
    }

    //hide
    for (let target of show2) {
      target.setAttribute("hidden", "");
    }
    for (let target of field2) {
      target.value = "";
      target.removeAttribute("mandatory");
    }
    for (let target of rad2) {
      target.checked = false;
    }
    for (let target of disfield2) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
  } else if (el.value == "LP" || el.value == "MP" || el.value == "EP") {
    //dafault
    defaultRad2.checked = true;
    for (let i = 0; i < formField1.length; i++) {
      if (i != 0) {
        formField1[i].parentNode.removeChild(formField1[i]);
      }
    }
    for (let i = 0; i < formField2.length; i++) {
      if (i != 0) {
        formField2[i].parentNode.removeChild(formField2[i]);
      }
    }
    for (let i = 0; i < innerformField2.length; i++) {
      if (i != 0) {
        innerformField2[i].parentNode.removeChild(innerformField2[i]);
      }
    }

    deleteButtonInside.setAttribute("disabled", "");
    deleteButtonDecla2.setAttribute("disabled", "");

    textADfiedl.value = "";
    textADfiedl.removeAttribute("mandatory");
    textADfiedl.setAttribute("mandatory", "");

    otherField2.value = "";
    otherField2.removeAttribute("mandatory");
    otherField2.setAttribute("disabled", "");

    let declaFields = tempArray.concat(
      provMadeOnfield2,
      catProvisionField,
      regClauField,
      decOnProviField
    );

    for (let targetFields of declaFields) {
      targetFields.value = "";
      targetFields.removeAttribute("mandatory");
      targetFields.setAttribute("mandatory", "");
    }

    //show
    for (let target of show2) {
      target.removeAttribute("hidden");
    }
    for (let target of field2) {
      target.setAttribute("mandatory", "");
    }

    //hide
    for (let target of show1) {
      target.setAttribute("hidden", "");
    }
    for (let target of field1) {
      target.value = "";
      target.removeAttribute("mandatory");
    }
    for (let target of rad1) {
      target.checked = false;
    }
    for (let target of disfield1) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
  }

  feeComputation();
}

function adjustNumber(element, lengthToAdjust) {
  let el = document.getElementById(element.id);
  let value = element.value;

  if (value == "0" || value == "00" || value == "000") {
    el.setAttribute("data-invalid", "");
    el.setAttribute("data-invalid-message", "Invalid input number '0'");
  } else {
    el.removeAttribute("data-invalid");
    el.removeAttribute("data-invalid-message");
  }

  if (value) {
    let lengthAdjustment = lengthToAdjust - value.length;
    for (let i = 0; i < lengthAdjustment; i++) {
      value = "0" + value;
    }
    element.value = value;
  }
}

function disableDelete(containerName, deleteid) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteid).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteid);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
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

function planType1RadDec1_change(el) {
  let suffix = el.id.substring(
    el.getAttribute("prefix").length,
    el.id.length - el.getAttribute("suffix").length
  );
  let selectSuffix = document
    .getElementById("DeclByQualPers_IApplForA10")
    .getAttribute("suffix");
  let areaSuffix = document
    .getElementById("DeclByQualPers_IApplForA_OfBuilRegu10")
    .getAttribute("suffix");
  let area2Suffix = document
    .getElementById("DeclByQualPers_IApplForA_WvSt10")
    .getAttribute("suffix");

  let select = document.getElementById(
    "DeclByQualPers_IApplForA" + suffix + selectSuffix
  );
  let area = document.getElementById(
    "DeclByQualPers_IApplForA_OfBuilRegu" + suffix + areaSuffix
  );
  let area2 = document.getElementById(
    "DeclByQualPers_IApplForA_WvSt" + suffix + area2Suffix
  );

  switch (checkID(el.id)) {
    case "DeclByQualPers_Access":
      select.removeAttribute("disabled");
      radioAndTxtfieldCtrl("notextarea", area, area2);
      break;
    case "DeclByQualPers_Build":
      //select.setAttribute("disabled", "");
      select.value = "modification";
      radioAndTxtfieldCtrl("notextarea", area, area2);
      break;
    case "DeclByQualPers_Doc":
      select.removeAttribute("disabled");
      radioAndTxtfieldCtrl("notextarea", area, area2);
      break;
    case "DeclByQualPers_WvSt":
      select.removeAttribute("disabled");
      radioAndTxtfieldCtrl("area", area, area2);
      break;
    case "DeclByQualPers_Other":
      select.removeAttribute("disabled");
      radioAndTxtfieldCtrl("area2", area, area2);
      break;
  }
}

function DeclByQualPers_Othe10_change(el) {
  let suffix = el.id.substring(
    el.getAttribute("prefix").length,
    el.id.length - el.getAttribute("suffix").length
  );

  let areaSuffix = document
    .getElementById("DeclByQualPers_Othe10")
    .getAttribute("suffix");

  let area = document.getElementById(
    "DeclByQualPers_Othe" + suffix + areaSuffix
  );

  if (checkID(el.id) === "DeclByQualPers_rad_Othe") {
    area.setAttribute("mandatory", "");
    area.removeAttribute("disabled");
  } else {
    area.value = "";
    area.setAttribute("disabled", "");
    area.removeAttribute("mandatory");
  }
}

function insertDuplicateInside(element, prefix, pprefix) {
  let parent = document
    .getElementById(element.id)
    .parentNode.parentNode.parentNode.querySelector("[prefix=" + pprefix + "]");
  let childs = parent.querySelectorAll("[prefix=" + prefix + "]");
  var index = childs.length + 1;
  var clone = childs[0].cloneNode(true);
  var preffix = childs[0].getAttribute("prefix");
  clone.id = preffix + index + childs[0].getAttribute("suffix");
  parent.appendChild(clone);
  changeIdInside(clone, index);

  delBtnControl_add(parent, "testDelete");
}

function changeIdInside(clone, index) {
  var selectInputs = clone.getElementsByTagName("cn2-textbox");
  for (let select of selectInputs) {
    let parentId = buildSuffix(
      document.getElementById(select.id).parentNode.parentNode.parentNode
        .parentNode.parentNode,
      index
    );
    let suffix = parentId;
    newId = select.getAttribute("prefix") + suffix;
    select.setAttribute("id", newId);
    jsonData[newId] = "";
  }
  var selectInputs = clone.getElementsByTagName("cn2-button");
  for (let select of selectInputs) {
    let parentId = buildSuffix(
      document.getElementById(select.id).parentNode.parentNode.parentNode
        .parentNode.parentNode,
      index
    );
    let suffix = parentId;
    newId = select.getAttribute("prefix") + suffix;
    select.setAttribute("id", newId);
    select.removeAttribute("disabled");
  }
}

function removeDuplicateInside(buttonId, prefix, lNo) {
  let parent = document.getElementById(buttonId).parentNode.parentNode
    .parentNode.parentNode.parentNode.parentNode;
  let childs = parent.querySelectorAll("[prefix=" + prefix + "]");
  let id = outerGetId(buttonId);
  let deleteDiv;
  for (let s of childs) {
    if (outerGetId(s.id) === id) {
      deleteDiv = s;
      break;
    }
  }
  let buttonSuffix = document.getElementById(buttonId).getAttribute("suffix");
  if (childs.length > 1) {
    parent.removeChild(deleteDiv);
    removeChangeIdInside(parent, prefix, buttonSuffix, lNo);
  }
  delBtnControl_del(parent, "testDelete");
}

function delBtnControl_add(parent, btnKeyId) {
  let deleteButtons = parent.querySelectorAll(
    "cn2-button[id^='" + btnKeyId + "']"
  );

  for (let delBtn of deleteButtons) {
    if (deleteButtons.length > 1) {
      document
        .getElementById(delBtn.getAttribute("id"))
        .removeAttribute("disabled");
    }
  }
}

function delBtnControl_del(parent, btnKeyId) {
  let deleteButtons = parent.querySelectorAll(
    "cn2-button[id^='" + btnKeyId + "']"
  );

  for (let delBtn of deleteButtons) {
    if (deleteButtons.length == 1) {
      document
        .getElementById(delBtn.getAttribute("id"))
        .setAttribute("disabled", "");
    }
  }
}

function removeChangeIdInside(parent, prefix, buttonSuffix, lNo) {
  var tableList = parent.querySelectorAll("[prefix=" + prefix + "]");

  var childIdPrefix = tableList[0].id;
  var i = childIdPrefix.length - 1;
  while (Number.isInteger(parseInt(childIdPrefix[i]))) {
    i--;
  }
  childIdPrefix = prefix;
  let preffix, suffix;
  for (var x = 0; x < tableList.length; x++) {
    tableList[x].id = childIdPrefix + (x + 1) + buttonSuffix;
    let componentsArray = new Array();
    let componentList = [
      "cn2-textbox",
      "cn2-textarea",
      "cn2-switchbutton",
      "cn2-select",
      "cn2-datefield",
      "cn2-button",
      "cn2-checkbox",
      "input",
    ];

    componentList.forEach((component) => {
      componentsArray = componentsArray.concat(
        tableList[x].getElementsByTagName(component)
      );
    });
    for (let components of componentsArray) {
      for (let component of components) {
        if (component.getAttribute("prefix") !== null) {
          preffix = component.getAttribute("prefix");
        }
        if (component.getAttribute("suffix") !== null) {
          suffix = component.getAttribute("suffix");
        } else {
          suffix = "";
        }
        let oldId = component.id;
        let newId = preffix + (x + 1) + suffix;
        if (oldId != newId) {
          jsonData[newId] = jsonData[oldId];
          delete jsonData[oldId];
        }

        component.setAttribute("id", newId);
      }
    }

    if (lNo !== undefined) {
      tempP = checkID(
        document.getElementById(tableList[x].id).querySelector(lNo).innerHTML
      );
      document.getElementById(tableList[x].id).querySelector(lNo).innerHTML =
        tempP + (x + 1);
    }
  }
}

function removeDuplicateOuter(buttonId, id, pDiv, prefix, childPrefix, lNo) {
  let childId = outerCheckID(id) + outerGetId(buttonId);
  let parent = document.getElementById(pDiv);

  let tempTable = [];
  let childTable = parent.querySelectorAll("div");
  for (let t of childTable) {
    if (t.hasAttribute("parentDiv")) {
      tempTable.push(t);
    }
  }
  if (tempTable.length > 1) {
    parent.removeChild(document.getElementById(childId));
    tempTable = [];
    let childTable = parent.querySelectorAll("div");
    for (let t of childTable) {
      if (t.hasAttribute("parentDiv")) {
        tempTable.push(t);
      }
    }
    removeChangeIdOuter(pDiv, lNo);
    let tableList = parent.querySelectorAll("[prefix=" + prefix + "]");
    let ctr = 1;
    for (let t of tableList) {
      newId =
        tableList[0].getAttribute("prefix") +
        ctr +
        tableList[0].getAttribute("suffix");

      t.setAttribute("id", newId);
      let suff = buildSuffix(t, ctr);
      replaceOuterId(t, childPrefix, suff);
      ctr++;
    }
  }
  outerDelete_disable();
}

function replaceOuterId(parent, prefix, buttonSuffix) {
  var tableList = parent.querySelectorAll("[prefix=" + prefix + "]");

  let suffix = tableList[0].getAttribute("childSuffix") + buttonSuffix;
  let x = 1;

  for (let t of tableList) {
    t.setAttribute("suffix", suffix);
    let newId = t.getAttribute("prefix") + x + t.getAttribute("suffix");
    t.setAttribute("id", newId);
    let componentsArray = new Array();
    let componentList = [
      "cn2-textbox",
      "cn2-textarea",
      "cn2-switchbutton",
      "cn2-select",
      "cn2-datefield",
      "cn2-button",
      "cn2-checkbox",
      "input",
    ];

    componentList.forEach((component) => {
      componentsArray = componentsArray.concat(
        t.getElementsByTagName(component)
      );
    });
    let pref = "";
    let i = 1;
    for (let components of componentsArray) {
      for (let component of components) {
        if (component.getAttribute("prefix") !== null) {
          pref = component.getAttribute("prefix");
        }
        let oldId = component.id;
        let newId = pref + x + suffix;
        if (oldId != newId) {
          jsonData[newId] = jsonData[oldId];
          delete jsonData[oldId];
        }
        if (oldId === components[components.length - 1].id) {
          i++;
        }
        component.setAttribute("id", newId);
      }
    }
    x++;
  }
}

function outerInsertDuplicate(pDiv, idDiv, lNo) {
  var parentDiv = document.getElementById(pDiv);
  var tempTable = parentDiv.getElementsByTagName("div");
  var numberOfForms = [];
  for (var x = 0; x < tempTable.length; x++) {
    if (
      tempTable[x].getAttribute("id") !== null &&
      tempTable[x].getAttribute("child") == null &&
      tempTable[x].getAttribute("childSuffix") == null
    ) {
      numberOfForms.push(tempTable[x]);
    }
  }

  var suffix = numberOfForms.length + 1;
  var clone = numberOfForms[0].cloneNode(true);

  //Set radio button ids and names before appending it to child to prevent loss of data
  var selectInputs = clone.getElementsByTagName("input");
  for (let select of selectInputs) {
    newId = outerBuildId(select, suffix);
    clone
      .querySelector("input[type=radio][id=" + select.id + "]")
      .setAttribute("name", outerCheckID(select.getAttribute("name")) + suffix);
    clone
      .querySelector("input[type=radio][id=" + select.id + "]")
      .setAttribute("id", newId);
    jsonData[newId] = "";
  }

  var preffix = outerCheckID(idDiv);
  clone.id = preffix + suffix;
  let keme = clone.querySelector('[prefix="innerForm10_"]');
  let removeDiv = keme.querySelectorAll("[prefix='Z']");
  let ctr = true;
  while (ctr) {
    removeDiv = keme.querySelectorAll("[prefix='Z']");
    if (removeDiv.length > 1) {
      keme.removeChild(removeDiv[removeDiv.length - 1]);
    } else {
      ctr = false;
    }
  }
  parentDiv.appendChild(clone);

  if (lNo !== undefined) {
    tempP = outerCheckID(clone.querySelector(lNo).innerHTML);
    clone.querySelector(lNo).innerHTML = tempP + suffix;
  }
  outerInsertChangeId(clone, suffix);
}
function outerCheckID(idDiv) {
  var i = idDiv.length;
  var temp = i;
  for (var x = 0; x <= i; x++) {
    if (Number.isInteger(parseInt(idDiv[x]))) {
      temp--;
    }
  }
  prefix = idDiv.substring(0, temp);
  return prefix;
}

function outerInsertChangeId(clone, index) {
  var selectInputs = clone.getElementsByTagName("cn2-switchbutton");
  for (let select of selectInputs) {
    newId = outerBuildId(select, index);
    select.setAttribute("id", newId);
    jsonData[newId] = false;
  }
  var selectInputs = clone.getElementsByTagName("div");
  for (let select of selectInputs) {
    if (select.id) {
      if (select.getAttribute("childSuffix") != null) {
        let childSuffix = select.getAttribute("childSuffix");
        let parentId = buildSuffix(
          document.getElementById(select.id).parentNode,
          index
        );
        let suffix = childSuffix + parentId;
        let newId = select.getAttribute("prefix") + "1" + suffix;
        select.setAttribute("suffix", suffix);
        select.setAttribute("id", newId);
      } else {
        newId = outerBuildId(select, index);
        select.setAttribute("id", newId);
      }
    }
  }
  var selectInputs = clone.getElementsByTagName("cn2-textbox");
  for (let select of selectInputs) {
    if (select.getAttribute("childSuffix") != null) {
      let childSuffix = select.getAttribute("childSuffix");
      let parentId = buildSuffix(
        document.getElementById(select.id).parentNode.parentNode.parentNode
          .parentNode.parentNode.parentNode,
        index
      );
      let suffix = childSuffix + parentId;
      let newId = select.getAttribute("prefix") + "1" + suffix;
      select.setAttribute("suffix", suffix);
      select.setAttribute("id", newId);
      jsonData[newId] = "";
    } else {
      newId = outerBuildId(select, index);
      select.setAttribute("id", newId);
      jsonData[newId] = "";
    }
  }
  var selectInputs = clone.getElementsByTagName("cn2-textarea");
  for (let select of selectInputs) {
    newId = outerBuildId(select, index);
    select.setAttribute("id", newId);
    jsonData[newId] = "";
  }
  var selectInputs = clone.getElementsByTagName("cn2-datefield");
  for (let select of selectInputs) {
    newId = outerBuildId(select, index);
    select.setAttribute("id", newId);
    jsonData[newId] = "";
  }
  var selectInputs = clone.getElementsByTagName("cn2-select");
  for (let select of selectInputs) {
    newId = outerBuildId(select, index);
    select.setAttribute("id", newId);
    jsonData[newId] = "";
  }
  var selectInputs = clone.getElementsByTagName("cn2-checkbox");
  for (let select of selectInputs) {
    newId = outerBuildId(select, index);
    select.setAttribute("id", newId);
    jsonData[newId] = false;
  }
  var selectInputs = clone.getElementsByTagName("cn2-button");
  for (let select of selectInputs) {
    if (select.getAttribute("childSuffix") != null) {
      let childSuffix = select.getAttribute("childSuffix");
      let parentId = buildSuffix(
        document.getElementById(select.id).parentNode.parentNode.parentNode
          .parentNode.parentNode.parentNode,
        index
      );

      let suffix = childSuffix + parentId;
      let newId = select.getAttribute("prefix") + "1" + suffix;
      select.setAttribute("suffix", suffix);
      select.setAttribute("id", newId);

      // Added this to disabled the delete button when add is clicked
      if (select.getAttribute("id").includes("testDelete")) {
        select.setAttribute("disabled", "");
      }

      outerDelete_enable();
    } else {
      newId = outerBuildId(select, index);
      select.setAttribute("id", newId);

      // Added this to disabled the delete button when add is clicked
      if (select.getAttribute("id").includes("testDelete")) {
        select.setAttribute("disabled", "");
      }

      outerDelete_enable();
    }
  }
}

function outerDelete_enable() {
  let deleteButtons = document.querySelectorAll(
    "cn2-button[id^='outerDelete']"
  );
  for (let delBtn of deleteButtons) {
    delBtn.removeAttribute("disabled");
  }
}

function outerDelete_disable() {
  let deleteButtons = document.querySelectorAll(
    "cn2-button[id^='outerDelete']"
  );
  for (let delBtn of deleteButtons) {
    if (deleteButtons.length == 1) {
      console.log(deleteButtons);
      delBtn.setAttribute("disabled", "");
    }
  }
}

function buildSuffix(element, index) {
  element = document.getElementById(element.id);
  let suffix;
  if (element.getAttribute("suffix") !== null) {
    suffix = element.getAttribute("suffix");
  } else {
    suffix = "";
  }
  let newId = index + suffix;

  return newId;
}

function outerBuildId(element, index) {
  element = document.getElementById(element.id);
  let prefix, suffix;
  if (element.getAttribute("prefix") !== null) {
    prefix = element.getAttribute("prefix");
  }
  if (element.getAttribute("suffix") !== null) {
    suffix = element.getAttribute("suffix");
  } else {
    suffix = "";
  }
  let newId = prefix + index + suffix;

  return newId;
}

function outerGetId(element) {
  let prefix, suffix;
  element = document.getElementById(element);
  if (element.getAttribute("prefix") !== null) {
    prefix = element.getAttribute("prefix");
  }
  if (element.getAttribute("suffix") !== null) {
    suffix = element.getAttribute("suffix");
  } else {
    suffix = "";
  }
  let idInc = element.id.substring(
    prefix.length,
    element.id.length - suffix.length
  );
  return idInc;
}

function removeDuplicateOuter1(buttonId, id, pDiv, lNo) {
  childId = outerCheckID(id) + outerGetId(buttonId);

  var parentDiv = document.getElementById(pDiv);
  var tempTable = parentDiv.getElementsByTagName("div");
  var numberOfForms = [];
  for (var x = 0; x < tempTable.length; x++) {
    if (tempTable[x].getAttribute("id") !== null) {
      numberOfForms.push(tempTable[x]);
    }
  }
  if (numberOfForms.length > 1) {
    document.getElementById(pDiv).removeChild(document.getElementById(childId));
    removeChangeId(pDiv, lNo);
  }
}

function removeChangeIdOuter(pDiv, lNo) {
  var tempTable = document.getElementById(pDiv).getElementsByTagName("div");

  var tableList = [];
  for (var x = 0; x < tempTable.length; x++) {
    if (
      tempTable[x].getAttribute("id") !== null &&
      tempTable[x].hasAttribute("parentDiv")
    ) {
      tableList.push(tempTable[x]);
    }
  }
  var childIdPrefix = tableList[0].id;
  var i = childIdPrefix.length - 1;
  while (Number.isInteger(parseInt(childIdPrefix[i]))) {
    i--;
  }
  childIdPrefix = tableList[0].id.substring(0, i + 1);
  let prefix, suffix;
  for (var x = 0; x < tableList.length; x++) {
    tableList[x].id = childIdPrefix + (x + 1);

    if (lNo !== undefined) {
      tempP = checkID(
        document.getElementById(tableList[x].id).querySelector(lNo).innerHTML
      );
      document.getElementById(tableList[x].id).querySelector(lNo).innerHTML =
        tempP + (x + 1);
    }

    let componentsArray = new Array();
    let componentList = [
      "cn2-textbox",
      "cn2-textarea",
      "cn2-switchbutton",
      "cn2-select",
      "cn2-datefield",
      "cn2-button",
      "cn2-checkbox",
      "input",
    ];

    componentList.forEach((component) => {
      componentsArray = componentsArray.concat(
        tableList[x].getElementsByTagName(component)
      );
    });

    for (let components of componentsArray) {
      for (let component of components) {
        if (component.getAttribute("prefix") !== null) {
          prefix = component.getAttribute("prefix");
        }
        if (component.getAttribute("suffix") !== null) {
          suffix = component.getAttribute("suffix");
        } else {
          suffix = "";
        }
        let oldId = component.id;
        let newId = prefix + (x + 1) + suffix;

        if (oldId != newId) {
          jsonData[newId] = jsonData[oldId];
          delete jsonData[oldId];
        }

        component.setAttribute("id", newId);
      }
    }
  }
}

function outerAddRemove(parent) {
  parent = document.getElementById(parent);
  let childDivs = parent.querySelectorAll("div");
  let t = [];
  for (let c of childDivs) {
    if (c.hasAttribute("parentDiv")) {
      t.push(c);
    }
  }
  let targetDiv = t[t.length - 1];
  let targetForm = targetDiv.querySelector('[prefix="innerForm10_"]');
  let numOfDiv = targetForm.querySelectorAll("[prefix='Z']");
  let ctr = true;
  while (ctr) {
    if (numOfDiv.length > 1) {
      targetForm.removeChild(numOfDiv[numOfDiv.length - 1]);
    } else {
      ctr = false;
    }
  }
}

function EmailValidate(el) {
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

// CN2DEVII-209 Bug Fixes - Start

function DeclByQualPers_IApplForA_change(el) {
  if (el.value != "modification") return;

  if (el.value == "modification") {
    let prefix = document.getElementById(el.id).getAttribute("prefix");
    let suffix = el.id.replace(prefix, "");
    let radioId = "DeclByQualPers_Build" + suffix;

    let radioEl = document.getElementById(radioId);
    radioEl.checked = true;

    // I am just calling this fuction just so it is synchronize to radio click
    planType1RadDec1_change(radioEl);
  }
}

// this function handles the radio button and textarea reset
function radioAndTxtfieldCtrl(selected, area, area2) {
  area.value = "";
  area2.value = "";
  if (selected == "notextarea") {
    area.setAttribute("disabled", "");
    area.removeAttribute("mandatory");
    area2.removeAttribute("mandatory");
    area2.setAttribute("disabled", "");
  } else if (selected == "area") {
    area2.removeAttribute("disabled");
    area2.setAttribute("mandatory", "");
    area.removeAttribute("mandatory");
    area.setAttribute("disabled", "");
  } else if (selected == "area2") {
    area.removeAttribute("disabled");
    area.setAttribute("mandatory", "");
    area2.removeAttribute("mandatory");
    area2.setAttribute("disabled", "");
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

  let firmName = document.getElementById("Member_Firm_Name_OWNER" + id + "0");

  if (firmName.value.length != 0) {
    document
      .getElementById("Members_UEN_OWNER" + id + "0")
      .setAttribute("mandatory", "");
    document.getElementById("Members_UEN_LABEL" + id + "0").innerHTML = "UEN*";
  } else {
    document
      .getElementById("Members_UEN_OWNER" + id + "0")
      .removeAttribute("mandatory");
    document.getElementById("Members_UEN_LABEL" + id + "0").innerHTML = "UEN";
  }
}

function togglePartQp() {
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
    .removeAttribute("data-invalid-message");
}

function duplicateOneForm(formContainer, formField) {
  let container = document.getElementById(formContainer);
  let clonedForm = container.lastElementChild.cloneNode(true);
  let containerCount = container.childElementCount;
  let generalCounter = containerCount + 1;
  let counters = clonedForm.querySelectorAll("[counter-form]");

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
        if (checkPage(menuList[i].getAttribute("target"))) {
          menuList[i].removeAttribute("valid");
          menuList[i].setAttribute("warning", "");
        } else {
          menuList[i].removeAttribute("warning");
          menuList[i].setAttribute("valid", "");
        }
      }
    }
  }

  if (counters.length > 0) {
    for (let x of counters) {
      if (x.hasAttribute("id")) {
        x.value = generalCounter;
      } else {
        x.innerHTML = generalCounter;
      }
    }
  }

  clonedForm.id =
    clonedForm.getAttribute("prefix") +
    generalCounter +
    clonedForm.getAttribute("suffix");

  let excludes = clonedForm.querySelectorAll("[prefix], [suffix]");
  for (let el of excludes) {
    if (el.hasAttribute("m")) el.setAttribute("mandatory", "");

    let pre = el.getAttribute("prefix");
    let suf = el.getAttribute("suffix");
    let newID = pre + generalCounter + suf;
    el.removeAttribute("id");
    el.setAttribute("id", newID);
  }

  if (clonedForm.querySelectorAll("[data-invalid]")) {
    for (let a of clonedForm.querySelectorAll("[data-invalid]")) {
      a.removeAttribute("data-invalid");
      a.removeAttribute("data-invalid-message");
    }
  }

  if (clonedForm.querySelectorAll("[not-manda]")) {
    for (let a of clonedForm.querySelectorAll("[not-manda]")) {
      if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
    }
  }

  if (clonedForm.querySelector("[no-asterisk]")) {
    for (let a of clonedForm.querySelectorAll("[no-asterisk]")) {
      a.innerHTML = a.innerHTML.replace("*", "");
    }
  }

  if (clonedForm.querySelectorAll("[main-accordion-header]")) {
    let mainAccordionHeaders = clonedForm.querySelectorAll(
      "[main-accordion-header]"
    );
    for (let x of mainAccordionHeaders) {
      x.setAttribute("href", x.id);
    }
  }

  if (clonedForm.querySelectorAll("[danger-main]")) {
    let deleteBtn2 = clonedForm.querySelectorAll("[danger-main]");
    for (let x of deleteBtn2) {
      if (!x.hasAttribute("siteAddrDelBtn")) {
        x.removeAttribute("event-click");
        let newEvent2 =
          "removeOneForm('" + formContainer + "', '" + clonedForm.id + "')";
        x.setAttribute("event-click", newEvent2);
      } else {
        let eventClickVal = x.getAttribute("event-click");
        let noRemoveFormFunctionCall = eventClickVal.substring(
          "0",
          eventClickVal.indexOf("removeOneForm")
        );
        let newEvent2 =
          noRemoveFormFunctionCall +
          "removeOneForm('" +
          formContainer +
          "', '" +
          clonedForm.id +
          "');";
        x.setAttribute("event-click", newEvent2);
      }
    }
  }

  container.appendChild(clonedForm);

  deleteBtnStatus(formContainer);
  savingToJson(clonedForm);
}

function savingToJson(container) {
  let cn2Fields = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];
  let query = "";

  for (let x of cn2Fields) {
    if (x != "input") {
      query += `${x}, `;
    } else {
      query += `${x}`;
    }
  }

  let inputs = container.querySelectorAll(query);
  for (let x of inputs) {
    if (
      x.tagName.toLowerCase() == "cn2-checkbox" ||
      x.tagName.toLowerCase() == "input"
    ) {
      jsonData[x.id] = x.checked;
    } else {
      jsonData[x.id] = "";
    }
  }
}
function deleteBtnStatus(container, subContainer) {
  let inside = "";
  let main = document
    .getElementById(container)
    .querySelectorAll("[danger-main]");

  if (subContainer) {
    if (document.getElementById(subContainer))
      inside = document
        .getElementById(subContainer)
        .querySelectorAll("[danger-inside]");
  }

  if (main.length > 1) {
    for (let x of main) {
      document
        .getElementById(container)
        .querySelector("#" + x.id)
        .removeAttribute("disabled");
    }
  } else {
    for (let x of main) {
      document
        .getElementById(container)
        .querySelector("#" + x.id)
        .setAttribute("disabled", "");
    }
  }

  if (inside) {
    if (inside.length > 1) {
      for (let x of inside) {
        document
          .getElementById(container)
          .querySelector("#" + x.id)
          .removeAttribute("disabled");
      }
    } else {
      for (let x of inside) {
        document
          .getElementById(container)
          .querySelector("#" + x.id)
          .setAttribute("disabled", "");
      }
    }
  }
}

function removeOneForm(formCon, form) {
  let formDiv = document.querySelector("#" + formCon + " > #" + form);
  let lastChild = document.getElementById(formCon).lastElementChild.id;
  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
        if (checkPage(menuList[i].getAttribute("target"))) {
          menuList[i].removeAttribute("valid");
          menuList[i].setAttribute("warning", "");
        } else {
          menuList[i].removeAttribute("warning");
          menuList[i].setAttribute("valid", "");
        }
      }
    }
  }

  if (formDiv.getAttribute("id") == lastChild) {
    formDiv.remove();
  } else {
    let containerDiv = document.getElementById(formCon).children;
    let position = "";

    elementLoop: for (i = 0; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      if (currentDiv.id == formDiv.id) {
        position = i;
        break elementLoop;
      }
    }

    formDiv.remove();

    for (i = position; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      let elements = currentDiv.querySelectorAll("[prefix], [suffix]");
      let generalCounter = i + 1;
      currentDiv.id =
        currentDiv.getAttribute("prefix") +
        generalCounter +
        currentDiv.getAttribute("suffix");
      let counters = currentDiv.querySelectorAll("[counter-form]");

      if (counters.length > 0) {
        for (let x of counters) {
          if (x.hasAttribute("id")) {
            x.value = generalCounter;
          } else {
            x.innerHTML = generalCounter;
          }
        }
      }
      for (let el of elements) {
        delete jsonData[el.id];
        let pre = el.getAttribute("prefix");
        let suf = el.getAttribute("suffix");
        let newID = pre + generalCounter + suf;
        document.getElementById(el.id).setAttribute("id", newID);
        if (
          componentList.includes(
            document.getElementById(el.id).tagName.toLowerCase()
          )
        ) {
          if (
            document.getElementById(el.id).tagName.toLowerCase() ==
            "cn2-checkbox" ||
            document.getElementById(el.id).tagName.toLowerCase() == "input"
          ) {
            jsonData[document.getElementById(el.id).id] = el.checked;
          } else {
            jsonData[document.getElementById(el.id).id] = el.value;
          }
        }
        if (el.hasAttribute("main-accordion-header"))
          el.setAttribute("href", el.id);
      }

      let deleteBtn2 = currentDiv.querySelectorAll("[danger-main]");
      for (let x of deleteBtn2) {
        if (!x.hasAttribute("siteAddrDelBtn")) {
          x.removeAttribute("event-click");
          let newEvent2 =
            "removeOneForm('" + formCon + "', '" + currentDiv.id + "')";
          x.setAttribute("event-click", newEvent2);
        } else {
          let eventClickVal = x.getAttribute("event-click");
          let noRemoveFormFunctionCall = eventClickVal.substring(
            0,
            eventClickVal.indexOf("removeOneForm")
          );
          x.removeAttribute("event-click");
          let newEvent2 =
            noRemoveFormFunctionCall +
            "removeOneForm('" +
            formCon +
            "', '" +
            currentDiv.id +
            "');";
          x.setAttribute("event-click", newEvent2);
        }
      }
    }
  }

  deleteBtnStatus(formCon, form);
}

function resetRadBtn() {
  let childCount = document.querySelectorAll(".planType1qpform1").length;
  let radButton1 = document.querySelectorAll(
    "[prefix='DeclByQualPers_PlanAre_Atta']"
  );
  let radButton2 = document.querySelectorAll(
    "[prefix='DeclByQualPers_PlanAre_NotAtta']"
  );
  if (childCount > 1) {
    radButton1[radButton1.length - 1].checked = false;
    radButton2[radButton2.length - 1].setAttribute("checked", "false");
  }
}

function feeComputation() {
  let el = document.getElementById("PartOfAppl_PlanType10");
  let itemQuantField = document.getElementById(
    "AreaStorSub_StatGrosFlooArea10"
  );
  let itemTotalVal = document.getElementById("CompFees10");
  let valueTotal = document.getElementById("PaymMode_Paym10");
  let formField1 = document.querySelectorAll(".planType1qpform1");
  let formField2 = document.querySelectorAll(".Y1");

  if (el.value == "BP" || el.value == "Permit" || el.value == "ST") {
    itemQuantField.value = formField1.length;
    itemTotalVal.value = parseFloat(formField1.length * 100).toString();
    valueTotal.innerHTML = itemTotalVal.value;
  } else if (el.value == "LP" || el.value == "MP" || el.value == "EP") {
    itemQuantField.value = formField2.length;
    itemTotalVal.value = parseFloat(formField2.length * 100).toString();
    valueTotal.innerHTML = itemTotalVal.value;
  }
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