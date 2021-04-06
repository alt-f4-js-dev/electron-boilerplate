document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    FeeComForBuilWork_change(document.getElementById("FeeComForBuilWork10"));
    FeeComForBuilWork_change(document.getElementById("FeeComForBuilWork20"));

    let run = setTimeout(() => {
      getPlanFeeRateType();
      clearTimeout(run);
    }, 300);
  }

  for (let f of document.querySelectorAll(".feeTable_textbox")) {
    f.addEventListener("focus", (e) => {
      let val = e.target.value;

      if (parseFloat(val) == 0) {
        e.target.removeAttribute("mandatory");
        e.target.value = "";
      }
    });
  }
});

function DCSubmissionDate20_change(element) {
  let datefield = document.getElementById("DCSubmissionDate10");
  if (element.checked) {
    datefield.setAttribute("disabled", "");
    datefield.removeAttribute("mandatory");
    datefield.value = "";
  } else {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
  }
}

function DeclByAppl_change(element) {
  let pass = false;
  let checkboxes = document.querySelectorAll("[group-id='DeclByAppl_id']");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }
  if (pass) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
    }
  }
}

function DeclByAppl_ClasOfWork10_change(element) {
  let checkbox = document.getElementById("DeclByAppl_ClasOfWork20");
  let radios = document.querySelectorAll("[name='DeclByAppl_ClasOfWork_name']");
  let disFields = [
    document.getElementById("DeclByAppl_ClasOfWork_NewGFA10"),
    document.getElementById("DeclByAppl_ClasOfWork_AmendGFAIncr10"),
  ];
  DeclByAppl_change();
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    checkbox.setAttribute("disabled", "");
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    checkbox.removeAttribute("disabled");
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let field of disFields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function DeclByAppl_ClasOfWork20_change(element) {
  let checkbox = document.getElementById("DeclByAppl_ClasOfWork10");
  let radios = document.querySelectorAll("[name='AA_Work_name']");
  let disFields = [
    document.getElementById("DeclByAppl_ClasOfWork_IncrGFA10"),
    document.getElementById("DeclByAppl_ClasOfWork_AmendGFAIncr20"),
  ];
  DeclByAppl_change();
  if (element.checked) {
    checkbox.setAttribute("disabled", "");
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    checkbox.removeAttribute("disabled");
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let field of disFields) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function DeclByAppl_ClasOfWork_change(element) {
  let textbox = document.getElementById("DeclByAppl_ClasOfWork_NewGFA10");
  let textbox1 = document.getElementById(
    "DeclByAppl_ClasOfWork_AmendGFAIncr10"
  );
  switch (element.id) {
    case "DeclByAppl_ClasOfWork_NewGFA20":
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
      textbox1.setAttribute("disabled", "");
      textbox1.removeAttribute("mandatory");
      textbox1.value = "";
      break;
    case "DeclByAppl_ClasOfWork_AmendGFAIncr40":
      textbox1.removeAttribute("disabled");
      textbox1.setAttribute("mandatory", "");
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      break;
  }
}

function AA_Work_change(element) {
  let textbox = document.getElementById("DeclByAppl_ClasOfWork_IncrGFA10");
  let textbox1 = document.getElementById(
    "DeclByAppl_ClasOfWork_AmendGFAIncr20"
  );
  switch (element.id) {
    case "AA_Work_Increase_GFA_10":
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
      textbox1.setAttribute("disabled", "");
      textbox1.removeAttribute("mandatory");
      textbox1.value = "";
      break;
    case "DeclByAppl_ClasOfWork_AmendGFAIncr30":
      textbox1.removeAttribute("disabled");
      textbox1.setAttribute("mandatory", "");
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      break;
  }
}

function DeclByAppl_ClasOfWork30_change(element) {
  let textboxes = [
    document.getElementById("DeclByAppl_ClasOfWork_IncrGFA20"),
    document.getElementById("DeclByAppl_ClasOfWork_ExisGFA20"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}

function Member_Member_Name_QP10_change(element) {
  let select = document.getElementById(element.id);
  let checkbox = document.getElementById("DeclByAppl_InAccoWithSect20");
  let textbox = document.getElementById("DeclByAppl_InAccoWithSect10");
  if (checkbox.checked) {
    textbox.value = select.valueLabel.trim();
  }
}

function DeclByAppl_InAccoWithSect20_change(element) {
  let textbox = document.getElementById("DeclByAppl_InAccoWithSect10");
  let sid = document.getElementById("Member_Member_SID_QP20");
  let listofQp = document.getElementById("Member_Member_Name_QP20");
  let select = document.getElementById("Member_Member_Name_QP10");
  switch (element.id) {
    case "DeclByAppl_InAccoWithSect20":
      listofQp.value = "";
      listofQp.removeAttribute("mandatory");
      listofQp.setAttribute("disabled", "");
      if (select.valueLabel.trim() !== "Please Select") {
        textbox.value = select.valueLabel;
      }
      sid.value = "";
      break;
    case "DeclByAppl_InAccoWithSect30":
      textbox.value = "";
      listofQp.removeAttribute("disabled");
      listofQp.setAttribute("mandatory", "");
      sid.value = "";
      break;
  }
}

function DeclByQualPers_IConfThat_change(element) {
  let fields1 = [
    document.getElementById("DeclByQualPers_IConfThat_III_SubmissionNo10"),
    document.getElementById("DeclByQualPers_IConfThat_III_Date10"),
  ];
  let fields2 = [
    document.getElementById("DeclByQualPers_IConfThat_IV_DC10"),
    document.getElementById("DeclByQualPers_IConfThat_IV_EsAppvNo10"),
    document.getElementById("DeclByQualPers_IConfThat_IV_Date10"),
  ];
  switch (element.id) {
    case "DeclByQualPers_IConfThat_I10":
      for (let field of fields1) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      for (let field of fields2) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      break;
    case "DeclByQualPers_IConfThat_II10":
      for (let field of fields1) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      for (let field of fields2) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      break;
    case "DeclByQualPers_IConfThat_III10":
      for (let field of fields1) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      for (let field of fields2) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      break;
    case "DeclByQualPers_IConfThat_IV10":
      for (let field of fields2) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      for (let field of fields1) {
        field.removeAttribute("mandatory");
        field.setAttribute("disabled", "");
        field.value = "";
      }
      break;
  }
}

function DeclByQualPers_IConfThat10_change(element) {
  let checkbox = document.getElementById(element.id);
  let radios1 = document.querySelectorAll(
    "[name='DeclByQualPers_IConfThat_name']"
  );
  let radios2 = document.querySelectorAll(
    "[name='DeclByQualPers_IConfThat_IV_IHereDeclThat_name']"
  );
  let fields = [
    document.getElementById("DeclByQualPers_IConfThat_III_SubmissionNo10"),
    document.getElementById("DeclByQualPers_IConfThat_III_Date10"),
    document.getElementById("DeclByQualPers_IConfThat_IV_DC10"),
    document.getElementById("DeclByQualPers_IConfThat_IV_EsAppvNo10"),
    document.getElementById("DeclByQualPers_IConfThat_IV_Date10"),
  ];
  if (element.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
    for (let radio of radios1) {
      radio.removeAttribute("disabled");
    }
    for (let radio of radios2) {
      radio.removeAttribute("disabled");
    }
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    for (let radio of radios1) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let radio of radios2) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let field of fields) {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.value = "";
    }
  }
}

function DeclByQualPers_IConfThatThe20_change(element) {
  let select = document.getElementById("DeclByQualPers_IConfThatThe10");
  let radios = document.querySelectorAll(
    '[name="DeclByQualPers_IConfThatThe_name"]'
  );
  let radios1 = document.querySelectorAll(
    '[name="DeclByQualPers_IConfThatThe_A_name"]'
  );
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
    select.removeAttribute("disabled");
    select.setAttribute("mandatory", "");
  } else {
    select.removeAttribute("mandatory");
    select.setAttribute("disabled", "");
    select.value = "";
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    for (let radio of radios1) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
  }
}

function DeclByQualPers_IConfThatThe_change(element) {
  let radios = document.querySelectorAll(
    "[name='DeclByQualPers_IConfThatThe_A_name']"
  );
  switch (element.id) {
    case "DeclByQualPers_IConfThatThe_B10":
      for (let radio of radios) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      break;
    case "DeclByQualPers_IConfThatThe_A10":
      for (let radio of radios) {
        radio.removeAttribute("disabled");
      }
      break;
  }
}

function SubmChec_NotiOfAppoAuth_change(element) {
  let datefield = document.getElementById(
    "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev20"
  );
  switch (element.id) {
    case "SubmChec_NotiOfAppoAuth_IsAtta10":
      datefield.setAttribute("disabled", "");
      datefield.removeAttribute("mandatory");
      datefield.value = "";
      break;
    case "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10":
      datefield.removeAttribute("disabled");
      datefield.setAttribute("mandatory", "");
      break;
  }
}

function SubmChec_AlteSoluAre_change(element) {
  let checkboxes = document.querySelectorAll(
    "[group-id='lblSubmChec_AlteSoluAre_AdopFor_id']"
  );
  switch (element.id) {
    case "SubmChec_AlteSoluAre_NotAdop10":
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.checked = false;
      }
      break;
    case "SubmChec_AlteSoluAre_AdopFor10":
      for (let checkbox of checkboxes) {
        checkbox.removeAttribute("disabled");
      }
      break;
  }
}

