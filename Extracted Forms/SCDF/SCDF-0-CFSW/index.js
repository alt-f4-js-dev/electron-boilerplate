document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  if (
    !document
      .querySelector("cn2-nav-button[target='page1']")
      .hasAttribute("valid")
  ) {
    //populateApprovePlans
    populateApprovePlans(PartOfCert_FireSafeWorkCert10);
  }

  let run = setTimeout(() => {
    showMessage(
      "Please note that QP company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
    );
    clearTimeout(run);
  }, 500);
});

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
function setCertTitle(element) {
  let certType = document.getElementById(element.id).value;
  let parentDiv = document.getElementById("page5");

  let textBoxes = parentDiv.querySelectorAll("cn2-textbox");

  for (let target of textBoxes) {
    target.value = "";
  }

  document
    .getElementById("Member_Member_Name_QP10")
    .removeAttribute("data-options");
  document
    .getElementById("Member_Member_Name_QP10")
    .setAttribute("data-options", "qpDropdown10");
  document
    .getElementById("Member_Member_Name_QP10")
    .removeAttribute("mandatory");
  document
    .getElementById("Member_Member_Name_QP10")
    .setAttribute("mandatory", "");
  document.getElementById("Member_Address_QP10").value = "";

  if (certType === "Certification for Fire Safety Works for Building Plan") {
    document
      .getElementById("certTitle")
      .setAttribute(
        "title",
        "CERTIFICATION FOR FIRE SAFETY WORKS FOR BUILDING PLAN<br>[REGULATION 17 OF FIRE SAFETY (BUILDING AND PIPELINE FIRE SAFETY) REGULATIONS 2008]"
      );
    //page4
    document
      .getElementById("navbtn4")
      .setAttribute("label", "Particulars of SCDF Approved BP Plans");
    document.getElementById("planAcrro").innerHTML = "BP";
    document.getElementById("planAcrro2").innerHTML = "BP";
    //page5
    document
      .getElementById("navbtn5")
      .setAttribute(
        "label",
        "Particulars of Architect/Professional Engineer for BP Plans"
      );
    document.getElementById("prtclrsId").innerHTML =
      "Part 2 - Particulars of Architect/Professional Engineer for BP Plans";
  }
  if (
    certType === "Certification for Fire Safety Works for Fire Protection Plan"
  ) {
    document
      .getElementById("certTitle")
      .setAttribute(
        "title",
        "CERTIFICATION FOR FIRE SAFETY WORKS FOR FIRE PROTECTION PLAN<br>[REGULATION 17 OF FIRE SAFETY (BUILDING AND PIPELINE FIRE SAFETY) REGULATIONS 2008]"
      );
    //page4
    document
      .getElementById("navbtn4")
      .setAttribute("label", "Particulars of SCDF Approved FP Plans");
    document.getElementById("planAcrro").innerHTML = "FP";
    document.getElementById("planAcrro2").innerHTML = "FP";
    //page5
    document
      .getElementById("navbtn5")
      .setAttribute(
        "label",
        "Particulars of Professional Engineer for FP Plans"
      );
    document.getElementById("prtclrsId").innerHTML =
      "Part 2 - Particulars of Professional Engineer for FP Plans";
    document.getElementById("Member_Member_Name_QP10").value = "";
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("data-options");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("data-options", "qpDropdown10");
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("mandatory");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("mandatory", "");
  }
  if (
    certType ===
    "Certification for Fire Safety Works for Mechanical Ventilation/Air-Conditioning Plan"
  ) {
    document
      .getElementById("certTitle")
      .setAttribute(
        "title",
        "CERTIFICATION FOR FIRE SAFETY WORKS FOR MECHANICAL VENTILATION/AIR-CONDITIONING PLAN<br>[REGULATION 17 OF FIRE SAFETY (BUILDING AND PIPELINE FIRE SAFETY) REGULATIONS 2008]"
      );
    //page4
    document
      .getElementById("navbtn4")
      .setAttribute("label", "Particulars of SCDF Approved MV Plans");
    document.getElementById("planAcrro").innerHTML = "MV";
    document.getElementById("planAcrro2").innerHTML = "MV";
    //page5
    document
      .getElementById("navbtn5")
      .setAttribute(
        "label",
        "Particulars of Professional Engineer for MV Plans"
      );
    document.getElementById("prtclrsId").innerHTML =
      "Part 2 - Particulars of Professional Engineer for MV Plans";
    document.getElementById("Member_Member_Name_QP10").value = "";
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("data-options");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("data-options", "qpDropdown10");
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("mandatory");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("mandatory", "");
  }
  if (
    certType ===
    "Certification for Fire Safety Works for Performance Based Plan"
  ) {
    document
      .getElementById("certTitle")
      .setAttribute(
        "title",
        "CERTIFICATION FOR FIRE SAFETY WORKS FOR PERFORMANCE BASED PLAN<br>[REGULATION 17 OF FIRE SAFETY (BUILDING AND PIPELINE FIRE SAFETY) REGULATIONS 2008]"
      );
    //page4
    document
      .getElementById("navbtn4")
      .setAttribute("label", "Particulars of SCDF Approved PB Plans");
    document.getElementById("planAcrro").innerHTML = "PB";
    document.getElementById("planAcrro2").innerHTML = "PB";
    //page5
    document
      .getElementById("navbtn5")
      .setAttribute(
        "label",
        "Particulars of Fire Safety Engineer for PB Plans"
      );
    document.getElementById("prtclrsId").innerHTML =
      "Part 2 - Particulars of Fire Safety Engineer for PB Plans";
    document.getElementById("Member_Member_Name_QP10").value = "";
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("data-options");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("data-options", "qpDropdown10");
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("mandatory");
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("mandatory", "");
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function getDetails() {
  let data = [
    {
      SCDF: [
        {
          Email: "TAN_Chung_Yee@scdf.gov.sg",
          TelNo: "68481457",
          AreaOfSupp: "Submissions",
        },
        {
          Email: "",
          TelNo: "62800000",
          AreaOfSupp: "E-Payment / Status Of Application",
        },
      ],
    },
  ];
  return data;
}

function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");
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
      document.getElementById(el.id).removeAttribute("data-invalid");
      document.getElementById(el.id).removeAttribute("data-invalid-message");
    }
  } else if (el.value.trim() === "") {
    document.getElementById(el.id).value = "";
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
  }
}

