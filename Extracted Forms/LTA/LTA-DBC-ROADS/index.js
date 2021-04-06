let flag = true;

function radioBtnSelection(element) {
  //let radioBtn = document.getElementById(element.id);

  let apptype5 = [
    document.getElementById("CHECK5"),
    document.getElementById("CHECK6"),
    document.getElementById("CHECK7")
  ];
  let landHouseDev = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan40"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60"),
    document.getElementById("FeeCompAndDecl_LandHousDeveChk10")
  ];
  let landHouseDev2 = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan40"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60")
  ];

  let devOtherFields = [
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120"),
    document.getElementById("FeeCompAndDecl_DeveOtheThanChk10")
  ];
  let devOtherFields2 = [
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120")
  ];

  let standAloneFields = [
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140"),
    document.getElementById("FeeCompAndDecl_Quan150"),
    document.getElementById("FeeCompAndDecl_Quan160"),
    document.getElementById("FeeCompAndDecl_StanStreWorkChk10")
  ];
  let standAloneFields2 = [
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140"),
    document.getElementById("FeeCompAndDecl_Quan150"),
    document.getElementById("FeeCompAndDecl_Quan160")
  ];
  let landHouseDevComputed = [
    document.getElementById("FeeCompAndDecl_Quan10_computed"),
    document.getElementById("FeeCompAndDecl_Quan20_computed"),
    document.getElementById("FeeCompAndDecl_Quan30_computed"),
    document.getElementById("FeeCompAndDecl_Quan40_computed"),
    document.getElementById("FeeCompAndDecl_Quan50_computed"),
    document.getElementById("FeeCompAndDecl_Quan60_computed")
  ];
  let devOtherFieldsComputed = [
    document.getElementById("FeeCompAndDecl_Quan70_computed"),
    document.getElementById("FeeCompAndDecl_Quan80_computed"),
    document.getElementById("FeeCompAndDecl_Quan90_computed"),
    document.getElementById("FeeCompAndDecl_Quan100_computed"),
    document.getElementById("FeeCompAndDecl_Quan110_computed"),
    document.getElementById("FeeCompAndDecl_Quan120_computed")
  ];

  let standAloneFieldsComputed = [
    document.getElementById("FeeCompAndDecl_Quan130_computed"),
    document.getElementById("FeeCompAndDecl_Quan140_computed"),
    document.getElementById("FeeCompAndDecl_Quan150_computed"),
    document.getElementById("FeeCompAndDecl_Quan160_computed")
  ];

  let p2check = [
    document.getElementById("CHECK1"),
    document.getElementById("CHECK2"),
    document.getElementById("CHECK3"),
    document.getElementById("CHECK4"),
    document.getElementById("CHECK5"),
    document.getElementById("CHECK6"),
    document.getElementById("CHECK7"),
    document.getElementById("CHECK8"),
    document.getElementById("Oths_CHECK"),
  ];

  let decCheckBox = [
    document.getElementById("DeveSubType_CHECK1"),
    document.getElementById("DeveSubType_CHECK2"),
    document.getElementById("DeveSubType_CHECK18"),
    document.getElementById("DeveSubType_CHECK3"),
    document.getElementById("DeveSubType_CHECK19"),
    document.getElementById("DeveSubType_CHECK20"),
    document.getElementById("DeveSubType_CHECK15"),
    document.getElementById("DeveSubType_CHECK21"),
    document.getElementById("DeveSubType_CHECK22"),
  ]

  let apptype7check = [
    document.getElementById("NtfnNewRd_check1_1"),
    document.getElementById("NtfnNewRd_check1_2"),
    document.getElementById("NtfnNewRd_check2"),
    document.getElementById("NtfnNewRd_check3"),
    document.getElementById("NtfnNewRd_check4_1"),
    document.getElementById("NtfnNewRd_check4_a"),
    document.getElementById("NtfnNewRd_check4_b"),
    document.getElementById("NtfnNewRd_check4_c"),
    document.getElementById("NtfnNewRd_check4_d"),
    document.getElementById("NtfnNewRd_check4_e"),
    document.getElementById("NtfnNewRd_check4_f"),
    document.getElementById("NtfnNewRd_check5_1"),
    document.getElementById("NtfnNewRd_check5_2")
  ];

  let FeeComputationCheckboxes = [
    document.getElementById("FeeCompAndDecl_LandHousDeveChk10"),
    document.getElementById("FeeCompAndDecl_DeveOtheThanChk10"),
    document.getElementById("FeeCompAndDecl_StanStreWorkChk10")
  ];

  //submission type radio buttons
  let subTypeNew = document.getElementById("RADIO2");
  let subTypeResub = document.getElementById("RADIO3");

  //page 2 selection radio buttons
  let radioSelect1 = document.getElementById("ApplType_RTDCLodgement");
  let radioSelect2 = document.getElementById("ApplType_RTDeveTransRep");
  let radioSelect3 = document.getElementById("ApplType_RTDeveCntrl");
  let radioSelect4 = document.getElementById("ApplType_RTLodgeStreet");
  let radioSelect5 = document.getElementById("ApplType_RTStreetPln");
  let radioSelect6 = document.getElementById("ApplType_RTConstStreet");
  let radioSelect7 = document.getElementById("ApplType_RTNOONR");
  let radioSelect8 = document.getElementById("ApplType_RTCertStaComp10");
  let radioSelect9 = document.getElementById("ApplType_RTCertStaComp20");
  let radioSelect10 = document.getElementById("ApplType_RTTakingOver");
  //page 2 first selection radio buttons
  let select1Yes = document.getElementById("ApplType_RTDCLodgement_Yes10");
  let select1No = document.getElementById("ApplType_RTDCLodgement_No10");

  let select2Yes = document.getElementById("ApplType_RTDeveCntrl_Yes10");
  let select2No = document.getElementById("ApplType_RTDeveCntrl_No10");

  //page 4 divs
  let RTDCLodgement = document.querySelectorAll(`#ApplType_RTDCLodgement_div`);
  let RTDeveTransRep = document.querySelectorAll(
    `#ApplType_RTDeveTransRep_div`
  );
  let RTDeveCntrl = document.querySelectorAll(`#ApplType_RTDeveCntrl_div`);
  let RTLodgeStreet = document.querySelectorAll(`#ApplType_RTLodgeStreet_div`);
  let RTStreetPln = document.querySelectorAll(`#ApplType_RTStreetPln_div`);
  let RTConstStreet = document.querySelectorAll(`#ApplType_RTConstStreet_div`);
  let RTNOONR = document.querySelectorAll(`#ApplType_RTNOONR_div`);
  let RTCertStaComp = document.querySelectorAll(`#ApplType_RTCertStaComp_div`);
  let RTCertStaComp2 = document.querySelectorAll(
    `#ApplType_RTCertStaComp2_div`
  );
  let RTTakingOver = document.querySelectorAll(`#ApplType_RTTakingOver_div`);
  let computeDiv = document.querySelectorAll("#FeeComputation_div");

  let dateFields = [
    document.getElementById("NDate11"),
    document.getElementById("NDate12")
  ];

  for (let a of p2check) {
    a.checked = false;
    a.setAttribute("disabled", "");
  }

  for (let a of decCheckBox) {
    a.checked = false;
    a.removeAttribute("disabled");
    if (a.id == "DeveSubType_CHECK20" || a.id == "DeveSubType_CHECK21" || a.id == "DeveSubType_CHECK22") {
      DeveSubType(a.id)
    }
  }

  for (let a of document.querySelectorAll("[mandatory-group='ROADSCSC_2']")) {
    a.checked = false
    a.removeAttribute("mandatory", "")
    a.removeAttribute("checked", "")
    a.setAttribute("disabled", "")
  }
  for (let b of document.querySelectorAll("[mandaAste]")) {
    b.innerHTML = ""
  }

  document.getElementById("ROADSCSC_RAD1").checked = false;
  document.getElementById("ROADSCSC_RAD2").checked = false;
  // toggleSubProjtitle(true);
  toggleTransImpAss(false);
  toggleBuildPlanRefNo(false);
  fileAttachReset();

  let page = document.getElementById("page4")
  let elements = page.querySelectorAll("cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox")

  for (let el of elements) {
    if (el.id != null) {
      if (el.hasAttribute("mandatory")) {
        el.removeAttribute("mandatory")
      }
      if (el.hasAttribute("checked")) {
        el.removeAttribute("checked")
      }
    }
  }

  document.getElementById("ROADSLOD_CHECK1_1_2").setAttribute("disabled", "");
  document.getElementById("ROADSLOD_CHECK1_1_1").setAttribute("disabled", "");
  document.getElementById("ROADSLOD_CHECK1_2_1").setAttribute("disabled", "");
  document.getElementById("ROADSLOD_CHECK1_2_2").setAttribute("disabled", "");

  document.getElementById("ROADSLOD_CHECK1_1_2").checked = false;
  document.getElementById("ROADSLOD_CHECK1_1_1").checked = false;
  document.getElementById("ROADSLOD_CHECK1_2_1").checked = false;
  document.getElementById("ROADSLOD_CHECK1_2_2").checked = false;

  document.getElementById("ROADSCSC_RAD1").setAttribute("disabled", "");
  document.getElementById("ROADSCSC_RAD2").setAttribute("disabled", "");

  document.getElementById("ROADSCSC_RAD1").checked = false;
  document.getElementById("ROADSCSC_RAD2").checked = false;

  document.querySelector("[switch-id='StatBoar_Yes10']").checked = false

  document.getElementById("Project_Project_Ref_No10").value = jsonData["Project_Project_Ref_No10"];

  //////////////////////////////////////////////////////////////////////RADIO 1 RADIO 1
  if (radioSelect1.checked) {
    for (let a of decCheckBox) {
      if (a.id != "DeveSubType_CHECK1") {
        a.checked = false;
        a.setAttribute("disabled", "")
      }
    }
    document.querySelectorAll("#landHouseDeve");
    document.querySelectorAll("#devOtherThan");
    document.querySelectorAll("#standStreetWorks");

    for (let i = 0; i < landHouseDeve.length; i++) {
      landHouseDeve[i].removeAttribute("hidden");
    }
    for (let i = 0; i < devOtherThan.length; i++) {
      devOtherThan[i].removeAttribute("hidden");
    }
    for (let i = 0; i < standStreetWorks.length; i++) {
      standStreetWorks[i].removeAttribute("hidden");
    }
    for (fields of landHouseDevComputed) {
      fields.value = "";
    }
    for (fields of standAloneFieldsComputed) {
      fields.value = "";
    }
    for (fields of devOtherFieldsComputed) {
      fields.value = "";
    }
    showDiv(RTDCLodgement);
    if (subTypeNew.checked) {
      showDiv(computeDiv);
    }

    document.getElementById("feeNumber").textContent = "8.";
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    enableMandatoryCheckboxes("ROADSLODGDC");
    deactivateFields();
    document.getElementById("FIELD1").setAttribute("hidden", "");
    document.getElementById("FIELD1").value = "";
    // disableCheck("subProjTitle");
    enableManda(select1Yes);
    enableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "*";

    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    subTypeResub.setAttribute("disabled", "");
    subTypeResub.checked = false;
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);

    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
    if (document.getElementById("DeveSubType_CHECK1").checked) {
      document
        .getElementById("FeeCompAndDecl_Quan10")
        .removeAttribute("disabled");
      document
        .getElementById("FeeCompAndDecl_Quan40")
        .removeAttribute("disabled");
      document
        .getElementById("FeeCompAndDecl_LandHousDeveChk10")
        .removeAttribute("disabled");
    }
    for (fields of landHouseDev2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of devOtherFields2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of standAloneFields2) {
      fields.setAttribute("disabled", "");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////RADIO 2 RADIO 2
  } else if (radioSelect2.checked) {
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    showDiv(RTDeveTransRep);
    enableMandatoryCheckboxes("DeclOfComp");
    deactivateFields();
    toggleBuildPlanRefNo(true);
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(computeDiv);
    hideDiv(ApplType_RTTakingOver_div);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");

    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
    // toggleSubProjtitle(false);
    toggleTransImpAss(true);
  } else if (radioSelect3.checked) {
    select2No.removeAttribute("disabled");
    select2Yes.removeAttribute("disabled");
    showDiv(RTDeveCntrl);
    enableMandatoryCheckboxes("ROADSDC");
    deactivateFields();
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);
    showDiv(computeDiv);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");


    //////////////////////////////////////////////////////////////////////////////RADIO 4 RADIO 4
  } else if (radioSelect4.checked) {
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    let landHouseDeve = document.querySelectorAll("#landHouseDeve");
    let devOtherThan = document.querySelectorAll("#devOtherThan");
    let standStreetWorks = document.querySelectorAll("#standStreetWorks");
    for (let i = 0; i < landHouseDeve.length; i++) {
      landHouseDeve[i].removeAttribute("hidden");
    }
    for (let i = 0; i < devOtherThan.length; i++) {
      devOtherThan[i].removeAttribute("hidden");
    }
    for (let i = 0; i < standStreetWorks.length; i++) {
      standStreetWorks[i].removeAttribute("hidden");
    }
    for (fields of landHouseDevComputed) {
      fields.value = "";
    }
    for (fields of standAloneFieldsComputed) {
      fields.value = "";
    }
    for (fields of devOtherFieldsComputed) {
      fields.value = "";
    }
    subTypeResub.setAttribute("disabled", "");
    subTypeResub.checked = false;
    document.getElementById("FIELD1").setAttribute("hidden", "");
    document.getElementById("FIELD1").value = "";
    // disableCheck("subProjTitle");
    showDiv(RTLodgeStreet);
    if (subTypeNew.checked) {
      showDiv(computeDiv);
    }
    document.getElementById("feeNumber").textContent = "8.";
    enableMandatoryCheckboxes("ROADSLOD");
    deactivateFields();
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }

    if (document.getElementById("DeveSubType_CHECK1").checked) {
      for (fields of landHouseDev) {
        fields.removeAttribute("disabled");
      }
    }
    for (fields of landHouseDev2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of devOtherFields2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of standAloneFields2) {
      fields.setAttribute("disabled", "");
    }
    ////////////////////////////////////////////////////////////////////////////////////RADIO 5 RADIO 5
  } else if (radioSelect5.checked) {
    for (let a of p2check) {
      if (a.id != "CHECK4" && a.id != "CHECK1") {
        a.checked = false;
        a.removeAttribute("disabled", "");
      }
    }
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    let landHouseDeve = document.querySelectorAll("#landHouseDeve");
    for (let i = 0; i < landHouseDeve.length; i++) {
      landHouseDeve[i].removeAttribute("hidden");
    }
    let apptype5pass = false;
    let standStreetWorks = document.querySelectorAll("#standStreetWorks");
    for (let i = 0; i < apptype5.length; i++) {
      if (apptype5[i].checked) {
        apptype5pass = true;
      }
    }
    if (apptype5pass == true) {
      for (let i = 0; i < standStreetWorks.length; i++) {
        standStreetWorks[i].setAttribute("hidden", "");
      }
    } else {
      for (let i = 0; i < standStreetWorks.length; i++) {
        standStreetWorks[i].removeAttribute("hidden");
      }
    }
    for (fields of landHouseDevComputed) {
      fields.value = "";
    }
    for (fields of standAloneFieldsComputed) {
      fields.value = "";
    }
    for (fields of devOtherFieldsComputed) {
      fields.value = "";
    }
    showDiv(RTStreetPln);
    if (subTypeNew.checked) {
      showDiv(computeDiv);
    }
    document.getElementById("feeNumber").textContent = "3.";
    enableMandatoryCheckboxes("ROADSSP");
    deactivateFields();
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");


    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
    if (document.getElementById("DeveSubType_CHECK1").checked) {
      for (fields of landHouseDev) {
        fields.removeAttribute("disabled");
      }
    }
    document.getElementById("ROADSSP_CHECK4_1").removeAttribute("mandatory");
    document.getElementById("ROADSSP_CHECK4_1").removeAttribute("checked");
    document.getElementById("ROADSSP_CHECK4_2").removeAttribute("mandatory");
    document.getElementById("ROADSSP_CHECK4_2").removeAttribute("checked");

    for (fields of landHouseDev2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of devOtherFields2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of standAloneFields2) {
      fields.setAttribute("disabled", "");
    }
    /////////////////////////////////////////////////////////////////////////////////RADIO 6 RADIO 6
  } else if (radioSelect6.checked) {
    for (let a of p2check) {
      a.checked = false;
      a.removeAttribute("disabled", "");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    if (subTypeNew.checked) {
      showDiv(computeDiv);
    }
    let standStreetWorks = document.querySelectorAll("#standStreetWorks");
    for (let i = 0; i < standStreetWorks.length; i++) {
      standStreetWorks[i].removeAttribute("hidden");
    }
    let apptype6pass = false;
    let landHouseDeve = document.querySelectorAll("#landHouseDeve");

    if (apptype6pass == true) {
      for (let i = 0; i < landHouseDeve.length; i++) {
        landHouseDeve[i].setAttribute("hidden", "");
      }
    } else {
      for (let i = 0; i < landHouseDeve.length; i++) {
        landHouseDeve[i].removeAttribute("hidden");
      }
    }
    for (fields of landHouseDevComputed) {
      fields.value = "";
    }
    for (fields of standAloneFieldsComputed) {
      fields.value = "";
    }
    for (fields of devOtherFieldsComputed) {
      fields.value = "";
    }
    document.getElementById("feeNumber").textContent = "3.";
    showDiv(RTConstStreet);
    enableMandatoryCheckboxes("ROADSEX");
    deactivateFields();
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);

    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");

    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }

    if (document.getElementById("DeveSubType_CHECK1").checked) {
      for (fields of landHouseDev) {
        fields.removeAttribute("disabled");
      }
    }
    for (fields of landHouseDev2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of devOtherFields2) {
      fields.setAttribute("disabled", "");
    }
    for (fields of standAloneFields2) {
      fields.setAttribute("disabled", "");
    }
    //////////////////////////////////////////////////////////////////////RADIO BUTTON 7 NOTIFICATIONS
  } else if (radioSelect7.checked) {
    for (let a of p2check) {
      if (a.id == "CHECK4" || a.id == "CHECK1") {
        a.checked = false;
        a.removeAttribute("disabled", "");
      }
    }
    enableMandatoryCheckboxes("NtfnNewRd");
    showDiv(RTNOONR);
    deactivateFields();
    for (fields of dateFields) {
      fields.setAttribute("mandatory", "");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    //radio1 repeat
    document.getElementById("ROADSLODGDC_CHECK3").removeAttribute("checked");
    document.getElementById("ROADSLODGDC_CHECK3").removeAttribute("mandatory");
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(RTTakingOver);
    hideDiv(computeDiv);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");
    radio7item(true);
    ///////////////////////////////////////////////////////////////////////////////////////////RADIO BUTTON 8
  } else if (radioSelect8.checked) {
    for (let a of p2check) {
      a.checked = false;
      a.removeAttribute("disabled", "");
    }
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    showDiv(RTCertStaComp);
    deactivateFields();
    enableMandatoryCheckboxes("ROADSCSC");
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    disableMandatoryCheckboxes("ROADSCSC_1");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTTakingOver);
    hideDiv(computeDiv);
    hideDiv(RTCertStaComp2);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");
    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
    ////////////////////////////////////////////////////////////////////////////////////RADIO 9 RADIO 9
  } else if (radioSelect9.checked) {
    for (let a of p2check) {
      a.checked = false;
      a.removeAttribute("disabled", "");
    }
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    showDiv(RTCertStaComp2);
    deactivateFields();
    enableMandatoryCheckboxes("ROADSCSC_1");
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSSOV");
    disableMandatoryCheckboxes("ROADSEX");
    disableMandatoryCheckboxes("ROADSCSC");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTTakingOver);
    hideDiv(computeDiv);
    hideDiv(RTCertStaComp);
    disableManda(select1Yes);
    disableManda(select1No);
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");
    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
    ////////////////////////////////////////////////////////////////////////////////////RADIO 10 RADIO 10
  } else if (radioSelect10.checked) {
    for (let a of p2check) {
      a.checked = false;
      a.removeAttribute("disabled", "");
    }
    for (check of apptype7check) {
      check.checked = false;
      check.removeAttribute("mandatory");
    }
    select2Yes.setAttribute("disabled", "");
    select2Yes.checked = false;
    select2No.setAttribute("disabled", "");
    select2No.checked = false;
    showDiv(RTTakingOver);
    enableMandatoryCheckboxes("ROADSSOV");
    deactivateFields();
    //radio1 repeat
    document.getElementById("NDate10").value = "";
    document.getElementById("NDate11").value = "";
    disableMandatoryCheckboxes("ROADSLODGDC");
    disableMandatoryCheckboxes("DeclOfComp");
    disableMandatoryCheckboxes("ROADSDC");
    disableMandatoryCheckboxes("ROADSLOD");
    disableMandatoryCheckboxes("ROADSSP");
    disableMandatoryCheckboxes("NtfnNewRd");
    disableMandatoryCheckboxes("ROADSCSC");
    disableMandatoryCheckboxes("ROADSEX");
    hideDiv(RTDCLodgement);
    hideDiv(RTDeveTransRep);
    hideDiv(RTDeveCntrl);
    hideDiv(RTLodgeStreet);
    hideDiv(RTStreetPln);
    hideDiv(RTConstStreet);
    hideDiv(RTNOONR);
    hideDiv(RTCertStaComp);
    hideDiv(RTCertStaComp2);
    hideDiv(computeDiv);
    disableManda(select1Yes);
    disableManda(select1No);
    clearCheckboxes("RTCertStaComp");
    clearCheckboxes("RTCertStaComp2");
    document.getElementById("apptype1YesNo").textContent = "";
    subTypeResub.removeAttribute("disabled");
    enableCheck("subProjTitle");
    for (fields of dateFields) {
      fields.removeAttribute("mandatory");
      fields.value = "";
    }
  }

  // let lotField = document.querySelectorAll(".lotNo");
  // let lotFieldFirst = document.querySelectorAll(".lotNo_first");
  // let lotFieldLast = document.querySelectorAll(".lotNo_Last");
  // let deleteb = document.querySelectorAll(".deleteBtn");
  if (!radioSelect2.checked) {
    document.getElementById("BIMRADIO1").checked = false;
    document.getElementById("BIMRADIO2").checked = true;
  }
  //   document.getElementById("RDLotNo_110").value = "MK";
  //   document.getElementById("RDLotNo_510").value = "Full";
  document.getElementById("FIELD1").value = "";
  document.getElementById("FIELD1").setAttribute("hidden", "");
  // if (flag) {
  //   let parentDiv = document.getElementById("stForm");

  //   let formField = document.querySelectorAll(".Afields");
  //   for (let i = 0; i < formField.length; i++) {
  //     if (i != 0) {
  //       let elements = formField[i].querySelectorAll(
  //         "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
  //       );
  //       for (let element of elements) delete jsonData[element.id];
  //       formField[i].parentNode.removeChild(formField[i]);
  //     }
  //   }

  //   let stNameField = document.querySelectorAll(".stfields");
  //   for (let i = 0; i < stNameField.length; i++) {
  //     if (i != 0) {
  //       let elements = stNameField[i].querySelectorAll(
  //         "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
  //       );
  //       for (let element of elements) delete jsonData[element.id];
  //       stNameField[i].parentNode.removeChild(stNameField[i]);
  //     }
  //   }

  //   for (let i = 0; i < lotField.length; i++) {
  //     lotField[i].value = "";
  //   }
  //   for (let i = 0; i < lotFieldFirst.length; i++) {
  //     lotFieldFirst[i].value = "MK";
  //   }
  //   for (let i = 0; i < lotFieldLast.length; i++) {
  //     lotFieldLast[i].value = "Full";
  //   }
  //   for (let i = 0; i < deleteb.length; i++) {
  //     deleteb[i].setAttribute("disabled", "");
  //   }
  // }

  //   let textboxes = tempDiv[0].querySelectorAll("cn2-textbox");
  //   let select1  = tempDiv[0].querySelector("[prefix='RDLotNo_1']");
  //   let select2  = tempDiv[0].querySelector("[prefix='RDLotNo_5']");
  //   let button  = tempDiv[0].querySelector("cn2-button");
  //   button.setAttribute("disabled","");
  //   select1.value = "MK";
  //   select2.value = "Full";
  //   for(let textbox of textboxes){
  // 	  textbox.value = "";
  //  }

  for (let check of FeeComputationCheckboxes) {
    check.setAttribute("disabled", "");
    check.checked = false;
  }

  declConditionSectionIIASub1();
  sectionIIB();
  // hideSubProjectTitle(element);
}

