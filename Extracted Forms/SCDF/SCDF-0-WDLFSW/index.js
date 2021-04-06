document.addEventListener("DOMContentLoaded", function (event) {
  showMessage(
    "Please note that QP Company/Firm name is mandatory for all SCDF submission. Please fill up before any submission."
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
function PartOfAppl_FSSBRefeNumb10_blur(element) {
  let textbox = document.getElementById(element.id);
  let maxlength = parseInt(textbox.getAttribute("maxlength"));
  let length = textbox.value.trim().length;
  if (maxlength !== length && textbox.value.trim() !== "") {
    textbox.setAttribute("data-invalid", "");
    textbox.setAttribute(
      "data-invalid-message",
      "The format of the reference no. is XXX/XYYYY/YYYY where X is a valid character and Y is a valid number."
    );
  } else if (textbox.value.trim() === "") {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  }
}
function ConfByQualPers_AnApplForAppr40_change(element) {
  let fields = [
    // document.getElementById("ConfByQualPers_AnApplForAppr10"),
    // document.getElementById("ConfByQualPers_AnApplForAppr20"),
    // document.getElementById("ConfByQualPers_AnApplForAppr30"),
  ];

  if (element.checked) {
    for (let field of fields) {
      field.setAttribute("mandatory", "");
      field.removeAttribute("disabled");
    }
  } else {
    for (let field of fields) {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.value = "";
    }
  }
}
function ConfByQualPers_IHereConfThat10_change(element) {
  // let textbox = document.getElementById("ConfByQualPers_IHereConfThat10");

  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}
function ConfByQualPers_AnApplForAppr10_change(element, datefield) {
  let textbox = document.getElementById(datefield);
  let datefieldMax = document.getElementById(element.id);
  datefieldMax.setAttribute("max", textbox.value);
}
function ConfByQualPers_AnApplForAppr30_change(element, datefield) {
  let textbox = document.getElementById(datefield);
  let datefieldMax = document.getElementById(element.id);
  datefieldMax.setAttribute("min", textbox.value);
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
  let dd = document.getElementById(element).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element).value = replaced;
}

function ConfByAppl_IConsToThe10_change(element) {
  element = document.getElementById(element.id);
  if (element.checked) {
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");
  } else {
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
  }
}

function DeclByQualPers_QPDecl10_change(element) {
  element = document.getElementById(element.id);
  let datefield1 = document.getElementById("ConfByQualPers_AnApplForAppr10");
  let datefield2 = document.getElementById("ConfByQualPers_AnApplForAppr30");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  let fields = [
    document.getElementById("ConfByQualPers_AnApplForAppr10"),
    document.getElementById("ConfByQualPers_AnApplForAppr20"),
    document.getElementById("ConfByQualPers_AnApplForAppr30"),
    document.getElementById("ConfByQualPers_IHereConfThat10"),
  ];
  if (element.checked) {
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");

    datefield1.setAttribute("max", today);
    //datefield2.setAttribute("max", today);

    for (let e of fields) {
      e.setAttribute("mandatory", "");
      e.removeAttribute("disabled");
    }
  } else {
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
    for (let e of fields) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      e.removeAttribute("min");
      e.removeAttribute("max");
      e.value = "";
    }
  }
}

function DeclByQualPers_PlanSubmDate10_change(element) {
  let datefield = document.getElementById(element.id);
  let datefield2 = document.getElementById("ConfByQualPers_AnApplForAppr30");
  datefield2.setAttribute("min", datefield.value);

  var today = new Date();

  let tempDate1 = new Date(datefield.value).getTime();
  let tempDate2 = new Date(datefield2.value).getTime();

  // if (tempDate1 > today) {
  //   showMessage("Date cannot be later than today. Please re-enter date");
  //   datefield.value = "";
  //   datefield.removeAttribute("mandatory");
  //   datefield.setAttribute("mandatory", "");
  // }

  if (datefield2.value !== "" && datefield.value !== "") {
    if (tempDate1 > tempDate2) {
      showMessage(
        "Approval Date cannot be earlier than the submit date. Please re-enter date"
      );
      datefield2.value = "";
      datefield2.removeAttribute("mandatory");
      datefield2.setAttribute("mandatory", "");
    }
  }
}

function DeclByQualPers_PlanApprStatDate10_change(element) {
  let datefield = document.getElementById(element.id);
  let datefield2 = document.getElementById("ConfByQualPers_AnApplForAppr10");
  datefield2.setAttribute("max", datefield.value);

  var today = new Date();

  let tempDate2 = new Date(datefield.value).getTime();
  let tempDate1 = new Date(datefield2.value).getTime();

  // if (tempDate2 > today) {
  //   showMessage("Date cannot be later than today. Please re-enter date");
  //   datefield.value = "";
  //   datefield.removeAttribute("mandatory");
  //   datefield.setAttribute("mandatory", "");
  // }

  if (datefield2.value !== "" && datefield.value !== "") {
    if (tempDate1 > tempDate2) {
      showMessage(
        "Approval Date cannot be earlier than the submit date. Please re-enter date"
      );
      datefield.value = "";
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
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

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  jsonData["Member_IC_Passport_No_FSBAPPL10"] = dd;
  document.getElementById(element.id).value = replaced;
}

//-------------------START WEB SERVICE-------------------

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

function validateSCDFPlanRef(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let scdfRefNo =
    "scdfRefNo=" + removeSlash(document.getElementById(element.id).value);
  let esNo = "esNo=ES20200404-12345";
  let query = bcaRefNo + scdfRefNo + esNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgSCDFPlanRef");
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
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let qpName =
    "qpName=" + removeSpace(document.getElementById(element.id).valueLabel);
  let esNo = "esNo=ES20200404-12345";
  let query = bcaRefNo + qpName + esNo;
  console.log(agencyUrlJSON + "/" + query);
  let mainElement = document.getElementById(element.id);
  let textbox = document.querySelector(`[QPtxt]`);
  let qpFields = document.querySelectorAll(`[QP-Field]`);
  let qpLabels = document.querySelectorAll(`[QP-Label]`);
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

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        errMsg.innerHTML = "Not valid/No record found in agency database";
        mainElement.setAttribute("hidden", "");
        mainElement.removeAttribute("mandatory");
        textbox.removeAttribute("hidden");
        textbox.setAttribute("mandatory", "");
        textbox.value = mainElement.valueLabel;
        textbox.setAttribute("id", mainElement.getAttribute("id"));
        for (let x of qpFields) {
          x.setAttribute("mandatory", "");
          x.removeAttribute("disabled");
        }
        for (let x of qpLabels) {
          x.innerHTML = "*";
        }
      }
    }
  }
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeSpace(getData) {
  let rawData = getData.split(" ");
  let newData = rawData[0];
  for (let i = 1; i < rawData.length; i++) {
    newData = newData + rawData[i];
  }
  return newData.toString();
}

//--------------------END WEB SERVICE--------------------

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
