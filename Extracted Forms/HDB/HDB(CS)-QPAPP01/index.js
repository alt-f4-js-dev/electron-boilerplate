function Project_change(element) {
  let radios1 = [
    document.getElementById("Project_PlanSubm_1Subm10"),
    document.getElementById("Project_PlanSubm_AmenPlan10")
  ];
  let radios2 = [
    document.getElementById("Project_AsBuilSubm_InPart10"),
    document.getElementById("Project_AsBuilSubm_Fina10"),
    document.getElementById("Project_AsBuilSubm_ProjFina10")
  ];
  let navButton1 = document.querySelector('[target="page9"]');
  let navButton2 = document.querySelector('[target="page10"]');
  if (element.id === "Project_PlanSubm10") {
    for (let radio of radios2) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    radios1[0].checked = true;
    for (let radio of radios1) {
      radio.removeAttribute("disabled");
    }
    navButton1.removeAttribute("hidden");
    navButton2.setAttribute("hidden", "");
  } else if (element.id === "Project_AsBuilSubm10") {
    for (let radio of radios1) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let radio of radios2) {
      radio.removeAttribute("disabled");
    }
    navButton2.removeAttribute("hidden");
    navButton1.setAttribute("hidden", "");
  }
}

function PartOfAppl_ProjType10_change(element) {
  let value = document.getElementById(element.id).value;
  let textbox = document.getElementById("PartOfAppl_ProjType_Othe20");
  if (value === "A&A Works" || value === "Others") {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    textbox.removeAttribute("hidden");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("hidden", "");
    textbox.value = "";
  }
}

function PartOfAppl_TypeOfWork_Othe10_change(element) {
  let textbox = document.getElementById("PartOfAppl_TypeOfWork_Othe20");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    textbox.removeAttribute("hidden");
    document.getElementById("optionId").innerHTML = "Others*";
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("hidden", "");
    textbox.value = "";
    document.getElementById("optionId").innerHTML = "Others";
  }
}

function PartOfAppl_change(element) {
  let checkboxes = document.querySelectorAll('[group-id="PartOfAppl_groupId"]');
  let pass = false;
  let span = document.getElementById("typeOfWorks");

  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      span.innerHTML = "Type of Works";
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
      span.innerHTML = "Type of Works*";
    }
  }
}