function submissionType(element) {
  let computeDiv = document.querySelectorAll("#FeeComputation_div");
  let feeNewSub = document.getElementById("VPPRO_NewSubm10");
  let feeResub = document.getElementById("VPPRO_Resu10");
  let appType1 = document.getElementById("ApplType_RTDCLodgement");
  let appType4 = document.getElementById("ApplType_RTLodgeStreet");
  let appType5 = document.getElementById("ApplType_RTStreetPln");
  let appType6 = document.getElementById("ApplType_RTConstStreet");
  let feeNewSubFields = [
    document.getElementById("VPPRO_NewSubm_ReceNo10"),
    document.getElementById("VPPRO_NewSubm_Amount20")
  ];
  switch (element.id) {
    case "RADIO2":
      if (element.checked) {
        if (
          appType1.checked ||
          appType4.checked ||
          appType5.checked ||
          appType6.checked
        ) {
          showDiv(computeDiv);
        }
        document.querySelector("[target='page3']").removeAttribute("hidden");
        document.querySelector("[target='page4']").removeAttribute("hidden");
        document
          .querySelector("cn2-fixed-footer")
          .setAttribute("data-next-page", "page3");
      }

      // if(element.checked){
      //   document.getElementById("VPPRO_NewSubm10").checked = true;
      //   document.getElementById("VPPRO_Resu10").checked = false;
      //   for(field of feeNewSubFields){
      //     field.removeAttribute("disabled");
      //     field.setAttribute("mandatory","");
      //   }
      // }
      break;
    case "RADIO3":
      if (element.checked) {
        if (appType5.checked) {
          showDiv(computeDiv);
        }
        document.querySelector("[target='page3']").removeAttribute("hidden");
        document.querySelector("[target='page4']").removeAttribute("hidden");
        document
          .querySelector("cn2-fixed-footer")
          .setAttribute("data-next-page", "page3");
      }

      // if(element.checked){
      //   document.getElementById("VPPRO_NewSubm10").checked = false;
      //   document.getElementById("VPPRO_Resu10").checked = true;
      //   for(field of feeNewSubFields){
      //     field.setAttribute("disabled","");
      //     field.removeAttribute("mandatory");
      //   }
      // }
      break;
    case "AMENSUB_RADIO1":
      if (element.checked) {
        // if (
        //   appType1.checked ||
        //   appType4.checked ||
        //   appType5.checked ||
        //   appType6.checked
        // ) {
        //   showDiv(computeDiv);
        // }
        // document.querySelector("[target='page3']").removeAttribute("hidden");
        // document.querySelector("[target='page4']").removeAttribute("hidden");
        // document
        //   .querySelector("cn2-fixed-footer")
        //   .setAttribute("data-next-page", "page3");
      }

      // if(element.checked){
      //   document.getElementById("VPPRO_NewSubm10").checked = false;
      //   document.getElementById("VPPRO_Resu10").checked = false;
      //   for(field of feeNewSubFields){
      //     field.setAttribute("disabled","");
      //     field.removeAttribute("mandatory");
      //   }
      // }
      break;
    case "AMENSUB_RADIO2":
      if (element.checked) {
        // hideDiv(computeDiv);
        // document.querySelector("[target='page3']").removeAttribute("hidden");
        // document.querySelector("[target='page4']").removeAttribute("hidden");
        // document
        //   .querySelector("cn2-fixed-footer")
        //   .setAttribute("data-next-page", "page3");
      }
      // if(element.checked){
      //   document.getElementById("VPPRO_NewSubm10").checked = false;
      //   document.getElementById("VPPRO_Resu10").checked = false;
      //   for(field of feeNewSubFields){
      //     field.setAttribute("disabled","");
      //     field.removeAttribute("mandatory");
      //   }
      // }
      break;
  }
}

