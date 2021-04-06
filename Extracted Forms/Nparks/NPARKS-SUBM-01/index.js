function setAppTypeOptions() {
  let appType = document.getElementById("PartOfProp_ApplType10");
  let appStage = document.getElementById("PartOfProp_SumbType10").value;
  let appMode = document.getElementById("PartOfProp_ApplMode10").value;

  if (appStage === "Pre-Submission Consultation(PC)") {
    document.getElementById("PartOfProp_ApplMode10").value = "Normal(Non-SD)";
    document
      .getElementById("PartOfProp_ApplMode10")
      .setAttribute("disabled", "");
    appType.removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Building Development Within Gazetted Tree Conservation Areas (TCA):Building Development Within Gazetted Tree Conservation Areas (TCA),Building Development On Vacant Land:Building Development On Vacant Land,Building Development (Non TCA and Non Vacant Land):Building Development (Non TCA and Non Vacant Land),Rapid Transit System Depot/, Bus Depot or Bus Interchange:Rapid Transit System Depot/, Bus Depot or Bus Interchange,External Work:External Work,New Roads (SWA Section 18):New Roads (SWA Section 18),Covered Linkway (LTA as developer):Covered Linkway (LTA as developer),Pedestrian Overhead Bridge:Pedestrian Overhead Bridge,Pedestrian Overhead Bridge (LTA as developer):Pedestrian Overhead Bridge (LTA as developer),Pedestrian Mall:Pedestrian Mall,Promenade:Promenade,Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government):Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government),Rail Related Building/Structures:Rail Related Building/Structures,Road Related Building/Structures:Road Related Building/Structures"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Development Control (DC)" &&
    appMode === "Normal(Non-SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Building Development Within Gazetted Tree Conservation Areas (TCA):Building Development Within Gazetted Tree Conservation Areas (TCA),Building Development On Vacant Land:Building Development On Vacant Land,Building Development (Non TCA and Non Vacant Land):Building Development (Non TCA and Non Vacant Land),Rapid Transit System Depot/, Bus Depot or Bus Interchange:Rapid Transit System Depot/, Bus Depot or Bus Interchange,Pedestrian Overhead Bridge:Pedestrian Overhead Bridge,Covered Linkway (LTA as developer):Covered Linkway (LTA as developer),Pedestrian Overhead Bridge (LTA as developer):Pedestrian Overhead Bridge (LTA as developer),Pedestrian Mall:Pedestrian Mall,Promenade:Promenade,Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government):Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government),Rail Related Building/Structures:Rail Related Building/Structures,Road Related Building/Structures:Road Related Building/Structures"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Development Control (DC)" &&
    appMode === "Self-Declaration(SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Self Declaration For Internal (Tree Conservation Area):Self Declaration For Internal (Tree Conservation Area),Self Declaration For Internal (Vacant Land):Self Declaration For Internal (Vacant Land),Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land):Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Building Plan Internal (BP INT)" &&
    appMode === "Normal(Non-SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Building Development Within Gazetted Tree Conservation Areas (TCA):Building Development Within Gazetted Tree Conservation Areas (TCA),Building Development On Vacant Land:Building Development On Vacant Land,Building Development (Non TCA and Non Vacant Land):Building Development (Non TCA and Non Vacant Land),Rapid Transit System Depot/, Bus Depot or Bus Interchange:Rapid Transit System Depot/, Bus Depot or Bus Interchange,Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government):Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government),Rail Related Building/Structures:Rail Related Building/Structures,Road Related Building/Structures:Road Related Building/Structures,PUB ABC Projects:PUB ABC Projects"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Building Plan Internal (BP INT)" &&
    appMode === "Self-Declaration(SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Self Declaration For Internal (Tree Conservation Area):Self Declaration For Internal (Tree Conservation Area),Self Declaration For Internal (Vacant Land):Self Declaration For Internal (Vacant Land),Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land):Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Building Plan External (BP EXW)" &&
    appMode === "Normal(Non-SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "External Work:External Work,External Works by LTA:External Works by LTA,New Roads (SWA Section 18):New Roads (SWA Section 18),Covered Linkway:Covered Linkway,Pedestrian Overhead Bridge:Pedestrian Overhead Bridge, Covered Linkway (LTA as developer):Covered Linkway (LTA as developer), Pedestrian Overhead Bridge (LTA as developer):Pedestrian Overhead Bridge (LTA as developer),Pedestrian Mall:Pedestrian Mall,Promenade:Promenade,PUB ABC Projects:PUB ABC Projects"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Building Plan External (BP EXW)" &&
    appMode === "Self-Declaration(SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Self Declaration For External Works:Self Declaration For External Works"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Certificate of Statutory Completion Internal (CSC INT)" &&
    appMode === "Normal(Non-SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Building Development Within Gazetted Tree Conservation Areas (TCA):Building Development Within Gazetted Tree Conservation Areas (TCA),Building Development On Vacant Land:Building Development On Vacant Land,Building Development (Non TCA and Non Vacant Land):Building Development (Non TCA and Non Vacant Land),Rapid Transit System Depot/, Bus Depot or Bus Interchange:Rapid Transit System Depot/, Bus Depot or Bus Interchange,Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government):Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government),Rail Related Building/Structures:Rail Related Building/Structures,Road Related Building/Structures:Road Related Building/Structures,PUB ABC Projects:PUB ABC Projects"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Certificate of Statutory Completion Internal (CSC INT)" &&
    appMode === "Self-Declaration(SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Self Declaration For Internal (Tree Conservation Area):Self Declaration For Internal (Tree Conservation Area),Self Declaration For Internal (Vacant Land):Self Declaration For Internal (Vacant Land),Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land):Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Certificate of Statutory Completion External (CSC EXW)" &&
    appMode === "Normal(Non-SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "External Work:External Work,External Works by LTA:External Works by LTA,New Roads (SWA Section 18):New Roads (SWA Section 18),Covered Linkway:Covered Linkway,Pedestrian Overhead Bridge:Pedestrian Overhead Bridge, Covered Linkway (LTA as developer):Covered Linkway (LTA as developer), Pedestrian Overhead Bridge (LTA as developer):Pedestrian Overhead Bridge (LTA as developer),Pedestrian Mall:Pedestrian Mall,Promenade:Promenade,PUB ABC Projects:PUB ABC Projects"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (
    appStage === "Certificate of Statutory Completion External (CSC EXW)" &&
    appMode === "Self-Declaration(SD)"
  ) {
    appType.removeAttribute("disabled");
    document
      .getElementById("PartOfProp_ApplMode10")
      .removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Self Declaration For External Works:Self Declaration For External Works"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else if (appStage === "Others(OTH)") {
    document.getElementById("PartOfProp_ApplMode10").value = "Normal(Non-SD)";
    document
      .getElementById("PartOfProp_ApplMode10")
      .setAttribute("disabled", "");
    appType.removeAttribute("disabled");
    appType.setAttribute("mandatory", "");
    appType.setAttribute(
      "options",
      "Drainage Projects by PUB:Drainage Projects by PUB,Services Projects by SPPA/G (excluding buildings/ structures):Services Projects by SPPA/G (excluding buildings/ structures),Services Projects by PUB (excluding buildings/ structure):Services Projects by PUB (excluding buildings/ structure),Services Projects by Others (excluding buildings/ structures):Services Projects by Others (excluding buildings/ structures),Advanced works for LTA/ PUB/ SPPA/ SPPG Projects:Advanced works for LTA/ PUB/ SPPA/ SPPG Projects"
    );
    appType.shadowRoot
      .querySelector("select")
      .classList.add("input-text-required");
  } else {
    appType.removeAttribute("mandatory");
    appType.setAttribute("disabled", "");
  }
  appType.value = "";
}

