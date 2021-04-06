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

function ToAgency_id_change(element) {
  let textarea = document.getElementById("Addr20");
  if (element.value.trim() === "BCA") {
    textarea.value = `Commisioner of Building Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550`;
  } else {
    textarea.value = `Defence Science & Technology Agency
Building & Infrastructure 
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
  }
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
    let textbox = targetDiv[targetDiv.length - 1].querySelectorAll(
      "cn2-textbox"
    );
    for (let target of select) {
      target.value = "ST";
    }
    for (let target of textbox) {
      if (target.hasAttribute("data-invalid")) {
        target.removeAttribute("data-invalid");
        target.removeAttribute("data-invalid-message");
      }
    }
  }
}

function DeclByQualPers_IHereCertThat20_change(element) {
  let checkbox = document.getElementById(element.id);
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat10");
  if (checkbox.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function removeAttMandatoryCheck(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function setCertSupePiliTable(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat20");
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat10");
  if (pass) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;

    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function setCertSupeStruQPTable(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat30");
  if (pass) {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
  }
}

function setSubmCertRecoPlanTable(pass) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_ITheQualPers_name']"
  );
  let table1 = document.getElementById("CertSupeStruQPTable10");
  let table2 = document.getElementById("SubmCertRecoPlanTable20");
  if (pass) {
    for (let radio of radios) {
      radio.setAttribute("mandatory", "");
      radio.setAttribute("checked", "");
    }
  } else {
    for (let radio of radios) {
      radio.removeAttribute("mandatory");
      radio.removeAttribute("checked");
      radio.checked = false;
    }
    setCertSupeStruQPTable10(false);
    setSubmCertRecoPlanTable20(false);
    table1.setAttribute("hidden", "");
    table2.setAttribute("hidden", "");
  }
}

function setCertSupePiliWorkTable(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat50");
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat40");
  if (pass) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;

    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function setCertSupeGeotBuilTable(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat60");
  if (pass) {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
  }
}

function DeclByQualPers_IHereCertThat80_change(element) {
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat70");
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory");
    datefield.value = "";
  }
}

function setDeclQualPersSuperGeoTable1(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat80");
  let datefield = document.getElementById("DeclByQualPers_IHereCertThat70");
  if (pass) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;

    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function setDeclQualPersSuperGeoTable2(pass) {
  let checkbox = document.getElementById("DeclByQualPers_IHereCertThat90");
  if (pass) {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
  }
}

function setDeclQualPersGeoAspGeoBuilTable(pass) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_ITheQualPers2_name']"
  );
  let table1 = document.getElementById("DeclQualPersGeoAspGeoBuilTableA");
  let table2 = document.getElementById("DeclQualPersGeoAspGeoBuilTableB");
  if (pass) {
    for (let radio of radios) {
      radio.setAttribute("mandatory", "");
      radio.setAttribute("checked", "");
    }
  } else {
    for (let radio of radios) {
      radio.removeAttribute("mandatory");
      radio.removeAttribute("checked");
      radio.checked = false;
    }
    DeclQualPersGeoAspGeoBuilTableA(false);
    DeclQualPersGeoAspGeoBuilTableB(false);
    table1.setAttribute("hidden", "");
    table2.setAttribute("hidden", "");
  }
}

function DeclByQualPers_IHereCertThat50_change(element) {
  let textbox = document.getElementById("DeclByQualPers_IHereCertThat40");
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    checkbox.checked = false;
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function resetPage3() {
  document.getElementById("Project_Title20").value = document.getElementById(
    "Project_Title10"
  ).value;
  document.getElementById("PartOfAppl_Rema10").value = "";
  let textarea = document.getElementById("PartOfAppl_PartCompOfWork20");
  textarea.removeAttribute("mandatory");
  textarea.setAttribute("hidden", "");
  textarea.value = "";
  let sno = document.getElementById("PartOfAppl_StruPlanOfProjC10");
  let radios = document.querySelectorAll("[name='PartOfAppl_name']");
  let parent = "stForm";
  let tempDiv = document.getElementById(parent).querySelectorAll("div");
  for (let radio of radios) {
    radio.checked = false;
    radio.setAttribute("mandatory", "");
    radio.setAttribute("checked", "");
  }
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "A1", parent);
      div
        .querySelector("[prefix='PartOfAppl_StruPlanOfProjC']")
        .removeAttribute("data-invalid");
      div
        .querySelector("[prefix='PartOfAppl_StruPlanOfProjC']")
        .removeAttribute("data-invalid-message");
      div.querySelector("[prefix='PartOfAppl_StruPlanOfProjC']").value = "";
    }
  }
  sno.removeAttribute("data-invalid");
  sno.removeAttribute("data-invalid-message");
  sno.value = "";
  document.getElementById("delete1").setAttribute("disabled", "");
}

function resetPage4() {
  let parentDiv = document.getElementById("particularsContainer");
  let textBox = parentDiv.getElementsByTagName("cn2-textbox");
  let selectBox = parentDiv.getElementsByTagName("cn2-select");
  let textArea = parentDiv.getElementsByTagName("cn2-textarea");

  for (let text of textBox) {
    text.value = "";
  }
  for (let select of selectBox) {
    select.value = "";
    select.removeAttribute("mandatory");
    select.setAttribute("mandatory", "");
  }
  for (let area of textArea) {
    area.value = "";
  }
}

function resetPage5() {
  let parentDiv = document.getElementById("particularsContainer2");
  let textBox = parentDiv.getElementsByTagName("cn2-textbox");
  let selectBox = parentDiv.getElementsByTagName("cn2-select");
  let textArea = parentDiv.getElementsByTagName("cn2-textarea");

  for (let text of textBox) {
    text.value = "";
  }
  for (let select of selectBox) {
    select.value = "";
    select.removeAttribute("mandatory");
    select.setAttribute("mandatory", "");
  }
  for (let area of textArea) {
    area.value = "";
  }
}

function resetParticulars() {
  let fields = document.querySelectorAll("[pe-group]");

  for (let field of fields) {
    field.value = "";
  }
  document.getElementById("Members_UEN_HDBPE20").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_HDBPE20")
    .removeAttribute("data-invalid-message");
}

function ApplType_change(element) {
  let string1 =
    "Particulars of Structural Works to which this Certificate relates";
  let string2 =
    "Particulars and Declaration by Qualified Person for Supervision of Piling/Structural Works";
  let string3 =
    "Particulars of Qualified Person for Supervision of Piling/Structural Works";
  let string4 = "Declaration by Qualified Person for Structural Works";
  let string5 =
    "Particulars and Declaration by Qualified Person for Structural works";
  let string6 =
    "Particulars of Geotechnical Building Works to which this Certificate relates";
  let string7 =
    "Section II Particulars of Qualified Person for Structural Works";
  let string8 =
    "Section III Particulars of Qualified Person for Supervision of Geotechnical Aspects of Geotechnical Building Works";
  let string9 =
    "Section III Particulars of Qualified Person for Geotechnical Aspects of Geotechnical Building Works";
  let string10 =
    "Declaration by Qualified Person for Supervision of Geotechnical Aspects of Geotechnical Building Works*";
  let string11 =
    "Declaration by Qualified Person for Geotechnical Aspects of Geotechnical Building Works";
  let string12 =
    "Particulars and Declaration by Qualified Person for Supervision of Geotechnical Aspects of Geotechnical Building Works";
  let string13 =
    "Particulars and Declaration by Qualified Person for Geotechnical Aspects of Geotechnical Building Works";
  let string14 =
    `CERTIFICATE OF SUPERVISION OF PILING WORKS AND<BR>NOTICE OF COMPLETION BY THE QUALIFIED PERSON FOR STRUCTURAL WORKS<BR/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 23(1)(c) OF THE BUILDING CONTROL REGULATIONS]`;
  // let string15 =
  //   `AS-BUILT ‘C’ FORMS<BR>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 23(1)(d) OF THE BUILDING CONTROL REGULATIONS]`;
  let string15 =
    `CERTIFICATE OF SUPERVISION OF STRUCTURAL WORKS BY<BR/>THE QUALIFIED PERSON FOR STRUCTURAL WORKS<br/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 23(1)(d) OF THE BUILDING CONTROL REGULATIONS]`;
  let string16 =
    `SUBMISSION CERTIFICATE OF RECORD STRUCTURAL PLANS/CALCULATIONS<BR/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 18(3) OF THE BUILDING CONTROL REGULATIONS]`;
  let string17 =
    `CERTIFICATE OF SUPERVISION OF PILING WORKS AND<BR/>NOTICE OF COMPLETION FOR GEOTECHNICAL BUILDING WORKS<BR/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 23(1)(c) OF THE BUILDING CONTROL REGULATIONS]`;
  let string18 =
    `CERTIFICATE OF SUPERVISION OF GEOTECHNICAL BUILDING WORKS<BR/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 23(1)(d) OF THE BUILDING CONTROL REGULATIONS]`;
  let string19 =
    `SUBMISSION CERTIFICATE OF RECORD GEOTECHNICAL BUILDING PLANS/CALCULATIONS<BR/>[THE BUILDING CONTROL ACT (CAP 29)]<BR/>[REGULATION 18(3) OF THE BUILDING CONTROL REGULATIONS]`

  let page3H2 = document.getElementById("Page3_h2Section_id");
  let page4H2 = document.getElementById("Page4_h2Section_id");
  let page5H2 = document.getElementById("Section3H2_Id");
  let page3 = document.querySelector("[target='page3']");
  let page4 = document.querySelector("[target='page4']");
  let page5 = document.querySelector("[target='page5']");
  let section2H2 = document.getElementById("Section2DeclarationH2");
  let section3H2 = document.getElementById("Page5Section3Decl_h2");
  let table1 = document.getElementById("CertSupePiliTable");
  let table2 = document.getElementById("CertSupeStruQPTable");
  let table3 = document.getElementById("SubmCertRecoPlanTable");
  let table4 = document.getElementById("CertSupePiliWorkTable");
  let table5 = document.getElementById("CertSupeGeotBuilTable");
  let partCont = document.getElementById("particularsContainer");
  let declCont = document.getElementById("DeclContainer");

  let table6 = document.getElementById("DeclQualPersSuperGeoTable1");
  let table7 = document.getElementById("DeclQualPersSuperGeoTable2");
  let table8 = document.getElementById("DeclQualPersGeoAspGeoBuilTable");
  let table9 = document.getElementById("PartGeotBuilWorkTable");

  setCertSupePiliTable(false);
  setCertSupeStruQPTable(false);
  setSubmCertRecoPlanTable(false);
  setCertSupePiliWorkTable(false);
  setCertSupeGeotBuilTable(false);

  resetParticulars();

  setDeclQualPersSuperGeoTable1(false);
  setDeclQualPersSuperGeoTable2(false);
  setDeclQualPersGeoAspGeoBuilTable(false);

  resetPage3();
  resetPage4();
  resetPage5();

  document.getElementById("PartOfAppl_AnyExcaOrOthe10").checked = false
  document.getElementById("PartOfAppl_AnyBuilWorkFor10").checked = false
  document.getElementById("PartOfAppl_AnyTypeOfFoun10").checked = false

  document.getElementById("PartOfAppl_AnyExcaOrOthe10").removeAttribute("checked")
  document.getElementById("PartOfAppl_AnyBuilWorkFor10").removeAttribute("checked")
  document.getElementById("PartOfAppl_AnyTypeOfFoun10").removeAttribute("checked")

  document.getElementById("PartOfAppl_AnyExcaOrOthe10").removeAttribute("mandatory")
  document.getElementById("PartOfAppl_AnyBuilWorkFor10").removeAttribute("mandatory")
  document.getElementById("PartOfAppl_AnyTypeOfFoun10").removeAttribute("mandatory")

  switch (element.id) {
    case "ApplType_QPCTPW":
      // Certificate of Supervision of Piling Works and Notice of Completion by the Qualified Person for Structural Works
      document.querySelector("cn2-master-head").setAttribute("title", string14);
      page3.setAttribute("label", string1);
      page3H2.innerHTML = "Section I " + string1;
      page4.setAttribute("label", string2);
      page4H2.innerHTML = "Section II " + string3;
      section2H2.innerHTML = "Declaration by Qualified Person*";
      jsonData["FormName10"] = "BCA-BE-QPCTPW";
      table1.removeAttribute("hidden");
      table2.setAttribute("hidden", "");
      table3.setAttribute("hidden", "");
      table4.setAttribute("hidden", "");
      table5.setAttribute("hidden", "");

      partCont.style.marginBottom = "20px";
      declCont.removeAttribute("hidden");

      setCertSupePiliTable(true);

      page5.setAttribute("hidden", "");
      table6.setAttribute("hidden", "");
      table7.setAttribute("hidden", "");
      table8.setAttribute("hidden", "");
      table9.setAttribute("hidden", "");
      break;
    case "ApplType_QPCTSSW":
      // Certificate of Supervision of Structural Works by the Qualified Person for Structural Works
      document.querySelector("cn2-master-head").setAttribute("title", string15);
      page3.setAttribute("label", string1);
      page3H2.innerHTML = "Section I " + string1;
      page4.setAttribute("label", string2);
      page4H2.innerHTML = "Section II " + string3;
      section2H2.innerHTML = "Declaration by Qualified Person*";
      jsonData["FormName10"] = "BCA-BE-QPCTSSW";
      table1.setAttribute("hidden", "");
      table2.removeAttribute("hidden");
      table3.setAttribute("hidden", "");
      table4.setAttribute("hidden", "");
      table5.setAttribute("hidden", "");
      partCont.style.marginBottom = "20px";
      declCont.removeAttribute("hidden");

      setCertSupeStruQPTable(true);

      page5.setAttribute("hidden", "");
      table6.setAttribute("hidden", "");
      table7.setAttribute("hidden", "");
      table8.setAttribute("hidden", "");
      table9.setAttribute("hidden", "");

      break;
    case "ApplType_CTASST":
      // Submission Certificate of Record Structural Plans/Calculations
      document.querySelector("cn2-master-head").setAttribute("title", string16);
      section2H2.innerHTML = string4 + " *";
      page3.setAttribute("label", string1);
      page3H2.innerHTML = "Section I " + string1;
      page4.setAttribute("label", string5);
      page4H2.innerHTML = string7;
      jsonData["FormName10"] = "BCA-BE-CTASST";
      table1.setAttribute("hidden", "");
      table2.setAttribute("hidden", "");
      table3.removeAttribute("hidden");
      table4.setAttribute("hidden", "");
      table5.setAttribute("hidden", "");
      partCont.style.marginBottom = "20px";
      declCont.removeAttribute("hidden");

      setSubmCertRecoPlanTable(true);

      page5.setAttribute("hidden", "");
      table6.setAttribute("hidden", "");
      table7.setAttribute("hidden", "");
      table8.setAttribute("hidden", "");
      table9.setAttribute("hidden", "");

      break;
    case "ApplType_QPCTPW_GBW":
      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("checked", "")

      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("mandatory", "")
      resetPage3();
      resetPage4();
      resetPage5();
      //Certificate of Supervision of Piling Works and Notice of Completion for Geotechnical Building Works.
      document.querySelector("cn2-master-head").setAttribute("title", string17);
      page3.setAttribute("label", string6);
      page3H2.innerHTML = "Section I " + string6;
      page4.setAttribute("label", string2);
      page4H2.innerHTML = "Section II " + string3;
      section2H2.innerHTML = string4;
      page5H2.innerHTML = string8;
      jsonData["FormName10"] = "BCA-BE-QPCTPW-GBW";
      table1.setAttribute("hidden", "");
      table2.setAttribute("hidden", "");
      table3.setAttribute("hidden", "");
      table4.removeAttribute("hidden");
      table5.setAttribute("hidden", "");
      partCont.style.marginBottom = "20px";
      declCont.removeAttribute("hidden");
      section3H2.innerHTML = string10;

      setCertSupePiliWorkTable(true);

      page5.removeAttribute("hidden");
      page5.setAttribute("label", string12);

      table6.removeAttribute("hidden");
      table7.setAttribute("hidden", "");
      table8.setAttribute("hidden", "");
      table9.removeAttribute("hidden");

      setDeclQualPersSuperGeoTable1(true);

      break;
    case "ApplType_QPCTSSW_GBW":
      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("checked", "")

      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("mandatory", "")
      // Certificate of Supervision of Geotechnical Building Works
      document.querySelector("cn2-master-head").setAttribute("title", string18);
      page5H2.innerHTML = string8;
      page3.setAttribute("label", string6);
      page3H2.innerHTML = "Section I " + string6;
      page4.setAttribute("label", string2);
      page4H2.innerHTML = "Section II " + string3;
      section2H2.innerHTML = string4;
      jsonData["FormName10"] = "BCA-BE-QPCTSSW-GBW";
      table1.setAttribute("hidden", "");
      table2.setAttribute("hidden", "");
      table3.setAttribute("hidden", "");
      table4.setAttribute("hidden", "");
      table5.removeAttribute("hidden");
      partCont.style.marginBottom = "20px";
      declCont.removeAttribute("hidden");
      section3H2.innerHTML = string10;

      setCertSupeGeotBuilTable(true);

      page5.removeAttribute("hidden");
      page5.setAttribute("label", string12);

      table6.setAttribute("hidden", "");
      table7.removeAttribute("hidden");
      table8.setAttribute("hidden", "");
      table9.removeAttribute("hidden");

      setDeclQualPersSuperGeoTable2(true);

      break;
    case "ApplType_CTASST_GBW":
      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("checked", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("checked", "")

      document.getElementById("PartOfAppl_AnyExcaOrOthe10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyBuilWorkFor10").setAttribute("mandatory", "")
      document.getElementById("PartOfAppl_AnyTypeOfFoun10").setAttribute("mandatory", "")
      resetPage3();
      resetPage4();
      resetPage5();
      //Submission Certificate of Record Geotechnical Building Plans/Calculations.
      document.querySelector("cn2-master-head").setAttribute("title", string19);
      page3.setAttribute("label", string6);
      page3H2.innerHTML = "Section I " + string6;
      page4.setAttribute("label", string5);
      page4H2.innerHTML = string7;
      page5H2.innerHTML = string9;
      jsonData["FormName10"] = "BCA-BE-CTASST-GBW";
      table1.setAttribute("hidden", "");
      table2.setAttribute("hidden", "");
      table3.removeAttribute("hidden");
      table4.setAttribute("hidden", "");
      table5.setAttribute("hidden", "");
      //partCont.style.marginBottom = "65px";
      declCont.removeAttribute("hidden");
      section3H2.innerHTML = string11;

      setSubmCertRecoPlanTable(true);

      page5.removeAttribute("hidden");
      page5.setAttribute("label", string13);

      table6.setAttribute("hidden", "");
      table7.setAttribute("hidden", "");
      table8.removeAttribute("hidden");
      table9.removeAttribute("hidden");

      setDeclQualPersGeoAspGeoBuilTable(true);
      break;
  }
}

function PartOfAppl_change(element) {
  let textarea = document.getElementById("PartOfAppl_PartCompOfWork20");
  let radios = document.querySelectorAll("[name='PartOfAppl_name']");
  let hiddenrad = document.getElementById("RADIO1");
  for (let radio of radios) {
    radio.removeAttribute("mandatory");
    radio.removeAttribute("checked");
  }
  switch (element.id) {
    case "PartOfAppl_FullCompOfWork10":
      textarea.removeAttribute("mandatory");
      textarea.setAttribute("disabled", "");
      textarea.setAttribute("hidden", "");
      textarea.value = "";
      hiddenrad.checked = false;
      break;
    case "PartOfAppl_PartCompOfWork10":
      hiddenrad.checked = true;
      textarea.setAttribute("mandatory", "");
      textarea.removeAttribute("disabled");
      textarea.removeAttribute("hidden");
      break;
  }
}

function DeclByQualPers_ITheQualPers_change(element) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_ITheQualPers_name']"
  );
  let table1 = document.getElementById("CertSupeStruQPTable10");
  let table2 = document.getElementById("SubmCertRecoPlanTable20");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  switch (element.id) {
    case "DeclByQualPers_ITheQualPers_TheRecoDetaStru10":
      table1.removeAttribute("hidden");
      table2.removeAttribute("hidden");
      setCertSupeStruQPTable10(true);
      setSubmCertRecoPlanTable20(true);
      break;
    case "DeclByQualPers_ITheQualPers_TherAreNoDepa10":
      table2.setAttribute("hidden", "");
      table1.setAttribute("hidden", "");
      setCertSupeStruQPTable10(false);
      setSubmCertRecoPlanTable20(false);
      break;
    default:
      console.log("Error! Id not found");
      break;
  }
}

function DeclByQualPers_ITheQualPers2_change(element) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_ITheQualPers2_name']"
  );
  let table1 = document.getElementById("DeclQualPersGeoAspGeoBuilTableA");
  let table2 = document.getElementById("DeclQualPersGeoAspGeoBuilTableB");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  switch (element.id) {
    case "DeclByQualPers_ITheQualPers_TheRecoDetaStru20":
      table1.removeAttribute("hidden");
      table2.removeAttribute("hidden");
      DeclQualPersGeoAspGeoBuilTableA(true);
      DeclQualPersGeoAspGeoBuilTableB(true);
      break;
    case "DeclByQualPers_ITheQualPers_TherAreNoDepa20":
      table2.setAttribute("hidden", "");
      table1.setAttribute("hidden", "");
      DeclQualPersGeoAspGeoBuilTableA(false);
      DeclQualPersGeoAspGeoBuilTableB(false);
      break;
    default:
      console.log("Error! Id not found");
      break;
  }
}

function setSubmCertRecoPlanTable20(pass) {
  let textbox = document.getElementById("DeclByQualPers_InAccoWithRegu10");
  let textarea = document.getElementById("DeclByQualPers_TotalNumbOfPage10");
  let remarks = document.getElementById("DeclByQualPers_Rema10");
  let mandCheckboxes = [
    document.getElementById("DeclByQualPers_InAccoWithRegu20"),
    document.getElementById("DeclByQualPers_IFurtCertThat20"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru20"),
    document.getElementById("DeclByQualPers_TotaNumbOfPage20"),
  ];
  let mandTextbox = [
    document.getElementById("DeclByQualPers_IFurtCertThat10"),
    document.getElementById("DeclByQualPers_TotaNumbOfStru10"),
  ];
  if (pass) {
    for (let checkbox of mandCheckboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    for (let checkbox of mandCheckboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
    for (let textbox2 of mandTextbox) {
      textbox2.setAttribute("disabled", "");
      textbox2.removeAttribute("mandatory");
      textbox2.value = "";
    }
    textbox.value = "";
    textarea.setAttribute("disabled", "");
    textarea.value = "";
    remarks.value = "";
  }
}

function setCertSupeStruQPTable10(pass) {
  let checkbox = document.getElementById("DeclByQualPers_ICertThatTo20");
  let textbox = document.getElementById("DeclByQualPers_ICertThatTo10");
  if (pass) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
    textbox.value = "";
  }
}

function DeclQualPersGeoAspGeoBuilTableA(pass) {
  let checkbox = document.getElementById("DeclByQual_CertOfRecoPlan20");
  let textbox = document.getElementById("DeclByQual_CertOfRecoPlan10");
  if (pass) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
    textbox.value = "";
  }
}

function DeclQualPersGeoAspGeoBuilTableB(pass) {
  let textbox = document.getElementById("DeclByQual_InAccoWithRegu10");
  let textarea = document.getElementById("DeclByQual_TotaNumbOfPage10");
  let remarks = document.getElementById("FIELD5");
  let mandCheckboxes = [
    document.getElementById("DeclByQual_InAccoWithRegu20"),
    document.getElementById("DeclByQual_IFurtCertThat20"),
    document.getElementById("DeclByQual_TotaNumbOfInde20"),
    document.getElementById("DeclByQual_TotaNumbOfPage20"),
  ];
  let mandTextbox = [
    document.getElementById("DeclByQual_IFurtCertThat10"),
    document.getElementById("DeclByQual_TotaNumbOfInde10"),
    document.getElementById("DeclByQual_TotaNumbOfPage10")
  ];
  if (pass) {
    for (let checkbox of mandCheckboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  } else {
    for (let checkbox of mandCheckboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
    for (let textbox2 of mandTextbox) {
      textbox2.setAttribute("disabled", "");
      textbox2.removeAttribute("mandatory");
      textbox2.value = "";
    }
    textbox.value = "";
    textarea.setAttribute("disabled", "");
    textarea.value = "";
    remarks.value = "";
  }
}

function Member_Member_Name_HDBPE20_change() {
  let textarea = document.getElementById("Member_Address_HDBPE20");
  let value = document
    .getElementById("Member_Member_Name_HDBPE20")
    .valueLabel.trim();
  let check1 = document.getElementById("DeclByQual_CertOfRecoPlan20");
  let check2 = document.getElementById("DeclByQual_InAccoWithRegu20");
  if (check1.checked && check2.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQual_CertOfRecoPlan10").value = value;
      document.getElementById("DeclByQual_InAccoWithRegu10").value = value;
    }
  } else if (check1.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQual_CertOfRecoPlan10").value = value;
    }
  } else if (check2.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQual_InAccoWithRegu10").value = value;
    }
  }

  textarea.adjustHeigth();
}

function DeclByQualPers_ICertThatTo20_change(element) {
  let textbox = document.getElementById("DeclByQualPers_ICertThatTo10");
  let checkbox = document.getElementById(element.id);
  let value = document
    .getElementById("Member_Member_Name_HDBPE10")
    .valueLabel.trim();
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    if (value !== "Please Select") {
      textbox.value = value;
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.value = "";
  }
}

function DeclByQual_CertOfRecoPlan20_change(element) {
  let textbox = document.getElementById("DeclByQual_CertOfRecoPlan10");
  let checkbox = document.getElementById(element.id);
  let value = document
    .getElementById("Member_Member_Name_HDBPE20")
    .valueLabel.trim();
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    if (value !== "Please Select") {
      textbox.value = value;
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.value = "";
  }
}

function DeclByQual_IFurtCertThat20_change(element) {
  let textbox = document.getElementById("DeclByQual_IFurtCertThat10");
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function DeclByQual_TotaNumbOfPage20_change(element) {
  let textbox = document.getElementById("DeclByQual_TotaNumbOfPage10");
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function DeclByQual_TotaNumbOfInde20_change(element) {
  let textbox = document.getElementById("DeclByQual_TotaNumbOfInde10");
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function DeclByQual_InAccoWithRegu20_change(element) {
  let textbox = document.getElementById("DeclByQual_InAccoWithRegu10");
  let checkbox = document.getElementById(element.id);
  let value = document
    .getElementById("Member_Member_Name_HDBPE20")
    .valueLabel.trim();
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    if (value !== "Please Select") {
      textbox.value = value;
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.value = "";
  }
}

function DeclByQualPers_InAccoWithRegu20_change(element) {
  let textbox = document.getElementById("DeclByQualPers_InAccoWithRegu10");
  let checkbox = document.getElementById(element.id);
  let value = document
    .getElementById("Member_Member_Name_HDBPE10")
    .valueLabel.trim();
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    if (value !== "Please Select") {
      textbox.value = value;
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    textbox.value = "";
  }
}

function Member_Member_Name_HDBPE10_change(element) {
  let textarea = document.getElementById("Member_Address_HDBPE10");
  let checkbox1 = document.getElementById("DeclByQualPers_ICertThatTo20");
  let checkbox2 = document.getElementById("DeclByQualPers_InAccoWithRegu20");
  let value = document
    .getElementById("Member_Member_Name_HDBPE10")
    .valueLabel.trim();
  if (checkbox1.checked && checkbox2.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQualPers_ICertThatTo10").value = value;
      document.getElementById("DeclByQualPers_InAccoWithRegu10").value = value;
    }
  } else if (checkbox1.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQualPers_ICertThatTo10").value = value;
    }
  } else if (checkbox2.checked) {
    if (value !== "Please Select") {
      document.getElementById("DeclByQualPers_InAccoWithRegu10").value = value;
    }
  }

  textarea.adjustHeigth();
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function DeclByQualPers_IFurtCertThat20_change(element, textbox) {
  textbox = document.getElementById(textbox);
  checkBox = document.getElementById(element.id)

  if (element.checked) {
    checkBox.removeAttribute("checked")
    checkBox.removeAttribute("mandatory")
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    checkBox.setAttribute("checked", "")
    checkBox.setAttribute("mandatory", "")
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function DeclByQualPers_TotaNumbOfStru20_change(element, textbox) {
  textbox = document.getElementById(textbox);
  checkBox = document.getElementById(element.id)

  if (element.checked) {
    checkBox.removeAttribute("checked")
    checkBox.removeAttribute("mandatory")
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    checkBox.setAttribute("checked", "")
    checkBox.setAttribute("mandatory", "")
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function DeclByQualPers_TotaNumbOfPage20_change(element, textbox) {
  textbox = document.getElementById(textbox);
  checkBox = document.getElementById(element.id)
  if (element.checked) {
    checkBox.removeAttribute("checked")
    checkBox.removeAttribute("mandatory")
    textbox.removeAttribute("disabled");
  } else {
    checkBox.setAttribute("checked", "")
    checkBox.setAttribute("mandatory", "")
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function disableDelete(containerName, deleteid) {
  let deleteBtns = document.querySelectorAll(`[group="del"]`);
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`[group="del"]`).setAttribute("disabled", "");
  } else {
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
  let tempDiv = document.getElementById("stForm").querySelectorAll("div");
  let target = [];
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      target.push(div);
    }
  }
  let targetDiv = target[target.length - 1];
  targetDiv.removeAttribute("data-invalid");
  targetDiv.removeAttribute("data-invalid-message");
}

//

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

function atLeastOne(e) {
  let items = document.querySelectorAll(`[name="${e.name}"]`);
  pass = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].removeAttribute("mandatory");
      items[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("mandatory", "");
      items[i].setAttribute("checked", "");
    }
  }
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