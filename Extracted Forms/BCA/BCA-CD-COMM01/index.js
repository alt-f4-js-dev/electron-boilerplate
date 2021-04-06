let title = "BCA-CD-COMM01";

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  // for (let sel of document.querySelectorAll("[xfd-hidden]")) {
  //   let id = sel.getAttribute("xfd-hidden");
  //   let txt = document.createElement("cn2-textbox");
  //   txt.setAttribute("no-label", "");
  //   txt.setAttribute("id", id);
  //   txt.setAttribute("hidden", "");

  //   sel.parentElement.appendChild(txt);
  //   jsonData[id] = "";

  //   sel.shadowRoot.querySelector("select").addEventListener("change", (e) => {
  //     let value = e.target.value;
  //     document.getElementById(id).value = value;
  //   });

  //   sel.removeAttribute("xfd-hidden");
  // }
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function getDisplayValue(el) {
  let index = document.getElementById(el.id).shadowRoot.querySelector("select")
    .selectedIndex;

  for (
    let i = 0;
    i <
    document.getElementById(el.id).shadowRoot.querySelectorAll("option").length;
    ++i
  ) {
    if (i === index)
      document
        .getElementById(el.id)
        .shadowRoot.querySelectorAll("option")
        [i].setAttribute("cn2-selected", "");
    else
      document
        .getElementById(el.id)
        .shadowRoot.querySelectorAll("option")
        [i].removeAttribute("cn2-selected");
  }

  CateOfShel_PleaSeleCate10_change();
  CateOfShel_CateOfComm10_change(document.getElementById(el.id));
}

function CateOfShel_PleaSeleCate10_change() {
  let value = document
    .getElementById("CateOfShel_PleaSeleCate10")
    .shadowRoot.querySelector("[cn2-selected]").innerHTML;
  let cate20 = document.getElementById("CateOfShel_PleaSeleCate20");
  let shelTypeRow = document.getElementById("shelterType");
  let shelType = document.getElementById("CateOfShel_ShelType10");
  let transitGroup = [document.getElementById("CateOfShel_ShelSize10")];
  let otherGroup = [
    document.getElementById("CateOfShel_UnitNoOfFirst10"),
    document.getElementById("CateOfShel_HousNosOrBloc10"),
    document.getElementById("CateOfShel_TotaNoOfHS10"),
    document.getElementById("CateOfShel_TotaNoOfSS10"),
  ];

  console.log(value);

  switch (value) {
    case "Transit Shelter":
      console.log(value);
      for (let target of transitGroup) {
        target.removeAttribute("disabled");
        target.setAttribute("mandatory", "");
      }
      for (other of otherGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.removeAttribute("hidden");
      if (!shelTypeRow.hasAttribute("hidden")) {
        shelType.value = "";
        shelType.removeAttribute("disabled");
        shelType.setAttribute("mandatory", "");
      }
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("mandatory");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_CateOfComm10").value = "";
      //document.getElementById("shelterType").removeAttribute("hidden");
      document.getElementById("shelType").innerHTML = "Shelter Type*";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)*";
      document.getElementById("catCom").innerHTML = "Category of Commissioning";
      document.getElementById("unitnoFS").innerHTML =
        "Unit No. of First Shelter to be commissioned:";
      document.getElementById("totalHS").innerHTML =
        "Total Nos. of HS units to be commissioned:";
      document.getElementById("totalSS").innerHTML =
        "Total Nos. of SS compartments to be commissioned:";

      document.title = title + "-TS";
      jsonData["FormName10"] = title + "-TS";
      cate20.value = "TS";
      break;
    case "Household Shelter":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }

      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-HS";
      jsonData["FormName10"] = title + "-HS";
      cate20.value = "HS";
      break;
    case "Household Shelter (PPVC)":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }

      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-HS-P";
      jsonData["FormName10"] = title + "-HS-P";
      cate20.value = "HS-P";
      break;
    case "Storey Shelter":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-SS";
      jsonData["FormName10"] = title + "-SS";
      cate20.value = "SS";
      break;
    case "Storey Shelter (Non-Residential)":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-SS-NR";
      jsonData["FormName10"] = title + "-SS-NR";
      cate20.value = "SS-NR";
      break;
    case "Storey Shelter (PPVC)":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-SS-P";
      jsonData["FormName10"] = title + "-SS-P";
      cate20.value = "SS-P";
      break;
    case "Household &amp; Storey Shelters":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-HS-SS";
      jsonData["FormName10"] = title + "-HS-SS";
      cate20.value = "HS/SS";
      break;
    case "Household &amp; Storey Shelters (PPVC)":
      document
        .getElementById("CateOfShel_TypeOfComm10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_TypeOfComm10").value = "";
      document
        .getElementById("CateOfShel_CateOfComm10")
        .removeAttribute("disabled");
      document
        .getElementById("CateOfShel_CateOfComm10")
        .setAttribute("mandatory", "");
      document
        .getElementById("CateOfShel_NameAndAddrOf10")
        .setAttribute("disabled", "");
      document.getElementById("CateOfShel_NameAndAddrOf10").value = "";
      //document.getElementById("shelterType").setAttribute("hidden", "");
      document.getElementById("shelType").innerHTML = "Shelter Type";
      document.getElementById("shelterSize").innerHTML =
        "Shelter Size(m<sup>2</sup>)";
      document.getElementById("typeCom").innerHTML = "Type of Commissioning";
      document.getElementById("catCom").innerHTML =
        "Category of Commissioning*";

      for (other of transitGroup) {
        other.removeAttribute("mandatory");
        other.setAttribute("disabled", "");
        other.value = "";
      }
      shelTypeRow.setAttribute("hidden", "");
      disableSheltertype();
      document.title = title + "-HS-SS-P";
      jsonData["FormName10"] = title + "-HS-SS-P";
      cate20.value = "HS/SS-P";
      break;
  }
}

