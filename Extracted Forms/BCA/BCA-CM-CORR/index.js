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

function ToAgency_id_change(element) {
  let select = document.getElementById(element.id);
  let textarea = document.getElementById("Addr20");
  if (select.valueLabel.trim() === "Building and Construction Authority") {
    textarea.value = `Commissioner of Building Control \nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550`;
  } else {
    textarea.value = `Building & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
  }
  textarea.adjustHeigth();
}
function toggleDecl(el) {
  switch (el.id) {
    case "DeclByAppl_IWeConsTo20":
      if (el.checked) {
        document
          .getElementById("DeclByAppl_IWeConsTo10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByAppl_IWeConsTo10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("DeclByAppl_IWeConsTo10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByAppl_IWeConsTo10")
          .removeAttribute("mandatory");
        document.getElementById("DeclByAppl_IWeConsTo10").value = "";
      }
      break;
    case "DeclByQualPers_IConfThatI10":
      if (el.checked) {
        document.getElementById("RADIO1").removeAttribute("disabled");
        document.getElementById("RADIO2").removeAttribute("disabled");
        if (document.getElementById("RADIO2").checked) {
          document
            .getElementById("SubmChec_HasBeenSubmPrev10")
            .setAttribute("mandatory", "");
          document
            .getElementById("SubmChec_HasBeenSubmPrev10")
            .removeAttribute("disabled");
        } else {
          document
            .getElementById("SubmChec_HasBeenSubmPrev10")
            .setAttribute("disabled", "");
          document
            .getElementById("SubmChec_HasBeenSubmPrev10")
            .removeAttribute("mandatory");
          document.getElementById("SubmChec_HasBeenSubmPrev10").value = "";
        }
      } else {
        document.getElementById("RADIO1").setAttribute("disabled", "");
        document.getElementById("RADIO2").setAttribute("disabled", "");

        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .removeAttribute("mandatory");
        document.getElementById("SubmChec_HasBeenSubmPrev10").value = "";
      }
      break;
    case "RADIO1":
    case "RADIO2":
      if (document.getElementById("RADIO2").checked) {
        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_HasBeenSubmPrev10")
          .removeAttribute("mandatory");
        document.getElementById("SubmChec_HasBeenSubmPrev10").value = "";
      }
      break;
    case "DeclByQualPers_TheApplForAppr20":
      let planTypeSelect = document.querySelectorAll(
        "cn2-select[prefix=DeclByQP_Plan_A]"
      );
      let planTypeBox = document.querySelectorAll(
        "cn2-textbox[prefix=DeclByQP_Type_C]"
      );

      let submittedDate = document.querySelectorAll(
        "cn2-datefield[prefix=DeclByQP_SubmDate_E]"
      );

      let approvalStatus = document.querySelectorAll(
        "input[prefix=DeclByQP_ApprStat_Appr_F]"
      );
      let approvalStatusNo = document.querySelectorAll(
        "input[prefix=DeclByQP_ApprStat_YetToAppr_I"
      );

      let approvalDate = document.querySelectorAll(
        "cn2-datefield[prefix =DeclByQP_ApprDate_H]"
      );
      if (el.checked) {
        for (let select of planTypeSelect) {
          select.setAttribute("mandatory", "");
          select.removeAttribute("disabled");
        }
        for (let box of planTypeBox) {
          box.setAttribute("mandatory", "");
          box.removeAttribute("disabled");
        }
        for (let subDate of submittedDate) {
          subDate.setAttribute("mandatory", "");
          subDate.removeAttribute("disabled");
        }
        for (let status of approvalStatus) {
          status.setAttribute("mandatory", "");
          status.removeAttribute("disabled");
          status.checked = true;
        }
        for (let statusNo of approvalStatusNo) {
          statusNo.setAttribute("mandatory", "");
          statusNo.removeAttribute("disabled");
        }
        for (let apprDate of approvalDate) {
          apprDate.setAttribute("mandatory", "");
          apprDate.removeAttribute("disabled");
        }
      } else {
        for (let select of planTypeSelect) {
          select.setAttribute("disabled", "");
          select.removeAttribute("mandatory");
          select.value = "";
        }
        for (let box of planTypeBox) {
          box.setAttribute("disabled", "");
          box.removeAttribute("mandatory");
          box.value = "";
        }
        for (let subDate of submittedDate) {
          subDate.setAttribute("disabled", "");
          subDate.removeAttribute("mandatory");
          subDate.value = "";
        }
        for (let status of approvalStatus) {
          status.setAttribute("disabled", "");
          status.removeAttribute("mandatory");
          status.checked = false;
        }
        for (let statusNo of approvalStatusNo) {
          statusNo.setAttribute("disabled", "");
          statusNo.removeAttribute("mandatory");
          statusNo.checked = false;
        }
        for (let apprDate of approvalDate) {
          apprDate.setAttribute("disabled", "");
          apprDate.removeAttribute("mandatory");
          apprDate.value = "";
        }
      }
      break;
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

function approval_Change(el) {
  if (checkID(el.id) === "DeclByQP_ApprStat_Appr_F") {
    let suffix = el.id.substring(24, el.id.length);
    let date = document.getElementById("DeclByQP_ApprDate_H" + suffix);
    if (el.checked) {
      date.setAttribute("mandatory", "");
      date.removeAttribute("disabled");
    } else {
      date.setAttribute("disabled", "");
      date.removeAttribute("mandatory");
      date.value = "";
    }
  } else {
    if (el.checked) {
      let suffix = el.id.substring(29, el.id.length);
      let date = document.getElementById("DeclByQP_ApprDate_H" + suffix);

      date.setAttribute("disabled", "");
      date.removeAttribute("mandatory");
      date.value = "";
    }
  }
}

function replyRequest() {
  let reply = document.getElementById("ReplToWritDire10");
  let request = document.getElementById("RequForExte10");
  let reason = document.getElementById("ReasForExte10");
  let reasonLabel = document.getElementById("ReasForExte10_label");

  reply.removeAttribute("mandatory");
  request.removeAttribute("mandatory");
  reply.removeAttribute("checked");
  request.removeAttribute("checked");

  if (reply.checked) {
    reason.removeAttribute("mandatory");
    reason.setAttribute("disabled", "");
    reason.value = "";
    reasonLabel.innerHTML = "Reason(s) for extension:";
  } else if (request.checked) {
    reason.setAttribute("mandatory", "");
    reason.removeAttribute("disabled");
    reasonLabel.innerHTML = reasonLabel.innerHTML + "*";
  }
}

function DeclByAppl_IWeConsTo20_click(el) {
  let field = document.getElementById("DeclByAppl_IWeConsTo10");
  remoMand(el);
  if (el.checked) {
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
  } else {
    field.removeAttribute("mandatory");
    field.value = "";
    field.setAttribute("disabled", "");
  }
}

function DeclByQualPers_TheApplForAppr20_click(el) {
  let pt1 = document.getElementById("DeclByQP_Plan_A10");
  let pt2 = document.getElementById("DeclByQP_Type_C10");
  let sdate = document.getElementById("DeclByQP_SubmDate_E10");
  let approved = document.getElementById("DeclByQP_ApprStat_Appr_F10");
  let yetToApproved = document.getElementById(
    "DeclByQP_ApprStat_YetToAppr_I10"
  );
  let adate = document.getElementById("DeclByQP_ApprDate_H10");
  remoMand(el);

  let fields = [pt1, pt2, sdate, approved, yetToApproved, adate];
  let manda = [pt1, pt2, sdate];
  if (el.checked) {
    approved.checked = true;
    for (let field of fields) {
      field.removeAttribute("disabled");
    }
    for (let mand of manda) {
      mand.setAttribute("mandatory", "");
    }
  } else {
    approved.checked = false;
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
    for (let mand of manda) {
      mand.removeAttribute("mandatory");
    }
  }
}

function DeclByQualPers_IHereApplFor10_click(el) {
  remoMand(el);
}

function DeclByQualPers_IConfThatI10_click(el) {
  let rad1 = document.getElementById("RADIO1");
  let rad2 = document.getElementById("RADIO2");
  let date = document.getElementById("SubmChec_HasBeenSubmPrev10");
  remoMand(el);

  let fields = [rad1, rad2];
  if (el.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
    }
    rad1.checked = true;
  } else {
    date.setAttribute("disabled", "");
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.checked = false;
    }
  }
}

function rad2_click() {
  let date = document.getElementById("SubmChec_HasBeenSubmPrev10");
  let rad = document.getElementById("RADIO2");

  if (rad.checked) {
    date.removeAttribute("disabled");
  } else {
    date.setAttribute("disabled", "");
    date.value = "";
  }
}

function planType() {
  let pTitle = document.getElementById("Project_Title10").value;
  let rad1 = document.getElementById("Genr_Core");
  let rad2 = document.getElementById("Repl_Writ");
  let rad3 = document.getElementById("Appl_with");
  let dbwHide = document.getElementById("Project_Title20_hide");
  let dbw = document.getElementById("Project_Title20");
  let ptHide = document.getElementById("PlanType10_hide");
  let ctHide = document.getElementById("Project_CorrType10_hide");
  let remark = document.getElementById("FIELD1_hide");
  let ctField = document.getElementById("Project_CorrType10");
  let ctLabel = document.getElementById("Project_CorrType10_label");

  rad1.removeAttribute("mandatory");
  rad2.removeAttribute("mandatory");
  rad3.removeAttribute("mandatory");
  rad1.removeAttribute("checked");
  rad2.removeAttribute("checked");
  rad3.removeAttribute("checked");

  displayPage(rad1, rad2, rad3);
  if (rad1.checked) {
    formNameVersion("form__name10", "form__version");
    dbwHide.setAttribute("hidden", "");
    ptHide.setAttribute("hidden", "");

    ctHide.removeAttribute("hidden", "");
    remark.removeAttribute("hidden", "");

    ctField.value = "General Correspondence";
    ctLabel.innerHTML = "Correspondence Type*";
  } else if (rad2.checked) {
    formNameVersion("form__name20", "form__version");
    dbw.value = pTitle;
    dbwHide.removeAttribute("hidden");
    ptHide.removeAttribute("hidden");
    ctHide.setAttribute("hidden", "");
    remark.setAttribute("hidden", "");

    ctField.removeAttribute("mandatory");
    ctField.value = "";
    ctLabel.innerHTML = "Correspondence Type";
  } else if (rad3.checked) {
    formNameVersion("form__name30", "form__version");
    dbw.value = pTitle;
    dbwHide.removeAttribute("hidden");
    ptHide.setAttribute("hidden", "");
    ctHide.setAttribute("hidden", "");
    remark.setAttribute("hidden", "");

    ctField.removeAttribute("mandatory");
    ctField.value = "";
    ctLabel.innerHTML = "";
  }
}

function displayPage(rad1, rad2, rad3) {
  let page3 = document.querySelector(`[target="page3"]`);
  let page3MandFields = document.querySelectorAll(`[group="page3MandFields"]`);
  let page3Fields = document.querySelectorAll(`[group="page3Fields"]`);
  let page3Checks = document.querySelectorAll(`[group="page3Checks"]`);
  let page4 = document.querySelector(`[target="page4"]`);
  let page4MandFields = document.querySelectorAll(`[group="page4MandFields"]`);
  let page4Fields = document.querySelectorAll(`[group="page4Fields"]`);
  let page4Disable = document.getElementById("DeclByAppl_IWeConsTo10");
  let page4MandChecks = document.querySelectorAll(`[group="page4MandChecks"]`);
  let page5 = document.querySelector(`[target="page5"]`);
  let page5MandField = document.getElementById("Member_Member_Name_QP10");
  let page5Fields = document.querySelectorAll(`[group="page5Fields"]`);
  let page5Checks = document.querySelectorAll(`[group="page5Checks"]`);
  let page5MandChecks = document.querySelectorAll(`[group="page5MandChecks"]`);
  let childCount = document.getElementById("particularsOfApplicationForm")
    .childElementCount;
  if (rad1.checked) {
    page3.setAttribute("hidden", "");
    page3.removeAttribute("page-number");
    page4.setAttribute("hidden", "");
    page4.removeAttribute("page-number");
    page4Disable.setAttribute("disabled", "");
    page4Disable.removeAttribute("mandatory");
    page5.setAttribute("hidden", "");
    page5.removeAttribute("page-number");

    for (let page3Field of page3Fields) {
      page3Field.value = "";
    }

    for (let page3MandField of page3MandFields) {
      page3MandField.removeAttribute("mandatory");
      page3MandField.value = "";
    }

    for (let page3Check of page3Checks) {
      page3Check.checked = false;
      page3Check.removeAttribute("mandatory");
      page3Check.removeAttribute("checked");
    }

    for (let page4MandField of page4MandFields) {
      page4MandField.removeAttribute("mandatory");
      page4MandField.value = "";
    }

    for (let page4Field of page4Fields) {
      page4Field.value = "";
    }
    for (let page4MandCheck of page4MandChecks) {
      page4MandCheck.checked = false;
      page4MandCheck.removeAttribute("mandatory");
      page4MandCheck.removeAttribute("checked");
    }
    page5MandField.removeAttribute("mandatory");
    page5MandField.value = "";
    for (let page5Field of page5Fields) {
      page5Field.value = "";
    }
    for (let page5Check of page5Checks) {
      page5Check.checked = false;
    }
    for (let page5MandCheck of page5MandChecks) {
      page5MandCheck.checked = false;
      page5MandCheck.removeAttribute("mandatory");
      page5MandCheck.removeAttribute("checked");
    }
  } else if (rad2.checked) {
    page3.setAttribute("page-number", "3");
    page3.removeAttribute("hidden");
    page4.removeAttribute("page-number");
    page4.setAttribute("hidden", "");
    page4Disable.setAttribute("disabled", "");
    page4Disable.removeAttribute("mandatory");
    page5.removeAttribute("page-number");
    page5.setAttribute("hidden", "");

    for (let page3MandField of page3MandFields) {
      page3MandField.setAttribute("mandatory", "");
    }

    for (let page3Check of page3Checks) {
      page3Check.setAttribute("mandatory", "");
      page3Check.setAttribute("checked", "");
    }

    for (let page4MandField of page4MandFields) {
      page4MandField.removeAttribute("mandatory");
      page4MandField.value = "";
    }
    for (let page4Field of page4Fields) {
      page4Field.value = "";
    }
    for (let page4MandCheck of page4MandChecks) {
      page4MandCheck.checked = false;
      page4MandCheck.removeAttribute("mandatory");
      page4MandCheck.removeAttribute("checked");
    }
    page5MandField.removeAttribute("mandatory");
    page5MandField.value = "";
    for (let page5Field of page5Fields) {
      page5Field.value = "";
    }
    for (let page5Check of page5Checks) {
      page5Check.checked = false;
    }
    for (let page5MandCheck of page5MandChecks) {
      page5MandCheck.checked = false;
      page5MandCheck.removeAttribute("mandatory");
      page5MandCheck.removeAttribute("checked");
    }
  } else if (rad3.checked) {
    page3.setAttribute("hidden", "");
    page3.removeAttribute("page-number");
    page4.removeAttribute("hidden");
    page4.setAttribute("page-number", "3");
    page5.removeAttribute("hidden");
    page5.setAttribute("page-number", "4");

    for (let page3Field of page3Fields) {
      page3Field.value = "";
    }

    for (let page3MandField of page3MandFields) {
      page3MandField.removeAttribute("mandatory");
      page3MandField.value = "";
    }

    for (let page3Check of page3Checks) {
      page3Check.checked = false;
      page3Check.removeAttribute("mandatory");
      page3Check.removeAttribute("checked");
    }
    if (childCount > 1) {
      let formField = document.querySelectorAll(".form1");
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let page4MandField of page4MandFields) {
      page4MandField.setAttribute("mandatory", "");
    }

    for (let page4MandCheck of page4MandChecks) {
      page4MandCheck.setAttribute("mandatory", "");
      page4MandCheck.setAttribute("checked", "");
    }

    page5MandField.setAttribute("mandatory", "");
    for (let page5MandCheck of page5MandChecks) {
      page5MandCheck.setAttribute("mandatory", "");
      page5MandCheck.setAttribute("checked", "");
    }
  }
}

function getDetails() {
  let data = [
    {
      "BCA(BP) & (TOP)": [
        {
          Email: "bca_enquiry@bca.gov.sg",
          TelNo: "1800-3425222",
          AreaOfSupp: "Policies",
        },
      ],
    },
  ];
  return data;
}

function inputZero(element) {
  if (element.value > 0 && element.value < 10) {
    document.getElementById(element.id).value =
      "00" + document.getElementById(element.id).value;
  } else if (element.value > 9 && element.value < 100) {
    document.getElementById(element.id).value =
      "0" + document.getElementById(element.id).value;
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

function removeUENerror() {
  let childCount = document.getElementById("particularsOfApplicationForm")
    .childElementCount;
  let uen = document.querySelectorAll("[prefix='Members_UEN_OWNER']");
  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
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
    d.getFullYear() > 9999
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
  document.getElementById("Members_UEN_OWNER" + id + "0").value = "";
  document
    .getElementById("Members_UEN_OWNER" + id + "0")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + id + "0")
    .removeAttribute("data-invalid-message");
}

function togglePartQp() {
  document.getElementById("Members_UEN_QP10").value = "";
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

function PartOfAppl_PlanType_keypress(event, element) {
  let textBox = document.getElementById(element.id);
  let keynum;
  if (window.event) {
    keynum = event.keyCode;
  } else if (event.which) {
    keynum = event.which;
  }
  let pressed = String.fromCharCode(keynum);

  if (textBox.value === "00") {
    if (pressed === "0") {
      event.preventDefault();
    }
  }
}

function PartOfAppl_PlanType_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value.trim() === "000") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Plan Type should not be 000. Please try again"
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

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

          if (id == "Repl_Writ" && targetElement.checked){
            jsonData["FormName10"] = "BCA-BP-BPWD01";
          }else if (id == "Appl_with" && targetElement.checked){
            jsonData["FormName10"] = "BCA-BP-WDLBP";
          }else if (id == "Genr_Core" && targetElement.checked){
            jsonData["FormName10"] = "ESS-CORR";
          }
          break;
        case "CN2-SELECT":
          if (
            targetElement.hasAttribute("data-options") &&
            !targetElement.hasAttribute("options")
          ) {
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;
          } else {
            jsonData[id] = targetElement.value;
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
          jsonData[id] = targetElement.value;
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
