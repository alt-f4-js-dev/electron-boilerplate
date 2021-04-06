document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(
    "cn2-master-head"
  ).title = `NOTICE OF TERMINATION OF QP (BUILDING PLANS) <br> The Building Control Act (CAP 29)`;
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  formNameVersion("form__name", "form__version", true);
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    appType(document.getElementById("ApplType_NotiTermAppo10"));

    let run = setTimeout(() => {
      getProjPermitList();
      clearTimeout(run);
    }, 300);
  }
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
    d.getFullYear < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function ToAgency_id_change(element) {
  let agencyAdd = document.getElementById("Addr20");
  if (element.value == "Building and Construction Authority") {
    agencyAdd.value = `Commissioner of Builder Control
Building and Construction Authority
52 Jurong Gateway Road, #11-01
Singapore 608550`;
    agencyAdd.removeAttribute("hidden");
  } else if (element.value == "Defence Science & Technology Agency") {
    agencyAdd.value = `Defence Science & Technology Agency
Building & Infrastructure
1 Depot Road #12-05
Defence Technology Tower A
Singapore 109676`;
  }
}
function removeUENerror(parent, prefix) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let UENfields = document.querySelectorAll(`[prefix="${prefix}"]`);
  if (childCount > 1) {
    UENfields[UENfields.length - 1].removeAttribute("data-invalid");
    UENfields[UENfields.length - 1].removeAttribute("data-invalid-message");
  }
}
function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`.${deleteClass}`).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(`.${deleteClass}`);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}
function removeManda(el) {
  let c = document.getElementById(el.id);
  if (c.checked) {
    c.removeAttribute("mandatory");
    c.removeAttribute("checked");
  } else {
    c.setAttribute("mandatory", "");
    c.setAttribute("checked", "");
  }
}
function atLeastOne(element) {
  let name = document.querySelectorAll(`[name=${element.name}]`);
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

function appType(element) {
  let page4 = document.querySelector("[target='page4']");
  let page5 = document.querySelector("[target='page5']");
  let page6 = document.querySelector("[target='page6']");

  let firstNote = document.getElementById("TermReaLiceSpec_note");
  let secondNote = document.getElementById("AppoLiceSpecBuilDev_note");
  let thirdNote = document.getElementById("NotiTermBuil_note");

  let radio1Instructions = document.getElementById("NotiTermAppo_instructions");
  let radio2Instructions = document.getElementById(
    "AppoLiceSpecBuilDev_instructions"
  );
  let radio3Instructions = document.getElementById(
    "NotiTermAppoSS_instructions"
  );
  let radio4Instructions = document.getElementById("NotiTermBuil_instructions");
  let radio5Instructions = document.getElementById(
    "TermReaLiceSpec_instructions"
  );

  let page3Title = document.getElementById("page3Title");
  let nav3Title = document.querySelector("[target='page3']");

  let permitRefNo = document.getElementById("Project_PermitApplRefNo10");
  let permitRefNoTd = document.getElementById("Project_PermitApplRefNo10_row");
  let main = document.querySelectorAll("#termReapLiceSBD");
  firstNote.setAttribute("hidden", "");
  secondNote.setAttribute("hidden", "");
  thirdNote.setAttribute("hidden", "");
  radio1Instructions.setAttribute("hidden", "");
  radio2Instructions.setAttribute("hidden", "");
  radio3Instructions.setAttribute("hidden", "");
  radio4Instructions.setAttribute("hidden", "");
  radio5Instructions.setAttribute("hidden", "");

  permitRefNoTd.setAttribute("hidden", "");
  permitRefNo.removeAttribute("mandatory");
  permitRefNo.value = "";

  toggleTypeOfWork(false);
  toggleParticularsQP(false);
  toggleParticularDevBuild(false);
  //toggleAppointmentBuildByDev(false);
  toggleTermBuildDev(false);
  toggleOutgoingSS(false);
  toggleTermReapLiceBuildDev(false);
  togglePartiQPSS(false);
  toggleParticularOutgoBuilSpecBuil(false);
  toggleParticularsSpecBuilder(false);
  toggleParticularSS(false);
  toggleLiceParticular(false);

  let arrayPage = [
    document.querySelector("[target ='page3']"),
    document.querySelector("[target ='page4']"),
    document.querySelector("[target ='page5']"),
    document.querySelector("[target ='page6']"),
  ];

  for (let page of arrayPage) {
    let div = page.getAttribute("target");
    let elements = document
      .getElementById(div)
      .querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );

    for (let el of elements) {
      if (el.hasAttribute("mandatory")) {
        el.removeAttribute("mandatory");
      }
      if (el.hasAttribute("checked")) {
        el.removeAttribute("checked");
      }
    }
  }

  //document.querySelector(".particularBuilder").setAttribute("hidden", "");
  switch (element.id) {
    //////////////////////////////////////////// Notice of Termination of Appointment
    case "ApplType_NotiTermAppo10":
      formNameVersion("form__name10", "form__version");
      document
        .querySelector("cn2-master-head")
        .setAttribute(
          "title",
          "NOTICE OF TERMINATION OF QP (BUILDING PLANS) <br> The Building Control Act (CAP 29)"
        );
      page4.setAttribute(
        "label",
        "Particulars and Declaration by Qualified Person"
      );
      page5.setAttribute("hidden", "");
      page6.setAttribute("hidden", "");

      radio1Instructions.removeAttribute("hidden");
      page3Title.textContent = "Particulars of Application";
      nav3Title.setAttribute("label", "Particulars of Application");
      toggleParticularsQP(true);

      break;
    //////////////////////////////////////////// Appointment of Licensed Specialist Builder by Developer/ Builder
    case "ApplType_AppoLiceSBil10":
      formNameVersion("form__name30", "form__version");
      document
        .querySelector("cn2-master-head")
        .setAttribute(
          "title",
          "NOTICE OF TERMINATION/APPOINTMENT OF SITE SUPERVISOR/SPECIALIST BUILDER"
        );
      page4.setAttribute(
        "label",
        "Particulars and Declaration by Developer/Builder (if Applicable)"
      );
      page5.removeAttribute("hidden");
      page5.setAttribute(
        "label",
        "Particulars and Declaration by Specialist Builder"
      );
      page6.setAttribute("hidden", "");

      secondNote.removeAttribute("hidden");
      radio2Instructions.removeAttribute("hidden");
      page3Title.textContent = "Project Details";
      nav3Title.setAttribute("label", "Project Details");
      permitRefNoTd.removeAttribute("hidden");
      permitRefNo.setAttribute("mandatory", "");
      //document.querySelector(".particularBuilder").removeAttribute("hidden");
      toggleTypeOfWork(true);
      toggleParticularDevBuild(true);
      //toggleAppointmentBuildByDev(true);
      toggleParticularsSpecBuilder(true);
      break;
    //////////////////////////////////////////// Notice of Termination/ Appointment of Site Supervisor
    case "ApplType_NotiTermAppoSS10":
      formNameVersion("form__name20", "form__version");
      document
        .querySelector("cn2-master-head")
        .setAttribute(
          "title",
          "NOTICE OF TERMINATION/APPOINTMENT OF SITE SUPERVISOR/SPECIALIST BUILDER"
        );
      page4.setAttribute(
        "label",
        "Particulars and Declaration by Outgoing Site Supervisor"
      );
      page5.removeAttribute("hidden");
      page5.setAttribute(
        "label",
        "Particulars and Declaration by Qualified Person for Structural Works"
      );
      page6.removeAttribute("hidden");
      page6.setAttribute(
        "label",
        "Particulars and Declaration by Incoming Site Supervisor"
      );

      radio3Instructions.removeAttribute("hidden");
      page3Title.textContent = "Particulars of Application";
      nav3Title.setAttribute("label", "Particulars of Application");
      toggleOutgoingSS(true);
      togglePartiQPSS(true);
      toggleParticularSS(true);
      break;
    ////////////////////////////////////////////  Notification of Termination of builder
    // case "ApplType_NotiTermBuil10":
    //   document
    //     .querySelector("cn2-master-head")
    //     .setAttribute(
    //       "title",
    //       "NOTICE OF TERMINATION/APPOINTMENT OF SITE SUPERVISOR/SPECIALIST BUILDER"
    //     );
    //   page4.setAttribute(
    //     "label",
    //     "Particulars and Notification of Termination of Developer/Builder"
    //   );
    //   page5.removeAttribute("hidden", "");
    //   page5.setAttribute(
    //     "label",
    //     "Particulars and Notification of Termination of Outgoing Builder/Specialist Builder"
    //   );
    //   page6.setAttribute("hidden", "");

    //   thirdNote.removeAttribute("hidden");
    //   radio4Instructions.removeAttribute("hidden");
    //   page3Title.textContent = "Project Details";
    //   nav3Title.setAttribute("label", "Project Details");
    //   permitRefNo.removeAttribute("hidden");
    //   toggleTypeOfWork(true);
    //   toggleParticularDevBuild(true);
    //   toggleTermBuildDev(true);
    //   toggleParticularOutgoBuilSpecBuil(true);
    //   toggleLiceParticular(true);
    //   break;
    ////////////////////////////////////////////  Termination/ Re-appointment of Licensed Specialist Builder by Developer/ Builder
    case "ApplType_TermReapLiceSB10":
      formNameVersion("form__name40", "form__version");
      document
        .querySelector("cn2-master-head")
        .setAttribute(
          "title",
          "NOTICE OF TERMINATION/APPOINTMENT OF SITE SUPERVISOR/SPECIALIST BUILDER"
        );
      page4.setAttribute(
        "label",
        "Particulars and Declaration by Developer/Builder (if Applicable)"
      );
      page4.removeAttribute("hidden");
      page5.removeAttribute("hidden");
      page6.setAttribute("hidden", "");
      page5.setAttribute(
        "label",
        "Particulars and Declaration by Outgoing Licensed Specialist Builder"
      );
      page6.setAttribute(
        "label",
        "Particulars and Declaration by Incoming Licensed Specialist Builder"
      );
      firstNote.removeAttribute("hidden");

      radio5Instructions.removeAttribute("hidden");
      page3Title.textContent = "Project Details";
      nav3Title.setAttribute("label", "Project Details");
      permitRefNoTd.removeAttribute("hidden");
      permitRefNo.setAttribute("mandatory", "");
      toggleTypeOfWork(true);
      toggleTermReapLiceBuildDev(true);
      toggleParticularDevBuild(true);
      toggleParticularOutgoBuilSpecBuil(true);
      toggleLiceParticular(true);
      //document.querySelector(".particularBuilder").setAttribute("hidden", "");
      break;
  }
}

