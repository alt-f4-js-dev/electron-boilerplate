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

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function Member_Email_Address1_QP10_change(element) {
  let textbox = document.getElementById(element.id);

  if (textbox.value.length !== 0) {
    if (validateEmail(textbox.value)) {
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    } else {
      textbox.setAttribute("data-invalid", "");
      textbox.setAttribute(
        "data-invalid-message",
        "Invalid Format. Please enter a valid Email address."
      );
    }
  }
}

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "BCA") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550`;
    agencyAdd.removeAttribute("hidden");
  } else if (element.value == "DSTA") {
    agencyAdd.value = `Defence Science & Technology Agency
Building & Infrastructure
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
    agencyAdd.removeAttribute("hidden");
  } else {
    agencyAdd.setAttribute("hidden", "");
  }
}

function EmailValidate(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateEmail(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Invalid Format. Please try again."
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

function DeclByApplFirm_IConfThat_Days_validation() {
  let value = document.getElementById("DeclByApplFirm_IConfThat_Days").value;

  if (value >= 0 && value <= 30) {
    return value;
  } else {
    if (value < 0) {
      document.getElementById("DeclByApplFirm_IConfThat_Days").value = "1";
    } else if (value > 30) {
      document.getElementById("DeclByApplFirm_IConfThat_Days").value = "30";
    }
  }
}

function DeclByApplFirm_IConfThat_ThePermIsFor20_validation() {
  let value = document.getElementById("DeclByApplFirm_IConfThat_ThePermIsFor20")
    .value;

  if (value >= 0 && value <= 36) {
    return value;
  } else {
    if (value < 0) {
      document.getElementById("DeclByApplFirm_IConfThat_ThePermIsFor20").value =
        "1";
    } else if (value > 36) {
      document.getElementById("DeclByApplFirm_IConfThat_ThePermIsFor20").value =
        "36";
    }
  }
}

function DeclByApplFirm_Rb_change(element) {
  let refId = element.id;

  let field1 = document.getElementById(
    "DeclByApplFirm_IWeConfThat_AShedForCere20"
  );
  let field2 = document.getElementById(
    "DeclByApplFirm_IWeConfThat_AStalOrShed20"
  );
  let field3 = document.getElementById(
    "DeclByApplFirm_IWeConfThat_OnTheStreOr20"
  );
  let field4 = document.getElementById(
    "DeclByApplFirm_IWeConfThat_WithAnAdveArea20"
  );
  let field5 = document.getElementById(
    "DeclByApplFirm_IWeConfThat_Of4MetrOr20"
  );

  let disableGroup = new Array();

  switch (refId) {
    case "DeclByApplFirm_IWeConfThat_AShedForCere10":
      field1.removeAttribute("disabled");
      field1.setAttribute("mandatory", "");
      disableGroup = disableGroup.concat(field2, field3, field4, field5);

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_AStalOrShed10":
      field2.removeAttribute("disabled");
      field2.setAttribute("mandatory", "");
      disableGroup = disableGroup.concat(field1, field3, field4, field5);

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_OnTheStreOr10":
      field3.removeAttribute("disabled");
      field3.setAttribute("mandatory", "");
      disableGroup = disableGroup.concat(field1, field2, field4, field5);

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_WithAnAdveArea10":
      field4.removeAttribute("disabled");
      field4.setAttribute("mandatory", "");
      disableGroup = disableGroup.concat(field1, field2, field3, field5);

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_Of4MetrOr10":
      field5.removeAttribute("disabled");
      field5.setAttribute("mandatory", "");
      disableGroup = disableGroup.concat(field1, field2, field3, field4);

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_TempBuilGranWith10":
      disableGroup = disableGroup.concat(
        field1,
        field2,
        field3,
        field4,
        field5
      );

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_OtheTempBuilOr10":
      disableGroup = disableGroup.concat(
        field1,
        field2,
        field3,
        field4,
        field5
      );

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
    case "DeclByApplFirm_IWeConfThat_ATempBuilPerm10":
      disableGroup = disableGroup.concat(
        field1,
        field2,
        field3,
        field4,
        field5
      );

      for (let targetDisabled of disableGroup) {
        targetDisabled.removeAttribute("mandatory");
        targetDisabled.setAttribute("disabled", "");
        targetDisabled.value = "";
      }
      break;
  }
}

function SubmChec_ThisApplIsAcco30_change(element) {
  if (element.checked) {
    document
      .getElementById("SubmChec_ThisApplIsAcco10")
      .removeAttribute("disabled");
    document
      .getElementById("SubmChec_ThisApplIsAcco10")
      .setAttribute("mandatory", "");
  } else {
    document
      .getElementById("SubmChec_ThisApplIsAcco10")
      .removeAttribute("mandatory");
    document
      .getElementById("SubmChec_ThisApplIsAcco10")
      .setAttribute("disabled", "");
    document.getElementById("SubmChec_ThisApplIsAcco10").value = "";

    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .removeAttribute("mandatory");
    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .setAttribute("disabled", "");
    document.getElementById("SubmChec_ThisApplIsAcco20").value = "";
  }
}

function SubmChec_ThisApplIsAcco10_change() {
  let value = document.getElementById("SubmChec_ThisApplIsAcco10").value;

  if (value !== "no payment") {
    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .removeAttribute("disabled");
    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .setAttribute("mandatory", "");
    document.getElementById("SubmChec_ThisApplIsAcco20").value = "";
  } else {
    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .removeAttribute("mandatory");
    document
      .getElementById("SubmChec_ThisApplIsAcco20")
      .setAttribute("disabled", "");
    document.getElementById("SubmChec_ThisApplIsAcco20").value = "0.00";
  }
}

function SubmChec_ThisApplIsAcco20_change() {
  let value = document.getElementById("SubmChec_ThisApplIsAcco20").value;
  if (value != null) {
    if (value == Math.floor(value)) {
      if (value.includes(".")) {
        let newValue = value.replace(".", "");
        document.getElementById("SubmChec_ThisApplIsAcco20").value =
          newValue + ".00";
      } else {
        document.getElementById("SubmChec_ThisApplIsAcco20").value =
          value + ".00";
      }
    } else {
      document.getElementById("SubmChec_ThisApplIsAcco20").value = value;
    }
  }
}

function checkTemplate(el) {
  if (el.value.length < 10) {
    document.getElementById(el.id).setAttribute("data-invalid", "");
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
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

function typeOfApp(element) {
  let select1 = document.getElementById("TypeOfAppl_ExisPermNo20");
  let textbox1 = document.getElementById("TypeOfAppl_ExisPermNo10");
  let existPermiSign = document.getElementById("exisPermi1");

  let select2 = document.getElementById("PrevPermNo20");
  let textbox2 = document.getElementById("PrevPermNo10");
  let existPermiSign2 = document.getElementById("exisPermi2");

  let permitNo = document.getElementById("TypeOfAppl_AdveStru_PrevPermNo10");
  let permitNoSign = document.getElementById("permiNoSign");
  let licenseNo = document.querySelectorAll(
    "[prefix='TypeOfAppl_AdveStru_PrevLiceNo']"
  );
  let field = document.getElementById("LABEL14");
  let addBtn = document.getElementById("addBtn");
  //reset values
  select1.value = "";
  textbox1.value = "";
  select2.value = "";
  textbox2.value = "";
  permitNo.value = "";

  select1.removeAttribute("mandatory");
  select1.setAttribute("disabled", "");
  textbox1.removeAttribute("mandatory");
  textbox1.setAttribute("disabled", "");
  existPermiSign.textContent = "";

  select2.removeAttribute("mandatory");
  select2.setAttribute("disabled", "");
  textbox2.removeAttribute("mandatory");
  textbox2.setAttribute("disabled", "");
  existPermiSign2.textContent = "";

  permitNo.removeAttribute("mandatory");
  permitNo.setAttribute("disabled", "");
  permitNoSign.textContent = "";
  addBtn.setAttribute("disabled", "");

  //////////////////////
  let radio1 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_EvenRelaStruc10"
  );
  let radio2 = document.getElementById("ProjDetl_TypeOfTempBuil_TBURAWP10");
  let radio3 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_ConsSiteShowFlat10"
  );
  let radio4 = document.getElementById("ProjDetl_TypeOfTempBuil_OutdStru10");
  let page7 = document.querySelector("[target='page8']");
  page7.setAttribute("page-number", "6");
  resetFeeComputation();
  let formField = document.querySelectorAll(".Afields");
  for (let i = 0; i < formField.length; i++) {
    if (i != 0) {
      formField[i].parentNode.removeChild(formField[i]);
      let elements = formField[i].querySelectorAll("cn2-textbox");
      for (let element of elements) delete jsonData[element.id];
    }
  }
  for (let i = 0; i < licenseNo.length; i++) {
    licenseNo[i].value = "";
    licenseNo[i].setAttribute("disabled", "");
  }
  field.value = "";
  field.setAttribute("disabled", "");

  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;

  let textboxConsultNo = document.getElementById(
    "TypeOfTempBuil_OutdStru_LiceNo10"
  );

  radio4.setAttribute("disabled", "");
  radio4.removeAttribute("checked");
  radio4.removeAttribute("mandatory");

  textboxConsultNo.value = "";
  if (!document.getElementById("chklblTypeOfAppl_AdveStru_NewErec10").checked) {
    textboxConsultNo.setAttribute("disabled", "");
    textboxConsultNo.removeAttribute("mandatory");
  }

  let checkboxSect3 = [
    document.getElementById("TypeOfTempBuil_OutdStru_ExceSupp10"),
    document.getElementById("TypeOfTempBuil_OutdStru_Exce10"),
    document.getElementById("TypeOfTempBuil_OutdStru_UppeMost10")
  ];

  reset21();
  reset22();
  reset23();
  reset24();

  switch (element.id) {
    case "Check_NewErec10":
      radio1.removeAttribute("disabled");
      radio2.removeAttribute("disabled");
      radio3.removeAttribute("disabled");
      radio4.setAttribute("disabled", "");
      resetAppPermit(true);
      resetAppExtension(false);
      break;
    case "Check_ReteWork10":
      radio1.setAttribute("disabled", "");
      radio2.removeAttribute("disabled");
      radio3.removeAttribute("disabled");
      radio4.setAttribute("disabled", "");

      select1.setAttribute("mandatory", "");
      select1.removeAttribute("disabled");
      textbox1.setAttribute("mandatory", "");
      textbox1.removeAttribute("disabled");
      existPermiSign.textContent = "*";

      resetAppPermit(false);
      resetAppExtension(true);
      break;
    case "Check_PermExte10":
      radio1.setAttribute("disabled", "");
      radio2.removeAttribute("disabled");
      radio3.removeAttribute("disabled");
      radio4.setAttribute("disabled", "");

      select2.setAttribute("mandatory", "");
      select2.removeAttribute("disabled");
      textbox2.setAttribute("mandatory", "");
      textbox2.removeAttribute("disabled");
      existPermiSign2.textContent = "*";

      resetAppPermit(false);
      resetAppExtension(true);
      break;
    case "chklblTypeOfAppl_AdveStru_NewErec10":
      radio1.setAttribute("disabled", "");
      radio2.setAttribute("disabled", "");
      radio3.setAttribute("disabled", "");
      radio4.removeAttribute("disabled");
      radio4.checked = true;
      textboxConsultNo.removeAttribute("disabled");
      textboxConsultNo.removeAttribute("checked");
      textboxConsultNo.removeAttribute("mandatory");
      textboxConsultNo.setAttribute("mandatory", "");

      for (let checkBox of checkboxSect3) {
        checkBox.removeAttribute("disabled");
        // checkBox.setAttribute("mandatory", "");
        // checkBox.setAttribute("checked", "");
      }

      resetAppPermit(true);
      resetAppExtension(false);
      break;
    case "chkTypeOfAppl_AdveStru_PermRene10":
      radio1.setAttribute("disabled", "");
      radio2.setAttribute("disabled", "");
      radio3.setAttribute("disabled", "");
      radio4.removeAttribute("disabled");
      radio4.checked = true;

      permitNo.setAttribute("mandatory", "");
      permitNo.removeAttribute("disabled");
      permitNoSign.textContent = "*";
      addBtn.removeAttribute("disabled");
      for (let i = 0; i < licenseNo.length; i++) {
        licenseNo[i].value = "";
        licenseNo[i].removeAttribute("disabled");
      }

      for (let checkBox of checkboxSect3) {
        checkBox.removeAttribute("disabled");
        // checkBox.setAttribute("mandatory", "");
        // checkBox.setAttribute("checked", "");
      }

      field.removeAttribute("disabled", "");
      resetAppPermit(false);
      resetAppExtension(true);
      break;
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`.${deleteClass}`).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(`.${deleteClass}`);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function projDetails(element) {
  let textbox21 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_EvenRelaStruc20"
  );
  let checkbox21 = [
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Tent10"),
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Cont10"),
    document.getElementById(
      "ProjDetl_TypeOfTempBuil_EvenRelaStruc_StagWithOr10"
    ),
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Othe10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_Stru10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_Exce10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_UppePart10")
  ];
  let checkbox22 = [
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfTent10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_Othe10"),
    document.getElementById("TypeOfTempBuil_StruNoSGFA_Othe10")
  ];
  let textbox23 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_ConsSiteShowFlat20"
  );
  let checkbox23 = [
    document.getElementById("ProjDetl_TypeOfTempBuil_3StorAbov10"),
    document.getElementById("ProjDetl_TypeOfTempBuil_3StorAbov20"),
    document.getElementById("TypeOfTempBuil_3StorAbov_WithConsSite10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite10")
  ];
  let textbox24 = document.getElementById("TypeOfTempBuil_OutdStru_LiceNo10");
  let checkbox24 = [
    document.getElementById("TypeOfTempBuil_OutdStru_ExceSupp10"),
    document.getElementById("TypeOfTempBuil_OutdStru_Exce10"),
    document.getElementById("TypeOfTempBuil_OutdStru_UppeMost10")
  ];
  reset21();
  reset22();
  reset23();
  reset24();
  resetFeeComputation();
  switch (element.id) {
    case "ProjDetl_TypeOfTempBuil_EvenRelaStruc10":
      textbox21.removeAttribute("disabled");
      textbox21.setAttribute("mandatory", "");
      for (c of checkbox21) {
        c.removeAttribute("disabled");
      }
      break;
    case "ProjDetl_TypeOfTempBuil_TBURAWP10":
      for (c of checkbox22) {
        c.removeAttribute("disabled");
      }
      break;
    case "ProjDetl_TypeOfTempBuil_ConsSiteShowFlat10":
      textbox23.removeAttribute("disabled");
      textbox23.setAttribute("mandatory", "");
      for (c of checkbox23) {
        c.removeAttribute("disabled");
      }
      break;
    case "ProjDetl_TypeOfTempBuil_OutdStru10":
      textbox24.setAttribute("mandatory", "");
      textbox24.removeAttribute("disabled");
      for (c of checkbox24) {
        c.removeAttribute("disabled");
      }
      break;
  }
}

function maxV(element, event, length) {
  let field = document.getElementById(element.id);
  let finalLen = length - 1;
  if (event.keyCode != 46 && !field.value.includes(".")) {
    if (field.value.length > finalLen) {
      event.preventDefault();
    }
  }
}

function enableMandatoryField(element, target) {
  let main = document.getElementById(element.id);
  let targetArr = [];
  for (let i = 0; i < target.length; i++) {
    targetArr.push(document.getElementById(target[i]));
  }
  if (main.checked) {
    for (t of targetArr) {
      t.removeAttribute("disabled");
      t.setAttribute("mandatory", "");
    }
  } else {
    for (t of targetArr) {
      t.value = "";
      t.setAttribute("disabled", "");
      t.removeAttribute("mandatory");
    }
  }
}

function enableHiddenMandatoryField(element, target, specifyID) {
  let main = document.getElementById(element.id);
  let pleaseSpecify = document.getElementById(specifyID);
  target = document.getElementById(target);

  if (main.checked) {
    target.removeAttribute("hidden");
    target.setAttribute("mandatory", "");
    if (specifyID == "TypeOfTempBuil_StruNoSGFA_Othe20_span") {
      pleaseSpecify.textContent = "Please specify structure type:";
    } else {
      pleaseSpecify.textContent = "(Please Specify)";
    }
  } else {
    target.value = "";
    target.setAttribute("hidden", "");
    target.removeAttribute("mandatory");
    pleaseSpecify.textContent = "";
  }
}

////////////////////////////////////////////////////////////////////////FOR 2.1
function calcTotal(name, target) {
  let fields = document.querySelectorAll(`[group= '${name}']`);
  target = document.getElementById(target);
  let lettera = document.getElementById(
    "ApplForPermUse_SGFAStru_SGFAFromSect210"
  );
  let letteraCompute = document.getElementById(
    "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee10"
  );

  let letterb = document.getElementById("ApplForPermUse_Stru10");
  let letterbCompute = document.getElementById(
    "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee20"
  );

  let letterc = document.getElementById(
    "ApplForPermUse_StruApplType_AdveStru20"
  );
  let lettercCompute = document.getElementById(
    "ApplForPermUse_CompFee_AdveStru10"
  );

  let letterd = document.getElementById(
    "ApplForPermUse_StruApplType_PermRene10"
  );
  let letterdCompute = document.getElementById(
    "ApplForPermUse_CompFee_PermRene10"
  );
  let finalFee = document.getElementById(
    "ApplForPermUse_StruApplType_FeePaya10"
  );
  let letterComputeArr = [
    document.getElementById(
      "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee10"
    ),
    document.getElementById(
      "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee20"
    ),
    document.getElementById("ApplForPermUse_CompFee_AdveStru10"),
    document.getElementById("ApplForPermUse_CompFee_PermRene10")
  ];

  let input,
    final = 0;
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value) {
      input = parseFloat(fields[i].value);
      final += input;
    }
  }
  if (final != 0) {
    if (final.toString().includes(".")) {
      target.value = final.toString();
    } else {
      target.value = final;
    }
  } else {
    target.value = "";
  }

  ///////////////////////////////////////////////////FEE COMPUTATION/////////////////////////////////////////////////////////////

  if (
    document.getElementById("Check_NewErec10").checked ||
    document.getElementById("chklblTypeOfAppl_AdveStru_NewErec10").checked
  ) {
    if (
      target.id == "EvenRelaStruc_StagWithOr_TotaSGFA10" ||
      target.id == "TypeOfTempBuil_BuilWithSGFA_TotaSGFA10" ||
      target.id == "TypeOfTempBuil_3StorAbov_Tota_SGFA10"
    ) {
      if (final != 0) {
        let final2 = (Math.ceil(final / 100.0) * 100 * (200 / 100)).toString();
        if (final2.toString().includes(".")) {
          lettera.value = final.toFixed(2);
          letteraCompute.value = final2;
        } else {
          lettera.value = final;
          letteraCompute.value = final2;
        }
      } else {
        lettera.value = "0.00";
        letteraCompute.value = "0.00";
      }
    } else if (
      target.id == "TypeOfTempBuil_EvenRelaStruc_TotaNoOfStru10" ||
      target.id == "TypeOfTempBuil_MoreThan90Days_Tota_NoOfStru10"
    ) {
      if (final != 0) {
        let final3 = final * 200;
        if (final3.toString().includes(".")) {
          letterb.value = final.toFixed(2);
          letterbCompute.value = final3;
        } else {
          letterb.value = final;
          letterbCompute.value = final3;
        }
      } else {
        letterb.value = "0";
        letterbCompute.value = "0";
      }
    }
  }

  if (document.getElementById("chklblTypeOfAppl_AdveStru_NewErec10").checked) {
    if (target.id == "TypeOfTempBuil_OutdStru_Tota_NoOfStru10") {
      if (final != 0) {
        let final4 = final * 200;
        if (final4.toString().includes(".")) {
          letterc.value = final.toFixed(2);
          lettercCompute.value = final4;
        } else {
          letterc.value = final;
          lettercCompute.value = final4;
        }
      } else {
        letterc.value = "0";
        lettercCompute.value = "0";
      }
    }
  }

  if (
    (document.getElementById("Check_ReteWork10").checked ||
      document.getElementById("Check_PermExte10") ||
      document.getElementById("chkTypeOfAppl_AdveStru_PermRene10")) &&
    !document.getElementById("chklblTypeOfAppl_AdveStru_NewErec10").checked &&
    !document.getElementById("Check_NewErec10").checked
  ) {
    if (target.id == "TypeOfTempBuil_OutdStru_Tota_NoOfStru10") {
      if (final != 0) {
        let final5 = final * 200;
        if (final5.toString().includes(".")) {
          letterd.value = final.toFixed(2);
          letterdCompute.value = final5;
        } else {
          letterd.value = final;
          letterdCompute.value = final5;
        }
      } else {
        letterd.value = "0";
        letterdCompute.value = "0";
      }
    } else if (target.id == "TypeOfTempBuil_3StorAbov_Tota_NoOfStru10") {
      if (final != 0) {
        let final5 = final * 200;
        if (final5.toString().includes(".")) {
          letterd.value = final.toFixed(2);
          letterdCompute.value = final5;
        } else {
          letterd.value = final;
          letterdCompute.value = final5;
        }
      } else {
        letterd.value = "0";
        letterdCompute.value = "0";
      }
    } else if (
      target.id == "TypeOfTempBuil_BuilWithSGFA_TotaNoOfStru10" ||
      target.id == "TypeOfTempBuil_MoreThan90Days_Tota_NoOfStru10"
    ) {
      let withOutSgfa = document.getElementById(
        "TypeOfTempBuil_BuilWithSGFA_TotaNoOfStru10"
      );
      let withSgfa = document.getElementById(
        "TypeOfTempBuil_MoreThan90Days_Tota_NoOfStru10"
      );
      if (withOutSgfa.value && withSgfa.value) {
        let final5 =
          (parseInt(withSgfa.value) + parseInt(withOutSgfa.value)) * 200;
        if (final5.toString().includes(".")) {
          letterd.value =
            parseInt(withSgfa.value) + parseInt(withOutSgfa.value);
          letterdCompute.value = final5;
        } else {
          letterd.value =
            parseInt(withSgfa.value) + parseInt(withOutSgfa.value);
          letterdCompute.value = final5;
        }
      } else if (withOutSgfa.value && !withSgfa.value) {
        let final5 = parseInt(withOutSgfa.value) * 200;
        if (final5.toString().includes(".")) {
          letterd.value = parseInt(withOutSgfa.value);
          letterdCompute.value = final5;
        } else {
          letterd.value = parseInt(withOutSgfa.value);
          letterdCompute.value = final5;
        }
      } else if (!withOutSgfa.value && withSgfa.value) {
        let final5 = parseInt(withSgfa.value) * 200;
        if (final5.toString().includes(".")) {
          letterd.value = parseInt(withSgfa.value);
          letterdCompute.value = final5;
        } else {
          letterd.value = parseInt(withSgfa.value);
          letterdCompute.value = final5;
        }
      } else {
        letterd.value = "0";
        letterdCompute.value = "0";
      }
    }
  }

  let final10 = 0.0;
  for (f of letterComputeArr) {
    if (f.value) {
      final10 += parseFloat(f.value);
      finalFee.value = final10.toFixed(2);
    } else {
      finalFee.value = "0.00";
    }
  }
}

