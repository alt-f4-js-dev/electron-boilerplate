function changeSwitchButton(el) {
  let id = el.nextElementSibling.id;
  let val = jsonData[id];

  if (val == "Yes" || val == "on") {
    jsonData[id] = "No";
  } else {
    jsonData[id] = "Yes";
  }
}

function removeChangeId(pDiv, lNo, parentType) {
  let tempTable = document
    .getElementById(pDiv)
    .getElementsByTagName(parentType);

  let tableList = [];
  for (let x = 0; x < tempTable.length; x++) {
    if (
      tempTable[x].hasAttribute("id") &&
      !tempTable[x].hasAttribute("child")
    ) {
      tableList.push(tempTable[x]);
    }
  }
  let childIdPrefix = tableList[0].id;

  let i = childIdPrefix.length - 1;
  while (Number.isInteger(parseInt(childIdPrefix[i]))) {
    i--;
  }
  childIdPrefix = tableList[0].id.substring(0, i + 1);
  let prefix, suffix;
  for (let x = 0; x < tableList.length; x++) {
    tableList[x].id = childIdPrefix + (x + 1);
    if (tableList[x].querySelector("h2") !== null) {
      if ((x + 1) % 2 == 0) {
        tableList[x]
          .querySelector("h2")
          .setAttribute("style", "background-color: white");
        tableList[x]
          .querySelector("[child='div']")
          .setAttribute("style", "background-color: white");
      } else {
        tableList[x]
          .querySelector("h2")
          .setAttribute("style", "background-color: #f4f4f4");
        tableList[x]
          .querySelector("[child='div']")
          .setAttribute("style", "background-color: #f4f4f4");
      }
    }

    if (lNo !== undefined) {
      tempP = checkID(
        document.getElementById(tableList[x].id).querySelector(lNo).innerHTML
      );
      document.getElementById(tableList[x].id).querySelector(lNo).innerHTML =
        tempP + (x + 1);
    }
    //Adjustment of Field/Input Ids
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
    //Adjustment of Child-Parent ID
    let AccComponents = tableList[x].getElementsByTagName("span");
    for (let c of AccComponents) {
      if (c.hasAttribute("id") && c.hasAttribute("child")) {
        if (c.getAttribute("prefix") !== null) {
          prefix = c.getAttribute("prefix");
        }
        if (c.getAttribute("suffix") !== null) {
          suffix = c.getAttribute("suffix");
        } else {
          suffix = "";
        }
        let newId = prefix + (x + 1) + suffix;

        c.setAttribute("href", newId);
        c.setAttribute("id", newId);
      }
    }
    AccComponents = tableList[x].getElementsByTagName("div");
    for (let c of AccComponents) {
      if (c.hasAttribute("child")) {
        if (c.getAttribute("prefix") !== null) {
          prefix = c.getAttribute("prefix");
        }
        if (c.getAttribute("suffix") !== null) {
          suffix = c.getAttribute("suffix");
        } else {
          suffix = "";
        }
        let newId = prefix + (x + 1) + suffix;
        c.setAttribute("id", newId);
      }
    }
  }
}

function appendRow(pDiv, idDiv, lNo) {
  let parentDiv = document.getElementById(pDiv);
  let tempTable = parentDiv.getElementsByTagName("tr");
  let numberOfForms = [];
  for (let x = 0; x < tempTable.length; x++) {
    if (
      tempTable[x].hasAttribute("id") &&
      !tempTable[x].hasAttribute("child")
    ) {
      numberOfForms.push(tempTable[x]);
    }
  }
  let suffix = numberOfForms.length + 1;
  let clone = numberOfForms[0].cloneNode(true);
  //Set radio button ids and names before appending it to child to prevent loss of data
  let selectInputs = clone.getElementsByTagName("input");
  for (let select of selectInputs) {
    newId = buildId(select, suffix);
    clone
      .querySelector("input[type=radio][id=" + select.id + "]")
      .setAttribute("name", checkID(select.getAttribute("name")) + suffix);
    clone
      .querySelector("input[type=radio][id=" + select.id + "]")
      .setAttribute("id", newId);
    jsonData[newId] = "";
  }

  let preffix = checkID(idDiv);
  clone.id = preffix + suffix;

  parentDiv.appendChild(clone);
  if (lNo !== undefined) {
    tempP = checkID(clone.querySelector(lNo).innerHTML);
    clone.querySelector(lNo).innerHTML = tempP + suffix;
  }
  insertChangeId(clone, suffix);
}

function ST() {
  let allst = document.querySelectorAll(`[group="st"]`);

  for (let st of allst) {
    st.value = "ST";
  }
}

function removeError(parent, prefix) {
  let childCount = document.getElementById(parent).childElementCount;
  let fields = document.querySelectorAll(`[prefix='${prefix}']`);
  if (childCount > 1) {
    fields[fields.length - 1].removeAttribute("data-invalid");
    fields[fields.length - 1].removeAttribute("data-invalid-message");
  }
}

function removeRow(buttonId, id, pDiv, parentType, lNo) {
  childId = checkID(id) + getId(buttonId);
  let parentDiv = document.getElementById(pDiv);
  let tempTable = parentDiv.getElementsByTagName(parentType);
  let numberOfForms = [];
  for (let x = 0; x < tempTable.length; x++) {
    if (
      tempTable[x].hasAttribute("id") &&
      !tempTable[x].hasAttribute("child")
    ) {
      numberOfForms.push(tempTable[x]);
    }
  }
  if (numberOfForms.length > 1) {
    document.getElementById(pDiv).removeChild(document.getElementById(childId));
    removeChangeId(pDiv, lNo, parentType);
  }
}

function SelectedNav(element) {
  let selected = document.querySelectorAll(`cn2-nav-button`);
  let page1 = document.querySelector(`[target="page1"]`);

  for (selectedTarget of selected) {
    if (selectedTarget.hasAttribute("Selected")) {
      selectedTarget.setAttribute("Selectednav", "");
    } else if (!selectedTarget.hasAttribute("Selected")) {
      page1.setAttribute("Selectednav", "");
    } else {
      selectedTarget.removeAttribute("Selectednav");
    }
  }
}