function validWS(res) {
  if (typeof res == "object") {
    return true;
  } else {
    return false;
  }
}

function convertTextboxToSelect(id) {
  let text = document.getElementById(id);
  if (text.tagName.toLowerCase() == "cn2-textbox") {
    let attrs = {};
    for (
      var i = 0, atts = text.attributes, n = atts.length, arr = [];
      i < n;
      i++
    ) {
      attrs[atts[i].nodeName] = atts[i].nodeValue;
    }

    let select = document.createElement("cn2-select");
    for (let attr in attrs) {
      select.setAttribute(attr, attrs[attr]);
    }

    text.parentNode.replaceChild(select, text);
  }
}

function getProjPermitList() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;

  let query = `projRefNo=${projRefNo}`;

  jsonData["agencyUrl10"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl10"].url,
    query
  );

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      if (dataResponse.status && dataResponse.permitNo) {
        if (dataResponse.status.toUpperCase() == "SUCCESS") {
          let permitNos = dataResponse.permitNo
            .split(",")
            .map((i) => `${i}:${i}`)
            .join(",");
          document
            .getElementById("Project_PermitApplRefNo10")
            .setAttribute("options", permitNos);
          convertTextboxToSelect("Project_PermitApplRefNo10");
          document.getElementById("Project_PermitApplRefNo10").value = "";
        }
      }
    }
  }
}

function toggleParticularsQP(condition) {
  let fields = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("MemberRole_Professional_No_QP10"),
    document.getElementById("Member_Firm_Name_QP10"),
    document.getElementById("Members_UEN_QP10"),
    document.getElementById("Member_Address_QP10"),
    document.getElementById("Member_Tel_No_QP10"),
    document.getElementById("Member_Mobile_No_QP10"),
    document.getElementById("Member_Email_Address1_QP10"),
  ];
  let checkboxes = [
    document.getElementById("DeclByQualPers_AsRequBySect20"),
    document.getElementById("DeclByQualPers_iConfThatNo10"),
    document.getElementById("DeclByQualPers_ISubmTheFoll_ASummRepoOf10"),
    document.getElementById("DeclByQualPers_IHaveOn20"),
  ];
  let radios = [
    document.getElementById("DeclByQualPers_IHaveOn_NotToCommOr10"),
    document.getElementById("DeclByQualPers_IHaveOn_CeasAllBuilWork10"),
    document.getElementById("DeclByQualPers_AsRequBySect_IHaveTermMy10"),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe10"),
    document.getElementById(
      "DeclByQualPers_AsRequBySect_MyAppoAsThe_TheApplOr10"
    ),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe_Build10"),
  ];

  let datefields = [
    document.getElementById("DeclByQualPers_AsRequBySect10"),
    document.getElementById("DeclByQualPers_IHaveOn10"),
  ];

  let name = document.getElementById("Member_Member_Name_QP10");
  let uen = document.getElementById("Members_UEN_QP10");
  let main = document.querySelectorAll("#particularsQP");

  if (condition == true) {
    name.setAttribute("mandatory", "");
    document
      .getElementById("DeclByQualPers_AsRequBySect20")
      .setAttribute("mandatory", "");
    document
      .getElementById("DeclByQualPers_AsRequBySect20")
      .setAttribute("checked", "");
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }
  } else {
    document
      .getElementById("DeclByQualPers_AsRequBySect20")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByQualPers_AsRequBySect20")
      .removeAttribute("checked");
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    name.removeAttribute("mandatory");
    uen.removeAttribute("data-invalid", "");
    uen.removeAttribute("data-invalid-message", "");
    for (f of fields) {
      f.value = "";
    }
    for (c of checkboxes) {
      c.checked = false;
      c.removeAttribute("mandatory");
    }
    for (r of radios) {
      r.checked = false;
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
      r.setAttribute("disabled", "");
    }
    for (d of datefields) {
      d.value = "";
      d.setAttribute("disabled", "");
      d.removeAttribute("mandatory");
    }
  }
}
function toggleTypeOfWork(condition) {
  let checkboxes = [
    document.getElementById("Proj_TypeOfBuilWork_PiliWork10"),
    document.getElementById("Proj_TypeOfBuilWork_PreCastConcWork10"),
    document.getElementById("Proj_TypeOfBuilWork_GrouSuppStabWork10"),
    document.getElementById("Proj_TypeOfBuilWork_PostTensWork10"),
    document.getElementById("Proj_TypeOfBuilWork_StruSteeWork10"),
    document.getElementById("Proj_TypeOfBuilWork_SiteInveWork10"),
  ];
  let row = document.getElementById("typeOfWork_row");
  if (condition == true) {
    row.removeAttribute("hidden");
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    row.setAttribute("hidden", "");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
  }
}

function DeclByQualPers_AsRequBySect20_change(element) {
  let radios = [
    document.getElementById("DeclByQualPers_AsRequBySect_IHaveTermMy10"),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe10"),
  ];
  let subRadios = [
    document.getElementById(
      "DeclByQualPers_AsRequBySect_MyAppoAsThe_TheApplOr10"
    ),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe_Build10"),
  ];
  let datefield = document.getElementById("DeclByQualPers_AsRequBySect10");

  if (element.checked) {
    for (r of radios) {
      r.removeAttribute("disabled");
      r.setAttribute("mandatory", "");
      r.setAttribute("checked", "");
    }
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  } else {
    for (r of radios) {
      r.setAttribute("disabled", "");
      r.checked = false;
      r.removeAttribute("mandatory", "");
      r.removeAttribute("checked", "");
    }
    for (subR of subRadios) {
      subR.setAttribute("disabled", "");
      subR.checked = false;
      subR.removeAttribute("mandatory", "");
      subR.removeAttribute("checked", "");
    }
    datefield.removeAttribute("mandatory");
    datefield.value = "";
    datefield.setAttribute("disabled", "");
  }
}