function TypeOfTempBuil_3StorAbov_WithConsSite10_change(element) {
  let checkboxes = [
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfSteeFramStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Othe10")
  ];
  let fields = [
    document.getElementById(
      "TypeOfTempBuil_3StorAbov_NoOfSteeFramStru_NoOfStru10"
    ),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfSteeFramStru_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutsCons_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutsCons_SGFA10")
  ];
  let others = document.getElementById("TypeOfTempBuil_3StorAbov_Othe20");
  let othersSpan = document.getElementById(
    "TypeOfTempBuil_3StorAbov_Othe20_span"
  );
  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
      c.checked = false;
    }
    for (f of fields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
    others.removeAttribute("mandatory");
    others.setAttribute("hidden", "");
    others.value = "";
    othersSpan.textContent = "";
  }
}

function TypeOfTempBuil_3StorAbov_OutConsSite10_change(element) {
  let checkboxes = [
    document.getElementById(
      "TypeOfTempBuil_3StorAbov_OutConsSite_NoOfSteeFramStru10"
    ),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_ShowFlat10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_Othe10")
  ];
  let fields = [
    document.getElementById("StorAbov_OutConsSite_NoOfSteeFramStru_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_NoOfSteeFramStru_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_NoOfCont_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_NoOfCont_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_ShowFlat_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_ShowFlat_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_Othe_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_Othe_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Tota_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Tota_SGFA10")
  ];
  let others = document.getElementById(
    "TypeOfTempBuil_3StorAbov_OutConsSite_Othe20"
  );
  let othersSpan = document.getElementById(
    "TypeOfTempBuil_3StorAbov_OutConsSite_Othe20_span"
  );
  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.checked = false;
      c.setAttribute("disabled", "");
    }
    for (f of fields) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "";
    }
    others.removeAttribute("mandatory");
    others.setAttribute("hidden", "");
    others.value = "";
    othersSpan.textContent = "";
  }
}