function Oths_CHECK_change(element) {
  if (document.getElementById(element.id).checked) {
    document.getElementById("FIELD1").removeAttribute("hidden");
  } else {
    document.getElementById("FIELD1").setAttribute("hidden", "");
    document.getElementById("FIELD1").value = "";
  }
}

function disableCheck(group) {
  let checks = document.querySelectorAll(`[group=${group}]`);
  for (let i = 0; i < checks.length; i++) {
    checks[i].setAttribute("disabled", "");
    checks[i].checked = false;
  }
}

function enableCheck(group) {
  let checks = document.querySelectorAll(`[group=${group}]`);
  for (let i = 0; i < checks.length; i++) {
    checks[i].removeAttribute("disabled");
  }
}

function enableManda(id) {
  id.removeAttribute("disabled");
  id.setAttribute("mandatory", "");
  id.setAttribute("checked", "");
}

function disableManda(id) {
  id.setAttribute("disabled", "");
  id.removeAttribute("mandatory");
  id.removeAttribute("checked");
  id.checked = false;
}

function hideDiv(id) {
  for (let i = 0; i < id.length; i++) {
    id[i].setAttribute("hidden", "");
  }
}

function showDiv(id) {
  for (let i = 0; i < id.length; i++) {
    id[i].removeAttribute("hidden");
  }
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

function atLeastOneB(element) {
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

function atLeastOneC() {
  let checks1 = document.getElementById("ROADSLOD_CHECK1_1_1");
  let checks2 = document.getElementById("ROADSLOD_CHECK1_1_2");
  let checks3 = document.getElementById("ROADSLOD_CHECK1_2");
  let rad1 = document.getElementById("ROADSLOD_RADIO10");


  if (checks1.checked || checks2.checked) {
    checks3.checked = false;
    checks3.removeAttribute("mandatory");
    checks3.removeAttribute("checked");
  } else if (checks3.checked) {
    checks1.checked = false;
    checks1.removeAttribute("mandatory");
    checks1.removeAttribute("checked");
    checks2.checked = false;
    checks2.removeAttribute("mandatory");
    checks2.removeAttribute("checked");
    checks3.removeAttribute("mandatory");
    checks3.removeAttribute("checked");
  } else {
    checks3.checked = false;
    checks3.setAttribute("mandatory", "");
    checks3.setAttribute("checked", "");
    if (rad1.checked) {
      checks1.checked = false;
      checks1.setAttribute("mandatory", "");
      checks1.setAttribute("checked", "");
      checks2.checked = false;
      checks2.setAttribute("mandatory", "");
      checks2.setAttribute("checked", "");
    }
  }
  ROADSLOD_CHECK1_2_change(checks3);
}

function enableMandatoryCheckboxes(group) {
  let checkboxes = document.querySelectorAll(`[mandatory-group="${group}"]`);
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].setAttribute("mandatory", "");
    checkboxes[i].setAttribute("checked", "");
    if (checkboxes[i].hasAttribute("disabled")) {
      checkboxes[i].removeAttribute("disabled");
    }
  }
}