function DeclByQualPers_AsRequBySect_change(element) {
  let radios = [
    document.getElementById("DeclByQualPers_AsRequBySect_IHaveTermMy10"),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe10"),
  ];
  let subRadios = [
    document.getElementById(
      "DeclByQualPers_AsRequBySect_MyAppoAsThe_TheApplOr10"
    ),
    document.getElementById("DeclByQualPers_AsRequBySect_MyAppoAsThe_Build10"),
  ];
  switch (element.id) {
    case "DeclByQualPers_AsRequBySect_IHaveTermMy10":
      for (subR of subRadios) {
        subR.removeAttribute("mandatory");
        subR.removeAttribute("checked");
        subR.checked = false;
        subR.setAttribute("disabled", "");
      }
      break;
    case "DeclByQualPers_AsRequBySect_MyAppoAsThe10":
      for (subR of subRadios) {
        subR.setAttribute("mandatory", "");
        subR.setAttribute("checked", "");
        subR.removeAttribute("disabled");
      }
      break;
  }
}
function DeclByQualPers_IHaveOn20_change(element) {
  let radios = [
    document.getElementById("DeclByQualPers_IHaveOn_CeasAllBuilWork10"),
    document.getElementById("DeclByQualPers_IHaveOn_NotToCommOr10"),
  ];
  let datefield = document.getElementById("DeclByQualPers_IHaveOn10");

  if (element.checked) {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
    for (r of radios) {
      r.removeAttribute("disabled");
      r.setAttribute("mandatory", "");
      r.setAttribute("checked", "");
    }
  } else {
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory", "");
    datefield.value = "";
    for (r of radios) {
      r.setAttribute("disabled", "");
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
      r.checked = false;
    }
  }
}

function particularsDevBuild(element) {
  switch (element.id) {
    case "DeclByOWN_Deve10":
      toggleParticularDeveloper(true);
      toggleParticularBuilder(false);

      break;
    case "DeclByOWN_Buil10":
      toggleParticularDeveloper(false);
      toggleParticularBuilder(true);
      break;
  }
}

function toggleParticularDeveloper(condition) {
  let fields = [
    document.querySelectorAll("[prefix='Member_Member_Name_OWNER']"),
    document.querySelectorAll("[prefix='Member_Designation_OWNER']"),
    document.querySelectorAll("[prefix='Member_UEN_OWNER']"),
    document.querySelectorAll("[prefix='Member_Firm_Name_OWNER']"),
    document.querySelectorAll("[prefix='Member_Address_OWNER']"),
    document.querySelectorAll("[prefix='Member_Tel_No_OWNER']"),
    document.querySelectorAll("[prefix='Member_Mobile_No_OWNER']"),
    document.querySelectorAll("[prefix='Member_Email_Address1_OWNER']"),
  ];
  let title = document.querySelectorAll("[prefix='Member_Title_OWNER']");
  let radio = document.getElementById("DeclByOWN_Deve10");
  let uen = document.querySelectorAll("[prefix='Member_UEN_OWNER']");
  let name = document.querySelectorAll("[prefix='Member_Member_Name_OWNER']");
  let formField = document.querySelectorAll(".Afields");
  let add = document.getElementById("particularOWNERadd");
  let deleteBtn = document.querySelectorAll(".particularsOfDeveloper_Delete");
  let sign = document.querySelectorAll("[prefix='Member_Member_Name_OWNER']");
  let collapse = document.querySelectorAll("[prefix='collapse1']");
  let collapseSpan = document.querySelectorAll("[prefix='#collapse1']");

  document.getElementById("Member_NRIC_BLDR2010").value = "";
  document.getElementById("Member_NRIC_Masked_BLDR2010").value = "";

  if (condition == true) {
    for (let t of title) {
      t.removeAttribute("disabled");
      t.value = "";
    }
    add.removeAttribute("disabled", "");
    radio.checked = true;
    // for (let i = 0; i < sign.length; i++) {
    //   console.log("sokpa");
    //   sign[i].setAttribute("label", "");
    //   sign[i].setAttribute("label", "Name*");
    // }
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].removeAttribute("disabled");
    }
    for (let x = 0; x < uen.length; x++) {
      uen[x].removeAttribute("disabled");
    }
  } else {
    for (let t of title) {
      t.setAttribute("disabled", "");
      t.value = "";
    }
    add.setAttribute("disabled", "");
    // for (let i = 0; i < sign.length; i++) {
    //   console.log("sokpa");
    //   sign[i].setAttribute("label", "");
    //   sign[i].setAttribute("label", "Name");
    // }
    for (let j = 0; j < collapse.length; j++) {
      collapse[j].classList.remove("show");
      collapseSpan[j].classList.remove("fa-angle-up");
      collapseSpan[j].classList.add("fa-angle-down");
    }

    for (f of fields) {
      for (let i = 0; i < f.length; i++) {
        f[i].value = "";
        f[i].setAttribute("disabled", "");
        f[i].removeAttribute("mandatory");
        deleteBtn[i].setAttribute("disabled", "");
      }
    }

    for (let j = 0; j < uen.length; j++) {
      uen[j].removeAttribute("data-invalid");
      uen[j].removeAttribute("data-invalid-message");
    }
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        let elements = formField[i].querySelectorAll(
          "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
        );
        for (let element of elements) delete jsonData[element.id];
        formField[i].parentNode.removeChild(formField[i]);
      }
    }
  }
}
function toggleParticularBuilder(condition) {
  let fields = [
    document.querySelectorAll(".builderSID"),
    document.querySelectorAll(".builderName"),
    document.querySelectorAll(".builderTitle"),
    document.querySelectorAll(".builderDesignation"),
    document.querySelectorAll(".builderUEN"),
    document.querySelectorAll(".builderFirmName"),
    document.querySelectorAll(".builderAddress"),
    document.querySelectorAll(".builderTelephone"),
    document.querySelectorAll(".builderHandphone"),
    document.querySelectorAll(".builderEmail"),
  ];
  let title = document.querySelectorAll(".builderTitle");
  let uen = document.querySelectorAll(".builderUEN");
  let name = document.querySelectorAll(".builderName");
  let formField = document.querySelectorAll(".Bfields");
  let add = document.getElementById("particularBLDRadd");
  let deleteBtn = document.querySelectorAll(".PartOfTheBLDR_Delete");
  let firmname = document.querySelectorAll(".builderFirmName");
  let collapse = document.querySelectorAll("[prefix='collapse2']");
  let collapseSpan = document.querySelectorAll("[prefix='#collapse2']");
  let sign = document.querySelectorAll("[prefix='Member_Member_Name_BLDR20']");

  document.getElementById("Member_NRIC_OWNER100").value = "";
  document.getElementById("Member_NRIC_Masked_OWNER100").value = "";

  if (condition == true) {
    for (let x = 0; x < name.length; x++) {
      name[x].setAttribute("id", "Member_Member_Name_BLDR2010");
    }
    // for (let i = 0; i < sign.length; i++) {
    //   sign[i].removeAttribute("label");
    //   sign[i].setAttribute("label", "Name*");
    // }
    for (let t of title) {
      t.removeAttribute("disabled");
      t.value = "";
    }
    add.removeAttribute("disabled", "");
    for (let i = 0; i < firmname.length; i++) {
      firmname[i].setAttribute("id", "Member_Firm_Name_BLDR2010");
    }
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
      name[i].removeAttribute("disabled");
    }
    for (let x = 0; x < uen.length; x++) {
      uen[x].removeAttribute("disabled");
    }
  } else {
    // for (let i = 0; i < sign.length; i++) {
    //   sign[i].removeAttribute("label");
    //   sign[i].setAttribute("label", "Name");
    // }
    for (let t of title) {
      t.setAttribute("disabled", "");
      t.value = "";
    }
    // for (let x = 0; x < name.length; x++) {
    //   name[x].removeAttribute("id");
    // }

    add.setAttribute("disabled", "");
    // for (let i = 0; i < firmname.length; i++) {
    //   firmname[i].removeAttribute("id");
    // }
    for (let j = 0; j < collapse.length; j++) {
      collapse[j].classList.remove("show");
      collapseSpan[j].classList.remove("fa-angle-up");
      collapseSpan[j].classList.add("fa-angle-down");
    }
    for (f of fields) {
      for (let i = 0; i < f.length; i++) {
        f[i].value = "";
        f[i].setAttribute("disabled", "");
        f[i].removeAttribute("mandatory");
        deleteBtn[i].setAttribute("disabled", "");
      }
    }

    for (let j = 0; j < uen.length; j++) {
      uen[j].removeAttribute("data-invalid");
      uen[j].removeAttribute("data-invalid-message");
    }
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        let elements = formField[i].querySelectorAll(
          "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
        );
        for (let element of elements) delete jsonData[element.id];
        formField[i].parentNode.removeChild(formField[i]);
      }
    }
  }
}

