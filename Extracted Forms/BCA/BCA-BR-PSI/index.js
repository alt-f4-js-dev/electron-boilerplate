let PartOfBuil_Id = "PartOfBuil_SingOwne10";

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  // jsonData["FormName10"] = getFormName;
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

function ApplType_change(element) {
  let D2 = document.getElementById("AppoOfStruEngi_DeclTable_id");
  let D3 = document.getElementById("VisuInspCertD3_DeclTable_id");
  let page3 = document.querySelector("[target='page3']");
  let page4 = document.querySelector("[target='page4']");
  let page4Particulars = document.getElementById("particursOfQualifiedPers");
  AppTypeChange(element.id);
  switch (element.id) {
    case "ApplType_ApptStruEngg":
      //D2
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D2";
      document
        .querySelector("[target='page4']")
        .setAttribute(
          "label",
          "Particulars and Declaration by Qualified Person"
        );
      D2.removeAttribute("hidden");
      D3.setAttribute("hidden", "");
      page4.setAttribute("page-number", "4");
      page3.removeAttribute("hidden");
      resetPartOfBuild();
      resetPage3(true);
      page4Particulars.removeAttribute("hidden");
      resetParticulars(true);
      resetPage3Decl(true);
      resetPage3D3Decl(false);
      resetPage3D4Decl(false);
      resetPage3D5Decl(false);
      resetPage3D7Decl(false);
      resetPage3D6Decl(false);
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .setAttribute("hidden", "");
      let title = `APPOINTMENT OF STRUCTURAL ENGINEER  <br> The Building Control Act (Cap 29) [Section 28]`;
      document.querySelector("cn2-master-head").setAttribute("title", title);
      break;
    case "ApplType_VIT_NonStru":
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D3";
      document
        .querySelector("[target='page4']")
        .setAttribute("label", "Declaration by Qualified Person");
      D2.setAttribute("hidden", "");
      D3.removeAttribute("hidden");
      page4.setAttribute("page-number", "3");
      page3.setAttribute("hidden", "");
      page4Particulars.setAttribute("hidden", "");
      resetPartOfBuild();
      resetPage3(false);
      resetParticulars(false);
      resetPage3Decl(false);
      resetPage3D4Decl(false);
      resetPage3D5Decl(false);
      resetPage3D6Decl(false);
      resetPage3D7Decl(false);
      resetPage3D3Decl(true);
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .setAttribute("hidden", "");
      let title1 = `VISUAL INSPECTION CERTIFICATION <br> (for Non-Structural or Minor Structural Defects) <br> The Building Control Act (Cap 29) [Section 28]`;
      document.querySelector("cn2-master-head").setAttribute("title", title1);
      break;
    case "ApplType_VIT_Stru":
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D4";
      document
        .querySelector("[target='page4']")
        .setAttribute("label", "Declaration by Qualified Person");
      D2.setAttribute("hidden", "");
      D3.removeAttribute("hidden");
      page4.setAttribute("page-number", "3");
      page3.setAttribute("hidden", "");
      page4Particulars.setAttribute("hidden", "");
      resetPartOfBuild();
      resetPage3(false);
      resetParticulars(false);
      resetPage3Decl(false);
      resetPage3D3Decl(false);

      resetPage3D5Decl(false);
      resetPage3D6Decl(false);
      resetPage3D7Decl(false);
      resetPage3D4Decl(true);
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .setAttribute("hidden", "");
      let title2 = `VISUAL INSPECTION CERTIFICATION <br> (for Structural Defects Suspected in Localised Areas / Whole Building) <br> The Building Control Act (Cap 29) [Section 28 ] `;
      document.querySelector("cn2-master-head").setAttribute("title", title2);
      break;
    case "ApplType_SIC_NonStru":
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D5";
      document
        .querySelector("[target='page4']")
        .setAttribute("label", "Declaration by Qualified Person");
      D2.setAttribute("hidden", "");
      D3.removeAttribute("hidden");
      page4.setAttribute("page-number", "3");
      page3.setAttribute("hidden", "");
      page4Particulars.setAttribute("hidden", "");
      resetPartOfBuild();
      resetPage3(false);
      resetParticulars(false);
      resetPage3Decl(false);
      resetPage3D3Decl(false);
      resetPage3D4Decl(false);

      resetPage3D6Decl(false);
      resetPage3D7Decl(false);
      resetPage3D5Decl(true);
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .setAttribute("hidden", "");
      let title3 = `STRUCTURAL INSPECTION CERTIFICATION <br> (for Defects Suspected which are  of No Structural Significance) <br> The Building Control Act (Cap 29) [Section 28]`;
      document.querySelector("cn2-master-head").setAttribute("title", title3);
      break;
    case "ApplType_SIC_Stru":
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D6";
      document
        .querySelector("[target='page4']")
        .setAttribute("label", "Declaration by Qualified Person");
      D2.setAttribute("hidden", "");
      D3.removeAttribute("hidden");
      page4.setAttribute("page-number", "3");
      page3.setAttribute("hidden", "");
      page4Particulars.setAttribute("hidden", "");
      resetPartOfBuild();
      resetPage3(false);
      resetParticulars(false);
      resetPage3Decl(false);
      resetPage3D3Decl(false);
      resetPage3D4Decl(false);
      resetPage3D5Decl(false);
      resetPage3D7Decl(false);
      resetPage3D6Decl(true);
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .setAttribute("hidden", "");
      let title4 = `STRUCTURAL INSPECTION CERTIFICATION <br> (for Defects Suspected which are of Structural Significance) <br> The Building Control Act (Cap 29) [Section 28]`;
      document.querySelector("cn2-master-head").setAttribute("title", title4);
      break;
    case "ApplType_VisInspCert":
      jsonData["FormName10"] = "BCA-ESID-SIS_SF-D7";
      document
        .querySelector("[target='page4']")
        .setAttribute("label", "Declaration by Qualified Person");
      D2.setAttribute("hidden", "");
      D3.removeAttribute("hidden");
      page4.setAttribute("page-number", "3");
      page3.setAttribute("hidden", "");
      page4Particulars.setAttribute("hidden", "");
      resetPartOfBuild();
      resetPage3(false);
      resetParticulars(false);
      resetPage3Decl(false);
      resetPage3D3Decl(false);
      resetPage3D4Decl(false);
      resetPage3D5Decl(false);
      resetPage3D6Decl(false);
      resetPage3D7Decl(true);
      document
        .getElementById("AppoOfStruEngiExc_tableList_id")
        .removeAttribute("hidden");
      document
        .getElementById("AppoOfStruEngi_tableList_id")
        .setAttribute("hidden", "");
      let title5 = `VISUAL INSPECTION CERTIFICATION <br> (for Supervision of Remedial Works) <br> The Building Control Act (Cap 29) [Section 28]`;
      document.querySelector("cn2-master-head").setAttribute("title", title5);
      break;
  }
}