function Member_Email_Address1_QP10_change(element) {
  let textbox = document.getElementById(element.id);
  let value = textbox.value.trim();
  let pass = false;
  let count = 0;
  if (textbox.value.length !== 0) {
    if (value.includes(",")) {
      let emails = value.split(",");
      for (email of emails) {
        email = email.trim();
        if (validateEmail(email)) {
          pass = true;
        } else {
          pass = false;
        }
      }
    } else {
      if (textbox.value.length !== 0) {
        if (validateEmail(textbox.value)) {
          pass = true;
        } else {
          pass = false;
        }
      }
    }
    if (textbox.value.length !== 0) {
      if (pass) {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else {
        textbox.setAttribute("data-invalid", "");
        textbox.setAttribute("data-invalid-message", "Invalid Format");
      }
    }
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  }
}

function Member_Email_Address_GEO10_change(element) {
  let textbox = document.getElementById(element.id);
  let value = textbox.value.trim();
  let pass = false;
  let count = 0;
  if (textbox.value.length !== 0) {
    if (value.includes(",")) {
      let emails = value.split(",");
      for (email of emails) {
        email = email.trim();
        if (validateEmail(email)) {
          pass = true;
        } else {
          pass = false;
        }
      }
    } else {
      if (textbox.value.length !== 0) {
        if (validateEmail(textbox.value)) {
          pass = true;
        } else {
          pass = false;
        }
      }
    }
    if (textbox.value.length !== 0) {
      if (pass) {
        textbox.removeAttribute("data-invalid");
        textbox.removeAttribute("data-invalid-message");
      } else {
        textbox.setAttribute("data-invalid", "");
        textbox.setAttribute("data-invalid-message", "Invalid Format");
      }
    }
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  }
}

function Member_Member_Name_QP10_change(element) {
  let value = document.getElementById(element.id).valueLabel;
  let checkbox = document.getElementById("DeclByAppl_TheQualPersOf10");
  let textbox = document.getElementById("DeclByAppl_I10");
  let checkbox1 = document.getElementById("ConfByQualPers_I20");
  let textbox1 = document.getElementById("ConfByQualPers_I10");
  let checkbox2 = document.getElementById("DeclByAppl_Sect3_I20");
  let textbox2 = document.getElementById("DeclByAppl_Sect3_I10");
  if (checkbox.checked) {
    textbox.value = value;
  }
  if (checkbox1.checked) {
    textbox1.value = value;
  }
  if (checkbox2.checked) {
    textbox2.value = value;
  }
}

function DeclByAppl_SelfDeclForm10_change(element) {
  let textbox = document.getElementById("DeclByAppl_TotaNumbOfPlan20");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function DeclByAppl_TheQualPersOf10_change(element) {
  let textbox = document.getElementById("DeclByAppl_I10");
  let value = document.getElementById("Member_Member_Name_PE10").valueLabel;
  if (element.checked) {
    if (value !== "Please Select") {
      textbox.value = value;
      textbox.removeAttribute("mandatory");
    } else {
      textbox.setAttribute("mandatory", "");
    }
  } else {
    textbox.value = "";
    textbox.removeAttribute("mandatory");
  }
}

function DeclByAppl_Sect3_I20_change(element) {
  let textbox = document.getElementById("DeclByAppl_Sect3_I10");
  let value = document.getElementById("Member_Member_Name_PE10").valueLabel;
  if (element.checked) {
    if (value !== "Please Select") {
      textbox.value = value;
      textbox.removeAttribute("mandatory");
    } else {
      textbox.setAttribute("mandatory", "");
    }
  } else {
    textbox.value = "";
    textbox.removeAttribute("mandatory");
  }
}

function ConfByQualPers_I20_change(element) {
  let textbox = document.getElementById("ConfByQualPers_I10");
  let value = document.getElementById("Member_Member_Name_PE10").valueLabel;
  let radios = [
    document.getElementById("ConfByQualPers_AllMajoStruAmen10"),
    document.getElementById("ConfByQualPers_AllMinoStruAmen10"),
    document.getElementById("ConfByQualPers_TherAreNoDepa10")
  ];
  if (element.checked) {
    if (value !== "Please Select") {
      textbox.value = value;
      textbox.removeAttribute("mandatory");
    } else {
      textbox.setAttribute("mandatory", "");
    }
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    textbox.value = "";
    textbox.removeAttribute("mandatory");
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
  }
}

function DeclByAppl_Rema20_change(element) {
  let textbox = document.getElementById("DeclByAppl_Rema10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function ConfByQualPers_TotaNumbOfAs20_change(element) {
  let textbox = document.getElementById("ConfByQualPers_TotaNumbOfAs10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function ConfByQualPers_TotaNumbOfSupp20_change(element) {
  let refid = document
    .getElementById(element.id)
    .parentNode.parentNode.querySelector("cn2-checkbox")
    .getAttribute("prefix");

  let textbox = document
    .getElementById(element.id)
    .parentNode.parentNode.querySelector("cn2-textbox");

  let select = document
    .getElementById(element.id)
    .parentNode.parentNode.querySelector("cn2-select");

  if (element.checked) {
    select.setAttribute("mandatory", "");
    select.removeAttribute("disabled");

    if (refid === "ConfByQualPers_TotaNumbOfSupp2") {
      select.value = "QP";
    } else if (refid === "lblConfByQualPers_AcAcoDesiCalc2") {
      select.value = "AC";
    }

    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    select.removeAttribute("mandatory");
    select.setAttribute("disabled", "");
    select.value = "";

    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function lblConfByQualPers_AcAcoDesiCalc20_change(element) {
  let textbox = document.getElementById("ConfByQualPers_AcAcoDesiCalc10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function ConfByQualPers_Rema20_change(element) {
  let textbox = document.getElementById("ConfByQualPers_Rema10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}


function Part_Of_SAC_IfAppl10_change(element, divId, mandatory, confmFormId) {
  let div = document.getElementById(divId);
  let childs = div.querySelectorAll("[group-id='sacGroupId']");
  let select = div.querySelector("cn2-select");

  let textbox = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-textbox");

  let checkbox = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-checkbox");

  let buttons = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-button");

  document.getElementById("");

  if (element.checked) {
    document.getElementById(mandatory).setAttribute("mandatory", "");
    div.removeAttribute("hidden");

    for (let checkCofrm of checkbox) {
      checkCofrm.removeAttribute("disabled");
    }

    for (let buttonConfrm of buttons) {
      buttonConfrm.removeAttribute("disabled");
    }

    document.getElementById("addCButton").removeAttribute("disabled");
  } else {
    div.setAttribute("hidden", "");
    document.getElementById(mandatory).removeAttribute("mandatory");
    document.getElementById(mandatory).value = "";
    for (let child of childs) {
      child.value = "";
    }

    for (let textConfrm of textbox) {
      textConfrm.removeAttribute("mandatory");
      textConfrm.setAttribute("disabled", "");
      textConfrm.value = "";
    }

    for (let checkCofrm of checkbox) {
      checkCofrm.setAttribute("disabled", "");
      checkCofrm.checked = false;
    }

    for (let buttonConfrm of buttons) {
      buttonConfrm.setAttribute("disabled", "");
    }

    document.getElementById("addCButton").setAttribute("disabled", "");
  }
}

function Part_Of_QP_Geo10_change(element, divId, confmFormId) {
  let div = document.getElementById(divId);
  let childs = div.querySelectorAll("[group-id='qp_geoGroupId']");

  let textbox = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-textbox");

  let checkbox = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-checkbox");

  let buttons = document
    .getElementById(confmFormId)
    .querySelectorAll("cn2-button");

  if (element.checked) {
    document
      .getElementById("Member_Member_Name_GEO10")
      .setAttribute("mandatory", "");
    div.removeAttribute("hidden");

    for (let checkCofrm of checkbox) {
      checkCofrm.removeAttribute("disabled");
    }

    for (let buttonConfrm of buttons) {
      buttonConfrm.removeAttribute("disabled");
    }

    document.getElementById("addBButton").removeAttribute("disabled");
  } else {
    document
      .getElementById("Member_Member_Name_GEO10")
      .removeAttribute("mandatory");
    document.getElementById("Member_Member_Name_GEO10").value = "";
    div.setAttribute("hidden", "");

    for (let child of childs) {
      child.value = "";
    }

    for (let textConfrm of textbox) {
      textConfrm.removeAttribute("mandatory");
      textConfrm.setAttribute("disabled", "");
      textConfrm.value = "";
    }

    for (let checkCofrm of checkbox) {
      checkCofrm.setAttribute("disabled", "");
      checkCofrm.checked = false;
    }

    for (let buttonConfrm of buttons) {
      buttonConfrm.setAttribute("disabled", "");
    }

    document.getElementById("addBButton").setAttribute("disabled", "");
  }
}

function addBButton_click(parent) {
  parent = document.getElementById(parent);
  let tempDiv = parent.querySelectorAll("div");
  let temp = [];
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      temp.push(div);
    }
  }
  let targetDiv = temp[temp.length - 1];
  if (!targetDiv.querySelector("cn2-checkbox").checked) {
    let textbox = targetDiv.querySelector("cn2-textbox");
    let select = targetDiv.querySelector("cn2-select");

    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";

    select.setAttribute("disabled", "");
    select.removeAttribute("mandatory");
    select.value = "";
  }
}

//

document.addEventListener('DOMContentLoaded', function (event) {
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
  if ((d.getFullYear() != year && d.getMonth() != (month - 1) && d.getDate() != day) || (d.getFullYear() > 2999 || d.getFullYear < 1900)) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute('maxlength');
  let uenField = document.getElementById(el.id);
  if (el.value.trim().length !== maxlength && el.value.trim() !== '') {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute('data-invalid', '');
      document
        .getElementById(el.id)
        .setAttribute(
          'data-invalid-message',
          'This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character'
        );
    } else {
      uenField.removeAttribute('data-invalid');
      uenField.removeAttribute('data-invalid-message');
    }
  } else if (el.value.trim() === '') {
    if (uenField.hasAttribute("mandatory")) {
      uenField.removeAttribute("mandatory");
      uenField.setAttribute("mandatory", "");
    }
    uenField.value = '';
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
  } else {
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
  }
}

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
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