function reset21() {
  let textbox21 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_EvenRelaStruc20"
  );
  let checkbox21 = [
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Tent10"),
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Cont10"),
    document.getElementById(
      "ProjDetl_TypeOfTempBuil_EvenRelaStruc_StagWithOr10"
    ),
    document.getElementById("ProjDetl_TypeOfTempBuil_EvenRelaStruc_Othe10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_Stru10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_Exce10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_UppePart10")
  ];
  let fields = [
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Tent_NoOfStruc10"),
    document.getElementById("TypeOfTempBuil_OutdStru_UppeMost10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Tent_SGFA10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Cont_NoOfStruc10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Cont_SGFA10"),
    document.getElementById(
      "TypeOfTempBuil_EvenRelaStruc_StagWithOr_NoOfStruc10"
    ),
    document.getElementById("TypeOfTempBuil_BuilOrStruc3_StagWithOr_SGFA10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Othe_NoOfStruc10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_Othe_SGFA10"),
    document.getElementById("EvenRelaStruc_StagWithOr_TotaNoOfStru10"),
    document.getElementById("EvenRelaStruc_StagWithOr_TotaSGFA10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_NoOfStru10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_NoOfExceStru10"),
    document.getElementById("EvenRelaStruc_StruWOSGFA_NoOfStruUppe10"),
    document.getElementById("TypeOfTempBuil_EvenRelaStruc_TotaNoOfStru10")
  ];
  let others = document.getElementById(
    "ProjDetl_TypeOfTempBuil_EvenRelaStruc_Othe20"
  );
  let othersSpan = document.getElementById(
    "ProjDetl_TypeOfTempBuil_EvenRelaStruc_Othe20_span"
  );
  others.removeAttribute("mandatory");
  others.setAttribute("hidden", "");
  othersSpan.textContent = "";
  others.value = "";
  textbox21.removeAttribute("mandatory", "");
  textbox21.setAttribute("disabled", "");
  textbox21.value = "";
  for (c of checkbox21) {
    c.checked = false;
    c.setAttribute("disabled", "");
  }
  for (f of fields) {
    f.setAttribute("disabled", "");
    f.removeAttribute("mandatory");
    f.value = "";
  }
}

