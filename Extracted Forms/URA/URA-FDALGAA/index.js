// toggle of "Submission Type" in page 1
function PartOfAppl_ApplTp10_change(element) {
  let value = document.getElementById(element.id).valueLabel.trim();
  let PartOfAppl_LodgTp10_tr = document.getElementById(
    "PartOfAppl_LodgTp10_tr"
  );
  let PartOfAppl_LodgTp10 = document.getElementById("PartOfAppl_LodgTp10");
  let PartOfAppl_SubmTp10_tr = document.getElementById(
    "PartOfAppl_SubmTp10_tr"
  );
  let PartOfAppl_SubmTp10 = document.getElementById("PartOfAppl_SubmTp10");
  let UnitInfo_add10 = document.getElementById("UnitInfo_add10");
  let unitInfo_delete10_10 = document.getElementById("unitInfo_delete10_10");
  let page4 = document.querySelector('[target="page4"]');
  let page5 = document.querySelector('[target="page5"]');
  let page6 = document.querySelector('[target="page6"]');

  if (
    value ===
    "Addition/Alteration to Buildings (Others) - Excluding Conserved Buildings within Historic Districts &amp; Residential Historic Districts"
  ) {
    if (PartOfAppl_LodgTp10_tr.hasAttribute("hidden")) {
      PartOfAppl_LodgTp10_tr.removeAttribute("hidden");
    }
    PartOfAppl_LodgTp10.value = "Agriculture Development";
    PartOfAppl_LodgTp10.setAttribute(
      "options",
      "Agriculture Development:Agriculture Development,Industrial/Warehouse Development (JTC):Industrial/Warehouse Development (JTC),Residential Development (HDB):Residential Development (HDB)"
    );
    UnitInfo_add10.removeAttribute("hidden");
    unitInfo_delete10_10.removeAttribute("hidden");
    showPages({ value: "Agriculture Development" });
    PartOfAppl_LodgTp10_change({ value: "Agriculture Development" });
  } else {
    if (PartOfAppl_LodgTp10_tr.hasAttribute("hidden")) {
      PartOfAppl_LodgTp10_tr.removeAttribute("hidden");
    }
    PartOfAppl_LodgTp10.value = "";
    PartOfAppl_LodgTp10.setAttribute("mandatory", "");
    PartOfAppl_LodgTp10.setAttribute(
      "options",
      "Residential (Landed Housing Area):Residential (Landed Housing Area)"
    );
    UnitInfo_add10.setAttribute("hidden", "");
    unitInfo_delete10_10.setAttribute("hidden", "");
  }
  page4.removeAttribute("hidden");
  page5.setAttribute("page-number", "5");
  page6.removeAttribute("hidden");
  PartOfAppl_SubmTp10_tr.setAttribute("hidden", "");
  PartOfAppl_SubmTp10.value = "";
}

function PartOfAppl_LodgTp10_change(element) {
  let value = element.value.trim();
  let PartOfAppl_SubmTp10_tr = document.getElementById(
    "PartOfAppl_SubmTp10_tr"
  );
  let PartOfAppl_SubmTp10 = document.getElementById("PartOfAppl_SubmTp10");

  if (
    value === "Residential Development (HDB)" ||
    value === "Industrial/Warehouse Development (JTC)"
  ) {
    PartOfAppl_SubmTp10_tr.removeAttribute("hidden");
    PartOfAppl_SubmTp10.value =
      "New Submission (for fresh submission and fresh amendment submission to Written Permission)";
    PartOfAppl_SubmTp10.setAttribute("disabled", "");
  } else {
    PartOfAppl_SubmTp10_tr.removeAttribute("hidden");
    PartOfAppl_SubmTp10.value =
      "New Submission (for fresh submission and fresh amendment submission to Written Permission)";
    PartOfAppl_SubmTp10.setAttribute("disabled", "");
  }

  for (let target of document.querySelectorAll(`[onLoadHide]`)) {
    target.removeAttribute("hidden");
  }

  let resiGfa = document.querySelectorAll("[resiGFA]")

  for (let gfa of resiGfa) {
    gfa.setAttribute("hidden", "")
  }

  let resiGfaTextBox = document.querySelectorAll("[excluded]");

  let arrayExclude = ["SiteDtls_ResiGfa_Appr",
    "SiteDtls_ResiGfa_Over",
    "SiteDtls_ResiPlotRati_Appr",
    "SiteDtls_ResiPlotRati_Over",
    "SiteDtls_BuilHeig_Appr",
    "SiteDtls_BuilHeig_Over",
    "SiteDtls_SiteCove_Appr",
    "SiteDtls_SiteCove_Over"]

  let arrayIndc = ["SiteDtls_ResiGfa_IncDec",
    "SiteDtls_ResiPlotRati_IncDec",
    "SiteDtls_BuilHeig_IncDec",
    "SiteDtls_SiteCove_IncDec"]

  for (let ex of resiGfaTextBox) {
    let prefix = ex.getAttribute("prefix")
    if (prefix.includes(arrayExclude)) {
      ex.value = "";
      ex.removeAttribute("mandatory");
    }
    if (prefix.includes(arrayIndc)) {
      ex.value = "";
    }
  }

  for (let a of document.querySelectorAll("[SiteDtls_NoOfResiUnit10_hide]")) {
    a.setAttribute("hidden", "");
  }
  for (let a of document.querySelectorAll(
    `[prefix="SiteDtls_NoOfResiUnit"]`
  )) {
    a.value = "";
    a.removeAttribute("mandatory");
  }

  for (let a of document.querySelectorAll("[communalOpenSpace]")) {
    a.setAttribute("hidden", "");
  }

  let siteNo = document.querySelectorAll("[prefix='SiteDtls_SiteNo']")

  for (let a of siteNo) {
    a.removeAttribute("mandatory");
  }
  //showPages
  showPages(element);
  //for Internal Checklist
  ApptypeInternalCheckList();
}

function showPages(el) {

  let arrayExclude = ["SiteDtls_ResiGfa_Appr",
    "SiteDtls_ResiGfa_Over",
    "SiteDtls_ResiPlotRati_Appr",
    "SiteDtls_ResiPlotRati_Over",
    "SiteDtls_BuilHeig_Appr",
    "SiteDtls_BuilHeig_Over",
    "SiteDtls_SiteCove_Appr",
    "SiteDtls_SiteCove_Over"]

  let resiGfa = document.querySelectorAll("[resiGFA]")

  let commSpaceTextBox = document.querySelectorAll("[communal]")

  let resiGfaTextBox = document.querySelectorAll("[excluded]");

  for (let a of commSpaceTextBox) {
    a.value = ""
    a.removeAttribute("mandatory");
  }

  for (let a of document.querySelectorAll("[communalOpenSpace]")) {
    a.setAttribute("hidden", "");
  }

  for (let a of document.querySelectorAll("[prefix = 'SiteDtls_NoOfResiUnit_label']")) {
    a.setAttribute("hidden", "");
    a.removeAttribute("mandatory");
    a.value = "";
  }

  for (let a of document.querySelectorAll("[prefix = 'SiteDtls_NoOfResiUnit']")) {
    a.setAttribute("hidden", "");
    a.removeAttribute("mandatory");
    a.value = "";
  }

  //Residential (Landed Housing Area)
  if (el.value == "Residential (Landed Housing Area)") {
    for (let a of document.querySelectorAll("[first-app]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      setMToMandatoryDIV(a.id);
    }
    for (let a of document.querySelectorAll("[second-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[third-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[fourth-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[SiteDtls_NoOfResiUnit10_hide]")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_BroaLandUse"]`
    )) {
      a.value = "";
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_NoOfResiUnit"]`
    )) {
      a.value = "";
      a.removeAttribute("mandatory")
    }
    document
      .getElementById("SubmInfo_PropForCndo_Yes10_hide")
      .setAttribute("hidden", "");
    document.querySelector(
      `[switch-id="SubmInfo_PropForCndo_Yes10"]`
    ).checked = false;
    document.getElementById("SubmInfo_PropForCndo_Yes10").checked = false;
    document.getElementById("SubmInfo_PropForCndo_No10").checked = true;
    document
      .getElementById("SubmInfo_AlrdyBeenBuilorCarrOut_Yes10_hide")
      .removeAttribute("hidden");
    document.querySelector(
      `[switch-id="SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"]`
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_No10"
    ).checked = true;

    document
      .getElementById("SubmInfo_DateLastTopIssuForExisDev10_hide")
      .removeAttribute("hidden");
    for (let a of document.querySelectorAll(`[daaa_tr]`)) {
      a.setAttribute("hidden", "");
    }
    document.querySelector("[totalBonusGFA]").setAttribute("hidden", "");
    document
      .getElementById("SubmInfo_NoOfBedsForFrgnWkrs10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10_label").innerHTML =
      "No. of Beds for Foreign Workers";
    document
      .querySelector(`[GfaDtls_InvoBnusGfaFeat_Yes10_hide]`)
      .setAttribute("hidden", "");
    if (document.querySelector("[target='page8']").hasAttribute("gfa-bonus"))
      document.querySelector("[target='page8']").removeAttribute("gfa-bonus");
    document.querySelector(
      `[switch-id="GfaDtls_InvoBnusGfaFeat_Yes10"]`
    ).checked = false;
    //document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_No10").checked = true;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_No10").checked = true;
    for (let a of document.querySelectorAll(`[GfaDtls_UseGfa]`)) {
      a.value = "";
    }
    for (let target of document.querySelectorAll(`[not-manda]`)) {
      target.setAttribute("hide-manda", "");
      target.removeAttribute("not-manda");
    }
    for (let a of document.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`)) {
      a.value = "";
    }
    document.getElementById("SubmInfo_PropDesc10").value = ""
    document.getElementById("SubmInfo_PropDesc10").value = "ADDITION / ALTERATION TO THE EXISTING #-STOREY DETACHED / SEMI-DETACHED / TERRACE DWELLING HOUSE ENVOLVING EXTESION / CONVERSION / ALTERATION TO THE ?"
    for (let a of document.querySelectorAll("[sec7agri]")) {
      a.setAttribute("hidden", "")
    }
    document
      .getElementById("SubmInfo_DateOfLeasExpi10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_DateOfLeasExpi10").value = "";
    for (let a of document.querySelectorAll(`[sec6agri]`)) {
      a.removeAttribute("hidden");
    }
    document.querySelector(`[section7A]`).removeAttribute("hidden");
    //document.querySelector(`[section7B]`).setAttribute("hidden", "");
    document.querySelector(`[section8B]`).setAttribute("hidden", "");
    document.querySelector(`[section8A]`).removeAttribute("hidden");

    //getRawID(document.querySelector(`[section7A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section7A");
    //setTempID(document.querySelector(`[section7B]`).querySelectorAll("[id]"));
    //setMandatoryToMDIV("section7B");

    //getRawID(document.querySelector(`[section8A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section8A");
    //setTempID(document.querySelector(`[section8B]`).querySelectorAll("[id]"));
    setMandatoryToMDIV("section8B");

    for (let gfa of resiGfa) {
      gfa.removeAttribute("hidden")
    }

    for (let ex of resiGfaTextBox) {
      let prefix = ex.getAttribute("prefix")
      if (prefix.includes(arrayExclude)) {
        ex.setAttribute("mandatory", "");
      }
    }
  }
  //Industrial/Warehouse Development (JTC)
  else if (el.value == "Industrial/Warehouse Development (JTC)") {
    for (let a of document.querySelectorAll("[first-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[second-app]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      setMToMandatoryDIV(a.id);
    }
    for (let a of document.querySelectorAll("[third-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[fourth-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[SiteDtls_NoOfResiUnit10_hide]")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_BroaLandUse"]`
    )) {
      a.value = "";
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_NoOfResiUnit"]`
    )) {
      a.value = "";
      a.removeAttribute("mandatory");
    }
    document.getElementById("SubmInfo_PropDesc10").value = ""
    document.getElementById("SubmInfo_PropDesc10").value = "ADDITION/ALTERATION TO THE EXISTING # - STOREY? DEVELOPMENT INVOLVING EXTENSION/CONVERSION/ALTERATION TO THE ?"
    document
      .getElementById("SubmInfo_AlrdyBeenBuilorCarrOut_Yes10_hide")
      .setAttribute("hidden", "");
    document.querySelector(
      `[switch-id="SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"]`
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_No10"
    ).checked = true;
    document
      .getElementById("SubmInfo_PropForCndo_Yes10_hide")
      .setAttribute("hidden", "");
    document.querySelector(
      `[switch-id="SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"]`
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_No10"
    ).checked = true;
    document
      .getElementById("SubmInfo_DateLastTopIssuForExisDev10_hide")
      .setAttribute("hidden", "");
    document.getElementById("SubmInfo_DateLastTopIssuForExisDev10").value = "";
    for (let a of document.querySelectorAll(`[daaa_tr]`)) {
      a.removeAttribute("hidden");
    }
    document.getElementById("SubmInfo_TpOfFrgnWkrsDorm10").value = "";
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10_label").innerHTML =
      "No. of Beds for Foreign Workers";
    document
      .getElementById("SubmInfo_NoOfBedsForFrgnWkrs10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10").value = "";
    document.querySelector("[totalBonusGFA]").removeAttribute("hidden");
    for (let target of document.querySelectorAll(`[hide-manda]`)) {
      target.setAttribute("not-manda", "");
      target.removeAttribute("hide-manda");
    }
    document.querySelector(
      `[switch-id="GfaDtls_InvoBnusGfaFeat_Yes10"]`
    ).checked = false;
    //document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document
      .querySelector(`[GfaDtls_InvoBnusGfaFeat_Yes10_hide]`)
      .removeAttribute("hidden");
    document.querySelector("[target='page8']").setAttribute("gfa-bonus", "");
    for (let a of document.querySelectorAll(`[not-manda]`)) {
      a.removeAttribute("mandatory");
    }
    for (let a of document.querySelectorAll(`[GfaDtls_UseGfa]`)) {
      a.value = "";
    }
    for (let a of document.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`)) {
      a.value = "";
    }
    for (let a of document.querySelectorAll("[sec7agri]")) {
      a.setAttribute("hidden", "")
    }
    document
      .getElementById("SubmInfo_DateOfLeasExpi10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_DateOfLeasExpi10").value = "";
    for (let a of document.querySelectorAll(`[sec6agri]`)) {
      a.removeAttribute("hidden");
    }
    document.querySelector(`[section7A]`).removeAttribute("hidden");
    //document.querySelector(`[section7B]`).setAttribute("hidden", "");
    document.querySelector(`[section8B]`).setAttribute("hidden", "");
    document.querySelector(`[section8A]`).removeAttribute("hidden");

    //getRawID(document.querySelector(`[section7A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section7A");
    //setTempID(document.querySelector(`[section7B]`).querySelectorAll("[id]"));
    //setMandatoryToMDIV("section7B");
    //getRawID(document.querySelector(`[section8A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section8A");
    //setTempID(document.querySelector(`[section8B]`).querySelectorAll("[id]"));
    setMandatoryToMDIV("section8B");

    for (let ex of resiGfaTextBox) {
      let prefix = ex.getAttribute("prefix")
      if (prefix.includes(arrayExclude)) {
        ex.setAttribute("mandatory", "");
      }
    }
  }
  //Residential Development (HDB)
  else if (el.value == "Residential Development (HDB)") {
    for (let a of document.querySelectorAll("[first-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[second-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[third-app]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      setMToMandatoryDIV(a.id);
    }
    for (let a of document.querySelectorAll("[fourth-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[SiteDtls_NoOfResiUnit10_hide]")) {
      a.removeAttribute("hidden");
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_BroaLandUse"]`
    )) {
      a.value = "";
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_NoOfResiUnit"]`
    )) {
      a.value = "";
      a.setAttribute("mandatory", "");
    }

    for (let a of document.querySelectorAll("[communalOpenSpace]")) {
      a.removeAttribute("hidden", "");
    }

    for (let a of commSpaceTextBox) {
      a.value = ""
      a.setAttribute("mandatory", "");
    }

    document
      .getElementById("SubmInfo_AlrdyBeenBuilorCarrOut_Yes10_hide")
      .setAttribute("hidden", "");
    document
      .getElementById("SubmInfo_PropForCndo_Yes10_hide")
      .removeAttribute("hidden");
    document
      .getElementById("SubmInfo_DateLastTopIssuForExisDev10_hide")
      .setAttribute("hidden", "");
    document.getElementById("SubmInfo_DateLastTopIssuForExisDev10").value = "";
    for (let a of document.querySelectorAll(`[daaa_tr]`)) {
      a.removeAttribute("hidden");
    }
    document.getElementById("SubmInfo_TpOfFrgnWkrsDorm10").value = "";
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10_label").innerHTML =
      "No. of Beds for Foreign Workers";
    document
      .getElementById("SubmInfo_NoOfBedsForFrgnWkrs10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10").value = "";
    document.querySelector("[totalBonusGFA]").removeAttribute("hidden");
    for (let target of document.querySelectorAll(`[hide-manda]`)) {
      target.setAttribute("not-manda", "");
      target.removeAttribute("hide-manda");
    }

    document.querySelector(
      `[switch-id="GfaDtls_InvoBnusGfaFeat_Yes10"]`
    ).checked = false;
    //document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document
      .querySelector(`[GfaDtls_InvoBnusGfaFeat_Yes10_hide]`)
      .removeAttribute("hidden");
    document.querySelector("[target='page8']").setAttribute("gfa-bonus", "");
    for (let a of document.querySelectorAll(`[not-manda]`)) {
      a.removeAttribute("mandatory");
    }
    for (let a of document.querySelectorAll(`[GfaDtls_UseGfa]`)) {
      a.value = "";
    }

    for (let a of document.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`)) {
      a.value = "";
    }
    for (let a of document.querySelectorAll("[sec7agri]")) {
      a.setAttribute("hidden", "")
    }
    document
      .getElementById("SubmInfo_DateOfLeasExpi10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_DateOfLeasExpi10").value = "";
    for (let a of document.querySelectorAll(`[sec6agri]`)) {
      a.removeAttribute("hidden");
    }
    document.querySelector(`[section7A]`).removeAttribute("hidden");
    //document.querySelector(`[section7B]`).setAttribute("hidden", "");
    document.querySelector(`[section8B]`).setAttribute("hidden", "");
    document.querySelector(`[section8A]`).removeAttribute("hidden");

    //getRawID(document.querySelector(`[section7A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section7A");
    //setTempID(document.querySelector(`[section7B]`).querySelectorAll("[id]"));
    //setMandatoryToMDIV("section7B");
    //getRawID(document.querySelector(`[section8A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section8A");
    //setTempID(document.querySelector(`[section8B]`).querySelectorAll("[id]"));
    setMandatoryToMDIV("section8B");

    document.getElementById("SubmInfo_PropDesc10").value = ""
    document.getElementById("SubmInfo_PropDesc10").removeAttribute("mandatory")
    document.getElementById("SubmInfo_PropDesc10").setAttribute("mandatory", "")

    for (let gfa of resiGfa) {
      if (!gfa.hasAttribute("builHeig")) {
        gfa.removeAttribute("hidden")
      }
    }

    for (let ex of resiGfaTextBox) {
      let prefix = ex.getAttribute("prefix")
      if (prefix.includes(arrayExclude)) {
        if (!ex.hasAttribute("builHeig")) {
          ex.setAttribute("mandatory", "");
        } else {
          ex.removeAttribute("mandatory");
        }
      }
    }
  }
  //Agriculture Developement
  else if (el.value == "Agriculture Development") {
    for (let a of document.querySelectorAll("[first-app]")) {
      a.setAttribute("hidden", "");
      setMToMandatoryDIV(a.id);
    }
    for (let a of document.querySelectorAll("[second-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[third-app]")) {
      a.setAttribute("hidden", "");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[fourth-app]")) {
      a.removeAttribute("hidden");
      setMandatoryToMDIV(a.id);
    }
    for (let a of document.querySelectorAll("[SiteDtls_NoOfResiUnit10_hide]")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_BroaLandUse"]`
    )) {
      a.value = "";
    }
    for (let a of document.querySelectorAll(
      `[prefix="SiteDtls_NoOfResiUnit"]`
    )) {
      a.value = "";
      a.removeAttribute("mandatory")
    }
    document
      .getElementById("SubmInfo_PropForCndo_Yes10_hide")
      .setAttribute("hidden", "");
    document.querySelector(
      `[switch-id="SubmInfo_PropForCndo_Yes10"]`
    ).checked = false;
    document.getElementById("SubmInfo_PropForCndo_Yes10").checked = false;
    document.getElementById("SubmInfo_PropForCndo_No10").checked = true;
    document
      .getElementById("SubmInfo_AlrdyBeenBuilorCarrOut_Yes10_hide")
      .removeAttribute("hidden");
    document.querySelector(
      `[switch-id="SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"]`
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_Yes10"
    ).checked = false;
    document.getElementById(
      "SubmInfo_AlrdyBeenBuilorCarrOut_No10"
    ).checked = true;

    document
      .getElementById("SubmInfo_DateLastTopIssuForExisDev10_hide")
      .removeAttribute("hidden");
    for (let a of document.querySelectorAll(`[daaa_tr]`)) {
      a.setAttribute("hidden", "");
    }
    document.querySelector("[totalBonusGFA]").setAttribute("hidden", "");
    document
      .getElementById("SubmInfo_NoOfBedsForFrgnWkrs10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10_label").innerHTML =
      "No. of Beds for Foreign Workers";
    document
      .querySelector(`[GfaDtls_InvoBnusGfaFeat_Yes10_hide]`)
      .setAttribute("hidden", "");
    if (document.querySelector("[target='page8']").hasAttribute("gfa-bonus"))
      document.querySelector("[target='page8']").removeAttribute("gfa-bonus");
    document.querySelector(
      `[switch-id="GfaDtls_InvoBnusGfaFeat_Yes10"]`
    ).checked = false;
    //document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_No10").checked = true;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10").checked = false;
    document.getElementById("GfaDtls_InvoBnusGfaFeat_No10").checked = true;
    for (let a of document.querySelectorAll(`[GfaDtls_UseGfa]`)) {
      a.value = "";
    }
    for (let target of document.querySelectorAll(`[not-manda]`)) {
      target.setAttribute("hide-manda", "");
      target.removeAttribute("not-manda");
    }
    for (let a of document.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`)) {
      a.value = "";
    }
    document.getElementById("SubmInfo_PropDesc10").value = ""
    document.getElementById("SubmInfo_PropDesc10").value = "ADDITION/ALTERATION TO THE EXISTING #-STOREY ? DEVELOPMENT INVOLVING EXTENSION/CONVERSION/ALTERATION TO THE ?"
    for (let a of document.querySelectorAll("[sec7agri]")) {
      a.setAttribute("hidden", "")
    }
    document
      .getElementById("SubmInfo_DateOfLeasExpi10")
      .removeAttribute("mandatory");
    document.getElementById("SubmInfo_DateOfLeasExpi10").value = "";
    for (let a of document.querySelectorAll(`[sec6agri]`)) {
      a.removeAttribute("hidden");
    }
    document.querySelector(`[section7A]`).removeAttribute("hidden");
    //document.querySelector(`[section7B]`).setAttribute("hidden", "");
    document.querySelector(`[section8B]`).setAttribute("hidden", "");
    document.querySelector(`[section8A]`).removeAttribute("hidden");

    //getRawID(document.querySelector(`[section7A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section7A");
    //setTempID(document.querySelector(`[section7B]`).querySelectorAll("[id]"));
    //setMandatoryToMDIV("section7B");

    //getRawID(document.querySelector(`[section8A]`).querySelectorAll("[id]"));
    setMToMandatoryDIV("section8A");
    //setTempID(document.querySelector(`[section8B]`).querySelectorAll("[id]"));
    setMandatoryToMDIV("section8B");

    for (let gfa of resiGfa) {
      gfa.removeAttribute("hidden")
    }

    for (let ex of resiGfaTextBox) {
      let prefix = ex.getAttribute("prefix")
      if (prefix.includes(arrayExclude)) {
        ex.setAttribute("mandatory", "");
      }
    }
  }
}

function GnryDtls_PropInvoLandRepl10_change10(el) {
  if (el.value) {
    document.getElementById("landscape1").removeAttribute("hidden");

    document
      .getElementById("GnryDtls_AreaSoft10")
      .setAttribute("mandatory", "");
    document.getElementById("GnryDtls_AreaSoft10_TD").removeAttribute("hidden");
    document.getElementById("GnryDtls_AreaSoft10_label").innerHTML =
      "Area (softscape)*";
    document
      .getElementById("GnryDtls_AreaSoft10_label")
      .removeAttribute("hidden");
    if (
      el.value ==
      "Landscape Replacement Policy for Private Sector Developments - Within Strategic area" ||
      el.value ==
      "Landscape Replacement Policy for Public Sector Developments - Band 1 devt"
    ) {
      document
        .getElementById("GnryDtls_AreaHard10")
        .setAttribute("mandatory", "");
      document
        .getElementById("GnryDtls_AreaHard10_TD")
        .removeAttribute("hidden");
      document.getElementById("GnryDtls_AreaHard10_label").innerHTML =
        "Area (hardscape)*";
      document
        .getElementById("GnryDtls_AreaHard10_label")
        .removeAttribute("hidden");
    } else {
      document
        .getElementById("GnryDtls_AreaHard10")
        .removeAttribute("mandatory");
      document
        .getElementById("GnryDtls_AreaHard10_TD")
        .setAttribute("hidden", "");
      document.getElementById("GnryDtls_AreaHard10_label").innerHTML =
        "Area (hardscape)";
      document
        .getElementById("GnryDtls_AreaHard10_label")
        .setAttribute("hidden", "");
    }
    if (
      el.value == "Landscape Replacement – Outside Strategic Areas" ||
      el.value ==
      "Landscape Replacement Policy for Private Sector Developments - Within Strategic area"
    ) {
      document
        .getElementById("GnryDtls_GreenPlotRat10")
        .setAttribute("mandatory", "");
      document
        .getElementById("GnryDtls_GreenPlotRat10_TD")
        .removeAttribute("hidden");
      document.getElementById("GnryDtls_GreenPlotRat10_label").innerHTML =
        "Green Plot Ratio*";
      document
        .getElementById("GnryDtls_GreenPlotRat10_label")
        .removeAttribute("hidden");
    } else {
      document
        .getElementById("GnryDtls_GreenPlotRat10")
        .removeAttribute("mandatory");
      document
        .getElementById("GnryDtls_GreenPlotRat10_TD")
        .setAttribute("hidden", "");
      document.getElementById("GnryDtls_GreenPlotRat10_label").innerHTML =
        "Green Plot Ratio";
      document
        .getElementById("GnryDtls_GreenPlotRat10_label")
        .setAttribute("hidden", "");
    }
  }
}

function GnryDtls_PropInvoLandRepl_Yes10_change(yes) {
  let lush = document.querySelector(
    `[switch-id="GnryDtls_PropInvoGreeFeat_Yes10"]`
  );
  let field = document.getElementById("GnryDtls_PropInvoLandRepl10");
  let aste1 = document.getElementById("GnryDtls_AreaSoft10_label");
  let aste2 = document.getElementById("GnryDtls_AreaHard10_label");
  let aste3 = document.getElementById("GnryDtls_GreenPlotRat10_label");
  let fields = [
    document.getElementById("GnryDtls_AreaSoft10"),
    document.getElementById("GnryDtls_AreaHard10"),
    document.getElementById("GnryDtls_GreenPlotRat10"),
  ];
  let td = [
    document.getElementById("GnryDtls_AreaHard10_label"),
    document.getElementById("GnryDtls_AreaHard10_TD"),
    document.getElementById("GnryDtls_AreaSoft10_label"),
    document.getElementById("GnryDtls_AreaSoft10_TD"),
    document.getElementById("GnryDtls_GreenPlotRat10_label"),
    document.getElementById("GnryDtls_GreenPlotRat10_TD"),
  ];

  if (yes.checked) {
    lush.setAttribute("disabled", "");
    lush.checked = true;
    field.removeAttribute("hidden");
    field.setAttribute("mandatory", "");
  } else {
    lush.removeAttribute("disabled");
    lush.checked = false;
    field.setAttribute("hidden", "");
    field.removeAttribute("mandatory");
    field.value = "";
    aste1.innerHTML = "Area (softscape)";
    aste2.innerHTML = "Area (hardscape)";
    aste3.innerHTML = "Green Plot Ratio";
    for (let target of fields) {
      target.removeAttribute("mandatory");
      target.value = "";
    }
    for (let target of td) {
      target.setAttribute("hidden", "");
    }
    document.getElementById("landscape1").setAttribute("hidden", "");
  }

  //lush
  let lushFields = [
    document.getElementById("GnryDtls_GnryFeaturesA10"),
    document.getElementById("GnryDtls_GnryFeaturesB10"),
    document.getElementById("GnryDtls_GnryFeaturesC10"),
    document.getElementById("GnryDtls_GnryFeaturesD10"),
    document.getElementById("GnryDtls_GnryFeaturesE10"),
    document.getElementById("GnryDtls_GnryFeaturesF10"),
    document.getElementById("GnryDtls_GnryFeaturesG10"),
    document.getElementById("GnryDtls_GnryFeaturesH10"),
    document.getElementById("GnryDtls_GnryFeaturesI10"),
    document.getElementById("GnryDtls_GnryFeaturesJ10"),
    document.getElementById("GnryDtls_GnryFeaturesK10"),
  ];

  let label = document.querySelector(`[atleastOneLabel]`);
  let checkboxes = document.querySelectorAll(`[atleastOne]`);

  if (yes.checked) {
    label.removeAttribute("hidden");
    for (let target of checkboxes) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
  } else {
    label.setAttribute("hidden", "");
    for (let target of checkboxes) {
      target.setAttribute("disabled", "");
      target.checked = false;
      target.removeAttribute("mandatory", "");
      target.removeAttribute("checked", "");
    }
    for (let target of lushFields) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
  }
}

//lush
function GnryDtls_PropInvoGreeFeat_Yes10_changes(yes) {
  let fields = [
    document.getElementById("GnryDtls_GnryFeaturesA10"),
    document.getElementById("GnryDtls_GnryFeaturesB10"),
    document.getElementById("GnryDtls_GnryFeaturesC10"),
    document.getElementById("GnryDtls_GnryFeaturesD10"),
    document.getElementById("GnryDtls_GnryFeaturesE10"),
    document.getElementById("GnryDtls_GnryFeaturesF10"),
    document.getElementById("GnryDtls_GnryFeaturesG10"),
    document.getElementById("GnryDtls_GnryFeaturesH10"),
    document.getElementById("GnryDtls_GnryFeaturesI10"),
    document.getElementById("GnryDtls_GnryFeaturesJ10"),
    document.getElementById("GnryDtls_GnryFeaturesK10"),
  ];

  let checkboxes = document.querySelectorAll(`[atleastOne]`);
  let label = document.querySelector(`[atleastOneLabel]`);

  if (yes.checked) {
    label.removeAttribute("hidden");
    for (let target of checkboxes) {
      target.removeAttribute("disabled");
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
  } else {
    label.setAttribute("hidden", "");
    for (let target of checkboxes) {
      target.setAttribute("disabled", "");
      target.checked = false;
      target.removeAttribute("mandatory", "");
      target.removeAttribute("checked", "");
    }
    for (let target of fields) {
      target.setAttribute("disabled", "");
      target.removeAttribute("mandatory");
      target.value = "";
    }
  }
}

function enableTextboxBeside1(checkboxId) {
  let fields = [
    document.getElementById("GnryDtls_GnryFeaturesA10"),
    document.getElementById("GnryDtls_GnryFeaturesB10"),
    document.getElementById("GnryDtls_GnryFeaturesC10"),
    document.getElementById("GnryDtls_GnryFeaturesD10"),
    document.getElementById("GnryDtls_GnryFeaturesE10"),
    document.getElementById("GnryDtls_GnryFeaturesF10"),
    document.getElementById("GnryDtls_GnryFeaturesG10"),
    document.getElementById("GnryDtls_GnryFeaturesH10"),
    document.getElementById("GnryDtls_GnryFeaturesI10"),
    document.getElementById("GnryDtls_GnryFeaturesJ10"),
    document.getElementById("GnryDtls_GnryFeaturesK10"),
  ];
  let textbox = document.getElementById(checkboxId).parentNode;
  let checkboxes = document.getElementById(checkboxId);
  let test = false;

  //test atleastOne Checkbox is checked
  AtleastOneCheck(checkboxes);

  //get textbox beside
  while (textbox.querySelector("cn2-textbox") == null) {
    textbox = textbox.parentNode;
  }
  textbox = textbox.querySelector("cn2-textbox");

  if (document.getElementById(checkboxId).checked) {
    for (let target of fields) {
      if (target.value != "") {
        test = true;
        break;
      }
    }
    //inner If/else
    if (test == true) {
      textbox.removeAttribute("disabled");
    } else {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
  } else {
    for (let target of fields) {
      if (target.value != "" && !target.hasAttribute("disabled")) {
        test = true;
        break;
      }
    }
    //inner If/else
    if (test == true) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
      GnryDtls_GnryFeatures_change();
    } else {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  }
}

//test atleastOne Checkbox is checked
function AtleastOneCheck(el) {
  let checkboxes = document.querySelectorAll(`[atleastOne]`);
  let test = false;

  if (el.checked) {
    for (let target of checkboxes) {
      if (target.checked) {
        test = true;
      }
    }
  } else {
    for (let target of checkboxes) {
      if (target.checked) {
        test = true;
      }
    }
  }

  if (test == true) {
    for (let target of checkboxes) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
    }
  } else {
    for (let target of checkboxes) {
      target.setAttribute("mandatory", "");
      target.setAttribute("checked", "");
    }
  }
}

function GnryDtls_GnryFeatures_change() {
  let fields = [
    document.getElementById("GnryDtls_GnryFeaturesA10"),
    document.getElementById("GnryDtls_GnryFeaturesB10"),
    document.getElementById("GnryDtls_GnryFeaturesC10"),
    document.getElementById("GnryDtls_GnryFeaturesD10"),
    document.getElementById("GnryDtls_GnryFeaturesE10"),
    document.getElementById("GnryDtls_GnryFeaturesF10"),
    document.getElementById("GnryDtls_GnryFeaturesG10"),
    document.getElementById("GnryDtls_GnryFeaturesH10"),
    document.getElementById("GnryDtls_GnryFeaturesI10"),
    document.getElementById("GnryDtls_GnryFeaturesJ10"),
    document.getElementById("GnryDtls_GnryFeaturesK10"),
  ];
  let test = false;

  for (let target of fields) {
    if (target.value != "") {
      test = true;
    }
  }

  if (test == true) {
    for (let target of fields) {
      target.removeAttribute("mandatory");
    }
  } else {
    for (let target of fields) {
      if (!target.hasAttribute("disabled")) {
        target.setAttribute("mandatory", "");
      }
    }
  }
}

//Type of Foreign Workers Dormitory change
function SubmInfo_TpOfFrgnWkrsDorm10(el) {
  let label = document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10_label");
  let field = document.getElementById("SubmInfo_NoOfBedsForFrgnWkrs10");
  field.setAttribute("mandatory", "");
  label.innerHTML = "No. of Beds for Foreign Workers*";
}

function SiteDtls_BroaLandUse10_change(el) {
  let lodgementType = document.getElementById("PartOfAppl_LodgTp10");
  let broadLand = document.getElementById(el.id);
  let getPrefix =
    broadLand.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
      .parentNode;
  let residentialUnits = getPrefix.querySelector(
    `[prefix="SiteDtls_NoOfResiUnit"]`
  );
  let residentLabel = getPrefix.querySelector(
    `[prefix="SiteDtls_NoOfResiUnit_label"]`
  );

  if (lodgementType.value == "Residential Development (HDB)" && broadLand.value.includes("Residential")) {
    residentialUnits.setAttribute("mandatory", "");
    residentialUnits.removeAttribute("hidden");
    residentLabel.removeAttribute("hidden");
  } else {
    residentialUnits.removeAttribute("mandatory");
    residentialUnits.setAttribute("hidden", "");
    residentLabel.setAttribute("hidden", "");
  }

  if (
    broadLand.value.includes("Residential") &&
    lodgementType.value == "Residential (Landed Housing Area)"
  ) {
    residentialUnits.setAttribute("mandatory", "");
    residentialUnits.removeAttribute("hidden");
    residentLabel.removeAttribute("hidden");
  } else {
    residentialUnits.removeAttribute("mandatory");
    residentialUnits.setAttribute("hidden", "");
    residentLabel.setAttribute("hidden", "");
  }
}

function SiteDtls_SiteArea_Change_local(element) {
  calculateGPR2(element);
  calculateCPR2(element);
  if (
    document.getElementById("PartOfAppl_LodgTp10").value !=
    "Industrial/Warehouse Development(JTC)"
  )
    calculateRPR2(element);
}

function calculateGPR2(sourceElement) {
  let suffix = sourceElement.id.replace(
    document.getElementById(sourceElement.id).getAttribute("prefix"),
    ""
  );

  if (
    !isNaN(
      document.getElementById("SiteDtls_TotaGfa" + suffix).value /
      document.getElementById("SiteDtls_SiteArea" + suffix).value
    )
  ) {
    document.getElementById("SiteDtls_GrosPlotRati" + suffix).value = (
      parseFloat(document.getElementById("SiteDtls_TotaGfa" + suffix).value) /
      parseFloat(document.getElementById("SiteDtls_SiteArea" + suffix).value)
    ).toFixed(2);
  } else {
    document.getElementById("SiteDtls_GrosPlotRati" + suffix).value = "0.00";
  }
}

function calculateCPR2(sourceElement) {
  let suffix = sourceElement.id.replace(
    document.getElementById(sourceElement.id).getAttribute("prefix"),
    ""
  );

  if (
    !isNaN(
      document.getElementById("SiteDtls_CommGfa" + suffix).value /
      document.getElementById("SiteDtls_SiteArea" + suffix).value
    )
  ) {
    document.getElementById(
      "SiteDtls_CommPlotRati" + suffix
    ).value = parseFloat(
      document.getElementById("SiteDtls_CommGfa" + suffix).value /
      document.getElementById("SiteDtls_SiteArea" + suffix).value
    ).toFixed(2);
  } else {
    document.getElementById("SiteDtls_GrosPlotRati" + suffix).value = "0.00";
  }
}

function calculateRPR2(sourceElement) {
  let suffix = sourceElement.id.replace(
    document.getElementById(sourceElement.id).getAttribute("prefix"),
    ""
  );

  if (
    !isNaN(
      document.getElementById("SiteDtls_ResiGfa" + suffix).value /
      document.getElementById("SiteDtls_SiteArea" + suffix).value
    )
  ) {
    document.getElementById(
      "SiteDtls_ResiPlotRati" + suffix
    ).value = parseFloat(
      document.getElementById("SiteDtls_ResiGfa" + suffix).value /
      document.getElementById("SiteDtls_SiteArea" + suffix).value
    ).toFixed(2);
  } else {
    document.getElementById("SiteDtls_GrosPlotRati" + suffix).value = "0.00";
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

function countSideAddr() {
  if (document.getElementById("siteAddress").childElementCount >= 99) {
    document.getElementById("siteAddressAddBtn").setAttribute("disabled", "");
  } else {
    document.getElementById("siteAddressAddBtn").removeAttribute("disabled");
  }
}

// URA
let color = ""; // handles color changing of accordion
let defaults = {}; // handles the default values of checkboxes/radios and textboxes before form load
let mukimValidation = false; // for mukim validation
let mukimValidationId = ""; // for mukim validation
let totalNonBonusGFASum = 0; // for total GFA validation
let mukimFields = ["MkTs_MkTs_Mk", "MkTs_MkTs_Ts", "MkTs_MkTsNo", "MkTs_LotNo"]; // fields of mukim that has validations
let persAndOrgsRolesDefault = [

  "Lessee",
  "Management Corporation Strata Title",
  "Prospective Purchaser",
  "Surveyor",
  "Tenant",
  "Others",
]; // roles that every form will have
let persAndOrgsRolesRaw = [
  "Architect",
  "Engineer",

  "Lessee",
  "Management Corporation Strata Title",
  "Prospective Purchaser",
  "Surveyor",
  "Tenant",
  "Others",
]; // roles on form load

// events to trigger on form load
document.addEventListener("DOMContentLoaded", function (event) {
  if (jsonData["mukim"] !== undefined) {
    mukimValidation = jsonData["mukim"];
  }
  if (jsonData["mukimID"] !== undefined) {
    mukimValidationId = jsonData["mukimID"];
  }

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    for (let a of document.querySelectorAll(
      "[counter-form], [counter-table]"
    )) {
      a.value = "1";
    }

    for (let a of document
      .querySelector("[fourth-app]")
      .querySelectorAll("cn2-switchbutton")) {
      a.shadowRoot.querySelector("input").click();
    }
  }

  document.addEventListener("click", function (event) {
    if (!event.target.classList.contains("accordion-toggle")) return;
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    event.preventDefault();
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      return;
    }
    content.classList.toggle("active");
  });

  // if(!document.querySelector("[target='page1']").hasAttribute("valid")){
  //   document.getElementById("DeclGeneNewSubm_DevOr10").checked = false;
  //   document.getElementById("DeclGeneNewSubm_WorkWithConsArea10").checked = false;
  // }

  if (
    document.getElementById("SiteAdd_Container") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("SiteAdd_Container");
    nestedFormLoad(
      "SiteAdd_Container",
      "SiteAdd_Forms10",
      "Floor_Container10",
      "Floor_Fields10"
    );
  }

  if (
    document.getElementById("SiteAdd_Containerr") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("SiteAdd_Containerr");
    nestedFormLoad(
      "SiteAdd_Containerr",
      "SiteAdd_Formss10",
      "Floor_Containerr10",
      "Floor_Fieldss10"
    );
  }

  if (
    document.getElementById("SiteAdd_Containerrr") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("SiteAdd_Containerrr");
    nestedFormLoad(
      "SiteAdd_Containerrr",
      "SiteAdd_Formsss10",
      "Floor_Containerrr10",
      "Floor_Fieldsss10"
    );
  }

  if (
    document.getElementById("SiteDetails_Container") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("SiteDetails_Container");
    nestedFormLoad(
      "SiteDetails_Container",
      "SiteDetails_Forms10",
      "SiteFacilities10",
      "SiteFacilities_Fields10"
    );
  }

  if (
    document.getElementById("GFA_Container") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("GFA_Container");
    nestedFormLoad(
      "GFA_Container",
      "GFA_Forms10",
      "DevelopmentUse10",
      "DevelopmentUse_Fields10"
    );
  }

  if (
    document.getElementById("PersAndOrg_Container") &&
    !document.querySelector("[target='page1']").hasAttribute("valid")
  ) {
    loadDefaults("PersAndOrg_Container");
    nestedFormLoad(
      "PersAndOrg_Container",
      "PersAndOrg_Forms10",
      "ContDtls_Container10",
      "ContDtls_Fields10"
    );
    autoInsertPersonAndOrg("Agent (i.e. QP)", [
      "PersAndOrg_Container",
      "ContDtls_Container10",
      "ContDtls_Fields10",
    ]);
    autoInsertPersonAndOrg("Applicant (Developer)", [
      "PersAndOrg_Container",
      "ContDtls_Container10",
      "ContDtls_Fields10",
    ]);
    autoInsertPersonAndOrg("Owner", [
      "PersAndOrg_Container",
      "ContDtls_Container10",
      "ContDtls_Fields10",
    ]);
    autoInsertPersonAndOrg("multiple", [
      "PersAndOrg_Container",
      "ContDtls_Container10",
      "ContDtls_Fields10",
    ]);
    removeForm(
      "PersAndOrg_Container",
      "PersAndOrg_Forms10",
      "ContDtls_Container10",
      "ContDtls_Fields10_10"
    );
    activateAutoInsertedPersonAndOrg("PersAndOrg_Container");
  }

  if (document.getElementById("MK1")) {
    if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
      loadDefaults("MK1");
    }
    displayZero("MK1");
  }

  if (document.querySelector("[target='page8']")) {
    // For "TOTAL GFA -> USED GFA" VALIDATION OF GFA
    if (
      !document.querySelector("[target='page1']").hasAttribute("valid") &&
      totalNonBonusGFASum == 0
    ) {
      for (let a of document.querySelectorAll("[target]")) {
        a.addEventListener("click", (event) => {
          if (
            !document.querySelector("[target='page8']").hasAttribute("selected")
          ) {
            isValid = true;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[approved-use-gfa-nonbonus]")) {
              if (a.value > totalNonBonusGFASum) {
                isValid = false;
                break stopHere;
              }
            }

            if (!isValid) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                "[Sum of [Use GFA] for one site (for items that do not include Bonus GFA Items) must be equal to the [Total GFA] in Site details.]"
              );
            }
          }
        });
      }
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-next")
        .addEventListener("click", (event) => {
          if (
            !document.querySelector("[target='page8']").hasAttribute("selected")
          ) {
            isValid = true;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[approved-use-gfa-nonbonus]")) {
              if (a.value > totalNonBonusGFASum) {
                isValid = false;
                break stopHere;
              }
            }

            if (!isValid) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                "[Sum of [Use GFA] for one site (for items that do not include Bonus GFA Items) must be equal to the [Total GFA] in Site details.]"
              );
            }
          }
        });
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-previous")
        .addEventListener("click", (event) => {
          if (
            !document.querySelector("[target='page8']").hasAttribute("selected")
          ) {
            isValid = true;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[approved-use-gfa-nonbonus]")) {
              if (a.value > totalNonBonusGFASum) {
                isValid = false;
                break stopHere;
              }
            }

            if (!isValid) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                "[Sum of [Use GFA] for one site (for items that do not include Bonus GFA Items) must be equal to the [Total GFA] in Site details.]"
              );
            }
          }
        });
    }

    // For "Does your proposal involve Bonus GFA features (e.g. Balcony, Art Incentive, Lighting incentive, Green Mark) for this site?*" VALIDATION OF GFA
    if (
      !document.querySelector("[target='page1']").hasAttribute("valid") &&
      document.querySelector("[target='page8']").hasAttribute("gfa-bonus")
    ) {
      for (let a of document.querySelectorAll("[target]")) {
        a.addEventListener("click", (event) => {
          if (document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")) {
            isPresent = false;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[development-select]")) {
              if (a.value.toLowerCase().includes("bonus")) {
                isPresent = true;
                break stopHere;
              }
            }

            if (
              document
                .getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")
                .shadowRoot.querySelector("input").checked &&
              !document
                .querySelector("[target='page8']")
                .hasAttribute("selected") &&
              !isPresent
            ) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                'Please select at least 1 Bonus GFA item under "Development use"'
              );
            }
          }
        });
      }
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-next")
        .addEventListener("click", () => {
          if (document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")) {
            isPresent = false;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[development-select]")) {
              if (a.value.toLowerCase().includes("bonus")) {
                isPresent = true;
                break stopHere;
              }
            }

            if (
              document
                .getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")
                .shadowRoot.querySelector("input").checked &&
              !document
                .querySelector("[target='page8']")
                .hasAttribute("selected") &&
              !isPresent
            ) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                'Please select at least 1 Bonus GFA item under "Development use"'
              );
            }
          }
        });
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-previous")
        .addEventListener("click", () => {
          if (document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")) {
            isPresent = false;

            stopHere: for (let a of document
              .getElementById("page8")
              .querySelectorAll("[development-select]")) {
              if (a.value.toLowerCase().includes("bonus")) {
                isPresent = true;
                break stopHere;
              }
            }

            if (
              document
                .getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")
                .shadowRoot.querySelector("input").checked &&
              !document
                .querySelector("[target='page8']")
                .hasAttribute("selected") &&
              !isPresent
            ) {
              for (let b of document.querySelectorAll("[target]")) {
                if (b.getAttribute("target") == "page8") {
                  b.shadowRoot.querySelector("button").click();
                } else {
                  if (b.hasAttribute("selected")) b.removeAttribute("selected");
                }
              }

              showMessage(
                'Please select at least 1 Bonus GFA item under "Development use"'
              );
            }
          }
        });
    }
  }

  totalNonBonusGFASum = 0;
  for (let a of document.querySelectorAll("[gpr-total]")) {
    !isNaN(parseFloat(a.value))
      ? (totalNonBonusGFASum += parseFloat(a.value))
      : (totalNonBonusGFASum += 0);
  }
});