function toggleParticularDevBuild(condition) {
  let devRadio = document.getElementById("developerRadio");
  let buildRadio = document.getElementById("builderRadio");
  let buildAccordion = document.getElementById("accordion2");
  let show = document.getElementById("particularsDevBuild");
  if (condition == true) {
    toggleParticularDeveloper(true);
    show.removeAttribute("hidden");
    if (document.getElementById("ApplType_AppoLiceSBil10").checked) {
      toggleParticularBuilder(false);
      toggleParticularDeveloper(true);
      devRadio.removeAttribute("hidden");
      buildRadio.removeAttribute("hidden");
      buildAccordion.removeAttribute("hidden");
    } else {
      toggleParticularBuilder(false);
      toggleParticularDeveloper(true);
      devRadio.removeAttribute("hidden");
      buildRadio.removeAttribute("hidden");
      buildAccordion.removeAttribute("hidden");
    }
  } else {
    show.setAttribute("hidden", "");
    toggleParticularDeveloper(false);
    toggleParticularBuilder(false);
  }
}

function addDefaultValue_DeclByOWN_1IConfThat_SpecBuil10(element) {
  let childCount = document.getElementById("builders").childElementCount;
  let field = document.querySelectorAll(
    "[prefix='DeclByOWN_1IConfThat_SpecBuil']"
  );

  if (childCount > 1) {
    field[field.length - 1].setAttribute("hidden", "");
    field[field.length - 1].value = "for piling works";
  }
}

function DeclByOWN_1IConfThat_AsThe10_change(element) {
  let field = document.getElementById(element.id);
  let id = getId(element.id);
  let targetField = document.getElementById(
    "DeclByOWN_1IConfThat_SpecBuil" + id + "0"
  );
  if (field.valueLabel == "Specialist Builder") {
    targetField.setAttribute("mandatory", "");
    targetField.removeAttribute("hidden");
    targetField.value = "for piling works";
  } else {
    targetField.setAttribute("hidden", "");
    targetField.removeAttribute("mandatory");
  }
}

// function toggleAppointmentBuildByDev(condition) {
//   let main = document.getElementById("appoBuildDev");
//   //let select = document.getElementById("DeclByOWN_1IConfThat20");
//   let formField = document.querySelectorAll(".Cfields");
//   let fields = [
//     document.querySelectorAll(".appoBuildername"),
//     document.querySelectorAll(".appoFirmname"),
//     document.querySelectorAll("[prefix='DeclByOWN_1IConfThat_UEN']"),
//     document.querySelectorAll("[prefix='DeclByOWN_1IConfThat_AsThe']"),
//     document.querySelectorAll("[prefix='DeclByOWN_1IConfThat_SpecBuil']")
//   ];
//   let fieldName = document.querySelectorAll(".appoBuildername");
//   let selectD = document.querySelectorAll(
//     "[prefix='DeclByOWN_1IConfThat_AsThe']"
//   );
//   let uen = document.querySelectorAll("[prefix='DeclByOWN_1IConfThat_UEN']");
//   let hiddenField = document.querySelectorAll(
//     "[prefix='DeclByOWN_1IConfThat_SpecBuil']"
//   );
//   let firmname = document.querySelectorAll(".appoFirmname");
//   if (condition == true) {
//     select.setAttribute("mandatory", "");
//     for (let x = 0; x < fieldName.length; x++) {
//       fieldName[x].setAttribute("id", "Member_Member_Name_BLDR2010");
//     }

//     for (let i = 0; i < selectD.length; i++) {
//       selectD[i].setAttribute("id", "DeclByOWN_1IConfThat_AsThe10");
//       selectD[i].setAttribute("mandatory", "");
//       uen[i].setAttribute("mandatory", "");
//       fieldName[i].setAttribute("mandatory", "");
//     }

//     main.removeAttribute("hidden");
//     for (let z = 0; z < firmname.length; z++) {
//       firmname[z].setAttribute("id", "Member_Firm_Name_BLDR2010");
//     }
//   } else {
//     for (let x = 0; x < fieldName.length; x++) {
//       fieldName[x].removeAttribute("id");
//     }
//     select.removeAttribute("mandatory");
//     select.value = "";
//     for (let i = 0; i < selectD.length; i++) {
//       selectD[i].removeAttribute("id");
//     }
//     main.setAttribute("hidden", "");
//     for (f of fields) {
//       for (let i = 0; i < f.length; i++) {
//         f[i].value = "";
//         f[i].removeAttribute("mandatory", "");
//       }
//     }
//     for (let x = 0; x < uen.length; x++) {
//       uen[x].removeAttribute("data-invalid");
//       uen[x].removeAttribute("data-invalid-message");
//     }
//     for (let y = 0; y < hiddenField.length; y++) {
//       hiddenField[y].setAttribute("hidden", "");
//     }

//     for (let z = 0; z < firmname.length; z++) {
//       firmname[z].removeAttribute("id");
//     }
//   }
//   for (let ii = 0; ii < formField.length; ii++) {
//     if (ii != 0) {
//       let elements = formField[ii].querySelectorAll(
//         "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
//       );
//       for (let element of elements) delete jsonData[element.id];
//       ``;
//       formField[ii].parentNode.removeChild(formField[ii]);
//     }
//   }
// }

function toggleOutgoingSS(condition) {
  let main = document.querySelectorAll("#particularOutSS");
  let fields = [
    document.getElementById("Member_Member_Name_SS10"),
    document.getElementById("Member_NRIC_SS10"),
    document.getElementById("Member_NRIC_SS10_masked"),
    document.getElementById("Member_Designation_SS10"),
    document.getElementById("Member_Firm_Name_SS10"),
    document.getElementById("Members_UEN_SS10"),
    document.getElementById("Member_Address_SS10"),
    document.getElementById("Member_Tel_No_SS10"),
    document.getElementById("Member_Mobile_No_SS10"),
    document.getElementById("Member_Email_Address1_SS10"),
  ];
  let declaFields = [
    document.getElementById("DeclByOutgSite_AsRequBySect10"),
    document.getElementById("DeclByOutgSite_AsRequBySect20"),
  ];
  let checkbox = document.getElementById("DeclByOutgSite_AsRequBySect30");
  let name = document.getElementById("Member_Member_Name_SS10");
  let uen = document.getElementById("Members_UEN_SS10");

  if (condition == true) {
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }

    name.setAttribute("mandatory", "");
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
    checkbox.checked = false;
  } else {
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
    checkbox.checked = false;
    for (f of fields) {
      f.value = "";
      f.removeAttribute("mandatory");
    }
    for (declaF of declaFields) {
      declaF.removeAttribute("mandatory");
      declaF.setAttribute("disabled", "");
      declaF.value = "";
    }
    uen.removeAttribute("data-invalid");
    uen.removeAttribute("data-invalid-message");
  }
}

function DeclByOutgSite_AsRequBySect30_change(element) {
  let fields = [
    document.getElementById("DeclByOutgSite_AsRequBySect10"),
    document.getElementById("DeclByOutgSite_AsRequBySect20"),
  ];
  if (element.checked) {
    for (f of fields) {
      f.setAttribute("mandatory", "");
      f.removeAttribute("disabled");
    }
  } else {
    for (f of fields) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
      f.value = "";
    }
  }
}