function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function PartOfArchProf_change(parent) {
  parent = document.getElementById(parent);
  let tempDiv = parent.querySelectorAll("div");
  let targetDiv = [];
  let pass = false;
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  for (let div of targetDiv) {
    let select = div.querySelector("cn2-select");
    if (select.value !== "") {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-select");
      let datefield = div.querySelector("cn2-datefield");

      select.removeAttribute("mandatory");
      datefield.removeAttribute("mandatory");
    }
  } else {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-select");
      let datefield = div.querySelector("cn2-datefield");

      select.setAttribute("mandatory", "");
      datefield.setAttribute("mandatory", "");
    }
  }
}

function PartOfArchProf2_change(parent) {
  parent = document.getElementById(parent);
  let tempDiv = parent.querySelectorAll("div");
  let targetDiv = [];
  let pass = false;
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  for (let div of targetDiv) {
    let select = div.querySelector("cn2-textbox");
    if (select.value !== "") {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-textbox");
      select.removeAttribute("mandatory");
    }
  } else {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-textbox");
      select.setAttribute("mandatory", "");
    }
  }
}

function PartOfArchProf3_change(parent) {
  parent = document.getElementById(parent);
  let tempDiv = parent.querySelectorAll("div");
  let targetDiv = [];
  let pass = false;
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  for (let div of targetDiv) {
    let select = div.querySelector("cn2-datefield");
    if (select.value != "") {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-datefield");
      select.removeAttribute("mandatory");
    }
  } else {
    for (let div of targetDiv) {
      let select = div.querySelector("cn2-datefield");
      select.setAttribute("mandatory", "");
    }
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
    d.getFullYear() < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function clearUenFirm(element1, element2) {
  let uen = document.getElementById(element1);
  //let firmName = document.getElementById(element2);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

// -------------------START WEB SERVICE-------------------------

function populateApprovePlans(element) {
  remoChild();

  let fswcType = [
    "Certification for Fire Safety Works for Building Plan",
    "Certification for Fire Safety Works for Fire Protection Plan",
    "Certification for Fire Safety Works for Mechanical Ventilation/Air-Conditioning Plan",
    "Certification for Fire Safety Works for Performance Based Plan",
  ];
  let agencyUrlJSON = "";
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;

  let keyName = "";

  if (element.value == fswcType[0]) {
    //Certification for Fire Safety Works for Building Plan
    keyName = "bpRefNo";
    agencyUrlJSON = jsonData["agencyUrlJSON10"];
  } else if (element.value == fswcType[1]) {
    //Certification for Fire Safety Works for Fire Protection Plan
    keyName = "fpRefNo";
    agencyUrlJSON = jsonData["agencyUrlJSON20"];
  } else if (element.value == fswcType[2]) {
    //Certification for Fire Safety Works for Mechanical Ventilation/Air-Conditioning Plan
    keyName = "mvRefNo";
    agencyUrlJSON = jsonData["agencyUrlJSON30"];
  } else if (element.value == fswcType[3]) {
    //Certification for Fire Safety Works for Performance Based Plan
    keyName = "pbRefNo";
    agencyUrlJSON = jsonData["agencyUrlJSON40"];
  }
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    [
      agencyUrlJSON,
      JSON.parse(
        JSON.stringify({
          appId: "my-app-id",
          secret: "my-app-secret",
          authPrefix: "ape_l1_eg",
          httpMethod: "get",
          urlPath: "https://www.sample.gov",
        })
      ),
    ],
    bcaRefNo
  );
  updateAgencyUrl("agencyUrl10", bcaRefNo);
  updateAgencyUrl("agencyUrl20", bcaRefNo);
  updateAgencyUrl("agencyUrl30", bcaRefNo);
  updateAgencyUrl("agencyUrl40", bcaRefNo);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse === "object") {
      if (dataResponse.length > 0) {
        if (dataResponse[0][keyName]) {
          jsonData["appvBPplan10"] = [];
          let newOptions = [];
          for (let i = 0; i < dataResponse.length; i++) {
            let jsonObject = {
              [dataResponse[i][keyName]]: convertDate(
                dataResponse[i].approvedDate
              ),
            };

            newOptions.push(
              `${dataResponse[i][keyName]}:${dataResponse[i][keyName]}`
            );

            jsonData["appvBPplan10"].push(jsonObject);
          }

          document
            .getElementById("PartOfArchProf_A1")
            .setAttribute("options", newOptions.join(","));
        }
      }
    } else {
      convertSelectToTextbox("PartOfArchProf_A1");
    }
  }
}