// saving to json file
function savingToJson(container) {
  let cn2Fields = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];
  let query = "";

  for (let x of cn2Fields) {
    if (x != "input") {
      query += `${x}, `;
    } else {
      query += `${x}`;
    }
  }

  let inputs = container.querySelectorAll(query);
  for (let x of inputs) {
    if (
      x.tagName.toLowerCase() == "cn2-checkbox" ||
      x.tagName.toLowerCase() == "input"
    ) {
      jsonData[x.id] = x.checked;
    } else {
      jsonData[x.id] = "";
    }
  }
}

// changing of IDs when a nested add/delete is present ( concatinating with _10 )
function nestedFormLoad(
  mainContainer,
  nestedForm,
  fieldContainer,
  nestedField
) {
  for (let a of document.querySelectorAll("#" + mainContainer)) {
    let container = a;

    if (container.querySelectorAll("[included]")) {
      let includes = container.querySelectorAll("[included]");
      for (let x of includes) {
        delete jsonData[x.id];
        if (!x.id.includes("#")) a.querySelector("#" + x.id).id = x.id + "_10";
      }
    }

    if (container.querySelectorAll("[switch-field]")) {
      let switchBtns = container.querySelectorAll("[switch-field]");
      for (let x of switchBtns) {
        a.querySelector("#" + x.id).removeAttribute("switch-id");
        document
          .getElementById(x.id)
          .setAttribute(
            "switch-id",
            x.parentElement.querySelector("[switch-yes]").id
          );
        a.querySelector("#" + x.id).removeAttribute("event-change");
        let newEvent =
          "switchButton(this, '" +
          x.parentElement.querySelector("[switch-yes]").id +
          "', '" +
          x.parentElement.querySelector("[switch-no]").id +
          "')";
        a.querySelector("#" + x.id).setAttribute("event-change", newEvent);
      }
    }

    if (a.querySelector("#" + nestedField + "_10")) {
      let formContainer = a.querySelector("#" + nestedField + "_10");
      let deleteBtn = formContainer.querySelectorAll("[danger-inside]");
      for (let x of deleteBtn) {
        x.setAttribute("disabled", "");
        x.removeAttribute("event-click");
        let newEvent = "";
        if (!x.hasAttribute("danger-gfa")) {
          newEvent =
            "removeField('" +
            container.id +
            "', '" +
            nestedForm +
            "', '" +
            fieldContainer +
            "', '" +
            nestedField +
            "_10" +
            "')";
        } else {
          if (x.hasAttribute("danger-gfa-three")) {
            newEvent =
              "removeField('" +
              container.id +
              "', '" +
              nestedForm +
              "', '" +
              fieldContainer +
              "', '" +
              nestedField +
              "_10" +
              "'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);";
          } else {
            newEvent =
              "removeField('" +
              container.id +
              "', '" +
              nestedForm +
              "', '" +
              fieldContainer +
              "', '" +
              nestedField +
              "_10" +
              "'); totalGFANormal('" +
              nestedForm +
              "');";
          }
        }
        x.setAttribute("event-click", newEvent);
      }

      if (formContainer.querySelectorAll("[switch-field]")) {
        let switchBtns = formContainer.querySelectorAll("[switch-field]");
        for (let x of switchBtns) {
          a.querySelector("#" + x.id).id = x.id + "_10";
        }
      }
    }

    if (container.querySelectorAll("[danger-main]")) {
      let deleteBtn2 = container.querySelectorAll("[danger-main]");
      for (let x of deleteBtn2) {
        a.querySelector("#" + x.id).removeAttribute("event-click");
        if (x.hasAttribute("danger-non-bonus")) {
          let newEvent2 =
            "removeForm('" +
            container.id +
            "', '" +
            nestedForm +
            "', '" +
            fieldContainer +
            "', '" +
            nestedField +
            "_10" +
            "', 'nonBonusGFA')";
          a.querySelector("#" + x.id).setAttribute("event-click", newEvent2);
        } else {
          let newEvent2 =
            "removeForm('" +
            container.id +
            "', '" +
            nestedForm +
            "', '" +
            fieldContainer +
            "', '" +
            nestedField +
            "_10" +
            "')";
          a.querySelector("#" + x.id).setAttribute("event-click", newEvent2);
        }
      }
    }

    if (container.querySelectorAll("[main-accordion-header-inside]")) {
      for (let a of container.querySelectorAll(
        "[main-accordion-header-inside]"
      )) {
        a.setAttribute("href", a.getAttribute("href") + "_10");
        a.setAttribute("id", a.getAttribute("id") + "_10");
      }
    }

    // if(container.querySelectorAll("[main-accordion-body-inside]")){
    //   for(let a of container.querySelectorAll("[main-accordion-body-inside]")){
    //     a.setAttribute("id", a.getAttribute("id") + "_10");
    //   }
    // }

    savingToJson(container);
  }
}

// getting the default values of checkboxes/radios and textboxes
function loadDefaults(container) {
  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  let currentContainer = document.getElementById(container);
  for (let y of componentList) {
    if (currentContainer.querySelectorAll(y)) {
      let fields = currentContainer.querySelectorAll(y);
      for (let z of fields) {
        if (y == "cn2-checkbox" || y == "input") {
          defaults[z.id] = currentContainer.querySelector("#" + z.id).checked;
        } else {
          defaults[z.id] = currentContainer.querySelector("#" + z.id).value;
        }
      }
    }
  }
}

// generate distinct random number from 1 to 99999
function generateRandomNumber(array) {
  let newNumber = Math.floor(Math.random() * 99999 + 1);
  if (array.includes(newNumber)) {
    generateRandomNumber(array);
  } else {
    return newNumber;
  }
}

// removes mandatory and formatting
function noMandatory(element) {
  if (document.getElementById(element).tagName.toLowerCase() != "input") {
    document.getElementById(element).setAttribute("mandatory", "");
    document.getElementById(element).removeAttribute("mandatory");
  } else {
    document.getElementById(element).setAttribute("mandatory", "");
    document.getElementById(element).setAttribute("checked", "");
    document.getElementById(element).removeAttribute("mandatory");
    document.getElementById(element).removeAttribute("checked");
    document.getElementById(element).setAttribute("m", "");
    document.getElementById(element).setAttribute("c", "");
  }
}

// insert mandatory and formatting
function yesMandatory(element) {
  if (document.getElementById(element).tagName.toLowerCase() != "input") {
    if (document.getElementById(element).hasAttribute("mandatory"))
      document.getElementById(element).removeAttribute("mandatory");
    if (document.getElementById(element).value == "") {
      document.getElementById(element).setAttribute("mandatory", "");
    } else {
      if (document.getElementById(element).hasAttribute("mandatory"))
        document.getElementById(element).removeAttribute("mandatory");
    }
  } else {
    if (document.getElementById(element).hasAttribute("mandatory"))
      document.getElementById(element).removeAttribute("mandatory");
    if (document.getElementById(element).hasAttribute("checked"))
      document.getElementById(element).removeAttribute("checked");

    let name = document.getElementById(element).getAttribute("name");
    let radios = document.querySelectorAll("[name='" + name + "']");
    let isChecked = false;

    stopHere: for (let a of radios) {
      if (document.getElementById(a.id).checked) {
        isChecked = true;
        break stopHere;
      }
    }

    if (isChecked) {
      document.getElementById(element).removeAttribute("mandatory");
      document.getElementById(element).removeAttribute("checked");
    } else {
      document.getElementById(element).setAttribute("mandatory", "");
      document.getElementById(element).setAttribute("checked", "");
    }
  }
}

// set mandatories to m then empty value
function MandatoryToM(con) {
  let currentDiv = document.getElementById(con);
  for (let a of currentDiv.querySelectorAll("[mandatory]")) {
    a.removeAttribute("mandatory");
    a.setAttribute("m", "");
    a.value = "";

    if (a.hasAttribute("checked")) {
      a.removeAttribute("checked");
      a.setAttribute("c", "");
      a.checked = false;
    }
  }

  let cn2FieldsEmpty = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
  ];
  let cn2FieldsFalse = ["cn2-checkbox", "input"];

  if (document.getElementById(con)) {
    for (let x of cn2FieldsEmpty) {
      for (let a of document.getElementById(con).querySelectorAll(x)) {
        document.getElementById(a.id).value = "";
        if (document.getElementById(a.id).hasAttribute("data-invalid"))
          document.getElementById(a.id).removeAttribute("data-invalid");
        if (document.getElementById(a.id).hasAttribute("data-invalid-message"))
          document.getElementById(a.id).removeAttribute("data-invalid-message");
      }
    }

    for (let x of cn2FieldsFalse) {
      for (let a of document.getElementById(con).querySelectorAll(x)) {
        document.getElementById(a.id).checked = false;
      }
    }
  }
}

// set m to mandatories
function MToMandatory(con) {
  let currentDiv = document.getElementById(con);
  for (let a of currentDiv.querySelectorAll("[m]")) {
    a.removeAttribute("m");
    a.setAttribute("mandatory", "");

    if (a.hasAttribute("c")) {
      a.removeAttribute("c");
      a.setAttribute("checked", "");
    }
  }
}

// disable/enable delete button in add/delete when only one form/field is present
function deleteBtnStatus(container, subContainer) {
  let inside = "";
  let main = document
    .getElementById(container)
    .querySelectorAll("[danger-main]");

  if (subContainer) {
    if (document.getElementById(subContainer))
      inside = document
        .getElementById(subContainer)
        .querySelectorAll("[danger-inside]");
  }

  if (main.length > 1) {
    for (let x of main) {
      document
        .getElementById(container)
        .querySelector("#" + x.id)
        .removeAttribute("disabled");
    }
  } else {
    for (let x of main) {
      document
        .getElementById(container)
        .querySelector("#" + x.id)
        .setAttribute("disabled", "");
    }
  }

  if (inside) {
    if (inside.length > 1) {
      for (let x of inside) {
        document
          .getElementById(container)
          .querySelector("#" + x.id)
          .removeAttribute("disabled");
      }
    } else {
      for (let x of inside) {
        document
          .getElementById(container)
          .querySelector("#" + x.id)
          .setAttribute("disabled", "");
      }
    }
  }
  displayZero(container);
  if (container == "SiteDetails_Container") {
    siteCounter(container);
  }
}

// changing of "Site No." fields' options based on number of site addressess in Site Address
function siteCounter(con) {
  let counter = document.getElementById(con).childElementCount;
  for (let a of document.querySelectorAll("[site-field]")) {
    let finalOptions = "";
    for (i = 0; i < counter; i++) {
      let b = i + 1;
      finalOptions += b + ":" + b;
      if (counter - 1 != i) {
        finalOptions += ",";
      }
    }
    document.getElementById(a.id).setAttribute("options", finalOptions);
  }
}

// alternating of background color in collapsed nested/add delete
function toggleColor(container) {
  let con = document.getElementById(container);
  let colors = ["rgb(244, 244, 244)", "white"];
  let counter = 0;
  for (let a of con.children) {
    if (counter > 1) counter = 0;
    let currentDiv = document.getElementById(a.id);
    if (
      currentDiv.querySelector(".accordion-toggle") &&
      currentDiv.querySelector("[main-accordion-body]")
    ) {
      currentDiv.querySelector(".accordion-toggle").style.backgroundColor =
        colors[counter];
      currentDiv.querySelector("[main-accordion-body]").style.backgroundColor =
        colors[counter];
    }

    counter++;
  }
}