function toggleTermBuildDev(condition) {
  let main = document.getElementById("termBuildDev");
  let fields = [
    document.querySelector(".Member_Member_SID_BLDR20_1"),
    document.querySelector(".Member_Member_Name_BLDR20_1"),
    document.querySelector(".Member_Firm_Name_BLDR20_1"),
    document.getElementById("Member_IC_Passport_No_BLDR20"),
    document.querySelector(".Members_UEN_BLDR20_1"),
    document.querySelector(".DeclByOWN_1IConfThat_AsThe10_1"),
    document.querySelector(".Member_Member_SID_BLDR30_1"),
    document.querySelector(".Member_Member_Name_BLDR30_1"),
    document.getElementById("Member_IC_Passport_No_BLDR30"),
    document.querySelector(".Members_UEN_BLDR30_1"),
    document.getElementById("DeclByOWN_1IConfThat_AsTheSubs10"),
  ];
  let mandatoryFields = [
    document.querySelector(".Member_Member_Name_BLDR20_1"),
    document.querySelector(".Member_Member_Name_BLDR30_1"),
    document.querySelector(".Members_UEN_BLDR20_1"),
    document.querySelector(".Members_UEN_BLDR30_1"),
    document.querySelector(".DeclByOWN_1IConfThat_AsThe10_1"),
    document.getElementById("DeclByOWN_1IConfThat_AsTheSubs10"),
  ];
  let checkboxes = [
    document.getElementById("DeclByOWN_1IConfThat_PiliWork10"),
    document.getElementById("DeclByOWN_1IConfThat_PostTensWork10"),
    document.getElementById("DeclByOWN_1IConfThat_GrouSuppStabWork10"),
    document.getElementById("DeclByOWN_1IConfThat_SiteInveWorkExcl10"),
    document.getElementById("DeclByOWN_1IConfThat_StruSteeWork10"),
    document.getElementById("DeclByOWN_1IConfThat_SiteInveWorkIncl10"),
    document.getElementById("DeclByOWN_1IConfThat_PreCastConcWork10"),
  ];
  let sid1 = document.querySelector(".Member_Member_SID_BLDR20_1");
  let sid2 = document.querySelector(".Member_Member_SID_BLDR30_1");
  let name1 = document.querySelector(".Member_Member_Name_BLDR20_1");
  let name2 = document.querySelector(".Member_Member_Name_BLDR30_1");
  let firmname1 = document.querySelector(".Member_Firm_Name_BLDR20_1");
  let firmname2 = document.querySelector(".Member_Firm_Name_BLDR30_1");
  let uen1 = document.querySelector(".Members_UEN_BLDR20_1");
  let uen2 = document.querySelector(".Members_UEN_BLDR30_1");
  let selectD = document.querySelector(".DeclByOWN_1IConfThat_AsThe10_1");

  if (condition == true) {
    sid1.setAttribute("id", "Member_Member_SID_BLDR20");
    sid2.setAttribute("id", "Member_Member_SID_BLDR30");
    name1.setAttribute("id", "Member_Member_Name_BLDR20");
    name2.setAttribute("id", "Member_Member_Name_BLDR30");
    firmname1.setAttribute("id", "Member_Firm_Name_BLDR20");
    firmname2.setAttribute("id", "Member_Firm_Name_BLDR30");
    uen1.setAttribute("id", "Members_UEN_BLDR20");
    uen2.setAttribute("id", "Members_UEN_BLDR30");
    selectD.setAttribute("id", "DeclByOWN_1IConfThat_AsThe10");
    main.removeAttribute("hidden");
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
    for (field of mandatoryFields) {
      field.setAttribute("mandatory", "");
    }
  } else {
    sid1.removeAttribute("id");
    sid2.removeAttribute("id");
    name1.removeAttribute("id");
    name2.removeAttribute("id");
    firmname1.removeAttribute("id");
    firmname2.removeAttribute("id");
    uen1.removeAttribute("id");
    uen2.removeAttribute("id");
    selectD.removeAttribute("id");
    main.setAttribute("hidden", "");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (field of mandatoryFields) {
      field.removeAttribute("mandatory", "");
    }
    for (f of fields) {
      f.value = "";
    }
  }
}

