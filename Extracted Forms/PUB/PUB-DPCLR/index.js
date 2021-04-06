function PartOfAppl_SubmType_SaniWork10_change(element) {
  let checkboxes = [
    document.getElementById("SanWrk_DetailSanWork10"),
    document.getElementById("PartofPlumber_Reg_SPS10_A1"),
    document.getElementById("PartofPlumber_Reg_PUB10_A1"),
    document.getElementById("PartofPlumber_Reg_NA10")
  ];
  let textboxes = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP10"),
    document.getElementById("Member_Tel_No_QP10"),
    document.getElementById("Member_Email_Address1_QP10"),
    document.getElementById("Member_Firm_Name_QP10"),
    document.getElementById("Member_Professional_No_QP10"),
    document.getElementById("SanWrk_Dev_COP10"),
    document.getElementById("Member_Member_Name_LPLUMBCONT10"),
    document.getElementById("Member_Firm_Name_LPLUMBCONT10"),
    document.getElementById("Member_Tel_No_LPLUMBCONT10"),
    document.getElementById("Member_Email_Address1_LPLUMBCONT10")
  ];
  let textboxes_check = [
    document.getElementById("PartofPlumber_Reg_SPS10_B1"),
    document.getElementById("PartofPlumber_Reg_PUB10_B1")
  ];
  if (element.checked) {
    document.getElementById("detailedSnPln").innerHTML =
      "1. Detailed Sanitary Plan*";
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
    document
      .getElementById("Member_Member_Name_QP10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SanWrk_DetailSanWork10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SanWrk_DetailSanWork10")
      .setAttribute("checked", "");
  } else {
    document.getElementById("A1plum1").innerHTML = "SPS Registered";
    document.getElementById("A1plum2").innerHTML = "PUB LP";
    document.getElementById("detailedSnPln").innerHTML =
      "1. Detailed Sanitary Plan";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let textbox of textboxes_check) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
      textbox.removeAttribute("mandatory");
    }
    document
      .getElementById("Member_Member_Name_QP10")
      .removeAttribute("mandatory");
    document
      .getElementById("SanWrk_DetailSanWork10")
      .removeAttribute("mandatory");
    document
      .getElementById("SanWrk_DetailSanWork10")
      .removeAttribute("checked");
  }
}