function disableMandatoryCheckboxes(group) {
  let checkboxes = document.querySelectorAll(`[mandatory-group="${group}"]`);
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].removeAttribute("mandatory");
    checkboxes[i].removeAttribute("checked");
    checkboxes[i].checked = false;
  }
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    formContainer.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = formContainer.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function removeMandaInser(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount > 1) {
    let textBox = formContainer.querySelectorAll(".street");
    for (let i = 1; i < textBox.length; i++) {
      textBox[i].removeAttribute("mandatory");
    }
  } else {
    formContainer.querySelector(".street").setAttribute("mandatory", "")
    if (document.getElementById("ProjectAddress_Road_Code_Desc10").value.length == 0) {
      document.getElementById("ProjectAddress_Road_Code_Desc10").setAttribute("mandatory", "");
    } else {
      document.getElementById("ProjectAddress_Road_Code_Desc10").setAttribute("mandatory", "");
      document.getElementById("ProjectAddress_Road_Code_Desc10").shadowRoot.querySelector("input").removeAttribute("class");
      document.getElementById("ProjectAddress_Road_Code_Desc10").shadowRoot.querySelector("input").setAttribute("class", "form-control");
    }
  }

  if (document.getElementById("ProjectAddress_Road_Code_Desc10").value.length == 0) {
    document.getElementById("ProjectAddress_Road_Code_Desc10").setAttribute("mandatory", "");
  } else {
    document.getElementById("ProjectAddress_Road_Code_Desc10").setAttribute("mandatory", "");
    document.getElementById("ProjectAddress_Road_Code_Desc10").shadowRoot.querySelector("input").removeAttribute("class");
    document.getElementById("ProjectAddress_Road_Code_Desc10").shadowRoot.querySelector("input").setAttribute("class", "form-control");
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

function add_change(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount > 1) {
    let firstField = document.querySelectorAll(".lotNo_first");
    let lastField = document.querySelectorAll(".lotNo_Last");
    for (let i = 0; i < firstField.length; i++) {
      firstField[firstField.length - 1].value = "MK";
      lastField[firstField.length - 1].value = "N";
    }
  }
}

function removeManda(element) {
  if (document.getElementById(element.id).checked) {
    document.getElementById(element.id).removeAttribute("mandatory");
    document.getElementById(element.id).removeAttribute("checked");
  } else {
    document.getElementById(element.id).setAttribute("mandatory", "");
    document.getElementById(element.id).setAttribute("checked", "");
  }
}

function CHECK_one(element, check) {
  let check1 = document.getElementById(check);
  if (element.checked) {
    check1.checked = false;
  }
}

function disableROADSLOGDC_7(element) {
  let newStreet = document.getElementById("CHECK1");
  let retainStruct = document.getElementById("CHECK3");
  let vehicularPede = document.getElementById("CHECK4");
  let checkboxes = document.querySelectorAll("[group-id='disableROADSLOGDC_CHECK7']");
  if (newStreet.checked == true || retainStruct.checked == true || vehicularPede.checked == true) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
    }
  }
}
function FeeCompAndDecl_DeveOtheThanChk10_change(element) {
  let main = document.getElementById(element.id);
  let checkbox = document.getElementById("FeeCompAndDecl_DeveOtheThanChk10");

  if (main.checked) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

function DeveSubType(element) {
  for (let a of document
    .querySelector("[dev-sub-type]")
    .querySelectorAll("cn2-checkbox")) {
    if (a.id == element.id) a.checked = true;
    else a.checked = false;
  }

  let institutionalList = document.getElementById("DeveSubType_FIELD10");
  let civilEngineeringWorksList = document.getElementById("DeveSubType_FIELD20");
  let otherList = document.getElementById("DeveSubType_FIELD30");

  //	Institutional
  if (element.id == "DeveSubType_CHECK20") {
    institutionalList.removeAttribute("hidden");
  } else {
    institutionalList.setAttribute("hidden", "");
    institutionalList.value = "";
  }
  // Civil Engineering Works
  if (element.id == "DeveSubType_CHECK21") {
    civilEngineeringWorksList.removeAttribute("hidden");
  } else {
    civilEngineeringWorksList.setAttribute("hidden", "");
    civilEngineeringWorksList.value = "";
  }
  // Others
  if (element.id == "DeveSubType_CHECK22") {
    otherList.removeAttribute("hidden");
  } else {
    otherList.setAttribute("hidden", "");
    otherList.value = "";
  }

}

function deactivateFields() {
  let fields = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan40"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60"),
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120"),
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140"),
    document.getElementById("FeeCompAndDecl_Quan150"),
    document.getElementById("FeeCompAndDecl_Quan160")
  ];

  let feeFields = [
    document.getElementById("VPPRO_NewSubm_ReceNo10"),
    document.getElementById("VPPRO_NewSubm_Amount20"),
    document.getElementById("VPPRO_Resu_SubmNoFeePaid10"),
    document.getElementById("VPPRO_Resu_Amount20"),
    document.getElementById("VPPRO_Resu_ReceNo10")
  ];
  let radios = [
    document.getElementById("VPPRO_NewSubm10"),
    document.getElementById("VPPRO_Resu10"),
    document.getElementById("VPPRO_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPPRO_Resu_TopUpPaymDone10")
  ];
  let check = [
    document.getElementById("FeeCompAndDecl_LandHousDeveChk10"),
    document.getElementById("FeeCompAndDecl_DeveOtheThanChk10"),
    document.getElementById("FeeCompAndDecl_StanStreWorkChk10")
  ];
  // for (let i = 0; i < checks.length; i++) {
  // 	checks[i].checked = false;
  // }
  for (field of fields) {
    field.setAttribute("disabled", "");
    field.value = "";
  }
  for (field of feeFields) {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }

  for (c of check) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
  for (c of radios) {
    c.checked = false;
  }
}