function resetPartOfBuild() {
  targetTextBox = [
    document.getElementById("PartOfBuil_NotiRefeNo10"),
    document.getElementById("PartOfBuil_NotiRefeNo20"),
    document.getElementById("PartOfBuil_NotiRefeNo30"),
    document.getElementById("PartOfBuil_NotiRefeNo40"),
    document.getElementById("PartOfBuil_NotiRefeNo50"),
    document.getElementById("PartOfBuil_NotiRefeNo60"),
    document.getElementById("PartOfBuil_NotiRefeNo70"),
    document.getElementById("PartOfBuil_SMBRefe20"),
    document.getElementById("PartOfBuil_SMBRefe30"),
    document.getElementById("PartOfBuil_SMBRefe40"),
    document.getElementById("PartOfBuil_SMBRefe50"),
  ];
  document.getElementById("PartOfBuil_SingOwne10").checked = true;
  document.getElementById("PartOfBuil_MultOwne10").checked = false;
  document.getElementById("PartOfBuil_PSIRefe10").checked = false;
  document.getElementById("PartOfBuil_SMBRefe10").checked = false;

  for (let targetText of targetTextBox) {
    targetText.value = "";
    targetText.removeAttribute("mandatory");
    targetText.setAttribute("disabled", "");
  }

  document.getElementById("Project_Location_Description10").value = "";
  document.getElementById("ProjectAddress_Building_Name10").value = "";
}