function DeclByOWN_1IConfThat10(element) {
  //radio1fields

  let rad1fields = [
    document.getElementById("Member_Member_Name_BLDR20"),
    document.getElementById("Member_Member_Name_BLDR30"),
  ];

  let rad1firmNamefield = [
    document.getElementById("Member_Firm_Name_BLDR20"),
    document.getElementById("Member_Firm_Name_BLDR30"),
  ];

  let rad1uenFields = [
    document.getElementById("Members_UEN_BLDR20"),
    document.getElementById("Members_UEN_BLDR30"),
  ];
  //radio2fields
  let rad2fields = [
    document.getElementById("Member_Member_Name_BLDR40"),
    document.getElementById("Member_Member_Name_BLDR40_2"),
  ];

  let rad2firmNamefield = [
    document.getElementById("Member_Firm_Name_BLDR40"),
    document.getElementById("Member_Firm_Name_BLDR40_2"),
  ];

  let rad2uenFields = [
    document.getElementById("Members_UEN_BLDR40"),
    document.getElementById("Members_UEN_BLDR40_2"),
  ];

  let rad2nricFields = [
    document.getElementById("Member_NRIC_BLDR40"),
    document.getElementById("Member_NRIC_BLDR40_2"),
    document.getElementById("Member_NRIC_BLDR40_masked"),
    document.getElementById("Member_NRIC_BLDR40_2_masked"),
  ];

  let rad2roleFields = [
    document.getElementById("Members_Role_BLDR40"),
    document.getElementById("Members_Role_BLDR40_2"),
  ];
  let rad2checkBox = [
    document.getElementById("DeclByOWN_AsLiceSpecBuil10_10"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil20"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil30"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil40"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil50"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil60"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil70"),
  ];
  //radio3fields
  let rad3field = document.getElementById("Member_Member_Name_BLDR40_1");
  let rad3firmfield = document.getElementById("Member_Firm_Name_BLDR40_1");
  let rad3uenfield = document.getElementById("Members_UEN_BLDR40_1");
  let rad3checkBox = [
    document.getElementById("DeclByOWN_AsLiceSpecBuil10_20"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil20_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil30_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil40_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil50_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil60_1"),
  ];
  let page6 = document.querySelector("[target='page6']");

  let tempArray = new Array();

  switch (element.id) {
    case "DeclByOWN_1IConfThat10":
      //enableRad1Fields
      page6.removeAttribute("hidden");
      toggleLiceParticular(true);
      for (let f of rad1fields) {
        f.removeAttribute("disabled");
        f.setAttribute("mandatory", "");
      }
      for (let u of rad1uenFields) {
        u.removeAttribute("disabled");
        u.setAttribute("mandatory", "");
      }
      //disabledOtherfields
      let otherFields1 = tempArray.concat(
        rad2fields,
        rad2firmNamefield,
        rad2uenFields,
        rad2nricFields,
        rad2roleFields,
        rad3field,
        rad3firmfield,
        rad3uenfield
      );

      for (let o of otherFields1) {
        o.removeAttribute("mandatory");
        o.removeAttribute("checked");
        o.setAttribute("disabled", "");

        if (o.hasAttribute("data-invalid")) {
          o.removeAttribute("data-invalid");
          o.removeAttribute("data-invalid-message");
        }

        o.value = "";
      }
      for (let c2 of rad2checkBox) {
        c2.checked = false;
        c2.setAttribute("disabled", "");
        c2.removeAttribute("checked");
        c2.removeAttribute("mandatory");
      }
      for (let c3 of rad3checkBox) {
        c3.checked = false;
        c3.setAttribute("disabled", "");
        c3.removeAttribute("checked");
        c3.removeAttribute("mandatory");
      }
      break;
    case "DeclByOWN_2IConfThat10":
      //enableRad2Fields
      page6.removeAttribute("hidden");
      toggleLiceParticular(true);
      for (let f of rad2fields) {
        f.removeAttribute("disabled");
        f.setAttribute("mandatory", "");
      }
      for (let u of rad2uenFields) {
        u.removeAttribute("disabled");
        u.setAttribute("mandatory", "");
      }
      for (let r of rad2roleFields) {
        r.removeAttribute("disabled");
        r.setAttribute("mandatory", "");
      }
      //disabledOtherfields
      let otherFields2 = tempArray.concat(
        rad1fields,
        rad1firmNamefield,
        rad1uenFields,
        rad3field,
        rad3firmfield,
        rad3uenfield
      );

      for (let o of otherFields2) {
        o.removeAttribute("mandatory");
        o.removeAttribute("checked");
        o.setAttribute("disabled", "");

        if (o.hasAttribute("data-invalid")) {
          o.removeAttribute("data-invalid");
          o.removeAttribute("data-invalid-message");
        }

        o.value = "";
      }
      for (let c2 of rad2checkBox) {
        c2.checked = false;
        c2.removeAttribute("disabled");
        c2.setAttribute("checked", "");
        c2.setAttribute("mandatory", "");
      }
      for (let c3 of rad3checkBox) {
        c3.checked = false;
        c3.setAttribute("disabled", "");
        c3.removeAttribute("checked");
        c3.removeAttribute("mandatory");
      }
      break;
    case "DeclByOWN_3IConfThat10":
      //enableRad3Fields
      page6.setAttribute("hidden", "");
      toggleLiceParticular(true);
      rad3field.removeAttribute("disabled");
      rad3field.setAttribute("mandatory", "");

      rad3uenfield.removeAttribute("disabled");
      rad3uenfield.setAttribute("mandatory", "");
      //disabledOtherfields
      let otherFields3 = tempArray.concat(
        rad2fields,
        rad2firmNamefield,
        rad2uenFields,
        rad2nricFields,
        rad2roleFields,
        rad1fields,
        rad1firmNamefield,
        rad1uenFields
      );

      for (let o of otherFields3) {
        o.removeAttribute("mandatory");
        o.removeAttribute("checked");
        o.setAttribute("disabled", "");

        if (o.hasAttribute("data-invalid")) {
          o.removeAttribute("data-invalid");
          o.removeAttribute("data-invalid-message");
        }

        o.value = "";
      }
      for (let c2 of rad2checkBox) {
        c2.checked = false;
        c2.setAttribute("disabled", "");
        c2.removeAttribute("checked");
        c2.removeAttribute("mandatory");
      }
      for (let c3 of rad3checkBox) {
        c3.checked = false;
        c3.removeAttribute("disabled");
        c3.setAttribute("checked", "");
        c3.setAttribute("mandatory", "");
      }
      break;
  }
}

function toggleTermReapLiceBuildDev(condition) {
  toggleTermiLicenSpecBuild();
  toggleLiceParticular(false);
  //let checkbox = document.getElementById("DeclByQualPers_IConfThat10_1");
  let main = document.querySelectorAll("#termReapLiceSBD");
  let radio = document.getElementById("DeclByOWN_1IConfThat10");
  let otherfields = [
    document.querySelector(".DeclByQualPers10_1"),
    document.querySelector(".DeclByQualPers_ConfThat10_1"),
    document.querySelector(".DeclByQualPers_AppoSpecBuil20_1"),
  ];
  let fields = [
    document.querySelector(".Member_Member_Name_BLDR20_2"),
    document.querySelector(".Member_Firm_Name_BLDR20_2"),
    document.querySelector(".Members_UEN_BLDR20_2"),
    document.querySelector(".Member_Member_Name_BLDR30_2"),
    document.querySelector(".Member_Firm_Name_BLDR30_2"),
    document.querySelector(".Members_UEN_BLDR30_2"),
    document.querySelector(".liceTitle"),
    document.querySelector(".liceFirmname"),
    document.querySelector(".liceAddress"),
    document.querySelector(".liceTelNo"),
    document.querySelector(".liceHandNo"),
    document.querySelector(".liceEmail"),
  ];
  let particularCheckboxes = [
    document.getElementById("DeclBySpecBuil_PiliWork10"),
    document.querySelector(".Proj_TypeOfBuilWork_PostTensWork10_1"),
    document.getElementById("DeclBySpecBuil_GrouSuppStabWork10"),
    document.querySelector(".Proj_TypeOfBuilWork_SiteInveWork10_1"),
    document.getElementById("DeclBySpecBuil_StruSteeWork10"),
    document.getElementById("DeclBySpecBuil_InstMoniForProj10"),
    document.getElementById("DeclBySpecBuil_PreCastConcWork10"),
  ];
  let particularPrefixes = [
    document.querySelectorAll("[prefix='DeclBySpecBuil_HereByNoti_UEN']"),
    document.querySelectorAll(
      "[prefix='DeclBySpecBuil_HereByNoti_AsTheSpecBuil']"
    ),
    document.querySelectorAll("[prefix='Member_Member_Name_BLDR10']"),
    document.querySelectorAll("[prefix='Member_Firm_Name_BLDR10']"),
  ];
  let formField = document.querySelector(".Dfields");
  let formField2 = document.getElementById("Member_Member_Name_BLDR70");
  let sid1 = document.querySelector(".Member_Member_SID_BLDR20_2");
  let name1 = document.querySelector(".Member_Member_Name_BLDR20_2");
  let firmname1 = document.querySelector(".Member_Firm_Name_BLDR20_2");
  let uen1 = document.querySelector(".Members_UEN_BLDR20_2");
  let sid2 = document.querySelector(".Member_Member_SID_BLDR30_2");
  let name2 = document.querySelector(".Member_Member_Name_BLDR30_2");
  let firmname2 = document.querySelector(".Member_Firm_Name_BLDR30_2");
  let uen2 = document.querySelector(".Members_UEN_BLDR30_2");
  let checkbox = document.getElementById("DeclByQualPers_IConfThat20");
  let uen3 = document.getElementById("Members_UEN_BLDR70");
  let uen4 = document.querySelectorAll(
    "[prefix='DeclBySpecBuil_HereByNoti_UEN']"
  );

  if (condition == true) {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    formField2.setAttribute("mandatory", "");
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }
    sid1.setAttribute("id", "Member_Member_SID_BLDR20");
    name1.setAttribute("id", "Member_Member_Name_BLDR20");
    sid2.setAttribute("id", "Member_Member_SID_BLDR30");
    name2.setAttribute("id", "Member_Member_Name_BLDR30");
    firmname1.setAttribute("id", "Member_Firm_Name_BLDR20");
    firmname2.setAttribute("id", "Member_Firm_Name_BLDR30");
    uen1.setAttribute("id", "Members_UEN_BLDR20");
    uen2.setAttribute("id", "Members_UEN_BLDR30");
  } else {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
    formField2.removeAttribute("mandatory");
    for (o of otherfields) {
      o.value = "";
      o.removeAttribute("mandatory");
      o.setAttribute("disabled", "");
    }
    for (f of fields) {
      f.value = "";
    }
    for (ctr of particularPrefixes) {
      for (let i = 0; i < ctr.length; i++) {
        ctr[i].value = "";
      }
    }
    for (c of particularCheckboxes) {
      c.checked = false;
    }
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        let elements = formField[i].querySelectorAll(
          "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
        );
        for (let element of elements) delete jsonData[element.id];
        formField[i].parentNode.removeChild(formField[i]);
      }
    }
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    name1.removeAttribute("id");
    name2.removeAttribute("id");
    sid1.removeAttribute("id");
    sid2.removeAttribute("id");
    firmname1.removeAttribute("id");
    firmname2.removeAttribute("id");
    uen1.removeAttribute("id");
    uen2.removeAttribute("id");
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].id !== "Member_Title_BLDR70") {
        fields[i].removeAttribute("mandatory");
        fields[i].setAttribute("disabled", "");
        fields[i].value = "";
      }
    }
    uen1.removeAttribute("data-invalid");
    uen1.removeAttribute("data-invalid-message");
    uen2.removeAttribute("data-invalid");
    uen2.removeAttribute("data-invalid-message");
    uen3.removeAttribute("data-invalid");
    uen3.removeAttribute("data-invalid-message");
    for (let i = 0; i < uen4.length; i++) {
      uen4[i].removeAttribute("data-invalid");
      uen4[i].removeAttribute("data-invalid-message");
    }
    radio.checked = false;
  }
}