function avtivateFields() {
  let fields = [
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120")
  ];

  for (field of fields) {
    field.removeAttribute("disabled");
  }
}

function FeeCompAndDecl_Quan10_change(element, result) {
  let res = document.getElementById(result);
  let final = 210 * element.value;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan20_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 10;
  let final = 110 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan30_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 50;
  let final = 450 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan50_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 10;
  let final = 180 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan60_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 50;
  let final = 1000 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan70_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 1000;
  let final = 140 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan100_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 10;
  let final = 190 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function FeeCompAndDecl_Quan120_change(element, result) {
  let res = document.getElementById(result);

  let price = element.value / 50;
  let final = 1000 * price;
  res.value = final.toFixed(2);
  if (!element.value) {
    res.value = "";
  }
}

function ApplType_RTDCLodgement_No10_change(element) {
  if (element.checked) {
    document
      .getElementById("FeeCompAndDecl_Quan40")
      .setAttribute("disabled", "");
    document.getElementById("FeeCompAndDecl_Quan40").value = "";
    document.getElementById("FeeCompAndDecl_Quan40_computed").value = "";
  }
  declConditionSectionIIASub1();
}

function ApplType_RTDCLodgement_Yes10_change(element) {
  if (element.checked) {
    if (document.getElementById("DeveSubType_CHECK1").checked) {
      document
        .getElementById("FeeCompAndDecl_Quan40")
        .removeAttribute("disabled");
    }
  }
  declConditionSectionIIASub1();
}

function VPPRO_Resu_change(element) {
  let fields = [
    document.getElementById("VPPRO_Resu_Amount20"),
    document.getElementById("VPPRO_Resu_ReceNo10")
  ];
  switch (element.id) {
    case "VPPRO_Resu_FullPaymDoneEarl10":
      if (element.checked) {
        document
          .getElementById("VPPRO_Resu_SubmNoFeePaid10")
          .removeAttribute("disabled");
        document
          .getElementById("VPPRO_Resu_SubmNoFeePaid10")
          .setAttribute("mandatory", "");

        for (field of fields) {
          field.setAttribute("disabled", "");
          field.removeAttribute("mandatory");
          field.value = "";
        }
      }
      break;
    case "VPPRO_Resu_TopUpPaymDone10":
      if (element.checked) {
        document
          .getElementById("VPPRO_Resu_SubmNoFeePaid10")
          .setAttribute("disabled", "");
        document
          .getElementById("VPPRO_Resu_SubmNoFeePaid10")
          .removeAttribute("mandatory");
        document.getElementById("VPPRO_Resu_SubmNoFeePaid10").value = "";

        for (field of fields) {
          field.removeAttribute("disabled");
          field.setAttribute("mandatory", "");
        }
      }
      break;
  }
}

function VPPRO_change(element) {
  let NewSubFields = [
    document.getElementById("VPPRO_NewSubm_ReceNo10"),
    document.getElementById("VPPRO_NewSubm_Amount20")
  ];
  let ResubRadios = [
    document.getElementById("VPPRO_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPPRO_Resu_TopUpPaymDone10")
  ];
  let Resubfields = [
    document.getElementById("VPPRO_Resu_Amount20"),
    document.getElementById("VPPRO_Resu_ReceNo10"),
    document.getElementById("VPPRO_Resu_SubmNoFeePaid10")
  ];

  switch (element.id) {
    case "VPPRO_NewSubm10":
      if (element.checked) {
        for (field of NewSubFields) {
          field.removeAttribute("disabled");
          field.setAttribute("mandatory", "");
        }
        for (radios of ResubRadios) {
          radios.setAttribute("disabled", "");
          radios.checked = false;
        }
        for (field of Resubfields) {
          field.setAttribute("disabled", "");
          field.removeAttribute("mandatory");
          field.value = "";
        }
      }
      break;
    case "VPPRO_Resu10":
      if (element.checked) {
        for (radios of ResubRadios) {
          radios.removeAttribute("disabled");
        }
        for (field of NewSubFields) {
          field.setAttribute("disabled", "");
          field.removeAttribute("mandatory");
          field.value = "";
        }
      }
      break;
  }
}

function subProjTitle_change(element) {
  let apptype5 = [
    document.getElementById("CHECK5"),
    document.getElementById("CHECK6"),
    document.getElementById("CHECK7"),
  ];


  if (document.getElementById("ApplType_RTStreetPln").checked) {
    let apptype5pass = false;
    let standStreetWorks = document.querySelectorAll("#standStreetWorks");
    for (let i = 0; i < apptype5.length; i++) {
      if (apptype5[i].checked) {
        apptype5pass = true;
      }
    }
    if (apptype5pass == true) {
      for (let i = 0; i < standStreetWorks.length; i++) {
        standStreetWorks[i].setAttribute("hidden", "");
      }
    } else {
      for (let i = 0; i < standStreetWorks.length; i++) {
        standStreetWorks[i].removeAttribute("hidden");
      }
    }
  }
}

function FeeCompAndDecl_LandHousDeveChk10_change(element) {
  let landHouseDev = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan40"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60")
  ];
  let landHouseDevComputed = [
    document.getElementById("FeeCompAndDecl_Quan10_computed"),
    document.getElementById("FeeCompAndDecl_Quan20_computed"),
    document.getElementById("FeeCompAndDecl_Quan30_computed"),
    document.getElementById("FeeCompAndDecl_Quan40_computed"),
    document.getElementById("FeeCompAndDecl_Quan50_computed"),
    document.getElementById("FeeCompAndDecl_Quan60_computed")
  ];
  let forRadio4 = [
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60")
  ];
  let forRadio4b = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30")
  ];
  if (element.checked) {
    if (document.getElementById("ApplType_RTDCLodgement").checked) {
      document
        .getElementById("FeeCompAndDecl_Quan10")
        .removeAttribute("disabled");
      if (document.getElementById("ApplType_RTDCLodgement_Yes10").checked) {
        document
          .getElementById("FeeCompAndDecl_Quan40")
          .removeAttribute("disabled");
      }
    } else {
      for (fields of landHouseDev) {
        fields.removeAttribute("disabled");
      }
    }

    if (
      document.getElementById("ApplType_RTLodgeStreet").checked &&
      document.getElementById("DeveSubType_CHECK1").checked
    ) {
      for (let i = 0; i < forRadio4.length; i++) {
        forRadio4[i].setAttribute("disabled", "");
      }
    }

    if (
      document.getElementById("ApplType_RTLodgeStreet").checked &&
      pass == true
    ) {
      for (let j = 0; j < forRadio4b.length; j++) {
        forRadio4b[j].setAttribute("disabled", "");
      }
    }

    if (document.getElementById("ApplType_RTStreetPln").checked) {
      for (let k = 0; k < forRadio4b.length; k++) {
        forRadio4b[k].setAttribute("disabled", "");
      }
    }

    if (document.getElementById("ApplType_RTConstStreet").checked) {
      for (let k = 0; k < forRadio4b.length; k++) {
        forRadio4b[k].setAttribute("disabled", "");
      }
    }
  } else {
    for (fields of landHouseDev) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
    for (fields of landHouseDevComputed) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
  }
}

function FeeCompAndDecl_DeveOtheThanChk10_change(element) {
  let devOtherFields = [
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120")
  ];
  let devOtherFieldsComputed = [
    document.getElementById("FeeCompAndDecl_Quan70_computed"),
    document.getElementById("FeeCompAndDecl_Quan80_computed"),
    document.getElementById("FeeCompAndDecl_Quan90_computed"),
    document.getElementById("FeeCompAndDecl_Quan100_computed"),
    document.getElementById("FeeCompAndDecl_Quan110_computed"),
    document.getElementById("FeeCompAndDecl_Quan120_computed")
  ];

  let forRadio4 = [
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120")
  ];

  let forRadio4b = [
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90")
  ];
  if (element.checked) {
    if (document.getElementById("ApplType_RTDCLodgement").checked) {
      document
        .getElementById("FeeCompAndDecl_Quan70")
        .removeAttribute("disabled");
      document
        .getElementById("FeeCompAndDecl_Quan100")
        .removeAttribute("disabled");
    } else {
      for (field of devOtherFields) {
        field.removeAttribute("disabled");
      }
    }

    if (
      document.getElementById("ApplType_RTLodgeStreet").checked &&
      document.getElementById("DeveSubType_CHECK1").checked
    ) {
      for (let i = 0; i < forRadio4.length; i++) {
        forRadio4[i].setAttribute("disabled", "");
      }
    }

    if (
      document.getElementById("ApplType_RTLodgeStreet").checked &&
      pass == true
    ) {
      for (let j = 0; j < forRadio4b.length; j++) {
        forRadio4b[j].setAttribute("disabled", "");
      }
    }

    if (document.getElementById("ApplType_RTStreetPln").checked) {
      if (pass == true) {
        for (let k = 0; k < forRadio4b.length; k++) {
          forRadio4b[k].setAttribute("disabled", "");
        }
      }
    }

    if (document.getElementById("ApplType_RTConstStreet").checked) {
      for (let k = 0; k < forRadio4b.length; k++) {
        forRadio4b[k].setAttribute("disabled", "");
      }
    }
    if (document.getElementById("ApplType_RTDeveCntrl_No10").checked) {
      deactivateForAppType3(false);
    }
  } else {
    for (fields of devOtherFields) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
    for (fields of devOtherFieldsComputed) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
  }
}