function form_page_transition_validation(triggerElement) {
  let selectedMenu = document.querySelector(`cn2-nav-button[Selectednav]`);
  let selectedPage = selectedMenu.getAttribute("target");
  let selectedPageNum = selectedMenu.getAttribute("page-number");

  let tempPage = triggerElement.getAttribute("target-page");
  let targetPageNum = document
    .querySelector(`cn2-nav-button[target="${tempPage}"]`)
    .getAttribute("page-number");

  if (selectedPageNum <= 2 && targetPageNum > 2) {
    let targetSelect = document.getElementById("Submission_Type10");
    if (targetSelect.value == "") {
      showMessage(
        "Please select Submission Type first to proceed to next page."
      );
      return false;
    }
  }
  if (selectedPageNum <= 3 && targetPageNum > 3) {
    let validated1 = false;
    let validated2 = false;

    let targetCheckboxGroup1 = [
      document.getElementById("DeclByQP_NoInstrumentExceedingAL_WSL10"),
      document.getElementById("DeclByQP_InstrumentExceedingAL10"),
      document.getElementById("DeclByQP_InstrumentExceedingWSL10"),
      document.getElementById("DeclByQP_NoBldgAffected10"),
      document.getElementById("DeclByQP_Damage_Highlighted_In_Report10"),
    ];

    let targetCheckboxGroup2 = [
      document.getElementById("DeclByQP_Works_Has_Been_Completed10"),
      document.getElementById("DeclByQP_Works_Has_Not_Commenced10"),
    ];

    for (let checkbox of targetCheckboxGroup1) {
      if (checkbox.checked) {
        validated1 = true;
      }
    }

    for (let checkbox of targetCheckboxGroup2) {
      if (checkbox.checked) {
        validated2 = true;
      }
    }

    if (!validated1) {
      showMessage(
        "Please select at least 1 from item 1 to 5 under Declaration section first to proceed to next page."
      );
      return false;
    } else if (!validated2) {
      showMessage(
        "Please select at least 1 from item 6 to 7 under Declaration section first to proceed to next page."
      );
      return false;
    }
  }

  if (selectedPageNum <= 4 && targetPageNum > 4) {
    let submissionType = document.getElementById("Submission_Type10").value;

    if (submissionType == "GBW") {
      let validated1 = false;
      let validated2 = false;

      let targetCheckboxGroup1 = [
        document.getElementById("DeclByQPGeo_NoInstrumentExceedingAL_WSL10"),
        document.getElementById("DeclByQPGeo_InstrumentExceedingAL10"),
        document.getElementById("DeclByQPGeo_InstrumentExceedingWSL10"),
        document.getElementById("DeclByQPGeo_NoBldgAffected10"),
        document.getElementById("DeclByQPGeo_Damage_Highlighted_In_Report10"),
      ];

      let targetCheckboxGroup2 = [
        document.getElementById("DeclByQPGeo_Works_Has_Been_Completed10"),
        document.getElementById("DeclByQPGeo_Works_Has_Not_Commenced10"),
      ];

      for (let checkbox of targetCheckboxGroup1) {
        if (checkbox.checked) {
          validated1 = true;
        }
      }

      for (let checkbox of targetCheckboxGroup2) {
        if (checkbox.checked) {
          validated2 = true;
        }
      }

      if (!validated1) {
        showMessage(
          "Please select at least 1 from item 1 to 5 under Declaration section first to proceed to next page."
        );
        return false;
      } else if (!validated2) {
        showMessage(
          "Please select at least 1 from item 6 to 7 under Declaration section first to proceed to next page."
        );
        return false;
      }
    }
  }

  return true;
}

function Submission_Type10_change(element) {
  let val = element.value;

  let nav4 = document.querySelector(`[target="page4"]`);
  let nav5 = document.querySelector(`[target="page5"]`);
  let nav6a = document.querySelector(`[target="page6_1"]`);
  let nav6b = document.querySelector(`[target="page6_2"]`);
  let nav7a = document.querySelector(`[target="page7_1"]`);
  let nav7b = document.querySelector(`[target="page7_2"]`);

  let obj = gbwCheck();

  let partGeoValidCheck = obj.valid;
  let checkedNo = obj.checkedVal;

  jsonData["FormName10"] = (document.title + "-" + val).toUpperCase();

  switch (val) {
    case "GBW": {
      // show particulars of GEO nav and enable the fields
      nav4.removeAttribute("hidden");
      partAndDecQpGeoSuper("show");

      // reset all fields of non-GBW
      nonGbwAssesReportA("hide");
      nonGbwAssesReportB("hide");

      nav5.setAttribute("page-number", "5");
      nav6b.setAttribute("hidden", "");
      nav7b.setAttribute("hidden", "");

      if (partGeoValidCheck) {
        if (checkedNo === "1" || checkedNo === "2") {
          nav6a.setAttribute("hidden", "");
          nav7a.setAttribute("hidden", "");
          instruMonitoring("hide");
          gbwAssesReportA("hide", true, true);
          gbwAssesReportB("hide");
        } else if (checkedNo === "3") {
          nav6a.removeAttribute("hidden");
          nav7a.setAttribute("hidden", "");
          instruMonitoring("show");
          gbwAssesReportA("show", false, true);
          gbwAssesReportB("hide");
        } else if (checkedNo === "4" || checkedNo === "5") {
          nav6a.removeAttribute("hidden");
          nav7a.removeAttribute("hidden");
          instruMonitoring("show");
          gbwAssesReportA("show", true, false);
          gbwAssesReportB("show");
        }
      }
      break;
    }
    case "non-GBW": {
      // hide particulars of GEO nav and disable the fields
      nav4.setAttribute("hidden", "");
      partAndDecQpGeoSuper("hide");

      // reset all fields of GBW
      gbwAssesReportA("hide");
      gbwAssesReportB("hide");

      nav5.setAttribute("page-number", "4");
      nav6b.setAttribute("page-number", "5");
      nav7b.setAttribute("page-number", "6");
      nav6a.setAttribute("hidden", "");
      nav7a.setAttribute("hidden", "");

      if (partGeoValidCheck) {
        if (checkedNo === "1" || checkedNo === "2") {
          nav6b.setAttribute("hidden", "");
          nav7b.setAttribute("hidden", "");
          instruMonitoring("hide");
          nonGbwAssesReportA("hide", true, true);
          nonGbwAssesReportB("hide");
        } else if (checkedNo === "3") {
          nav6b.removeAttribute("hidden");
          nav7b.setAttribute("hidden", "");
          instruMonitoring("show");
          nonGbwAssesReportA("show", false, true);
          nonGbwAssesReportB("hide");
        } else if (checkedNo === "4" || checkedNo === "5") {
          nav6b.removeAttribute("hidden");
          nav7b.removeAttribute("hidden");
          instruMonitoring("show");
          nonGbwAssesReportA("show", true, false);
          nonGbwAssesReportB("show");
        }
      }
      break;
    }
  }
}

