let currentPage = "page1";

// Defaults
document.addEventListener("DOMContentLoaded", function () {
  //fullPermanceOnLoad();
  peerNRIC();
  addClickEventToPageNavigation();
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  showMessage(
    "Please note that QP company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
  );

  let datefield = document.getElementById("DateNowLabel");
  let jsonDate = jsonData["DateNowLabel"];
  if (jsonDate === "") {
    if (datefield != null) {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;
      datefield.value = today;
    }
  }
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
function peerNRIC() {
  let nric = document.getElementById("Member_IC_Passport_No_PeerRev10_mask");
  nricMaskingPeer(nric);
}

function nricMaskingPeer(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function fullPermanceOnLoad() {
  document.querySelector(
    `[switch-id="PartOfAppl_IsWorkOnExistingPBArea10"]`
  ).checked = true;
  let yes = document.getElementById("PartOfAppl_IsFullPerfBaseSub10");
  if (yes.checked) {
    document.querySelector(
      `[switch-id="PartOfAppl_IsWorkOnExistingPBArea10"]`
    ).checked = false;
  }
}

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

//Functions
function DeclByQualPers_QPDeclCertSyst10_change(element) {
  let field = document.getElementById("DeclByQualPers_QPDeclCertSyst_PropSyst10");
  let field1 = document.getElementById("DeclByQualPers_QPDeclCertSyst_Prov10");
  if (element.checked) {
    field.removeAttribute("disabled");
    field1.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field1.setAttribute("disabled", "");
    field.value = "";
    field1.value = "";
  }
}

function PaymMode_change(element) {
  let field = document.getElementById("PaymMode_Giro20");
  let field2 = document.getElementById("PaymMode_Giro30");
  let field3 = document.getElementById("Payment_jav_10");
  if (element.id === "PaymMode_Hide10") {
    field3.removeAttribute("disabled");
    field3.setAttribute("mandatory", "");
    field.setAttribute("disabled", "");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory", "");
    field.removeAttribute("mandatory", "");
    field.value = "";
    field2.value = "";
  } else if (element.id === "PaymMode_Giro10") {
    field3.setAttribute("disabled", "");
    field3.removeAttribute("mandatory");
    field3.value = "";
    field.setAttribute("mandatory", "");
    field2.setAttribute("mandatory", "".se);
    field.removeAttribute("disabled");
    field2.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field2.setAttribute("disabled", "");
    field2.removeAttribute("mandatory", "");
    field.removeAttribute("mandatory", "");
    field.value = "";
    field2.value = "";
    field3.setAttribute("disabled", "");
    field3.removeAttribute("mandatory");
    field3.value = "";
  }
}

function DeclByAppl_AppoPeerRev30_change(element) {
  let select = document.getElementById("DeclByAppl_AppoPeerRev10");
  let elementSelect = document.getElementById(element.id);
  if (elementSelect.valueLabel === "him") {
    select.value = "Mr";
  } else if (elementSelect.valueLabel === "her") {
    select.value = "Ms";
  }
}

function DeclByAppl_AppoPeerRev10_change(element) {
  let select = document.getElementById("DeclByAppl_AppoPeerRev30");
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
  if (elementSelect.valueLabel === "him") {
    select.value = "Mr";
  } else if (elementSelect.valueLabel === "her") {
    select.value = "Ms";
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

function DeclByAppl_AppoFSE30_change(element) {
  let select = document.getElementById("DeclByAppl_AppoFSE10");
  let elementSelect = document.getElementById(element.id);
  if (elementSelect.valueLabel === "him") {
    select.value = "Mr";
  } else if (elementSelect.valueLabel === "her") {
    select.value = "Ms";
  }
}

function DeclByAppl_AppoFSE10_change(element) {
  let select = document.getElementById("DeclByAppl_AppoFSE30");
  let elementSelect = document.getElementById(element.id);
  if (elementSelect.valueLabel === "Mr") {
    select.value = "him";
  } else if (elementSelect.valueLabel === "Ms") {
    select.value = "her";
  }
}

function Member_Member_Name_QP10_change(element) {
  let checkbox = document.getElementById("DeclByAppl_IHaveAppoAs40");
  let field = document.getElementById("DeclByAppl_IHaveAppoAs20");
  if (checkbox.checked) {
    field.value = document.getElementById(element.id).valueLabel;
  }
}

function notSamePerson() {
  let peer = document.getElementById("Member_Member_Name_PeerRev10");
  let fire = document.getElementById("Member_Member_Name_FSE10");
  let message = document.getElementById("Member_Member_Name_FSE10_notSame");
  let message2 = document.getElementById(
    "Member_Member_Name_PeerRev10_notSame"
  );

  let peerfirm = document.getElementById("Member_FSE_Firm_Name_FSE20");
  let firefirm = document.getElementById("Member_FSE_Firm_Name_FSE10");
  let message3 = document.getElementById("Member_FSE_Firm_Name_FSE10_notSame");
  let message4 = document.getElementById("Member_FSE_Firm_Name_FSE20_notSame");

  if (peer.valueLabel === fire.valueLabel) {
    message.removeAttribute("hidden");
    message.setAttribute("mandatory", "");
    message2.removeAttribute("hidden");
    message2.setAttribute("mandatory", "");

    if (peerfirm.value == firefirm.value) {
      message3.removeAttribute("hidden");
      message3.setAttribute("mandatory", "");
      message4.removeAttribute("hidden");
      message4.setAttribute("mandatory", "");
    } else {
      message3.setAttribute("hidden", "");
      message3.removeAttribute("mandatory");
      message4.setAttribute("hidden", "");
      message4.removeAttribute("mandatory");
    }
  } else {
    message.setAttribute("hidden", "");
    message.removeAttribute("mandatory");
    message2.setAttribute("hidden", "");
    message2.removeAttribute("mandatory");

    if (peerfirm.value == firefirm.value) {
      message3.removeAttribute("hidden");
      message3.setAttribute("mandatory", "");
      message4.removeAttribute("hidden");
      message4.setAttribute("mandatory", "");
    } else {
      message3.setAttribute("hidden", "");
      message3.removeAttribute("mandatory");
      message4.setAttribute("hidden", "");
      message4.removeAttribute("mandatory");
    }
  }
}

function DeclByAppl_IHaveAppoAs40_change(element) {
  let select = document.getElementById("Member_Member_Name_FSBAPPL10");
  let fields = [
    document.getElementById("DeclByAppl_IHaveAppoAs10"),
    document.getElementById("DeclByAppl_IHaveAppoAs30"),
    //document.getElementById("DeclByAppl_IHaveAppoAs20")
  ];
  let field = document.getElementById("DeclByAppl_IHaveAppoAs20");
  if (element.checked) {
    for (let x = 0; x < fields.length; x++) {
      fields[x].removeAttribute("disabled");
      fields[x].setAttribute("mandatory", "");
    }
    if (select.valueLabel != "Please Select") {
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
  otherLabel();
}

function otherLabel() {
  let checks = document.querySelectorAll(`[group="othersCheck"]`);
  let label = document.getElementById("SubmChec_A1_label");
  let pass = false;

  for (let check of checks) {
    if (check.checked) {
      pass = true;
    }
  }

  if (pass == true) {
    label.innerHTML = "3. Others, Please specify*";
  } else {
    label.innerHTML = "3. Others, Please specify";
  }
}

function PlanFeeComp_FlooAreaNo10_change(element, textbox) {
  let atextbox = document.getElementById(textbox);
  atextbox.value = checkValueNaN(
    Math.ceil(
      parseFloat(document.getElementById(element.id).value) * 90
    ).toFixed(2)
  );
  document.getElementById("PaymMode_Paym10").value = parseFloat(
    atextbox.value
  ).toFixed(2);
}

function checkValueNaN(value) {
  if (isNaN(value)) {
    value = 0;
  }
  return value;
}

function linkToPage11() {
  let targetPageMenu = document.querySelector(
    "cn2-nav-button[target='page11']"
  );
  targetPageMenu.click;
}

function PartOfAppl_TypeOfPlan1030_change(element) {
  let buildingCat = document.getElementById("PartOfAppl_BldgC10");
  let buildingCatLabel = document.getElementById("PartOfAppl_label");
  let forAmenPlanSub = document.getElementById("ForAmenPlanSubm10_Label");
  let amendmentPlan = document.getElementById("PartOfAppl_ForAmenPlanSubm10");

  if (element.checked) {
    buildingCat.removeAttribute("disabled");
    buildingCat.setAttribute("mandatory", "");
    amendmentPlan.setAttribute("disabled", "");
    buildingCatLabel.innerHTML = "Building Categories*";
    forAmenPlanSub.innerHTML =
      "For Amendment plans submission please state the original SCDF approved Plan Reference";
    amendmentPlan.removeAttribute("mandatory");
    amendmentPlan.value = amendmentPlan
      .getAttribute("template")
      .replace(/#/g, " ");
    amendmentPlan.value = amendmentPlan.value.replace(/@/g, " ");
    document.querySelector(
      `[switch-id="PartOfAppl_StatWhetThisSubm10"]`
    ).checked = false;
    document
      .querySelector(`[switch-id="PartOfAppl_StatWhetThisSubm10"]`)
      .setAttribute("disabled", "");
    // postalManda();
  }
}

function PartOfAppl_TypeOfPlan20_change(element) {
  let buildingCat = document.getElementById("PartOfAppl_BldgC10");
  let buildingCatLabel = document.getElementById("PartOfAppl_label");
  let amendmentPlan = document.getElementById("PartOfAppl_ForAmenPlanSubm10");
  if (element.checked) {
    buildingCat.removeAttribute("mandatory");
    buildingCat.setAttribute("disabled", "");
    buildingCat.value = "";
    amendmentPlan.removeAttribute("disabled");
    buildingCatLabel.innerHTML = "Building Categories";
    document
      .querySelector(`[switch-id="PartOfAppl_StatWhetThisSubm10"]`)
      .removeAttribute("disabled");
    // postalManda();
  }
}

// function postalManda() {
//   let postal = document.getElementById("Project_Postal_Code10");
//   let pLabel = document.getElementById("Project_Postal_Code10_label");
//   let changeOfUse = document.getElementById("PartOfAppl_TypeOfPlan30");

//   if (changeOfUse.checked) {
//     postal.setAttribute("mandatory", "");
//     pLabel.innerHTML = pLabel.innerHTML + "*";
//   } else {
//     postal.removeAttribute("mandatory");
//     postal.value = "";
//     pLabel.innerHTML = "Postal Code";
//   }
// }

function qpHidden(el) {
  let myHide = document.getElementById("qpHide");
  myHide.removeAttribute("hidden");
}

function qpShow(el) {
  let myShow = document.getElementById("qpHide");
  myShow.setAttribute("hidden", "");
}

function enableMandaThis(el, array) {
  let element = document.getElementById(el.id);
  if (element.checked) {
    for (let x of array) {
      x.removeAttribute("disabled");
      x.setAttribute("mandatory", "");
    }
  } else {
    for (let x of array) {
      x.setAttribute("disabled", "");
      x.removeAttribute("mandatory");
      x.value = "";
    }
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

function mandaFEDB() {
  let fullperformance = document.getElementById(
    "PartOfAppl_IsFullPerfBaseSub10"
  );
  let textbox = document.getElementById("PartOfAppl_FEDBRef10");

  if (fullperformance.checked && textbox.value == "") {
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
  }
}

function checkTemplateValid(el) {
  let lastTwo = new RegExp("[A-Z]{3}/[A-Z][0-9]{5}/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}/[A-Z][0-9]{5}/(([0-9]{4}(?![0-9])))");
  let refId = el.id;
  switch (refId) {
    case "PartOfAppl_FEDBRef10":
      let textbox = document.getElementById(refId);
      let length = parseInt(textbox.getAttribute("maxlength"));
      if (
        textbox.value.match(/[A-Z]{4}\/[0-9]{6}\/(([0-9]{2}(?![0-9])))/) ||
        textbox.value.match(/[A-Z]{4}\/[0-9]{6}\/(([0-9]{4}(?![0-9])))/)
      ) {
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
          "This field is limited to 14 characters and The FEDB Reference No. format is FEDB/YYYYYY/YYYY or FEDB/YYYYYY/YY where Y is a valid numeric no."
        );
      }
      break;
    case "PartOfAppl_TheRegiNoOf10":
      if (
        el.value.match(lastFour) ||
        el.value.match(lastTwo) ||
        el.value === "   /      /    "
      ) {
        // if (/\s/.test(el.value)) {
        document.getElementById(el.id).removeAttribute("data-invalid");
      } else {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The Related BP/MV/FP plan submission format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
          );
      }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_ForAmenPlanSubm10":
      let textbox1 = document.getElementById(refId);
      if (textbox1.value.match(lastFour) || textbox1.value.match(lastTwo)) {
        // if (/\s/.test(el.value)) {
        textbox1.removeAttribute("data-invalid");
      } else if (textbox1.value === "") {
        textbox1.removeAttribute("data-invalid");
        if (document.getElementById("PartOfAppl_StatWhetThisSubm10").checked) {
          textbox1.setAttribute("mandatory", "");
        } else {
          textbox1.removeAttribute("mandatory");
        }
      } else {
        textbox1.setAttribute("data-invalid", "");
        textbox1.setAttribute(
          "data-invalid-message",
          "The Amendment plans submission please state the original SCDF approved Plan Reference format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
        );
      }
      // } else {
      //   document.getElementById(el.id).removeAttribute("data-invalid");
      // }
      break;
    case "PartOfAppl_PreSubmConsRef10":
      if (el.value != "CON/      /  ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 11 characters and The Pre-submission Consultation Ref No. format is CON/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
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
              "This field is limited to 10 characters and The Waiver Case Ref No. format is WVR/YYYYY/YY where Y is a valid numeric no."
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
              "This field is limited to 11 characters and The Waiver Case Ref No. format is QRA/YYYYYY/YY where Y is a valid numeric no."
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
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
  }
}

function switchCustom(main, trueElementId, falseElementId) {
  let trueElement;
  let falseElement;
  let host = main.getRootNode().host;
  if (host.hasAttribute("data-true") && host.hasAttribute("data-false")) {
    trueElement = document.getElementById(host.getAttribute("data-true"));
    falseElement = document.getElementById(host.getAttribute("data-false"));
  } else {
    trueElement = document.getElementById(trueElementId);
    falseElement = document.getElementById(falseElementId);
  }

  if (trueElement && falseElement) {
    if (main.checked) {
      trueElement.checked = true;
      falseElement.checked = false;
    } else {
      trueElement.checked = false;
      falseElement.checked = true;
    }
  }
}

// function PartOfAppl_ForFedbPlanSub10_change(element) {
//   let textbox = document.getElementById(element);
//   let forFedbPlanLabel = document.getElementById("ForFedbPlan_Label");
//   if (document.getElementById("PartOfAppl_IsFullPerfBaseSub10").checked) {
//     textbox.removeAttribute("disabled");
//     textbox.setAttribute("mandatory", "");
//     forFedbPlanLabel.innerHTML = "FEDB Reference No.*";
//   } else {
//     textbox.removeAttribute("mandatory");
//     textbox.setAttribute("disabled", "");
//     textbox.value = "";
//     forFedbPlanLabel.innerHTML = "FEDB Reference No.";
//   }
// }

function PartOfAppl_StatWhetThisSubm10_change(label, textbox) {
  let forAmenPlanSub = document.getElementById(label);
  let amendmentPlan = document.getElementById(textbox);
  if (document.getElementById("PartOfAppl_StatWhetThisSubm10").checked) {
    forAmenPlanSub.innerHTML =
      "For Amendment plans submission please state the original SCDF approved Plan Reference*";
    amendmentPlan.setAttribute("mandatory", "");
    document
      .getElementById("PartOfAppl_ForAmenPlanSubm10tr")
      .removeAttribute("hidden");
  } else {
    forAmenPlanSub.innerHTML =
      "For Amendment plans submission please state the original SCDF approved Plan Reference";
    amendmentPlan.removeAttribute("mandatory");
    amendmentPlan.value = "";
    document
      .getElementById("PartOfAppl_ForAmenPlanSubm10tr")
      .setAttribute("hidden", "");
    amendmentPlan.removeAttribute("data-invalid");
    amendmentPlan.removeAttribute("data-invalid-message");
  }
}

function SubmChec_MEPlan10_Label(el) {
  let element = document.getElementById(el.id);
  let submChecMEPlan20Label = document.getElementById(
    "SubmChec_MEPlan20_Label"
  );
  let submChecMEPlan30Label = document.getElementById(
    "SubmChec_MEPlan30_Label"
  );
  if (element.checked) {
    submChecMEPlan20Label.innerHTML = "Fire Safety Engineer*";
    submChecMEPlan30Label.innerHTML = "Peer Reviewer*";
  } else {
    submChecMEPlan20Label.innerHTML = "Fire Safety Engineer";
    submChecMEPlan30Label.innerHTML = "Peer Reviewer";
  }
}

function SubmChec_Calc10_Label(el) {
  let element = document.getElementById(el.id);
  let Label = document.getElementById("SubmChec_Calc20_Label");
  if (element.checked) {
    Label.innerHTML = "Fire Safety Engineer*";
  } else {
    Label.innerHTML = "Fire Safety Engineer";
  }
}

function disableDelete(containerName, deleteid) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteid).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(deleteid);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function PaymMode_Paym10_total() {
  let field = [
    document.getElementById("PlanFeeComp_NewFireSafeWork_PlanFeePaya10"),
    document.getElementById("PlanFeeComp_NewFireSafeWork_PlanFeePaya20"),
    document.getElementById("PlanFeeComp_AmenToApprFire_PlanFeePaya10"),
    document.getElementById("PlanFeeComp_ChanOfUseAlte_PlanFeePaya10"),
    document.getElementById("PlanFeeComp_Others_PlanFeePaya10"),
  ];
  let total = 0;
  for (let x = 0; x < field.length; x++) {
    if (field[x].value.length === 0) {
      total += 0;
    } else {
      total += parseFloat(field[x].value);
    }
  }
  document.getElementById("PaymMode_Paym10").value =
    parseFloat(total).toFixed(2) != 0 ? parseFloat(total).toFixed(2) : "";
}

function PlanFeeComp_NewFireSafeWork_FlooAreaNoOf10_change(element, textbox) {
  let atextbox = document.getElementById(textbox);
  let value = 0;
  value = checkValueNaN(
    Math.ceil(parseFloat(document.getElementById(element.id).value) / 100) * 160
  );

  atextbox.value = value != 0 ? value : "";

  // let atextbox = document.getElementById(textbox);
  // atextbox.value = checkValueNaN(
  //   Math.ceil(parseFloat(document.getElementById(element.id).value) * 160) / 100
  // ).toFixed(2);
  PaymMode_Paym10_total();
}

function PlanFeeComp_NewFireSafeWork_FlooAreaNoOf20_change(element, textbox) {
  let atextbox = document.getElementById(textbox);
  let value = 0;
  value = checkValueNaN(
    Math.ceil(parseFloat(document.getElementById(element.id).value) / 100) * 100
  );

  atextbox.value = value != 0 ? value : "";

  // let atextbox = document.getElementById(textbox);
  // atextbox.value = checkValueNaN(
  //   Math.ceil(parseFloat(document.getElementById(element.id).value) * 160) / 100
  // ).toFixed(2);
  PaymMode_Paym10_total();
}

function PlanFeeComp_Storey_change(element, textbox) {
  let atextbox = document.getElementById(textbox);
  let value = 0;
  value = checkValueNaN(
    Math.ceil(parseFloat(document.getElementById(element.id).value)) * 90
  ).toFixed(2);
  atextbox.value = value != 0 ? value : "";
  PaymMode_Paym10_total();
}

function PlanFeeComp_Others_PlanFeePaya10_change(e) {
  let element = document.getElementById(e.id);
  let value = 0;
  value = checkValueNaN(parseFloat(element.value).toFixed(2));
  element.value = value != 0 ? value : "";
  PaymMode_Paym10_total();
}

function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
  jsonData[element.id] = replaced;
}

function SubmChec_LettOfNOObje10_change(element) {
  let el = document.getElementById(element.id);
  let label = document.getElementById(
    "SubmChec_NameOfPersEndoLettOfNOObje10_label"
  );
  let field = document.getElementById("SubmChec_NameOfPersEndoLettOfNOObje10");
  let no10 = document.getElementById("SubmChec_SuppAsseRept10");
  let no10_label = document.getElementById("SubmChec_SuppAsseRept10_label");
  let nonPerfomance = document.querySelectorAll("[group-id='nonPerformance2']");
  if (el.checked) {
    for (let nonPerf of nonPerfomance) {
      nonPerf.removeAttribute("hidden");
    }
    label.innerHTML =
      "Qualified Person / Fire Safety Engineer endorsing the Letter of No Objection*";
    no10_label.innerHTML = " Supporting Assessment Report*";
    field.value = "";
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
    no10.setAttribute("mandatory", "");
    no10.setAttribute("checked", "");
    no10.removeAttribute("disabled");
  } else {
    for (let nonPerf of nonPerfomance) {
      nonPerf.setAttribute("hidden", "");
    }
    document
      .querySelector("[group-id='nonPerformance3']")
      .setAttribute("hidden", "");
    label.innerHTML =
      "Qualified Person / Fire Safety Engineer endorsing the Letter of No Objection";
    no10_label.innerHTML = " Supporting Assessment Report";
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.value = "";
    no10.removeAttribute("mandatory");
    no10.setAttribute("disabled", "");
    no10.removeAttribute("checked");
    no10.checked = false;
    document
      .getElementById("SubmChec_FireEvacSimuScouCode_AsseRept10")
      .removeAttribute("mandatory");
    document
      .getElementById("SubmChec_FireEvacSimuScouCode_AsseRept10")
      .setAttribute("disabled", "");
    document
      .getElementById("SubmChec_FireEvacSimuScouCode_AsseRept10")
      .removeAttribute("checked");
    document.getElementById(
      "SubmChec_FireEvacSimuScouCode_AsseRept10"
    ).checked = false;
  }
}

function SubmChec_SuppAsseRept10_change(element) {
  let el = document.getElementById(element.id);
  let no11 = document.getElementById(
    "SubmChec_FireEvacSimuScouCode_AsseRept10"
  );
  let no11_label = document.getElementById(
    "SubmChec_FireEvacSimuScouCode_AsseRept10_label"
  );
  if (el.checked) {
    no11.removeAttribute("disabled");
    document
      .querySelector("[group-id='nonPerformance3']")
      .removeAttribute("hidden");
  } else {
    no11.setAttribute("disabled", "");
    no11.checked = false;
    document
      .querySelector("[group-id='nonPerformance3']")
      .setAttribute("hidden", "");
  }
}

function checkbox_enable_fields(element, fields) {
  let el = document.getElementById(element.id);

  for (let field of fields) {
    if (el.checked) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
    } else {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.value = "";
    }
  }
}

function popUpName(cbox, dropdown, pname, NRIC1, NRIC2) {
  let checkbox = document.getElementById(cbox);
  let dropDown = document.getElementById(dropdown);
  let pName = document.getElementById(pname);
  let nric1 = document.getElementById(NRIC1);
  let nric2 = document.getElementById(NRIC2);

  if (dropDown.value !== "" && checkbox.checked) {
    pName.value = dropDown.valueLabel;
    if (nric1 != null && nric2 != null) {
      nric2.value = nric1.value;
    }
  } else {
    pName.value = "";
    if (nric2 != null) {
      nric2.value = "";
    }
  }
}

function popUpName2() {
  let checkbox = document.getElementById("DeclByFSE_CertSolu10");
  let dropDown = document.getElementById("Member_Member_Name_FSE10");
  let pName = document.getElementById("DeclByFSE_FSEName10");
  let nric1 = document.getElementById("Member_IC_Passport_No_FSE10_mask");
  let nric2 = document.getElementById("DeclByFSE_FSENRIC10");

  if (dropDown.value != "" && checkbox.checked) {
    pName.value = dropDown.valueLabel;
    nric2.value = nric1.value;
  } else {
    pName.value = "";
    nric2.value = "";
  }
}

function noObjection() {
  let noObj = document.getElementById("SubmChec_NameOfPersEndoLettOfNOObje10");
  let qpName = document.getElementById("Member_Member_Name_QP10");
  let fireName = document.getElementById("Member_Member_Name_FSE10");
  let optionqpName = qpName.valueLabel + ":" + qpName.valueLabel;
  let optionfireName = fireName.valueLabel + ":" + fireName.valueLabel;
  let option =
    qpName.valueLabel +
    ":" +
    qpName.valueLabel +
    "," +
    fireName.valueLabel +
    ":" +
    fireName.valueLabel;

  if (qpName.value != "" && fireName.value != "") {
    noObj.setAttribute("options", option);
  } else if (qpName.value != "") {
    noObj.setAttribute("options", optionqpName);
  } else if (fireName.value != "") {
    noObj.setAttribute("options", optionfireName);
  }
}

function fedbMand() {
  let fullPerf = document.getElementById(
    "PartOfAppl_IsFullPerfBaseSub10_changeYes"
  );
  let field = document.getElementById("PartOfAppl_FEDBRef10");
  let label = document.getElementById("PartOfAppl_FEDBRef10_label");

  if (fullPerf.checked) {
    field.setAttribute("mandatory", "");
    label.innerHTML = label.innerHTML + "*";
  } else {
    field.removeAttribute("mandatory");
    label.innerHTML = label.innerHTML.slice(0, -1);
  }
}

//satisfy
function satisfy(element) {
  let satisfy = document.getElementById("DeclByPeerRev_SatiOfEngrRept10");

  if (element.checked) {
    satisfy.value = "satisfy";
  } else {
    satisfy.value = "";
  }
}

//Is this NOT a full performance-based submission
function PartOfAppl_IsWorkOnExistingPBArea10_changeYes(element) {
  let yes = document.getElementById("PartOfAppl_IsWorkOnExistingPBArea10");
  let field = document.getElementById("PartOfAppl_FEDBRef10");
  let label = document.getElementById("PartOfAppl_FEDBRef10_label");
  let no4 = document.getElementById("SubmChec_FireEngrDesiBrief10");
  let no4Label = document.getElementById("SubmChec_FireEngrDesiBrief10_label");
  let no5 = document.getElementById("SubmChec_FireSafeEngrRept10");
  let no5Label = document.getElementById("SubmChec_FireSafeEngrRept10_label");
  let no6 = document.getElementById("SubmChec_OpsAndMainManu10");
  let no6Label = document.getElementById("SubmChec_OpsAndMainManu10_label");
  let no7 = document.getElementById("SubmChec_FireEvacSimuScouCode10");
  let no8 = document.getElementById("SubmChec_PeerReviRept10");
  let no8Label = document.getElementById("SubmChec_PeerReviRept10_label");
  let no9 = document.getElementById("SubmChec_LettOfNOObje10");
  let no9Label = document.getElementById("SubmChec_LettOfNOObje10_label");
  let checkboxMand = document.querySelectorAll(`[group="checkboxMand"]`);
  let fields = document.querySelectorAll(`[group="fields"]`);
  let fieldsMand = document.querySelectorAll(`[group="fieldsMand"]`);
  let p8 = document.querySelector(`[target="page8"]`);
  let p9 = document.querySelector(`[target="page9"]`);
  let p10 = document.querySelector(`[target="page10"]`);
  let p11 = document.querySelector(`[target="page11"]`);

  if (yes.checked) {
    document.querySelector(
      `[switch-id="PartOfAppl_IsFullPerfBaseSub10"]`
    ).checked = false;
    no4.setAttribute("disabled", "");
    no4.removeAttribute("mandatory");
    no4.removeAttribute("checked");
    no4Label.innerHTML = "4. Approved Fire Engineering Design Brief";
    no5.setAttribute("disabled", "");
    no5.removeAttribute("mandatory");
    no5.removeAttribute("checked");
    no5Label.innerHTML = "5. Fire Safety Engineering Report";
    no6.setAttribute("disabled", "");
    no6.removeAttribute("mandatory");
    no6.removeAttribute("checked");
    no6Label.innerHTML = "6. Operations and Maintenance Manual";
    no7.setAttribute("disabled", "");
    no8.setAttribute("disabled", "");
    no8.removeAttribute("mandatory");
    no8.removeAttribute("checked");
    no8Label.innerHTML = "8. Peer Reviewer Report";
    no9.setAttribute("mandatory", "");
    no9.setAttribute("checked", "");
    no9.removeAttribute("disabled");
    no9Label.innerHTML = "9. Letter of No Objection*";
    p8.setAttribute("hidden", "");
    p9.setAttribute("hidden", "");
    p8.setAttribute("page-number", "");
    p9.setAttribute("page-number", "");
    p10.setAttribute("page-number", "8");
    p11.setAttribute("page-number", "9");
    field.removeAttribute("mandatory");
    field.value = "";
    label.innerHTML = "FEDB Reference No.";
    no4.checked = false;
    no5.checked = false;
    no6.checked = false;
    no7.checked = false;
    no8.checked = false;

    for (checkbox of checkboxMand) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }

    for (let fieldMand of fieldsMand) {
      fieldMand.removeAttribute("mandatory");
      fieldMand.value = "";
    }

    for (let field of fields) {
      field.value = "";
    }
  }
}

function PartOfAppl_IsWorkOnExistingPBArea10_changeNo(element) {
  let no = document.getElementById("PartOfAppl_IsWorkOnExistingPBArea20");
  let field = document.getElementById("PartOfAppl_FEDBRef10");
  let label = document.getElementById("PartOfAppl_FEDBRef10_label");
  let no4 = document.getElementById("SubmChec_FireEngrDesiBrief10");
  let no4Label = document.getElementById("SubmChec_FireEngrDesiBrief10_label");
  let no5 = document.getElementById("SubmChec_FireSafeEngrRept10");
  let no5Label = document.getElementById("SubmChec_FireSafeEngrRept10_label");
  let no6 = document.getElementById("SubmChec_OpsAndMainManu10");
  let no6Label = document.getElementById("SubmChec_OpsAndMainManu10_label");
  let no7 = document.getElementById("SubmChec_FireEvacSimuScouCode10");
  let no8 = document.getElementById("SubmChec_PeerReviRept10");
  let no8Label = document.getElementById("SubmChec_PeerReviRept10_label");
  let no9 = document.getElementById("SubmChec_LettOfNOObje10");
  let no9Label = document.getElementById("SubmChec_LettOfNOObje10_label");
  let checkboxMand = document.querySelectorAll(`[group="checkboxMand"]`);
  let fields = document.querySelectorAll(`[group="fields"]`);
  let fieldsMand = document.querySelectorAll(`[group="fieldsMand"]`);
  let p8 = document.querySelector(`[target="page8"]`);
  let p9 = document.querySelector(`[target="page9"]`);
  let p10 = document.querySelector(`[target="page10"]`);
  let p11 = document.querySelector(`[target="page11"]`);

  if (no.checked) {
    document.querySelector(
      `[switch-id="PartOfAppl_IsFullPerfBaseSub10"]`
    ).checked = true;
    no4.removeAttribute("disabled");
    no4.setAttribute("mandatory", "");
    no4.setAttribute("checked", "");
    no4Label.innerHTML = "4. Approved Fire Engineering Design Brief*";
    no5.removeAttribute("disabled");
    no5.setAttribute("mandatory", "");
    no5.setAttribute("checked", "");
    no5Label.innerHTML = "5. Fire Safety Engineering Report*";
    no6.removeAttribute("disabled");
    no6.setAttribute("mandatory", "");
    no6.setAttribute("checked", "");
    no6Label.innerHTML = "6. Operations and Maintenance Manual*";
    no7.removeAttribute("disabled");
    no8.removeAttribute("disabled");
    no8.setAttribute("mandatory", "");
    no8.setAttribute("checked", "");
    no8Label.innerHTML = "8. Peer Reviewer Report*";
    no9.removeAttribute("mandatory");
    no9.removeAttribute("checked");
    no9.setAttribute("disabled", "");
    no9Label.innerHTML = "9. Letter of No Objection";
    p8.removeAttribute("hidden");
    p9.removeAttribute("hidden");
    p8.setAttribute("page-number", "8");
    p9.setAttribute("page-number", "9");
    p10.setAttribute("page-number", "10");
    p11.setAttribute("page-number", "11");
    field.setAttribute("mandatory", "");
    label.innerHTML = "FEDB Reference No.*";

    no9.checked = false;

    for (let checkbox of checkboxMand) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }

    for (let fieldMand of fieldsMand) {
      fieldMand.setAttribute("mandatory", "");
    }
  }
}

//Is this a full perfomance-based submission
function PartOfAppl_IsFullPerfBaseSub10_changeYes(element) {
  let yes = document.getElementById("PartOfAppl_IsFullPerfBaseSub10");
  let field = document.getElementById("PartOfAppl_FEDBRef10");
  let field2 = document.getElementById("SubmChec_NameOfPersEndoLettOfNOObje10");
  let label = document.getElementById("PartOfAppl_FEDBRef10_label");
  let no4 = document.getElementById("SubmChec_FireEngrDesiBrief10");
  let no4Label = document.getElementById("SubmChec_FireEngrDesiBrief10_label");
  let no5 = document.getElementById("SubmChec_FireSafeEngrRept10");
  let no5Label = document.getElementById("SubmChec_FireSafeEngrRept10_label");
  let no6 = document.getElementById("SubmChec_OpsAndMainManu10");
  let no6Label = document.getElementById("SubmChec_OpsAndMainManu10_label");
  let no7 = document.getElementById("SubmChec_FireEvacSimuScouCode10");
  let no8 = document.getElementById("SubmChec_PeerReviRept10");
  let no8Label = document.getElementById("SubmChec_PeerReviRept10_label");
  let no9 = document.getElementById("SubmChec_LettOfNOObje10");
  let no9Label = document.getElementById("SubmChec_LettOfNOObje10_label");
  let checkboxMand = document.querySelectorAll(`[group="checkboxMand"]`);
  let fields = document.querySelectorAll(`[group="fields"]`);
  let fieldsMand = document.querySelectorAll(`[group="fieldsMand"]`);
  let p8 = document.querySelector(`[target="page8"]`);
  let p9 = document.querySelector(`[target="page9"]`);
  let p10 = document.querySelector(`[target="page10"]`);
  let p11 = document.querySelector(`[target="page11"]`);
  let notfullPerf = document.querySelectorAll('[group-id = "subMFullPerm"]');
  let fullPerfTr = document.querySelectorAll(
    '[group-id = "fullBasedPerformance"]'
  );
  let notfullPerf2 = document.querySelector('[group-id = "nonPerformance"]');
  let notfullPerf3 = document.querySelectorAll(
    '[group-id = "nonPerformance2"]'
  );
  removeValidations(field);
  field.value = "";
  document.getElementById("errMsgBPMEAppFEDBRefNo").innerHTML = "";
  document.getElementById("SubmChec_SuppAsseRept10").removeAttribute("checked");
  document
    .getElementById("SubmChec_SuppAsseRept10")
    .removeAttribute("mandatory");
  document.getElementById("SubmChec_SuppAsseRept10").checked = false;

  for (let a of document.querySelectorAll("[fse2]")) {
    a.value = "";
    if (a.hasAttribute("data-invalid")) {
      a.removeAttribute("data-invalid");
      a.removeAttribute("data-invalid-message");
    }
    if (a.hasAttribute("mandatory")) {
      a.removeAttribute("mandatory");
    }
    if (a.id == "Member_Member_Name_PeerRev10_notSame") {
      a.setAttribute("hidden", "");
    }
  }
  let sameFse1 = document.getElementById("Member_Member_Name_FSE10_notSame");
  if (sameFse1.hasAttribute("mandatory")) {
    sameFse1.removeAttribute("mandatory");
    sameFse1.setAttribute("hidden", "");
  }

  let sameFse3 = document.getElementById("Member_FSE_Firm_Name_FSE10_notSame");
  if (sameFse3.hasAttribute("mandatory")) {
    sameFse3.removeAttribute("mandatory");
    sameFse3.setAttribute("hidden", "");
  }

  let sameFse4 = document.getElementById("Member_FSE_Firm_Name_FSE20_notSame");
  if (sameFse4.hasAttribute("mandatory")) {
    sameFse4.removeAttribute("mandatory");
    sameFse4.setAttribute("hidden", "");
  }
  if (yes.checked) {
    for (let fullPerf of fullPerfTr) {
      fullPerf.removeAttribute("hidden");
    }

    for (let nonPerf of notfullPerf3) {
      nonPerf.setAttribute("hidden", "");
    }
    no9.removeAttribute("mandatory");
    no9.removeAttribute("checked");
    //no9.setAttribute("disabled", "");
    notfullPerf2.setAttribute("hidden", "");
    document
      .querySelector('[group-id = "nonPerformance3"]')
      .setAttribute("hidden", "");
    field2.setAttribute("disabled", "");
    field2.value = "";
    field2.removeAttribute("mandatory");
    no4.removeAttribute("disabled");
    no4.setAttribute("mandatory", "");
    no4.setAttribute("checked", "");
    no4Label.innerHTML = "4. Approved Fire Engineering Design Brief*";
    no5.removeAttribute("disabled");
    no5.setAttribute("mandatory", "");
    no5.setAttribute("checked", "");
    no5Label.innerHTML = "5. Fire Safety Engineering Report*";
    no6.removeAttribute("disabled");
    no6.setAttribute("mandatory", "");
    no6.setAttribute("checked", "");
    no6Label.innerHTML = "6. Operations and Maintenance Manual*";
    no7.removeAttribute("disabled");
    no8.removeAttribute("disabled");
    no8.setAttribute("mandatory", "");
    no8.setAttribute("checked", "");
    no8Label.innerHTML = "8. Peer Reviewer Report*";
    no9Label.innerHTML = "9. Letter of No Objection";
    document.getElementById("label4").innerHTML = "9.";
    document.getElementById("label5").innerHTML = "10.";
    p8.removeAttribute("hidden");
    p9.removeAttribute("hidden");
    p8.setAttribute("page-number", "8");
    p9.setAttribute("page-number", "9");
    p10.setAttribute("page-number", "10");
    p11.setAttribute("page-number", "11");
    field.setAttribute("mandatory", "");
    label.innerHTML = label.innerHTML + "*";
    document
      .getElementById("Member_Member_Name_PeerRev10")
      .setAttribute("mandatory", "");
    no9.checked = false;

    for (let table of notfullPerf) {
      table.setAttribute("hidden", "");
    }

    for (let checkbox of checkboxMand) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }

    for (let fieldMand of fieldsMand) {
      fieldMand.setAttribute("mandatory", "");
    }
  } else {
    document.querySelector(
      `[switch-id="PartOfAppl_IsWorkOnExistingPBArea10"]`
    ).checked = false;

    for (let fullPerf2 of fullPerfTr) {
      fullPerf2.setAttribute("hidden", "");
    }

    notfullPerf2.setAttribute("hidden", "");

    for (let nonPerf2 of notfullPerf3) {
      nonPerf2.setAttribute("hidden", "");
    }
    document
      .querySelector('[group-id = "nonPerformance3"]')
      .setAttribute("hidden", "");
    field2.setAttribute("disabled", "");
    field2.value = "";
    field2.removeAttribute("mandatory");
    no4.setAttribute("disabled", "");
    no4.removeAttribute("mandatory");
    no4.removeAttribute("checked");
    no4Label.innerHTML = "4. Approved Fire Engineering Design Brief";
    no5.setAttribute("disabled", "");
    no5.removeAttribute("mandatory");
    no5.removeAttribute("checked");
    no5Label.innerHTML = "5. Fire Safety Engineering Report";
    no6.setAttribute("disabled", "");
    no6.removeAttribute("mandatory");
    no6.removeAttribute("checked");
    no6Label.innerHTML = "6. Operations and Maintenance Manual";
    no7.setAttribute("disabled", "");
    no8.setAttribute("disabled", "");
    no8.removeAttribute("mandatory");
    no8.removeAttribute("checked");
    no8Label.innerHTML = "8. Peer Reviewer Report";
    no9.removeAttribute("mandatory");
    no9.removeAttribute("checked");
    no9Label.innerHTML = "4. Letter of No Objection*";
    document.getElementById("label4").innerHTML = "5.";
    document.getElementById("label5").innerHTML = "6.";
    p8.setAttribute("hidden", "");
    p9.setAttribute("hidden", "");
    p8.setAttribute("page-number", "");
    p9.setAttribute("page-number", "");
    p10.setAttribute("page-number", "8");
    p11.setAttribute("page-number", "9");
    field.removeAttribute("mandatory");
    field.value = "";
    label.innerHTML = label.innerHTML.slice(0, -1);
    no4.checked = false;
    no5.checked = false;
    no6.checked = false;
    no7.checked = false;
    no8.checked = false;
    document
      .getElementById("Member_Member_Name_PeerRev10")
      .removeAttribute("mandatory");
    for (let table of notfullPerf) {
      table.removeAttribute("hidden");
    }

    for (checkbox of checkboxMand) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }

    for (let fieldMand of fieldsMand) {
      fieldMand.removeAttribute("mandatory");
      fieldMand.value = "";
    }

    for (let field of fields) {
      field.value = "";
    }
  }
}

//Plan Type Changes
function PartOfAppl_ApplType10_change(el) {
  let bpPlanFee = document.getElementById("mePlanFee");
  let mePlanFee = document.getElementById("bpPlanFee");
  let bpPlanIP = document.getElementById("PlanFeeComp_FlooAreaNo10");
  let mePlanIP1 = document.getElementById(
    "PlanFeeComp_NewFireSafeWork_FlooAreaNoOf10"
  );
  let mePlanIP2 = document.getElementById(
    "PlanFeeComp_AmenToApprFire_FlooAreaNoOf10"
  );
  let mePlanIP3 = document.getElementById(
    "PlanFeeComp_ChanOfUseAlte_FlooAreaNoOf10"
  );
  let mePlanIP4 = document.getElementById("PlanFeeComp_Others_PlanFeePaya10");
  let subBPlan = document.getElementById("subBPlan");
  let subFMPlan = document.getElementById("subFMPlan");
  let submNav11 = document.getElementById("nav11");
  let relatedField = document.getElementById("PartOfAppl_TheRegiNoOf10");

  removeValidations(relatedField);
  relatedField.value = "";
  document.getElementById("errMsgBPMEApp").innerHTML = "";

  if (el.value == "Building Plan") {
    document.querySelector("cn2-master-head").title =
      "APPLICATION FOR APPROVAL OF PLANS FOR BUILDING WORKS CONTAINING FIRE SAFETY MEASURES<br>[Section 23 of the Fire Safety Act (CHAPTER 109A)]";
    bpPlanFee.setAttribute("hidden", "");
    mePlanFee.removeAttribute("hidden");
    bpPlanIP.value = "";
    subBPlan.removeAttribute("hidden");
    subFMPlan.setAttribute("hidden", "");
    submNav11.removeAttribute("hidden");
  } else if (el.value == "Fire Protection Plan") {
    document.querySelector("cn2-master-head").title =
      "APPLICATION FOR APPROVAL OF PLANS FOR FIRE PROTECTION WORKS AND AIR-CONDITIONING & MECHANICAL VENTILATION SYSTEMS<br>[Section 23 of the Fire Safety Act (CHAPTER 109A)]";
    mePlanFee.setAttribute("hidden", "");
    bpPlanFee.removeAttribute("hidden");
    mePlanIP1.value = "";
    mePlanIP2.value = "";
    mePlanIP3.value = "";
    mePlanIP4.value = "";
    subFMPlan.removeAttribute("hidden");
    subBPlan.setAttribute("hidden", "");
    submNav11.removeAttribute("hidden");
  } else if (
    el.value == "Mechanical Ventilation /Smoke Control/Air Conditioning Plan"
  ) {
    document.querySelector("cn2-master-head").title =
      "APPLICATION FOR APPROVAL OF PLANS FOR FIRE PROTECTION WORKS AND AIR-CONDITIONING & MECHANICAL VENTILATION SYSTEMS<br>[Section 23 of the Fire Safety Act (CHAPTER 109A)]";
    mePlanFee.setAttribute("hidden", "");
    bpPlanFee.removeAttribute("hidden");
    mePlanIP1.value = "";
    mePlanIP2.value = "";
    mePlanIP3.value = "";
    mePlanIP4.value = "";
    subFMPlan.removeAttribute("hidden");
    subBPlan.setAttribute("hidden", "");
    submNav11.removeAttribute("hidden");
  }
}

function PartOfAppl_IsWorkOnExistingPBArea10() {
  let yes = document.getElementById("PartOfAppl_IsWorkOnExistingPBArea10");
  let no9 = document.getElementById("SubmChec_LettOfNOObje10");
  let notfullPerf2 = document.querySelector('[group-id = "nonPerformance"]');
  console.log(yes.checked);
  if (yes.checked) {
    notfullPerf2.removeAttribute("hidden");
    no9.setAttribute("mandatory", "");
    no9.setAttribute("checked", "");
  } else {
    notfullPerf2.setAttribute("hidden", "");
    no9.removeAttribute("mandatory");
    no9.removeAttribute("checked");
  }
}

function onlyFloat(element) {
  let current = element.value;
  if (!Math.abs(current)) {
    document.getElementById(element.id).value = document
      .getElementById(element.id)
      .value.slice(0, -1);
  }
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function mandatoryPageChecker() {
  let page3 = document.getElementById("page3");
  let select = page3.querySelectorAll("cn2-select");
  let textArea = page3.querySelectorAll("cn2-textarea");
  let textBox = page3.querySelectorAll("cn2-textarea");
}

//

function addClickEventToPageNavigation() {
  // attached to nav buttons
  for (let a of document.querySelectorAll("cn2-nav-button")) {
    a.addEventListener("click", (e) => {
      let firstRun = setTimeout(() => {
        let selected = document
          .querySelector("cn2-nav-button[selected]")
          .getAttribute("target");
        let fields = [
          ...document
            .getElementById("page3")
            .querySelectorAll(
              "cn2-checkbox, cn2-datefield, cn2-select, cn2-textarea, cn2-textbox, input[type='radio']"
            ),
        ].filter(
          (r) => r.hasAttribute("mandatory") || r.hasAttribute("checked")
        );

        if (selected != "page3" && selected != "page1" && selected != "page2") {
          e.preventDefault();
          let isValid = false;

          stopHere: for (let r of fields) {
            if (!r.hasAttribute("checked")) {
              if (r.value == "") {
                isValid = false;
                break stopHere;
              } else {
                isValid = true;
              }
            } else {
              if (r.checked == false) {
                isValid = false;
                break stopHere;
              } else {
                isValid = true;
              }
            }
          }

          if (!isValid) {
            showMessage(
              "Please fill up mandatory fields in Particulars of Application section to continue."
            );
            document
              .querySelector("[target='page3']")
              .shadowRoot.querySelector("button")
              .click();
          } else {
            if (selected == "page4") {
              showMessage(
                `Credit card payment can be made either:
      1) at the customer sevice centre at HQSCDF
      2) by logging on to http://www.scdf.gov.sg (go to 'eServices' and click 'payment')`
              );
            }
          }
        } else {
          if (selected == "page4" && currentPage != "page4") {
            showMessage(
              `Credit card payment can be made either:
    1) at the customer sevice centre at HQSCDF
    2) by logging on to http://www.scdf.gov.sg (go to 'eServices' and click 'payment')`
            );
          }
        }

        let run = setTimeout(() => {
          currentPage = selected;

          clearTimeout(run);
        }, 0);

        clearTimeout(firstRun);
      }, 0);
    });
  }
}

function nricMaskingFSE(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function nricMaskingQP(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

// START WEB SERVICE ---------------------------------------

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

function getQuery(url, query) {
  let rawQuery = url.split("/");
  let addQuery = rawQuery.pop();
  let newQuery = addQuery.split("?").slice(0, -1);
  let finalQuery = newQuery[0] + query[0];

  for (let i = 1; i < newQuery.length; i++) {
    finalQuery = finalQuery + newQuery[i] + query[i];
  }
  return finalQuery;
}

function getUrl(url) {
  let rawUrl = url.split("/").slice(0, -1);
  let newUrl = rawUrl[0];
  for (let i = 1; i < rawUrl.length; i++) {
    newUrl = newUrl + "/" + rawUrl[i];
  }
  return newUrl.toString();
}

function removeSlash(value) {
  let rawValue = value.split("/");
  let newValue = rawValue[0];
  for (let i = 1; i < rawValue.length; i++) {
    newValue = newValue + rawValue[i];
  }
  return newValue.toString();
}

function removeSpace(value) {
  let rawValue = value.split(" ");
  let newValue = rawValue[0];
  for (let i = 1; i < rawValue.length; i++) {
    newValue = newValue + rawValue[i];
  }
  return removeSlash(newValue.toString());
}

function validateBPMEAppFSE1(element) {
  let mainElement = document.getElementById(element.id);
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON10"]);
  let query = getQuery(jsonData["agencyUrlJSON10"], [mainElement.value]);
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
  let errorMsg = document.getElementById("errMsgBPMEAppFSE");
  console.log(agencyUrlJSON + "/" + query);

  mainElement.removeAttribute("mandatory");
  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
        mainElement.setAttribute("disabled", "");
      } else {
        mainElement.removeAttribute("disabled");
        mainElement.setAttribute("mandatory", "");
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

function validateBPMEAppFSE2(element) {
  console.log(element);
  let mainElement = document.getElementById(element.id);
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON20"]);
  let query = getQuery(jsonData["agencyUrlJSON20"], [mainElement.value]);
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
  let errorMsg = document.getElementById("errMsgBPMEAppFSE");
  console.log(agencyUrlJSON + "/" + query);

  mainElement.removeAttribute("mandatory");
  errorMsg.innerHTML = "";
  console.log(dataResponse);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
      } else {
        mainElement.setAttribute("mandatory", "");
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

function validateBPMEAppFEDBRefNo(element) {
  let mainElement = document.getElementById(element.id);
  let fedbRefNo = removeSlash(mainElement.value);
  let bcaRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON30"]);
  let query = getQuery(jsonData["agencyUrlJSON30"], [bcaRefNo, fedbRefNo]);
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
  let errorMsg = document.getElementById("errMsgBPMEAppFEDBRefNo");
  console.log(agencyUrlJSON + "/" + query);

  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
      } else {
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

function validateBPMEApp(element) {
  let mainElement = document.getElementById(element.id);
  let relatedBPMVFP = removeSlash(mainElement.value);
  let bcaRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let appType = removeSpace(
    document.getElementById("PartOfAppl_ApplType10").value
  );
  let agencyUrlJSON = getUrl(jsonData[getUrlForBpMvFp()]);
  let query = getQuery(jsonData[getUrlForBpMvFp()], [
    bcaRefNo,
    appType,
    relatedBPMVFP,
  ]);
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
  updateAgencyUrl("agencyUrl50", query);
  updateAgencyUrl("agencyUrl60", query);
  let errorMsg = document.getElementById("errMsgBPMEApp");
  console.log(agencyUrlJSON + "/" + query);

  mainElement.setAttribute("webservice", getUrlForBpMvFp());
  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
      } else {
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

function getUrlForBpMvFp() {
  let appType = document.getElementById("PartOfAppl_ApplType10");
  if (appType.value == "Building Plan") {
    return "agencyUrlJSON40";
  } else if (appType.value == "Fire Protection Plan") {
    return "agencyUrlJSON50";
  } else if (
    appType.value ==
    "Mechanical Ventilation /Smoke Control/Air Conditioning Plan"
  ) {
    return "agencyUrlJSON60";
  } else {
    return "agencyUrlJSON40";
  }
}

function validateBPMEAppConsRefNo(element) {
  let mainElement = document.getElementById(element.id);
  let consRefNo = removeSlash(mainElement.value);
  let bcaRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON70"]);
  let query = getQuery(jsonData["agencyUrlJSON70"], [bcaRefNo, consRefNo]);
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
  updateAgencyUrl("agencyUrl70", query);
  let errorMsg = document.getElementById("errMsgBPMEAppConsRefNo");
  console.log(agencyUrlJSON + "/" + query);

  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
      } else {
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

function validateBPMEAppWaiverRefNo(element) {
  let mainElement = document.getElementById(element.id);
  let waiverRefNo = removeSlash(mainElement.value);
  let bcaRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON80"]);
  let query = getQuery(jsonData["agencyUrlJSON80"], [bcaRefNo, waiverRefNo]);
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
  updateAgencyUrl("agencyUrl80", query);
  let errorMsg = document.getElementById("errMsgBPMEAppWaiverRefNo");
  console.log(agencyUrlJSON + "/" + query);

  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
        mainElement.removeAttribute("data-invalid-message");
      } else {
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  } else {
    console.log("This is a submitted form");
  }
}

// START WEB SERVICE ---------------------------------------
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

function saveFormFiles(data, willInstall) {
  let IDs = [];
  for (let page of document.getElementById("page").children) {
    for (let field of page.querySelectorAll(
      "cn2-checkbox, cn2-datefield, cn2-select, cn2-textarea, cn2-textbox, input[type='radio']"
    )) {
      IDs.push(field.id);
    }
  }

  IDs.filter((id) => !Object.keys(jsonData).includes(id)).map(
    (id) => (jsonData[id] = "")
  );

  saveFormDataToJson();
  let menuList = document.getElementById("menu").children;
  for (let i = 0; i < menuList.length; i++) {
    if (!menuList[i].hasAttribute("hidden")) {
      if (menuList[i].hasAttribute("selected")) {
        menuList[i].removeAttribute("selected");
      }
      if (checkPage(menuList[i].getAttribute("target"))) {
        menuList[i].removeAttribute("valid");
        menuList[i].setAttribute("warning", "");
      } else {
        menuList[i].removeAttribute("warning");
        menuList[i].setAttribute("valid", "");
      }
    }
  }
  let invalid = false;
  let options = {
    type: "info",
    title: "Warning",
    buttons: ["Yes", "No"],
    message: `Mandatory field(s) are not filled up. Submission can be made only if all the mandatory fields are filled up in the form. \n\nDo you want to proceed anyway?`,
  };
  for (let menu of menuList) {
    if (menu.hasAttribute("warning") && !menu.hasAttribute("hidden")) {
      invalid = true;
    }
  }
  if (invalid) {
    let selected = null;
    if (willInstall) {
      selected = 0;
    } else {
      selected = showConfirmMessage(options);
    }
    if (selected == 0) {
      ipcRenderer.send(
        "write-file",
        "form",
        "project_details.json",
        JSON.stringify(jsonData, null, 2)
      );
      ipcRenderer.send(
        "write-file",
        "form",
        "index.html",
        new XMLSerializer().serializeToString(document)
      );
      return true;
    } else {
      let savePass = false;
      for (let i = 0; i < menuList.length; i++) {
        if (document.body.hasAttribute("saved")) savePass = true;
      }
      if (!savePass) {
        for (let i = 0; i < menuList.length; i++) {
          if (menuList[i].hasAttribute("valid")) {
            menuList[i].removeAttribute("valid");
          } else if (menuList[i].hasAttribute("warning")) {
            menuList[i].removeAttribute("warning");
          }
        }
      }

      let run1 = setTimeout(() => {
        ipcRenderer.send("beClosable");
        clearTimeout(run1);
      }, 1000);

      return false;
    }
  } else {
    ipcRenderer.send(
      "write-file",
      "form",
      "project_details.json",
      JSON.stringify(jsonData, null, 2)
    );
    ipcRenderer.send(
      "write-file",
      "form",
      "index.html",
      new XMLSerializer().serializeToString(document)
    );

    return true;
  }
}
