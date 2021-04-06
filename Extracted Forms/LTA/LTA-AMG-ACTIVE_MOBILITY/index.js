document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById(
    "Addr20"
  ).value = `Active Mobility Group\n1 Hampshire Road\nSingapore 219428`;
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

//Declaration 1 functions ---- Start
function decla1leastSel(el) {
  let name = document.querySelectorAll(`[name='${el.name}']`);
  let pass = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < name.length; i++) {
      name[i].removeAttribute("mandatory");
      name[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].setAttribute("checked", "");
    }
  }
}

function decla2leastSel(el) {
  let checkboxGroup = ["SAMPBP_chk2_1", "SAMPBP_chk2_2"];

  let isSelected = false;

  for (let x of checkboxGroup) {
    if (x == el.id) {
      if (el.checked == true) isSelected = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }

  if (isSelected) {
    for (let y of checkboxGroup) {
      document.getElementById(y).removeAttribute("checked");
      document.getElementById(y).removeAttribute("mandatory");
    }
  } else {
    for (let y of checkboxGroup) {
      document.getElementById(y).setAttribute("checked", "");
      document.getElementById(y).setAttribute("mandatory", "");
    }
  }
}
//Declaration 1 functions ---- End

//Declaration 2 functions ---- Start
function decla3leastSel(el) {
  let name = document.querySelectorAll(`[name='${el.name}']`);
  let pass = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < name.length; i++) {
      name[i].removeAttribute("mandatory");
      name[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].setAttribute("checked", "");
    }
  }
}