// duplication of main nested add/delete
function duplicateForm(formContainer, fieldContainer, field, status) {
  let container = document.getElementById(formContainer);
  let clonedForm = container.lastElementChild.cloneNode(true);
  let containerCount = container.childElementCount;
  let generalCounter = containerCount + 1;
  let newFieldConID =
    document.getElementById(fieldContainer).getAttribute("prefix") +
    generalCounter +
    document.getElementById(fieldContainer).getAttribute("suffix");
  let counters = clonedForm.querySelectorAll("[counter-form]");
  let tempChild = "";

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (counters.length > 0) {
    for (let x of counters) {
      if (x.hasAttribute("id")) {
        x.value = generalCounter;
      } else {
        x.innerHTML = generalCounter;
      }
    }
  }

  clonedForm.id =
    clonedForm.getAttribute("prefix") +
    generalCounter +
    clonedForm.getAttribute("suffix");

  if (clonedForm.querySelector("[role-name]")) {
    // Grab the original element
    let original = clonedForm.querySelector("[role-name]");
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-select");

    // Grab all of the original's attributes, and pass them to the replacement
    for (let i = 0, l = original.attributes.length; i < l; ++i) {
      let nodeName = original.attributes.item(i).nodeName;
      let nodeValue = original.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    replacement.value = "";

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);
  }

  if (clonedForm.querySelector("[name-role]")) {
    // Grab the original element
    let original = clonedForm.querySelector("[name-role]");
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-select");

    // Grab all of the original's attributes, and pass them to the replacement
    for (let i = 0, l = original.attributes.length; i < l; ++i) {
      let nodeName = original.attributes.item(i).nodeName;
      let nodeValue = original.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    replacement.setAttribute("event-change", "loadDropDownDetailsURA(this);");
    // replacement.setAttribute("data-options", "persAndOrgsDropdown");
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);
  }

  if (clonedForm.querySelector("[road-name]")) {
    // Grab the original element
    let original = clonedForm.querySelector("[road-name]");
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-textbox");

    // Grab all of the original's attributes, and pass them to the replacement
    for (let i = 0, l = original.attributes.length; i < l; ++i) {
      let nodeName = original.attributes.item(i).nodeName;
      let nodeValue = original.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    if (replacement.hasAttribute("event-change"))
      replacement.removeAttribute("event-change");
    if (replacement.hasAttribute("data-options"))
      replacement.removeAttribute("data-options");
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);
  }

  if (clonedForm.querySelector("[formatted-road]")) {
    clonedForm.querySelector("[formatted-road]").setAttribute("disabled", "");
  }
  if (clonedForm.querySelector("[formatted-postal]")) {
    clonedForm.querySelector("[formatted-postal]").setAttribute("disabled", "");
  }

  if (clonedForm.querySelector("[line-one]")) {
    clonedForm.querySelector("[line-one]").value = "sample line 1";
  }

  if (clonedForm.querySelector("[asterisk]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[asterisk]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[cont-label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[cont-label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }

  if (clonedForm.querySelector("[h]")) {
    let hiddenFields = clonedForm.querySelectorAll("[h]");
    for (let hiddenField of hiddenFields) {
      hiddenField.setAttribute("hidden", "");
      hiddenField.value = "";
      if (hiddenField.querySelector("[id]")) {
        let fields = hiddenField.querySelectorAll("[id]");
        for (let field of fields) {
          if (field.hasAttribute("mandatory")) {
            field.removeAttribute("mandatory");
            field.setAttribute("m", "");
          }
        }
      }
    }
  }

  if (clonedForm.querySelector("[no-asterisk]")) {
    for (let a of clonedForm.querySelectorAll("[no-asterisk]")) {
      a.innerHTML = a.innerHTML.replace("*", "");
    }
  }

  if (clonedForm.querySelector("[d]")) {
    let hiddenFields = clonedForm.querySelectorAll("[d]");
    for (let hiddenField of hiddenFields) {
      if (hiddenField.hasAttribute("mandatory"))
        hiddenField.removeAttribute("mandatory");
      hiddenField.setAttribute("disabled", "");
      hiddenField.value = "";
    }
  }

  if (clonedForm.querySelector("[PersAndOrgs_Email]") != null) {
    //for persons and orgs email, telno and handno outside of contact details
    if (
      clonedForm.querySelector("[PersAndOrgs_Email]").hasAttribute("mandatory")
    )
      clonedForm
        .querySelector("[PersAndOrgs_Email]")
        .removeAttribute("mandatory");
    clonedForm
      .querySelector("[PersAndOrgs_TelNo]")
      .setAttribute("mandatory", "");
    clonedForm
      .querySelector("[PersAndOrgs_HandNo]")
      .setAttribute("mandatory", "");

    //for persons and orgs email, telno and handno inside of contact details
    clonedForm.querySelector("[Member_Cont_Email_Address_QP]").setAttribute("mandatory", "");
    clonedForm.querySelector("[Member_Cont_Tel_No_QP]").setAttribute("mandatory", "");
    clonedForm
      .querySelector("[Member_Cont_Hand_No_QP]")
      .setAttribute("mandatory", "");
  }

  let excludes = clonedForm.querySelectorAll("[excluded]");
  for (let el of excludes) {
    let newID = "";
    let pre = el.getAttribute("prefix");
    let suf = el.getAttribute("suffix");
    if (el.hasAttribute("mdo-option")) {
      let temp1 = el.id.replace(pre, "");
      let tempID = temp1.split("_");
      let position = tempID[tempID.length - 2];
      position = generalCounter + position[1];
      tempID[tempID.length - 2] = position;
      newID = pre + tempID.join("_");
    } else {
      newID = pre + generalCounter + suf;
    }
    //added
    if (el.hasAttribute("href")) {
      el.setAttribute("href", newID);
    }
    el.removeAttribute("id");
    el.setAttribute("id", newID);
  }

  let includes = clonedForm.querySelectorAll("[included]");
  for (let el of includes) {
    let newID = "";
    let pre = el.getAttribute("prefix");
    let suf = el.getAttribute("suffix");
    if (document.getElementById(el.id).hasAttribute("mdo-field-target")) {
      let temp1 = el.id.replace(pre, "");
      let tempID = temp1.split("_");
      let position = tempID[tempID.length - 3];
      position = generalCounter + position[1];
      tempID[tempID.length - 3] = position;
      newID = pre + tempID.join("_");
    } else {
      newID = pre + generalCounter + suf + "_10";
    }
    el.removeAttribute("id");
    el.setAttribute("id", newID);
  }

  if (clonedForm.querySelectorAll("[mdo-field-target]")) {
    let fields = clonedForm.querySelectorAll("[mdo-field-target]");
    for (let el of fields) {
      let newID = "";
      let pre = el.getAttribute("prefix");
      let suf = el.getAttribute("suffix");
      let temp1 = el.id.replace(pre, "");
      let tempID = temp1.split("_");
      let position = tempID[tempID.length - 3];
      position = generalCounter + position[1];
      tempID[tempID.length - 3] = position;
      newID = pre + tempID.join("_");
      el.removeAttribute("id");
      el.setAttribute("id", newID);
    }
  }

  if (clonedForm.querySelectorAll("[name], input[type='radio']")) {
    let radios = clonedForm.querySelectorAll("[name], input[type='radio']");
    for (let x of radios) {
      let oldName = x.getAttribute("name");
      x.setAttribute(
        "name",
        x.getAttribute("name").slice(0, -2) + generalCounter + "0"
      );
      x.checked = defaults[oldName];
      if (x.hasAttribute("c") && x.hasAttribute("m")) {
        x.setAttribute("checked", "");
        x.setAttribute("mandatory", "");
      }
    }
  }

  if (clonedForm.querySelectorAll("[switch-field]")) {
    let switchBtns = clonedForm.querySelectorAll("[switch-field]");
    for (let x of switchBtns) {
      x.removeAttribute("switch-id");
      x.setAttribute(
        "switch-id",
        x.parentElement.querySelector("[switch-yes]").id
      );
      x.removeAttribute("event-change");
      let newEvent =
        "switchButton(this, '" +
        x.parentElement.querySelector("[switch-yes]").id +
        "', '" +
        x.parentElement.querySelector("[switch-no]").id +
        "')";
      x.setAttribute("event-change", newEvent);
    }
  }

  let deleteBtn = clonedForm.querySelectorAll("[danger-inside]");
  let newFieldContainer =
    document.getElementById(fieldContainer).getAttribute("prefix") +
    generalCounter +
    document.getElementById(fieldContainer).getAttribute("suffix");
  let newField =
    document.getElementById(field + "_10").getAttribute("prefix") +
    generalCounter +
    document.getElementById(field + "_10").getAttribute("suffix") +
    "_10";
  for (let x of deleteBtn) {
    x.setAttribute("disabled", "");
    x.removeAttribute("event-click");
    let newEvent = "";
    if (!x.hasAttribute("danger-gfa")) {
      newEvent =
        "removeField('" +
        formContainer +
        "', '" +
        clonedForm.id +
        "', '" +
        newFieldContainer +
        "', '" +
        newField +
        "')";
    } else {
      if (x.hasAttribute("danger-gfa-three")) {
        newEvent =
          "removeField('" +
          formContainer +
          "', '" +
          clonedForm.id +
          "', '" +
          newFieldContainer +
          "', '" +
          newField +
          "'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);";
      } else {
        newEvent =
          "removeField('" +
          formContainer +
          "', '" +
          clonedForm.id +
          "', '" +
          newFieldContainer +
          "', '" +
          newField +
          "'); totalGFANormal('" +
          clonedForm.id +
          "');";
      }
    }
    x.setAttribute("event-click", newEvent);
  }

  let deleteBtn2 = clonedForm.querySelectorAll("[danger-main]");
  let newFieldContainer2 =
    document.getElementById(fieldContainer).getAttribute("prefix") +
    generalCounter +
    document.getElementById(fieldContainer).getAttribute("suffix");
  let newField2 =
    document.getElementById(field + "_10").getAttribute("prefix") +
    generalCounter +
    document.getElementById(field + "_10").getAttribute("suffix") +
    "_10";
  for (let x of deleteBtn2) {
    if (x.hasAttribute("danger-non-bonus")) {
      x.removeAttribute("event-click");
      let newEvent2 =
        "removeForm('" +
        formContainer +
        "', '" +
        clonedForm.id +
        "', '" +
        newFieldContainer2 +
        "', '" +
        newField2 +
        "', 'nonBonusGFA')";
      x.setAttribute("event-click", newEvent2);
      if (status == "multiple" || status == "mandatory") {
        x.setAttribute("hidden", "");
      } else {
        x.removeAttribute("hidden");
      }
    } else {
      x.removeAttribute("event-click");
      let newEvent2 =
        "removeForm('" +
        formContainer +
        "', '" +
        clonedForm.id +
        "', '" +
        newFieldContainer2 +
        "', '" +
        newField2 +
        "')";
      x.setAttribute("event-click", newEvent2);
      if (status == "multiple" || status == "mandatory") {
        x.setAttribute("hidden", "");
      } else {
        x.removeAttribute("hidden");
      }
    }
  }

  if (clonedForm.querySelectorAll("[switch-field]")) {
    let innerSwitches = clonedForm.querySelectorAll("[switch-field]");
    for (let x of innerSwitches) {
      if (x.hasAttribute("[mdo-field-target]")) {
        //
      } else {
        x.id = x.id + "_10";
      }
    }
  }

  let addBtn = clonedForm.querySelectorAll("[add]");
  let newAddFieldContainer =
    document.getElementById(fieldContainer).getAttribute("prefix") +
    generalCounter +
    document.getElementById(fieldContainer).getAttribute("suffix");
  for (let x of addBtn) {
    x.removeAttribute("event-click");
    let newAddEvent =
      "duplicateField('" +
      formContainer +
      "', '" +
      clonedForm.id +
      "', '" +
      newAddFieldContainer +
      "')";
    x.setAttribute("event-click", newAddEvent);
  }

  if (clonedForm.querySelector("[role-name]")) {
    clonedForm
      .querySelector("[role-name]")
      .setAttribute("disabled", "");
    clonedForm
      .querySelector("[role-name]")
      .removeAttribute("disabled");
  }

  if (status == "multiple") {
    let role = clonedForm.querySelector("[role-name]");

    role.setAttribute(
      "event-change",
      "checkRoleInput(this, '" +
      clonedForm.id +
      "'); checkRoles(this, 'PersAndOrg_Container'); changeIDPerRoleNew(this); setQpRegNoMandatory(this, '" +
      clonedForm.id +
      "');"
    );

    role.setAttribute("trio", "");
  } else if (status == "persandorgs") {
    let role = container.querySelectorAll("[role-name]");
    let options = [...persAndOrgsRolesDefault];
    let roleValues = [];
    for (let a = 0; a < role.length; a++) {
      roleValues[a] = role[a].id + ":" + role[a].value;
    }
    let tri = ["Engineer", "Architect"];
    let newTri = ["Engineer", "Architect"];
    for (let v of tri) {
      for (let m = 0; m < roleValues.length; m++) {
        let currentRole = roleValues[m].split(":");
        let val = currentRole[1];
        if (val == v) {
          let index = newTri.indexOf(v);
          delete newTri[index];
        }
      }
    }
    for (let c of newTri) {
      if (c) {
        options.push(c);
      }
    }
    options.sort();
    let newOptions = "";
    for (let z = 0; z < options.length; z++) {
      if (options[z]) {
        newOptions += `${options[z]}:${options[z]}`;
        if (z != options.length - 1) {
          newOptions += ",";
        }
      }
    }
    clonedForm
      .querySelector("[role-name]")
      .removeAttribute("trio");
    clonedForm
      .querySelector("[role-name]")
      .setAttribute("general", "");
    clonedForm
      .querySelector("[role-name]")
      .removeAttribute("options");
    clonedForm
      .querySelector("[role-name]")
      .setAttribute("options", newOptions);
  }

  if (clonedForm.querySelector("[role-name]")) {
    let current = clonedForm.querySelector("[role-name]");
    current.removeAttribute("event-change");
    current.setAttribute(
      "event-change",
      "checkRoleInput(this, '" +
      clonedForm.id +
      "'); checkRoles(this, 'PersAndOrg_Container'); changeIDPerRoleNew(this); setQpRegNoMandatory(this, '" +
      clonedForm.id +
      "');"
    );
  }

  if (clonedForm.querySelector("[total-gfa]")) {
    let current = clonedForm.querySelector("[total-gfa]");
    current.removeAttribute("event-input");
    current.setAttribute(
      "event-input",
      "totalGFA(this, '" + clonedForm.id + "');"
    );
  }

  if (clonedForm.querySelector("[total-gfa-normal]")) {
    let current = clonedForm.querySelector("[total-gfa-normal]");
    current.removeAttribute("event-input");
    current.setAttribute(
      "event-input",
      "onlyFloat(this); totalGFANormal('" + clonedForm.id + "');"
    );
  }

  if (clonedForm.querySelectorAll("[perOrgFormatted]")) {
    let formats = clonedForm.querySelectorAll("[perOrgFormatted]");
    for (let a of formats) {
      document.getElementById(a.id).className =
        document.getElementById(a.id).className.slice(0, -2) +
        generalCounter +
        "0";
    }
  }

  if (clonedForm.querySelector("[prefix='PersAndOrg_Format']")) {
    let current = clonedForm.querySelector("[prefix='PersAndOrg_Format']");
    current.removeAttribute("onclick");
    current.setAttribute(
      "onclick",
      "perAndOrgAddress(this, '" + clonedForm.id + "', 'perOrgFormatted');"
    );
  }

  if (clonedForm.querySelector("[prefix='PersAndOrg_Unformat']")) {
    let current = clonedForm.querySelector("[prefix='PersAndOrg_Unformat']");
    current.removeAttribute("onclick");
    current.setAttribute(
      "onclick",
      "perAndOrgAddress(this, '" + clonedForm.id + "', 'perOrgUnformatted');"
    );
  }

  if (clonedForm.querySelector("[qp-label]")) {
    clonedForm
      .querySelector("[qp-reg-no]")
      .setAttribute("mandatory", "");
    clonedForm
      .querySelector("[qp-reg-no]")
      .removeAttribute("mandatory");
  }
  tempChild = clonedForm.querySelector(`#${newFieldConID}`).firstElementChild;
  clonedForm.querySelector(`#${newFieldConID}`).innerHTML = "";
  clonedForm.querySelector(`#${newFieldConID}`).appendChild(tempChild);

  if (clonedForm.querySelector("[qp-reg-no]")) {
    if (clonedForm.querySelector("[qp-reg-no]").hasAttribute("mandatory"))
      clonedForm.querySelector("[qp-reg-no]").removeAttribute("mandatory");
  }

  if (clonedForm.querySelectorAll("[calculate-gpr]")) {
    for (let a of clonedForm.querySelectorAll("[calculate-gpr]")) {
      a.removeAttribute("event-input");
      a.setAttribute(
        "event-input",
        "calculateGPR('" + clonedForm.id + "'); totalNonBonusGFA();"
      );
    }
  }
  if (clonedForm.querySelectorAll("[calculate-cpr]")) {
    for (let a of clonedForm.querySelectorAll("[calculate-cpr]")) {
      a.removeAttribute("event-input");
      a.setAttribute("event-input", "calculateCPR('" + clonedForm.id + "');");
    }
  }
  if (clonedForm.querySelectorAll("[calculate-rpr]")) {
    for (let a of clonedForm.querySelectorAll("[calculate-rpr]")) {
      a.removeAttribute("event-input");
      a.setAttribute("event-input", "calculateRPR('" + clonedForm.id + "');");
    }
  }
  if (clonedForm.querySelectorAll("[calculate-site]")) {
    for (let a of clonedForm.querySelectorAll("[calculate-site]")) {
      a.removeAttribute("event-input");
      a.setAttribute(
        "event-input",
        "calculateGPR('" +
        clonedForm.id +
        "'); calculateCPR('" +
        clonedForm.id +
        "'); calculateRPR('" +
        clonedForm.id +
        "');"
      );
    }
  }

  if (clonedForm.querySelectorAll("[main-accordion-header-inside]")) {
    for (let a of clonedForm.querySelectorAll(
      "[main-accordion-header-inside]"
    )) {
      let hrefID = a.getAttribute("id");
      a.setAttribute("href", hrefID);
    }
  }

  if (clonedForm.querySelectorAll("[not-manda]")) {
    for (let a of clonedForm.querySelectorAll("[not-manda]")) {
      if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
    }
  }

  container.appendChild(clonedForm);

  deleteBtnStatus(formContainer, fieldContainer);
  savingToJson(clonedForm);
  toggleColor(formContainer);
  return clonedForm;
}

// deleting of main nested add/delete
function removeForm(formCon, form, fieldCon, field, status) {
  let formDiv = document.querySelector("#" + formCon + " > #" + form);
  let lastChild = document.getElementById(formCon).lastElementChild.id;
  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (formDiv.getAttribute("id") == lastChild) {
    formDiv.remove();
  } else {
    let containerDiv = document.getElementById(formCon).children;
    let position = "";
    let newFieldContainer2 = "";

    elementLoop: for (i = 0; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      if (currentDiv.id == formDiv.id) {
        position = i;
        break elementLoop;
      }
    }

    formDiv.remove();

    for (i = position; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      let elements = currentDiv.querySelectorAll("[prefix], [suffix]");
      let generalCounter = i + 1;
      currentDiv.id =
        currentDiv.getAttribute("prefix") +
        generalCounter +
        currentDiv.getAttribute("suffix");

      let counters = currentDiv.querySelectorAll("[counter-form]");
      if (counters.length > 0) {
        for (let x of counters) {
          if (x.hasAttribute("id")) {
            x.value = generalCounter;
          } else {
            x.innerHTML = generalCounter;
          }
        }
      }

      for (let el of elements) {
        delete jsonData[el.id];
        if (el.hasAttribute("excluded")) {
          let newID = "";
          let pre = el.getAttribute("prefix");
          let suf = el.getAttribute("suffix");
          if (el.hasAttribute("mdo-option")) {
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 2];
            position = generalCounter + position[1];
            tempID[tempID.length - 2] = position;
            newID = pre + tempID.join("_");
          } else {
            newID = pre + generalCounter + suf;
          }
          //added
          if (el.hasAttribute("href")) {
            el.setAttribute("href", newID);
          }
          el.removeAttribute("id");
          el.setAttribute("id", newID);
          document.getElementById(el.id).setAttribute("id", newID);
          if (
            componentList.includes(
              document.getElementById(el.id).tagName.toLowerCase()
            )
          ) {
            if (
              document.getElementById(el.id).tagName.toLowerCase() ==
              "cn2-checkbox" ||
              document.getElementById(el.id).tagName.toLowerCase() == "input"
            ) {
              jsonData[document.getElementById(el.id).id] = el.checked;
            } else {
              jsonData[document.getElementById(el.id).id] = el.value;
            }
          }
        } else {
          let trimmed = el.id.split("_");
          let trim = trimmed[trimmed.length - 1];
          let newID = "";
          let pre = el.getAttribute("prefix");
          let suf = el.getAttribute("suffix");
          if (document.getElementById(el.id).hasAttribute("mdo-field-target")) {
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 3];
            position = generalCounter + position[1];
            tempID[tempID.length - 3] = position;
            newID = pre + tempID.join("_");
          } else {
            newID = pre + generalCounter + suf + "_" + trim;
          }

          if (currentDiv.querySelectorAll("[mdo-field-target]")) {
            let fields = currentDiv.querySelectorAll("[mdo-field-target]");
            for (let el of fields) {
              let newID = "";
              let pre = el.getAttribute("prefix");
              let temp1 = el.id.replace(pre, "");
              let tempID = temp1.split("_");
              let position = tempID[tempID.length - 3];
              position = generalCounter + position[1];
              tempID[tempID.length - 3] = position;
              newID = pre + tempID.join("_");
              el.removeAttribute("id");
              el.setAttribute("id", newID);
            }
          }

          document.getElementById(el.id).setAttribute("id", newID);
          if (
            componentList.includes(
              document.getElementById(el.id).tagName.toLowerCase()
            )
          ) {
            if (
              document.getElementById(el.id).tagName.toLowerCase() ==
              "cn2-checkbox" ||
              document.getElementById(el.id).tagName.toLowerCase() == "input"
            ) {
              jsonData[document.getElementById(el.id).id] = el.checked;
            } else {
              jsonData[document.getElementById(el.id).id] = el.value;
            }
          }
        }
      }

      if (currentDiv.querySelector("cn2-switchbutton")) {
        let switchBtn = currentDiv.querySelector("cn2-switchbutton");
        let switchYes = currentDiv.querySelector("[switch-yes]").id;
        let switchNo = currentDiv.querySelector("[switch-no]").id;
        if (switchBtn.hasAttribute("switch-id"))
          switchBtn.removeAttribute("switch-id");
        switchBtn.setAttribute("switch-id", switchYes);

        if (switchBtn.hasAttribute("event-change"))
          switchBtn.removeAttribute("event-change");
        switchBtn.setAttribute(
          "event-change",
          "switchButton(this,'" + switchYes + "', '" + switchNo + "')"
        );
        document
          .getElementById(switchBtn.id)
          .setAttribute(
            "event-change",
            "switchButton(this,'" + switchYes + "', '" + switchNo + "')"
          );
      }

      if (currentDiv.querySelectorAll("[name], input[type='radio']")) {
        let radios = currentDiv.querySelectorAll("[name], input[type='radio']");
        for (let x of radios) {
          let oldName = x.getAttribute("name");
          x.setAttribute(
            "name",
            x.getAttribute("name").slice(0, -2) + generalCounter + "0"
          );
          // x.checked = defaults[oldName];
        }
      }

      let deleteBtn = currentDiv.querySelectorAll("[danger-inside]");
      let newFieldContainer =
        document.getElementById(fieldCon).getAttribute("prefix") +
        generalCounter +
        document.getElementById(fieldCon).getAttribute("suffix");
      let temp1 = field.split("_");
      let temp3 = temp1[temp1.length - 1];
      let temp2 = temp1.slice(0, -1);
      let newFieldID = temp2.join("_") + "_" + temp3;
      let newField =
        document.getElementById(newFieldID).getAttribute("prefix") +
        generalCounter +
        document.getElementById(newFieldID).getAttribute("suffix");
      for (let x of deleteBtn) {
        let newEvent = "";
        x.removeAttribute("event-click");
        let pos = x.id.split("_");
        if (!x.hasAttribute("danger-gfa")) {
          newEvent =
            "removeField('" +
            formCon +
            "', '" +
            currentDiv.id +
            "', '" +
            newFieldContainer +
            "', '" +
            newField +
            "_" +
            pos[pos.length - 1] +
            "')";
        } else {
          if (x.hasAttribute("danger-gfa-three")) {
            newEvent =
              "removeField('" +
              formCon +
              "', '" +
              currentDiv.id +
              "', '" +
              newFieldContainer +
              "', '" +
              newField +
              "_" +
              pos[pos.length - 1] +
              "'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);";
          } else {
            newEvent =
              "removeField('" +
              formCon +
              "', '" +
              currentDiv.id +
              "', '" +
              newFieldContainer +
              "', '" +
              newField +
              "_" +
              pos[pos.length - 1] +
              "'); totalGFANormal('" +
              currentDiv.id +
              "');";
          }
        }
        x.setAttribute("event-click", newEvent);
      }

      let deleteBtn2 = currentDiv.querySelectorAll("[danger-main]");
      newFieldContainer2 =
        document.getElementById(fieldCon).getAttribute("prefix") +
        generalCounter +
        document.getElementById(fieldCon).getAttribute("suffix");
      let newField2 =
        document.getElementById(field).getAttribute("prefix") +
        generalCounter +
        document.getElementById(field).getAttribute("suffix") +
        "_10";
      for (let x of deleteBtn2) {
        if (x.hasAttribute("danger-non-bonus")) {
          x.removeAttribute("event-click");
          let newEvent2 =
            "removeForm('" +
            formCon +
            "', '" +
            currentDiv.id +
            "', '" +
            newFieldContainer2 +
            "', '" +
            newField2 +
            "', 'nonBonusGFA')";
          x.setAttribute("event-click", newEvent2);
        } else {
          x.removeAttribute("event-click");
          let newEvent2 =
            "removeForm('" +
            formCon +
            "', '" +
            currentDiv.id +
            "', '" +
            newFieldContainer2 +
            "', '" +
            newField2 +
            "')";
          x.setAttribute("event-click", newEvent2);
        }
      }

      let addBtn = currentDiv.querySelectorAll("[add]");
      let newAddFieldContainer =
        document.getElementById(fieldCon).getAttribute("prefix") +
        generalCounter +
        document.getElementById(fieldCon).getAttribute("suffix");
      for (let x of addBtn) {
        x.removeAttribute("event-click");
        let newAddEvent =
          "duplicateField('" +
          formCon +
          "', '" +
          currentDiv.id +
          "', '" +
          newAddFieldContainer +
          "')";
        x.setAttribute("event-click", newAddEvent);
      }

      if (currentDiv.querySelector("[role-name]")) {
        let current = currentDiv.querySelector("[role-name]");
        current.removeAttribute("event-change");
        current.setAttribute(
          "event-change",
          "checkRoleInput(this, '" +
          currentDiv.id +
          "'); checkRoles(this, 'PersAndOrg_Container'); changeIDPerRoleNew(this); setQpRegNoMandatory(this, '" +
          currentDiv.id +
          "');"
        );
      }

      if (currentDiv.querySelector("[total-gfa-normal]")) {
        let current = currentDiv.querySelector("[total-gfa-normal]");
        current.removeAttribute("event-input");
        current.setAttribute(
          "event-input",
          "onlyFloat(this); totalGFANormal('" + currentDiv.id + "');"
        );
      }

      if (currentDiv.querySelectorAll("[perOrgFormatted]")) {
        let formats = currentDiv.querySelectorAll("[perOrgFormatted]");
        for (let a of formats) {
          document.getElementById(a.id).className =
            document.getElementById(a.id).className.slice(0, -2) +
            generalCounter +
            "0";
        }
      }

      if (currentDiv.querySelector("[prefix='PersAndOrg_Format']")) {
        let current = currentDiv.querySelector("[prefix='PersAndOrg_Format']");
        current.removeAttribute("onclick");
        current.setAttribute(
          "onclick",
          "perAndOrgAddress(this, '" + currentDiv.id + "', 'perOrgFormatted');"
        );
      }

      if (currentDiv.querySelector("[prefix='PersAndOrg_Unformat']")) {
        let current = currentDiv.querySelector(
          "[prefix='PersAndOrg_Unformat']"
        );
        current.removeAttribute("onclick");
        current.setAttribute(
          "onclick",
          "perAndOrgAddress(this, '" +
          currentDiv.id +
          "', 'perOrgUnformatted');"
        );
      }
      if (currentDiv.querySelectorAll("[calculate-gpr]")) {
        for (let a of currentDiv.querySelectorAll("[calculate-gpr]")) {
          a.removeAttribute("event-input");
          a.setAttribute(
            "event-input",
            "calculateGPR('" + currentDiv.id + "'); totalNonBonusGFA();"
          );
        }
      }
      if (currentDiv.querySelectorAll("[calculate-cpr]")) {
        for (let a of currentDiv.querySelectorAll("[calculate-cpr]")) {
          a.removeAttribute("event-input");
          a.setAttribute(
            "event-input",
            "calculateCPR('" + currentDiv.id + "');"
          );
        }
      }
      if (currentDiv.querySelectorAll("[calculate-rpr]")) {
        for (let a of currentDiv.querySelectorAll("[calculate-rpr]")) {
          a.removeAttribute("event-input");
          a.setAttribute(
            "event-input",
            "calculateRPR('" + currentDiv.id + "');"
          );
        }
      }
      if (currentDiv.querySelectorAll("[calculate-site]")) {
        for (let a of currentDiv.querySelectorAll("[calculate-site]")) {
          a.removeAttribute("event-input");
          a.setAttribute(
            "event-input",
            "calculateGPR('" +
            currentDiv.id +
            "'); calculateCPR('" +
            currentDiv.id +
            "'); calculateRPR('" +
            currentDiv.id +
            "');"
          );
        }
      }

      if (currentDiv.querySelectorAll("[main-accordion-header-inside]")) {
        for (let a of currentDiv.querySelectorAll(
          "[main-accordion-header-inside]"
        )) {
          let hrefID = a.getAttribute("id");
          a.setAttribute("href", hrefID);
        }
      }
    }
  }

  deleteBtnStatus(formCon, "");
  toggleColor(formCon);
  if (status == "nonBonusGFA") {
    totalNonBonusGFA();
  }
}