function remoChild() {
  let formField = document.querySelectorAll(`[particularsBPForm]`);
  let form1 = document.getElementById("A1");
  for (let i = 0; i < formField.length; i++) {
    if (i != 0) {
      formField[i].parentNode.removeChild(formField[i]);
    }
  }

  let field = form1.querySelector("cn2-select")
    ? form1.querySelector("cn2-select")
    : form1.querySelector("cn2-textbox");
  field.value = "";
  field.removeAttribute("mandatory");
  field.setAttribute("mandatory", "");
  form1.querySelector("cn2-datefield").value = "";
  form1.querySelector("cn2-datefield").removeAttribute("mandatory");
  form1.querySelector("cn2-datefield").setAttribute("mandatory", "");
  form1.querySelector(`[id="delete1A"]`).setAttribute("disabled", "");

  removeValidations("particularsBPForm");
}

function convertDate(getDate) {
  let rawDate = getDate.split("/");
  let newDate = "";
  newDate = rawDate[2] + "-" + rawDate[1] + "-" + rawDate[0];
  return newDate.toString();
}

function convertDate2(getDate) {
  let rawDate = getDate.split("-");
  let newDate = "";
  if (rawDate[2] && rawDate[1] && rawDate[0]) {
    newDate = newDate + rawDate[2] + "/" + rawDate[1] + "/" + rawDate[0];
    return newDate.toString();
  } else {
    return undefined;
  }
}