function CateOfShel_CateOfComm10_change() {
  let shelCalvalue = document
    .getElementById("CateOfShel_PleaSeleCate10")
    .shadowRoot.querySelector("[cn2-selected]").innerHTML;
  let catComvalue = document
    .getElementById("CateOfShel_CateOfComm10")
    .value.trim();

  let hsGroup = [document.getElementById("CateOfShel_TotaNoOfHS10")];
  let firstShelGroup = [document.getElementById("CateOfShel_UnitNoOfFirst10")];
  let ssGroup = [document.getElementById("CateOfShel_TotaNoOfSS10")];
  let projShelGroup = [document.getElementById("CateOfShel_HousNosOrBloc10")];

  let targetGroup = new Array();
  let otherGroup = new Array();

  document
    .getElementById("CateOfShel_CommType20")
    .removeAttribute("data-valid");
  document
    .getElementById("CateOfShel_CommType20")
    .removeAttribute("data-valid-message");
  document
    .getElementById("CateOfShel_CommType20")
    .removeAttribute("data-invalid");
  document
    .getElementById("CateOfShel_CommType20")
    .removeAttribute("data-invalid-message");

  switch (catComvalue) {
    case "FS":
      document.getElementById("FIELD3").value = "FS";
      document.getElementById("unitnoFS").innerHTML =
        "Unit No. of First Shelter to be commissioned:*";
      document.getElementById("houseNo").innerHTML =
        "House Nos. or Block Nos. to be commissioned:";
      document.getElementById("CateOfShel_CommType20").value = "01";
      if (shelCalvalue === "") {
        document
          .getElementById("CateOfShel_UnitNoOfFirst10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_UnitNoOfFirst10")
          .setAttribute("mandatory", "");

        otherGroup = otherGroup.concat(hsGroup, ssGroup, projShelGroup);
        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      } else if (
        shelCalvalue === "Household Shelter" ||
        shelCalvalue === "Household Shelter(PPVC)" ||
        shelCalvalue === "Storey Shelter" ||
        shelCalvalue === "Storey Shelter(PPVC)" ||
        shelCalvalue === "Storey Shelter(Non-Residential)" ||
        shelCalvalue === "Household & Storey Shelters" ||
        shelCalvalue === "Household & Storey Shelters(PPVC)"
      ) {
        document
          .getElementById("CateOfShel_UnitNoOfFirst10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_UnitNoOfFirst10")
          .setAttribute("mandatory", "");

        otherGroup = otherGroup.concat(hsGroup, ssGroup, projShelGroup);
        document.getElementById("totalHS").innerHTML =
          "Total Nos. of HS units to be commissioned:";
        document.getElementById("totalSS").innerHTML =
          "Total Nos. of SS compartments to be commissioned:";
        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      }
      break;
    case "PS":
      document.getElementById("FIELD3").value = "PS";
      document.getElementById("unitnoFS").innerHTML =
        "Unit No. of First Shelter to be commissioned:";
      document.getElementById("houseNo").innerHTML =
        "House Nos. or Block Nos. to be commissioned:*";

      document.getElementById("CateOfShel_CommType20").value = "";
      if (shelCalvalue === "") {
        document
          .getElementById("CateOfShel_HousNosOrBloc10")
          .removeAttribute("disabled");
        document
          .getElementById("CateOfShel_HousNosOrBloc10")
          .setAttribute("mandatory", "");

        otherGroup = otherGroup.concat(hsGroup, ssGroup, firstShelGroup);

        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      } else if (
        shelCalvalue === "Household Shelter" ||
        shelCalvalue === "Household Shelter(PPVC)"
      ) {
        document.getElementById("totalHS").innerHTML =
          "Total Nos. of HS units to be commissioned:*";
        document.getElementById("totalSS").innerHTML =
          "Total Nos. of SS compartments to be commissioned:";
        targetGroup = targetGroup.concat(hsGroup, projShelGroup);
        otherGroup = otherGroup.concat(firstShelGroup, ssGroup);

        for (let target of targetGroup) {
          target.removeAttribute("disabled");
          target.setAttribute("mandatory", "");
        }
        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      } else if (
        shelCalvalue === "Storey Shelter" ||
        shelCalvalue === "Storey Shelter(PPVC)" ||
        shelCalvalue === "Storey Shelter(Non-Residential)"
      ) {
        document.getElementById("totalHS").innerHTML =
          "Total Nos. of HS units to be commissioned:";
        document.getElementById("totalSS").innerHTML =
          "Total Nos. of SS compartments to be commissioned:*";
        targetGroup = targetGroup.concat(projShelGroup, ssGroup);
        otherGroup = otherGroup.concat(firstShelGroup, hsGroup);

        for (let target of targetGroup) {
          target.removeAttribute("disabled");
          target.setAttribute("mandatory", "");
        }
        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      } else if (
        shelCalvalue === "Household & Storey Shelters" ||
        shelCalvalue === "Household & Storey Shelters(PPVC)"
      ) {
        document.getElementById("totalHS").innerHTML =
          "Total Nos. of HS units to be commissioned:*";
        document.getElementById("totalSS").innerHTML =
          "Total Nos. of SS compartments to be commissioned:*";
        targetGroup = targetGroup.concat(projShelGroup, ssGroup, hsGroup);
        otherGroup = otherGroup.concat(firstShelGroup);

        for (let target of targetGroup) {
          target.removeAttribute("disabled");
          target.setAttribute("mandatory", "");
        }
        for (let other of otherGroup) {
          other.removeAttribute("mandatory");
          other.setAttribute("disabled", "");
          other.value = "";
        }
      }
  }
}