// duplication of inside add/delete
function duplicateField(formCon, form, fieldCon) {
  let formDiv = document.getElementById(form);
  let container = formDiv.querySelector("#" + fieldCon);
  let clonedForm = container.lastElementChild.cloneNode(true);
  let containerCount = container.childElementCount;
  let generalCounter = containerCount + 1;
  let elements = "";
  let deleteBtn = "";
  let newDeleteEvent = "";
  let counters = clonedForm.querySelectorAll("[counter-table]");

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (counters.length > 0) {
    for (let x of counters) {
      if (x.hasAttribute("id")) {
        x.value = generalCounter;
      } else {
        x.innerHTML = generalCounter;
      }
    }
  }

  clonedForm.id = clonedForm.id.slice(0, -2) + generalCounter + "0";

  elements = clonedForm.querySelectorAll("[included]");
  for (let el of elements) {
    let newID = "";
    let pre = el.getAttribute("prefix");
    let suf = el.getAttribute("suffix");
    if (document.getElementById(el.id).hasAttribute("mdo-field-target")) {
      let temp1 = el.id.replace(pre, "");
      let tempID = temp1.split("_");
      let position = tempID[tempID.length - 2];
      position = generalCounter + position[1];
      tempID[tempID.length - 2] = position;
      newID = pre + tempID.join("_");
    } else {
      newID = el.id.slice(0, -3) + "_" + generalCounter + "0";
    }
    el.removeAttribute("id");
    el.setAttribute("id", newID);
  }

  if (clonedForm.querySelectorAll("[mdo-field-target]")) {
    let fields = clonedForm.querySelectorAll("[mdo-field-target]");
    for (let el of fields) {
      let newID = "";
      let pre = el.getAttribute("prefix");
      let suf = el.getAttribute("suffix");
      let temp1 = el.id.replace(pre, "");
      let tempID = temp1.split("_");
      let position = tempID[tempID.length - 2];
      position = generalCounter + position[1];
      tempID[tempID.length - 2] = position;
      newID = pre + tempID.join("_");
      el.removeAttribute("id");
      el.setAttribute("id", newID);
    }
  }

  if (clonedForm.querySelectorAll("[name], input[type='radio']")) {
    let radios = clonedForm.querySelectorAll("[name], input[type='radio']");
    for (let x of radios) {
      let oldName = x.getAttribute("name");
      x.setAttribute(
        "name",
        x.getAttribute("name").slice(0, -2) + generalCounter + "0"
      );
      x.checked = defaults[oldName];
    }
  }

  if (clonedForm.querySelector("[asterisk]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[asterisk]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[cont-label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[cont-label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }

  if (clonedForm.querySelectorAll("[set-manda]")) {
    let fields = clonedForm.querySelectorAll("[set-manda]");
    for (let a of fields) {
      a.setAttribute("mandatory", "");
    }
  }

  if (clonedForm.querySelector("[h]")) {
    let hiddenFields = clonedForm.querySelectorAll("[h]");
    for (let hiddenField of hiddenFields) {
      hiddenField.setAttribute("hidden", "");
      hiddenField.value = "";
      if (hiddenField.querySelector("[id]")) {
        let fields = hiddenField.querySelectorAll("[id]");
        for (let field of fields) {
          if (field.hasAttribute("mandatory")) {
            field.removeAttribute("mandatory");
            field.setAttribute("m", "");
          }
        }
      }
    }
  }

  if (clonedForm.querySelector("[no-asterisk]")) {
    for (let a of clonedForm.querySelectorAll("[no-asterisk]")) {
      a.innerHTML = a.innerHTML.replace("*", "");
    }
  }

  if (clonedForm.querySelector("[d]")) {
    let hiddenFields = clonedForm.querySelectorAll("[d]");
    for (let hiddenField of hiddenFields) {
      if (hiddenField.hasAttribute("mandatory"))
        hiddenField.removeAttribute("mandatory");
      hiddenField.setAttribute("disabled", "");
      hiddenField.value = "";
    }
  }

  if (clonedForm.querySelector("[total-gfa]")) {
    let current = clonedForm.querySelector("[total-gfa]");
    current.removeAttribute("event-input");
    current.setAttribute("event-input", "totalGFA(this, '" + form + "');");
  }

  if (clonedForm.querySelector("[total-gfa-normal]")) {
    let current = clonedForm.querySelector("[total-gfa-normal]");
    current.removeAttribute("event-input");
    current.setAttribute(
      "event-input",
      "onlyFloat(this); totalGFANormal('" + form + "');"
    );
  }

  if (clonedForm.querySelectorAll("cn2-switchbutton")) {
    let switchBtns = clonedForm.querySelectorAll("cn2-switchbutton");
    for (let x of switchBtns) {
      x.removeAttribute("switch-id");
      x.setAttribute(
        "switch-id",
        x.parentElement.querySelector("[switch-yes]").id
      );
      x.removeAttribute("event-change");
      let newEvent =
        "switchButton(this, '" +
        x.parentElement.querySelector("[switch-yes]").id +
        "', '" +
        x.parentElement.querySelector("[switch-no]").id +
        "')";
      x.setAttribute("event-change", newEvent);
    }
  }

  if (clonedForm.querySelectorAll("[main-accordion-header-inside]")) {
    for (let a of clonedForm.querySelectorAll(
      "[main-accordion-header-inside]"
    )) {
      let hrefID = a.getAttribute("id");
      a.setAttribute("href", hrefID);
    }
  }

  deleteBtn = clonedForm.querySelector("[danger-inside]");
  deleteBtn.removeAttribute("event-click");
  if (deleteBtn.hasAttribute("danger-gfa")) {
    if (deleteBtn.hasAttribute("danger-gfa-three")) {
      newDeleteEvent = `removeField('${formCon}', '${form}', '${fieldCon}', '${clonedForm.id}'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);`;
    } else {
      newDeleteEvent = `removeField('${formCon}', '${form}', '${fieldCon}', '${clonedForm.id}'); totalGFANormal('${form}');`;
    }
  } else {
    newDeleteEvent = `removeField('${formCon}', '${form}', '${fieldCon}', '${clonedForm.id}');`;
  }
  deleteBtn.setAttribute("event-click", newDeleteEvent);

  if (clonedForm.querySelectorAll("[not-manda]")) {
    for (let a of clonedForm.querySelectorAll("[not-manda]")) {
      if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
    }
  }

  if (clonedForm.querySelectorAll("[approved-use-gfa-nonbonus]")) {
    for (let a of clonedForm.querySelectorAll("[approved-use-gfa-nonbonus]")) {
      a.removeAttribute("approved-use-gfa-nonbonus");
    }
  }

  container.appendChild(clonedForm);

  deleteBtnStatus(formCon, fieldCon);
  savingToJson(clonedForm);
  toggleColor(formCon);
}

// deleting of inside add/delete
function removeField(formCon, form, fieldCon, field) {
  let mainDiv = document
    .querySelector("#" + formCon)
    .querySelector("#" + form)
    .querySelector("#" + fieldCon);
  let deletedField = mainDiv.querySelector("#" + field);
  let lastChild = document.getElementById(fieldCon).lastElementChild.id;
  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (deletedField.getAttribute("id") == lastChild) {
    deletedField.remove();
  } else {
    let fieldContainer = document.getElementById(fieldCon).children;
    let position = 0;

    elementLoop: for (i = 0; i < fieldContainer.length; i++) {
      let currentDiv = fieldContainer[i];
      if (currentDiv.id == deletedField.id) {
        position = i;
        break elementLoop;
      }
    }

    deletedField.remove();

    for (i = position; i < fieldContainer.length; i++) {
      let currentDiv = fieldContainer[i];
      let elements = currentDiv.querySelectorAll("[included]");
      let generalCounter = i + 1;
      let counters = currentDiv.querySelectorAll("[counter-table]");

      let temp11 = currentDiv.getAttribute("id").split("_");
      let temp22 = temp11.slice(0, -1);
      let newID1 = temp22.join("_") + "_" + generalCounter + "0";
      currentDiv.id = newID1;

      if (counters.length > 0) {
        for (let x of counters) {
          if (x.hasAttribute("id")) {
            x.value = generalCounter;
          } else {
            x.innerHTML = generalCounter;
          }
        }
      }

      for (let el of elements) {
        delete jsonData[el.id];
        if (
          document.getElementById(el.id).hasAttribute("excluded") ||
          document.getElementById(el.id).hasAttribute("included")
        ) {
          let newID = "";
          let pre = el.getAttribute("prefix");
          let suf = el.getAttribute("suffix");
          if (document.getElementById(el.id).hasAttribute("mdo-field-target")) {
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 2];
            position = generalCounter + position[1];
            tempID[tempID.length - 2] = position;
            newID = pre + tempID.join("_");
          } else {
            let s = el.id.replace(el.getAttribute("prefix"), "");
            s[0] = s[0].substr(0, s[0].length - 1);
            newID = pre + s[0] + "0_" + generalCounter + suf;
          }

          document.getElementById(el.id).setAttribute("id", newID);

          if (
            componentList.includes(
              document.getElementById(el.id).tagName.toLowerCase()
            )
          ) {
            if (
              document.getElementById(el.id).tagName.toLowerCase() ==
              "cn2-checkbox" ||
              document.getElementById(el.id).tagName.toLowerCase() == "input"
            ) {
              jsonData[document.getElementById(el.id).id] = el.checked;
            } else {
              jsonData[document.getElementById(el.id).id] = el.value;
            }
          }
        } else {
          let trimmed = el.id.split("_");
          let trim = trimmed[trimmed.length - 1] - 1;
          let formerID = trimmed.slice(0, -1).join("_");
          let newID = formerID + "_" + trim;
          document.getElementById(el.id).setAttribute("id", newID);
          if (
            componentList.includes(
              document.getElementById(el.id).tagName.toLowerCase()
            )
          ) {
            if (
              document.getElementById(el.id).tagName.toLowerCase() ==
              "cn2-checkbox" ||
              document.getElementById(el.id).tagName.toLowerCase() == "input"
            ) {
              jsonData[document.getElementById(el.id).id] = el.checked;
            } else {
              jsonData[document.getElementById(el.id).id] = el.value;
            }
          }
        }
      }

      if (currentDiv.querySelectorAll("[mdo-field-target]")) {
        let fields = currentDiv.querySelectorAll("[mdo-field-target]");
        for (let el of fields) {
          let pre = el.getAttribute("prefix");
          let temp1 = el.id.replace(pre, "");
          let tempID = temp1.split("_");
          let position = tempID[tempID.length - 2];
          position = generalCounter + position[1];
          tempID[tempID.length - 2] = position;
          newID = pre + tempID.join("_");
          document.getElementById(el.id).setAttribute("id", newID);
        }
      }

      if (currentDiv.querySelector("cn2-switchbutton")) {
        let switchBtn = currentDiv.querySelectorAll("cn2-switchbutton");
        for (let b of switchBtn) {
          let switchYes = b.parentElement.querySelector("[switch-yes]").id;
          let switchNo = b.parentElement.querySelector("[switch-no]").id;
          if (b.hasAttribute("switch-id")) b.removeAttribute("switch-id");
          b.setAttribute("switch-id", switchYes);
          if (b.hasAttribute("event-change")) b.removeAttribute("event-change");
          b.setAttribute(
            "event-change",
            "switchButton(this,'" + switchYes + "', '" + switchNo + "')"
          );
        }
      }

      if (currentDiv.querySelector("[total-gfa]")) {
        let current = currentDiv.querySelector("[total-gfa]");
        current.removeAttribute("event-input");
        current.setAttribute("event-input", "totalGFA(this, '" + form + "');");
      }

      if (currentDiv.querySelector("[total-gfa-normal]")) {
        let current = currentDiv.querySelector("[total-gfa-normal]");
        current.removeAttribute("event-input");
        current.setAttribute(
          "event-input",
          "onlyFloat(this); totalGFANormal('" + currentDiv.id + "');"
        );
      }

      if (currentDiv.querySelectorAll("[main-accordion-header-inside]")) {
        for (let a of currentDiv.querySelectorAll(
          "[main-accordion-header-inside]"
        )) {
          let hrefID = a.getAttribute("id");
          a.setAttribute("href", hrefID);
        }
      }

      let deleteBtn = currentDiv.querySelectorAll("[danger-inside]");
      let temp1 = field.split("_");
      let temp2 = temp1.slice(0, -1);
      let newField = temp2.join("_") + "_" + generalCounter + "0";
      for (let x of deleteBtn) {
        x.removeAttribute("event-click");
        let newEvent =
          "removeField('" +
          formCon +
          "', '" +
          form +
          "', '" +
          fieldCon +
          "', '" +
          newField +
          "'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);";
        x.setAttribute("event-click", newEvent);

        if (x.hasAttribute("should-have-one")) {
          if (
            document
              .querySelector("[should-have-one-trigger]")
              .shadowRoot.querySelector("input").checked
          ) {
            document
              .querySelector("[should-have-one-trigger]")
              .shadowRoot.querySelector("input")
              .click();
            document
              .querySelector("[should-have-one-trigger]")
              .shadowRoot.querySelector("input")
              .click();
          }
        }
      }
    }
  }

  deleteBtnStatus(formCon, fieldCon);
  toggleColor(formCon);
}

// duplicate one form
function duplicateOneForm(formContainer, formField) {
  let container = document.getElementById(formContainer);
  let clonedForm = container.lastElementChild.cloneNode(true);
  let containerCount = container.childElementCount;
  let generalCounter = containerCount + 1;
  let counters = clonedForm.querySelectorAll("[counter-form]");

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (counters.length > 0) {
    for (let x of counters) {
      if (x.hasAttribute("id")) {
        x.value = generalCounter;
      } else {
        x.innerHTML = generalCounter;
      }
    }
  }

  clonedForm.id =
    clonedForm.getAttribute("prefix") +
    generalCounter +
    clonedForm.getAttribute("suffix");

  if (clonedForm.querySelector("[asterisk]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[asterisk]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }
  if (clonedForm.querySelector("[cont-label]") != null) {
    let asteriskFields = clonedForm.querySelectorAll("[cont-label]");
    for (let asteriskField of asteriskFields)
      if (asteriskField.innerHTML.indexOf("*") < 0)
        asteriskField.innerHTML = asteriskField.innerHTML + "*";
  }

  if (clonedForm.querySelector("[h]")) {
    let hiddenFields = clonedForm.querySelectorAll("[h]");
    for (let hiddenField of hiddenFields) {
      hiddenField.setAttribute("hidden", "");
      hiddenField.value = "";
      if (hiddenField.querySelector("[id]")) {
        let fields = hiddenField.querySelectorAll("[id]");
        for (let field of fields) {
          if (field.hasAttribute("mandatory")) {
            field.removeAttribute("mandatory");
            field.setAttribute("m", "");
          }
        }
      }
    }
  }

  if (clonedForm.querySelector("[no-asterisk]")) {
    for (let a of clonedForm.querySelectorAll("[no-asterisk]")) {
      a.innerHTML = a.innerHTML.replace("*", "");
    }
  }

  if (clonedForm.querySelector("[d]")) {
    let hiddenFields = clonedForm.querySelectorAll("[d]");
    for (let hiddenField of hiddenFields) {
      if (hiddenField.hasAttribute("mandatory"))
        hiddenField.removeAttribute("mandatory");
      hiddenField.setAttribute("disabled", "");
      hiddenField.value = "";
    }
  }

  let excludes = clonedForm.querySelectorAll("[prefix], [suffix]");
  for (let el of excludes) {
    if (el.hasAttribute("m")) el.setAttribute("mandatory", "");

    let pre = el.getAttribute("prefix");
    let suf = el.getAttribute("suffix");
    let newID = pre + generalCounter + suf;
    el.removeAttribute("id");
    el.setAttribute("id", newID);
    if (defaults.hasOwnProperty(el.id)) {
      if (el.tagName == "cn2-checkbox" || el.tagName == "input") {
        el.checked = defaults[el.id];
      } else {
        el.value = defaults[el.id];
      }
    }
  }

  if (clonedForm.querySelectorAll("[data-invalid]")) {
    for (let a of clonedForm.querySelectorAll("[data-invalid]")) {
      a.removeAttribute("data-invalid");
      a.removeAttribute("data-invalid-message");
    }
  }

  if (clonedForm.querySelectorAll("[name], input[type='radio']")) {
    let radios = clonedForm.querySelectorAll("[name], input[type='radio']");
    for (let x of radios) {
      let oldName = x.getAttribute("name");
      x.setAttribute(
        "name",
        x.getAttribute("name").slice(0, -2) + generalCounter + "0"
      );
      x.checked = defaults[oldName];
    }
  }

  if (clonedForm.querySelectorAll("[switch-field]")) {
    let switchBtns = clonedForm.querySelectorAll("[switch-field]");
    for (let x of switchBtns) {
      x.removeAttribute("switch-id");
      x.setAttribute(
        "switch-id",
        x.parentElement.querySelector("[switch-yes]").id
      );
      x.removeAttribute("event-change");
      let newEvent =
        "switchButton(this, '" +
        x.parentElement.querySelector("[switch-yes]").id +
        "', '" +
        x.parentElement.querySelector("[switch-no]").id +
        "')";
      x.setAttribute("event-change", newEvent);
    }
  }

  if (clonedForm.querySelectorAll("[danger-main]")) {
    let deleteBtn2 = clonedForm.querySelectorAll("[danger-main]");
    for (let x of deleteBtn2) {
      if (!x.hasAttribute("siteAddrDelBtn")) {
        x.removeAttribute("event-click");
        let newEvent2 =
          "removeOneForm('" + formContainer + "', '" + clonedForm.id + "')";
        x.setAttribute("event-click", newEvent2);
      } else {
        let eventClickVal = x.getAttribute("event-click");
        let noRemoveFormFunctionCall = eventClickVal.substring(
          "0",
          eventClickVal.indexOf("removeOneForm")
        );
        let newEvent2 =
          noRemoveFormFunctionCall +
          "removeOneForm('" +
          formContainer +
          "', '" +
          clonedForm.id +
          "');";
        x.setAttribute("event-click", newEvent2);
      }
    }
  }

  if (clonedForm.querySelectorAll("[radio-event]")) {
    let eventElements = clonedForm.querySelectorAll("[radio-event]");
    for (let x of eventElements) {
      let tag = x.getAttribute("event-attribute");
      let name = x.getAttribute("event-name");
      let values = x.getAttribute("event-value").split(", ");
      let newValues = [];
      for (let y of values) {
        if (y.includes("*")) {
          let [namePart, counterPart] = y.split("*");
          if (namePart[0] == "[") {
            namePart = namePart.slice(1);
          }
          if (namePart[namePart.length - 1] == "]") {
            namePart = namePart.slice(-1);
          }
          if (counterPart[0] == "[") {
            counterPart = counterPart.slice(1);
          }
          if (counterPart[counterPart.length - 1] == "]") {
            counterPart = counterPart.slice(0, -1);
          }
          let newCounterPart =
            parseInt(counterPart) + parseInt(generalCounter - 1 + "0");
          newValues.push("'" + namePart + newCounterPart + "'");
        } else {
          newValues.push(y);
        }
      }
      let newValueOfEvent = name + "(";
      for (let z = 0; z < newValues.length; z++) {
        if (z == 0) {
          newValueOfEvent += newValues[z] + ", [";
        } else {
          newValueOfEvent += newValues[z];
          if (z != newValues.length - 1) {
            newValueOfEvent += ", ";
          } else {
            newValueOfEvent += "]";
          }
        }
      }

      newValueOfEvent += ");";
      x.removeAttribute(tag);
      x.setAttribute(tag, newValueOfEvent);
    }
  }

  if (clonedForm.querySelectorAll("[textbox-event]")) {
    let eventElements = clonedForm.querySelectorAll("[textbox-event]");
    for (let x of eventElements) {
      let tag = x.getAttribute("event-attribute");
      let name = x.getAttribute("event-name");
      let values = x.getAttribute("event-value").split(", ");
      let newValues = [];
      for (let y of values) {
        if (y.includes("*")) {
          let [namePart, counterPart] = y.split("*");
          if (namePart[0] == "[") {
            namePart = namePart.slice(1);
          }
          if (namePart[namePart.length - 1] == "]") {
            namePart = namePart.slice(-1);
          }

          if (counterPart[0] == "[") {
            counterPart = counterPart.slice(1);
          }
          if (counterPart[counterPart.length - 1] == "]") {
            counterPart = counterPart.slice(0, -1);
          }
          let newCounterPart =
            parseInt(counterPart) + parseInt(generalCounter - 1 + "0");
          newValues.push("'" + namePart + newCounterPart + "'");
        } else {
          newValues.push(y);
        }
      }
      let newValueOfEvent = name + "(";
      for (let z = 0; z < newValues.length; z++) {
        if (z == 0) {
          newValueOfEvent += newValues[z] + ", ";
        } else {
          newValueOfEvent += newValues[z];
          if (z != newValues.length - 1) {
            newValueOfEvent += ", ";
          }
        }
      }
      newValueOfEvent += ");";
      x.removeAttribute(tag);
      x.setAttribute(tag, newValueOfEvent);
    }
  }

  if (clonedForm.querySelectorAll("[main-accordion-header]")) {
    let mainAccordionHeaders = clonedForm.querySelectorAll(
      "[main-accordion-header]"
    );
    for (let x of mainAccordionHeaders) {
      x.setAttribute("href", x.id);
    }
  }

  if (clonedForm.querySelectorAll("[radio1-mukim-validate]")) {
    let currents = clonedForm.querySelectorAll("[radio1-mukim-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("radio1-mukim-validate", generalCounter + "0");
      if (mukimValidation && mukimValidationId != "") {
        clonedForm.querySelector("#" + a.id).removeAttribute("mandatory");
        clonedForm.querySelector("#" + a.id).removeAttribute("checked");
      } else {
        clonedForm.querySelector("#" + a.id).setAttribute("mandatory", "");
        clonedForm.querySelector("#" + a.id).setAttribute("checked", "");
      }
    }
  }
  if (clonedForm.querySelectorAll("[radio2-mukim-validate]")) {
    let currents = clonedForm.querySelectorAll("[radio2-mukim-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("radio2-mukim-validate", generalCounter + "0");
      if (mukimValidation && mukimValidationId != "") {
        clonedForm.querySelector("#" + a.id).removeAttribute("mandatory");
        clonedForm.querySelector("#" + a.id).removeAttribute("checked");
      } else {
        clonedForm.querySelector("#" + a.id).setAttribute("mandatory", "");
        clonedForm.querySelector("#" + a.id).setAttribute("checked", "");
      }
    }
  }

  if (clonedForm.querySelectorAll("[mukim-validate]")) {
    let currents = clonedForm.querySelectorAll("[mukim-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("mukim-validate", generalCounter + "0");
      if (mukimValidation && mukimValidationId != "") {
        clonedForm.querySelector("#" + a.id).removeAttribute("mandatory");
      } else {
        clonedForm.querySelector("#" + a.id).setAttribute("mandatory", "");
      }
    }
  }

  if (clonedForm.getAttribute("main-con")) {
    clonedForm.removeAttribute("main-con");
    let listOfMainCons = [];

    let vals = document
      .getElementById(formContainer)
      .querySelectorAll("[main-con]");
    for (let a of vals) {
      listOfMainCons.push(a.getAttribute("main-con"));
    }
    clonedForm.setAttribute("main-con", generateRandomNumber(listOfMainCons));
  }

  if (clonedForm.querySelectorAll("[not-manda]")) {
    for (let a of clonedForm.querySelectorAll("[not-manda]")) {
      if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
    }
  }

  container.appendChild(clonedForm);

  deleteBtnStatus(formContainer);
  savingToJson(clonedForm);
  toggleColor(formContainer);
  checkIfMukimIsValidatedV2();
}

// deleting of one form
function removeOneForm(formCon, form) {
  let formDiv = document.querySelector("#" + formCon + " > #" + form);
  let lastChild = document.getElementById(formCon).lastElementChild.id;
  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  // As for sir Neth
  let menuList = document.getElementById("menu").children;
  let p = false;
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i].hasAttribute("warning") ||
      menuList[i].hasAttribute("valid")
    ) {
      p = true;
    }
  }
  if (p) {
    for (let i = 0; i < menuList.length; i++) {
      if (!menuList[i].hasAttribute("hidden")) {
        // if (menuList[i].hasAttribute("selected")) {
        //   menuList[i].removeAttribute("selected");
        // }
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

  if (formCon == "MK1") {
    if (
      document.getElementById(formDiv.id).getAttribute("main-con") ==
      mukimValidationId
    ) {
      mukimValidation = false;
      jsonData["mukim"] = false;
      mukimValidationId = "";
      jsonData["mukimID"] = "";

      let rawChilds = document.getElementById("MK1").children;
      let childs = [];
      for (let a of rawChilds) {
        if (a.id != form) {
          childs.push(a);
        }
      }

      for (let a of childs) {
        let field1 = a.querySelectorAll("[mukim-validate]");
        for (let x of field1) {
          yesMandatory(x.id);
        }
        let field2 = a.querySelectorAll("[radio1-mukim-validate]");
        for (let x of field2) {
          yesMandatory(x.id);
        }
        let field3 = a.querySelectorAll("[radio2-mukim-validate]");
        for (let x of field3) {
          yesMandatory(x.id);
        }
      }
    }
  }

  if (formDiv.getAttribute("id") == lastChild) {
    formDiv.remove();
  } else {
    let containerDiv = document.getElementById(formCon).children;
    let position = "";

    elementLoop: for (i = 0; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      if (currentDiv.id == formDiv.id) {
        position = i;
        break elementLoop;
      }
    }

    formDiv.remove();

    for (i = position; i < containerDiv.length; i++) {
      let currentDiv = containerDiv[i];
      let elements = currentDiv.querySelectorAll("[prefix], [suffix]");
      let generalCounter = i + 1;
      currentDiv.id =
        currentDiv.getAttribute("prefix") +
        generalCounter +
        currentDiv.getAttribute("suffix");
      let counters = currentDiv.querySelectorAll("[counter-form]");

      if (counters.length > 0) {
        for (let x of counters) {
          if (x.hasAttribute("id")) {
            x.value = generalCounter;
          } else {
            x.innerHTML = generalCounter;
          }
        }
      }
      for (let el of elements) {
        delete jsonData[el.id];
        let pre = el.getAttribute("prefix");
        let suf = el.getAttribute("suffix");
        let newID = pre + generalCounter + suf;
        document.getElementById(el.id).setAttribute("id", newID);
        if (
          componentList.includes(
            document.getElementById(el.id).tagName.toLowerCase()
          )
        ) {
          if (
            document.getElementById(el.id).tagName.toLowerCase() ==
            "cn2-checkbox" ||
            document.getElementById(el.id).tagName.toLowerCase() == "input"
          ) {
            jsonData[document.getElementById(el.id).id] = el.checked;
          } else {
            jsonData[document.getElementById(el.id).id] = el.value;
          }
        }
        if (el.hasAttribute("main-accordion-header"))
          el.setAttribute("href", el.id);
      }

      if (currentDiv.querySelectorAll("[name], input[type='radio']")) {
        let radios = currentDiv.querySelectorAll("[name], input[type='radio']");
        for (let x of radios) {
          let oldName = x.getAttribute("name");
          x.setAttribute(
            "name",
            x.getAttribute("name").slice(0, -2) + generalCounter + "0"
          );
          //x.checked = defaults[oldName];
        }
      }

      if (currentDiv.querySelector("cn2-switchbutton")) {
        let switchBtn = currentDiv.querySelector("cn2-switchbutton");
        let switchYes = currentDiv.querySelector("[switch-yes]").id;
        let switchNo = currentDiv.querySelector("[switch-no]").id;
        if (switchBtn.hasAttribute("switch-id"))
          switchBtn.removeAttribute("switch-id");
        switchBtn.setAttribute("switch-id", switchYes);
        if (switchBtn.hasAttribute("event-change"))
          switchBtn.removeAttribute("event-change");
        switchBtn.setAttribute(
          "event-change",
          "switchButton(this,'" + switchYes + "', '" + switchNo + "')"
        );
        document
          .getElementById(switchBtn.id)
          .setAttribute(
            "event-change",
            "switchButton(this,'" + switchYes + "', '" + switchNo + "')"
          );
      }

      let deleteBtn2 = currentDiv.querySelectorAll("[danger-main]");
      for (let x of deleteBtn2) {
        if (!x.hasAttribute("siteAddrDelBtn")) {
          x.removeAttribute("event-click");
          let newEvent2 =
            "removeOneForm('" + formCon + "', '" + currentDiv.id + "')";
          x.setAttribute("event-click", newEvent2);
        } else {
          let eventClickVal = x.getAttribute("event-click");
          let noRemoveFormFunctionCall = eventClickVal.substring(
            0,
            eventClickVal.indexOf("removeOneForm")
          );
          x.removeAttribute("event-click");
          let newEvent2 =
            noRemoveFormFunctionCall +
            "removeOneForm('" +
            formCon +
            "', '" +
            currentDiv.id +
            "');";
          x.setAttribute("event-click", newEvent2);
        }
      }

      if (currentDiv.querySelectorAll("[radio-event]")) {
        let eventElements = currentDiv.querySelectorAll("[radio-event]");
        for (let x of eventElements) {
          let tag = x.getAttribute("event-attribute");
          let name = x.getAttribute("event-name");
          let values = x.getAttribute("event-value").split(", ");
          let newValues = [];
          for (let y of values) {
            if (y.includes("*")) {
              let [namePart, counterPart] = y.split("*");
              if (namePart[0] == "[") {
                namePart = namePart.slice(1);
              }
              if (namePart[namePart.length - 1] == "]") {
                namePart = namePart.slice(-1);
              }
              if (counterPart[0] == "[") {
                counterPart = counterPart.slice(1);
              }
              if (counterPart[counterPart.length - 1] == "]") {
                counterPart = counterPart.slice(0, -1);
              }
              let newCounterPart =
                parseInt(counterPart) + parseInt(generalCounter - 1 + "0");
              newValues.push("'" + namePart + newCounterPart + "'");
            } else {
              newValues.push(y);
            }
          }
          let newValueOfEvent = name + "(";
          for (let z = 0; z < newValues.length; z++) {
            if (z == 0) {
              newValueOfEvent += newValues[z] + ", [";
            } else {
              newValueOfEvent += newValues[z];
              if (z != newValues.length - 1) {
                newValueOfEvent += ", ";
              } else {
                newValueOfEvent += "]";
              }
            }
          }
          newValueOfEvent += ");";
          x.removeAttribute(tag);
          x.setAttribute(tag, newValueOfEvent);
        }
      }

      if (currentDiv.querySelectorAll("[textbox-event]")) {
        let eventElements = currentDiv.querySelectorAll("[textbox-event]");
        for (let x of eventElements) {
          let tag = x.getAttribute("event-attribute");
          let name = x.getAttribute("event-name");
          let values = x.getAttribute("event-value").split(", ");
          let newValues = [];
          for (let y of values) {
            if (y.includes("*")) {
              let [namePart, counterPart] = y.split("*");
              if (namePart[0] == "[") {
                namePart = namePart.slice(1);
              }
              if (namePart[namePart.length - 1] == "]") {
                namePart = namePart.slice(-1);
              }

              if (counterPart[0] == "[") {
                counterPart = counterPart.slice(1);
              }
              if (counterPart[counterPart.length - 1] == "]") {
                counterPart = counterPart.slice(0, -1);
              }
              let newCounterPart =
                parseInt(counterPart) + parseInt(generalCounter - 1 + "0");
              newValues.push("'" + namePart + newCounterPart + "'");
            } else {
              newValues.push(y);
            }
          }
          let newValueOfEvent = name + "(";
          for (let z = 0; z < newValues.length; z++) {
            if (z == 0) {
              newValueOfEvent += newValues[z] + ", ";
            } else {
              newValueOfEvent += newValues[z];
              if (z != newValues.length - 1) {
                newValueOfEvent += ", ";
              }
            }
          }
          newValueOfEvent += ");";
          x.removeAttribute(tag);
          x.setAttribute(tag, newValueOfEvent);
        }
      }

      if (currentDiv.querySelectorAll("[radio1-mukim-validate]")) {
        let currents = currentDiv.querySelectorAll("[radio1-mukim-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("radio1-mukim-validate", generalCounter + "0");
        }
      }
      if (currentDiv.querySelectorAll("[radio2-mukim-validate]")) {
        let currents = currentDiv.querySelectorAll("[radio2-mukim-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("radio2-mukim-validate", generalCounter + "0");
        }
      }
      if (currentDiv.querySelectorAll("[mukim-validate]")) {
        let currents = currentDiv.querySelectorAll("[mukim-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("mukim-validate", generalCounter + "0");
        }
      }
    }
  }

  deleteBtnStatus(formCon, form);
  toggleColor(formCon);

  if (formCon == "MK1") checkIfMukimIsValidatedV2();
}

// For 'Telephone No.' validation in 'Person and Organisation' section
function PersAndOrgs_TelNoHandNo_Change(element, targetId1) {
  let suf = element.id;
  //suf = suf.replace(element.getAttribute("prefix"), "");
  suf = suf.replace(
    document.getElementById(element.id).getAttribute("prefix"),
    ""
  );
  let element2 = document.getElementById(targetId1 + suf);
  if (element.value != "" || element2.value != "") {
    if (document.getElementById(element.id).hasAttribute("mandatory"))
      document.getElementById(element.id).removeAttribute("mandatory");
    if (
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[label]")
        .innerHTML.includes("*")
    ) {
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector(
          "[label]"
        ).innerHTML = document
          .getElementById(element.id)
          .parentElement.parentElement.querySelector("[label]")
          .innerHTML.slice(0, -1);
    }
    if (element2.hasAttribute("mandatory"))
      element2.removeAttribute("mandatory");
    if (
      element2.parentElement.parentElement
        .querySelector("[label]")
        .innerHTML.includes("*")
    ) {
      element2.parentElement.parentElement.querySelector(
        "[label]"
      ).innerHTML = element2.parentElement.parentElement
        .querySelector("[label]")
        .innerHTML.slice(0, -1);
    }
  } else {
    document.getElementById(element.id).setAttribute("mandatory", "");
    if (
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[label]")
        .innerHTML.includes("*")
    ) {
    } else {
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[label]").innerHTML =
        document
          .getElementById(element.id)
          .parentElement.parentElement.querySelector("[label]").innerHTML + "*";
    }
    document.getElementById(element2.id).setAttribute("mandatory", "");
    if (
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector("[label]")
        .innerHTML.includes("*")
    ) {
    } else {
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector("[label]").innerHTML =
        document
          .getElementById(element2.id)
          .parentElement.parentElement.querySelector("[label]").innerHTML + "*";
    }
  }
}

// For 'Role' to 'QP Registration No.' validation in 'Person and Organisation' section
function setQpRegNoMandatory(element, form) {
  //targetIdPrefix value is the prefix of the id of the QP registration no
  if (element.value === "Architect" || element.value === "Engineer") {
    document
      .getElementById(form)
      .querySelector("[qp-reg-no]")
      .setAttribute("mandatory", "");

    document.getElementById(form).querySelector("[qp-label]").innerHTML =
      "QP Registration No. *";
  } else {
    document
      .getElementById(form)
      .querySelector("[qp-reg-no]")
      .setAttribute("mandatory", "");
    document
      .getElementById(form)
      .querySelector("[qp-reg-no]")
      .removeAttribute("mandatory", "");

    document.getElementById(form).querySelector("[qp-label]").innerHTML =
      "QP Registration No.";
  }
}

// For 'Contact details' : Email, TelNo. and HandNo. in 'Person and Organisation' section
function Member_Cont_Email_Address_QPHandNoTelNo_Change(element, targetId1, targetId2) {
  let suf = element.id;
  suf = suf.replace(
    document.getElementById(element.id).getAttribute("prefix"),
    ""
  );

  let element2 = document.getElementById(targetId1 + suf);
  let element3 = document.getElementById(targetId2 + suf);

  if (element.value != "" || element2.value != "") {
    if (document.getElementById(element.id).hasAttribute("mandatory"))
      document.getElementById(element.id).removeAttribute("mandatory");
    if (element2.hasAttribute("mandatory"))
      element2.removeAttribute("mandatory");
    if (element3.hasAttribute("mandatory"))
      element3.removeAttribute("mandatory");

    if (
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    )
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector(
          "[cont-label]"
        ).innerHTML = document
          .getElementById(element.id)
          .parentElement.parentElement.querySelector("[cont-label]")
          .innerHTML.slice(0, -1);
    if (
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    )
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector(
          "[cont-label]"
        ).innerHTML = document
          .getElementById(element2.id)
          .parentElement.parentElement.querySelector("[cont-label]")
          .innerHTML.slice(0, -1);
    if (
      document
        .getElementById(element3.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    )
      document
        .getElementById(element3.id)
        .parentElement.parentElement.querySelector(
          "[cont-label]"
        ).innerHTML = document
          .getElementById(element3.id)
          .parentElement.parentElement.querySelector("[cont-label]")
          .innerHTML.slice(0, -1);
  } else {
    document.getElementById(element.id).setAttribute("mandatory", "");
    element2.setAttribute("mandatory", "");
    element3.setAttribute("mandatory", "");

    if (
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    ) {
    } else {
      document
        .getElementById(element.id)
        .parentElement.parentElement.querySelector("[cont-label]").innerHTML =
        document
          .getElementById(element.id)
          .parentElement.parentElement.querySelector("[cont-label]").innerHTML +
        "*";
    }
    if (
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    ) {
    } else {
      document
        .getElementById(element2.id)
        .parentElement.parentElement.querySelector("[cont-label]").innerHTML =
        document
          .getElementById(element2.id)
          .parentElement.parentElement.querySelector("[cont-label]").innerHTML +
        "*";
    }
    if (
      document
        .getElementById(element3.id)
        .parentElement.parentElement.querySelector("[cont-label]")
        .innerHTML.includes("*")
    ) {
    } else {
      document
        .getElementById(element3.id)
        .parentElement.parentElement.querySelector("[cont-label]").innerHTML =
        document
          .getElementById(element3.id)
          .parentElement.parentElement.querySelector("[cont-label]").innerHTML +
        "*";
    }
  }
}

// checking of format in "Submission No. of Previous Submission" field in page 2
function checkFormat(el) {
  let value = el.value;
  let temp1 = value.split("");
  let message =
    "Please follow the format for this field ( e.g. 101219-01G1-Z000 )";
  if (value) {
    if (temp1.length === 16) {
      if (temp1[6] == "-" && temp1[11] == "-") {
        let dd = temp1[0] + temp1[1];
        if (parseInt(dd) < 32) {
          let mm = temp1[2] + temp1[3];
          if (parseInt(mm) < 13) {
            let yy = temp1[4] + temp1[5];
            if (parseInt(yy) >= 0) {
              if (
                parseInt(temp1[7]) >= 0 &&
                parseInt(temp1[8]) >= 0 &&
                temp1[9].match(/^[A-Za-z]+$/) &&
                parseInt(temp1[10]) >= 0
              ) {
                if (
                  temp1[12].match(/^[A-Za-z]+$/) &&
                  parseInt(temp1[13]) >= 0 &&
                  parseInt(temp1[14]) >= 0 &&
                  parseInt(temp1[15]) >= 0
                ) {
                  validMessage(el.id, "Valid format!"); return true;
                } else {
                  invalidMessage(el.id, message); return false;
                }
              } else {
                invalidMessage(el.id, message); return false;
              }
            } else {
              invalidMessage(el.id, message); return false;
            }
          } else {
            invalidMessage(el.id, message); return false;
          }
        } else {
          invalidMessage(el.id, message); return false;
        }
      } else {
        invalidMessage(el.id, message); return false;
      }
    } else {
      invalidMessage(el.id, message); return false;
    }
  } else {
    validMessage(el.id, "Valid format!");
  }
}

// event for invalid fields
function invalidMessage(id, message) {
  let element = document.getElementById(id, message);
  element.setAttribute("data-invalid", "");
  element.setAttribute("data-invalid-message", message);

  element.removeAttribute("data-valid");
  element.removeAttribute("data-valid-message");
}

// event for valid fields
function validMessage(id, message) {
  let element = document.getElementById(id);
  // element.setAttribute("data-valid", "");
  // element.setAttribute("data-valid-message", message);

  element.removeAttribute("data-invalid");
  element.removeAttribute("data-invalid-message");
}

// check if atleast one mukim is validated
function checkIfMukimIsValidated(element, field, rawForm, trigger) {
  let id = "";
  if (trigger != "delete") {
    id = document.getElementById(element.id).hasAttribute("mukim-validate")
      ? document.getElementById(element.id).getAttribute("mukim-validate")
      : document
        .getElementById(element.id)
        .hasAttribute("radio1-mukim-validate")
        ? document
          .getElementById(element.id)
          .getAttribute("radio1-mukim-validate")
        : document
          .getElementById(element.id)
          .getAttribute("radio2-mukim-validate");
  } else {
    id = element;
  }

  let form = "mk" + id;
  let container = "";
  let radio1 = "";
  let radio2 = "";
  let childs = "";
  if (document.getElementById(form)) {
    container = document
      .getElementById(form)
      .querySelectorAll("[mukim-validate]");
    radio1 = document
      .getElementById(form)
      .querySelector("[radio1-mukim-validate]").checked;
    radio2 = document
      .getElementById(form)
      .querySelector("[radio2-mukim-validate]").checked;

    let rawChilds = document.getElementById("MK1").children;
    childs = [];
    for (let a of rawChilds) {
      if (a.id != form) {
        childs.push(a);
      }
    }
  }

  let isEmpty = false;
  stopHere: for (let a of container) {
    if (a.value) {
      isEmpty = false;
    } else {
      isEmpty = true;
      break stopHere;
    }
  }

  if (!isEmpty && (radio1 || radio2)) {
    if (!mukimValidation) {
      for (let a of childs) {
        let field1 = a.querySelectorAll("[mukim-validate]");
        for (let x of field1) {
          noMandatory(x.id);
        }
        let field2 = a.querySelectorAll("[radio1-mukim-validate]");
        for (let x of field2) {
          noMandatory(x.id);
        }
        let field3 = a.querySelectorAll("[radio2-mukim-validate]");
        for (let x of field3) {
          noMandatory(x.id);
        }
      }
    }
    mukimValidationId = document.getElementById(form).getAttribute("main-con");
    jsonData["mukimID"] = document
      .getElementById(form)
      .getAttribute("main-con");
    mukimValidation = true;
    jsonData["mukim"] = true;

    for (let a of document.querySelectorAll("[radio1-mukim-validate]")) {
      if (a.hasAttribute("checked")) {
        a.removeAttribute("checked");
      }
      if (a.hasAttribute("mandatory")) {
        a.removeAttribute("mandatory");
      }
    }
    for (let a of document.querySelectorAll("[radio2-mukim-validate]")) {
      if (a.hasAttribute("checked")) {
        a.removeAttribute("checked");
      }
      if (a.hasAttribute("mandatory")) {
        a.removeAttribute("mandatory");
      }
    }
  } else {
    if (!mukimValidation) {
      for (let a of childs) {
        let field1 = a.querySelectorAll("[mukim-validate]");
        for (let x of field1) {
          yesMandatory(x.id);
        }
        let field2 = a.querySelectorAll("[radio1-mukim-validate]");
        for (let x of field2) {
          yesMandatory(x.id);
        }
        let field3 = a.querySelectorAll("[radio2-mukim-validate]");
        for (let x of field3) {
          yesMandatory(x.id);
        }
      }

      for (let a of document.querySelectorAll("[radio1-mukim-validate]")) {
        a.setAttribute("checked", "");
        a.setAttribute("mandatory", "");
      }
      for (let a of document.querySelectorAll("[radio2-mukim-validate]")) {
        a.setAttribute("checked", "");
        a.setAttribute("mandatory", "");
      }
    } else {
      if (
        document.getElementById(form).getAttribute("main-con") ==
        mukimValidationId
      ) {
        for (let a of childs) {
          let field1 = a.querySelectorAll("[mukim-validate]");
          for (let x of field1) {
            yesMandatory(x.id);
          }
          let field2 = a.querySelectorAll("[radio1-mukim-validate]");
          for (let x of field2) {
            yesMandatory(x.id);
          }
          let field3 = a.querySelectorAll("[radio2-mukim-validate]");
          for (let x of field3) {
            yesMandatory(x.id);
          }
        }
        mukimValidationId = "";
        jsonData["mukimID"] = "";
        mukimValidation = false;
        jsonData["mukim"] = false;

        for (let a of document.querySelectorAll("[radio1-mukim-validate]")) {
          a.setAttribute("checked", "");
          a.setAttribute("mandatory", "");
        }
        for (let a of document.querySelectorAll("[radio2-mukim-validate]")) {
          a.setAttribute("checked", "");
          a.setAttribute("mandatory", "");
        }
      } else {
        for (let a of childs) {
          let field1 = a.querySelectorAll("[mukim-validate]");
          for (let x of field1) {
            noMandatory(x.id);
          }
          let field2 = a.querySelectorAll("[radio1-mukim-validate]");
          for (let x of field2) {
            noMandatory(x.id);
          }
          let field3 = a.querySelectorAll("[radio2-mukim-validate]");
          for (let x of field3) {
            noMandatory(x.id);
          }
        }

        for (let a of document.querySelectorAll("[radio1-mukim-validate]")) {
          if (a.hasAttribute("checked")) {
            a.removeAttribute("checked");
          }
          if (a.hasAttribute("mandatory")) {
            a.removeAttribute("mandatory");
          }
        }
        for (let a of document.querySelectorAll("[radio2-mukim-validate]")) {
          if (a.hasAttribute("checked")) {
            a.removeAttribute("checked");
          }
          if (a.hasAttribute("mandatory")) {
            a.removeAttribute("mandatory");
          }
        }
      }
    }
  }

  mukimCheckDuplicate(element, form, "MK1");
}

// check the mandatories in mukim validation
function checkMandatories(el, field, form) {
  let fieldCon = document.getElementById(field);

  let fieldsOnForm = document.getElementById(form).children;
  if (fieldsOnForm.length > 1 && el.value) {
    let formInfo = [];
    let formInfoName = [];
    for (let a = 0; a < fieldsOnForm.length; a++) {
      let fieldName = fieldsOnForm[a].id;
      let tempValues = [];
      for (let i = 0; i < mukimFields.length; i++) {
        let el = document
          .getElementById(fieldsOnForm[a].id)
          .querySelector("[prefix='" + mukimFields[i] + "']");
        let value = "";
        if (el.tagName == "INPUT") {
          value = el.id;
        } else {
          value = el.id;
        }
        tempValues.push(value);
      }
      formInfo[fieldName] = tempValues;
      formInfoName[a] = fieldName;
    }

    let fieldInfo = [];
    let tempValues1 = [];
    for (let i = 0; i < mukimFields.length; i++) {
      let el1 = fieldCon.querySelector("[prefix='" + mukimFields[i] + "']");
      let value1 = "";
      if (el1.tagName == "INPUT") {
        value1 = el1.id;
      } else {
        value1 = el1.id;
      }
      tempValues1.push(value1);
    }
    fieldInfo[field] = tempValues1;

    delete formInfo[field];
    let index = formInfoName.indexOf(field);
    delete formInfoName[index];

    for (let m of formInfo) {
      for (let a of m) {
        if (document.getElementById(a).value) {
          document.getElementById(a).removeAttribute("mandatory");
        } else {
          document.getElementById(a).setAttribute("mandatory", "");
        }
      }
    }
  }
}

// check for duplicates in mukim validation
function mukimCheckDuplicate(el, field, form) {
  let fieldCon = document.getElementById(field);

  let fieldsOnForm = document.getElementById(form).children;
  if (fieldsOnForm.length > 1 && el.value) {
    let formInfo = [];
    let formInfoName = [];
    for (let a = 0; a < fieldsOnForm.length; a++) {
      let fieldName = fieldsOnForm[a].id;
      let tempValues = [];
      for (let i = 0; i < mukimFields.length; i++) {
        let el = document
          .getElementById(fieldsOnForm[a].id)
          .querySelector("[prefix='" + mukimFields[i] + "']");
        let value = "";
        if (el.tagName == "INPUT") {
          value = el.checked;
        } else {
          value = el.value;
        }
        tempValues.push(value);
      }
      formInfo[fieldName] = tempValues;
      formInfoName[a] = fieldName;
    }

    let fieldInfo = [];
    let tempValues1 = [];
    for (let i = 0; i < mukimFields.length; i++) {
      let el1 = fieldCon.querySelector("[prefix='" + mukimFields[i] + "']");
      let value1 = "";
      if (el1.tagName == "INPUT") {
        value1 = el1.checked;
      } else {
        value1 = el1.value;
      }
      tempValues1.push(value1);
    }
    fieldInfo[field] = tempValues1;

    delete formInfo[field];
    let index = formInfoName.indexOf(field);
    delete formInfoName[index];

    let isDuplicated = false;

    stopHere1: for (let v = 0; v < formInfoName.length; v++) {
      if (formInfoName[v] != undefined) {
        if (fieldInfo[field][2] && fieldInfo[field][3]) {
          if (
            fieldInfo[field][0] == formInfo[formInfoName[v]][0] &&
            fieldInfo[field][1] == formInfo[formInfoName[v]][1] &&
            fieldInfo[field][2] == formInfo[formInfoName[v]][2] &&
            fieldInfo[field][3] == formInfo[formInfoName[v]][3]
          ) {
            isDuplicated = true;
            break stopHere1;
          }
        }
      }
    }

    if (isDuplicated) {
      document.getElementById(el.id).tagName.toLowerCase() == "input"
        ? (document.getElementById(el.id).checked = false)
        : (document.getElementById(el.id).value = "");
      showMessage("Duplicate entry is not allowed.");
    }
  }
  checkMandatories(el, field, form);
}

// displaying "00" when only one digit is entered in mk/ts number
function displayZero(container) {
  let mktsnos = document
    .getElementById(container)
    .querySelectorAll("[mkts-no]");
  for (let x of mktsnos) {
    document.getElementById(x.id).removeEventListener("blur", displayZero);
    document.getElementById(x.id).addEventListener("blur", function () {
      if (parseInt(this.value) > 0 && parseInt(this.value) < 10) {
        if (document.getElementById(x.id).hasAttribute("data-invalid"))
          document.getElementById(x.id).removeAttribute("data-invalid");
        if (document.getElementById(x.id).hasAttribute("data-invalid-message"))
          document.getElementById(x.id).removeAttribute("data-invalid-message");
        document.getElementById(x.id).value = "0" + parseInt(this.value);
      } else if (parseInt(this.value) == 0) {
        document.getElementById(x.id).setAttribute("data-invalid", "");
        document
          .getElementById(x.id)
          .setAttribute(
            "data-invalid-message",
            "MK/TS Number should not be " + this.value
          );
      } else if (this.value == "") {
        document.getElementById(x.id).value = "";
        if (document.getElementById(x.id).hasAttribute("data-invalid"))
          document.getElementById(x.id).removeAttribute("data-invalid");
        if (document.getElementById(x.id).hasAttribute("data-invalid-message"))
          document.getElementById(x.id).removeAttribute("data-invalid-message");
      }
    });
  }
}

// auto inserting forms in person and organisation
function autoInsertPersonAndOrg(roles, params) {
  if (roles != "multiple") {
    let clone = duplicateForm(params[0], params[1], params[2], "mandatory");
    let role = document
      .getElementById(clone.id)
      .querySelector("[role-name]");
    let qpLabel = document.getElementById(clone.id).querySelector("[qp-label]");
    let qp = document
      .getElementById(clone.id)
      .querySelector("[qp-reg-no]");

    document.getElementById(role.id).value = roles;
    document.getElementById(role.id).removeAttribute("options");
    document.getElementById(qp.id).removeAttribute("mandatory");
    if (document.getElementById(clone.id).querySelector("[qp-label]"))
      qpLabel.innerHTML = "QP Registration No.";

    document
      .getElementById(role.id)
      .setAttribute("options", `${roles}:${roles}`);
    document.getElementById(role.id).setAttribute("disabled", "");
    if (
      document.getElementById(role.id).value === "Agent (i.e. QP)" ||
      document.getElementById(role.id).value === "Applicant (Developer)"
    ) {
      let suf = role.id;
      suf = suf.replace(
        document.getElementById(role.id).getAttribute("prefix"),
        ""
      );
      document
        .getElementById("Member_Email_Address_QP" + suf)
        .setAttribute("mandatory", "");
      if (
        document
          .getElementById(clone.id)
          .querySelector("[persandorgs-email-label]")
      ) {
        document
          .getElementById(clone.id)
          .querySelector("[persandorgs-email-label]").innerHTML = "Email*";
      }
    } else {
      if (
        document
          .getElementById(clone.id)
          .querySelector("[persandorgs-email-label]")
      ) {
        document
          .getElementById(clone.id)
          .querySelector("[persandorgs-email-label]").innerHTML = "Email";
      }
    }

    if (
      ["Agent (i.e. QP firm)", "Applicant (Developer)", "Owner"].includes(
        role.value
      )
    ) {
      // Grab the original element
      let original = document.getElementById(role.id);
      // Create a replacement tag of the desired type
      let replacement = document.createElement("cn2-textbox");

      // Grab all of the original's attributes, and pass them to the replacement
      for (let i = 0, l = original.attributes.length; i < l; ++i) {
        let nodeName = original.attributes.item(i).nodeName;
        let nodeValue = original.attributes.item(i).nodeValue;

        replacement.setAttribute(nodeName, nodeValue);
      }

      let optionVal = replacement.getAttribute("options").split(":")[0];
      replacement.value = optionVal;

      // Persist contents
      replacement.innerHTML = original.innerHTML;

      // Switch!
      original.parentNode.replaceChild(replacement, original);
    }
  } else {
    let clone = duplicateForm(params[0], params[1], params[2], "multiple");
    let role = document
      .getElementById(clone.id)
      .querySelector("[role-name]");
    document
      .getElementById(role.id)
      .setAttribute(
        "options",
        "Architect:Architect,Engineer:Engineer,Surveyor:Surveyor"
      );
  }
}

// convert array into string ( with commas ) FOR <SELECT OPTION>
function listToString(list) {
  let newList = [...new Set(list)];
  let newOptions = "";
  for (let z = 0; z < newList.length; z++) {
    if (newList[z]) {
      newOptions += `${newList[z]}:${newList[z]}`;
      if (z != newList.length - 1) {
        newOptions += ",";
      }
    }
  }
  return newOptions;
}

// converting string ( with commas ) into an array FOR <SELECT OPTION>
function stringToList(string) {
  let toList = string.split(",");
  let toIndividual = [];
  for (let a of toList) {
    toIndividual.push(a.split(":")[0]);
  }
  return [...new Set(toIndividual)];
}

// validating role inputs in person and organisation
function checkRoles(el, con) {
  let container = document.getElementById(con);
  let value = el.value;
  let cloneDefaults = [...persAndOrgsRolesRaw];
  let trio = ["Architect", "Engineer"];
  let selectsRaw = container.querySelectorAll("[general], [trio]");
  let selects = [];
  let notSelects = [];
  let selectValue = [];
  let optionsList = [];
  for (let x of selectsRaw) {
    if (
      x.id != el.id &&
      !document.getElementById(x.id).hasAttribute("trio") &&
      !trio.includes(document.getElementById(x.id).value)
    ) {
      selects.push(x);
    } else {
      if (
        x.id != el.id &&
        !document.getElementById(x.id).hasAttribute("trio")
      ) {
        notSelects.push(x);
      }
    }
  }
  for (let a of selectsRaw) {
    selectValue.push(document.getElementById(a.id).value);
  }
  for (let b of cloneDefaults) {
    if (
      !selectValue.includes(b) ||
      (selectValue.includes(b) && !trio.includes(b))
    ) {
      optionsList.push(b);
    }
  }
  let selectOptions = "";
  for (let c of selects) {
    let currentRole = document.getElementById(c.id);
    let currentRoleValue = currentRole.value;
    if (currentRoleValue != value || !trio.includes(currentRoleValue))
      optionsList.push(currentRoleValue);
    if (currentRoleValue == value || !trio.includes(value))
      optionsList.push(value);
    selectOptions = listToString(optionsList.sort());
    currentRole.removeAttribute("options");
    currentRole.setAttribute("options", selectOptions);
    if (trio.includes(currentRoleValue) && trio.includes(value)) {
      currentRole.value = "";
    } else {
      currentRole.value = currentRoleValue;
    }
  }
  for (let d of notSelects) {
    let currentRole = document.getElementById(d.id);
    let currentRoleValue = currentRole.value;
    let updatedOptions = selectOptions;
    if (currentRoleValue != value || !trio.includes(currentRoleValue))
      updatedOptions += `,${currentRoleValue}:${currentRoleValue}`;
    if (!trio.includes(value)) updatedOptions += `,${value}:${value}`;
    let notSelectsOption = stringToList(updatedOptions);
    let newUpdatedOptions = listToString(notSelectsOption.sort());
    currentRole.removeAttribute("options");
    currentRole.setAttribute("options", newUpdatedOptions);
    if (trio.includes(currentRoleValue) && trio.includes(value)) {
      currentRole.value = "";
    } else {
      currentRole.value = currentRoleValue;
    }
  }

  if (trio.includes(el.value)) {
  }
}

// event in person and organisation that handles whether to show select or textbox
function checkRoleInput(element, con) {
  let value = element.value;
  // Grab the original element
  let original = document.getElementById(con).querySelector("[name-role]");

  if (
    value == "Agent (i.e. QP firm)" ||
    value == "Prospective Purchaser" ||
    value == "Surveyor" ||
    value == "Others"
  ) {
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-textbox");

    // Grab all of the original's attributes, and pass them to the replacement
    for (let i = 0, l = original.attributes.length; i < l; ++i) {
      let nodeName = original.attributes.item(i).nodeName;
      let nodeValue = original.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    if (replacement.hasAttribute("event-change"))
      replacement.removeAttribute("event-change");
    if (replacement.hasAttribute("data-options"))
      replacement.removeAttribute("data-options");
    replacement.setAttribute(
      "event-input",
      "populateSignedBy('MemberRole_Member_Role_Code_Desc_QP10', 'Member_Member_Name_QP10');"
    );
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);
  } else {
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-select");

    // Grab all of the original's attributes, and pass them to the replacement
    for (let i = 0, l = original.attributes.length; i < l; ++i) {
      let nodeName = original.attributes.item(i).nodeName;
      let nodeValue = original.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    if (value == "Agent (i.e. QP)") {
      replacement.setAttribute("event-change", "loadDropDownDetailsURA(this);populateSignedBy('MemberRole_Member_Role_Code_Desc_QP10', 'Member_Member_Name_QP10');");
    } else {
      replacement.setAttribute("event-change", "loadDropDownDetailsURA(this);");
    }
    // replacement.setAttribute("data-options", "persAndOrgsDropdown");
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);
  }

  if (
    value == "Agent (i.e. QP firm)" ||
    value == "Prospective Purchaser" ||
    value == "Surveyor" ||
    value == "Others"
  ) {
    // Grab the originalRoad element
    let originalRoad = document
      .getElementById(con)
      .querySelector("[road-name]");
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-select");

    // Grab all of the originalRoad's attributes, and pass them to the replacement
    for (let i = 0, l = originalRoad.attributes.length; i < l; ++i) {
      let nodeName = originalRoad.attributes.item(i).nodeName;
      let nodeValue = originalRoad.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    replacement.setAttribute("event-change", "loadDropDownDetails(this);");
    replacement.setAttribute("data-options", "roadNameDropdown");
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = originalRoad.innerHTML;

    // Switch!
    originalRoad.parentNode.replaceChild(replacement, originalRoad);
  } else {
    // Grab the originalRoad element
    let originalRoad = document
      .getElementById(con)
      .querySelector("[road-name]");
    // Create a replacement tag of the desired type
    let replacement = document.createElement("cn2-textbox");

    // Grab all of the originalRoad's attributes, and pass them to the replacement
    for (let i = 0, l = originalRoad.attributes.length; i < l; ++i) {
      let nodeName = originalRoad.attributes.item(i).nodeName;
      let nodeValue = originalRoad.attributes.item(i).nodeValue;

      replacement.setAttribute(nodeName, nodeValue);
    }

    if (replacement.hasAttribute("event-change"))
      replacement.removeAttribute("event-change");
    if (replacement.hasAttribute("data-options"))
      replacement.removeAttribute("data-options");
    replacement.value = "";

    // Persist contents
    replacement.innerHTML = originalRoad.innerHTML;

    // Switch!
    originalRoad.parentNode.replaceChild(replacement, originalRoad);
  }

  let road = document
    .getElementById(con)
    .querySelector("[road-name]");
  if (road.hasAttribute("disabled")) road.removeAttribute("disabled");
  if (road.hasAttribute("options")) road.removeAttribute("options");
  if (road.hasAttribute("data-options")) road.removeAttribute("data-options");
  if (road.hasAttribute("mandatory")) road.removeAttribute("mandatory");
  if (road.hasAttribute("event-change")) road.removeAttribute("event-change");
  if (road.tagName.toLowerCase() == "cn2-select") {
    road.setAttribute("data-options", "roadNameDropdown");
    road.setAttribute("event-change", "loadDropDownDetails(this);");
    road.setAttribute("mandatory", "");
  } else {
    road.setAttribute("disabled", "");
  }
  road.value = "";

  let postal = document
    .getElementById(con)
    .querySelector("[formatted-postal]");
  if (postal.hasAttribute("disabled")) postal.removeAttribute("disabled");
  if (postal.hasAttribute("mandatory")) postal.removeAttribute("mandatory");
  if (road.tagName.toLowerCase() == "cn2-select") {
    postal.setAttribute("mandatory", "");
  } else {
    postal.setAttribute("disabled", "");
  }
  postal.value = "";

  let line = document
    .getElementById(con)
    .querySelector("[unformatted-line-one]");
  if (line.hasAttribute("disabled")) line.removeAttribute("disabled");
  if (line.hasAttribute("mandatory")) line.removeAttribute("mandatory");
  if (road.tagName.toLowerCase() == "cn2-select") {
    //line.setAttribute("mandatory", "");
  } else {
    line.setAttribute("disabled", "");
  }
  line.value = "";
}

// activating the role input when auto inserted fiels are finished
function activateAutoInsertedPersonAndOrg(con) {
  let container = document.getElementById(con);
  let childrens = container.children;
  for (let x of childrens) {
    let role = document.getElementById(x.id).querySelector("[role-name]");
    checkRoleInput(role, x.id);
  }
}

// set mandatory to "m" when form will be hidden
function setMandatoryToM(con) {
  if (con) {
    for (let a of con) {
      //let a = document.getElementById(a.id);
      if (a.querySelector("[mandatory]") != null) {
        a = a.querySelector("[mandatory]");
        a.removeAttribute("mandatory");
        a.setAttribute("m", "");
        a.value = "";
      }
    }
  }
}

// set mandatory to "m" when form will be hidden
function setMandatoryToMDIV(con) {
  if (con && document.getElementById(con)) {
    for (let a of document
      .getElementById(con)
      .querySelectorAll("[mandatory]")) {
      a.removeAttribute("mandatory");
      a.setAttribute("m", "");
      if (a.hasAttribute("checked")) {
        a.removeAttribute("checked");
        a.setAttribute("c", "");
      }
      // if (a.hasAttribute("counter-form") || a.hasAttribute("counter-table")) {
      //   a.value = "1";
      // } else {
      //   a.value = "";
      // }
    }
  }
}

// set "m" to mandatory when form will be show
function setMToMandatory(con) {
  if (con) {
    for (let a of con) {
      // let a = document.getElementById(a.id);
      if (a.querySelector("[m]") != null) {
        a = a.querySelector("[m]");
        a.setAttribute("mandatory", "");
        a.removeAttribute("m");
      }
    }
  }
}

// set "m" to mandatory when form will be show
function setMToMandatoryDIV(con) {
  if (con && document.getElementById(con)) {
    for (let a of document.getElementById(con).querySelectorAll("[m]")) {
      a.removeAttribute("m");
      a.setAttribute("mandatory", "");
      if (a.hasAttribute("c")) {
        a.removeAttribute("c");
        a.setAttribute("checked", "");
      }
    }
  }
}

// empty all fields inside a specific container/parent
function emptyValueAll(con) {
  let cn2FieldsEmpty = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
  ];
  let cn2FieldsFalse = ["cn2-checkbox", "input"];

  if (document.getElementById(con)) {
    for (let x of cn2FieldsEmpty) {
      for (let a of document.getElementById(con).querySelectorAll(x)) {
        if (
          !(
            document.getElementById(a.id).hasAttribute("formatted-road") ||
            document.getElementById(a.id).hasAttribute("formatted-postal") ||
            document
              .getElementById(a.id)
              .hasAttribute("unformatted-line-one")
          )
        ) {
          if (document.getElementById(a.id).hasAttribute("default-value")) {
            document.getElementById(a.id).value = document
              .getElementById(a.id)
              .getAttribute("default-value");
          } else {
            document.getElementById(a.id).value = "";
          }
        }
        if (document.getElementById(a.id).hasAttribute("data-invalid"))
          document.getElementById(a.id).removeAttribute("data-invalid");
        if (document.getElementById(a.id).hasAttribute("data-invalid-message"))
          document.getElementById(a.id).removeAttribute("data-invalid-message");
      }
    }

    for (let x of cn2FieldsFalse) {
      for (let a of document.getElementById(con).querySelectorAll(x)) {
        document.getElementById(a.id).checked = false;
      }
    }
  }
}

// toggle of "formatted" and "unformatted" in person and organisation
function perAndOrgAddress(el, con, status) {
  let name = document.getElementById(el.id).getAttribute("name");
  let radios = document
    .getElementById(con)
    .querySelectorAll("[name='" + name + "']");
  for (let a of radios) {
    a.setAttribute("mandatory", "");
    a.setAttribute("checked", "");
    a.setAttribute("m", "");
    a.setAttribute("c", "");
    a.removeAttribute("mandatory");
    a.removeAttribute("checked");
  }
  let container = document.getElementById(con);
  if (status == "perOrgFormatted") {
    let allFormatted = container.querySelectorAll("[perOrgFormatted]");
    for (let a of allFormatted) {
      a.removeAttribute("hidden");
      a.setAttribute("h", "");
    }
    setMToMandatory(allFormatted);

    let allUnFormatted = container.querySelectorAll("[perOrgUnformatted]");
    for (let b of allUnFormatted) {
      b.setAttribute("hidden", "");
      b.removeAttribute("h");
      emptyValueAll(b.id);
    }
    setMandatoryToM(allUnFormatted);
  } else {
    let allUnFormatted = container.querySelectorAll("[perOrgUnformatted]");
    for (let b of allUnFormatted) {
      b.removeAttribute("hidden");
      b.setAttribute("h", "");
    }
    setMToMandatory(allUnFormatted);

    let allFormatted = container.querySelectorAll("[perOrgFormatted]");
    for (let a of allFormatted) {
      a.setAttribute("hidden", "");
      a.removeAttribute("h");
      emptyValueAll(a.id);
    }
    setMandatoryToM(allFormatted);
  }
}

// for populating MDO options when "Total Multiple Development Options" is selected
function populateMDO(el) {
  let trs = document.querySelectorAll("[mdo-tr]");
  if (el.value == "2" || el.value == "3") {
    setMToMandatory(trs);
  } else {
    setMandatoryToM(trs);
  }

  for (let a of trs) {
    if (el.value == "2") {
      if (document.getElementById(a.id).hasAttribute("hidden"))
        document.getElementById(a.id).removeAttribute("hidden");

      let select = a.querySelector("cn2-select");
      document.getElementById(select.id).setAttribute("options", "1:1, 2:2");
      document.getElementById(select.id).removeAttribute("mandatory");
      document.getElementById(select.id).removeAttribute("m");
      document.getElementById(select.id).setAttribute("mandatory", "");
      document.getElementById(select.id).value = "";

      // populateSubInfo("1");
      // siteAddMDO(
      //   {
      //     value: "1"
      //   },
      //   "SiteAdd_Container"
      // );
    } else if (el.value == "3") {
      if (document.getElementById(a.id).hasAttribute("hidden"))
        document.getElementById(a.id).removeAttribute("hidden");

      let select = a.querySelector("cn2-select");
      document
        .getElementById(select.id)
        .setAttribute("options", "1:1, 2:2, 3:3");
      document.getElementById(select.id).removeAttribute("mandatory");
      document.getElementById(select.id).removeAttribute("m");
      document.getElementById(select.id).setAttribute("mandatory", "");
      document.getElementById(select.id).value = "";

      // populateSubInfo("1");
      // siteAddMDO(
      //   {
      //     value: "1"
      //   },
      //   "SiteAdd_Container"
      // );
    } else {
      document.getElementById(a.id).setAttribute("hidden", "");
      document
        .getElementById(a.id)
        .querySelector("cn2-select")
        .setAttribute("options", "");
      document
        .getElementById(a.id)
        .querySelector("cn2-select")
        .removeAttribute("options");
      document.getElementById(a.id).querySelector("cn2-select").value = "";
      if (
        document
          .getElementById(a.id)
          .querySelector("cn2-select")
          .hasAttribute("mandatory")
      ) {
        document
          .getElementById(a.id)
          .querySelector("cn2-select")
          .setAttribute("mandatory", "");
        document
          .getElementById(a.id)
          .querySelector("cn2-select")
          .removeAttribute("mandatory");
        document
          .getElementById(a.id)
          .querySelector("cn2-select")
          .setAttribute("m", "");
      }
      emptyValueAll(a.id);

      // populateSubInfo("1");
      // siteAddMDO(
      //   {
      //     value: "1"
      //   },
      //   "SiteAdd_Container"
      // );
    }
  }
}

// Site Address & Change of Use with MDO Option
function siteAddMDO(element, container) {
  let value = element.value;
  let con = document.getElementById(container);
  let conChilds = con.children;

  for (let r = 0; r < conChilds.length; r++) {
    let currentCon = document.getElementById(conChilds[r].id);
    let mainCounter = r + 1; // Form
    let divChilds = currentCon.querySelectorAll("[prefix='Floor_Fields']");

    for (let v = 0; v < divChilds.length; v++) {
      let currentDiv = document.getElementById(divChilds[v].id);
      let insideCounter = v + 1; // Field
      let div = currentDiv.querySelector("[mdo-fields]");
      let divFirst = currentDiv
        .querySelector("[mdo-fields]")
        .firstElementChild.cloneNode(true);
      let divLast = currentDiv
        .querySelector("[mdo-fields]")
        .lastElementChild.cloneNode(true);
      let pui = "";
      let gfa = "";
      let gfa_total = "";
      if (currentDiv.querySelector("[sa-default]").querySelector("[sa-pui]")) {
        pui = currentDiv
          .querySelector("[sa-default]")
          .querySelector("[sa-pui]")
          .cloneNode(true);
      }
      if (
        currentDiv.querySelector("[sa-default]").querySelector("[sa-pu-gfa]")
      ) {
        gfa = currentDiv
          .querySelector("[sa-default]")
          .querySelector("[sa-pu-gfa]")
          .cloneNode(true);
      }
      if (
        currentDiv
          .querySelector("[sa-default]")
          .querySelector("[sa-pu-gfa-total]")
      ) {
        gfa_total = currentDiv
          .querySelector("[sa-default]")
          .querySelector("[sa-pu-gfa-total]")
          .cloneNode(true);
      }

      for (let field of pui.querySelectorAll("[m]")) {
        field.removeAttribute("m");
        field.setAttribute("mandatory", "");
      }
      for (let field of gfa.querySelectorAll("[m]")) {
        field.removeAttribute("m");
        field.setAttribute("mandatory", "");
      }
      if (gfa_total) {
        for (let field of gfa_total.querySelectorAll("[m]")) {
          field.removeAttribute("m");
          field.setAttribute("mandatory", "");
        }
      }

      while (document.getElementById(div.id).childElementCount != 0) {
        document
          .getElementById(div.id)
          .removeChild(document.getElementById(div.id).lastElementChild);
      }

      document.getElementById(div.id).innerHTML = divFirst.outerHTML;

      let tempValue = parseInt(value);
      if (parseInt(tempValue)) {
        while (tempValue > 1) {
          let newTR = document.createElement("tr");
          newTR.appendChild(document.createElement("td"));
          newTR.appendChild(document.createElement("td"));
          newTR.appendChild(document.createElement("td"));
          newTR.appendChild(pui);
          newTR.appendChild(gfa);
          newTR.appendChild(document.createElement("td"));
          if (
            currentDiv
              .querySelector("[sa-default]")
              .querySelector("[sa-pu-gfa-total]")
          ) {
            document.getElementById(div.id).innerHTML +=
              newTR.outerHTML + gfa_total.outerHTML;
          } else {
            document.getElementById(div.id).innerHTML += newTR.outerHTML;
          }
          tempValue--;
        }
      }

      if (value > 1) {
        let fields = currentDiv
          .querySelector("[sa-used]")
          .querySelectorAll("[mdo-target]");
        for (let a of fields) {
          a.setAttribute("mdo-field-target", "");
        }
      } else {
        let fields = currentDiv
          .querySelector("[sa-used]")
          .querySelectorAll("[mdo-target]");
        for (let a of fields) {
          if (a.hasAttribute("mdo-field-target"))
            a.removeAttribute("mdo-field-target");
        }
      }

      let fields = currentDiv
        .querySelector("[sa-used]")
        .querySelectorAll("[mdo-field-target]");
      let counterLoop = 1;
      let counter = 1;
      for (let a of fields) {
        if (counterLoop > 7) {
          counter++;
          counterLoop = 1;
        }
        let el = document.getElementById(a.id);
        let pref = el.getAttribute("prefix");
        let suf = el.getAttribute("suffix");
        let newID = `${pref}${mainCounter}${suf}_${insideCounter}${suf}_${counter}${suf}`;
        document.getElementById(a.id).setAttribute("id", newID);
        counterLoop++;
      }

      for (let a of fields) {
        let el = document.getElementById(a.id);
        if (el.tagName.toLowerCase() == "cn2-switchbutton") {
          document.getElementById(el.id).removeAttribute("switch-id");
          document
            .getElementById(el.id)
            .setAttribute(
              "switch-id",
              document
                .getElementById(el.id)
                .parentElement.querySelector("[switch-yes]").id
            );
          document.getElementById(el.id).removeAttribute("event-change");
          let newEvent =
            "switchButton(this, '" +
            document
              .getElementById(el.id)
              .parentElement.querySelector("[switch-yes]").id +
            "', '" +
            document
              .getElementById(el.id)
              .parentElement.querySelector("[switch-no]").id +
            "')";
          document.getElementById(el.id).setAttribute("event-change", newEvent);
        }
      }
    }
  }
}

// summation of GFA per forms on "Site Address and Change of Use"
function totalGFA(el, con) {
  let value = el.value;
  let sumField = document
    .getElementById(el.id)
    .parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.querySelector(
      "[sum-gfa]"
    );

  if (value != "" || value != 0) {
    document.getElementById(sumField.id).value = parseFloat(value).toFixed(2);
  } else {
    document.getElementById(sumField.id).value = "";
  }
}

// summation of GFA per forms on "Site Address and Change of Use" ( Normal )
function totalGFANormal(con) {
  if (con.includes("SiteAdd_Forms")) {
    let value = 0;
    let sumField = document
      .getElementById(con)
      .querySelector("[prefix='SiteAddrAndChOfUse_TotaPropUseGfa']");

    for (let a of document
      .getElementById(con)
      .querySelectorAll("[total-gfa-normal]")) {
      if (parseFloat(a.value)) {
        value += parseFloat(a.value);
      } else {
        value += 0;
      }
    }

    if (value != "" || value != 0) {
      sumField.value = parseFloat(value).toFixed(2);
    } else {
      sumField.value = "";
    }
  }
}

// "Proposed Use/Proposed Use GFA" dropdown on "Site Address and Change of Use"
function proposedUsed(element) {
  let value = document.getElementById(element.id).value;
  let othersField = document
    .getElementById(element.id)
    .parentElement.parentElement.querySelector("[others-field]");
  if (value == "Others") {
    document.getElementById(othersField.id).removeAttribute("hidden");
  } else {
    document.getElementById(othersField.id).setAttribute("hidden", "");
    document.getElementById(othersField.id).value = "";
  }
}

// repeat fields when MDO is selected on "Submission Info"
function populateSubInfo(value) {
  if (document.getElementById("MDOForm")) {
    let counter = document.getElementById("MDOForm").childElementCount;
    while (counter > 1) {
      document
        .getElementById("MDOForm")
        .removeChild(document.getElementById("MDOForm").lastElementChild);
      counter--;
    }
    for (let a = 0; a < value - 1; a++) {
      duplicateOneForm("MDOForm", "mdo10");
    }
  }
}

// Only input float
function onlyFloat(element) {
  let current = element.value;
  if (!Math.abs(current)) {
    document.getElementById(element.id).value = document
      .getElementById(element.id)
      .value.slice(0, -1);
  }
}

// remove mandatory and checked on checkboxes/radios when one of the fields in a group is ticked
function removeMandaOnCheck(name) {
  let checkboxes = document.querySelectorAll("[name='" + name + "']");

  let isSelected = false;

  stopHere: for (let x of checkboxes) {
    if (document.getElementById(x.id).checked == true) {
      isSelected = true;
      break stopHere;
    } else {
      isSelected = false;
    }
  }

  if (isSelected) {
    for (let y of checkboxes) {
      document.getElementById(y.id).removeAttribute("checked");
      document.getElementById(y.id).removeAttribute("mandatory");
    }
  } else {
    for (let y of checkboxes) {
      document.getElementById(y.id).setAttribute("checked", "");
      document.getElementById(y.id).setAttribute("mandatory", "");
    }
  }
}

// Changing of Application Type ( just formatting its child elements )
function appType(el, subType, trs) {
  document.getElementById(subType).value = "";
  document
    .getElementById(subType)
    .shadowRoot.querySelector("select").style.backgroundColor = "#ffffd1";

  for (let a of trs) {
    document.getElementById(a).setAttribute("hidden", "");
    emptyValueAll(a);
  }

  // Formatting of Resub Declaration if available
  if (document.getElementById("DeclGeneResu_DoesYourPropIn_Yes10")) {
    if (
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .hasAttribute("checked")
    )
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .removeAttribute("checked");
    if (
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .hasAttribute("mandatory")
    )
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .removeAttribute("mandatory");
  }
  if (document.getElementById("DeclGeneResu_DoesYourPropIn_No10")) {
    if (
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .hasAttribute("checked")
    )
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .removeAttribute("checked");
    if (
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .hasAttribute("mandatory")
    )
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .removeAttribute("mandatory");
  }
  if (document.getElementById("DeclGeneResu10")) {
    document.getElementById("DeclGeneResu10").setAttribute("hidden", "");
    emptyValueAll(document.getElementById("DeclGeneResu10").id);
  }

  // Formatting of Newsub Declaration if available
  if (document.getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")) {
    if (
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .hasAttribute("checked")
    )
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .removeAttribute("checked");
    if (
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .hasAttribute("mandatory")
    )
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .removeAttribute("mandatory");
  }
  if (document.getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")) {
    if (
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .hasAttribute("checked")
    )
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .removeAttribute("checked");
    if (
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .hasAttribute("mandatory")
    )
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .removeAttribute("mandatory");
  }
  if (document.getElementById("DeclGeneNewSubm10")) {
    document.getElementById("DeclGeneNewSubm10").setAttribute("hidden", "");
    emptyValueAll(document.getElementById("DeclGeneNewSubm10").id);
  }

  populateMDO({
    value: "",
  });
}

// Changing of Submission Type if New and Resub is present
function subTypeTwoSel(el, resub, newsub) {
  if (document.getElementById("PartOfAppl_ApplTp10").value != "") {
    if (document.getElementById(el.id).value != "") {
      if (
        document
          .querySelector("cn2-nav-button[label='Declaration']")
          .hasAttribute("hidden")
      )
        document
          .querySelector("cn2-nav-button[label='Declaration']")
          .removeAttribute("hidden");

      if (
        el.value ==
        "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
      ) {
        if (document.getElementById(newsub).hasAttribute("hidden"))
          document.getElementById(newsub).removeAttribute("hidden");
        document
          .getElementById(newsub)
          .querySelector("[newsub-field]")
          .setAttribute("mandatory", "");

        document.getElementById(resub).setAttribute("hidden", "");
        if (
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .hasAttribute("mandatory")
        )
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .removeAttribute("mandatory");
        document.getElementById(resub).querySelector("[resub-field]").value =
          "";
        if (
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .hasAttribute("data-invalid")
        )
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .removeAttribute("data-invalid");
        if (
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .hasAttribute("data-invalid-message")
        )
          document
            .getElementById(resub)
            .querySelector("[resub-field]")
            .removeAttribute("data-invalid-message");
      } else {
        if (document.getElementById(resub).hasAttribute("hidden"))
          document.getElementById(resub).removeAttribute("hidden");
        document
          .getElementById(resub)
          .querySelector("[resub-field]")
          .setAttribute("mandatory", "");

        document.getElementById(newsub).setAttribute("hidden", "");
        if (
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .hasAttribute("mandatory")
        )
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .removeAttribute("mandatory");
        document.getElementById(newsub).querySelector("[newsub-field]").value =
          "";
        if (
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .hasAttribute("data-invalid")
        )
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .removeAttribute("data-invalid");
        if (
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .hasAttribute("data-invalid-message")
        )
          document
            .getElementById(newsub)
            .querySelector("[newsub-field]")
            .removeAttribute("data-invalid-message");
      }
    }
  }
}

// Auto populating 'No. of Beds for Foreign Workers'
function typeOfForeign(el, target) {
  let field = document.getElementById(target);

  if (el.value != "" && el.value) {
    field.setAttribute("disabled", "");
    field.removeAttribute("disabled");
    field.setAttribute("mandatory", "");
  } else {
    field.setAttribute("disabled", "");
    field.setAttribute("mandatory", "");
    field.removeAttribute("mandatory");
    field.value = "";
  }
}

// Load Dropdown Detail in URA
function loadDropDownDetailsURA(element) {
  let id = element.id;
  let triggerElement = document.getElementById(id);
  let data = triggerElement.data;
  let selected = element.value;
  let isMultiple = triggerElement.hasAttribute("prefix");
  let indexId = "";
  let prefix = "";
  let suffix = "";

  if (isMultiple) {
    prefix = triggerElement.getAttribute("prefix");
    suffix = triggerElement.hasAttribute("suffix")
      ? triggerElement.getAttribute("suffix")
      : "";

    indexId = id.replace(prefix, "").replace(suffix, "");
  }

  if (data && selected && data[selected]) {
    for (let object in data[selected]) {
      if (object != id) {
        let targetElement = document.getElementById(object);

        if (isMultiple && indexId) {
          let targetPrefix = targetElement.getAttribute("prefix");
          let targetSuffix = targetElement.hasAttribute("suffix")
            ? targetElement.getAttribute("suffix")
            : "";
          let targetId = targetPrefix + indexId + targetSuffix;

          // Skip if Element has same prefix and suffix on the trigger element
          if (prefix == targetPrefix && suffix == targetSuffix) continue;

          targetElement = document.getElementById(targetId);
        }

        if (targetElement) {
          if (targetElement.tagName.toLowerCase() == "cn2-select") {
            let rawValue = data[selected][object];
            let values = rawValue.split("::");
            let finalOption = "";
            for (let a = 0; a < values.length; a++) {
              let value = values[a];
              finalOption += `${value}:${value}`;
              if (a != values.length - 1) {
                finalOption += ",";
              }
            }
            targetElement.setAttribute("options", finalOption);
            targetElement.shadowRoot.querySelector(
              "select"
            ).style.backgroundColor = "#e9ecef";
          }
          targetElement.value = data[selected][object];
          targetElement.setAttribute("disabled", "");
        }
      }
    }
  }
}

// For Email Validation
function validateEmail(element) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(element.value).toLowerCase()) && element.value != "") {
    document.getElementById(element.id).setAttribute("data-invalid", "");
    document
      .getElementById(element.id)
      .setAttribute("data-invalid-message", "Invalid email address.");
  } else {
    if (document.getElementById(element.id).hasAttribute("data-invalid")) {
      document.getElementById(element.id).removeAttribute("data-invalid");
      document
        .getElementById(element.id)
        .removeAttribute("data-invalid-message");
    }
  }
}

// For "Greenery Features"
function enableTextbox(el) {
  if (el.id == "GnryDtls_PropInvoLandRepl_Yes10") {
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .removeAttribute("hidden");
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .setAttribute("mandatory", "");

    document.getElementById("GnryDtls_PropInvoGreeFeat_Yes10").checked = true;
    document.getElementById(el.id).checked = true;
  } else {
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .setAttribute("hidden", "");
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .removeAttribute("mandatory");
    document.getElementById("GnryDtls_PropInvoLandRepl10").value = "";

    document.getElementById(el.id).checked = true;
  }
}

// For "Greenery Features"
function enableTextboxBeside(checkboxId) {
  let textbox = document.getElementById(checkboxId).parentNode;

  //get textbox beside
  while (textbox.querySelector("cn2-textbox") == null) {
    textbox = textbox.parentNode;
  }
  textbox = textbox.querySelector("cn2-textbox");

  if (document.getElementById(checkboxId).checked) {
    textbox.removeAttribute("disabled");
    textbox.setAttribute("mandatory", "");
  } else {
    textbox.setAttribute("disabled", "");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
  }
}

// For "Greenery Features"
function enableTextbox(el) {
  if (el.id == "GnryDtls_PropInvoLandRepl_Yes10") {
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .removeAttribute("hidden");
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .setAttribute("mandatory", "");

    document.getElementById("GnryDtls_PropInvoGreeFeat_Yes10").checked = true;
    document.getElementById(el.id).checked = true;
  } else {
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .setAttribute("hidden", "");
    document
      .getElementById("GnryDtls_PropInvoLandRepl10")
      .removeAttribute("mandatory");
    document.getElementById("GnryDtls_PropInvoLandRepl10").value = "";

    document.getElementById(el.id).checked = true;
  }
}

// For "Greenery Features"
function GnryDtls_PropInvoLandRepl10_change(el) {
  if (el.value) {
    if (document.getElementById("landscape1").hasAttribute("hidden"))
      document.getElementById("landscape1").removeAttribute("hidden");

    document
      .getElementById("GnryDtls_AreaSoft10")
      .setAttribute("mandatory", "");
    if (
      document.getElementById("GnryDtls_AreaSoft10_TD").hasAttribute("hidden")
    )
      document
        .getElementById("GnryDtls_AreaSoft10_TD")
        .removeAttribute("hidden");
    document.getElementById("GnryDtls_AreaSoft10_label").innerHTML =
      "Area (softscape)*";
    document
      .getElementById("GnryDtls_AreaSoft10_label")
      .removeAttribute("hidden");
    if (
      el.value ==
      "Landscape Replacement Policy for Private Sector Developments - Within Strategic area" ||
      el.value ==
      "Landscape Replacement Policy for Public Sector Developments - Band 1 devt"
    ) {
      document
        .getElementById("GnryDtls_AreaHard10")
        .setAttribute("mandatory", "");
      if (
        document.getElementById("GnryDtls_AreaHard10_TD").hasAttribute("hidden")
      )
        document
          .getElementById("GnryDtls_AreaHard10_TD")
          .removeAttribute("hidden");
      document.getElementById("GnryDtls_AreaHard10_label").innerHTML =
        "Area (hardscape)*";
      document
        .getElementById("GnryDtls_AreaHard10_label")
        .removeAttribute("hidden");
    } else {
      document
        .getElementById("GnryDtls_AreaHard10")
        .removeAttribute("mandatory");
      if (
        document.getElementById("GnryDtls_AreaHard10_TD").hasAttribute("hidden")
      )
        document
          .getElementById("GnryDtls_AreaHard10_TD")
          .setAttribute("hidden", "");
      document.getElementById("GnryDtls_AreaHard10_label").innerHTML =
        "Area (hardscape)";
      document
        .getElementById("GnryDtls_AreaHard10_label")
        .setAttribute("hidden", "");
    }
    if (
      el.value == "Landscape Replacement – Outside Strategic Areas" ||
      el.value ==
      "Landscape Replacement Policy for Private Sector Developments - Within Strategic area"
    ) {
      document
        .getElementById("GnryDtls_GreenPlotRat10")
        .setAttribute("mandatory", "");
      if (
        document
          .getElementById("GnryDtls_GreenPlotRat10_TD")
          .hasAttribute("hidden")
      )
        document
          .getElementById("GnryDtls_GreenPlotRat10_TD")
          .removeAttribute("hidden");
      document.getElementById("GnryDtls_GreenPlotRat10_label").innerHTML =
        "Green Plot Ratio*";
      document
        .getElementById("GnryDtls_GreenPlotRat10_label")
        .removeAttribute("hidden");
    } else {
      document
        .getElementById("GnryDtls_GreenPlotRat10")
        .removeAttribute("mandatory");
      if (
        document
          .getElementById("GnryDtls_GreenPlotRat10_TD")
          .hasAttribute("hidden")
      )
        document
          .getElementById("GnryDtls_GreenPlotRat10_TD")
          .setAttribute("hidden", "");
      document.getElementById("GnryDtls_GreenPlotRat10_label").innerHTML =
        "Green Plot Ratio";
      document
        .getElementById("GnryDtls_GreenPlotRat10_label")
        .setAttribute("hidden", "");
    }
  }
}

// For "Greenery Features"
function notZeroIfPresent(el) {
  let field1 =
    "SiteDtls_NoOfConsUnit" +
    el.id
      .replace(document.getElementById(el.id).getAttribute("prefix"), "")
      .replace(document.getElementById(el.id).getAttribute("suffix"), "") +
    "0";
  let field2 =
    "SiteDtls_GfaToBeCons" +
    el.id
      .replace(document.getElementById(el.id).getAttribute("prefix"), "")
      .replace(document.getElementById(el.id).getAttribute("suffix"), "") +
    "0";
  let fieldOne = document.getElementById(field1);
  let fieldTwo = document.getElementById(field2);

  if (parseFloat(fieldOne.value) != 0 && parseFloat(fieldTwo.value) != 0) {
    document.getElementById(field1).removeAttribute("data-invalid");
    document.getElementById(field1).removeAttribute("data-invalid-message");
    document.getElementById(field2).removeAttribute("data-invalid");
    document.getElementById(field2).removeAttribute("data-invalid-message");
  } else {
    if (parseFloat(fieldOne.value) == 0) {
      if (
        parseFloat(fieldTwo.value) != 0 &&
        !isNaN(parseFloat(fieldTwo.value))
      ) {
        document.getElementById(field1).setAttribute("data-invalid", "");
        document
          .getElementById(field1)
          .setAttribute(
            "data-invalid-message",
            "Value should be more than zero"
          );
      } else {
        document.getElementById(field1).removeAttribute("data-invalid");
        document.getElementById(field1).removeAttribute("data-invalid-message");
        document.getElementById(field2).removeAttribute("data-invalid");
        document.getElementById(field2).removeAttribute("data-invalid-message");
      }
    }
    if (parseFloat(fieldTwo.value) == 0) {
      if (
        parseFloat(fieldOne.value) != 0 &&
        !isNaN(parseFloat(fieldOne.value))
      ) {
        document.getElementById(field2).setAttribute("data-invalid", "");
        document
          .getElementById(field2)
          .setAttribute(
            "data-invalid-message",
            "Value should be more than zero"
          );
      } else {
        document.getElementById(field1).removeAttribute("data-invalid");
        document.getElementById(field1).removeAttribute("data-invalid-message");
        document.getElementById(field2).removeAttribute("data-invalid");
        document.getElementById(field2).removeAttribute("data-invalid-message");
      }
    }
  }
}

// For "Greenery Features"
function calculateIncDec(id) {
  let parent = document.getElementById(id).parentNode;
  while (parent.querySelectorAll("cn2-textbox").length < 3) {
    parent = parent.parentNode;
  }

  let textboxes = parent.querySelectorAll("cn2-textbox");
  if (textboxes[0].value > 0 && textboxes[2].value > 0) {
    textboxes[1].value = (textboxes[2].value - textboxes[0].value).toFixed(2);
  } else textboxes[1].value = "0.00";
}

// For "Greenery Features"
function checkPercent(el) {
  if (el.value > 100) {
    showMessage("Allowable value not more than 100%");
    document.getElementById(el.id).value = "";
    let textboxes = document
      .getElementById(el.id)
      .parentElement.parentElement.querySelectorAll("cn2-textbox");
    for (let a of textboxes) {
      if (document.getElementById(a.id).hasAttribute("total")) {
        document.getElementById(a.id).value = "0.00";
      } else {
        document.getElementById(a.id).value = "";
      }
    }
  }
}

// Total Bonus GFA
function developmentBonus() {
  let value = 0;
  for (let a of document.querySelectorAll("[development-select]")) {
    if (a.value.toLowerCase().includes("bonus")) {
      let currentVal = a.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
        "[bonus-total-input]"
      ).value;
      if (parseFloat(currentVal)) {
        value += parseFloat(currentVal);
      } else {
        value += 0;
      }
    }
  }
  for (let b of document.querySelectorAll("[bonus-total]")) {
    b.value = value.toFixed(2);
  }
}

