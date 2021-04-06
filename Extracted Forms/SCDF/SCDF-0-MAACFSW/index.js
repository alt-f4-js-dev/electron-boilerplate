document.addEventListener("DOMContentLoaded", function (event) {
  // let datefield = document.getElementById("Date10");
  // if (datefield != null) {
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, "0");
  //   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //   var yyyy = today.getFullYear();

  //   today = dd + "/" + mm + "/" + yyyy;
  //   datefield.value = today;
  // }
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  document.getElementById("menu").style.height = "62vh";
  document.getElementById("page").style.height = "62vh";
});
function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//Validate Template
function checkTemplateValid(el) {
  let refId = el.id;
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  console.log(refId);
  switch (refId) {
    case "PartOfFSSBAppr_plan_no10":
      if (lastTwo.test(el.value) || lastFour.test(el.value) || el.value === "") {
        // if (/\s/.test(el.value)) {
        document
          .getElementById(refId)
          .removeAttribute("data-invalid");
      } else {
        document
          .getElementById(refId)
          .setAttribute("data-invalid", "");
        document
          .getElementById(refId)
          .setAttribute(
            "data-invalid-message",
            "The MAA Reference No. format is MAA/A#####/#### or MAA/A#####/## where # is a valid numeric no."
          );
      }
    // } else {
    //   document.getElementById(el.id).removeAttribute("data-invalid");
    // }
  }
}

//Validate UEN
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

//Mask NRIC
function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
  jsonData[element.id] = replaced;
}

//clear UEN
function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

//Atleast One Radio Button
function atleastOne(element) {
  let radButton = document.querySelectorAll(element);

  for (let target of radButton) {
    target.removeAttribute("mandatory");
    target.removeAttribute("checked");
  }
}

//QP Declaration Change
function QPDeclCertConf_IsPLSUsed_change(el) {
  let radButton = document.getElementById("QPDeclCertConf_IsPLSUsed20");
  let checkButton = document.getElementById("QPDeclFSC0_IDecl_PLSDecl10");

  if (radButton.checked) {
    checkButton.setAttribute("disabled", "");
    checkButton.checked = true;
  } else {
    checkButton.removeAttribute("disabled");
    checkButton.checked = false;
  }

  if (el.id == "QPDeclCertConf_IsPLSUsed20") {
    document.getElementById("note1").removeAttribute("hidden");
  } else {
    document.getElementById("note1").setAttribute("hidden", "");
  }
}

//remove Mandatory
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

//others checkbox change
function SubmChec_B1_change(element) {
  let field = document.getElementById("SubmChec_A1");
  let label = document.getElementById("SubmChec_B1_label");

  if (element.checked) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    label.innerHTML = "Others please specify*";
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
    label.innerHTML = "Others please specify";
  }
}

function SubmChec_MEPlan10_change(el) {
  let fieldname = document.getElementById("drawFileName");
  let field = document.getElementById("SubmCheck_DrawFileName10");

  if (el.checked) {
    fieldname.innerHTML = "Drawing File Name*";
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
  } else {
    fieldname.innerHTML = "Drawing File Name";
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.value = "";
    delete jsonData["fileAttach20"];
  }
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function fileAttachCheck(element, objectName, isAllowMultiple, formName) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
    };
  } else {
    delete jsonData[fileAttach20];
  }
}

function fileAttach(element, objectName, isAllowMultiple) {
  jsonData[objectName] = {
    checkListId: element.id,
    isAllowMultiple: isAllowMultiple,
    formName: document.getElementById(element.id).value.trim() + ".*",
  };
}

//------------- START WEB SERVICE-------------------

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

function validateMaaRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let maaRefNo =
    "maaRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + maaRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgMaaRefNo");
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
  console.log(agencyUrlJSON + "/" + query);

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

function validateQPName(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let qpName =
    "qpName=" + removeSpace(document.getElementById(element.id).valueLabel);
  let query = bcaRefNo + qpName;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgQPName");
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
  console.log(agencyUrlJSON + "/" + query);

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

function removeSpace(getData) {
  let rawData = getData.split(" ");
  let newData = "";
  for (let x of rawData) {
    newData = newData + x;
  }
  return newData.toString();
}

//-------------------END WEB SERVICE-----------------------

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