function setShelType20(element) {
  let shelType10 = element.value;
  let shelType20 = document.getElementById("CateOfShel_ShelType20");

  if (!shelType10 == "") {
    shelType20.value = shelType10;
  } else {
    shelType20.value = "";
  }
}

function disableSheltertype() {
  let shelType = document.getElementById("CateOfShel_ShelType10");
  // let shelTypeSign = document.getElementById("CateOfShel_ShelType10_span");
  shelType.value = "";
  // shelTypeSign.textContent = "";
  shelType.setAttribute("disabled", "");
  shelType.removeAttribute("mandatory");
}

function DeclByQualPers_PropDateOfComm20_change(element) {
  let targetGroup = [
    document.getElementById("DeclByQualPers_PropDateOfComm10"),
  ];

  if (element.checked) {
    for (let target of targetGroup) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
    }
    document.getElementById("propCom").innerHTML =
      "Proposed date of commissioning:*";
  } else {
    for (let target of targetGroup) {
      target.removeAttribute("mandatory");
      target.setAttribute("disabled", "");
      target.value = "";
    }
    document.getElementById("propCom").innerHTML =
      "Proposed date of commissioning:";
  }
}

function PartOfBuil_Email10_change(element) {
  let textbox = document.getElementById(element.id);
  if (textbox.value.length !== 0) {
    if (validateEmail(textbox.value)) {
      textbox.removeAttribute("data-invalid");
    } else {
      textbox.setAttribute("data-invalid", "");
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

function CateOfShel_CommType_keypress(event, element) {
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

function CateOfShel_CommType_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value.trim() === "00") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Plan type should not be 00. Please try again"
    );
  } else {
    textBox.removeAttribute("data-invalid");
    textBox.removeAttribute("data-invalid-message");
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
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
function removeUENerror(element) {
  let childCount = document.getElementById("stForm").childElementCount;
  let uen = document.querySelectorAll("[prefix='Members_UEN_OWNER']");
  let title = document.querySelectorAll('[prefix="Member_Member_Title_OWNER"]');
  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
    title[title.length - 1].value = "Mr";
  }
}

function removeManda(element) {
  if (element.checked) {
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");
  } else {
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
  }
}

function PartOfBuil_Email10_change(element) {
  let textbox = document.getElementById(element.id);

  if (validateEmail(textbox.value)) {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  } else {
    if (textbox.value === "") {
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    } else {
      textbox.setAttribute("data-invalid", "");
      textbox.setAttribute("data-invalid-message", "Invalid Format");
    }
  }
}

function ValidateCurrency(event) {
  var regex = new RegExp("^[0-9-!@#$%*?.]");
  var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
}

function quantity_input(element) {
  let field = document.getElementById(element.id);

  if (field.value) {
    if (isNaN(field.value)) {
      field.value = "";
    } else if (field.value.endsWith(".")) {
      field.value = field.value + "00";
    } else if (field.value.endsWith(".0")) {
      field.value = field.value + "0";
    }
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

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
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

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
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

function saveFormDataToJson() {
  for (let [id, value] of Object.entries(jsonData)) {
    let targetElement = document.getElementById(id);
    if (targetElement) {
      switch (targetElement.tagName) {
        case "CN2-CHECKBOX":
        case "CN2-SWITCHBUTTON":
          jsonData[id] = targetElement.checked ? "on" : "off";
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

function checkPageForMandatories(onlyPage) {
  let run = setTimeout(() => {
    if (onlyPage) {
      let parent = document.getElementById(onlyPage);
      let elements = parent.getElementsByTagName("*");
      for (let element of elements) {
        if (
          (element.hasAttribute("id") &&
            element.hasAttribute("mandatory") &&
            !element.hasAttribute("hidden") &&
            !element.hasAttribute("disabled") &&
            element.value == "") ||
          element.hasAttribute("checked") ||
          element.hasAttribute("data-invalid")
        ) {
          if (element.hasAttribute("id")) {
            let targetEl = document.getElementById(element.id);
            let tagName = element.tagName.toLowerCase();
            if (element.hasAttribute("checked")) {
              if (!element.checked) {
                if (["cn2-checkbox"].includes(tagName)) {
                  targetEl.setAttribute("not-filledup", "");
                } else if (
                  tagName == "input" &&
                  element.getAttribute("type") == "radio"
                ) {
                  let flag = document.createElement("sup");
                  flag.innerHTML = "!";
                  flag.setAttribute("not-filledup", "");
                  flag.setAttribute(
                    "style",
                    "font-weight: bold; color: red; margin-left: 5px; margin-right: 5px;"
                  );
                  if (element.parentElement.clientWidth < 52) {
                    if (element.parentElement.hasAttribute("width"))
                      element.parentElement.setAttribute(
                        "default-width",
                        element.parentElement.getAttribute("width")
                      );
                    else
                      element.parentElement.setAttribute(
                        "default-width",
                        element.parentElement.clientWidth + "px"
                      );
                    element.parentElement.style.width = "52px";
                  }
                  element.after(flag);
                  if (element.hasAttribute("name")) {
                    element.addEventListener("change", () => {
                      for (let a of document.querySelectorAll(
                        `[name="${element.getAttribute("name")}"]`
                      )) {
                        a.parentElement
                          .querySelector("[not-filledup]")
                          .remove();
                        a.parentElement.style.width = a.parentElement.getAttribute(
                          "default-width"
                        );
                      }

                      if (
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("warning") ||
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("valid")
                      )
                        checkPageForMandatories(parent.getAttribute("target"));
                    });
                  } else {
                    element.addEventListener("change", () => {
                      element.parentElement
                        .querySelector("[not-filledup]")
                        .remove();
                      element.parentElement.style.width = a.parentElement.getAttribute(
                        "default-width"
                      );

                      if (
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("warning") ||
                        document
                          .querySelector(`cn2-nav-button`)
                          .hasAttribute("valid")
                      )
                        checkPageForMandatories(parent.getAttribute("target"));
                    });
                  }
                }
              }
            } else if (
              element.value.trim() == "" ||
              element.hasAttribute("data-invalid")
            ) {
              if (
                [
                  "cn2-textbox",
                  "cn2-textarea",
                  "cn2-select",
                  "cn2-datefield",
                ].includes(tagName)
              ) {
                targetEl.setAttribute("not-filledup", "");
              }
            }
          }
        } else if (
          element.hasAttribute("id") &&
          element.hasAttribute("mandatory") &&
          !element.hasAttribute("hidden") &&
          element.value !== ""
        ) {
          let targetEl = document.getElementById(element.id);
          let tagName = element.tagName.toLowerCase();
          if (
            [
              "cn2-textbox",
              "cn2-textarea",
              "cn2-select",
              "cn2-datefield",
            ].includes(tagName)
          ) {
            targetEl.removeAttribute("not-filledup", "");
          }
        }
      }

      let count = parent.querySelectorAll("[not-filledup]").length;
      parent.setAttribute("mandatory-fields-count", count);
    } else {
      [...document.querySelectorAll("[not-filledup]")].map((el) => {
        if (el.tagName.toLowerCase() == "sup") el.remove();
        else el.removeAttribute("not-filledup");
      });
      [...document.getElementById("page").children]
        .map((el) => el.getAttribute("id"))
        .map((target) => {
          let parent = document.getElementById(target);
          let elements = parent.getElementsByTagName("*");
          for (let element of elements) {
            if (
              (element.hasAttribute("id") &&
                element.hasAttribute("mandatory") &&
                !element.hasAttribute("hidden") &&
                !element.hasAttribute("disabled") &&
                element.value == "") ||
              element.hasAttribute("checked") ||
              element.hasAttribute("data-invalid")
            ) {
              if (element.hasAttribute("id")) {
                let targetEl = document.getElementById(element.id);
                let tagName = element.tagName.toLowerCase();
                if (element.hasAttribute("checked")) {
                  if (!element.checked) {
                    if (["cn2-checkbox"].includes(tagName)) {
                      targetEl.setAttribute("not-filledup", "");
                    } else if (
                      tagName == "input" &&
                      element.getAttribute("type") == "radio"
                    ) {
                      let flag = document.createElement("sup");
                      flag.innerHTML = "!";
                      flag.setAttribute("not-filledup", "");
                      flag.setAttribute(
                        "style",
                        "font-weight: bold; color: red; margin-left: 5px; margin-right: 5px;"
                      );
                      if (element.parentElement.clientWidth < 52) {
                        if (element.parentElement.hasAttribute("width"))
                          element.parentElement.setAttribute(
                            "default-width",
                            element.parentElement.getAttribute("width")
                          );
                        else
                          element.parentElement.setAttribute(
                            "default-width",
                            element.parentElement.clientWidth + "px"
                          );
                        element.parentElement.style.width = "52px";
                      }
                      element.after(flag);
                      if (element.hasAttribute("name")) {
                        element.addEventListener("change", () => {
                          for (let a of document.querySelectorAll(
                            `[name="${element.getAttribute("name")}"]`
                          )) {
                            a.parentElement
                              .querySelector("[not-filledup]")
                              .remove();
                            a.parentElement.style.width = a.parentElement.getAttribute(
                              "default-width"
                            );
                          }

                          if (
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("warning") ||
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("valid")
                          )
                            checkPageForMandatories(
                              parent.getAttribute("target")
                            );
                        });
                      } else {
                        element.addEventListener("change", () => {
                          element.parentElement
                            .querySelector("[not-filledup]")
                            .remove();
                          element.parentElement.style.width = a.parentElement.getAttribute(
                            "default-width"
                          );

                          if (
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("warning") ||
                            document
                              .querySelector(`cn2-nav-button`)
                              .hasAttribute("valid")
                          )
                            checkPageForMandatories(
                              parent.getAttribute("target")
                            );
                        });
                      }
                    }
                  }
                } else if (element.value.trim() == "") {
                  if (
                    [
                      "cn2-textbox",
                      "cn2-textarea",
                      "cn2-select",
                      "cn2-datefield",
                    ].includes(tagName)
                  ) {
                    targetEl.setAttribute("not-filledup", "");
                  }
                }
              }
            } else if (
              element.hasAttribute("id") &&
              element.hasAttribute("mandatory") &&
              !element.hasAttribute("hidden") &&
              element.value !== ""
            ) {
              let targetEl = document.getElementById(element.id);
              let tagName = element.tagName.toLowerCase();
              if (
                [
                  "cn2-textbox",
                  "cn2-textarea",
                  "cn2-select",
                  "cn2-datefield",
                ].includes(tagName)
              ) {
                targetEl.removeAttribute("not-filledup", "");
              }
            }
          }

          let count = parent.querySelectorAll("[not-filledup]").length;
          parent.setAttribute("mandatory-fields-count", count);
        });
    }

    clearTimeout(run);
  }, 0);
}

function validWS(res) {
  if (typeof res == "object") {
    return true;
  } else {
    return false;
  }
}

function validateCaseRefNo(element) {
  let el = document.getElementById(element.id);

  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let applicationType = "CD";
  let planType = document.getElementById("CateOfShel_CommType10").value;
  let planNo = el.value;

  let query = `projRefNo=${projRefNo}&applicationType=${applicationType}&planType=${planType}&planNo=${planNo}`;

  jsonData["agencyUrl10"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl10"].url,
    query
  );

  el.removeAttribute("data-valid");
  el.removeAttribute("data-valid-message");
  el.removeAttribute("data-invalid");
  el.removeAttribute("data-invalid-message");

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      if (dataResponse.isRecordExist == "N") {
        el.setAttribute("data-valid", "");
        el.setAttribute("data-valid-message", "Plan number is valid");
      } else if (dataResponse.isRecordExist == "Y") {
        el.setAttribute("data-invalid", "");
        el.setAttribute("data-invalid-message", "Plan number is invalid");
      }
    }
  }
}