function resetPage3D7Decl(pass) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
    document.getElementById("DeclByQualPers_IHereCertThat10"), //datefield
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
  ];
  if (pass) {
    document.getElementById("span1").innerHTML =
      "As required under Section 28 of The Building Control Act (Cap 29), I, Er.";
    document.getElementById("span2").innerHTML =
      " have supervised and inspected the remedial work carried out on the above building between ";
    document.getElementById("D6span1").innerHTML =
      "I hereby certify that the defects as identified in the report dated carried out on the above building between ";
    document.getElementById("D6span2").innerHTML =
      "have been fully repaired to my satisfaction.";
    document.getElementById("1_3Span").setAttribute("hidden", "");
    document.getElementById("D3td1").setAttribute("hidden", "");
    document.getElementById("D3D5tr1").removeAttribute("hidden");
    document.getElementById("D5td1").removeAttribute("hidden");

    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("rowspan");
      td.setAttribute("style", "padding-top: 19px");
    }
  } else {
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("style");
    }
    document.getElementById("D6span1").innerHTML =
      "I hereby certify that the suspected defects identified earlier in the visual inspection reported dated.";
    document.getElementById("D6span2").innerHTML =
      "were of no structural  significance.";
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    document.getElementById("D3D5tr1").setAttribute("hidden", "");
    document.getElementById("D5td1").setAttribute("hidden", "");
  }
}

function resetPage3D6Decl(pass) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
    document.getElementById("DeclByQualPers_TheRepoAsAtta20"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InArriAtMy10"),
    document.getElementById("DeclByQualPers_TheRepoAsAtta10"),
  ];
  let cbox = document.querySelectorAll("[D5CBox]");
  if (pass) {
    document.getElementById("span1").innerHTML =
      "As required under section 28 of The Building Control Act (Cap 29), I, Er.";
    document.getElementById("span2").innerHTML =
      ", have carried out a full structural Inspection on the condition of the above building from";
    document.getElementById("D3D5tr1").removeAttribute("hidden");
    document.getElementById("D3td1").removeAttribute("hidden");
    document.getElementById("D3td1").innerHTML =
      "I hereby certify that my investigation has confirmed that the defects are of structural significance. ";
    document.getElementById("D5td1").setAttribute("hidden", "");
    document.getElementById("D5tr2").setAttribute("hidden", "");
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("rowspan");
    }

    document.getElementById("D5tr2").removeAttribute("hidden");
    document.getElementById("1_3Span").setAttribute("hidden", "");
    document.getElementById("D4tr1").setAttribute("hidden", "");
    document.getElementById("D6tr1").removeAttribute("hidden");
    document.getElementById("D5trtd1").removeAttribute("hidden");
    document.getElementById("D5trtd2").removeAttribute("hidden");
    document.getElementById("D5trtd1").innerHTML =
      "I have checked the structural plans and calculations relating to the above building.";
    document.getElementById("D5trtd2").innerHTML =
      "I have reconstructed the structural plans where possible and carried out a structural appraisal. ";
  } else {
    document.getElementById("D5trtd1").setAttribute("hidden", "");
    document.getElementById("D5trtd2").setAttribute("hidden", "");
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    for (let target of cbox) {
      target.setAttribute("disabled", "");
      target.checked = false;
    }
    document.getElementById("D5tr2").setAttribute("hidden", "");
    document.getElementById("D6tr1").setAttribute("hidden", "");
    document.getElementById("1_3Span").removeAttribute("hidden");
  }
}

function DeclByQualPers_TheRepoAsAtta10_change(element) {
  let select = document.getElementById("DeclByQualPers_TheRepoAsAtta20");
  if (element.checked) {
    select.removeAttribute("disabled");
  } else {
    select.setAttribute("disabled", "");
    select.value = "";
  }
}