// This function will check the Geo Declaration before enabling the pages,
// this is to keep the fields align with the logic - royette.v
function gbwCheck() {
  let retObj = { valid: false, checkedVal: null };

  let chk1 = document.getElementById("DeclByQP_NoInstrumentExceedingAL_WSL10");
  let chk2 = document.getElementById("DeclByQP_InstrumentExceedingAL10");
  let chk3 = document.getElementById("DeclByQP_InstrumentExceedingWSL10");
  let chk4 = document.getElementById("DeclByQP_NoBldgAffected10");
  let chk5 = document.getElementById("DeclByQP_Damage_Highlighted_In_Report10");

  if (chk1.checked || chk2.checked) {
    retObj.valid = true;
    retObj.checkedVal = chk1.checked ? "1" : "2";
    return retObj;
  }

  if (chk3.checked) {
    retObj.valid = true;
    retObj.checkedVal = "3";
    return retObj;
  }

  if (chk4.checked || chk5.checked) {
    retObj.valid = true;
    retObj.checkedVal = chk4.checked ? "4" : "5";
    return retObj;
  }
  return retObj;
}

function applyDate(element) {
  let targetValue = element.value;

  let inputGroup = [
    document.getElementById("For_The_Month_QP10"),
    document.getElementById("For_The_Month_QP_Geo10"),
  ];

  jsonData["For_The_Month_QP10"] = targetValue;
  jsonData["For_The_Month_QP_Geo10"] = targetValue;

  for (let input of inputGroup) {
    input.value = targetValue;
  }
}

function For_The_Year10_change(element) {
  let targetValue = element.value;

  let inputGroup = [
    document.getElementById("For_The_Year_QP10"),
    document.getElementById("For_The_Year_QP_Geo10"),
  ];

  for (let input of inputGroup) {
    input.value = targetValue;
  }
}

function declaration_QP_change(element) {
  let chk1 = document.getElementById("DeclByQP_NoInstrumentExceedingAL_WSL10");
  let chk2 = document.getElementById("DeclByQP_InstrumentExceedingAL10");
  let chk3 = document.getElementById("DeclByQP_InstrumentExceedingWSL10");
  let chk4 = document.getElementById("DeclByQP_NoBldgAffected10");
  let chk5 = document.getElementById("DeclByQP_Damage_Highlighted_In_Report10");
  let chk6 = document.getElementById("DeclByQP_Works_Has_Been_Completed10");
  let chk7 = document.getElementById("DeclByQP_Works_Has_Not_Commenced10");

  let nav6a = document.querySelector(`[target="page6_1"]`);
  let nav6b = document.querySelector(`[target="page6_2"]`);
  let nav7a = document.querySelector(`[target="page7_1"]`);
  let nav7b = document.querySelector(`[target="page7_2"]`);

  let submType = document.getElementById("Submission_Type10").value;

  nav6a.setAttribute("hidden", "");
  nav6b.setAttribute("hidden", "");
  nav7a.setAttribute("hidden", "");
  nav7b.setAttribute("hidden", "");

  if (chk1.checked || chk2.checked) {
    chk3.checked = false;
    chk3.setAttribute("disabled", "");
    chk4.checked = false;
    chk4.setAttribute("disabled", "");
    chk5.checked = false;
    chk5.setAttribute("disabled", "");

    if (submType === "GBW") {
      nav6a.setAttribute("hidden", "");
      nav7a.setAttribute("hidden", "");
      instruMonitoring("hide");
      gbwAssesReportA("hide", true, true);
      gbwAssesReportB("hide");
    } else if (submType === "non-GBW") {
      nav6b.setAttribute("hidden", "");
      nav7b.setAttribute("hidden", "");
      instruMonitoring("hide");
      nonGbwAssesReportA("hide", true, true);
      nonGbwAssesReportB("hide");
    }
  } else if (chk3.checked) {
    chk1.checked = false;
    chk1.setAttribute("disabled", "");
    chk2.checked = false;
    chk2.setAttribute("disabled", "");
    chk4.checked = false;
    chk4.setAttribute("disabled", "");
    chk5.checked = false;
    chk5.setAttribute("disabled", "");

    if (submType === "GBW") {
      nav6a.removeAttribute("hidden");
      nav7a.setAttribute("hidden", "");
      instruMonitoring("show");
      gbwAssesReportA("show", false, true);
      gbwAssesReportB("hide");
    } else if (submType === "non-GBW") {
      nav6b.removeAttribute("hidden");
      nav7b.setAttribute("hidden", "");
      instruMonitoring("show");
      nonGbwAssesReportA("show", false, true);
      nonGbwAssesReportB("hide");
    }
  } else if (chk4.checked || chk5.checked) {
    chk1.checked = false;
    chk1.setAttribute("disabled", "");
    chk2.checked = false;
    chk2.setAttribute("disabled", "");
    chk3.checked = false;
    chk3.setAttribute("disabled", "");

    if (submType === "GBW") {
      nav6a.removeAttribute("hidden");
      nav7a.removeAttribute("hidden");
      instruMonitoring("show");
      gbwAssesReportA("show", true, false);
      gbwAssesReportB("show");
    } else if (submType === "non-GBW") {
      nav6b.removeAttribute("hidden");
      nav7b.removeAttribute("hidden");
      instruMonitoring("show");
      nonGbwAssesReportA("show", true, false);
      nonGbwAssesReportB("show");
    }
  } else {
    nav6a.setAttribute("hidden", "");
    gbwAssesReportA("hide");
    nav7a.setAttribute("hidden", "");
    gbwAssesReportB("hide");
    nav6b.setAttribute("hidden", "");
    nonGbwAssesReportA("hide");
    nav7b.setAttribute("hidden", "");
    nonGbwAssesReportB("hide");
    chk1.removeAttribute("disabled");
    chk2.removeAttribute("disabled");
    chk3.removeAttribute("disabled");
    chk4.removeAttribute("disabled");
    chk5.removeAttribute("disabled");
  }

  if (chk6.checked) {
    chk7.checked = false;
    chk7.setAttribute("disabled", "");
  } else if (chk7.checked) {
    chk6.checked = false;
    chk6.setAttribute("disabled", "");
  } else {
    chk6.removeAttribute("disabled");
    chk7.removeAttribute("disabled");
  }
}

