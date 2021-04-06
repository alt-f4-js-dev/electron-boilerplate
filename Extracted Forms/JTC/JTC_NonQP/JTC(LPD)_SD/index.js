function EnableOtherRow(element) { }

function ELDetaSetMandatory(element) {
  let textbox = document.getElementById(element.id);
  let PrimSecoTextboxes = [
    document.getElementById("DetlGfa_PrimUse_Ind10"),
    // document.getElementById("DetlGfa_PrimUse_Ind20"),
    // document.getElementById("DetlGfa_PrimUse_Ind30"),
    // document.getElementById("DetlGfa_PrimUse_Ind40"),
    document.getElementById("DetlGfa_PrimUse_Ind50"),
    document.getElementById("DetlGfa_PredUse_GenInd10"),
    document.getElementById("DetlGfa_PredUse_GenInd50"),
    document.getElementById("DetlGfa_PredUse_SpecInd10"),
    document.getElementById("DetlGfa_PredUse_SpecInd50"),

    // document.getElementById("DetlGfa_PrimUse_Ind60"),
    document.getElementById("DetlGfa_PrimUse_BusiPark10"),
    // document.getElementById("DetlGfa_PrimUse_BusiPark20"),
    // document.getElementById("DetlGfa_PrimUse_BusiPark30"),
    // document.getElementById("DetlGfa_PrimUse_BusiPark40"),
    document.getElementById("DetlGfa_PrimUse_BusiPark50"),
    // document.getElementById("DetlGfa_PrimUse_BusiPark60"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi10"),
    // document.getElementById("DetlGfa_SecoUse_AnciOffi20"),
    // document.getElementById("DetlGfa_SecoUse_AnciOffi30"),
    // document.getElementById("DetlGfa_SecoUse_AnciOffi40"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi50"),
    // document.getElementById("DetlGfa_SecoUse_AnciOffi60"),
    document.getElementById("DetlGfa_SecoUse_AnciCant10"),
    // document.getElementById("DetlGfa_SecoUse_AnciCant20"),
    // document.getElementById("DetlGfa_SecoUse_AnciCant30"),
    // document.getElementById("DetlGfa_SecoUse_AnciCant40"),
    document.getElementById("DetlGfa_SecoUse_AnciCant50"),
    document.getElementById("DetlGfa_SecoUse_OthAnci10"),
    document.getElementById("DetlGfa_SecoUse_OthAnci50"),
    // document.getElementById("DetlGfa_SecoUse_AnciCant60"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm10"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm50"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse10"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse50"),
    document.getElementById("DetlGfa_AnciUse_Show10"),
    document.getElementById("DetlGfa_AnciUse_Show50"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm10"),
    // document.getElementById("DetlGfa_SecoUse_WorkDorm20"),
    // document.getElementById("DetlGfa_SecoUse_WorkDorm30"),
    // document.getElementById("DetlGfa_SecoUse_WorkDorm40"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm50"),
    document.getElementById("DetlGfa_AnciUse_Seco10"),
    document.getElementById("DetlGfa_AnciUse_Seco50"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent10"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent50"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst10"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst50"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi10"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi50"),
    document.getElementById("DetlGfa_WhiteUse_EducInst10"),
    document.getElementById("DetlGfa_WhiteUse_EducInst50"),
    // document.getElementById("DetlGfa_SecoUse_WorkDorm60"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt10"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt20"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt30"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt40"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt50"),
    document.getElementById("DetlGfa_WhiteUse_MechElec10"),
    document.getElementById("DetlGfa_WhiteUse_MechElec50"),
    document.getElementById("DetlGfa_WhiteUse_MediClin10"),
    document.getElementById("DetlGfa_WhiteUse_MediClin50"),
    document.getElementById("DetlGfa_WhiteUse_Resi10"),
    document.getElementById("DetlGfa_WhiteUse_Resi50"),
    document.getElementById("DetlGfa_WhiteUse_ServApar10"),
    document.getElementById("DetlGfa_WhiteUse_ServApar50"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt60"),
    document.getElementById("DetlGfa_SecoUse_RetaShop10"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop20"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop30"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop40"),
    document.getElementById("DetlGfa_SecoUse_RetaShop50"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop60"),
    document.getElementById("DetlGfa_SecoUse_FB10"),
    // document.getElementById("DetlGfa_SecoUse_FB20"),
    // document.getElementById("DetlGfa_SecoUse_FB30"),
    // document.getElementById("DetlGfa_SecoUse_FB40"),
    document.getElementById("DetlGfa_SecoUse_FB50")
    // document.getElementById("DetlGfa_SecoUse_FB60")
  ];
  let OthersTextbox = document.querySelectorAll("[parent = 'other1']")
  let OthersTextbox2 = document.querySelectorAll("[parent = 'other2']")
  if (PrimSecoTextboxes.includes(textbox)) {
    let pass = false;
    for (let t of PrimSecoTextboxes) {
      if (t.value.length != 0) {
        pass = true;
      }
      for (let t of PrimSecoTextboxes) {
        t.setAttribute("mandatory", "");
        t.value = t.value;
      }
    }
    if (pass) {
      for (let t of OthersTextbox) {
        t.removeAttribute("mandatory");
        t.value = t.value;
      }
      for (let t2 of OthersTextbox2) {
        t2.removeAttribute("mandatory");
        t2.value = t2.value;
      }
    } else {
      for (let t of OthersTextbox) {
        if (t.getAttribute("prefix") != "DetlGfa_SecoUse_Oth3" && t.getAttribute("prefix") != "DetlGfa_SecoUse_Oth5") {
          t.setAttribute("mandatory", "");
        }
        t.value = t.value;
      }
      for (let t2 of OthersTextbox2) {
        if (t2.getAttribute("prefix") != "DetlGfa_SecoUse2_Oth3" && t2.getAttribute("prefix") != "DetlGfa_SecoUse2_Oth5") {
          t2.setAttribute("mandatory", "");
        }
        t2.value = t2.value;
      }
      for (let t of PrimSecoTextboxes) {
        t.removeAttribute("mandatory");
      }
    }
  } else if (OthersTextbox) {
    let pass = true;
    let pass1 = false;
    for (let t of OthersTextbox) {
      if (t.value.length != 0) {
        pass = false;
      }
    }
    for (let t of PrimSecoTextboxes) {
      if (t.value.length == 0) {
        pass1 = true;
      }
    }
    if (pass && pass1) {
      for (let t of OthersTextbox) {
        if (t.getAttribute("prefix") != "DetlGfa_SecoUse_Oth3" && t.getAttribute("prefix") != "DetlGfa_SecoUse_Oth5") {
          t.removeAttribute("mandatory");
          t.setAttribute("mandatory", "");
        }
      }
      for (let t of PrimSecoTextboxes) {
        t.removeAttribute("mandatory");
        t.setAttribute("mandatory", "");
      }
    } else if (!pass && pass1) {
      for (let t of PrimSecoTextboxes) {
        t.removeAttribute("mandatory");
        t.removeAttribute("checked");
      }
      // let other1 = document.querySelectorAll("[parent='other1']");
      // let other2 = document.querySelectorAll("[parent='other2']");
      // let other3 = document.querySelectorAll("[parent='other3']");
      // let other4 = document.querySelectorAll("[parent='other4']");
      // let other5 = document.querySelectorAll("[parent='other5']");

      // let passOther1 = true;
      // let passOther2 = true;
      // let passOther3 = true;
      // let passOther4 = true;
      // let passOther5 = true;

      // for (let other of other1) {
      //   if (other.value.length == 0) {
      //     passOther1 = false;
      //   }
      // }
      // for (let other of other2) {
      //   if (other.value.length == 0) {
      //     passOther2 = false;
      //   }
      // }
      // for (let other of other3) {
      //   if (other.value.length == 0) {
      //     passOther3 = false;
      //   }
      // }
      // for (let other of other4) {
      //   if (other.value.length == 0) {
      //     passOther4 = false;
      //   }
      // }
      // for (let other of other5) {
      //   if (other.value.length == 0) {
      //     passOther5 = false;
      //   }
      // }
      // if (passOther1) {
      //   for (let other of other2) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other3) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other4) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other5) {
      //     other.removeAttribute("mandatory");
      //   }
      // } else if (passOther2) {
      //   for (let other of other1) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other3) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other4) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other5) {
      //     other.removeAttribute("mandatory");
      //   }
      // } else if (passOther3) {
      //   for (let other of other1) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other2) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other4) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other5) {
      //     other.removeAttribute("mandatory");
      //   }
      // } else if (passOther4) {
      //   for (let other of other1) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other2) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other3) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other5) {
      //     other.removeAttribute("mandatory");
      //   }
      // } else if (passOther5) {
      //   for (let other of other1) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other2) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other3) {
      //     other.removeAttribute("mandatory");
      //   }
      //   for (let other of other4) {
      //     other.removeAttribute("mandatory");
      //   }
      // }
    }
  } else if (OthersTextbox2) {
    let pass = true;
    let pass1 = false;
    for (let t of OthersTextbox2) {
      if (t.value.length != 0) {
        pass = false;
      }
    }
    for (let t of PrimSecoTextboxes) {
      if (t.value.length == 0) {
        pass1 = true;
      }
    }
    if (pass && pass1) {
      for (let t of OthersTextbox2) {
        if (t.getAttribute("prefix") != "DetlGfa_SecoUse2_Oth3" && t.getAttribute("prefix") != "DetlGfa_SecoUse2_Oth5") {
          t.removeAttribute("mandatory");
          t.setAttribute("mandatory", "");
        }
      }
      for (let t of PrimSecoTextboxes) {
        t.removeAttribute("mandatory");
        t.setAttribute("mandatory", "");
      }
    } else if (!pass && pass1) {
      for (let t of PrimSecoTextboxes) {
        t.removeAttribute("mandatory");
        t.removeAttribute("checked");
      }
    }
  }
}

function EL_TrafGen_AM10_change(element, maxTime) {
  let outTime = document.getElementById(maxTime);
  let inTime = document.getElementById(element.id);
  if (inTime.value !== "") {
    if (parseInt(inTime.value) >= 730 && parseInt(inTime.value) <= 930) {
      if (outTime.value.length != 0) {
        if (parseInt(inTime.value) > parseInt(outTime.value)) {
          inTime.setAttribute("data-invalid", "");
          inTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'Out Field'"
          );
        } else {
          inTime.removeAttribute("data-invalid");
          inTime.removeAttribute("data-invalid-message");
        }
      } else {
        inTime.removeAttribute("data-invalid");
        inTime.removeAttribute("data-invalid-message");
      }
    } else {
      inTime.setAttribute("data-invalid", "");
      inTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 7:30 and less than 9:30"
      );
    }
  }
}

function EL_TrafGen_AM20_change(element, inTime) {
  let outTime = document.getElementById(element.id);
  let inTimeb = document.getElementById(inTime);
  if (outTime.value !== "") {
    if (parseInt(outTime.value) <= 930 && parseInt(outTime.value) >= 730) {
      if (inTimeb.value.length != 0) {
        if (parseInt(outTime.value) < parseInt(inTimeb.value)) {
          outTime.setAttribute("data-invalid", "");
          outTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'IN' Field"
          );
        } else {
          outTime.removeAttribute("data-invalid");
          outTime.removeAttribute("data-invalid-message");
        }
      } else {
        outTime.removeAttribute("data-invalid");
        outTime.removeAttribute("data-invalid-message");
      }
    } else {
      outTime.setAttribute("data-invalid", "");
      outTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 7:30 and less than 9:30"
      );
    }
  }
}

function EL_TrafGen_PM10_change(element, maxTime) {
  let outTime = document.getElementById(maxTime);
  let inTime = document.getElementById(element.id);
  if (inTime.value !== "") {
    if (parseInt(inTime.value) >= 1730 && parseInt(inTime.value) <= 1930) {
      if (outTime.value.length != 0) {
        if (parseInt(inTime.value) > parseInt(outTime.value)) {
          inTime.setAttribute("data-invalid", "");
          inTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'Out Field'"
          );
        } else {
          inTime.removeAttribute("data-invalid");
          inTime.removeAttribute("data-invalid-message");
        }
      } else {
        inTime.removeAttribute("data-invalid");
        inTime.removeAttribute("data-invalid-message");
      }
    } else {
      inTime.setAttribute("data-invalid", "");
      inTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 17:30 and less than 19:30"
      );
    }
  }
}

function EL_TrafGen_PM20_change(element, inTime) {
  let outTime = document.getElementById(element.id);
  let inTimeb = document.getElementById(inTime);
  if (outTime.value !== "") {
    if (parseInt(outTime.value) <= 1930 && parseInt(outTime.value) >= 1730) {
      if (inTimeb.value.length != 0) {
        if (parseInt(outTime.value) < parseInt(inTimeb.value)) {
          outTime.setAttribute("data-invalid", "");
          outTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'IN' Field"
          );
        } else {
          outTime.removeAttribute("data-invalid");
          outTime.removeAttribute("data-invalid-message");
        }
      } else {
        outTime.removeAttribute("data-invalid");
        outTime.removeAttribute("data-invalid-message");
      }
    } else {
      outTime.setAttribute("data-invalid", "");
      outTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 17:30 and less than 19:30"
      );
    }
  }
}

function EL_TrafGen_DP10_change(element, maxTime) {
  let outTime = document.getElementById(maxTime);
  let inTime = document.getElementById(element.id);
  if (inTime.value !== "") {
    if (parseInt(inTime.value) >= 0 && parseInt(inTime.value) <= 2399) {
      if (outTime.value.length != 0) {
        if (parseInt(inTime.value) > parseInt(outTime.value)) {
          inTime.setAttribute("data-invalid", "");
          inTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'Out Field'"
          );
        } else {
          inTime.removeAttribute("data-invalid");
          inTime.removeAttribute("data-invalid-message");
        }
      } else {
        inTime.removeAttribute("data-invalid");
        inTime.removeAttribute("data-invalid-message");
      }
    } else {
      inTime.setAttribute("data-invalid", "");
      inTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 17:30 and less than 19:30"
      );
    }
  }
}

function EL_TrafGen_DP20_change(element, inTime) {
  let outTime = document.getElementById(element.id);
  let inTimeb = document.getElementById(inTime);
  if (outTime.value !== "") {
    if (parseInt(outTime.value) <= 2399 && parseInt(outTime.value) >= 0) {
      if (inTimeb.value.length != 0) {
        if (parseInt(outTime.value) < parseInt(inTimeb.value)) {
          outTime.setAttribute("data-invalid", "");
          outTime.setAttribute(
            "data-invalid-message",
            "Input must be less than 'IN' Field"
          );
        } else {
          outTime.removeAttribute("data-invalid");
          outTime.removeAttribute("data-invalid-message");
        }
      } else {
        outTime.removeAttribute("data-invalid");
        outTime.removeAttribute("data-invalid-message");
      }
    } else {
      outTime.setAttribute("data-invalid", "");
      outTime.setAttribute(
        "data-invalid-message",
        "Input must be greater than 17:30 and less than 19:30"
      );
    }
  }
}

function ArrangeSpanNumber(pass) {
  let spans = document.querySelectorAll("[id='ESpan_id']");

  if (pass) {
    let x = 1;
    for (let span of spans) {
      if (span.hasAttribute("hidden")) {
        span.removeAttribute("hidden");
      }
      span.innerHTML = x;
      x++;
    }
  } else {
    let x = 1;
    let target2 = document
      .getElementById("ELSelfDeclPlanConsLandBase_Group1")
      .querySelectorAll("[id='ESpan_id']");
    let target3 = document
      .getElementById("ELSelfDeclPlanConsLandBase_Group2")
      .querySelectorAll("[id='ESpan_id']");
    for (let span of target2) {
      span.setAttribute("hidden", "");
    }
    for (let span of target3) {
      span.setAttribute("hidden", "");
    }
    for (let span of spans) {
      if (!span.hasAttribute("hidden")) {
        span.innerHTML = x;
        x++;
      }
    }
  }
}

function EL_TrafGen_Prd20_keypress(event, element) {
  let keynum;
  if (window.event) {
    keynum = event.keyCode;
  } else if (event.which) {
    keynum = event.which;
  }
  let pressed = String.fromCharCode(keynum);

  let textbox = document.getElementById(element.id);
  let value = parseInt(textbox.value + pressed);
  if (value > 2359) {
    event.preventDefault();
  }
}

function A_Dev_JTCLess_change(element) {
  let targetPage5 = document.querySelector("[target='page5']");
  let targetPage6 = document.querySelector("[target='page6']");
  let refId = document.getElementById(element.id);
  resetPage6();
  resetPage5(false);
  if (refId.checked) {
    resetPage5(true);
    targetPage5.removeAttribute("hidden");
    targetPage5.setAttribute("page-number", "5");

    targetPage6.removeAttribute("hidden");
    targetPage6.setAttribute("page-number", "6");
  } else {
    targetPage5.setAttribute("hidden", "");
    targetPage5.setAttribute("page-number", "");

    targetPage6.setAttribute("hidden", "");
    targetPage6.setAttribute("page-number", "");
  }

  B_JTCDevTyp10_change(document.getElementById("B_JTCDevTyp10"));
}

function B_JTCDevTyp10_change(element) {
  // , "Workshop"
  let ctrForId1237 = [
    "JTC-built single-user factory, Standard Factory, Workshop",
    "JTC land"
  ];
  let ctrForId4568 = [
    "JTC-built multi-tenanted building, Flatted Factory, Business Building",
    "Eating house / amenity centre"
  ];

  let value = document.getElementById(element.id).value.trim();

  //let target1 = document.querySelector("[target='page6']");
  let target2 = document.getElementById("ELSelfDeclPlanConsLandBase_Group1");
  let target3 = document.getElementById("ELSelfDeclPlanConsLandBase_Group2");
  let ELPage = document.querySelector("[target='page7']");
  let target4 = document.querySelector("[target='page8']");
  let target5 = document.querySelector("[target='page10']");
  let target6 = document.querySelector("[target='page12']");
  let target7 = document.querySelector("[target='page13']");
  let target8 = document.querySelector("[target='page14']");
  let target9 = document.querySelector("[target='page9']");
  let target10 = document.querySelector("[target='page11']");

  let jeeseeTenantChckBox = document.getElementById("A_Dev_JTCLess10");

  emptyPage11();
  emptyPage12();

  //CR-May 18 2020 - uncomment during UAT
  // let groupB1 = document.querySelectorAll("[group-id = 'annexB1']");

  // for (let b1 of groupB1) {
  //   b1.setAttribute("hidden", "");
  // }

  // let groupB2 = document.querySelectorAll("[group-id = 'annexB2']");

  // for (let b2 of groupB2) {
  //   b2.setAttribute("hidden", "");
  // }

  // let annexB1 = document.getElementById("annexB1");
  // let textBox = annexB1.querySelectorAll("cn2-texbox");

  // for (let clearText of textBox) {
  //   clearText.value = "";
  // }

  let detGrossFormField = document.querySelectorAll(".JTCTableFormContainer");
  let detGrossFormField2 = document.querySelectorAll(".JTCTableFormContainer2");
  let detGrossDelBtn = document.getElementById("delete1A");
  let detGrossDelBtn2 = document.getElementById("delete1B");

  for (let x = 0; x < detGrossFormField.length; x++) {
    let elements = detGrossFormField[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");

      if (x != 0) {
        delete jsonData[element.id];
      }
    }
    if (x != 0) {
      detGrossFormField[x].parentNode.removeChild(detGrossFormField[x]);
    }
  }
  for (let x = 0; x < detGrossFormField2.length; x++) {
    let elements = detGrossFormField2[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element of elements) {
      document.getElementById(element.id).value = "";
      document.getElementById(element.id).removeAttribute("data-invalid");

      if (x != 0) {
        delete jsonData[element.id];
      }
    }
    if (x != 0) {
      detGrossFormField2[x].parentNode.removeChild(detGrossFormField2[x]);
    }
  }

  detGrossDelBtn.setAttribute("disabled", "");
  detGrossDelBtn2.setAttribute("disabled", "");

  let AnnexBFormField = document.querySelectorAll(".annexB2Container");
  let AnnexBDelBtn = document.getElementById("delete10");
  let DetaCeilField = document.querySelectorAll(".detaCeilContainer");
  let detaCeilDelbtn = document.getElementById("deleteCeilA");
  let DetaCeilField2 = document.querySelectorAll(".detaCeilContainer2");
  let detaCeilDelbtn2 = document.getElementById("deleteCeilB");

  for (let z = 0; z < DetaCeilField.length; z++) {
    let detaelements1 = DetaCeilField[z].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element1 of detaelements1) {
      document.getElementById(element1.id).value = "";
      document.getElementById(element1.id).removeAttribute("data-invalid");

      if (z != 0) {
        delete jsonData[element1.id];
      }
    }
    if (z != 0) {
      DetaCeilField[z].parentNode.removeChild(DetaCeilField[z]);
    }
  }
  for (let i = 0; i < DetaCeilField2.length; i++) {
    let detaelements2 = DetaCeilField2[i].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element3 of detaelements2) {
      document.getElementById(element3.id).value = "";
      document.getElementById(element3.id).removeAttribute("data-invalid");

      if (i != 0) {
        delete jsonData[element3.id];
      }
    }
    if (i != 0) {
      DetaCeilField2[i].parentNode.removeChild(DetaCeilField2[i]);
    }
  }

  for (let y = 0; y < AnnexBFormField.length; y++) {
    let annexB2elements = AnnexBFormField[y].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element2 of annexB2elements) {
      document.getElementById(element2.id).value = "";
      document.getElementById(element2.id).removeAttribute("data-invalid");

      if (y != 0) {
        delete jsonData[element2.id];
      }
    }
    if (y != 0) {
      AnnexBFormField[y].parentNode.removeChild(AnnexBFormField[y]);
    }
  }

  AnnexBDelBtn.setAttribute("disabled", "");
  detaCeilDelbtn.setAttribute("disabled", "");
  detaCeilDelbtn2.setAttribute("disabled", "");
  for (let a of document.querySelectorAll("[group-id='DetlGfa20_id']")) {
    a.value = ""
  }

  let textBox = annexB1.querySelectorAll("cn2-textbox");
  let groupB1 = document.querySelectorAll("[group-id = 'annexB1']");
  let groupB2 = document.querySelectorAll("[group-id = 'annexB2']");
  let ceilGroup = document.querySelectorAll("[group-id='ceilA']");
  let ceilGroup2 = document.querySelectorAll("[group-id='ceilB']");

  for (let clearText of textBox) {
    clearText.value = "";
  }

  for (let b1 of groupB1) {
    b1.setAttribute("hidden", "");
  }

  for (let b2 of groupB2) {
    b2.setAttribute("hidden", "");
  }

  // for (let c1 of ceilGroup) {
  //   c1.setAttribute("hidden", "");
  // }
  if (ctrForId1237.includes(value)) {
    ArrangeSpanNumber(true);
    //Code for Target 1
    //target1.setAttribute("page-number", "6");
    //target1.removeAttribute("hidden");
    //Code for Target 2
    target2.removeAttribute("hidden");
    ELPage.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      ELPage.setAttribute("page-number", "7");
    } else {
      ELPage.setAttribute("page-number", "5");
    }
    enableTarget2(true);
    //Code for Target 3
    target3.removeAttribute("hidden");
    enableTarget3(true);

    //Code for Target 4
    target4.setAttribute("hidden", "");
    target4.setAttribute("page-number", "");
    enableTarget4(false);
    //Code for Target 5
    target5.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target5.setAttribute("page-number", "8");
    } else {
      target5.setAttribute("page-number", "6");
    }
    enableTarget5(true);
    //Code for Target 6
    target6.setAttribute("hidden", "");
    target6.setAttribute("page-number", "");
    enableTarget6(false);
    //Code for Target 7
    target7.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target7.setAttribute("page-number", "9");
    } else {
      target7.setAttribute("page-number", "7");
    }
    //Code for Target 8
    target8.setAttribute("hidden", "");
    target8.setAttribute("page-number", "");
    //Code for Target 9
    enableTarget9(false);
    target9.setAttribute("page-number", "");
    target9.setAttribute("hidden", "");
    //Code for Target 10
    enableTarget10(false);
    target10.setAttribute("hidden", "");
    target10.setAttribute("page-number", "");
  } else if (ctrForId4568.includes(value)) {
    ArrangeSpanNumber(false);
    //Code for Target 1
    //target1.setAttribute("hidden", "");
    //target1.setAttribute("page-number", "");
    //resetPage6();
    //Code for Target 2
    target2.setAttribute("hidden", "");
    enableTarget2(false);
    ELPage.setAttribute("hidden", "");
    ELPage.setAttribute("page-number", "");
    //Code for Target 3
    target3.setAttribute("hidden", "");
    enableTarget3(false);
    //Code for Target 4
    target4.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target4.setAttribute("page-number", "7");
    } else {
      target4.setAttribute("page-number", "5");
    }
    disableTarget4(true);
    // enableTarget4(true);
    //Code for Target 5
    target5.setAttribute("hidden", "");
    target5.setAttribute("page-number", "");
    enableTarget5(false);

    //COde for Target 6
    target6.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target6.setAttribute("page-number", "9");
    } else {
      target6.setAttribute("page-number", "7");
    }
    enableTarget6(true);
    //COde for Target 7
    target7.setAttribute("hidden", "");
    target7.setAttribute("page-number", "");
    //COde for Target 8
    target8.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target8.setAttribute("page-number", "10");
    } else {
      target8.setAttribute("page-number", "8");
    }
    //Code for Target 9
    enableTarget9(true);
    target9.removeAttribute("hidden");
    if (jeeseeTenantChckBox.checked) {
      target9.setAttribute("page-number", "8");
    } else {
      target9.setAttribute("page-number", "6");
    }

    //Code for Target 10
    enableTarget10(false);
    target10.setAttribute("hidden", "");
    target10.removeAttribute("page-number", "");
  } else {
    ArrangeSpanNumber(false);
    //Code for Target 1
    //target1.setAttribute("hidden", "");
    //target1.setAttribute("page-number", "");
    //resetPage6();
    //Code for Target 2
    target2.setAttribute("hidden", "");
    enableTarget2(false);
    ELPage.setAttribute("hidden", "");
    ELPage.setAttribute("page-number", "");
    //Code for Target 3
    target3.setAttribute("hidden", "");
    enableTarget3(false);
    //Code for Target 4
    target4.setAttribute("hidden", "");
    target4.setAttribute("page-number", "");
    enableTarget4(false);
    disableTarget4(true);
    //Code for Target 5
    target5.setAttribute("hidden", "");
    target5.setAttribute("page-number", "");
    enableTarget5(false);
    //Code for Target 6
    target6.setAttribute("hidden", "");
    target6.setAttribute("page-number", "");
    enableTarget6(false);
    //Code for Target 7
    target7.setAttribute("hidden", "");
    target7.setAttribute("page-number", "");
    //Code for Target 8
    target8.setAttribute("hidden", "");
    target8.setAttribute("page-number", "");
    //Code for Target 9
    enableTarget9(false);
    target9.setAttribute("hidden", "");
    target9.setAttribute("page-number", "");
    //Code for Target 10
    enableTarget10(false);
    target10.setAttribute("hidden", "");
    target10.setAttribute("page-number", "");
  }
  let applicantName = document.getElementById("Member_Member_Name_QP10");
  if (applicantName.value != "" && applicantName.value != null) {
    C_Name10_change();
  }
}