function setDeclarationVisible() {
  let appType = document.getElementById("PartOfProp_ApplType10");
  let appMode = document.getElementById("PartOfProp_ApplMode10");
  let appIndi = document.getElementById("PartOfProp_SubmIndi10");

  let bpInt = document.getElementById("BpInteSelfDecl");
  bpInt.setAttribute("hidden", "");
  let bpIntSelects = bpInt.getElementsByTagName("cn2-select");
  for (let select of bpIntSelects) {
    select.removeAttribute("mandatory");
  }

  let bpExt = document.getElementById("BpExteSelfDecl");
  bpExt.setAttribute("hidden", "");
  let bpExtSelects = bpExt.getElementsByTagName("cn2-select");
  for (let select of bpExtSelects) {
    select.removeAttribute("mandatory");
  }

  let cscSelf = document.getElementById("CscSelfDecl");
  cscSelf.setAttribute("hidden", "");

  let cscSub = document.getElementById("CscInteSubmNorm");
  cscSub.setAttribute("hidden", "");
  let cscSubSelect = document.getElementById(
    "CertOfStatComp_BuilDeveHasInco10"
  );
  cscSubSelect.removeAttribute("mandatory");

  let dcSelf = document.getElementById("DcSelfDecl");
  dcSelf.setAttribute("hidden", "");
  let dcSelfSelects = dcSelf.getElementsByTagName("cn2-select");
  for (let select of dcSelfSelects) {
    select.removeAttribute("mandatory");
  }

  let internalTypes = [
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
  ];
  let externalTypes = [
    "Self Declaration For External Works",
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
  ];
  let cscTypes = [
    "Building Development Within Gazetted Tree Conservation Areas (TCA)",
    "Building Development On Vacant Land",
    "Building Development (Non TCA and Non Vacant Land)",
    "Rapid Transit System Depot",
    "Bus Depot or Bus Interchange",
    "Entrance Culvert/External Work",
    "External Works by LTA",
    "New Roads (SWA Section 18)",
    "Covered Linkway",
    "Pedestrian Overhead Bridge",
    "Covered Linkway (LTA as developer)",
    "Pedestrian Overhead Bridge (LTA as developer)",
    "Car Park Lodgement",
    "Pedestrian Mall",
    "Promenade",
    "Open Space Provision within Conventional Housing Development (Open Space to be Vested to NParks)",
    "Rail Related Building/Structures",
    "Road Related Building Structures",
    "PUB ABC PROJECTS"
  ];

  switch (document.getElementById("PartOfProp_SumbType10").value) {
    case "Development Control (DC)": {
      if (
        appMode.value === "Self-Declaration(SD)" &&
        appIndi.value === "New Submission"
      ) {
        if (internalTypes.includes(appType.value)) {
          dcSelf.removeAttribute("hidden");
          for (let select of dcSelfSelects) {
            select.setAttribute("mandatory", "");
          }
        }
      }
      break;
    }
    case "Building Plan Internal (BP INT)": {
      if (
        appMode.value === "Self-Declaration(SD)" &&
        appIndi.value === "New Submission"
      ) {
        if (internalTypes.includes(appType.value)) {
          bpInt.removeAttribute("hidden");
          for (let select of bpIntSelects) {
            select.setAttribute("mandatory", "");
          }
        }
      }
      break;
    }
    case "Building Plan External (BP EXW)": {
      if (
        appMode.value === "Self-Declaration(SD)" &&
        appIndi.value === "New Submission"
      ) {
        if (externalTypes.includes(appType.value)) {
          bpExt.removeAttribute("hidden");
          for (let select of bpExtSelects) {
            select.setAttribute("mandatory", "");
          }
        }
      }
      break;
    }
    case "Certificate of Statutory Completion Internal (CSC INT)": {
      if (
        appMode.value === "Self-Declaration(SD)" &&
        appIndi.value === "New Submission"
      ) {
        if (internalTypes.includes(appType.value)) {
          cscSelf.removeAttribute("hidden");
        }
      } else if (appMode.value === "Normal(Non-SD)") {
        if (cscTypes.includes(appType.value)) {
          cscSub.removeAttribute("hidden");
          cscSubSelect.setAttribute("mandatory", "");
        }
      }
      break;
    }
    case "Certificate of Statutory Completion External (CSC EXW)": {
      if (
        appMode.value === "Self-Declaration(SD)" &&
        appIndi.value === "New Submission"
      ) {
        if (externalTypes.includes(appType.value)) {
          cscSelf.removeAttribute("hidden");
        }
      } else if (appMode.value === "Normal(Non-SD)") {
        if (cscTypes.includes(appType.value)) {
          cscSub.removeAttribute("hidden");
          cscSubSelect.setAttribute("mandatory", "");
        }
      }
      break;
    }
  }
  document.getElementById("TotaPlanFeePaya_Label10").value = "$ " + 0;
}

