function appType(element) {
  let appType = document.querySelectorAll("[name='appType']");

  let appType3field = document.getElementById("ApplFor_ReneOfAC_Year10");
  let appType4field = document.getElementById("ApplFor_ReneOfACGEO_Year10");
  let appType5field = document.getElementById("ApplFor_RegiOfACO_Year10");

  let firstInstructions = document.getElementById("firstInstructions");
  let secondInstructions = document.getElementById("secondInstructions");
  let importantNotesAC = document.getElementById("importantNotesAC");
  let importantNotesSAC = document.getElementById("importantNotesSAC");

  let particularsAC = document.getElementById("particularsAC");
  let particularsSAC = document.getElementById("particularsSAC");
  let particularsInfo = document.getElementById("particularsInfo");

  let particulars_SAC_AC_rows = [
    document.getElementById("particularsPronoRow"),
    document.getElementById("datePEcivil"),
    document.getElementById("PEregNo"),
  ];

  let particulars_SAC_AC_field = [
    document.getElementById("Member_IC_Passport_No_PECMEE10"),
    document.getElementById("ACPart_DateOfRegiAsPE10"),
    document.getElementById("MemberRole_Professional_No_PECMEE10"),
  ];

  let datePEgeo = document.getElementById("datePEgeo");
  let datePEgeoField = document.getElementById("SACPart_DateOfRegiAsPEGeo10");

  let PEregnoGeo = document.getElementById("PEregnoGeo");
  let PEregnoGeoField = document.getElementById(
    "MemberRole_Professional_No_PECMEE20"
  );

  let ACregNo = document.getElementById("ACregNo");
  let ACregNoField = document.getElementById("ACPart_ACRegiNo10");

  let SACregNo = document.getElementById("SACregNo");
  let SACregNoField = document.getElementById(
    "MemberRole_Professional_No_ACGEO10"
  );

  let attaSpans = [
    document.getElementById("atta1"),
    document.getElementById("atta2"),
    document.getElementById("atta3"),
    document.getElementById("atta4"),
  ];

  let guidelinesSAC = document.getElementById("guidelinesSAC");
  let declarationACY = document.getElementById("declarationACY");
  let declarationSACY = document.getElementById("declarationSACY");

  let declarationACOY = document.getElementById("declarationACOY");
  let declarationACOYField = [
    document.getElementById("Regi_Decl_NameOfDirePart10"),
    document.getElementById("Regi_Decl_IdenNo10"),
  ];

  let uen = document.getElementById("Part_UEN10");
  let title = document.querySelector("cn2-master-head");

  let emails = [
    document.getElementById("Member_Email_Address1_PECMEE10"),
    document.getElementById("PayeDeta_Emai10"),
  ];
  let emailsAdd = document.querySelectorAll(".addEmail");
  for (field of emails) {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  for (let i = 0; i < emailsAdd.length; i++) {
    emailsAdd[i].removeAttribute("data-invalid");
    emailsAdd[i].removeAttribute("data-invalid-message");
  }
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");

  let page5 = document.querySelector("[target='page5']");
  switch (element.id) {
    //1
    case "rbn_ApplFor_RegiOfAC10":
      formNameVersion("form__name10", "form__version");
      enableParticulars(true);
      appType3field.setAttribute("disabled", "");
      appType3field.removeAttribute("mandatory");
      appType3field.value = "";
      appType4field.setAttribute("disabled", "");
      appType4field.removeAttribute("mandatory");
      appType4field.value = "";
      appType5field.setAttribute("disabled", "");
      appType5field.removeAttribute("mandatory");
      appType5field.value = "";

      firstInstructions.setAttribute("hidden", "");
      secondInstructions.setAttribute("hidden", "");
      importantNotesSAC.setAttribute("hidden", "");
      particularsSAC.setAttribute("hidden", "");
      importantNotesAC.removeAttribute("hidden");
      particularsAC.setAttribute("hidden", "");
      particularsInfo.removeAttribute("hidden");

      for (row of particulars_SAC_AC_rows) {
        row.removeAttribute("hidden");
      }
      for (field of particulars_SAC_AC_field) {
        field.setAttribute("mandatory", "");
        field.value = "";
      }

      datePEgeo.setAttribute("hidden", "");
      datePEgeoField.removeAttribute("mandatory");
      datePEgeoField.value = "";

      PEregnoGeo.setAttribute("hidden", "");
      PEregnoGeoField.removeAttribute("mandatory");
      PEregnoGeoField.value = "";

      ACregNo.setAttribute("hidden", "");
      ACregNoField.removeAttribute("mandatory");
      ACregNoField.value = "";

      SACregNo.setAttribute("hidden", "");
      SACregNoField.removeAttribute("mandatory");
      SACregNoField.value = "";

      title.title = `APPLICATION AS AN ACCREDITED CHECKER <br>
			[CAP 29 OF THE BUILDING CONTROL ACT]
		   `;

      for (span of attaSpans) {
        span.textContent = "AC";
      }
      guidelinesSAC.setAttribute("hidden", "");
      declarationACY.setAttribute("hidden", "");
      declarationSACY.setAttribute("hidden", "");
      declarationACOY.setAttribute("hidden", "");
      for (field of declarationACOYField) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      enableParticularsACO(false);
      enableChecklistSAC(true);
      enableRegisFees(true);

      enableMandatoryCheckboxes(false, "Regi_Decl");
      enableMandatoryCheckboxes(false, "Rene_ACDecl");
      enableMandatoryCheckboxes(false, "Rene_SACDecl");

      page5.setAttribute("hidden", "");

      document.getElementById("navPage1").removeAttribute("label");
      document
        .getElementById("navPage1")
        .setAttribute("label", "Important Notes");
      break;
    //2
    case "rbn_ApplFor_RegiOfSAC10":
      enableParticulars(true);
      appType3field.setAttribute("disabled", "");
      appType3field.removeAttribute("mandatory");
      appType3field.value = "";
      appType4field.setAttribute("disabled", "");
      appType4field.removeAttribute("mandatory");
      appType4field.value = "";
      appType5field.setAttribute("disabled", "");
      appType5field.removeAttribute("mandatory");
      appType5field.value = "";

      firstInstructions.setAttribute("hidden", "");
      secondInstructions.setAttribute("hidden", "");
      importantNotesAC.setAttribute("hidden", "");
      particularsAC.setAttribute("hidden", "");
      importantNotesSAC.removeAttribute("hidden");
      particularsSAC.setAttribute("hidden", "");
      particularsInfo.removeAttribute("hidden");

      for (row of particulars_SAC_AC_rows) {
        row.removeAttribute("hidden");
      }
      for (field of particulars_SAC_AC_field) {
        field.setAttribute("mandatory", "");
        field.value = "";
      }
      datePEgeo.removeAttribute("hidden");
      datePEgeoField.setAttribute("mandatory", "");

      PEregnoGeo.setAttribute("hidden", "");
      PEregnoGeoField.removeAttribute("mandatory");
      PEregnoGeoField.value = "";

      ACregNo.setAttribute("hidden", "");
      ACregNoField.removeAttribute("mandatory");
      ACregNoField.value = "";

      SACregNo.setAttribute("hidden", "");
      SACregNoField.removeAttribute("mandatory");
      SACregNoField.value = "";

      for (span of attaSpans) {
        span.textContent = "SAC";
      }

      guidelinesSAC.removeAttribute("hidden");
      declarationACY.setAttribute("hidden", "");
      declarationSACY.setAttribute("hidden", "");
      declarationACOY.setAttribute("hidden", "");
      for (field of declarationACOYField) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      enableMandatoryCheckboxes(false, "Regi_Decl");
      enableMandatoryCheckboxes(false, "Rene_ACDecl");
      enableMandatoryCheckboxes(false, "Rene_SACDecl");
      enableParticularsACO(false);
      enableChecklistSAC(true);
      enableRegisFees(true);

      title.title = `APPLICATION AS A SPECIALIST ACCREDITED CHECKER <br>
			[CAP 29 OF THE BUILDING CONTROL ACT]
		   `;
      page5.setAttribute("hidden", "");
      document.getElementById("navPage1").removeAttribute("label");
      document
        .getElementById("navPage1")
        .setAttribute("label", "Important Notes");
      break;
    //3
    case "rbn_ApplFor_ReneOfAC10":
      formNameVersion("form__name30", "form__version");
      enableParticulars(true);
      appType3field.removeAttribute("disabled");
      appType3field.setAttribute("mandatory", "");
      appType4field.setAttribute("disabled", "");
      appType4field.removeAttribute("mandatory");
      appType4field.value = "";
      appType5field.setAttribute("disabled", "");
      appType5field.removeAttribute("mandatory");
      appType5field.value = "";

      firstInstructions.removeAttribute("hidden");
      particularsInfo.removeAttribute("hidden");
      secondInstructions.setAttribute("hidden", "");
      importantNotesSAC.setAttribute("hidden", "");
      importantNotesAC.setAttribute("hidden", "");
      particularsAC.removeAttribute("hidden");
      particularsSAC.setAttribute("hidden", "");

      for (row of particulars_SAC_AC_rows) {
        row.setAttribute("hidden", "");
      }
      for (field of particulars_SAC_AC_field) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      datePEgeo.setAttribute("hidden", "");
      datePEgeoField.removeAttribute("mandatory");
      datePEgeoField.value = "";

      PEregnoGeo.removeAttribute("hidden");
      PEregnoGeoField.removeAttribute("mandatory");
      PEregnoGeoField.value = "";
      PEregnoGeoField.setAttribute("mandatory", "");

      ACregNo.removeAttribute("hidden");
      ACregNoField.setAttribute("mandatory", "");
      ACregNoField.value = "";

      SACregNo.setAttribute("hidden", "");
      SACregNoField.removeAttribute("mandatory");
      SACregNoField.value = "";

      guidelinesSAC.setAttribute("hidden", "");
      declarationSACY.setAttribute("hidden", "");
      declarationACY.removeAttribute("hidden");

      declarationACOY.setAttribute("hidden", "");
      for (field of declarationACOYField) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      enableMandatoryCheckboxes(false, "Regi_Decl");
      enableMandatoryCheckboxes(true, "Rene_ACDecl");
      enableMandatoryCheckboxes(false, "Rene_SACDecl");
      enableParticularsACO(false);
      enableChecklistSAC(false);
      enableRegisFees(false);

      title.title = `REGISTRATION OF ACCREDITED CHECKER <br>
			[CAP 29 OF THE BUILDING CONTROL ACT]
			`;
      page5.removeAttribute("hidden");
      document.getElementById("navPage1").removeAttribute("label");
      document.getElementById("navPage1").setAttribute("label", "Instructions");
      break;
    //4
    case "rbn_ApplFor_ReneOfSAC10":
      enableParticulars(true);
      appType3field.setAttribute("disabled", "");
      appType3field.removeAttribute("mandatory");
      appType3field.value = "";
      appType4field.removeAttribute("disabled");
      appType4field.setAttribute("mandatory", "");
      appType5field.setAttribute("disabled", "");
      appType5field.removeAttribute("mandatory");
      appType5field.value = "";

      firstInstructions.removeAttribute("hidden");
      secondInstructions.setAttribute("hidden", "");
      particularsInfo.removeAttribute("hidden");
      importantNotesAC.setAttribute("hidden", "");
      importantNotesSAC.setAttribute("hidden", "");
      particularsAC.setAttribute("hidden", "");
      particularsSAC.removeAttribute("hidden");

      for (row of particulars_SAC_AC_rows) {
        row.setAttribute("hidden", "");
      }
      for (field of particulars_SAC_AC_field) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      datePEgeo.setAttribute("hidden", "");
      datePEgeoField.removeAttribute("mandatory");
      datePEgeoField.value = "";

      PEregnoGeo.removeAttribute("hidden");
      PEregnoGeoField.removeAttribute("mandatory");
      PEregnoGeoField.value = "";
      PEregnoGeoField.setAttribute("mandatory", "");
      ACregNo.setAttribute("hidden", "");
      ACregNoField.removeAttribute("mandatory");
      ACregNoField.value = "";

      SACregNo.removeAttribute("hidden");
      SACregNoField.setAttribute("mandatory", "");

      guidelinesSAC.setAttribute("hidden", "");
      declarationACY.setAttribute("hidden", "");
      declarationSACY.removeAttribute("hidden");
      declarationACOY.setAttribute("hidden", "");
      for (field of declarationACOYField) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      enableMandatoryCheckboxes(false, "Regi_Decl");
      enableMandatoryCheckboxes(false, "Rene_ACDecl");
      enableMandatoryCheckboxes(true, "Rene_SACDecl");
      enableParticularsACO(false);
      enableChecklistSAC(false);
      enableRegisFees(false);

      title.title = `REGISTRATION OF SPECIALIST ACCREDITED CHECKER <br>
			[CAP 29 OF THE BUILDING CONTROL ACT]
			`;
      page5.removeAttribute("hidden");
      document.getElementById("navPage1").removeAttribute("label");
      document.getElementById("navPage1").setAttribute("label", "Instructions");
      break;
    //5
    case "rbn_ApplFor_ReneOfACO10":
      formNameVersion("form__name50", "form__version");
      appType3field.setAttribute("disabled", "");
      appType3field.removeAttribute("mandatory");
      appType3field.value = "";
      appType4field.setAttribute("disabled", "");
      appType4field.removeAttribute("mandatory");
      appType4field.value = "";
      appType5field.removeAttribute("disabled", "");
      appType5field.setAttribute("mandatory", "");

      firstInstructions.setAttribute("hidden", "");
      importantNotesSAC.setAttribute("hidden", "");
      particularsAC.setAttribute("hidden", "");
      particularsInfo.setAttribute("hidden", "");
      particularsSAC.setAttribute("hidden", "");
      secondInstructions.removeAttribute("hidden");
      importantNotesAC.setAttribute("hidden", "");

      for (row of particulars_SAC_AC_rows) {
        row.setAttribute("hidden", "");
      }
      for (field of particulars_SAC_AC_field) {
        field.removeAttribute("mandatory");
        field.value = "";
      }
      datePEgeo.setAttribute("hidden", "");
      datePEgeoField.removeAttribute("mandatory");
      datePEgeoField.value = "";

      PEregnoGeo.setAttribute("hidden", "");
      PEregnoGeoField.removeAttribute("mandatory");
      PEregnoGeoField.value = "";
      ACregNo.setAttribute("hidden", "");
      ACregNoField.removeAttribute("mandatory");
      ACregNoField.value = "";

      SACregNo.setAttribute("hidden", "");
      SACregNoField.removeAttribute("mandatory");
      SACregNoField.value = "";

      guidelinesSAC.setAttribute("hidden", "");
      declarationACY.setAttribute("hidden", "");
      declarationSACY.setAttribute("hidden", "");
      declarationACOY.removeAttribute("hidden");
      for (field of declarationACOYField) {
        field.setAttribute("mandatory", "");
        field.value = "";
      }
      enableMandatoryCheckboxes(true, "Regi_Decl");
      enableMandatoryCheckboxes(false, "Rene_ACDecl");
      enableMandatoryCheckboxes(false, "Rene_SACDecl");
      enableParticularsACO(true);
      enableChecklistSAC(false);
      enableRegisFees(false);
      enableParticulars(false);
      title.title = `REGISTRATION OF ACCREDITED CHECKING ORGANIZATION <br>
			[CAP 29 OF THE BUILDING CONTROL ACT]
		   `;
      page5.removeAttribute("hidden");
      document.getElementById("navPage1").removeAttribute("label");
      document.getElementById("navPage1").setAttribute("label", "Instructions");
      break;
  }
}

function enableParticulars(condition) {
  let fields = [
    document.getElementById("Member_Member_Name_PECMEE10"),
    document.getElementById("Member_Country_PECMEE10"),
    document.getElementById("ACPart_DateOfBirt10"),
    document.getElementById("ACPart_HomeAddr10"),
    document.getElementById("Member_Firm_Name_PECMEE10"),
    document.getElementById("Member_Address_PECMEE10"),
    document.getElementById("Member_Email_Address1_PECMEE10"),
    document.getElementById("ACPart_HomeTel10"),
    document.getElementById("Member_Mobile_No_PECMEE10"),
    document.getElementById("Member_Tel_No_PECMEE10"),
    document.getElementById("ACPart_ACRegiNo10"),
    document.getElementById("ACPart_DateOfRegiAsPE10"),
    document.getElementById("MemberRole_Professional_No_PECMEE10"),
    document.getElementById("SACPart_DateOfRegiAsPEGeo10"),
    document.getElementById("ACPart_ACRegiNo10"),
    document.getElementById("MemberRole_Professional_No_ACGEO10"),
  ];
  for (field of fields) {
    field.value = "";
    field.removeAttribute("mandatory");
  }
  if (condition == true) {
    for (field of fields) {
      field.setAttribute("mandatory", "");
    }
  } else {
    for (field of fields) {
      field.removeAttribute("mandatory");
    }
  }
}

function enableRegisFees(condition) {
  let page5 = document.querySelector("[target='page5']");
  let email = document.getElementById("PayeDeta_Emai10");
  let fields = [
    document.getElementById("PaymMode_ePay_AmouPaid10"),
    document.getElementById("PayeDeta_Name"),
    document.getElementById("PayeDeta_CompName"),
    document.getElementById("PayeDeta_ContNo10"),
    document.getElementById("PayeDeta_Emai10"),
    document.getElementById("PayeDeta_Rema10"),
  ];
  if (condition == true) {
    page5.removeAttribute("hidden");
    document.getElementById("PaymMode_ePay10").checked = false;
    for (field of fields) {
      field.value = "";
    }
    email.removeAttribute("data-invalid");
    email.removeAttribute("data-invalid-message");
  } else {
    page5.setAttribute("hidden", "");
    document.getElementById("PaymMode_ePay10").checked = false;
    for (field of fields) {
      field.value = "";
    }
    email.removeAttribute("data-invalid");
    email.removeAttribute("data-invalid-message");
  }
}

function enableChecklistSAC(condition) {
  let section = document.querySelectorAll("#checklistSAC");
  let mandatoryCheckboxes = [
    document.getElementById("RegiOfAC_AttaChec_AcadQual10"),
    document.getElementById("RegiOfAC_AttaChec_MembOfProfBodi10"),
    document.getElementById("RegiOfAC_AttaChec_DetaOfPastEmpl10"),
    document.getElementById("RegiOfAC_AttaChec_DetaOfPracExpe10"),
    document.getElementById("RegiOfAC_AttaChec_AttaPassPhot10"),
    document.getElementById("RegiOfAC_Decl_IHereDeclThat10"),
    document.getElementById("RegiOfAC_Decl_IHaveAValid10"),
  ];
  let field = document.getElementById("RegiOfAC_Decl_IHave20");
  for (checkbox of mandatoryCheckboxes) {
    checkbox.checked = false;
  }
  if (condition == true) {
    for (let i = 0; i < section.length; i++) {
      section[i].removeAttribute("hidden");
    }
    for (checkbox of mandatoryCheckboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
  } else {
    for (let i = 0; i < section.length; i++) {
      section[i].setAttribute("hidden", "");
    }
    for (checkbox of mandatoryCheckboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }
}

function enableParticularsACO(condition) {
  let section = document.querySelectorAll("#particularsACO");
  let mandatoryFields = [
    document.getElementById("Part_NameOfOrga10"),
    document.getElementById("Part_Addr10"),
    document.getElementById("Part_UEN10"),
    document.getElementById("Part_TelNo10"),
    document.getElementById("Regi_DetaOfACOs_ACORegiNo10"),
    document.getElementById("Regi_DetaOfACOs_NoOfOthePE10"),
    document.getElementById("Regi_DetaOfACOs_NumbOfOtheCivi10"),

    document.getElementById("Regi_DetaOfACOs_NameOfAC10"),
    document.getElementById("Regi_DetaOfACOs_EmaiAddrOfAC10"),
    document.getElementById("Regi_DetaOfACOs_ACRegiNo10"),
    document.getElementById("Regi_DetaOfACOs_HandPhonNo10"),
  ];

  let mandatoryCheckboxes = [
    document.getElementById("Regi_DetaOfACOs_DetaAttaInBEV10"),
    document.getElementById("RegiOfACO_TypeOfOrga_LiceCorp10"),
    document.getElementById("RegiOfACO_TypeOfOrga_LicePart10"),
    document.getElementById("RegiOfACO_TypeOfOrga_LiceLimiLiabPart10"),
    document.getElementById("RegiOfACO_TypeOfOrga_PartConsWhol10"),
  ];
  let name = document.querySelectorAll(".addName");
  let email = document.querySelectorAll(".addEmail");
  let acRegno = document.querySelectorAll(".addAcRegNo");
  let handNo = document.querySelectorAll(".addHandno");
  let radios = [
    document.getElementById("RegiOfAC_Decl_IDoNotHave10"),
    document.getElementById("RegiOfAC_Decl_IHave10"),
  ];
  let radio2field = document.getElementById("RegiOfAC_Decl_IHave20");

  for (radio of radios) {
    radio.checked = false;
  }
  radio2field.setAttribute("disabled", "");
  radio2field.value = "";
  for (let i = 0; i < name.length; i++) {
    name[i].value = "";
    email[i].value = "";
    acRegno[i].value = "";
    handNo[i].value = "";
  }

  let parentDiv = document.getElementById("stForm");
  let formCount = parentDiv.childElementCount;
  let count = document.getElementById("Regi_DetaOfACOs_NumbOfACs10");
  count.value = "1";
  if (condition == true) {
    for (let i = 0; i < section.length; i++) {
      section[i].removeAttribute("hidden");
    }
    for (field of mandatoryFields) {
      field.setAttribute("mandatory", "");
    }
    for (checkbox of mandatoryCheckboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
  } else {
    let tempDiv = [];
    for (let div of parentDiv.querySelectorAll("div")) {
      if (div.hasAttribute("id")) {
        tempDiv.push(div);
      }
    }
    for (let div of tempDiv) {
      if (tempDiv.length != 1) {
        parentDiv.removeChild(div);
        tempDiv.pop(div);
      }
    }
    for (let i = 0; i < section.length; i++) {
      section[i].setAttribute("hidden", "");
    }
    for (field of mandatoryFields) {
      field.removeAttribute("mandatory");
      field.value = "";
    }
    for (checkbox of mandatoryCheckboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }
  }
}

function RegiOfAC_Decl_change(element) {
  let field = document.getElementById("RegiOfAC_Decl_IHave20");
  let fieldAsterisk = document.getElementById("fieldAsterisk");
  switch (element.id) {
    case "RegiOfAC_Decl_IDoNotHave10":
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
      fieldAsterisk.textContent = "";
      break;
    case "RegiOfAC_Decl_IHave10":
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
      fieldAsterisk.textContent = "*";
      break;
  }
}

function enableMandatoryCheckboxes(condition, groupID) {
  let group = document.querySelectorAll(`[name="${groupID}"]`);

  if (condition == true) {
    for (let i = 0; i < group.length; i++) {
      group[i].setAttribute("mandatory", "");
      group[i].setAttribute("checked", "");
    }
  } else {
    for (let i = 0; i < group.length; i++) {
      group[i].removeAttribute("mandatory");
      group[i].removeAttribute("checked");
      group[i].checked = false;
    }
  }
}

function PaymMode_ePay10_change(element) {
  let field = document.getElementById("PaymMode_ePay_AmouPaid10");
  let regACORadio = document.getElementById("rbn_ApplFor_ReneOfACO10");

  if (element.checked) {
    if (regACORadio.checked) {
      field.value = "300"
    }
    else {
      field.value = "150";
    }
  } else {
    field.value = "";
  }
}

function PaymMode_ePay_AmouPaid10_change(element) {
  let re = /^(?=.*?[1-9])[0-9()-]+$/;
  re.test(String(element.value));
}

function EmailValidate(element) {
  let field = document.getElementById(element.id);
  if (!validateEmail(element.value)) {
    field.setAttribute("data-invalid", "");
    field.setAttribute(
      "data-invalid-message",
      "Invalid Format. Please enter a valid Email Address."
    );
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

function getDetails() {
  let data = [
    {
      "BCA(BE)": [
        {
          Email: "wai_hui_ling@bca.gov.sg",
          TelNo: "68044609",
          AreaOfSupp: "Policies",
        },
        {
          Email: "chang_heng_choy@bca.gov.sg",
          TelNo: "68044646",
          AreaOfSupp: "Policies",
        },
      ],
    },
  ];

  return data;
}

function atLeastOne(element) {
  let checks = document.querySelectorAll(`[name="${element.name}"]`);
  let pass = false;
  for (let c of checks) {
    if (c.checked) {
      pass = true;
    }
  }
  if (pass) {
    for (let c of checks) {
      c.removeAttribute("checked");
      c.removeAttribute("mandatory");
    }
  } else {
    for (let c of checks) {
      c.setAttribute("checked", "");
      c.setAttribute("mandatory", "");
    }
  }
}

function removeManda(element) {
  let check = document.getElementById(element.id);
  if (check.checked) {
    check.removeAttribute("mandatory");
    check.removeAttribute("checked");
  } else {
    check.setAttribute("mandatory", "");
    check.setAttribute("checked", "");
  }
}

function disableDelete(containerName) {
  let numberACs = document.getElementById("Regi_DetaOfACOs_NumbOfACs10");
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

  numberACs.value = formCount;
}

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "BCA") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550`;
    agencyAdd.removeAttribute("hidden");
  } else if (element.value == "DSTA") {
    agencyAdd.value = `Defence Science & Technology Agency
Building & Infrastructure
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
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

//

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name10", "form__version", true);
});

function formNameVersion(name, version, fromLoad) {
  //get Data
  let getFormName = fromLoad
    ? jsonData["FormName10"] || jsonData[name]
    : jsonData[name];
  let getFormVersion = fromLoad
    ? jsonData["XFDVersion"] || jsonData[version]
    : jsonData[version];
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