function reset22() {
  let checkbox22 = [
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfTent10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_Othe10"),
    document.getElementById("TypeOfTempBuil_StruNoSGFA_Othe10")
  ];
  let fields = [
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfTent_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfTent_SGFA10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfCont_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_NoOfCont_SGFA10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_Othe_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_Othe_SGFA10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_TotaNoOfStru10"),
    document.getElementById("TypeOfTempBuil_BuilWithSGFA_TotaSGFA10"),
    document.getElementById("TypeOfTempBuil_StruNoSGFA_Othe_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_MoreThan90Days_Tota_NoOfStru10")
  ];
  let others = document.getElementById("TypeOfTempBuil_BuilWithSGFA_Othe20");
  let othersSpan = document.getElementById(
    "TypeOfTempBuil_BuilWithSGFA_Othe20_span"
  );
  let others2 = document.getElementById("TypeOfTempBuil_StruNoSGFA_Othe20");
  let others2Span = document.getElementById("TypeOfTempBuil_StruNoSGFA_Othe20");
  others.removeAttribute("mandatory");
  others.setAttribute("hidden", "");
  others.value = "";
  othersSpan.textContent = "";
  others2.removeAttribute("mandatory");
  others2.setAttribute("hidden", "");
  others2.value = "";
  others2Span.textContent = "";
  for (c of checkbox22) {
    c.checked = false;
    c.setAttribute("disabled", "");
  }
  for (f of fields) {
    f.setAttribute("disabled", "");
    f.removeAttribute("mandatory");
    f.value = "";
  }
}

