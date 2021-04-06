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

function enableDelete(parent) {
  parent = document.getElementById(parent);

  let tempDivs = parent.querySelectorAll("div");

  let targetDivs = [];

  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  for (let div of targetDivs) {
    div.querySelector("cn2-button").removeAttribute("disabled");
  }
  let target = targetDivs[targetDivs.length - 1];

  target.querySelector("cn2-textbox").removeAttribute("data-invalid");
  target.querySelector("cn2-textbox").removeAttribute("data-invalid-message");
}

function disableDelete(parent) {
  parent = document.getElementById(parent);
  let tempDivs = parent.querySelectorAll("div");
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute("id")) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length == 1) {
    targetDivs[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}

function CertType_change(element) {
  let header1 = `The Builder's Certificate of Completion of the Building Works <br>[Section 11(1)(f) of the Building Control Act (Cap 29)]`;
  let header2 = `
  The Specialist Builder's Certificate of Completion of the Building Works <br>[Section 11(2)(c) of the Building Control Act (Cap 29)]`;
  let masterHeader = document.querySelector("cn2-master-head");
  let h2Page3_id = document.getElementById("h2Particulars_Id");
  let h2Page3Dec_id = document.getElementById("h2Declaration_id");
  let textboxes = document.querySelectorAll("[group-id='DeclByBuil_id']");
  let checkboxes = document.querySelectorAll("[group_id='chkDeclByBuil_id']");
  let cbox = document.getElementById("DeclByBuil_IHereCertThat10");
  let formField = document.querySelectorAll(".childContainer");
  let divs = [
    document.getElementById("piliWorksDiv_id"),
    document.getElementById("grouSuppStabDiv_id"),
    document.getElementById("SiteInveWorkDiv_id"),
    document.getElementById("StrucSteelDiv_id"),
    document.getElementById("PreCasrConcWorkDiv_id"),
    document.getElementById("inSityPost_div_id")
  ];
  switch (element.id) {
    case "CertType_BuilCert10":
      resetParticulars();
      formNameVersion("form__name1", "form__version");
      document.getElementById("builderIntroListId").removeAttribute("hidden");
      document
        .getElementById("SpecialBuilderIntroListId")
        .setAttribute("hidden", "");
      masterHeader.setAttribute("title", header1);
      h2Page3_id.innerHTML = "Section I Particulars of Builder";
      h2Page3Dec_id.innerHTML = "Declaration By Builder *";
      cbox.setAttribute("checked", "");
      cbox.setAttribute("mandatory", "");
      cbox.checked = false;
      for (let textbox of textboxes) {
        textbox.removeAttribute("hidden");
      }
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.checked = false;
      }
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
        formField[i].querySelector("cn2-textbox").value = "";
      }
      document.getElementById("PartOfProj_BuilPlanNo10").value = "";
      document.getElementById("declBuild").removeAttribute("label");
      document
        .getElementById("declBuild")
        .setAttribute("label", "Particulars and Declaration by Builder");
      document.getElementById(
        "Project_Title20"
      ).value = document.getElementById("Project_Title10").value;
      document.getElementById("builderCert").innerHTML =
        "I hereby certify that I have executed the above said works in accordance with the plans as supplied by the Qualified Person(s) and in accordance with all the provisions in the Building Control Act and Regulations.<br><br>The following specialist building works had been executed by licensed specialist builder(pl state company details below).";
      break;
    case "CertType_SpecBuilCert10":
      resetParticulars();
      formNameVersion("form__name2", "form__version");
      document
        .getElementById("SpecialBuilderIntroListId")
        .removeAttribute("hidden");
      document.getElementById("builderIntroListId").setAttribute("hidden", "");
      masterHeader.setAttribute("title", header2);
      h2Page3_id.innerHTML = "Section I Particulars of Specialist Builder";
      h2Page3Dec_id.innerHTML = "Declaration By Specialist Builder *";
      cbox.setAttribute("checked", "");
      cbox.setAttribute("mandatory", "");
      cbox.checked = false;
      for (let textbox of textboxes) {
        textbox.setAttribute("hidden", "");
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.checked = false;
      }
      for (let div of divs) {
        if (div.innerHTML.includes("*")) {
          div.innerHTML = div.innerHTML.trim().slice(0, -2);
        }
      }
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
        formField[i].querySelector("cn2-textbox").value = "";
      }
      document.getElementById("PartOfProj_BuilPlanNo10").value = "";
      document.getElementById("declBuild").removeAttribute("label");
      document
        .getElementById("declBuild")
        .setAttribute(
          "label",
          "Particulars and Declaration by Specialist Builder"
        );
      document.getElementById(
        "Project_Title20"
      ).value = document.getElementById("Project_Title10").value;
      document.getElementById("builderCert").innerHTML =
        "I hereby certify that I have executed the following specialist building works in accordance with the plans as supplied by the Qualified Person(s) and in accordance with all the provisions in the Act and Regulations.";
      break;
    default:
      console.log("Error! ID not found.");
      break;
  }
}

