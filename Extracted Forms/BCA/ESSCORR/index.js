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

let PartOfBuil_Id = "PartOfBuil_SingOwne10";

function PartOfBuil_change(element) {
  let radio = document.getElementById(element.id);
  let singleSm = document.getElementById("smSingle_fields");
  let multipleSm = document.getElementById("smMultiple_fields");
  let single = document.getElementById("PartOfBuil_PSIRefe10");
  switch (radio.id) {
    case "PartOfBuil_SingOwne10":
      singleSm.removeAttribute("hidden");
      multipleSm.setAttribute("hidden", "");
      if (single.checked) {
        for (let field of multipleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
        for (let field of singleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("disabled");
          field.setAttribute("mandatory", "");
        }
      } else {
        for (let field of singleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
        for (let field of multipleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
      }
      PartOfBuil_Id = "PartOfBuil_SingOwne10";
      break;
    case "PartOfBuil_MultOwne10":
      multipleSm.removeAttribute("hidden");
      singleSm.setAttribute("hidden", "");
      if (single.checked) {
        for (let field of singleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
        for (let field of multipleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("disabled");
          field.setAttribute("mandatory", "");
        }
        let textbox = multipleSm.querySelectorAll("cn2-textbox")[3];
        textbox.removeAttribute("mandatory");
      } else {
        for (let field of singleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
        for (let field of multipleSm.querySelectorAll("cn2-textbox")) {
          field.removeAttribute("mandatory");
          field.setAttribute("disabled", "");
          field.value = "";
        }
      }
      PartOfBuil_Id = "PartOfBuil_MultOwne10";
      break;
  }
}
function PartOfBuilSMSMB_change(element) {
  let radio = document.getElementById(element.id);
  let radios = document.querySelectorAll("[name='PartOfBuilSMSMB_name']");
  let smbFields = [
    document.getElementById("PartOfBuil_SMBRefe20"),
    document.getElementById("PartOfBuil_SMBRefe30"),
    document.getElementById("PartOfBuil_SMBRefe40"),
  ];
  let lastField = document.getElementById("PartOfBuil_SMBRefe50");
  let smFields = [];
  if (document.getElementById("PartOfBuil_SingOwne10").checked) {
    smFields = [
      document.getElementById("PartOfBuil_NotiRefeNo10"),
      document.getElementById("PartOfBuil_NotiRefeNo20"),
      document.getElementById("PartOfBuil_NotiRefeNo30"),
    ];
  } else if (document.getElementById("PartOfBuil_MultOwne10").checked) {
    smFields = [
      document.getElementById("PartOfBuil_NotiRefeNo40"),
      document.getElementById("PartOfBuil_NotiRefeNo50"),
      document.getElementById("PartOfBuil_NotiRefeNo60"),
      document.getElementById("PartOfBuil_NotiRefeNo70"),
    ];
  }
  removeRadioMandatory(true, radios);
  switch (radio.id) {
    case "PartOfBuil_PSIRefe10":
      for (let field of smFields) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      if (PartOfBuil_Id === "PartOfBuil_MultOwne10") {
        smFields[3].removeAttribute("mandatory");
      }
      for (let field of smbFields) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      lastField.setAttribute("disabled", "");
      lastField.value = "";
      break;
    case "PartOfBuil_SMBRefe10":
      for (let field of smbFields) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      lastField.removeAttribute("disabled");
      for (let field of smFields) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      break;
  }
}
function removeRadioMandatory(pass, radios) {
  if (pass) {
    for (let radio of radios) {
      radio.removeAttribute("mandatory");
      radio.removeAttribute("checked");
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("mandatory", "");
      radio.setAttribute("checked", "");
      radio.checked = false;
    }
  }
}

function handleMonth(event, el) {
  if (el.value.length > 0) {
    if (el.value === "1") {
      if (!["0", "1", "2"].includes(event.key)) event.preventDefault();
    } else {
      if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key))
        event.preventDefault();
    }
  } else {
    if (!["0", "1"].includes(event.key)) event.preventDefault();
  }
}

function handleMaxLengthTemplate(el) {
  if (el.value.length === 0) {
    document.getElementById(el.id).removeAttribute("data-invalid");
  } else if (el.value.length !== 0) {
    if (el.value.length < el.getAttribute("maxlength")) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
    }
  }
}

function rbUserCount_change(el) {
  let chckBox = document.getElementById("PartOfBuil_PSIRefe10");
  let singeleTxtBoxGroup = [
    document.getElementById("PartOfBuil_NotiRefeNo10"),
    document.getElementById("PartOfBuil_NotiRefeNo20"),
    document.getElementById("PartOfBuil_NotiRefeNo30"),
  ];
  let multiTxtBoxGroup = [
    document.getElementById("PartOfBuil_NotiRefeNo40"),
    document.getElementById("PartOfBuil_NotiRefeNo50"),
    document.getElementById("PartOfBuil_NotiRefeNo60"),
  ];
  if (el.id === "PartOfBuil_SingOwne10") {
    document.getElementById("singleSMOwner").removeAttribute("hidden");
    document.getElementById("multiSMOwner").setAttribute("hidden", "");
    if (chckBox.checked === true) {
      for (let target1 of singeleTxtBoxGroup) {
        target1.removeAttribute("disabled");
        target1.setAttribute("mandatory", "");
        target1.value = "";
      }
      for (let target2 of multiTxtBoxGroup) {
        target2.removeAttribute("mandatory");
        target2.removeAttribute("data-invalid");
        target2.setAttribute("disabled", "");
        target2.value = "";
      }
      document
        .getElementById("PartOfBuil_NotiRefeNo70")
        .setAttribute("disabled", "");
      document
        .getElementById("PartOfBuil_NotiRefeNo70")
        .removeAttribute("data-invalid");
      document.getElementById("PartOfBuil_NotiRefeNo70").value = "";
    }
  } else if (el.id === "PartOfBuil_MultOwne10") {
    document.getElementById("multiSMOwner").removeAttribute("hidden");
    document.getElementById("singleSMOwner").setAttribute("hidden", "");
    if (chckBox.checked === true) {
      for (let target1 of singeleTxtBoxGroup) {
        target1.removeAttribute("mandatory");
        target1.removeAttribute("data-invalid");
        target1.setAttribute("disabled", "");
        target1.value = "";
      }
      for (let target2 of multiTxtBoxGroup) {
        target2.removeAttribute("disabled");
        target2.setAttribute("mandatory", "");
        target2.value = "";
      }
      document
        .getElementById("PartOfBuil_NotiRefeNo70")
        .removeAttribute("disabled");
      document
        .getElementById("PartOfBuil_NotiRefeNo70")
        .removeAttribute("data-invalid");
      document.getElementById("PartOfBuil_NotiRefeNo70").value = "";
    }
  }
}

function removeManda() {
  let rbGroup = [
    document.getElementById("PartOfBuil_PSIRefe10"),
    document.getElementById("PartOfBuil_SMBRefe10"),
  ];

  for (let targetRb of rbGroup) {
    targetRb.removeAttribute("checked");
    targetRb.removeAttribute("mandatory");
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
function yearValidation(year, ev) {
  var text = /^[0-9]+$/;
  let yearVal = document.getElementById(year.id);
  if (
    ev.type == "blur" ||
    (yearVal.value.length == 4 && ev.keyCode != 8 && ev.keyCode != 46)
  ) {
    if (yearVal.value != 0) {
      if (yearVal.value != "" && !text.test(year.value)) {
        showMessage("Please Enter Numeric Values Only");
        yearVal.value = "";
        return false;
      }

      if (yearVal.value.length != 4) {
        showMessage("Year Field should be YYYY format. Please try again");
        yearVal.value = "";
        return false;
      }
      var current_year = new Date().getFullYear();
      if (yearVal.value < 1920 || yearVal.value > current_year) {
        showMessage("Year should be in range 1920 to current year");
        yearVal.value = "";
        return false;
      }
      return true;
    }
  }
}

function monthValidation(month, ev) {
  var text = /^[0-9]+$/;
  let monthVal = document.getElementById(month.id);
  if (
    ev.type == "blur" ||
    (monthVal.value.length == 4 && ev.keyCode != 8 && ev.keyCode != 46)
  ) {
    if (monthVal.value != 0) {
      if (monthVal.value != "" && !text.test(monthVal.value)) {
        showMessage("Please Enter Numeric Values Only");
        monthVal.value = "";
        return false;
      }

      if (monthVal.value.length != 2) {
        showMessage("Month Field should be MM format. Please try again");
        monthVal.value = "";
        return false;
      }

      if (monthVal.value > 12 && monthVal.value != 0) {
        showMessage("Month should be in range of 1 to 12");
        monthVal.value = "";
        return false;
      }
      return true;
    }
  }
}

function PartOfBuil_NotiRefeNo70_change(element) {
  let field = document.getElementById(element.id);
  if (field.value == 0 || field.value == 00 || field.value == 000) {
    field.value = "";
  } else if (field.value <= 9) {
    field.value = "00" + field.value;
  } else if (field.value <= 99) {
    field.value = "0" + field.value;
  }
}

function PartOfBuil_SMBRefe50_change(element) {
  let field = document.getElementById(element.id);
  if (
    field.value == 0 ||
    field.value == 00 ||
    field.value == 000 ||
    field.value == 0000
  ) {
    field.value = "";
  } else if (field.value <= 9) {
    field.value = "000" + field.value;
  } else if (field.value <= 99) {
    field.value = "00" + field.value;
  } else if (field.value <= 999) {
    field.value = "0" + field.value;
  }
}