function enableTarget9(pass) {
  let getPage9 = document.getElementById("page9");
  let radio = getPage9.querySelectorAll(`[type='radio']`);
  let textbox = getPage9.querySelectorAll("cn2-textbox");
  let mandatory = getPage9.querySelectorAll("[m]");

  for (let target of radio) {
    target.checked = false;
  }
  for (let target of textbox) {
    target.value = "";
  }

  if (pass) {
    for (let target of mandatory) {
      target.setAttribute("mandatory", "");
    }
  } else {
    for (let target of mandatory) {
      target.removeAttribute("mandatory");
    }
  }
}

function enableTarget10(pass) {
  rad1 = document.getElementById("FL_QPComp_Yes10");
  rad2 = document.getElementById("FL_QPComp_No20");
  if (pass) {
    rad1.setAttribute("mandatory", "");
    rad1.setAttribute("checked", "");
    rad2.setAttribute("mandatory", "");
    rad2.setAttribute("checked", "");
    rad1.checked = false;
    rad2.checked = false;
  } else {
    rad1.removeAttribute("mandatory");
    rad1.removeAttribute("checked");
    rad2.removeAttribute("mandatory");
    rad2.removeAttribute("checked");
    rad1.checked = false;
    rad2.checked = false;
  }
}

function enableTarget6(pass) {
  let radios = [
    document.getElementById("FB_QPComp_YesNo10"),
    document.getElementById("FB_QPComp_YesNo20")
  ];
  if (pass) {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  } else {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
      radio.checked = false;
    }
  }
}

function enableTarget5(pass) {
  let radios = [
    document.getElementById("FL_QPComp_Yes10"),
    document.getElementById("FL_QPComp_No20")
  ];
  if (pass) {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  } else {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
      radio.checked = false;
    }
  }
}