// set temp ID of duplicate fields when hiding a div
// function //setTempID(fields) {
//   if (fields || fields.length != 0) {
//     for (let a of fields) {
//       if (
//         a.hasAttribute("id") &&
//         (!a.hasAttribute("main-accordion-header") ||
//           !a.hasAttribute("main-accordion-body"))
//       ) {
//         if (
//           !(
//             a.hasAttribute("main-accordion-header") ||
//             a.hasAttribute("main-accordion-body")
//           )
//         ) {
//           let tempID = a.id;
//           a.removeAttribute("id");
//           a.setAttribute("id", tempID + "_temp");
//           a.setAttribute("raw-id", tempID);
//         }
//       }
//     }
//   }
// }

// set raw ID of duplicate fields when showing a div
// function //getRawID(fields) {
//   if (fields || fields.length != 0) {
//     for (let a of fields) {
//       if (
//         a.hasAttribute("raw-id") &&
//         (!a.hasAttribute("main-accordion-header") ||
//           !a.hasAttribute("main-accordion-body"))
//       ) {
//         if (
//           !(
//             a.hasAttribute("main-accordion-header") ||
//             a.hasAttribute("main-accordion-body")
//           )
//         ) {
//           let tempID = a.getAttribute("raw-id").replace("_temp", "");
//           a.removeAttribute("id");
//           a.removeAttribute("raw-id");
//           a.setAttribute("id", tempID);
//         }
//       }
//     }
//   }
// }

// format decimal place
function formatDecimal(el, place) {
  !isNaN(parseFloat(el.value).toFixed(place))
    ? (document.getElementById(el.id).value = parseFloat(el.value).toFixed(
      place
    ))
    : (document.getElementById(el.id).value = "");
}

