let isInspectionAllowed = false;

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  resetSubmCheck(true);
  PartOfAppl_ApplType10_change();
  formNameVersion("form__name", "form__version");

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let run = setTimeout(() => {
      let projRefNo =
        "projRefNo=" +
        document.getElementById("Project_Project_Ref_No10").value;
      let validateInspectionRequired = JSON.parse(
        ipcRenderer.sendSync(
          "client-request",
          "GET",
          jsonData["agencyUrl10"].url,
          projRefNo
        )
      );
      updateAgencyUrl("agencyUrl10", projRefNo);
      let getPlanTypePlanNumberMainBP = [];
      try {
        getPlanTypePlanNumberMainBP = JSON.parse(
          ipcRenderer.sendSync(
            "client-request",
            "GET",
            jsonData["agencyUrl20"].url,
            projRefNo
          )
        );
        updateAgencyUrl("agencyUrl20", projRefNo);
      } catch (e) {}
      let getDevelopmentType = [];
      try {
        getDevelopmentType = JSON.parse(
          ipcRenderer.sendSync(
            "client-request",
            "GET",
            jsonData["agencyUrl30"].url,
            ""
          )
        );
        updateAgencyUrl("agencyUrl30", "");
      } catch (e) {}

      if (!(validateInspectionRequired === 501)) {
        console.log("Webservice is triggered");
        isInspectionAllowed =
          validateInspectionRequired.isInspectionRequired == "Y" ? true : false;
      }

      if (
        typeof getPlanTypePlanNumberMainBP === "object" &&
        getPlanTypePlanNumberMainBP.length > 0
      ) {
        console.log("Webservice is triggered");
        convertTextboxToSelect("PartOfAppl_PlanType20");
        let targetEl = document.getElementById("PartOfAppl_PlanType10");
        let dropdownVal = [
          ...new Set(getPlanTypePlanNumberMainBP.map((i) => i.VALUE)),
        ];

        targetEl.removeAttribute("options");
        targetEl.setAttribute(
          "options",
          dropdownVal.map((i) => `${i}:${i}`).join(",")
        );
        targetEl.setAttribute(
          "event-change",
          targetEl.getAttribute("event-change") + `; populatePlanNo(this)`
        );
        for (let d of dropdownVal) {
          let values = getPlanTypePlanNumberMainBP
            .filter((i) => i.VALUE == d)
            .map((i) => i.key)
            .join(",");
          targetEl.setAttribute("plan-values-" + d.toLowerCase(), values);
        }

        document
          .getElementById("PartOfAppl_PlanType20")
          .removeAttribute("event-change");
      }

      if (
        typeof getDevelopmentType === "object" &&
        getDevelopmentType.length > 0
      ) {
        console.log("Webservice is triggered");
        let targetEl = document.querySelector("[building-usage-tbody]");
        targetEl.innerHTML = "";

        let perRow = getDevelopmentType.reduce(
          (acc, e, i) => (
            i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
          ),
          []
        );

        for (let row of perRow) {
          let tr = document.createElement("tr");
          for (let [i, val] of row.entries()) {
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");

            td1.setAttribute("class", "text-center align-middle");
            td2.setAttribute("class", "align-middle");

            td1.setAttribute("width", "30px");
            td2.setAttribute("style", "padding-top: 1px; padding-left: 0;");

            let field = document.createElement("cn2-checkbox");
            field.checked = false;
            field.setAttribute("id", val.key);
            jsonData[val.key] = false;
            field.setAttribute("name", "checkedOne");
            field.setAttribute("selectedBP", "");
            field.setAttribute("disabled", "");
            field.setAttribute("event-change", "atleastOne(this)");

            td1.appendChild(field);
            td2.innerHTML = val.VALUE;

            tr.appendChild(td1);
            tr.appendChild(td2);
          }

          targetEl.appendChild(tr);
        }
      }

      clearTimeout(run);
    }, 0);
  }
});

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

  jsonData[jsonKey]["url"] = hostname;
  jsonData[jsonKey]["params"] = query;
}

function showPage5() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let subNo = 1234;
  let developmentType = [
    ...document
      .querySelector("[building-usage-tbody]")
      .querySelectorAll("[id]"),
  ]
    .filter((el) => el.checked)
    .map((el) => el.id)
    .join(",");
  let SGFA = document.getElementById("SubmChec_ForGfaOf10").value;
  let NoOfBlock = "";

  let getInspectionDateList = JSON.parse(
    ipcRenderer.sendSync(
      "client-request",
      "GET",
      jsonData["agencyUrl40"].url,
      `projRefNo=${projRefNo}&subNo=${subNo}&developmentType=${developmentType}&SGFA=${SGFA}&NoOfBlock=${NoOfBlock}`
    )
  );
  updateAgencyUrl(
    "agencyUrl40",
    `projRefNo=${projRefNo}&subNo=${subNo}&developmentType=${developmentType}&SGFA=${SGFA}&NoOfBlock=${NoOfBlock}`
  );

  if (typeof getInspectionDateList === "object") {
    console.log("Webservice is triggered");
    if ("inspectionDate" in getInspectionDateList) {
      let dates = getInspectionDateList["inspectionDate"]
        .split(",")
        .map((i) => i.trim())
        .map((i) => `${i}:${i}`)
        .join(",");
      convertTextboxToSelect("BookInsp_InspDate106", () => {
        let el = document.getElementById("BookInsp_InspDate106");
        el.removeAttribute("options");
        el.setAttribute("options", dates);
        el.removeAttribute("onfocusout");
      });
    }
  }
}