function PartofPlumber_Reg_SPS10_A1_change(element) {
  let textbox = document.getElementById("PartofPlumber_Reg_SPS10_B1");
  let checkbox = document.getElementById("PartofPlumber_Reg_NA10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function PartofPlumber_Reg_PUB10_A1_change(element) {
  let textbox = document.getElementById("PartofPlumber_Reg_PUB10_B1");
  let checkbox = document.getElementById("PartofPlumber_Reg_NA10");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function PartofPlumber_Reg_NA10_change(element) {
  let textboxes = [
    document.getElementById("PartofPlumber_Reg_SPS10_B1"),
    document.getElementById("PartofPlumber_Reg_PUB10_B1")
  ];
  let checkboxes = [
    document.getElementById("PartofPlumber_Reg_SPS10_A1"),
    document.getElementById("PartofPlumber_Reg_PUB10_A1")
  ];
  if (element.checked) {
    document.getElementById("A1plum1").innerHTML = "SPS Registered";
    document.getElementById("A1plum2").innerHTML = "PUB LP";
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}

function PartOfAppl_SubmType_UsedWatePumpSyst10_change(element) {
  let textboxes = [
    document.getElementById("Member_Member_Name_QP40"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP40"),
    document.getElementById("Member_Tel_No_QP40"),
    document.getElementById("Member_Email_Address1_QP40"),
    document.getElementById("Member_Firm_Name_QP40"),
    document.getElementById("Member_Professional_No_QP40"),
    document.getElementById("SeweWrkRC_COP10"),
    document.getElementById("Member_Member_Name_LPLUMBCONT20"),
    document.getElementById("Member_Firm_Name_LPLUMBCONT20"),
    document.getElementById("Member_Tel_No_LPLUMBCONT20"),
    document.getElementById("Member_Email_Address1_LPLUMBCONT20")
  ];
  let checkboxes = [
    document.getElementById("Atta_DetaPlanDrawOf10"),
    document.getElementById("Atta_AttaFormD2QP10"),
    document.getElementById("Atta_DesiCalc10"),
    document.getElementById("Atta_PumpAndSystCurv10"),
    document.getElementById("Atta_ReleEquiCata10"),
    document.getElementById("PartofPlumber_Regno_SPS20_A1"),
    document.getElementById("PartofPlumber_Regno_PUB20_A1"),
    document.getElementById("PartofPlumber_Regno_NA20")
  ];
  let parentDiv = document.getElementById("pumpForm");
  let txtbox = parentDiv.querySelectorAll("cn2-textbox");
  let selects = parentDiv.querySelectorAll("cn2-select");
  let buttons = document.getElementById("addButton");
  let textboxes_check = [
    document.getElementById("PartofPlumber_Regno_SPS20_B1"),
    document.getElementById("PartofPlumber_Regno_PUB20_B1")
  ];

  if (element.checked) {
    document.getElementById("detPlnUseWtr").innerHTML =
      "Detail plan drawings of used water pumping system(s).*";
    document.getElementById("attchD2QPalt").innerHTML =
      "Attached Form D2/QP if an alternate power source is not available.*";
    document.getElementById("dsgnCalc").innerHTML = "Design Calculations.*";
    document.getElementById("pumpSysCur").innerHTML =
      "Pump and system curves.*";
    document.getElementById("relvntEqCh").innerHTML =
      "Relevant equipment changes.*";

    document
      .getElementById("Atta_DetaPlanDrawOf10")
      .setAttribute("mandatory", "");
    document
      .getElementById("Atta_DetaPlanDrawOf10")
      .setAttribute("checked", "");
    document
      .getElementById("Atta_AttaFormD2QP10")
      .setAttribute("mandatory", "");
    document.getElementById("Atta_AttaFormD2QP10").setAttribute("checked", "");
    document.getElementById("Atta_DesiCalc10").setAttribute("mandatory", "");
    document.getElementById("Atta_DesiCalc10").setAttribute("checked", "");
    document
      .getElementById("Atta_PumpAndSystCurv10")
      .setAttribute("mandatory", "");
    document
      .getElementById("Atta_PumpAndSystCurv10")
      .setAttribute("checked", "");
    document
      .getElementById("Atta_ReleEquiCata10")
      .setAttribute("mandatory", "");
    document.getElementById("Atta_ReleEquiCata10").setAttribute("checked", "");

    document
      .getElementById("Member_Member_Name_QP40")
      .setAttribute("mandatory", "");
    document.getElementById("addButton").removeAttribute("disabled");
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
    for (let textbox of txtbox) {
      textbox.removeAttribute("disabled");
    }
    for (let select of selects) {
      select.removeAttribute("disabled");
    }
    // for (let button of buttons) {
    buttons.removeAttribute("disabled");
    // }
  } else {
    document.getElementById("detPlnUseWtr").innerHTML =
      "Detail plan drawings of used water pumping system(s).";
    document.getElementById("attchD2QPalt").innerHTML =
      "Attached Form D2/QP if an alternate power source is not available.";
    document.getElementById("dsgnCalc").innerHTML = "Design Calculations.";
    document.getElementById("pumpSysCur").innerHTML = "Pump and system curves.";
    document.getElementById("relvntEqCh").innerHTML =
      "Relevant equipment changes.";

    document.getElementById("A2plum1").innerHTML = "SPS Registered";
    document.getElementById("A2plum2").innerHTML = "PUB LP";

    document
      .getElementById("Atta_DetaPlanDrawOf10")
      .removeAttribute("mandatory");
    document.getElementById("Atta_DetaPlanDrawOf10").removeAttribute("checked");
    document.getElementById("Atta_AttaFormD2QP10").removeAttribute("mandatory");
    document.getElementById("Atta_AttaFormD2QP10").removeAttribute("checked");
    document.getElementById("Atta_DesiCalc10").removeAttribute("mandatory");
    document.getElementById("Atta_DesiCalc10").removeAttribute("checked");
    document
      .getElementById("Atta_PumpAndSystCurv10")
      .removeAttribute("mandatory");
    document
      .getElementById("Atta_PumpAndSystCurv10")
      .removeAttribute("checked");
    document.getElementById("Atta_ReleEquiCata10").removeAttribute("mandatory");
    document.getElementById("Atta_ReleEquiCata10").removeAttribute("checked");
    document
      .getElementById("Member_Member_Name_QP40")
      .removeAttribute("mandatory");
    document.getElementById("addButton").setAttribute("disabled", "");
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let textbox of txtbox) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let select of selects) {
      select.setAttribute("disabled", "");
      select.value = "";
    }
    // for (let button of buttons) {
    buttons.setAttribute("disabled", "");
    // }
    for (let textbox of textboxes_check) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
      textbox.removeAttribute("mandatory");
    }
  }
}

function PartofPlumber_Regno_SPS20_A1_change(element) {
  let textbox = document.getElementById("PartofPlumber_Regno_SPS20_B1");
  let checkbox = document.getElementById("PartofPlumber_Regno_NA20");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function PartofPlumber_Regno_PUB20_A1_change(element) {
  let textbox = document.getElementById("PartofPlumber_Regno_PUB20_B1");
  let checkbox = document.getElementById("PartofPlumber_Regno_NA20");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function PartofPlumber_Regno_NA20_change(element) {
  let textboxes = [
    document.getElementById("PartofPlumber_Regno_SPS20_B1"),
    document.getElementById("PartofPlumber_Regno_PUB20_B1")
  ];
  let checkboxes = [
    document.getElementById("PartofPlumber_Regno_SPS20_A1"),
    document.getElementById("PartofPlumber_Regno_PUB20_A1")
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      document.getElementById("A2plum1").innerHTML = "SPS Registered";
      document.getElementById("A2plum2").innerHTML = "PUB LP";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}

function PartOfAppl_SubmType_WorkAffeSewe10_change(element) {
  let textboxes = [
    document.getElementById("Member_Member_Name_QP70"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP70"),
    document.getElementById("Member_Tel_No_QP70"),
    document.getElementById("Member_Email_Address1_QP70"),
    document.getElementById("Member_Firm_Name_QP70"),
    document.getElementById("Member_Professional_No_QP70"),
    document.getElementById("Member_Member_Name_LPLUMBCONT30"),
    document.getElementById("Member_Firm_Name_LPLUMBCONT30"),
    document.getElementById("Member_Tel_No_LPLUMBCONT30"),
    document.getElementById("Member_Email_Address1_LPLUMBCONT30")
  ];
  let checkboxes = [
    document.getElementById("WorkAffeSew_DetaSewPlan10"),
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS30"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB30_A1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_NA30")
  ];
  let textboxes_check = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS30_B1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB30_B1")
  ];
  if (element.checked) {
    document
      .getElementById("Member_Member_Name_QP70")
      .setAttribute("mandatory", "");
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    document.getElementById("A3plum1").innerHTML = "SPS Registered";
    document.getElementById("A3plum2").innerHTML = "PUB LP";
    document
      .getElementById("Member_Member_Name_QP70")
      .removeAttribute("mandatory");
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let textbox of textboxes_check) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
      textbox.removeAttribute("mandatory");
    }
  }
}

function WorkAffeSew_PartofPlumCont_SPS30_change(element) {
  let textbox = document.getElementById("WorkAffeSew_PartofPlumCont_SPS30_B1");
  let checkbox = document.getElementById("WorkAffeSew_PartofPlumCont_NA30");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function WorkAffeSew_PartofPlumCont_PUB30_A1_change(element) {
  let textbox = document.getElementById("WorkAffeSew_PartofPlumCont_PUB30_B1");
  let checkbox = document.getElementById("WorkAffeSew_PartofPlumCont_NA30");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function WorkAffeSew_PartofPlumCont_NA30_change(element) {
  let textboxes = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS30_B1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB30_B1")
  ];
  let checkboxes = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS30"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB30_A1")
  ];
  if (element.checked) {
    document.getElementById("A3plum1").innerHTML = "SPS Registered";
    document.getElementById("A3plum2").innerHTML = "PUB LP";
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}

function PartOfAppl_SubmType_RCTren10_change(element) {
  let textboxes_check = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS40_B1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB40_B1")
  ];
  let checkboxes = [
    document.getElementById("SectA4RCTren_DetaSewPlanTo10"),
    document.getElementById("SectA4RCTren_DesiCalcRCTren10"),
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS40"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB40_A1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_NA40")
  ];
  let textboxes = [
    document.getElementById("Member_Member_Name_QP80"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP80"),
    document.getElementById("Member_Tel_No_QP80"),
    document.getElementById("Member_Email_Address1_QP80"),
    document.getElementById("Member_Firm_Name_QP80"),
    document.getElementById("Member_Professional_No_QP80"),
    document.getElementById("Member_Member_Name_LPLUMBCONT40"),
    document.getElementById("Member_Firm_Name_LPLUMBCONT40"),
    document.getElementById("Member_Tel_No_LPLUMBCONT40"),
    document.getElementById("Member_Email_Address1_LPLUMBCONT40")
  ];
  if (element.checked) {
    document
      .getElementById("SectA4RCTren_DetaSewPlanTo10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SectA4RCTren_DesiCalcRCTren10")
      .setAttribute("mandatory", "");
    document
      .getElementById("SectA4RCTren_DetaSewPlanTo10")
      .setAttribute("checked", "");
    document
      .getElementById("SectA4RCTren_DesiCalcRCTren10")
      .setAttribute("checked", "");
    document
      .getElementById("Member_Member_Name_QP80")
      .setAttribute("mandatory", "");
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    document.getElementById("A4plum1").innerHTML = "SPS Registered";
    document.getElementById("A4plum2").innerHTML = "PUB LP";
    document
      .getElementById("SectA4RCTren_DetaSewPlanTo10")
      .removeAttribute("mandatory");
    document
      .getElementById("SectA4RCTren_DesiCalcRCTren10")
      .removeAttribute("mandatory");
    document
      .getElementById("SectA4RCTren_DetaSewPlanTo10")
      .removeAttribute("checked");
    document
      .getElementById("SectA4RCTren_DesiCalcRCTren10")
      .removeAttribute("checked");
    document
      .getElementById("Member_Member_Name_QP80")
      .removeAttribute("mandatory");
    for (let textbox of textboxes_check) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
      textbox.removeAttribute("mandatory");
    }
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
  }
}