function declaration_QPGeo_change(element) {
  let refId = element.id;

  let checkbox1 = document.getElementById(
    "DeclByQPGeo_NoInstrumentExceedingAL_WSL10"
  );
  let checkbox2 = document.getElementById(
    "DeclByQPGeo_InstrumentExceedingAL10"
  );
  let checkbox3 = document.getElementById(
    "DeclByQPGeo_InstrumentExceedingWSL10"
  );
  let checkbox4 = document.getElementById("DeclByQPGeo_NoBldgAffected10");
  let checkbox5 = document.getElementById(
    "DeclByQPGeo_Damage_Highlighted_In_Report10"
  );
  let checkbox6 = document.getElementById(
    "DeclByQPGeo_Works_Has_Been_Completed10"
  );
  let checkbox7 = document.getElementById(
    "DeclByQPGeo_Works_Has_Not_Commenced10"
  );

  let submissionType = document.getElementById("Submission_Type10").value;

  if (
    refId == "DeclByQPGeo_NoInstrumentExceedingAL_WSL10" ||
    refId == "DeclByQPGeo_InstrumentExceedingAL10"
  ) {
    if (checkbox1.checked || checkbox2.checked) {
      checkbox3.setAttribute("disabled", "");
      checkbox4.setAttribute("disabled", "");
      checkbox5.setAttribute("disabled", "");
    } else {
      checkbox3.removeAttribute("disabled");
      checkbox4.removeAttribute("disabled");
      checkbox5.removeAttribute("disabled");
    }
  } else if (refId == "DeclByQPGeo_InstrumentExceedingWSL10") {
    if (checkbox3.checked) {
      checkbox1.setAttribute("disabled", "");
      checkbox2.setAttribute("disabled", "");
      checkbox4.setAttribute("disabled", "");
      checkbox5.setAttribute("disabled", "");
    } else {
      checkbox1.removeAttribute("disabled");
      checkbox2.removeAttribute("disabled");
      checkbox4.removeAttribute("disabled");
      checkbox5.removeAttribute("disabled");
    }
  } else if (
    refId == "DeclByQPGeo_NoBldgAffected10" ||
    refId == "DeclByQPGeo_Damage_Highlighted_In_Report10"
  ) {
    if (checkbox4.checked || checkbox5.checked) {
      checkbox1.setAttribute("disabled", "");
      checkbox2.setAttribute("disabled", "");
      checkbox3.setAttribute("disabled", "");
    } else {
      checkbox1.removeAttribute("disabled");
      checkbox2.removeAttribute("disabled");
      checkbox3.removeAttribute("disabled");
    }
  } else if (refId == "DeclByQPGeo_Works_Has_Been_Completed10") {
    if (checkbox6.checked) {
      checkbox7.setAttribute("disabled", "");
    } else {
      checkbox7.removeAttribute("disabled");
    }
  } else if (refId == "DeclByQPGeo_Works_Has_Not_Commenced10") {
    if (checkbox7.checked) {
      checkbox6.setAttribute("disabled", "");
    } else {
      checkbox6.removeAttribute("disabled");
    }
  }
}

function a1QpdQpgeo_change(element) {
  let refId = element.id;

  let select = document.getElementById("DeclGBW_WillOrWillNot10");

  switch (refId) {
    case "DeclGBW_NoChanToThe10":
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    default:
      select.value = "";
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      break;
  }
}

function DeclGBW_QPDesi10_change(element) {
  let select = document.getElementById("Member_Member_Name_QP10");
  let aste = document.getElementById("Member_Member_Name_QP10_aste");
  let sid = document.getElementById("Member_Member_SID_QP10");
  let input = document.getElementById("MemberRole_Professional_No_QP10");

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
    aste.innerHTML = "*";
    sid.value = "";
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    sid.value = "";
    aste.innerHTML = "";
  }
}

function DeclGBW_QPGEODesi10_change(element) {
  let select = document.getElementById("Member_Member_Name_HDBPE30");
  let aste = document.getElementById("Member_Member_Name_HDBPE30_label");
  let input = document.getElementById("MemberRole_Professional_No_HDBPE30");
  let sid = document.getElementById("Member_Member_SID_HDBPE30");

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
    aste.innerHTML = "*";
    sid.value = "";
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    aste.innerHTML = "";
    sid.value = "";
  }
}