function reset23() {
  let textbox23 = document.getElementById(
    "ProjDetl_TypeOfTempBuil_ConsSiteShowFlat20"
  );
  let checkbox23 = [
    document.getElementById("ProjDetl_TypeOfTempBuil_3StorAbov10"),
    document.getElementById("ProjDetl_TypeOfTempBuil_3StorAbov20"),
    document.getElementById("TypeOfTempBuil_3StorAbov_WithConsSite10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfSteeFramStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Othe10"),
    document.getElementById(
      "TypeOfTempBuil_3StorAbov_OutConsSite_NoOfSteeFramStru10"
    ),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_NoOfCont10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_ShowFlat10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_Othe10")
  ];
  let fields = [
    document.getElementById(
      "TypeOfTempBuil_3StorAbov_NoOfSteeFramStru_NoOfStru10"
    ),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfSteeFramStru_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_NoOfCont_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_ShowFlat_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutsCons_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutsCons_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_NoOfSteeFramStru_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_NoOfSteeFramStru_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_NoOfCont_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_NoOfCont_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_ShowFlat_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_ShowFlat_SGFA10"),
    document.getElementById("StorAbov_OutConsSite_Othe_NoOfStru10"),
    document.getElementById("StorAbov_OutConsSite_Othe_SGFA10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Tota_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_3StorAbov_Tota_SGFA10")
  ];
  textbox23.removeAttribute("mandatory");
  textbox23.setAttribute("disabled", "");
  textbox23.value = "";
  let others = [
    document.getElementById("TypeOfTempBuil_3StorAbov_Othe20"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_Othe20")
  ];
  let othersSpan = [
    document.getElementById("TypeOfTempBuil_3StorAbov_Othe20_span"),
    document.getElementById("TypeOfTempBuil_3StorAbov_OutConsSite_Othe20_span")
  ];
  for (o of others) {
    o.removeAttribute("mandatory");
    o.setAttribute("hidden", "");
    o.value = "";
  }
  for (os of othersSpan) {
    os.textContent = "";
  }
  for (f of fields) {
    f.removeAttribute("mandatory");
    f.setAttribute("disabled", "");
    f.value = "";
  }
  for (c of checkbox23) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
}

function reset24() {
  let checkbox24 = [
    document.getElementById("TypeOfTempBuil_OutdStru_ExceSupp10"),
    document.getElementById("TypeOfTempBuil_OutdStru_Exce10"),
    document.getElementById("TypeOfTempBuil_OutdStru_UppeMost10")
  ];
  let fields = [
    document.getElementById("TypeOfTempBuil_OutdStru_ExceSupp_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_OutdStru_Exce_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_OutdStru_UppeMost_NoOfStru10"),
    document.getElementById("TypeOfTempBuil_OutdStru_Tota_NoOfStru10")
  ];
  let textbox24 = document.getElementById("TypeOfTempBuil_OutdStru_LiceNo10");
  textbox24.removeAttribute("mandatory");
  textbox24.setAttribute("disabled", "");
  textbox24.value = "";
  for (c of checkbox24) {
    c.checked = false;
    c.setAttribute("disabled", "");
  }
  for (f of fields) {
    f.value = "";
    f.removeAttribute("mandatory");
    f.setAttribute("disabled", "");
  }
}

function ApplForPermErec_ThePermToErec10_input(element) {
  let field = document.getElementById(element.id);
  if (field.value > 36) {
    showMessage("Value can't be more than 36. Please try again.");
    field.value = "";
  }
}
function ApplForPermErec_ThePermToErec20_input(element) {
  let field = document.getElementById(element.id);
  if (field.value > 31) {
    showMessage("Value can't be more than 31. Please try again.");
    field.value = "";
  }
}

function ApplForPermErec_TheConsInstTemp10_change(element) {
  let fields = [
    document.getElementById("ApplForPermErec_ThePermToErec10"),
    document.getElementById("ApplForPermErec_ThePermToErec20"),
    document.getElementById("ApplForPermErec_ThePermToErec30"),
    document.getElementById("ApplForPermErec_ThePermToErec40")
  ];
  if (element.checked) {
    for (f of fields) {
      f.setAttribute("mandatory", "");
      f.removeAttribute("disabled");
    }
  } else {
    for (f of fields) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "";
    }
  }
}