function togglePartiQPSS(condition) {
  let main = document.querySelectorAll("#particularQPSS");
  let fields = [
    document.getElementById("Member_Member_Name_HDBPE10"),
    document.getElementById("Member_Professional_No_HDBPE10"),
    document.getElementById("Member_Firm_Name_HDBPE10"),
    document.getElementById("Members_UEN_HDBPE10"),
    document.getElementById("Member_Address_HDBPE10"),
    document.getElementById("Member_Tel_No_HDBPE10"),
    document.getElementById("Member_Mobile_No_HDBPE10"),
    document.getElementById("Member_Email_Address1_HDBPE10"),
  ];
  let name = document.getElementById("Member_Member_Name_HDBPE10");
  let uen = document.getElementById("Members_UEN_HDBPE10");
  let checkbox = document.getElementById("DeclByQualPers_IHaveAppoThe10");
  let radios = [
    document.getElementById("DeclByQualPers_IHaveAppoThe_ImmeSupeOfCrit10"),
    document.getElementById("DeclByQualPers_IHaveAppoThe_FullTimeSupeOf10"),
  ];

  if (condition == true) {
    name.setAttribute("mandatory", "");
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }
    checkbox.setAttribute("mandatory", "");
  } else {
    name.removeAttribute("mandatory");
    uen.removeAttribute("data-invalid");
    uen.removeAttribute("data-invalid-message");
    for (f of fields) {
      f.value = "";
    }
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    for (r of radios) {
      r.setAttribute("disabled", "");
      r.removeAttribute("mandatory");
      r.checked = false;
    }
    checkbox.removeAttribute("mandatory");
    checkbox.checked = false;
  }
}

function DeclByQualPers_IHaveAppoThe10_change(element) {
  let radios = [
    document.getElementById("DeclByQualPers_IHaveAppoThe_ImmeSupeOfCrit10"),
    document.getElementById("DeclByQualPers_IHaveAppoThe_FullTimeSupeOf10"),
  ];
  if (element.checked) {
    for (let r of radios) {
      r.removeAttribute("disabled");
      r.setAttribute("mandatory", "");
      r.setAttribute("checked", "");
    }
  } else {
    for (let r of radios) {
      r.setAttribute("disabled", "");
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
      r.checked = false;
    }
  }
}
function toggleLiceParticular(condition) {
  let fields = [
    document.querySelector(".liceName"),
    //document.querySelector(".liceTitle"),
    document.querySelector(".liceNric"),
    document.querySelector(".liceNricMasked"),
    document.querySelector(".liceFirmname"),
    document.querySelector(".liceUEN"),
    document.querySelector(".liceAddress"),
    document.querySelector(".liceTelNo"),
    document.querySelector(".liceHandNo"),
    document.querySelector(".liceEmail"),
    //document.getElementById("DeclByOWN_2IConfThat_AsThe10")
  ];
  let name = document.querySelector(".liceName");
  let uen = document.querySelector(".liceUEN");
  if (condition == true) {
    document.querySelector(".liceTitle").value = "";
    // document
    //   .getElementById("DeclByOWN_2IConfThat_AsThe10")
    //   .removeAttribute("disabled", "");
    // document
    //   .getElementById("DeclByOWN_2IConfThat_AsThe10")
    //   .setAttribute("mandatory", "");
    name.setAttribute("mandatory", "");
    name.removeAttribute("disabled", "");
    uen.removeAttribute("disabled", "");
  } else {
    document.querySelector(".liceTitle").value = "";
    // document
    //   .getElementById("DeclByOWN_2IConfThat_AsThe10")
    //   .setAttribute("disabled", "");
    // document
    //   .getElementById("DeclByOWN_2IConfThat_AsThe10")
    //   .removeAttribute("mandatory", "");
    for (f of fields) {
      f.value = "";
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory", "");
    }
    uen.removeAttribute("data-invalid");
    uen.removeAttribute("data-invalid-message");
  }
}
function toggleParticularOutgoBuilSpecBuil(condition) {
  let main = document.querySelectorAll("#particularOutgoBuilSpecBuil");
  //let particulars = document.querySelector(".builder");
  let fields = [
    document.querySelector(".outgoinNric"),
    document.querySelector(".outgoinNricMasked"),
    document.querySelector(".outgoinName"),
    document.querySelector(".outgoinMemId"),
    document.querySelector(".outgoinTitle"),
    document.querySelector(".outgoinFirmname"),
    document.querySelector(".outgoinUEN"),
    document.querySelector(".outgoinAddress"),
    document.querySelector(".outgoinTelNo"),
    document.querySelector(".outgoinHandNo"),
    document.querySelector(".outgoinAddress"),
    document.querySelector(".outgoinEmailAddress"),
  ];

  let checkboxes = [
    document.getElementById("DeclByOWN_2IConfThat_PiliWork10"),
    document.getElementById("DeclByOWN_2IConfThat_PostTensWork10"),
    document.getElementById("DeclByOWN_2IConfThat_GrouSuppStabWork10"),
    document.getElementById("DeclByOWN_2IConfThat_SiteInveWorkExcl10"),
    document.getElementById("DeclByOWN_2IConfThat_StruSteeWork10"),
    document.getElementById("DeclByOWN_2IConfThat_SiteInveWorkIncl10"),
    document.getElementById("DeclByOWN_2IConfThat_PreCastConcWork10"),
  ];
  let datefield = document.getElementById("DeclByOWN_2IConfThat_Date10");
  let name = document.querySelector(".outgoinName");
  let uen = document.querySelector(".outgoinUEN");

  if (condition == true) {
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }
    datefield.setAttribute("mandatory", "");
    name.setAttribute("mandatory", "");
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    datefield.removeAttribute("mandatory");
    datefield.value = "";
    name.removeAttribute("mandatory");
    for (c of checkboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
    for (f of fields) {
      f.value = "";
    }
    uen.removeAttribute("data-invalid");
    uen.removeAttribute("data-invalid-message");
  }
}

function toggleTermiLicenSpecBuild(condition) {
  let checkboxes = [
    document.getElementById("DeclByOWN_AsLiceSpecBuil10_10"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil20"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil30"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil40"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil50"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil60"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil70"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil10_20"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil20_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil30_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil40_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil50_1"),
    document.getElementById("DeclByOWN_AsLiceSpecBuil60_1"),
  ];
  let select = [
    document.getElementById("Member_Member_Name_BLDR40"),
    document.getElementById("Member_Member_Name_BLDR40_1"),
    document.getElementById("Member_Member_Name_BLDR40_2"),
    document.querySelector(".Member_Member_Name_BLDR20_2"),
    document.querySelector(".Member_Member_Name_BLDR30_2"),
    document.getElementById("Members_Role_BLDR40"),
    document.getElementById("Members_Role_BLDR40_2"),
  ];
  let uen = [
    document.getElementById("Members_UEN_BLDR40"),
    document.getElementById("Members_UEN_BLDR40_1"),
    document.getElementById("Members_UEN_BLDR40_2"),
    document.querySelector(".Members_UEN_BLDR20_1"),
    document.querySelector(".Members_UEN_BLDR30_1"),
  ];
  let field = [
    document.querySelector(".Member_Firm_Name_BLDR20_1"),
    document.querySelector(".Member_Firm_Name_BLDR30_1"),
    document.getElementById("Member_Member_SID_BLDR40"),
    document.getElementById("Member_Member_SID_BLDR40_1"),
    document.getElementById("Member_Firm_Name_BLDR40"),
    document.getElementById("Member_Firm_Name_BLDR40_1"),
    document.getElementById("Member_Firm_Name_BLDR40_2"),
    document.getElementById("Member_NRIC_BLDR40"),
    document.getElementById("Member_NRIC_BLDR40_2"),
    document.getElementById("Member_NRIC_BLDR40_masked"),
    document.getElementById("Member_NRIC_BLDR40_2_masked"),
  ];

  for (c of checkboxes) {
    c.setAttribute("disabled", "");
    c.checked = false;
  }
  for (let s of select) {
    s.setAttribute("disabled", "");
    s.removeAttribute("mandatory");
    s.value = "";
  }
  for (let u of uen) {
    u.removeAttribute("data-invalid");
    u.removeAttribute("data-invalid-message");
    u.removeAttribute("mandatory");
    u.setAttribute("disabled", "");
    u.value = "";
  }
  for (let f of field) {
    f.setAttribute("disabled", "");
    f.value = "";
  }
}