function DeclGBW_AC10_aste() {
  let c1 = document.getElementById("DeclGBW_AC10");
  let c2 = document.getElementById("DeclGBW_ACGeo10");
  let c1Aste = document.getElementById("DeclGBW_AC10_change_aste");
  let c2Aste = document.getElementById("DeclGBW_ACGeo10_change_aste");
  let aste = document.getElementById("DeclGBW_AcGeo_HasBeenIs10_aste");

  if (c1.checked || c2.checked) {
    aste.innerHTML = "*";
  } else {
    aste.innerHTML = "";
  }

  if (c1.checked) {
    c1Aste.innerHTML = "*";
  } else {
    c1Aste.innerHTML = "";
  }

  if (c2.checked) {
    c2Aste.innerHTML = "*";
  } else {
    c2Aste.innerHTML = "";
  }
}

function DeclGBW_AC10_change(element) {
  let select = document.getElementById("Member_Member_Name_AC10");
  let input = document.getElementById("MemberRole_Professional_No_AC10");
  let sid = document.getElementById("Member_Member_SID_AC10");
  let acGeoCheckbox = document.getElementById("DeclGBW_ACGeo10");

  let gbwSec4SelectGroup = [
    document.getElementById("DeclGBW_AcGeo_HasBeenIs10"),
    document.getElementById("DeclGBW_AcGeo_IsWillBe10"),
    document.getElementById("DeclGBW_AcGeo_HasBeenWillBe10"),
  ];

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    sid.value = "";
  }

  if (element.checked || acGeoCheckbox.checked) {
    for (let select of gbwSec4SelectGroup) {
      select.setAttribute("mandatory", "");
      select.removeAttribute("disabled");
    }
  } else {
    for (let select of gbwSec4SelectGroup) {
      select.value = "";
      select.removeAttribute("mandatory");
      select.setAttribute("disabled", "");
    }
  }
  DeclGBW_AC10_aste();
}

function DeclGBW_ACGeo10_change(element) {
  let select = document.getElementById("Member_Member_Name_AC30");
  let input = document.getElementById("MemberRole_Professional_No_AC30");
  let sid = document.getElementById("Member_Member_SID_AC30");
  let acCheckbox = document.getElementById("DeclGBW_AC10");

  let gbwSec4SelectGroup = [
    document.getElementById("DeclGBW_AcGeo_HasBeenIs10"),
    document.getElementById("DeclGBW_AcGeo_IsWillBe10"),
    document.getElementById("DeclGBW_AcGeo_HasBeenWillBe10"),
  ];

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    sid.value = "";
  }

  if (element.checked || acCheckbox.checked) {
    for (let select of gbwSec4SelectGroup) {
      select.setAttribute("mandatory", "");
      select.removeAttribute("disabled");
    }
  } else {
    for (let select of gbwSec4SelectGroup) {
      select.value = "";
      select.removeAttribute("mandatory");
      select.setAttribute("disabled", "");
    }
  }
  DeclGBW_AC10_aste();
}

function a1Qpd_change(element) {
  let refId = element.id;

  let select = document.getElementById("DeclNonGBW_WillOrWillNot10");

  switch (refId) {
    case "DeclNonGBW_NoChanToThe10":
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      break;
    default:
      select.value = "";
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      break;
  }
}

function DeclNonGBW_QPDesi10_change(element) {
  let select = document.getElementById("Member_Member_Name_QP20");
  let input = document.getElementById("MemberRole_Professional_No_QP20");
  let sid = document.getElementById("Member_Member_SID_QP20");
  let aste = document.getElementById("Member_Member_Name_QP20_aste");

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
    aste.innerHTML = "*";
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    aste.innerHTML = "";
    sid.value = "";
  }
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function DeclNonGBW_AC10_change(element) {
  let select = document.getElementById("Member_Member_Name_AC20");
  let input = document.getElementById("MemberRole_Professional_No_AC20");
  let sec4Non = document.getElementById("sec4Non");
  let aste = document.getElementById("DeclNonGBW_AC10_change_aste");
  let sid = document.getElementById("Member_Member_SID_AC20");

  let nongbwSec4SelectGroup = [
    document.getElementById("DeclNonGBW_AcGeo_HasBeenIs10"),
    document.getElementById("DeclNonGBW_AcGeo_IsWillBe10"),
    document.getElementById("DeclNonGBW_AcGeo_HasBeenWillBe10"),
  ];

  if (element.checked) {
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
    sec4Non.innerHTML = "*";
    aste.innerHTML = "*";
    sec4Non.innerHTML = "*";

    for (let select of nongbwSec4SelectGroup) {
      select.value = "";
      select.setAttribute("mandatory", "");
      select.removeAttribute("disabled");
    }
  } else {
    select.value = "";
    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    input.value = "";
    sec4Non.innerHTML = "";
    aste.innerHTML = "";
    sid.value = "";

    for (let select of nongbwSec4SelectGroup) {
      select.value = "";
      select.removeAttribute("mandatory");
      select.setAttribute("disabled", "");
    }
  }
}

