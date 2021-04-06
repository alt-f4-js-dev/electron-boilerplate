document.addEventListener("DOMContentLoaded", function (event) {
  showMessage(
    "Please note that QP Company/Firm name is mandatory for all SCDF submission. Please fill up before any submission."
  );
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    wvrFee();
  }
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
function addWaiverForm() {
  let parentDiv = document.getElementById("waiverForm");
  let label = parentDiv.querySelectorAll('[prefix="PartOfWaivItem_A"]');
  let last = 0;
  for (let count = 0; count < label.length; count++) {
    label[count].value = count + 1;
    last = count + 1;
  }
  document.getElementById("WaivFeeComp_NumbOfRequ10").value = last;
  if (document.getElementById("PartOfAppl_IsFireEngrWaiv10").checked === true) {
    document.getElementById("WaivFeeComp_WaivFee10_0").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
  } else {
    document.getElementById("WaivFeeComp_WaivFee10").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
  }
  document.getElementById("PaymMode_Paym10").value = parseFloat(
    160 * parseInt(last)
  ).toFixed(2);
  document.getElementById("PartOfWaivItem_E1").setAttribute("disabled", "");
}
function dom_template_blur(element) {
  let textbox = document.getElementById(element.id);
  let maxlength = parseInt(textbox.getAttribute("maxlength"));
  let length = textbox.value.trim().length;
  if (maxlength !== length) {
    textbox.setAttribute("data-invalid", "");
  } else {
    textbox.removeAttribute("data-invalid");
  }
}
function deleteWaiverForm() {
  let parentDiv = document.getElementById("waiverForm");
  let label = parentDiv.querySelectorAll('[prefix="PartOfWaivItem_A"]');
  let last = 0;
  for (let count = 0; count < label.length; count++) {
    label[count].value = count + 1;
    last = count + 1;
  }
  let targetDiv = parentDiv.getElementsByTagName("div")[
    parentDiv.getElementsByTagName("div").length - 1
  ];
  document.getElementById("WaivFeeComp_NumbOfRequ10").value = last;
  if (document.getElementById("PartOfAppl_IsFireEngrWaiv10").checked === true) {
    document.getElementById("WaivFeeComp_WaivFee10_0").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
  } else {
    document.getElementById("WaivFeeComp_WaivFee10").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
  }
  document.getElementById("PaymMode_Paym10").value = parseFloat(
    160 * parseInt(last)
  ).toFixed(2);
  let textareas = targetDiv.querySelectorAll("cn2-textarea");
  setAddButton(textareas);
}
function PartOfWaiv_change() {
  let parentDiv = document.getElementById("waiverForm");
  let targetDiv = parentDiv.getElementsByTagName("div")[
    parentDiv.getElementsByTagName("div").length - 1
  ];
  let textareas = targetDiv.querySelectorAll("cn2-textarea");
  setAddButton(textareas);
}
function PaymMode_change(element) {
  let field = document.getElementById("FIELD1");
  let field1 = document.getElementById("PaymMode_Giro20");
  let field2 = document.getElementById("PaymMode_Giro30");
  let currentId = element.id;
  if (currentId === "PaymMode_Hide10") {
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
    field1.setAttribute("disabled", "");
    field1.removeAttribute("mandatory");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory");
    field1.value = "";
    field2.value = "";
  } else if (currentId === "PaymMode_Giro10") {
    field1.setAttribute("mandatory", "");
    field1.removeAttribute("disabled");
    field2.setAttribute("mandatory", "");
    field2.removeAttribute("disabled");
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    showMessage(
      "Please enter a valid and SCDF verified GIRO number. Incorrect OR invalid GIRO account can reject the application"
    );
  } else if (currentId === "PaymMode_CashCard10") {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    field1.setAttribute("disabled", "");
    field1.removeAttribute("mandatory");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory");
    field1.value = "";
    field2.value = "";
    showMessage(
      "Please note that payment is to be made at the customer service centre at HQSCDF"
    );
  } else if (currentId === "PaymMode_CredCard10") {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    field1.setAttribute("disabled", "");
    field1.removeAttribute("mandatory");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory");
    field1.value = "";
    field2.value = "";
    showMessage(
      `Credit Card payment can be made either:
      1) at the customer service countre at HQSCDF
      2) by logging on to http://www.scdf.gov.sg (go to 'eServices' and click 'payment')`
    );
  }
}
function setAddButton(textareas) {
  let pass = true;
  for (let textarea of textareas) {
    if (textarea.value.length == 0) {
      pass = false;
      break;
    }
  }
  if (pass) {
    document.getElementById("PartOfWaivItem_E1").removeAttribute("disabled");
  } else {
    document.getElementById("PartOfWaivItem_E1").setAttribute("disabled", "");
  }
}

function stateWhether(element) {
  if (element.checked) {
    if (document.getElementById("PartOfAppl_FSSBBPOrME10").value == "") {
      document
        .getElementById("PartOfAppl_FSSBBPOrME10")
        .setAttribute("mandatory", "");
    }
  } else {
    document
      .getElementById("PartOfAppl_FSSBBPOrME10")
      .removeAttribute("mandatory");
  }
}

function wvrFee() {
  let parentDiv = document.getElementById("waiverForm");
  let label = parentDiv.querySelectorAll('[prefix="PartOfWaivItem_A"]');
  let last = 0;
  for (let count = 0; count < label.length; count++) {
    label[count].value = count + 1;
    last = count + 1;
  }

  if (document.getElementById("PartOfAppl_IsFireEngrWaiv10").checked === true) {
    document
      .getElementById("WaivFeeComp_WaivFee10_b")
      .removeAttribute("hidden");
    document
      .getElementById("WaivFeeComp_WaivFee10_a")
      .setAttribute("hidden", "");
    document.getElementById("WaivFeeComp_NumbOfRequ10").value = last;
    document.getElementById("WaivFeeComp_WaivFee10").value = "0.00";
    document.getElementById("WaivFeeComp_WaivFee10_0").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
    document.getElementById("PaymMode_Paym10").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
    document.getElementById("page8Nav").removeAttribute("hidden");
    document.getElementById("page8").removeAttribute("hidden");
  } else {
    document
      .getElementById("WaivFeeComp_WaivFee10_a")
      .removeAttribute("hidden");
    document
      .getElementById("WaivFeeComp_WaivFee10_b")
      .setAttribute("hidden", "");
    document.getElementById("WaivFeeComp_NumbOfRequ10").value = last;
    document.getElementById("WaivFeeComp_WaivFee10").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
    jsonData["WaivFeeComp_WaivFee10"] = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
    document.getElementById("WaivFeeComp_WaivFee10_0").value = "0.00";
    document.getElementById("PaymMode_Paym10").value = parseFloat(
      160 * parseInt(last)
    ).toFixed(2);
    document.getElementById("page8Nav").setAttribute("hidden", "");
    document.getElementById("page8").setAttribute("hidden", "");
    clearPage7();
  }
}

function clearPage7() {
  document.getElementById("Member_Member_Name_FSE10").value = "";
  document.getElementById("MemberRole_FSE_Reg_No_FSE10").value = "";
  document.getElementById("Member_IC_Passport_No_FSE10_mask").value = "";
  document.getElementById("Member_FSE_Firm_Name_FSE10").value = "";
  document.getElementById("Members_UEN_FSE10").value = "";
  document.getElementById("Member_Address_FSE10").value = "";
  document.getElementById("Member_Tel_No_FSE10").value = "";
  document.getElementById("Member_Email_Address1_FSE10").value = "";
  document.getElementById("DeclByFireSafe_FSEDecl10").checked = false;
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

function checkTemplateValid(el) {
  let refId = el.id;
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  switch (refId) {
    case "PartOfAppl_FSSBBPOrME10":
      if (el.value.match(lastFour) || el.value.match(lastTwo) || el.value == "   /      /    ") {
        // if (/\s/.test(el.value)) {
        document.getElementById(el.id).removeAttribute("data-invalid");
        if (document.getElementById("PartOfAppl_StatWhetThisSubm10").checked) {
          if (el.value == "   /      /    ") {
            document.getElementById(el.id).removeAttribute("mandatory");
            document.getElementById(el.id).setAttribute("mandatory", "");
            document.getElementById(el.id).removeAttribute("data-invalid");
          }
        }
      } else {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The format of the SCDF BP/ME Plan reference no. is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
          );
      }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_PrevWaivCaseRefe10":
      if (el.value != "WVR/     /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "The format of the Waiver reference no. is WVR/YYYYY/YY where Y is a number. Please try again"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
      break;
    case "PartOfAppl_PresConsRefeNumb10":
      if (el.value != "CON/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "The format of CON Reference No. is CON/YYYYYY/YY where X is a character and Y is a number. Please try again"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
      break;
    case "PartOfAppl_QRACaseRefe10":
      if (el.value != "QRA/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "The format of QRA Reference No. is QRA/YYYYYY/YY where X is a character and Y is a number. Please try again"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
      break;
  }
}

function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
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

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function nricMaskingApp(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function nricMaskingQP(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function nricMaskingFSE(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

// Function
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

//------------- START WEB SERVICE-------------------

function validateBpmvfpRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let agencyURL = jsonData["agencyUrl10"].url;
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let bpmvfpRefNo =
    "bpmvfpRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + bpmvfpRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgBpmvfpRefNo");
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    query,
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
  updateAgencyUrl("agencyUrl10", query);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        errMsg.innerHTML = "Not valid/No record found in agency database";
      }
    }
  }
}

function removeSlash(getData) {
  let rawData = getData.split("/");
  let newData = "";
  for (let x of rawData) {
    newData = newData + x;
  }
  return newData.toString();
}

function validateConsRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let agencyURL = jsonData["agencyUrl20"].url;
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let consRefNo =
    "consRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + consRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgConsRefNo");
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    query,
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
  updateAgencyUrl("agencyUrl20", query);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        errMsg.innerHTML = "Not valid/No record found in agency database";
      }
    }
  }
}

function validateWaiverRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON30"];
  let agencyURL = jsonData["agencyUrl30"].url;
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let waiverRefNo =
    "waiverRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + waiverRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgWaiverRefNo");
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    query,
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
  updateAgencyUrl("agencyUrl30", query);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        errMsg.innerHTML = "Not valid/No record found in agency database";
      }
    }
  }
}

function validateFseRegNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON40"];
  let agencyURL = jsonData["agencyUrl40"].url;
  let fseRegNo = "fseRegNo=" + document.getElementById(element.id).value;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgFseRegNo");
  let label = document.getElementById("MemberRole_FSE_Reg_No_FSE10_label");
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    fseRegNo,
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
    fseRegNo
  );
  updateAgencyUrl("agencyUrl40", fseRegNo);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      label.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        mainElement.removeAttribute("disabled");
        mainElement.setAttribute("mandatory", "");
        errMsg.innerHTML = "Not valid/No record found in agency database";
        label.innerHTML = "*";
      }
    }
  }
}

//---------------END WEB SERVICE---------------------
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
          field.tagName.toLowerCase() !== "cn2-datefield"
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
            field.tagName.toLowerCase() === "cn2-datefield"
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