function SubmChec_TheBuilWorkHave_change(element) {
  let fields = [
    document.getElementById("SubmChec_TheBuilWorkHave_CommOn20"),
    document.getElementById("SubmChec_TheBuilWorkHave_CommOn30"),
  ];
  switch (element.id) {
    case "SubmChec_TheBuilWorkHave_CommOn10":
      for (let field of fields) {
        field.removeAttribute("disabled");
        field.setAttribute("mandatory", "");
      }
      break;
    case "SubmChec_TheBuilWorkHave_NotComm10":
      for (let field of fields) {
        field.setAttribute("disabled", "");
        field.removeAttribute("mandatory");
        field.value = "";
      }
      break;
  }
}

function SubmChec_NotiOfAppoAuth10_change(element) {
  let radios = document.querySelectorAll(
    "[name='SubmChec_NotiOfAppoAuth_name']"
  );
  let datefield = document.getElementById(
    "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev20"
  );
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("disabled");
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function SubmChec_change(element) {
  let radios = document.querySelectorAll("[name='SubmChec_name']");

  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function SubmChec_UndeTheBuilCont_NotAppl_PlanPermRequ_change(el) {
  let radios = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_NotAppl_PlanPermRequ_name']"
  );

  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function SubmChec_UndeTheBuilCont_NotAppl_change(element) {
  let radios1 = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_NotAppl_name']"
  );
  let radios2 = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_NotAppl_PlanPermRequ_name']"
  );
  for (let radio of radios1) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  if (element.id === "SubmChec_UndeTheBuilCont_NotAppl_PlanPermRequ10") {
    for (let radio of radios2) {
      for (let span of document.querySelectorAll("[group='radio2-id']")) {
        span.innerHTML = "*";
      }
      radio.removeAttribute("disabled");
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  } else {
    for (let span of document.querySelectorAll("[group='radio2-id']")) {
      span.innerHTML = "";
    }
    for (let radio of radios2) {
      radio.setAttribute("disabled", "");
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
      radio.checked = false;
    }
  }
}

function FeeComForBuilWork_change(element) {
  let afterbut = document.querySelectorAll('[group-id="aftebutTd_id"]');
  let after = document.querySelectorAll('[group-id="afteTd_id"]');
  let before = document.querySelectorAll('[group-id="befoTd_id"]');
  let label = document.querySelectorAll('[group-id="noFee_id"]');
  let head = document.getElementById("headerTd_id");
  let hiddenLabel = document.querySelectorAll("[group-id='hiddenLabel']");
  let hiddenLabel2 = document.querySelectorAll("[group-id='hiddenLabel2']");
  for (let a of hiddenLabel) {
    a.innerHTML = " or (2)";
  }
  for (let b of hiddenLabel2) {
    b.setAttribute("hidden", "");
  }
  switch (element.id) {
    case "FeeComForBuilWork10":
      for (let tr of before) {
        tr.removeAttribute("hidden");
      }
      for (let tr of after) {
        tr.setAttribute("hidden", "");
      }
      for (let tr of afterbut) {
        tr.setAttribute("hidden", "");
      }

      for (let i = 0; i < label.length; i++) {
        label[0].innerHTML = "3.";
        label[1].innerHTML = "4.";
        label[2].innerHTML = "5.";
      }
      head.innerHTML = "SGFA/Plan Area (m<sup>2</sup>)/No. of storeys";
      for (let b of hiddenLabel2) {
        b.removeAttribute("hidden");
      }
      resetAfter(false);
      resetBut(false);
      resetBefore(true);
      break;
    case "FeeComForBuilWork20":
      for (let tr of after) {
        tr.removeAttribute("hidden");
      }
      for (let tr of before) {
        tr.setAttribute("hidden", "");
      }
      for (let tr of afterbut) {
        tr.setAttribute("hidden", "");
      }

      for (let i = 0; i < label.length; i++) {
        label[0].innerHTML = "3.";
        label[1].innerHTML = "4.";
        label[2].innerHTML = "5.";
      }
      head.innerHTML = "SGFA/Area of Plan View (m<sup>2</sup>)/No. of storeys";
      resetBefore(false);
      resetBut(false);
      resetAfter(true);
      break;

    case "FeeComForBuilWork30":
      for (let tr of afterbut) {
        tr.removeAttribute("hidden");
      }
      for (let tr of before) {
        tr.setAttribute("hidden", "");
      }
      for (let tr of after) {
        tr.setAttribute("hidden", "");
      }
      for (let i = 0; i < label.length; i++) {
        label[0].innerHTML = "4.";
        label[1].innerHTML = "5.";
        label[2].innerHTML = "6.";
      }
      head.innerHTML = "SGFA/Plan Area (m<sup>2</sup>)/No. of storeys";
      for (let a of hiddenLabel) {
        a.innerHTML = ", (2) or (3)";
      }
      resetBut(true);
      resetAfter(false);
      resetBefore(false);
      break;
  }

  document.getElementById("ChkNewBuilBuilWork1Show").checked = element.checked;
  document.getElementById("ChkNewBuilBuilWork2Show").checked = element.checked;
  document.getElementById("ChkNewStru1Show").checked = element.checked;
  document.getElementById("ChkNewStru2Show").checked = element.checked;
}

function resetBut(pass) {
  let checks = [
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork16"),
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork21"),
    document.getElementById("TypeOfBuilWork_NewStru16"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkOr10"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkWith10"),
    document.getElementById("TypeOfBuilWork_AmenDeviToAppr10"),
    // document.getElementById("PaymMode_Cheq10"),
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
  ];
  let disChecks = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea16"),
    document.getElementById("AreaStorSub_StatGrosFlooArea19"),
    document.getElementById("AreaStorSub_StatGrosFlooArea219"),
    document.getElementById("AreaStorSub_StatGrosFlooArea21"),
    document.getElementById("AreaStorSub_StatGrosFlooArea40"),
    document.getElementById("AreaStorSub_StatGrosFlooArea240"),
    document.getElementById("AreaStorSub_PlanArea16"),
    document.getElementById("AreaStorSub_PlanArea18"),
    document.getElementById("AreaStorSub_PlanArea218"),
    document.getElementById("AreaStorSub_PlanArea19"),
    document.getElementById("AreaStorSub_PlanArea219"),
    document.getElementById("AreaStorSub_NoOfStor10"),
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
    document.getElementById("Crit_AllBuilStruNoOfStor10"),
  ];
  let mandFields = [
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
    // document.getElementById("PaymMode_Cheq40"),
    // document.getElementById("PaymMode_Cheq50"),
    // document.getElementById("PaymMode_PaidEarl20"),
  ];
  let disFields = [
    document.getElementById("CompFees16"),
    document.getElementById("CompFees19"),
    document.getElementById("SubsCompFees19"),
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
    document.getElementById("CompFees26"),
    document.getElementById("CompFees29"),
    document.getElementById("SubsCompFees29"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    document.getElementById("PaymMode_Paym10"),
  ];
  let optional = [
    document.getElementById("PayeDeta_Name"),
    document.getElementById("PayeDeta_CompName"),
    document.getElementById("PayeDeta_Email"),
  ];
  if (!pass) {
    for (let c of checks) {
      c.checked = false;
    }
    for (let c of disChecks) {
      c.checked = false;
      c.setAttribute("disabled", "");
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of mandFields) {
      textbox.removeAttribute("mandatory", "");
      textbox.setAttribute("disabled", "");
    }
    for (let field of disFields) {
      field.value = "0";
    }
    for (let f of optional) {
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
      f.value = "";
    }
  }
}

function resetBefore(pass) {
  let checks = [
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork10"),
    document.getElementById("TypeOfBuilWork_NewStru10"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkOr10"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkWith10"),
    document.getElementById("TypeOfBuilWork_AmenDeviToAppr10"),
    // document.getElementById("PaymMode_Cheq10"),
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
  ];
  let disChecks = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea10"),
    document.getElementById("AreaStorSub_StatGrosFlooArea210"),
    document.getElementById("AreaStorSub_PlanArea10"),
    document.getElementById("AreaStorSub_PlanArea210"),
    document.getElementById("AreaStorSub_NoOfStor10"),
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
    document.getElementById("Crit_AllBuilStruNoOfStor10"),
  ];
  let mandFields = [
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
    // document.getElementById("PaymMode_Cheq40"),
    // document.getElementById("PaymMode_Cheq50"),
    // document.getElementById("PaymMode_PaidEarl20"),
  ];
  let disFields = [
    document.getElementById("CompFees10"),
    document.getElementById("SubsCompFees10"),
    document.getElementById("CompFees20"),
    document.getElementById("SubsCompFees20"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    document.getElementById("PaymMode_Paym10"),
  ];
  let optional = [
    document.getElementById("PayeDeta_Name"),
    document.getElementById("PayeDeta_CompName"),
    document.getElementById("PayeDeta_Email"),
  ];
  if (!pass) {
    for (let c of checks) {
      c.checked = false;
    }
    for (let c of disChecks) {
      c.checked = false;
      c.setAttribute("disabled", "");
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of mandFields) {
      textbox.removeAttribute("mandatory", "");
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let field of disFields) {
      field.value = "0";
    }
    for (let f of optional) {
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
      f.value = "";
    }
  }
}

function EmailValidate(element) {
  let field = document.getElementById(element.id);
  if (!validateEmail(element.value) && field.value !== "") {
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

function resetAfter(pass) {
  let checks = [
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork15"),
    document.getElementById("TypeOfBuilWork_NewStru15"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkOr10"),
    document.getElementById("TypeOfBuilWork_AddiAlteWorkWith10"),
    document.getElementById("TypeOfBuilWork_AmenDeviToAppr10"),
    // document.getElementById("PaymMode_Cheq10"),
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
  ];
  let disChecks = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea15"),
    document.getElementById("AreaStorSub_StatGrosFlooArea18"),
    document.getElementById("AreaStorSub_StatGrosFlooArea218"),
    // document.getElementById("AreaStorSub_StatGrosFlooArea20"),
    // document.getElementById("AreaStorSub_StatGrosFlooArea30"),
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("AreaStorSub_PlanArea18"),
    document.getElementById("AreaStorSub_PlanArea218"),
    document.getElementById("AreaStorSub_NoOfStor10"),
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
    document.getElementById("Crit_AllBuilStruNoOfStor10"),
  ];
  let mandFields = [
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
    // document.getElementById("PaymMode_Cheq40"),
    // document.getElementById("PaymMode_Cheq50"),
    // document.getElementById("PaymMode_PaidEarl20"),
  ];
  let disFields = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    // document.getElementById("CompFees70"),
    // document.getElementById("CompFees80"),
    document.getElementById("PaymMode_Paym10"),
  ];
  let optional = [
    document.getElementById("PayeDeta_Name"),
    document.getElementById("PayeDeta_CompName"),
    document.getElementById("PayeDeta_Email"),
  ];
  if (!pass) {
    for (let c of checks) {
      c.checked = false;
    }
    for (let c of disChecks) {
      c.checked = false;
      c.setAttribute("disabled", "");
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of mandFields) {
      textbox.removeAttribute("mandatory", "");
      textbox.setAttribute("disabled", "");
    }
    for (let field of disFields) {
      field.value = "0";
    }
    for (let f of optional) {
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
      f.value = "";
    }
  }
}

function SubmChec_UndeTheBuilCont_change(element) {
  let checkboxes = [
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheSaidPlotIs10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_ASetOfThes10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_ASetOfThes20"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"),
  ];
  let fields = [
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheSaidPlotIs20"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheBuilScorIs10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheBuilScorIs20"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_ThePlanPermWas10"),
  ];
  let radios1 = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_NotAppl_name']"
  );
  let radios2 = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_NotAppl_PlanPermRequ_name']"
  );
  let radios = document.querySelectorAll(
    "[name='SubmChec_UndeTheBuilCont_name']"
  );
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  switch (element.id) {
    case "SubmChec_UndeTheBuilCont_Appl10":
      for (let checkbox of checkboxes) {
        checkbox.removeAttribute("disabled");
        checkbox.setAttribute("checked", "");
        checkbox.setAttribute("mandatory", "");
      }
      for (let radio of radios1) {
        radio.setAttribute("disabled", "");
        radio.removeAttribute("checked");
        radio.removeAttribute("mandatory");
        radio.checked = false;
      }
      for (let radio of radios2) {
        radio.setAttribute("disabled", "");
        radio.removeAttribute("checked");
        radio.removeAttribute("mandatory");
        radio.checked = false;
      }
      for (let span of document.querySelectorAll("[group='checkbox-id']")) {
        span.innerHTML = "*";
      }
      for (let span of document.querySelectorAll("[group='radio-id']")) {
        span.innerHTML = "";
      }
      for (let span of document.querySelectorAll("[group='radio2-id']")) {
        span.innerHTML = "";
      }
      break;
    case "SubmChec_UndeTheBuilCont_NotAppl10":
      for (let span of document.querySelectorAll("[group='checkbox-id']")) {
        span.innerHTML = "";
      }
      for (let span of document.querySelectorAll("[group='radio-id']")) {
        span.innerHTML = "*";
      }
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.removeAttribute("checked");
        checkbox.removeAttribute("mandatory");
        checkbox.checked = false;
      }
      for (let field of fields) {
        field.setAttribute("disabled", "");
        field.removeAttribute("mandatory");
        field.value = "";
      }
      for (let radio of radios1) {
        radio.removeAttribute("disabled");
        radio.setAttribute("checked", "");
        radio.setAttribute("mandatory", "");
      }

      break;
  }
}

