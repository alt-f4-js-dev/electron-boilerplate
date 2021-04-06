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

//Fee Computation
function feeComputation() {
  let liftQuantity = document.querySelectorAll(`[prefix="LiftReco_Quan"]`);
  let EscaQuantity = document.querySelectorAll(
    `[prefix="SubmChec_CateAndNoEsca_NoOfEsca"]`
  );
  let mechQuantity = document.querySelectorAll(
    `[prefix="SubmChec_CateAndNoMech_NoOfMech"]`
  );
  let getLiftQuantity = 0;
  let getEscaQuantity = 0;
  let getMechQuantity = 0;

  let lift = document.getElementById("NoOfEqui_Lift10");
  let liftComputedFees = document.getElementById("CompFee_Lift10");
  let escalator = document.getElementById("NoOfEqui_Esca10");
  let escalatorComputedFees = document.getElementById("CompFee_Esca10");
  let mechanized = document.getElementById("NoOfEqui_Mech10");
  let mechanizedComputedFees = document.getElementById("CompFee_Mech10");

  let computeLiftFees = 0;
  let computeEscaFees = 0;
  let computeMechFees = 0;

  let totalFees = document.getElementById("PaymMode_Paym10");
  let total = 0;

  //get Quantity
  for (let i = 0; i < liftQuantity.length; i++) {
    if (liftQuantity[i].value) {
      let final = parseInt(liftQuantity[i].value);
      getLiftQuantity += final;
    }
  }
  for (let i = 0; i < EscaQuantity.length; i++) {
    if (EscaQuantity[i].value) {
      let final = parseInt(EscaQuantity[i].value);
      getEscaQuantity += final;
    }
  }

  for (let i = 0; i < mechQuantity.length; i++) {
    if (mechQuantity[i].value) {
      let final = parseInt(mechQuantity[i].value);
      getMechQuantity += final;
    }
  }

  lift.value = getLiftQuantity;
  escalator.value = getEscaQuantity;
  mechanized.value = getMechQuantity;

  first10Lift = 10 * 30;
  first10Esca = 10 * 30;
  first10Mcps = 10 * 30;

  //Compute Fees
  if (getLiftQuantity <= 10) {
    computeLiftFees = getLiftQuantity * 30;
  } else {
    computeLiftFees = (getLiftQuantity - 10) * 10 + first10Lift;
  }

  if (getEscaQuantity <= 10) {
    computeEscaFees = getEscaQuantity * 30;
  } else {
    computeEscaFees = (getEscaQuantity - 10) * 10 + first10Esca;
  }

  if (getMechQuantity <= 10) {
    computeMechFees = getMechQuantity * 30;
  } else {
    computeMechFees = (getMechQuantity - 10) * 10 + first10Mcps;
  }
  liftComputedFees.value = computeLiftFees;
  escalatorComputedFees.value = computeEscaFees;
  mechanizedComputedFees.value = computeMechFees;

  //Total Plan Fee Payable
  total = computeLiftFees + computeEscaFees + computeMechFees;
  totalFees.value = total;
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function validateDate(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  let d = new Date(year, month - 1, day);
  if (
    (d.getFullYear() != year && d.getMonth() != month - 1 && d.getDate() != day) || year > 2999 || year < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  } else if (
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

function checkEmail(el) {
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

function removeUENerror(element, fieldPrefix) {
  let childCount = document.getElementById(element).childElementCount;
  let uen = document.querySelectorAll("[prefix='" + fieldPrefix + "']");
  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
  }
}

//Application Type
function Project_TypeOfPlan10_Change(sourceElement) {
  //default upon change application Type
  document.getElementById("PaymMode_ePay10").checked = true;
  for (let target of document.querySelectorAll(`[clear-disable]`)) {
    target.setAttribute("disabled", "");
    target.removeAttribute("mandatory");
    target.removeAttribute("data-invalid");
    target.removeAttribute("data-invalid-message");
    target.value = "";
  }

  if (document.querySelector('[target="page4"]').hasAttribute("hidden")) {
    document.querySelector('[target="page4"]').removeAttribute("hidden");
    document.querySelector('[target="page5"]').removeAttribute("hidden");
    document.querySelector('[target="page6"]').removeAttribute("hidden");
    document.querySelector('[target="page7"]').removeAttribute("hidden");
    document.querySelector('[target="page8"]').removeAttribute("hidden");
    // document.querySelector('[target="page9"]').removeAttribute("hidden");
  }

  let escalatorSections = document.querySelectorAll("[escalator]");
  let liftSections = document.querySelectorAll("[lift]");
  let mechSections = document.querySelectorAll("[mechanical]");

  let liftCheck = document.querySelectorAll("[liftCheck]");
  let liftCheck2 = document.querySelectorAll("[liftCheck2]");
  let escaCheck = document.querySelectorAll("[escaCheck]");
  let escaCheck2 = document.querySelectorAll("[escaCheck2]");
  let mcpsCheck = document.querySelectorAll("[mcpsCheck]");
  let mcpsCheck2 = document.querySelectorAll("[mcps2Check2]");

  // document.getElementById("Compute_Lift10").value = "";
  // document.getElementById("Compute_Lift20").value = "";

  // document.getElementById("Compute_Esca10").value = "";
  // document.getElementById("Compute_Esca20").value = "";

  // document.getElementById("Compute_Mech10").value = "";
  // document.getElementById("Compute_Mech20").value = "";

  let parent = "stForm";
  let tempDiv = document.getElementById(parent).querySelectorAll("div");

  let parent2 = "inpecForm";
  let tempDiv2 = document.getElementById(parent2).querySelectorAll("div");

  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "A1", parent);
      div.querySelector("cn2-button").setAttribute("disabled", "")
    }
  }

  for (let div2 of tempDiv2) {
    if (div2.hasAttribute("id")) {
      removeDuplicate(div2.querySelector("cn2-button").id, "B1", parent2);
      div2.querySelector("cn2-button").setAttribute("disabled", "")
    }
  }

  for (let checks of liftCheck2) {
    checks.checked = false;
  }

  for (let checks of escaCheck2) {
    checks.checked = false;
  }

  for (let checks of mcpsCheck2) {
    checks.checked = false;
  }

  //Particular of Developer Reset
  //Start
  let partOfDevFormField = document.querySelectorAll(".Afields");
  let parOfDevDelBtn = document.getElementById("PartOfTheOWNER_Delete10");

  for (let i = 0; i < partOfDevFormField.length; i++) {
    let elements = partOfDevFormField[i].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");
      if (element.id == "Member_Member_Name_OWNER10") {
        document.getElementById(element.id).removeAttribute("mandatory");
        document.getElementById(element.id).setAttribute("mandatory", "");
      }
      if (i != 0) {
        delete jsonData[element.id];
      }
    }
    if (i != 0) {
      partOfDevFormField[i].parentNode.removeChild(partOfDevFormField[i]);
    }
  }

  parOfDevDelBtn.setAttribute("disabled", "");
  //End

  //Lift Details Reset
  //Start
  let liftDetFormField = document.querySelectorAll(".Bfields");
  let liftDetDelBtn = document.getElementById("LiftDeta_Delete1010");

  for (let x = 0; x < liftDetFormField.length; x++) {
    let elements = liftDetFormField[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");

      if (x != 0) {
        delete jsonData[element.id];
      }
    }
    if (x != 0) {
      liftDetFormField[x].parentNode.removeChild(liftDetFormField[x]);
    }
  }

  liftDetDelBtn.setAttribute("disabled", "");

  let parent3 = document.getElementById("LiftDetaContainer");
  let clone = parent3.querySelector(
    '[prefix="' +
    document.getElementById("LiftDetaChild10").getAttribute("prefix") +
    '"]'
  );
  for (let subCont of clone.querySelectorAll("[sub-container]")) {
    if (subCont.querySelectorAll("[sub-form]").length > 0) {
      //remove other instance of sub-form
      if (subCont.querySelectorAll("[sub-form]").length > 1) {
        let subForms = subCont.querySelectorAll("[sub-form]");
        for (let a = subForms.length - 1; a > 0; a--) {
          subCont.removeChild(subForms[a]);
        }
      }
    }
  }
  if (clone.querySelector("[danger-inside]") != null)
    clone.querySelector("[danger-inside]").setAttribute("disabled", "");

  if (clone.querySelector("[danger-inside-inside]") != null)
    clone.querySelector("[danger-inside-inside]").setAttribute("disabled", "");
  //End

  //Escalator Details Reset
  //Start
  let escaDetFormField = document.querySelectorAll(".Cfields");
  let escaDetDelBtn = document.getElementById("EscaDeta_Delete1010");

  for (let x = 0; x < escaDetFormField.length; x++) {
    let elements = escaDetFormField[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");

      if (x != 0) {
        delete jsonData[element.id];
      }
    }
    if (x != 0) {
      escaDetFormField[x].parentNode.removeChild(escaDetFormField[x]);
    }
  }

  escaDetDelBtn.setAttribute("disabled", "");

  let parent4 = document.getElementById("EscaDetaContainer");
  let clone2 = parent4.querySelector(
    '[prefix="' +
    document.getElementById("EscaDetaChild10").getAttribute("prefix") +
    '"]'
  );
  for (let escaCont of clone2.querySelectorAll("[sub-container]")) {
    if (escaCont.querySelectorAll("[sub-form]").length > 0) {
      //remove other instance of sub-form
      if (escaCont.querySelectorAll("[sub-form]").length > 1) {
        let escaForms = escaCont.querySelectorAll("[sub-form]");
        for (let b = escaForms.length - 1; b > 0; b--) {
          escaCont.removeChild(escaForms[b]);
        }
      }
    }
  }
  if (clone2.querySelector("[danger-inside]") != null)
    clone2.querySelector("[danger-inside]").setAttribute("disabled", "");

  if (clone2.querySelector("[danger-inside-inside]") != null)
    clone2.querySelector("[danger-inside-inside]").setAttribute("disabled", "");

  // let parent5 = document.getElementById("EscaDeta_CompTypeTestCont10");
  // let clone3 = parent5.querySelector(
  //   '[prefix="' +
  //     document
  //       .getElementById("EscaDeta_CompTypeTestForm10_10")
  //       .getAttribute("prefix") +
  //     '"]'
  // );
  // for (let escaCont2 of clone3.querySelectorAll("[sub-container]")) {
  //   if (escaCont2.querySelectorAll("[sub-form]").length > 0) {
  //     //remove other instance of sub-form
  //     if (escaCont2.querySelectorAll("[sub-form]").length > 1) {
  //       let escaForms2 = escaCont2.querySelectorAll("[sub-form]");
  //       for (let c = escaForms2.length - 1; c > 0; c--) {
  //         escaCont2.removeChild(escaForms2[c]);
  //       }
  //     }
  //   }
  // }
  // if (clone3.querySelector("[danger-inside]") != null)
  //   clone3.querySelector("[danger-inside]").setAttribute("disabled", "");

  // if (clone3.querySelector("[danger-inside-inside]") != null)
  //   clone3.querySelector("[danger-inside-inside]").setAttribute("disabled", "");
  //End

  //Mecha Details Reset
  //Start
  let mechDetFormField = document.querySelectorAll(".Dfields");
  let mechDetDelBtn = document.getElementById("EscaDeta_Delete1010");

  for (let x = 0; x < mechDetFormField.length; x++) {
    let elements = mechDetFormField[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");

      if (x != 0) {
        delete jsonData[element.id];
      }
    }
    if (x != 0) {
      mechDetFormField[x].parentNode.removeChild(mechDetFormField[x]);
    }
  }

  mechDetDelBtn.setAttribute("disabled", "");

  let parent6 = document.getElementById("MechDetaContainer");
  let clone4 = parent6.querySelector(
    '[prefix="' +
    document.getElementById("MechDetaChild10").getAttribute("prefix") +
    '"]'
  );
  for (let mechCont of clone4.querySelectorAll("[sub-container]")) {
    if (mechCont.querySelectorAll("[sub-form]").length > 0) {
      //remove other instance of sub-form
      if (mechCont.querySelectorAll("[sub-form]").length > 1) {
        let mechForms = mechCont.querySelectorAll("[sub-form]");
        for (let d = mechForms.length - 1; d > 0; d--) {
          mechCont.removeChild(mechForms[d]);
        }
      }
    }
  }
  if (clone4.querySelector("[danger-inside]") != null)
    clone4.querySelector("[danger-inside]").setAttribute("disabled", "");

  if (clone4.querySelector("[danger-inside-inside]") != null)
    clone4.querySelector("[danger-inside-inside]").setAttribute("disabled", "");
  //End

  if (sourceElement.value === "Lift") {
    //Change  nav button label
    document
      .querySelector('[target="page4"]')
      .setAttribute("label", "Particulars of Lift Contractors");
    document
      .querySelector('[target="page5"]')
      .setAttribute(
        "label",
        "Particulars and Declaration of Qualified Person for Supervision of Installation of Lift Works"
      );
    document
      .querySelector('[target="page6"]')
      .setAttribute(
        "label",
        "Particulars and Declaration by Qualified Person for Supervision of Testing and Commissioning of Lift Works"
      );
    // document
    //   .querySelector('[target="page7"]')
    //   .setAttribute(
    //     "label",
    //     "Declaration by Qualified Person for Supervision of Testing and Commissioning of Lift Works"
    //   );
    document
      .querySelector('[target="page7"]')
      .setAttribute("label", "Lift Detail(s)");
    document.getElementById("inspectorInv").removeAttribute("hidden");
    document.getElementById("inspectorInv2").removeAttribute("hidden");
    //get all LIFT sections/pages
    let liftSections = document.querySelectorAll("[lift]");
    for (let liftSection of liftSections) {
      //remove hidden attribute in LIFT section/page
      if (liftSection.hasAttribute("hidden"))
        liftSection.removeAttribute("hidden");
      //set all mandatory fields
      setMtoMandatory(liftSection.id);
    }

    //get all ESCALATOR sections/pages
    for (let escalatorSection of escalatorSections) {
      //hide all ESCALATOR section/page
      escalatorSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(escalatorSection.id);

      //Empty all fields
      emptyFields(escalatorSection.id);
    }
    //get all MECH sections/pages
    for (let mechSection of mechSections) {
      //hide all MECH section/page
      mechSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(mechSection.id);

      //Empty all fields
      emptyFields(mechSection.id);
    }

    for (let liftCheckBox of liftCheck) {
      liftCheckBox.setAttribute("checked", "")
      liftCheckBox.setAttribute("mandatory", "")
    }

    for (let escaCheckBox of escaCheck) {
      escaCheckBox.removeAttribute("checked")
      escaCheckBox.removeAttribute("mandatory")
    }

    for (let mcpsCheckBox of mcpsCheck) {
      mcpsCheckBox.removeAttribute("checked")
      mcpsCheckBox.removeAttribute("mandatory")
    }
  } else if (sourceElement.value === "Escalator") {
    //Change  nav button label
    document
      .querySelector('[target="page4"]')
      .setAttribute("label", "Particulars of Escalator Contractors");
    document
      .querySelector('[target="page5"]')
      .setAttribute(
        "label",
        "Particulars and Declaration of Qualified Person for Supervision of Installation of Escalator Works"
      );
    document
      .querySelector('[target="page6"]')
      .setAttribute(
        "label",
        "Particulars and Declaration by Qualified Person for Supervision of Testing and Commissioning of Escalator Works"
      );
    // document
    //   .querySelector('[target="page7"]')
    //   .setAttribute(
    //     "label",
    //     "Declaration by Qualified Person for Supervision of Testing and Commissioning of Escalator Works"
    //   );
    document
      .querySelector('[target="page7"]')
      .setAttribute("label", "Escalator Detail(s)");
    document.getElementById("inspectorInv").removeAttribute("hidden");
    document.getElementById("inspectorInv2").removeAttribute("hidden");
    //get all ESCALATOR sections/pages
    for (let escalatorSection of escalatorSections) {
      //remove hidden attribute in ESCALATOR section/page
      if (escalatorSection.hasAttribute("hidden"))
        escalatorSection.removeAttribute("hidden");
      //set all mandatory fields
      setMtoMandatory(escalatorSection.id);
    }

    //get all LIFT sections/pages
    for (let liftSection of liftSections) {
      //hide all LIFT section/page
      liftSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(liftSection.id);

      //Empty all fields
      emptyFields(liftSection.id);
    }
    //get all MECH sections/pages
    for (let mechSection of mechSections) {
      //hide all MECH section/page
      mechSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(mechSection.id);

      //Empty all fields
      emptyFields(mechSection.id);
    }

    for (let escaCheckBox of escaCheck) {
      escaCheckBox.setAttribute("checked", "")
      escaCheckBox.setAttribute("mandatory", "")
    }

    for (let liftCheckBox of liftCheck) {
      liftCheckBox.removeAttribute("checked")
      liftCheckBox.removeAttribute("mandatory")
    }

    for (let mcpsCheckBox of mcpsCheck) {
      mcpsCheckBox.removeAttribute("checked")
      mcpsCheckBox.removeAttribute("mandatory")
    }
  } else if (sourceElement.value === "Mechanised Car Parking System") {
    //Change  nav button label
    document
      .querySelector('[target="page4"]')
      .setAttribute("label", "Particulars of MCPS Contractors");
    document
      .querySelector('[target="page5"]')
      .setAttribute(
        "label",
        "Particulars and Declaration of Qualified Person for Supervision of Installation of MCPS Works"
      );
    document
      .querySelector('[target="page6"]')
      .setAttribute(
        "label",
        "Particulars and Declaration by Qualified Person for Supervision of Testing and Commissioning of MCPS Works"
      );
    // document
    //   .querySelector('[target="page7"]')
    //   .setAttribute(
    //     "label",
    //     "Declaration by Qualified Person for Supervision of Testing and Commissioning of Escalator Works"
    //   );
    document
      .querySelector('[target="page7"]')
      .setAttribute("label", "MCPS Detail(s)");
    document.getElementById("inspectorInv").removeAttribute("hidden");
    document.getElementById("inspectorInv2").removeAttribute("hidden");
    //get all MECH sections/pages
    for (let mechSection of mechSections) {
      //remove hidden attribute in MECH section/page
      if (mechSection.hasAttribute("hidden"))
        mechSection.removeAttribute("hidden");
      //set all mandatory fields
      setMtoMandatory(mechSection.id);
    }

    //get all LIFT sections/pages
    for (let liftSection of liftSections) {
      //hide all LIFT section/page
      liftSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(liftSection.id);

      //Empty all fields
      emptyFields(liftSection.id);
    }

    //get all ESCALATOR sections/pages
    for (let escalatorSection of escalatorSections) {
      //hide all ESCALATOR section/page
      escalatorSection.setAttribute("hidden", "");

      //remove mandatory in all fields
      setMandatorytoM(escalatorSection.id);

      //Empty all fields
      emptyFields(escalatorSection.id);
    }

    for (let mcpsCheckBox of mcpsCheck) {
      mcpsCheckBox.setAttribute("checked", "")
      mcpsCheckBox.setAttribute("mandatory", "")
    }

    for (let liftCheckBox of liftCheck) {
      liftCheckBox.removeAttribute("checked")
      liftCheckBox.removeAttribute("mandatory")
    }

    for (let escaCheckBox of escaCheck) {
      escaCheckBox.removeAttribute("checked")
      escaCheckBox.removeAttribute("mandatory")
    }
  }
  typeOfApplication(document.getElementById("Project_TypeOfPlan20"));

}

