document.addEventListener("DOMContentLoaded", function (event) {
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

function toggleCheck(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function subType(el) {
  let radId = el.id

  let textBox = document.getElementById("Sub_Number");

  switch (radId) {
    case "Sub_Type_RADIO1":
      textBox.setAttribute("disabled", "");
      textBox.removeAttribute("mandatory");
      textBox.value = ""
      break;
    case "Sub_Type_RADIO2":
      textBox.removeAttribute("disabled");
      textBox.setAttribute("mandatory", "");
      textBox.value = ""
      break;
  }
}

function decl(el) {
  let declaration = document.querySelector("[not-app3]");
  let declaration2 = document.querySelector("[app3]");

  let checkBoxesNonApp1 = document.querySelector("[not-app3]").querySelectorAll("cn2-checkbox")
  let checkBoxesApp2 = document.querySelector("[app3]").querySelectorAll("cn2-checkbox")

  document.querySelector("[switch-id='StatBoar_Yes10']").checked = false

  for (let a of document.getElementById("page3").querySelectorAll("[id]")) {
    if (["input", "cn2-checkbox"].includes(a.tagName.toLowerCase())) {
      a.checked = false;
    } else {
      if (!a.hasAttribute("dont")) a.value = "";
    }
  }

  if (el.id != "AppType_SubOf_InstMoni_Report10") {
    declaration.removeAttribute("hidden");
    declaration2.setAttribute("hidden", "")

    for (let check of checkBoxesApp2) {
      check.removeAttribute("checked")
      check.removeAttribute("mandatory")
    }

    for (let check2 of checkBoxesNonApp1) {
      check2.setAttribute("checked", "")
      check2.setAttribute("mandatory", "")
    }

  } else {
    declaration.setAttribute("hidden", "");
    declaration2.removeAttribute("hidden");

    for (let check of checkBoxesNonApp1) {
      check.removeAttribute("checked")
      check.removeAttribute("mandatory")
    }

    for (let check2 of checkBoxesApp2) {
      check2.setAttribute("checked", "")
      check2.setAttribute("mandatory", "")
    }

  }

  for (let a of document
    .getElementById("page3")
    .querySelectorAll("[name='devType']")) {
    a.setAttribute("mandatory", "");
    a.setAttribute("checked", "");
  }

}

function onlyOneTick(el, name) {
  let names = document.querySelectorAll("[name='" + name + "']");
  if (el.checked) {
    for (let a of names) {
      if (a.id != el.id) a.checked = false;
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
    }
  } else {
    for (let a of names) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
    }
  }
}


function devSubTypeChange(element) {
  let institutionalField = document.getElementById("Project_DevSub_Type_InstiDrop10");
  let civilEngineeringWorksField = document.getElementById("Project_DevSub_Civi_Engi_WorkDrop10");
  let othersField = document.getElementById("Project_DevSub_OtheDrop10");


  // Institutional
  if (element.id == "Project_DevSub_Type_Insti10") {
    institutionalField.setAttribute("mandatory", "");
    institutionalField.removeAttribute("hidden");
  } else {
    institutionalField.removeAttribute("mandatory");
    institutionalField.setAttribute("hidden", "");
    institutionalField.value = "";
  }
  // Civil Engineering Works
  if (element.id == "Project_DevSub_Civi_Engi_Work10") {
    civilEngineeringWorksField.setAttribute("mandatory", "");
    civilEngineeringWorksField.removeAttribute("hidden");
  } else {
    civilEngineeringWorksField.removeAttribute("mandatory");
    civilEngineeringWorksField.setAttribute("hidden", "");
    civilEngineeringWorksField.value = "";
  }
  // Others
  if (element.id == "Project_DevSub_Othe10") {
    othersField.setAttribute("mandatory", "");
    othersField.removeAttribute("hidden");
  } else {
    othersField.removeAttribute("mandatory");
    othersField.setAttribute("hidden", "");
    othersField.value = "";
  }
}

function Member_QPName_change(el) {
  for (let a of document.querySelectorAll("[qpName]")) {
    a.value = document.getElementById(el.id).valueLabel;
  }
}

function StatBoar_change(el) {
  let statBoarYes = document.querySelector(`[switch-id="StatBoar_Yes10"]`);
  let statBoarDropDown = document.getElementById("Member_Member_Name_StatBoar10");

  if (statBoarYes.checked == true) {
    statBoarDropDown.removeAttribute("hidden");
  } else {
    statBoarDropDown.value = ""
    statBoarDropDown.setAttribute("hidden", "");
  }
}