function FeeCompAndDecl_StanStreWorkChk10_change(element) {
  let standAloneFields = [
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140"),
    document.getElementById("FeeCompAndDecl_Quan150"),
    document.getElementById("FeeCompAndDecl_Quan160")
  ];
  let standAloneFieldsComputed = [
    document.getElementById("FeeCompAndDecl_Quan130_computed"),
    document.getElementById("FeeCompAndDecl_Quan140_computed"),
    document.getElementById("FeeCompAndDecl_Quan150_computed"),
    document.getElementById("FeeCompAndDecl_Quan160_computed")
  ];

  let forRadio4b = [
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140")
  ];
  if (element.checked) {
    for (field of standAloneFields) {
      field.removeAttribute("disabled");
    }

    if (document.getElementById("ApplType_RTStreetPln").checked) {
      for (let k = 0; k < forRadio4b.length; k++) {
        forRadio4b[k].setAttribute("disabled", "");
      }
    }

    if (document.getElementById("ApplType_RTConstStreet").checked) {
      for (let k = 0; k < forRadio4b.length; k++) {
        forRadio4b[k].setAttribute("disabled", "");
      }
    }
  } else {
    for (fields of standAloneFields) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
    for (fields of standAloneFieldsComputed) {
      fields.setAttribute("disabled", "");
      fields.value = "";
    }
  }
}

function radio7item(condition) {
  let datefields = [
    document.getElementById("NDate12"),
    document.getElementById("NDate11")
  ];
  document.getElementById("NDate10").setAttribute("disabled", "");
  for (date of datefields) {
    date.setAttribute("disabled", "");
    date.removeAttribute("mandatory");
    date.value = "";
  }
}

function enableField(element, datefield2) {
  let datefield = document.getElementById(datefield2);
  if (element.checked) {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  } else {
    datefield.setAttribute("disabled", "");
    datefield.value = "";
    datefield.removeAttribute("mandatory");
  }

  if (datefield.id == "NDate10") {
    datefield.removeAttribute("mandatory");
  }
}

function toggleSubProjtitle(condition) {
  let checkboxes = document.querySelectorAll("[group='subProjTitle']");
  if (condition == true) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].removeAttribute("disabled");
      checkboxes[i].checked = false;
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].setAttribute("disabled", "");
      checkboxes[i].checked = false;
    }
  }
}

function toggleTransImpAss(condition) {
  let ref = document.getElementById("Project_Project_Ref_No10");
  let bimRadio = document.querySelector("[switch-id='BIMRADIO1']");

  if (condition == true) {
    ref.removeAttribute("disabled");
    bimRadio.setAttribute("disabled", "");
    bimRadio.checked = false;
  } else {
    ref.setAttribute("disabled", "");
    bimRadio.removeAttribute("disabled");
    bimRadio.checked = false;
  }
}

//
function radSelection() {
  flag = true;
}
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  flag = false;
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let rdbnt = [...document.querySelectorAll("[name='application']")].filter(
      r => r.checked === true
    )[0];
    radioBtnSelection(rdbnt);
    let prefix = "LotMKTS_Lot_No"
    let prefix2 = "ProjectAddress_Road_Code_Desc"
    stopHere: for (let a = 2; a < 50; a++) {
      if (jsonData.hasOwnProperty(prefix + a + 0)) {
        let parentDiv = document.getElementById("stForm");
        let tempTable = parentDiv.getElementsByTagName("div");
        let numberOfForms = [];
        for (let x = 0; x < tempTable.length; x++) {
          if (
            tempTable[x].hasAttribute("id") &&
            !tempTable[x].hasAttribute("child")
          ) {
            numberOfForms.push(tempTable[x]);
          }
        }
        let menuList = document.getElementById("menu").children;
        let b = false;
        for (let c = 0; c < menuList.length; c++) {
          if (menuList[c].hasAttribute("warning") || menuList[c].hasAttribute("valid")) {
            b = true;
          }
        }
        if (b) {
          for (let d = 0; d < menuList.length; d++) {
            if (!menuList[d].hasAttribute("hidden")) {
              if (checkPage(menuList[d].getAttribute("target"))) {
                menuList[d].removeAttribute("valid");
                menuList[d].setAttribute("warning", "");
              } else {
                menuList[d].removeAttribute("warning");
                menuList[d].setAttribute("valid", "");
              }
            }
          }
        }
        let suffix = numberOfForms.length + 1;
        let clone = numberOfForms[0].cloneNode(true);
        let selectInputs = clone.getElementsByTagName("input");
        for (let select of selectInputs) {
          newId = buildId(select, suffix);
          clone
            .querySelector("input[type=radio][id=" + select.id + "]")
            .setAttribute("name", checkID(select.getAttribute("name")) + suffix);
          clone
            .querySelector("input[type=radio][id=" + select.id + "]")
            .setAttribute("id", newId);
          //jsonData[newId] = "";
        }

        let preffix = checkID("A1");
        clone.id = preffix + suffix;

        parentDiv.appendChild(clone);
        // if (lNo !== undefined) {
        //   tempP = checkID(clone.querySelector(lNo).innerHTML);
        //   clone.querySelector(lNo).innerHTML = tempP + suffix;
        // }
        insertChangeId2(clone, suffix);
        disableDelete('stForm');
        add_change('stForm');
      } else {
        break stopHere;
      }
    }

    stopHere2: for (let e = 2; e < 50; e++) {
      if (document.getElementById("LotMKTS_Lot_No" + e + 0) != null) {
        document.getElementById("LotMKTS_Lot_No" + e + 0).value = jsonData["LotMKTS_Lot_No" + e + 0]
        document.getElementById("LotMKTS_Plot_No" + e + 0).value = jsonData["LotMKTS_Plot_No" + e + 0]
        document.getElementById("LotMKTS_MK_TS_Code_Code" + e + 0).value = jsonData["LotMKTS_MK_TS_Code_Code" + e + 0]
        document.getElementById("LotMKTS_MK_TS_Code_No" + e + 0).value = jsonData["LotMKTS_MK_TS_Code_No" + e + 0]
        document.getElementById("LotMKTS_Part_Lot_Flag" + e + 0).value = jsonData["LotMKTS_Part_Lot_Flag" + e + 0]
      } else {
        break stopHere2;
      }
    }

    stopHere3: for (let f = 2; f < 50; f++) {
      if (jsonData.hasOwnProperty(prefix2 + f + 0)) {
        let parentDiv = document.getElementById("streetName");
        let tempTable = parentDiv.getElementsByTagName("div");
        let numberOfForms = [];
        for (let y = 0; y < tempTable.length; y++) {
          if (
            tempTable[y].hasAttribute("id") &&
            !tempTable[y].hasAttribute("child")
          ) {
            numberOfForms.push(tempTable[y]);
          }
        }
        let menuList = document.getElementById("menu").children;
        let g = false;
        for (let h = 0; h < menuList.length; h++) {
          if (menuList[h].hasAttribute("warning") || menuList[h].hasAttribute("valid")) {
            g = true;
          }
        }
        if (g) {
          for (let i = 0; i < menuList.length; i++) {
            if (!menuList[i].hasAttribute("hidden")) {
              if (checkPage(menuList[i].getAttribute("target"))) {
                menuList[i].removeAttribute("valid");
                menuList[i].setAttribute("warning", "");
              } else {
                menuList[i].removeAttribute("warning");
                menuList[i].setAttribute("valid", "");
              }
            }
          }
        }
        let suffix = numberOfForms.length + 1;
        let clone = numberOfForms[0].cloneNode(true);
        let selectInputs = clone.getElementsByTagName("input");
        for (let select of selectInputs) {
          newId = buildId(select, suffix);
          clone
            .querySelector("input[type=radio][id=" + select.id + "]")
            .setAttribute("name", checkID(select.getAttribute("name")) + suffix);
          clone
            .querySelector("input[type=radio][id=" + select.id + "]")
            .setAttribute("id", newId);
          //jsonData[newId] = "";
        }

        let preffix = checkID("ST1");
        clone.id = preffix + suffix;

        parentDiv.appendChild(clone);
        // if (lNo !== undefined) {
        //   tempP = checkID(clone.querySelector(lNo).innerHTML);
        //   clone.querySelector(lNo).innerHTML = tempP + suffix;
        // }
        insertChangeId2(clone, suffix);
        disableDelete('streetName');
        removeMandaInser('streetName');
      } else {
        break stopHere3;
      }
    }

    stopHere4: for (let j = 2; j < 50; j++) {
      if (document.getElementById("ProjectAddress_Road_Code_Desc" + j + 0) != null) {
        document.getElementById("ProjectAddress_Road_Code_Desc" + j + 0).value = jsonData["ProjectAddress_Road_Code_Desc" + j + 0]
      } else {
        break stopHere4;
      }
    }
  }
});

