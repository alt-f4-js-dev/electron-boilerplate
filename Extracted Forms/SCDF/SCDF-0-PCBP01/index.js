document.addEventListener("DOMContentLoaded", function () {
  showMessage(
    "Please note that QP company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
  );
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
function getIdInc(element) {
  let prefix, suffix;
  select = document.getElementById(element.id);
  value = element.value;
  if (select.getAttribute("prefix") !== null) {
    prefix = select.getAttribute("prefix");
  }
  if (select.getAttribute("suffix") !== null) {
    suffix = select.getAttribute("suffix");
  } else {
    suffix = "";
  }

  return (idInc = element.id.substring(
    prefix.length,
    element.id.length - suffix.length
  ));
}

function setSNO() {
  let sNos = document.querySelectorAll("cn2-textbox[prefix=PartOfConsItem_A]");
  for (let x = 0; x < sNos.length; x++) {
    let sNo = sNos[x];
    let y = x + 1;
    sNo.value = y;
  }
}

function toggleDecl(el) {
  let parent = document.getElementById(el.id);
  let id = "SubmChec_A" + getIdInc(el) + parent.getAttribute("suffix");
  if (parent.checked) {
    document.getElementById(id).setAttribute("mandatory", "");
    document.getElementById(id).removeAttribute("disabled");
  } else {
    document.getElementById(id).removeAttribute("mandatory");
    document.getElementById(id).setAttribute("disabled", "");
    document.getElementById(id).value = "";
  }
}

function checkTemplateValid(el) {
  let refId = el.id;
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  console.log(refId);
  switch (refId) {
    case "PartOfAppl_FSSBBuilPlanRefe10":
      if (el.value.match(lastFour) || el.value.match(lastTwo) || el.value === "   /      /    ") {
        // if (/\s/.test(el.value)) {
        document.getElementById(el.id).removeAttribute("data-invalid");
      } else {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The SCDF Building Plan Reference format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
          );
      }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_WaivCaseRefNo10":
      if (el.value != "WVR/     /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 12 characters and the Waiver Reference No. format is WVR/YYYYY/YY where Y is a valid numeric no."
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
      }
      break;
    case "PartOfAppl_QRACaseRefNo10":
      if (el.value != "QRA/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 13 characters and the QRA Reference No. format is QRA/YYYYYY/YY where Y is a valid numeric no."
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
      }
      break;
    case "PartOfAppl_PrevConsCaseRef10":
      if (el.value != "CON/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 13 characters and the CON Reference No. format is CON/@YYYYY/YY where Y is a valid numeric no. and @ is a alphabetic letter"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
      }
      break;
  }
}
function addSetDisabled(pDiv) {
  let parent = document.getElementById(pDiv).getElementsByTagName("div");
  let checkbox;
  let textarea;
  for (let x = 0; x < parent.length; x++) {
    if (parent[x].hasAttribute("id")) {
      checkbox = parent[x].querySelector("cn2-checkbox");
      textarea = parent[x].querySelector("cn2-textarea");
      parent[x].querySelector("cn2-button").removeAttribute("disabled");
      if (
        (checkbox != null || checkbox != undefined) &&
        (textarea != null || textarea != undefined)
      )
        if (checkbox.checked) {
          textarea.setAttribute("mandatory", "");
          textarea.removeAttribute("disabled");
        } else {
          textarea.setAttribute("disabled", "");
          textarea.removeAttribute("mandatory");
          textarea.value = "";
        }
    }
  }
}

function enableAttachmentField(e, pdiv) {
  let element = document.getElementById(e.id);
  let parentDiv = element.parentNode.parentNode.querySelector("cn2-textarea");
  let divs = document.getElementById(pdiv).getElementsByTagName("div");
  let span = document.getElementById("attcOth_id");
  for (let div of divs) {
    if (div.hasAttribute("id")) {
      if (div.querySelector("cn2-checkbox").checked) {
        span.innerHTML = "2. Others, please specify*";
        break;
      } else {
        span.innerHTML = "2. Others, please specify";
      }
    }
  }
  if (element.checked) {
    parentDiv.removeAttribute("disabled", "");
    parentDiv.setAttribute("mandatory", "");
  } else {
    parentDiv.setAttribute("disabled", "");
    parentDiv.removeAttribute("mandatory", "");
    parentDiv.value = "";
  }
}

function attachment_deleteButton(parentDiv) {
  parentDiv = document.getElementById(parentDiv);
  let tempDivs = parentDiv.getElementsByTagName("div");
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length == 1) {
    let button = targetDivs[0].querySelector("cn2-button");
    button.setAttribute("disabled", "");
  }
}

function setAsterisk() {
  let el = document.querySelectorAll("[prefix='SubmChec_A']");

  stopHere: for (let x of el) {
    if (x.hasAttribute("mandatory")) {
      document.getElementById("attcOth_id").innerHTML =
        "2. Others, please specify*";
      break stopHere;
    } else {
      document.getElementById("attcOth_id").innerHTML =
        "2. Others, please specify";
    }
  }
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

//---------------START WEB SERVICE------------------

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

function validateSCDFBuilPlanRef(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let bpmvfpRefNo =
    "bpmvfpRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + bpmvfpRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgSCDFBuilPlanRef");
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

function validateWaiveCasRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let waiverRefNo =
    "waiverRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + waiverRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgWaiveCasRefNo");
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

function validatePrevConsCaseRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON30"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let consultationRefNo =
    "consultationRefNo=" +
    removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + consultationRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgPrevConsCaseRefNo");
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

//---------------END WEB SERVICE------------------
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
