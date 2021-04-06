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

function chk_storeyShelter_change(element, textbox) {
  let radioGroup = [
    document.getElementById("opt_ss"),
    document.getElementById("opt_stairshelter"),
  ];
  let textboxEl = document.getElementById(textbox);
  let div = document.querySelectorAll("[group-id = 'shelterCat']");

  if (element.checked) {
    for (let target of radioGroup) {
      target.removeAttribute("disabled");
      target.setAttribute("checked", "");
      target.setAttribute("mandatory", "");
    }
    for (let divTarget of div) {
      divTarget.removeAttribute("hidden");
    }
    textboxEl.removeAttribute("disabled");
    textboxEl.setAttribute("mandatory", "");
    document.getElementById("noSsDeV").innerHTML =
      "No. of SS in the development*";
  } else {
    for (let target of radioGroup) {
      target.setAttribute("disabled", "");
      target.removeAttribute("checked");
      target.removeAttribute("mandatory");
      target.checked = false;
    }
    for (let divTarget of div) {
      divTarget.setAttribute("hidden", "");
    }
    textboxEl.setAttribute("disabled", "");
    textboxEl.removeAttribute("mandatory");
    textboxEl.value = "";
    document.getElementById("noSsDeV").innerHTML =
      "No. of SS in the development";
  }
}
function chk_Household_change(element, textbox) {
  let textboxEl = document.getElementById(textbox);
  if (element.checked) {
    textboxEl.removeAttribute("disabled");
    textboxEl.setAttribute("mandatory", "");
    document.getElementById("noHsDeV").innerHTML =
      "No. of HS in the development*";
  } else {
    textboxEl.setAttribute("disabled", "");
    textboxEl.removeAttribute("mandatory");
    textboxEl.value = "";
    document.getElementById("noHsDeV").innerHTML =
      "No. of HS in the development";
  }
}
function PartOfWaiv_change() {
  let parentDiv = document.getElementById("addressForm");
  let targetDiv = parentDiv.getElementsByTagName("div")[
    parentDiv.getElementsByTagName("div").length - 1
  ];
  let textareas = targetDiv.querySelectorAll("cn2-textarea", "cn2-textbox");
  setAddButton(textareas);
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
    document.getElementById("waivId").removeAttribute("disabled");
  } else {
    document.getElementById("waivId").setAttribute("disabled", "");
  }
}
// function addWaiverForm() {
// 	document.getElementById('waivId').setAttribute('disabled', '');
// 	showMessage(
// 		'Please note that QP company/Firm Name is mandatory for all FSSD submission. Please full up before any submission.'
// 	);
// }
function deleteWaiverForm() {
  let parentDiv = document.getElementById("addressForm");
  let label = parentDiv.querySelectorAll('[prefix="PartOfWaivItem_A"]');
  let last = 0;
  for (let count = 0; count < label.length; count++) {
    label[count].value = count + 1;
    last = count + 1;
  }
  let targetDiv = parentDiv.getElementsByTagName("div")[
    parentDiv.getElementsByTagName("div").length - 1
  ];
  let textareas = targetDiv.querySelectorAll("cn2-textarea");
  setAddButton(textareas);
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

function selecCat() {
  let checkBox1 = document.getElementById("chk_Household");
  let checkBox2 = document.getElementById("chk_storeyShelter");
  if (checkBox1.checked || checkBox2.checked) {
    document.getElementById("chk_Household").removeAttribute("checked");
    document.getElementById("chk_storeyShelter").removeAttribute("checked");
    document.getElementById("chk_Household").removeAttribute("mandatory");
    document.getElementById("chk_storeyShelter").removeAttribute("mandatory");
  } else if (!checkBox1.checked || !checkBox2.checked) {
    document.getElementById("chk_Household").setAttribute("checked", "");
    document.getElementById("chk_storeyShelter").setAttribute("checked", "");
    document.getElementById("chk_Household").setAttribute("mandatory", "");
    document.getElementById("chk_storeyShelter").setAttribute("mandatory", "");
  }
}

function rbChange() {
  let radBtn1 = document.getElementById("opt_ss");
  let radBtn2 = document.getElementById("opt_stairshelter");

  if (radBtn1.checked || radBtn2.checked) {
    document.getElementById("opt_ss").removeAttribute("checked");
    document.getElementById("opt_stairshelter").removeAttribute("checked");
    document.getElementById("opt_ss").removeAttribute("mandatory");
    document.getElementById("opt_stairshelter").removeAttribute("mandatory");
  }
}

function checkTemplateValid(el) {
  let refId = el.id;
  console.log(refId);
  switch (refId) {
    case "PartOfAppl_WaivCaseRefNo10":
      // if (el.value != "A  / / /W") {
      //   if (/\s/.test(el.value)) {
      //     document.getElementById(el.id).setAttribute("data-invalid", "");
      //     document
      //       .getElementById(el.id)
      //       .setAttribute(
      //         "data-invalid-message",
      //         "This field is limited to 9 characters and the Waiver Reference No. format is AYY/Y/Y/W where Y is a valid numeric no."
      //       );
      //   } else {
      //     document.getElementById(el.id).removeAttribute("data-invalid");
      //   }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_QRARefeNumb10":
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
    case "PartOfAppl_PreSubmConsRef10":
      if (el.value != "CON/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 13 characters and the CON Reference No. format is CON/@YYYYY/YY where Y is a valid numeric no. and @ is a alphabetic character"
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

function Member_Email_Address1_QP10_change(element) {
  let textbox = document.getElementById(element.id);
  let value = textbox.value.trim();
  let pass = false;
  if (textbox.value.length !== 0) {
    if (value.includes(",")) {
      let emails = value.split(",");
      for (email of emails) {
        email = email.trim();
        if (validateEmail(email) || email === "") {
          pass = true;
        } else {
          pass = false;
        }
      }
    } else {
      if (textbox.value.length !== 0) {
        if (validateEmail(textbox.value)) {
          pass = true;
        } else {
          pass = false;
        }
      }
    }
    if (textbox.value.length !== 0) {
      if (pass) {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else {
        textbox.setAttribute("data-invalid", "");
        textbox.setAttribute("data-invalid-message", "Invalid Format");
      }
    }
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
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

function uenValidate(el) {
  if (el.value != "          ") {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "This field is limited to 10 characters and the UEN format is #########@ where # are in numeric [0-9] characters and @ is an alphabetic [A-Z] character"
        );
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
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

//enable Other Field
function enabOthers(element) {
  let other = document.getElementById("others_field");

  if (element.id == "RADIO1") {
    other.setAttribute("mandatory", "");
    other.removeAttribute("hidden");
  } else {
    other.setAttribute("hidden", "");
    other.removeAttribute("mandatory");
    other.value = "";
  }
}

function mainAddInstance(containerId, formId) {
  let prefix = "";
  let suffix = "";
  let suffixes = [];
  let parent = document.getElementById(containerId);
  let index =
    parent.querySelectorAll(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    ).length + 1;

  //enable delete
  if (parent.querySelector("[danger-main]") != null)
    if (parent.querySelector("[danger-main]").hasAttribute("disabled"))
      parent.querySelector("[danger-main]").removeAttribute("disabled");

  let clone = parent
    .querySelector(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    )
    .cloneNode(true);

  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form],[sub-sub-container], [sub-sub-form]"
  );
  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = index + element.getAttribute("suffix");
    suffix = suffixes.join("_");
    element.id = prefix + suffix;
    if (element.value != null) {
      element.value = "";
      jsonData[element.id] = "";
    } else {
      if (element.checked != null) {
        element.checked = false;
        jsonData[element.id] = false;
      }
    }
  }

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[0] = index + clone.getAttribute("suffix");
  suffix = suffixes.join("_");
  clone.id = prefix + suffix;

  let label = clone.querySelector("[main-label]");
  if (label != null) {
    if (label.value != null) {
      label.value = index;
    } else {
      label.innerHTML = index;
    }
  }

  let accordions = clone.querySelectorAll("[accordion]");
  if (accordions.length > 0) {
    for (let accordion of accordions) {
      prefix = accordion.getAttribute("prefix");
      suffix = accordion.getAttribute("suffix");
      suffixes = suffix.split("_");
      suffixes[0] = index + accordion.getAttribute("suffix");
      accordion.id = prefix + suffixes.join("_");
      if (accordion.hasAttribute("href"))
        accordion.setAttribute("href", accordion.id);
    }
  }

  elements = clone.querySelectorAll("cn2-switchbutton");
  if (elements.length > 0) {
    for (let element of elements) {
      let yesId = element.parentNode.querySelector("cn2-checkbox").id;
      let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
      element.setAttribute("switch-id", yesId);
      element.setAttribute(
        "event-change",
        "switchButton(this,'" + yesId + "','" + noId + "')"
      );
    }
  }

  parent.appendChild(clone);
}

function mainDeleteInstance(callerBtnId, containerId, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let prefix = "";
  let suffixes = [];
  let container = document.getElementById(containerId);
  let form = document.getElementById(formPrefix + suffix);
  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1)
    if (forms[0].querySelector("[danger-main]") != null)
      forms[0].querySelector("[danger-main]").setAttribute("disabled", "");
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form]"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[0] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else if (element.checked != null) jsonData[element.id] = element.checked;
    }

    let labels = forms[x].querySelectorAll("[main-label]");
    if (labels.length > 0) {
      for (let label of labels) {
        if (label.value != null) label.value = x + 1;
        else label.innerHTML = x + 1;
      }
    }

    let accordions = forms[x].querySelectorAll("[accordion]");
    if (accordions.length > 0) {
      for (let accordion of accordions) {
        prefix = accordion.getAttribute("prefix");
        suffix = accordion.id.replace(prefix, "");
        suffixes = suffix.split("_");
        suffixes[0] = x + 1 + accordion.getAttribute("suffix");
        accordion.id = prefix + suffixes.join("_");
        if (accordion.hasAttribute("href"))
          accordion.setAttribute("href", accordion.id);
      }
    }

    elements = forms[x].querySelectorAll("cn2-switchbutton");
    if (elements.length > 0) {
      for (let element of elements) {
        let yesId = element.parentNode.querySelector("cn2-checkbox").id;
        let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
        element.setAttribute("switch-id", yesId);
        element.setAttribute(
          "event-change",
          "switchButton(this,'" + yesId + "','" + noId + "')"
        );
      }
    }

    prefix = forms[x].getAttribute("prefix");
    suffix = forms[x].id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = x + 1 + forms[x].getAttribute("suffix");
    forms[x].id = prefix + suffixes.join("_");
  }
}

function removeDataFromJson(containerId) {
  let elements = document
    .getElementById(containerId)
    .querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
  for (let element of elements) delete jsonData[element.id];
}

function nricMaskingQP(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function nricMaskingApp(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

//----------------------START WEB SERVICE---------------------

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

function validateConsRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
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

function validateShelterWaiverRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let shelterWaiverRefNo =
    "shelterWaiverRefNo=" +
    removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + shelterWaiverRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgShelterWaiverRefNo");
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

//----------------------END WEB SERVICE---------------------
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