function TypeOfBuilWork_NewBuilBuilWork20_change(element) {
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea20"),
    document.getElementById("AreaStorSub_StatGrosFlooArea30"),
  ];
  let textboxes1 = [
    document.getElementById("CompFees70"),
    document.getElementById("CompFees80"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of textboxes1) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0.00";
    }
  }
}

function TypeOfBuilWork_NewBuilBuilWork21_change(element) {
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea21"),
    document.getElementById("AreaStorSub_StatGrosFlooArea40"),
    document.getElementById("AreaStorSub_StatGrosFlooArea240"),
  ];
  let textboxes1 = [
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of textboxes1) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
  }
  totalfee_change();
}

function TypeOfBuilWork_NewBuilBuilWork15_change(element) {
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea15"),
    document.getElementById("AreaStorSub_StatGrosFlooArea18"),
    document.getElementById("AreaStorSub_StatGrosFlooArea218"),
  ];
  let textboxes1 = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of textboxes1) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
  }
  totalfee_change();
}

function TypeOfBuilWork_NewBuilBuilWork16_change(element) {
  let textboxes = [
    document.getElementById("AreaStorSub_StatGrosFlooArea16"),
    document.getElementById("AreaStorSub_StatGrosFlooArea19"),
    document.getElementById("AreaStorSub_StatGrosFlooArea219"),
  ];
  let textboxes1 = [
    document.getElementById("CompFees16"),
    document.getElementById("CompFees19"),
    document.getElementById("SubsCompFees19"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of textboxes1) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
  }
  totalfee_change();
}

function SubmChec_UndeTheBuilCont_Appl_ASetOfThes10_change(element) {
  let fields = [
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheBuilScorIs10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheBuilScorIs20"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_ThePlanPermWas10"),
  ];
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
    }
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    for (let field of fields) {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.value = "";
    }
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  }
}