function populatePlanNo(el) {
  let element = document.getElementById("PartOfAppl_PlanType20");
  let values = document
    .getElementById(el.id)
    .getAttribute("plan-values-" + el.value.toLowerCase())
    .split(",");

  element.setAttribute("options", values.map((i) => `${i}:${i}`).join(","));
  element.value = "";
  element.removeAttribute("mandatory");
  element.setAttribute("mandatory", "");
}

function convertTextboxToSelect(id, callback) {
  let select = document.getElementById(id);
  let attrs = {};
  for (
    var i = 0, atts = select.attributes, n = atts.length, arr = [];
    i < n;
    i++
  ) {
    attrs[atts[i].nodeName] = atts[i].nodeValue;
  }

  let text = document.createElement("cn2-select");
  for (let attr in attrs) {
    text.setAttribute(attr, attrs[attr]);
  }

  select.parentNode.replaceChild(text, select);

  if (typeof callback === "function") callback();
}

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function ToAgency_id_change(element) {
  let value = document.getElementById(element.id).value.trim();
  let textarea = document.getElementById("Addr20");
  if (value === "BCA") {
    textarea.value = `Commisioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550`;
    textarea.style.height = "110px";
  } else {
    textarea.value = `Defence Science & Technology Agency\nBuilding & Infrastructure \n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
    textarea.style.height = "137px";
  }
}
function PartOfAppl_DevtType10_change(element) {
  //let parent = document.getElementById("dvForm");
  //let selects = parent.querySelectorAll("cn2-select");
  let planType = document.getElementById("PartOfAppl_PlanType10");
  let textbox1 = document.getElementById("BookInsp_unitInsp10");
  let textbox2 = document.getElementById("BookInsp_BlocInsp10");
  let textbox3 = document.getElementById("BookInsp_AreaInsp10");
  let td1 = document.getElementById("BookInsp_unitInsp10_td");
  let td2 = document.getElementById("BookInsp_BlocInsp10_td");
  let td3 = document.getElementById("BookInsp_AreaInsp10_td");
  let rl = false;
  let nl = false;
  let ot = false;
  if (planType.valueLabel.trim() === "BP") {
    // for (let select of selects) {
    //   switch (select.valueLabel.trim()) {
    //     case "Residential (Landed)":
    //       rl = true;
    //       break;
    //     case "Residential (Non Landed)":
    //       nl = true;
    //       break;
    //     default:
    //       if (select.valueLabel.trim() !== "Please Select") {
    //         ot = true;
    //       }
    //       break;
    //   }
    // }
    if (rl) {
      textbox1.removeAttribute("disabled");
      textbox1.setAttribute("mandatory", "");
      td1.innerHTML = "No. of units to be inspected *";
    } else {
      textbox1.removeAttribute("mandatory");
      textbox1.setAttribute("disabled", "");
      textbox1.value = "";
      td1.innerHTML = "No. of units to be inspected";
    }
    if (nl) {
      textbox2.removeAttribute("disabled");
      textbox2.setAttribute("mandatory", "");
      td2.innerHTML = "No. of blocks to be inspected *";
    } else {
      textbox2.removeAttribute("mandatory");
      textbox2.setAttribute("disabled", "");
      textbox2.value = "";
      td2.innerHTML = "No. of blocks to be inspected";
    }
    if (ot) {
      textbox3.removeAttribute("disabled");
      textbox3.setAttribute("mandatory", "");
      td3.innerHTML = "Area to be inspected (sqm) *";
    } else {
      textbox3.removeAttribute("mandatory");
      textbox3.setAttribute("disabled", "");
      textbox3.value = "";
      td3.innerHTML = "Area to be inspected (sqm)";
    }
  }
}
function PartOfAppl_PlanTypeA10_change(element) {
  let select = document.getElementById(element.id);
  checkboxesBP(select.valueLabel);
  //let div = document.getElementById("devType");
  //let selectDev = document.getElementById("PartOfAppl_DevtType10");
  let contPers = document.getElementById("PartOfAppl_ContPers10");
  if (select.valueLabel === "BP") {
    //div.innerHTML = "Development Type *";
    //selectDev.setAttribute("mandatory", "");
    contPers.setAttribute("mandatory", "");
    contPers.removeAttribute("disabled");
  } else {
    contPers.setAttribute("disabled", "");
    contPers.removeAttribute("mandatory");
    contPers.value = "";
    //div.innerHTML = "Development Type";
    //selectDev.removeAttribute("mandatory");
  }
}

function checkboxesBP(element) {
  let checkboxes = document.querySelectorAll("[selectedBP]");
  let label = document.getElementById("PartOfAppl_ResiLabel");
  let label2 = document.getElementById("PartOfAppl_ContPers10Label");
  if (element == "BP") {
    for (let target of checkboxes) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
    label.innerHTML = "*";
    label2.innerHTML = "*";
  } else {
    for (let target of checkboxes) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.checked = false;
    }
    label.innerHTML = "";
    label2.innerHTML = "";
  }
}

function resetBookingInsp(pass) {
  let mandTextbox = document.getElementById("BookInsp_BookType10");
  let disTextbox = [
    document.getElementById("BookInsp_unitInsp10"),
    document.getElementById("BookInsp_BlocInsp10"),
    document.getElementById("BookInsp_AreaInsp10"),
  ];
  let fields = [
    document.getElementById("BookInsp_Rema10"),
    document.getElementById("BookInsp_InspDate106"),
  ];
  let td1 = document.getElementById("BookInsp_unitInsp10_td");
  let td2 = document.getElementById("BookInsp_BlocInsp10_td");
  let td3 = document.getElementById("BookInsp_AreaInsp10_td");
  if (pass) {
    mandTextbox.setAttribute("mandatory", "");
  } else {
    mandTextbox.removeAttribute("mandatory");
    mandTextbox.value = "";
    for (let textbox of disTextbox) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let field of fields) {
      field.value = "";
    }
    td1.innerHTML = "No. of units to be inspected";
    td2.innerHTML = "No. of blocks to be inspected";
    td3.innerHTML = "Area to be inspected (sqm)";
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
    document.getElementById("SubmChec_OtheDocuRema20"),
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
    textbox.removeAttribute("mandatory", "");
  }
}
function SubmChec_OtheDocuRema20_change(element) {
  let textarea = document.getElementById("SubmChec_OtheDocuRema20");

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

  if (textBox.value.trim() === "000") {
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
      // div
      //   .querySelector("[prefix='Members_UEN_OWNER']")
      //   .removeAttribute("data-invalid");
      // div
      //   .querySelector("[prefix='Members_UEN_OWNER']")
      //   .removeAttribute("data-invalid-message");
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
  let label = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20Label"
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
    label.innerHTML = "";
  }
}

function DeclByQualPers_TheBuilWorkHave_change(element) {
  let datefield = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20"
  );
  let label = document.getElementById(
    "DeclByQualPers_TheBuilWorkHave_WithAPermTo20Label"
  );

  switch (element.id) {
    case "DeclByQualPers_TheBuilWorkHave20":
      datefield.setAttribute("mandatory", "");
      datefield.removeAttribute("disabled");
      label.innerHTML = "*";
      break;
    case "DeclByQualPers_TheBuilWorkHave_WithAPerm10":
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("disabled", "");
      datefield.value = "";
      label.innerHTML = "";
      break;
  }
}

function togglePartQp() {
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

function togglePartDev(el) {
  let index = document
    .getElementById(el.id)
    .getAttribute("id")
    .replace(document.getElementById(el.id).getAttribute("prefix"), "");
  document
    .getElementById("Members_UEN_OWNER" + index)
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + index)
    .removeAttribute("data-invalid-message");
}

function removeUenInvalid(parent, prefix1) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let uenfields = document.querySelectorAll(`[prefix="${prefix1}"]`);
  if (childCount > 1) {
    uenfields[uenfields.length - 1].removeAttribute("data-invalid");
  }
}

function atleastOne(element) {
  let group = document.querySelectorAll(`[name="${element.name}"]`);
  let pass = false;
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < group.length; i++) {
      group[i].removeAttribute("mandatory");
      group[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < group.length; i++) {
      group[i].setAttribute("mandatory", "");
      group[i].setAttribute("checked", "");
    }
  }
}

function PartOfAppl_ApplType10_change() {
  let page = document.querySelector(`[target='page5']`);
  let content = document.getElementById("page5");
  let field = document.getElementById("DeclByAppl_IHereApplFor10");
  if (
    (field.valueLabel == "TOP" || field.valueLabel == "CSC") &&
    isInspectionAllowed
  ) {
    page.removeAttribute("hidden");
    content.removeAttribute("hidden");
    resetBookingInsp(true);
  } else {
    page.setAttribute("hidden", "");
    content.setAttribute("hidden", "");
    resetBookingInsp(false);
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

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
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
            jsonData[id] =
              innerSelect.options[innerSelect.selectedIndex].text ==
              "Please Select"
                ? ""
                : innerSelect.options[innerSelect.selectedIndex].text;
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
          if (["PartOfAppl_PlanType20"].includes(id)) {
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