function resetPage3D5Decl(pass) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
    document.getElementById("DeclByQualPers_IHereCertThat10"), //datefield
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InArriAtMy10"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  let cbox = document.querySelectorAll("[D5CBox]");
  if (pass) {
    document.getElementById("1_3Span").removeAttribute("hidden");
    document.getElementById("span1").innerHTML =
      "As required under Section 28 of The Building Control Act (Cap 29), I, Er.";
    document.getElementById("span2").innerHTML =
      "have carried out a visual Inspection of the above building from ";
    document.getElementById("span2_5").innerHTML = "I.4";
    document.getElementById("span3").innerHTML =
      "In support of the above, I submit my report on the full structural investigation as well as my own analysis and design calculations relating to the above building, including recommendations for remedial works (if any).";
    document.getElementById("D5trtd2").removeAttribute("hidden");
    document.getElementById("D3D5tr1").removeAttribute("hidden");
    document.getElementById("D5tr2").removeAttribute("hidden");
    document.getElementById("D5trtd1").removeAttribute("hidden");
    document.getElementById("D3td1").setAttribute("hidden", "");
    document.getElementById("D5td1").removeAttribute("hidden");
    document.getElementById("D5trtd1").innerHTML =
      "I have checked the structural plans and calculations relating to the above building and I am satisfied that there are no inadequacies in the key structural elements.";
    document.getElementById("D5trtd2").innerHTML =
      "I have reconstructed the structural plans and I am satisfied that there are no inadequacies in the key structural elements as would be reasonably discovered by such structural appraisal.";
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("rowspan");
      td.setAttribute("style", "padding-top: 19px;");
    }
  } else {
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("style");
    }
    document.getElementById("D5td1").setAttribute("hidden", "");
    document.getElementById("D5trtd2").setAttribute("hidden", "");
    document.getElementById("D3D5tr1").setAttribute("hidden", "");
    document.getElementById("1_3Span").setAttribute("hidden", "");
    document.getElementById("D5tr2").setAttribute("hidden", "");
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    for (let target of cbox) {
      target.checked = false;
    }
  }
}

function mandatoryD5D6checkboxes() {
  let checkBox = document.getElementById("DeclByQualPers_InArriAtMy10");
  let radioD5 = document.getElementById("ApplType_SIC_NonStru");
  let radioD6 = document.getElementById("ApplType_SIC_Stru");
  let checkBoxes = document.querySelectorAll("[D5CBox]");

  if (radioD5.checked || radioD6.checked) {
    if (checkBox.checked) {
      for (let target of checkBoxes) {
        target.setAttribute("mandatory", "");
        target.setAttribute("checked", "");
      }
    } else {
      for (let target of checkBoxes) {
        target.removeAttribute("mandatory");
        target.removeAttribute("checked");
      }
    }
  } else {
    for (let target of checkBoxes) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
      target.setAttribute("disabled", "");
    }
  }
}

function atleastOneD5Checkboxes() {
  let checkBoxes = document.querySelectorAll("[D5CBox]");
  let result = false;

  for (let target of checkBoxes) {
    if (target.checked) {
      result = true;
    }
  }

  if (result == true) {
    for (let target of checkBoxes) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
    }
  } else {
    for (let target of checkBoxes) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
  }
}

function disableD3D5D6checkboxes() {
  let checkBoxes5 = document.querySelectorAll("[D5CBox]");
  let checkBoxes3 = document.querySelectorAll("[D3CBox]");
  for (let target of checkBoxes5) {
    target.setAttribute("disabled", "");
    target.checked = false;
  }
  for (let target of checkBoxes3) {
    target.setAttribute("disabled", "");
    target.checked = false;
  }
}

function DeclByQualPers_InArriAtMy10_change(element) {
  let checkboxes = document.querySelectorAll("[D5CBox]");
  if (element.checked) {
    for (let target of checkboxes) {
      target.removeAttribute("disabled");
    }
  } else {
    for (let target of checkboxes) {
      target.setAttribute("disabled", "");
      target.checked = false;
    }
  }
  mandatoryD5D6checkboxes();
}