// enabling "select" of 'Does your proposal involve any of the developments'
function enableSelect(lbl, sel) {
  let yes = document
    .getElementById("SubmInfo_PropInvoAnyDevBel_Switch")
    .querySelector("[switch-yes]").checked;
  let no = document
    .getElementById("SubmInfo_PropInvoAnyDevBel_Switch")
    .querySelector("[switch-no]").checked;

  if (yes == true) {
    document.getElementById(lbl).innerHTML =
      "Does your proposal involve any of the developments below?*";
    document.getElementById(sel).setAttribute("mandatory", "");
  } else {
    document.getElementById(lbl).innerHTML =
      "Does your proposal involve any of the developments below?";
    if (document.getElementById(sel).hasAttribute("mandatory"))
      document.getElementById(sel).removeAttribute("mandatory");
  }
}

// For radio enabling in page 2
function enableRadios(radios) {
  let yes = document
    .getElementById("PartOfAppl_IsPropInvoWork_Switch")
    .querySelector("[switch-yes]").checked;
  let no = document
    .getElementById("PartOfAppl_IsPropInvoWork_Switch")
    .querySelector("[switch-no]").checked;

  if (yes == true) {
    for (let a of radios) {
      let radio = document.getElementById(a);
      radio.removeAttribute("disabled");
    }
  } else {
    for (let a of radios) {
      let radio = document.getElementById(a);
      radio.setAttribute("disabled", "");
      radio.checked = false;
    }
  }
}

// Changing of Broad Land Use
function broadlandTrigger(el) {
  let element = document.getElementById(el.id);
  let counter = el.id
    .replace(element.getAttribute("prefix"), "")
    .replace(element.getAttribute("suffix"), "");
  let target1 = document.getElementById(`SiteDtls_NoOfResiUnit${counter}0`);
  let targetLabel1 = document.getElementById(
    `SiteDtls_NoOfResiUnit10_label${counter}0`
  );
  let target2 = document.getElementById(`SiteDtls_NoOfHoteRoom${counter}0`);
  let targetLabel2 = document.getElementById(
    `SiteDtls_NoOfHoteRoom10_label${counter}0`
  );

  if (target1 && targetLabel1) {
    if (el.value.toLowerCase().includes("residential")) {
      target1.removeAttribute("disabled");
      target1.setAttribute("mandatory", "");
      target1.removeAttribute("hidden");
      targetLabel1.innerHTML = "No. of Residential Units*";
      targetLabel1.removeAttribute("hidden");
    } else {
      target1.value = "";
      target1.removeAttribute("mandatory");
      target1.setAttribute("disabled", "");
      target1.setAttribute("hidden", "");
      targetLabel1.innerHTML = "No. of Residential Units";
      targetLabel1.setAttribute("hidden", "");
    }
  }

  if (target2 && targetLabel2) {
    if (el.value.toLowerCase().includes("hotel")) {
      target2.removeAttribute("disabled");
      target2.setAttribute("mandatory", "");
      target2.removeAttribute("hidden");
      targetLabel2.innerHTML = "No. of Hotel Rooms*";
      targetLabel2.removeAttribute("hidden");
    } else {
      target2.value = "";
      target2.removeAttribute("mandatory");
      target2.setAttribute("disabled", "");
      target2.setAttribute("hidden", "");
      targetLabel2.innerHTML = "No. of Hotel Rooms";
      targetLabel2.setAttribute("hidden", "");
    }
  }
}

// For Bonus GFA switch behavior
function checkBonusGFA(callerId, from) {
  function setAsterisk() {
    for (let a of document.querySelectorAll("[can-asterisk]")) {
      if (!a.innerHTML.includes("*")) a.innerHTML = a.innerHTML + "*";
    }
  }

  function removeAsterisk() {
    for (let a of document.querySelectorAll("[can-asterisk]")) {
      if (a.innerHTML.includes("*")) a.innerHTML = a.innerHTML.replace("*", "");
    }
  }

  if (
    document.querySelector("[target='page8']").hasAttribute("gfa-non-bonus")
  ) {
    let container = "";

    if (from != "check") {
      let suffix = "";
      for (let x = callerId.length - 1; x > 0; x--)
        if (callerId[x] === "_" || callerId[x] >= 0)
          suffix = suffix + callerId[x];
        else break;
      suffix.length = suffix.length - 1;
      suffix = suffix.split("").reverse().join("");
      container = document.getElementById("DevelopmentUse_Fields" + suffix);
    } else {
      container = document.getElementById("GFA_Forms10");
    }

    if (from == "check") {
      for (let z of container.querySelector("#DevelopmentUse10").children) {
        for (let y of z.querySelectorAll("[development-select]")) {
          if (y.value.toLowerCase().includes("bonus")) {
            for (let b of z.querySelectorAll("[not-manda]")) {
              b.setAttribute("mandatory", "");
              setAsterisk();
              if (b.hasAttribute("mandatory")) {
                b.removeAttribute("mandatory");
                removeAsterisk();
              }
              if (
                !document
                  .getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")
                  .shadowRoot.querySelector("input").checked
              ) {
                if (b.value == "") {
                  b.setAttribute("mandatory", "");
                  setAsterisk();
                }
              }
            }
          }
        }
      }
    } else {
      if (
        document.getElementById(callerId).value.toLowerCase().includes("bonus")
      ) {
        if (
          container
            .querySelector("[prefix='GfaDtls_UseGfa_Appr']")
            .hasAttribute("approved-use-gfa-nonbonus")
        )
          container
            .querySelector("[prefix='GfaDtls_UseGfa_Appr']")
            .removeAttribute("approved-use-gfa-nonbonus");
      } else {
        container
          .querySelector("[prefix='GfaDtls_UseGfa_Appr']")
          .setAttribute("approved-use-gfa-nonbonus", "");
      }
      if (document.getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")) {
        if (
          document
            .getElementById("GfaDtls_InvoBnusGfaFeat_Yes10")
            .shadowRoot.querySelector("input").checked
        ) {
          for (let b of container.querySelectorAll("[not-manda]")) {
            b.setAttribute("mandatory", "");
            setAsterisk();
            if (b.hasAttribute("mandatory")) {
              b.removeAttribute("mandatory");
              removeAsterisk();
            }
            if (
              b.value == "" &&
              container
                .querySelector("[development-select]")
                .value.toLowerCase()
                .includes("bonus")
            ) {
              b.setAttribute("mandatory", "");
              setAsterisk();
            }
          }
        } else {
          for (let b of container.querySelectorAll("[not-manda]")) {
            b.setAttribute("mandatory", "");
            setAsterisk();
            if (b.hasAttribute("mandatory")) {
              b.removeAttribute("mandatory");
              removeAsterisk();
            }
          }
        }
      }
    }
  }
}

// For Total GFA of Non-Bonus in GFA Detail and Site Details
function totalNonBonusGFA() {
  totalNonBonusGFASum = 0;
  for (let a of document.querySelectorAll("[gpr-total]")) {
    !isNaN(parseFloat(a.value))
      ? (totalNonBonusGFASum += parseFloat(a.value))
      : (totalNonBonusGFASum += 0);
  }
}

// ---------------------------------------------------------------------------------- OTHERS //

// FOR DECLARATION GENERAL

function subTypeGeneral(el, newSubs, reSubs) {
  let newSubTR = document.getElementById(newSubs);
  let reSubTR = document.getElementById(reSubs);

  if (document.getElementById("PartOfAppl_ApplTp10").value) {
    if (
      el.value ==
      "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
    ) {
      document
        .getElementById(el.id)
        .shadowRoot.querySelector("select").style.backgroundColor = "white";

      emptyValueAll(reSubs);
      setMandatoryToM(document.querySelectorAll("#" + reSubs));

      newSubTR.removeAttribute("hidden");
      reSubTR.setAttribute("hidden", "");

      document.getElementById("DeclGeneNewSubm10").removeAttribute("hidden");
      MToMandatory("DeclGeneNewSubm10");
      for (let a of document
        .getElementById("DeclGeneNewSubm10")
        .querySelectorAll("[h]")) {
        a.setAttribute("hidden", "");
      }
      document.getElementById("DeclGeneResu10").setAttribute("hidden", "");
      MandatoryToM("DeclGeneResu10");
      for (let a of document
        .getElementById("DeclGeneResu10")
        .querySelectorAll("[h]")) {
        a.setAttribute("hidden", "");
      }
    } else {
      document
        .getElementById(el.id)
        .shadowRoot.querySelector("select").style.backgroundColor = "white";

      emptyValueAll(newSubs);
      setMToMandatory(document.querySelectorAll("#" + reSubs));

      reSubTR.removeAttribute("hidden");
      newSubTR.setAttribute("hidden", "");

      document.getElementById("DeclGeneNewSubm10").setAttribute("hidden", "");
      MandatoryToM("DeclGeneNewSubm10");
      for (let a of document
        .getElementById("DeclGeneNewSubm10")
        .querySelectorAll("[h]")) {
        a.setAttribute("hidden", "");
      }
      document.getElementById("DeclGeneResu10").removeAttribute("hidden");
      MToMandatory("DeclGeneResu10");
      for (let a of document
        .getElementById("DeclGeneResu10")
        .querySelectorAll("[h]")) {
        a.setAttribute("hidden", "");
      }
    }
  }
}

function populateSignedBy(persAndOrgsRoleId, persAndOrgsNameId, general2) {
  let rolePrefix = document
    .getElementById(persAndOrgsRoleId)
    .getAttribute("prefix");
  let roleSuffix = document
    .getElementById(persAndOrgsRoleId)
    .getAttribute("suffix");

  let namePrefix = document
    .getElementById("Member_Member_Name_QP10")
    .getAttribute("prefix");
  let nameSuffix = document
    .getElementById("Member_Member_Name_QP10")
    .getAttribute("suffix");

  let ctr = 1;
  while (document.getElementById(rolePrefix + ctr + roleSuffix) != null) {
    if (
      document.getElementById(rolePrefix + ctr + roleSuffix).value != "" &&
      document.getElementById(namePrefix + ctr + nameSuffix).value != ""
    ) {
      if (
        document.getElementById(rolePrefix + ctr + roleSuffix).value ===
        "Agent (i.e. QP)"
      ) {
        if (general2) {
          document.getElementById(
            "DeclGene2_QPName10"
          ).value = document.getElementById(
            namePrefix + ctr + nameSuffix
          ).value;
        } else if (
          document.getElementById("PartOfAppl_SubmTp10").value ===
          "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
        ) {
          if (document.getElementById("DeclGeneNewSubm_SignedBy10"))
            document.getElementById(
              "DeclGeneNewSubm_SignedBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclGeneResu_SignedBy10"))
            document.getElementById(
              "DeclGeneResu_SignedBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclSubdResu_SignBy10"))
            document.getElementById(
              "DeclSubdResu_SignBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclLodgSubd_QpName10"))
            document.getElementById(
              "DeclLodgSubd_QpName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclGene2_QPName10"))
            document.getElementById(
              "DeclGene2_QPName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclGene2_SignBy10"))
            document.getElementById(
              "DeclGene2_SignBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclResi_AddiAlteForm_QpName10"))
            document.getElementById(
              "DeclResi_AddiAlteForm_QpName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclLodgInduWare_QpName10"))
            document.getElementById(
              "DeclLodgInduWare_QpName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclLodgResiDeve_QpName10"))
            document.getElementById(
              "DeclLodgResiDeve_QpName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclLodgInduWare_SignBy10"))
            document.getElementById(
              "DeclLodgInduWare_SignBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
        } else if (
          document.getElementById("PartOfAppl_SubmTp10").value ===
          "Resubmission (for submission after a PP, Advice, Outline Permission and Written Direction)"
        ) {
          if (document.getElementById("DeclGeneNewSubm_SignedBy10"))
            document.getElementById(
              "DeclGeneNewSubm_SignedBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclGeneResu_SignedBy10"))
            document.getElementById(
              "DeclGeneResu_SignedBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).shadowRoot.querySelector("select").querySelector('option[value=' + '"' + document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value + '"' + ']').innerHTML
          if (document.getElementById("DeclSubdResu_SignBy10"))
            document.getElementById(
              "DeclSubdResu_SignBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclLodgSubd_QpName10"))
            document.getElementById(
              "DeclLodgSubd_QpName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclGene2_QPName10"))
            document.getElementById(
              "DeclGene2_QPName10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
          if (document.getElementById("DeclGene2_SignBy10"))
            document.getElementById(
              "DeclGene2_SignBy10"
            ).value = document.getElementById(
              namePrefix + ctr + nameSuffix
            ).value;
        }
        break;
      }
    }
    ctr++;
  }
}

function DisplayDeclarationGeneral(element) {
  if (
    element.value ===
    "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
  ) {
    //for declaration
    if (document.getElementById("DeclGeneNewSubm10").hasAttribute("hidden")) {
      //New submission
      document.getElementById("DeclGeneNewSubm10").removeAttribute("hidden");
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .setAttribute("mandatory", "");
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .setAttribute("mandatory", "");

      //resubmission
      document.getElementById("DeclGeneResu10").setAttribute("hidden", "");
      emptyValueAll(document.getElementById("DeclGeneResu10").id);
    }
  } else {
    //for declaration
    if (document.getElementById("DeclGeneResu10").hasAttribute("hidden")) {
      //resubmission
      document.getElementById("DeclGeneResu10").removeAttribute("hidden");
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .setAttribute("mandatory", "");
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .setAttribute("mandatory", "");

      //new submission
      document.getElementById("DeclGeneNewSubm10").setAttribute("hidden", "");
      emptyValueAll(document.getElementById("DeclGeneNewSubm10").id);
    }
  }
}

function PartOfAppl_SubmTp10_Change(element) {
  if (
    element.value ===
    "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
  ) {
    //for declaration
    if (document.getElementById("DeclGeneNewSubm10").hasAttribute("hidden")) {
      //New submission
      document.getElementById("DeclGeneNewSubm10").removeAttribute("hidden");
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_Yes10")
        .setAttribute("mandatory", "");
      document
        .getElementById("DeclGeneNewSubm_DoesYourPropIn_No10")
        .setAttribute("mandatory", "");

      //resubmission
      document.getElementById("DeclGeneResu10").setAttribute("hidden", "");
      emptyValueAll(document.getElementById("DeclGeneResu10").id);
    }
  }
  if (
    element.value ===
    "Resubmission (for submission after a PP, Advice, Outline Permission and Written Direction)"
  ) {
    //for declaration
    if (document.getElementById("DeclGeneResu10").hasAttribute("hidden")) {
      //resubmission
      document.getElementById("DeclGeneResu10").removeAttribute("hidden");
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_Yes10")
        .setAttribute("mandatory", "");
      document
        .getElementById("DeclGeneResu_DoesYourPropIn_No10")
        .setAttribute("mandatory", "");

      //new submission
      document.getElementById("DeclGeneNewSubm10").setAttribute("hidden", "");
      emptyValueAll(document.getElementById("DeclGeneNewSubm10").id);
    }
  }
}

function checkSiteAddressDuplicate(formId, elementId) {
  let formsPrefix = "";
  let formsSuffix = "";
  let forms = [];
  let formsCount = 1;
  let hasDuplicate = true;
  let filled = false;

  if (document.getElementById(formId).hasAttribute("prefix"))
    formsPrefix = document.getElementById(formId).getAttribute("prefix");
  if (document.getElementById(formId).hasAttribute("suffix"))
    formsSuffix = document.getElementById(formId).getAttribute("suffix");
  while (
    document.getElementById(formsPrefix + formsCount + formsSuffix) != null
  ) {
    forms.push(document.getElementById(formsPrefix + formsCount + formsSuffix));
    formsCount++;
  }
  formsCount = formsCount - 1;
  if (formsCount > 1) {
    for (let x = 0; x < formsCount; x++) {
      for (let y = x; y < formsCount; y++) {
        if (x != y) {
          hasDuplicate = true;
          filled = false;
          let textboxes1 = forms[x].querySelectorAll("cn2-textbox");
          let textboxes2 = forms[y].querySelectorAll("cn2-textbox");
          for (let z = 0; z < textboxes1.length; z++) {
            if (
              textboxes1[z].value.length > 0 ||
              textboxes2[z].value.length > 0
            )
              filled = true;
            if (textboxes1[z].value != textboxes2[z].value) {
              hasDuplicate = false;
              break;
            }
          }
          let selects1 = forms[x].querySelectorAll("cn2-select");
          let selects2 = forms[y].querySelectorAll("cn2-select");
          for (let z = 0; z < selects1.length; z++) {
            if (selects1[z].value.length > 0 || selects2[z].value.length > 0)
              filled = true;
            if (selects1[z].value != selects2[z].value) {
              hasDuplicate = false;
              break;
            }
          }
          if (hasDuplicate && filled) {
            showMessage("Cannot have duplicate Site Address.");
            document.getElementById(elementId).value = "";
            //siteAddressMandatoryField(elementId);
            break;
          }
        }
      }
    }
  }
}

function setRadioButtonOptional(radioButton1, radioButton2) {
  if (
    document.getElementById(radioButton1).checked ||
    document.getElementById(radioButton2).checked
  ) {
    if (document.getElementById(radioButton1).hasAttribute("mandatory"))
      document.getElementById(radioButton1).removeAttribute("mandatory");
    if (document.getElementById(radioButton2).hasAttribute("mandatory"))
      document.getElementById(radioButton2).removeAttribute("mandatory");

    if (document.getElementById(radioButton1).hasAttribute("checked"))
      document.getElementById(radioButton1).removeAttribute("checked");
    if (document.getElementById(radioButton2).hasAttribute("checked"))
      document.getElementById(radioButton2).removeAttribute("checked");

    document.getElementById(radioButton1).setAttribute("m", "");
    document.getElementById(radioButton2).setAttribute("m", "");
    document.getElementById(radioButton1).setAttribute("c", "");
    document.getElementById(radioButton2).setAttribute("c", "");
  } else {
    document.getElementById(radioButton1).setAttribute("mandatory", "");
    document.getElementById(radioButton2).setAttribute("mandatory", "");
    document.getElementById(radioButton1).setAttribute("checked", "");
    document.getElementById(radioButton2).setAttribute("checked", "");
  }
}

function siteAddressMandatoryField(
  siteAddressContainerId,
  siteAddr_RoadNamePrefix,
  siteAddr_localityDescriptionId,
  triggerElementIsDeleteButton,
  triggerElementId
) {
  let container = document.getElementById(siteAddressContainerId);
  let empty = true;
  //for site address only
  let roadNames = document
    .getElementById(siteAddressContainerId)
    .querySelectorAll('[prefix="' + siteAddr_RoadNamePrefix + '"]');

  let localityDescription = document.getElementById(
    siteAddr_localityDescriptionId
  );
  let labels = container.querySelectorAll("[asterisk]");
  if (localityDescription.value != "") {
    for (let roadName of roadNames) {
      if (roadName.hasAttribute("mandatory")) {
        roadName.removeAttribute("mandatory");
        roadName.setAttribute("m", "");
      }

      for (let label of labels) {
        if (label.innerHTML.indexOf("*") > 0)
          label.innerHTML = label.innerHTML.replace("*", "");
      }
    }
    return;
  } else {
    if (triggerElementIsDeleteButton) {
      for (let roadName of roadNames) {
        let roadContainer = document.getElementById(roadName.id).parentNode;
        do {
          roadContainer = roadContainer.parentNode;
        } while (
          roadContainer.parentNode.querySelector(
            '[prefix="siteAddressChild"]'
          ) == null
        );
        if (
          roadName.value != "" &&
          roadContainer.querySelector("[id=" + triggerElementId + "]") === null
        ) {
          empty = false;
          break;
        }
      }
    } else {
      for (let roadName of roadNames) {
        if (roadName.value != "") {
          empty = false;
          break;
        }
      }
    }
  }
  if (empty) {
    if (localityDescription.hasAttribute("m"))
      localityDescription.removeAttribute("m");
    localityDescription.setAttribute("mandatory", "");
    for (let roadName of roadNames) {
      if (roadName.hasAttribute("m")) roadName.removeAttribute("m");
      roadName.setAttribute("mandatory", "");
    }
    for (let label of labels) {
      if (label.innerHTML.indexOf("*") < 0)
        label.innerHTML = label.innerHTML + "*";
    }
  } else {
    if (localityDescription.hasAttribute("mandatory"))
      localityDescription.removeAttribute("mandatory");
  }
}

function oneFieldIsPopulated(id) {
  let prefix = "";

  //get the prefix
  for (let x = 0; x < id.length; x++) {
    if (id[x] >= 0) break;
    prefix = prefix + id[x];
  }
  for (let x = 1; x <= 5; x++) {
    document.getElementById(prefix + x + "0").setAttribute("mandatory", "");
  }

  if (document.getElementById("DeclGeneNewSubm_DoesYourPropIn_No10").checked) {
    if (
      document.getElementById(prefix + "10").value == "" &&
      document.getElementById(prefix + "20").value == "" &&
      document.getElementById(prefix + "30").value == "" &&
      document.getElementById(prefix + "40").value == "" &&
      document.getElementById(prefix + "50").value == ""
    ) {
      document.getElementById(prefix + "10").setAttribute("mandatory", "");
      document.getElementById(prefix + "20").setAttribute("mandatory", "");
      document.getElementById(prefix + "30").setAttribute("mandatory", "");
      document.getElementById(prefix + "40").setAttribute("mandatory", "");
      document.getElementById(prefix + "50").setAttribute("mandatory", "");
    } else {
      document.getElementById(prefix + "10").removeAttribute("mandatory");
      document.getElementById(prefix + "20").removeAttribute("mandatory");
      document.getElementById(prefix + "30").removeAttribute("mandatory");
      document.getElementById(prefix + "40").removeAttribute("mandatory");
      document.getElementById(prefix + "50").removeAttribute("mandatory");
    }
  } else {
    document.getElementById(prefix + "10").removeAttribute("mandatory");
    document.getElementById(prefix + "20").removeAttribute("mandatory");
    document.getElementById(prefix + "30").removeAttribute("mandatory");
    document.getElementById(prefix + "40").removeAttribute("mandatory");
    document.getElementById(prefix + "50").removeAttribute("mandatory");
  }
}

function DeclGeneResu_TheInfoContIn_change(checkboxElement, textfieldId) {
  if (checkboxElement.checked) {
    document.getElementById(textfieldId).removeAttribute("hidden");
    // document.getElementById(textfieldId).setAttribute("mandatory", "");
  } else {
    document.getElementById(textfieldId).setAttribute("hidden", "");
    // document.getElementById(textfieldId).removeAttribute("mandatory");
    document.getElementById(textfieldId).value = "";
  }
}
// END OF DECLARATION GENERAL

// FOR DECLARATION GENERAL 2
function toggleRoleDeclarations(element) {
  let id = element.id;
  let tr1 = document.getElementsByClassName("appAndOwnerDec");
  let tr2 = document.getElementsByClassName("appAndNotOwnerSubDec");
  let tr3 = document.getElementsByClassName("agentSubDec");
  if (id == "DeclGene2_IWeAmAre10") {
    document.getElementById("roleDeclaLabel").removeAttribute("hidden");
    if (tr1) {
      for (let a of tr1) {
        a.removeAttribute("hidden");
      }
    }
    if (tr2) {
      for (let a of tr2) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr3) {
      for (let a of tr3) {
        a.setAttribute("hidden", "");
      }
    }
  } else if (id == "DeclGene2_IWeAmAre20") {
    document.getElementById("roleDeclaLabel").removeAttribute("hidden");
    if (tr1) {
      for (let a of tr1) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr2) {
      for (let a of tr2) {
        a.removeAttribute("hidden");
      }
    }
    if (tr3) {
      for (let a of tr3) {
        a.setAttribute("hidden", "");
      }
    }
  } else if (id == "DeclGene2_IWeAmAre30") {
    document.getElementById("roleDeclaLabel").removeAttribute("hidden");
    if (tr1) {
      for (let a of tr1) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr2) {
      for (let a of tr2) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr3) {
      for (let a of tr3) {
        a.removeAttribute("hidden");
      }
    }
  } else {
    document.getElementById("roleDeclaLabel").setAttribute("hidden");
    if (tr1) {
      for (let a of tr1) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr2) {
      for (let a of tr2) {
        a.setAttribute("hidden", "");
      }
    }
    if (tr3) {
      for (let a of tr3) {
        a.setAttribute("hidden", "");
      }
    }
  }
}
// END OF DECLARATION GENERAL 2

// Sir Renz
function populateSiteNos(siteAddressFormPrefix) {
  let options = "1:1";
  let siteAddressCount = document.querySelectorAll(
    '[prefix="' + siteAddressFormPrefix + '"]'
  ).length;
  if (siteAddressCount > 1)
    for (let x = 2; x <= siteAddressCount; x++)
      options = options + "," + (x + ":" + x);

  //change options
  let children = document.querySelectorAll("[site-number]");
  for (let x = 0; x < children.length; x++) {
    let value = 0;
    if (children[x].value > siteAddressCount)
      if (children[x].hasAttribute("[sub-label]")) value = children[x].value;
      else value = "";
    else value = children[x].value;

    if (children[x].value > siteAddressCount) children[x].value = "";
    children[x].removeAttribute("options", options);
    children[x].setAttribute("options", options);
    children[x].value = value;
  }
}

function mainAddInstance(containerId, formId) {
  let prefix = "";
  let suffix = "";
  let suffixes = [];
  let parent = document.getElementById(containerId);
  let index =
    parent.querySelectorAll(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    ).length + 1;
  //enable delete
  if (parent.querySelector("[danger-main]") != null)
    if (parent.querySelector("[danger-main]").hasAttribute("disabled"))
      parent.querySelector("[danger-main]").removeAttribute("disabled");
  let clone = parent
    .querySelector(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    )
    .cloneNode(true);

  if (clone.querySelectorAll("[sub-form]").length > 0) {
    //remove other instance of sub-form
    if (clone.querySelectorAll("[sub-form]").length > 1) {
      let subForms = clone.querySelectorAll("[sub-form]");
      for (let x = subForms.length - 1; x > 0; x--) {
        clone.querySelector("[sub-container]").removeChild(subForms[x]);
      }
    }

    //remove other instances of sub-sub-form
    if (
      clone.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") > 0
    ) {
      if (
        clone.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") > 1
      ) {
        let subSubForms = clone
          .querySelector("[sub-form]")
          .querySelectorAll("[sub-sub-form]");
        for (let x = subSubForms.length - 1; x > 1; x--) {
          clone
            .querySelector("[sub-form]")
            .querySelectorAll("[sub-sub-container]")
            .removeChild(subSubForms[x]);
        }
      }
    }
  }
  if (clone.querySelector("[danger-inside]") != null)
    clone.querySelector("[danger-inside]").setAttribute("disabled", "");
  if (clone.querySelector("[danger-inside-inside]") != null)
    clone.querySelector("[danger-inside]").setAttribute("disabled", "");
  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form],[sub-sub-container], [sub-sub-form]"
  );
  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = index + element.getAttribute("suffix");
    suffix = suffixes.join("_");
    element.id = prefix + suffix;
    if (element.value != null) {
      element.value = "";
      jsonData[element.id] = "";
    } else {
      if (element.checked != null) {
        element.checked = false;
        jsonData[element.id] = false;
      }
    }
  }

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[0] = index + clone.getAttribute("suffix");
  suffix = suffixes.join("_");
  clone.id = prefix + suffix;

  let label = clone.querySelector("[main-label]");
  if (label != null) {
    if (label.value != null) {
      label.value = index;
    } else {
      label.innerHTML = index;
    }
  }

  let accordions = clone.querySelectorAll("[accordion]");
  if (accordions.length > 0) {
    for (let accordion of accordions) {
      prefix = accordion.getAttribute("prefix");
      suffix = accordion.getAttribute("suffix");
      suffixes = suffix.split("_");
      suffixes[0] = index + accordion.getAttribute("suffix");
      accordion.id = prefix + suffixes.join("_");
      if (accordion.hasAttribute("href"))
        accordion.setAttribute("href", accordion.id);
    }
  }

  elements = clone.querySelectorAll("cn2-switchbutton");
  if (elements.length > 0) {
    for (let element of elements) {
      let yesId = element.parentNode.querySelector("cn2-checkbox").id;
      let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
      element.setAttribute("switch-id", yesId);
      element.setAttribute(
        "event-change",
        "switchButton(this,'" + yesId + "','" + noId + "')"
      );
    }
  }

  parent.appendChild(clone);
}

function mainDeleteInstance(callerBtnId, containerId, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let prefix = "";
  let suffixes = [];
  let container = document.getElementById(containerId);
  let form = document.getElementById(formPrefix + suffix);
  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1) {
    if (forms[0].querySelector("[danger-main]") != null)
      forms[0].querySelector("[danger-main]").setAttribute("disabled", "");
  }
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form]"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[0] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else if (element.checked != null) jsonData[element.id] = element.checked;
    }

    let labels = forms[x].querySelectorAll("[main-label]");
    if (labels.length > 0) {
      for (let label of labels) {
        if (label.value != null) label.value = x + 1;
        else label.innerHTML = x + 1;
      }
    }

    let accordions = forms[x].querySelectorAll("[accordion]");
    if (accordions.length > 0) {
      for (let accordion of accordions) {
        prefix = accordion.getAttribute("prefix");
        suffix = accordion.id.replace(prefix, "");
        suffixes = suffix.split("_");
        suffixes[0] = x + 1 + accordion.getAttribute("suffix");
        accordion.id = prefix + suffixes.join("_");
        if (accordion.hasAttribute("href"))
          accordion.setAttribute("href", accordion.id);
      }
    }

    elements = forms[x].querySelectorAll("cn2-switchbutton");
    if (elements.length > 0) {
      for (let element of elements) {
        let yesId = element.parentNode.querySelector("cn2-checkbox").id;
        let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
        element.setAttribute("switch-id", yesId);
        element.setAttribute(
          "event-change",
          "switchButton(this,'" + yesId + "','" + noId + "')"
        );
      }
    }

    prefix = forms[x].getAttribute("prefix");
    suffix = forms[x].id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = x + 1 + forms[x].getAttribute("suffix");
    forms[x].id = prefix + suffixes.join("_");
  }
}

function mainAddInstance(containerId, formId) {
  let prefix = "";
  let suffix = "";
  let suffixes = [];
  let parent = document.getElementById(containerId);
  let index =
    parent.querySelectorAll(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    ).length + 1;

  //enable delete
  if (parent.querySelector("[danger-main]") != null)
    if (parent.querySelector("[danger-main]").hasAttribute("disabled"))
      parent.querySelector("[danger-main]").removeAttribute("disabled");

  let clone = parent
    .querySelector(
      '[prefix="' +
      document.getElementById(formId).getAttribute("prefix") +
      '"]'
    )
    .cloneNode(true);

  if (clone.querySelectorAll("[sub-form]").length > 0) {
    //remove other instance of sub-form
    if (clone.querySelectorAll("[sub-form]").length > 1) {
      let subForms = clone.querySelectorAll("[sub-form]");
      for (let x = subForms.length - 1; x > 0; x--) {
        clone.querySelector("[sub-container]").removeChild(subForms[x]);
      }
    }

    //remove other instances of sub-sub-form
    if (
      clone.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") > 0
    ) {
      if (
        clone.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") > 1
      ) {
        let subSubForms = clone
          .querySelector("[sub-form]")
          .querySelectorAll("[sub-sub-form]");
        for (let x = subSubForms.length - 1; x > 1; x--) {
          clone
            .querySelector("[sub-form]")
            .querySelectorAll("[sub-sub-container]")
            .removeChild(subSubForms[x]);
        }
      }
    }
  }
  if (clone.querySelector("[danger-inside]") != null)
    clone.querySelector("[danger-inside]").setAttribute("disabled", "");

  if (clone.querySelector("[danger-inside-inside]") != null)
    clone.querySelector("[danger-inside-inside]").setAttribute("disabled", "");

  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form],[sub-sub-container], [sub-sub-form]"
  );
  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = index + element.getAttribute("suffix");
    suffix = suffixes.join("_");
    element.id = prefix + suffix;
    if (element.value != null) {
      element.value = "";
      jsonData[element.id] = "";
    } else {
      if (element.checked != null) {
        element.checked = false;
        jsonData[element.id] = false;
      }
    }
  }

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[0] = index + clone.getAttribute("suffix");
  suffix = suffixes.join("_");
  clone.id = prefix + suffix;

  let label = clone.querySelector("[main-label]");
  if (label != null) {
    if (label.value != null) {
      label.value = index;
    } else {
      label.innerHTML = index;
    }
  }

  let accordions = clone.querySelectorAll("[accordion]");
  if (accordions.length > 0) {
    for (let accordion of accordions) {
      prefix = accordion.getAttribute("prefix");
      suffix = accordion.getAttribute("suffix");
      suffixes = suffix.split("_");
      suffixes[0] = index + accordion.getAttribute("suffix");
      accordion.id = prefix + suffixes.join("_");
      if (accordion.hasAttribute("href"))
        accordion.setAttribute("href", accordion.id);
    }
  }

  elements = clone.querySelectorAll("cn2-switchbutton");
  if (elements.length > 0) {
    for (let element of elements) {
      let yesId = element.parentNode.querySelector("cn2-checkbox").id;
      let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
      element.setAttribute("switch-id", yesId);
      element.setAttribute(
        "event-change",
        "switchButton(this,'" + yesId + "','" + noId + "')"
      );
    }
  }

  parent.appendChild(clone);
}

function mainDeleteInstance(callerBtnId, containerId, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let prefix = "";
  let suffixes = [];
  let container = document.getElementById(containerId);
  let form = document.getElementById(formPrefix + suffix);
  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1)
    if (forms[0].querySelector("[danger-main]") != null)
      forms[0].querySelector("[danger-main]").setAttribute("disabled", "");
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button,[sub-container], [sub-form]"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[0] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else if (element.checked != null) jsonData[element.id] = element.checked;
    }

    let labels = forms[x].querySelectorAll("[main-label]");
    if (labels.length > 0) {
      for (let label of labels) {
        if (label.value != null) label.value = x + 1;
        else label.innerHTML = x + 1;
      }
    }

    let accordions = forms[x].querySelectorAll("[accordion]");
    if (accordions.length > 0) {
      for (let accordion of accordions) {
        prefix = accordion.getAttribute("prefix");
        suffix = accordion.id.replace(prefix, "");
        suffixes = suffix.split("_");
        suffixes[0] = x + 1 + accordion.getAttribute("suffix");
        accordion.id = prefix + suffixes.join("_");
        if (accordion.hasAttribute("href"))
          accordion.setAttribute("href", accordion.id);
      }
    }

    elements = forms[x].querySelectorAll("cn2-switchbutton");
    if (elements.length > 0) {
      for (let element of elements) {
        let yesId = element.parentNode.querySelector("cn2-checkbox").id;
        let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
        element.setAttribute("switch-id", yesId);
        element.setAttribute(
          "event-change",
          "switchButton(this,'" + yesId + "','" + noId + "')"
        );
      }
    }

    prefix = forms[x].getAttribute("prefix");
    suffix = forms[x].id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[0] = x + 1 + forms[x].getAttribute("suffix");
    forms[x].id = prefix + suffixes.join("_");
  }
}

function subAddInstance(callerBtnId, containerPrefix, formId) {
  let btnSuffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  formId =
    document.getElementById(formId).getAttribute("prefix") +
    btnSuffix +
    "_1" +
    document.getElementById(formId).getAttribute("sub-suffix");
  let parent = document.getElementById(containerPrefix + btnSuffix);

  if (
    document
      .getElementById(formId)
      .querySelector("[danger-inside]")
      .hasAttribute("disabled")
  )
    document
      .getElementById(formId)
      .querySelector("[danger-inside]")
      .removeAttribute("disabled");
  let clone = document.getElementById(formId).cloneNode(true);
  let index =
    parent.querySelectorAll('[prefix="' + clone.getAttribute("prefix") + '"]')
      .length + 1;
  let prefix = "";
  let suffix = "";
  let suffixes = [];

  //remove other subSubForms
  let subSubForms = clone.querySelectorAll("[sub-sub-form]");
  if (subSubForms.length > 1)
    for (let x = subSubForms.length - 1; x > 1; x--)
      clone.querySelectorAll("[sub-sub-form]").removeChild(subSubForms[x]);

  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
  );

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[1] = index + clone.getAttribute("sub-suffix");
  clone.id = prefix + suffixes.join("_");

  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[1] = index + element.getAttribute("sub-suffix");
    suffix = suffixes.join("_");
    element.id = prefix + suffix;
    if (element.value != null) {
      element.value = "";
      jsonData[element.id] = "";
    } else {
      if (element.checked != null) {
        element.checked = false;
        jsonData[element.id] = false;
      }
    }
  }

  let label = clone.querySelector("[sub-label]");
  if (label != null) {
    if (label.value != null) {
      label.value = index;
    } else {
      label.innerHTML = index;
    }
  }

  let accordions = clone.querySelectorAll("[accordion]");
  if (accordions.length > 0) {
    for (let accordion of accordions) {
      prefix = accordion.getAttribute("prefix");
      suffix = accordion.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[1] = index + accordion.getAttribute("sub-suffix");
      accordion.id = prefix + suffixes.join("_");
      if (accordion.hasAttribute("href"))
        accordion.setAttribute("href", accordion.id);
    }
  }

  elements = clone.querySelectorAll("cn2-switchbutton");
  if (elements.length > 0) {
    for (let element of elements) {
      let yesId = element.parentNode.querySelector("cn2-checkbox").id;
      let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
      element.setAttribute("switch-id", yesId);
      element.setAttribute(
        "event-change",
        "switchButton(this,'" + yesId + "','" + noId + "')"
      );
    }
  }
  parent.appendChild(clone);
}

