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
  if (select.value === "BCA") {
    textarea.value = `Commissioner of Building Control \nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550`;
  } else {
    textarea.value = `Building & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
  }
  textarea.adjustHeigth();
}
function DeclByQualPers_TheDesiAndInst10_change(element) {
  let radioList = [
    document.getElementById("DeclByQualPers_TheDesiAndInst20"),
    document.getElementById("DeclByQualPers_TheDesiAndInst30"),
    document.getElementById("DeclByQualPers_TheDesiAndInst40"),
  ];

  if (element.checked) {
    for (let i = 0; i < radioList.length; i++) {
      radioList[i].removeAttribute("disabled");
    }

    radioList[0].checked = true;
  } else {
    for (let i = 0; i < radioList.length; i++) {
      radioList[i].setAttribute("disabled", "");
      radioList[i].checked = false;
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

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
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

function CHECK1_change(element) {
  if (element.checked) {
    document.getElementById("FIELD1").removeAttribute("disabled");
  } else {
    document.getElementById("FIELD1").setAttribute("disabled", "");
    document.getElementById("FIELD1").value = "";
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

function addHundredMax(containerName, addId) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount == 100) {
    document.querySelector(addId).setAttribute("disabled", "true");
  } else if (formCount < 100) {
    document.querySelector(addId).removeAttribute("disabled");
  }
}

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "BCA") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550
Website: http://www.bca.gov.sg`;
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

function togglePartQp() {
  document.getElementById("Members_UEN_QP10").value = "";
  document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_QP10")
    .removeAttribute("data-invalid-message");
}