function DeclByQualPers_DuriMyInspI30_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers_DuriMyInspI10"),
    document.getElementById("DeclByQualPers_DuriMyInspI20"),
  ];
  if (element.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
    }
  } else {
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function resetPage3D4Decl(pass) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
    document.getElementById("DeclByQualPers_DuriMyInspI10"),
    document.getElementById("DeclByQualPers_DuriMyInspI20"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_DuriMyInspI30"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  if (pass) {
    document.getElementById("span1").innerHTML =
      "As required under Section 28 of The Building Control Act (Cap 29), I, Er.";
    document.getElementById("span2").innerHTML =
      "have carried out a visual inspection of the building from ";
    document.getElementById("span3").innerHTML =
      "In support of the above, I submit my report on the visual inspection of the above building, duly prepared and signed as required under the Act.";
    document.getElementById("D4tr1").removeAttribute("hidden");
    document.getElementById("span2_5").innerHTML = "I.3";
    document.getElementById("1_3Span").removeAttribute("hidden");
  } else {
    document.getElementById("D4tr1").setAttribute("hidden", "");
    document.getElementById("1_3Span").setAttribute("hidden", "");
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}
function resetPage3D3Decl(pass) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_IHereCertThat_NonStruDefe_name']"
  );
  if (!pass) {
    for (let tr of document.querySelectorAll("[group-id='D3tr1']")) {
      tr.setAttribute("hidden", "");
    }
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.removeAttribute("rowspan");
    }
    document.getElementById("D3D5tr1").setAttribute("hidden", "");
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    for (let radio of radios) {
      radio.checked = false;
      radio.setAttribute("disabled", "");
    }
    document.getElementById("D4tr1").setAttribute("hidden", "");
    document.getElementById("1_3Span").setAttribute("hidden", "");
  } else {
    document.getElementById("1_3Span").removeAttribute("hidden");
    document.getElementById("span2_5").innerHTML = "I.3";
    document.getElementById("span1").innerHTML =
      "As required under Section 28 of The Building Control Act (Cap 29), I, Er.";
    document.getElementById("span2").innerHTML =
      "have carried out a visual inspection of the above building from";
    document.getElementById("span3").innerHTML =
      "In support of the above, I submit my report on the visual inspection of the above building, duly prepared and signed as required under the Act.";
    for (let tr of document.querySelectorAll("[group-id='D3tr1']")) {
      tr.removeAttribute("hidden");
    }
    for (let td of document.querySelectorAll("[group-id='D3D5td1']")) {
      td.setAttribute("rowspan", "3");
    }
    document.getElementById("D3D5tr1").removeAttribute("hidden");
    document.getElementById("D3td1").removeAttribute("hidden");
    document.getElementById("D3td1").innerHTML =
      "I hereby certify that the following were visible to me during my inspection:";
    document.getElementById("D5td1").setAttribute("hidden", "");
  }
}

function resetPage3Decl(pass) {
  let textboxes = [
    document.getElementById("DeclByQualPers_IConfThatI10"),
    document.getElementById("DeclByQualPers_IConfThatI30"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_IConfThatI20"),
    document.getElementById("DeclByQualPers_IConfThatI40"),
  ];
  if (!pass) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}

function resetPage3(pass) {
  let fieldsOptional = [
    document.getElementById("Member_Member_Name_OWNMCST10"),
    document.getElementById("Member_Firm_Name_OWNMCST10"),
    document.getElementById("Members_UEN_OWNMCST10"),
    document.getElementById("Member_Address_OWNMCST10"),
    document.getElementById("Member_Mobile_No_OWNMCST10"),
  ];
  let mandFields = [
    document.getElementById("Member_Tel_No_OWNMCST10"),
    document.getElementById("Member_Email_Address1_OWNMCST10"),
  ];
  if (pass) {
    for (let field of mandFields) {
      field.setAttribute("mandatory", "");
    }
  } else {
    for (let field of fieldsOptional) {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
      field.value = "";
    }
    for (let field of mandFields) {
      field.removeAttribute("data-invalid");
      field.removeAttribute("mandatory");
      field.removeAttribute("data-invalid-message");
      field.value = "";
    }
    document.getElementById("PartOfTheOWNER_OWNER_radio").checked = true;
    document.getElementById("PartOfTheOWNER_MSCT_radio").checked = false;
    document
      .getElementById("PartOfTheOWNER_MCSTNo10")
      .setAttribute("disabled", "");
    document
      .getElementById("PartOfTheOWNER_MCSTNo10")
      .removeAttribute("mandatory");
    document.getElementById("PartOfTheOWNER_MCSTNo10").value = "";
  }
}

function resetParticulars(pass) {
  let optionalFields = [
    document.getElementById("MemberRole_Professional_No_PE10"),
    document.getElementById("Member_Firm_Name_PE10"),
    document.getElementById("Members_UEN_PE10"),
    document.getElementById("Member_Address_PE10"),
    document.getElementById("Member_Mobile_No_PE10"),
  ];
  let mandFields = [
    document.getElementById("Member_Member_Name_PE10"),
    document.getElementById("Member_Tel_No_PE10"),
    document.getElementById("Member_Email_Address1_PE10"),
    document.getElementById("MemberRole_Professional_No_PE10"),
    document.getElementById("Member_Address_PE10"),
  ];
  if (pass) {
    for (let field of mandFields) {
      field.setAttribute("mandatory", "");
    }
  } else {
    for (let field of optionalFields) {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
      field.value = "";
    }
    for (let field of mandFields) {
      field.removeAttribute("mandatory");
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
      field.value = "";
    }
  }
}

function PartOfBuil_change(element) {
  let radio = document.getElementById(element.id);
  let singleSm = document.getElementById("smSingle_fields");
  let multipleSm = document.getElementById("smMultiple_fields");
  let single = document.getElementById("PartOfBuil_PSIRefe10");
  validatePsiReference();
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

function DeclByQualPers_AsRequUndeSect40_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers_AsRequUndeSect10"),
    document.getElementById("DeclByQualPers_AsRequUndeSect20"),
    document.getElementById("DeclByQualPers_AsRequUndeSect30"),
  ];
  if (element.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
    }
  } else {
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "";
    }
  }
}