function disableDelete(containerName) {
  let deleteBtns = document.querySelectorAll(`[group="stDelete"]`);
  let deleteBtn = document.querySelector(`[group="stDelete"]`);
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    deleteBtn.setAttribute("disabled", "");
  } else {
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function disDelete(containerName, deleteid) {
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

function adjustNumber(element, lengthToAdjust) {
  let el = document.getElementById(element.id);
  let value = element.value;

  if (value == "0" || value == "00" || value == "000") {
    el.setAttribute("data-invalid", "");
    el.setAttribute(
      "data-invalid-message",
      'Plan Type should not be "000" Please try again'
    );
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

function remoMand(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function ToAgency_id_change(el) {
  let address = document.getElementById("Addr20");

  if (el.value == "BCA") {
    address.value =
      "Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550\nWebsite: http://www.bca.gov.sg";
  } else if (el.value == "DSTA") {
    address.value =
      "Defence Science & Technology Agency\nBuilding & Infrastructure \n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
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

// functions below are respponsible for disabling/enabling pages - royette.v
function partAndDecQpGeoSuper(state) {
  let fieldGroup = [
    document.getElementById("Member_Member_Name_HDBPE20"),
    document.getElementById("MemberRole_Professional_No_HDBPE20"),
    document.getElementById("Member_Firm_Name_HDBPE20"),
    document.getElementById("Members_UEN_HDBPE20"),
    document.getElementById("Members_Designation_HDBPE20"),
    document.getElementById("Member_Address_HDBPE20"),
    document.getElementById("Member_Tel_No_HDBPE20"),
    document.getElementById("Member_Mobile_No_HDBPE20"),
    document.getElementById("Member_Email_Address1_HDBPE20"),
    document.getElementById("For_The_Month_QP_Geo10"),
    document.getElementById("For_The_Year_QP_Geo10"),
  ];

  let checkboxGroup = [
    document.getElementById("DeclByQPGeo_NoInstrumentExceedingAL_WSL10"),
    document.getElementById("DeclByQPGeo_InstrumentExceedingAL10"),
    document.getElementById("DeclByQPGeo_InstrumentExceedingWSL10"),
    document.getElementById("DeclByQPGeo_NoBldgAffected10"),
    document.getElementById("DeclByQPGeo_Damage_Highlighted_In_Report10"),
    document.getElementById("DeclByQPGeo_Works_Has_Been_Completed10"),
    document.getElementById("DeclByQPGeo_Works_Has_Not_Commenced10"),
  ];

  if (state === "hide") {
    for (let field of fieldGroup) {
      if (field.id === "Member_Member_Name_HDBPE20") {
        field.removeAttribute("mandatory");
      }
      if (field.id === "Members_UEN_HDBPE20") {
        field.removeAttribute("data-invalid");
        field.removeAttribute("data-invalid-message");
      }
      field.value = "";
    }

    for (let check of checkboxGroup) {
      check.checked = false;
      check.removeAttribute("mandatory");
      check.setAttribute("disabled", "");
    }
  } else if (state === "show") {
    for (let field of fieldGroup) {
      if (field.id === "Member_Member_Name_HDBPE20") {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      if (field.id === "Members_UEN_HDBPE20") {
        field.removeAttribute("disabled");
      }
    }

    for (let check of checkboxGroup) {
      check.checked = false;
      check.removeAttribute("disabled");
    }
  }
}

function instruMonitoring(state) {
  let inputMandatoryGroup = [
    document.querySelectorAll("[prefix='Ground_Monitoring_Instr_Ref']"),
    document.querySelectorAll("[prefix='Ground_Monitoring_Curr_Reading']"),
    document.querySelectorAll("[prefix='Ground_Monitoring_AL']"),
    document.querySelectorAll("[prefix='Ground_Monitoring_WSL']"),
    document.querySelectorAll("[prefix='Ground_Monitoring_Date_Of_Reading']"),
    document.querySelectorAll("[prefix='Ground_Monitoring_Remarks']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_Instr_Ref']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_Curr_Reading']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_AL']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_WSL']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_Date_Of_Reading']"),
    document.querySelectorAll("[prefix='Bldg_Monitoring_Remarks']"),
  ];

  let inputGroup = [
    document.querySelectorAll("[prefix='Damage_Bldg_Name']"),
    document.querySelectorAll("[prefix='Damage_Bldg_Desc']"),
    document.querySelectorAll("[prefix='Damage_Bldg_Remarks']"),
  ];

  let addButtonGroup = [
    document.getElementById("addA10"),
    document.getElementById("addB10"),
    document.getElementById("addC10"),
  ];

  let deleteButtonGroup = [
    document.querySelectorAll("[prefix='deleteA']"),
    document.querySelectorAll("[prefix='deleteB']"),
    document.querySelectorAll("[prefix='deleteC']"),
  ];

  let switchGroup = [
    document.querySelectorAll("[prefix='Ground_AL_Exceeded']"),
    document.querySelectorAll("[prefix='Ground_WSL_Exceeded']"),
    document.querySelectorAll("[prefix='Bldg_AL_Exceeded']"),
    document.querySelectorAll("[prefix='Bldg_WSL_Exceeded']"),
  ];

  let qpSuper = document.querySelectorAll(`[group="qpSuper"]`);

  if (state === "hide") {
    // Reset all the Table
    let formField = document.querySelectorAll(".B1");
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        formField[i].parentNode.removeChild(formField[i]);
      }
    }

    let formField2 = document.querySelectorAll(".C1");
    for (let i = 0; i < formField2.length; i++) {
      if (i != 0) {
        formField2[i].parentNode.removeChild(formField2[i]);
      }
    }

    let formFields3 = document.querySelectorAll("[prefix='deleteC']");
    for (let deleteButton of formFields3) {
      if (deleteButton.id != "deleteC10") {
        removeRow(deleteButton.id, "D1", "buildingDamForm", "tr");
      }
    }

    // Reset all the Fields & Buttons
    for (let target of qpSuper) {
      target.innerHTML = "";
    }

    for (let inputs of inputMandatoryGroup) {
      for (let input of inputs) {
        input.setAttribute("disabled", "");
        input.removeAttribute("mandatory");
        input.value = "";
      }
    }

    for (let switchButtons of switchGroup) {
      for (let switchButton of switchButtons) {
        switchButton.setAttribute("disabled", "");
        switchButton.removeAttribute("mandatory");
        switchButton.checked = false;
      }
    }

    for (let inputs of inputGroup) {
      for (let input of inputs) {
        input.setAttribute("disabled", "");
        input.removeAttribute("mandatory");
        input.value = "";
      }
    }

    for (let addBtn of addButtonGroup) {
      addBtn.setAttribute("disabled", "");
    }

    for (deleteBtn of deleteButtonGroup) {
      for (deleteButton of deleteBtn) {
        deleteButton.setAttribute("disabled", "");
      }
    }
  } else if (state === "show") {
    for (let target of qpSuper) {
      target.innerHTML = "";
    }

    // let no3 = document.getElementById("Site_Has_Been_Inspected10");
    // no3.removeAttribute("mandatory");
    // no3.removeAttribute("checked");

    for (let inputs of inputMandatoryGroup) {
      for (let input of inputs) {
        input.removeAttribute("disabled");
        input.setAttribute("mandatory", "");
        input.value = "";
      }
    }

    for (let switchButtons of switchGroup) {
      for (let switchButton of switchButtons) {
        switchButton.removeAttribute("disabled");
        switchButton.setAttribute("mandatory", "");
        switchButton.checked = false;
      }
    }

    for (let inputs of inputGroup) {
      for (let input of inputs) {
        input.removeAttribute("disabled");
        input.value = "";
      }
    }

    for (let addBtn of addButtonGroup) {
      addBtn.removeAttribute("disabled");
    }
  }
}

function gbwAssesReportA(state, disableA1, disableA2) {
  // A1 Fields
  let radioGroup = [
    document.getElementById("DeclGBW_NoChanToThe10"),
    document.getElementById("DeclGBW_ChanToTheAppr10"),
  ];

  // A2 Fields
  let inputGroup = [
    document.getElementById("DeclGBW_HasBeenHasIs10"),
    document.getElementById("DeclGBW_IsBeWillBe10"),
    document.getElementById("DeclGBW_HasBeenWillBe10"),
    document.getElementById("DeclGBW_Date10"),
  ];

  let checkGroup = [
    document.getElementById("DeclGBW_QPDesi10"),
    document.getElementById("DeclGBW_QPGEODesi10"),
  ];

  let gbwSecAste = document.getElementById("gbwSecAste");

  let memberList = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("Member_Member_Name_HDBPE30"),
    document.getElementById("MemberRole_Professional_No_QP10"),
    document.getElementById("MemberRole_Professional_No_HDBPE30"),
  ];

  if (state === "show") {
    gbwSecAste.innerHTML = "*";

    // A2 Section
    if (!disableA2) {
      for (let listGrp of inputGroup) {
        listGrp.removeAttribute("disabled");
        listGrp.setAttribute("mandatory", "");
      }

      for (let checkGrp of checkGroup) {
        checkGrp.removeAttribute("disabled");
      }
    } else {
      for (let listGrp of inputGroup) {
        listGrp.setAttribute("disabled", "");
        listGrp.removeAttribute("mandatory");
        listGrp.value = "";
      }

      for (let checkGrp of checkGroup) {
        checkGrp.setAttribute("disabled", "");
        checkGrp.checked = false;
      }

      for (let mmbr of memberList) {
        mmbr.setAttribute("disabled", "");
        mmbr.removeAttribute("mandatory");
        mmbr.value = "";
      }
    }

    // A1 Section
    if (!disableA1) {
      for (let radioGrp of radioGroup) {
        radioGrp.removeAttribute("disabled");
        radioGrp.setAttribute("mandatory", "");
      }
    } else {
      for (let radioGrp of radioGroup) {
        radioGrp.setAttribute("disabled", "");
        radioGrp.removeAttribute("mandatory");
        radioGrp.checked = false;
        let bldrClause = document.getElementById("DeclGBW_WillOrWillNot10");
        bldrClause.removeAttribute("mandatory");
        bldrClause.setAttribute("disabled", "");
        bldrClause.value = "";
      }
    }
  } else if (state === "hide") {
    gbwSecAste.innerHTML = "";

    for (let listGrp of inputGroup) {
      listGrp.removeAttribute("mandatory");
      listGrp.setAttribute("disabled", "");
      listGrp.value = "";
    }

    for (let checkGrp of checkGroup) {
      checkGrp.setAttribute("disabled", "");
      checkGrp.checked = false;
    }

    for (let radioGrp of radioGroup) {
      radioGrp.removeAttribute("mandatory");
      radioGrp.setAttribute("disabled", "");
      radioGrp.checked = false;
    }

    document.getElementById("Member_Member_Name_QP10_aste").innerHTML = "";
    document.getElementById("Member_Member_Name_HDBPE30_label").innerHTML = "";

    let customFields = [
      document.getElementById("DeclGBW_WillOrWillNot10"),
      document.getElementById("Member_Member_Name_QP10"),
      document.getElementById("Member_Member_Name_HDBPE30"),
      document.getElementById("MemberRole_Professional_No_QP10"),
      document.getElementById("MemberRole_Professional_No_HDBPE30"),
    ];

    for (let custFields of customFields) {
      custFields.removeAttribute("mandatory");
      custFields.setAttribute("disabled", "");
      custFields.value = "";
    }
  }
}

function gbwAssesReportB(state) {
  let aste = document.getElementById("DeclGBW_AcGeo_HasBeenIs10_aste");

  let inputGroup = [
    document.getElementById("DeclGBW_AcGeo_HasBeenIs10"),
    document.getElementById("DeclGBW_AcGeo_IsWillBe10"),
    document.getElementById("DeclGBW_AcGeo_HasBeenWillBe10"),
  ];

  let checkGroup = [
    document.getElementById("DeclGBW_AC10"),
    document.getElementById("DeclGBW_ACGeo10"),
  ];

  let acQpGroup = [
    document.getElementById("Member_Member_Name_AC10"),
    document.getElementById("Member_Member_Name_AC30"),
    document.getElementById("MemberRole_Professional_No_AC10"),
    document.getElementById("MemberRole_Professional_No_AC30"),
  ];

  if (state === "show") {
    aste.innerHTML = "*";

    for (let chk of checkGroup) {
      chk.removeAttribute("disabled");
      chk.setAttribute("mandatory", "");
    }
  } else if (state === "hide") {
    aste.innerHTML = "";

    for (let inpt of inputGroup) {
      inpt.setAttribute("disabled", "");
      inpt.removeAttribute("mandatory");
      inpt.value = "";
    }

    for (let chk of checkGroup) {
      chk.setAttribute("disabled", "");
      chk.removeAttribute("mandatory");
      chk.checked = false;
    }

    for (let rog of acQpGroup) {
      rog.setAttribute("disabled", "");
      rog.removeAttribute("mandatory");
      rog.value = "";
    }
  }
}

function nonGbwAssesReportA(state, disableA1, disableA2) {
  // A1 Fields
  let radioGroup = [
    document.getElementById("DeclNonGBW_NoChanToThe10"),
    document.getElementById("DeclNonGBW_ChanToTheAppr10"),
  ];

  // A2 Fields
  let inputGroup = [
    document.getElementById("DeclNonGBW_HasBeenHasIs10"),
    document.getElementById("DeclNonGBW_IsBeWillBe10"),
    document.getElementById("DeclNonGBW_HasBeenWillBe10"),
    document.getElementById("DeclNonGBW_Date10"),
  ];

  let memberList = [
    document.getElementById("Member_Member_Name_QP20"),
    document.getElementById("MemberRole_Professional_No_QP20"),
  ];

  let checkGroup = [document.getElementById("DeclNonGBW_QPDesi10")];

  let aste = document.getElementById("SectionA2");

  if (state === "show") {
    aste.innerHTML = "*";

    if (!disableA2) {
      for (let listGrp of inputGroup) {
        listGrp.removeAttribute("disabled");
        listGrp.setAttribute("mandatory", "");
      }

      for (let checkGrp of checkGroup) {
        checkGrp.removeAttribute("disabled");
      }
    } else {
      for (let listGrp of inputGroup) {
        listGrp.setAttribute("disabled", "");
        listGrp.removeAttribute("mandatory");
        listGrp.value = "";
      }

      for (let checkGrp of checkGroup) {
        checkGrp.setAttribute("disabled", "");
        checkGrp.checked = false;
      }
    }

    if (!disableA1) {
      for (let radioGrp of radioGroup) {
        radioGrp.removeAttribute("disabled");
        radioGrp.setAttribute("mandatory", "");
      }
    } else {
      for (let radioGrp of radioGroup) {
        radioGrp.setAttribute("disabled", "");
        radioGrp.removeAttribute("mandatory");
        radioGrp.checked = false;
      }
    }

    for (let mmbr of memberList) {
      mmbr.removeAttribute("mandatory");
      mmbr.setAttribute("disabled", "");
      mmbr.value = "";

      let bldrClause = document.getElementById("DeclNonGBW_WillOrWillNot10");
      bldrClause.removeAttribute("mandatory");
      bldrClause.setAttribute("disabled", "");
      bldrClause.value = "";
    }
  } else if (state === "hide") {
    aste.innerHTML = "";

    for (let listGrp of inputGroup) {
      listGrp.removeAttribute("mandatory");
      listGrp.setAttribute("disabled", "");
      listGrp.value = "";
    }

    for (let checkGrp of checkGroup) {
      checkGrp.setAttribute("disabled", "");
      checkGrp.checked = false;
    }

    for (let radioGrp of radioGroup) {
      radioGrp.removeAttribute("mandatory");
      radioGrp.setAttribute("disabled", "");
      radioGrp.checked = false;
    }

    document.getElementById("Member_Member_Name_QP10_aste").innerHTML = "";
    document.getElementById("Member_Member_Name_HDBPE30_label").innerHTML = "";

    let customFields = [
      document.getElementById("DeclNonGBW_WillOrWillNot10"),
      document.getElementById("Member_Member_Name_QP20"),
      document.getElementById("MemberRole_Professional_No_QP20"),
    ];

    for (let custFields of customFields) {
      custFields.removeAttribute("mandatory");
      custFields.setAttribute("disabled", "");
      custFields.value = "";
    }
  }
}

function nonGbwAssesReportB(state) {
  let inputGroup = [
    document.getElementById("DeclNonGBW_AcGeo_HasBeenIs10"),
    document.getElementById("DeclNonGBW_AcGeo_IsWillBe10"),
    document.getElementById("DeclNonGBW_AcGeo_HasBeenWillBe10"),
  ];

  let checkGroup = [document.getElementById("DeclNonGBW_AC10")];

  let acQpGroup = [
    document.getElementById("Member_Member_Name_AC20"),
    document.getElementById("MemberRole_Professional_No_AC20"),
  ];

  let aste = document.getElementById("sec4Non");

  if (state === "show") {
    aste.innerHTML = "*";

    for (let chk of checkGroup) {
      chk.removeAttribute("disabled");
      chk.setAttribute("mandatory", "");
    }
  } else if (state === "hide") {
    aste.innerHTML = "";

    for (let inpt of inputGroup) {
      inpt.setAttribute("disabled", "");
      inpt.removeAttribute("mandatory");
      inpt.value = "";
    }

    for (let chk of checkGroup) {
      chk.setAttribute("disabled", "");
      chk.removeAttribute("mandatory");
      chk.checked = false;
    }

    for (let rog of acQpGroup) {
      rog.setAttribute("disabled", "");
      rog.removeAttribute("mandatory");
      rog.value = "";
    }
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

// override common functions
function saveFormDataToJson() {
  for (let [id, value] of Object.entries(jsonData)) {
    let targetElement = document.getElementById(id);
    if (targetElement) {
      switch (targetElement.tagName) {
        case "CN2-CHECKBOX":
        case "CN2-SWITCHBUTTON":
          if (
            [
              "Ground_AL_Exceeded10",
              "Ground_WSL_Exceeded10",
              "Bldg_AL_Exceeded10",
              "Bldg_WSL_Exceeded10",
            ].includes(id)
          ) {
            jsonData[id] =
              targetElement.checked || targetElement.checked == "on"
                ? "Yes"
                : "No";
          } else {
            jsonData[id] = targetElement.checked ? "on" : "off";
          }
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
              "PartOfAppl_StruPlanOfProjC10",
              "MemberRole_Professional_No_HDBPE10",
              "MemberRole_Professional_No_HDBPE20",
              //"MemberRole_Professional_No_HDBPE30",
            ].includes(id)
          ) {
            jsonData[id] = +targetElement.value + "";

          } else if(["MemberRole_Professional_No_HDBPE30"].includes(id)){
            if (targetElement.value == 0)
              jsonData[id] = "";
            else
              jsonData[id] = +targetElement.value + "";
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
