function PartOfAppl_SIPDIPFromCBPU_Date10_change(element) {
  document.getElementById("DIPDate").value = element.value;
}

function DeveDeta_PropMinPlatLeve10_change(element) {
  document.getElementById("PropMPLOfDeve10").value = element.value;
}

function DeveDeta_WorkAffeOtheDrai_ABCWateDesiFeat10_change(element) {
  let chkBox = document.getElementById(element.id);
  let checkboxes = [
    document.querySelector("[switch-id='ConsWetLand10']"),
    document.querySelector("[switch-id='BioReteSwalBasi10']"),
    document.querySelector("[switch-id='RainGard10']"),
    document.querySelector("[switch-id='ReteSediPond10']"),
    document.querySelector("[switch-id='GreenRoof10']"),
    document.querySelector("[switch-id='PlantBoxe10']"),
    document.querySelector("[switch-id='PoroPave10']"),
  ];
  let texboxes = [
    document.getElementById("Others10"),
    document.getElementById("NameRegiNoABC10"),
    document.getElementById("ConcDesiAndDesi10"),
    document.getElementById("HydrCalcForThe10"),
  ];
  let mandasign = document.querySelectorAll("#ABCmandatory");
  if (chkBox.checked) {
    document
      .querySelector("[switch-id='ABCWateDesiFeat10']")
      .removeAttribute("disabled");
    for (let i = 0; i < mandasign.length; i++) {
      mandasign[i].textContent = "";
    }
  } else {
    document
      .querySelector("[switch-id='ABCWateDesiFeat10']")
      .setAttribute("disabled", "");
    document.querySelector("[switch-id='ABCWateDesiFeat10']").checked = false;
    for (let ctr in checkboxes) {
      checkboxes[ctr].setAttribute("disabled", "");
      checkboxes[ctr].checked = false;
    }
    for (let ctr in texboxes) {
      texboxes[ctr].removeAttribute("mandatory");
      texboxes[ctr].setAttribute("disabled", "");
      texboxes[ctr].value = "";
    }
  }
}

function DeteTank10_change(checkbox) {
  if (document.getElementById(checkbox).checked) {
    document.getElementById("DeteTankVol").removeAttribute("disabled");
    document.getElementById("DeteTankVol").setAttribute("mandatory", "");
  } else {
    document.getElementById("DeteTankVol").removeAttribute("mandatory");
    document.getElementById("DeteTankVol").setAttribute("disabled", "");
    document.getElementById("DeteTankVol").value = "";
  }
}

function ABCWateDesiFeat_change(checkbox) {
  element = document.getElementById(checkbox);
  let checkboxes = [
    document.getElementById("ConsWetLand10"),
    document.getElementById("BioReteSwalBasi10"),
    document.getElementById("RainGard10"),
    document.getElementById("ReteSediPond10"),
    document.getElementById("GreenRoof10"),
    document.getElementById("PlantBoxe10"),
    document.getElementById("PoroPave10"),
    // document.querySelector("[switch-id='ConsWetLand10']"),
    // document.querySelector("[switch-id='BioReteSwalBasi10']"),
    // document.querySelector("[switch-id='RainGard10']"),
    // document.querySelector("[switch-id='ReteSediPond10']"),
    // document.querySelector("[switch-id='GreenRoof10']"),
    // document.querySelector("[switch-id='PlantBoxe10']"),
    // document.querySelector("[switch-id='PoroPave10']")
  ];
  let mandasign = document.querySelectorAll("#ABCmandatory");
  let texboxes = [
    document.getElementById("Others10"),
    document.getElementById("NameRegiNoABC10"),
    document.getElementById("ConcDesiAndDesi10"),
    document.getElementById("HydrCalcForThe10"),
  ];
  if (element.checked) {
    for (check of checkboxes) {
      check.removeAttribute("disabled");
      check.setAttribute("mandatory", "");
    }
    for (let i = 0; i < mandasign.length; i++) {
      mandasign[i].textContent = "*";
    }
    for (let ctr in texboxes) {
      texboxes[ctr].removeAttribute("disabled");
      texboxes[ctr].setAttribute("mandatory", "");
    }
  } else {
    for (let i = 0; i < mandasign.length; i++) {
      mandasign[i].textContent = "";
    }
    for (check of checkboxes) {
      check.setAttribute("disabled", "");
      check.removeAttribute("mandatory");
      check.value = "";
    }
    for (let ctr in texboxes) {
      texboxes[ctr].removeAttribute("mandatory");
      texboxes[ctr].setAttribute("disabled", "");
      texboxes[ctr].value = "";
    }
  }
}