function setMaxDatefield(element, maxDateField) {
  let min = document.getElementById(element.id);
  let max = document.getElementById(maxDateField);
  if (max.value.length != 0) {
    let mmin = new Date(min.value);
    let mmax = new Date(max.value);

    if (mmin.getTime() > mmax.getTime()) {
      showMessage("Invalid date! Date from should not be greater than Date to");
      max.value = "";
      max.setAttribute("min", min.value);
    }
  } else {
    max.setAttribute("min", min.value);
  }
}

function setMinDatefield(element, minDatefield) {
  let min = document.getElementById(minDatefield);
  let max = document.getElementById(element.id);
  if (min.value.length != 0) {
    let mmin = new Date(min.value);
    let mmax = new Date(max.value);
    if (mmin.getTime() > mmax.getTime()) {
      showMessage("Invalid date! Date from should not be greater than Date to");
      max.value = "";
      max.setAttribute("min", min.value);
    }
  } else {
    min.setAttribute("max", max.value);
  }
}

function DeclByQualPers_IHereCertThat20_change(element) {
  let checkboxes = document.querySelectorAll("[D3CBox]");
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat10"); //datefield
  if (element.checked) {
    if (document.getElementById("ApplType_VIT_NonStru").checked) {
      for (let target of checkboxes) {
        target.removeAttribute("disabled");
      }
    } else if (
      document.getElementById("ApplType_SIC_NonStru").checked ||
      document.getElementById("ApplType_VisInspCert").checked
    ) {
      datefield.removeAttribute("disabled");
      datefield.setAttribute("mandatory", "");
    }
  } else {
    if (document.getElementById("ApplType_VIT_NonStru").checked) {
      for (let target of checkboxes) {
        target.setAttribute("disabled", "");
        target.checked = false;
      }
    } else if (
      document.getElementById("ApplType_SIC_NonStru").checked ||
      document.getElementById("ApplType_VisInspCert").checked
    ) {
      datefield.setAttribute("disabled", "");
      datefield.removeAttribute("mandatory");
      datefield.value = "";
    }
  }
  mandatoryD3Checkboxes();
}

function mandatoryD3Checkboxes() {
  let checkBox = document.getElementById("DeclByQualPers_IHereCertThat20");
  let radioD3 = document.getElementById("ApplType_VIT_NonStru");
  let checkBoxes = document.querySelectorAll("[D3CBox]");

  if (checkBox.checked && radioD3.checked) {
    for (let target of checkBoxes) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
  } else {
    for (let target of checkBoxes) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
    }
  }
}

function atleastOneD3Checkboxes() {
  let checkBoxes = document.querySelectorAll("[D3CBox]");
  let hiddenrad = document.getElementById("RADIO2");
  let result = false;

  for (let target of checkBoxes) {
    if (target.checked) {
      result = true;
    }
  }

  if (result == true) {
    hiddenrad.checked = true;
    for (let target of checkBoxes) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
    }
    for (let target of checkBoxes) {
      if (!target.checked) {
        target.setAttribute("disabled", "");
      }
    }
  } else {
    hiddenrad.checked = false;
    for (let target of checkBoxes) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
      target.removeAttribute("disabled");
    }
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