function WorkAffeSew_PartofPlumCont_SPS40_change(element) {
  let textbox = document.getElementById("WorkAffeSew_PartofPlumCont_SPS40_B1");
  let checkbox = document.getElementById("WorkAffeSew_PartofPlumCont_NA40");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function WorkAffeSew_PartofPlumCont_PUB40_A1_change(element) {
  let textbox = document.getElementById("WorkAffeSew_PartofPlumCont_PUB40_B1");
  let checkbox = document.getElementById("WorkAffeSew_PartofPlumCont_NA40");
  if (element.checked) {
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    checkbox.checked = false;
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function WorkAffeSew_PartofPlumCont_NA40_change(element) {
  let textboxes = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS40_B1"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB40_B1")
  ];
  let checkboxes = [
    document.getElementById("WorkAffeSew_PartofPlumCont_SPS40"),
    document.getElementById("WorkAffeSew_PartofPlumCont_PUB40_A1")
  ];
  if (element.checked) {
    document.getElementById("A4plum1").innerHTML = "SPS Registered";
    document.getElementById("A4plum2").innerHTML = "PUB LP";
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}

function PartOfAppl_SubmType_WorkAffeMinoDrai10_change(element) {
  let checkbox = document.getElementById("DrainWrk_WorkAffeMinoDrai10");
  let checkbox1 = document.getElementById("DrainWrk_InteSurfWateDrain10");
  let pass = document.getElementById("PartOfAppl_SubmType_WorkAffeOtheDrai10")
    .checked;
  if (!pass) {
    enable_PartOfAppl_SubmType_WorkAffe(element.checked);
  }
  if (element.checked) {
    checkbox.checked = true;
    // checkbox1.removeAttribute("disabled");
  } else {
    checkbox.checked = false;
    // checkbox1.setAttribute("disabled", "");
    // checkbox1.checked = false;
  }
}

function PartOfAppl_SubmType_WorkAffeOtheDrai10_change(element) {
  let checkboxes = [
    document.getElementById("DeteTank10"),
    document.getElementById("DeteTank_GravDisc10"),
    document.getElementById("DeteTank_PumpDisc10"),
    document.getElementById("ABCWateDesiFeatk10"),
    document.getElementById("FlooProtMeas10"),
    document.getElementById("PumpDrainSystWith10"),
    document.getElementById("PumpDraiSystWith10"),
    document.getElementById("DrainWrk_PumpDraiSystWith10"),
    document.getElementById("DrainReceRuno10"),
    document.getElementById("RoadDrain10"),
    document.getElementById("EntrCulv10"),
    document.getElementById("DraiRese10")
  ];
  let checkbox = document.getElementById("DrainWrk_WorkAffeOtheDrai10");
  let pass = document.getElementById("PartOfAppl_SubmType_WorkAffeMinoDrai10")
    .checked;
  if (!pass) {
    enable_PartOfAppl_SubmType_WorkAffe(element.checked);
  }

  if (element.checked) {
    checkbox.checked = true;
    for (let cbox of checkboxes) {
      cbox.removeAttribute("disabled");
    }
  } else {
    checkbox.checked = false;
    for (let cbox of checkboxes) {
      cbox.setAttribute("disabled", "");
      cbox.checked = false;
    }
  }
}

function enable_PartOfAppl_SubmType_WorkAffe(checked) {
  let textboxes = [
    document.getElementById("Member_Member_Name_QP50"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP50"),
    document.getElementById("Member_Tel_No_QP50"),
    document.getElementById("Member_Email_Address1_QP50"),
    document.getElementById("Member_Firm_Name_QP50"),
    document.getElementById("Member_Professional_No_QP50"),
    document.getElementById("DrainWrk_PUB10")
  ];
  let checkbox = document.getElementById("DrainWrk_DetailPlanChk10");
  if (checked) {
    checkbox.removeAttribute("disabled");
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    checkbox.setAttribute("disabled", "");
    checkbox.checked = false;
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function PartOfAppl_SubmType_WorkAffeDrai10_change(element) {
  let mainCheck = document.getElementById(element.id);
  let checkboxes = [
    document.getElementById("DeteTank_GravDisc10"),
    document.getElementById("DeteTank_PumpDisc10"),
    document.getElementById("FlooProtMeas10"),
    document.getElementById("PumpDraiSystWith10"),
    document.getElementById("DrainWrk_PumpDraiSystWith10"),
    document.getElementById("DrainReceRuno10"),
    document.getElementById("RoadDrain10"),
    document.getElementById("EntrCulv10"),
    document.getElementById("DraiRese10"),
    document.getElementById("DrainWrk_DetailPlanChk10")
  ];
  let textboxes = [
    document.getElementById("Member_Member_Name_QP50"),
    document.getElementById("MemberRole_Member_Role_Code_Desc_QP50"),
    document.getElementById("Member_Tel_No_QP50"),
    document.getElementById("Member_Email_Address1_QP50"),
    document.getElementById("Member_Firm_Name_QP50"),
    document.getElementById("Member_Professional_No_QP50"),
    document.getElementById("DrainWrk_PUB10")
  ];

  if (mainCheck.checked) {
    document
      .getElementById("Member_Member_Name_QP50")
      .setAttribute("mandatory", "");
    document
      .getElementById("DrainWrk_DetailPlanChk10")
      .setAttribute("mandatory", "");
    document
      .getElementById("DrainWrk_DetailPlanChk10")
      .setAttribute("checked", "");
    document.getElementById("DrainWrk_WorkAffeMinoDrai10").checked = true;

    for (checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
    for (textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    document
      .getElementById("Member_Member_Name_QP50")
      .removeAttribute("mandatory");
    document
      .getElementById("DrainWrk_DetailPlanChk10")
      .removeAttribute("mandatory");
    document
      .getElementById("DrainWrk_DetailPlanChk10")
      .removeAttribute("checked");
    document.getElementById("DrainWrk_WorkAffeMinoDrai10").checked = false;
    for (checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function mustChecked(element) {
  let checkboxes = [
    document.getElementById("PartOfAppl_SubmType_SaniWork10"),
    document.getElementById("PartOfAppl_SubmType_UsedWatePumpSyst10"),
    document.getElementById("PartOfAppl_SubmType_WorkAffeSewe10"),
    document.getElementById("PartOfAppl_SubmType_RCTren10"),
    document.getElementById("PartOfAppl_SubmType_WorkAffeDrai10")
  ];

  if (document.getElementById("PartOfAppl_SubmType_SaniWork10").checked) {
    for (checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (
    document.getElementById("PartOfAppl_SubmType_UsedWatePumpSyst10").checked
  ) {
    for (checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (
    document.getElementById("PartOfAppl_SubmType_WorkAffeSewe10").checked
  ) {
    for (checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (document.getElementById("PartOfAppl_SubmType_RCTren10").checked) {
    for (checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else if (
    document.getElementById("PartOfAppl_SubmType_WorkAffeDrai10").checked
  ) {
    for (checkbox of checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
    }
  } else {
    for (checkbox of checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
  }
}

function checkboxChecked(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function setTextManda(element) {
  let a1name = document.getElementById("A1name");
  let a1plum1 = document.getElementById("A1plum1");
  let a1plum2 = document.getElementById("A1plum2");
  let a2name = document.getElementById("A2name");
  let a2plum1 = document.getElementById("A2plum1");
  let a2plum2 = document.getElementById("A2plum2");
  let a3name = document.getElementById("A3name");
  let a3plum1 = document.getElementById("A3plum1");
  let a3plum2 = document.getElementById("A3plum2");
  let a3intro = document.getElementById("A3intro");
  let a4name = document.getElementById("A4name");
  let a4plum1 = document.getElementById("A4plum1");
  let a4plum2 = document.getElementById("A4plum2");
  let a4intro1 = document.getElementById("A4intro1");
  let a4intro2 = document.getElementById("A4intro2");
  let bname = document.getElementById("Bname");
  let battach = document.getElementById("Battach");

  // sect A1
  if (element.id === "PartOfAppl_SubmType_SaniWork10") {
    if (element.checked) {
      a1name.innerHTML = "Name*";
    } else {
      a1name.innerHTML = "Name";
    }
  }
  if (element.id === "PartofPlumber_Reg_SPS10_A1") {
    if (element.checked) {
      a1plum1.innerHTML = "SPS Registered*";
    } else {
      a1plum1.innerHTML = "SPS Registered";
    }
  }
  if (element.id === "PartofPlumber_Reg_PUB10_A1") {
    if (element.checked) {
      a1plum2.innerHTML = "PUB LP*";
    } else {
      a1plum2.innerHTML = "PUB LP";
    }
  }
  // sect A2
  if (element.id === "PartOfAppl_SubmType_UsedWatePumpSyst10") {
    element.checked ?
      (a2name.innerHTML = "Name*") :
      (a2name.innerHTML = "Name");
  }
  if (element.id === "PartofPlumber_Regno_SPS20_A1") {
    if (element.checked) {
      a2plum1.innerHTML = "SPS Registered*";
    } else {
      a2plum1.innerHTML = "SPS Registered";
    }
  }
  if (element.id === "PartofPlumber_Regno_PUB20_A1") {
    if (element.checked) {
      a2plum2.innerHTML = "PUB LP*";
    } else {
      a2plum2.innerHTML = "PUB LP";
    }
  }
  // sect A3
  if (element.id === "PartOfAppl_SubmType_WorkAffeSewe10") {
    if (element.checked) {
      a3intro.innerHTML =
        "1.  Detailed Sewerage Plan  (to indicate: diameter, pipe material, gradient, manhole detail, and longitudal section)*";
      a3name.innerHTML = "Name*";
    } else {
      a3intro.innerHTML =
        "1.  Detailed Sewerage Plan  (to indicate: diameter, pipe material, gradient, manhole detail, and longitudal section)";
      a3name.innerHTML = "Name";
    }
  }
  if (element.id === "WorkAffeSew_PartofPlumCont_SPS30") {
    if (element.checked) {
      a3plum1.innerHTML = "SPS Registered*";
    } else {
      a3plum1.innerHTML = "SPS Registered";
    }
  }
  if (element.id === "WorkAffeSew_PartofPlumCont_PUB30_A1") {
    if (element.checked) {
      a3plum2.innerHTML = "PUB LP*";
    } else {
      a3plum2.innerHTML = "PUB LP";
    }
  }
  // sect A4
  if (element.id === "PartOfAppl_SubmType_RCTren10") {
    if (element.checked) {
      a4intro1.innerHTML =
        "1. Detailed Sewerage Plan (to indicate layout and dimensions of RC Trench and position of existing sewer)*";
      a4intro2.innerHTML =
        "2. Design & Calculation of RC Trench. PE to endorse drawing*";
      a4name.innerHTML = "Name*";
    } else {
      a4intro1.innerHTML =
        "1. Detailed Sewerage Plan (to indicate layout and dimensions of RC Trench and position of existing sewer)";
      a4intro2.innerHTML =
        "2. Design & Calculation of RC Trench. PE to endorse drawing";
      a4name.innerHTML = "Name";
    }
  }
  if (element.id === "WorkAffeSew_PartofPlumCont_SPS40") {
    if (element.checked) {
      a4plum1.innerHTML = "SPS Registered*";
    } else {
      a4plum1.innerHTML = "SPS Registered";
    }
  }
  if (element.id === "WorkAffeSew_PartofPlumCont_PUB40_A1") {
    if (element.checked) {
      a4plum2.innerHTML = "PUB LP*";
    } else {
      a4plum2.innerHTML = "PUB LP";
    }
  }
  // sect B
  if (element.id === "PartOfAppl_SubmType_WorkAffeDrai10") {
    if (element.checked) {
      bname.innerHTML = "Name*";
      battach.innerHTML =
        "1. Details Plan on Drainage Works as required under Section 33(3) and 33(4) of the SDA, Chapter 294.*";
    } else {
      bname.innerHTML = "Name";
      battach.innerHTML =
        "1. Details Plan on Drainage Works as required under Section 33(3) and 33(4) of the SDA, Chapter 294.";
    }
  }
}

function disableDelete(containerName, deleteid) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteid).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(deleteid);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function getDetails() {
  let data = [{
    "PUB (Drainage)": [{
      Email: "pub_bpu@pub.gov.sg",
      TelNo: "67313512",
      AreaOfSupp: "General Enquiry, Policies, Submissions"
    }],
    "PUB (Sewerage)": [{
        Email: "pub_bpu@pub.gov.sg",
        TelNo: "67313512",
        AreaOfSupp: "General Enquiry"
      },
      {
        Email: "sophian_ismail@pub.gov.sg",
        TelNo: "67313656",
        AreaOfSupp: "Approval for works affecting public sewer/Pre & Post Construction CCTV submissions"
      },
      {
        Email: "LER_Seng_Chye@pub.gov.sg",
        TelNo: "67313264",
        AreaOfSupp: "Sewerage pre-consultation/ DC Plan Submissions"
      },
      {
        Email: "teo_mok_tong@pub.gov.sg",
        TelNo: "67313256",
        AreaOfSupp: "Sewerage Clearance Submissionss"
      },
      {
        Email: "steven_cheong@pub.gov.sg",
        TelNo: "67313339",
        AreaOfSupp: "Code of Practice and Regulations"
      }
    ],
    "PUB (Sewerage)": [{
        Email: "pub_bpu@pub.gov.sg",
        TelNo: "67313512",
        AreaOfSupp: "General Enquiry"
      },
      {
        Email: "sophian_ismail@pub.gov.sg",
        TelNo: "67313656",
        AreaOfSupp: "Approval for works affecting public sewer/Pre & Post Construction CCTV submissions"
      }
    ],
    "PUB (Water)": [{
        Email: "pub_bpu@pub.gov.sg",
        TelNo: "67313512",
        AreaOfSupp: "General Enquiry"
      },
      {
        Email: "KUANG_kim_yaw@pub.gov.sg",
        TelNo: "67313515",
        AreaOfSupp: "Policies"
      },
      {
        Email: "olivia_TEO@pub.gov.sg",
        TelNo: "67313967",
        AreaOfSupp: "PE Submissions"
      },
      {
        Email: "Marwin_SUHAIMI@pub.gov.sg",
        TelNo: "67313893",
        AreaOfSupp: "PE Submissions"
      },
      {
        Email: "THAM_tuck_kuan@pub.gov.sg",
        TelNo: "67313665",
        AreaOfSupp: "License Plumber Submissions"
      },
      {
        Email: "LEE_Cai_Jie@pub.gov.sg",
        TelNo: "67313250",
        AreaOfSupp: "License Plumber Submissionsolicies"
      }
    ]
  }];
  return data;
}

function validEmail(element) {
  let textbox = document.getElementById(element.id);

  if (textbox.value.length !== 0) {
    if (validateEmail(textbox.value)) {
      textbox.removeAttribute("data-invalid");
    } else {
      textbox.setAttribute("data-invalid", "");
      textbox.setAttribute("data-invalid-message", "Invalid Format");
    }
  } else {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-valid");
  }
}

//

document.addEventListener('DOMContentLoaded', function (event) {
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
  if ((d.getFullYear() != year && d.getMonth() != (month - 1) && d.getDate() != day) || (d.getFullYear() > 9999)) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute('maxlength');
  let uenField = document.getElementById(el.id);
  if (el.value.trim().length !== maxlength && el.value.trim() !== '') {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute('data-invalid', '');
      document
        .getElementById(el.id)
        .setAttribute(
          'data-invalid-message',
          'This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character'
        );
    } else {
      uenField.removeAttribute('data-invalid');
      uenField.removeAttribute('data-invalid-message');
    }
  } else if (el.value.trim() === '') {
    if (uenField.hasAttribute("mandatory")) {
      uenField.removeAttribute("mandatory");
      uenField.setAttribute("mandatory", "");
    }
    uenField.value = '';
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
  } else {
    uenField.removeAttribute('data-invalid');
    uenField.removeAttribute('data-invalid-message');
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