function insertChangeId2(clone, index) {
  if (clone.querySelector("h2") !== null) {
    if (index % 2 == 0) {
      clone
        .querySelector("h2")
        .setAttribute("style", "background-color: white;");
      clone
        .querySelector("[child='div']")
        .setAttribute("style", "background-color: white;");
    } else {
      clone
        .querySelector("h2")
        .setAttribute("style", "background-color: #f4f4f4");
      clone
        .querySelector("[child='div']")
        .setAttribute("style", "background-color: #f4f4f4");
    }
  }
  let selectInputs = clone.getElementsByTagName("cn2-switchbutton");
  for (let select of selectInputs) {
    if (select.hasAttribute("switch-id")) {
      let dataTrue = buildId(
        document.getElementById(select.getAttribute("data-true")),
        index
      );
      let dataFalse = buildId(
        document.getElementById(select.getAttribute("data-false")),
        index
      );
      let prefix, suffix;
      if (select.getAttribute("prefix") !== null) {
        prefix = select.getAttribute("prefix");
      }
      if (select.getAttribute("suffix") !== null) {
        suffix = select.getAttribute("suffix");
      } else {
        suffix = "";
      }
      let newId = prefix + index + suffix;
      select.setAttribute("data-true", dataTrue);
      select.setAttribute("data-false", dataFalse);
      select.setAttribute("switch-id", newId);
    } else {
      newId = buildId(select, index);
      select.setAttribute("id", newId);
      //jsonData[newId] = false;
    }
  }
  selectInputs = clone.getElementsByTagName("cn2-textbox");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
    //jsonData[newId] = "";
  }
  selectInputs = clone.getElementsByTagName("cn2-textarea");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
    //jsonData[newId] = "";
  }
  selectInputs = clone.getElementsByTagName("cn2-datefield");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
    //jsonData[newId] = "";
  }
  selectInputs = clone.getElementsByTagName("cn2-select");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
    //jsonData[newId] = "";
  }
  selectInputs = clone.getElementsByTagName("cn2-checkbox");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
    //jsonData[newId] = false;
  }
  selectInputs = clone.getElementsByTagName("cn2-button");
  for (let select of selectInputs) {
    newId = buildId(select, index);
    select.setAttribute("id", newId);
  }
  selectInputs = clone.getElementsByTagName("div");
  for (let select of selectInputs) {
    if (select.hasAttribute("child")) {
      newId = buildId(select, index);
      select.setAttribute("id", newId);
    }
  }
  selectInputs = clone.getElementsByTagName("span");
  for (let select of selectInputs) {
    if (select.hasAttribute("id") && select.hasAttribute("child")) {
      newId = buildId(select, index);
      select.setAttribute("id", newId);
      select.setAttribute("href", newId);
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

function ApplType_RTDeveCntrl_change(element) {

  let p2check = [
    document.getElementById("CHECK1"),
    document.getElementById("CHECK2"),
    document.getElementById("CHECK3"),
    document.getElementById("CHECK4"),
    document.getElementById("CHECK5"),
    document.getElementById("CHECK6"),
    document.getElementById("CHECK7"),
    document.getElementById("CHECK8"),
    document.getElementById("Oths_CHECK"),
  ];

  switch (element.id) {
    case "ApplType_RTDeveCntrl_No10":
      deactivateForAppType3(false);
      for (let a of p2check) {
        a.checked = false;
        a.setAttribute("disabled", "");
      }
      break;
    case "ApplType_RTDeveCntrl_Yes10":
      for (let a of p2check) {
        a.checked = false;
        a.removeAttribute("disabled");
      }
    default:
      break;
  }
}

function deactivateForAppType3(condition) {
  let fields = [
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan120"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan80")
  ];
  let disabledFields = [
    document.getElementById("FeeCompAndDecl_Quan80_computed"),
    document.getElementById("FeeCompAndDecl_Quan90_computed"),
    document.getElementById("FeeCompAndDecl_Quan100_computed"),
    document.getElementById("FeeCompAndDecl_Quan120_computed")
  ];

  if (condition == false) {
    for (let f of fields) {
      f.setAttribute("disabled", "");
      f.value = "";
    }

    for (let f of disabledFields) {
      f.value = "";
    }
  }
}

function resetFee() {
  let fields = [
    document.getElementById("FeeCompAndDecl_Quan10"),
    document.getElementById("FeeCompAndDecl_Quan20"),
    document.getElementById("FeeCompAndDecl_Quan30"),
    document.getElementById("FeeCompAndDecl_Quan40"),
    document.getElementById("FeeCompAndDecl_Quan50"),
    document.getElementById("FeeCompAndDecl_Quan60"),
    document.getElementById("FeeCompAndDecl_Quan70"),
    document.getElementById("FeeCompAndDecl_Quan80"),
    document.getElementById("FeeCompAndDecl_Quan90"),
    document.getElementById("FeeCompAndDecl_Quan100"),
    document.getElementById("FeeCompAndDecl_Quan110"),
    document.getElementById("FeeCompAndDecl_Quan120"),
    document.getElementById("FeeCompAndDecl_Quan130"),
    document.getElementById("FeeCompAndDecl_Quan140"),
    document.getElementById("FeeCompAndDecl_Quan150"),
    document.getElementById("FeeCompAndDecl_Quan160")
  ];
  let check = [
    document.getElementById("FeeCompAndDecl_LandHousDeveChk10"),
    document.getElementById("FeeCompAndDecl_DeveOtheThanChk10"),
    document.getElementById("FeeCompAndDecl_StanStreWorkChk10")
  ];

  for (let field of fields) {
    field.setAttribute("disabled", "");
    field.value = "";
  }

  for (let c of check) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
}

function declConditionSectionIIASub1() {
  let app = document.getElementById("ApplType_RTDCLodgement").checked;
  let yes = document.getElementById("ApplType_RTDCLodgement_Yes10").checked;
  let no = document.getElementById("ApplType_RTDCLodgement_No10").checked;
  let withNo = document.getElementById("ROADSLODGDC_CHECK1_1");
  let withYes = document.getElementById("ROADSLODGDC_CHECK1_2");

  if (app) {
    if (yes && !no) {
      withNo.checked = false;
      withNo.setAttribute("disabled", "");

      withYes.checked = false;
      withYes.removeAttribute("disabled");
    } else if (!yes && no) {
      withYes.checked = false;
      withYes.setAttribute("disabled", "");

      withNo.checked = false;
      withNo.removeAttribute("disabled");
    } else {
      withYes.checked = false;
      withYes.setAttribute("disabled", "");
      withNo.checked = false;
      withNo.setAttribute("disabled", "");
    }
  }
}


function sectionIIB() {
  let newSub = document.getElementById("RADIO2").checked;
  let el = [...document.querySelectorAll("[name='application']")].filter(
    r => r.checked === true
  );
  let show = el.length === 1 ? [].includes(el[0].id) : false;

  if (newSub && show) {
    document.getElementById("FeeComputation_div").removeAttribute("hidden");
  } else {
    document.getElementById("FeeComputation_div").setAttribute("hidden", "");
  }
}

// function hideSubProjectTitle(el) {
//   let boxes = document
//     .querySelector("[app-type3]")
//     .querySelectorAll("cn2-checkbox");
//   let valid = ["ApplType_RTStreetPln"];

//   if (valid.includes(el.id)) {
//     for (let a of boxes) {
//       a.checked = false;
//       if (["CHECK1", "CHECK5"].includes(a.id)) {
//         a.setAttribute("disabled", "");
//       } else {
//         a.removeAttribute("disabled");
//       }
//     }
//   }
// }


function clearCheckboxes(getDiv) {
  let dd = document.querySelector(`[clear-id="${getDiv}"]`);
  let checkboxes = dd.querySelectorAll("cn2-checkbox");
  for (let x of checkboxes) {
    x.checked = false;
  }
}

function toggleBuildPlanRefNo(con) {
  let BuildPlanRefNo = document.getElementById("Building_Plan_Ref_No10");
  let label = document.getElementById("Building_Plan_Ref_No10_label");
  if (con) {
    BuildPlanRefNo.removeAttribute("mandatory");
    label.innerHTML = "";
  } else {
    BuildPlanRefNo.setAttribute("mandatory", "");
    label.innerHTML = "*";
  }
}

function ROADSLOD_RADIO_change() {
  document.getElementById("ROADSLOD_RADIO10").removeAttribute("mandatory");
  document.getElementById("ROADSLOD_RADIO10").removeAttribute("checked");
  document.getElementById("ROADSLOD_RADIO11").removeAttribute("mandatory");
  document.getElementById("ROADSLOD_RADIO11").removeAttribute("checked");
  if (document.getElementById("ROADSLOD_RADIO10").checked) {
    document.getElementById("ROADSLOD_CHECK1_1_1").removeAttribute("disabled");
    document.getElementById("ROADSLOD_CHECK1_1_2").removeAttribute("disabled");
    document.getElementById("ROADSLOD_CHECK1_1_1").setAttribute("mandatory", "");
    document.getElementById("ROADSLOD_CHECK1_1_2").setAttribute("checked", "");
    document.getElementById("ROADSLOD_CHECK1_1_1").setAttribute("mandatory", "");
    document.getElementById("ROADSLOD_CHECK1_1_2").setAttribute("checked", "");
  } else {
    document.getElementById("ROADSLOD_CHECK1_1_1").setAttribute("disabled", "");
    document.getElementById("ROADSLOD_CHECK1_1_2").setAttribute("disabled", "");
    document.getElementById("ROADSLOD_CHECK1_1_1").removeAttribute("mandatory");
    document.getElementById("ROADSLOD_CHECK1_1_1").removeAttribute("checked");
    document.getElementById("ROADSLOD_CHECK1_1_2").removeAttribute("mandatory");
    document.getElementById("ROADSLOD_CHECK1_1_2").removeAttribute("checked");
    document.getElementById("ROADSLOD_CHECK1_1_1").checked = false;
    document.getElementById("ROADSLOD_CHECK1_1_2").checked = false;
    delete jsonData["fileAttach10"];
    delete jsonData["fileAttach20"];
  }
}


function eitherOne(element, elements) {
  let checkbox = document.getElementById(element);
  let checkboxes = [];
  for (let a of elements) {
    checkboxes.push(document.getElementById(a));
  }

  if (checkbox.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    if (bothNotChecked(checkboxes)) {
      for (let a of checkboxes) {
        a.removeAttribute("checked");
        a.removeAttribute("mandatory");
        a.checked = false;
      }
    } else {
      if (bothChecked(checkboxes)) {
        for (let a of checkboxes) {
          a.removeAttribute("checked");
          a.removeAttribute("mandatory");
        }
        checkbox.checked = false;
      } else {
        if (oneIsChecked(checkboxes)) {
          for (let a of checkboxes) {
            a.setAttribute("checked", "");
            a.setAttribute("mandatory", "");
          }
        }
      }
    }
  } else if (bothChecked(checkboxes)) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
    for (let a of checkboxes) {
      a.removeAttribute("checked");
      a.removeAttribute("mandatory");
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    for (let a of checkboxes) {
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
  }
}

function bothChecked(elements) {
  let test = true;
  for (let checkbox of elements) {
    if (!checkbox.checked) {
      test = false;
    }
  }
  return test;
}

function bothNotChecked(elements) {
  let test = false;
  for (let checkbox of elements) {
    if (!checkbox.checked) {
      test = true;
    }
  }
  return test;
}

function oneIsChecked(elements) {
  let test = false;
  for (let checkbox of elements) {
    if (checkbox.checked) {
      test = true;
    }
  }
  return test;
}

function ROADSCSC_RAD_change(el) {
  if (el.id == "ROADSCSC_RAD1") {
    document.getElementById("ROADSCSC_RAD2").checked = false
    if (el.checked) {
      for (let a of document.querySelectorAll("[mandatory-group='ROADSCSC_2']")) {
        a.checked = false
        a.setAttribute("mandatory", "")
        a.setAttribute("checked", "")
        a.removeAttribute("disabled")
      }
      for (let b of document.querySelectorAll("[mandaAste]")) {
        b.innerHTML = "*"
      }
    } else {
      for (let a of document.querySelectorAll("[mandatory-group='ROADSCSC_2']")) {
        a.checked = false
        a.removeAttribute("mandatory", "")
        a.removeAttribute("checked", "")
        a.setAttribute("disabled", "")
      }
      for (let b of document.querySelectorAll("[mandaAste]")) {
        b.innerHTML = ""
      }
    }
  } else {
    document.getElementById("ROADSCSC_RAD1").checked = false
    for (let a of document.querySelectorAll("[mandatory-group='ROADSCSC_2']")) {
      a.checked = false
      a.removeAttribute("mandatory", "")
      a.removeAttribute("checked", "")
      a.setAttribute("disabled", "")
    }
    for (let b of document.querySelectorAll("[mandaAste]")) {
      b.innerHTML = ""
    }
  }

}

function subProjMandatory(element) {
  let test = false;
  let checkboxes = [
    document.getElementById("CHECK2"),
    document.getElementById("CHECK3"),
    document.getElementById("CHECK8"),
  ];
  let app6 = document.getElementById("ApplType_RTConstStreet");
  let app6Checkboxes = document.querySelectorAll(`[mandatory-group="ROADSEX"]`);
  let page6Asterisk = document.querySelectorAll(`[page6Asterisk]`);

  for (let a of checkboxes) {
    if (a.checked) {
      test = true;
    }
  }

  if (app6.checked) {
    if (test) {
      enableMandatoryCheckboxes("ROADSEX");
      for (let a of app6Checkboxes) {
        a.setAttribute("event-change", "removeManda(this)")
      }
      for (let a of page6Asterisk) {
        a.innerHTML = "*";
      }
    } else {
      disableMandatoryCheckboxes("ROADSEX");
      for (let a of app6Checkboxes) {
        a.removeAttribute("event-change")
      }
      for (let a of page6Asterisk) {
        a.innerHTML = "";
      }
    }
  }
}
//Internal Checklist
function fileAttachCheck(element, objectName, isAllowMultiple, formName, sectionName) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
      sectionName: sectionName
    };
  } else {
    delete jsonData[objectName];
  }
}