function ApplForPermErec_OnCompTempBuil10_change(element) {
  let checkboxes = [
    document.getElementById("ApplForPermErec_OnCompTempBuil20"),
    document.getElementById("ApplForPermErec_OnCompTempBuil30")
  ];
  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
      c.checked = false;
    }
  }
}

function resetAppPermit(condition) {
  let main = document.querySelector("[target='page6']");
  let page7 = document.querySelector("[target='page8']");
  let checkboxes = [
    document.getElementById("ApplForPermErec_IAppoAsQP10"),
    document.getElementById("ApplForPermErec_IHaveAtta10"),
    document.getElementById("ApplForPermErec_TempBuilShowAtta10"),
    document.getElementById("ApplForPermErec_IHaveSubmCopy10"),
    document.getElementById("ApplForPermErec_IHaveSubmWritCons10"),
    document.getElementById("ApplForPermErec_OnCompTempBuil10"),
    document.getElementById("ApplForPermErec_TheConsInstTemp10")
  ];
  let checkboxes2 = [
    document.getElementById("ApplForPermErec_OnCompTempBuil20"),
    document.getElementById("ApplForPermErec_OnCompTempBuil30")
  ];
  let fields = [
    document.getElementById("ApplForPermErec_ThePermToErec10"),
    document.getElementById("ApplForPermErec_ThePermToErec20"),
    document.getElementById("ApplForPermErec_ThePermToErec30"),
    document.getElementById("ApplForPermErec_ThePermToErec40")
  ];
  for (f of fields) {
    f.removeAttribute("mandatory");
    f.setAttribute("disabled", "");
    f.value = "";
  }
  for (c of checkboxes) {
    c.checked = false;
    c.setAttribute("disabled", "");
  }
  for (c of checkboxes2) {
    c.checked = false;
    c.setAttribute("disabled", "");
  }

  if (condition == true) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
    page7.setAttribute("page-number", "7");
  } else {
    main.setAttribute("hidden", "");
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
    d.getFullYear < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function ApplForRenePerm_IHaveInspTemp10_change(element) {
  let checkboxes = [
    document.getElementById("ApplForRenePerm_IHaveInspTemp_AnInspRepoIncl10"),
    document.getElementById("ApplForRenePerm_IHaveInspTemp_CertTempWorkSafe10")
  ];

  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
      c.checked = false;
    }
  }
}