function emptyFields(containerId) {
  let fields = document
    .getElementById(containerId)
    .querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,cn2-checkbox,input"
    );
  for (let field of fields) {
    if (field.checked != null) field.checked = false;
    else if (field.value != null) field.value = "";

    if (field.hasAttribute("d")) field.setAttribute("disabled", "");

    //remove data-invalid and data-invalid-message attributes
    if (field.hasAttribute("data-invalid"))
      field.removeAttribute("data-invalid");
    if (field.hasAttribute("data-invalid-message"))
      field.removeAttribute("data-invalid-message");
  }
}

function setMtoMandatory(containerId) {
  let mFields = document.getElementById(containerId).querySelectorAll("[m]");
  for (let mField of mFields) {
    if (!mField.hasAttribute("disabled")) {
      mField.removeAttribute("m");
      mField.setAttribute("mandatory", "");
    }
    if (mField.hasAttribute("c")) {
      mField.removeAttribute("c");
      mField.setAttribute("checked", "");
    }
  }
}

function setMandatorytoM(containerId) {
  let mFields = document
    .getElementById(containerId)
    .querySelectorAll("[mandatory]");
  for (let mField of mFields) {
    mField.removeAttribute("mandatory");
    mField.setAttribute("m", "");
    if (mField.hasAttribute("checked")) {
      mField.removeAttribute("checked");
      mField.setAttribute("c", "");
    }
  }
}

