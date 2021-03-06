function enableWaiverRequest() {
  var checkYes = document.getElementById("WaiveYes");

  if (checkYes.checked) {
    document.getElementById("WaiverIfYes").removeAttribute("disabled");
  } else {
    document.getElementById("WaiverIfYes").value = "";
    document.getElementById("WaiverIfYes").setAttribute("disabled", "");
  }
}

function notAppl(element) {
  if (element.checked) {
    document.getElementById("Date12").setAttribute("disabled", "");
    document.getElementById("CaseID12A").setAttribute("disabled", "");
    document.getElementById("CaseID12B").setAttribute("disabled", "");
    document.getElementById("CaseID12C").setAttribute("disabled", "");
    document.getElementById("CaseID12D").setAttribute("disabled", "");
    document.getElementById("Date12").value = "";
    document.getElementById("CaseID12A").value = "";
    document.getElementById("CaseID12B").value = "";
    document.getElementById("CaseID12C").value = "";
    document.getElementById("CaseID12D").value = "";
    document.getElementById("Date12").removeAttribute("required");
    document
      .getElementById("Date12")
      .shadowRoot.querySelector("input")
      .classList.remove("input-text-required");
    document.getElementById("CaseID12A").removeAttribute("mandatory");
    document.getElementById("CaseID12B").removeAttribute("mandatory");
    document.getElementById("CaseID12C").removeAttribute("mandatory");
    document.getElementById("CaseID12D").removeAttribute("mandatory");
  } else {
    document.getElementById("Date12").removeAttribute("disabled");
    document.getElementById("CaseID12A").removeAttribute("disabled");
    document.getElementById("CaseID12B").removeAttribute("disabled");
    document.getElementById("CaseID12C").removeAttribute("disabled");
    document.getElementById("CaseID12D").removeAttribute("disabled");
    document.getElementById("Date12").setAttribute("required", "");
    document.getElementById("CaseID12A").setAttribute("mandatory", "");
    document.getElementById("CaseID12B").setAttribute("mandatory", "");
    document.getElementById("CaseID12C").setAttribute("mandatory", "");
    document.getElementById("CaseID12D").setAttribute("mandatory", "");
  }
}

function validateAll() {
  if (!document.getElementById("CheckBPClearonEH").checked) {
    if (
      checkRequired(document.getElementById("CaseID12B").value) &&
      checkRequired(document.getElementById("CaseID12C").value) &&
      checkRequired(document.getElementById("CaseID12D").value)
    ) {
    }
  }
  return (
    checkRequired(document.getElementById("Project_Project_Ref_No10").value) &&
    checkRequired(document.getElementById("Project_Loc_TSNo").value) &&
    checkRequired(document.getElementById("CaseID11C").value) &&
    checkRequired(document.getElementById("CaseID11D").value) &&
    checkRequired(document.getElementById("CaseID11F").value) &&
    checkRequired(
      document.getElementById("PartOfAppl_ProcessingOfficer10").value
    ) &&
    checkRequired(
      document
        .getElementById("Member_Member_Name_QP10")
        .shadowRoot.getElementById("Member_Member_Name_QP10").value
    ) &&
    checkRequired(
      document.getElementById("PartOfAppl_SIPDIPFromCBPU_RefeNumb10").value
    ) &&
    checkRequired(
      document.getElementById("PartOfAppl_SIPDIPFromCBPU_Date10").value
    ) &&
    checkRequired(document.getElementById("Members_UEN_QP10").value) &&
    checkRequired(document.getElementById("DeclByQualPers_Name").value) &&
    document.getElementById("DeclByQualPers_IAmTheQual10").checked &&
    document.getElementById("DeclByQualPers_ThePartOfProj10").checked &&
    document.getElementById("DeclByQualPers_TheWorkHaveBeen10").checked &&
    document.getElementById("DeclByQualPers_NoRoofGutter10").checked &&
    document.getElementById("DeclByQualPers_NoRoofGutter11a").checked &&
    document.getElementById("DeclByQualPers_NoRoofGutter12").checked &&
    document.getElementById("DeclByQualPers_NoRoofGutter13").checked &&
    document.getElementById("NIA").value === "true" &&
    document.getElementById("NIA").value === "RBP"
  );
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  console.log(formCount);
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function checkedTrue(el) {
  let checkedBox = document.getElementById(el.id);

  if (el.checked) {
    checkedBox.removeAttribute("checked");
  } else {
    checkedBox.setAttribute("checked", "");
  }
}

function ChkAttachment_change(element) {
  let checkedBox = document.getElementById(element.id);

  if (element.checked) {
    checkedBox.removeAttribute("checked");
  } else {
    checkedBox.setAttribute("checked", "");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

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

function fileAttachCheck(element, objectName, isAllowMultiple, formName, sectionName) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
      sectionName: sectionName
    };
  } else {
    delete jsonData[objectName];
  }
}