function PartOfBuilSMSMB_change(element) {
  let radio = document.getElementById(element.id);
  let radios = document.querySelectorAll("[name='PartOfBuilSMSMB_name']");
  let hiddenrad = document.getElementById("RADIO1");
  let hiddenrad1 = document.getElementById("RADIO2");
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
  validatePsiReference();
  switch (radio.id) {
    case "PartOfBuil_PSIRefe10":
      hiddenrad.checked;
      hiddenrad1.checked;
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
      hiddenrad.checked = false;
      hiddenrad1.checked = false;
      for (let field of smbFields) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      for (let field of smFields) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      lastField.removeAttribute("disabled");
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
  let textbox = document.getElementById("PartOfTheOWNER_MCSTNo10");
  let col = document.getElementById("PartOfTheOWNER_MCSTNo10_hide");
  switch (radio.id) {
    case "PartOfTheOWNER_OWNER_radio":
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      document.getElementById("mcstno").innerHTML = "";
      col.setAttribute("hidden", "");
      break;
    case "PartOfTheOWNER_MSCT_radio":
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
      document.getElementById("mcstno").innerHTML = "No.*";
      col.removeAttribute("hidden");
      break;
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

function DeclByQualPers_IConfThatI20_change(element) {
  let textbox = document.getElementById("DeclByQualPers_IConfThatI10");

  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function DeclByQualPers_IConfThatI40_change(element) {
  let textbox = document.getElementById("DeclByQualPers_IConfThatI30");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
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

function mandatoryCheckboxesDeclaration(elements) {
  let removeMandatory = [
    document.getElementById("DeclByQualPers_IConfThatI20"),
    document.getElementById("DeclByQualPers_IConfThatI40"),
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
    document.getElementById("DeclByQualPers_DuriMyInspI30"),
    document.getElementById("DeclByQualPers_InArriAtMy10"),
    document.getElementById("DeclByQualPers_TheRepoAsAtta10"),
  ];
  console.log(removeMandatory);

  //remove Mandatories
  for (let target of removeMandatory) {
    target.removeAttribute("mandatory");
    target.removeAttribute("checked");
    target.checked = false;
  }

  //set Mandatory checkboxes
  for (let target of elements) {
    target.setAttribute("mandatory", "");
    target.setAttribute("checked", "");
  }
}

function AppTypeChange(element) {
  let D2 = [
    document.getElementById("DeclByQualPers_IConfThatI20"),
    document.getElementById("DeclByQualPers_IConfThatI40"),
  ];
  let D3 = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  let D4 = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_DuriMyInspI30"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  let D5 = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InArriAtMy10"),
    document.getElementById("DeclByQualPers_InSuppOfThe10"),
  ];
  let D6 = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
    document.getElementById("DeclByQualPers_InArriAtMy10"),
    document.getElementById("DeclByQualPers_TheRepoAsAtta10"),
  ];
  let D7 = [
    document.getElementById("DeclByQualPers_AsRequUndeSect40"),
    document.getElementById("DeclByQualPers_IHereCertThat20"),
  ];

  //D2
  if (element == "ApplType_ApptStruEngg") {
    mandatoryCheckboxesDeclaration(D2);
  }
  //D3
  else if (element == "ApplType_VIT_NonStru") {
    mandatoryCheckboxesDeclaration(D3);
  }
  //D4
  else if (element == "ApplType_VIT_Stru") {
    mandatoryCheckboxesDeclaration(D4);
  }
  //D5
  else if (element == "ApplType_SIC_NonStru") {
    mandatoryCheckboxesDeclaration(D5);
  }
  //D6
  else if (element == "ApplType_SIC_Stru") {
    mandatoryCheckboxesDeclaration(D6);
  }
  //D7
  else if (element == "ApplType_VisInspCert") {
    mandatoryCheckboxesDeclaration(D7);
  }

  //mandatories
  mandatoryD3Checkboxes();
  mandatoryD5D6checkboxes();

  //disabled Elements
  disableD3D5D6checkboxes();
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

function validatePsiReference() {
  let field1 = document.getElementById("PartOfBuil_NotiRefeNo10");
  let field2 = document.getElementById("PartOfBuil_NotiRefeNo20");
  let field3 = document.getElementById("PartOfBuil_NotiRefeNo30");
  let field4 = document.getElementById("PartOfBuil_NotiRefeNo40");
  let field5 = document.getElementById("PartOfBuil_NotiRefeNo50");
  let field6 = document.getElementById("PartOfBuil_NotiRefeNo60");
  let field7 = document.getElementById("PartOfBuil_NotiRefeNo70");
  let psiRad = document.getElementById("PartOfBuil_PSIRefe10");
  let singleRad = document.getElementById("PartOfBuil_SingOwne10");
  let multiRad = document.getElementById("PartOfBuil_MultOwne10");
  let agencyURL = jsonData["agencyUrl10"].url;

  if (psiRad.checked && singleRad.checked) {
    //Single
    if (field1.value != "" && field2.value != "" && field3.value != "") {
      removeValidationsPsiReference();

      let psiReference =
        "psiReference=" + field1.value + field2.value + field3.value;
      jsonData["agencyUrl10"].params = psiReference;
      let dataResponse = ipcRenderer.sendSync(
        "client-request",
        "GET",
        agencyURL,
        psiReference
      );

      if (dataResponse === 501) {
        //
      } else {
        if (typeof dataResponse === "object") {
          if ("Y" == dataResponse.isRecordExist) {
            field1.setAttribute("data-valid", "");
            field2.setAttribute("data-valid", "");
            field3.setAttribute("data-valid", "");
            field2.setAttribute("inline", "2");
          } else if ("N" == dataResponse.isRecordExist) {
            field1.setAttribute("data-invalid", "");
            field2.setAttribute("data-invalid", "");
            field3.setAttribute("data-invalid", "");
            field2.setAttribute("inline", "2");
          }
        }
      }
    }
  } else if (psiRad.checked && multiRad.checked) {
    //Multi
    if (field4.value != "" && field5.value != "" && field6.value != "") {
      removeValidationsPsiReference();

      let psiReference =
        "psiReference=" +
        field4.value +
        field5.value +
        field6.value +
        field7.value;
      jsonData["agencyUrl10"].params = psiReference;
      let dataResponse = ipcRenderer.sendSync(
        "client-request",
        "GET",
        agencyURL,
        psiReference
      );

      if (dataResponse === 501) {
        //
      } else {
        if (typeof dataResponse === "object") {
          if ("Y" == dataResponse.isRecordExist) {
            field4.setAttribute("data-valid", "");
            field5.setAttribute("data-valid", "");
            field6.setAttribute("data-valid", "");
            if (field7.value) field7.setAttribute("data-valid", "");
            field5.setAttribute("inline", "2");
          } else if ("N" == dataResponse.isRecordExist) {
            field4.setAttribute("data-invalid", "");
            field5.setAttribute("data-invalid", "");
            field6.setAttribute("data-invalid", "");
            if (field7.value) field7.setAttribute("data-invalid", "");
            field5.setAttribute("inline", "2");
          }
        }
      }
    }
  }
}

function removeValidationsPsiReference() {
  let field1 = document.getElementById("PartOfBuil_NotiRefeNo10");
  let field2 = document.getElementById("PartOfBuil_NotiRefeNo20");
  let field3 = document.getElementById("PartOfBuil_NotiRefeNo30");
  let field4 = document.getElementById("PartOfBuil_NotiRefeNo40");
  let field5 = document.getElementById("PartOfBuil_NotiRefeNo50");
  let field6 = document.getElementById("PartOfBuil_NotiRefeNo60");
  let field7 = document.getElementById("PartOfBuil_NotiRefeNo70");
  removeValidations(field1);
  removeValidations(field2);
  removeValidations(field3);
  removeValidations(field4);
  removeValidations(field5);
  removeValidations(field6);
  removeValidations(field7);
  field2.setAttribute("inline", "2");
  field5.setAttribute("inline", "2");
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
          if (
            [
              "PartOfBuil_SMBRefe20",
              "PartOfBuil_SMBRefe30",
              "PartOfBuil_SMBRefe40",
              "PartOfBuil_SMBRefe50",
            ].includes(id)
          ) {
            jsonData[id] = +targetElement.value + "";
          } else {
            jsonData[id] = targetElement.value;
          }
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
