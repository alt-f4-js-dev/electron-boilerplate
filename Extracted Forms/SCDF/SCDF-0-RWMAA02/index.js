document.addEventListener("DOMContentLoaded", function () {
  showMessage(
    `Please note that QP Company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission.`
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
//function
function addSetDisabled(pDiv) {
  let parent = document.getElementById(pDiv).getElementsByTagName("div");

  for (let x = 0; x < parent.length; x++) {
    if (parent[x].id) {
      if (parent[x].querySelector("cn2-checkbox").checked) {
        console.log(parent[x].querySelector("cn2-textarea").id);
        parent[x].querySelector("cn2-textarea").setAttribute("mandatory", "");
        parent[x].querySelector("cn2-textarea").removeAttribute("disabled");
      } else {
        parent[x].querySelector("cn2-textarea").setAttribute("disabled", "");
        parent[x].querySelector("cn2-textarea").removeAttribute("mandatory");
        parent[x].querySelector("cn2-textarea").value = "";
      }
    }
  }
}
//function
function PaymMode_change(element) {
  let field = document.getElementById("PaymMode_Giro20");
  let field2 = document.getElementById("PaymMode_Giro30");
  if (element.id === "PaymMode_Giro10") {
    field.setAttribute("mandatory", "");
    field2.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
    field2.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field2.setAttribute("disabled", "");
    field.removeAttribute("mandatory", "");
    field2.removeAttribute("mandatory", "");
    field.value = "";
    field2.value = "";
  }
}

function DeclByAppl_IHaveAppoAs10_change(element) {
  let select = document.getElementById("DeclByAppl_IHaveAppoAs30");
  let elementSelect = document.getElementById(element.id);
  if (elementSelect.valueLabel === "Mr") {
    select.value = "him";
  } else if (elementSelect.valueLabel === "Ms") {
    select.value = "her";
  }
}

function DeclByAppl_IHaveAppoAs30_change(element) {
  let select = document.getElementById("DeclByAppl_IHaveAppoAs10");
  let elementSelect = document.getElementById(element.id);
  if (select.valueLabel !== "Er") {
    if (elementSelect.valueLabel === "him") {
      select.value = "Mr";
    } else if (elementSelect.valueLabel === "her") {
      select.value = "Ms";
    }
  }
}

function Member_Member_Name_QP10_change(element) {
  let checkbox = document.getElementById("DeclByAppl_IHaveAppoAs40");
  let field = document.getElementById("DeclByAppl_IHaveAppoAs20");
  if (checkbox.checked) {
    field.value = document.getElementById(element.id).valueLabel;
  }
}

function DeclByAppl_IHaveAppoAs40_change(element) {
  let fields = [
    document.getElementById("DeclByAppl_IHaveAppoAs10"),
    document.getElementById("DeclByAppl_IHaveAppoAs30"),
  ];
  let nameField = document.getElementById("DeclByAppl_IHaveAppoAs20");
  if (element.checked) {
    for (field of fields) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
    }
    if (document.getElementById("Member_Member_Name_QP10").value) {
      nameField.value = document.getElementById(
        "Member_Member_Name_QP10"
      ).valueLabel;
    }
  } else {
    for (field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
    }
    nameField.value = "";
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

function PartOfAppl_StatWhetThisSubm10_change(element) {
  if (element.checked) {
    document
      .getElementById("PartOfAppl_PrevPlanRefeNumb10")
      .setAttribute("mandatory", "");
    document.getElementById(
      "PartOfAppl_PrevPlanRefeNumb10_asterisk"
    ).textContent = "*";
  } else {
    document
      .getElementById("PartOfAppl_PrevPlanRefeNumb10")
      .removeAttribute("mandatory");
    document.getElementById(
      "PartOfAppl_PrevPlanRefeNumb10_asterisk"
    ).textContent = "";
  }
}

function removeMandatory(element) {
  let main = document.getElementById(element.id);
  if (main.checked) {
    main.removeAttribute("mandatory");
    main.removeAttribute("checked");
  } else {
    main.setAttribute("mandatory", "");
    main.setAttribute("checked", "");
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

function disableField(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  let fields = document.querySelectorAll(".SubmChec_A");
  if (formCount > 1) {
    fields[fields.length - 1].setAttribute("disabled", "");
    fields[fields.length - 1].removeAttribute("mandatory");
    fields[fields.length - 1].value = "";
    console.log(fields[fields.length - 1]);
  }
}

function SubmChec_change(e, pdiv) {
  let element = document.getElementById(e.id);
  let parentDiv = element.parentNode.parentNode.querySelector("cn2-textarea");
  let divs = document.getElementById(pdiv).getElementsByTagName("div");
  let span = document.getElementById("otherPlsSpec");
  for (let div of divs) {
    if (div.hasAttribute("id")) {
      if (div.querySelector("cn2-checkbox").checked) {
        span.innerHTML = "Others, please specify*";
        break;
      } else {
        span.innerHTML = "Others, please specify";
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

function setAsterisk() {
  let el = document.querySelectorAll("[prefix='SubmChec_A']");

  stopHere: for (let x of el) {
    if (x.hasAttribute("mandatory")) {
      document.getElementById("otherPlsSpec").innerHTML =
        "Others, please specify*";
      break stopHere;
    } else {
      document.getElementById("otherPlsSpec").innerHTML =
        "Others, please specify";
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

//------------------START WEB SERVICE----------------------

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
function checkTemplateValid(el) {
  let refId = el.id;
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  switch (refId) {
    case "PartOfAppl_ForRelaFSSBAppr10":
      let textbox = document.getElementById(refId);
      let length = parseInt(textbox.getAttribute("maxlength"));
      if (textbox.value.match(/[F][S][C][0-9]{10}|[T][F][P][0-9]{10}/)) {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else if (textbox.value === "") {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
        textbox.setAttribute("mandatory", "");
      } else {
        textbox.setAttribute("data-invalid", "");
        textbox.setAttribute(
          "data-invalid-message",
          "This field is limited to 13 characters and The FSC Reference format is FSCXXXXXXXXXX or TFPXXXXXXXXXX where X is a valid numeric no."
        );
      }
      break;
    case "PartOfAppl_PrevPlanRefeNumb10":
      if (lastTwo.test(el.value) || lastFour.test(el.value) || el.value === "") {
        // if (/\s/.test(el.value)) {
        document
          .getElementById(el.id)
          .removeAttribute("data-invalid");
      } else {
        document
          .getElementById(el.id)
          .setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The MAA Reference No. format is MAA/A#####/#### or MAA/A#####/## where # is a valid numeric no."
          );
      }
      break;
  }
}
function validateFSERef(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let fscRefNo =
    "fscRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + fscRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgFSERef");
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

function validateMAARef(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let fedbRefNo =
    "fedbRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + fedbRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgMAARef");
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

//-------------------END WEB SERVICE-----------------------
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