function chkDeclByBuil_change(element, textbox, divId) {
  let radio = document.getElementById("CertType_BuilCert10");
  textbox = document.getElementById(textbox);
  let div = document.getElementById(divId);
  if (radio.checked) {
    if (element.checked) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
      div.innerHTML = div.innerHTML + " *";
    } else {
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("disabled", "");
      textbox.value = "";
      div.innerHTML = div.innerHTML.slice(0, -2);
    }
  }
}

function DeclByBuil_IHereCertThat10_change(element) {
  let checkboxes = document.querySelectorAll("[group_id='chkDeclByBuil_id']");
  let textboxes = document.querySelectorAll("[group-id='DeclByBuil_id']");
  element = document.getElementById(element.id);
  let divs = [
    document.getElementById("piliWorksDiv_id"),
    document.getElementById("grouSuppStabDiv_id"),
    document.getElementById("SiteInveWorkDiv_id"),
    document.getElementById("StrucSteelDiv_id"),
    document.getElementById("PreCasrConcWorkDiv_id"),
    document.getElementById("inSityPost_div_id")
  ];
  if (element.checked) {
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    for (let div of divs) {
      if (div.innerHTML.includes("*")) {
        div.innerHTML = div.innerHTML.trim().slice(0, -2);
      }
    }
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}

function getDetails() {
  let data = [
    {
      "BCA(BE)": [
        {
          Email: "wai_hui_ling@bca.gov.sg",
          TelNo: "68044609",
          AreaOfSupp: "Policies"
        },
        {
          Email: "chang_heng_choy@bca.gov.sg",
          TelNo: "68044646",
          AreaOfSupp: "Policies"
        }
      ]
    }
  ];
  return data;
}

function addTableST(pDiv) {
  let parent = document.getElementById(pDiv);
  let tempDiv = parent.getElementsByTagName("div");
  let targetDiv = [];
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length > 1) {
    let select = targetDiv[targetDiv.length - 1].querySelectorAll("cn2-select");
    for (let target of select) {
      target.value = "ST";
    }
  }
}

function resetParticulars() {
  let fields = [
    document.getElementById("Member_Member_SID_BLDR10"),
    document.getElementById("Member_Member_Name_BLDR10"),
    document.getElementById("Member_Designation_BLDR10"),
    document.getElementById("Member_Firm_Name_BLDR10"),
    document.getElementById("Members_UEN_BLDR10"),
    document.getElementById("Member_Address_BLDR10"),
    document.getElementById("Member_Tel_No_BLDR10"),
    document.getElementById("Member_Mobile_No_BLDR10"),
    document.getElementById("Member_Email_Address1_BLDR10")
  ];

  for (f of fields) {
    f.value = "";
    document
      .getElementById("Members_UEN_BLDR10")
      .removeAttribute("data-invalid");
    document
      .getElementById("Members_UEN_BLDR10")
      .removeAttribute("data-invalid-message");
  }
  document
    .getElementById("Member_Member_Name_BLDR10")
    .removeAttribute("mandatory");
  document
    .getElementById("Member_Member_Name_BLDR10")
    .setAttribute("mandatory", "");
}

//

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name1", "form__version");
});

function formNameVersion(name, version) {
  //get Data
  // let getFormName = jsonData["FormName10"] || jsonData[name];
  // let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  let getFormName = jsonData[name];
  let getFormVersion = jsonData[version];
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

function togglePartBuild() {
  document.getElementById("Members_UEN_BLDR10").value = "";
  document.getElementById("Members_UEN_BLDR10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_BLDR10")
    .removeAttribute("data-invalid-message");
}

// override common functions
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
