document.addEventListener("DOMContentLoaded", function () {
  showMessage(
    "Please note that Fire Safety Engineer company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
  );
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

function DeclByAppl_IHaveAppoAs30_change(element) {
  let select = document.getElementById("DeclByAppl_IHaveAppoAs40"); //DeclByAppl_IHaveAppoAs40
  let elementSelect = document.getElementById(element.id);
  if (elementSelect.valueLabel === "him") {
    select.value = "Mr";
  } else if (elementSelect.valueLabel === "her") {
    select.value = "Ms";
  }
}

function Member_Member_Name_QP20_change(element) {
  let checkbox = document.getElementById("DeclByAppl_IHaveAppoAs30"); //DeclByAppl_IHaveAppoAs30
  let field = document.getElementById("DeclByAppl_IHaveAppoAs10"); //<!-- DeclByAppl_IHaveAppoAs10 -->
  if (checkbox.checked) {
    field.value = document.getElementById(element.id).valueLabel;
  }
}

function SubmChec_change(element) {
  let textbox = document
    .getElementById(element.id)
    .parentNode.parentNode.querySelector("cn2-textarea");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function DeclByAppl_IHaveAppoAs40_change(element) {
  let select = document.getElementById("Member_Member_Name_QP20");
  let fields = [
    document.getElementById("DeclByAppl_IHaveAppoAs40"), //DeclByAppl_IHaveAppoAs40
    document.getElementById("DeclByAppl_IHaveAppoAs20"), // <!--DeclByAppl_IHaveAppoAs20-->
  ];
  let field = document.getElementById("DeclByAppl_IHaveAppoAs10"); //<!-- DeclByAppl_IHaveAppoAs10 -->
  if (element.checked) {
    for (let x = 0; x < fields.length; x++) {
      fields[x].setAttribute("mandatory", "");
      fields[x].removeAttribute("disabled");
    }
    if (select.valueLabel !== "Please Select") {
      field.value = select.valueLabel;
    }
    let name = document.getElementById("Member_Member_Name_QP10");
    if (name.value !== "") {
      field.value = name.data[name.value].Member_Member_Name_QP10;
    }
  } else {
    for (let x = 0; x < fields.length; x++) {
      fields[x].setAttribute("disabled", "");
      fields[x].removeAttribute("mandatory");
      fields[x].value = "";
    }
    field.value = "";
  }
}

function loadDeclNameNRIC(el, maskId, nricId, declaApp, checkBox) {
  let select = document.getElementById(el.id);
  let decName = document.getElementById("DeclByFSE_FSEName10");
  let maskVal = document.getElementById("Member_IC_Passport_No_QP10_mask");
  let nricVal = document.getElementById("Member_IC_Passport_No_QP10");
  let maskIdVal = document.getElementById(maskId.id);
  let nric = document.getElementById(nricId.id);
  let textBox = document.getElementById(declaApp.id);
  let check = document.getElementById(checkBox.id);
  let check2 = document.getElementById("DeclByQualPers_IBeinAQual10");

  if (check.checked) {
    textBox.value = select.valueLabel;
  }
  if (check2.checked) {
    decName.value = select.valueLabel;
    maskIdVal.value = maskVal.value;
    nric.value = nricVal.value;
  }
}

function PartOfAppl_change(element) {
  let ForAmenPlanSubm10 = document.getElementById(
    "PartOfAppl_ForAmenPlanSubm10_table"
  );
  let ForAmenPlanSubm10TextTemp = document.getElementById(
    "PartOfAppl_ForAmenPlanSubm10"
  );
  removeValidations(ForAmenPlanSubm10TextTemp);
  document.getElementById("errMsgFEDBPrevRefNo").innerHTML = "";
  switch (element.id) {
    case "PartOfAppl_TypeOfPerformance10":
      if (element.checked) {
        ForAmenPlanSubm10.setAttribute("hidden", "");
        ForAmenPlanSubm10TextTemp.value = "";
      }
      break;
    case "PartOfAppl_TypeOfPlan10":
      if (element.checked) {
        ForAmenPlanSubm10.setAttribute("hidden", "");
        ForAmenPlanSubm10TextTemp.value = "";
      }
      break;
    case "PartOfAppl_TypeOfPlan20":
      if (element.checked) {
        ForAmenPlanSubm10.removeAttribute("hidden");
      }
      break;
  }
}

function StatWhetThisSubm_change() {
  let yes = document.getElementById("PartOfAppl_StatWhetThisSubm10");

  let field = document.getElementById("PartOfAppl_StatWhetThisSubm30");
  let fieldTr = document.getElementById("prefAuditTr");
  if (yes.checked) {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
    field.removeAttribute("data-invalid");
    fieldTr.removeAttribute("hidden");
    //field.setAttribute("data-invalid-message", "");
    document.getElementById("prefAudit").innerHTML =
      "Previous audited SCDF submission reference number*";
  } else {
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.removeAttribute("data-invalid");
    fieldTr.setAttribute("hidden", "");
    //field.setAttribute("data-invalid-message", "");
    field.value = "";
    document.getElementById("prefAudit").innerHTML =
      "Previous audited SCDF submission reference number";
  }
}

function removeManda(element) {
  let check = document.getElementById(element.id);

  if (check.checked) {
    check.removeAttribute("mandatory");
    check.removeAttribute("checked");
  } else {
    check.setAttribute("mandatory", "");
    check.setAttribute("checked", "");
  }
}

function DeclByAppl_IHaveAppoAs10_change(element) {
  let check = document.getElementById(element.id);
  let FSname = document.getElementById("Member_Member_Name_QP10");
  let name = document.getElementById("DeclByAppl_IHaveAppoAs20"); // <!--DeclByAppl_IHaveAppoAs20-->
  let fields = [
    document.getElementById("DeclByAppl_IHaveAppoAs10"), //<!-- DeclByAppl_IHaveAppoAs10 -->
    document.getElementById("DeclByAppl_IHaveAppoAs30"), //DeclByAppl_IHaveAppoAs30
  ];
  if (check.checked) {
    check.removeAttribute("mandatory");
    check.removeAttribute("checked");
    name.value = FSname.valueLabel === "Please Select" ? "" : FSname.valueLabel;
    for (field of fields) {
      field.removeAttribute("disabled");
    }
  } else {
    check.setAttribute("mandatory", "");
    check.setAttribute("checked", "");
    for (field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
    name.value = "";
  }
}

function DeclByFSE_CertSolu10_change(element) {
  let check = document.getElementById(element.id);
  let name = document.getElementById("DeclByFSE_FSEName10");
  let FSname = document.getElementById("Member_Member_Name_QP10");
  let passport = document.getElementById("DeclByFSE_FSENRIC10");
  let passport_mask = document.getElementById("DeclByFSE_FSENRIC10_mask");
  let FSpassport = document.getElementById("Member_IC_Passport_No_QP10");
  let FSpassport_mask = document.getElementById(
    "Member_IC_Passport_No_QP10_mask"
  );

  if (check.checked) {
    name.value = FSname.valueLabel === "Please Select" ? "" : FSname.valueLabel;
    passport.value = FSpassport.value ? FSpassport.value : "";
    passport_mask.value = FSpassport_mask.value ? FSpassport_mask.value : "";
  } else {
    name.value = "";
    passport.value = "";
    passport_mask.value = "";
  }
}

function checkTemplateValid(el) {
  let refId = el.id;
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  switch (refId) {
    case "PartOfAppl_TheRegiNoOf10":
      if (el.value.match(lastFour) || el.value.match(lastTwo) || el.value === "   /      /    ") {
        // if (/\s/.test(el.value)) {
        document.getElementById(el.id).removeAttribute("data-invalid");
      } else if (el.value.match(/[A-Z]{3}[/][A-Z][0-9]{5}[/][0-9]{3}/)) {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The Related SCDF plan format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
          );
      } else {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The Related SCDF plan format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
          );
      }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_StatWhetThisSubm30":
      if (el.value != "   /      /    ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 15 characters only. Please refer a valid SCDF reference file"
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
        document.getElementById(el.id).removeAttribute("mandatory");
        document.getElementById(el.id).setAttribute("mandatory", "");
      }
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
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
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
              "This field is limited to 13 characters and the CON Reference No. format is CON/@YYYYY/YY where Y is a valid numeric no. and where @ is a alphabetic character"
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
    case "PartOfAppl_ForAmenPlanSubm10":
      let textbox = document.getElementById(refId);
      let length = parseInt(textbox.getAttribute("maxlength"));
      if (textbox.value.match(/[A-Z]{4}\/[0-9]{6}\/(([0-9]{2}(?![0-9])))/) || textbox.value.match(/[A-Z]{4}\/[0-9]{6}\/(([0-9]{4}(?![0-9])))/)) {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else if (textbox.value === "") {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else {
        textbox.setAttribute("data-invalid", "");
        textbox.setAttribute(
          "data-invalid-message",
          "This field is limited to 14 characters and The FEDB Reference No. format is FEDB/YYYYYY/YYYY or FEDB/YYYYYY/YY where Y is a valid numeric no."
        );
      }
      break;
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
          "This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
        );
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
      document.getElementById(el.id).removeAttribute("data-invalid-message");
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
  }
}

function DeclByAppl_IHaveAppoAs20_change(element) {
  let select = document.getElementById("DeclByAppl_IHaveAppoAs30"); //DeclByAppl_IHaveAppoAs30
  let elementSelect = document.getElementById(element.id);

  if (elementSelect.valueLabel === "Mr") {
    select.value = "him";
  } else if (elementSelect.valueLabel === "Ms") {
    select.value = "her";
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

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function fileAttachCheck(
  element,
  objectName,
  isAllowMultiple,
  formName,
  sectionName
) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
      sectionName: sectionName,
    };
  } else {
    delete jsonData[objectName];
  }
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

function validateFEDBPrevRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let fedbRefNo =
    "fedbRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + fedbRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgFEDBPrevRefNo");
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

function validateRegNoRelatedSCDF(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let bpmvfpRefNo =
    "bpmvfpRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + bpmvfpRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgRegNoRelatedSCDF");
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

function validateSCDFPrevSubRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let bpmvfpRefNo =
    "bpmvfpRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + bpmvfpRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgSCDFPrevSubRefNo");
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

function validateSCDFConRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON30"];
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let consRefNo =
    "consRefNo=" + removeSlash(document.getElementById(element.id).value);
  let query = bcaRefNo + consRefNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgSCDFConRefNo");
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

function validateWaiveCasRefNo(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON40"];
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
  updateAgencyUrl("agencyUrl40", query);

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

function validateFSERegNo(element) {
  let mainElement = document.getElementById(element);
  let agencyUrlJSON = jsonData["agencyUrlJSON50"];
  let fseRegNo = "fseRegNo=" + mainElement.value;
  let errMsg = document.getElementById("errMsgFSERegNo");
  let label = document.getElementById("MemberRole_Professional_No_QP10_label");
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
    fseRegNo
  );
  updateAgencyUrl("agencyUrl50", fseRegNo);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      label.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.setAttribute("disabled", "");
      } else if ("N" == dataResponse.isValid) {
        mainElement.setAttribute("mandatory", "");
        mainElement.removeAttribute("disabled");
        errMsg.innerHTML = "Not valid/No record found in agency database";
        label.innerHTML = "*";
      }
    }
  }
}

//------------- END WEB SERVICE-------------------

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