function subDeleteInstance(callerBtnId, containerPrefix, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let suffixes = suffix.split("_");
  let form = document.getElementById(formPrefix + suffixes.join("_"));

  suffixes.length = suffixes.length - 1;
  let prefix = "";
  let container = document.getElementById(containerPrefix + suffixes.join("_"));

  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1)
    forms[0].querySelector("[danger-inside]").setAttribute("disabled", "");
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[1] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else jsonData[element.id] = element.checked;
    }
    let labels = forms[x].querySelectorAll("[sub-label]");
    if (labels.length > 0) {
      for (let label of labels) {
        if (label.value != null) label.value = x + 1;
        else label.innerHTML = x + 1;
      }
    }

    let accordions = forms[x].querySelectorAll("[accordion]");
    if (accordions.length > 0) {
      for (let accordion of accordions) {
        prefix = accordion.getAttribute("prefix");
        suffix = accordion.id.replace(prefix, "");
        suffixes = suffix.split("_");
        suffixes[1] = x + 1 + accordion.getAttribute("suffix");
        accordion.id = prefix + suffixes.join("_");
        if (accordion.hasAttribute("href"))
          accordion.setAttribute("href", accordion.id);
      }
    }

    elements = forms[x].querySelectorAll("cn2-switchbutton");
    if (elements.length > 0) {
      for (let element of elements) {
        let yesId = element.parentNode.querySelector("cn2-checkbox").id;
        let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
        element.setAttribute("switch-id", yesId);
        element.setAttribute(
          "event-change",
          "switchButton(this,'" + yesId + "','" + noId + "')"
        );
      }
    }

    prefix = forms[x].getAttribute("prefix");
    suffix = forms[x].id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[1] = x + 1 + forms[x].getAttribute("suffix");
    forms[x].id = prefix + suffixes.join("_");
  }
}

function removeDataFromJson(containerId) {
  let elements = document
    .getElementById(containerId)
    .querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
  for (let element of elements) delete jsonData[element.id];
}

function subSubAddInstance(callerBtnId, containerPrefix, formId) {
  let prefix = "";
  let suffix = "";
  let suffixes = [];

  let btnSuffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let parent = document.getElementById(containerPrefix + btnSuffix);

  //enable delete btn
  if (
    document
      .getElementById(formId)
      .querySelector("[danger-inside-inside]")
      .hasAttribute("disabled")
  )
    document
      .getElementById(formId)
      .querySelector("[danger-inside-inside]")
      .removeAttribute("disabled");

  let clone = document.getElementById(formId).cloneNode(true);
  let index =
    parent.querySelectorAll('[prefix="' + clone.getAttribute("prefix") + '"]')
      .length + 1;

  //update the ids of textboxes, textareas and datefields
  let elements = clone.querySelectorAll(
    "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
  );

  //update clone id
  prefix = clone.getAttribute("prefix");
  suffix = clone.id.replace(prefix, "");
  suffixes = suffix.split("_");
  suffixes[2] = index + clone.getAttribute("sub-sub-suffix");
  suffix = suffixes.join("_");
  clone.id = prefix + suffix;

  for (let element of elements) {
    prefix = element.getAttribute("prefix");
    suffix = element.id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[2] = index + element.getAttribute("sub-sub-suffix");
    suffix = suffixes.join("_");
    element.id = prefix + suffix;
    if (element.value != null) {
      element.value = "";
      jsonData[element.id] = "";
    } else {
      if (element.checked != null) {
        element.checked = false;
        jsonData[element.id] = false;
      }
    }
  }

  let label = clone.querySelector("[sub-sub-label]");
  if (label != null) {
    if (label.value != null) {
      label.value = index;
    } else {
      label.innerHTML = index;
    }
  }

  let accordions = clone.querySelectorAll("[accordion]");
  if (accordions.length > 0) {
    for (let accordion of accordions) {
      prefix = accordion.getAttribute("prefix");
      suffix = accordion.getAttribute("suffix");
      suffixes = suffix.split("_");
      suffixes[2] = index + accordion.getAttribute("sub-sub-suffix");
      accordion.id = prefix + suffixes.join("_");
      if (accordion.hasAttribute("href"))
        accordion.setAttribute("heref", accordion.id);
    }
  }

  elements = clone.querySelectorAll("cn2-switchbutton");
  if (elements.length > 0) {
    for (let element of elements) {
      let yesId = element.parentNode.querySelector("cn2-checkbox").id;
      let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
      element.setAttribute("switch-id", yesId);
      element.setAttribute(
        "event-change",
        "switchButton(this,'" + yesId + "','" + noId + "')"
      );
    }
  }

  parent.appendChild(clone);
}

function subSubDeleteInstance(callerBtnId, containerPrefix, formPrefix) {
  let suffix = callerBtnId.replace(
    document.getElementById(callerBtnId).getAttribute("prefix"),
    ""
  );
  let suffixes = suffix.split("_");
  let form = document.getElementById(formPrefix + suffix);
  suffixes.length = suffixes.length - 1;
  let prefix = "";
  let container = document.getElementById(containerPrefix + suffixes.join("_"));
  removeDataFromJson(form.id);
  container.removeChild(form);

  let forms = container.querySelectorAll('[prefix="' + formPrefix + '"]');
  if (forms.length == 1)
    forms[0]
      .querySelector("[danger-inside-inside]")
      .setAttribute("disabled", "");
  for (let x = 0; x < forms.length; x++) {
    let elements = forms[x].querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox,cn2-button"
    );
    for (let element of elements) {
      delete jsonData[element.id];
      prefix = element.getAttribute("prefix");
      suffix = element.id.replace(prefix, "");
      suffixes = suffix.split("_");
      suffixes[2] = x + 1 + element.getAttribute("suffix");
      element.id = prefix + suffixes.join("_");
      if (element.value != null) jsonData[element.id] = element.value;
      else jsonData[element.id] = element.checked;
    }
    let labels = forms[x].querySelectorAll("[sub-sub-label]");
    if (labels.length > 0) {
      for (let label of labels) {
        if (label.value != null) label.value = x + 1;
        else label.innerHTML = x + 1;
      }
    }

    let accordions = forms[x].querySelectorAll("[accordion]");
    if (accordions.length > 0) {
      for (let accordion of accordions) {
        prefix = accordion.getAttribute("prefix");
        suffix = accordion.id.replace(prefix, "");
        suffixes = suffix.split("_");
        suffixes[2] = x + 1 + accordion.getAttribute("suffix");
        accordion.id = prefix + suffixes.join("_");
        if (accordion.hasAttribute("href"))
          accordion.setAttribute("heref", accordion.id);
      }
    }

    elements = forms[x].querySelectorAll("cn2-switchbutton");
    if (elements.length > 0) {
      for (let element of elements) {
        let yesId = element.parentNode.querySelector("cn2-checkbox").id;
        let noId = element.parentNode.querySelectorAll("cn2-checkbox")[1].id;
        element.setAttribute("switch-id", yesId);
        element.setAttribute(
          "event-change",
          "switchButton(this,'" + yesId + "','" + noId + "')"
        );
      }
    }

    prefix = forms[x].getAttribute("prefix");
    suffix = forms[x].id.replace(prefix, "");
    suffixes = suffix.split("_");
    suffixes[2] = x + 1 + forms[x].getAttribute("suffix");
    forms[x].id = prefix + suffixes.join("_");
  }
}

function removeDataFromJson(containerId) {
  let elements = document
    .getElementById(containerId)
    .querySelectorAll(
      "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
    );
  for (let element of elements) delete jsonData[element.id];
}

function approvedDevelopmentBonus(callerId) {
  let suffix = "";
  for (let x = callerId.length - 1; x > 0; x--)
    if (callerId[x] === "_" || callerId[x] >= 0) suffix = suffix + callerId[x];
    else break;
  suffix.length = suffix.length - 1;
  suffix = suffix.split("").reverse().join("");

  // let suffix = callerId.replace(
  //   document.getElementById(callerId).getAttribute("prefix"),
  //   ""
  // );
  suffix = suffix.split("_");
  suffix.length = 1;
  let container = document.getElementById("GFA_Forms" + suffix);

  //GFA_Forms
  let value = 0;

  for (let a of container.querySelectorAll("[development-select]")) {
    if (a.value.toLowerCase().includes("bonus")) {
      let currentVal = a.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
        "[approved-use-gfa]"
      ).value;
      if (parseFloat(currentVal)) {
        value += parseFloat(currentVal);
      } else {
        value += 0;
      }
    }
  }
  for (let b of container.querySelectorAll("[approved-bonus-total]")) {
    b.value = value.toFixed(2);
  }
  incDecDevelopmentBonus(callerId);
}

function incDecDevelopmentBonus(callerId) {
  let suffix = "";
  for (let x = callerId.length - 1; x > 0; x--)
    if (callerId[x] === "_" || callerId[x] >= 0) suffix = suffix + callerId[x];
    else break;
  suffix.length = suffix.length - 1;
  suffix = suffix.split("").reverse().join("");
  // let suffix = callerId.replace(
  //   document.getElementById(callerId).getAttribute("prefix"),
  //   ""
  // );
  suffix = suffix.split("_");
  suffix.length = 1;
  let container = document.getElementById("GFA_Forms" + suffix);

  let approvedDevBonuses = container.querySelectorAll("[approved-bonus-total]");
  let incDecDevBonuses = container.querySelectorAll("[incdec-bonus-total]");
  let overallDevBonuses = container.querySelectorAll("[overall-bonus-total]");

  for (let x = 0; x < approvedDevBonuses.length; x++) {
    incDecDevBonuses[x].value = (
      overallDevBonuses[x].value - approvedDevBonuses[x].value
    ).toFixed(2);
  }
}

function overAllDevelopmentBonus(callerId) {
  let suffix = "";
  for (let x = callerId.length - 1; x > 0; x--)
    if (callerId[x] === "_" || callerId[x] >= 0) suffix = suffix + callerId[x];
    else break;
  suffix.length = suffix.length - 1;
  suffix = suffix.split("").reverse().join("");
  // let suffix = callerId.replace(
  //   document.getElementById(callerId).getAttribute("prefix"),
  //   ""
  // );
  suffix = suffix.split("_");
  suffix.length = 1;
  let container = document.getElementById("GFA_Forms" + suffix);

  let value = 0;
  for (let a of container.querySelectorAll("[development-select]")) {
    if (a.value.toLowerCase().includes("bonus")) {
      let currentVal = a.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
        "[overall-use-gfa]"
      ).value;
      if (parseFloat(currentVal)) {
        value += parseFloat(currentVal);
      } else {
        value += 0;
      }
    }
  }
  for (let b of container.querySelectorAll("[overall-bonus-total]")) {
    b.value = value.toFixed(2);
  }
  incDecDevelopmentBonus(callerId);
}

// For "Site Details" with 1 columns
function calculateGPR(con) {
  let site = document.getElementById(con).querySelector("[calculate-site]");
  let total = document.getElementById(con).querySelector("[gpr-total]");
  let gpr = document.getElementById(con).querySelector("[quotient-gpr]");

  !isNaN(parseFloat(total.value) / parseFloat(site.value))
    ? (gpr.value = (parseFloat(total.value) / parseFloat(site.value)).toFixed(
      2
    ))
    : (gpr.value = "0.00");
}

function calculateCPR(con) {
  let site = document.getElementById(con).querySelector("[calculate-site]");
  let total = document.getElementById(con).querySelector("[cpr-comm]");
  let gpr = document.getElementById(con).querySelector("[quotient-cpr]");

  !isNaN(parseFloat(total.value) / parseFloat(site.value))
    ? (gpr.value = (parseFloat(total.value) / parseFloat(site.value)).toFixed(
      2
    ))
    : (gpr.value = "0.00");
}

function calculateRPR(con) {
  let site = document.getElementById(con).querySelector("[calculate-site]");
  let total = document.getElementById(con).querySelector("[rpr-resi]");
  let gpr = document.getElementById(con).querySelector("[quotient-rpr]");

  !isNaN(parseFloat(total.value) / parseFloat(site.value))
    ? (gpr.value = (parseFloat(total.value) / parseFloat(site.value)).toFixed(
      2
    ))
    : (gpr.value = "0.00");
}
// End of "Site Details" with 1 columns

// For "Site Details" with 3 columns
function SiteDtls_SiteArea_Changed(id) {
  calculateGpr_Approved(id);
  calculateGpr_Overall(id);
  calculateCpr_Approved(id);
  calculateCpr_Overall(id);
  calculateRpr_Approved(id);
  calculateRpr_Overall(id);
}