function SubmChec_UndeTheBuilCont_Appl_TheSaidPlotIs10_change(element) {
  let datefield = document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_TheSaidPlotIs20"
  );
  let checkbox = document.getElementById(element.id);
  if (element.checked) {
    datefield.removeAttribute("disabled");
    datefield.setAttribute("mandatory", "");
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
    datefield.removeAttribute("mandatory");
    datefield.setAttribute("disabled", "");
    datefield.value = "";
  }
}

function AreaStorSub_StatGrosFlooArea15_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees15");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea16_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees16");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea20_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees70");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea21_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees90");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_PlanArea15_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees25");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_PlanArea16_change(element) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById("CompFees26");
  let value = parseFloat(textbox.value);

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      fee.value = parseFloat(400 * (temp + 1)).toFixed(2);
    } else {
      fee.value = parseFloat(400 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    fee.value = "";
  } else {
    fee.value = "400.00";
  }
  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea30_change(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees80");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 150;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 220;
    let final = 3750 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = "";
  }
  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea40_change(element) {
  let textbox = document.getElementById("AreaStorSub_StatGrosFlooArea40");
  let resultField = document.getElementById("CompFees100");
  let resultField2 = document.getElementById("SubsCompFees100");
  let value = parseFloat(textbox.value);
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea240");
  let price,
    final = 0;

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(150 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(150 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "150.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(220 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(220 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "220.00";
  }

  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea18_change(element) {
  let textbox = document.getElementById("AreaStorSub_StatGrosFlooArea18");
  let resultField = document.getElementById("CompFees18");
  let resultField2 = document.getElementById("SubsCompFees18");
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea218");
  let value = parseFloat(textbox.value);
  let price,
    final = 0;

  if (
    (textbox.value !== "" || textbox.value !== "0.00") &&
    textbox.value >= 100
  ) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  totalfee_change();
}

function AreaStorSub_StatGrosFlooArea19_change(element) {
  let textbox = document.getElementById("AreaStorSub_StatGrosFlooArea19");
  let resultField = document.getElementById("CompFees19");
  let resultField2 = document.getElementById("SubsCompFees19");
  let value = parseFloat(textbox.value);
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea219");
  let price,
    final = 0;

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  totalfee_change();
}

function AreaStorSub_PlanArea18_change(element) {
  let textbox = document.getElementById("AreaStorSub_PlanArea18");
  let resultField = document.getElementById("CompFees28");
  let resultField2 = document.getElementById("SubsCompFees28");
  let value = parseFloat(textbox.value);
  let sgfaField2 = document.getElementById("AreaStorSub_PlanArea218");
  let price,
    final = 0;

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  totalfee_change();
}

function AreaStorSub_PlanArea19_change(element) {
  let textbox = document.getElementById("AreaStorSub_PlanArea19");
  let resultField = document.getElementById("CompFees29");
  let resultField2 = document.getElementById("SubsCompFees29");
  let value = parseFloat(textbox.value);
  let sgfaField2 = document.getElementById("AreaStorSub_PlanArea219");
  let price,
    final = 0;

  if ((textbox.value !== "" || textbox.value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (textbox.value === "" || textbox.value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(240 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(240 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "240.00";
  }

  totalfee_change();
}

function TypeOfBuilWork_NewStru15_change(element) {
  let fields = [
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("AreaStorSub_PlanArea18"),
    document.getElementById("AreaStorSub_PlanArea218"),
  ];
  let fee = [
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
  ];
  if (element.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
    }
  } else {
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (let field of fee) {
      field.value = "0";
    }
  }
  totalfee_change();
}

function TypeOfBuilWork_NewStru16_change(element) {
  let fields = [
    document.getElementById("AreaStorSub_PlanArea16"),
    document.getElementById("AreaStorSub_PlanArea19"),
    document.getElementById("AreaStorSub_PlanArea219"),
  ];
  let fee = [
    document.getElementById("CompFees26"),
    document.getElementById("CompFees29"),
    document.getElementById("SubsCompFees29"),
  ];
  if (element.checked) {
    for (let field of fields) {
      field.removeAttribute("disabled");
    }
  } else {
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (let field of fee) {
      field.value = "0";
    }
  }
  totalfee_change();
}

function TypeOfBuilWork_AddiAlteWorkOr10_change(element) {
  let textbox = document.getElementById("AreaStorSub_NoOfStor10");
  let fee = document.getElementById("CompFees30");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.value = "0";
    fee.value = "0";
  } else {
    textbox.setAttribute("disabled", "");
    textbox.value = "0";
    fee.value = "0";
  }
  totalfee_change();
}

function AreaStorSub_NoOfStor10_change(element, fees) {
  let value = element.value;
  let fee = document.getElementById(fees);

  if (value === "" || value === "0") {
    fee.value = "";
  } else {
    fee.value = parseFloat(parseInt(value) * 200).toFixed(2);
  }
  totalfee_change();
}

function AreaStorSub_NoOfStor102_change(element, fees) {
  let value = element.value;
  let fee = document.getElementById(fees);

  if (value === "" || value === "0") {
    fee.value = "";
  } else {
    fee.value = parseFloat(parseInt(value) * 400).toFixed(2);
  }
  totalfee_change();
}

function Crit_ResiBuil10_change(element, text, fees) {
  let fee = document.getElementById(fees);
  let textbox = document.getElementById(text);
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.value = "0";
    fee.value = "0";
  } else {
    textbox.setAttribute("disabled", "");
    textbox.value = "0";
    fee.value = "0";
  }
  totalfee_change();
}

function TypeOfBuilWork_AddiAlteWorkWith10_change(element) {
  let fields = [
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
  ];
  let fees = [
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
  ];
  let checks = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  if (element.checked) {
    for (let checkbox of checks) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    for (let checkbox of checks) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let field of fields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (let field of fees) {
      field.value = "";
    }
  }
  totalfee_change();
}

function TypeOfBuilWork_AmenDeviToAppr10_change(element, text, fees) {
  let fee = document.getElementById(fees);
  let textbox = document.getElementById(text);
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.value = "0";
    fee.value = "0";
  } else {
    textbox.setAttribute("disabled", "");
    textbox.value = "0";
    fee.value = "0";
  }
  totalfee_change();
}

function totalfee_change() {
  let fields = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
    document.getElementById("SubsCompFees18"),
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
    document.getElementById("SubsCompFees28"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
  ];
  let fields1 = [
    document.getElementById("CompFees10"),
    document.getElementById("SubsCompFees10"),
    document.getElementById("CompFees20"),
    document.getElementById("SubsCompFees20"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
    // document.getElementById("CompFees70"),
    // document.getElementById("CompFees80")
  ];
  let fields2 = [
    document.getElementById("CompFees16"),
    document.getElementById("CompFees19"),
    document.getElementById("SubsCompFees19"),
    document.getElementById("CompFees90"),
    document.getElementById("CompFees100"),
    document.getElementById("SubsCompFees100"),
    document.getElementById("CompFees26"),
    document.getElementById("CompFees29"),
    document.getElementById("SubsCompFees29"),
    document.getElementById("CompFees30"),
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
    document.getElementById("CompFees60"),
  ];
  let total = 0;
  let totalField = document.getElementById("PaymMode_Paym10");

  if (document.getElementById("FeeComForBuilWork30").checked) {
    for (let field of fields2) {
      if (field.value !== "") {
        total = parseFloat(total) + parseFloat(field.value);
      }
    }
  }
  if (document.getElementById("FeeComForBuilWork20").checked) {
    for (let field of fields) {
      if (field.value !== "") {
        total = parseFloat(total) + parseFloat(field.value);
      }
    }
  }

  if (document.getElementById("FeeComForBuilWork10").checked) {
    for (let field of fields1) {
      if (field.value !== "") {
        total = parseFloat(total) + parseFloat(field.value);
      }
    }
  }

  if (total != 0) {
    totalField.value = parseFloat(total).toFixed(2);
  } else {
    totalField.value = "";
  }
}

function AreaStorSub_change(element, fees, subfees) {
  let textbox = document.getElementById(element.id);
  let fee = document.getElementById(fees);
  let subfee = document.getElementById(subfees);
  let value = parseFloat(textbox.value);

  if (
    (textbox.value !== "" || textbox.value !== "0") &&
    value >= 100 &&
    value <= 2500
  ) {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    fee.value = final;
    subfee.value = "";
  } else if (
    (textbox.value !== "" || textbox.value !== "0") &&
    value >= 100 &&
    value > 2500
  ) {
    let temp1 = 7500;
    let temp = value - 2500;
    price = (temp / 100) * 200;
    let final = price;
    let final2 = final.toFixed(2);
    fee.value = temp1.toFixed(2);
    subfee.value = final2;
  } else if (textbox.value === "" || textbox.value === "0") {
    fee.value = "";
    subfee.value = "";
  }
  totalfee_change();
}
function AreaStorSub_StatGrosFlooArea10_change(element) {
  let value = document.getElementById("AreaStorSub_StatGrosFlooArea10").value;
  let resultField = document.getElementById("CompFees10");
  let resultField2 = document.getElementById("SubsCompFees10");
  let sgfaField2 = document.getElementById("AreaStorSub_StatGrosFlooArea210");
  let price,
    final = 0;

  if ((value !== "" || value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value === "" || value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(200 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(200 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "200.00";
  }

  totalfee_change();
}

function AreaStorSub_PlanArea10_change(element) {
  let value = document.getElementById("AreaStorSub_PlanArea10").value;
  let resultField = document.getElementById("CompFees20");
  let resultField2 = document.getElementById("SubsCompFees20");
  let sgfaField2 = document.getElementById("AreaStorSub_PlanArea210");
  let price,
    final = 0;

  if ((value !== "" || value !== "0.00") && value >= 100) {
    let temp = parseInt(value / 100);
    if (temp != value / 100) {
      resultField.value = parseFloat(300 * (temp + 1)).toFixed(2);
    } else {
      resultField.value = parseFloat(300 * temp).toFixed(2);
    }
  } else if (value === "" || value === "0.00") {
    resultField.value = "0";
  } else {
    resultField.value = "300.00";
  }

  if (
    (sgfaField2.value !== "" || sgfaField2.value !== "0.00") &&
    sgfaField2.value >= 100
  ) {
    let temp = parseInt(sgfaField2.value / 100);
    if (temp != sgfaField2.value / 100) {
      resultField2.value = parseFloat(200 * (temp + 1)).toFixed(2);
    } else {
      resultField2.value = parseFloat(200 * temp).toFixed(2);
    }
  } else if (sgfaField2.value === "" || sgfaField2.value === "0.00") {
    resultField2.value = "0";
  } else {
    resultField2.value = "200.00";
  }

  totalfee_change();
}

function TypeOfBuilWork_NewBuilBuilWork10_change(element) {
  let textbox = document.getElementById("AreaStorSub_StatGrosFlooArea10");
  let fee = document.getElementById("CompFees10");
  let subfee = document.getElementById("SubsCompFees10");
  let textbox2 = document.getElementById("AreaStorSub_StatGrosFlooArea210");

  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox2.removeAttribute("disabled");
    fee.value = "0";
    subfee.value = "0";
    textbox.value = "0";
    textbox2.value = "0";
  } else {
    textbox.setAttribute("disabled", "");
    textbox2.setAttribute("disabled", "");
    fee.value = "0";
    subfee.value = "0";
    textbox.value = "0";
    textbox2.value = "0";
  }

  totalfee_change();
}

function TypeOfBuilWork_NewStru10_change(element) {
  let textbox = document.getElementById("AreaStorSub_PlanArea10");
  let fee = document.getElementById("CompFees20");
  let subfee = document.getElementById("SubsCompFees20");
  let textbox2 = document.getElementById("AreaStorSub_PlanArea210");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox2.removeAttribute("disabled");
    fee.value = "0";
    subfee.value = "0";
    textbox.value = "0";
    textbox2.value = "0";
  } else {
    textbox.setAttribute("disabled", "");
    textbox2.setAttribute("disabled", "");
    fee.value = "0";
    subfee.value = "0";
    textbox.value = "0";
    textbox2.value = "0";
  }
  totalfee_change();
}

function PaymMode_change(element) {
  let fields = [
    // document.getElementById("PaymMode_Cheq20"),
    // document.getElementById("PaymMode_Cheq30"),
    // document.getElementById("PaymMode_Cheq40"),
    // document.getElementById("PaymMode_Cheq50"),
  ];
  // let select = document.getElementById("PaymMode_PaidEarl20");
  switch (element.id) {
    // case "PaymMode_Cheq10":
    //   for (let field of fields) {
    //     field.removeAttribute("disabled");
    //     field.setAttribute("mandatory", "");
    //   }
    //   select.removeAttribute("mandatory");
    //   select.value = "";
    //   select.setAttribute("disabled", "");
    //   break;
    case "PaymMode_ePay10":
      for (let field of fields) {
        field.setAttribute("disabled", "");
        field.removeAttribute("mandatory");
        field.value = "";
      }
      // select.removeAttribute("mandatory");
      // select.value = "";
      // select.setAttribute("disabled", "");
      break;
    // case "PaymMode_PaidEarl10":
    //   for (let field of fields) {
    //     field.setAttribute("disabled", "");
    //     field.removeAttribute("mandatory");
    //     field.value = "";
    //   }
    //   select.removeAttribute("disabled");
    //   select.setAttribute("mandatory", "");
    //   break;
  }
}
/////////////////////////////////////////////////////////////////////////////
function particularsOfApplicationFormAdd_click(parent) {
  let parentContainer = document.getElementById(parent);
  let childCount = document.getElementById(parent).childElementCount;
  let uen = document.querySelectorAll("[prefix='Members_UEN_OWNER']");
  let targetDiv = [];

  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
  }

  for (let div of parentContainer.querySelectorAll("div")) {
    if (div.hasAttribute("id") && !div.hasAttribute("child")) {
      targetDiv.push(div);
      div.querySelector("cn2-button").removeAttribute("disabled");
    }
  }
}

function particularsOfApplicationFormDelete_click(parent) {
  parent = document.getElementById(parent);
  let targetDiv = [];
  for (let div of parent.querySelectorAll("div")) {
    if (div.hasAttribute("id") && div.hasAttribute("parent")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length == 1) {
    targetDiv[0].querySelector("cn2-button").setAttribute("disabled", "");
  }
}

function PartOfAppl_PlanType20_change(element) {
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

function PartOfAppl_PlanType20_keypress(event, element) {
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

function removeMandCheck(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
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

function DCSubmissionDate30_change() {
  let dateField1 = document.getElementById("DCSubmissionDate10");
  let dateField2 = document.getElementById(
    "SubmChec_UndeTheBuilCont_ThePlanPermWas10"
  );

  dateField2.value = dateField1.value;

  //page5 logic
  let radioButton = document.getElementById(
    "SubmChec_UndeTheBuilCont_TheLandOnWhic20"
  );
  let datefield = document.getElementById("DCSubmissionDate10");
  var d = new Date(datefield.value);
  let compareDate = new Date("2021-04-15");

  let rad2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_TotaGreeMarkScor10"
  );

  let rad3 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan10"
  );

  if (radioButton.checked) {
    if (datefield.value != null && datefield.value.length != 0) {
      if (d < compareDate.getTime()) {
        rad2.removeAttribute("disabled");
        rad2.setAttribute("checked", "");
        rad2.setAttribute("mandatory", "");
        rad2.checked = false;
        rad3.checked = false;
        rad3.removeAttribute("disabled");
        rad3.setAttribute("checked", "");
        rad3.setAttribute("mandatory", "");

        resetIIIB6();
      } else {
        rad2.checked = false;
        rad3.checked = false;
        rad2.setAttribute("disabled", "");
        rad2.removeAttribute("checked");
        rad2.removeAttribute("mandatory");

        resetIIIB6();
      }
    } else if (document.getElementById("DCSubmissionDate20").checked) {
      rad2.checked = false;
      rad2.setAttribute("disabled", "");
      rad2.removeAttribute("checked");
      rad2.removeAttribute("mandatory");

      rad3.checked = false;
      rad3.setAttribute("disabled", "");
      rad3.removeAttribute("checked");
      rad3.removeAttribute("mandatory");

      resetIIIB6();
    }
  }
}

function SubmChec_UndeTheBldgCont_EnviSustReg1_change(el) {
  let id = el.id;

  let radGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_GMAppl20"),
    document.getElementById("SubmChec_UndeTheBuilCont_GMAppl30"),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_ForTheDeveThatIs10"
    ),
    document.getElementById("SubmChec_UndeTheBuilCont_GMWaivObta10"),
  ];

  let mainRadGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_GMAppl10"),
    document.getElementById("SubmChec_UndeTheBuilCont_GMNotAppl10"),
  ];

  let rad2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_TotaGreeMarkScor10"
  );

  let rad3 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan10"
  );

  let rad4 = document.getElementById(
    "SubmChec_UndeTheBuilCont_TheLandOnWhic10"
  );

  let rad5 = document.getElementById(
    "SubmChec_UndeTheBuilCont_TheLandOnWhic20"
  );

  let selectGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_CertWith10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Regu10"),
  ];
  //let dateField2 = document.getElementById("SubmChec_UndeTheBuilCont_Regu10");
  let textfield = document.getElementById(
    "SubmChec_UndeTheBuilCont_RefNoAckn10"
  );
  let addBtn = document.getElementById("addBtn10");

  for (let removeManda of mainRadGroup) {
    removeManda.removeAttribute("checked");
    removeManda.removeAttribute("mandatory");
  }

  let datefield = document.getElementById("DCSubmissionDate10");
  var d = new Date(datefield.value);
  let compareDate = new Date("2021-04-15");

  switch (id) {
    case "SubmChec_UndeTheBuilCont_GMAppl10":
      rad4.checked = false;
      rad4.removeAttribute("disabled", "");

      rad5.checked = false;
      rad5.removeAttribute("disabled", "");

      rad2.checked = false;
      rad2.removeAttribute("mandatory");
      rad2.removeAttribute("checked");
      rad2.setAttribute("disabled", "");

      rad3.checked = false;
      rad3.removeAttribute("mandatory");
      rad3.removeAttribute("checked");
      rad3.setAttribute("disabled", "");

      resetIIIA6();
      resetIIIB6();

      break;
    case "SubmChec_UndeTheBuilCont_TheLandOnWhic20":
      for (let target of radGroup) {
        target.removeAttribute("disabled");
        target.setAttribute("checked", "");
        target.setAttribute("mandatory", "");
      }
      if (datefield.value != null && datefield.value.length != 0) {
        if (d < compareDate.getTime()) {
          rad2.removeAttribute("disabled");
          rad2.setAttribute("checked", "");
          rad2.setAttribute("mandatory", "");

          rad3.removeAttribute("disabled");
          rad3.setAttribute("checked", "");
          rad3.setAttribute("mandatory", "");
        } else {
          rad3.removeAttribute("disabled");
          rad3.setAttribute("checked", "");
          rad3.setAttribute("mandatory", "");
        }
      }
      resetIIIA6();
      break;
    case "SubmChec_UndeTheBuilCont_TheLandOnWhic10":
      for (let target of radGroup) {
        target.checked = false;
        target.removeAttribute("mandatory");
        target.removeAttribute("checked");
        target.setAttribute("disabled", "");
      }
      for (let target of selectGroup) {
        target.removeAttribute("disabled");
        target.setAttribute("mandatory", "");
      }
      textfield.removeAttribute("disabled");

      addBtn.removeAttribute("disabled");

      rad2.checked = false;
      rad2.removeAttribute("mandatory");
      rad2.removeAttribute("checked");
      rad2.setAttribute("disabled", "");

      rad3.checked = false;
      rad3.removeAttribute("mandatory");
      rad3.removeAttribute("checked");
      rad3.setAttribute("disabled", "");
      resetIIIB6();
      break;
    case "SubmChec_UndeTheBuilCont_GMNotAppl10":
      for (let target of radGroup) {
        target.checked = false;
        target.removeAttribute("mandatory");
        target.removeAttribute("checked");
        target.setAttribute("disabled", "");
      }
      rad2.checked = false;
      rad2.removeAttribute("mandatory");
      rad2.removeAttribute("checked");
      rad2.setAttribute("disabled", "");

      rad3.checked = false;
      rad3.removeAttribute("mandatory");
      rad3.removeAttribute("checked");
      rad3.setAttribute("disabled", "");

      rad4.checked = false;
      rad4.setAttribute("disabled", "");

      rad5.checked = false;
      rad5.setAttribute("disabled", "");
      resetIIIA6();
      resetIIIB6();
      break;
  }
}
function resetIIIA6() {
  let selectGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_CertWith10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Regu10"),
  ];
  let dateField = document.getElementById(
    "SubmChec_UndeTheBuilCont_SoldOnDate10"
  );
  let textfield = document.querySelectorAll(
    "[prefix = 'SubmChec_UndeTheBuilCont_RefNoAckn']"
  );
  let addBtn = document.getElementById("addBtn10");
  let delBtn = document.querySelectorAll(".deleteBtn");

  for (let target of selectGroup) {
    target.value = "";
    target.removeAttribute("mandatory");
    target.setAttribute("disabled", "");
  }

  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].setAttribute("disabled", "");
  }

  for (let x = 0; x < textfield.length; x++) {
    textfield[x].value = "";
    textfield[x].setAttribute("disabled", "");
    textfield[x].removeAttribute("mandatory");
  }

  dateField.value = "";
  dateField.removeAttribute("mandatory");
  dateField.setAttribute("disabled", "");

  let parent = "greenMarkForm";
  let tempDiv = document.getElementById(parent).querySelectorAll("div");

  addBtn.setAttribute("disabled", "");

  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      removeDuplicate(div.querySelector("cn2-button").id, "A1", parent);
    }
  }
}
function resetIIIB6() {
  let textBoxGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_GMEFillNo10"),
    document.getElementById("SubmChec_UndeTheBuilCont_GMEFillNo10_1"),
    document.getElementById("SubmChec_UndeTheBuilCont_ProjType10"),
    document.getElementById("SubmChec_UndeTheBuilCont_ResGMScor10"),
    document.getElementById("SubmChec_UndeTheBuilCont_NonResGMScor10"),
    document.getElementById("SubmChec_UndeTheBuilCont_ProjType10"),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgBaseRequ10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgElecOpti10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgBaseRequ10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgElecOpti10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_ForTheDeveThatIs20"
    ),
  ];

  for (let target of textBoxGroup) {
    target.value = "";
    target.removeAttribute("mandatory");
    target.setAttribute("disabled", "");
  }
}