function enableTarget4(pass) {
  let optCheckboxes = [
    document.getElementById("EB_CommWorks10"),
    document.getElementById("EB_CommWorks20"),
    document.getElementById("EB_CommWorks30"),
    document.getElementById("EB_CommWorks40"),
    document.getElementById("EB_CommWorks50"),
    document.getElementById("EB_CommWorks60"),
    document.getElementById("EB_CommWorks70"),
    document.getElementById("EB_CommWorks80"),
    document.getElementById("EB_CommWorks90"),
    document.getElementById("EB_CommWorks100"),
    document.getElementById("EB_CommWorks110"),
    document.getElementById("EB_CommWorks120"),
    document.getElementById("EB_CommWorks130"),
    document.getElementById("EB_CommWorks140"),
    document.getElementById("EB_CommWorks150"),
    document.getElementById("EB_CommWorks160"),
    document.getElementById("EB_CommWorks170"),
    document.getElementById("EB_CommWorks180"),
    document.getElementById("EB_CommWorks190"),
    document.getElementById("EB_CommWorks200"),
    document.getElementById("EB_CommWorks210"),
    document.getElementById("EB_CommWorks220"),
    document.getElementById("EB_CommWorks230"),

    document.getElementById("EB_ExtWorks10"),
    document.getElementById("EB_ExtWorks20"),
    document.getElementById("EB_ExtWorks30"),
    document.getElementById("EB_ExtWorks40"),
    document.getElementById("EB_ExtWorks50"),
    document.getElementById("EB_ExtWorks60"),
    document.getElementById("EB_ExtWorks70"),
    document.getElementById("EB_ExtWorks80"),
    document.getElementById("EB_ExtWorks90")
    // document.getElementById("EB_MachInst_Vibr_YesNo10"),
    // document.getElementById("EB_MachInst_Vibr_YesNo20"),
    // document.getElementById("EB_MachInst_Vibr_YesNo30"),
    // document.getElementById("EB_MachInst_EMI_YesNo10"),
    // document.getElementById("EB_MachInst_EMI_YesNo20"),
    // document.getElementById("EB_MachInst_EMI_YesNo30")
  ];
  let disabledTextBoxes = [
    document.getElementById("EB_ExtWorks100"),
    document.getElementById("EB_CommWorks_Text20")
  ];
  let groupText = document.querySelectorAll(`[group-id='EB_ExtWorks80_group']`);
  if (!pass) {
    for (let checkbox of optCheckboxes) {
      checkbox.checked = false;
    }
    for (let textbox of disabledTextBoxes) {
      textbox.setAttribute("hidden", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let target of groupText) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
    document.getElementById("EB_CommWorks_Text10").removeAttribute("mandatory");
    document.getElementById("EB_CommWorks_Text10").value = "";
    document
      .getElementById("EB_CommWorks_Text10_label")
      .setAttribute("hidden", "");
  }
}

function enableTarget3(pass) {
  let optTextboxes = [
    document.getElementById("EL_GreenCvr_Area10"),
    document.getElementById("EL_GreenCvr_Pcnt10"),
    document.getElementById("EL_GreenCvr_Area20"),
    document.getElementById("EL_GreenCvr_Pcnt20"),
    document.getElementById("EL_GreenCvr_Area30"),
    document.getElementById("EL_GreenCvr_Pcnt30"),
    document.getElementById("EL_GreenCvr_Area40"),
    document.getElementById("EL_GreenCvr_Pcnt40"),
    document.getElementById("EL_GreenCvr_Area50"),
    document.getElementById("EL_GreenCvr_Pcnt50"),
    document.getElementById("EL_GreenCvr_Area60"),
    document.getElementById("EL_GreenCvr_Pcnt60"),
    document.getElementById("EL_GreenCvr_Area70"),
    document.getElementById("EL_GreenCvr_Pcnt70"),
    document.getElementById("EL_GreenCvr_TotalPcnt10"),
    document.getElementById("EL_NoOfWorkers10"),
    document.getElementById("EL_TrafGen_Prd10"),
    document.getElementById("EL_TrafGen_Prd20"),
    document.getElementById("EL_TrafGen_AM10"),
    document.getElementById("EL_TrafGen_AM20"),
    document.getElementById("EL_TrafGen_PM10"),
    document.getElementById("EL_TrafGen_PM20"),
    document.getElementById("EL_TrafGen_DP10"),
    document.getElementById("EL_TrafGen_DP20"),
    document.getElementById("EL_TrafGen_VehiTyp10"),
    document.getElementById("EL_TrafGen_VehiTyp20"),
    document.getElementById("EL_TrafGen_VehiTyp30"),
    document.getElementById("EL_TrafGen_VehiTyp40"),
    document.getElementById("EL_TrafGen_VehiTyp50"),
    document.getElementById("EL_TrafGen_VehiTyp60"),
    document.getElementById("EL_TrafGen_VehiTyp70")
  ];
  let mandTextboxes = [
    document.getElementById("EL_ParkProv_Public10"),
    document.getElementById("EL_ParkProv_Secured10"),
    document.getElementById("EL_ParkProv_Public20"),
    document.getElementById("EL_ParkProv_Secured20"),
    document.getElementById("EL_ParkProv_Public30"),
    document.getElementById("EL_ParkProv_Secured30"),
    document.getElementById("EL_ParkProv_Public40"),
    document.getElementById("EL_ParkProv_Secured40"),
    document.getElementById("EL_ParkProv_Public50"),
    document.getElementById("EL_ParkProv_Secured50"),
    document.getElementById("EL_ParkProv_Public60"),
    document.getElementById("EL_ParkProv_Secured60"),
    document.getElementById("EL_ParkProv_Public70"),
    document.getElementById("EL_ParkProv_Secured70")
  ];
  if (pass) {
    for (let textbox of mandTextboxes) {
      textbox.setAttribute("mandatory", "");
    }
  } else {
    for (let textbox of optTextboxes) {
      textbox.value = "";
    }
    for (let textbox of mandTextboxes) {
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}

function enableTarget2(pass) {
  let mandCheckboxes = [

    // document.getElementById("EL_TypWork_BCW10"),
    document.getElementById("EL_TypWork_BCW20"),
    // document.getElementById("EL_TypWork_BCW30"),
    document.getElementById("EL_TypWork_BCW40"),
    // document.getElementById("EL_TypWork_RW10"),
    document.getElementById("EL_TypWork_Use10"),
    document.getElementById("EL_TypWork_Use20"),
    document.getElementById("EL_TypWork_Oth10"),
    document.getElementById("EL_TypWork_Oth20"),
    // document.getElementById("EL_Exist_Shop10"),
    // document.getElementById("EL_Exist_Offi10"),
    // document.getElementById("EL_Exist_Comm10"),
    // document.getElementById("EL_Exist_Rest10"),
    // document.getElementById("EL_Exist_Show10"),
    // document.getElementById("EL_Exist_Chil10"),
    // document.getElementById("EL_Exist_ComBuil10"),
    // document.getElementById("EL_Exist_GymFit10"),
    // document.getElementById("EL_Exist_MedCli10"),
    // document.getElementById("EL_Exist_Laun10"),
    // document.getElementById("EL_Exist_Oth10"),
    // document.getElementById("EL_Propo_Shop10"),
    // document.getElementById("EL_Propo_Offi10"),
    // document.getElementById("EL_Propo_Comm10"),
    // document.getElementById("EL_Propo_Rest10"),
    // document.getElementById("EL_Propo_Show10"),
    // document.getElementById("EL_Propo_Chil10"),
    // document.getElementById("EL_Propo_ComBuil10"),
    // document.getElementById("EL_Propo_GymFit10"),
    // document.getElementById("EL_Propo_MedCli10"),
    // document.getElementById("EL_Propo_Laun10"),
    // document.getElementById("EL_Propo_Oth10")
  ];
  let disabledCheck = [
    document.getElementById("EL_Exist_Shop10"),
    document.getElementById("EL_Exist_Offi10"),
    document.getElementById("EL_Exist_Comm10"),
    document.getElementById("EL_Exist_Rest10"),
    document.getElementById("EL_Exist_Show10"),
    document.getElementById("EL_Exist_Chil10"),
    document.getElementById("EL_Exist_ComBuil10"),
    document.getElementById("EL_Exist_GymFit10"),
    document.getElementById("EL_Exist_MedCli10"),
    document.getElementById("EL_Exist_Laun10"),
    document.getElementById("EL_Exist_Oth10"),
    document.getElementById("EL_Propo_Shop10"),
    document.getElementById("EL_Propo_Offi10"),
    document.getElementById("EL_Propo_Comm10"),
    document.getElementById("EL_Propo_Rest10"),
    document.getElementById("EL_Propo_Show10"),
    document.getElementById("EL_Propo_Chil10"),
    document.getElementById("EL_Propo_ComBuil10"),
    document.getElementById("EL_Propo_GymFit10"),
    document.getElementById("EL_Propo_MedCli10"),
    document.getElementById("EL_Propo_Laun10"),
    document.getElementById("EL_Propo_Oth10"),
    document.querySelector("[switch-id='EL_ChanOfUse_Yes10']"),
    document.querySelector("[switch-id='EL_GfaAris_Yes10']")
  ]
  let optCheckboxes = [
    document.getElementById("EL_TypWork_PS10"),
    document.getElementById("EL_TypWork_PS20"),
    document.getElementById("EL_TypWork_PS40"),
    document.getElementById("EL_SubmURAPlan10"),
  ];
  let disabledTextBox = [
    document.getElementById("EL_TypWork_PS_Textbox10"),
    document.getElementById("EL_TypWork_Oth_Textbox10"),

  ];
  let disabledTextBox2 = [
    document.getElementById("DetlGfa_TotaGFA10"),
    document.getElementById("DetlGfa_TotaGFA20"),
    document.getElementById("DetlGfa_TotaGFA30"),
    document.getElementById("DetlGfa_ExisPR10"),
    document.getElementById("DetlGfa_OverPR10"),
    document.getElementById("DetlGfa_PrimUse_Ind20"),
    document.getElementById("DetlGfa_PrimUse_Ind40"),
    document.getElementById("DetlGfa_PrimUse_Ind60"),
    document.getElementById("DetlGfa_PredUse_GenInd20"),
    document.getElementById("DetlGfa_PredUse_GenInd40"),
    document.getElementById("DetlGfa_PredUse_GenInd60"),
    document.getElementById("DetlGfa_PredUse_SpecInd20"),
    document.getElementById("DetlGfa_PredUse_SpecInd40"),
    document.getElementById("DetlGfa_PredUse_SpecInd60"),
    document.getElementById("DetlGfa_PrimUse_BusiPark20"),
    document.getElementById("DetlGfa_PrimUse_BusiPark40"),
    document.getElementById("DetlGfa_PrimUse_BusiPark60"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi20"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi40"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi60"),
    document.getElementById("DetlGfa_SecoUse_AnciCant20"),
    document.getElementById("DetlGfa_SecoUse_AnciCant40"),
    document.getElementById("DetlGfa_SecoUse_AnciCant60"),
    document.getElementById("DetlGfa_SecoUse_OthAnci20"),
    document.getElementById("DetlGfa_SecoUse_OthAnci40"),
    document.getElementById("DetlGfa_SecoUse_OthAnci60"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm20"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm40"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm60"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse20"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse40"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse60"),
    document.getElementById("DetlGfa_AnciUse_Show20"),
    document.getElementById("DetlGfa_AnciUse_Show40"),
    document.getElementById("DetlGfa_AnciUse_Show60"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm20"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm40"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm60"),
    document.getElementById("DetlGfa_AnciUse_Seco20"),
    document.getElementById("DetlGfa_AnciUse_Seco40"),
    document.getElementById("DetlGfa_AnciUse_Seco60"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent20"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent40"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent60"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst20"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst40"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst60"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi20"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi40"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi60"),
    document.getElementById("DetlGfa_WhiteUse_EducInst20"),
    document.getElementById("DetlGfa_WhiteUse_EducInst40"),
    document.getElementById("DetlGfa_WhiteUse_EducInst60"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt20"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt40"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt60"),
    document.getElementById("DetlGfa_WhiteUse_MechElec20"),
    document.getElementById("DetlGfa_WhiteUse_MechElec40"),
    document.getElementById("DetlGfa_WhiteUse_MechElec60"),
    document.getElementById("DetlGfa_WhiteUse_MediClin20"),
    document.getElementById("DetlGfa_WhiteUse_MediClin40"),
    document.getElementById("DetlGfa_WhiteUse_MediClin60"),
    document.getElementById("DetlGfa_WhiteUse_Resi20"),
    document.getElementById("DetlGfa_WhiteUse_Resi40"),
    document.getElementById("DetlGfa_WhiteUse_Resi60"),
    document.getElementById("DetlGfa_WhiteUse_ServApar20"),
    document.getElementById("DetlGfa_WhiteUse_ServApar40"),
    document.getElementById("DetlGfa_WhiteUse_ServApar60"),
    document.getElementById("DetlGfa_SecoUse_RetaShop20"),
    document.getElementById("DetlGfa_SecoUse_RetaShop40"),
    document.getElementById("DetlGfa_SecoUse_RetaShop60"),
    document.getElementById("DetlGfa_SecoUse_FB20"),
    document.getElementById("DetlGfa_SecoUse_FB40"),
    document.getElementById("DetlGfa_SecoUse_FB60"),
    document.getElementById("DetlGfa_SecoUse_Oth310"),
    document.getElementById("DetlGfa_SecoUse_Oth510"),
    document.getElementById("DetlGfa_SecoUse_Oth710"),
    document.getElementById("DetlGfa_SecoUse2_Oth310"),
    document.getElementById("DetlGfa_SecoUse2_Oth510"),
    document.getElementById("DetlGfa_SecoUse2_Oth710")
    // document.getElementById("DetlGfa_SecoUse_Oth230"),
    // document.getElementById("DetlGfa_SecoUse_Oth250"),
    // document.getElementById("DetlGfa_SecoUse_Oth270")
  ];
  let mandTextboxes = [
    // document.getElementById("DetlGfa_PrimUse_Ind10"),
    // //
    // // document.getElementById("DetlGfa_PrimUse_Ind30"),
    // //
    // document.getElementById("DetlGfa_PrimUse_Ind50"),
    // document.getElementById("DetlGfa_PredUse_GenInd10"),
    // document.getElementById("DetlGfa_PredUse_GenInd50"),
    // document.getElementById("DetlGfa_PredUse_SpecInd10"),
    // document.getElementById("DetlGfa_PredUse_SpecInd50"),
    // //
    // document.getElementById("DetlGfa_PrimUse_BusiPark10"),
    // //
    // // document.getElementById("DetlGfa_PrimUse_BusiPark30"),
    // //
    // document.getElementById("DetlGfa_PrimUse_BusiPark50"),
    // //
    // document.getElementById("DetlGfa_SecoUse_AnciOffi10"),
    // //
    // // document.getElementById("DetlGfa_SecoUse_AnciOffi30"),
    // //
    // document.getElementById("DetlGfa_SecoUse_AnciOffi50"),
    // document.getElementById("DetlGfa_SecoUse_OthAnci10"),
    // document.getElementById("DetlGfa_SecoUse_OthAnci50"),
    // //
    // document.getElementById("DetlGfa_SecoUse_AnciCant10"),
    // //
    // // document.getElementById("DetlGfa_SecoUse_AnciCant30"),
    // //
    // document.getElementById("DetlGfa_SecoUse_AnciCant50"),
    // document.getElementById("DetlGfa_AnciUse_InteUrbaFarm10"),
    // document.getElementById("DetlGfa_AnciUse_InteUrbaFarm50"),
    // document.getElementById("DetlGfa_AnciUse_SeleCommUse10"),
    // document.getElementById("DetlGfa_AnciUse_SeleCommUse50"),
    // document.getElementById("DetlGfa_AnciUse_Show10"),
    // document.getElementById("DetlGfa_AnciUse_Show50"),
    // //
    // document.getElementById("DetlGfa_SecoUse_WorkDorm10"),

    // // document.getElementById("DetlGfa_SecoUse_WorkDorm30"),

    // document.getElementById("DetlGfa_SecoUse_WorkDorm50"),
    // document.getElementById("DetlGfa_AnciUse_Seco10"),
    // document.getElementById("DetlGfa_AnciUse_Seco50"),
    // document.getElementById("DetlGfa_WhiteUse_ChilCent10"),
    // document.getElementById("DetlGfa_WhiteUse_ChilCent50"),
    // document.getElementById("DetlGfa_WhiteUse_CiviCommInst10"),
    // document.getElementById("DetlGfa_WhiteUse_CiviCommInst50"),
    // document.getElementById("DetlGfa_WhiteUse_CommOffi10"),
    // document.getElementById("DetlGfa_WhiteUse_CommOffi50"),
    // document.getElementById("DetlGfa_WhiteUse_EducInst10"),
    // document.getElementById("DetlGfa_WhiteUse_EducInst50"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt10"),
    // // document.getElementById("DetlGfa_SecoUse_HoteServApt30"),
    // document.getElementById("DetlGfa_SecoUse_HoteServApt50"),
    // document.getElementById("DetlGfa_WhiteUse_MechElec10"),
    // document.getElementById("DetlGfa_WhiteUse_MechElec50"),
    // document.getElementById("DetlGfa_WhiteUse_MediClin10"),
    // document.getElementById("DetlGfa_WhiteUse_MediClin50"),
    // document.getElementById("DetlGfa_WhiteUse_Resi10"),
    // document.getElementById("DetlGfa_WhiteUse_Resi50"),
    // document.getElementById("DetlGfa_WhiteUse_ServApar10"),
    // document.getElementById("DetlGfa_WhiteUse_ServApar50"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop10"),
    // // document.getElementById("DetlGfa_SecoUse_RetaShop30"),
    // document.getElementById("DetlGfa_SecoUse_RetaShop50"),
    // document.getElementById("DetlGfa_SecoUse_FB10"),
    // // document.getElementById("DetlGfa_SecoUse_FB30"),
    // document.getElementById("DetlGfa_SecoUse_FB50"),
    // document.getElementById("DetlGfa_SecoUse_Oth110"),
    // document.getElementById("DetlGfa_SecoUse_Oth210"),
    // // document.getElementById("DetlGfa_SecoUse_Oth140"),
    // document.getElementById("DetlGfa_SecoUse_Oth610")
    // document.getElementById("DetlGfa_SecoUse_Oth210"),
    // document.getElementById("DetlGfa_SecoUse_Oth220"),
    // document.getElementById("DetlGfa_SecoUse_Oth240"),
    // document.getElementById("DetlGfa_SecoUse_Oth260"),

    // document.getElementById("DetlGfa_SecoUse_Oth310"),
    // document.getElementById("DetlGfa_SecoUse_Oth320"),

    // document.getElementById("DetlGfa_SecoUse_Oth340"),

    // document.getElementById("DetlGfa_SecoUse_Oth360"),

    // document.getElementById("DetlGfa_SecoUse_Oth410"),
    // document.getElementById("DetlGfa_SecoUse_Oth420"),

    // document.getElementById("DetlGfa_SecoUse_Oth440"),

    // document.getElementById("DetlGfa_SecoUse_Oth460"),

    // document.getElementById("DetlGfa_SecoUse_Oth510"),
    // document.getElementById("DetlGfa_SecoUse_Oth520"),

    // document.getElementById("DetlGfa_SecoUse_Oth540"),

    //document.getElementById("DetlGfa_SecoUse_Oth560")
  ];
  let optTextbox = document.getElementById("EL_LandArea10");
  for (let disCheck of disabledCheck) {
    disCheck.checked = false;
    disCheck.setAttribute("disabled", "");
    disCheck.removeAttribute("checked");
    disCheck.removeAttribute("mandatory");
  }
  document.getElementById("EL_TypeOfUse_GFA_10").setAttribute("disabled", "");
  document.getElementById("EL_TypeOfUse_GFA_10").value = ""
  document.getElementById("EL_Exist_Oth20").setAttribute("hidden", "");

  document.getElementById("EL_Exist_Oth20").value = ""
  document.getElementById("EL_Propo_Oth10").setAttribute("hidden", "");
  document.getElementById("EL_Propo_Oth10").removeAttribute("hidden");
  document.getElementById("EL_Propo_Oth10").value = ""
  if (pass) {
    for (let checkbox of mandCheckboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
    for (let textbox of mandTextboxes) {
      textbox.setAttribute("mandatory", "");
    }
  } else {
    optTextbox.value = "";
    for (let checkbox of mandCheckboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }
    for (let checkbox of optCheckboxes) {
      checkbox.checked = false;
    }

    for (let textbox of mandTextboxes) {
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let textbox of disabledTextBox) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("hidden", "");
      textbox.value = "";
    }
    for (let textbox of disabledTextBox2) {
      textbox.value = "";
    }
  }
}

function resetPage5(condition) {
  let textBoxes = [
    document.getElementById("D_JTCCustNo10"),
    document.getElementById("D_CompName10"),
    document.getElementById("D_UEN10"),
    document.getElementById("D_ContPers10"),
    document.getElementById("D_ContNo_Ofc10"),
    document.getElementById("D_Cont_Mobile10"),
    document.getElementById("Rem8Years10_Yes")
  ];

  if (condition) {
    for (let textBox of textBoxes) {
      textBox.setAttribute("mandatory", "");
    }
  } else {
    for (let textBox of textBoxes) {
      textBox.removeAttribute("mandatory");
      if (textBox.hasAttribute("data-invalid")) {
        textBox.removeAttribute("data-invalid");
      }
      textBox.value = "";
    }
  }
}

function resetPage6() {
  let element = document.querySelectorAll("[parent='page6']");
  let field = document.querySelectorAll("[txtpage6]");
  let chk = document.querySelectorAll("[chkpage6]");
  let rad = document.querySelectorAll("[radpage6]");
  let table = document.querySelector("[dieselTankTable");
  for (let a of field) {
    a.setAttribute("disabled", "");
    a.setAttribute("hidden", "");
    a.removeAttribute("mandatory");
    a.value = "";
  }
  for (let a of chk) {
    a.checked = false;
  }
  for (let a of rad) {
    a.checked = false;
  }
  table.setAttribute("hidden", "");
  element[15].innerHTML = "(e) Other equipment, please state:";

}
function A_Dev_change() {
  let checkboxes = document.querySelectorAll("[group-id='A_Dev_id']");
  let pass = false;
  let span = document.getElementById("A_Dev_label");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
      break;
    }
  }
  if (pass) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      span.innerHTML = "Developer/Builder";
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
      span.innerHTML = "Developer/Builder*";
    }
  }
}

function A_Dev_Others10_change(element, textbox) {
  textbox = document.getElementById(textbox);
  let span = document.getElementById("othersSpan");
  let div = document.getElementById("A_Dev_Others_Pls10_div");
  if (element.checked) {
    div.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled");
    span.innerHTML = "Others*";
  } else {
    span.innerHTML = "Others";
    textbox.setAttribute("disabled", "");
    div.setAttribute("hidden", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function C_Name10_change() {
  // , "Workshop"
  let jeeseeTenantChckBox = document.getElementById("A_Dev_JTCLess10");

  let qpRegTextbox = document.getElementById("MemberRole_Professional_No_QP10");

  let value = document.getElementById("B_JTCDevTyp10").value;

  if (qpRegTextbox.value.length != 0) {
    document.getElementById("qpRegisNo").removeAttribute("hidden");
  } else {
    document.getElementById("qpRegisNo").setAttribute("hidden", "");
  }

  let ctrForId1237 = [
    "JTC-built single-user factory, Standard Factory, Workshop",
    "JTC land"
  ];
  let ctrForId4568 = [
    "JTC-built multi-tenanted building, Flatted Factory, Business Building",
    "Eating house / amenity centre"
  ];

  if (value.length != 0) {
    if (qpRegTextbox.value.length == 0) {
      document.querySelector("[target='page14']").removeAttribute("hidden");
      if (jeeseeTenantChckBox.checked) {
        if (ctrForId1237.includes(value)) {
          document
            .querySelector("[target='page14']")
            .setAttribute("page-number", "9");
        } else {
          document
            .querySelector("[target='page14']")
            .setAttribute("page-number", "10");
        }
      } else {
        if (ctrForId1237.includes(value)) {
          document
            .querySelector("[target='page14']")
            .setAttribute("page-number", "7");
        } else {
          document
            .querySelector("[target='page14']")
            .setAttribute("page-number", "8");
        }
      }
      document.querySelector("[target='page13']").setAttribute("hidden", "");
      document
        .querySelector("[target='page13']")
        .setAttribute("page-number", "");
      emptyPage11();
      emptyPage12();
    } else {
      document.querySelector("[target='page13']").removeAttribute("hidden");
      if (jeeseeTenantChckBox.checked) {
        if (ctrForId1237.includes(value)) {
          document
            .querySelector("[target='page13']")
            .setAttribute("page-number", "9");
        } else {
          document
            .querySelector("[target='page13']")
            .setAttribute("page-number", "10");
        }
      } else {
        if (ctrForId1237.includes(value)) {
          document
            .querySelector("[target='page13']")
            .setAttribute("page-number", "7");
        } else {
          document
            .querySelector("[target='page13']")
            .setAttribute("page-number", "8");
        }
      }

      document.querySelector("[target='page14']").setAttribute("hidden", "");
      document
        .querySelector("[target='page14']")
        .setAttribute("page-number", "");
      emptyPage11();
      emptyPage12();
    }

    if (!ctrForId1237.includes(value) && !ctrForId4568.includes(value)) {
      emptyPage11();
      emptyPage12();
      document.querySelector("[target='page14']").setAttribute("hidden", "");
      document.querySelector("[target='page13']").removeAttribute("hidden");
    }
  }
}

function emptyPage11() {
  let elements = [
    document.getElementById("QP_RegNo10"),
    document.getElementById("QP_Name10"),
    document.getElementById("QP_CompName10"),
    document.getElementById("QP_Role10"),
    document.getElementById("QP_Date10"),
    document.getElementById("QP_Less_Name10"),
    document.getElementById("QP_Less_Desg10"),
    document.getElementById("QP_Less_CompName10"),
    document.getElementById("QP_Less_Date10")
  ];
  for (let element of elements) {
    element.value = "";
  }
}

function emptyPage12() {
  let elements = [
    document.getElementById("NonQP_Sign10"),
    document.getElementById("NonQP_Date10"),
    document.getElementById("NonQP_SignBy10"),
    document.getElementById("NonQP_CompName10"),
    document.getElementById("NonQP_Less_Sign10"),
    // document.getElementById("NonQP_Less_SignBy10"),
    document.getElementById("NonQP_Less_Name10")
  ];
  for (let element of elements) {
    element.value = "";
  }
}

function Rem8Years10_Yes_change(element) {
  let textbox = document.getElementById(element.id);
  if (validateEmail(textbox.value)) {
    textbox.removeAttribute("data-invalid");
    textbox.removeAttribute("data-invalid-message");
  } else {
    if (textbox.value.length == 0) {
      textbox.removeAttribute("data-invalid");
      textbox.removeAttribute("data-invalid-message");
    } else {
      textbox.setAttribute("data-invalid", "");
      textbox.setAttribute("data-invalid-message", "Invalid Format");
    }
  }
}

function D_Cont_change() {
  let textboxes = document.querySelectorAll("[group-id='D_Cont_id']");
  let pass = false;
  for (let textbox of textboxes) {
    if (!textbox.value.length == 0) {
      pass = true;
    }
  }
  if (pass) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("mandatory");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("mandatory", "");
    }
  }
}

function E_PropWorkInst_change(element) {
  let checkboxes = document.querySelectorAll("[group-id='E_PropWorkInst_id']");
  let textbox = document.getElementById("E_PropWorkInst_Yes_Text10");
  if (element.id === "E_PropWorkInst_YesNo10") {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
      checkbox.setAttribute("disabled", "");
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("hidden", "");
      textbox.value = "";
    }
  }
}
function E_PropWorkInst_Yes40_change(element) {
  let table = document.querySelector("[dieselTankTable]");
  let textbox = document.querySelectorAll("[dieselTankField]");
  if (element.checked) {
    for (let a of textbox) {
      a.removeAttribute("hidden");
      a.removeAttribute("disabled");
    }
    table.removeAttribute("hidden");
  } else {
    for (let a of textbox) {
      a.setAttribute("hidden", "");
      a.setAttribute("disabled", "");
      a.value = "";
    }
    table.setAttribute("hidden", "");
  }
}

function E_PropWorkInst_Yes50_change(element, textbox) {
  textbox = document.getElementById(textbox);
  let span = document.getElementById("otEqSpan");
  if (element.checked) {
    textbox.removeAttribute("disabled");
    textbox.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
    span.innerHTML = "(d) Other equipment, please state:*";
  } else {
    span.innerHTML = "(d) Other equipment, please state:";
    textbox.setAttribute("hidden", "");
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.value = "";
  }
}

function E_PropLandURA_change(element) {
  let textbox = document.getElementById("E_PropLandURA_YesNo30");

  if (element.id === "E_PropLandURA_YesNo20") {
    textbox.removeAttribute("hidden");
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("disabled", "");
    textbox.setAttribute("hidden", "");
    textbox.value = "";
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
function jtcMandatoryCheck_change(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  }
}

function disableTypeWorks(element) {
  let checkboxes = document.querySelectorAll("[group-id='EL_TypWork_id']");
  let URAPlan1 = document.getElementById("EL_SubmURAPlan10");
  let URAPlan2 = document.getElementById("EL_SubmURAPlan20");
  let c2 = document.getElementById("EL_TypWork_BCW40");
  let d2 = document.getElementById("EL_TypWork_RW10");
  let e2 = document.getElementById("EL_TypWork_Use10");
  let f2 = document.getElementById("EL_TypWork_Use20");

  let optCheckboxes = [
    document.getElementById("EL_TypWork_PS10"),
    document.getElementById("EL_TypWork_PS20"),
    document.getElementById("EL_TypWork_PS40")
  ];
  let othCheckboxes = [
    // document.getElementById("EL_TypWork_Oth10"),
    document.getElementById("EL_TypWork_Oth20")
  ];
  let pass = false;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      pass = true;
    }
  }

  if (element.id != "EL_SubmURAPlan10_No" && element.id != "EL_SubmURAPlan20_No") {
    if ((URAPlan2.checked && URAPlan1.checked) || URAPlan2.checked) {
      e2.removeAttribute("disabled");
      e2.setAttribute("mandatory", "");
      f2.removeAttribute("disabled");
      f2.setAttribute("mandatory", "");

      for (let a of optCheckboxes) {
        a.removeAttribute("disabled");
        a.setAttribute("mandatory", "");
        a.checked = false;
      }
      for (let b of othCheckboxes) {
        b.setAttribute("disabled", "");
        b.removeAttribute("mandatory");
        b.checked = false;
      }
      c2.setAttribute("disabled", "");
      c2.removeAttribute("mandatory");
      c2.removeAttribute("checked");
      c2.checked = false;
      // d2.setAttribute("disabled", "");
      // d2.removeAttribute("mandatory");
      // d2.removeAttribute("checked");
      // d2.checked = false;
    } else {
      if (URAPlan1.checked && !URAPlan2.checked) {
        c2.setAttribute("disabled", "");
        c2.removeAttribute("mandatory");
        c2.removeAttribute("checked");
        c2.checked = false;
        // d2.setAttribute("disabled", "");
        // d2.removeAttribute("mandatory");
        // d2.removeAttribute("checked");
        // d2.checked = false;
        e2.setAttribute("disabled", "");
        e2.removeAttribute("mandatory");
        e2.removeAttribute("checked");
        e2.checked = false;

        f2.setAttribute("disabled", "");
        f2.removeAttribute("mandatory");
        f2.removeAttribute("checked");
        f2.checked = false;
        for (let a of optCheckboxes) {
          a.setAttribute("disabled", "");
          a.removeAttribute("mandatory");
          a.checked = false;
        }
        for (let b of othCheckboxes) {
          b.setAttribute("disabled", "");
          b.removeAttribute("mandatory");
          b.checked = false;
        }
      }
    }

  } else {
    c2.removeAttribute("disabled");
    // d2.removeAttribute("disabled");
    e2.removeAttribute("disabled");
    f2.removeAttribute("disabled");
    for (let a of optCheckboxes) {
      a.removeAttribute("disabled");
      a.setAttribute("mandatory", "");
      a.checked = false;
    }
    for (let b of othCheckboxes) {
      b.removeAttribute("disabled");
      b.setAttribute("mandatory", "");
      b.checked = false;
    }
    if (pass == false) {
      c2.setAttribute("mandatory", "");
      // d2.setAttribute("mandatory", "");
      c2.setAttribute("checked", "");
      // d2.setAttribute("checked", "");
      e2.setAttribute("checked", "");
      f2.setAttribute("checked", "");
      e2.setAttribute("mandatory", "");
      f2.setAttribute("mandatory", "");
    }
  }


  EL_TypWork_PS40_change("EL_TypWork_PS40", "EL_TypWork_PS_Textbox10");
  EL_TypWork_Oth20_change("EL_TypWork_Oth20", "EL_TypWork_Oth_Textbox10")
}

function EL_TypWork_change() {
  let checkboxes = document.querySelectorAll("[group-id='EL_TypWork_id']");
  let pass = false;

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

function EL_PlanComm_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='EL_PlanAuthComm_YesNo']"
  );
  let pass = false;

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

function EL_PlanComm2_change() {
  let checkboxes = document.querySelectorAll(
    "[group-id='EL_PlanAuthChanOfUse_YesNo']"
  );
  let pass = false;

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

function EL_Exist_change() {
  let checkboxes = document.querySelectorAll("[group-id='EL_Exist_id']");
  let pass = false;

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

function EL_Propo_change() {
  let checkboxes = document.querySelectorAll("[group-id='EL_Proposed_id']");
  let pass = false;

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

function EL_Exist_Oth_change(el, field) {
  if (field != null) {
    if (el.checked) {
      document.getElementById(field).removeAttribute("hidden");
      document.getElementById(field).removeAttribute("disabled");
      document.getElementById(field).setAttribute("mandatory", "");
    } else {
      document.getElementById(field).setAttribute("hidden", "");
      document.getElementById(field).value = "";
      document.getElementById(field).setAttribute("disabled", "");
    }
  }
}

function EL_Propo_MedCli10_change(el) {
  if (el.checked) {
    document.getElementById("EL_Propo_MedCli20").removeAttribute("disabled");
    document.getElementById("EL_Propo_MedCli20").setAttribute("mandatory", "");
    document.getElementById("EL_Propo_MedCli20").setAttribute("checked", "");
    document.getElementById("EL_Propo_MedCli20_label").innerHTML = "*";
  } else {
    document.getElementById("EL_Propo_MedCli20").checked = false;
    document.getElementById("EL_Propo_MedCli20").removeAttribute("checked");
    document.getElementById("EL_Propo_MedCli20").removeAttribute("mandatory");
    document.getElementById("EL_Propo_MedCli20").setAttribute("disabled", "");
    document.getElementById("EL_Propo_MedCli20_label").innerHTML = "";
  }
}

function EL_Propo_MedCli20_change(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function EL_TypWork_PS40_change(element, textbox) {
  textbox = document.getElementById(textbox);
  if (element.checked) {
    textbox.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled", "");
  } else {
    textbox.setAttribute("hidden", "");
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function EL_TypWork_Oth20_change(element, textbox) {
  textbox = document.getElementById(textbox);
  if (element.checked) {
    textbox.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
    textbox.removeAttribute("disabled", "");
  } else {
    textbox.setAttribute("hidden", "");
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

function DetlGfa10_change(element, textboxT, groupID) {
  let totalTextbox = document.getElementById(textboxT);
  let textboxes = document.querySelectorAll("[group-id='" + groupID + "']");
  let total = 0;
  for (let textbox of textboxes) {
    if (textbox.value.length != 0) {
      total += parseFloat(textbox.value);
    }
  }
  if (total == 0) {
    totalTextbox.value = "";
  } else {
    totalTextbox.value = Number(Math.round(total + 'e3') + 'e-3').toFixed(3);;
  }
}

function EL_GreenCvrTotal_change(element, textboxT, groupID) {
  let totalTextbox = document.getElementById(textboxT);
  let textboxes = document.querySelectorAll("[group-id='" + groupID + "']");
  let total = 0;
  for (let textbox of textboxes) {
    if (textbox.value.length != 0) {
      total += parseFloat(textbox.value);
    }
  }
  if (total == 0) {
    totalTextbox.value = "";
  } else {
    totalTextbox.value = Number(Math.round(total + 'e3') + 'e-3').toFixed(3);;
  }
}

function EL_PlotRatio_change(element) {
  let radios = document.querySelectorAll("[group-id='EL_PlotRatio_id']");
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  }
}

function EL_BCWAesth_change(element) {
  let radios = document.querySelectorAll("[group-id='EL_BCWAesth_id']");
  let radios2 = document.querySelectorAll("[group-id='EL_BCWAesth_QP_id']");
  let groups = [
    "EL_BCWAesth_table10_id",
    "EL_BCWAesth_table20_id",
    "EL_BCWAesth_table30_id"
  ];
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
    }
    if (element.id === "EL_BCWAesth_YesNo10") {
      for (let radio of radios2) {
        radio.removeAttribute("disabled");
        radio.setAttribute("checked", "");
        radio.setAttribute("mandatory", "");
      }
    } else {
      for (let radio of radios2) {
        radio.checked = false;
        radio.setAttribute("disabled", "");
        radio.removeAttribute("checked", "");
        radio.removeAttribute("mandatory", "");
      }
      for (let i = 0; i < groups.length; i++) {
        let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
        for (let e of group) {
          e.setAttribute("disabled", "");
          e.removeAttribute("mandatory");
          if (e.checked) {
            e.checked = false;
            e.removeAttribute("checked");
          } else {
            e.value = "";
          }
        }
      }
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  }
}

function EL_BCWAesth_QP_change(element) {
  let group1 = document.querySelectorAll("[group-id='EL_BCWAesth_table10_id']");
  let group2 = document.querySelectorAll("[group-id='EL_BCWAesth_table20_id']");
  let group3 = document.querySelectorAll("[group-id='EL_BCWAesth_table30_id']");

  let group = document.querySelectorAll("[group-id='EL_BCWAesth_QP_id']");
  for (let e of group) {
    e.removeAttribute("checked");
    e.removeAttribute("mandatory");
  }
  if (element.id === "EL_BCWAesth_QP_YesNo20") {
    for (let e of group1) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
    for (let e of group2) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
    for (let e of group3) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
  } else {
    for (let e of group1) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
    for (let e of group2) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
    for (let e of group3) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
  }
}

function builcivi7_change() {
  let groups = [
    "EL_BCWAesth_table10_id",
    "EL_BCWAesth_table20_id",
    "EL_BCWAesth_table30_id"
  ];
  let pass2 = false;
  for (let i = 0; i < groups.length; i++) {
    let pass = 0;
    let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
    for (let element of group) {
      if (element.type === "radio") {
        if (element.checked) {
          pass++;
        }
      } else {
        if (!element.value.length == 0) {
          pass++;
        }
      }
    }
    if (pass == 3) {
      pass2 = true;
      break;
    }
  }
  if (pass2) {
    for (let i = 0; i < groups.length; i++) {
      let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
      for (let element of group) {
        element.removeAttribute("mandatory");
        if (element.hasAttribute("checked")) {
          element.removeAttribute("checked");
        }
      }
    }
  } else {
    for (let i = 0; i < groups.length; i++) {
      let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
      for (let element of group) {
        element.setAttribute("mandatory", "");
        element.value = element.value;
        if (element.hasAttribute("checked")) {
          element.setAttribute("checked", "");
        }
      }
    }
  }
}

function EL_ParkProv_change(element) {
  let fields1 = document.querySelectorAll("[group-id='EL_ParkProv_NoOfShow10_id']");
  let fields2 = document.querySelectorAll("[group-id='EL_ParkProv_NoOfLock10_id']");

  if (element.id == "EL_ParkProv_YesNo10") {
    for (let a of fields1) {
      a.setAttribute("mandatory", "");
      a.removeAttribute("disabled");
    }
    for (let b of fields2) {
      b.setAttribute("mandatory", "");
      b.removeAttribute("disabled");
    }
  } else {
    for (let a of fields1) {
      a.setAttribute("disabled", "");
      a.removeAttribute("mandatory");
      a.removeAttribute("not-filledup");
      a.value = "";
    }
    for (let b of fields2) {
      b.setAttribute("disabled", "");
      b.removeAttribute("mandatory");
      b.removeAttribute("not-filledup");
      b.value = "";
    }
  }
}
function EL_PlanDesg_change(element) {
  let radios = document.querySelectorAll("[group-id='EL_PlanDesg_id']");
  let radios2 = document.querySelectorAll("[group-id='EL_PlanDesg_QP_id']");
  let radios3 = document.querySelectorAll(
    "[group-id='EL_PlanDesg_EndTrip_id']"
  );
  let groups = [
    "EL_PlanDesg_group_10",
    "EL_PlanDesg_group_20",
    "EL_PlanDesg_group_30",
    "EL_PlanDesg_PubSec_id"
  ];
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
    }
    if (element.id === "EL_PlanDesg_YesNo10") {
      for (let radio of radios2) {
        radio.removeAttribute("disabled");
        radio.setAttribute("checked", "");
        radio.setAttribute("mandatory", "");
      }
      for (let radio of radios3) {
        radio.removeAttribute("disabled");
        radio.setAttribute("checked", "");
        radio.setAttribute("mandatory", "");
      }
    } else {
      for (let radio of radios2) {
        radio.checked = false;
        radio.setAttribute("disabled", "");
      }
      for (let radio of radios3) {
        radio.checked = false;
        radio.setAttribute("disabled", "");
        radio.removeAttribute("checked");
        radio.removeAttribute("mandatory");
      }
      for (let i = 0; i < groups.length; i++) {
        let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
        for (let e of group) {
          e.setAttribute("disabled", "");
          e.removeAttribute("mandatory");
          if (e.checked) {
            e.checked = false;
            e.removeAttribute("checked");
          } else {
            e.value = "";
          }
        }
      }
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  }
}

function EL_PlanDesg_QP_change(element) {
  let group1 = document.querySelectorAll("[group-id='EL_PlanDesg_group_10']");
  let group2 = document.querySelectorAll("[group-id='EL_PlanDesg_group_20']");
  let group3 = document.querySelectorAll("[group-id='EL_PlanDesg_group_30']");

  let group = document.querySelectorAll("[group-id='EL_PlanDesg_QP_id']");
  for (let e of group) {
    e.removeAttribute("mandatory");
    e.removeAttribute("checked");
  }
  if (element.id === "EL_PlanDesg_QP_YesNo20") {
    for (let e of group1) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
    for (let e of group2) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
    for (let e of group3) {
      e.removeAttribute("disabled");
      e.setAttribute("mandatory", "");
      if (e.hasAttribute("checked")) {
        e.setAttribute("checked", "");
      }
    }
  } else {
    for (let e of group1) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
    for (let e of group2) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
    for (let e of group3) {
      e.setAttribute("disabled", "");
      e.removeAttribute("mandatory");
      if (e.checked) {
        e.checked = false;
        e.removeAttribute("checked");
      } else {
        e.value = "";
      }
    }
  }
}

function QPapPDGa_change() {
  let groups = [
    "EL_PlanDesg_group_10",
    "EL_PlanDesg_group_20",
    "EL_PlanDesg_group_30"
  ];
  let pass2 = false;
  for (let i = 0; i < groups.length; i++) {
    let pass = 0;
    let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
    for (let element of group) {
      if (element.type === "radio") {
        if (element.checked) {
          pass++;
        }
      } else {
        if (!element.value.length == 0) {
          pass++;
        }
      }
    }
    if (pass == 3) {
      pass2 = true;
      break;
    }
  }
  if (pass2) {
    for (let i = 0; i < groups.length; i++) {
      let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
      for (let element of group) {
        element.removeAttribute("mandatory");
        if (element.hasAttribute("checked")) {
          element.removeAttribute("checked");
        }
      }
    }
  } else {
    for (let i = 0; i < groups.length; i++) {
      let group = document.querySelectorAll("[group-id='" + groups[i] + "']");
      for (let element of group) {
        element.setAttribute("mandatory", "");
        element.value = element.value;
        if (element.hasAttribute("checked")) {
          element.setAttribute("checked", "");
        }
      }
    }
  }
}

function EL_PlanDesg_EndTrip_change(element) {
  let radios = document.querySelectorAll("[group-id='EL_PlanDesg_EndTrip_id']");
  let group1 = document.querySelectorAll("[group-id='EL_PlanDesg_PubSec_id']");
  if (element.checked) {
    for (let radio of radios) {
      radio.removeAttribute("checked");
      radio.removeAttribute("mandatory");
    }
    if (element.id === "EL_PlanDesg_EndTrip_YesNo10") {
      for (let e of group1) {
        e.removeAttribute("disabled");
        e.setAttribute("mandatory", "");
      }
    } else {
      for (let e of group1) {
        e.setAttribute("disabled", "");
        e.removeAttribute("mandatory");
        e.value = "";
      }
    }
  } else {
    for (let radio of radios) {
      radio.setAttribute("checked", "");
      radio.setAttribute("mandatory", "");
    }
  }
}

function EL_FactDorm_change(element) {
  let radios = document.querySelectorAll("[name='EL_FactDorm_name']");
  let textboxes = document.querySelectorAll("[group-id='EL_FactDorm10_group']");
  let textboxes2 = document.querySelectorAll(
    "[group-id='EL_FactDorm20_group']"
  );
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  if (element.id === "EL_FactDorm10") {
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let textbox of textboxes2) {
      textbox.value = "";
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
  } else if (element.id === "EL_FactDorm20") {
    for (let textbox of textboxes2) {
      textbox.value = "";
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
  } else if (element.id === "EL_FactDorm30") {
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
    }
    for (let textbox of textboxes2) {
      textbox.value = "";
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
    }
  }
}

function EL_AncCant_change(element) {
  let radios = document.querySelectorAll("[name='EL_AncCant_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function EL_RemLease_change() {
  let radios = document.querySelectorAll("[name='EL_RemLease_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function FL_QPComp_change() {
  let radios = document.querySelectorAll("[name='FL_QPComp_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function FB_QPComp_change() {
  let radios = document.querySelectorAll("[name='FB_QPComp_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function FB_QPComp_change20() {
  let radios = document.querySelectorAll("[name='FB_QPComp_name20']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function EL_ContTerms_change() {
  let radios = document.querySelectorAll("[name='EL_ContTerms_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
}

function EL_SolarPV_name_change(element) {
  let radios = document.querySelectorAll("[name='EL_SolarPV_name']");
  let textboxes = document.querySelectorAll(
    "[group-id='EL_SolarPV_Yes10_group']"
  );
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  if (element.id === "EL_SolarPV_Yes10") {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.value = "";
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("disabled", "");
    }
  }
}

function EB_CommWorks100_change(element, textbox, hideDiv) {
  textbox = document.getElementById(textbox);
  hideDiv = document.getElementById(hideDiv);
  if (element.checked) {
    hideDiv.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
    hideDiv.setAttribute("hidden", "");
    textbox.value = "";
  }
}

function EB_ExtWorks90_change(element, textbox) {
  textbox = document.getElementById(textbox);
  if (element.checked) {
    textbox.removeAttribute("hidden");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.removeAttribute("mandatory");
    textbox.setAttribute("hidden", "");
    textbox.value = "";
  }
}

function ElDetaComputeExistPercent() {
  let totalExistGFA = document.getElementById("DetlGfa_TotaGFA10");
  DetlGfa10_change(0, "DetlGfa_TotaGFA10", "DetlGfa10_id");
  //////Clean Industry
  let IndusMain = document.getElementById("DetlGfa_PrimUse_Ind10");
  let Induspercent = document.getElementById("DetlGfa_PrimUse_Ind20");
  let overAllIndusMain = document.getElementById("DetlGfa_PrimUse_Ind50");
  if (IndusMain.value) {
    let IndusResult = (parseFloat(IndusMain.value) / totalExistGFA.value) * 100;
    if (isNaN(IndusResult) || IndusResult == Infinity) {
      Induspercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Induspercent.value = Number(Math.round(IndusResult + 'e2') + 'e-2').toFixed(2);
      if (overAllIndusMain.value) {
        document.getElementById("DetlGfa_PrimUse_Ind30").value =
          (parseFloat(overAllIndusMain.value) - parseFloat(IndusMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Induspercent.value = "";
    let IndusMainVal = !isNaN(parseFloat(IndusMain.value)) ? parseFloat(IndusMain.value) : 0
    let overAllIndusMainVal = !isNaN(parseFloat(overAllIndusMain.value)) ? parseFloat(overAllIndusMain.value) : 0
    document.getElementById("DetlGfa_PrimUse_Ind30").value =
      (parseFloat(overAllIndusMainVal) - parseFloat(IndusMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///General Industry
  let GenMain = document.getElementById("DetlGfa_PredUse_GenInd10");
  let Genpercent = document.getElementById("DetlGfa_PredUse_GenInd20");
  let overAllGenMain = document.getElementById("DetlGfa_PredUse_GenInd50");
  if (GenMain.value) {
    let GenResult = (parseFloat(GenMain.value) / totalExistGFA.value) * 100;
    if (isNaN(GenResult) || GenResult == Infinity) {
      Genpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Genpercent.value = Number(Math.round(GenResult + 'e2') + 'e-2').toFixed(2);
      if (overAllGenMain.value) {
        document.getElementById("DetlGfa_PredUse_GenInd30").value =
          (parseFloat(overAllGenMain.value) - parseFloat(GenMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Genpercent.value = "";
    let GenMainVal = !isNaN(parseFloat(GenMain.value)) ? parseFloat(GenMain.value) : 0
    let overAllGenMainVal = !isNaN(parseFloat(overAllGenMain.value)) ? parseFloat(overAllGenMain.value) : 0
    document.getElementById("DetlGfa_PredUse_GenInd30").value =
      (parseFloat(overAllGenMainVal) - parseFloat(GenMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Special Industry
  let SpecMain = document.getElementById("DetlGfa_PredUse_SpecInd10");
  let Specpercent = document.getElementById("DetlGfa_PredUse_SpecInd20");
  let overAllSpecMain = document.getElementById("DetlGfa_PredUse_SpecInd50");
  if (SpecMain.value) {
    let SpecResult = (parseFloat(SpecMain.value) / totalExistGFA.value) * 100;
    if (isNaN(SpecResult) || SpecResult == Infinity) {
      Specpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Specpercent.value = Number(Math.round(SpecResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSpecMain.value) {
        document.getElementById("DetlGfa_PredUse_SpecInd30").value =
          ((overAllSpecMain.value) - parseFloat(SpecMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Specpercent.value = "";
    let SpecMainVal = !isNaN(parseFloat(SpecMain.value)) ? parseFloat(SpecMain.value) : 0
    let overAllSpecMainVal = !isNaN(parseFloat(overAllSpecMain.value)) ? parseFloat(overAllSpecMain.value) : 0
    document.getElementById("DetlGfa_PredUse_SpecInd30").value =
      (parseFloat(overAllSpecMainVal) - parseFloat(SpecMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Business Park
  let BusiParkMain = document.getElementById("DetlGfa_PrimUse_BusiPark10");
  let BusiParkpercent = document.getElementById("DetlGfa_PrimUse_BusiPark20");
  let overAllBusiParkMain = document.getElementById(
    "DetlGfa_PrimUse_BusiPark50"
  );
  if (BusiParkMain.value) {
    let BusiParkResult = (BusiParkMain.value / totalExistGFA.value) * 100;
    if (isNaN(BusiParkResult) || BusiParkResult == Infinity) {
      BusiParkpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      BusiParkpercent.value = Number(Math.round(BusiParkResult + 'e2') + 'e-2').toFixed(2);

      if (overAllBusiParkMain.value) {
        document.getElementById("DetlGfa_PrimUse_BusiPark30").value =
          (parseFloat(overAllBusiParkMain.value) - parseFloat(BusiParkMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    BusiParkpercent.value = "";
    let BusiParkMainVal = !isNaN(parseFloat(BusiParkMain.value)) ? parseFloat(BusiParkMain.value) : 0
    let overAllBusiParkMainVal = !isNaN(parseFloat(overAllBusiParkMain.value)) ? parseFloat(overAllBusiParkMain.value) : 0
    document.getElementById("DetlGfa_PrimUse_BusiPark30").value =
      (parseFloat(overAllBusiParkMainVal) - parseFloat(BusiParkMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Office
  let AOMain = document.getElementById("DetlGfa_SecoUse_AnciOffi10");
  let AOpercent = document.getElementById("DetlGfa_SecoUse_AnciOffi20");
  let overAllAOMain = document.getElementById("DetlGfa_SecoUse_AnciOffi50");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalExistGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity) {
      AOpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      AOpercent.value = Number(Math.round(AOResult + 'e2') + 'e-2').toFixed(2);
      if (overAllAOMain.value) {
        document.getElementById("DetlGfa_SecoUse_AnciOffi30").value =
          (parseFloat(overAllAOMain.value) - parseFloat(AOMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    AOpercent.value = "";
    let AOMainVal = !isNaN(parseFloat(AOMain.value)) ? parseFloat(AOMain.value) : 0
    let overAllAOMainVal = !isNaN(parseFloat(overAllAOMain.value)) ? parseFloat(overAllAOMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_AnciOffi30").value =
      (parseFloat(overAllAOMainVal) - parseFloat(AOMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Childcare Centre
  let OAMain = document.getElementById("DetlGfa_SecoUse_OthAnci10");
  let OApercent = document.getElementById("DetlGfa_SecoUse_OthAnci20");
  let overAllOAMain = document.getElementById("DetlGfa_SecoUse_OthAnci50");
  if (OAMain.value) {
    let OAResult = (OAMain.value / totalExistGFA.value) * 100;
    if (isNaN(OAResult) || OAResult == Infinity) {
      OApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      OApercent.value = Number(Math.round(OAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllOAMain.value) {
        document.getElementById("DetlGfa_SecoUse_OthAnci30").value =
          (parseFloat(overAllOAMain.value) - parseFloat(OAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    OApercent.value = "";
    let OAMainVal = !isNaN(parseFloat(OAMain.value)) ? parseFloat(OAMain.value) : 0
    let overAllOAMainVal = !isNaN(parseFloat(overAllOAMain.value)) ? parseFloat(overAllOAMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_OthAnci30").value =
      (parseFloat(overAllOAMainVal) - parseFloat(OAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Canteen
  let ACMain = document.getElementById("DetlGfa_SecoUse_AnciCant10");
  let overAllACMain = document.getElementById("DetlGfa_SecoUse_AnciCant50");
  let ACpercent = document.getElementById("DetlGfa_SecoUse_AnciCant20");
  if (ACMain.value) {
    let ACResult = (ACMain.value / totalExistGFA.value) * 100;
    if (isNaN(ACResult) || ACResult == Infinity) {
      ACpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      ACpercent.value = Number(Math.round(ACResult + 'e2') + 'e-2').toFixed(2);
      if (overAllACMain.value) {
        document.getElementById("DetlGfa_SecoUse_AnciCant30").value =
          (parseFloat(overAllACMain.value) - parseFloat(ACMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    ACpercent.value = "";
    let ACMainVal = !isNaN(parseFloat(ACMain.value)) ? parseFloat(ACMain.value) : 0
    let overAllACMainVal = !isNaN(parseFloat(overAllACMain.value)) ? parseFloat(overAllACMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_AnciCant30").value =
      (parseFloat(overAllACMainVal) - parseFloat(ACMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Interim Urban Farming
  let IUAMain = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm10");
  let overAllIUAMain = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm50");
  let IUApercent = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm20");
  if (IUAMain.value) {
    let IUAResult = (IUAMain.value / totalExistGFA.value) * 100;
    if (isNaN(IUAResult) || IUAResult == Infinity) {
      IUApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      IUApercent.value = Number(Math.round(IUAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllIUAMain.value) {
        document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
          (parseFloat(overAllIUAMain.value) - parseFloat(IUAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    IUApercent.value = "";
    let IUAMainVal = !isNaN(parseFloat(IUAMain.value)) ? parseFloat(IUAMain.value) : 0
    let overAllIUAMainVal = !isNaN(parseFloat(overAllIUAMain.value)) ? parseFloat(overAllIUAMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
      (parseFloat(overAllIUAMainVal) - parseFloat(IUAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Selected Commercial Use
  let SCUMain = document.getElementById("DetlGfa_AnciUse_SeleCommUse10");
  let overAllSCUMain = document.getElementById("DetlGfa_AnciUse_SeleCommUse50");
  let SCUpercent = document.getElementById("DetlGfa_AnciUse_SeleCommUse20");
  if (SCUMain.value) {
    let SCUResult = (SCUMain.value / totalExistGFA.value) * 100;
    if (isNaN(SCUResult) || SCUResult == Infinity) {
      SCUpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      SCUpercent.value = Number(Math.round(SCUResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSCUMain.value) {
        document.getElementById("DetlGfa_AnciUse_SeleCommUse30").value =
          (parseFloat(overAllSCUMain.value) - parseFloat(SCUMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    SCUpercent.value = "";
    let SCUMainVal = !isNaN(parseFloat(SCUMain.value)) ? parseFloat(SCUMain.value) : 0
    let overAllSCUMainVal = !isNaN(parseFloat(overAllSCUMain.value)) ? parseFloat(overAllSCUMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_SeleCommUse30").value =
      (parseFloat(overAllSCUMainVal) - parseFloat(SCUMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Showroom
  let ShowMain = document.getElementById("DetlGfa_AnciUse_Show10");
  let overAllShowMain = document.getElementById("DetlGfa_AnciUse_Show50");
  let Showpercent = document.getElementById("DetlGfa_AnciUse_Show20");
  if (ShowMain.value) {
    let ShowResult = (ShowMain.value / totalExistGFA.value) * 100;
    if (isNaN(ShowResult) || ShowResult == Infinity) {
      Showpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Showpercent.value = Number(Math.round(ShowResult + 'e2') + 'e-2').toFixed(2);
      if (overAllShowMain.value) {
        document.getElementById("DetlGfa_AnciUse_Show30").value =
          (parseFloat(overAllShowMain.value) - parseFloat(ShowMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Showpercent.value = "";
    let ShowMainVal = !isNaN(parseFloat(ShowMain.value)) ? parseFloat(ShowMain.value) : 0
    let overAllShowMainVal = !isNaN(parseFloat(overAllShowMain.value)) ? parseFloat(overAllShowMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_Show30").value =
      (parseFloat(overAllShowMainVal) - parseFloat(ShowMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Ancillary
  let WDMain = document.getElementById("DetlGfa_SecoUse_WorkDorm10");
  let overAllWDMain = document.getElementById("DetlGfa_SecoUse_WorkDorm50");
  let WDpercent = document.getElementById("DetlGfa_SecoUse_WorkDorm20");
  if (WDMain.value) {
    let WDResult = (WDMain.value / totalExistGFA.value) * 100;
    if (isNaN(WDResult) || WDResult == Infinity) {
      WDpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      WDpercent.value = Number(Math.round(WDResult + 'e2') + 'e-2').toFixed(2);
      if (overAllWDMain.value) {
        document.getElementById("DetlGfa_SecoUse_WorkDorm30").value =
          (parseFloat(overAllWDMain.value) - parseFloat(WDMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    WDpercent.value = "";
    let WDMainVal = !isNaN(parseFloat(WDMain.value)) ? parseFloat(WDMain.value) : 0
    let overAllWDMainVal = !isNaN(parseFloat(overAllWDMain.value)) ? parseFloat(overAllWDMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_WorkDorm30").value =
      (parseFloat(overAllWDMainVal) - parseFloat(WDMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Secondary
  let SecoMain = document.getElementById("DetlGfa_AnciUse_Seco10");
  let overAllSecoMain = document.getElementById("DetlGfa_AnciUse_Seco50");
  let Secopercent = document.getElementById("DetlGfa_AnciUse_Seco20");
  if (SecoMain.value) {
    let SecoResult = (SecoMain.value / totalExistGFA.value) * 100;
    if (isNaN(SecoResult) || SecoResult == Infinity) {
      Secopercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Secopercent.value = Number(Math.round(SecoResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSecoMain.value) {
        document.getElementById("DetlGfa_AnciUse_Seco30").value =
          (parseFloat(overAllSecoMain.value) - parseFloat(SecoMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Secopercent.value = "";
    let SecoMainVal = !isNaN(parseFloat(SecoMain.value)) ? parseFloat(SecoMain.value) : 0
    let overAllSecoMainVal = !isNaN(parseFloat(overAllSecoMain.value)) ? parseFloat(overAllSecoMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_Seco30").value =
      (parseFloat(overAllSecoMainVal) - parseFloat(SecoMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///White Use Childcare Centre
  let CCMain = document.getElementById("DetlGfa_WhiteUse_ChilCent10");
  let overAllCCMain = document.getElementById("DetlGfa_WhiteUse_ChilCent50");
  let CCpercent = document.getElementById("DetlGfa_WhiteUse_ChilCent20");
  if (CCMain.value) {
    let CCResult = (CCMain.value / totalExistGFA.value) * 100;
    if (isNaN(CCResult) || CCResult == Infinity) {
      CCpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      CCpercent.value = Number(Math.round(CCResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCCMain.value) {
        document.getElementById("DetlGfa_WhiteUse_ChilCent30").value =
          (parseFloat(overAllCCMain.value) - parseFloat(CCMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    CCpercent.value = "";
    let CCMainVal = !isNaN(parseFloat(CCMain.value)) ? parseFloat(CCMain.value) : 0
    let overAllCCMainVal = !isNaN(parseFloat(overAllCCMain.value)) ? parseFloat(overAllCCMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_ChilCent30").value =
      (parseFloat(overAllCCMainVal) - parseFloat(CCMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Civic and Community Institution
  let CCIMain = document.getElementById("DetlGfa_WhiteUse_CiviCommInst10");
  let overAllCCIMain = document.getElementById("DetlGfa_WhiteUse_CiviCommInst50");
  let CCIpercent = document.getElementById("DetlGfa_WhiteUse_CiviCommInst20");
  if (CCIMain.value) {
    let CCIResult = (CCIMain.value / totalExistGFA.value) * 100;
    if (isNaN(CCIResult) || CCIResult == Infinity) {
      CCIpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      CCIpercent.value = Number(Math.round(CCIResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCCIMain.value) {
        document.getElementById("DetlGfa_WhiteUse_CiviCommInst30").value =
          (parseFloat(overAllCCIMain.value) - parseFloat(CCIMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    CCIpercent.value = "";
    let CCIMainVal = !isNaN(parseFloat(CCIMain.value)) ? parseFloat(CCIMain.value) : 0
    let overAllCCIMainVal = !isNaN(parseFloat(overAllCCIMain.value)) ? parseFloat(overAllCCIMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst30").value =
      (parseFloat(overAllCCIMainVal) - parseFloat(CCIMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Commercial Office
  let COMain = document.getElementById("DetlGfa_WhiteUse_CommOffi10");
  let overAllCOMain = document.getElementById("DetlGfa_WhiteUse_CommOffi50");
  let COpercent = document.getElementById("DetlGfa_WhiteUse_CommOffi20");
  if (COMain.value) {
    let COResult = (COMain.value / totalExistGFA.value) * 100;
    if (isNaN(COResult) || COResult == Infinity) {
      COpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      COpercent.value = Number(Math.round(COResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCOMain.value) {
        document.getElementById("DetlGfa_WhiteUse_CommOffi30").value =
          (parseFloat(overAllCOMain.value) - parseFloat(COMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    COpercent.value = "";
    let COMainVal = !isNaN(parseFloat(COMain.value)) ? parseFloat(COMain.value) : 0
    let overAllCOMainVal = !isNaN(parseFloat(overAllCOMain.value)) ? parseFloat(overAllCOMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_CommOffi30").value =
      (parseFloat(overAllCOMainVal) - parseFloat(COMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Educational Institution
  let EIMain = document.getElementById("DetlGfa_WhiteUse_EducInst10");
  let overAllEIMain = document.getElementById("DetlGfa_WhiteUse_EducInst50");
  let EIpercent = document.getElementById("DetlGfa_WhiteUse_EducInst20");
  if (EIMain.value) {
    let EIResult = (EIMain.value / totalExistGFA.value) * 100;
    if (isNaN(EIResult) || EIResult == Infinity) {
      EIpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      EIpercent.value = Number(Math.round(EIResult + 'e2') + 'e-2').toFixed(2);
      if (overAllEIMain.value) {
        document.getElementById("DetlGfa_WhiteUse_EducInst30").value =
          (parseFloat(overAllEIMain.value) - parseFloat(EIMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    EIpercent.value = "";
    let EIMainVal = !isNaN(parseFloat(EIMain.value)) ? parseFloat(EIMain.value) : 0
    let overAllEIMainVal = !isNaN(parseFloat(overAllEIMain.value)) ? parseFloat(overAllEIMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_EducInst30").value =
      (parseFloat(overAllEIMainVal) - parseFloat(EIMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Hotel
  let HSAMain = document.getElementById("DetlGfa_SecoUse_HoteServApt10");
  let overAllHSAMain = document.getElementById("DetlGfa_SecoUse_HoteServApt50");
  let HSApercent = document.getElementById("DetlGfa_SecoUse_HoteServApt20");
  if (HSAMain.value) {
    let HSAResult = (HSAMain.value / totalExistGFA.value) * 100;
    if (isNaN(HSAResult) || HSAResult == Infinity) {
      HSApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      HSApercent.value = Number(Math.round(HSAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllHSAMain.value) {
        document.getElementById("DetlGfa_SecoUse_HoteServApt30").value =
          (parseFloat(overAllHSAMain.value) - parseFloat(HSAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    HSApercent.value = "";
    let HSAMainVal = !isNaN(parseFloat(HSAMain.value)) ? parseFloat(HSAMain.value) : 0
    let overAllHSAMainVal = !isNaN(parseFloat(overAllHSAMain.value)) ? parseFloat(overAllHSAMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_HoteServApt30").value =
      (parseFloat(overAllHSAMainVal) - parseFloat(HSAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Mechanical & Electrical
  let MEMain = document.getElementById("DetlGfa_WhiteUse_MechElec10");
  let overAllMEMain = document.getElementById("DetlGfa_WhiteUse_MechElec50");
  let MEpercent = document.getElementById("DetlGfa_WhiteUse_MechElec20");
  if (MEMain.value) {
    let MEResult = (MEMain.value / totalExistGFA.value) * 100;
    if (isNaN(MEResult) || MEResult == Infinity) {
      MEpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      MEpercent.value = Number(Math.round(MEResult + 'e2') + 'e-2').toFixed(2);
      if (overAllMEMain.value) {
        document.getElementById("DetlGfa_WhiteUse_MechElec30").value =
          (parseFloat(overAllMEMain.value) - parseFloat(MEMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    MEpercent.value = "";
    let MEMainVal = !isNaN(parseFloat(MEMain.value)) ? parseFloat(MEMain.value) : 0
    let overAllMEMainVal = !isNaN(parseFloat(overAllMEMain.value)) ? parseFloat(overAllMEMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_MechElec30").value =
      (parseFloat(overAllMEMainVal) - parseFloat(MEMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Medical Clinic
  let MCMain = document.getElementById("DetlGfa_WhiteUse_MediClin10");
  let overAllMCMain = document.getElementById("DetlGfa_WhiteUse_MediClin50");
  let MCpercent = document.getElementById("DetlGfa_WhiteUse_MediClin20");
  if (MCMain.value) {
    let MCResult = (MCMain.value / totalExistGFA.value) * 100;
    if (isNaN(MCResult) || MCResult == Infinity) {
      MCpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      MCpercent.value = Number(Math.round(MCResult + 'e2') + 'e-2').toFixed(2);
      if (overAllMCMain.value) {
        document.getElementById("DetlGfa_WhiteUse_MediClin30").value =
          (parseFloat(overAllMCMain.value) - parseFloat(MCMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    MCpercent.value = "";
    let MCMainVal = !isNaN(parseFloat(MCMain.value)) ? parseFloat(MCMain.value) : 0
    let overAllMCMainVal = !isNaN(parseFloat(overAllMCMain.value)) ? parseFloat(overAllMCMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_MediClin30").value =
      (parseFloat(overAllMCMainVal) - parseFloat(MCMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Residential
  let ResiMain = document.getElementById("DetlGfa_WhiteUse_Resi10");
  let overAllResiMain = document.getElementById("DetlGfa_WhiteUse_Resi50");
  let Resipercent = document.getElementById("DetlGfa_WhiteUse_Resi20");
  if (ResiMain.value) {
    let ResiResult = (ResiMain.value / totalExistGFA.value) * 100;
    if (isNaN(ResiResult) || ResiResult == Infinity) {
      Resipercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Resipercent.value = Number(Math.round(ResiResult + 'e2') + 'e-2').toFixed(2);
      if (overAllResiMain.value) {
        document.getElementById("DetlGfa_WhiteUse_Resi30").value =
          (parseFloat(overAllResiMain.value) - parseFloat(ResiMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Resipercent.value = "";
    let ResiMainVal = !isNaN(parseFloat(ResiMain.value)) ? parseFloat(ResiMain.value) : 0
    let overAllResiMainVal = !isNaN(parseFloat(overAllResiMain.value)) ? parseFloat(overAllResiMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_Resi30").value =
      (parseFloat(overAllResiMainVal) - parseFloat(ResiMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  //Serviced Apartments
  let SAMain = document.getElementById("DetlGfa_WhiteUse_ServApar10");
  let overAllSAMain = document.getElementById("DetlGfa_WhiteUse_ServApar50");
  let SApercent = document.getElementById("DetlGfa_WhiteUse_ServApar20");
  if (SAMain.value) {
    let SAResult = (SAMain.value / totalExistGFA.value) * 100;
    if (isNaN(SAResult) || SAResult == Infinity) {
      SApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      SApercent.value = Number(Math.round(SAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSAMain.value) {
        document.getElementById("DetlGfa_WhiteUse_ServApar30").value =
          (parseFloat(overAllSAMain.value) - parseFloat(SAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    SApercent.value = "";
    let SAMainVal = !isNaN(parseFloat(SAMain.value)) ? parseFloat(SAMain.value) : 0
    let overAllSAMainVal = !isNaN(parseFloat(overAllSAMain.value)) ? parseFloat(overAllSAMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_ServApar30").value =
      (parseFloat(overAllSAMainVal) - parseFloat(SAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Retail/Shop
  let RSMain = document.getElementById("DetlGfa_SecoUse_RetaShop10");
  let overAllRSMain = document.getElementById("DetlGfa_SecoUse_RetaShop50");
  let RSpercent = document.getElementById("DetlGfa_SecoUse_RetaShop20");
  if (RSMain.value) {
    let RSResult = (RSMain.value / totalExistGFA.value) * 100;
    if (isNaN(RSResult) || RSResult == Infinity) {
      RSpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      RSpercent.value = Number(Math.round(RSResult + 'e2') + 'e-2').toFixed(2);
      if (overAllRSMain.value) {
        document.getElementById("DetlGfa_SecoUse_RetaShop30").value =
          (parseFloat(overAllRSMain.value) - parseFloat(RSMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    RSpercent.value = "";
    let RSMainVal = !isNaN(parseFloat(RSMain.value)) ? parseFloat(RSMain.value) : 0
    let overAllRSMainVal = !isNaN(parseFloat(overAllRSMain.value)) ? parseFloat(overAllRSMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_RetaShop30").value =
      (parseFloat(overAllRSMainVal) - parseFloat(RSMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///F&B
  let FBMain = document.getElementById("DetlGfa_SecoUse_FB10");
  let overAllFBMain = document.getElementById("DetlGfa_SecoUse_FB50");
  let FBpercent = document.getElementById("DetlGfa_SecoUse_FB20");
  if (FBMain.value) {
    let FBResult = (FBMain.value / totalExistGFA.value) * 100;
    if (isNaN(FBResult) || FBResult == Infinity) {
      FBpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      FBpercent.value = Number(Math.round(FBResult + 'e2') + 'e-2').toFixed(2);
      if (overAllFBMain.value) {
        document.getElementById("DetlGfa_SecoUse_FB30").value =
          (parseFloat(overAllFBMain.value) - parseFloat(FBMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    FBpercent.value = "";
    let FBMainVal = !isNaN(parseFloat(FBMain.value)) ? parseFloat(FBMain.value) : 0
    let overAllFBMainVal = !isNaN(parseFloat(overAllFBMain.value)) ? parseFloat(overAllFBMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_FB30").value =
      (parseFloat(overAllFBMainVal) - parseFloat(FBMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Others 1

  for (let a of document.querySelectorAll("[parent = 'other1']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "")
    let Others1Main = document.getElementById("DetlGfa_SecoUse_Oth2" + index);
    let overAllOthers1Main = document.getElementById("DetlGfa_SecoUse_Oth6" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse_Oth3" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalExistGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
        ElDetaComputeProposedPercent();
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
        if (overAllOthers1Main.value) {
          document.getElementById("DetlGfa_SecoUse_Oth4" + index).value =
            (parseFloat(overAllOthers1Main.value) - parseFloat(Others1Main.value)).toFixed(3);
          ElDetaComputeProposedPercent();
        }
      }
    } else {
      Others1percent.value = "";
      let Others1MainVal = !isNaN(parseFloat(Others1Main.value)) ? parseFloat(Others1Main.value) : 0
      let overAllOthers1MainVal = !isNaN(parseFloat(overAllOthers1Main.value)) ? parseFloat(overAllOthers1Main.value) : 0
      document.getElementById("DetlGfa_SecoUse_Oth4" + index).value =
        (parseFloat(overAllOthers1MainVal) - parseFloat(Others1MainVal)).toFixed(3);
      ElDetaComputeProposedPercent();
    }
  }
  ///Others 2
  for (let a of document.querySelectorAll("[parent = 'other2']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "")
    let Others1Main = document.getElementById("DetlGfa_SecoUse2_Oth2" + index);
    let overAllOthers1Main = document.getElementById("DetlGfa_SecoUse2_Oth6" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse2_Oth3" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalExistGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
        ElDetaComputeProposedPercent();
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
        if (overAllOthers1Main.value) {
          document.getElementById("DetlGfa_SecoUse2_Oth4" + index).value =
            (parseFloat(overAllOthers1Main.value) - parseFloat(Others1Main.value)).toFixed(3);
          ElDetaComputeProposedPercent();
        }
      }
    } else {
      Others1percent.value = "";
      let Others1MainVal = !isNaN(parseFloat(Others1Main.value)) ? parseFloat(Others1Main.value) : 0
      let overAllOthers1MainVal = !isNaN(parseFloat(overAllOthers1Main.value)) ? parseFloat(overAllOthers1Main.value) : 0
      document.getElementById("DetlGfa_SecoUse2_Oth4" + index).value =
        (parseFloat(overAllOthers1MainVal) - parseFloat(Others1MainVal)).toFixed(3);
      ElDetaComputeProposedPercent();
    }
  }


  // ///Others 2
  // let Others2Main = document.getElementById("DetlGfa_SecoUse_Oth220");
  // let overAllOthers2Main = document.getElementById("DetlGfa_SecoUse_Oth260");
  // let Others2percent = document.getElementById("DetlGfa_SecoUse_Oth230");
  // if (Others2Main.value) {
  //   let Others2Result = (Others2Main.value / totalExistGFA.value) * 100;
  //   if (isNaN(Others2Result) || Others2Result == Infinity) {
  //     Others2percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others2percent.value = Number(Math.round(Others2Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers2Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth240").value =
  //         (parseFloat(Others2Main.value) - parseFloat(overAllOthers2Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others2percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  // ///Others 3
  // let Others3Main = document.getElementById("DetlGfa_SecoUse_Oth320");
  // let overAllOthers3Main = document.getElementById("DetlGfa_SecoUse_Oth360");
  // let Others3percent = document.getElementById("DetlGfa_SecoUse_Oth330");
  // if (Others3Main.value) {
  //   let Others3Result = (Others3Main.value / totalExistGFA.value) * 100;
  //   if (isNaN(Others3Result) || Others3Result == Infinity) {
  //     Others3percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others3percent.value = Number(Math.round(Others3Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers3Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth340").value =
  //         (parseFloat(Others3Main.value) - parseFloat(overAllOthers3Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others3percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  // ///Others 4
  // let Others4Main = document.getElementById("DetlGfa_SecoUse_Oth420");
  // let overAllOthers4Main = document.getElementById("DetlGfa_SecoUse_Oth460");
  // let Others4percent = document.getElementById("DetlGfa_SecoUse_Oth430");
  // if (Others4Main.value) {
  //   let Others4Result = (Others4Main.value / totalExistGFA.value) * 100;
  //   if (isNaN(Others4Result) || Others4Result == Infinity) {
  //     Others4percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others4percent.value = Number(Math.round(Others4Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers4Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth440").value =
  //         (parseFloat(Others4Main.value) - parseFloat(overAllOthers4Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others4percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  // ///Others 5
  // let Others5Main = document.getElementById("DetlGfa_SecoUse_Oth520");
  // let overAllOthers5Main = document.getElementById("DetlGfa_SecoUse_Oth560");
  // let Others5percent = document.getElementById("DetlGfa_SecoUse_Oth530");
  // if (Others5Main.value) {
  //   let Others5Result = (Others5Main.value / totalExistGFA.value) * 100;
  //   if (isNaN(Others5Result) || Others5Result == Infinity) {
  //     Others5percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others5percent.value = Number(Math.round(Others5Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers5Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth540").value =
  //         (parseFloat(Others5Main.value) - parseFloat(overAllOthers5Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others5percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  //Existing PR
  let existPR = document.getElementById("DetlGfa_ExisPR10");
  let landArea = document.getElementById("EL_LandArea10");
  let result = totalExistGFA.value / landArea.value;
  if (landArea.value && totalExistGFA.value) {
    existPR.value = result.toFixed(3);
  } else {
    existPR.value = "";
  }
}

function ElDetaComputeProposedPercent() {
  let totalProposedGFA = document.getElementById("DetlGfa_TotaGFA20");
  DetlGfa10_change(0, "DetlGfa_TotaGFA20", "DetlGfa20_id");

  //////Clean Industry
  let IndusMain = document.getElementById("DetlGfa_PrimUse_Ind30");
  let Induspercent = document.getElementById("DetlGfa_PrimUse_Ind40");
  if (IndusMain.value) {
    let IndusResult = (IndusMain.value / totalProposedGFA.value) * 100;
    if (isNaN(IndusResult) || IndusResult == Infinity) {
      Induspercent.value = 0;
    } else {
      Induspercent.value = Number(Math.round(IndusResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Induspercent.value = "";
  }
  //General Industry
  let GenMain = document.getElementById("DetlGfa_PredUse_GenInd30");
  let Genpercent = document.getElementById("DetlGfa_PredUse_GenInd40");
  if (GenMain.value) {
    let GenResult = (GenMain.value / totalProposedGFA.value) * 100;
    if (isNaN(GenResult) || GenResult == Infinity) {
      Genpercent.value = 0;
    } else {
      Genpercent.value = Number(Math.round(GenResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Genpercent.value = "";
  }
  ///Special Industry
  let SpecMain = document.getElementById("DetlGfa_PredUse_SpecInd30");
  let Specpercent = document.getElementById("DetlGfa_PredUse_SpecInd40");
  if (SpecMain.value) {
    let SpecResult = (SpecMain.value / totalProposedGFA.value) * 100;
    if (isNaN(SpecResult) || SpecResult == Infinity) {
      Specpercent.value = 0;
    } else {
      Specpercent.value = Number(Math.round(SpecResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Specpercent.value = "";
  }
  ///Business Park
  let BusiParkMain = document.getElementById("DetlGfa_PrimUse_BusiPark30");
  let BusiParkpercent = document.getElementById("DetlGfa_PrimUse_BusiPark40");
  if (BusiParkMain.value) {
    let BusiParkResult = (BusiParkMain.value / totalProposedGFA.value) * 100;
    if (isNaN(BusiParkResult) || BusiParkResult == Infinity) {
      BusiParkpercent.value = 0;
    } else {
      BusiParkpercent.value = Number(Math.round(BusiParkResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    BusiParkpercent.value = "";
  }

  ///Ancillary Office
  let AOMain = document.getElementById("DetlGfa_SecoUse_AnciOffi30");
  let AOpercent = document.getElementById("DetlGfa_SecoUse_AnciOffi40");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalProposedGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity) {
      AOpercent.value = 0;
    } else {
      AOpercent.value = Number(Math.round(AOResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    AOpercent.value = "";
  }

  ///Ancillary Childcare Centre
  let OAMain = document.getElementById("DetlGfa_SecoUse_OthAnci30");
  let OApercent = document.getElementById("DetlGfa_SecoUse_OthAnci40");
  if (OAMain.value) {
    let OAResult = (OAMain.value / totalProposedGFA.value) * 100;
    if (isNaN(OAResult) || OAResult == Infinity) {
      OApercent.value = 0;
    } else {
      OApercent.value = Number(Math.round(OAResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    OApercent.value = "";
  }

  ///Ancillary Canteen
  let ACMain = document.getElementById("DetlGfa_SecoUse_AnciCant30");
  let ACpercent = document.getElementById("DetlGfa_SecoUse_AnciCant40");
  if (ACMain.value) {
    let ACResult = (ACMain.value / totalProposedGFA.value) * 100;

    if (isNaN(ACResult) || ACResult == Infinity) {
      ACpercent.value = 0;
    } else {
      ACpercent.value = Number(Math.round(ACResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    ACpercent.value = "";
  }
  ///Interim Urban Farming
  let IUAMain = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30");
  let IUApercent = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm40");
  if (IUAMain.value) {
    let IUAResult = (IUAMain.value / totalProposedGFA.value) * 100;

    if (isNaN(IUAResult) || IUAResult == Infinity) {
      IUApercent.value = 0;
    } else {
      IUApercent.value = Number(Math.round(IUAResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    IUApercent.value = "";
  }
  ///Selected Commercial Use
  let SCUMain = document.getElementById("DetlGfa_AnciUse_SeleCommUse30");
  let SCUpercent = document.getElementById("DetlGfa_AnciUse_SeleCommUse40");
  if (SCUMain.value) {
    let SCUResult = (SCUMain.value / totalProposedGFA.value) * 100;

    if (isNaN(SCUResult) || SCUResult == Infinity) {
      SCUpercent.value = 0;
    } else {
      SCUpercent.value = Number(Math.round(SCUResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    SCUpercent.value = "";
  }
  ///Showroom
  let ShowMain = document.getElementById("DetlGfa_AnciUse_Show30");
  let Showpercent = document.getElementById("DetlGfa_AnciUse_Show40");
  if (ShowMain.value) {
    let ShowResult = (ShowMain.value / totalProposedGFA.value) * 100;

    if (isNaN(ShowResult) || ShowResult == Infinity) {
      Showpercent.value = 0;
    } else {
      Showpercent.value = Number(Math.round(ShowResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Showpercent.value = "";
  }
  ///Ancillary
  let WDMain = document.getElementById("DetlGfa_SecoUse_WorkDorm30");
  let WDpercent = document.getElementById("DetlGfa_SecoUse_WorkDorm40");
  if (WDMain.value) {
    let WDResult = (WDMain.value / totalProposedGFA.value) * 100;

    if (isNaN(WDResult) || WDResult == Infinity) {
      WDpercent.value = 0;
    } else {
      WDpercent.value = Number(Math.round(WDResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    WDpercent.value = "";
  }
  ///Secondary
  let SecoMain = document.getElementById("DetlGfa_AnciUse_Seco30");
  let Secopercent = document.getElementById("DetlGfa_AnciUse_Seco40");
  if (SecoMain.value) {
    let SecoResult = (SecoMain.value / totalProposedGFA.value) * 100;

    if (isNaN(SecoResult) || SecoResult == Infinity) {
      Secopercent.value = 0;
    } else {
      Secopercent.value = Number(Math.round(SecoResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Secopercent.value = "";
  }
  ///White Use Childcare Centre
  let CCMain = document.getElementById("DetlGfa_WhiteUse_ChilCent30");
  let CCpercent = document.getElementById("DetlGfa_WhiteUse_ChilCent40");
  if (CCMain.value) {
    let CCResult = (CCMain.value / totalProposedGFA.value) * 100;

    if (isNaN(CCResult) || CCResult == Infinity) {
      CCpercent.value = 0;
    } else {
      CCpercent.value = Number(Math.round(CCResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    CCpercent.value = "";
  }
  ///Civic & Community Institution
  let CCIMain = document.getElementById("DetlGfa_WhiteUse_CiviCommInst30");
  let CCIpercent = document.getElementById("DetlGfa_WhiteUse_CiviCommInst40");
  if (CCIMain.value) {
    let CCIResult = (CCIMain.value / totalProposedGFA.value) * 100;

    if (isNaN(CCIResult) || CCIResult == Infinity) {
      CCIpercent.value = 0;
    } else {
      CCIpercent.value = Number(Math.round(CCIResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    CCIpercent.value = "";
  }
  ///Commercial Office
  let COMain = document.getElementById("DetlGfa_WhiteUse_CommOffi30");
  let COpercent = document.getElementById("DetlGfa_WhiteUse_CommOffi40");
  if (COMain.value) {
    let COResult = (COMain.value / totalProposedGFA.value) * 100;

    if (isNaN(COResult) || COResult == Infinity) {
      COpercent.value = 0;
    } else {
      COpercent.value = Number(Math.round(COResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    COpercent.value = "";
  }
  ///Educational Institution
  let EIMain = document.getElementById("DetlGfa_WhiteUse_EducInst30");
  let EIpercent = document.getElementById("DetlGfa_WhiteUse_EducInst40");
  if (EIMain.value) {
    let EIResult = (EIMain.value / totalProposedGFA.value) * 100;

    if (isNaN(EIResult) || EIResult == Infinity) {
      EIpercent.value = 0;
    } else {
      EIpercent.value = Number(Math.round(EIResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    EIpercent.value = "";
  }
  ///Hotel
  let HSAMain = document.getElementById("DetlGfa_SecoUse_HoteServApt30");
  let HSApercent = document.getElementById("DetlGfa_SecoUse_HoteServApt40");
  if (HSAMain.value) {
    let HSAResult = (HSAMain.value / totalProposedGFA.value) * 100;

    if (isNaN(HSAResult) || HSAResult == Infinity) {
      HSApercent.value = 0;
    } else {
      HSApercent.value = Number(Math.round(HSAResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    HSApercent.value = "";
  }
  ///Mechanical & Electrical
  let MEMain = document.getElementById("DetlGfa_WhiteUse_MechElec30");
  let MEpercent = document.getElementById("DetlGfa_WhiteUse_MechElec40");
  if (MEMain.value) {
    let MEResult = (MEMain.value / totalProposedGFA.value) * 100;

    if (isNaN(MEResult) || MEResult == Infinity) {
      MEpercent.value = 0;
    } else {
      MEpercent.value = Number(Math.round(MEResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    MEpercent.value = "";
  }
  ///Medical Clinic
  let MCMain = document.getElementById("DetlGfa_WhiteUse_MediClin30");
  let MCpercent = document.getElementById("DetlGfa_WhiteUse_MediClin40");
  if (MCMain.value) {
    let MCResult = (MCMain.value / totalProposedGFA.value) * 100;

    if (isNaN(MCResult) || MCResult == Infinity) {
      MCpercent.value = 0;
    } else {
      MCpercent.value = Number(Math.round(MCResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    MCpercent.value = "";
  }
  ///Residential
  let ResiMain = document.getElementById("DetlGfa_WhiteUse_Resi30");
  let Resipercent = document.getElementById("DetlGfa_WhiteUse_Resi40");
  if (ResiMain.value) {
    let ResiResult = (ResiMain.value / totalProposedGFA.value) * 100;

    if (isNaN(ResiResult) || ResiResult == Infinity) {
      Resipercent.value = 0;
    } else {
      Resipercent.value = Number(Math.round(ResiResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    Resipercent.value = "";
  }
  //Serviced Apartments
  let SAMain = document.getElementById("DetlGfa_WhiteUse_ServApar30");
  let SApercent = document.getElementById("DetlGfa_WhiteUse_ServApar40");
  if (SAMain.value) {
    let SAResult = (SAMain.value / totalProposedGFA.value) * 100;

    if (isNaN(SAResult) || SAResult == Infinity) {
      SApercent.value = 0;
    } else {
      SApercent.value = Number(Math.round(SAResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    SApercent.value = "";
  }
  ///Retail/Shop
  let RSMain = document.getElementById("DetlGfa_SecoUse_RetaShop30");
  let RSpercent = document.getElementById("DetlGfa_SecoUse_RetaShop40");
  if (RSMain.value) {
    let RSResult = (RSMain.value / totalProposedGFA.value) * 100;

    if (isNaN(RSResult) || RSResult == Infinity) {
      RSpercent.value = 0;
    } else {
      RSpercent.value = Number(Math.round(RSResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    RSpercent.value = "";
  }

  ///F&B
  let FBMain = document.getElementById("DetlGfa_SecoUse_FB30");
  let FBpercent = document.getElementById("DetlGfa_SecoUse_FB40");
  if (FBMain.value) {
    let FBResult = (FBMain.value / totalProposedGFA.value) * 100;

    if (isNaN(FBResult) || FBResult == Infinity) {
      FBpercent.value = 0;
    } else {
      FBpercent.value = Number(Math.round(FBResult + 'e2') + 'e-2').toFixed(2);
    }
  } else {
    FBpercent.value = "";
  }

  ///Others 1
  for (let a of document.querySelectorAll("[parent ='other1']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "")
    let Others1Main = document.getElementById("DetlGfa_SecoUse_Oth4" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse_Oth5" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalProposedGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
      }
    } else {
      Others1percent.value = "";
    }
  }
  ///Others 2
  for (let a of document.querySelectorAll("[parent ='other2']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "")
    let Others1Main = document.getElementById("DetlGfa_SecoUse2_Oth4" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse2_Oth5" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalProposedGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
      }
    } else {
      Others1percent.value = "";
    }
  }


  // ///Others 2
  // let Others2Main = document.getElementById("DetlGfa_SecoUse_Oth240");
  // let Others2percent = document.getElementById("DetlGfa_SecoUse_Oth250");
  // if (Others2Main.value) {
  //   let Others2Result = (Others2Main.value / totalProposedGFA.value) * 100;

  //   if (isNaN(Others2Result) || Others2Result == Infinity) {
  //     Others2percent.value = 0;
  //   } else {
  //     Others2percent.value = Number(Math.round(Others2Result + 'e2') + 'e-2').toFixed(2);
  //   }
  // } else {
  //   Others2percent.value = "";
  // }

  // ///Others 3
  // let Others3Main = document.getElementById("DetlGfa_SecoUse_Oth340");
  // let Others3percent = document.getElementById("DetlGfa_SecoUse_Oth350");
  // if (Others3Main.value) {
  //   let Others3Result = (Others3Main.value / totalProposedGFA.value) * 100;

  //   if (isNaN(Others3Result) || Others3Result == Infinity) {
  //     Others3percent.value = 0;
  //   } else {
  //     Others3percent.value = Number(Math.round(Others3Result + 'e2') + 'e-2').toFixed(2);
  //   }
  // } else {
  //   Others3percent.value = "";
  // }

  // ///Others 4
  // let Others4Main = document.getElementById("DetlGfa_SecoUse_Oth440");
  // let Others4percent = document.getElementById("DetlGfa_SecoUse_Oth450");
  // if (Others4Main.value) {
  //   let Others4Result = (Others4Main.value / totalProposedGFA.value) * 100;

  //   if (isNaN(Others4Result) || Others4Result == Infinity) {
  //     Others4percent.value = 0;
  //   } else {
  //     Others4percent.value = Number(Math.round(Others4Result + 'e2') + 'e-2').toFixed(2);
  //   }
  // } else {
  //   Others4percent.value = "";
  // }
  // ///Others 5
  // let Others5Main = document.getElementById("DetlGfa_SecoUse_Oth540");
  // let Others5percent = document.getElementById("DetlGfa_SecoUse_Oth550");
  // if (Others5Main.value) {
  //   let Others5Result = (Others5Main.value / totalProposedGFA.value) * 100;

  //   if (isNaN(Others5Result) || Others5Result == Infinity) {
  //     Others5percent.value = 0;
  //   } else {
  //     Others5percent.value = Number(Math.round(Others5Result + 'e2') + 'e-2').toFixed(2);
  //   }
  // } else {
  //   Others5percent.value = "";
  // }
}

function ElDetaComputeOverAllPercent() {
  let totalOverallGFA = document.getElementById("DetlGfa_TotaGFA30");
  DetlGfa10_change(0, 'DetlGfa_TotaGFA30', 'DetlGfa30_id')
  //////Clean Industry
  let IndusMain = document.getElementById("DetlGfa_PrimUse_Ind50");
  let overAllIndusMain = document.getElementById("DetlGfa_PrimUse_Ind10");
  let Induspercent = document.getElementById("DetlGfa_PrimUse_Ind60");
  if (IndusMain.value) {
    let IndusResult = (IndusMain.value / totalOverallGFA.value) * 100;
    if (isNaN(IndusResult) || IndusResult == Infinity) {
      Induspercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Induspercent.value = Number(Math.round(IndusResult + 'e2') + 'e-2').toFixed(2);
      if (overAllIndusMain.value) {
        document.getElementById("DetlGfa_PrimUse_Ind30").value =
          (parseFloat(IndusMain.value) - parseFloat(overAllIndusMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Induspercent.value = "";
    let IndusMainVal = !isNaN(parseFloat(IndusMain.value)) ? parseFloat(IndusMain.value) : 0
    let overAllIndusMainVal = !isNaN(parseFloat(overAllIndusMain.value)) ? parseFloat(overAllIndusMain.value) : 0
    document.getElementById("DetlGfa_PrimUse_Ind30").value =
      (parseFloat(IndusMainVal) - parseFloat(overAllIndusMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  //General Industry
  let GenMain = document.getElementById("DetlGfa_PredUse_GenInd50");
  let overAllGenMain = document.getElementById("DetlGfa_PredUse_GenInd10");
  let Genpercent = document.getElementById("DetlGfa_PredUse_GenInd60");
  if (GenMain.value) {
    let GenResult = (GenMain.value / totalOverallGFA.value) * 100;
    if (isNaN(GenResult) || GenResult == Infinity) {
      Genpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Genpercent.value = Number(Math.round(GenResult + 'e2') + 'e-2').toFixed(2);
      if (overAllGenMain.value) {
        document.getElementById("DetlGfa_PredUse_GenInd30").value =
          (parseFloat(GenMain.value) - parseFloat(overAllGenMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Genpercent.value = "";
    let GenMainVal = !isNaN(parseFloat(GenMain.value)) ? parseFloat(GenMain.value) : 0
    let overAllGenMainVal = !isNaN(parseFloat(overAllGenMain.value)) ? parseFloat(overAllGenMain.value) : 0
    document.getElementById("DetlGfa_PredUse_GenInd30").value =
      (parseFloat(GenMainVal) - parseFloat(overAllGenMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Special Industry
  let SpecMain = document.getElementById("DetlGfa_PredUse_SpecInd50");
  let overAllSpecMain = document.getElementById("DetlGfa_PredUse_SpecInd10");
  let Specpercent = document.getElementById("DetlGfa_PredUse_SpecInd60");
  if (SpecMain.value) {
    let SpecResult = (SpecMain.value / totalOverallGFA.value) * 100;
    if (isNaN(SpecResult) || SpecResult == Infinity) {
      Specpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Specpercent.value = Number(Math.round(SpecResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSpecMain.value) {
        document.getElementById("DetlGfa_PredUse_SpecInd30").value =
          (parseFloat(SpecMain.value) - parseFloat(overAllSpecMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Specpercent.value = "";
    let SpecMainVal = !isNaN(parseFloat(SpecMain.value)) ? parseFloat(SpecMain.value) : 0
    let overAllSpecMainVal = !isNaN(parseFloat(overAllSpecMain.value)) ? parseFloat(overAllSpecMain.value) : 0
    document.getElementById("DetlGfa_PredUse_SpecInd30").value =
      (parseFloat(SpecMainVal) - parseFloat(overAllSpecMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Business Park
  let BusiParkMain = document.getElementById("DetlGfa_PrimUse_BusiPark50");
  let overAllBusiParkMain = document.getElementById(
    "DetlGfa_PrimUse_BusiPark10"
  );
  let BusiParkpercent = document.getElementById("DetlGfa_PrimUse_BusiPark60");
  if (BusiParkMain.value) {
    let BusiParkResult = (BusiParkMain.value / totalOverallGFA.value) * 100;
    if (isNaN(BusiParkResult) || BusiParkResult == Infinity) {
      BusiParkpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      BusiParkpercent.value = Number(Math.round(BusiParkResult + 'e2') + 'e-2').toFixed(2);
      if (overAllBusiParkMain.value) {
        document.getElementById("DetlGfa_PrimUse_BusiPark30").value =
          (parseFloat(BusiParkMain.value) -
            parseFloat(overAllBusiParkMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    BusiParkpercent.value = "";
    let BusiParkMainVal = !isNaN(parseFloat(BusiParkMain.value)) ? parseFloat(BusiParkMain.value) : 0
    let overAllBusiParkMainVal = !isNaN(parseFloat(overAllBusiParkMain.value)) ? parseFloat(overAllBusiParkMain.value) : 0
    document.getElementById("DetlGfa_PrimUse_BusiPark30").value =
      (parseFloat(BusiParkMainVal) - parseFloat(overAllBusiParkMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Office
  let AOMain = document.getElementById("DetlGfa_SecoUse_AnciOffi50");
  let overAllAOMain = document.getElementById("DetlGfa_SecoUse_AnciOffi10");
  let AOpercent = document.getElementById("DetlGfa_SecoUse_AnciOffi60");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalOverallGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity) {
      AOpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      AOpercent.value = Number(Math.round(AOResult + 'e2') + 'e-2').toFixed(2);
      if (overAllAOMain.value) {
        document.getElementById("DetlGfa_SecoUse_AnciOffi30").value =
          (parseFloat(AOMain.value) - parseFloat(overAllAOMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    AOpercent.value = "";
    let AOMainVal = !isNaN(parseFloat(AOMain.value)) ? parseFloat(AOMain.value) : 0
    let overAllAOMainVal = !isNaN(parseFloat(overAllAOMain.value)) ? parseFloat(overAllAOMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_AnciOffi30").value =
      (parseFloat(AOMainVal) - parseFloat(overAllAOMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Childcare Centre
  let OAMain = document.getElementById("DetlGfa_SecoUse_OthAnci50");
  let overAllOAMain = document.getElementById("DetlGfa_SecoUse_OthAnci10");
  let OApercent = document.getElementById("DetlGfa_SecoUse_OthAnci60");
  if (OAMain.value) {
    let OAResult = (OAMain.value / totalOverallGFA.value) * 100;
    if (isNaN(OAResult) || OAResult == Infinity) {
      OApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      OApercent.value = Number(Math.round(OAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllOAMain.value) {
        document.getElementById("DetlGfa_SecoUse_OthAnci30").value =
          (parseFloat(OAMain.value) - parseFloat(overAllOAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    OApercent.value = "";
    let OAMainVal = !isNaN(parseFloat(OAMain.value)) ? parseFloat(OAMain.value) : 0
    let overAllOAMainVal = !isNaN(parseFloat(overAllOAMain.value)) ? parseFloat(overAllOAMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_OthAnci30").value =
      (parseFloat(OAMainVal) - parseFloat(overAllOAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Ancillary Canteen
  let ACMain = document.getElementById("DetlGfa_SecoUse_AnciCant50");
  let overAllACMain = document.getElementById("DetlGfa_SecoUse_AnciCant10");
  let ACpercent = document.getElementById("DetlGfa_SecoUse_AnciCant60");
  if (ACMain.value) {
    let ACResult = (ACMain.value / totalOverallGFA.value) * 100;
    if (isNaN(ACResult) || ACResult == Infinity) {
      ACpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      ACpercent.value = Number(Math.round(ACResult + 'e2') + 'e-2').toFixed(2);
      if (overAllACMain.value) {
        document.getElementById("DetlGfa_SecoUse_AnciCant30").value =
          (parseFloat(ACMain.value) - parseFloat(overAllACMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    ACpercent.value = "";
    let ACMainVal = !isNaN(parseFloat(ACMain.value)) ? parseFloat(ACMain.value) : 0
    let overAllACMainVal = !isNaN(parseFloat(overAllACMain.value)) ? parseFloat(overAllACMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_AnciCant30").value =
      (parseFloat(ACMainVal) - parseFloat(overAllACMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Interim Urban Farming
  let IUAMain = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm50");
  let overAllIUAMain = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm10");
  let IUApercent = document.getElementById("DetlGfa_AnciUse_InteUrbaFarm60");
  if (IUAMain.value) {
    let IUAResult = (IUAMain.value / totalOverallGFA.value) * 100;
    if (isNaN(IUAResult) || IUAResult == Infinity) {
      IUApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      IUApercent.value = Number(Math.round(IUAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllIUAMain.value) {
        document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
          (parseFloat(IUAMain.value) - parseFloat(overAllIUAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    IUApercent.value = "";
    let IUAMainVal = !isNaN(parseFloat(IUAMain.value)) ? parseFloat(IUAMain.value) : 0
    let overAllIUAMainVal = !isNaN(parseFloat(overAllIUAMain.value)) ? parseFloat(overAllIUAMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
      (parseFloat(IUAMainVal) - parseFloat(overAllIUAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Selected Commercial Use
  let SCUMain = document.getElementById("DetlGfa_AnciUse_SeleCommUse50");
  let overAllSCUMain = document.getElementById("DetlGfa_AnciUse_SeleCommUse10");
  let SCUpercent = document.getElementById("DetlGfa_AnciUse_SeleCommUse60");
  if (SCUMain.value) {
    let SCUResult = (SCUMain.value / totalOverallGFA.value) * 100;
    if (isNaN(SCUResult) || SCUResult == Infinity) {
      SCUpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      SCUpercent.value = Number(Math.round(SCUResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSCUMain.value) {
        document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
          (parseFloat(SCUMain.value) - parseFloat(overAllSCUMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    SCUpercent.value = "";
    let SCUMainVal = !isNaN(parseFloat(SCUMain.value)) ? parseFloat(SCUMain.value) : 0
    let overAllSCUMainVal = !isNaN(parseFloat(overAllSCUMain.value)) ? parseFloat(overAllSCUMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm30").value =
      (parseFloat(SCUMainVal) - parseFloat(overAllSCUMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Showroom
  let ShowMain = document.getElementById("DetlGfa_AnciUse_Show50");
  let overAllShowMain = document.getElementById("DetlGfa_AnciUse_Show10");
  let Showpercent = document.getElementById("DetlGfa_AnciUse_Show60");
  if (ShowMain.value) {
    let ShowResult = (ShowMain.value / totalOverallGFA.value) * 100;
    if (isNaN(ShowResult) || ShowResult == Infinity) {
      Showpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Showpercent.value = Number(Math.round(ShowResult + 'e2') + 'e-2').toFixed(2);
      if (overAllShowMain.value) {
        document.getElementById("DetlGfa_AnciUse_Show30").value =
          (parseFloat(ShowMain.value) - parseFloat(overAllShowMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Showpercent.value = "";
    let ShowMainVal = !isNaN(parseFloat(ShowMain.value)) ? parseFloat(ShowMain.value) : 0
    let overAllShowMainVal = !isNaN(parseFloat(overAllShowMain.value)) ? parseFloat(overAllShowMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_Show30").value =
      (parseFloat(ShowMainVal) - parseFloat(overAllShowMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Ancillary
  let WDMain = document.getElementById("DetlGfa_SecoUse_WorkDorm50");
  let overAllWDMain = document.getElementById("DetlGfa_SecoUse_WorkDorm10");
  let WDpercent = document.getElementById("DetlGfa_SecoUse_WorkDorm60");
  if (WDMain.value) {
    let WDResult = (WDMain.value / totalOverallGFA.value) * 100;
    if (isNaN(WDResult) || WDResult == Infinity) {
      WDpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      WDpercent.value = Number(Math.round(WDResult + 'e2') + 'e-2').toFixed(2);
      if (overAllWDMain.value) {
        document.getElementById("DetlGfa_SecoUse_WorkDorm30").value =
          (parseFloat(WDMain.value) - parseFloat(overAllWDMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    WDpercent.value = "";
    let WDMainVal = !isNaN(parseFloat(WDMain.value)) ? parseFloat(WDMain.value) : 0
    let overAllWDMainVal = !isNaN(parseFloat(overAllWDMain.value)) ? parseFloat(overAllWDMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_WorkDorm30").value =
      (parseFloat(WDMainVal) - parseFloat(overAllWDMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Secondary
  let SecoMain = document.getElementById("DetlGfa_AnciUse_Seco50");
  let overAllSecoMain = document.getElementById("DetlGfa_AnciUse_Seco10");
  let Secopercent = document.getElementById("DetlGfa_AnciUse_Seco60");
  if (SecoMain.value) {
    let SecoResult = (SecoMain.value / totalOverallGFA.value) * 100;
    if (isNaN(SecoResult) || SecoResult == Infinity) {
      Secopercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Secopercent.value = Number(Math.round(SecoResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSecoMain.value) {
        document.getElementById("DetlGfa_AnciUse_Seco30").value =
          (parseFloat(SecoMain.value) - parseFloat(overAllSecoMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Secopercent.value = "";
    let SecoMainVal = !isNaN(parseFloat(SecoMain.value)) ? parseFloat(SecoMain.value) : 0
    let overAllSecoMainVal = !isNaN(parseFloat(overAllSecoMain.value)) ? parseFloat(overAllSecoMain.value) : 0
    document.getElementById("DetlGfa_AnciUse_Seco30").value =
      (parseFloat(SecoMainVal) - parseFloat(overAllSecoMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///White Use Childcare Centre
  let CCMain = document.getElementById("DetlGfa_WhiteUse_ChilCent50");
  let overAllCCMain = document.getElementById("DetlGfa_WhiteUse_ChilCent10");
  let CCpercent = document.getElementById("DetlGfa_WhiteUse_ChilCent60");
  if (CCMain.value) {
    let CCResult = (CCMain.value / totalOverallGFA.value) * 100;
    if (isNaN(CCResult) || CCResult == Infinity) {
      CCpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      CCpercent.value = Number(Math.round(CCResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCCMain.value) {
        document.getElementById("DetlGfa_WhiteUse_ChilCent30").value =
          (parseFloat(CCMain.value) - parseFloat(overAllCCMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    CCpercent.value = "";
    let CCMainVal = !isNaN(parseFloat(CCMain.value)) ? parseFloat(CCMain.value) : 0
    let overAllCCMainVal = !isNaN(parseFloat(overAllCCMain.value)) ? parseFloat(overAllCCMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_ChilCent30").value =
      (parseFloat(CCMainVal) - parseFloat(overAllCCMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Civic and Community Institution
  let CCIMain = document.getElementById("DetlGfa_WhiteUse_CiviCommInst50");
  let overAllCCIMain = document.getElementById("DetlGfa_WhiteUse_CiviCommInst10");
  let CCIpercent = document.getElementById("DetlGfa_WhiteUse_CiviCommInst60");
  if (CCIMain.value) {
    let CCIResult = (CCIMain.value / totalOverallGFA.value) * 100;
    if (isNaN(CCIResult) || CCIResult == Infinity) {
      CCIpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      CCIpercent.value = Number(Math.round(CCIResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCCIMain.value) {
        document.getElementById("DetlGfa_WhiteUse_CiviCommInst30").value =
          (parseFloat(CCIMain.value) - parseFloat(overAllCCIMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    CCIpercent.value = "";
    let CCIMainVal = !isNaN(parseFloat(CCIMain.value)) ? parseFloat(CCIMain.value) : 0
    let overAllCCIMainVal = !isNaN(parseFloat(overAllCCIMain.value)) ? parseFloat(overAllCCIMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst30").value =
      (parseFloat(CCIMainVal) - parseFloat(overAllCCIMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Commercial Office
  let COMain = document.getElementById("DetlGfa_WhiteUse_CommOffi50");
  let overAllCOMain = document.getElementById("DetlGfa_WhiteUse_CommOffi10");
  let COpercent = document.getElementById("DetlGfa_WhiteUse_CommOffi60");
  if (COMain.value) {
    let COResult = (COMain.value / totalOverallGFA.value) * 100;
    if (isNaN(COResult) || COResult == Infinity) {
      COpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      COpercent.value = Number(Math.round(COResult + 'e2') + 'e-2').toFixed(2);
      if (overAllCOMain.value) {
        document.getElementById("DetlGfa_WhiteUse_CommOffi30").value =
          (parseFloat(COMain.value) - parseFloat(overAllCOMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    COpercent.value = "";
    let COMainVal = !isNaN(parseFloat(COMain.value)) ? parseFloat(COMain.value) : 0
    let overAllCOMainVal = !isNaN(parseFloat(overAllCOMain.value)) ? parseFloat(overAllCOMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_CommOffi30").value =
      (parseFloat(COMainVal) - parseFloat(overAllCOMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Educational Institution
  let EIMain = document.getElementById("DetlGfa_WhiteUse_EducInst50");
  let overAllEIMain = document.getElementById("DetlGfa_WhiteUse_EducInst10");
  let EIpercent = document.getElementById("DetlGfa_WhiteUse_EducInst60");
  if (EIMain.value) {
    let EIResult = (EIMain.value / totalOverallGFA.value) * 100;
    if (isNaN(EIResult) || EIResult == Infinity) {
      EIpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      EIpercent.value = Number(Math.round(EIResult + 'e2') + 'e-2').toFixed(2);
      if (overAllEIMain.value) {
        document.getElementById("DetlGfa_WhiteUse_EducInst30").value =
          (parseFloat(EIMain.value) - parseFloat(overAllEIMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    EIpercent.value = "";
    let EIMainVal = !isNaN(parseFloat(EIMain.value)) ? parseFloat(EIMain.value) : 0
    let overAllEIMainVal = !isNaN(parseFloat(overAllEIMain.value)) ? parseFloat(overAllEIMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_EducInst30").value =
      (parseFloat(EIMainVal) - parseFloat(overAllEIMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Hotel
  let HSAMain = document.getElementById("DetlGfa_SecoUse_HoteServApt50");
  let overAllHSAMain = document.getElementById("DetlGfa_SecoUse_HoteServApt10");
  let HSApercent = document.getElementById("DetlGfa_SecoUse_HoteServApt60");
  if (HSAMain.value) {
    let HSAResult = (HSAMain.value / totalOverallGFA.value) * 100;
    if (isNaN(HSAResult) || HSAResult == Infinity) {
      HSApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      HSApercent.value = Number(Math.round(HSAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllHSAMain.value) {
        document.getElementById("DetlGfa_SecoUse_HoteServApt30").value =
          (parseFloat(HSAMain.value) - parseFloat(overAllHSAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    HSApercent.value = "";
    let HSAMainVal = !isNaN(parseFloat(HSAMain.value)) ? parseFloat(HSAMain.value) : 0
    let overAllHSAMainVal = !isNaN(parseFloat(overAllHSAMain.value)) ? parseFloat(overAllHSAMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_HoteServApt30").value =
      (parseFloat(HSAMainVal) - parseFloat(overAllHSAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Mechanical & Electrical
  let MEMain = document.getElementById("DetlGfa_WhiteUse_MechElec50");
  let overAllMEMain = document.getElementById("DetlGfa_WhiteUse_MechElec10");
  let MEpercent = document.getElementById("DetlGfa_WhiteUse_MechElec60");
  if (MEMain.value) {
    let MEResult = (MEMain.value / totalOverallGFA.value) * 100;
    if (isNaN(MEResult) || MEResult == Infinity) {
      MEpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      MEpercent.value = Number(Math.round(MEResult + 'e2') + 'e-2').toFixed(2);
      if (overAllMEMain.value) {
        document.getElementById("DetlGfa_WhiteUse_MechElec30").value =
          (parseFloat(MEMain.value) - parseFloat(overAllMEMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    MEpercent.value = "";
    let MEMainVal = !isNaN(parseFloat(MEMain.value)) ? parseFloat(MEMain.value) : 0
    let overAllMEMainVal = !isNaN(parseFloat(overAllMEMain.value)) ? parseFloat(overAllMEMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_MechElec30").value =
      (parseFloat(MEMainVal) - parseFloat(overAllMEMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Medical Clinic
  let MCMain = document.getElementById("DetlGfa_WhiteUse_MediClin50");
  let overAllMCMain = document.getElementById("DetlGfa_WhiteUse_MediClin10");
  let MCpercent = document.getElementById("DetlGfa_WhiteUse_MediClin60");
  if (MCMain.value) {
    let MCResult = (MCMain.value / totalOverallGFA.value) * 100;
    if (isNaN(MCResult) || MCResult == Infinity) {
      MCpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      MCpercent.value = Number(Math.round(MCResult + 'e2') + 'e-2').toFixed(2);
      if (overAllMCMain.value) {
        document.getElementById("DetlGfa_WhiteUse_MediClin30").value =
          (parseFloat(MCMain.value) - parseFloat(overAllMCMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    MCpercent.value = "";
    let MCMainVal = !isNaN(parseFloat(MCMain.value)) ? parseFloat(MCMain.value) : 0
    let overAllMCMainVal = !isNaN(parseFloat(overAllMCMain.value)) ? parseFloat(overAllMCMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_MediClin30").value =
      (parseFloat(MCMainVal) - parseFloat(overAllMCMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Residential
  let ResiMain = document.getElementById("DetlGfa_WhiteUse_Resi50");
  let overAllResiMain = document.getElementById("DetlGfa_WhiteUse_Resi10");
  let Resipercent = document.getElementById("DetlGfa_WhiteUse_Resi60");
  if (ResiMain.value) {
    let ResiResult = (ResiMain.value / totalOverallGFA.value) * 100;
    if (isNaN(ResiResult) || ResiResult == Infinity) {
      Resipercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      Resipercent.value = Number(Math.round(ResiResult + 'e2') + 'e-2').toFixed(2);
      if (overAllResiMain.value) {
        document.getElementById("DetlGfa_WhiteUse_Resi30").value =
          (parseFloat(ResiMain.value) - parseFloat(overAllResiMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    Resipercent.value = "";
    let ResiMainVal = !isNaN(parseFloat(ResiMain.value)) ? parseFloat(ResiMain.value) : 0
    let overAllResiMainVal = !isNaN(parseFloat(overAllResiMain.value)) ? parseFloat(overAllResiMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_Resi30").value =
      (parseFloat(ResiMainVal) - parseFloat(overAllResiMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Serviced Apartments
  let SAMain = document.getElementById("DetlGfa_WhiteUse_ServApar50");
  let overAllSAMain = document.getElementById("DetlGfa_WhiteUse_ServApar10");
  let SApercent = document.getElementById("DetlGfa_WhiteUse_ServApar60");
  if (SAMain.value) {
    let SAResult = (SAMain.value / totalOverallGFA.value) * 100;
    if (isNaN(SAResult) || SAResult == Infinity) {
      SApercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      SApercent.value = Number(Math.round(SAResult + 'e2') + 'e-2').toFixed(2);
      if (overAllSAMain.value) {
        document.getElementById("DetlGfa_WhiteUse_ServApar30").value =
          (parseFloat(SAMain.value) - parseFloat(overAllSAMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    SApercent.value = "";
    let SAMainVal = !isNaN(parseFloat(SAMain.value)) ? parseFloat(SAMain.value) : 0
    let overAllSAMainVal = !isNaN(parseFloat(overAllSAMain.value)) ? parseFloat(overAllSAMain.value) : 0
    document.getElementById("DetlGfa_WhiteUse_ServApar30").value =
      (parseFloat(SAMainVal) - parseFloat(overAllSAMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }
  ///Retail/Shop
  let RSMain = document.getElementById("DetlGfa_SecoUse_RetaShop50");
  let overAllRSMain = document.getElementById("DetlGfa_SecoUse_RetaShop10");
  let RSpercent = document.getElementById("DetlGfa_SecoUse_RetaShop60");
  if (RSMain.value) {
    let RSResult = (RSMain.value / totalOverallGFA.value) * 100;
    if (isNaN(RSResult) || RSResult == Infinity) {
      RSpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      RSpercent.value = Number(Math.round(RSResult + 'e2') + 'e-2').toFixed(2);
      if (overAllRSMain.value) {
        document.getElementById("DetlGfa_SecoUse_RetaShop30").value =
          (parseFloat(RSMain.value) - parseFloat(overAllRSMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    RSpercent.value = "";
    let RSMainVal = !isNaN(parseFloat(RSMain.value)) ? parseFloat(RSMain.value) : 0
    let overAllRSMainVal = !isNaN(parseFloat(overAllRSMain.value)) ? parseFloat(overAllRSMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_RetaShop30").value =
      (parseFloat(RSMainVal) - parseFloat(overAllRSMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///F&B
  let FBMain = document.getElementById("DetlGfa_SecoUse_FB50");
  let overAllFBMain = document.getElementById("DetlGfa_SecoUse_FB10");
  let FBpercent = document.getElementById("DetlGfa_SecoUse_FB60");
  if (FBMain.value) {
    let FBResult = (FBMain.value / totalOverallGFA.value) * 100;
    if (isNaN(FBResult) || FBResult == Infinity) {
      FBpercent.value = 0;
      ElDetaComputeProposedPercent();
    } else {
      FBpercent.value = Number(Math.round(FBResult + 'e2') + 'e-2').toFixed(2);
      if (overAllFBMain.value) {
        document.getElementById("DetlGfa_SecoUse_FB30").value =
          (parseFloat(FBMain.value) - parseFloat(overAllFBMain.value)).toFixed(3);
        ElDetaComputeProposedPercent();
      }
    }
  } else {
    FBpercent.value = "";
    let FBMainVal = !isNaN(parseFloat(FBMain.value)) ? parseFloat(FBMain.value) : 0
    let overAllFBMainVal = !isNaN(parseFloat(overAllFBMain.value)) ? parseFloat(overAllFBMain.value) : 0
    document.getElementById("DetlGfa_SecoUse_FB30").value =
      (parseFloat(FBMainVal) - parseFloat(overAllFBMainVal)).toFixed(3);
    ElDetaComputeProposedPercent();
  }

  ///Others 1
  for (let a of document.querySelectorAll("[parent = 'other1']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "");
    let Others1Main = document.getElementById("DetlGfa_SecoUse_Oth6" + index);
    let overAllOthers1Main = document.getElementById("DetlGfa_SecoUse_Oth2" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse_Oth7" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalOverallGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
        ElDetaComputeProposedPercent();
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
        if (overAllOthers1Main.value) {
          document.getElementById("DetlGfa_SecoUse_Oth4" + index).value =
            (parseFloat(Others1Main.value) - parseFloat(overAllOthers1Main.value)).toFixed(3);
          ElDetaComputeProposedPercent();
        }
      }
    } else {
      Others1percent.value = "";
      let Others1MainVal = !isNaN(parseFloat(Others1Main.value)) ? parseFloat(Others1Main.value) : 0
      let overAllOthers1MainVal = !isNaN(parseFloat(overAllOthers1Main.value)) ? parseFloat(overAllOthers1Main.value) : 0
      document.getElementById("DetlGfa_SecoUse_Oth4" + index).value =
        (parseFloat(Others1MainVal) - parseFloat(overAllOthers1MainVal)).toFixed(3);
      ElDetaComputeProposedPercent();
    }
  }
  //Other 2
  for (let a of document.querySelectorAll("[parent = 'other2']")) {
    let index = document.getElementById(a.id).getAttribute("id").replace(document.getElementById(a.id).getAttribute("prefix"), "");
    let Others1Main = document.getElementById("DetlGfa_SecoUse2_Oth6" + index);
    let overAllOthers1Main = document.getElementById("DetlGfa_SecoUse2_Oth2" + index);
    let Others1percent = document.getElementById("DetlGfa_SecoUse2_Oth7" + index);
    if (Others1Main.value) {
      let Others1Result = (Others1Main.value / totalOverallGFA.value) * 100;
      if (isNaN(Others1Result) || Others1Result == Infinity) {
        Others1percent.value = 0;
        ElDetaComputeProposedPercent();
      } else {
        Others1percent.value = Number(Math.round(Others1Result + 'e2') + 'e-2').toFixed(2);
        if (overAllOthers1Main.value) {
          document.getElementById("DetlGfa_SecoUse2_Oth4" + index).value =
            (parseFloat(Others1Main.value) - parseFloat(overAllOthers1Main.value)).toFixed(3);
          ElDetaComputeProposedPercent();
        }
      }
    } else {
      Others1percent.value = "";
      let Others1MainVal = !isNaN(parseFloat(Others1Main.value)) ? parseFloat(Others1Main.value) : 0
      let overAllOthers1MainVal = !isNaN(parseFloat(overAllOthers1Main.value)) ? parseFloat(overAllOthers1Main.value) : 0
      document.getElementById("DetlGfa_SecoUse2_Oth4" + index).value =
        (parseFloat(Others1MainVal) - parseFloat(overAllOthers1MainVal)).toFixed(3);
      ElDetaComputeProposedPercent();
    }
  }


  // ///Others 2
  // let Others2Main = document.getElementById("DetlGfa_SecoUse_Oth260");
  // let overAllOthers2Main = document.getElementById("DetlGfa_SecoUse_Oth220");
  // let Others2percent = document.getElementById("DetlGfa_SecoUse_Oth270");
  // if (Others2Main.value) {
  //   let Others2Result = (Others2Main.value / totalOverallGFA.value) * 100;
  //   if (isNaN(Others2Result) || Others2Result == Infinity) {
  //     Others2percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others2percent.value = Number(Math.round(Others2Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers2Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth240").value =
  //         (parseFloat(overAllOthers2Main.value) - parseFloat(Others2Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others2percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  // ///Others 3
  // let Others3Main = document.getElementById("DetlGfa_SecoUse_Oth360");
  // let overAllOthers3Main = document.getElementById("DetlGfa_SecoUse_Oth320");
  // let Others3percent = document.getElementById("DetlGfa_SecoUse_Oth370");
  // if (Others3Main.value) {
  //   let Others3Result = (Others3Main.value / totalOverallGFA.value) * 100;
  //   if (isNaN(Others3Result) || Others3Result == Infinity) {
  //     Others3percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others3percent.value = Number(Math.round(Others3Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers3Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth340").value =
  //         (parseFloat(overAllOthers3Main.value) - parseFloat(Others3Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others3percent.value = "";
  //   ElDetaComputeProposedPercent();
  // }

  // ///Others 4
  // let Others4Main = document.getElementById("DetlGfa_SecoUse_Oth460");
  // let overAllOthers4Main = document.getElementById("DetlGfa_SecoUse_Oth420");
  // let Others4percent = document.getElementById("DetlGfa_SecoUse_Oth470");
  // if (Others4Main.value) {
  //   let Others4Result = (Others4Main.value / totalOverallGFA.value) * 100;
  //   if (isNaN(Others4Result) || Others4Result == Infinity) {
  //     Others4percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others4percent.value = Number(Math.round(Others4Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers4Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth440").value =
  //         (parseFloat(overAllOthers4Main.value) - parseFloat(Others4Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others4percent.value = "";
  // }

  // ///Others 5
  // let Others5Main = document.getElementById("DetlGfa_SecoUse_Oth560");
  // let overAllOthers5Main = document.getElementById("DetlGfa_SecoUse_Oth520");
  // let Others5percent = document.getElementById("DetlGfa_SecoUse_Oth570");
  // if (Others5Main.value) {
  //   let Others5Result = (Others5Main.value / totalOverallGFA.value) * 100;

  //   if (isNaN(Others5Result) || Others5Result == Infinity) {
  //     Others5percent.value = 0;
  //     ElDetaComputeProposedPercent();
  //   } else {
  //     Others5percent.value = Number(Math.round(Others5Result + 'e2') + 'e-2').toFixed(2);
  //     if (overAllOthers5Main.value) {
  //       document.getElementById("DetlGfa_SecoUse_Oth540").value =
  //         (parseFloat(overAllOthers5Main.value) - parseFloat(Others5Main.value)).toFixed(3);
  //       ElDetaComputeProposedPercent();
  //     }
  //   }
  // } else {
  //   Others5percent.value = "";
  // }
  //Existing PR
  let overAllPR = document.getElementById("DetlGfa_OverPR10");
  let landArea = document.getElementById("EL_LandArea10");
  let result = totalOverallGFA.value / landArea.value;
  if (landArea.value && totalOverallGFA.value) {
    overAllPR.value = result.toFixed(3);
  } else {
    overAllPR.value = "";
  }
}

function maxV(element, event, length) {
  let field = document.getElementById(element.id);
  let finalLen = length - 1;
  let arr = [];

  if (event.keyCode != 46 && !field.value.includes(".")) {
    if (field.value.length > finalLen) {
      event.preventDefault();
    }
  } else if (field.value.includes(".")) {
    if (event.keyCode == 46) {
      event.preventDefault();
    }
  }
}

function clearFieldIfNoValue(element) {
  let field = document.getElementById(element.id);
  if (field.value == ".") {
    field.value = "";
  }
}

function EL_DetaCeilFlooLoad_change(element) {
  let fields = document.querySelectorAll("[detafield],[detafield2]");
  let DetaCeilField = document.querySelectorAll(".detaCeilContainer");
  let detaCeilDelbtn = document.getElementById("deleteCeilA");
  let detaCeilAddbt = document.getElementById("addBtn20");
  let detaCeilAddbt2 = document.getElementById("addBtn30");
  let DetaCeilField2 = document.querySelectorAll(".detaCeilContainer2");
  let detaCeilDelbtn2 = document.getElementById("deleteCeilB");

  if (element.id == "EL_DetaCeilFlooLoad_YesNo20") {
    for (let a of fields) {
      a.removeAttribute("disabled");
      a.setAttribute("mandatory", "");
    }
    detaCeilAddbt.removeAttribute("disabled");
    detaCeilAddbt2.removeAttribute("disabled");
  } else {
    for (let a of fields) {
      a.removeAttribute("mandatory");
      a.removeAttribute("not-filledup");
      a.setAttribute("disabled", "");
      a.value = ""
    }
    for (let y = 0; y < DetaCeilField.length; y++) {
      let detaelements = DetaCeilField[y].querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );
      for (let element2 of detaelements) {
        document.getElementById(element2.id).value = "";
        document.getElementById(element2.id).removeAttribute("data-invalid");

        if (y != 0) {
          delete jsonData[element2.id];
        }
      }
      if (y != 0) {
        DetaCeilField[y].parentNode.removeChild(DetaCeilField[y]);
      }
    }
    for (let i = 0; i < DetaCeilField2.length; i++) {
      let detaelements = DetaCeilField2[i].querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );
      for (let element3 of detaelements) {
        document.getElementById(element3.id).value = "";
        document.getElementById(element3.id).removeAttribute("data-invalid");

        if (i != 0) {
          delete jsonData[element3.id];
        }
      }
      if (i != 0) {
        DetaCeilField2[i].parentNode.removeChild(DetaCeilField2[i]);
      }
    }
    detaCeilDelbtn.setAttribute("disabled", "");
    detaCeilDelbtn2.setAttribute("disabled", "");
    detaCeilAddbt.setAttribute("disabled", "");
    detaCeilAddbt2.setAttribute("disabled", "");

  }

}

function maxD(element, event, decimalVal) {
  let field = document.getElementById(element.id);
  if (validate(field.value)) {
    if (field.value.includes(".")) {
      arr = field.value.split(".");
      if (arr[1].length > decimalVal) {
        event.preventDefault();
        field.value = arr[0] + "." + arr[1].substring(0, arr[1].length - 1);
      }
    }
  } else {
    field.value = field.value.substring(0, field.value.length - 1);
  }
}

function validate(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

//

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  let option = [
    ...document
      .getElementById("Member_Member_Name_QP10")
      .shadowRoot.querySelector("select")
      .querySelectorAll("option")
  ].filter(r => r.getAttribute("value") != "").length;

  if (option != 0) {
    document.getElementById("Members_UEN_QP10").removeAttribute("mandatory");
    document.getElementById("Members_UEN_QP10").setAttribute("disabled", "");
    document.getElementById("Members_UEN_QP10").removeAttribute("template");
    document.getElementById("Members_UEN_QP10").removeAttribute("maxlegth");
  } else {
    document.getElementById("Members_UEN_QP10").setAttribute("mandatory", "");
    document.getElementById("Members_UEN_QP10").removeAttribute("disabled", "");
    document.getElementById("Members_UEN_QP10").setAttribute("template", "#########@");
    document.getElementById("Members_UEN_QP10").setAttribute("maxlegth", "10");
  }

  let proj_Ref = document.getElementById("Project_Project_Ref_No10").value

  document.getElementById("A_ProjRejNo10_Qp").value = proj_Ref
  document.getElementById("A_ProjRejNo10_NonQp").value = proj_Ref

  let proj_Title = document.getElementById("Project_Title10").value

  document.getElementById("A_ProjTitle10_Qp").value = proj_Title
  document.getElementById("A_ProjTitle10_NonQp").value = proj_Title

});

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function showAnnexD() {
  let modal = document.querySelector(".modalAnnexD");
  modal.style.display = "block";
}
function hideAnnexD() {
  let modal = document.querySelector(".modalAnnexD");
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

function EL_TrafGen_OnChange() {
  let totalValue = document.querySelectorAll("[vehicleInput]");
  let totalField = document.getElementById("EL_TrafGen_VehiTyp70");
  let total = 0;

  for (let subValue of totalValue) {
    if (!isNaN(subValue.value) && !subValue.value == "") {
      total += parseFloat(subValue.value);
    }
  }
  totalField.value = total;
}

function disableTarget4(pass) {
  let checkboxes = [document.getElementById("EL_Propo_MedCli20")];

  if (pass) {
    for (target of checkboxes) {
      target.setAttribute("disabled", "");
      target.checked = false;
    }

    //clear Labels
    document.getElementById("EL_Propo_MedCli20_label").innerHTML = "";
  } else {
  }
}

// format decimal place
function formatDecimal(el, place) {
  !isNaN(parseFloat(el.value).toFixed(place))
    ? (document.getElementById(el.id).value = parseFloat(el.value).toFixed(
      place
    ))
    : (document.getElementById(el.id).value = "");
}

function EB_ExtWorks80_change(el) {
  let field = document.querySelectorAll(`[group-id='EB_ExtWorks80_group']`);

  if (el.checked) {
    for (let target of field) {
      target.setAttribute("mandatory", "");
      target.removeAttribute("disabled");
    }
  } else {
    for (let target of field) {
      target.removeAttribute("mandatory");
      target.setAttribute("disabled", "");
      target.value = "";
    }
  }
}

function TB_TotalGfa_change(textboxTotal, groupID) {
  let totalTextbox = document.getElementById(textboxTotal);
  let textboxes = document.querySelectorAll("[group-id='" + groupID + "']");
  let total = 0;
  for (let textbox of textboxes) {
    if (textbox.value.length != 0) {
      total += parseFloat(textbox.value);
    }
  }
  if (total == 0) {
    totalTextbox.value = "";
  } else {
    totalTextbox.value = total;
  }
}

function TbGfaComputeExistPercent() {
  let totalExistGFA = document.getElementById("TB_TotalGfa110");

  //////Industrial
  let IndusMain = document.getElementById("TB_GfaIndu110");
  let Induspercent = document.getElementById("TB_GfaIndu120");
  let overAllIndusMain = document.getElementById("TB_GfaIndu150");
  if (IndusMain.value) {
    let IndusResult = (parseFloat(IndusMain.value) / totalExistGFA.value) * 100;
    if (
      isNaN(IndusResult) ||
      IndusResult == Infinity ||
      IndusResult == -Infinity
    ) {
      Induspercent.value = 0;
      TbGfaComputeProposedPercent();
    } else {
      Induspercent.value = Math.round(IndusResult);
      if (overAllIndusMain.value) {
        document.getElementById("TB_GfaIndu130").value =
          parseFloat(overAllIndusMain.value) - parseFloat(IndusMain.value);
        TbGfaComputeProposedPercent();
      }
    }
  } else {
    Induspercent.value = "";
    TbGfaComputeProposedPercent();
  }

  ///Ancillary Office
  let AOMain = document.getElementById("TB_GfaAnciOffi110");
  let AOpercent = document.getElementById("TB_GfaAnciOffi120");
  let overAllAOMain = document.getElementById("TB_GfaAnciOffi150");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalExistGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity || AOResult == -Infinity) {
      AOpercent.value = 0;
      TbGfaComputeProposedPercent();
    } else {
      AOpercent.value = Math.round(AOResult);
      if (overAllAOMain.value) {
        document.getElementById("TB_GfaAnciOffi130").value =
          parseFloat(AOMain.value) - parseFloat(overAllAOMain.value);
        TbGfaComputeProposedPercent();
      }
    }
  } else {
    AOpercent.value = "";
    TbGfaComputeProposedPercent();
  }
}

function TbGfaComputeOverAllPercent() {
  let totalOverallGFA = document.getElementById("TB_TotalGfa130");

  //////Industrial
  let IndusMain = document.getElementById("TB_GfaIndu150");
  let overAllIndusMain = document.getElementById("TB_GfaIndu110");
  let Induspercent = document.getElementById("TB_GfaIndu160");
  if (IndusMain.value) {
    let IndusResult = (IndusMain.value / totalOverallGFA.value) * 100;
    if (
      isNaN(IndusResult) ||
      IndusResult == Infinity ||
      IndusResult == -Infinity
    ) {
      Induspercent.value = 0;
      TbGfaComputeProposedPercent();
    } else {
      Induspercent.value = Math.round(IndusResult);
      if (overAllIndusMain.value) {
        document.getElementById("TB_GfaIndu130").value =
          parseFloat(overAllIndusMain.value) - parseFloat(IndusMain.value);
        TbGfaComputeProposedPercent();
      }
    }
  } else {
    Induspercent.value = "";
    TbGfaComputeProposedPercent();
  }

  ///Ancillary Office
  let AOMain = document.getElementById("TB_GfaAnciOffi150");
  let overAllAOMain = document.getElementById("TB_GfaAnciOffi110");
  let AOpercent = document.getElementById("TB_GfaAnciOffi160");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalOverallGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity || AOResult == -Infinity) {
      AOpercent.value = 0;
      TbGfaComputeProposedPercent();
    } else {
      AOpercent.value = Math.round(AOResult);
      if (overAllAOMain.value) {
        document.getElementById("TB_GfaAnciOffi130").value =
          parseFloat(overAllAOMain.value) - parseFloat(AOMain.value);
        TbGfaComputeProposedPercent();
      }
    }
  } else {
    AOpercent.value = "";
    TbGfaComputeProposedPercent();
  }
}

function TbGfaComputeProposedPercent() {
  let totalProposedGFA = document.getElementById("TB_TotalGfa120");
  TB_TotalGfa_change("TB_TotalGfa120", "TB_TotalGfa120");

  //////Industrial (B1/B2)
  let IndusMain = document.getElementById("TB_GfaIndu130");
  let Induspercent = document.getElementById("TB_GfaIndu140");
  if (IndusMain.value) {
    let IndusResult = (IndusMain.value / totalProposedGFA.value) * 100;
    if (
      isNaN(IndusResult) ||
      IndusResult == Infinity ||
      IndusResult == -Infinity
    ) {
      Induspercent.value = 0;
    } else {
      Induspercent.value = Math.round(IndusResult);
    }
  } else {
    Induspercent.value = "";
  }

  ///Ancillary Office
  let AOMain = document.getElementById("TB_GfaAnciOffi130");
  let AOpercent = document.getElementById("TB_GfaAnciOffi140");
  if (AOMain.value) {
    let AOResult = (AOMain.value / totalProposedGFA.value) * 100;
    if (isNaN(AOResult) || AOResult == Infinity || AOResult == -Infinity) {
      AOpercent.value = 0;
    } else {
      AOpercent.value = Math.round(AOResult);
    }
  } else {
    AOpercent.value = "";
  }
}

//Function for CR-May 18, 2020
function TB_AirCondAndMech_change(element) {
  let annexB1 = document.getElementById("annexB1");
  let textBox = annexB1.querySelectorAll("cn2-texbox");
  let groupB1 = document.querySelectorAll("[group-id = 'annexB1']");
  for (let clearText of textBox) {
    clearText.value = "";
  }

  let id = element.id;

  if (id == "TB_AirCondAndMech_A_Yes") {
    for (let b1 of groupB1) {
      b1.removeAttribute("hidden");
    }
  } else {
    for (let b1 of groupB1) {
      b1.setAttribute("hidden", "");
    }
  }
}

function TB_MachInst_A_Yes_change(element) {
  let groupB2 = document.querySelectorAll("[group-id = 'annexB2']");

  let AnnexBFormField = document.querySelectorAll(".annexB2Container");
  let AnnexBDelBtn = document.getElementById("delete10");

  for (let y = 0; y < AnnexBFormField.length; y++) {
    let annexB2elements = AnnexBFormField[y].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
    for (let element2 of annexB2elements) {
      document.getElementById(element2.id).value = "";
      document.getElementById(element2.id).removeAttribute("data-invalid");

      if (y != 0) {
        delete jsonData[element2.id];
      }
    }
    if (y != 0) {
      AnnexBFormField[y].parentNode.removeChild(AnnexBFormField[y]);
    }
  }

  AnnexBDelBtn.setAttribute("disabled", "");

  let id = element.id;

  if (id == "TB_MachInst_A_Yes") {
    for (let b2 of groupB2) {
      b2.removeAttribute("hidden");
    }
  } else {
    for (let b2 of groupB2) {
      b2.setAttribute("hidden", "");
    }
  }
}

function disableDelete(containerName, deleteBtn) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteBtn).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteBtn);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function El_TypWork_Use_change(el) {
  if (el.checked) {
    document.querySelector("[switch-id='EL_ChanOfUse_Yes10']").removeAttribute("disabled")
    document.querySelector("[switch-id='EL_GfaAris_Yes10']").removeAttribute("disabled")

  } else {
    document.querySelector("[switch-id='EL_ChanOfUse_Yes10']").setAttribute("disabled", "")
    document.querySelector("[switch-id='EL_ChanOfUse_Yes10']").checked = false;
    document.querySelector("[switch-id='EL_GfaAris_Yes10']").setAttribute("disabled", "")
    document.querySelector("[switch-id='EL_GfaAris_Yes10']").checked = false;
  }
  EL_Exist_Oth_change("EL_Exist_Oth10", "EL_Exist_Oth20");
  EL_ChanOfUse_Yes10_change();
}
function EL_ChanOfUse_change(el) {
  let existWork = document.querySelectorAll("[group-id='EL_Exist_id']")
  let proposeWork = document.querySelectorAll("[group-id='EL_Proposed_id']")

  document.getElementById("EL_Exist_Oth20").removeAttribute("mandatory");
  document.getElementById("EL_Exist_Oth20").setAttribute("hidden", "");
  document.getElementById("EL_Exist_Oth20").value = ""

  document.getElementById("EL_Propo_Oth20").removeAttribute("mandatory");
  document.getElementById("EL_Propo_Oth20").setAttribute("hidden", "");
  document.getElementById("EL_Propo_Oth20").value = ""
  if (el.checked) {
    for (let a of existWork) {
      a.checked = false
      a.removeAttribute("disabled");
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
    for (let b of proposeWork) {
      if (b.id != "EL_Propo_MedCli20") {
        b.checked = false
        b.removeAttribute("disabled");
        b.setAttribute("checked", "");
        b.setAttribute("mandatory", "");
      }
    }
  } else {
    for (let a of existWork) {
      a.checked = false
      a.setAttribute("disabled", "");
      a.removeAttribute("checked");
      a.removeAttribute("mandatory");
    }
    for (let b of proposeWork) {
      b.checked = false
      b.setAttribute("disabled", "");
      b.removeAttribute("checked");
      b.removeAttribute("mandatory");
    }
    document.getElementById("EL_TypeOfUse_GFA_10").setAttribute("disabled", "")
    document.getElementById("EL_TypeOfUse_GFA_10").value = "";
  }
  EL_ChanOfUse_Yes10_change()
}

function EL_ChanOfUse_Yes10_change() {
  let swithchBtn1 = document.querySelector("[switch-id='EL_ChanOfUse_Yes10']");
  let swithchBtn2 = document.querySelector("[switch-id='EL_GfaAris_Yes10']");
  let existWork = document.querySelectorAll("[group-id='EL_Exist_id']");
  let proposeWork = document.querySelectorAll("[group-id='EL_Proposed_id']");
  let gfaTextboxes = [
    document.getElementById("DetlGfa_PrimUse_Ind10"),
    document.getElementById("DetlGfa_PrimUse_Ind50"),
    document.getElementById("DetlGfa_PredUse_GenInd10"),
    document.getElementById("DetlGfa_PredUse_GenInd50"),
    document.getElementById("DetlGfa_PredUse_SpecInd10"),
    document.getElementById("DetlGfa_PredUse_SpecInd50"),
    document.getElementById("DetlGfa_PrimUse_BusiPark10"),
    document.getElementById("DetlGfa_PrimUse_BusiPark50"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi10"),
    document.getElementById("DetlGfa_SecoUse_AnciOffi50"),
    document.getElementById("DetlGfa_SecoUse_OthAnci10"),
    document.getElementById("DetlGfa_SecoUse_OthAnci50"),
    document.getElementById("DetlGfa_SecoUse_AnciCant10"),
    document.getElementById("DetlGfa_SecoUse_AnciCant50"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm10"),
    document.getElementById("DetlGfa_AnciUse_InteUrbaFarm50"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse10"),
    document.getElementById("DetlGfa_AnciUse_SeleCommUse50"),
    document.getElementById("DetlGfa_AnciUse_Show10"),
    document.getElementById("DetlGfa_AnciUse_Show50"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm10"),
    document.getElementById("DetlGfa_SecoUse_WorkDorm50"),
    document.getElementById("DetlGfa_AnciUse_Seco10"),
    document.getElementById("DetlGfa_AnciUse_Seco50"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent10"),
    document.getElementById("DetlGfa_WhiteUse_ChilCent50"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst10"),
    document.getElementById("DetlGfa_WhiteUse_CiviCommInst50"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi10"),
    document.getElementById("DetlGfa_WhiteUse_CommOffi50"),
    document.getElementById("DetlGfa_WhiteUse_EducInst10"),
    document.getElementById("DetlGfa_WhiteUse_EducInst50"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt10"),
    document.getElementById("DetlGfa_SecoUse_HoteServApt50"),
    document.getElementById("DetlGfa_WhiteUse_MechElec10"),
    document.getElementById("DetlGfa_WhiteUse_MechElec50"),
    document.getElementById("DetlGfa_WhiteUse_MediClin10"),
    document.getElementById("DetlGfa_WhiteUse_MediClin50"),
    document.getElementById("DetlGfa_WhiteUse_Resi10"),
    document.getElementById("DetlGfa_WhiteUse_Resi50"),
    document.getElementById("DetlGfa_WhiteUse_ServApar10"),
    document.getElementById("DetlGfa_WhiteUse_ServApar50"),
    document.getElementById("DetlGfa_SecoUse_RetaShop10"),
    document.getElementById("DetlGfa_SecoUse_RetaShop50"),
    document.getElementById("DetlGfa_SecoUse_FB10"),
    document.getElementById("DetlGfa_SecoUse_FB50"),
    document.getElementById("DetlGfa_SecoUse_Oth110"),
    document.getElementById("DetlGfa_SecoUse_Oth210"),
    document.getElementById("DetlGfa_SecoUse_Oth610"),
    document.getElementById("DetlGfa_SecoUse2_Oth110"),
    document.getElementById("DetlGfa_SecoUse2_Oth210"),
    document.getElementById("DetlGfa_SecoUse2_Oth610"),

  ];

  if (swithchBtn1.checked == true) {
    if (swithchBtn2.checked == false) {
      document.getElementById("typeOfuse_id").innerHTML = "Type of Use*"
      document.getElementById("DetaGrossFlooArea_id").innerHTML = "Details of Gross Floor Area";
      stopHere: for (let a of existWork) {
        if (a.checked) {
          break stopHere;
        } else {
          a.setAttribute("checked", "");
          a.setAttribute("mandatory", "");
          a.removeAttribute("disabled", "");
        }
      }
      stopHere: for (let b of proposeWork) {
        if (b.id == "EL_Propo_MedCli10") {
          EL_Propo_MedCli10_change(document.getElementById(b.id))
        }
        if (b.checked) {
          break stopHere;
        } else {
          if (b.id != "EL_Propo_MedCli20") {
            b.setAttribute("checked", "");
            b.setAttribute("mandatory", "");
            b.removeAttribute("disabled", "");
          }
        }
      }
      document.getElementById("EL_TypeOfUse_GFA_10").removeAttribute("disabled")

      for (let textbox of gfaTextboxes) {
        textbox.removeAttribute("mandatory");
        textbox.setAttribute("disabled", "");
        textbox.value = "";
      }
    } else {
      document.getElementById("typeOfuse_id").innerHTML = "Type of Use";
      document.getElementById("DetaGrossFlooArea_id").innerHTML = "Details of Gross Floor Area*";
      for (let a of existWork) {
        a.removeAttribute("checked");
        a.removeAttribute("mandatory");
        a.setAttribute("disabled", "");
        a.checked = false;
      }
      for (let b of proposeWork) {
        b.removeAttribute("checked");
        b.removeAttribute("mandatory");
        b.setAttribute("disabled", "");
        b.checked = false;
        if (b.id == "EL_Propo_MedCli10") {
          EL_Propo_MedCli10_change(document.getElementById(b.id))
        }
      }
      document.getElementById("EL_TypeOfUse_GFA_10").setAttribute("disabled", "");
      document.getElementById("EL_TypeOfUse_GFA_10").value = "";

      for (let textbox of gfaTextboxes) {
        textbox.setAttribute("mandatory", "");
        textbox.removeAttribute("disabled", "");
      }

    }
  } else if (swithchBtn1.checked == false && swithchBtn2.checked == true) {
    for (let textbox of gfaTextboxes) {
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled", "");
    }
  } else {
    document.getElementById("EL_TypeOfUse_GFA_10").setAttribute("disabled", "");
    document.getElementById("EL_TypeOfUse_GFA_10").value = "";

    document.getElementById("typeOfuse_id").innerHTML = "Type of Use"
    document.getElementById("DetaGrossFlooArea_id").innerHTML = "Details of Gross Floor Area";
    for (let a of existWork) {
      a.removeAttribute("checked");
      a.removeAttribute("mandatory");
      a.setAttribute("disabled", "");
      a.checked = false;
    }
    for (let b of proposeWork) {
      if (b.id == "EL_Propo_MedCli10") {
        EL_Propo_MedCli10_change(document.getElementById(b.id))
      }
      b.removeAttribute("checked");
      b.removeAttribute("mandatory");
      b.setAttribute("disabled", "");
      b.checked = false;
    }
    for (let textbox of gfaTextboxes) {
      textbox.removeAttribute("mandatory");
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
  EL_Exist_Oth_change("EL_Exist_id", "EL_Exist_Oth20");
}

function disableDelete(containerName, className) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;

  if (formCount < 2) {
    document.querySelector(className).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(className);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}
// function fileAttachCheck(element, objectName, isAllowMultiple, formName, sectionName) {
//   if (element.id == "E_PropWorkFore_YesNo10") {
//     jsonData[objectName] = {
//       checkListId: element.id,
//       isAllowMultiple: isAllowMultiple,
//       formName: formName,
//       sectionName: sectionName
//     };
//   } else {
//     delete jsonData[objectName];
//   }
// }

function fileAttachCheck(
  element,
  isActive,
  id,
  allowMultiple,
  filename,

) {
  if (element.id == "E_PropWorkFore_YesNo10") {
    let nameOfFile = filename;
    try {
      nameOfFile = JSON.parse(filename);
    } catch (e) { }


    if (isActive) {
      jsonData[id] = {
        checkListId: element.id,
        isAllowMultiple: allowMultiple,
        formName: nameOfFile,
        errorMsg: "Missing Form A.pdf",
      };
    } else {
      delete jsonData[id];
    }
  }
}