function PostDeveRunOff10_change(element) {
  let val = element.value === "" ? 0 : parseFloat(element.value);
  if (val >= 0 && val <= 1) {
    document.getElementById(element.id).removeAttribute("data-invalid");
  } else {
    document.getElementById(element.id).setAttribute("data-invalid", "");
  }
}

function DeveDeta_AreaOfDeve10_change(element) {
  document.getElementById("AreaOfDeve10").value = element.value;
}

function Works_Aff_San_Sew(element) {
  switch (element.id) {
    case "DeveDeta_WorkAffeSaniSewe_Sani10":
      if (element.checked) {
        document.getElementById("SecA1_SANMEWORK_Sani10").checked = true;
      } else {
        document.getElementById("SecA1_SANMEWORK_Sani10").checked = false;
      }

      break;
    case "DeveDeta_WorkAffeSaniSewe_Sewe10":
      if (element.checked) {
        document.getElementById("SecA1_SANMEWORK_Sewe10").checked = true;
      } else {
        document.getElementById("SecA1_SANMEWORK_Sewe10").checked = false;
      }
      break;
    case "DeveDeta_WorkAffeSaniSewe_RCTren10":
      if (element.checked) {
        document.getElementById("SecA1_SANMEWORK_RCTren10").checked = true;
      } else {
        document.getElementById("SecA1_SANMEWORK_RCTren10").checked = false;
      }
      break;
    case "DeveDeta_WorkAffeSaniSewe_SewPumpSystn10":
      if (element.checked) {
        document.getElementById("SecA1_SANMEWORK_SewPumpSyst10").checked = true;
      } else {
        document.getElementById(
          "SecA1_SANMEWORK_SewPumpSyst10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeSaniSewe_WorkAffePublSew10":
      if (element.checked) {
        document.getElementById(
          "SecA1_SANMEWORK_WorkAffePublSewe10"
        ).checked = true;
      } else {
        document.getElementById(
          "SecA1_SANMEWORK_WorkAffePublSewe10"
        ).checked = false;
      }
      break;
    case "DeveDeta_InteSurfWateDrai10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_InteSurfWateDrai10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_InteSurfWateDrai10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_DeteTank_GravDisc10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_DeteTank_GravDisc10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_DeteTank_GravDisc10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_DeteTank_PumpDisc10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_DeteTank_PumpDisc10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_DeteTank_PumpDisc10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_ABCWateDesiFeat10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_ABCWateDesiFeat10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_ABCWateDesiFeat10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_FlooProtMeas10":
      if (element.checked) {
        document.getElementById("WorkAffeDrai_FlooProtMeas10").checked = true;
      } else {
        document.getElementById("WorkAffeDrai_FlooProtMeas10").checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_PumpDraiSystWithLink10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_PumpDraiSystWithLink20"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_PumpDraiSystWithLink20"
        ).checked = false;
      }
      break;
    case "DeveDeta_PumpDraiSystWithNo10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_PumpDraiSystWithNo10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_PumpDraiSystWithNo10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_DraiReceRunoFrom10":
      if (element.checked) {
        document.getElementById(
          "WorkAffeDrai_DraiReceRunoFrom10"
        ).checked = true;
      } else {
        document.getElementById(
          "WorkAffeDrai_DraiReceRunoFrom10"
        ).checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_RoadDrai10":
      if (element.checked) {
        document.getElementById("WorkAffeDrai_RoadDrai10").checked = true;
      } else {
        document.getElementById("WorkAffeDrai_RoadDrai10").checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_EntrCulv10":
      if (element.checked) {
        document.getElementById("WorkAffeDrai_EntrCulv10").checked = true;
      } else {
        document.getElementById("WorkAffeDrai_EntrCulv10").checked = false;
      }
      break;
    case "DeveDeta_WorkAffeOtheDrai_DraiRese10":
      if (element.checked) {
        document.getElementById("WorkAffeDrai_DraiRese10").checked = true;
      } else {
        document.getElementById("WorkAffeDrai_DraiRese10").checked = false;
      }
      break;
  }
}

function Member_Member_Name_QP10_change() {
  document
    .getElementById("Member_Member_Name_QP10")
    .removeAttribute("mandatory");
  document
    .getElementById("MemberRole_Member_Role_Code_Desc_QP10")
    .removeAttribute("mandatory");
  document
    .getElementById("MemberRole_Professional_No_QP10")
    .removeAttribute("mandatory");
  document.getElementById("Member_Firm_Name_QP10").removeAttribute("mandatory");
  document.getElementById("Member_Address_QP10").removeAttribute("mandatory");
  document.getElementById("Member_Tel_No_QP10").removeAttribute("mandatory");
  document
    .getElementById("Member_Email_Address1_QP10")
    .removeAttribute("mandatory");
}

function typeOfSubmission_checkbox(element) {
  // Works Affecting Sewerage
  //checkbox
  let components1 = [
    document.getElementById("DeveDeta_WorkAffeSaniSewe_Sani10"),
    document.getElementById("DeveDeta_WorkAffeSaniSewe_Sewe10"),
    document.getElementById("DeveDeta_WorkAffeSaniSewe_RCTren10"),
    document.getElementById("DeveDeta_WorkAffeSaniSewe_SewPumpSystn10"),
    document.getElementById("DeveDeta_WorkAffeSaniSewe_WorkAffePublSew10"),
    document.getElementById("SecA1_SANMEWORK_SitePlan10"),
    document.getElementById("Decl_IHereCertThat10"),
    document.getElementById("Decl_IHaveCarrOut10"),
  ];
  let components4 = [
    document.getElementById("SecA1_SANMEWORK_Sani10"),
    document.getElementById("SecA1_SANMEWORK_Sewe10"),
    document.getElementById("SecA1_SANMEWORK_RCTren10"),
    document.getElementById("SecA1_SANMEWORK_SewPumpSyst10"),
    document.getElementById("SecA1_SANMEWORK_WorkAffePublSewe10"),
  ];
  //texboxes
  let components2 = [
    document.getElementById("NumberStoreys"),
    document.getElementById("Member_WtrDischarge"),
    document.getElementById("Member_WaterCatchment_QP10"),
  ];
  //switchbuttons
  let components3 = [
    document.querySelector("[switch-id='Member_SewerCon_Yes_QP10']"),
    document.querySelector("[switch-id='Member_PublicSewer_Yes_QP10']"),
  ];
  let components6 = [document.querySelector("[switch-id='ABCWateDesiFeat10']")];
  //checkboxes - not mandatory
  let components5 = [document.getElementById("Decl_PleaStatIfAny10")];

  if (element.checked) {
    for (let ctr in components1) {
      components1[ctr].removeAttribute("disabled");
    }
    for (let ctr in components2) {
      components2[ctr].removeAttribute("disabled");
      components2[ctr].setAttribute("mandatory", "");
    }
    for (let ctr in components3) {
      components3[ctr].removeAttribute("disabled");
    }
    for (let ctr in components5) {
      components5[ctr].removeAttribute("disabled");
    }
  } else {
    for (let ctr in components1) {
      components1[ctr].setAttribute("disabled", "");
      components1[ctr].checked = false;
    }
    for (let ctr in components5) {
      components5[ctr].setAttribute("disabled", "");
      components5[ctr].value = "";
    }
    for (let ctr in components4) {
      components4[ctr].checked = false;
    }
    for (let ctr in components2) {
      components2[ctr].removeAttribute("mandatory");
      components2[ctr].setAttribute("disabled", "");
      components2[ctr].value = "";
    }
    for (let ctr in components3) {
      components3[ctr].setAttribute("disabled", "");
      components3[ctr].checked = false;
    }
    for (let ctr in components6) {
      components6[ctr].setAttribute("disabled", "");
      components6[ctr].checked = false;
    }
  }
}

function typeOfSubmission_components2(element) {
  let checkboxes = [
    document.getElementById("DeveDeta_InteSurfWateDrai10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DeteTank_GravDisc10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DeteTank_PumpDisc10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_ABCWateDesiFeat10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_FlooProtMeas10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_PumpDraiSystWithLink10"),
    document.getElementById("DeveDeta_PumpDraiSystWithNo10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DraiReceRunoFrom10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_RoadDrai10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_EntrCulv10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DraiRese10"),
    document.getElementById("WorkAffeDrai_AttaOfSitePlan10"),
    document.getElementById("WorkAffeDrai_AttaOfBasePlan10"),
    document.getElementById("WorkAffeDrai_PropPlanShowCres10"),
    document.getElementById("WorkAffeDrai_AttaOfDCChec10"),
    document.getElementById("WorkAffeDrai_Decl_ICertThatThe10"),
  ];
  let checkboxes2 = [
    document.getElementById("WorkAffeDrai_InteSurfWateDrai10"),
    document.getElementById("WorkAffeDrai_DeteTank_GravDisc10"),
    document.getElementById("WorkAffeDrai_DeteTank_PumpDisc10"),
    document.getElementById("WorkAffeDrai_ABCWateDesiFeat10"),
    document.getElementById("WorkAffeDrai_FlooProtMeas10"),
    document.getElementById("WorkAffeDrai_PumpDraiSystWithLink20"),
    document.getElementById("WorkAffeDrai_PumpDraiSystWithNo10"),
    document.getElementById("WorkAffeDrai_DraiReceRunoFrom10"),
    document.getElementById("WorkAffeDrai_RoadDrai10"),
    document.getElementById("WorkAffeDrai_EntrCulv10"),
    document.getElementById("WorkAffeDrai_DraiRese10"),
  ];

  let radiobuttons = [
    document.querySelector("[switch-id='DeveDeta_IsTherBase_Yes10']"),
    document.querySelector("[switch-id='DeveDeta_DRInTheDeve_Yes10']"),
    document.querySelector("[switch-id='DeveDeta_AnyLinkToMRT_Yes10']"),
  ];

  let components = [
    document.getElementById("DeveDeta_AreaOfDeve10"),
    document.getElementById("DeveDeta_PropMinPlatLeve10"),
    document.getElementById("DeveDeta_MaxAdjaRoad10"),
    document.getElementById("DeveDeta_DraiCatc10"),
    document.getElementById("DeveDeta_PropCresLeve10"),
  ];
  let components2 = [
    document.getElementById("WorkAffeDrai_Decl_PleaStatIfAny10"),
  ];
  let components3 = [document.getElementById("PostDeveRunOff10")];
  let components4 = [
    document.getElementById("DeteTankVol"),
    document.getElementById("AreaOfDeve10"),
    document.getElementById("Others10"),
    document.getElementById("NameRegiNoABC10"),
    document.getElementById("ConcDesiAndDesi10"),
    document.getElementById("HydrCalcForThe10"),
    document.getElementById("PropMPLOfDeve10"),
  ];
  if (element.checked) {
    for (let ctr in checkboxes) {
      checkboxes[ctr].removeAttribute("disabled");
    }

    for (let ctr in radiobuttons) {
      radiobuttons[ctr].removeAttribute("disabled");
    }
    for (let ctr in components) {
      components[ctr].removeAttribute("disabled");
      components[ctr].setAttribute("mandatory", "");
    }
    for (let ctr in components2) {
      components2[ctr].removeAttribute("disabled");
    }
    for (let ctr in components3) {
      components3[ctr].removeAttribute("disabled");
    }
  } else {
    for (let ctr in checkboxes) {
      checkboxes[ctr].setAttribute("disabled", "");
      checkboxes[ctr].checked = false;
    }
    for (let ctr in radiobuttons) {
      radiobuttons[ctr].setAttribute("disabled", "");
      radiobuttons[ctr].checked = false;
    }
    for (let ctr in checkboxes2) {
      checkboxes2[ctr].checked = false;
    }
    for (let ctr in components) {
      components[ctr].setAttribute("disabled", "");
      components[ctr].removeAttribute("mandatory");
      components[ctr].value = "";
    }
    for (let ctr in components2) {
      components2[ctr].setAttribute("disabled", "");
      components2[ctr].value = "";
    }
    for (let ctr in components4) {
      components4[ctr].setAttribute("disabled", "");
      components4[ctr].removeAttribute("mandatory");
      components4[ctr].value = "";
    }
    for (let ctr in components3) {
      components3[ctr].value = "";
    }
  }
}

function typeOfSubmission_simplified(element) {
  let radiobuttons = [
    document.getElementById("Decl_SimpSubmForWork_AThePropInvo10"),
    document.getElementById("Decl_SimpSubmForWork_ThePropInvoExt10"),
    document.getElementById("Decl_SimpSubmForWork_NewErecOrReco10"),
  ];
  if (element.checked) {
    for (let ctr in radiobuttons) {
      radiobuttons[ctr].removeAttribute("disabled");
    }
  } else {
    for (let ctr in radiobuttons) {
      radiobuttons[ctr].setAttribute("disabled", "");
      radiobuttons[ctr].checked = false;
    }
  }
}

function typeOfSubmission_simplified2(element) {
  let checkboxes = [
    document.getElementById("SimpSubmForWork_IHereDeclThat10"),
    document.getElementById("SimpSubmForWork_IHereDeclThat20"),
  ];
  if (element.checked) {
    for (let ctr in checkboxes) {
      checkboxes[ctr].removeAttribute("disabled");
    }
  } else {
    for (let ctr in checkboxes) {
      checkboxes[ctr].setAttribute("disabled", "");
      checkboxes[ctr].checked = false;
    }
  }
}

function typeOfSubmission(element) {
  let refId = element.id;

  let newSubDevSew = document.getElementById("DeveDeta_DeveCont_SEW_NewSubm10");
  let newSubDevDra = document.getElementById("DeveDeta_DeveCont_DRA_NewSubm10");
  let newSubSimSew = document.getElementById("DeveDeta_SimpSubm_SEW_NewSubm10");
  let newSubSimDra = document.getElementById("DeveDeta_SimpSubm_DRA_NewSubm10");

  let reSubDevSew = document.getElementById("DeveDeta_DeveCont_SEW_Resu10");
  let reSubDevDra = document.getElementById("DeveDeta_DeveCont_DRA_Resu10");

  let amendDevSew = document.getElementById("DeveDeta_DeveCont_SEW_Amen10");
  let amendDevDra = document.getElementById("DeveDeta_DeveCont_DRA_Amen10");
  let draMandaSigns = document.querySelectorAll("#draMandasign");
  let sewMandaSigns = document.querySelectorAll("#sewManda");
  if (newSubDevSew.checked || amendDevSew.checked || reSubDevSew.checked) {
    for (let i = 0; i < sewMandaSigns.length; i++) {
      sewMandaSigns[i].textContent = "*";
    }
  } else {
    for (let i = 0; i < sewMandaSigns.length; i++) {
      sewMandaSigns[i].textContent = "";
    }
  }

  if (newSubDevDra.checked || amendDevDra.checked || reSubDevDra.checked) {
    for (let i = 0; i < draMandaSigns.length; i++) {
      draMandaSigns[i].textContent = "*";
    }
  } else {
    for (let i = 0; i < draMandaSigns.length; i++) {
      draMandaSigns[i].textContent = "";
    }
  }
  switch (refId) {
    case "DeveDeta_DeveCont_SEW_NewSubm10":
      typeOfSubmission_checkbox(newSubDevSew);
      if (newSubDevSew.checked) {
        reSubDevSew.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
        newSubSimSew.setAttribute("disabled", "");
      } else {
        if (newSubDevDra.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubSimDra.setAttribute("disabled", "");
          newSubSimSew.removeAttribute("disabled");
        } else if (newSubSimDra.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubDevDra.setAttribute("disabled", "");
          newSubSimSew.removeAttribute("disabled");
        } else {
          reSubDevSew.removeAttribute("disabled");
          amendDevSew.removeAttribute("disabled");
          reSubDevDra.removeAttribute("disabled");
          amendDevDra.removeAttribute("disabled");
          newSubSimSew.removeAttribute("disabled");
        }
      }
      break;
    case "DeveDeta_DeveCont_DRA_NewSubm10":
      typeOfSubmission_components2(newSubDevDra);
      if (newSubDevDra.checked) {
        reSubDevSew.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
        newSubSimDra.setAttribute("disabled", "");
        document
          .querySelector('cn2-nav-button[target="page8"]')
          .removeAttribute("hidden");
      } else {
        if (newSubDevSew.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubSimDra.removeAttribute("disabled");
        } else if (newSubSimSew.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubSimDra.removeAttribute("disabled");
        } else {
          reSubDevSew.removeAttribute("disabled");
          amendDevSew.removeAttribute("disabled");
          reSubDevDra.removeAttribute("disabled");
          amendDevDra.removeAttribute("disabled");
          newSubSimDra.removeAttribute("disabled");
        }
        document
          .querySelector('cn2-nav-button[target="page8"]')
          .setAttribute("hidden", "");
      }
      break;
    case "DeveDeta_SimpSubm_SEW_NewSubm10":
      typeOfSubmission_simplified(newSubSimSew);
      if (newSubSimSew.checked) {
        reSubDevSew.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
        newSubDevSew.setAttribute("disabled", "");
      } else {
        if (newSubDevDra.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubSimDra.setAttribute("disabled", "");
          newSubDevSew.removeAttribute("disabled");
        } else if (newSubSimDra.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubDevDra.setAttribute("disabled", "");
          newSubDevSew.removeAttribute("disabled");
        } else {
          reSubDevSew.removeAttribute("disabled");
          amendDevSew.removeAttribute("disabled");
          reSubDevDra.removeAttribute("disabled");
          amendDevDra.removeAttribute("disabled");
          newSubDevSew.removeAttribute("disabled");
        }
      }
      break;
    case "DeveDeta_SimpSubm_DRA_NewSubm10":
      typeOfSubmission_simplified2(newSubSimDra);
      let simpMandaSigns = document.querySelectorAll("#simpMandaSigns");
      if (newSubSimDra.checked) {
        reSubDevSew.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
        newSubDevDra.setAttribute("disabled", "");
        for (let i = 0; i < simpMandaSigns.length; i++) {
          simpMandaSigns[i].textContent = "*";
        }
      } else {
        for (let i = 0; i < simpMandaSigns.length; i++) {
          simpMandaSigns[i].textContent = "";
        }
        if (newSubDevSew.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubDevDra.removeAttribute("disabled");
        } else if (newSubSimSew.checked) {
          reSubDevSew.setAttribute("disabled", "");
          amendDevSew.setAttribute("disabled", "");
          reSubDevDra.setAttribute("disabled", "");
          amendDevDra.setAttribute("disabled", "");
          newSubDevDra.removeAttribute("disabled");
        } else {
          reSubDevSew.removeAttribute("disabled");
          amendDevSew.removeAttribute("disabled");
          reSubDevDra.removeAttribute("disabled");
          amendDevDra.removeAttribute("disabled");
          newSubDevDra.removeAttribute("disabled");
        }
      }
      break;
    case "DeveDeta_DeveCont_SEW_Resu10":
      typeOfSubmission_checkbox(reSubDevSew);
      if (reSubDevSew.checked) {
        newSubDevSew.setAttribute("disabled", "");
        newSubDevDra.setAttribute("disabled", "");
        newSubSimSew.setAttribute("disabled", "");
        newSubSimDra.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
      } else if (!reSubDevDra.checked) {
        newSubDevSew.removeAttribute("disabled");
        newSubDevDra.removeAttribute("disabled");
        newSubSimSew.removeAttribute("disabled");
        newSubSimDra.removeAttribute("disabled");
        amendDevSew.removeAttribute("disabled");
        amendDevDra.removeAttribute("disabled");
      }
      break;
    case "DeveDeta_DeveCont_DRA_Resu10":
      typeOfSubmission_components2(reSubDevDra);
      if (reSubDevDra.checked) {
        newSubDevSew.setAttribute("disabled", "");
        newSubDevDra.setAttribute("disabled", "");
        newSubSimSew.setAttribute("disabled", "");
        newSubSimDra.setAttribute("disabled", "");
        amendDevSew.setAttribute("disabled", "");
        amendDevDra.setAttribute("disabled", "");
      } else if (!reSubDevSew.checked) {
        newSubDevSew.removeAttribute("disabled");
        newSubDevDra.removeAttribute("disabled");
        newSubSimSew.removeAttribute("disabled");
        newSubSimDra.removeAttribute("disabled");
        amendDevSew.removeAttribute("disabled");
        amendDevDra.removeAttribute("disabled");
      }
      break;
    case "DeveDeta_DeveCont_SEW_Amen10":
      typeOfSubmission_checkbox(amendDevSew);
      if (amendDevSew.checked) {
        newSubDevSew.setAttribute("disabled", "");
        newSubDevDra.setAttribute("disabled", "");
        newSubSimSew.setAttribute("disabled", "");
        newSubSimDra.setAttribute("disabled", "");
        reSubDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
      } else if (!amendDevDra.checked) {
        newSubDevSew.removeAttribute("disabled");
        newSubDevDra.removeAttribute("disabled");
        newSubSimSew.removeAttribute("disabled");
        newSubSimDra.removeAttribute("disabled");
        reSubDevSew.removeAttribute("disabled");
        reSubDevDra.removeAttribute("disabled");
      }
      break;
    case "DeveDeta_DeveCont_DRA_Amen10":
      typeOfSubmission_components2(amendDevDra);
      if (amendDevDra.checked) {
        newSubDevSew.setAttribute("disabled", "");
        newSubDevDra.setAttribute("disabled", "");
        newSubSimSew.setAttribute("disabled", "");
        newSubSimDra.setAttribute("disabled", "");
        reSubDevSew.setAttribute("disabled", "");
        reSubDevDra.setAttribute("disabled", "");
      } else if (!amendDevSew.checked) {
        newSubDevSew.removeAttribute("disabled");
        newSubDevDra.removeAttribute("disabled");
        newSubSimSew.removeAttribute("disabled");
        newSubSimDra.removeAttribute("disabled");
        reSubDevSew.removeAttribute("disabled");
        reSubDevDra.removeAttribute("disabled");
      }
      break;
  }
}

function openLink(url) {
  ipcRenderer.send("open-default-browser", url);
}

function typeOfSubmission_2(element) {
  let devNewSub = document.getElementById("DeveDeta_DeveCont_SEW_NewSubm10");
  let devNewDra = document.getElementById("DeveDeta_DeveCont_DRA_NewSubm10");

  switch (element.id) {
    case "DeveDeta_DeveCont_SEW_NewSubm10":
      if (document.getElementById(element.id).checked) {
        devNewSub.removeAttribute("mandatory");
        devNewSub.removeAttribute("checked");
      } else {
        devNewSub.setAttribute("mandatory", "");
        devNewSub.setAttribute("checked", "");
      }
      break;
    case "DeveDeta_SimpSubm_SEW_NewSubm10":
      if (document.getElementById(element.id).checked) {
        devNewSub.removeAttribute("mandatory");
        devNewSub.removeAttribute("checked");
      } else {
        devNewSub.setAttribute("mandatory", "");
        devNewSub.setAttribute("checked", "");
      }
      break;
    case "DeveDeta_DeveCont_DRA_NewSubm10":
      if (document.getElementById(element.id).checked) {
        devNewDra.removeAttribute("mandatory");
        devNewDra.removeAttribute("checked");
      } else {
        devNewDra.setAttribute("mandatory", "");
        devNewDra.setAttribute("checked", "");
      }
      break;
    case "DeveDeta_SimpSubm_DRA_NewSubm10":
      if (document.getElementById(element.id).checked) {
        devNewDra.removeAttribute("mandatory");
        devNewDra.removeAttribute("checked");
      } else {
        devNewDra.setAttribute("mandatory", "");
        devNewDra.setAttribute("checked", "");
      }
      break;
    default:
      break;
  }
}

function atleastOneCheck(element) {
  let checkboxes = document.querySelectorAll(`[name='${element.name}']`);
  let pass = false;
  for (let checkBox of checkboxes) {
    if (checkBox.checked) {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let checkBox of checkboxes) {
      checkBox.removeAttribute("checked");
      checkBox.removeAttribute("mandatory");
    }
  } else {
    for (let checkBox of checkboxes) {
      checkBox.setAttribute("checked", "");
      checkBox.setAttribute("mandatory", "");
    }
  }
  // if(checkbox.checked){
  //   for(check of checkboxes){
  //     check.removeAttribute("mandatory");
  //     check.removeAttribute("checked");
  //   }
  // }else{
  //   for(check of checkboxes){
  //     check.setAttribute("mandatory","");
  //     check.setAttribute("checked","");
  //   }
  // }
}

function makeCheckManda(element) {
  let checkBox = document.getElementById(element.id);
  let sewCheck = document.querySelectorAll(
    `[name="DeveDeta_WorkAffeSaniSewe"]`
  );
  let draCheck = document.querySelectorAll(
    `[name="DeveDeta_InteSurfWateDrai"]`
  );

  let sectionAcheck = [
    document.getElementById("SecA1_SANMEWORK_SitePlan10"),
    document.getElementById("Decl_IHereCertThat10"),
    document.getElementById("Decl_IHaveCarrOut10"),
  ];

  let sectionAcheckDRA = [
    document.getElementById("WorkAffeDrai_Decl_ICertThatThe10"),
    document.getElementById("WorkAffeDrai_Decl_ICertThatThe10"),
    document.getElementById("WorkAffeDrai_AttaOfSitePlan10"),
    document.getElementById("WorkAffeDrai_Decl_ICertThatThe10"),
  ];

  let sewmandaChecksigns = document.querySelectorAll("#sectionAmanda");
  let dramandaChecksigns = document.querySelectorAll("#worksAffecDra1");
  console.log(element.name);
  switch (element.name) {
    case "SEW":
      if (checkBox.checked) {
        for (checkbox of sewCheck) {
          checkbox.setAttribute("mandatory", "");
          checkbox.setAttribute("checked", "");
        }
        for (checkbox of sectionAcheck) {
          checkbox.setAttribute("mandatory", "");
          checkbox.setAttribute("checked", "");
        }
        for (let i = 0; i < sewmandaChecksigns.length; i++) {
          sewmandaChecksigns[i].textContent = "*";
        }
      } else {
        for (checkbox of sewCheck) {
          checkbox.removeAttribute("mandatory");
          checkbox.removeAttribute("checked");
        }
        for (checkbox of sectionAcheck) {
          checkbox.removeAttribute("mandatory");
          checkbox.removeAttribute("checked");
        }
        for (let i = 0; i < sewmandaChecksigns.length; i++) {
          sewmandaChecksigns[i].textContent = "";
        }
      }
      break;
    case "DRA":
      if (checkBox.checked) {
        for (checkbox of draCheck) {
          checkbox.setAttribute("mandatory", "");
          checkbox.setAttribute("checked", "");
        }
        for (checkbox of sectionAcheckDRA) {
          checkbox.setAttribute("mandatory", "");
          checkbox.setAttribute("checked", "");
        }
        for (let i = 0; i < dramandaChecksigns.length; i++) {
          dramandaChecksigns[i].textContent = "*";
        }
      } else {
        for (checkbox of draCheck) {
          checkbox.removeAttribute("mandatory");
          checkbox.removeAttribute("checked");
        }
        for (checkbox of sectionAcheckDRA) {
          checkbox.removeAttribute("mandatory");
          checkbox.removeAttribute("checked");
        }
        for (let i = 0; i < dramandaChecksigns.length; i++) {
          dramandaChecksigns[i].textContent = "";
        }
      }
      break;
  }
}

function simpSubm(element) {
  let checkboxes = [
    document.getElementById("SimpSubmForWork_IHereDeclThat10"),
    document.getElementById("SimpSubmForWork_IHereDeclThat20"),
  ];

  if (document.getElementById(element.id).checked) {
    for (check of checkboxes) {
      check.setAttribute("mandatory", "");
      check.setAttribute("checked", "");
    }
  } else {
    check.removeAttribute("mandatory");
    check.removeAttribute("checked");
  }
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

function getDetails() {
  let data = [
    {
      "PUB (Sewerage)": [
        {
          Email: "pub_bpu@pub.gov.sg",
          TelNo: "67313512",
          AreaOfSupp: "General Enquiry",
        },
        {
          Email: "sophian_ismail@pub.gov.sg",
          TelNo: "67313656",
          AreaOfSupp:
            "Approval for works affecting public sewer/Pre & Post Construction CCTV submissions",
        },
        {
          Email: "LER_Seng_Chye@pub.gov.sg",
          TelNo: "67313264",
          AreaOfSupp: "Sewerage pre-consultation/ DC Plan Submissions",
        },
        {
          Email: "teo_mok_tong@pub.gov.sg",
          TelNo: "67313256",
          AreaOfSupp: "Sewerage Clearance Submissions",
        },
        {
          Email: "steven_cheong@pub.gov.sg",
          TelNo: "67313339",
          AreaOfSupp: "Code of Practice and Regulations",
        },
      ],
      "PUB (Drainage)": [
        {
          Email: "pub_bpu@pub.gov.sg",
          TelNo: "67313512",
          AreaOfSupp: "General Enquiry, Policies, Submissions",
        },
      ],
    },
  ];
  return data;
}

function structuDetent(element) {
  let checks = [
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DeteTank_GravDisc10"),
    document.getElementById("DeveDeta_WorkAffeOtheDrai_DeteTank_PumpDisc10"),
  ];

  let switchBtn = document.querySelector("[switch-id='DeteTank10']");
  let field = document.getElementById("DeteTankVol");
  let pass = false;
  for (c of checks) {
    if (c.checked) {
      pass = true;
    }
  }
  if (pass == true) {
    switchBtn.removeAttribute("disabled");
  } else {
    switchBtn.setAttribute("disabled", "");
    switchBtn.checked = false;
    field.setAttribute("disabled", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }
}

function removeSewManda(element) {
  let sewCheck = document.getElementById("DeveDeta_DeveCont_SEW_NewSubm10");
  if (element.checked) {
    sewCheck.removeAttribute("mandatory");
    sewCheck.removeAttribute("checked");
  } else {
    sewCheck.setAttribute("mandatory", "");
    sewCheck.setAttribute("checked", "");
  }
}

function removeDraManda(element) {
  let sewCheck = document.getElementById("DeveDeta_DeveCont_DRA_NewSubm10");
  if (element.checked) {
    sewCheck.removeAttribute("mandatory");
    sewCheck.removeAttribute("checked");
  } else {
    sewCheck.setAttribute("mandatory", "");
    sewCheck.setAttribute("checked", "");
  }
}

function disableC(element) {
  let switchBtn = document.querySelector("[switch-id='DeteTank10']");
  let field = document.getElementById("DeteTankVol");

  if (element.checked) {
    switchBtn.setAttribute("disabled", "");
    switchBtn.checked = false;
    field.setAttribute("disabled", "");
    field.value = "";
  }
}

//

document.addEventListener("DOMContentLoaded", function (event) {
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