function resetAppExtension(condition) {
  let main = document.querySelector("[target='page7']");
  let page7 = document.querySelector("[target='page8']");
  let checkboxes = [
    document.getElementById("ApplForRenePerm_IAmAppoQP10"),
    document.getElementById("ApplForRenePerm_TherNoDeviFrom10"),
    document.getElementById("ApplForRenePerm_IHaveInspTemp10"),
    document.getElementById("ApplForRenePerm_IHaveSubmCert10")
  ];
  let checkboxes2 = [
    document.getElementById("ApplForRenePerm_IHaveInspTemp_AnInspRepoIncl10"),
    document.getElementById("ApplForRenePerm_IHaveInspTemp_CertTempWorkSafe10")
  ];
  let fields = [
    document.getElementById("ApplForRenePerm_ThePermUseRene20"),
    document.getElementById("ApplForRenePerm_ThePermUseRene30"),
    document.getElementById("ApplForRenePerm_ThePermUseRene40")
  ];
  let datefield = document.getElementById("ApplForRenePerm_TherNoDeviFrom20");
  for (c of checkboxes) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
  for (c of checkboxes2) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
  datefield.setAttribute("disabled", "");
  datefield.value = "";
  for (f of fields) {
    f.value = "";
    f.removeAttribute("mandatory");
  }
  if (condition == true) {
    for (f of fields) {
      f.setAttribute("mandatory", "");
    }
    main.removeAttribute("hidden");
    page7.setAttribute("page-number", "7");
    for (c of checkboxes) {
      c.removeAttribute("disabled", "");
    }
  } else {
    main.setAttribute("hidden", "");
  }
}