function setPage9Visible() {
  let targetNavButton = document.querySelector("[target='page8']");
  let valueAppStage = document
    .getElementById("PartOfProp_SumbType10")
    .value.trim();
  let valueAppMode = document
    .getElementById("PartOfProp_ApplMode10")
    .value.trim();
  let valueAppInd = document
    .getElementById("PartOfProp_SubmIndi10")
    .value.trim();
  let valueAppType = document
    .getElementById("PartOfProp_ApplType10")
    .value.trim();

  let appTypeValidator = [
    "Building Development Within Gazetted Tree Conservation Areas (TCA)",
    "Building Development On Vacant Land",
    "Building Development (Non TCA and Non Vacant Land)",
    "Rapid Transit System Depot, Bus Depot or Bus Interchange",
    "Bus Depot or Bus Interchange",
    "Pedestrian Overhead Bridge",
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)",
    "Pedestrian Mall",
    "Promenade",
    "Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government)",
    "Rail Related Building/Structures",
    "Road Related Building/Structures"
  ];
  let appTypeValidator2 = [
    "External Work",
    "New Roads (SWA Section 18)",
    "Covered Linkway",
    "Pedestrian Overhead Bridge",
    "Self Declaration For External Works",
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)",
    "Pedestrian Mall",
    "Promenade",
    "Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government)",
    "Rail Related Building/Structures",
    "Road Related Building Structures"
  ];
  let appTypeValidator3 = [
    "Self Declaration For External Works",
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
  ];

  let radioButtonVerification1 = [
    document.getElementById("FeesTabuForNpar_Check1_a"),
    document.getElementById("FeesTabuForNpar_Check1_b"),
    document.getElementById("FeesTabuForNpar_Check1_d"),
    document.getElementById("FeesTabuForNpar_Check1_e"),
    document.getElementById("FeesTabuForNpar_Check1_f"),
    document.getElementById("FeesTabuForNpar_Check1_g")
  ];

  let radioButtonVerification2 = [
    document.getElementById("FeesTabuForNpar_Check1_a"),
    document.getElementById("FeesTabuForNpar_Check1_b"),
    document.getElementById("FeesTabuForNpar_Check1_c"),
    document.getElementById("FeesTabuForNpar_Check1_d"),
    document.getElementById("FeesTabuForNpar_Check1_e"),
    document.getElementById("FeesTabuForNpar_Check1_f"),
    document.getElementById("FeesTabuForNpar_Check1_g")
  ];

  if (
    valueAppInd === "New Submission" &&
    (valueAppMode === "Normal(Non-SD)" ||
      valueAppMode === "Self-Declaration(SD)")
  ) {
    if (
      valueAppStage === "Development Control (DC)" &&
      appTypeValidator.includes(valueAppType)
    ) {
      targetNavButton.removeAttribute("hidden");
      targetNavButton.setAttribute("page-number", "8");
    } else if (
      (valueAppStage === "Building Plan Internal (BP INT)" ||
        valueAppStage === "Building Plan External (BP EXW)") &&
      appTypeValidator2.includes(valueAppType)
    ) {
      targetNavButton.removeAttribute("hidden");
      targetNavButton.setAttribute("page-number", "8");
    } else if (
      (valueAppStage ===
        "Certificate of Statutory Completion Internal (CSC INT)" ||
        valueAppStage ===
          "Certificate of Statutory Completion External (CSC EXW)") &&
      appTypeValidator3.includes(valueAppType)
    ) {
      targetNavButton.removeAttribute("hidden");
      targetNavButton.setAttribute("page-number", "5");
    } else {
      targetNavButton.setAttribute("hidden", "");
      targetNavButton.setAttribute("page-number", "");
    }
  } else {
    targetNavButton.setAttribute("hidden", "");
    targetNavButton.setAttribute("page-number", "");
  }

  let valueAppTypeValidate1 = [
    "Building Development Within Gazetted Tree Conservation Areas (TCA)",
    "Building Development On Vacant Land",
    "Building Development (Non TCA and Non Vacant Land)"
  ];

  let radiobuttons = [
    document.getElementById("FeesTabuForNpar_Check1_a"),
    document.getElementById("FeesTabuForNpar_Check1_b"),
    document.getElementById("FeesTabuForNpar_Check1_c"),
    document.getElementById("FeesTabuForNpar_Check1_d"),
    document.getElementById("FeesTabuForNpar_Check1_e"),
    document.getElementById("FeesTabuForNpar_Check1_f"),
    document.getElementById("FeesTabuForNpar_Check1_g"),
    document.getElementById("FeesTabuForNpar_Check2"),
    document.getElementById("FeesTabuForNpar_Check3"),
    document.getElementById("FeesTabuForNpar_Check4"),
    document.getElementById("FeesTabuForNpar_Check5"),
    document.getElementById("FeesTabuForNpar_Check6"),
    document.getElementById("FeesTabuForNpar_Check7"),
    document.getElementById("FeesTabuForNpar_Check8"),
    document.getElementById("FeesTabuForNpar_Check2_TCL10"),
    document.getElementById("FeesTabuForNpar_Check2_NTCL10")
  ];

  for (let targetDefaults of radiobuttons) {
    targetDefaults.removeAttribute("mandatory");
    targetDefaults.removeAttribute("checked");
    targetDefaults.setAttribute("disabled", "");
    targetDefaults.checked = false;
  }
  switch (valueAppStage) {
    case "Development Control (DC)":
      if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Normal(Non-SD)"
      ) {
        if (valueAppTypeValidate1.includes(valueAppType)) {
          for (let rBtnTarget of radioButtonVerification1) {
            rBtnTarget.removeAttribute("disabled");
            rBtnTarget.setAttribute("checked", "");
          }
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType ===
          "Open Space Provision within Conventional Housing Development (Open Space to be Vested to Government)"
        ) {
          for (let rBtnTarget of radioButtonVerification2) {
            rBtnTarget.removeAttribute("disabled");
            rBtnTarget.setAttribute("checked", "");
          }
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType ===
          "Rapid Transit System Depot, Bus Depot or Bus Interchange"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check2")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check2")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (valueAppType === "Pedestrian Overhead Bridge") {
          document
            .getElementById("FeesTabuForNpar_Check5")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check5")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType === "Pedestrian Mall" ||
          valueAppType === "Promenade"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check6")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check6")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      } else if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Self-Declaration(SD)"
      ) {
        if (appTypeValidator3.includes(valueAppType)) {
          document
            .getElementById("FeesTabuForNpar_Check7")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check7")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      }
      break;
    case "Building Plan Internal (BP INT)":
      if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Normal(Non-SD)"
      ) {
        if (valueAppType === "New Roads (SWA Section 18)") {
          document
            .getElementById("FeesTabuForNpar_Check3")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check3")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (valueAppType === "External Work") {
          document
            .getElementById("FeesTabuForNpar_Check4")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check4")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType === "Covered Linkway" ||
          valueAppType === "Pedestrian Overhead Bridge"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check5")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check5")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType === "Pedestrian Mall" ||
          valueAppType === "Promenade"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check6")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check6")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      } else if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Self-Declaration(SD)"
      ) {
        if (appTypeValidator3.includes(valueAppType)) {
          document
            .getElementById("FeesTabuForNpar_Check7")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check7")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      }
      break;
    case "Building Plan External (BP EXW)":
      if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Normal(Non-SD)"
      ) {
        if (valueAppType === "New Roads (SWA Section 18)") {
          document
            .getElementById("FeesTabuForNpar_Check3")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check3")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (valueAppType === "External Work") {
          document
            .getElementById("FeesTabuForNpar_Check4")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check4")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType === "Covered Linkway" ||
          valueAppType === "Pedestrian Overhead Bridge"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check5")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check5")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        } else if (
          valueAppType === "Pedestrian Mall" ||
          valueAppType === "Promenade"
        ) {
          document
            .getElementById("FeesTabuForNpar_Check6")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check6")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      } else if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Self-Declaration(SD)"
      ) {
        if (appTypeValidator3.includes(valueAppType)) {
          document
            .getElementById("FeesTabuForNpar_Check7")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check7")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      }
      break;
    case "Certificate of Statutory Completion Internal (CSC INT)":
      if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Self-Declaration(SD)"
      ) {
        if (appTypeValidator3.includes(valueAppType)) {
          document
            .getElementById("FeesTabuForNpar_Check7")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check7")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      }
      break;
    case "Certificate of Statutory Completion External (CSC EXW)":
      if (
        valueAppInd === "New Submission" &&
        valueAppMode === "Self-Declaration(SD)"
      ) {
        if (appTypeValidator3.includes(valueAppType)) {
          document
            .getElementById("FeesTabuForNpar_Check7")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check7")
            .setAttribute("checked", "");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .removeAttribute("disabled");
          document
            .getElementById("FeesTabuForNpar_Check8")
            .setAttribute("checked", "");
        }
      }
      break;
  }
}

function FeesTabuForNpar_Check2_clicked(el) {
  if (document.getElementById("FeesTabuForNpar_Check2").checked) {
    document.getElementById("FeesTabuForNpar_Check2_TCL10").checked = true;
  }

  onSelectChange(el);
}

function computeTotalPlanFeePayable(el) {
  let total = 0;
  let alt =
    document.getElementById("PartOfProp_ApplType10").value ==
    "Building Development (Non TCA and Non Vacant Land)";

  if (document.getElementById("FeesTabuForNpar_Check1_a").checked) {
    if (alt) {
      total = 1605;
    } else {
      total = 2675;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_b").checked) {
    if (alt) {
      total = 1605;
    } else {
      total = 2140;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_c").checked) {
    if (alt) {
      total = 1605;
    } else {
      total = 9095;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_d").checked) {
    if (alt) {
      total = 1605;
    } else {
      total = 2675;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_e").checked) {
    if (alt) {
      total = 1605;
    } else {
      total = 2140;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_f").checked) {
    if (!alt) {
      total = 2140;
    } else {
      total = 0;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check1_g").checked) total = 2140;

  if (document.getElementById("FeesTabuForNpar_Check2").checked) {
    document
      .getElementById("FeesTabuForNpar_Check2_TCL10")
      .removeAttribute("disabled");
    document
      .getElementById("FeesTabuForNpar_Check2_NTCL10")
      .removeAttribute("disabled");
    if (document.getElementById("FeesTabuForNpar_Check2_TCL10").checked) {
      total = 2675;
    } else {
      total = 1605;
    }
  }
  if (document.getElementById("FeesTabuForNpar_Check3").checked) total = 2675;
  if (document.getElementById("FeesTabuForNpar_Check4").checked) total = 2140;
  if (document.getElementById("FeesTabuForNpar_Check5").checked) total = 2140;
  if (document.getElementById("FeesTabuForNpar_Check6").checked) total = 2140;
  if (document.getElementById("FeesTabuForNpar_Check7").checked) total = 107;
  if (document.getElementById("FeesTabuForNpar_Check8").checked) total = 0;

  document.getElementById("TotaPlanFeePaya_Label10").value = "$ " + total;
}

function onSelectChange(el) {
  let elements = [
    "FeesTabuForNpar_Check1_a",
    "FeesTabuForNpar_Check1_b",
    "FeesTabuForNpar_Check1_c",
    "FeesTabuForNpar_Check1_d",
    "FeesTabuForNpar_Check1_e",
    "FeesTabuForNpar_Check1_f",
    "FeesTabuForNpar_Check1_g",
    "FeesTabuForNpar_Check2",
    "FeesTabuForNpar_Check2_TCL10",
    "FeesTabuForNpar_Check2_NTCL10",
    "FeesTabuForNpar_Check3",
    "FeesTabuForNpar_Check4",
    "FeesTabuForNpar_Check5",
    "FeesTabuForNpar_Check6",
    "FeesTabuForNpar_Check7",
    "FeesTabuForNpar_Check8"
  ];

  let tempElements = [];
  if (el.id == "FeesTabuForNpar_Check2") {
    tempElements = elements.filter(function(value) {
      if (
        value != "FeesTabuForNpar_Check2_TCL10" ||
        value != "FeesTabuForNpar_Check2_NTCL10"
      ) {
        return value;
      }
    });
  }

  let newEl = [];

  if (el.id == "FeesTabuForNpar_Check2") {
    newEl = tempElements.filter(function(value) {
      return value != el.id;
    });
  } else {
    newEl = elements.filter(function(value) {
      return value != el.id;
    });
  }

  for (let els of newEl) {
    document.getElementById(els).checked = false;
    document.getElementById(els).removeAttribute("checked");
    document
      .getElementById("FeesTabuForNpar_Check2_TCL10")
      .setAttribute("disabled", "");
    document
      .getElementById("FeesTabuForNpar_Check2_NTCL10")
      .setAttribute("disabled", "");
  }

  if (
    el.id == "FeesTabuForNpar_Check2_TCL10" ||
    el.id == "FeesTabuForNpar_Check2_NTCL10"
  ) {
    document.getElementById("FeesTabuForNpar_Check2").checked = true;
    document
      .getElementById("FeesTabuForNpar_Check2")
      .setAttribute("checked", "");
  }

  if (el.id == "FeesTabuForNpar_Check2") {
    document.getElementById("FeesTabuForNpar_Check2_TCL10").checked = true;
    document
      .getElementById("FeesTabuForNpar_Check2_TCL10")
      .setAttribute("checked", "");
  }

  computeTotalPlanFeePayable(el);
}

function setFeesTabuForNparSubm() {
  let dc = "Development Control (DC)";
  let bp = "Building Plan (BP)";
  let csc = "Certificate of Statutory Completion (CSC)";
  let items = Array.from(
    document.getElementById("feeTable").getElementsByTagName("cn2-checkbox")
  );
  items.splice(13, 1);
  let list1 = [];
  list1.push(document.getElementById("FeesTabuForNpar_Check1_a"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_b"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_c"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_d"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_e"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_f"));
  list1.push(document.getElementById("FeesTabuForNpar_Check1_g"));

  let list2 = [
    document.getElementById("FeesTabuForNpar_Check2"),
    document.getElementById("FeesTabuForNpar_Check2_TCL10"),
    document.getElementById("FeesTabuForNpar_Check2_NTCL10")
  ];

  let item3 = document.getElementById("FeesTabuForNpar_Check3");
  let item4 = document.getElementById("FeesTabuForNpar_Check4");
  let item5 = document.getElementById("FeesTabuForNpar_Check5");
  let item6 = document.getElementById("FeesTabuForNpar_Check6");
  let item7 = document.getElementById("FeesTabuForNpar_Check7");
  //let item8 = document.getElementById("FeesTabuForNpar_Check8");

  let subInd = document.getElementById("PartOfProp_SubmIndi10").value;
  let subType = document.getElementById("PartOfProp_SumbType10").value;
  let appType = document.getElementById("PartOfProp_ApplType10").value;

  let check1 = [
    "Building Development Within Gazetted Tree Conservation Areas (TCA)",
    "Building Development On Vacant Land",
    "Building Development (Non TCA and Non Vacant Land)"
  ];

  let check1c =
    "Open Space Provision within Conventional Housing Development (Open Space to be Vested to NParks)";

  let check2 = ["Rapid Transit System Depot", "Bus Depot or Bus Interchange"];
  let check3 = "New Roads (SWA Section 18)";
  let check4 = "Entrance Culvert/External Work";
  let check5 = ["Covered Linkway", "Pedestrian Overhead Bridge"];
  let check5alt = check5[1];

  let check6 = ["Pedestrian Mall", "Promenade"];

  let check7 = [
    "Self Declaration For Internal (Tree Conservation Area)",
    "Self Declaration For Internal (Vacant Land)",
    "Self Declaration For Internal (Non Tree Conservation Area/ Non Vacant Land)"
  ];
  let check7alt = ["Self Declaration For External Works", "Car Park Lodgement"];
  let check7alt2 = check7alt[0];

  let cond1 = subType === dc && check1.includes(appType);
  let cond1c = subType === dc && check1c === appType;
  let cond2 = subType === dc && check2.includes(appType);
  let cond3 = subType === bp && check3 === appType;
  let cond4 = subType === bp && check4 === appType;

  let cond5 =
    (subType === bp && check5.includes(appType)) ||
    (subType === dc && check5alt === appType);
  let cond6 = (subType === dc || subType === bp) && check6.includes(appType);

  let cond7 =
    ([dc, bp, csc].includes(subType) && check7.includes(appType)) ||
    (subType === bp && check7alt.includes(appType)) ||
    (subType === csc && check7alt2 === appType);
  document.getElementById("FeesTabuForNpar_Check2_TCL10").checked = false;
  document.getElementById("FeesTabuForNpar_Check2_NTCL10").checked = false;
  document
    .getElementById("FeesTabuForNpar_Check2_TCL10")
    .setAttribute("disabled", "");
  document
    .getElementById("FeesTabuForNpar_Check2_NTCL10")
    .setAttribute("disabled", "");
  if (subInd === "New Submission") {
    if (cond1) {
      for (let item of list1) {
        item.removeAttribute("disabled");
      }
      items.splice(0, 7);
    } else if (cond1c) {
      list1[2].removeAttribute("disabled");
      items.splice(2, 1);
    } else if (cond2) {
      for (let item of list2) {
        item.removeAttribute("disabled");
      }
      items.splice(7, 1);
      document
        .getElementById("FeesTabuForNpar_Check2_TCL10")
        .removeAttribute("disabled");
      document
        .getElementById("FeesTabuForNpar_Check2_NTCL10")
        .removeAttribute("disabled");
    } else if (cond3) {
      item3.removeAttribute("disabled");
      items.splice(8, 1);
    } else if (cond4) {
      item4.removeAttribute("disabled");
      items.splice(9, 1);
    } else if (cond5) {
      item5.removeAttribute("disabled");
      items.splice(10, 1);
    } else if (cond6) {
      item6.removeAttribute("disabled");
      items.splice(11, 1);
    } else if (cond7) {
      item7.removeAttribute("disabled");
      items.splice(12, 1);
    }
  }
  for (let disabled of items) {
    disabled.setAttribute("disabled", "");
    disabled.checked = false;
  }
  computeTotalPlanFeePayable();
}

function DeclByQualPers_check30_clicked() {
  if (document.getElementById("DeclByQualPers_check30").checked) {
    document
      .getElementById("DeclByQualPers_date10")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByQualPers_date10")
      .setAttribute("mandatory", "");
  } else {
    document
      .getElementById("DeclByQualPers_date10")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByQualPers_date10")
      .removeAttribute("mandatory");
  }
}

function CertOfStatComp_BuilDeveHasInco10_Changed() {
  if (
    document.getElementById("CertOfStatComp_BuilDeveHasInco10").value === "YES"
  ) {
    document
      .getElementById("CertOfStatComp_TotaAreaOfHori10")
      .setAttribute("mandatory", "");
    document
      .getElementById("CertOfStatComp_TotaAreaOfHori10")
      .removeAttribute("disabled");
    document
      .getElementById("CertOfStatComp_TotaAreaOfVert10")
      .setAttribute("mandatory", "");
    document
      .getElementById("CertOfStatComp_TotaAreaOfVert10")
      .removeAttribute("disabled");
  } else {
    document
      .getElementById("CertOfStatComp_TotaAreaOfHori10")
      .removeAttribute("mandatory");
    document
      .getElementById("CertOfStatComp_TotaAreaOfHori10")
      .setAttribute("disabled", "");
    document
      .getElementById("CertOfStatComp_TotaAreaOfVert10")
      .removeAttribute("mandatory");
    document
      .getElementById("CertOfStatComp_TotaAreaOfVert10")
      .setAttribute("disabled", "");
    document.getElementById("CertOfStatComp_TotaAreaOfHori10").value = "";
    document.getElementById("CertOfStatComp_TotaAreaOfVert10").value = "";
  }
}

function greeneryRadio_Changed() {
  let radio1Yes = document.getElementById("ComGreenReq_SubmRadio10");
  let radio2Yes = document.getElementById("ComGreenReq_SubmRadio40");
  let radio2No = document.getElementById("ComGreenReq_SubmRadio50");

  let checkboxGroup = [
    document.getElementById("ApplForAlteConf_TechCons10"),
    document.getElementById("ApplForAlteConf_SpecDesiInte10"),
    document.getElementById("ApplForAlteConf_OthePlanCond10")
  ];

  let btnGroup = [
    document.querySelectorAll(".delete10"),
    document.querySelectorAll("#add10")
  ];

  if (radio2Yes.checked) {
    for (let btn of btnGroup) {
      for (let index = 0; index < btn.length; index++) {
        btn[index].removeAttribute("disabled");
      }
    }
  } else {
    for (let btn of btnGroup) {
      for (let index = 0; index < btn.length; index++) {
        btn[index].setAttribute("disabled", "");
      }
    }
  }

  if (radio1Yes.checked && (radio2No.checked || radio2Yes.checked)) {
    for (let checkbox of checkboxGroup) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    for (let checkbox of checkboxGroup) {
      checkbox.setAttribute("disabled", "");
    }
  }

  let inputGroup = ["TypeOfNonComp", "Justification", "ComAlteProv"];

  let count = document.getElementById("psda-container").childElementCount;
  for (let x = 1; x <= count; x++) {
    for (let prefix of inputGroup) {
      let input = document.getElementById(prefix + x + "0");
      if (radio2Yes.checked) {
        input.removeAttribute("disabled");
        input.setAttribute("mandatory", "");
      } else {
        input.setAttribute("disabled", "");
        input.removeAttribute("mandatory");
        input.value = "";
      }
    }
  }
}

function togglePaymentMethod(el) {
  switch (el.id) {
    case "CHECK15":
      document.getElementById("CHECK16").checked = false;
      document.getElementById("CHECK17").checked = false;
      break;
    case "CHECK16":
      document.getElementById("CHECK15").checked = false;
      document.getElementById("CHECK17").checked = false;
      break;
    case "CHECK17":
      document.getElementById("CHECK16").checked = false;
      document.getElementById("CHECK15").checked = false;
      break;
  }
}

function openUrl(url) {
  ipcRenderer.send("open-default-browser", url);
}

function LushDisplay() {
  let appStage = document.getElementById("PartOfProp_SumbType10").value;

  if (
    appStage !== "Certificate of Statutory Completion Internal (CSC INT)" &&
    appStage !== "Certificate of Statutory Completion External (CSC EXW)"
  ) {
    //document.getElementById("targetPageIntExw1").removeAttribute("hidden");
    document.getElementById("targetPageIntExw2").removeAttribute("hidden");
    document.getElementById("targetPageIntExw3").removeAttribute("hidden");
    // document
    //   .getElementById("targetPageIntExw1")
    //   .setAttribute("page-number", "4");
    document
      .getElementById("targetPageIntExw2")
      .setAttribute("page-number", "4");
    document
      .getElementById("targetPageIntExw3")
      .setAttribute("page-number", "5");
    document
      .getElementById("targetPageNonIntExw1")
      .setAttribute("page-number", "6");
    document
      .getElementById("targetPageNonIntExw2")
      .setAttribute("page-number", "7");
  } else {
    //document.getElementById("targetPageIntExw1").setAttribute("hidden", "");
    document.getElementById("targetPageIntExw2").setAttribute("hidden", "");
    document.getElementById("targetPageIntExw3").setAttribute("hidden", "");
    // document.getElementById("targetPageIntExw1").removeAttribute("page-number");
    document.getElementById("targetPageIntExw2").removeAttribute("page-number");
    document.getElementById("targetPageIntExw3").removeAttribute("page-number");
    document
      .getElementById("targetPageNonIntExw1")
      .setAttribute("page-number", "4");
    document
      .getElementById("targetPageNonIntExw2")
      .setAttribute("page-number", "5");
  }
}

function appMode_change() {
  let appMode = document.getElementById("PartOfProp_ApplMode10").value;
  // let radio1 = document.getElementById("LushScheme_SubmRadio10_Yes");
  // let radio2 = document.getElementById("LushScheme_SubmRadio20_No");
  // let radio3 = document.getElementById("LushScheme_SubmRadio30_Yes");
  // let radio4 = document.getElementById("LushScheme_SubmRadio40_No");
  // let radio5 = document.getElementById("LushScheme_SubmRadio50_Yes");
  // let radio6 = document.getElementById("LushScheme_SubmRadio60_No");
  // let radio7 = document.getElementById("LushScheme_SubmRadio70_Na");
  let radio8 = document.getElementById("ComGreenReq_SubmRadio10");
  let radio9 = document.getElementById("ComGreenReq_SubmRadio40");

  if (appMode === "Self-Declaration(SD)") {
    // radio1.setAttribute("disabled", "");
    // radio6.setAttribute("disabled", "");
    radio8.setAttribute("disabled", "");
    radio9.setAttribute("disabled", "");
    //  radio1.checked = false;
    //  radio6.checked = false;
    radio8.checked = false;
    radio9.checked = false;

    //   if (radio3.checked) {
    //     radio5.checked = true;
    //     radio5.removeAttribute("disabled");
    //     radio6.setAttribute("disabled", "");
    //     radio7.setAttribute("disabled", "");
    //     radio6.checked = false;
    //     radio7.checked = false;
    //   } else if (radio4.checked) {
    //     radio7.checked = true;
    //     radio5.setAttribute("disabled", "");
    //     radio7.removeAttribute("disabled");
    //   }
    // } else if (radio4.checked) {
    //   radio7.checked = true;
    //   radio5.setAttribute("disabled", "");
    //   radio6.setAttribute("disabled", "");
  } else {
    let arrayOfRadio = [
      // radio1,
      // radio2,
      // radio3,
      // radio4,
      // radio5,
      // radio6,
      // radio7,
      radio8,
      radio9
    ];

    for (let targetRadio of arrayOfRadio) {
      targetRadio.removeAttribute("disabled");
    }
  }
}

function greeneryCompliance_change() {
  let radio1gCom = document.getElementById("ComGreenReq_SubmRadio10");
  let radio2gCom = document.getElementById("ComGreenReq_SubmRadio40");

  let checkboxesApp = [
    document.getElementById("ApplForAlteConf_TechCons10"),
    document.getElementById("ApplForAlteConf_SpecDesiInte10"),
    document.getElementById("ApplForAlteConf_OthePlanCond10")
  ];

  if (radio1gCom.checked === true && radio2gCom.checked === true) {
    for (let targetsBoxes of checkboxesApp) {
      targetsBoxes.removeAttribute("disabled");
    }
  } else {
    for (let targetsBoxes of checkboxesApp) {
      targetsBoxes.setAttribute("disabled", "");
      targetsBoxes.checked = false;
    }
  }
}

function onlyFloat(element) {
  let current = element.value;
  if (!Math.abs(current)) {
    document.getElementById(element.id).value = document
      .getElementById(element.id)
      .value.slice(0, -1);
  }
}

function inputZero(element) {
  if (element.value[element.value.length - 1] == ".") {
    document.getElementById(element.id).value =
      document.getElementById(element.id).value + "00";
  }
}

function disabledOtherRadioBtns(status) {
  if (status) {
    document.getElementById("FeesTabuForNpar_Check2_TCL10").checked = false;
    document.getElementById("FeesTabuForNpar_Check2_NTCL10").checked = false;

    document
      .getElementById("FeesTabuForNpar_Check2_TCL10")
      .setAttribute("disabled", "");
    document
      .getElementById("FeesTabuForNpar_Check2_NTCL10")
      .setAttribute("disabled", "");
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
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
    d.getFullYear() > 9999
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
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