//EnableFieldsBeside
function DeclByQP_Lift_ReadForInsp10_Click(sourceId) {
  let fields = document
    .getElementById(document.getElementById(sourceId).getAttribute("prefix"))
    .querySelectorAll("cn2-datefield,cn2-textbox");

  if (document.getElementById(sourceId).checked) {
    for (let field of fields) {
      if (field.hasAttribute("disabled")) field.removeAttribute("disabled");
      if (field.hasAttribute("m")) {
        field.removeAttribute("m");
        field.setAttribute("mandatory", "");
      }
    }
  } else {
    for (let field of fields) {
      field.value = "";
      field.setAttribute("disabled", "");
      if (field.hasAttribute("mandatory")) {
        field.removeAttribute("mandatory");
        field.removeAttribute("data-invalid");
        field.removeAttribute("data-invalid-message");
        field.setAttribute("m", "");
      }
    }
  }
}

function DeclByQP_Esca_ReadForInsp10_change(element) {
  let field = [
    document.getElementById("DeclByQP_PropInspDate10"),
    document.getElementById("DeclByQP_PropInspTime10"),
  ];

  if (element.checked) {
    for (let target of field) {
      target.setAttribute("mandatory", "");
      target.removeAttribute("disabled");
    }
  } else {
    for (let target of field) {
      target.removeAttribute("mandatory");
      target.removeAttribute("data-invalid");
      target.removeAttribute("data-invalid-message");
      target.setAttribute("disabled", "");
      target.value = "";
    }
  }
}