function DeclByQualPers_IConfThat10_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers10"),
    document.getElementById("DeclByQualPers_ConfThat10"),
    document.getElementById("DeclByQualPers_AppoSpecBuil20"),
  ];

  let otherfields = [
    document.querySelector(".DeclByQualPers10_1"),
    document.querySelector(".DeclByQualPers_ConfThat10_1"),
    document.querySelector(".DeclByQualPers_AppoSpecBuil20_1"),
  ];

  switch (element.id) {
    case "DeclByQualPers_IConfThat10":
      if (element.checked) {
        for (f of fields) {
          f.removeAttribute("disabled");
          f.setAttribute("mandatory", "");
        }
      } else {
        for (f of fields) {
          f.setAttribute("disabled", "");
          f.value = "";
          f.removeAttribute("mandatory");
        }
      }
      break;
    case "DeclByQualPers_IConfThat20":
      if (element.checked) {
        for (f of otherfields) {
          f.removeAttribute("disabled");
          f.setAttribute("mandatory", "");
        }
      } else {
        for (f of otherfields) {
          f.setAttribute("disabled", "");
          f.value = "";
          f.removeAttribute("mandatory");
        }
      }
  }
}

function toggleParticularsSpecBuilder(condition) {
  let main = document.querySelectorAll("#particularSpecBuild");
  let fields = [
    document.querySelectorAll("[prefix='Member_Member_Name_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Title_BLDR50']"),
    document.querySelectorAll("[prefix='Member_NRIC_BLDR50']"),
    document.querySelectorAll("[prefix='Member_NRIC_MASKED_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Firm_Name_BLDR50']"),
    document.querySelectorAll("[prefix='Member_UEN_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Address_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Tel_No_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Mobile_No_BLDR50']"),
    document.querySelectorAll("[prefix='Member_Email_Address1_BLDR50']"),
  ];

  let particularField = [
    document.getElementById("DeclBySpecBuil_HereByNoti10"),
    document.getElementById("DeclBySpecBuil_HereByNoti_A10"),
    //document.getElementById("DeclBySpecBuil_HereByNoti_TheSpecBuil10"),
    document.getElementById("DeclBySpecBuil_HereByNoti_B10"),
  ];

  let name = document.querySelectorAll("[prefix='Member_Member_Name_BLDR50']");
  let uen = document.querySelectorAll("[prefix='Member_UEN_BLDR50']");
  let collapse = document.querySelectorAll("[prefix='collapse3']");
  let collapseSpan = document.querySelectorAll("[prefix='#collapse3']");
  let formField = document.querySelectorAll(".Efields");
  let decFields = [
    document.getElementById("DeclByQualPers10"),
    document.getElementById("DeclByQualPers_ConfThat10"),
    document.getElementById("DeclByQualPers_AppoSpecBuil20"),
  ];

  let checkbox = document.getElementById("DeclByQualPers_IConfThat10");
  let mandatorySelect = document.getElementById("DeclBySpecBuil_HereByNoti10");

  if (condition == true) {
    for (let j = 0; j < main.length; j++) {
      main[j].removeAttribute("hidden");
    }
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("mandatory", "");
    }
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
    mandatorySelect.setAttribute("mandatory", "");
  } else {
    mandatorySelect.removeAttribute("mandatory");
    for (let i = 0; i < formField.length; i++) {
      if (i != 0) {
        let elements = formField[i].querySelectorAll(
          "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
        );
        for (let element of elements) delete jsonData[element.id];
        formField[i].parentNode.removeChild(formField[i]);
      }
    }
    for (let partfields of particularField) {
      partfields.value = "";
    }
    for (let j = 0; j < collapse.length; j++) {
      collapse[j].classList.remove("show");
      collapseSpan[j].classList.remove("fa-angle-up");
      collapseSpan[j].classList.add("fa-angle-down");
    }
    for (let j = 0; j < main.length; j++) {
      main[j].setAttribute("hidden", "");
    }
    for (f of fields) {
      for (let i = 0; i < f.length; i++) {
        f[i].removeAttribute("mandatory");
        f[i].value = "";
        f[i].removeAttribute("data-invalid");
        f[i].removeAttribute("data-invalid-message");
      }
    }
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
    checkbox.checked = false;
    for (decF of decFields) {
      decF.setAttribute("disabled", "");
      decF.removeAttribute("mandatory");
      decF.value = "";
    }
  }
}

function toggleParticularSS(condition) {
  let main = document.querySelectorAll("#particularSS");
  let fields = [
    document.getElementById("Member_Member_Name_SS20"),
    document.getElementById("Member_Designation_SS20"),
    document.getElementById("Member_Firm_Name_SS20"),
    document.getElementById("Members_UEN_SS20"),
    document.getElementById("Member_Address_SS20"),
    document.getElementById("Member_Tel_No_SS20"),
    document.getElementById("Member_Mobile_No_SS20"),
    document.getElementById("Member_Email_Address1_SS20"),
  ];
  let declFields = [
    document.getElementById("DeclByIncoSite_IDeclThatIAm10_1"),
    document.getElementById("DeclByIncoSite_APhotOfMy20"),
  ];
  let checkboxes = [
    document.getElementById("DeclByIncoSite_IConfThatI10"),
    document.getElementById("DeclByIncoSite_IDeclThatI10"),
    document.getElementById("DeclByIncoSite_IDeclThatIAm20"),
    document.getElementById("DeclByIncoSite_IDeclThatIAm10"),
  ];
  let name = document.getElementById("Member_Member_Name_SS20");
  let uen = document.getElementById("Members_UEN_SS20");

  if (condition == true) {
    name.setAttribute("mandatory", "");
    for (let i = 0; i < main.length; i++) {
      main[i].removeAttribute("hidden");
    }
  } else {
    document
      .getElementById("DeclByIncoSite_IDeclThatIAm10_1")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByIncoSite_IDeclThatIAm10_1")
      .removeAttribute("mandatory");
    for (let i = 0; i < main.length; i++) {
      main[i].setAttribute("hidden", "");
    }
    for (c of checkboxes) {
      c.checked = false;
    }
    for (decl of declFields) {
      decl.value = "";
    }
    for (f of fields) {
      f.removeAttribute("mandatory");
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
  }
}

function DeclByIncoSite_IDeclThatIAm10_change(element) {
  let field = document.getElementById("DeclByIncoSite_IDeclThatIAm10_1");
  if (element.checked) {
    field.setAttribute("mandatory", "");
    field.removeAttribute("disabled");
  } else {
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }
}

function DeclByOWN_1IConfThat_AsThe_change(element) {
  let textbox = document
    .getElementById(element.id)
    .parentNode.parentNode.parentNode.querySelector(
      '[prefix="DeclByOWN_1IConfThat_SpecBuil"]'
    );
  let parent = document.getElementById("builders");
  let textboxs = parent.querySelectorAll(
    "[prefix='DeclByOWN_1IConfThat_SpecBuil']"
  );
  let select = document.getElementById(element.id);
  if (select.valueLabel === "Specialist Builder") {
    if (select.id === "DeclByOWN_1IConfThat_AsThe10") {
      for (let textbox1 of textboxs) {
        textbox1.setAttribute("readonly", "");
        textbox1.removeAttribute("mandatory");
      }
    }
    textbox.removeAttribute("hidden");
  } else {
    textbox.setAttribute("hidden", "");
    // DeclByOWN_1IConfThat_SpecBuil10_enabled();
  }
}

function removeSelectUENerror(uenField) {
  let uen = document.getElementById(uenField);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeSelectUENerror_DuplicateID(uenField) {
  let uen = document.querySelector("." + uenField);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeAddUENerror(element, uenField, suffix) {
  let id = getId(element.id);
  let uen = document.getElementById(uenField + id + suffix);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
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
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function removeMasking(parent, prefix1, prefix2) {
  let parentDiv = document.getElementById(parent);
  let childCount = parentDiv.childElementCount;
  let nricfields = document.querySelectorAll(`[prefix="${prefix1}"]`);
  let maskedfields = document.querySelectorAll(`[prefix="${prefix2}"]`);
  if (childCount > 1) {
    nricfields[nricfields.length - 1].value = "";
    maskedfields[maskedfields.length - 1].value = "";
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
          if (id == "Member_Member_Title_BLDR2010") {
            if (targetElement.value == "") jsonData[id] = "Mr";
          } else {
            if (
              targetElement.hasAttribute("data-options") &&
              !targetElement.hasAttribute("options")
            ) {
              let innerSelect = targetElement.shadowRoot.querySelector(
                "select"
              );
              jsonData[id] =
                innerSelect.options[innerSelect.selectedIndex].text;
              if (targetElement.value == "Please Select") {
                jsonData[id] = "";
              }
            } else {
              jsonData[id] = targetElement.value;
            }
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