function decla4leastSel(el) {
  let checkboxGroup = ["SPAME_chk2_1", "SPAME_chk2_2"];

  let isSelected = false;

  for (let x of checkboxGroup) {
    if (x == el.id) {
      if (el.checked == true) isSelected = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }

  if (isSelected) {
    for (let y of checkboxGroup) {
      console.log(y);
      document.getElementById(y).removeAttribute("checked");
      document.getElementById(y).removeAttribute("mandatory");
    }
  } else {
    for (let y of checkboxGroup) {
      document.getElementById(y).setAttribute("checked", "");
      document.getElementById(y).setAttribute("mandatory", "");
    }
  }
}

//Declaration 2 functions ---- End

//Declaration 3 functions ---- Start
function decla5leastSel(el) {
  let checkboxGroup = ["SIGCSPAMA_chk2_1", "SIGCSPAMA_chk2_2"];

  let isSelected = false;

  for (let x of checkboxGroup) {
    if (x == el.id) {
      if (el.checked == true) isSelected = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }

  if (isSelected) {
    for (let y of checkboxGroup) {
      document.getElementById(y).removeAttribute("checked");
      document.getElementById(y).removeAttribute("mandatory");
    }
  } else {
    for (let y of checkboxGroup) {
      document.getElementById(y).setAttribute("checked", "");
      document.getElementById(y).setAttribute("mandatory", "");
    }
  }
}

function decla6leastSel(el) {
  let checkboxGroup = ["SIGCSPAMA_chk3_1", "SIGCSPAMA_chk3_2"];

  let isSelected = false;

  for (let x of checkboxGroup) {
    if (x == el.id) {
      if (el.checked == true) isSelected = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }

  if (isSelected) {
    for (let y of checkboxGroup) {
      document.getElementById(y).removeAttribute("checked");
      document.getElementById(y).removeAttribute("mandatory");
    }
  } else {
    for (let y of checkboxGroup) {
      document.getElementById(y).setAttribute("checked", "");
      document.getElementById(y).setAttribute("mandatory", "");
    }
  }
}
//Declaration 3 functions ---- End

//Common ---- Start
function removeManda(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function DateField_chk_change(element, field) {
  if (element.checked) {
    document.getElementById(field).removeAttribute("disabled");
    document.getElementById(field).setAttribute("mandatory", "");

    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1;

    // var yyyy = today.getFullYear();
    // if (dd < 10) {
    //   dd = "0" + dd;
    // }
    // if (mm < 10) {
    //   mm = "0" + mm;
    // }
    // var today = yyyy + "-" + mm + "-" + dd;

    // document.getElementById(field).value = today;
  } else {
    document.getElementById(field).setAttribute("disabled", "");
    document.getElementById(field).removeAttribute("mandatory");
    document.getElementById(field).value = "";
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

function appType(el) {
  let navButton = document.querySelectorAll("[target]");
  let appSelect = document.getElementById("POPUP3");
  let subCat = document.getElementById("SubMobSubCategory");
  let subMobSubType = document.getElementById("SubMobSubType");
  let subRefNo = document.getElementById("SubMobRefNo");

  let decla1chkbox = document.querySelectorAll("[group-id = 'decla1chckbox']");
  let datefieldDecla1 = document.getElementById("SAMPBP_field1");
  let decla1TextArea = document.getElementById("SAMPBP_field2");

  let decla2chkbox = document.querySelectorAll("[group-id = 'decla2chckbox']");
  let decla2TextArea = document.getElementById("FIELD1");

  let decla3chkbox = document.querySelectorAll("[group-id = 'decla3chckbox']");
  let datefieldDecla3 = document.querySelectorAll(
    "[group-id = 'decla3dateField']"
  );
  let decla3TextArea = document.getElementById("SIGCSPAMA_field3");

  appSelect.value = "ANG MO KIO";
  subCat.value = "";
  subMobSubType.value = "";
  subRefNo.value = "";

  datefieldDecla1.removeAttribute("mandatory");
  datefieldDecla1.setAttribute("disabled", "");
  datefieldDecla1.value = "";
  decla1TextArea.value = "";
  decla2TextArea.value = "";

  for (let decla3Datefield of datefieldDecla3) {
    decla3Datefield.removeAttribute("mandatory");
    decla3Datefield.setAttribute("disabled", "");
    decla3Datefield.value = "";
  }

  for (let navBtn of navButton) {
    navBtn.removeAttribute("hidden");
  }

  decla3TextArea.value = "";
  document.querySelector("[switch-id='StatBoar_Yes10']").checked = false
  switch (el.id) {
    case "ApplType_SubActPrjbuiltPln":
      document.getElementById("decla1").removeAttribute("hidden");
      document.getElementById("decla2").setAttribute("hidden", "");
      document.getElementById("decla3").setAttribute("hidden", "");

      //Declaration 1 add check and mandatory attribute
      for (let checkBoxTarget of decla1chkbox) {
        checkBoxTarget.setAttribute("checked", "");
        checkBoxTarget.setAttribute("mandatory", "");
        checkBoxTarget.checked = false;
      }

      //Declaration 2 reset
      for (let otherTarget1 of decla2chkbox) {
        otherTarget1.removeAttribute("checked");
        otherTarget1.removeAttribute("mandatory");
        otherTarget1.checked = false;
      }

      //Declaration 3 reset
      for (let otherTarget2 of decla3chkbox) {
        otherTarget2.removeAttribute("checked");
        otherTarget2.removeAttribute("mandatory");
        otherTarget2.checked = false;
      }
      break;
    case "ApplType_SubPrjWAME":
      document.getElementById("decla1").setAttribute("hidden", "");
      document.getElementById("decla2").removeAttribute("hidden");
      document.getElementById("decla3").setAttribute("hidden", "");

      //Declaration 2 add check and mandatory attribute
      for (let checkBoxTarget of decla2chkbox) {
        checkBoxTarget.setAttribute("checked", "");
        checkBoxTarget.setAttribute("mandatory", "");
        checkBoxTarget.checked = false;
      }

      //Declaration 1 reset
      for (let otherTarget1 of decla1chkbox) {
        otherTarget1.removeAttribute("checked");
        otherTarget1.removeAttribute("mandatory");
        otherTarget1.checked = false;
      }

      //Declaration 3 reset
      for (let otherTarget2 of decla3chkbox) {
        otherTarget2.removeAttribute("checked");
        otherTarget2.removeAttribute("mandatory");
        otherTarget2.checked = false;
      }
      break;
    case "ApplType_SubInfoGaze":
      document.getElementById("decla1").setAttribute("hidden", "");
      document.getElementById("decla2").setAttribute("hidden", "");
      document.getElementById("decla3").removeAttribute("hidden");

      //Declaration 3 add check and mandatory attribute
      for (let checkBoxTarget of decla3chkbox) {
        checkBoxTarget.setAttribute("checked", "");
        checkBoxTarget.setAttribute("mandatory", "");
        checkBoxTarget.checked = false;
      }

      //Declaration 1 reset
      for (let otherTarget1 of decla1chkbox) {
        otherTarget1.removeAttribute("checked");
        otherTarget1.removeAttribute("mandatory");
        otherTarget1.checked = false;
      }

      //Declaration 2 reset
      for (let otherTarget2 of decla2chkbox) {
        otherTarget2.removeAttribute("checked");
        otherTarget2.removeAttribute("mandatory");
        otherTarget2.checked = false;
      }
      break;
  }
}
//Common ---- End