function DeclByQP_Mech_ReadForInsp10_change(element) {
  let field = [
    document.getElementById("DeclByQP_PropInspDate10"),
    document.getElementById("DeclByQP_PropInspTime10"),
  ];

  if (element.checked) {
    for (let target of field) {
      target.setAttribute("mandatory", "");
      target.removeAttribute("disabled");
    }
  } else {
    for (let target of field) {
      target.removeAttribute("mandatory");
      target.removeAttribute("data-invalid");
      target.removeAttribute("data-invalid-message");
      target.setAttribute("disabled", "");
      target.value = "";
    }
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

  // for (let subCont of clone.querySelectorAll("[sub-container]")) {
  //   if (subCont.querySelectorAll("[sub-form]").length > 0) {
  //     //remove other instance of sub-form
  //     if (subCont.querySelectorAll("[sub-form]").length > 1) {
  //       let subForms = subCont.querySelectorAll("[sub-form]");
  //       for (let x = subForms.length - 1; x > 0; x--) {
  //         subCont.removeChild(subForms[x]);
  //       }
  //     }

  //     //remove other instances of sub-sub-form
  //     if (
  //       subCont.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") >
  //       0
  //     ) {
  //       if (
  //         subCont
  //           .querySelector("[sub-form]")
  //           .querySelectorAll("[sub-sub-form]") > 1
  //       ) {
  //         let subSubForms = subCont
  //           .querySelector("[sub-form]")
  //           .querySelectorAll("[sub-sub-form]");
  //         for (let x = subSubForms.length - 1; x > 1; x--) {
  //           subCont
  //             .querySelector("[sub-form]")
  //             .querySelectorAll("[sub-sub-container]")
  //             .removeChild(subSubForms[x]);
  //         }
  //       }
  //     }
  //   }
  // }
  // if (clone.querySelector("[danger-inside]") != null)
  //   clone.querySelector("[danger-inside]").setAttribute("disabled", "");

  // if (clone.querySelector("[danger-inside-inside]") != null)
  //   clone.querySelector("[danger-inside-inside]").setAttribute("disabled", "");

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

    parentNodePrefix = prefix;
    parentNodeSubId = parentNodePrefix + 10 + suffix.slice(2);

    if (element.value != null) {
      element.value = document.getElementById(parentNodeSubId).value;
      jsonData[element.id] = document.getElementById(parentNodeSubId).value;
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
  feeComputation();
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
  feeComputation();
}

function subAddInstance(callerBtnId, containerPrefix, formId) {
  let btnSuffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  formId =
    document.getElementById(formId).getAttribute("prefix") +
    btnSuffix +
    "_1" +
    document.getElementById(formId).getAttribute("sub-suffix");
  let parent = document.getElementById(containerPrefix + btnSuffix);

  if (
    document
      .getElementById(formId)
      .querySelector("[danger-inside]")
      .hasAttribute("disabled")
  )
    document
      .getElementById(formId)
      .querySelector("[danger-inside]")
      .removeAttribute("disabled");
  let clone = document.getElementById(formId).cloneNode(true);
  let index =
    parent.querySelectorAll('[prefix="' + clone.getAttribute("prefix") + '"]')
      .length + 1;
  let prefix = "";
  let suffix = "";
  let suffixes = [];

  //remove other subSubForms
  let subSubForms = clone.querySelectorAll("[sub-sub-form]");
  if (subSubForms.length > 1)
    for (let x = subSubForms.length - 1; x > 1; x--)
      clone.querySelectorAll("[sub-sub-form]").removeChild(subSubForms[x]);

  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
  );

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[1] = index + clone.getAttribute("sub-suffix");
  clone.id = prefix + suffixes.join("_");

  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[1] = index + element.getAttribute("sub-suffix");
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

  let label = clone.querySelector("[sub-label]");
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
      suffix = accordion.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[1] = index + accordion.getAttribute("sub-suffix");
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

function subDeleteInstance(callerBtnId, containerPrefix, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let suffixes = suffix.split("_");
  let form = document.getElementById(formPrefix + suffixes.join("_"));
  suffixes.length = suffixes.length - 1;
  let prefix = "";
  let container = document.getElementById(containerPrefix + suffixes.join("_"));

  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1)
    forms[0].querySelector("[danger-inside]").setAttribute("disabled", "");
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[1] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else jsonData[element.id] = element.checked;
    }
    let labels = forms[x].querySelectorAll("[sub-label]");
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
        suffixes[1] = x + 1 + accordion.getAttribute("suffix");
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
    suffixes[1] = x + 1 + forms[x].getAttribute("suffix");
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

//clear UEN (accordion)
function clearUEN(element, getUEN) {
  let dropDown = document.getElementById(element.id);
  let getParent =
    dropDown.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
  let uen = getParent.querySelector(getUEN);

  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

//clear UEN (accordion)
function clearUEN2(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

//Handle Duplicate id
function duplicateID(element) {
  let lift = document.querySelectorAll(`[duplicate-id-lift]`);
  let escalator = document.querySelectorAll(`[duplicate-id-escalator]`);
  let mechanized = document.querySelectorAll(`[duplicate-id-mechanized]`);

  if (element.value == "Lift") {
    //get id
    for (let i = 0; i < lift.length; i++) {
      let getThisID = lift[i].getAttribute("pre-id");
      lift[i].setAttribute("id", getThisID);
    }
    //remove id
    for (let i = 0; i < escalator.length; i++) {
      escalator[i].removeAttribute("id");
      escalator[i].removeAttribute("mandatory");
      escalator[i].setAttribute("disabled", "");
    }

    //remove id
    for (let i = 0; i < mechanized.length; i++) {
      mechanized[i].removeAttribute("id");
      mechanized[i].removeAttribute("mandatory");
      mechanized[i].setAttribute("disabled", "");
    }
  } else if (element.value == "Escalator") {
    //get id
    for (let i = 0; i < escalator.length; i++) {
      let getThisID = escalator[i].getAttribute("pre-id");
      escalator[i].setAttribute("id", getThisID);
    }
    //remove id
    for (let i = 0; i < lift.length; i++) {
      lift[i].removeAttribute("id");
      lift[i].setAttribute("disabled", "");
      lift[i].removeAttribute("mandatory");
    }

    //remove id
    for (let i = 0; i < mechanized.length; i++) {
      mechanized[i].removeAttribute("id");
      mechanized[i].removeAttribute("mandatory");
      mechanized[i].setAttribute("disabled", "");
    }
  } else if (element.value == "Mechanised Car Parking System") {
    //get id
    for (let i = 0; i < mechanized.length; i++) {
      let getThisID = mechanized[i].getAttribute("pre-id");
      mechanized[i].setAttribute("id", getThisID);
    }
    //remove id
    for (let i = 0; i < lift.length; i++) {
      lift[i].removeAttribute("id");
      lift[i].setAttribute("disabled", "");
      lift[i].removeAttribute("mandatory");
    }
    //remove id
    for (let i = 0; i < escalator.length; i++) {
      escalator[i].removeAttribute("id");
      escalator[i].removeAttribute("mandatory");
      escalator[i].setAttribute("disabled", "");
    }
  }
}

//Code Compliance with enable beside field
function enableFieldBeside(element, getField) {
  let el = document.getElementById(element.id);
  let getParent = el.parentNode.parentNode.parentNode.parentNode;
  let field = getParent.querySelector(getField);

  if (el.value == "Alternative Standard") {
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
  } else {
    field.removeAttribute("mandatory");
    field.setAttribute("disabled", "");
    field.value = "";
  }
}

//default disable Code Compliance when adding
function disableCodeCompliance(container, prefix) {
  let childCount = document.getElementById(`${container}`).childElementCount;
  let complianceField = document.querySelectorAll(`[prefix="${prefix}"]`);

  if (childCount > 1) {
    complianceField[complianceField.length - 1].removeAttribute("mandatory");
    complianceField[complianceField.length - 1].setAttribute("disabled", "");
  }
}

//default disable fields in Component
function disableLifeInsideAccordionField(element) {
  let id = getId(element.id);

  let childCount = document.getElementById(
    "LiftDeta_CompTypeTestCont" + id + "0"
  ).childElementCount;

  let targetField = document
    .getElementById("LiftDeta_CompTypeTestCont" + id + "0")
    .querySelectorAll(`[prefix="LiftGeneSpec_CompTypeTest_EmerBrakType"]`);
  let targetField2 = document
    .getElementById("LiftDeta_CompTypeTestCont" + id + "0")
    .querySelectorAll(`[prefix="LiftGeneSpec_CompTypeTest_PermMass"]`);
  if (childCount > 1) {
    targetField[targetField.length - 1].removeAttribute("mandatory");
    targetField[targetField.length - 1].setAttribute("disabled", "");
    targetField2[targetField2.length - 1].removeAttribute("mandatory");
    targetField2[targetField2.length - 1].setAttribute("disabled", "");
  }
}

//Component Change
function LiftGeneSpec_CompTypeTest_Comp10_10_change(
  element,
  getField1,
  getField2
) {
  let el = document.getElementById(element.id);
  let getParent =
    el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

  let emergencyBreakType = getParent.querySelector(getField1);
  let permissibleMass = getParent.querySelector(getField2);

  if (element.value == "UCMP" || element.value == "ACOP") {
    emergencyBreakType.setAttribute("mandatory", "");
    emergencyBreakType.removeAttribute("disabled");
    permissibleMass.setAttribute("disabled", "");
    permissibleMass.removeAttribute("mandatory");
    permissibleMass.value = "";
  } else if (element.value == "Safety gear" || element.value == "Buffer") {
    permissibleMass.setAttribute("mandatory", "");
    permissibleMass.removeAttribute("disabled");
    emergencyBreakType.setAttribute("disabled", "");
    emergencyBreakType.removeAttribute("mandatory");
    emergencyBreakType.value = "";
  } else {
    emergencyBreakType.setAttribute("disabled", "");
    emergencyBreakType.removeAttribute("mandatory");
    emergencyBreakType.value = "";
    permissibleMass.setAttribute("disabled", "");
    permissibleMass.removeAttribute("mandatory");
    permissibleMass.value = "";
  }
}

//Payment Mode Change
function paymentMode(element) {
  let chequeField = [
    document.getElementById("PaymMode_Cheq20"),
    document.getElementById("PaymMode_Cheq30"),
    document.getElementById("PaymMode_Cheq40"),
    document.getElementById("PaymMode_Cheq50"),
  ];
  let giroField = [
    document.getElementById("PaymMode_Giro20"),
    document.getElementById("PaymMode_Giro50"),
    document.getElementById("PaymMode_Giro40"),
  ];
  //let earlyfield = document.getElementById("PaymMode_PaidEarl20");

  for (let target of chequeField) {
    target.setAttribute("disabled", "");
    target.removeAttribute("mandatory");
    target.removeAttribute("data-invalid");
    target.removeAttribute("data-invalid-message");
    target.value = "";
  }
  for (let target of giroField) {
    target.setAttribute("disabled", "");
    target.removeAttribute("mandatory");
    target.removeAttribute("data-invalid");
    target.removeAttribute("data-invalid-message");
    target.value = "";
  }

  if (element.id == "PaymMode_Cheq10") {
    for (let target of chequeField) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
    }
  } else if (element.id == "PaymMode_Giro10") {
    for (let target of giroField) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
    }
  }
}

//validate time
function validateTime(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validTime(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute("data-invalid-message", "Invalid Time Format (hh:mm)");
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

function validTime(time) {
  let re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(time);
}
//disable delete inner accordion
function disableAddEBT() {
  let childCount = document.getElementById("LiftDetaContainer")
    .childElementCount;
  let field = document.querySelectorAll(
    `[prefix="LiftGeneSpec_CompTypeTest_EmerBrakType"]`
  );
  let field2 = document.querySelectorAll(
    `[prefix="LiftGeneSpec_CompTypeTest_PermMass"]`
  );
  let fieldDelete = document.querySelectorAll(
    `[prefix="LiftDeta_CompTypeTest_Delete"]`
  );
  if (childCount > 1) {
    field[field.length - 1].removeAttribute("mandatory");
    field[field.length - 1].setAttribute("disabled", "");
    field2[field2.length - 1].removeAttribute("mandatory");
    field2[field2.length - 1].setAttribute("disabled", "");
    fieldDelete[fieldDelete.length - 1].setAttribute("disabled", "");
  }
}

function disableDelete(containerName, className) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;

  if (formCount < 2) {
    document.querySelector(className).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(className);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function Project_TypeOfPlan20_change(el) {
  let ptoType = document.getElementById(el.id);
  let options = document.getElementById("PartOfAppl_ScopOfMajoARWork10");
  let textAreatr = document.getElementById("nonApplicable");
  let textArea = document.getElementById("PartOfAppl_ScopOfMajoARWork20");
  textArea.removeAttribute("mandatory");
  textArea.value = "";
  textAreatr.setAttribute("hidden", "");
  options.removeAttribute("options");
  options.value = "";
  document.getElementById("DeclByQP_Lift_IDeclFollLift20").setAttribute("disabled", "");
  document.getElementById("DeclByQP_Esca_IDeclFollEsca20").setAttribute("disabled", "");
  document.getElementById("DeclByQP_Mech_IDeclFollMech20").setAttribute("disabled", "");
  if (ptoType.value.length != 0) {
    if (ptoType.value == "Lift") {
      options1 = [
        "adding, changing or removing any safety component of a lift, or adding any safety component to a lift",
        "adding or changing any programmable electronic systems in safety related applications for lifts (PESSRAL) hardware or software",
        "adding or changing the mass and internal dimensions of a lift car, including lift car finishing",
        "changing the rated load or speed of a lift",
        "changing the travel distance of a lift",
        "changing the lift control operation (including changing the software or controller or type of driving machine or brakes)",
        "changing the number, type or size of the hoisting ropes supporting a lift car or its counterweight",
        "changing the size of the guide rails of a lift",
        "changing the lift landing door system, lift car door system and their control interfacing (door entrance protection are excluded)",
        "changing the pit depth and overhead clearances, eg. pit depth, overhead",
        "changing the design of traction sheave",
        "changing the roping configuration and compensation system",
        "changing the number of landings served by the lift car",
        "changing the layout (including dimensions and locations of equipment) of machine room, hoistway and lift pit",
      ]
        .map((r) => r.replace(/,/g, "&comma;"))
        .map((r) => r.replace(/:/g, "&colon;"))
        .map((r) => (r = r + ":" + r))
        .join(",");
      options.setAttribute("options", options1);
    } else if (ptoType.value == "Escalator") {
      options2 = [
        "Non-applicable",
        "changing the speed",
        "changing the drive",
        "changing the control",
        "changing braking system",
        "changing auxiliary brake",
        "changing step band",
        "changing programmable electronic systems in safety related applications for escalators (PESSRAE) hardware or software",
        "changing truss of an escalator",
      ]
        .map((r) => r.replace(/,/g, "&comma;"))
        .map((r) => r.replace(/:/g, "&colon;"))
        .map((r) => (r = r + ":" + r))
        .join(",");
      options.setAttribute("options", options2);
    } else if (ptoType.value == "Mechanised Car Parking System") {
      options3 = [
        "Non-applicable",
        "changing of transfer area in terms of size, area, access, and structure",
        "changing of control (for example: hold to start, automatic parking and retrieval process before and after the user enter and leave the transfer area)",
        "changing of logic programming",
        "changing the method of sensing the presence of people in the transfer area",
        "changing the loading of the car parking capacity",
      ]
        .map((r) => r.replace(/,/g, "&comma;"))
        .map((r) => r.replace(/:/g, "&colon;"))
        .map((r) => (r = r + ":" + r))
        .join(",");
      options.setAttribute("options", options3);
    } else {
      options.removeAttribute("options");
      options.value = "";
    }
  } else {
    options.value = "";
    options.removeAttribute("options");
  }
}

function typeOfApplication(el) {
  let typeofApp = document.getElementById(el.id);
  let scopeContainer = document.getElementById("scopeMajor");
  let select = document.getElementById("PartOfAppl_ScopOfMajoARWork10");
  let textAreatr = document.getElementById("nonApplicable");
  let textArea = document.getElementById("PartOfAppl_ScopOfMajoARWork20");
  let typeOfPTO = document.getElementById("Project_TypeOfPlan10");

  textArea.removeAttribute("mandatory");
  textArea.value = "";
  textAreatr.setAttribute("hidden", "");

  let liftID = document.querySelectorAll("[liftID]")

  for (let a of liftID) {
    a.innerHTML = "Lift ID"
  }

  let liftIdManda = document.querySelectorAll("[liftIdManda]");

  for (let a of liftIdManda) {
    a.removeAttribute("mandatory")
    a.setAttribute("disabled", "")
    a.value = ""
  }

  let escaId = document.querySelectorAll("[escaId]")
  for (let a of escaId) {
    a.innerHTML = "Escalator ID"
  }
  let escaIdManda = document.querySelectorAll("[escaIdManda]");
  for (let a of escaIdManda) {
    a.removeAttribute("mandatory")
    a.setAttribute("disabled", "")
    a.value = ""
  }

  let mcspsId = document.querySelectorAll("[mcspsId]")
  for (let a of mcspsId) {
    a.innerHTML = "MCPS ID"
  }

  let mcpsIdManda = document.querySelectorAll("[mcpsIdManda]");
  for (let a of mcpsIdManda) {
    a.removeAttribute("mandatory")
    a.setAttribute("disabled", "")
    a.value = ""
  }

  if (typeofApp.value == "Recommissioning") {
    scopeContainer.removeAttribute("hidden");
    select.setAttribute("mandatory", "");
    select.value = "";
    if (typeOfPTO.value == "Lift") {
      for (let a of liftID) {
        a.innerHTML = "Lift ID*"
      }
      for (let a of liftIdManda) {
        a.setAttribute("mandatory", "")
        a.removeAttribute("disabled");
        if (a.value.length != 0) {
          a.shadowRoot.querySelector("input").removeAttribute("class")
          a.shadowRoot.querySelector("input").setAttribute("class", "form-control")
        }
      }
    } else if (typeOfPTO.value == "Escalator") {
      for (let a of escaId) {
        a.innerHTML = "Escalator ID*"
      }
      for (let a of escaIdManda) {
        a.setAttribute("mandatory", "")
        a.removeAttribute("disabled");
        if (a.value.length != 0) {
          a.shadowRoot.querySelector("input").removeAttribute("class")
          a.shadowRoot.querySelector("input").setAttribute("class", "form-control")
        }
      }
    } else if (typeOfPTO.value == "Mechanised Car Parking System") {
      for (let a of mcspsId) {
        a.innerHTML = "MCPS ID*"
      }
      for (let a of mcpsIdManda) {
        a.setAttribute("mandatory", "")
        a.removeAttribute("disabled");
        if (a.value.length != 0) {
          a.shadowRoot.querySelector("input").removeAttribute("class")
          a.shadowRoot.querySelector("input").setAttribute("class", "form-control")
        }
      }
    }
  } else {
    scopeContainer.setAttribute("hidden", "");
    select.removeAttribute("mandatory");
    select.value = "";
  }
}

function PartOfAppl_ScopOfMajoARWork10_change(el) {
  let mjorARworks = document.getElementById(el.id);
  let trContainer = document.getElementById("nonApplicable");
  let textArea = document.getElementById("PartOfAppl_ScopOfMajoARWork20");

  if (mjorARworks.value != "Non-applicable") {
    trContainer.removeAttribute("hidden");
    textArea.value = "";
    textArea.setAttribute("mandatory", "");
  } else {
    trContainer.setAttribute("hidden", "");
    textArea.value = "";
    textArea.removeAttribute("mandatory");
  }
}

function SubmChec_CateAndNoMech_CateOfMech10_change(el) {
  let index = el.id.slice(-2);
  let otherField = document.getElementById(
    "SubmChec_CateAndNoMech_Txt_CateOfMech" + index
  );

  if (el.value == "Others") {
    otherField.removeAttribute("hidden");
    otherField.setAttribute("mandatory", "");
    otherField.removeAttribute("disabled");
    otherField.value = "";
  } else {
    otherField.setAttribute("hidden", "");
    otherField.removeAttribute("mandatory");
    otherField.setAttribute("disabled", "");
    otherField.value = "";
  }
}

function stFormAdd_Click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
      div.querySelector("cn2-button").removeAttribute("disabled");
      div.querySelector("cn2-textbox").removeAttribute("data-invalid");
      div.querySelector("cn2-textbox").removeAttribute("data-invalid-message");
    }
  }
}
function stFormDelete_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length == 1) {
    targetDiv[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let child = parent.querySelector(`[prefix="${prefix}"]`);
  let index = 0;
  child.setAttribute("raw-value", child.value);
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function nricMaskingAccorDelete(prefix) {
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let index = 0;
  let index2 = 0;
  let x = 1;
  for (let i = 0; i < masked.length; i++) {
    x++;
    index2 = index2 + 10;
    delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    if (x == masked.length) {
      index2 = index2 + 10;
      delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    }
  }
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function unableTextArea(el, field) {
  if (el.checked) {
    field.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field.value = "";
  }
}

function LiftReco_LiftType_change(el) {
  let index = el.id.slice(-2);
  let ardBrandPref = "LiftGeneSpec_ARDBran" + index;
  let ardModePref = "LiftGeneSpec_ARDMode" + index;
  let upsBrandPref = "LiftGeneSpec_UPSBrans" + index;
  let upsModePref = "LiftGeneSpec_UPSMode" + index;

  let tempArray = new Array();

  let prefArrays = tempArray.concat(
    ardBrandPref,
    ardModePref,
    upsBrandPref,
    upsModePref
  );
  if (el.value == "Vertical Platform Lift" || el.value == "Stairlift") {
    for (let prefId of prefArrays) {
      document.getElementById(prefId).setAttribute("disabled", "");
      document.getElementById(prefId).removeAttribute("mandatory");
      document.getElementById(prefId).value = "";
    }
  } else {
    for (let prefId of prefArrays) {
      document.getElementById(prefId).setAttribute("mandatory", "");
      document.getElementById(prefId).removeAttribute("disabled");
      document.getElementById(prefId).value = "";
    }
  }
}

function removeManda(el) {
  if (el.checked) {
    el.removeAttribute("checked")
    el.removeAttribute("mandatory")
  } else {
    el.setAttribute("checked", "")
    el.setAttribute("mandatory", "")
  }
}

//Prevent future date being selected
function dateFutureTodayValidation(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  var currentDate = new Date(year, month - 1, day);

  let dateTime = new Date();

  if (dateTime.getTime() < currentDate.getTime()) {
    datefield.setAttribute("data-invalid", "")
    datefield.setAttribute("data-invalid-message", "The selected date must not be later than today’s date.")
  } else {
    datefield.removeAttribute("data-invalid");
    datefield.removeAttribute("data-invalid-message")
  }
}

function devtypeChange(el) {

  let value = el.value

  if (value == "Others") {
    document.getElementById("devTypeOther").removeAttribute("hidden")
    document.getElementById("Project_DevType_Oth10").setAttribute("mandatory", "")
  } else {
    document.getElementById("Project_DevType_Oth10").removeAttribute("mandatory")
    document.getElementById("Project_DevType_Oth10").value = ""
    document.getElementById("devTypeOther").setAttribute("hidden", "")
  }
}

function setCounHideLift10(element) {
  let count10 = element.value;
  let count20 = document.getElementById("CounHideLift10");

  if (!count10 == "") {
    count20.value = count10;
  } else {
    count20.value = "";
  }
}

function setCounHideLift110(element) {
  let count10 = element.value;
  let count20 = document.getElementById("CounHideLift10");

  if (count10 == "Escalator") {
    count20.value = "1";
  }
}

function setCounHideEsca10(element) {
  let count10 = element.value;
  let count20 = document.getElementById("CounHideEsca10");

  if (!count10 == "") {
    count20.value = count10;
  } else {
    count20.value = "";
  }
}

function setCounHideEsca110(element) {
  let count10 = element.value;
  let count20 = document.getElementById("CounHideEsca10");

  if (count10 == "Lift") {
    count20.value = "1";
  }
}