function loadDate(element) {
  let el = document.getElementById(element.id);
  if (el.tagName.toLowerCase() == "cn2-select") {
    let value = element.querySelector("option[value='" + el.value + "']")
      .innerHTML;
    let val = jsonData["appvBPplan10"].find(
      (index) => Object.keys(index)[0] == value
    )[value];
    findTR(el).querySelector("cn2-datefield").value = val;
  }
}

function checkTemplateValid(el) {
  let scdfPlans = document.querySelectorAll("[scdfPlanNos]");

  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");


  for (let scdfPlan of scdfPlans) {
    if (lastTwo.test(scdfPlan.value) || lastFour.test(scdfPlan.value) || scdfPlan.value === "") {
      // if (/\s/.test(el.value)) {
      scdfPlan.removeAttribute("data-invalid");
      scdfPlan.removeAttribute("err-data");

    } else {
      scdfPlan.setAttribute("data-invalid", "");
      scdfPlan.setAttribute("err-data", "");
      scdfPlan
        .setAttribute(
          "data-invalid-message",
          "The SCDF Approved BP/FP/MV Plans Nos. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
        );
    }
    // } else {
    //   document.getElementById(el.id).removeAttribute("data-invalid");
    // }
  }
}


function validateApprovePlans(element) {
  if (
    element.tagName.toLowerCase() == "cn2-textbox" ||
    element.tagName.toLowerCase() == "cn2-datefield"
  ) {
    let fswcTypes = [
      "Certification for Fire Safety Works for Building Plan",
      "Certification for Fire Safety Works for Fire Protection Plan",
      "Certification for Fire Safety Works for Mechanical Ventilation/Air-Conditioning Plan",
      "Certification for Fire Safety Works for Performance Based Plan",
    ];
    let fswcType = document.getElementById("PartOfCert_FireSafeWorkCert10")
      .value;
    let parent = findTable(document.getElementById(element.id));
    let refNo = parent.querySelector(`[prefix="PartOfArchProf_A"]`).value;
    let convDate = convertDate2(
      parent.querySelector(`[prefix="PartOfArchProf_B"]`).value
    );
    let agencyUrlJSON = "";
    let projRefNo =
      "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
    let otherRefNo = "";
    let approvedDate = "approvedDate=" + convDate;
    let query = "";
    let field = parent.querySelector("cn2-select")
      ? parent.querySelector("cn2-select")
      : parent.querySelector("cn2-textbox");

    if (fswcType == fswcTypes[0]) {
      //Certification for Fire Safety Works for Building Plan
      agencyUrlJSON = jsonData["agencyUrlJSON50"];
      otherRefNo = "bpRefNo=" + refNo;
    } else if (fswcType == fswcTypes[1]) {
      //Certification for Fire Safety Works for Fire Protection Plan
      agencyUrlJSON = jsonData["agencyUrlJSON60"];
      otherRefNo = "fpRefNo=" + refNo;
    } else if (fswcType == fswcTypes[2]) {
      //Certification for Fire Safety Works for Mechanical Ventilation/Air-Conditioning Plan
      agencyUrlJSON = jsonData["agencyUrlJSON70"];
      otherRefNo = "mvRefNo=" + refNo;
    } else if (fswcType == fswcTypes[3]) {
      //Certification for Fire Safety Works for Performance Based Plan
      agencyUrlJSON = jsonData["agencyUrlJSON80"];
      otherRefNo = "pbRefNo=" + refNo;
    }
    query = projRefNo + otherRefNo + approvedDate;

    if (
      document.getElementById("Project_Project_Ref_No10").value.trim() &&
      refNo.trim() &&
      convDate
    ) {
      let dataResponse = ipcRenderer.sendSync(
        "client-request",
        "GET",
        [
          agencyUrlJSON,
          JSON.parse(
            JSON.stringify({
              appId: "my-app-id",
              secret: "my-app-secret",
              authPrefix: "ape_l1_eg",
              httpMethod: "get",
              urlPath: "https://www.sample.gov",
            })
          ),
        ],
        query
      );
      updateAgencyUrl("agencyUrl50", query);
      updateAgencyUrl("agencyUrl60", query);
      updateAgencyUrl("agencyUrl70", query);
      updateAgencyUrl("agencyUrl80", query);

      let field1 = parent.querySelector(`[prefix="PartOfArchProf_A"]`);
      let field2 = parent.querySelector(`[prefix="PartOfArchProf_B"]`);

      field1.removeAttribute("data-valid");
      field1.removeAttribute("data-valid-message");
      field1.removeAttribute("data-invalid");
      field1.removeAttribute("data-valid-message");
      field2.removeAttribute("data-valid");
      field2.removeAttribute("data-valid-message");
      field2.removeAttribute("data-invalid");
      field2.removeAttribute("data-valid-message");

      if (![501].includes(dataResponse)) {
        if (typeof dataResponse === "object") {
          if (dataResponse.isValid == "N") {
            field1.setAttribute("data-invalid", "");
            field2.setAttribute("data-invalid", "");
            field1.setAttribute(
              "data-invalid-message",
              "Error: Not Valid/No record in agency database."
            );
          }
        }
      }
    }
  }
}

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

  jsonData[jsonKey]["method"] = "GET";
  jsonData[jsonKey]["url"] = hostname;
  jsonData[jsonKey]["params"] = query;
}