function calculateGprWhole_Approved(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let totalGfaWholeBuildingApprPrefix = "SiteDtls_TotaGfaOfTheWholBuil_Appr";
  let grossPlotRatioApprPrefix = "SiteDtls_GrosPlotRati_Appr";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(totalGfaWholeBuildingApprPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(grossPlotRatioApprPrefix + suffix).value = (
      parseFloat(
        document.getElementById(totalGfaWholeBuildingApprPrefix + suffix)
          .value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(grossPlotRatioApprPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_GrosPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_GrosPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateGprWhole_Overall(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let totalGfaWholeBuildingOverPrefix = "SiteDtls_TotaGfaOfTheWholBuil_Over";
  let grossPlotRatioOverPrefix = "SiteDtls_GrosPlotRati_Over";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(totalGfaWholeBuildingOverPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(grossPlotRatioOverPrefix + suffix).value = (
      parseFloat(
        document.getElementById(totalGfaWholeBuildingOverPrefix + suffix)
          .value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(grossPlotRatioOverPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_GrosPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_GrosPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateGpr_Approved(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let totalGfaApprPrefix = "SiteDtls_TotaGfa_Appr";
  let grossPlotRatioApprPrefix = "SiteDtls_GrosPlotRati_Appr";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(document.getElementById(totalGfaApprPrefix + suffix).value) /
      parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(grossPlotRatioApprPrefix + suffix).value = (
      parseFloat(document.getElementById(totalGfaApprPrefix + suffix).value) /
      parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(grossPlotRatioApprPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_GrosPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_GrosPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateGpr_Overall(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let totalGfaApprPrefix = "SiteDtls_TotaGfa_Over";
  let grossPlotRatioApprPrefix = "SiteDtls_GrosPlotRati_Over";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(document.getElementById(totalGfaApprPrefix + suffix).value) /
      parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(grossPlotRatioApprPrefix + suffix).value = (
      parseFloat(document.getElementById(totalGfaApprPrefix + suffix).value) /
      parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(grossPlotRatioApprPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_GrosPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_GrosPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_GrosPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateCpr_Approved(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let commercialGfaApprPrefix = "SiteDtls_CommGfa_Appr";
  let commercialPlotRatioApprPrefix = "SiteDtls_CommPlotRati_Appr";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(commercialGfaApprPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(commercialPlotRatioApprPrefix + suffix).value = (
      parseFloat(
        document.getElementById(commercialGfaApprPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(commercialPlotRatioApprPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_CommPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_CommPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateCpr_Overall(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let commercialGfaOverPrefix = "SiteDtls_CommGfa_Over";
  let commercialPlotRatioOverPrefix = "SiteDtls_CommPlotRati_Over";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(commercialGfaOverPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(commercialPlotRatioOverPrefix + suffix).value = (
      parseFloat(
        document.getElementById(commercialGfaOverPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(commercialPlotRatioOverPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_CommPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_CommPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_CommPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateRpr_Approved(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let residentialGfaApprPrefix = "SiteDtls_ResiGfa_Appr";
  let residentialPlotRatioApprPrefix = "SiteDtls_ResiPlotRati_Appr";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(residentialGfaApprPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(
      residentialPlotRatioApprPrefix + suffix
    ).value = (
      parseFloat(
        document.getElementById(residentialGfaApprPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(residentialPlotRatioApprPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_ResiPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_ResiPlotRati_IncDec" + suffix).value =
      "0.00");
}

function calculateRpr_Overall(id) {
  let siteAreaPrefix = "SiteDtls_SiteArea";
  let residentialGfaOverPrefix = "SiteDtls_ResiGfa_Over";
  let residentialPlotRatioOverPrefix = "SiteDtls_ResiPlotRati_Over";

  //get the suffix for this instance
  let suffix = "";
  for (let x = id.length - 1; x > 0; x--)
    if (id[x] >= 0 || id[x] == "_") suffix = suffix + id[x];
    else break;
  suffix = suffix.split("").reverse().join("");

  !isNaN(
    (
      parseFloat(
        document.getElementById(residentialGfaOverPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2)
  )
    ? (document.getElementById(
      residentialPlotRatioOverPrefix + suffix
    ).value = (
      parseFloat(
        document.getElementById(residentialGfaOverPrefix + suffix).value
      ) / parseFloat(document.getElementById(siteAreaPrefix + suffix).value)
    ).toFixed(2))
    : (document.getElementById(residentialPlotRatioOverPrefix + suffix).value =
      "0.00");

  !isNaN(
    (
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Appr" + suffix).value
      )
    ).toFixed(2)
  )
    ? (document.getElementById(
      "SiteDtls_ResiPlotRati_IncDec" + suffix
    ).value = (
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Over" + suffix).value
      ) -
      parseFloat(
        document.getElementById("SiteDtls_ResiPlotRati_Appr" + suffix).value
      )
    ).toFixed(2))
    : (document.getElementById("SiteDtls_ResiPlotRati_IncDec" + suffix).value =
      "0.00");
}
// End of "Site Details" with 3 columns

function checkIfMukimIsValidatedV2() {
  let con = document.getElementById("page3");
  let mkCon = con.querySelector("#MK1");
  let hasValid = false;

  stopHere: for (let a of mkCon.children) {
    let eitherRadio = [...a.querySelectorAll("input[type='radio']")].some(
      (r) => r.checked == true
    );
    let bothTextbox = [...a.querySelectorAll("cn2-textbox")].every(
      (r) => r.value != ""
    );

    if (eitherRadio && bothTextbox) {
      hasValid = true;
      break stopHere;
    }
  }

  if (hasValid) {
    for (let a of con.querySelectorAll("input[type='radio'], cn2-textbox")) {
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
    }
  } else {
    for (let a of con.querySelectorAll("input[type='radio'], cn2-textbox")) {
      a.setAttribute("mandatory", "");
      a.value = a.value;
      if (a.tagName.toLowerCase() != "cn2-textbox") {
        a.setAttribute("checked", "");
      }
    }

    for (let a of mkCon.children) {
      let radios = [...a.querySelectorAll("input[type='radio']")];
      if (radios.some((r) => r.checked == true)) {
        radios.map((r) => {
          r.removeAttribute("checked");
          r.removeAttribute("mandatory");
        });
      } else {
        radios.map((r) => {
          r.setAttribute("checked", "");
          r.setAttribute("mandatory", "");
        });
      }
    }
  }
}

//---------------START INTERNAL CHECK LIST--------------------

function ApptypeInternalCheckList() {
  let appTypes = [
    "Residential (Landed Housing Area)",
    "Industrial/Warehouse Development (JTC)",
    "Residential Development (HDB)",
    "Agriculture Development",
  ];
  let appType = document.getElementById("PartOfAppl_LodgTp10").value;
  let pageGFA = document.getElementById("page8");
  let switchs = pageGFA.querySelectorAll("cn2-switchbutton");

  delete jsonData["fileAttach10"];
  delete jsonData["fileAttach20"];
  for (let x of switchs) {
    x.checked = false;
  }

  if (appType == appTypes[0]) {
    // Application Type Residential (Landed Housing Area)
  } else if (appType == appTypes[1]) {
    // Application Type Industrial/Warehouse Development (JTC)
  } else if (appType == appTypes[2]) {
    // Application Type Residential Development (HDB)
  } else if (appType == appTypes[3]) {
    // Application Type Agriculture Development
  }
}

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

//get SwitchButton Suffix
function getSuffix(element) {
  let id = element.parentNode.children[1].getAttribute("id");
  let getParent = document.querySelectorAll(
    `[prefix="gfa_FormChildAccordionBody"]`
  );
  let childIndex = 0;
  let index = 0;
  //get Parent Div
  for (let x of getParent) {
    index = index + 10;
    for (let y of x.querySelectorAll(`[id=${id}]`)) {
      if (id == y.shadowRoot.querySelector(`[id=${id}]`).getAttribute("id")) {
        childIndex = index;
      }
    }
  }
  return childIndex;
}

//Internal Checklist Switch
function fileAttachCheckSwitch(element) {
  let suffix = 10;
  let parent = document.getElementById("gfa_FormChildAccordionBody" + suffix);
  let select = parent.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`);
  let checkbox = document.getElementById(
    "GfaDtls_InvoBnusGfaFeat_Yes" + suffix
  );
  let appTypes = [
    "Residential (Landed Housing Area)",
    "Industrial/Warehouse Development (JTC)",
    "Residential Development (HDB)",
    "Agriculture Development",
  ];
  let appType = document.getElementById("PartOfAppl_LodgTp10").value;
  suffix = suffix + 10;
  if (appType == appTypes[0]) {
    // Application Type Residential (Landed Housing Area)
  } else if (appType == appTypes[1]) {
    // Application Type Industrial/Warehouse Development (JTC)
    if (element.checked) {
      for (let x of select) {
        if (
          x.value == "Bonus GFA above MP control - Balcony" ||
          x.value == "Bonus GFA above MP control - Green Mark(new)"
        ) {
          jsonData["fileAttach" + suffix] = {
            checkListId: checkbox.id,
            isAllowMultiple: true,
            formName: "*.*",
            sectionName: "GFA Details"
          };
        } else {
          delete jsonData["fileAttach" + suffix];
        }
      }
    } else {
      delete jsonData["fileAttach" + suffix];
    }
  } else if (appType == appTypes[2]) {
    // Application Type Residential Development (HDB)
    if (element.checked) {
      for (let x of select) {
        if (
          x.value == "Bonus GFA above MP control - Balcony" ||
          x.value == "Bonus GFA above MP control - Green Mark(new)"
        ) {
          jsonData["fileAttach" + suffix] = {
            checkListId: checkbox.id,
            isAllowMultiple: true,
            formName: "*.*",
          };
        } else {
          delete jsonData["fileAttach" + suffix];
        }
      }
    } else {
      delete jsonData["fileAttach" + suffix];
    }
  } else if (appType == appTypes[3]) {
    // Application Type Agriculture Development
  }
}

function fileAttachCheckSelect(element) {
  let select = document.getElementById(element.id);
  let parent =
    select.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
      .parentNode;
  let switchButton = parent.querySelector("cn2-switchbutton");
  let allSelect = parent.querySelectorAll(`[prefix="GfaDtls_DevtUse"]`);
  //get the suffix for this instance
  let suffix = "";
  for (let x = parent.id.length - 1; x > 0; x--)
    if (parent.id[x] >= 0 || parent.id[x] == "_")
      suffix = suffix + parent.id[x];
    else break;
  suffix = suffix.split("").reverse().join("");
  let checkbox = document.getElementById(
    "GfaDtls_InvoBnusGfaFeat_Yes" + suffix
  );

  let appTypes = [
    "Residential (Landed Housing Area)",
    "Industrial/Warehouse Development (JTC)",
    "Residential Development (HDB)",
    "Agriculture Development",
  ];
  let appType = document.getElementById("PartOfAppl_LodgTp10").value;
  suffix = parseInt(suffix) + 10;
  if (appType == appTypes[0]) {
    // Application Type Residential (Landed Housing Area)
  } else if (appType == appTypes[1]) {
    // Application Type Industrial/Warehouse Development (JTC)
    if (switchButton.checked) {
      for (let x of allSelect) {
        if (
          x.value == "Bonus GFA above MP control - Balcony" ||
          x.value == "Bonus GFA above MP control - Green Mark(new)"
        ) {
          jsonData["fileAttach" + suffix] = {
            checkListId: checkbox.id,
            isAllowMultiple: true,
            formName: "*.*",
            sectionName: "GFA Details"
          };
        } else {
          delete jsonData["fileAttach" + suffix];
        }
      }
    } else {
      delete jsonData["fileAttach" + suffix];
    }
  } else if (appType == appTypes[2]) {
    // Application Type Residential Development (HDB)
    if (switchButton.checked) {
      for (let x of allSelect) {
        if (
          x.value == "Bonus GFA above MP control - Balcony" ||
          x.value == "Bonus GFA above MP control - Green Mark(new)"
        ) {
          jsonData["fileAttach" + suffix] = {
            checkListId: checkbox.id,
            isAllowMultiple: true,
            formName: "*.*",
            sectionName: "GFA Details"
          };
        } else {
          delete jsonData["fileAttach" + suffix];
        }
      }
    } else {
      delete jsonData["fileAttach" + suffix];
    }
  } else if (appType == appTypes[3]) {
    // Application Type Agriculture Development
  }
}

//---------------END INTERNAL CHECK LIST--------------------


let equivalent = {
  "Agent (i.e. QP)": "QP",
  "Applicant (Developer)": "DEVP",
  Owner: "OWN",
  Architect: "ARCH",
  Engineer: "PE",
  Lessee: "LESSEE",
  "Management Corporation Strata Title": "MCST",
  "Prospective Purchaser": "PP",
  Surveyor: "RLS",
  Tenant: "TENANT",
  Others: "QP",
  "": "",
};
let prefixes = [
  "MemberRole_Member_Role_Code_Desc",
  "Member_Member_SID",
  "Member_Member_Name",
  "Member_Firm_Name",
  "MemberRole_Professional_No",
  "Member_House_Block_No",
  "Member_Road_Code_Desc",
  "Member_Unit_Floor",
  "Member_Unit_No",
  "Member_Postal_Code",
  "Member_Address1",
  "Member_Address2",
  "Member_Address3",
  "Member_Address4",
  "Member_Email_Address",
  "Member_Tel_No",
  "Member_Tel_Ext_No",
  "Member_Hand_No",
  "Member_Cont_Member_Name",
  "Member_Cont_Email_Address",
  "Member_Cont_Tel_No",
  "Member_Cont_Tel_Ext_No",
  "Member_Cont_Hand_No",
];

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let run = setTimeout(() => {
      for (let a of document.querySelectorAll("[role-name]")) {
        let isDisabled = a.hasAttribute("disabled");
        if (isDisabled)
          a.removeAttribute("disabled");
        if (a.tagName.toLowerCase() == "cn2-select")
          a.shadowRoot.querySelector("select").onchange();
        else
          a.shadowRoot.querySelector("input").onchange();
        if (isDisabled)
          a.setAttribute("disabled", "");
      }

      duplicateForm = (formContainer, fieldContainer, field, status) => {
        let container = document.getElementById(formContainer);
        let clonedForm = container.lastElementChild.cloneNode(true);
        for (let a of clonedForm.querySelectorAll("[prefix]")) {
          let rawPre = a.getAttribute("prefix");
          let prefix = a.getAttribute("prefix").split("_").slice(0, -1).join("_");
          if (prefixes.includes(prefix)) {
            a.setAttribute("prefix", prefix + "_QP");
            a.setAttribute(
              "id",
              a.getAttribute("id").replace(rawPre, a.getAttribute("prefix"))
            );
          }
        }
        let containerCount = container.childElementCount;
        let generalCounter = containerCount + 1;
        let newFieldConID =
          document.getElementById(fieldContainer).getAttribute("prefix") +
          generalCounter +
          document.getElementById(fieldContainer).getAttribute("suffix");
        let counters = clonedForm.querySelectorAll("[counter-form]");
        let tempChild = "";

        // As for sir Neth
        let menuList = document.getElementById("menu").children;
        let p = false;
        for (let i = 0; i < menuList.length; i++) {
          if (
            menuList[i].hasAttribute("warning") ||
            menuList[i].hasAttribute("valid")
          ) {
            p = true;
          }
        }
        if (p) {
          for (let i = 0; i < menuList.length; i++) {
            if (!menuList[i].hasAttribute("hidden")) {
              // if (menuList[i].hasAttribute("selected")) {
              //   menuList[i].removeAttribute("selected");
              // }
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

        if (counters.length > 0) {
          for (let x of counters) {
            if (x.hasAttribute("id")) {
              x.value = generalCounter;
            } else {
              x.innerHTML = generalCounter;
            }
          }
        }

        clonedForm.id =
          clonedForm.getAttribute("prefix") +
          generalCounter +
          clonedForm.getAttribute("suffix");

        if (clonedForm.querySelector("[role-name]")) {
          // Grab the original element
          let original = clonedForm.querySelector("[role-name]");
          // Create a replacement tag of the desired type
          let replacement = document.createElement("cn2-select");

          // Grab all of the original's attributes, and pass them to the replacement
          for (let i = 0, l = original.attributes.length; i < l; ++i) {
            let nodeName = original.attributes.item(i).nodeName;
            let nodeValue = original.attributes.item(i).nodeValue;

            replacement.setAttribute(nodeName, nodeValue);
          }

          replacement.value = "";

          // Persist contents
          replacement.innerHTML = original.innerHTML;

          // Switch!
          original.parentNode.replaceChild(replacement, original);
        }

        if (clonedForm.querySelector("[name-role]")) {
          // Grab the original element
          let original = clonedForm.querySelector("[name-role]");
          // Create a replacement tag of the desired type
          let replacement = document.createElement("cn2-select");

          // Grab all of the original's attributes, and pass them to the replacement
          for (let i = 0, l = original.attributes.length; i < l; ++i) {
            let nodeName = original.attributes.item(i).nodeName;
            let nodeValue = original.attributes.item(i).nodeValue;

            replacement.setAttribute(nodeName, nodeValue);
          }

          replacement.setAttribute(
            "event-change",
            "loadDropDownDetailsURA(this);"
          );
          // replacement.setAttribute("data-options", "persAndOrgsDropdown");
          replacement.value = "";

          // Persist contents
          replacement.innerHTML = original.innerHTML;

          // Switch!
          original.parentNode.replaceChild(replacement, original);
        }

        if (clonedForm.querySelector("[road-name]")) {
          // Grab the original element
          let original = clonedForm.querySelector("[road-name]");
          // Create a replacement tag of the desired type
          let replacement = document.createElement("cn2-textbox");

          // Grab all of the original's attributes, and pass them to the replacement
          for (let i = 0, l = original.attributes.length; i < l; ++i) {
            let nodeName = original.attributes.item(i).nodeName;
            let nodeValue = original.attributes.item(i).nodeValue;

            replacement.setAttribute(nodeName, nodeValue);
          }

          if (replacement.hasAttribute("event-change"))
            replacement.removeAttribute("event-change");
          if (replacement.hasAttribute("data-options"))
            replacement.removeAttribute("data-options");
          replacement.value = "";

          // Persist contents
          replacement.innerHTML = original.innerHTML;

          // Switch!
          original.parentNode.replaceChild(replacement, original);
        }

        if (clonedForm.querySelector("[formatted-road]")) {
          clonedForm
            .querySelector("[formatted-road]")
            .setAttribute("disabled", "");
        }
        if (clonedForm.querySelector("[formatted-postal]")) {
          clonedForm
            .querySelector("[formatted-postal]")
            .setAttribute("disabled", "");
        }

        if (clonedForm.querySelector("[line-one]")) {
          clonedForm.querySelector("[line-one]").value = "sample line 1";
        }

        if (clonedForm.querySelector("[asterisk]") != null) {
          let asteriskFields = clonedForm.querySelectorAll("[asterisk]");
          for (let asteriskField of asteriskFields)
            if (asteriskField.innerHTML.indexOf("*") < 0)
              asteriskField.innerHTML = asteriskField.innerHTML + "*";
        }
        if (clonedForm.querySelector("[label]") != null) {
          let asteriskFields = clonedForm.querySelectorAll("[label]");
          for (let asteriskField of asteriskFields)
            if (asteriskField.innerHTML.indexOf("*") < 0)
              asteriskField.innerHTML = asteriskField.innerHTML + "*";
        }
        if (clonedForm.querySelector("[cont-label]") != null) {
          let asteriskFields = clonedForm.querySelectorAll("[cont-label]");
          for (let asteriskField of asteriskFields)
            if (asteriskField.innerHTML.indexOf("*") < 0)
              asteriskField.innerHTML = asteriskField.innerHTML + "*";
        }

        if (clonedForm.querySelector("[h]")) {
          let hiddenFields = clonedForm.querySelectorAll("[h]");
          for (let hiddenField of hiddenFields) {
            hiddenField.setAttribute("hidden", "");
            hiddenField.value = "";
            if (hiddenField.querySelector("[id]")) {
              let fields = hiddenField.querySelectorAll("[id]");
              for (let field of fields) {
                if (field.hasAttribute("mandatory")) {
                  field.removeAttribute("mandatory");
                  field.setAttribute("m", "");
                }
              }
            }
          }
        }

        if (clonedForm.querySelector("[no-asterisk]")) {
          for (let a of clonedForm.querySelectorAll("[no-asterisk]")) {
            a.innerHTML = a.innerHTML.replace("*", "");
          }
        }

        if (clonedForm.querySelector("[d]")) {
          let hiddenFields = clonedForm.querySelectorAll("[d]");
          for (let hiddenField of hiddenFields) {
            if (hiddenField.hasAttribute("mandatory"))
              hiddenField.removeAttribute("mandatory");
            hiddenField.setAttribute("disabled", "");
            hiddenField.value = "";
          }
        }

        if (clonedForm.querySelector("[PersAndOrgs_Email]") != null) {
          //for persons and orgs email, telno and handno outside of contact details
          if (
            clonedForm
              .querySelector("[PersAndOrgs_Email]")
              .hasAttribute("mandatory")
          )
            clonedForm
              .querySelector("[PersAndOrgs_Email]")
              .removeAttribute("mandatory");
          clonedForm
            .querySelector("[PersAndOrgs_TelNo]")
            .setAttribute("mandatory", "");
          clonedForm
            .querySelector("[PersAndOrgs_HandNo]")
            .setAttribute("mandatory", "");

          //for persons and orgs email, telno and handno inside of contact details
          clonedForm
            .querySelector("[Member_Cont_Email_Address_QP]")
            .setAttribute("mandatory", "");
          clonedForm
            .querySelector("[Member_Cont_Tel_No_QP]")
            .setAttribute("mandatory", "");
          clonedForm
            .querySelector("[Member_Cont_Hand_No_QP]")
            .setAttribute("mandatory", "");
        }

        let excludes = clonedForm.querySelectorAll("[excluded]");
        for (let el of excludes) {
          let newID = "";
          let pre = el.getAttribute("prefix");
          let suf = el.getAttribute("suffix");
          if (el.hasAttribute("mdo-option")) {
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 2];
            position = generalCounter + position[1];
            tempID[tempID.length - 2] = position;
            newID = pre + tempID.join("_");
          } else {
            newID = pre + generalCounter + suf;
          }
          //added
          if (el.hasAttribute("href")) {
            el.setAttribute("href", newID);
          }
          el.removeAttribute("id");
          el.setAttribute("id", newID);
        }

        let includes = clonedForm.querySelectorAll("[included]");
        for (let el of includes) {
          let newID = "";
          let pre = el.getAttribute("prefix");
          let suf = el.getAttribute("suffix");
          if (
            clonedForm.querySelector("#" + el.id).hasAttribute("mdo-field-target")
          ) {
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 3];
            position = generalCounter + position[1];
            tempID[tempID.length - 3] = position;
            newID = pre + tempID.join("_");
          } else {
            newID = pre + generalCounter + suf + "_10";
          }
          el.removeAttribute("id");
          el.setAttribute("id", newID);
        }

        if (clonedForm.querySelectorAll("[mdo-field-target]")) {
          let fields = clonedForm.querySelectorAll("[mdo-field-target]");
          for (let el of fields) {
            let newID = "";
            let pre = el.getAttribute("prefix");
            let suf = el.getAttribute("suffix");
            let temp1 = el.id.replace(pre, "");
            let tempID = temp1.split("_");
            let position = tempID[tempID.length - 3];
            position = generalCounter + position[1];
            tempID[tempID.length - 3] = position;
            newID = pre + tempID.join("_");
            el.removeAttribute("id");
            el.setAttribute("id", newID);
          }
        }

        if (clonedForm.querySelectorAll("[name], input[type='radio']")) {
          let radios = clonedForm.querySelectorAll("[name], input[type='radio']");
          for (let x of radios) {
            let oldName = x.getAttribute("name");
            x.setAttribute(
              "name",
              x.getAttribute("name").slice(0, -2) + generalCounter + "0"
            );
            x.checked = defaults[oldName];
            if (x.hasAttribute("c") && x.hasAttribute("m")) {
              x.setAttribute("checked", "");
              x.setAttribute("mandatory", "");
            }
          }
        }

        if (clonedForm.querySelectorAll("[switch-field]")) {
          let switchBtns = clonedForm.querySelectorAll("[switch-field]");
          for (let x of switchBtns) {
            x.removeAttribute("switch-id");
            x.setAttribute(
              "switch-id",
              x.parentElement.querySelector("[switch-yes]").id
            );
            x.removeAttribute("event-change");
            let newEvent =
              "switchButton(this, '" +
              x.parentElement.querySelector("[switch-yes]").id +
              "', '" +
              x.parentElement.querySelector("[switch-no]").id +
              "')";
            x.setAttribute("event-change", newEvent);
          }
        }

        let deleteBtn = clonedForm.querySelectorAll("[danger-inside]");
        let newFieldContainer =
          document.getElementById(fieldContainer).getAttribute("prefix") +
          generalCounter +
          document.getElementById(fieldContainer).getAttribute("suffix");
        let newField =
          document.getElementById(field + "_10").getAttribute("prefix") +
          generalCounter +
          document.getElementById(field + "_10").getAttribute("suffix") +
          "_10";
        for (let x of deleteBtn) {
          x.setAttribute("disabled", "");
          x.removeAttribute("event-click");
          let newEvent = "";
          if (!x.hasAttribute("danger-gfa")) {
            newEvent =
              "removeField('" +
              formContainer +
              "', '" +
              clonedForm.id +
              "', '" +
              newFieldContainer +
              "', '" +
              newField +
              "')";
          } else {
            if (x.hasAttribute("danger-gfa-three")) {
              newEvent =
                "removeField('" +
                formContainer +
                "', '" +
                clonedForm.id +
                "', '" +
                newFieldContainer +
                "', '" +
                newField +
                "'); approvedDevelopmentBonus(this.id); incDecDevelopmentBonus(this.id); overAllDevelopmentBonus(this.id);";
            } else {
              newEvent =
                "removeField('" +
                formContainer +
                "', '" +
                clonedForm.id +
                "', '" +
                newFieldContainer +
                "', '" +
                newField +
                "'); totalGFANormal('" +
                clonedForm.id +
                "');";
            }
          }
          x.setAttribute("event-click", newEvent);
        }

        let deleteBtn2 = clonedForm.querySelectorAll("[danger-main]");
        let newFieldContainer2 =
          document.getElementById(fieldContainer).getAttribute("prefix") +
          generalCounter +
          document.getElementById(fieldContainer).getAttribute("suffix");
        let newField2 =
          document.getElementById(field + "_10").getAttribute("prefix") +
          generalCounter +
          document.getElementById(field + "_10").getAttribute("suffix") +
          "_10";
        for (let x of deleteBtn2) {
          x.removeAttribute("event-click");
          let newEvent2 =
            "removeForm('" +
            formContainer +
            "', '" +
            clonedForm.id +
            "', '" +
            newFieldContainer2 +
            "', '" +
            newField2 +
            "')";
          x.setAttribute("event-click", newEvent2);
          if (status == "multiple" || status == "mandatory") {
            x.setAttribute("hidden", "");
          } else {
            x.removeAttribute("hidden");
          }
        }

        if (clonedForm.querySelectorAll("[switch-field]")) {
          let innerSwitches = clonedForm.querySelectorAll("[switch-field]");
          for (let x of innerSwitches) {
            if (x.hasAttribute("[mdo-field-target]")) {
              //
            } else {
              x.id = x.id + "_10";
            }
          }
        }

        let addBtn = clonedForm.querySelectorAll("[add]");
        let newAddFieldContainer =
          document.getElementById(fieldContainer).getAttribute("prefix") +
          generalCounter +
          document.getElementById(fieldContainer).getAttribute("suffix");
        for (let x of addBtn) {
          x.removeAttribute("event-click");
          let newAddEvent =
            "duplicateField('" +
            formContainer +
            "', '" +
            clonedForm.id +
            "', '" +
            newAddFieldContainer +
            "')";
          x.setAttribute("event-click", newAddEvent);
        }

        if (
          clonedForm.querySelector(
            "[role-name]"
          )
        ) {
          clonedForm
            .querySelector("[role-name]")
            .setAttribute("disabled", "");
          clonedForm
            .querySelector("[role-name]")
            .removeAttribute("disabled");
        }

        if (status == "multiple") {
          let role = clonedForm.querySelector(
            "[role-name]"
          );

          role.setAttribute(
            "event-change",
            "checkRoleInput(this, '" +
            clonedForm.id +
            "'); checkRoles(this, 'PersAndOrg_Container'); changeIDPerRoleNew(this); setQpRegNoMandatory(this, '" +
            clonedForm.id +
            "');"
          );

          role.setAttribute("trio", "");
        } else if (status == "persandorgs") {
          let role = container.querySelectorAll(
            "[role-name]"
          );
          let options = [...persAndOrgsRolesDefault];
          let roleValues = [];
          for (let a = 0; a < role.length; a++) {
            roleValues[a] = role[a].id + ":" + role[a].value;
          }
          let tri = ["Engineer", "Architect"];
          let newTri = ["Engineer", "Architect"];
          for (let v of tri) {
            for (let m = 0; m < roleValues.length; m++) {
              let currentRole = roleValues[m].split(":");
              let val = currentRole[1];
              if (val == v) {
                let index = newTri.indexOf(v);
                delete newTri[index];
              }
            }
          }
          for (let c of newTri) {
            if (c) {
              options.push(c);
            }
          }
          options.sort();
          let newOptions = "";
          for (let z = 0; z < options.length; z++) {
            if (options[z]) {
              newOptions += `${options[z]}:${options[z]}`;
              if (z != options.length - 1) {
                newOptions += ",";
              }
            }
          }
          clonedForm
            .querySelector("[role-name]")
            .removeAttribute("trio");
          clonedForm
            .querySelector("[role-name]")
            .setAttribute("general", "");
          clonedForm
            .querySelector("[role-name]")
            .removeAttribute("options");
          clonedForm
            .querySelector("[role-name]")
            .setAttribute("options", newOptions);
        }

        if (clonedForm.querySelector("[role-name]")) {
          let current = clonedForm.querySelector("[role-name]");
          current.removeAttribute("event-change");
          current.setAttribute(
            "event-change",
            "checkRoleInput(this, '" +
            clonedForm.id +
            "'); checkRoles(this, 'PersAndOrg_Container'); changeIDPerRoleNew(this); setQpRegNoMandatory(this, '" +
            clonedForm.id +
            "');"
          );
        }

        if (clonedForm.querySelector("[total-gfa]")) {
          let current = clonedForm.querySelector("[total-gfa]");
          current.removeAttribute("event-input");
          current.setAttribute("event-input", "totalGFA(this);");
        }

        if (clonedForm.querySelector("[total-gfa-normal]")) {
          let current = clonedForm.querySelector("[total-gfa-normal]");
          current.removeAttribute("event-input");
          current.setAttribute(
            "event-input",
            "onlyFloat(this); totalGFANormal('" + clonedForm.id + "');"
          );
        }

        if (clonedForm.querySelectorAll("[perOrgFormatted]")) {
          let formats = clonedForm.querySelectorAll("[perOrgFormatted]");
          for (let a of formats) {
            document.getElementById(a.id).className =
              document.getElementById(a.id).className.slice(0, -2) +
              generalCounter +
              "0";
          }
        }

        if (clonedForm.querySelector("[prefix='PersAndOrg_Format']")) {
          let current = clonedForm.querySelector("[prefix='PersAndOrg_Format']");
          current.removeAttribute("onclick");
          current.setAttribute(
            "onclick",
            "perAndOrgAddress(this, '" + clonedForm.id + "', 'perOrgFormatted');"
          );
        }

        if (clonedForm.querySelector("[prefix='PersAndOrg_Unformat']")) {
          let current = clonedForm.querySelector(
            "[prefix='PersAndOrg_Unformat']"
          );
          current.removeAttribute("onclick");
          current.setAttribute(
            "onclick",
            "perAndOrgAddress(this, '" +
            clonedForm.id +
            "', 'perOrgUnformatted');"
          );
        }

        if (clonedForm.querySelector("[qp-label]")) {
          clonedForm
            .querySelector("[qp-reg-no]")
            .setAttribute("mandatory", "");
          clonedForm
            .querySelector("[qp-reg-no]")
            .removeAttribute("mandatory");
        }
        tempChild = clonedForm.querySelector(`#${newFieldConID}`)
          .firstElementChild;
        clonedForm.querySelector(`#${newFieldConID}`).innerHTML = "";
        clonedForm.querySelector(`#${newFieldConID}`).appendChild(tempChild);

        if (clonedForm.querySelector("[qp-reg-no]")) {
          if (clonedForm.querySelector("[qp-reg-no]").hasAttribute("mandatory"))
            clonedForm.querySelector("[qp-reg-no]").removeAttribute("mandatory");
        }

        if (clonedForm.querySelectorAll("[calculate-gpr]")) {
          for (let a of clonedForm.querySelectorAll("[calculate-gpr]")) {
            a.removeAttribute("event-input");
            a.setAttribute(
              "event-input",
              "calculateGPR('" + clonedForm.id + "');"
            );
          }
        }
        if (clonedForm.querySelectorAll("[calculate-cpr]")) {
          for (let a of clonedForm.querySelectorAll("[calculate-cpr]")) {
            a.removeAttribute("event-input");
            a.setAttribute(
              "event-input",
              "calculateCPR('" + clonedForm.id + "');"
            );
          }
        }
        if (clonedForm.querySelectorAll("[calculate-rpr]")) {
          for (let a of clonedForm.querySelectorAll("[calculate-rpr]")) {
            a.removeAttribute("event-input");
            a.setAttribute(
              "event-input",
              "calculateRPR('" + clonedForm.id + "');"
            );
          }
        }
        if (clonedForm.querySelectorAll("[calculate-site]")) {
          for (let a of clonedForm.querySelectorAll("[calculate-site]")) {
            a.removeAttribute("event-input");
            a.setAttribute(
              "event-input",
              "calculateGPR('" +
              clonedForm.id +
              "'); calculateCPR('" +
              clonedForm.id +
              "'); calculateRPR('" +
              clonedForm.id +
              "');"
            );
          }
        }

        if (clonedForm.querySelectorAll("[main-accordion-header-inside]")) {
          for (let a of clonedForm.querySelectorAll(
            "[main-accordion-header-inside]"
          )) {
            let hrefID = a.getAttribute("id");
            a.setAttribute("href", hrefID);
          }
        }

        if (clonedForm.querySelectorAll("[not-manda]")) {
          for (let a of clonedForm.querySelectorAll("[not-manda]")) {
            if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
          }
        }

        container.appendChild(clonedForm);

        deleteBtnStatus(formContainer, fieldContainer);
        savingToJson(clonedForm);
        toggleColor(formContainer);
        return clonedForm;
      };

      checkRoleInput = (element, con) => {
        let runThis = setTimeout(() => {
          let value = element.value;
          let ext = getExt(element.id);
          // Grab the original element
          let original = document.getElementById(con).querySelector("[name-role]");

          if (
            value == "Agent (i.e. QP firm)" ||
            value == "Prospective Purchaser" ||
            value == "Surveyor" ||
            value == "Others"
          ) {
            // Create a replacement tag of the desired type
            let replacement = document.createElement("cn2-textbox");

            // Grab all of the original's attributes, and pass them to the replacement
            for (let i = 0, l = original.attributes.length; i < l; ++i) {
              let nodeName = original.attributes.item(i).nodeName;
              let nodeValue = original.attributes.item(i).nodeValue;

              replacement.setAttribute(nodeName, nodeValue);
            }

            if (replacement.hasAttribute("event-change"))
              replacement.removeAttribute("event-change");
            if (replacement.hasAttribute("data-options"))
              replacement.removeAttribute("data-options");
            if (replacement.hasAttribute("options"))
              replacement.removeAttribute("options");
            replacement.value = "";

            // Persist contents
            replacement.innerHTML = original.innerHTML;

            // Switch!
            original.parentNode.replaceChild(replacement, original);
          } else {
            // Create a replacement tag of the desired type
            let replacement = document.createElement("cn2-select");

            // Grab all of the original's attributes, and pass them to the replacement
            for (let i = 0, l = original.attributes.length; i < l; ++i) {
              let nodeName = original.attributes.item(i).nodeName;
              let nodeValue = original.attributes.item(i).nodeValue;

              replacement.setAttribute(nodeName, nodeValue);
            }

            // replacement.setAttribute("data-options", "persAndOrgsDropdown");
            if (value == "Agent (i.e. QP)") {
              replacement.setAttribute("event-change", `loadDropDownDetailsURA(this); populateSignedBy('MemberRole_Member_Role_Code_Desc_${ext}', 'Member_Member_Name_${ext}');`);
            } else {
              replacement.setAttribute("event-change", `loadDropDownDetailsURA(this);`);
            }
            replacement.value = "";

            // Persist contents
            replacement.innerHTML = original.innerHTML;

            // Switch!
            original.parentNode.replaceChild(replacement, original);
          }

          if (
            value == "Agent (i.e. QP firm)" ||
            value == "Prospective Purchaser" ||
            value == "Surveyor" ||
            value == "Others"
          ) {
            // Grab the originalRoad element
            let originalRoad = document
              .getElementById(con)
              .querySelector("[road-name]");
            // Create a replacement tag of the desired type
            let replacement = document.createElement("cn2-select");

            // Grab all of the originalRoad's attributes, and pass them to the replacement
            for (let i = 0, l = originalRoad.attributes.length; i < l; ++i) {
              let nodeName = originalRoad.attributes.item(i).nodeName;
              let nodeValue = originalRoad.attributes.item(i).nodeValue;

              replacement.setAttribute(nodeName, nodeValue);
            }

            replacement.setAttribute("event-change", "loadDropDownDetails(this);");
            replacement.removeAttribute("data-options");
            replacement.value = "";

            // Persist contents
            replacement.innerHTML = originalRoad.innerHTML;

            // Switch!
            originalRoad.parentNode.replaceChild(replacement, originalRoad);
          } else {
            // Grab the originalRoad element
            let originalRoad = document
              .getElementById(con)
              .querySelector("[road-name]");
            // Create a replacement tag of the desired type
            let replacement = document.createElement("cn2-textbox");

            // Grab all of the originalRoad's attributes, and pass them to the replacement
            for (let i = 0, l = originalRoad.attributes.length; i < l; ++i) {
              let nodeName = originalRoad.attributes.item(i).nodeName;
              let nodeValue = originalRoad.attributes.item(i).nodeValue;

              replacement.setAttribute(nodeName, nodeValue);
            }

            if (replacement.hasAttribute("event-change"))
              replacement.removeAttribute("event-change");
            if (replacement.hasAttribute("data-options"))
              replacement.removeAttribute("data-options");
            if (replacement.hasAttribute("options"))
              replacement.removeAttribute("options");
            replacement.value = "";

            // Persist contents
            replacement.innerHTML = originalRoad.innerHTML;

            // Switch!
            originalRoad.parentNode.replaceChild(replacement, originalRoad);
          }

          let road = document
            .getElementById(con)
            .querySelector(`[prefix='Member_Road_Code_Desc_${ext}']`);
          if (road.hasAttribute("disabled")) road.removeAttribute("disabled");
          if (road.hasAttribute("options")) road.removeAttribute("options");
          if (road.hasAttribute("data-options")) road.removeAttribute("data-options");
          if (road.hasAttribute("mandatory")) road.removeAttribute("mandatory");
          if (road.hasAttribute("event-change")) road.removeAttribute("event-change");
          if (road.tagName.toLowerCase() == "cn2-select") {
            road.setAttribute("data-options", "roadNameDropdown");
            road.setAttribute("mandatory", "");
          } else {
            road.setAttribute("disabled", "");
          }
          road.value = "";

          let postal = document
            .getElementById(con)
            .querySelector(`[prefix='Member_Postal_Code_${ext}']`);
          if (postal.hasAttribute("disabled")) postal.removeAttribute("disabled");
          if (postal.hasAttribute("mandatory")) postal.removeAttribute("mandatory");
          if (road.tagName.toLowerCase() == "cn2-select") {
            postal.setAttribute("mandatory", "");
          } else {
            postal.setAttribute("disabled", "");
          }
          postal.value = "";

          let line = document
            .getElementById(con)
            .querySelector(`[prefix='Member_Address1_${ext}']`);
          if (line.hasAttribute("disabled")) line.removeAttribute("disabled");
          if (line.hasAttribute("mandatory")) line.removeAttribute("mandatory");
          if (road.tagName.toLowerCase() == "cn2-select") {
            //line.setAttribute("mandatory", "");
          } else {
            line.setAttribute("disabled", "");
          }
          line.value = "";

          clearTimeout(runThis);
        }, 100);
      };

      loadDropDownDetailsURA = (element) => {
        let runThis = setTimeout(() => {
          let val = element.value.trim();
          let ext = getExt(element.id);
          let jsonGrp = "persAndOrgsDropdown" + ext;
          let con = getCon(element.id);

          for (let a of jsonData[jsonGrp]) {
            for (let b in a) {
              if (b == "Member_Member_Name_" + ext && a[b] == val) {
                for (let c in a) {
                  if ("Member_Member_Name_" + ext != c) {
                    let el = con.querySelector(`[prefix="${c}"]`);
                    if (el.tagName.toLowerCase() == "cn2-select") {
                      el.removeAttribute("data-options");
                      el.removeAttribute("options");
                      el.setAttribute("options", a[c] + ":" + a[c]);
                    }
                    el.value = a[c];
                  }
                }
              }
            }
          }

          clearTimeout(runThis);
        }, 100);
      };

      setQpRegNoMandatory = (element, form) => {
        let runThis = setTimeout(() => {
          let index = form.replace(document.getElementById(form).getAttribute("prefix"), "")
          if (index >= 40) {
            let boxes = document.getElementById(form).querySelectorAll("cn2-textbox,cn2-datefield")
            for (let y of boxes) {
              y.value = "";
            }
          }
          //targetIdPrefix value is the prefix of the id of the QP registration no
          if (element.value === "Architect" || element.value === "Engineer") {
            document
              .getElementById(form)
              .querySelector("[qp-reg-no]")
              .setAttribute("mandatory", "");

            document.getElementById(form).querySelector("[qp-label]").innerHTML =
              "QP Registration No. *";
          } else {
            document
              .getElementById(form)
              .querySelector("[qp-reg-no]")
              .setAttribute("mandatory", "");
            document
              .getElementById(form)
              .querySelector("[qp-reg-no]")
              .removeAttribute("mandatory", "");

            document.getElementById(form).querySelector("[qp-label]").innerHTML =
              "QP Registration No.";
          }

          clearTimeout(runThis);
        }, 100);
      };

      populateSignedBy = (persAndOrgsRoleId, persAndOrgsNameId, general2) => {
        let runThis = setTimeout(() => {
          let minus1 = persAndOrgsRoleId.slice(-2) == "_0" ? -6 : -4;
          let minus2 = persAndOrgsNameId.slice(-2) == "_0" ? -6 : -4;
          persAndOrgsRoleId = persAndOrgsRoleId.slice(0, minus1) + "QP10";
          persAndOrgsNameId = persAndOrgsNameId.slice(0, minus2) + "QP10";
          let rolePrefix = document
            .getElementById(persAndOrgsRoleId)
            .getAttribute("prefix");
          let roleSuffix = document
            .getElementById(persAndOrgsRoleId)
            .getAttribute("suffix");

          let namePrefix = document
            .getElementById(persAndOrgsNameId)
            .getAttribute("prefix");
          let nameSuffix = document
            .getElementById(persAndOrgsNameId)
            .getAttribute("suffix");

          let ctr = 1;
          while (document.getElementById(rolePrefix + ctr + roleSuffix) != null) {
            if (
              document.getElementById(rolePrefix + ctr + roleSuffix).value != "" &&
              document.getElementById(namePrefix + ctr + nameSuffix).value != ""
            ) {
              if (
                document.getElementById(rolePrefix + ctr + roleSuffix).value ===
                "Agent (i.e. QP)"
              ) {
                if (general2) {
                  document.getElementById(
                    "DeclGene2_QPName10"
                  ).value = document.getElementById(
                    namePrefix + ctr + nameSuffix
                  ).value;
                } else if (
                  document.getElementById("PartOfAppl_SubmTp10").value ===
                  "New Submission (for fresh submission and fresh amendment submission to Written Permission)"
                ) {
                  if (document.getElementById("DeclGeneNewSubm_SignedBy10"))
                    document.getElementById(
                      "DeclGeneNewSubm_SignedBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGeneResu_SignedBy10"))
                    document.getElementById(
                      "DeclGeneResu_SignedBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclSubdResu_SignBy10"))
                    document.getElementById(
                      "DeclSubdResu_SignBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgSubd_QpName10"))
                    document.getElementById(
                      "DeclLodgSubd_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGene2_QPName10"))
                    document.getElementById(
                      "DeclGene2_QPName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGene2_SignBy10"))
                    document.getElementById(
                      "DeclGene2_SignBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclResi_AddiAlteForm_QpName10"))
                    document.getElementById(
                      "DeclResi_AddiAlteForm_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgResiDeve_QpName10"))
                    document.getElementById(
                      "DeclLodgResiDeve_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgInduWare_QpName10"))
                    document.getElementById(
                      "DeclLodgInduWare_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                } else if (
                  document.getElementById("PartOfAppl_SubmTp10").value ===
                  "Resubmission (for submission after a PP, Advice, Outline Permission and Written Direction)"
                ) {
                  if (document.getElementById("DeclGeneNewSubm_SignedBy10"))
                    document.getElementById(
                      "DeclGeneNewSubm_SignedBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGeneResu_SignedBy10"))
                    document.getElementById(
                      "DeclGeneResu_SignedBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclSubdResu_SignBy10"))
                    document.getElementById(
                      "DeclSubdResu_SignBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgSubd_QpName10"))
                    document.getElementById(
                      "DeclLodgSubd_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGene2_QPName10"))
                    document.getElementById(
                      "DeclGene2_QPName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclGene2_SignBy10"))
                    document.getElementById(
                      "DeclGene2_SignBy10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclResi_AddiAlteForm_QpName10"))
                    document.getElementById(
                      "DeclResi_AddiAlteForm_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgResiDeve_QpName10"))
                    document.getElementById(
                      "DeclLodgResiDeve_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                  if (document.getElementById("DeclLodgInduWare_QpName10"))
                    document.getElementById(
                      "DeclLodgInduWare_QpName10"
                    ).value = document.getElementById(
                      namePrefix + ctr + nameSuffix
                    ).value;
                }
                for (let a of document.querySelectorAll("[sign-field]")) {
                  a.value = document.getElementById(
                    namePrefix + ctr + nameSuffix
                  ).valueLabel;
                }
              }
            }
            ctr++;
          }

          clearTimeout(runThis);
        }, 100);
      };

      clearTimeout(run);
    }, 1000);
  }
});

function getCon(id) {
  let el = document.getElementById(id);

  while (el.getAttribute("prefix") != "PersAndOrg_Forms") {
    el = el.parentElement;
  }

  return el;
}

function getExt(id) {
  let el = document.getElementById(id);

  while (!el.hasAttribute("role-ext")) {
    el = el.parentElement;
  }

  return el.getAttribute("role-ext");
}

function changeIDPerRole(el) {
  let con = getCon(el.id);
  let val = equivalent[el.value.trim()];
  let jsonGrp = "persAndOrgsDropdown" + val;

  if (val.trim()) {
    con.setAttribute("role-ext", val);

    for (let a of con.querySelectorAll("[prefix]")) {
      if (a.hasAttribute("name-role")) {
        a.removeAttribute("data-options");
        let options = [];
        for (let a of jsonData[jsonGrp]) {
          options.push(a["Member_Member_Name_" + val]);
        }

        let optionsFormat = options.map(i => i.trim()).map(i => i + ":" + i).join(",");
        a.setAttribute("options", optionsFormat);
      }
      let rawPre = a.getAttribute("prefix");
      let prefix = a.getAttribute("prefix").split("_").slice(0, -1).join("_");
      if (prefixes.includes(prefix)) {
        a.setAttribute("prefix", prefix + "_" + val);
        a.setAttribute("id", a.getAttribute("id").replace(rawPre, a.getAttribute("prefix")));
      }
    }
  }
}

function error400_old() {
  showMessage(`The service to validate the submission details is unavailable. We are not able to validate your submission number at the moment.
You can still proceed to make submission after you have completed the form but to avoid rejection by the system later,  please ensure you have provided the correct details. Alternatively, you can try again when the validation service is available`);
}

function getMukimCon(el) {
  while (!el.hasAttribute("main-con")) {
    el = el.parentElement;
  }
  return el;
}

function validateSiteDetails() {
  let values = {
    category_code: "DACU",
    house_block_no: document.getElementById("SiteAddr_HseBlkNo10").value,
    road_name: document.getElementById("SiteAddr_RoadNm10").value,
    building_name: document.getElementById("SiteAddr_BldgNm10").value,
    level: document.getElementById("SiteAddr_Unit_Floor10").value,
    unit_no: document.getElementById("SiteAddr_Unit_Unit10").value,
    postal_code: document.getElementById("SiteAddr_PostCd10").value,
    pedestrian_link: document.getElementById("SiteAddr_IsTheBldgWithPedeLink_Yes10").checked ? "Y" : "N"
  };

  if (Object.values(values).every(i => i != "")) {
    let response = ipcRenderer.sendSync("client-request", "POST", ["https:", "www.ura.gov.sg"], ["443", "/corenet2DS/forms/rest/validateLodgmentAddress", values]);

    if (response["is_valid"] && response["msg"]) {
      if (response["is_valid"] == "Y") {
        for (let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]) {
          validMessage(a, "");
        }
        showMessage(response["msg"]);
      } else if (response["is_valid"] == "N") {
        for (let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]) {
          invalidMessage(a, response["msg"]);
        }
      } else {
        for (let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]) {
          validMessage(a, "");
        }
        error404_updated();
      }
    } else {
      for (let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]) {
        validMessage(a, "");
      }
      error404_updated();
    }

    delete values["pedestrian_link"];

    response = ipcRenderer.sendSync("client-request", "POST", ["https:", "www.ura.gov.sg"], ["443", "/corenet2DS/forms/rest/getCULodgementUse", values]);

    if (response["predefined_use"] == "Y" && response["proposed_use"].length > 0) {
      let newUses = [];
      let newUseCodes = [];
      for (let a of response["proposed_use"]) {
        newUses.push(a.use_desc + ":" + a.use_desc);
        newUseCodes.push(a.use_code);
      }

      document.getElementById("SiteAddr_PropUse10").removeAttribute("options");
      document.getElementById("SiteAddr_PropUse10").removeAttribute("data-options");
      document.getElementById("SiteAddr_PropUse10").setAttribute("options", newUses.join(","));
      document.getElementById("SiteAddr_PropUse10").setAttribute("road-codes", newUseCodes.join(","));
    } else if (response["predefined_use"] == "N") {
    } else {
      error404_updated();
    }
  }
}

function populateWP(isValid, data) {
  let fields = ["SubmInfo_LateDateOfWrtnPerm10", "SubmInfo_DCRefeOfWrit10", "SubmInfo_DateOfWritPerm10", "SubmInfo_WritPermDeciNo10", "SubmInfo_ApvdPlanNo10"];

  if (!isValid) {
    for (let a of fields) {
      document.getElementById(a).value = "";
      document.getElementById(a).removeAttribute("data-valid");
      document.getElementById(a).removeAttribute("data-valid-message");
      document.getElementById(a).removeAttribute("data-invalid");
      document.getElementById(a).removeAttribute("data-invalid-message");
    }
  } else {
    document.getElementById("SubmInfo_LateDateOfWrtnPerm10").value = data["wp_submission_no"];
    document.getElementById("SubmInfo_DCRefeOfWrit10").value = data["wp_dc_referene"];
    let validDate = "";
    let dd = data["wp_date"].split("/")[0];
    let mm = data["wp_date"].split("/")[1];
    let yyyy = data["wp_date"].split("/")[2];
    validDate = yyyy + "-" + mm + "-" + dd;
    document.getElementById("SubmInfo_DateOfWritPerm10").value = validDate;
    document.getElementById("SubmInfo_WritPermDeciNo10").value = data["wp_decision_no"];
    document.getElementById("SubmInfo_ApvdPlanNo10").value = data["wp_approved_plan_no"];
  }
}

function validateMukim(element) {
  let el = document.getElementById(element.id);
  let pass =
    [...getMukimCon(el).querySelectorAll("input[event-container]")].some(
      (el) => el.checked
    ) &&
    [...getMukimCon(el).querySelectorAll("cn2-textbox[event-container]")].every(
      (el) => el.value.trim() != ""
    );

  if (pass) {
    let response = ipcRenderer.sendSync("client-request", "POST", ["https:", "www.ura.gov.sg"], ["443", "/corenet2DS/forms/rest/validateLotNo", [
      {
        mkts_ind: [...getMukimCon(el).querySelectorAll("input[event-container]")].filter(el => el.checked).map(el => el.getAttribute("prefix"))[0] == "MkTs_MkTs_Mk" ? "mk" : "ts",
        mkts_no: getMukimCon(el).querySelector("cn2-textbox[prefix='MkTs_MkTsNo']").value.trim(),
        lot_no: getMukimCon(el).querySelector("cn2-textbox[prefix='MkTs_LotNo']").value.trim()
      }
    ]]);

    jsonData["agencyURL10"].body = {
      mkts_ind: [...getMukimCon(el).querySelectorAll("input[event-container]")].filter(el => el.checked).map(el => el.getAttribute("prefix"))[0] == "MkTs_MkTs_Mk" ? "mk" : "ts",
      mkts_no: getMukimCon(el).querySelector("cn2-textbox[prefix='MkTs_MkTsNo']").value.trim(),
      lot_no: getMukimCon(el).querySelector("cn2-textbox[prefix='MkTs_LotNo']").value.trim()
    };

    if (response["is_valid"] && response["msg"]) {
      if (response["is_valid"] == "Y") {
        showMessage(response["msg"]);
        for (let a of getMukimCon(el).querySelectorAll("cn2-textbox[event-container]")) {
          validMessage(a.id, "");
        }
      } else if (response["is_valid"] == "N") {
        for (let a of getMukimCon(el).querySelectorAll("cn2-textbox[event-container]")) {
          invalidMessage(a.id, response["msg"]);
        }
      } else {
        for (let a of getMukimCon(el).querySelectorAll("cn2-textbox[event-container]")) {
          validMessage(a.id, "");
        }
        error404_updated();
      }
    } else {
      for (let a of getMukimCon(el).querySelectorAll("cn2-textbox[event-container]")) {
        validMessage(a.id, "");
      }
      error404_updated();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let appType = [...document.querySelectorAll("[label]")].filter((i) => i.getAttribute("label").includes("Application Type"))[0];
    appType = appType ? appType : "";
    let lodgement = [
      ...document.querySelectorAll("[label]"),
    ].filter((label) =>
      label.getAttribute("label").toLowerCase().includes("lodgement type")
    )[0];
    lodgement = lodgement ? lodgement : "";
    updateHeaderDisplay(appType, lodgement);
  }
})

function updateHeaderDisplay(appEl, lodgeEl) {
  let run = setTimeout(() => {
    let appVal = "";
    let lodgeVal = "";

    if (appEl) {
      appVal = document.getElementById(appEl.id).value.trim();
    } else {
      appVal = [...document.querySelectorAll("[label]")].filter((i) => i.getAttribute("label").includes("Application Type"))[0].value.trim();
    }

    if (lodgeEl) {
      lodgeVal = document.getElementById(lodgeEl.id).value.trim();
    } else {
      lodgeVal = [
        ...document.querySelectorAll("[label]"),
      ].filter((label) =>
        label.getAttribute("label").toLowerCase().includes("lodgement type")
      )[0] ? [
        ...document.querySelectorAll("[label]"),
      ].filter((label) =>
        label.getAttribute("label").toLowerCase().includes("lodgement type")
      )[0].value.trim() : "";
    }

    let values = [appVal, lodgeVal];

    let header = document.querySelector("cn2-master-head");

    if (!header.hasAttribute("raw-title") || header.getAttribute("raw-title").trim() == "")
      header.setAttribute("raw-title", header.getAttribute("title"));

    if (values[0]) {
      if (values[1] == "") {
        let title = header.getAttribute("raw-title").trim();
        title += `<br>( Application Type: ${values[0]} )`;
        header.setAttribute("title", title);
      } else {
        let title = header.getAttribute("raw-title").trim();
        title += `<br>( Application Type: ${values[0]} - ${values[1]} )`;
        header.setAttribute("title", title);
      }
    } else {
      header.setAttribute("title", header.getAttribute("raw-title"));
    }

    clearTimeout(run);
  }, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    changeIDPerRole = (el) => {
      let con = getCon(el.id);
      let val = equivalent[el.value.trim()];
      let jsonGrp = "persAndOrgsDropdown" + val;

      if (val.trim()) {
        con.setAttribute("role-ext", val);

        for (let a of con.querySelectorAll("[prefix]")) {
          if (a.hasAttribute("name-role")) {
            a.removeAttribute("data-options");
            let options = [];
            for (let a of jsonData[jsonGrp]) {
              options.push(a["Member_Member_Name_" + val]);
            }

            let optionsFormat = options.map(i => i.trim()).map(i => i + ":" + i).join(",");
            a.setAttribute("options", optionsFormat);
          }
          let rawPre = a.getAttribute("prefix");
          let prefix = a.getAttribute("prefix").split("_").slice(0, -1).join("_");
          if (prefixes.includes(prefix)) {
            a.setAttribute("prefix", prefix + "_" + val);
            a.setAttribute("id", a.getAttribute("id").replace(rawPre, a.getAttribute("prefix")));
          }
        }
      }

      updateRoadName(con);
    }
  }
});

function updateRoadName(con) {
  let run = setTimeout(() => {
    let road = con.querySelector("[formatted-road]");
    let code = road.getAttribute("prefix").split("_").pop();
    if (jsonData["roadNameDropdown" + code]) {
      let newOptions = jsonData["roadNameDropdown" + code].map(roadList => roadList[road.getAttribute("prefix") + "10"]).map(list => list + ":" + list).join(",");

      road.removeAttribute("options");
      road.removeAttribute("data-options");
      road.setAttribute("options", newOptions);
    }

    clearTimeout(run);
  }, 300);
}

function changeIDPerRoleNew(el) {
  let con = getCon(el.id);
  let val = equivalent[el.value.trim()];
  let jsonGrp = "persAndOrgsDropdown" + val;

  if (val.trim()) {
    con.setAttribute("role-ext", val);

    for (let a of con.querySelectorAll("[prefix]")) {
      if (a.hasAttribute("name-role")) {
        a.removeAttribute("data-options");
        let options = [];
        for (let a of jsonData[jsonGrp]) {
          options.push(a["Member_Member_Name_" + val]);
        }

        let optionsFormat = options.map(i => i.trim()).map(i => i + ":" + i).join(",");
        a.setAttribute("options", optionsFormat);
      }
      let rawPre = a.getAttribute("prefix");
      let prefix = a.getAttribute("prefix").split("_").slice(0, -1).join("_");
      if (prefixes.includes(prefix)) {
        a.setAttribute("prefix", prefix + "_" + val);
        let oriVal = jsonData[a.id];
        delete jsonData[a.id];
        a.setAttribute("id", ["DEVP", "OWN"].includes(val) ? a.getAttribute("id").replace(rawPre, a.getAttribute("prefix")).slice(0, -2) + "10" : a.getAttribute("id").replace(rawPre, a.getAttribute("prefix")));
        jsonData[["DEVP", "OWN"].includes(val) ? a.getAttribute("id").replace(rawPre, a.getAttribute("prefix")).slice(0, -2) + "10" : a.getAttribute("id").replace(rawPre, a.getAttribute("prefix"))] = oriVal;
      }
    }
  }

  updateRoadName(con);
}

document.addEventListener("DOMContentLoaded", () => {
  let runThis = setTimeout(() => {
    loadDropDownDetailsURA = (element) => {
      console.log("New");
      let val = element.value.trim();
      let ext = getExt(element.id);
      let jsonGrp = "persAndOrgsDropdown" + ext;
      let con = getCon(element.id);

      for (let a of jsonData[jsonGrp]) {
        for (let b in a) {
          if (b == "Member_Member_Name_" + ext && a[b] == val) {
            for (let c in a) {
              if ("Member_Member_Name_" + ext != c) {
                let el = con.querySelector(`[prefix="${c}"]`);
                if (el.tagName.toLowerCase() == "cn2-select") {
                  el.removeAttribute("data-options");
                  el.removeAttribute("options");
                  el.setAttribute("options", a[c] + ":" + a[c]);
                }
                el.value = a[c];
              }
            }
          }
        }
      }

    };
    clearTimeout(runThis);
  }, 200);
});
            
function error404_updated() {
  if (!isSubmittedForm())
    showMessage(`The service to validate the submission details is unavailable. We are not able to validate your submission number at the moment.
You can still proceed to make submission after you have completed the form but to avoid rejection by the system later,  please ensure you have provided the correct details. Alternatively, you can try again when the validation service is available`);
}