function paymentMeth(element) {
  let fields = [
    document.getElementById("PaymMode_Cheq20"),
    document.getElementById("PaymMode_Cheq40"),
    document.getElementById("PaymMode_Cheq30"),
    document.getElementById("PaymMode_Cheq50")
  ];
  switch (element.id) {
    case "PaymMode_Cheq10":
      for (f of fields) {
        f.setAttribute("mandatory", "");
        f.removeAttribute("disabled");
      }
      break;
    case "PaymMode_ePay10":
      for (f of fields) {
        f.removeAttribute("mandatory", "");
        f.setAttribute("disabled", "");
        f.value = "";
      }
      break;
  }
}

function resetFeeComputation() {
  let fieldsA = [
    document.getElementById("ApplForPermUse_SGFAStru_SGFAFromSect210"),
    document.getElementById("ApplForPermUse_Stru10"),
    document.getElementById(
      "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee10"
    ),
    document.getElementById(
      "ApplForPermUse_StruApplType_NewErecReteBuil_CompFee20"
    )
  ];
  let fields = [
    document.getElementById("ApplForPermUse_StruApplType_PermRene10"),
    document.getElementById("ApplForPermUse_StruApplType_AdveStru20"),
    document.getElementById("ApplForPermUse_CompFee_AdveStru10"),
    document.getElementById("ApplForPermUse_CompFee_PermRene10"),
    document.getElementById("ApplForPermUse_StruApplType_FeePaya10")
  ];
  for (f of fields) {
    f.value = "0.00";
  }
  for (f of fieldsA) {
    f.value = "0";
  }
}

function removeGroupMandaOneChecked(element) {
  let group = document.querySelectorAll(`[name='${element.name}']`);
  let pass = false;
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let x = 0; x < group.length; x++) {
      group[x].removeAttribute("mandatory");
      group[x].removeAttribute("checked");
    }
  }
}

function removeDataInvalid() {
  let container = document.querySelectorAll(".Afields").length;
  let textBox = document.querySelectorAll(
    "[prefix='TypeOfAppl_AdveStru_PrevLiceNo']"
  );
  if (container > 1) {
    textBox[textBox.length - 1].removeAttribute("data-invalid");
    textBox[textBox.length - 1].removeAttribute("data-invalid-message");
  }
}

function removeDataInvalid2() {
  let textBox = document.getElementById("TypeOfAppl_AdveStru_PrevLiceNo10");
  let deleteBtn = document.getElementById("delete1A");

  textBox.removeAttribute("data-invalid");
  textBox.removeAttribute("data-invalid-message");

  deleteBtn.setAttribute("disabled", "");
}

function licenseNoValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");
  let licenseField = document.getElementById(el.id);
  if (el.value.trim().length !== maxlength && el.value.trim() !== "") {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "This field is limited to 11 characters and the License format is ####/###### where # is a numeric [0-9] character"
        );
    } else {
      licenseField.removeAttribute("data-invalid");
      licenseField.removeAttribute("data-invalid-message");
    }
  } else if (el.value.trim() === "") {
    if (licenseField.hasAttribute("mandatory")) {
      licenseField.removeAttribute("mandatory");
      licenseField.setAttribute("mandatory", "");
    }
    licenseField.value = "";
    licenseField.removeAttribute("data-invalid");
    licenseField.removeAttribute("data-invalid-message");
  } else {
    licenseField.removeAttribute("data-invalid");
    licenseField.removeAttribute("data-invalid-message");
  }
}

// override common functions
function saveFormDataToJson() {
	for (let [id, value] of Object.entries(jsonData)) {
	  let targetElement = document.getElementById(id);
	  if (targetElement) {
		switch (targetElement.tagName) {
		  case "CN2-CHECKBOX":
		  case "CN2-SWITCHBUTTON":
			jsonData[id] = targetElement.checked ? "on" : "";
			break;
		  case "INPUT":
			// Radio Button
			if (
			  targetElement.hasAttribute("type") &&
			  targetElement.getAttribute("type") == "radio"
			) {
			  jsonData[id] = targetElement.checked ? "on" : "off";
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