function removeValidations(container) {
  let con = document.getElementById(container).lastElementChild;

  for (let a of con.querySelectorAll("[id]")) {
    a.removeAttribute("data-valid");
    a.removeAttribute("data-valid-message");
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-valid-message");
  }
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function findTR(el) {
  while (el.tagName.toLowerCase() != "tr") {
    el = el.parentElement;
  }
  return el;
}

// -------------------END WEB SERVICE-------------------------
// JSON array of dynamic fields

document.addEventListener("DOMContentLoaded", function () {
  for (let grp of document.querySelectorAll("[cn2-array-group-enabled]")) {
    let grpID = grp.getAttribute("cn2-array-group");
    let parent = document.getElementById(grpID);
    if (parent && grp.hasAttribute("cn2-array-group-id")) {
      // hidden textarea
      let textarea = document.createElement("cn2-textarea");
      let textareaID = grp.getAttribute("cn2-array-group-id");
      textarea.setAttribute("no-label", "");
      textarea.setAttribute("hidden", "");
      textarea.setAttribute("id", textareaID);
      jsonData[textareaID] = null;

      parent.parentNode.insertBefore(textarea, parent);

      // add event in add button
      let click = grp.hasAttribute("event-click")
        ? grp.getAttribute("event-click").trim()
        : "";
      if (!click.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
        let newClick = "";
        if (click.slice(-1) != "; " && click != "") click += ";";
        newClick = click + " modifyHiddenArrayTextarea('" + grpID + "');";
        grp.setAttribute("event-click", newClick.trim());
      }

      // add event in delete button
      for (let btn of parent.querySelectorAll("cn2-button[danger]")) {
        let click = btn.hasAttribute("event-click")
          ? btn.getAttribute("event-click").trim()
          : "";
        if (!click.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
          let newClick = "";
          if (click.slice(-1) != "; " && click != "") click += ";";
          newClick = click + " modifyHiddenArrayTextarea('" + grpID + "');";
          btn.setAttribute("event-click", newClick.trim());
        }
      }

      // add event in fields
      for (let field of parent.querySelectorAll(
        "cn2-textbox, cn2-textarea, cn2-checkbox, cn2-datefield, cn2-select, input[type='radio']"
      )) {
        if (
          field.tagName.toLowerCase() !== "cn2-checkbox" &&
          field.tagName.toLowerCase() !== "input" &&
          field.tagName.toLowerCase() !== "cn2-datefield" &&
          field.tagName.toLowerCase() !== "cn2-select"
        ) {
          let blur = field.hasAttribute("event-blur")
            ? field.getAttribute("event-blur").trim()
            : "";
          if (!blur.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
            let newBlur = "";
            if (blur.slice(-1) != "; " && blur != "") blur += ";";
            newBlur = blur + " modifyHiddenArrayTextarea('" + grpID + "');";
            field.setAttribute("event-blur", newBlur.trim());
          }
        } else {
          if (
            field.tagName.toLowerCase() === "cn2-checkbox" ||
            field.tagName.toLowerCase() === "cn2-datefield" ||
            field.tagName.toLowerCase() === "cn2-select"
          ) {
            let change = field.hasAttribute("event-change")
              ? field.getAttribute("event-change").trim()
              : "";
            if (
              !change.includes("modifyHiddenArrayTextarea('" + grpID + "');")
            ) {
              let newChange = "";
              if (change.slice(-1) != "; " && change != "") change += ";";
              newChange =
                change + " modifyHiddenArrayTextarea('" + grpID + "');";
              field.setAttribute("event-change", newChange.trim());
            }
          } else {
            let change = field.hasAttribute("onchange")
              ? field.getAttribute("onchange").trim()
              : "";
            if (
              !change.includes("modifyHiddenArrayTextarea('" + grpID + "');")
            ) {
              let newChange = "";
              if (change.slice(-1) != "; " && change != "") change += ";";
              newChange =
                change + " modifyHiddenArrayTextarea('" + grpID + "');";
              field.setAttribute("onchange", newChange.trim());
            }
          }
        }
      }

      // invoke the method
      modifyHiddenArrayTextarea(grpID);

      grp.removeAttribute("cn2-array-group-enabled");
    }
  }
});

function modifyHiddenArrayTextarea(grpID) {
  let parent = document.getElementById(grpID);
  let button = document.querySelector(`[cn2-array-group="${grpID}"]`);
  let textarea = document.getElementById(
    button.getAttribute("cn2-array-group-id")
  );

  let groupInfo = [];
  for (let instance of parent.children) {
    let fieldInfo = {};
    for (let field of instance.querySelectorAll(
      "cn2-textbox, cn2-textarea, cn2-checkbox, cn2-datefield, cn2-select, input[type='radio']"
    )) {
      if (
        field.tagName.toLowerCase() !== "cn2-checkbox" &&
        field.tagName.toLowerCase() !== "input"
      ) {
        fieldInfo[field.id] = field.value;
      } else {
        fieldInfo[field.id] = field.checked ? "on" : "off";
      }
    }

    groupInfo.push(fieldInfo);
  }

  textarea.value = JSON.stringify(groupInfo);
  if (jsonData[textarea.id] === null) jsonData[textarea.id] = textarea.value;
}

function convertSelectToTextbox(id) {
  let select = document.getElementById(id);
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
}

document.addEventListener("DOMContentLoaded", () => {
  if (ipcRenderer.sendSync("isAgency") === true) {
    [...document.querySelectorAll("[nricUnmasked]")].map((el) =>
      el.removeAttribute("hidden")
    );
    [...document.querySelectorAll("[nricMasked]")].map((el) =>
      el.setAttribute("hidden", "")
    );
  } else {
    [...document.querySelectorAll("[nricMasked]")].map((el) =>
      el.removeAttribute("hidden")
    );
    [...document.querySelectorAll("[nricUnmasked]")].map((el) =>
      el.setAttribute("hidden", "")
    );
  }
});