function fileAttachReset() {
  for (let i = 10; i < 70; i = i + 10) {
    delete jsonData["fileAttach" + i];
  }
}

function ROADSLOD_CHECK1_2_change(el) {
  if (el.checked) {
    document.getElementById("ROADSLOD_CHECK1_2_1").removeAttribute("disabled");
    document.getElementById("ROADSLOD_CHECK1_2_2").removeAttribute("disabled");
    document.getElementById("ROADSLOD_CHECK1_2_1").setAttribute("mandatory", "");
    document.getElementById("ROADSLOD_CHECK1_2_2").setAttribute("mandatory", "");
  } else {
    document.getElementById("ROADSLOD_CHECK1_2_1").setAttribute("disabled", "");
    document.getElementById("ROADSLOD_CHECK1_2_2").setAttribute("disabled", "");
    document.getElementById("ROADSLOD_CHECK1_2_1").removeAttribute("mandatory");
    document.getElementById("ROADSLOD_CHECK1_2_2").removeAttribute("mandatory");
    document.getElementById("ROADSLOD_CHECK1_2_1").checked = false;
    document.getElementById("ROADSLOD_CHECK1_2_2").checked = false;
  }
}

function ROADSCSC_1_change(el) {
  if (el.checked) {
    document.getElementById("ROADSCSC_RAD1").removeAttribute("disabled");
    document.getElementById("ROADSCSC_RAD2").removeAttribute("disabled");
    document.getElementById("ROADSCSC_RAD2").setAttribute("mandatory", "");
    document.getElementById("ROADSCSC_RAD1").setAttribute("mandatory", "");
  } else {
    document.getElementById("ROADSCSC_RAD1").setAttribute("disabled", "");
    document.getElementById("ROADSCSC_RAD2").setAttribute("disabled", "");
    document.getElementById("ROADSCSC_RAD2").removeAttribute("mandatory");
    document.getElementById("ROADSCSC_RAD1").removeAttribute("mandatory");
    document.getElementById("ROADSCSC_RAD1").checked = false;
    document.getElementById("ROADSCSC_RAD2").checked = false;
  }

  for (let a of document.querySelectorAll("[mandatory-group='ROADSCSC_2']")) {
    a.checked = false
    a.removeAttribute("mandatory", "")
    a.removeAttribute("checked", "")
    a.setAttribute("disabled", "")
  }
  for (let b of document.querySelectorAll("[mandaAste]")) {
    b.innerHTML = ""
  }
}

function ROADSSP_CHECK5_change(el) {

  if (el.checked) {
    if (el.id == "ROADSSP_CHECK5_1") {
      document.getElementById("ROADSSP_CHECK5_2").checked = false
      document.getElementById("ROADSSP_CHECK5_2").setAttribute("disabled", "");
    } else if (el.id == "ROADSSP_CHECK5_2") {
      document.getElementById("ROADSSP_CHECK5_1").checked = false
      document.getElementById("ROADSSP_CHECK5_1").setAttribute("disabled", "");
    }
  } else {
    document.getElementById("ROADSSP_CHECK5_2").removeAttribute("disabled");
    document.getElementById("ROADSSP_CHECK5_1").removeAttribute("disabled");
  }

}

function ROADSEX_CHECK8_change(el) {

  if (el.checked) {
    if (el.id == "ROADSEX_CHECK8_1") {
      document.getElementById("ROADSEX_CHECK8_2").checked = false
      document.getElementById("ROADSEX_CHECK8_2").setAttribute("disabled", "");
    } else if (el.id == "ROADSEX_CHECK8_2") {
      document.getElementById("ROADSEX_CHECK8_1").checked = false
      document.getElementById("ROADSEX_CHECK8_1").setAttribute("disabled", "");
    }
  } else {
    document.getElementById("ROADSEX_CHECK8_1").removeAttribute("disabled");
    document.getElementById("ROADSEX_CHECK8_2").removeAttribute("disabled");
  }

}