function SubmChec_UndeTheBldgCont_EnviSustReg2(el) {
  let id = el.id;
  let radGroup = [
    document.getElementById("SubmChec_UndeTheBuilCont_GMAppl20"),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_TotaGreeMarkScor10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan10"
    ),
    document.getElementById("SubmChec_UndeTheBuilCont_GMAppl30"),
    document.getElementById(
      "SubmChec_UndeTheBldgCont_EnviSustReg_ForTheDeveThatIs10"
    ),
    document.getElementById("SubmChec_UndeTheBuilCont_GMWaivObta10"),
  ];

  for (let removeManda of radGroup) {
    removeManda.removeAttribute("checked");
    removeManda.removeAttribute("mandatory");
  }

  //1st RadioBtn
  let gmTextField2 = document.getElementById(
    "SubmChec_UndeTheBuilCont_GMEFillNo10"
  );
  let gmTextField3 = document.getElementById(
    "SubmChec_UndeTheBuilCont_GMEFillNo10_1"
  );
  //2nd RadioBtn
  let projectType1 = document.getElementById(
    "SubmChec_UndeTheBuilCont_ProjType10"
  );
  let residentialField1 = document.getElementById(
    "SubmChec_UndeTheBuilCont_ResGMScor10"
  );
  let nonResidentialField1 = document.getElementById(
    "SubmChec_UndeTheBuilCont_NonResGMScor10"
  );
  //3rd RadioBtn
  let projectType2 = document.getElementById(
    "SubmChec_UndeTheBuilCont_ProjType10"
  );
  let residentialField2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgBaseRequ10"
  );
  let nonResidentialField2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgElecOpti10"
  );
  let residentialField3 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgBaseRequ10"
  );
  let nonResidentialField3 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgElecOpti10"
  );
  //4th RadioBtn
  //NA
  //5th RadioBtn
  let selectField1 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_ForTheDeveThatIs20"
  );
  //6th RadioBtn
  //NA

  let tempArray = new Array();

  switch (id) {
    case "SubmChec_UndeTheBuilCont_GMAppl20":
      gmTextField2.value = document.getElementById(
        "Project_Project_Ref_No10"
      ).value;
      gmTextField3.removeAttribute("disabled");
      gmTextField3.setAttribute("mandatory", "");

      otherFields = tempArray.concat(
        projectType1,
        residentialField1,
        nonResidentialField1,
        projectType2,
        residentialField2,
        nonResidentialField2,
        residentialField3,
        nonResidentialField3,
        selectField1
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
    case "SubmChec_UndeTheBldgCont_EnviSustReg_TotaGreeMarkScor10":
      projectType1.removeAttribute("disabled");
      projectType1.setAttribute("mandatory", "");

      otherFields = tempArray.concat(
        gmTextField2,
        gmTextField3,
        projectType2,
        residentialField2,
        nonResidentialField2,
        residentialField3,
        nonResidentialField3,
        selectField1
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
    case "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan10":
      projectType2.removeAttribute("disabled");
      projectType2.setAttribute("mandatory", "");

      otherFields = tempArray.concat(
        gmTextField2,
        gmTextField3,
        projectType1,
        residentialField1,
        nonResidentialField1,
        selectField1
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
    case "SubmChec_UndeTheBuilCont_GMAppl30":
      otherFields = tempArray.concat(
        gmTextField2,
        gmTextField3,
        projectType1,
        residentialField1,
        nonResidentialField1,
        projectType2,
        residentialField2,
        nonResidentialField2,
        residentialField3,
        nonResidentialField3,
        selectField1
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
    case "SubmChec_UndeTheBldgCont_EnviSustReg_ForTheDeveThatIs10":
      selectField1.removeAttribute("disabled");
      selectField1.setAttribute("mandatory", "");

      otherFields = tempArray.concat(
        gmTextField2,
        gmTextField3,
        projectType1,
        residentialField1,
        nonResidentialField1,
        projectType2,
        residentialField2,
        nonResidentialField2,
        residentialField3,
        nonResidentialField3
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
    case "SubmChec_UndeTheBuilCont_GMWaivObta10":
      otherFields = tempArray.concat(
        gmTextField2,
        gmTextField3,
        projectType1,
        residentialField1,
        nonResidentialField1,
        projectType2,
        residentialField2,
        nonResidentialField2,
        residentialField3,
        nonResidentialField3,
        selectField1
      );

      for (let disableTarget of otherFields) {
        disableTarget.value = "";
        disableTarget.removeAttribute("mandatory");
        disableTarget.setAttribute("disabled", "");
      }
      break;
  }
}

function SubmChec_UndeTheBldgCont_EnviSustReg_TotaGreeMarkScor_change(element) {
  let selecValue = document.getElementById(element.id).value;
  let resBldgLabel = document.getElementById("totalGrnMarkRes");
  let nonResBldgLabel = document.getElementById("totalGrnMarkNonRes");
  let residentialField1 = document.getElementById(
    "SubmChec_UndeTheBuilCont_ResGMScor10"
  );
  let nonResidentialField1 = document.getElementById(
    "SubmChec_UndeTheBuilCont_NonResGMScor10"
  );

  if (
    selecValue === "Non-Residential Applicable" ||
    selecValue === "Mixed-Use (Non-Res Applicable)"
  ) {
    resBldgLabel.innerHTML = "Residential Buildings";
    residentialField1.removeAttribute("numeric");
    residentialField1.removeAttribute("mandatory");
    residentialField1.setAttribute("disabled", "");
    residentialField1.value = "NA";

    nonResBldgLabel.innerHTML = "Non-Residential Buildings*";
    nonResidentialField1.removeAttribute("disabled");
    nonResidentialField1.setAttribute("mandatory", "");
    nonResidentialField1.setAttribute("numeric", "");
    nonResidentialField1.value = "";
  } else if (
    selecValue === "Residential Applicable" ||
    selecValue === "Mixed-Use (Res Applicable)"
  ) {
    nonResBldgLabel.innerHTML = "Non-Residential Buildings";
    nonResidentialField1.removeAttribute("numeric");
    nonResidentialField1.removeAttribute("mandatory");
    nonResidentialField1.setAttribute("disabled", "");
    nonResidentialField1.value = "NA";

    resBldgLabel.innerHTML = "Residential Buildings*";
    residentialField1.removeAttribute("disabled");
    residentialField1.setAttribute("mandatory", "");
    residentialField1.setAttribute("numeric", "");
    residentialField1.value = "";
  } else {
    resBldgLabel.innerHTML = "Residential Buildings*";
    nonResBldgLabel.innerHTML = "Non-Residential Buildings*";
    residentialField1.removeAttribute("disabled");
    residentialField1.setAttribute("mandatory", "");
    residentialField1.setAttribute("numeric", "");
    residentialField1.value = "";
    nonResidentialField1.removeAttribute("disabled");
    nonResidentialField1.setAttribute("mandatory", "");
    nonResidentialField1.setAttribute("numeric", "");
    nonResidentialField1.value = "";
  }
}

function resValueRange_blur(element) {
  let field = document.getElementById(element.id);
  if (field.value) {
    if (field.value > 100 || field.value < 1) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Please enter a range of 0 to 100."
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

function SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_change(element) {
  let selecValue = document.getElementById(element.id).value;

  let residentialField1 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgBaseRequ10"
  );
  let residentialField2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_ResiBldgElecOpti10"
  );
  let nonResidentialField1 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgBaseRequ10"
  );
  let nonResidentialField2 = document.getElementById(
    "SubmChec_UndeTheBldgCont_EnviSustReg_MiniEnviSustStan_NonResiBldgElecOpti10"
  );

  let tempArray = new Array();

  allFields = tempArray.concat(
    residentialField1,
    residentialField2,
    nonResidentialField1,
    nonResidentialField2
  );

  for (let removeInvalid of allFields) {
    removeInvalid.removeAttribute("data-invalid");
  }

  if (
    selecValue === "Non-Residential" ||
    selecValue === "Mixed-Use (Non-Residential)"
  ) {
    residentialField1.removeAttribute("numeric");
    residentialField1.removeAttribute("event-blur");
    residentialField1.removeAttribute("mandatory");
    residentialField1.setAttribute("disabled", "");
    residentialField1.value = "NA";

    residentialField2.removeAttribute("numeric");
    residentialField2.removeAttribute("event-blur");
    residentialField2.removeAttribute("mandatory");
    residentialField2.setAttribute("disabled", "");
    residentialField2.value = "NA";

    nonResidentialField1.setAttribute("numeric", "");
    nonResidentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    nonResidentialField1.setAttribute("mandatory", "");
    nonResidentialField1.removeAttribute("disabled", "");
    nonResidentialField1.value = "";

    nonResidentialField2.setAttribute("numeric", "");
    nonResidentialField2.setAttribute("event-blur", "resValueRange_blur(this)");
    nonResidentialField2.setAttribute("mandatory", "");
    nonResidentialField2.removeAttribute("disabled", "");
    nonResidentialField2.value = "";
  } else if (
    selecValue === "Residential" ||
    selecValue === "Mixed-Use (Residential)"
  ) {
    nonResidentialField1.removeAttribute("numeric");
    nonResidentialField1.removeAttribute("event-blur");
    nonResidentialField1.removeAttribute("mandatory");
    nonResidentialField1.setAttribute("disabled", "");
    nonResidentialField1.value = "NA";

    nonResidentialField2.removeAttribute("numeric");
    nonResidentialField2.removeAttribute("event-blur");
    nonResidentialField2.removeAttribute("mandatory");
    nonResidentialField2.setAttribute("disabled", "");
    nonResidentialField2.value = "NA";

    residentialField1.setAttribute("numeric", "");
    residentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    residentialField1.setAttribute("mandatory", "");
    residentialField1.removeAttribute("disabled", "");
    residentialField1.value = "";

    residentialField2.setAttribute("numeric", "");
    residentialField2.setAttribute("event-blur", "resValueRange_blur(this)");
    residentialField2.setAttribute("mandatory", "");
    residentialField2.removeAttribute("disabled", "");
    residentialField2.value = "";
  } else if (selecValue === "Residential (Lifts Upgrading)") {
    residentialField1.setAttribute("numeric", "");
    residentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    residentialField1.setAttribute("mandatory", "");
    residentialField1.removeAttribute("disabled", "");
    residentialField1.value = "";

    nonResidentialField1.removeAttribute("numeric");
    nonResidentialField1.removeAttribute("event-blur");
    nonResidentialField1.removeAttribute("mandatory");
    nonResidentialField1.setAttribute("disabled", "");
    nonResidentialField1.value = "NA";

    residentialField2.removeAttribute("numeric");
    residentialField2.removeAttribute("event-blur");
    residentialField2.removeAttribute("mandatory");
    residentialField2.setAttribute("disabled", "");
    residentialField2.value = "NA";

    nonResidentialField2.removeAttribute("numeric");
    nonResidentialField2.removeAttribute("event-blur");
    nonResidentialField2.removeAttribute("mandatory");
    nonResidentialField2.setAttribute("disabled", "");
    nonResidentialField2.value = "NA";
  } else if (
    selecValue ===
    "Non-Residential (Link ways, Underground Passes, Open Sheds & Substations)"
  ) {
    residentialField1.removeAttribute("numeric");
    residentialField1.removeAttribute("event-blur");
    residentialField1.removeAttribute("mandatory");
    residentialField1.setAttribute("disabled", "");
    residentialField1.value = "NA";

    nonResidentialField1.setAttribute("numeric", "");
    nonResidentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    nonResidentialField1.setAttribute("mandatory", "");
    nonResidentialField1.removeAttribute("disabled", "");
    nonResidentialField1.value = "";

    residentialField2.removeAttribute("numeric");
    residentialField2.removeAttribute("event-blur");
    residentialField2.removeAttribute("mandatory");
    residentialField2.setAttribute("disabled", "");
    residentialField2.value = "NA";

    nonResidentialField2.removeAttribute("numeric");
    nonResidentialField2.removeAttribute("event-blur");
    nonResidentialField2.removeAttribute("mandatory");
    nonResidentialField2.setAttribute("disabled", "");
    nonResidentialField2.value = "NA";
  } else {
    nonResidentialField1.setAttribute("numeric", "");
    nonResidentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    nonResidentialField1.setAttribute("mandatory", "");
    nonResidentialField1.removeAttribute("disabled", "");
    nonResidentialField1.value = "";

    nonResidentialField2.setAttribute("numeric", "");
    nonResidentialField2.setAttribute("event-blur", "resValueRange_blur(this)");
    nonResidentialField2.setAttribute("mandatory", "");
    nonResidentialField2.removeAttribute("disabled", "");
    nonResidentialField2.value = "";

    residentialField1.setAttribute("numeric", "");
    residentialField1.setAttribute("event-blur", "resValueRange_blur(this)");
    residentialField1.setAttribute("mandatory", "");
    residentialField1.removeAttribute("disabled", "");
    residentialField1.value = "";

    residentialField2.setAttribute("numeric", "");
    residentialField2.setAttribute("event-blur", "resValueRange_blur(this)");
    residentialField2.setAttribute("mandatory", "");
    residentialField2.removeAttribute("disabled", "");
    residentialField2.value = "";
  }
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

function SubmChec_UndeTheBuilCont_Regu_change(el, field) {
  if (el.value) {
    document.getElementById(field.id).removeAttribute("disabled");
    document.getElementById(field.id).setAttribute("mandatory", "");
  } else {
    document.getElementById(field.id).removeAttribute("mandatory");
    document.getElementById(field.id).setAttribute("disabled", "");
    document.getElementById(field.id).value = "";
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

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function rangeValue(el, type, params) {
  let val = el.value;
  let e = document.getElementById(el.id);
  if (type === "planNo" && val != "") {
    let from = parseFloat(params[0].split("-")[0]);
    let to = parseFloat(params[0].split("-")[1]);
    val = parseFloat(val);

    if (val != 0) {
      if (val >= from && val <= to) {
        if (val < 10) e.value = "00" + val;
        else if (val > 9 && val < 100) e.value = "0" + val;
      } else {
        e.value = "";
        showMessage(`Value should be from ${from} to ${to}`);
      }
      e.removeAttribute("data-invalid");
      e.removeAttribute("data-invalid-message");
    } else {
      e.setAttribute("data-invalid", "");
      e.setAttribute(
        "data-invalid-message",
        "Plan Number should not be " + el.value + ". Please try again"
      );
    }
  } else if (type === "range" && val != "") {
    let from = parseFloat(params.split("-")[0]);
    let to = parseFloat(params.split("-")[1]);
    val = parseFloat(val);

    if (!(val >= from && val <= to)) {
      e.value = "";
      showMessage(`Value should be from ${from} to ${to}`);
    }
  } else {
    if (val == "") {
      e.removeAttribute("data-invalid");
      e.removeAttribute("data-invalid-message");
    }
  }

  AreaStorSub_StatGrosFlooArea10_change();
  AreaStorSub_StatGrosFlooArea18_change();
  AreaStorSub_StatGrosFlooArea19_change();
  AreaStorSub_StatGrosFlooArea40_change();
  AreaStorSub_PlanArea10_change();
  AreaStorSub_PlanArea18_change();
  AreaStorSub_PlanArea19_change();
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
              "PartOfAppl_PlanType20",
              "DeclByAppl_ClasOfWork_NewGFA10",
              "DeclByAppl_ClasOfWork_IncrGFA20",
              "DeclByAppl_ClasOfWork_ExisGFA20",
              "DeclByAppl_ClasOfWork_AmendGFAIncr10",
              "AreaStorSub_StatGrosFlooArea15",
              "CompFees15",
              "AreaStorSub_StatGrosFlooArea18",
              "AreaStorSub_StatGrosFlooArea218",
              "CompFees18",
              "AreaStorSub_PlanArea15",
              "CompFees25",
              "AreaStorSub_PlanArea18",
              "AreaStorSub_PlanArea218",
              "CompFees28",
              "CompFees30",
              "CompFees40",
              "AreaStorSub_NonResiBuilNoOfStor10",
              "CompFees50",
              "CompFees60",
            ].includes(id) &&
            jsonData["FormName10"].includes("BCA-BP-BPAPPV01")
          ) {
            jsonData[id] = +targetElement.value + "";
          } else if (
            [
              "AreaStorSub_StatGrosFlooArea10",
              "AreaStorSub_StatGrosFlooArea210",
              "AreaStorSub_PlanArea10",
              "AreaStorSub_PlanArea210",
              "AreaStorSub_StatGrosFlooArea15",
              "AreaStorSub_StatGrosFlooArea18",
              "AreaStorSub_StatGrosFlooArea218",
              "AreaStorSub_PlanArea15",
              "AreaStorSub_PlanArea18",
              "AreaStorSub_PlanArea218",
              "AreaStorSub_NoOfStor10",
              "AreaStorSub_ResiBuilNoOfStor10",
              "AreaStorSub_NonResiBuilNoOfStor10",
              "Crit_AllBuilStruNoOfStor10",
            ].includes(id)
          ) {
            jsonData[id] = targetElement.value || "0";
          } else if (
            [
              "CompFees10",
              "CompFees20",
              "CompFees15",
              "CompFees18",
              "CompFees25",
              "CompFees28",
              "CompFees30",
              "CompFees40",
              "CompFees50",
              "CompFees60",
              "PaymMode_Paym10",
            ].includes(id)
          ) {
            jsonData[id] = targetElement.value || "0.00";
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
  let applicationType = "BP";
  let planType = document.getElementById("PartOfAppl_PlanType10").value;
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

function getPlanFeeRateType() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let applicationType = "BP";

  let query = `projRefNo=${projRefNo}&applicationType=${applicationType}`;

  jsonData["agencyUrl20"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl20"].url,
    query
  );

  if (dataResponse === 501) {
  } else {
    if (validWS(dataResponse)) {
      function disabledRadios() {
        document
          .getElementById("FeeComForBuilWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("FeeComForBuilWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("FeeComForBuilWork30")
          .setAttribute("disabled", "");
      }

      if (
        dataResponse.planFeeType.toLowerCase() ==
        "Before 10 Sep 2017".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork10").click();
        disabledRadios();
      } else if (
        dataResponse.planFeeType.toLowerCase() ==
        "On or after 10 Sep 2017 but before 2 Apr 2018".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork20").click();
        disabledRadios();
      } else if (
        dataResponse.planFeeType.toLowerCase() ==
        "On or after 2 Apr 2018".toLowerCase()
      ) {
        document.getElementById("FeeComForBuilWork30").click();
        disabledRadios();
      }
    }
  }
}
