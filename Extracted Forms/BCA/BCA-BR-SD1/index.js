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
function PartOfTheOWNER_change(element) {
  let radio = document.getElementById(element.id);
  let textbox = document.getElementById("Part_Owner_MCST_No10");
  let col = document.getElementById("PartOfTheOWNER_MCSTNo10_hide");
  switch (radio.id) {
    case "Part_Owner_Owner10":
      textbox.setAttribute("disabled", "");
      col.setAttribute("hidden", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      document.getElementById("mcstno").innerHTML = "";
      break;
    case "Part_Owner_MCST10":
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
      col.removeAttribute("hidden");
      document.getElementById("mcstno").innerHTML = "No.*";

      break;
  }
}
function Member_Email_Address1_OWNMCsST10_change(el) {
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

// function Decl_Owner_QP10_change(el, field1, field2) {
//   let textbox1 = document.getElementById(field1);
//   let textbox2 = document.getElementById(field2);

//   let memberName = document.getElementById("Member_Name_QP10");
//   let regNo = document.getElementById("Member_RegiNo_QP10");

//   if (el.checked) {
//     textbox1.value = memberName.value;
//     textbox2.value = regNo.value;
//   } else {
//     textbox1.value = "";
//     textbox2.value = "";
//   }
// }

function Decl_QualPers_Chkbox10(el, field1, field2) {
  let textbox1 = document.getElementById(field1);
  let textbox2 = document.getElementById(field2);
  let rad1 = document.getElementById("Part_Owner_Owner10");
  let rad2 = document.getElementById("Part_Owner_MCST10");
  let memberName = document.getElementById("Member_Name_QP10");

  if (el.checked) {
    textbox1.value = memberName.value;
    if (rad1.checked == true) {
      textbox2.value = "Owner";
    } else if (rad2.checked == true) {
      textbox2.value = "MCST";
    } else {
      textbox2.value = "";
    }
  } else {
    textbox1.value = "";
    textbox2.value = "";
  }
}

function onBlurorChange(el) {
  // let declaCheckBox = document.getElementById("Decl_Owner_QP10");
  //let confirmCheckBox = document.getElementById("Decl_QualPers_Chkbox10");

  let declaRationName = document.getElementById("Decl_Owner_NameQP10");
  let declaPEregisNo = document.getElementById("Decl_Owner_RegiNo_QP10");

  let confirmName = document.getElementById("Decl_QualPers_Er10");
  let confirmRole = document.getElementById("Decl_QualPers_Owner_Mana10");

  let textbox1 = document.getElementById("Decl_QualPers_Er10");
  let textbox2 = document.getElementById("Decl_QualPers_Owner_Mana10");
  let rad1 = document.getElementById("Part_Owner_Owner10");
  let rad2 = document.getElementById("Part_Owner_MCST10");
  let memberName = document.getElementById("Member_Name_QP10");

  switch (el.id) {
    case "Member_Name_QP10":
      //  if (declaCheckBox.checked) {
      if (el.value.length != 0) {
        declaRationName.value = el.value;
      } else {
        declaRationName.value = "";
      }
      //  }
      //if (confirmCheckBox.checked) {
      if (el.value.length != 0) {
        confirmName.value = el.value;
      } else {
        confirmName.value = "";
      }
      if (rad1.checked == true) {
        textbox2.value = "Owner";
      } else if (rad2.checked == true) {
        textbox2.value = "MCST";
      } else {
        textbox2.value = "";
      }
      //}
      break;
    case "Member_RegiNo_QP10":
      // if (declaCheckBox.checked) {
      if (el.value.length != 0) {
        declaPEregisNo.value = el.value;
      } else {
        declaPEregisNo.value = "";
      }
      //  }
      if (rad1.checked == true) {
        textbox2.value = "Owner";
      } else if (rad2.checked == true) {
        textbox2.value = "MCST";
      } else {
        textbox2.value = "";
      }
      break;
    case "Part_Owner_Owner10":
      // if (confirmCheckBox.checked) {
      confirmRole.value = "Owner";
      //  }
      break;
    case "Part_Owner_MCST10":
      // if (confirmCheckBox.checked) {
      confirmRole.value = "MCST";
      // }
      break;
  }
}

function removeManda(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function BuilDetails_Order_Ref_No10_change(el) {
  let fieldInput = document.getElementById(el.id);
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");

  if (
    fieldInput.value.trim().length !== maxlength &&
    fieldInput.value.trim() !== ""
  ) {
    if (fieldInput.value.length < 4) {
      fieldInput.setAttribute("data-invalid", "");
      fieldInput.setAttribute(
        "data-invalid-message",
        "Value entered cannot be less than 4 digits"
      );
    } else {
      fieldInput.removeAttribute("data-invalid");
      fieldInput.removeAttribute("data-invalid-message");
    }
  } else if (fieldInput.value.trim() === "") {
    fieldInput.removeAttribute("data-invalid");
    fieldInput.removeAttribute("data-invalid-message");
  } else {
    fieldInput.removeAttribute("data-invalid");
    fieldInput.removeAttribute("data-invalid-message");
  }
}

function BuilDetails_Order_Ref_No20_change(el) {
  let fieldInput = document.getElementById(el.id);
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");

  if (
    fieldInput.value.trim().length !== maxlength &&
    fieldInput.value.trim() !== ""
  ) {
    if (fieldInput.value.length < 3) {
      fieldInput.setAttribute("data-invalid", "");
      fieldInput.setAttribute(
        "data-invalid-message",
        "Value entered cannot be less than 3 digits"
      );
    } else {
      fieldInput.removeAttribute("data-invalid");
      fieldInput.removeAttribute("data-invalid-message");
    }
  } else if (fieldInput.value.trim() === "") {
    fieldInput.removeAttribute("data-invalid");
    fieldInput.removeAttribute("data-invalid-message");
  } else {
    fieldInput.removeAttribute("data-invalid");
    fieldInput.removeAttribute("data-invalid-message");
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

function Member_Email_Address1_OWNMCST10_change(el) {
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
  if (yearVal.value == "0000") {
    showMessage("Year should be in range 1920 to current year");
    yearVal.value = "";
  }
}

function UENchange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateUen(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function validateUen(uen) {
  let re = /^(([0-9]{9}))(([a-zA-Z]{1}))$/;
  return re.test(uen);
}
