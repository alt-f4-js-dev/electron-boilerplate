let mandatories = [];
let checkeds = [];
let disableds = [];
let options = [];

function checkForMandaPage(el) {
  if (document.querySelector("[target='page1']").hasAttribute("valid")) {
    checkPageForMandatories(el.getAttribute("target"));
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  formNameVersion("form__name", "form__version");
  // if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
  //   for (let a of document.querySelectorAll(
  //     ".lift-page, .escalator-page, .mp-page, .table-middle"
  //   )) {
  //     if (!a.className.includes("table-middle")) {
  //       for (let c of a.querySelectorAll("[form-div]")) {
  //         for (let b of c.querySelectorAll("td")) {
  //           if (!b.className.includes("align-"))
  //             b.classList.add("align-middle");
  //         }
  //       }
  //     } else {
  //       for (let b of a.querySelectorAll("td")) {
  //         if (!b.className.includes("align-")) b.classList.add("align-middle");
  //       }
  //     }
  //   }
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    options = [];
    let count = 0;
    while (count != 51) {
      options.push(count);
      count++;
    }
    options = options.map((r) => (r = r + ":" + r));
    for (let a of document.querySelectorAll(
      "[prefix='SubmChec_CateAndNoLift_NoOfLift'], [prefix='SubmChec_CateAndNoLift2_NoOfLift'], [prefix='SubmChec_CateAndNoEsca_NoOfEsca'], [prefix='SubmChec_CateAndNoMCPS_Quan']"
    )) {
      a.setAttribute("options", options.join(","));
    }
  }

  for (let a of document.querySelectorAll("[red-tag]")) {
    a.shadowRoot.querySelector("input").style.borderColor = "red";
  }
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function showLoaderForm(message) {
  let loader = document.getElementById("maskID");
  if (message) {
    loader.innerHTML = `<table class="table table-borderless mb-0">
  <tbody>
    <tr>
      <td class="align-bottom p-0">
        <img src="loader.gif" />
      </td>
    </tr>
    <tr>
      <td class="align-top p-0">
        ${message}
      </td>
    </tr>
  </tbody>
</table>`;
  }
  loader.removeAttribute("hidden");
}

function hideLoaderForm() {
  let loader = document.getElementById("maskID");
  loader.setAttribute("hidden", "");
  loader.innerHTML = `<table class="table table-borderless mb-0">
  <tbody>
    <tr>
      <td class="align-middle p-0">
        <img src="loader.gif" />
      </td>
    </tr>
  </tbody>
</table>`;
}

function findTable(el) {
  while (el.tagName.toLowerCase() != "table") {
    el = el.parentElement;
  }

  return el;
}

function findBlock(el) {
  while (!el.hasAttribute("form-div")) {
    el = el.parentElement;
  }

  return el;
}

function findSubBlock(el) {
  while (!el.hasAttribute("sub-con")) {
    el = el.parentElement;
  }

  return el;
}

function findForm(el) {
  while (!el.hasAttribute("main-form")) {
    el = el.parentElement;
  }

  return el;
}

function findTR(el) {
  while (el.tagName.toLowerCase() != "tr") {
    el = el.parentElement;
  }

  return el;
}

function findLabel(el) {
  if (document.getElementById(el.id).parentElement.previousElementSibling) {
    return document.getElementById(el.id).parentElement.previousElementSibling;
  } else if (
    document.getElementById(el.id).parentElement.parentElement.parentElement
      .previousElementSibling
  ) {
    return document.getElementById(el.id).parentElement.parentElement
      .parentElement.previousElementSibling;
  }
}

function Project_TypeOfPlan10_change(el) {
  document.querySelector("[target='page4']").removeAttribute("hidden");
  let liftquan1 = document.getElementById("SubmChec_CateAndNoLift_NoOfLift10");
  let liftquan2 = document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10");
  let escaquan = document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10");
  let mcpsquan = document.getElementById("SubmChec_CateAndNoMCPS_Quan10");

  let titleSect2 = document.getElementById("sect2Title");
  let titleSect3 = document.getElementById("sect3Title");
  let titleSect4 = document.getElementById("sect4Title");
  let titleSect5 = document.getElementById("sect5Title");
  let titleSect6 = document.getElementById("sect6Title");

  //resetAll Upon Change
  resetPages();

  let checkBoxesLift = document
    .getElementById("liftDeclaration")
    .querySelectorAll("cn2-checkbox");
  let checkBoxesEsca = document
    .getElementById("escaDeclaration")
    .querySelectorAll("cn2-checkbox");
  let checkBoxesMcps = document
    .getElementById("mcpsDeclaration")
    .querySelectorAll("cn2-checkbox");

  let page4TextArea = document
    .getElementById("page4")
    .querySelectorAll("cn2-textarea");

  document.getElementById("liftDeclaration").setAttribute("hidden", "");
  document.getElementById("escaDeclaration").setAttribute("hidden", "");
  document.getElementById("mcpsDeclaration").setAttribute("hidden", "");

  for (let liftCheck of checkBoxesLift) {
    liftCheck.checked = false;
    liftCheck.removeAttribute("checked");
    liftCheck.removeAttribute("mandatory");
  }

  for (let escaCheck of checkBoxesEsca) {
    escaCheck.checked = false;
    escaCheck.removeAttribute("checked");
    escaCheck.removeAttribute("mandatory");
  }
  for (let mcpsCheck of checkBoxesMcps) {
    mcpsCheck.checked = false;
    mcpsCheck.removeAttribute("checked");
    mcpsCheck.removeAttribute("mandatory");
  }

  for (let textArea of page4TextArea) {
    if (textArea.id != "Member_Address_InstCont10") {
      textArea.setAttribute("disabled", "");
      textArea.value = "";
    } else if (textArea.id == "Member_Address_InstCont10") {
      textArea.removeAttribute("mandatory", "");
      textArea.setAttribute("mandatory", "");
      textArea.value = "";
    } else {
      textArea.value = "";
    }
  }

  for (let spanError of document.querySelectorAll("[spanNoteError]")) {
    if (spanError.hasAttribute("id")) {
      spanError.innerHTML = "";
      spanError.setAttribute("hidden", "");
    }
  }

  if (el.value == "Lift") {
    titleSect2.innerHTML =
      "Section II Particulars of Qualified Person for Submission of the Plans for Lift Works";
    titleSect3.innerHTML =
      "Section III Particulars of Qualified Person for Supervision of the Installation of the Lift Works";
    titleSect4.innerHTML =
      "Section IV Particulars of Qualified Person for Testing & Commissioning of the Lift Works";
    titleSect5.innerHTML =
      "Section V Particulars of Lift Installation Contractor";
    titleSect6.innerHTML =
      "Section VI Particulars of Lift Testing and Commissioning Contractor";

    document.getElementById("liftDeclaration").removeAttribute("hidden");

    // if (liftquan1 != null || liftquan2 != null || escaquan != null || mcpsquan != null) {
    //   document.getElementById("SubmChec_CateAndNoLift_NoOfLift10").setAttribute("mandatory", "");
    //   document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10").setAttribute("mandatory", "");
    //   document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10").removeAttribute("mandatory");
    //   document.getElementById("SubmChec_CateAndNoMCPS_Quan10").removeAttribute("mandatory");
    // }

    for (let liftCheck of checkBoxesLift) {
      liftCheck.setAttribute("checked", "");
      liftCheck.setAttribute("mandatory", "");
    }
  } else if (el.value == "Escalator") {
    titleSect2.innerHTML =
      "Section II Particulars of Qualified Person for Submission of the Plans for Escalator Works";
    titleSect3.innerHTML =
      "Section III Particulars of Qualified Person for Supervision of the Installation of the Escalator Works";
    titleSect4.innerHTML =
      "Section IV Particulars of Qualified Person for Testing & Commissioning of the Escalator Works";
    titleSect5.innerHTML =
      "Section V Particulars of Escalator Installation Contractor";
    titleSect6.innerHTML =
      "Section VI Particulars of Escalator Testing and Commissioning Contractor";

    document.getElementById("escaDeclaration").removeAttribute("hidden");

    // if (liftquan1 != null || liftquan2 != null || escaquan != null || mcpsquan != null) {
    //   document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10").setAttribute("mandatory", "");
    //   document.getElementById("SubmChec_CateAndNoLift_NoOfLift10").removeAttribute("mandatory");
    //   document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10").removeAttribute("mandatory");
    //   document.getElementById("SubmChec_CateAndNoMCPS_Quan10").removeAttribute("mandatory");
    // }

    for (let escaCheck of checkBoxesEsca) {
      escaCheck.setAttribute("checked", "");
      escaCheck.setAttribute("mandatory", "");
    }
  } else if (el.value == "Mechanised Car Parking System") {
    titleSect2.innerHTML =
      "Section II Particulars of Qualified Person for Submission of the Plans for MCPS Works";
    titleSect3.innerHTML =
      "Section III Particulars of Qualified Person for Supervision of the Installation of the MCPS Works";
    titleSect4.innerHTML =
      "Section IV Particulars of Qualified Person for Testing & Commissioning of the MCPS Works";
    titleSect5.innerHTML =
      "Section V Particulars of MCPS Installation Contractor";
    titleSect6.innerHTML =
      "Section VI Particulars of MCPS Testing and Commissioning Contractor";

    document.getElementById("mcpsDeclaration").removeAttribute("hidden");

    // if (liftquan1 != null || liftquan2 != null || escaquan != null || mcpsquan != null) {
    //   document.getElementById("SubmChec_CateAndNoMCPS_Quan10").setAttribute("mandatory", "");
    //   document.getElementById("SubmChec_CateAndNoLift_NoOfLift10").removeAttribute("mandatory");
    //   document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10").removeAttribute("mandatory");
    //   document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10").removeAttribute("mandatory");
    // }

    for (let mcpsCheck of checkBoxesMcps) {
      mcpsCheck.setAttribute("checked", "");
      mcpsCheck.setAttribute("mandatory", "");
    }
  }
}

function otherSystTypeTest(element) {
  if (element != null) {
    let value = element.value;
    let otherFieldRow = document.getElementById("GeneSpec_SystTypeTest_OtheID");
    let otherField = document.getElementById("GeneSpec_SystTypeTest_Othe10");
    let otherManda = document.getElementById("otherManda");

    if (value != "Others") {
      otherManda.innerHTML = "Others:";
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    } else if (value == "Others") {
      otherManda.innerHTML = "Others: *";
      otherFieldRow.removeAttribute("hidden");
      otherField.removeAttribute("disabled");
      otherField.setAttribute("mandatory", "");
      otherField.value = "";
    } else if (value == "0") {
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    } else {
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    }
  }
}
function otherCompTypeTest(element) {
  if (element != null) {
    let value = element.value;
    let otherFieldRow = document.getElementById("GeneSpec_CompTypeTest_OtheID");
    let otherField = document.getElementById("GeneSpec_CompTypeTest_Othe10");
    let otherManda = document.getElementById("otherManda1");


    if (value != "Others") {
      otherManda.innerHTML = "Others:";
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    } else if (value == "Others") {
      otherManda.innerHTML = "Others: *";
      otherFieldRow.removeAttribute("hidden");
      otherField.removeAttribute("disabled");
      otherField.setAttribute("mandatory", "");
      otherField.value = "";
    } else if (value == "0") {
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    } else {
      otherFieldRow.setAttribute("hidden", "");
      otherField.setAttribute("disabled", "");
      otherField.removeAttribute("mandatory");
      otherField.removeAttribute("not-filledup");
      otherField.value = "";
    }
  }
}

function autoPopulateField(el, type, params) {
  let val = el.value;
  let timeout = 0;
  let amenPlanType = document.querySelectorAll("[plan-type]");
  if (
    document.getElementById("page4").innerHTML == "" ||
    document.getElementById("page5").innerHTML == ""
  ) {
    showLoaderForm("Loading content ...");
    renderComputationPages();
    let update = setTimeout(() => {
      updatesRenderComputationPages();
      clearTimeout(update);
    }, 0);
    timeout = 100;
  }

  let run = setTimeout(() => {
    if (type === "typeOfPlan") {
      let planNo = document.getElementById(params[0]);
      let scopOfMajoARWork = document.getElementById(params[1]);
      let options = null;

      [...document.querySelectorAll("[target='page5']")].map((r) =>
        r.removeAttribute("hidden")
      );
      let div = document.querySelectorAll("[scopOfMajorARWork]");
      for (let boxes of div) {
        if (boxes.querySelector("cn2-select") != null) {
          boxes.querySelectorAll("cn2-select").value = "";
        }
        if (boxes.querySelector("cn2-textarea") != null) {
          boxes.querySelector("cn2-textarea").value = "";
          boxes.querySelector("cn2-textarea").setAttribute("hidden", "");
          boxes.querySelector("cn2-textarea").removeAttribute("mandatory");
        }
      }

      if (val === "Lift") {
        planNo.value = "LP";
        for (let a of amenPlanType) {
          a.value = "LP";
        }
        options = [
          "adding, changing or removing any safety component of a lift, or adding any safety component to a lift",
          "adding or changing any programmable electronic systems in safety related applications for lifts (PESSRAL) hardware or software",
          "adding or changing the mass and internal dimensions of a lift car, including lift car finishing",
          "changing the rated load or speed of a lift",
          "changing the travel distance of a lift",
          "changing the lift control operation (including changing the software or controller or type of driving machine or brakes)",
          "changing the number, type or size of the hoisting ropes supporting a lift car or its counterweight",
          "changing the size of the guide rails of a lift",
          "changing the lift landing door system, lift car door system and their control interfacing (door entrance protection are excluded)",
          "changing the pit depth and overhead clearances, eg. pit depth, overhead",
          "changing the design of traction sheave",
          "changing the roping configuration and compensation system",
          "changing the number of landings served by the lift car",
          "changing the layout (including dimensions and locations of equipment) of machine room, hoistway and lift pit",
        ]
          .map((r) => r.replace(/,/g, "&comma;"))
          .map((r) => r.replace(/:/g, "&colon;"))
          .map((r) => (r = r + ":" + r))
          .join(",");
        // scopOfMajoARWork.setAttribute("options", options);
        for (let a of document.querySelectorAll(".lift-page")) {
          a.removeAttribute("hidden");
          for (let b of a.querySelectorAll("[id]")) {
            // if (b.id.includes("_$temp"))
            //   b.setAttribute("id", b.id.replace("_$temp", ""));
            if (mandatories.includes(b.id)) {
              if (b.hasAttribute("classOfWorks")) {
                if (document.getElementById("DeclByAppl_ClasOfWork20").checked)
                  b.setAttribute("mandatory", "");
                else b.removeAttribute("mandatory");
              } else {
                b.setAttribute("mandatory", "");
              }
            }
            if (checkeds.includes(b.id)) {
              b.setAttribute("checked", "");
              b.checked = false;
            }
            if (disableds.includes(b.id)) {
              b.setAttribute("disabled", "");
              b.value = "";
            }
          }
        }
        for (let a of document.querySelectorAll(".escalator-page, .mp-page")) {
          a.setAttribute("hidden", "");
          for (let b of a.querySelectorAll("[id]")) {
            //if (!b.id.includes("_$temp")) b.setAttribute("id", b.id + "_$temp");
            if (mandatories.includes(b.id)) {
              b.removeAttribute("mandatory");
            }
            if (checkeds.includes(b.id)) {
              b.removeAttribute("checked");
            }
          }
        }
        document
          .querySelector("[target='page4']")
          .setAttribute(
            "label",
            "Particulars and Declaration by Qualified Person for Submission of the Plans for Lift Works"
          );
        document
          .querySelector("[target='page5']")
          .setAttribute("label", "Lift Details");
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("input[type='radio']")) {
          a.checked = false;
        }
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("cn2-datefield")) {
          a.value = "";
          a.removeAttribute("disabled");
          a.removeAttribute("mandatory");
          a.setAttribute("disabled", "");
        }
        for (let a of [
          "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10",
          "SubmChec_AlteSoluAre_IsNotRequ10",
          "SubmChec_WaivModiForm_IsNotRequ10",
        ]) {
          document.getElementById(a).click();
        }
      } else if (val === "Escalator") {
        planNo.value = "EP";
        for (let a of amenPlanType) {
          a.value = "EP";
        }
        options = [
          "changing the speed",
          "changing the drive",
          "changing the control",
          "changing braking system",
          "changing auxiliary brake",
          "changing step band",
          "changing programmable electronic systems in safety related applications for escalators (PESSRAE) hardware or software",
          "changing truss of an escalator",
        ]
          .map((r) => r.replace(/,/g, "&comma;"))
          .map((r) => r.replace(/:/g, "&colon;"))
          .map((r) => (r = r + ":" + r))
          .join(",");
        // scopOfMajoARWork.setAttribute("options", options);
        for (let a of document.querySelectorAll(".escalator-page")) {
          a.removeAttribute("hidden");
          for (let b of a.querySelectorAll("[id]")) {
            // if (b.id.includes("_$temp"))
            //   b.setAttribute("id", b.id.replace("_$temp", ""));
            if (mandatories.includes(b.id)) {
              if (b.hasAttribute("classOfWorks")) {
                if (document.getElementById("DeclByAppl_ClasOfWork20").checked)
                  b.setAttribute("mandatory", "");
                else b.removeAttribute("mandatory");
              } else {
                b.setAttribute("mandatory", "");
              }
            }
            if (checkeds.includes(b.id)) {
              b.setAttribute("checked", "");
              b.checked = false;
            }
            if (disableds.includes(b.id)) {
              b.setAttribute("disabled", "");
              b.value = "";
            }
          }
        }
        for (let a of document.querySelectorAll(".lift-page, .mp-page")) {
          a.setAttribute("hidden", "");
          for (let b of a.querySelectorAll("[id]")) {
            //if (!b.id.includes("_$temp")) b.setAttribute("id", b.id + "_$temp");
            if (mandatories.includes(b.id)) {
              b.removeAttribute("mandatory");
            }
            if (checkeds.includes(b.id)) {
              b.removeAttribute("checked");
            }
          }
        }
        document
          .querySelector("[target='page4']")
          .setAttribute(
            "label",
            "Particulars and Declaration by Qualified Person for Submission of the Plans for Escalator Works"
          );
        document
          .querySelector("[target='page5']")
          .setAttribute("label", "Escalator Details");
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("input[type='radio']")) {
          a.checked = false;
        }
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("cn2-datefield")) {
          a.value = "";
          a.removeAttribute("disabled");
          a.removeAttribute("mandatory");
          a.setAttribute("disabled", "");
        }
        for (let a of [
          "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10",
          "SubmChec_AlteSoluAre_IsNotRequ10",
          "SubmChec_WaivModiForm_IsNotRequ10",
        ]) {
          document.getElementById(a).click();
        }

        for (let d of [
          "DeclByQualPers_Esca_IConfThatI10",
          "DeclByQualPers_Esca_IHereDeclThat10",
          "DeclByQualPers_Esca_IHereDeclThatIHaveSubm10",
        ]) {
          document.getElementById(d).checked = false;
        }
      } else if (val === "Mechanised Car Parking System") {
        planNo.value = "MP";
        for (let a of amenPlanType) {
          a.value = "MP";
        }
        options = [
          "changing of transfer area in terms of size, area, access, and structure",
          "changing of control (for example: hold to start, automatic parking and retrieval process before and after the user enter and leave the transfer area)",
          "changing of logic programming",
          "changing the method of sensing the presence of people in the transfer area",
          "changing the loading of the car parking capacity",
        ]
          .map((r) => r.replace(/,/g, "&comma;"))
          .map((r) => r.replace(/:/g, "&colon;"))
          .map((r) => (r = r + ":" + r))
          .join(",");
        // scopOfMajoARWork.setAttribute("options", options);
        for (let a of document.querySelectorAll(".mp-page")) {
          a.removeAttribute("hidden");
          for (let b of a.querySelectorAll("[id]")) {
            // if (b.id.includes("_$temp"))
            //   b.setAttribute("id", b.id.replace("_$temp", ""));
            if (mandatories.includes(b.id)) {
              if (b.hasAttribute("classOfWorks")) {
                if (document.getElementById("DeclByAppl_ClasOfWork20").checked)
                  b.setAttribute("mandatory", "");
                else b.removeAttribute("mandatory");
              } else {
                b.setAttribute("mandatory", "");
              }
            }
            if (checkeds.includes(b.id)) {
              b.setAttribute("checked", "");
              b.checked = false;
            }
            if (disableds.includes(b.id)) {
              b.setAttribute("disabled", "");
              b.value = "";
            }
          }
        }
        for (let a of document.querySelectorAll(
          ".lift-page, .escalator-page"
        )) {
          a.setAttribute("hidden", "");
          for (let b of a.querySelectorAll("[id]")) {
            // if (!b.id.includes("_$temp")) b.setAttribute("id", b.id + "_$temp");
            if (mandatories.includes(b.id)) {
              b.removeAttribute("mandatory");
            }
            if (checkeds.includes(b.id)) {
              b.removeAttribute("checked");
            }
          }
        }
        document
          .querySelector("[target='page4']")
          .setAttribute(
            "label",
            "Particulars and Declaration by Qualified Person for Submission of the Plans for MCPS Works"
          );
        document
          .querySelector("[target='page5']")
          .setAttribute("label", "MCPS Details");
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("input[type='radio']")) {
          a.checked = false;
        }
        for (let a of document
          .querySelector("[submission-div]")
          .querySelectorAll("cn2-datefield")) {
          a.value = "";
          a.removeAttribute("disabled");
          a.removeAttribute("mandatory");
          a.setAttribute("disabled", "");
        }
        for (let a of [
          "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10",
          "SubmChec_AlteSoluAre_IsNotRequ10",
          "SubmChec_WaivModiForm_IsNotRequ10",
        ]) {
          document.getElementById(a).click();
        }
      }

      updateDetails();
      feeComputationPage();
    }

    clearTimeout(run);
    hideLoaderForm();
  }, timeout);

  for (let rad of document.querySelectorAll("[name = 'clasOfWork']")) {
    if (rad.checked == true) {
      removeMandaRadio(document.getElementById(rad.id));
    }
  }
  resetPages();
}

function disableMaxPassCapa(el) {
  let con = findBlock(document.getElementById(el.id));
  let value = el.value;
  let ratedLoad = document.getElementById("GeneSpec_RateLoad10");
  let liftType = document.getElementById("GeneSpec_MaxPassCapa10");
  if (value == "Goods Lift") {
    liftType.setAttribute("disabled", "");
    liftType.removeAttribute("mandatory");
    liftType.value = "";
  } else {
    liftType.removeAttribute("disabled");
    liftType.value = "";
  }

  //recheck computation
  maxPassCapaNote();
  maxOfClearPlatformArea(con.querySelector("[prefix='GeneSpec_RateLoad']"));
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
}

// function removeMandaWhen(el){
//   let fields = document.querySelectorAll("[IfMajoAlteWork]");
//   let majorAlte = document.getElementById("DeclByAppl_ClasOfWork20");
//   if(majorAlte != false ){
//      for(field of fields){
//       field.removeAttribute("mandatory");
//       field.value = "";
//       if (findLabel(field).innerHTML.includes(" *"))
//         findLabel(field).innerHTML = findLabel(field).innerHTML.replace(" *", "");
//       }
//   }else{
//     for(field of fields){
//       field.setAttribute("mandatory","");
//       field.value = "";
//         if (!findLabel(field).innerHTML.includes(" *"))
//           findLabel(field).innerHTML += " *";
//     }
//   }
// }
function removeMandaAmendment(el) {
  let fields = document.querySelectorAll("[IfMajoAlteWork]");
  let id = el.id;
  if (id == "DeclByAppl_ClasOfWork20") {
    for (field of fields) {
      field.removeAttribute("mandatory");
    }
  } else {
    for (field of fields) {
      field.setAttribute("mandatory", "");
    }
  }
}

function removeMandaRadio(el, callback) {
  let name = el.getAttribute("name");
  let radios = [...document.querySelectorAll("[name='" + name + "']")];
  let liftCheckboxTable = document.querySelectorAll("[liftCheckboxes]");
  let escaCheckboxTable = document.querySelectorAll("[escaCheckboxes]");
  let mcpsCheckboxTable = document.querySelectorAll("[mcpsCheckboxes]");
  let liftchkboxes = document.querySelectorAll("[liftchkbox]");
  let escachkboxes = document.querySelectorAll("[escachkbox]");
  let mcpschkboxes = document.querySelectorAll("[mcpschkbox]");

  if (radios.some((r) => r.checked === true))
    radios.map((r) => {
      r.removeAttribute("checked");
      r.removeAttribute("mandatory");
    });
  if (document.getElementById("Project_TypeOfPlan10").value != "") {
    if (el.id == "DeclByAppl_ClasOfWork20") {
      document.querySelector("[scopOfMajorARWork]").removeAttribute("hidden");
      document.querySelector(`[target="page6"]`).removeAttribute("hidden");
      document.getElementById("page6").removeAttribute("hidden");
      document
        .getElementById("DeclByAppl_ScopOfMajoARWork20")
        .setAttribute("mandatory", "");
      document
        .getElementById("DeclByAppl_ScopOfMajoARWork20")
        .removeAttribute("hidden");
      if (document.getElementById("Project_TypeOfPlan10").value == "Lift") {
        for (liftchb of liftCheckboxTable) {
          liftchb.removeAttribute("hidden");
          for (liftchkbox of liftchkboxes) {
            liftchkbox.removeAttribute("disabled");
          }
        }
        for (escachb of escaCheckboxTable) {
          escachb.setAttribute("hidden", "");
          for (escachkbox of escachkboxes) {
            escachkbox.setAttribute("disabled", "");
            escachkbox.checked = false;
          }
        }
        for (mcpschb of mcpsCheckboxTable) {
          mcpschb.setAttribute("hidden", "");
          for (mcpschkbox of mcpschkboxes) {
            mcpschkbox.setAttribute("disabled", "");
            mcpschkbox.checked = false;
          }
        }
      } else if (
        document.getElementById("Project_TypeOfPlan10").value == "Escalator"
      ) {
        for (liftchb of liftCheckboxTable) {
          liftchb.setAttribute("hidden", "");
          for (liftchkbox of liftchkboxes) {
            liftchkbox.setAttribute("disabled", "");
            liftchkbox.checked = false;
          }
        }
        for (escachb of escaCheckboxTable) {
          escachb.removeAttribute("hidden");
          for (escachkbox of escachkboxes) {
            escachkbox.removeAttribute("disabled");
          }
        }
        for (mcpschb of mcpsCheckboxTable) {
          mcpschb.setAttribute("hidden", "");
          for (mcpschkbox of mcpschkboxes) {
            mcpschkbox.setAttribute("disabled", "");
            mcpschkbox.checked = false;
          }
        }
      } else if (
        document.getElementById("Project_TypeOfPlan10").value ==
        "Mechanised Car Parking System"
      ) {
        for (liftchb of liftCheckboxTable) {
          liftchb.setAttribute("hidden", "");
          for (liftchkbox of liftchkboxes) {
            liftchkbox.setAttribute("disabled", "");
            liftchkbox.checked = false;
          }
        }
        for (escachb of escaCheckboxTable) {
          escachb.setAttribute("hidden", "");
          for (escachkbox of escachkboxes) {
            escachkbox.setAttribute("disabled", "");
            escachkbox.checked = false;
          }
        }
        for (mcpschb of mcpsCheckboxTable) {
          mcpschb.removeAttribute("hidden");
          for (mcpschkbox of mcpschkboxes) {
            mcpschkbox.removeAttribute("disabled");
            mcpschkbox.checked = false;
          }
        }
      }
    } else {
      document.querySelector("[scopOfMajorARWork]").setAttribute("hidden", "");
      for (liftchkbox of liftchkboxes) {
        liftchkbox.setAttribute("disabled", "");
        liftchkbox.checked = false;
      }
      for (escachkbox of escachkboxes) {
        escachkbox.setAttribute("disabled", "");
        escachkbox.checked = false;
      }
      for (mcpschkbox of mcpschkboxes) {
        mcpschkbox.setAttribute("disabled", "");
        mcpschkbox.checked = false;
      }
      // document.getElementById("DeclByAppl_ScopOfMajoARWork10").value = "";
      document.getElementById("DeclByAppl_ScopOfMajoARWork20").value = "";
      // document
      //   .getElementById("DeclByAppl_ScopOfMajoARWork10")
      //   .removeAttribute("mandatory");
      document
        .getElementById("DeclByAppl_ScopOfMajoARWork20")
        .removeAttribute("mandatory");
      document
        .getElementById("DeclByAppl_ScopOfMajoARWork20")
        .setAttribute("hidden", "");

      document.querySelector(`[target="page6"]`).removeAttribute("hidden");
      document.getElementById("page6").removeAttribute("hidden");
    }
  }

  // resetPages();
  feeComputationPage();
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoLift_NoOfLift10"),
    "fee1"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10"),
    "fee2"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10"),
    "fee3"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoMCPS_Quan10"),
    "fee4"
  );

  // amendmentValidation();
}

function amendmentValidation() {
  if (document.getElementById("Project_TypeOfPlan10").value != "") {
    if (document.getElementById("DeclByAppl_ClasOfWork10").checked == true) {
      if (
        document.getElementById("DeclByAppl_IsThisAmenPlan_No10").checked ==
        true
      ) {
        document.querySelector(`[target="page6"]`).removeAttribute("hidden");
        document.getElementById("page6").removeAttribute("hidden");
      } else {
        document.querySelector(`[target="page6"]`).setAttribute("hidden", "");
        document.getElementById("page6").setAttribute("hidden", "");
      }
    } else if (
      document.getElementById("DeclByAppl_ClasOfWork20").checked == true
    ) {
    } else {
      document.querySelector(`[target="page6"]`).setAttribute("hidden", "");
      document.getElementById("page6").setAttribute("hidden", "");
    }
  }
}

function scopOfMajorARWork(arr) {
  if (arr !== "toggle") {
    let el = arr.filter((r) => r.id === "DeclByAppl_ClasOfWork20")[0].checked;
    let div = document.querySelectorAll("[scopOfMajorARWork]");
    if (el === true) {
      // for (let boxes of div) {
      //   if (boxes.querySelector("cn2-select") != null) {
      //     boxes.querySelectorAll("cn2-select").value = "";
      //   }
      //   if (boxes.querySelector("cn2-textarea") != null) {
      //     boxes.querySelector("cn2-textarea").value = "";
      //     boxes.querySelector("cn2-textarea").removeAttribute("hidden");
      //     boxes.querySelector("cn2-textarea").setAttribute("mandatory", "");
      //   }
      //   boxes.removeAttribute("hidden");
      // }
    } else {
      // for (let boxes of div) {
      //   if (boxes.querySelector("cn2-select") != null) {
      //     boxes.querySelector("cn2-select").value = "";
      //   }
      //   if (boxes.querySelector("cn2-textarea") != null) {
      //     boxes.querySelector("cn2-textarea").value = "";
      //     boxes.querySelector("cn2-textarea").setAttribute("hidden", "");
      //     boxes.querySelector("cn2-textarea").removeAttribute("mandatory");
      //   }
      //   boxes.setAttribute("hidden", "");
      // }
    }
  } else {
    // let val = document.getElementById("DeclByAppl_ScopOfMajoARWork10").value;
    // let target = document.getElementById("DeclByAppl_ScopOfMajoARWork20");
    // if (val != "") {
    //   target.removeAttribute("hidden");
    //   target.setAttribute("mandatory", "");
    // } else {
    //   target.removeAttribute("hidden");
    //   target.setAttribute("hidden", "");
    //   target.removeAttribute("mandatory");
    // }
  }

  updateDetails();
  feeComputationPage();
}

function activateAmendment(el, container) {
  let con = document.getElementById(container);
  let fields = document.querySelectorAll("[IfMajoAlteWork]");
  let planType = document.getElementById("Project_TypeOfPlan10").value;

  if (el.checked === true) {
    for (let a of document
      .getElementById("amenToPlanNo")
      .querySelectorAll("cn2-select")) {
      a.removeAttribute("disabled");
    }
    for (let a of document
      .getElementById("amenToPlanNo")
      .querySelectorAll("cn2-textbox")) {
      a.removeAttribute("disabled");
      a.removeAttribute("mandatory");
      a.setAttribute("mandatory", "");
    }
    // for (let field of fields){
    //   field.removeAttribute("mandatory");
    //     if (field.hasAttribute("default-value")) {
    //       field.value = field.getAttribute("default-value");
    //      } else {
    //       field.value = "";
    //      }

    //   if (findLabel(field).innerHTML.includes(" *"))
    //     findLabel(field).innerHTML = findLabel(field).innerHTML.replace(" *", "");
    // }
    document.getElementById("DeclByAppl_Add10").removeAttribute("disabled");
  } else {
    for (let a of document
      .getElementById("amenToPlanNo")
      .querySelectorAll("cn2-select")) {
      a.removeAttribute("disabled");
      a.setAttribute("disabled", "");
    }
    for (let a of document
      .getElementById("amenToPlanNo")
      .querySelectorAll("cn2-textbox")) {
      a.setAttribute("disabled", "");
      a.removeAttribute("mandatory");
    }
    // for (let field of fields){
    //   field.setAttribute("mandatory","");
    //     if (field.hasAttribute("default-value")) {
    //       field.value = field.getAttribute("default-value");
    //     } else {
    //       field.value = "";
    //     }

    //     if (!findLabel(field).innerHTML.includes(" *"))
    //       findLabel(field).innerHTML += " *";
    // }

    document.getElementById("DeclByAppl_Add10").setAttribute("disabled", "");

    while (con.children.length !== 1) {
      con
        .querySelector("cn2-button[danger]")
        .shadowRoot.querySelector("button")
        .click();
    }
  }

  feeComputationPage();

  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoLift_NoOfLift10"),
    "fee1"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoLift2_NoOfLift10"),
    "fee2"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoEsca_NoOfEsca10"),
    "fee3"
  );
  activateWhenQuantity(
    document.getElementById("SubmChec_CateAndNoMCPS_Quan10"),
    "fee4"
  );
}

function updateContainer(con) {
  let count = 10;
  for (let a of con.children) {
    for (let b of a.querySelectorAll("[id]")) {
      let newID = b.id.slice(0, -2) + count;
      b.setAttribute("id", newID);
      jsonData[newID] = b.value;
    }

    count += 10;
  }

  con.children.length === 1
    ? con.querySelector("cn2-button[danger]").setAttribute("disabled", "")
    : [...con.querySelectorAll("cn2-button[danger]")].map((r) =>
      r.removeAttribute("disabled")
    );
}

function duplicateContainer(el, container) {
  let planType = document.getElementById("Project_TypeOfPlan10").value;
  let con = document.getElementById(container);
  let clone = con.firstElementChild.cloneNode(true);
  for (let a of clone.querySelectorAll("[id]")) {
    a.value = "";
    if (a.hasAttribute("defaults")) {
      let defaults = JSON.parse(
        `${a.getAttribute("defaults").replace(/'/g, `"`)}`
      );
      if (planType == "Lift") {
        a.value = "LP";
      } else if (planType == "Escalator") {
        a.value = "EP";
      } else {
        a.value = "MP";
      }
    }
    if (a.hasAttribute("data-invalid")) {
      a.removeAttribute("data-invalid");
      a.removeAttribute("data-invalid-message");
      a.removeAttribute("data-valid");
      a.removeAttribute("data-valid-message");
    }
  }

  con.appendChild(clone);
  updateContainer(con);
}

function deleteContainer(el, container) {
  let con = document.getElementById(container);
  let count = 10;
  for (let a of con.children) {
    for (let b of a.querySelectorAll("[id]")) {
      delete jsonData[b.id];
    }
    count += 10;
  }
  findTable(document.getElementById(el.id)).remove();
  updateContainer(con);
}

function minOfClearPlatformArea(el) {
  let con = findBlock(document.getElementById(el.id));
  let target = document.getElementById(
    "GeneSpec_CarPLatArea" + el.id.slice(-2)
  );
  let values = {
    1: "0.00",
    2: "0.00",
    3: "0.00",
    4: "0.00",
    5: "0.00",
    6: "0.00",
    7: "0.00",
    8: "0.00",
    9: "0.00",
    10: "0.00",
    11: "0.00",
    12: "0.00",
    13: "0.00",
    14: "0.00",
    15: "0.00",
    16: "0.00",
    17: "0.00",
    18: "0.00",
    19: "2.95",
    20: "3.08",
    21: "3.2",
    22: "3.32",
    23: "3.435",
    24: "3.555",
    25: "3.685",
    26: "3.785",
    27: "3.91",
    28: "4.02",
    29: "4.14",
    30: "4.24",
    31: "4.345",
    32: "4.455",
    33: "4.565",
    34: "4.67",
    35: "4.79",
    36: "4.9",
    37: "5.015",
    38: "5.125",
    39: "5.225",
    40: "5.31",
    41: "5.31",
  };

  if (values[el.value] !== undefined) {
    target.setAttribute("min", values[el.value]);
  } else {
    target.setAttribute("min", "none");
  }

  //recheck computation
  maxOfClearPlatformArea(con.querySelector("[prefix='GeneSpec_RateLoad']"));

  // computeCarPlatformArea(
  //   el,
  //   "GeneSpec_CarSize_Dept",
  //   "GeneSpec_CarSize_Widt",
  //   "GeneSpec_CarPLatArea"
  // );
}

function maxPassCapaNote() {
  let maxPassCapvalue = document.getElementById("GeneSpec_MaxPassCapa10").value; //MaxPassCapaNote10 id
  let ratedLoadValue = document.getElementById("GeneSpec_RateLoad10");

  if (maxPassCapvalue != "") {
    if (maxPassCapvalue * 75 > ratedLoadValue.value) {
      let isValid = !isNaN(parseFloat(maxPassCapvalue))
        ? parseFloat(maxPassCapvalue) > 0
        : false;
      if (isValid) {
        if (
          document.getElementById("GeneSpec_CodeCompWith10").value ==
          "SS 550ː2009" &&
          document.getElementById("GeneSpec_With10").value ==
          "No deviation from code"
        ) {
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .setAttribute("data-invalid", "");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .setAttribute(
              "data-invalid-message",
              "Max passenger capacity exceeded the allowable value compared to the rated load."
            );
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .removeAttribute("red-tag");
          document.getElementById("MaxPassCapaNote10").innerHTML = "";
          document
            .getElementById("MaxPassCapaNote10")
            .setAttribute("hidden", "");
        } else {
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .removeAttribute("data-invalid");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .removeAttribute("data-invalid-message");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .setAttribute("red-tag", "");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .shadowRoot.querySelector("input").style.borderColor = "red";
          document
            .getElementById("MaxPassCapaNote10")
            .removeAttribute("hidden");
          document.getElementById("MaxPassCapaNote10").innerHTML =
            "Note: Max passenger capacity exceeded the allowable value compared to the rated load.";
        }
      } else {
        document
          .getElementById("GeneSpec_MaxPassCapa10")
          .shadowRoot.querySelector("input")
          .removeAttribute("style");
        document
          .getElementById("GeneSpec_MaxPassCapa10")
          .removeAttribute("red-tag");
        document
          .getElementById("GeneSpec_MaxPassCapa10")
          .removeAttribute("data-invalid");
        document
          .getElementById("GeneSpec_MaxPassCapa10")
          .removeAttribute("data-invalid-message");
        document.getElementById("MaxPassCapaNote10").innerHTML = "";
        document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
      }
    } else {
      document
        .getElementById("GeneSpec_MaxPassCapa10")
        .shadowRoot.querySelector("input")
        .removeAttribute("style");
      document
        .getElementById("GeneSpec_MaxPassCapa10")
        .removeAttribute("red-tag");
      document
        .getElementById("GeneSpec_MaxPassCapa10")
        .removeAttribute("data-invalid");
      document
        .getElementById("GeneSpec_MaxPassCapa10")
        .removeAttribute("data-invalid-message");
      document.getElementById("MaxPassCapaNote10").innerHTML = "";
      document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
    }
  } else {
    document
      .getElementById("GeneSpec_MaxPassCapa10")
      .shadowRoot.querySelector("input")
      .removeAttribute("style");
    document
      .getElementById("GeneSpec_MaxPassCapa10")
      .removeAttribute("red-tag");
    document
      .getElementById("GeneSpec_MaxPassCapa10")
      .removeAttribute("data-invalid");
    document
      .getElementById("GeneSpec_MaxPassCapa10")
      .removeAttribute("data-invalid-message");
    document.getElementById("MaxPassCapaNote10").innerHTML = "";
    document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
  }
}
function ratedLoadNote(el) {
  let ratedLoadValue = el.value;
  let maxPassCapvalue = document.getElementById("GeneSpec_MaxPassCapa10");
  let note = document.getElementById("MaxPassCapaNote");

  if (maxPassCapvalue.value != "") {
    if (maxPassCapvalue.value * 75 > ratedLoadValue) {
      let isValid = !isNaN(parseFloat(maxPassCapvalue.value))
        ? parseFloat(maxPassCapvalue.value) > 0
        : false;
      if (isValid) {
        if (
          document.getElementById("GeneSpec_CodeCompWith10").value ==
          "SS 550ː2009" &&
          document.getElementById("GeneSpec_With10").value ==
          "No deviation from code"
        ) {
          maxPassCapvalue.setAttribute("data-invalid", "");
          maxPassCapvalue.setAttribute(
            "data-invalid-message",
            "Max passenger capacity exceeded the allowable value compared to the rated load."
          );
          maxPassCapvalue.shadowRoot
            .querySelector("input")
            .removeAttribute("style");
          maxPassCapvalue.removeAttribute("red-tag");
          document.getElementById("MaxPassCapaNote10").innerHTML = "";
          document
            .getElementById("MaxPassCapaNote10")
            .setAttribute("hidden", "");
        } else {
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .removeAttribute("data-invalid");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .removeAttribute("data-invalid-message");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .setAttribute("red-tag", "");
          document
            .getElementById("GeneSpec_MaxPassCapa10")
            .shadowRoot.querySelector("input").style.borderColor = "red";
          document
            .getElementById("MaxPassCapaNote10")
            .removeAttribute("hidden");
          document.getElementById("MaxPassCapaNote10").innerHTML =
            "Note: Max passenger capacity exceeded the allowable value compared to the rated load.";
        }
      } else {
        maxPassCapvalue.removeAttribute("data-invalid");
        maxPassCapvalue.removeAttribute("data-invalid-message");
        maxPassCapvalue.shadowRoot
          .querySelector("input")
          .removeAttribute("style");
        maxPassCapvalue.removeAttribute("red-tag");
        document.getElementById("MaxPassCapaNote10").innerHTML = "";
        document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
      }
    } else {
      maxPassCapvalue.removeAttribute("data-invalid");
      maxPassCapvalue.removeAttribute("data-invalid-message");
      maxPassCapvalue.shadowRoot
        .querySelector("input")
        .removeAttribute("style");
      maxPassCapvalue.removeAttribute("red-tag");
      document.getElementById("MaxPassCapaNote10").innerHTML = "";
      document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
    }
  } else {
    maxPassCapvalue.removeAttribute("data-invalid");
    maxPassCapvalue.removeAttribute("data-invalid-message");
    maxPassCapvalue.shadowRoot.querySelector("input").removeAttribute("style");
    maxPassCapvalue.removeAttribute("red-tag");
    document.getElementById("MaxPassCapaNote10").innerHTML = "";
    document.getElementById("MaxPassCapaNote10").setAttribute("hidden", "");
  }
}
function maxOfClearPlatformArea(el) {
  let target = document.getElementById(
    "GeneSpec_CarPLatArea" + el.id.slice(-2)
  );
  let liftType = document.getElementById(
    "SubmChec_CateAndNoLift_CateOfLift" + el.id.slice(-2)
  );
  let ratedLoad = document.getElementById("GeneSpec_RateLoad10");
  let value = parseFloat(ratedLoad.value);

  if (liftType.value != "Goods Lift") {
    if (ratedLoad.value !== "" || ratedLoad.value !== "0") {
      // let tempTotal = 0;
      // let tempValue = value - 2500; //2600 - 2500
      // let t = parseInt(tempValue / 100); // 1
      // tempTotal = 5.0;
      // if (t != tempValue / 100) {
      //   tempTotal = parseFloat(tempTotal) + parseFloat(0.16 * (t + 1));
      // } else {
      //   tempTotal = parseFloat(tempTotal) + parseFloat(0.16 * t);
      // }
      // let final = parseFloat(tempTotal).toFixed(2);
      let values = [
        [0, 100, 0, 100, 0, 0.37],
        [101, 180, 100, 180, 0.37, 0.58],
        [181, 225, 180, 225, 0.58, 0.7],
        [226, 300, 225, 300, 0.7, 0.9],
        [301, 375, 300, 375, 0.9, 1.1],
        [376, 400, 375, 400, 1.1, 1.17],
        [401, 450, 400, 450, 1.17, 1.3],
        [451, 525, 450, 525, 1.3, 1.45],
        [526, 600, 525, 600, 1.45, 1.6],
        [601, 630, 600, 630, 1.6, 1.66],
        [631, 675, 630, 675, 1.66, 1.75],
        [676, 750, 675, 750, 1.75, 1.9],
        [751, 800, 750, 800, 1.9, 2.0],
        [801, 825, 800, 825, 2.0, 2.05],
        [826, 900, 825, 900, 2.05, 2.2],
        [901, 975, 900, 975, 2.2, 2.35],
        [976, 1000, 975, 1000, 2.35, 2.4],
        [1001, 1050, 1000, 1050, 2.4, 2.5],
        [1051, 1125, 1050, 1125, 2.5, 2.65],
        [1126, 1200, 1125, 1200, 2.65, 2.8],
        [1201, 1250, 1200, 1250, 2.8, 2.9],
        [1251, 1275, 1250, 1275, 2.9, 2.95],
        [1276, 1350, 1275, 1350, 2.95, 3.1],
        [1351, 1425, 1350, 1425, 3.1, 3.25],
        [1426, 1500, 1425, 1500, 3.25, 3.4],
        [1501, 1600, 1500, 1600, 3.4, 3.56],
        [1601, 2000, 1600, 2000, 3.56, 4.2],
        [2001, 2500, 2000, 2500, 4.2, 5.0],
        [2501, 9999, 2500, 10000, 5.0, 17.0],
      ];
      let val = parseFloat(el.value);
      if (val >= 0 && val <= 9999) {
        stopHere: for (let a of values) {
          if (val >= a[0] && val <= a[1]) {
            let final =
              a[4] +
              (parseFloat(ratedLoad.value) - a[2]) *
              ((a[5] - a[4]) / (a[3] - a[2]));
            target.setAttribute("max", final.toFixed(3));
            break stopHere;
          }
        }
      } else {
        target.setAttribute("max", "none");
      }

      computeCarPlatformArea(
        el,
        "GeneSpec_CarSize_Dept",
        "GeneSpec_CarSize_Widt",
        "GeneSpec_CarPLatArea"
      );
    }
  } else {
    if (ratedLoad.value !== "" || ratedLoad.value !== "0") {
      // let tempTotal = 0;
      // let tempValue = value - 1600; //1700 - 1600
      // let t = parseInt(tempValue / 100); // 1
      // tempTotal = 5.04;
      // if (t != tempValue / 100) {
      //   tempTotal = parseFloat(tempTotal) + parseFloat(0.4 * (t + 1));
      // } else {
      //   tempTotal = parseFloat(tempTotal) + parseFloat(0.4 * t);
      // }
      // let final = parseFloat(tempTotal).toFixed(2);
      let values = [
        [0, 400, 0, 400, 0, 1.68],
        [401, 450, 400, 450, 1.68, 1.84],
        [451, 525, 450, 525, 1.84, 2.08],
        [526, 600, 525, 600, 2.08, 2.32],
        [601, 630, 600, 630, 2.32, 2.42],
        [631, 675, 630, 675, 2.42, 2.56],
        [676, 750, 675, 750, 2.56, 2.8],
        [751, 800, 750, 800, 2.8, 2.96],
        [801, 825, 800, 825, 2.96, 3.04],
        [826, 900, 825, 900, 3.04, 3.28],
        [901, 975, 900, 975, 3.28, 3.52],
        [976, 1000, 975, 1000, 3.52, 3.6],
        [1001, 1050, 1000, 1050, 3.6, 3.72],
        [1051, 1125, 1050, 1125, 3.72, 3.9],
        [1126, 1200, 1125, 1200, 3.9, 4.08],
        [1201, 1250, 1200, 1250, 4.08, 4.2],
        [1251, 1275, 1250, 1275, 4.2, 4.26],
        [1276, 1350, 1275, 1350, 4.26, 4.44],
        [1351, 1425, 1350, 1425, 4.44, 4.62],
        [1426, 1500, 1425, 1500, 4.62, 4.8],
        [1501, 1600, 1500, 1600, 4.8, 5.04],
        [1601, 9999, 1600, 10000, 5.04, 38.64],
      ];

      let val = parseFloat(el.value);
      if (val >= 0 && val <= 9999) {
        stopHere: for (let a of values) {
          if (val >= a[0] && val <= a[1]) {
            let final =
              a[4] +
              (parseFloat(ratedLoad.value) - a[2]) *
              ((a[5] - a[4]) / (a[3] - a[2]));
            target.setAttribute("max", final.toFixed(3));
            break stopHere;
          }
        }
      } else {
        target.setAttribute("max", "none");
      }

      computeCarPlatformArea(
        el,
        "GeneSpec_CarSize_Dept",
        "GeneSpec_CarSize_Widt",
        "GeneSpec_CarPLatArea"
      );
    }
  }
}

function computeCarPlatformArea(el) {
  let con = findBlock(document.getElementById(el.id));
  let liftType = con.querySelector(
    "[prefix='SubmChec_CateAndNoLift_CateOfLift']"
  ).value;
  let a = con.querySelector("[prefix='GeneSpec_CarSize_Dept']").value;
  let b = con.querySelector("[prefix='GeneSpec_CarSize_Widt']").value;
  let totalField = con.querySelector("[prefix='GeneSpec_CarPLatArea']");
  let min = totalField.getAttribute("min");
  let max = totalField.getAttribute("max");

  a = !isNaN(parseFloat(a)) && a != "" ? parseFloat(a) : 0;
  b = !isNaN(parseFloat(b)) && b != "" ? parseFloat(b) : 0;

  if (liftType != "") {
    let final = (a / 1000) * (b / 1000);
    totalField.value = final;
    totalField.setAttribute("raw-value", final);
    if (max != "none" || min != "none") {
      let mins = parseFloat(min);
      let maxs = parseFloat(max);
      console.log(mins, maxs);
      if (final > maxs) {
        let isValid = !isNaN(parseFloat(totalField.value))
          ? parseFloat(totalField.value) > 0
          : false;
        if (isValid) {
          if (
            document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
              .value == "SS 550ː2009" &&
            document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
            "No deviation from code"
          ) {
            totalField.setAttribute("data-invalid", "");
            totalField.setAttribute("red-tag", "");
            totalField.shadowRoot.querySelector("input").style.borderColor =
              "red";
            document
              .getElementById("CarPLatAreaNote" + el.id.slice(-2))
              .removeAttribute("hidden");
            document.getElementById(
              "CarPLatAreaNote" + el.id.slice(-2)
            ).innerHTML =
              "Platform area is not allowable with respect to the rated load in accordance to SS550 requirements";
          } else {
            totalField.removeAttribute("data-invalid");
            totalField.removeAttribute("data-invalid-message");
            totalField.setAttribute("red-tag", "");
            totalField.shadowRoot.querySelector("input").style.borderColor =
              "red";
            totalField.shadowRoot
              .querySelector("input")
              .removeAttribute("checked");
            document
              .getElementById("CarPLatAreaNote" + el.id.slice(-2))
              .removeAttribute("hidden");
            document.getElementById(
              "CarPLatAreaNote" + el.id.slice(-2)
            ).innerHTML =
              "Note: Platform area is not allowable with respect to the rated load in accordance to SS550 requirements";
          }
        } else {
          totalField.removeAttribute("data-invalid");
          totalField.removeAttribute("data-invalid-message");
          totalField.shadowRoot.querySelector("input").removeAttribute("style");
          totalField.removeAttribute("red-tag");
          totalField.removeAttribute("checked");
          document
            .getElementById("CarPLatAreaNote" + el.id.slice(-2))
            .setAttribute("hidden", "");
          document.getElementById(
            "CarPLatAreaNote" + el.id.slice(-2)
          ).innerHTML = "";
          if (!totalField.value || parseFloat(totalField.value) === 0)
            totalField.value = "";
        }
      } else if (final < mins) {
        let isValid = !isNaN(parseFloat(totalField.value))
          ? parseFloat(totalField.value) > 0
          : false;
        if (isValid) {
          if (
            document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
              .value == "SS 550ː2009" &&
            document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
            "No deviation from code"
          ) {
            totalField.setAttribute("data-invalid", "");
            totalField.setAttribute("red-tag", "");
            totalField.shadowRoot.querySelector("input").style.borderColor =
              "red";
            document
              .getElementById("CarPLatAreaNote" + el.id.slice(-2))
              .removeAttribute("hidden");
            document.getElementById(
              "CarPLatAreaNote" + el.id.slice(-2)
            ).innerHTML =
              "Platform area is not allowable with respect to the max passenger capacity in accordance to SS550 requirements";
          } else {
            totalField.removeAttribute("data-invalid");
            totalField.removeAttribute("data-invalid-message");
            totalField.setAttribute("red-tag", "");
            totalField.shadowRoot.querySelector("input").style.borderColor =
              "red";
            totalField.removeAttribute("checked");
            document
              .getElementById("CarPLatAreaNote" + el.id.slice(-2))
              .removeAttribute("hidden");
            document.getElementById(
              "CarPLatAreaNote" + el.id.slice(-2)
            ).innerHTML =
              "Note: Platform area is not allowable with respect to the max passenger capacity in accordance to SS550 requirements";
          }
        } else {
          totalField.removeAttribute("data-invalid");
          totalField.removeAttribute("data-invalid-message");
          totalField.shadowRoot.querySelector("input").removeAttribute("style");
          totalField.removeAttribute("red-tag");
          totalField.removeAttribute("checked");
          document
            .getElementById("CarPLatAreaNote" + el.id.slice(-2))
            .setAttribute("hidden", "");
          document.getElementById(
            "CarPLatAreaNote" + el.id.slice(-2)
          ).innerHTML = "";
          if (!totalField.value || parseFloat(totalField.value) === 0)
            totalField.value = "";
        }
      } else {
        totalField.removeAttribute("data-invalid");
        totalField.removeAttribute("data-invalid-message");
        totalField.shadowRoot.querySelector("input").removeAttribute("style");
        totalField.removeAttribute("red-tag");
        totalField.removeAttribute("checked");
        document
          .getElementById("CarPLatAreaNote" + el.id.slice(-2))
          .setAttribute("hidden", "");
        document.getElementById("CarPLatAreaNote" + el.id.slice(-2)).innerHTML =
          "";
        if (!totalField.value || parseFloat(totalField.value) === 0)
          totalField.value = "";
      }
    } else {
      totalField.removeAttribute("data-invalid");
      totalField.removeAttribute("data-invalid-message");
      totalField.shadowRoot.querySelector("input").removeAttribute("style");
      totalField.removeAttribute("red-tag");
      totalField.removeAttribute("checked");
      document
        .getElementById("CarPLatAreaNote" + el.id.slice(-2))
        .setAttribute("hidden", "");
      document.getElementById("CarPLatAreaNote" + el.id.slice(-2)).innerHTML =
        "";
      if (!totalField.value || parseFloat(totalField.value) === 0)
        totalField.value = "";
    }
  }
}

function computeCarTopClea(el, runby, speed, stroke, result) {
  let con = findBlock(document.getElementById(el.id));
  let runbyFinal = !isNaN(
    parseFloat(con.querySelector("[prefix='" + runby + "']").value)
  )
    ? parseFloat(con.querySelector("[prefix='" + runby + "']").value)
    : 0;
  let speedFinal = !isNaN(
    parseFloat(con.querySelector("[prefix='" + speed + "']").value)
  )
    ? parseFloat(con.querySelector("[prefix='" + speed + "']").value)
    : 0;
  let strokeFinal = !isNaN(
    parseFloat(con.querySelector("[prefix='" + stroke + "']").value)
  )
    ? parseFloat(con.querySelector("[prefix='" + stroke + "']").value)
    : 0;
  let resultFinal = con.querySelector("[prefix='" + result + "']");

  let answer = null;
  if (runbyFinal != 0 || speedFinal != 0 || strokeFinal != 0) {
    answer =
      0.5 * (51 * 1.15 * speedFinal * 1.15 * speedFinal) +
      1400 +
      strokeFinal +
      runbyFinal;
  }
  if (
    con.querySelector("[prefix='GeneSpec_BaciLiftDeta_DrivSyst']").value ==
    "Traction"
  ) {
    if (!isNaN(answer) && answer != Infinity && answer != null) {
      if (runbyFinal != 0 && speedFinal != 0 && strokeFinal != 0) {
        resultFinal.value = answer.toFixed(3);
        resultFinal.setAttribute("raw-value", answer);
      } else {
        resultFinal.value = "";
        resultFinal.setAttribute("raw-value", "");
      }
    } else {
      if (answer == null) {
        resultFinal.value = "";
        resultFinal.removeAttribute("raw-value");
      } else {
        resultFinal.value = 0;
        resultFinal.setAttribute("raw-value", 0);
      }
    }
  } else {
    resultFinal.value = "";
    resultFinal.removeAttribute("raw-value");
  }
  notEnough(
    document.getElementById(
      con.querySelector("[prefix='GeneSpec_CompTypeTest_RateSpee']").id
    ),
    "ratedSpeed"
  );
}

function computeSafetyFactor(el) {
  let con = findBlock(document.getElementById(el.id));
  let ropeBreakingStrength =
    !isNaN(
      parseFloat(
        con.querySelector("[prefix='GeneSpec_RopeBeltBreaStre']").value
      )
    ) && con.querySelector("[prefix='GeneSpec_RopeBeltBreaStre']").value != ""
      ? parseFloat(
        con.querySelector("[prefix='GeneSpec_RopeBeltBreaStre']").value
      )
      : 0;
  let ropeBeltNo =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_RopeBeltNumb']").value)
    ) && con.querySelector("[prefix='GeneSpec_RopeBeltNumb']").value != ""
      ? parseFloat(con.querySelector("[prefix='GeneSpec_RopeBeltNumb']").value)
      : 0;
  let carMass =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
    ) && con.querySelector("[prefix='GeneSpec_CarMass']").value != ""
      ? parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
      : 0;
  let ratedLoad =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_RateLoad']").value)
    ) && con.querySelector("[prefix='GeneSpec_RateLoad']").value != ""
      ? parseFloat(con.querySelector("[prefix='GeneSpec_RateLoad']").value)
      : 0;
  let maxAllowableDecorValue =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value)
    ) && con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value != ""
      ? parseFloat(
        con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
      )
      : 0;
  let resultField = con.querySelector("[prefix='GeneSpec_SafeFact']");
  let suspensionRope = con.querySelector(
    "[prefix='GeneSpec_SuspRopeBeltConf1']"
  ).value;
  let A = 0;

  if (suspensionRope == "1ː1") {
    A = 1;
  } else if (suspensionRope == "2ː1") {
    A = 2;
  } else if (suspensionRope == "3ː1") {
    A = 3;
  } else if (suspensionRope == "4ː1") {
    A = 4;
  }
  console.log(A, suspensionRope);
  let answer =
    (ropeBreakingStrength * ropeBeltNo * A) /
    (carMass + ratedLoad + maxAllowableDecorValue);

  if (
    con.querySelector("[prefix='GeneSpec_SuspRopeBeltConf1']").value.length !=
    0 &&
    con.querySelector("[prefix='GeneSpec_RopeBeltBreaStre']").value.length !=
    0 &&
    con.querySelector("[prefix='GeneSpec_RopeBeltNumb']").value.length != 0 &&
    con.querySelector("[prefix='GeneSpec_CarMass']").value.length != 0 &&
    con.querySelector("[prefix='GeneSpec_RateLoad']").value.length != 0 &&
    con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value.length != 0
  ) {
    if (!isNaN(answer) && answer != Infinity) {
      resultField.value = answer.toFixed(3);
      resultField.setAttribute("raw-value", answer);

      if (answer < 12 && answer > 0) {
        if (
          document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
            .value == "SS 550ː2009" &&
          document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
          "No deviation from code"
        ) {
          resultField.setAttribute("data-invalid", "");
          resultField.removeAttribute("data-invalid-message");
          // resultField.setAttribute("checked", "");
          resultField.setAttribute("red-tag", "");
          resultField.shadowRoot.querySelector("input").style.borderColor =
            "red";
          document
            .getElementById("SafeFact" + el.id.slice(-2))
            .removeAttribute("hidden");
          document.getElementById("SafeFact" + el.id.slice(-2)).innerHTML =
            "Safety factor is less than allowable value in accordance to SS550 requirements.";
        } else {
          resultField.removeAttribute("data-invalid");
          resultField.removeAttribute("data-invalid-message");
          resultField.setAttribute("red-tag", "");
          resultField.shadowRoot.querySelector("input").style.borderColor =
            "red";
          resultField.removeAttribute("checked");
          document
            .getElementById("SafeFact" + el.id.slice(-2))
            .removeAttribute("hidden");
          document.getElementById("SafeFact" + el.id.slice(-2)).innerHTML =
            "Note: Safety factor is less than allowable value in accordance to SS550 requirements.";
        }
      } else {
        resultField.removeAttribute("data-invalid");
        resultField.removeAttribute("data-invalid-message");
        resultField.shadowRoot.querySelector("input").removeAttribute("style");
        resultField.removeAttribute("red-tag");
        resultField.removeAttribute("checked");
        document.getElementById("SafeFact" + el.id.slice(-2)).innerHTML = "";
        document
          .getElementById("SafeFact" + el.id.slice(-2))
          .setAttribute("hidden", "");
      }
    } else {
      resultField.value = "";
      resultField.setAttribute("raw-value", "");
      resultField.removeAttribute("data-invalid");
      resultField.removeAttribute("data-invalid-message");
      resultField.shadowRoot.querySelector("input").removeAttribute("style");
      resultField.removeAttribute("red-tag");
      resultField.removeAttribute("checked");
      document.getElementById("SafeFact" + el.id.slice(-2)).innerHTML = "";
      document
        .getElementById("SafeFact" + el.id.slice(-2))
        .setAttribute("hidden", "");
    }
  } else {
    resultField.value = "";
    resultField.setAttribute("raw-value", "");
    resultField.removeAttribute("data-invalid");
    resultField.removeAttribute("data-invalid-message");
    resultField.shadowRoot.querySelector("input").removeAttribute("style");
    resultField.removeAttribute("red-tag");
    resultField.removeAttribute("checked");
    document.getElementById("SafeFact" + el.id.slice(-2)).innerHTML = "";
    document
      .getElementById("SafeFact" + el.id.slice(-2))
      .setAttribute("hidden", "");
  }
}

function computeSheaveToRope(el) {
  let con = findBlock(document.getElementById(el.id));
  let ropeBeltSize =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_RopeBeltSize']").value)
    ) && con.querySelector("[prefix='GeneSpec_RopeBeltSize']").value != ""
      ? parseFloat(con.querySelector("[prefix='GeneSpec_RopeBeltSize']").value)
      : "";
  let sheavePullDia =
    !isNaN(
      parseFloat(con.querySelector("[prefix='GeneSpec_SheaPullDiam']").value)
    ) && con.querySelector("[prefix='GeneSpec_SheaPullDiam']").value != ""
      ? parseFloat(con.querySelector("[prefix='GeneSpec_SheaPullDiam']").value)
      : "";
  let resultField = con.querySelector(
    "[prefix='GeneSpec_SheaPullRopeBeltRati']"
  );

  let answer = sheavePullDia / ropeBeltSize;
  if (
    con.querySelector("[prefix='GeneSpec_RopeBeltSize']").value.length != 0 &&
    con.querySelector("[prefix='GeneSpec_SheaPullDiam']").value.length != 0
  ) {
    if (!isNaN(answer) && answer != Infinity) {
      resultField.value = answer.toFixed(3);
      resultField.setAttribute("raw-value", answer);

      if (answer < 40) {
        if (
          document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
            .value == "SS 550ː2009" &&
          document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
          "No deviation from code"
        ) {
          resultField.setAttribute("data-invalid", "");
          resultField.removeAttribute("data-invalid-message");
          // resultField.setAttribute("checked", "");
          resultField.setAttribute("red-tag", "");
          resultField.shadowRoot.querySelector("input").style.borderColor =
            "red";
          document
            .getElementById("SheaPullRopeBeltRati" + el.id.slice(-2))
            .removeAttribute("hidden");
          document.getElementById(
            "SheaPullRopeBeltRati" + el.id.slice(-2)
          ).innerHTML =
            "Ratio is less than allowable value in accordance to SS550 requirements.";
        } else {
          resultField.removeAttribute("data-invalid");
          resultField.removeAttribute("data-invalid-message");
          resultField.setAttribute("red-tag", "");
          resultField.shadowRoot.querySelector("input").style.borderColor =
            "red";
          resultField.removeAttribute("checked");
          document
            .getElementById("SheaPullRopeBeltRati" + el.id.slice(-2))
            .removeAttribute("hidden");
          document.getElementById(
            "SheaPullRopeBeltRati" + el.id.slice(-2)
          ).innerHTML =
            "Note: Ratio is less than allowable value in accordance to SS550 requirements.";
        }
      } else {
        resultField.removeAttribute("data-invalid");
        resultField.removeAttribute("data-invalid-message");
        resultField.shadowRoot.querySelector("input").removeAttribute("style");
        resultField.removeAttribute("red-tag");
        resultField.removeAttribute("checked");
        document.getElementById(
          "SheaPullRopeBeltRati" + el.id.slice(-2)
        ).innerHTML = "";
        document
          .getElementById("SheaPullRopeBeltRati" + el.id.slice(-2))
          .setAttribute("hidden", "");
      }
    } else {
      resultField.value = "";
      resultField.setAttribute("raw-value", "");
      resultField.removeAttribute("data-invalid");
      resultField.removeAttribute("data-invalid-message");
      resultField.shadowRoot.querySelector("input").removeAttribute("style");
      resultField.removeAttribute("red-tag");
      resultField.removeAttribute("checked");
      document.getElementById(
        "SheaPullRopeBeltRati" + el.id.slice(-2)
      ).innerHTML = "";
      document
        .getElementById("SheaPullRopeBeltRati" + el.id.slice(-2))
        .setAttribute("hidden", "");
    }
  } else {
    resultField.value = "";
    resultField.setAttribute("raw-value", "");
    resultField.removeAttribute("data-invalid");
    resultField.removeAttribute("data-invalid-message");
    resultField.shadowRoot.querySelector("input").removeAttribute("style");
    resultField.removeAttribute("red-tag");
    resultField.removeAttribute("checked");
    document.getElementById(
      "SheaPullRopeBeltRati" + el.id.slice(-2)
    ).innerHTML = "";
    document
      .getElementById("SheaPullRopeBeltRati" + el.id.slice(-2))
      .setAttribute("hidden", "");
  }
}

function updateDetails() {
  let isCheck = document.getElementById("DeclByAppl_ClasOfWork20").checked;
  for (let a of [...document.getElementById("page5").children].filter(
    (r) => !r.hasAttribute("hidden")
  )) {
    for (let b of a.querySelectorAll("[form-div]")) {
      let quantity = b.querySelector("[details-quantity]").value;
      let field = [
        ...b.querySelectorAll(
          "cn2-datefield, cn2-select, cn2-textarea, cn2-textbox"
        ),
      ].filter((r) => !r.hasAttribute("details-quantity"));
      if (quantity != "" && quantity != "0") {
        for (let c of field) {
          if (c.hasAttribute("classOfWorks")) {
            c.removeAttribute("mandatory");
            c.setAttribute("mandatory", "");
            if (isCheck) {
              c.removeAttribute("disabled", "");
              c.removeAttribute("mandatory");
              findLabel(c).innerHTML = findLabel(c).innerHTML.replace(" *", "");
            } else {
              c.removeAttribute("disabled");
              if (!findLabel(c).innerHTML.includes(" *"))
                findLabel(c).innerHTML += " *";
            }
          }
        }
      } else {
        for (let c of field) {
          c.removeAttribute("disabled");
          c.removeAttribute("mandatory");
          if (!c.hasAttribute("default-value")) {
            c.value = "";
          } else {
            c.value = c.getAttribute("default-value");
          }
          c.setAttribute("disabled", "");
          findLabel(c).innerHTML = findLabel(c).innerHTML.replace(" *", "");
          c.removeAttribute("data-invalid");
          c.removeAttribute("data-invalid-message");
          c.removeAttribute("data-valid");
          c.removeAttribute("data-valid-message");
        }
      }
    }
  }
}

function withOnlyDecimal(el, evnt, counter) {
  var charC = evnt.which ? evnt.which : evnt.keyCode;
  if (charC == 46) {
    if (el.value.indexOf(".") === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charC > 31 && (charC < 48 || charC > 57)) return false;
    if (el.value.includes(".")) {
      if (el.value.indexOf(".") < el.value.length - counter) return false;
    }
  }
  return true;
}

function removeDecimalPoint(el, validation) {
  if (el.value.slice(-1) === ".") {
    el.value = el.value.slice(0, -1);
  }
  if (validation == "range")
    rangeValue(
      document.getElementById(el.id),
      "range",
      el.getAttribute("range")
    );
}

function optionalWhenMajorAlte() {
  let con = document.querySelectorAll("[WhenMajorAlte]");
  let majorAlte = document.getElementById("DeclByAppl_ClasOfWork20");
  if (majorAlte != false) {
    for (let a of con) {
      a.removeAttribute("mandatory");
      if (a.hasAttribute("default-value")) {
        a.value = a.getAttribute("default-value");
      } else {
        a.value = "";
      }

      if (findLabel(a).innerHTML.includes(" *"))
        findLabel(a).innerHTML = findLabel(a).innerHTML.replace(" *", "");
    }
  } else {
    for (let a of con) {
      a.setAttribute("mandatory");
      if (a.hasAttribute("default-value")) {
        a.value = a.getAttribute("default-value");
      } else {
        a.value = "";
      }

      if (findLabel(a).innerHTML.includes(""))
        findLabel(a).innerHTML = findLabel(a).innerHTML.replace("", " *");
    }
  }
}

function hideWhenQuantity(el) {
  let con = findBlock(document.getElementById(el.id));
  if (el.value == "0" && el.value == "") {
    for (let a of con.querySelectorAll("[class='hideWhenQuantityZero']")) {
      a.setAttribute("hidden", "");
    }
  }
}
function activateWhenQuantity(el, fee) {
  let run = setTimeout(() => {
    if (el) {
      let con = findBlock(document.getElementById(el.id));
      let element = con.querySelector("#" + el.id);
      // let guildRailSizeField = document.getElementById("GeneSpec_GuilRailSize10");

      let radBtn = document.getElementById("DeclByAppl_ClasOfWork20");
      let switchBtn = document.getElementById(
        "DeclByAppl_IsThisAmenPlan_Yes10"
      );
      if (element.value != "0" && element.value != "") {
        if (!radBtn.checked && !switchBtn.checked) {
          // guildRailSizeField.removeAttribute("disabled");
          // guildRailSizeField.setAttribute("mandatory","");
          for (let a of con.querySelectorAll("[ifZero], [classOfWorks]")) {
            if (
              a.getAttribute("prefix") != "GeneSpec2_BaciLiftDeta2_DrivSyst"
            ) {
              a.removeAttribute("disabled");
              a.setAttribute("mandatory", "");
            }
            if (a.hasAttribute("mandatory") && a.value != "") {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot
                  .querySelector("input")
                  .classList.remove("input-text-required");
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot
                  .querySelector("select")
                  .classList.remove("input-text-required");
              }
            }

            if (!findLabel(a).innerHTML.includes(" *"))
              findLabel(a).innerHTML += " *";
          }
          for (let a of con.querySelectorAll("[ifZeroEnable]")) {
            if (a.hasAttribute("mandatory")) {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot.querySelector("input").blur();
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot.querySelector("select").blur();
              }
            }
            a.removeAttribute("disabled");
            a.removeAttribute("mandatory");
            a.removeAttribute("data-invalid");
          }
          for (let a of con.querySelectorAll("[add-disabled]")) {
            if (a.hasAttribute("mandatory")) {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot.querySelector("input").blur();
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot.querySelector("select").blur();
              }
            }
            a.removeAttribute("disabled");
          }

          // con
          //   .querySelector("[prefix='GeneSpec2_CodeCompWith_Othe']")
          //   .removeAttribute("disabled");
          // if (
          //   !(
          //     con.querySelector("[prefix='GeneSpec2_CodeCompWith_Othe']").value !=
          //     "" &&
          //     con.querySelector("[prefix='GeneSpec2_CodeCompWith']").value ==
          //     "Alternative Standard"
          //   )
          // ) {
          //   con
          //     .querySelector("[prefix='GeneSpec2_CodeCompWith_Othe']")
          //     .setAttribute("disabled", "");
          // }
          for (let id of con.querySelectorAll("[liftid], [escaid], [mcpsid]")) {
            id.removeAttribute("mandatory");
            id.removeAttribute("data-invalid");
            id.removeAttribute("data-invalid-message");
            id.removeAttribute("not-filledup");
            id.setAttribute("disabled", "");
            id.value = "";
            id.shadowRoot
              .querySelector("input")
              .classList.remove("input-text-required");
            if (findLabel(id).innerHTML.includes(" *"))
              findLabel(id).innerHTML = findLabel(id).innerHTML.replace(
                " *",
                ""
              );
          }
        } else {
          for (let id of con.querySelectorAll("[liftid], [escaid], [mcpsid]")) {
            id.setAttribute("mandatory", "");
            id.removeAttribute("disabled", "");

            if (!findLabel(id).innerHTML.includes(" *"))
              findLabel(id).innerHTML += " *";
            if (
              document.querySelector("[target='page1']").hasAttribute("valid")
            ) {
              if (id.value == "") id.setAttribute("not-filledup", "");
            }
          }
          for (let a of con.querySelectorAll("[ifZero], [classOfWorks]")) {
            if (
              a.getAttribute("prefix") != "GeneSpec2_BaciLiftDeta2_DrivSyst"
            ) {
              a.removeAttribute("disabled");
              a.removeAttribute("mandatory");
            }
            if (a.hasAttribute("mandatory") && a.value != "") {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot
                  .querySelector("input")
                  .classList.remove("input-text-required");
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot
                  .querySelector("select")
                  .classList.remove("input-text-required");
              }
            }

            if (findLabel(a).innerHTML.includes(" *"))
              findLabel(a).innerHTML = findLabel(a).innerHTML.replace(" *", "");

            if (a.hasAttribute("manda")) {
              if (a.value == "") {
                a.removeAttribute("disabled");
                a.setAttribute("mandatory", "");
              }
              if (!findLabel(a).innerHTML.includes(" *"))
                findLabel(a).innerHTML += " *";
            }
          }
          for (let a of con.querySelectorAll("[ifZeroEnable]")) {
            if (a.hasAttribute("mandatory")) {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot.querySelector("input").blur();
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot.querySelector("select").blur();
              }
            }
            a.removeAttribute("disabled");
            a.removeAttribute("mandatory");
            a.removeAttribute("data-invalid");
          }
          for (let a of con.querySelectorAll("[add-disabled]")) {
            if (a.hasAttribute("mandatory")) {
              if (
                ["cn2-textbox", "cn2-datefield"].includes(
                  a.tagName.toLowerCase()
                )
              ) {
                a.shadowRoot.querySelector("input").blur();
              } else if (a.tagName.toLowerCase() == "cn2-select") {
                a.shadowRoot.querySelector("select").blur();
              }
            }
            a.removeAttribute("disabled");
          }
        }
      } else {
        element.value = "0";
        for (let id of con.querySelectorAll("[liftid], [escaid], [mcpsid]")) {
          id.removeAttribute("mandatory");
          id.removeAttribute("data-invalid");
          id.removeAttribute("data-invalid-message");
          id.removeAttribute("not-filledup");
          id.setAttribute("disabled", "");
          id.value = "";
          id.shadowRoot
            .querySelector("input")
            .classList.remove("input-text-required");
          if (findLabel(id).innerHTML.includes(" *"))
            findLabel(id).innerHTML = findLabel(id).innerHTML.replace(
              " *",
              ""
            );
        }
        for (let a of con.querySelectorAll("[ifZero], [classOfWorks]")) {
          a.removeAttribute("disabled");
          a.setAttribute("disabled", "");
          a.removeAttribute("mandatory");
          a.removeAttribute("not-filledup");
          if (a.hasAttribute("default-value")) {
            a.value = a.getAttribute("default-value");
          } else {
            a.value = "";
          }

          if (findLabel(a).innerHTML.includes(" *"))
            findLabel(a).innerHTML = findLabel(a).innerHTML.replace(" *", "");

          for (let a of con.querySelectorAll("[add-disabled]")) {
            a.removeAttribute("disabled");
            a.setAttribute("disabled", "");
          }
        }

        for (let a of con.querySelectorAll("[compute]")) {
          a.shadowRoot.querySelector("input").removeAttribute("style");
          if (a.hasAttribute("checked")) {
            a.removeAttribute("checked");
          }
        }

        for (let spanError of con.querySelectorAll("[spanNoteError]")) {
          if (spanError.hasAttribute("id")) {
            spanError.innerHTML = "";
            spanError.setAttribute("hidden", "");
          }
        }
      }
      let driveSys = con.querySelector(
        "[prefix='GeneSpec_BaciLiftDeta_DrivSyst']"
      );
      //updateDetails();
      let notiComp = con.querySelector(
        "[prefix='GeneSpec_CompTypeTest_Comp']");
      computeFees(el, fee);
      hideFields(driveSys);
      hideFieldsNotiBody(notiComp);
      componentChanges(notiComp);
      activateFields(
        driveSys,
        "driveSystem",
        [
          "GeneSpec_MachBrakType",
          "GeneSpec_TracMachMode",
          "GeneSpec_MachBrakMode",
        ],
        ["GeneSpec_HydrPumpMode", "GeneSpec_HydrContValvMode"],
        [
          "GeneSpec_RopeBeltNumb",
          "GeneSpec_SuspRopeBeltConf1",
          "GeneSpec_RopeBeltSize",
          "GeneSpec_SuspRopeBeltConf2",
          "GeneSpec_RopeBeltBreaStre",
          "GeneSpec_SuspRopeBeltConf3",
          "GeneSpec_SheaPullDiam",
        ]
      );
    }

    clearTimeout(run);
  }, 0);
}

function resetTypeDriveSys(el) {
  let selectboxes = document.querySelectorAll("[typeDrive]");
  for (selectbox of selectboxes) {
    selectbox.value = "";
  }
}

function hideFields(el) {
  let radBtn = document.getElementById("DeclByAppl_ClasOfWork20");
  let switchBtn = document.getElementById("DeclByAppl_IsThisAmenPlan_Yes10");
  if (el != null) {
    let con = findBlock(document.getElementById(el.id));
    let row1 = con.querySelector("[row1]");
    let row2 = con.querySelector("[row2]");
    let row3 = con.querySelector("[row3]");
    let hydraulics = con.querySelectorAll("[hydraulic]");
    let tractions = con.querySelectorAll("[traction]");
    if (
      el.value == "Hydraulic (Direct)" ||
      el.value == "Hydraulic (Indirect)"
    ) {
      row1.removeAttribute("hidden");
      row2.removeAttribute("hidden");
      row3.setAttribute("hidden", "");
      for (let a of hydraulics) {
        a.removeAttribute("disabled");
        if (!radBtn.checked && !switchBtn.checked)
          a.setAttribute("mandatory", "");
        else a.removeAttribute("mandatory");
      }
      for (let b of tractions) {
        b.setAttribute("disabled", "");
        b.removeAttribute("mandatory");
        b.value = "";
      }
    } else if (el.value == "Traction") {
      row1.setAttribute("hidden", "");
      row2.setAttribute("hidden", "");
      row3.removeAttribute("hidden");
      for (let b of tractions) {
        b.removeAttribute("disabled");
        if (!radBtn.checked && !switchBtn.checked)
          b.setAttribute("mandatory", "");
        else b.removeAttribute("mandatory");
      }
      for (let a of hydraulics) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
    } else {
      if (row1) row1.setAttribute("hidden", "");
      if (row2) row2.setAttribute("hidden", "");
      if (row3) row3.setAttribute("hidden", "");
      for (let a of hydraulics) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
      for (let b of tractions) {
        b.setAttribute("disabled", "");
        b.removeAttribute("mandatory");
        b.value = "";
      }
    }
  }
}
function hideFieldsNotiBody(el) {
  let radBtn = document.getElementById("DeclByAppl_ClasOfWork20");
  let switchBtn = document.getElementById("DeclByAppl_IsThisAmenPlan_Yes10");
  let notiBody1 = document.getElementById("CompTypeTest_NotiBody10");
  let notiBody2 = document.getElementById("CompTypeTest_NotiBody20");
  let notiField1 = document.getElementById(
    "GeneSpec_CompTypeTest_NotiBody10_10"
  );
  let notiField2 = document.getElementById(
    "GeneSpec_CompTypeTest_NotiBody210_20"
  );

  if (el != null) {
    let value = el.value;

    if (value == "PESSRAL") {
      notiField1.setAttribute("disabled", "");
      notiField1.removeAttribute("mandatory");
      notiBody2.removeAttribute("hidden");
      notiField2.removeAttribute("disabled");
      notiBody1.setAttribute("hidden", "");
      notiField1.value = "";
      if (!radBtn.checked && !switchBtn.checked) {
        notiField2.setAttribute("mandatory", "");
      } else {
        notiField2.removeAttribute("mandatory");
      }
    } else {
      notiField2.setAttribute("disabled", "");
      notiField2.removeAttribute("mandatory");
      notiBody1.removeAttribute("hidden");
      notiField1.removeAttribute("disabled");
      notiBody2.setAttribute("hidden", "");
      notiField2.value = "";
      if (!radBtn.checked && !switchBtn.checked) {
        notiField1.setAttribute("mandatory", "");
      } else {
        notiField1.removeAttribute("mandatory");
      }
    }
  }
}
// function removeMandaFields(el){
//  let fields = document.querySelectorAll("[BaciLiftDeta]");
//   if (el.checked = true){
//     for(let field of fields){
//     field.removeAttribute("mandatory");
//      }
//   }else{
//     for(let field of fields){
//       field.setAttribute("mandatory","");
//      }
//   }
// }

function activateFields(el, type, field0, field1, field2) {
  if (el != null) {
    let con = findBlock(document.getElementById(el.id));

    if (type === "driveSystem") {
      let fieldsAll = [...field0, ...field1, ...field2];
      let fields = [];
      let val = el.value;
      for (let a of fieldsAll) {
        let e = con.querySelector("[prefix='" + a + "']");
        e.removeAttribute("mandatory");
        e.setAttribute("disabled", "");
        e.removeAttribute("not-filledup");
        if (val == "Traction") {
          if (!e.hasAttribute("tractions")) {
            e.value = "";
          }
        } else if (val == "Hydraulic (Direct)") {
          if (!e.hasAttribute("direct")) {
            e.value = "";
          }
        } else if (val == "Hydraulic (Indirect)") {
          con.querySelector("[prefix='GeneSpec_MachBrakType']").value = "";
          con.querySelector("[prefix='GeneSpec_TracMachMode']").value = "";
          con.querySelector("[prefix='GeneSpec_MachBrakMode']").value = "";
        }
        if (findLabel(e).innerHTML.includes(" *")) {
          findLabel(e).innerHTML = findLabel(e).innerHTML.replace(" *", "");
        }
      }

      if (val == "Traction") {
        fields = [...fields, ...field0];
        let fieldsPer = field0;
        for (let a of fieldsPer) {
          let e = con.querySelector("[prefix='" + a + "']");
          e.removeAttribute("mandatory");
          e.removeAttribute("disabled");

          if (
            ((a == "GeneSpec_MachBrakType" ||
              a == "GeneSpec_TracMachMode" ||
              a == "GeneSpec_MachBrakMode") &&
              !document.getElementById("DeclByAppl_ClasOfWork20").checked &&
              !document.getElementById("DeclByAppl_IsThisAmenPlan10")
                .checked) ||
            (a != "GeneSpec_MachBrakType" &&
              a != "GeneSpec_TracMachMode" &&
              a != "GeneSpec_MachBrakMode")
          ) {
            e.setAttribute("mandatory", "");
            if (
              !findLabel(e).innerHTML.includes(" *") &&
              findLabel(e).innerHTML != ""
            ) {
              findLabel(e).innerHTML += " *";
            }
          } else if (findLabel(e).innerHTML.includes(" *")) {
            findLabel(e).innerHTML = findLabel(e).innerHTML.replace(" *", "");
          }
        }

        for (let a of con.querySelectorAll("[cartopclea]")) {
          a.removeAttribute("hidden");
        }

        for (let a of con.querySelectorAll("[cartopnote]")) {
          a.removeAttribute("hidden");
        }
      }
      if (val == "Hydraulic (Direct)" || val == "Hydraulic (Indirect)") {
        fields = [...fields, ...field1];
        let fieldsPer = field1;
        for (let a of fieldsPer) {
          let e = con.querySelector("[prefix='" + a + "']");
          e.removeAttribute("mandatory");
          e.removeAttribute("disabled");

          if (
            !document.getElementById("DeclByAppl_ClasOfWork20").checked &&
            !document.getElementById("DeclByAppl_IsThisAmenPlan10").checked
          ) {
            e.setAttribute("mandatory", "");
            if (
              !findLabel(e).innerHTML.includes(" *") &&
              findLabel(e).innerHTML != ""
            ) {
              findLabel(e).innerHTML += " *";
            }
          } else if (findLabel(e).innerHTML.includes(" *")) {
            findLabel(e).innerHTML = findLabel(e).innerHTML.replace(" *", "");
          }
        }

        for (let a of con.querySelectorAll("[cartopclea]")) {
          a.setAttribute("hidden", "");
        }

        for (let a of con.querySelectorAll("[cartopnote]")) {
          a.setAttribute("hidden", "");
        }
      }
      if (val == "Traction" || val == "Hydraulic (Indirect)") {
        fields = [...fields, ...field1];
        let fieldsPer = field2;
        for (let a of fieldsPer) {
          let e = con.querySelector("[prefix='" + a + "']");
          e.removeAttribute("mandatory");
          e.removeAttribute("disabled");

          if (
            !document.getElementById("DeclByAppl_ClasOfWork20").checked &&
            !document.getElementById("DeclByAppl_IsThisAmenPlan10").checked
          ) {
            e.setAttribute("mandatory", "");
            if (
              !findLabel(e).innerHTML.includes(" *") &&
              findLabel(e).innerHTML != ""
            ) {
              findLabel(e).innerHTML += " *";
            }
          } else if (findLabel(e).innerHTML.includes(" *")) {
            findLabel(e).innerHTML = findLabel(e).innerHTML.replace(" *", "");
          }
        }
      }
      if (val == "Hydraulic (Direct)") {
        let buffer = con.querySelector("[prefix='GeneSpec_BuffStro']");

        for (let a of con.querySelectorAll("[buffstro]")) {
          a.setAttribute("hidden", "");
        }
        buffer.removeAttribute("mandatory");
        buffer.removeAttribute("not-filledup");
        buffer.value = "";
      } else {
        let buffer = con.querySelector("[prefix='GeneSpec_BuffStro']");

        for (let a of con.querySelectorAll("[buffstro]")) {
          a.removeAttribute("hidden");
        }
        if (
          !document.getElementById("DeclByAppl_ClasOfWork20").checked &&
          !document.getElementById("DeclByAppl_IsThisAmenPlan10").checked
        ) {
          buffer.setAttribute("mandatory", "");
        } else {
          buffer.removeAttribute("mandatory");
        }
      }

    } else if (type == "codeCompliance") {
      let val = el.value;
      if (val == "Alternative Standard") {
        for (let a of field0) {
          let e = con.querySelector("[prefix='" + a + "']");
          e.removeAttribute("mandatory");
          e.removeAttribute("disabled");
          e.setAttribute("mandatory", "");
        }
      } else {
        for (let a of field0) {
          let e = con.querySelector("[prefix='" + a + "']");
          e.removeAttribute("mandatory");
          e.removeAttribute("disabled");
          e.setAttribute("disabled", "");

        }
      }
    }

    if (con.id == "LiftDetails_Forms10") {
      computeSafetyFactor(el);
      computeSheaveToRope(el);
      maxPassCapaNote();
      //recheck computation
      computeCarPlatformArea(
        el,
        "GeneSpec_CarSize_Dept",
        "GeneSpec_CarSize_Widt",
        "GeneSpec_CarPLatArea"
      );
      computeCarTopClea(
        el,
        "GeneSpec_CounWeigRunb",
        "GeneSpec_RateSpee",
        "GeneSpec_BuffStro",
        "GeneSpec_CarTopCleaRequ"
      );
      // ratedLoadNote(el);
    }

    let notEnoughBtn = document.querySelectorAll(
      "[prefix='btnGeneSpec_CompTypeTest_Dele']"
    );
    for (let a of notEnoughBtn) {
      if (a.hasAttribute("id")) {
        notEnough(
          document.getElementById(
            "GeneSpec_CompTypeTest_MechTripSpee" + a.id.slice(-5)
          ),
          "tripSpeed"
        );
        notEnough(
          document.getElementById(
            "GeneSpec_CompTypeTest_MaxiImpaSpee" + a.id.slice(-5)
          ),
          "impactSpeed"
        );
        notEnough(
          document.getElementById(
            "GeneSpec_CompTypeTest_RateSpee" + a.id.slice(-5)
          ),
          "ratedSpeed"
        );
        notEnough(
          document.getElementById(
            "GeneSpec_CompTypeTest_PermMass" + a.id.slice(-5)
          ),
          "permiMass"
        );
        notEnoughSyst(
          document.getElementById(
            "GeneSpec_SystTypeTest_PermMass" + a.id.slice(-5)
          ),
          "permiMass"
        );
      }
    }
  }

  fixMandatories("page5");
}

function fixMandatories(page) {
  let run = setTimeout(() => {
    for (let field of document.getElementById(page).querySelectorAll("[mandatory]")) {
      if (field.value != "" && !["input", "cn2-checkbox"].includes(field.tagName.toLowerCase())) {
        if (field.shadowRoot.querySelector(".input-text-required")) {
          field.shadowRoot.querySelector(".input-text-required").classList.remove("input-text-required");
        }
      }
    }

    clearTimeout(run);
  }, 0);
}

function hideCompTypeTest(el) {
  let hideEmerBrakType = document.getElementById(
    "GeneSpec_CompTypeTest_hideEmerBrakType"
  );
  let hidePermMass = document.getElementById(
    "GeneSpec_CompTypeTest_hidePermMass"
  );
  let hideRateSpee = document.getElementById(
    "GeneSpec_CompTypeTest_hideRateSpee"
  );
  let hideMechTripSpee = document.getElementById(
    "GeneSpec_CompTypeTest_hideMechTripSpee"
  );
  let hideReduStriBuffUsed = document.getElementById(
    "GeneSpec_CompTypeTest_hideReduStriBuffUsed"
  );
  let hideMaxiImpaSpee = document.getElementById(
    "GeneSpec_CompTypeTest_hideMaxiImpaSpee"
  );

  if (el.value == "UCMP" || el.value == "ACOP") {
    hideEmerBrakType.removeAttribute("hidden");
    hidePermMass.setAttribute("hidden", "");
    hideRateSpee.setAttribute("hidden", "");
    hideMechTripSpee.setAttribute("hidden", "");
    hideReduStriBuffUsed.setAttribute("hidden", "");
    hideMaxiImpaSpee.setAttribute("hidden", "");
  } else if (el.value == "Safety Gear") {
    hidePermMass.removeAttribute("hidden");
    hideEmerBrakType.setAttribute("hidden", "");
    hideRateSpee.setAttribute("hidden", "");
    hideMechTripSpee.setAttribute("hidden", "");
    hideReduStriBuffUsed.setAttribute("hidden", "");
    hideMaxiImpaSpee.setAttribute("hidden", "");
  } else if (el.value == "Overspeed Governor") {
    hideRateSpee.removeAttribute("hidden");
    hideMechTripSpee.removeAttribute("hidden");
    hidePermMass.setAttribute("hidden", "");
    hideEmerBrakType.setAttribute("hidden", "");
    hideReduStriBuffUsed.setAttribute("hidden", "");
    hideMaxiImpaSpee.setAttribute("hidden", "");
  } else if (el.value == "Buffer") {
    hideReduStriBuffUsed.removeAttribute("hidden");
    hideMaxiImpaSpee.removeAttribute("hidden");
    hidePermMass.removeAttribute("hidden");
    hideRateSpee.setAttribute("hidden", "");
    hideMechTripSpee.setAttribute("hidden", "");
    hideEmerBrakType.setAttribute("hidden", "");
  } else if (
    el.value == "PESSRAL" ||
    el.value == "Landing Door Locking Device" ||
    el.value == "Car Door Locking Device" ||
    el.value == "Rupture Valve/One-Way Restrictor"
  ) {
    hideReduStriBuffUsed.setAttribute("hidden", "");
    hideMaxiImpaSpee.setAttribute("hidden", "");
    hideRateSpee.setAttribute("hidden", "");
    hideMechTripSpee.setAttribute("hidden", "");
    hidePermMass.setAttribute("hidden", "");
    hideEmerBrakType.setAttribute("hidden", "");
  }
}

function componentChanges(el) {
  let isChecked = document.getElementById("DeclByAppl_ClasOfWork20").checked;
  let isYes = document.getElementById("DeclByAppl_IsThisAmenPlan_Yes10").checked;
  if (el != null) {
    let cons = findSubBlock(document.getElementById(el.id));
    let con = findBlock(document.getElementById(el.id));
    let fields = [
      "GeneSpec_CompTypeTest_EmerBrakType",
      "GeneSpec_CompTypeTest_PermMass",
      "GeneSpec_CompTypeTest_RateSpee",
      "GeneSpec_CompTypeTest_MechTripSpee",
    ];
    let quantity = con.querySelector("[details-quantity]").value;

    // for (let a of cons.querySelectorAll(
    //   "[sub-form]:not([prefix='GeneSpec_CompTypeTest_Comp'])"
    // )) {
    //   if (a.tagName.toLowerCase() != "cn2-button") {
    //     if (!a.hasAttribute("default-value")) a.value = "";
    //     else a.value = a.getAttribute("default-value");
    //     a.removeAttribute("data-invalid");
    //     a.removeAttribute("data-invalid-message");
    //     a.removeAttribute("data-valid");
    //     a.removeAttribute("data-valid-message");
    //     a.removeAttribute("disabled");
    //     a.removeAttribute("mandatory");
    //     if (a.hasAttribute("spanNoteError")) {
    //       a.innerHTML = "";
    //       a.setAttribute("hidden", "");
    //     }
    //     let label = findLabel(a);
    //     if (label.innerHTML.includes(" *"))
    //       label.innerHTML = label.innerHTML.replace(" *", "");

    //     if (quantity != "" && quantity != "0") {
    //       if (isChecked || isYes) {
    //         if (!a.hasAttribute("classofworks")) {
    //           a.setAttribute("disabled", "");
    //         }
    //       } else {
    //         if (a.hasAttribute("classofworks")) {
    //           a.setAttribute("mandatory", "");
    //           if (!findLabel(a).innerHTML.includes(" *"))
    //             findLabel(a).innerHTML += " *";
    //         } else {
    //           if (!a.hasAttribute("ifZeroEnable")) {
    //             a.setAttribute("disabled", "");
    //           }
    //         }
    //       }
    //     } else {
    //       a.setAttribute("disabled", "");
    //     }
    //   }
    // }

    for (let a of fields) {
      let field = cons.querySelector("[prefix='" + a + "']");
      field.removeAttribute("mandatory");
      field.removeAttribute("not-filledup");
      field.setAttribute("disabled", "");
      if (findLabel(field).innerHTML.includes(" *"))
        findLabel(field).innerHTML = findLabel(field).innerHTML.replace(" *", "");
      field.value = "";
    }

    if (el.value == "UCMP" || el.value == "ACOP") {
      let emergyBrakeType = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_EmerBrakType']"
      );
      for (let a of emergyBrakeType) {
        a.removeAttribute("disabled");
        a.removeAttribute("mandatory");
        if (!isChecked && !isYes) {
          a.setAttribute("mandatory", "");
          if (!findLabel(a).innerHTML.includes(" *"))
            findLabel(a).innerHTML += " *";
        }
        a.value = "";
      }
    } else if (el.value == "Safety Gear" || el.value == "Buffer") {
      let permiMass = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_PermMass']"
      );

      for (let a of permiMass) {
        a.removeAttribute("disabled");
        a.removeAttribute("mandatory");
        if (!isChecked && !isYes) {
          a.setAttribute("mandatory", "");
          if (!findLabel(a).innerHTML.includes(" *"))
            findLabel(a).innerHTML += " *";
        }
        a.value = "";
      }
    } else if (el.value == "Overspeed Governor") {
      let ratedSpeed = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_RateSpee']"
      );
      let mechTripSpeed = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_MechTripSpee']"
      );

      for (let a of ratedSpeed) {
        a.removeAttribute("disabled");
        a.removeAttribute("mandatory");
        if (!isChecked && !isYes) {
          a.setAttribute("mandatory", "");
          if (!findLabel(a).innerHTML.includes(" *"))
            findLabel(a).innerHTML += " *";
        }
        a.value = "";
      }
      for (let a of mechTripSpeed) {
        a.removeAttribute("disabled");
        a.removeAttribute("mandatory");
        if (!isChecked && !isYes) {
          a.setAttribute("mandatory", "");
          if (!findLabel(a).innerHTML.includes(" *"))
            findLabel(a).innerHTML += " *";
        }
        a.value = "";
      }
    } else if (
      el.value == "PESSRAL" ||
      el.value == "Landing Door Locking Device" ||
      el.value == "Car Door Locking Device" ||
      el.value == "Rupture Valve/One-Way Restrictor"
    ) {
      let emergyBrakeType = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_EmerBrakType']"
      );
      let ratedSpeed = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_RateSpee']"
      );
      let mechTripSpeed = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_MechTripSpee']"
      );
      let permiMass = cons.querySelectorAll(
        "[prefix='GeneSpec_CompTypeTest_PermMass']"
      );
      for (let a of emergyBrakeType) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
      for (let a of permiMass) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
      for (let a of ratedSpeed) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
      for (let a of mechTripSpeed) {
        a.setAttribute("disabled", "");
        a.removeAttribute("mandatory");
        a.value = "";
      }
    }
  }
  activateBudderUsed(el);
  activateImpactSpeed(el);
}
function notEnoughSyst(el, type) {
  let con = findBlock(document.getElementById(el.id));
  let val = parseFloat(el.value);

  if (el.value != "") {
    if (type == "permiMass") {
      if (!isNaN(val)) {
        let carMass =
          !isNaN(
            parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
          ) && con.querySelector("[prefix='GeneSpec_CarMass']").value != ""
            ? parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
            : 0;
        let ratedLoad =
          !isNaN(
            parseFloat(con.querySelector("[prefix='GeneSpec_RateLoad']").value)
          ) && con.querySelector("[prefix='GeneSpec_RateLoad']").value != ""
            ? parseFloat(
              con.querySelector("[prefix='GeneSpec_RateLoad']").value
            )
            : 0;
        let maxAlloDecoWeig =
          !isNaN(
            parseFloat(
              con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
            )
          ) &&
            con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value != ""
            ? parseFloat(
              con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
            )
            : 0;

        let answer = carMass + ratedLoad + maxAlloDecoWeig;
        if (!isNaN(answer) && answer != Infinity) {
          if (val < answer) {
            if (
              document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
                .value == "SS 550ː2009" &&
              document.getElementById("GeneSpec_With" + el.id.slice(-2))
                .value == "No deviation from code"
            ) {
              document.getElementById(el.id).setAttribute("data-invalid", "");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "SystTypeTest_PermMass" + el.id.slice(-5)
              ).innerHTML =
                "Permissible mass is not enough for the specified lift.";
              document
                .getElementById("SystTypeTest_PermMass" + el.id.slice(-5))
                .removeAttribute("hidden");
            } else {
              document.getElementById(el.id).removeAttribute("data-invalid");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document
                .getElementById("SystTypeTest_PermMass" + el.id.slice(-5))
                .removeAttribute("hidden");
              document.getElementById(
                "SystTypeTest_PermMass" + el.id.slice(-5)
              ).innerHTML =
                "Note: Permissible mass is not enough for the specified lift.";
            }
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).removeAttribute("red-tag");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input")
              .removeAttribute("style");
            document.getElementById(
              "SystTypeTest_PermMass" + el.id.slice(-5)
            ).innerHTML = "";
            document
              .getElementById("SystTypeTest_PermMass" + el.id.slice(-5))
              .setAttribute("hidden", "");
          }
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
          document.getElementById(el.id).removeAttribute("red-tag");
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document.getElementById(
            "SystTypeTest_PermMass" + el.id.slice(-5)
          ).innerHTML = "";
          document
            .getElementById("SystTypeTest_PermMass" + el.id.slice(-5))
            .setAttribute("hidden", "");
        }
      }
    }
  }
}

function notEnough(el, type) {
  let con = findBlock(document.getElementById(el.id));
  let val = parseFloat(el.value);

  if (el.value != "") {
    if (type == "permiMass") {
      if (!isNaN(val)) {
        let carMass =
          !isNaN(
            parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
          ) && con.querySelector("[prefix='GeneSpec_CarMass']").value != ""
            ? parseFloat(con.querySelector("[prefix='GeneSpec_CarMass']").value)
            : 0;
        let ratedLoad =
          !isNaN(
            parseFloat(con.querySelector("[prefix='GeneSpec_RateLoad']").value)
          ) && con.querySelector("[prefix='GeneSpec_RateLoad']").value != ""
            ? parseFloat(
              con.querySelector("[prefix='GeneSpec_RateLoad']").value
            )
            : 0;
        let maxAlloDecoWeig =
          !isNaN(
            parseFloat(
              con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
            )
          ) &&
            con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value != ""
            ? parseFloat(
              con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
            )
            : 0;

        let answer = carMass + ratedLoad + maxAlloDecoWeig;
        if (!isNaN(answer) && answer != Infinity) {
          if (val < answer) {
            if (
              document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
                .value == "SS 550ː2009" &&
              document.getElementById("GeneSpec_With" + el.id.slice(-2))
                .value == "No deviation from code"
            ) {
              document.getElementById(el.id).setAttribute("data-invalid", "");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "CompTypeTest_PermMass" + el.id.slice(-5)
              ).innerHTML =
                "Permissible mass is not enough for the specified lift.";
              document
                .getElementById("CompTypeTest_PermMass" + el.id.slice(-5))
                .removeAttribute("hidden");
            } else {
              document.getElementById(el.id).removeAttribute("data-invalid");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document
                .getElementById("CompTypeTest_PermMass" + el.id.slice(-5))
                .removeAttribute("hidden");
              document.getElementById(
                "CompTypeTest_PermMass" + el.id.slice(-5)
              ).innerHTML =
                "Note: Permissible mass is not enough for the specified lift.";
            }
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).removeAttribute("red-tag");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input")
              .removeAttribute("style");
            document.getElementById(
              "CompTypeTest_PermMass" + el.id.slice(-5)
            ).innerHTML = "";
            document
              .getElementById("CompTypeTest_PermMass" + el.id.slice(-5))
              .setAttribute("hidden", "");
          }
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
          document.getElementById(el.id).removeAttribute("red-tag");
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document.getElementById(
            "CompTypeTest_PermMass" + el.id.slice(-5)
          ).innerHTML = "";
          document
            .getElementById("CompTypeTest_PermMass" + el.id.slice(-5))
            .setAttribute("hidden", "");
        }
      }
    } else if (type == "ratedSpeed") {
      if (!isNaN(val)) {
        let ratedSpeed =
          !isNaN(
            parseFloat(con.querySelector("[prefix='GeneSpec_RateSpee']").value)
          ) && con.querySelector("[prefix='GeneSpec_RateSpee']").value != ""
            ? parseFloat(
              con.querySelector("[prefix='GeneSpec_RateSpee']").value
            )
            : 0;

        if (!isNaN(ratedSpeed) && ratedSpeed != Infinity) {
          if (val != ratedSpeed) {
            if (
              document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
                .value == "SS 550ː2009" &&
              document.getElementById("GeneSpec_With" + el.id.slice(-2))
                .value == "No deviation from code"
            ) {
              document.getElementById(el.id).setAttribute("data-invalid", "");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "CompTypeTest_RateSpee" + el.id.slice(-5)
              ).innerHTML =
                "Rated speed of overspeed governor is not compatible for the specified lift.";
              document
                .getElementById("CompTypeTest_RateSpee" + el.id.slice(-5))
                .removeAttribute("hidden");
            } else {
              document.getElementById(el.id).removeAttribute("data-invalid");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "CompTypeTest_RateSpee" + el.id.slice(-5)
              ).innerHTML =
                "Note: Rated speed of overspeed governor is not compatible for the specified lift.";
              document
                .getElementById("CompTypeTest_RateSpee" + el.id.slice(-5))
                .removeAttribute("hidden");
            }
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).removeAttribute("red-tag");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input")
              .removeAttribute("style");
            document.getElementById(
              "CompTypeTest_RateSpee" + el.id.slice(-5)
            ).innerHTML = "";
            document
              .getElementById("CompTypeTest_RateSpee" + el.id.slice(-5))
              .setAttribute("hidden", "");
          }
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
          document.getElementById(el.id).removeAttribute("red-tag");
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document.getElementById(
            "CompTypeTest_RateSpee" + el.id.slice(-5)
          ).innerHTML = "";
          document
            .getElementById("CompTypeTest_RateSpee" + el.id.slice(-5))
            .setAttribute("hidden", "");
        }
      }
    } else if (type == "tripSpeed") {
      let ratedSpeed = document.getElementById(
        "GeneSpec_CompTypeTest_RateSpee10_10"
      );
      // !isNaN(
      //   parseFloat(
      //     con.querySelector("[prefix='GeneSpec_CompTypeTest_RateSpee']").value
      //   )
      // ) &&
      // con.querySelector("[prefix='GeneSpec_CompTypeTest_RateSpee']").value != ""
      //   ? parseFloat(
      //       con.querySelector("[prefix='GeneSpec_CompTypeTest_RateSpee']").value
      //     )
      //   : 0;
      // let limit = !isNaN(parseFloat(el.getAttribute("limit")))
      // ? parseFloat(el.getAttribute("limit"))
      // : 0;
      let tripSpeed = document.getElementById(
        "GeneSpec_CompTypeTest_MechTripSpee10_10"
      );
      let minRange = 1.15 * ratedSpeed.value; //2.3
      let maxRange1 = 1.5 * ratedSpeed.value;
      let maxRange2 = 1.25 * ratedSpeed.value + 0.25 / ratedSpeed.value; //1.375
      if (!isNaN(val)) {
        // if (!isNaN(limit) && limit != Infinity) {
        if (
          ratedSpeed.value <= 1.0 &&
          (tripSpeed.value > maxRange1 || tripSpeed.value < minRange)
        ) {
          if (
            document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
              .value == "SS 550ː2009" &&
            document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
            "No deviation from code"
          ) {
            document.getElementById(el.id).setAttribute("data-invalid", "");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).setAttribute("red-tag", "");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input").style.borderColor = "red";
            document.getElementById(
              "CompTypeTest_MechTripSpee" + el.id.slice(-5)
            ).innerHTML =
              "Mechanical tripping speed of overspeed governor exceeded the allowable range for the rated speed for the specified lift in accordance to SS550 requirements.";
            document
              .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
              .removeAttribute("hidden");
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).setAttribute("red-tag", "");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input").style.borderColor = "red";
            document.getElementById(
              "CompTypeTest_MechTripSpee" + el.id.slice(-5)
            ).innerHTML =
              "Note: Mechanical tripping speed of overspeed governor exceeded the allowable range for the rated speed for the specified lift in accordance to SS550 requirements.";
            document
              .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
              .removeAttribute("hidden");
          }
        } else if (
          ratedSpeed.value > 1.0 &&
          (tripSpeed.value > maxRange2 || tripSpeed.value < minRange)
        ) {
          if (
            document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
              .value == "SS 550ː2009" &&
            document.getElementById("GeneSpec_With" + el.id.slice(-2)).value ==
            "No deviation from code"
          ) {
            document.getElementById(el.id).setAttribute("data-invalid", "");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).setAttribute("red-tag", "");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input").style.borderColor = "red";
            document.getElementById(
              "CompTypeTest_MechTripSpee" + el.id.slice(-5)
            ).innerHTML =
              "Mechanical tripping speed of overspeed governor exceeded the allowable range for the rated speed for the specified lift in accordance to SS550 requirements.";
            document
              .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
              .removeAttribute("hidden");
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).setAttribute("red-tag", "");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input").style.borderColor = "red";
            document.getElementById(
              "CompTypeTest_MechTripSpee" + el.id.slice(-5)
            ).innerHTML =
              "Note: Mechanical tripping speed of overspeed governor exceeded the allowable range for the rated speed for the specified lift in accordance to SS550 requirements.";
            document
              .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
              .removeAttribute("hidden");
          }
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
          document.getElementById(el.id).removeAttribute("red-tag");
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document.getElementById(
            "CompTypeTest_MechTripSpee" + el.id.slice(-5)
          ).innerHTML = "";
          document
            .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
            .setAttribute("hidden", "");
        }
        // } else {
        //   document.getElementById(el.id).removeAttribute("data-invalid");
        //   document
        //     .getElementById(el.id)
        //     .removeAttribute("data-invalid-message");
        //   document.getElementById(
        //     "CompTypeTest_MechTripSpee" + el.id.slice(-5)
        //   ).innerHTML = "";
        //   document
        //     .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
        //     .setAttribute("hidden", "");
        // }
      }
    } else if (type == "impactSpeed") {
      let ratedSpeed =
        !isNaN(
          parseFloat(con.querySelector("[prefix='GeneSpec_RateSpee']").value)
        ) && con.querySelector("[prefix='GeneSpec_RateSpee']").value != ""
          ? parseFloat(con.querySelector("[prefix='GeneSpec_RateSpee']").value)
          : 0;
      let answer = (1.15 * 10 * (ratedSpeed * 10)) / 100;
      if (!isNaN(val)) {
        if (!isNaN(answer) && answer != Infinity) {
          if (val < answer) {
            if (
              document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2))
                .value == "SS 550ː2009" &&
              document.getElementById("GeneSpec_With" + el.id.slice(-2))
                .value == "No deviation from code"
            ) {
              document.getElementById(el.id).setAttribute("data-invalid", "");
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "CompTypeTest_MaxiImpaSpee" + el.id.slice(-5)
              ).innerHTML =
                "Maximum impact speed of overspeed governor is less than 115% of rated speed of system, which is not in accordance to SS550 requirements.";
              document
                .getElementById("CompTypeTest_MaxiImpaSpee" + el.id.slice(-5))
                .removeAttribute("hidden");
            } else {
              document
                .getElementById(el.id)
                .removeAttribute("data-invalid-message");
              document.getElementById(el.id).removeAttribute("data-invalid");
              document.getElementById(el.id).setAttribute("red-tag", "");
              document
                .getElementById(el.id)
                .shadowRoot.querySelector("input").style.borderColor = "red";
              document.getElementById(
                "CompTypeTest_MaxiImpaSpee" + el.id.slice(-5)
              ).innerHTML =
                "Note: Maximum impact speed of overspeed governor is less than 115% of rated speed of system, which is not in accordance to SS550 requirements.";
              document
                .getElementById("CompTypeTest_MaxiImpaSpee" + el.id.slice(-5))
                .removeAttribute("hidden");
            }
          } else {
            document.getElementById(el.id).removeAttribute("data-invalid");
            document
              .getElementById(el.id)
              .removeAttribute("data-invalid-message");
            document.getElementById(el.id).removeAttribute("red-tag");
            document
              .getElementById(el.id)
              .shadowRoot.querySelector("input")
              .removeAttribute("style");
            document.getElementById(
              "CompTypeTest_MaxiImpaSpee" + el.id.slice(-5)
            ).innerHTML = "";
            document
              .getElementById("CompTypeTest_MaxiImpaSpee" + el.id.slice(-5))
              .setAttribute("hidden", "");
          }
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
          document
            .getElementById(el.id)
            .removeAttribute("data-invalid-message");
          document.getElementById(el.id).removeAttribute("red-tag");
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .removeAttribute("style");
          document.getElementById(
            "CompTypeTest_MaxiImpaSpee" + el.id.slice(-5)
          ).innerHTML = "";
          document
            .getElementById("CompTypeTest_MaxiImpaSpee" + el.id.slice(-5))
            .setAttribute("hidden", "");
        }
      }
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
    document.getElementById(el.id).removeAttribute("red-tag");
    document
      .getElementById(el.id)
      .shadowRoot.querySelector("input")
      .removeAttribute("style");
    if (type == "permiMass") {
      document.getElementById(
        "CompTypeTest_PermMass" + el.id.slice(-5)
      ).innerHTML = "";
      document
        .getElementById("CompTypeTest_PermMass" + el.id.slice(-5))
        .setAttribute("hidden", "");
    } else if (type == "ratedSpeed") {
      document.getElementById(
        "CompTypeTest_RateSpee" + el.id.slice(-5)
      ).innerHTML = "";
      document
        .getElementById("CompTypeTest_RateSpee" + el.id.slice(-5))
        .setAttribute("hidden", "");
    } else if (type == "tripSpeed") {
      document.getElementById(
        "CompTypeTest_MechTripSpee" + el.id.slice(-5)
      ).innerHTML = "";
      document
        .getElementById("CompTypeTest_MechTripSpee" + el.id.slice(-5))
        .setAttribute("hidden", "");
    } else if (type == "impactSpeed") {
      document.getElementById(
        "CompTypeTest_MaxiImpaSpee" + el.id.slice(-5)
      ).innerHTML = "";
      document
        .getElementById("CompTypeTest_MaxiImpaSpee" + el.id.slice(-5))
        .setAttribute("hidden", "");
    }
  }
}

// function setMechTripSpeedLimit(el) {
//   let con = findBlock(document.getElementById(el.id));
//   let result = con.querySelectorAll(
//     "[prefix='GeneSpec_CompTypeTest_MechTripSpee']"
//   );
//   let ratedSpeed =
//     !isNaN(
//       parseFloat(con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value)
//     ) && con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value != ""
//       ? parseFloat(
//           con.querySelector("[prefix='GeneSpec_MaxAlloDecoWeig']").value
//         )
//       : 0;
//   let minRange = 1.15 * ratedSpeed;
//   let maxRange = (1.25 * ratedSpeed) + (0.25 / ratedSpeed);
//   let tempVal = el.value[0] == "." ? "0" + el.value : el.value;
//   let val = parseFloat(tempVal);
//   if (!isNaN(val)) {

//     let values = [
//       [0, 0.74, 0.9],
//       [0.75, 0.89, 1.07],
//       [0.9, 0.99, 1.25],
//       [1, 1.14, 1.4],
//       [1.15, 1.24, 1.56],
//       [1.25, 1.49, 1.71],
//       [1.5, 1.74, 2],
//       [1.75, 1.99, 2.3],
//       [2, 2.24, 2.6],
//       [2.25, 2.49, 2.89],
//       [2.5, 2.99, 3.18],
//       [3, 3.49, 3.76],
//       [3.5, 3.99, 4.34],
//       [4, 4.49, 4.93],
//       [4.5, 4.99, 5.51],
//       [5, 5.49, 6.1],
//       [5.5, 5.99, 6.71],
//       [6, 6.49, 7.32],
//       [6.5, 6.99, 7.93],
//       [7, 7.49, 8.54],
//       [7.5, 7.99, 9.15],
//       [8, 8.49, 9.76],
//       [8.5, 8.99, 10.37],
//       [9, 9.49, 10.98],
//       [9.5, 9.99, 11.59],
//       [10, 10, 12.2],
//     ];

//     let found = false;
//     let value = 0;

//     stopHere: for (let a of values) {
//       if (val >= a[0] && val < a[1]) {
//         value = a[2];
//         found = true;
//         break stopHere;
//       }
//     }

//     if (!found) {
//       if (val >= 10) value = 12.2;
//     }

//     for (let a of result) {
//       a.setAttribute("limit", value);
//     }
//   }
//   notEnough(
//     document.getElementById(
//       con.querySelector("[prefix='GeneSpec_CompTypeTest_MechTripSpee']").id
//     ),
//     "tripSpeed"
//   );
//   activateBudderUsed(el);
// }

function activateBudderUsed(el) {
  if (el != null) {
    let con = findBlock(document.getElementById(el.id));
    let cons = findSubBlock(document.getElementById(el.id));
    let isChecked = document.getElementById("DeclByAppl_ClasOfWork20").checked;
    let isYes = document.getElementById("DeclByAppl_IsThisAmenPlan_Yes10")
      .checked;
    let component = cons.querySelector("[prefix='GeneSpec_CompTypeTest_Comp']")
      .value;
    let field = cons.querySelector(
      "[prefix='GeneSpec_CompTypeTest_ReduStriBuffUsed']"
    );

    if (component == "Buffer") {
      field.removeAttribute("disabled");
      field.removeAttribute("mandatory");
      field.setAttribute("mandatory", "");
      if (!findLabel(field).innerHTML.includes(" *"))
        findLabel(field).innerHTML += " *";
      if (isChecked || isYes) {
        field.removeAttribute("mandatory");
        if (findLabel(field).innerHTML.includes(" *"))
          findLabel(field).innerHTML = findLabel(field).innerHTML.replace(
            " *",
            ""
          );
      }
      field.value = "No";
    } else {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.removeAttribute("not-filledup");
      field.value = "No";
      if (findLabel(field).innerHTML.includes(" *"))
        findLabel(field).innerHTML = findLabel(field).innerHTML.replace(" *", "");
    }
    field.shadowRoot.querySelector("select").onchange();
  }

}

function activateImpactSpeed(el) {
  if (el != null) {
    let con = findBlock(document.getElementById(el.id));
    let cons = findSubBlock(document.getElementById(el.id));
    let isChecked = document.getElementById("DeclByAppl_ClasOfWork20").checked;
    let isYes = document.getElementById("DeclByAppl_IsThisAmenPlan_Yes10")
      .checked;
    let buffUsed = cons.querySelector(
      "[prefix='GeneSpec_CompTypeTest_ReduStriBuffUsed']"
    );
    let component = cons.querySelector("[prefix='GeneSpec_CompTypeTest_Comp']")
      .value;
    let field = cons.querySelector(
      "[prefix='GeneSpec_CompTypeTest_MaxiImpaSpee']"
    );

    if (
      !buffUsed.hasAttribute("disabled") &&
      buffUsed.value == "No" &&
      component == "Buffer"
    ) {
      field.removeAttribute("disabled");
      field.removeAttribute("mandatory");
      field.setAttribute("mandatory", "");
      if (!findLabel(field).innerHTML.includes(" *"))
        findLabel(field).innerHTML += " *";
      if (isChecked || isYes) {
        field.removeAttribute("mandatory");
        if (findLabel(field).innerHTML.includes(" *"))
          findLabel(field).innerHTML = findLabel(field).innerHTML.replace(
            " *",
            ""
          );
      }
      field.value = "";
    } else {
      field.removeAttribute("mandatory");
      field.setAttribute("disabled", "");
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
      field.removeAttribute("data-valid");
      field.removeAttribute("data-valid-message");
      field.removeAttribute("not-filledup");
      field.value = "";
      if (findLabel(field).innerHTML.includes(" *"))
        findLabel(field).innerHTML = findLabel(field).innerHTML.replace(" *", "");
    }
  }
}

function updateIDs(container, isMain) {
  let count = 1;
  for (let a of container.children) {
    for (let b of a.querySelectorAll("[id]")) {
      let newID = null;
      if (b.hasAttribute("sub-form")) {
        if (isMain == "main") {
          let sub_suffix = b.id.slice(-2);
          newID = b.getAttribute("prefix") + count + "0_" + sub_suffix;
        } else {
          newID = b.id.slice(0, -2) + count + "0";
        }
      } else {
        newID = b.getAttribute("prefix") + count + "0";
        if (
          b.className.includes("fa-angle-down") ||
          b.className.includes("fa-angle-up")
        ) {
          newID = b.getAttribute("prefix") + count + "0";
          b.setAttribute("href", b.getAttribute("prefix") + count + "0");
        }
      }
      b.setAttribute("id", newID);
      jsonData[newID] = b.value;
    }

    if (a.querySelector("[details-quantity]") != null) {
      for (let quantity of a.querySelectorAll("[details-quantity]")) {
        let el = document.getElementById(quantity.id);
        let fee = quantity.getAttribute("fee");

        computeFees(el, fee);
      }
      if (a.querySelector("[details-quantity]").valueLabel != 0) {
        for (let dateBox of a.querySelectorAll("cn2-datefield")) {
          dateBox.removeAttribute("disabled");
        }
      }
    }

    for (let boxes of a.querySelectorAll("cn2-textbox, cn2-select")) {
      if (boxes.value.length != 0) {
        if (boxes.shadowRoot.querySelector("input") != null) {
          boxes.shadowRoot.querySelector("input").removeAttribute("required");
          //boxes.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-12 col-sm-12 col-md-12 col-lg-12")
        }
      }
    }

    if (a.querySelectorAll("[counter-form]").length > 0) {
      for (let b of a.querySelectorAll("[counter-form]")) {
        b.innerHTML = count;
      }
    }

    // for (let b of a.querySelectorAll("[ifZero]")) {
    //   if (b.hasAttribute("event-change")) {
    //     if (b.getAttribute("prefix") == "GeneSpec_CodeCompWith") {
    //       b.shadowRoot.querySelector("select").onchange();
    //     }
    //     else {
    //       typeDriveSys(document.getElementById(b.id), 'GeneSpec2_BaciLiftDeta2_DrivSyst')
    //     }
    //   }
    // }

    // for (let c of a.querySelectorAll("[classofworks]")) {
    //   if (c.hasAttribute("event-change")) {
    //     c.shadowRoot.querySelector("select").onchange();
    //   }
    // }

    count++;
  }

  if (isMain == "main") {
    for (let a of container.querySelectorAll("[con]")) {
      if (a.hasAttribute("newlyAdded")) {
        let count = a.childElementCount - 1;
        while (count != 0) {
          a.querySelector("[danger]")
            .shadowRoot.querySelector("button")
            .click();

          count--;
        }
        a.querySelector("[danger]").setAttribute("disabled", "");
        a.removeAttribute("newlyAdded");
      }
    }

    let a = [...container.children]
      .pop()
      .querySelector("[details-quantity]")
      .getAttribute("event-change")
      .replace(`activateWhenQuantity(this,`, "")
      .replace(`);`, "")
      .trim()
      .replace(/"/g, "")
      .replace(/'/g, "");
    activateWhenQuantity(
      [...container.children].pop().querySelector("[details-quantity]"),
      a
    );
  }

  if (isMain == "sub") {
    container.children.length === 1
      ? container
        .querySelector("cn2-button[danger]")
        .setAttribute("disabled", "")
      : [...container.querySelectorAll("cn2-button[danger]")].map((r) =>
        r.removeAttribute("disabled")
      );
  } else {
    container.children.length === 1
      ? container
        .querySelector("cn2-button[main-delete]")
        .setAttribute("disabled", "")
      : [...container.querySelectorAll("cn2-button[main-delete]")].map((r) =>
        r.removeAttribute("disabled")
      );
  }
}

function duplicateForm(el, container, isMain) {
  let isChecked = document.getElementById("DeclByAppl_ClasOfWork20").checked;
  let isChecked2 = document.getElementById("DeclByAppl_IsThisAmenPlan10")
    .checked;
  let con = null;
  if (isMain == "main") con = document.querySelector(`[con='${container}']`);
  else
    con = findBlock(document.getElementById(el.id)).querySelector(
      `[con='${container}']`
    );
  let lastChild = [...con.children].pop();
  let clone = [...con.children].pop().cloneNode(true);
  if (isMain == "main") {
    for (let a of clone.querySelectorAll("[con]")) {
      a.setAttribute("newlyAdded", "");
    }
  }

  if (clone.querySelector("[counter-form]")) {
    clone.querySelector("[counter-form]").innerHTML =
      parseInt(clone.querySelector("[counter-form]").innerHTML) + 1;
  }

  for (let a of clone.querySelectorAll("[id]")) {
    if (
      ["cn2-textbox", "cn2-textarea", "cn2-datefield", "cn2-select"].includes(
        a.tagName.toLowerCase()
      )
    ) {
      if (!a.hasAttribute("details-quantity")) {
        a.removeAttribute("mandatory");
        if (isMain == "main") {
          a.setAttribute("disabled", "");
          if (lastChild.querySelector("[ccw-field]")) {
            if (
              lastChild.querySelector("[ccw-field]").hasAttribute("mandatory")
            ) {
              clone.querySelector("[ccw-field]").removeAttribute("disabled");
              clone.querySelector("[ccw-field]").setAttribute("mandatory", "");
            }
          }
        } else {
          if (a.hasAttribute("ifZero")) {
            a.removeAttribute("disabled");
            a.setAttribute("mandatory", "");
          } else if (a.hasAttribute("classofworks")) {
            a.removeAttribute("disabled");
            if (!isChecked) a.setAttribute("mandatory", "");
          }
          // else if (a.hasAttribute("ifZeroEnable")) {
          //   a.removeAttribute("disabled");
          //   a.removeAttribute("mandatory");
          //   if (a.tagName == "CN2-DATEFIELD") {
          //     dateFutureTodayValidation(document.getElementById(a.id))
          //   } else {
          //     a.removeAttribute("data-invalid")
          //   }
          // }
          else if (a.hasAttribute("default-hidden")) {
            a.removeAttribute("disabled");
            a.removeAttribute("mandatory");
            a.setAttribute("hidden", "");
          }

          if (
            a.hasAttribute("liftid") ||
            a.hasAttribute("mcpsid") ||
            a.hasAttribute("escaid")
          ) {
            if (!isChecked && !isChecked2) {
              a.setAttribute("disabled", "");
              a.removeAttribute("mandatory");
            } else {
              a.removeAttribute("disabled");
              a.setAttribute("mandatory", "");
            }
          }
        }
      }

      if (
        lastChild.querySelector("[prefix='" + a.getAttribute("prefix") + "']")
          .value.length != 0
      ) {
        a.value = lastChild.querySelector(
          "[prefix='" + a.getAttribute("prefix") + "']"
        ).value;
        if (!a.hasAttribute("exclude")) {
          a.removeAttribute("disabled");
        }
      }

      for (let boxes of a.querySelectorAll("cn2-textbox, cn2-select")) {
        if (boxes.value.length != 0) {
          if (boxes.shadowRoot.querySelector("input") != null) {
            boxes.shadowRoot.querySelector("input").removeAttribute("required");
            //boxes.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-12 col-sm-12 col-md-12 col-lg-12")
          }
        }
      }

      if (a.hasAttribute("mandatory")) {
        if (
          ["cn2-textbox", "cn2-datefield"].includes(a.tagName.toLowerCase())
        ) {
          a.shadowRoot.querySelector("input").blur();
        } else if (a.tagName.toLowerCase() == "cn2-select") {
          if (
            a.getAttribute("prefix") != "SubmChec_CateAndNoLift2_CateOfLift"
          ) {
            a.shadowRoot.querySelector("select").blur();
          }
        }
      }
    }
  }

  con.appendChild(clone);
  updateIDs(con, isMain);
}

function deleteForm(el, container, isMain) {
  let con = null;
  if (isMain == "main") con = document.querySelector(`[con='${container}']`);
  else
    con = findBlock(document.getElementById(el.id)).querySelector(
      `[con='${container}']`
    );
  findSubBlock(document.getElementById(el.id)).remove();
  updateIDs(con, isMain);
}

function ifOthers(el, target) {
  let con = findBlock(document.getElementById(el.id));
  let e = con.querySelector("[prefix='" + target + "']");
  if (el.value == "Others") {
    e.removeAttribute("hidden");
    e.removeAttribute("disabled");
    e.removeAttribute("mandatory");
    e.value = "";
    e.setAttribute("mandatory", "");
  } else {
    e.removeAttribute("hidden");
    e.removeAttribute("disabled");
    e.removeAttribute("mandatory");
    e.value = "";
    e.setAttribute("hidden", "");
  }
}

function feeComputationPage() {
  let con = document.getElementById("page6");
  if (
    !document.querySelector(`[target="page4"]`).hasAttribute("hidden") &&
    [
      document.getElementById("DeclByAppl_ClasOfWork10").checked,
      document.getElementById("DeclByAppl_ClasOfWork20").checked,
      document.getElementById("DeclByAppl_Add10").checked,
    ].some((r) => r === true)
  ) {
    // if (con.hasAttribute("hidden")) {
    //   con.removeAttribute("hidden");
    //   document.querySelector(`[target="page6"]`).removeAttribute("hidden");
    // }
    let amendment = document
      .getElementById("DeclByAppl_Add10")
      .hasAttribute("disabled")
      ? false
      : true;
    let newInstallation = document.getElementById("DeclByAppl_ClasOfWork10")
      .checked;
    let majorAlteWorks = document.getElementById("DeclByAppl_ClasOfWork20")
      .checked;

    if (
      newInstallation == true &&
      majorAlteWorks == false &&
      amendment == false
    ) {
      con.querySelector("[new-no]").removeAttribute("hidden");
      con.querySelector("[major-no]").setAttribute("hidden", "");
      con.querySelector("[yes]").setAttribute("hidden", "");
    } else if (
      newInstallation == false &&
      majorAlteWorks == true &&
      amendment == false
    ) {
      con.querySelector("[major-no]").removeAttribute("hidden");
      con.querySelector("[new-no]").setAttribute("hidden", "");
      con.querySelector("[yes]").setAttribute("hidden", "");
    } else if (amendment == true) {
      con.querySelector("[new-no]").setAttribute("hidden", "");
      con.querySelector("[major-no]").setAttribute("hidden", "");
      con.querySelector("[yes]").removeAttribute("hidden");
    } else {
      con.querySelector("[new-no]").setAttribute("hidden", "");
      con.querySelector("[major-no]").setAttribute("hidden", "");
      con.querySelector("[yes]").setAttribute("hidden", "");
    }

    let compute = setTimeout(() => {
      let compFees = [
        document.getElementById("CompFees10"),
        document.getElementById("CompFees20"),
        document.getElementById("CompFees30"),
        document.getElementById("CompFees40"),
        document.getElementById("CompFees50"),
        document.getElementById("CompFees60"),
        document.getElementById("CompFees15"),
        document.getElementById("CompFees18"),
        document.getElementById("CompFees25"),
        document.getElementById("CompFees28"),
      ].filter((i) => i);

      for (c of compFees) {
        if (c.value) {
          c.value = "0.00";
        }
      }

      clearTimeout(compute);
    }, 1000);
  }
}

function computeFees(el, fee) {
  let div = document.getElementById("page6");
  let con = document.getElementById(el.id).parentNode.parentNode.parentNode
    .parentNode.parentNode.parentNode.parentNode.parentNode;
  let value = 0;
  for (let b of con.querySelectorAll(`[details-quantity]`)) {
    if (!isNaN(parseInt(b.valueLabel))) {
      value += parseInt(b.valueLabel);
    }
  }
  for (let a of div.querySelectorAll(`[${fee}]`)) {
    a.value = value;
    let field = findTR(a).lastElementChild.querySelector("cn2-textbox");
    field.value = parseInt(field.getAttribute(`${fee}-total`)) * value;
  }
}

function codeWithChange(el) {
  activateFields(
    document.getElementById("GeneSpec_CodeCompWith" + el.id.slice(-2)),
    "codeCompliance",
    ["GeneSpec_CodeCompWith_Othe"]
  );
}

function renderComputationPages() {
  //let page4 = ``;
  let page5 = `<div class="lift-page" hidden>
    <div class="mls-espo-right-inner-container borderchecking">
      <h2>Section VII Passenger/ Goods/ Service/ Car Lift Details</h2>
      <table class="table table-borderless mb-0">
        <tbody>
          <tr>
            <td class="pl-0">
              VII.3. Group of Lifts (sharing lift type, basic lift
              details, specifications and type testing certificates)
            </td>
          </tr>
          <tr>
            <td class="pl-0">
              <cn2-button label="Add" id="btnSubmChec_CateAndNoLift_Add10"
                event-click="duplicateForm(this, 'LiftDetails_Container', 'main');"></cn2-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div con="LiftDetails_Container" class="col-xs-12 col-sm-12 col-lg-12 col-md-12" style="padding-left: 0;">
        <div id="LiftDetails_Forms10" prefix="LiftDetails_Forms" suffix="0" style="margin-bottom: 0px;" form-div
          sub-con>
          <div id="LiftDetailsAccordion10" prefix="LiftDetailsAccordion" suffix="0">
            <h2 class="accordion-toggle">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="90%" class="align-top">
                      <br />
                      <b>Group&nbsp;<span counter-form>1</span> </b>
                    </td>
                    <td class="align-top">
                      <br />
                      <cn2-button label="Delete" id="btnSubmChec_CateAndNoLift_Dele10"
                        event-click="deleteForm(this, 'LiftDetails_Container', 'main');" main-delete
                        prefix="btnSubmChec_CateAndNoLift_Dele" suffix="0" danger disabled>
                      </cn2-button>
                    </td>
                    <td style="float: right;">
                      <span class="fa fa-angle-up collapsed" data-toggle="collapse"
                        href="#LiftDetailsFormChildAccordionBody10" id="#LiftDetailsFormChildAccordionBody10"
                        prefix="#LiftDetailsFormChildAccordionBody" suffix="0" child onclick="spanUpDown(this)"
                        aria-expanded="true" main-accordion-header style="margin-top: -10px !important;"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </h2>
            <div id="LiftDetailsFormChildAccordionBody10" class="panel-collapse collapse show" child="div"
              prefix="LiftDetailsFormChildAccordionBody" suffix="0" main-accordion-body>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="148px">
                      Quantity
                    </td>
                    <td width="25%" class="pl-0">
                      <cn2-select no-label id="SubmChec_CateAndNoLift_NoOfLift10" details-quantity
                        prefix="SubmChec_CateAndNoLift_NoOfLift" suffix="0" inline="10" fee="fee1"
                        event-change="activateWhenQuantity(this, 'fee1');otherSystTypeTest(this);otherCompTypeTest(this);hideCompTypeTest(this);totalPlanfee();"></cn2-select>
                    </td>
                    <td colspan="2"></td>
                  </tr>
                  <tr style="border-top: 1px solid black;">
                    <td colspan="4">
                      <cn2-button label="Add" id="btnSubmChec_AddSeriNumb10" disabled add-disabled
                        event-click="duplicateForm(this, 'FirstField_Container', 'sub');"
                        prefix="btnSubmChec_AddSeriNumb" suffix="0"></cn2-button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="pt-2 pl-0">
                      <div class="p-0 m-0" con="FirstField_Container">
                        <table class="table table-bordered mb-0" sub-con>
                          <tbody>
                            <tr>
                              <td width="150px">
                                Lift Number:
                              </td>
                              <td width="25%" class="pl-0">
                                <cn2-textbox no-label maxlength="20" disabled ifZero inline="10" manda
                                  id="SubmChec_CateAndNoLift_LiftNumb10_10" recent-value event-change="setSubmChec_CateAndNoLift_NoOfLiftHidden(this);"
                                  prefix="SubmChec_CateAndNoLift_LiftNumb" sub-form suffix="0"></cn2-textbox>
                                  <cn2-textbox no-label disabled hidden id="SubmChec_CateAndNoLift_NoOfLiftHide10" default-value="1"></cn2-textbox>
                              </td>
                              <td width="200px">
                                Accessibility Provision:
                              </td>
                              <td>
                                <cn2-select no-label options="Accessible Lift:Accessible Lift,No:No" disabled
                                  ifZero manda inline="10" id="SubmChec_CateAndNoLift_AcceProv10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift_AcceProv" sub-form suffix="0">
                                </cn2-select>
                              </td>
                            </tr>
                            <tr>
                              <td width="150px">
                                Lift ID:
                               </td>
                              <td width="25%" class="pl-0">
                               <cn2-textbox no-label maxlength="20" disabled inline="10" liftid
                                id="SubmChec_CateAndNoLift_LiftID10_10" recent-value onkeydown="firstCharIsL(event, this.value);"
                                prefix="SubmChec_CateAndNoLift_LiftID" sub-form suffix="0"></cn2-textbox>
                              </td>
                              <td>
                                Fire Safety Provision:
                              </td>
                              <td>
                                <cn2-select no-label
                                  options="Fire Lift:Fire Lift,Evacuation Lift:Evacuation Lift,No:No" disabled
                                  ifZero manda inline="10" id="SubmChec_CateAndNoLift_FireSafeProv10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift_FireSafeProv" sub-form suffix="0">
                                </cn2-select>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Travel Height:
                              </td>
                              <td class="pl-0">
                                <div class="row m-0 p-0">
                                  <div class="col-10 m-0 p-0">
                                    <cn2-textbox no-label maxlength="8" ifZero manda inline="12" disabled
                                      onkeypress="return withOnlyDecimal(this, event, 1)" recent-value
                                      onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9"
                                      id="SubmChec_CateAndNoLift_Trav10_10" prefix="SubmChec_CateAndNoLift_Trav"
                                      sub-form suffix="0">
                                    </cn2-textbox>
                                  </div>
                                  <div class="col-2 m-0 p-0 pt-1 text-center">
                                    m
                                  </div>
                                </div>                             
                              </td>
                              <td>
                                Maximum Blind Hoistway Height:
                              </td>
                              <td>
                                <div class="row m-0 p-0">
                                  <div class="col-10 m-0 p-0">
                                    <cn2-textbox no-label maxlength="8" ifZero manda inline="12" disabled
                                      onkeypress="return withOnlyDecimal(this, event, 1)" recent-value
                                      onblur="removeDecimalPoint(this, 'range');" range="0-9999.9"
                                      id="SubmChec_CateAndNoLift_MaxiBlinHoisHeig10_10"
                                      prefix="SubmChec_CateAndNoLift_MaxiBlinHoisHeig" sub-form suffix="0">
                                    </cn2-textbox>
                                  </div>
                                  <div class="col-2 m-0 p-0 pt-1 text-center">
                                    m
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="pb-4">
                                Number of Stops Served:
                              </td>
                              <td class="pb-4 pl-0">
                                <cn2-textbox no-label maxlength="3" numeric ifZero manda inline="10" disabled
                                  id="SubmChec_CateAndNoLift_NumbOfStopServ10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift_NumbOfStopServ" sub-form suffix="0"
                                  event-blur="rangeValue(this, 'range', '1-300');">
                                </cn2-textbox>
                              </td>
                              <td class="pb-4"></td>
                              <td class="text-right pb-4">
                                <cn2-button danger label="Delete" id="btnSubmChec_DeleSeriNumb10_10" sub-form
                                  event-click="deleteForm(this, 'FirstField_Container', 'sub');" disabled
                                  prefix="btnSubmChec_DeleSeriNumb" suffix="0" style="margin-right: 42px;">
                                </cn2-button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table class="table table-borderless"
                        style="border-top: 1px solid black;border-bottom: 1px solid black;">
                        <tbody>
                          <tr>
                            <td colspan="4">
                              <u>Basic Lift Details</u>
                            </td>
                          </tr>
                          <tr>
                            <td width="150px">
                              Brand Name:
                            </td>
                            <td width="25%" class="pl-0">
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="GeneSpec_BaciLiftDeta_BranName10" prefix="GeneSpec_BaciLiftDeta_BranName"
                                suffix="0"></cn2-textbox>
                            </td>
                            <td width="200px">
                              Model Number:
                            </td>
                            <td>
                              <cn2-textbox no-label disabled ifZero manda maxlength="20" inline="10"
                                id="GeneSpec_ModeNumb10" prefix="GeneSpec_ModeNumb" suffix="0"></cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Lift Type:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled ifZero manda inline="10" 
                                options="Passenger Lift:Passenger Lift,Goods Lift:Goods Lift,Service Lift:Service Lift,Car Lift:Car Lift"
                                id="SubmChec_CateAndNoLift_CateOfLift10"
                                prefix="SubmChec_CateAndNoLift_CateOfLift" suffix="0"
                                event-change="disableMaxPassCapa(this);">
                              </cn2-select>
                            </td>
                            <td>
                              Type of Drive System:
                            </td>
                            <td>
                              <cn2-select no-label disabled ifZero manda typeDrive inline="10"
                                event-change="hideFields(this);activateFields(this, 'driveSystem', ['GeneSpec_MachBrakType', 'GeneSpec_TracMachMode', 'GeneSpec_MachBrakMode'], ['GeneSpec_HydrPumpMode', 'GeneSpec_HydrContValvMode'], ['GeneSpec_RopeBeltNumb', 'GeneSpec_SuspRopeBeltConf1', 'GeneSpec_RopeBeltSize','GeneSpec_SuspRopeBeltConf2', 'GeneSpec_RopeBeltBreaStre', 'GeneSpec_SuspRopeBeltConf3', 'GeneSpec_SheaPullDiam']);"
                                options="Traction:Traction,Hydraulic (Direct):Hydraulic (Direct),Hydraulic (Indirect):Hydraulic (Indirect)"
                                id="GeneSpec_BaciLiftDeta_DrivSyst10" prefix="GeneSpec_BaciLiftDeta_DrivSyst"
                                suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr id="GeneSpec_BasicLiftDeta_ID30" row3>
                            <td>
                              Machine Room/ <br />
                              Machine Room Less:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled BaciLiftDeta ifZero IfMajoAlteWork inline="10" 
                                options="Machine Room:Machine Room,Machine Room Less:Machine Room Less"
                                id="GeneSpec_BaciLiftDeta_MachRoom10" prefix="GeneSpec_BaciLiftDeta_MachRoom" traction
                                suffix="0">
                              </cn2-select>
                            </td>
                            <td>
                              Geared/ Gearless:
                            </td>
                            <td>
                              <cn2-select no-label disabled ifZero inline="10" BaciLiftDeta IfMajoAlteWork traction
                                options="Geared:Geared,Gearless:Gearless" id="GeneSpec_BaciLiftDeta_Gear10"
                                prefix="GeneSpec_BaciLiftDeta_Gear" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr id="GeneSpec_BasicLiftDeta_ID10" row1>
                            <td>
                             Number of <br />
                             Cylinder(s):
                            </td>
                            <td class="pl-0">
                            <cn2-textbox no-label disabled ifZero IfMajoAlteWork inline="10" BaciLiftDeta hydraulic
                              id="GeneSpec_BaciLiftDeta_NumbOfCyli10" prefix="GeneSpec_BaciLiftDeta_NumbOfCyli"
                              suffix="0" onblur="rangeValue(this, 'range', '0-9');">
                            </cn2-textbox>
                            </td>
                            <td>
                             Telescopic <br/>
                             Piston
                            </td>
                            <td>
                             <cn2-select no-label disabled ifZero IfMajoAlteWork inline="10" BaciLiftDeta hydraulic
                             options="Yes:Yes,No:No" id="GeneSpec_BaciLiftDeta_TelePist10"
                             prefix="GeneSpec_BaciLiftDeta_TelePist" suffix="0">
                             </cn2-select>
                            </td>
                          </tr>
                          <tr id="GeneSpec_BasicLiftDeta_ID20" row2>
                            <td>
                              Cantilevered
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled ifZero IfMajoAlteWork inline="10" BaciLiftDeta hydraulic
                               options="Yes:Yes,No:No" id="GeneSpec_BaciLiftDeta_Cant10"
                               prefix="GeneSpec_BaciLiftDeta_Cant" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Code Compliance (For major alteration
                                works, this refers to the part being
                                modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Code compliance with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="GeneSpec_CodeCompWith10"
                                prefix="GeneSpec_CodeCompWith" suffix="0" default-value=""
                                options="SS 550ː2009:SS 550ː2009,Alternative Standard:Alternative Standard"
                                event-change="activateFields(this, 'codeCompliance', ['GeneSpec_CodeCompWith_Othe']);">
                              </cn2-select>
                            </td>
                            <td>
                              <cn2-textbox no-label disabled inline="10" maxlength="18" ccw-field
                                id="GeneSpec_CodeCompWith_Othe10" prefix="GeneSpec_CodeCompWith_Othe"
                                suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              (code) with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="GeneSpec_With10" prefix="GeneSpec_With"
                                suffix="0" default-value="" event-change = "codeWithChange(this)"
                                options="No deviation from code:No deviation from code,Alternative Solution:Alternative Solution,Waiver:Waiver,Modification:Modification">
                              </cn2-select>
                            </td>
                            <td>
                              (deviation)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <span style="font-size: 0.7rem;">(Note: For any selection with
                                “Alternative Standards” and/or
                                “Alternative
                                Solution”/”Waiver”/”Modification”, the
                                respective alternative
                                solution/waiver/modification form has
                                to submitted)</span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Specifications (For major alteration
                                works, please fill in for the parts
                                being modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Max Passenger Capacity:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="10"   
                                    onblur="rangeValue(this, 'range', '1-300');minOfClearPlatformArea(this);maxPassCapaNote();"
                                    disabled id="GeneSpec_MaxPassCapa10" prefix="GeneSpec_MaxPassCapa" suffix="0">
                                  </cn2-textbox><span hidden id="MaxPassCapaNote10" prefix ="MaxPassCapaNote" suffix="0" style="color: #ce0000; font-size: 80%;">Note: Max passenger capacity exceeded the allowable value compared to the rated load</span>
                                </div>
                              </div>
                            </td>
                            <td>Rated Load:</td>
                            <td>
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); maxOfClearPlatformArea(this);computeSafetyFactor(this);maxPassCapaNote();"
                                    range="0.1-9999.9" disabled id="GeneSpec_RateLoad10" prefix="GeneSpec_RateLoad"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  kg
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Car Size</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Depth:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="12" onkeypress="return withOnlyDecimal(this, event, 1)"
                                  onblur="removeDecimalPoint(this, 'range');computeCarPlatformArea(this, 'GeneSpec_CarSize_Dept', 'GeneSpec_CarSize_Widt', 'GeneSpec_CarSize_CarPlatArea');"
                                  range="0.1-9999.9" disabled id="GeneSpec_CarSize_Dept10" prefix="GeneSpec_CarSize_Dept" suffix="0">
                                   </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>
                            </td>
                            <td>Car Mass:</td>
                            <td>
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeSafetyFactor(this);"
                                    range="0.1-9999.9" disabled id="GeneSpec_CarMass10" prefix="GeneSpec_CarMass"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  kg
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td>Width:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');computeCarPlatformArea(this, 'GeneSpec_CarSize_Dept', 'GeneSpec_CarSize_Widt', 'GeneSpec_CarSize_CarPlatArea');"
                                    range="0.1-9999.9" disabled id="GeneSpec_CarSize_Widt10"
                                    prefix="GeneSpec_CarSize_Widt" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2">
                              <span style="font-size: 0.7rem;">
                                Note: The car mass here should include
                                all components installed on the car
                                (not including interior finishing)
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Height:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpec_CarSize_Heig10" prefix="GeneSpec_CarSize_Heig" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>Clear platform area:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label inline="12" id="GeneSpec_CarPLatArea10" exclude compute checked
                                    prefix="GeneSpec_CarPLatArea" suffix="0" disabled maxlength="12" onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range')"  range="0.1-9999.9"> 
                                  </cn2-textbox><span hidden spanNoteError id ="CarPLatAreaNote10" prefix = "CarPLatAreaNote" suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  m<sup>2</sup>
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>Max. Allowable Décor Weight:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeSafetyFactor(this);"
                                    range="0.1-9999.9" disabled id="GeneSpec_MaxAlloDecoWeig10"
                                    prefix="GeneSpec_MaxAlloDecoWeig" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                kg
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-bottom: 1px solid black;">
                              <span style="font-size: 0.7rem;">
                                (based on manufacturer’s
                                recommendations)
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Counterweight Runby:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeCarTopClea(this, 'GeneSpec_CounWeigRunb', 'GeneSpec_RateSpee', 'GeneSpec_BuffStro', 'GeneSpec_CarTopCleaRequ');"
                                    range="0.1-9999.9" disabled id="GeneSpec_CounWeigRunb10"
                                    prefix="GeneSpec_CounWeigRunb" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td>
                              Rated Speed (Highest <br />
                              Speed):
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="8"
                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                    onblur="removeDecimalPoint(this, 'range'); computeCarTopClea(this, 'GeneSpec_CounWeigRunb', 'GeneSpec_RateSpee', 'GeneSpec_BuffStro', 'GeneSpec_CarTopCleaRequ');"
                                    range="0.1-9999.9" disabled id="GeneSpec_RateSpee10" prefix="GeneSpec_RateSpee"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  m/s
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr buffstro>
                            <td>Buffer Stroke:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeCarTopClea(this, 'GeneSpec_CounWeigRunb', 'GeneSpec_RateSpee', 'GeneSpec_BuffStro', 'GeneSpec_CarTopCleaRequ');"
                                    range="0.1-9999.9" disabled id="GeneSpec_BuffStro10" prefix="GeneSpec_BuffStro"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr cartopclea>
                            <td>Car Top Clearance Required:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label inline="12" disabled id="GeneSpec_CarTopCleaRequ10" exclude compute
                                    prefix="GeneSpec_CarTopCleaRequ" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr cartopnote>
                            <td colspan="4">
                              <span style="font-size: 0.7rem;">
                                Note: This value is not applicable if
                                reduced stroke buffer is used. <br/>
                                This field provides a general rule of thumb 
                                for the required value from car ceiling to 
                                lowest pt of shaft ceiling (considering 
                                balustrade ht of at least 1100mm, distance
                                required from balustrade to lowest point of 
                                shaft ceiling of at least 300mm, as well as 
                                highest position of the car. The actual car 
                                top clearance has to be verified and declared 
                                to be code compliant by the SPE based on the design drawings. 
                              </span>
                            </td>
                          </tr>
                          <tr>
                          <td colspan="4" style="border-bottom: 1px solid black;">
                          </td>
                          </tr>
                          <tr>
                            <td>
                              Controller <br />
                              Model:
                            </td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="1024" disabled
                                id="GeneSpec_ContMode10" prefix="GeneSpec_ContMode" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Machine Brake Type:</td>
                            <td class="pl-0"> 
                              <cn2-select no-label inline="10" disabled id="GeneSpec_MachBrakType10" tractions
                                prefix="GeneSpec_MachBrakType" suffix="0"
                                options="Drum:Drum,Disc:Disc,Others:Others">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>Traction Machine Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label disabled inline="10" maxlength="1024" tractions
                                id="GeneSpec_TracMachMode10" prefix="GeneSpec_TracMachMode" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Machine Brake Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label disabled inline="10" maxlength="1024" tractions
                                id="GeneSpec_MachBrakMode10" prefix="GeneSpec_MachBrakMode" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Hydraulic Pump Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label disabled inline="10" maxlength="1024" direct
                                id="GeneSpec_HydrPumpMode10" prefix="GeneSpec_HydrPumpMode" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Hydraulic Control Valve Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label disabled inline="10" maxlength="1024" direct
                                id="GeneSpec_HydrContValvMode10" prefix="GeneSpec_HydrContValvMode" suffix="0">
                              </cn2-textbox>
                            </td> 
                          </tr>
                          <tr>
                            <td>Rope/ Belt Number:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label disabled inline="10" maxlength="1024" tractions indirect
                                event-blur="computeSafetyFactor(this);" id="GeneSpec_RopeBeltNumb10" numeric
                                prefix="GeneSpec_RopeBeltNumb" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>
                              Suspension Rope/ Belt Configurations:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label inline="10" options="1ː1:1ː1,2ː1:2ː1,3ː1:3ː1,4ː1:4ː1" event-change="computeSafetyFactor(this);" tractions indirect
                                disabled id="GeneSpec_SuspRopeBeltConf110" prefix="GeneSpec_SuspRopeBeltConf1"
                                suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>Rope/ Belt Size:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label disabled inline="12" maxlength="10" tractions indirect
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeSheaveToRope(this);"
                                    range="0.1-9999.9" id="GeneSpec_RopeBeltSize10" prefix="GeneSpec_RopeBeltSize"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td></td>
                            <td class="pl-0">
                              <cn2-select no-label inline="10"
                                options="Single Wrap:Single Wrap,Double Wrap:Double Wrap" disabled tractions indirect
                                id="GeneSpec_SuspRopeBeltConf210" prefix="GeneSpec_SuspRopeBeltConf2"
                                suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>Rope/Belt Breaking Strength:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label disabled inline="12" maxlength="10" tractions indirect
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range'); computeSafetyFactor(this);"
                                    range="0.1-9999.9" id="GeneSpec_RopeBeltBreaStre10"
                                    prefix="GeneSpec_RopeBeltBreaStre" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  kg
                                </div>
                              </div>                              
                            </td>
                            <td></td>
                            <td class="pl-0">
                              <cn2-select no-label inline="10"
                                options="Under Slung:Under Slung,Over Slung:Over Slung" disabled tractions indirect
                                id="GeneSpec_SuspRopeBeltConf310" prefix="GeneSpec_SuspRopeBeltConf3" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>Sheave/pulley diameter:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label disabled inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)" tractions indirect
                                    onblur="removeDecimalPoint(this, 'range'); computeSheaveToRope(this);"
                                    range="0.1-9999.9" id="GeneSpec_SheaPullDiam10" prefix="GeneSpec_SheaPullDiam"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td>Guide Rail Size</td>
                            <td class="pl-0">
                            <div class="row m-0 p-0">
                              <div class="col-10 m-0 p-0">
                                <cn2-textbox no-label ifZero classOfWorks IfMajoAlteWork WhenMajorAlte disabled inline="12" maxlength="10"
                                  onkeypress="return withOnlyDecimal(this, event, 1)"
                                  onblur="removeDecimalPoint(this, 'range'); computeSheaveToRope(this);"
                                  range="0.1-9999.9" id="GeneSpec_GuilRailSize10" prefix="GeneSpec_GuilRailSize"
                                  suffix="0">
                                </cn2-textbox>
                              </div>
                              <div class="col-2 m-0 p-0 pt-1 text-center">
                                mm
                              </div>
                            </div>                              
                          </td>
                          </tr>
                          <tr>
                            <td>Safety Factor:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label disabled inline="12" id="GeneSpec_SafeFact10" exclude compute checked
                                    prefix="GeneSpec_SafeFact" suffix="0">
                                  </cn2-textbox><span hidden spanNoteError id = "SafeFact10" prefix = "SafeFact" suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>Sheave/pulley to Rope/Belt ratio:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label disabled inline="12" id="GeneSpec_SheaPullRopeBeltRati10" exclude compute checked
                                    prefix="GeneSpec_SheaPullRopeBeltRati" suffix="0">
                                  </cn2-textbox><span hidden spanNoteError id = "SheaPullRopeBeltRati10" prefix = "SheaPullRopeBeltRati" suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>Car Door Operator Brand:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="1024" disabled
                                id="GeneSpec_CarDoorOperBran10" prefix="GeneSpec_CarDoorOperBran" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Car Door Operator Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="1024" disabled
                                id="GeneSpec_CarDoorOperMode10" prefix="GeneSpec_CarDoorOperMode" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Car Door Type:</td>
                            <td class="pl-0">
                              <cn2-select no-label classOfWorks inline="10" disabled id="GeneSpec_CarDoorType10"
                                prefix="GeneSpec_CarDoorType" suffix="0"
                                options="Centre Opening:Centre Opening,Side Opening Telescopic:Side Opening Telescopic,Bi-Parting:Bi-Parting,Sliding Up:Sliding Up">
                              </cn2-select>
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-bottom: 1px solid black;"></td>
                          </tr>
                          <tr>
                            <td>
                              Light Curtain/ <br />
                              Photocell Brand:
                            </td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="1024" disabled
                                id="GeneSpec_LighCurtPhotMake10" prefix="GeneSpec_LighCurtPhotMake" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>
                              Light Curtain/ <br />
                              Photocell Model:
                            </td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="1024" disabled
                                id="GeneSpec_LighCurtPhotMode10" prefix="GeneSpec_LighCurtPhotMode" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Mechanical Edge Provided:</td>
                            <td class="pl-0">
                              <cn2-select no-label classOfWorks inline="10" options="Yes:Yes,No:No" disabled
                                id="GeneSpec_MechEdgeProv10" prefix="GeneSpec_MechEdgeProv" suffix="0">
                              </cn2-select>
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td colspan="4" style="
                                  border-bottom: 1px solid black;
                                  border-top: 1px solid black;
                                ">
                              <h5 style="display: inline;">
                                Type Test Parameters
                              </h5>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <table class="table table-bordered mb-0 ml-2">
                                <tbody>
                                  <tr>
                                    <td colspan="2">
                                      <h5 style="display: inline;">
                                        System Type Test
                                      </h5>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="40%">
                                      Certificate Number:
                                    </td>
                                    <td>
                                      <cn2-textbox no-label classOfWorks maxlength="1000"
                                        id="GeneSpec_SystTypeTest_CertNumb10" inline="10"
                                        prefix="GeneSpec_SystTypeTest_CertNumb" suffix="0"></cn2-textbox>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Expiry Date of Cert:</td>
                                    <td>
                                      <cn2-datefield no-label ifZeroEnable disabled onfocusout="validateDate(this);dateEarlierTodayValidation(this)"
                                        event-change="setGeneSpec_SystTypeTest_ExpiDateOfCert_Hidden(this);" id="GeneSpec_SystTypeTest_ExpiDateOfCert10" inline="10"
                                        prefix="GeneSpec_SystTypeTest_ExpiDateOfCert" suffix="0">
                                      </cn2-datefield>
                                      <cn2-datefield no-label disabled hidden id="GeneSpec_SystTypeTest_ExpiDateOfCert_Hide10"></cn2-datefield>
                                    </td> 
                                  </tr>
                                  <tr>
                                    <td>Notified Body:</td>
                                    <td>
                                      <cn2-select no-label classOfWorks event-change="otherSystTypeTest(this)"
                                        id="GeneSpec_SystTypeTest_NotiBody10" inline="10"
                                        prefix="GeneSpec_SystTypeTest_NotiBody" suffix="0" 
                                        options="LIFTINSTITUUT/, B.V:LIFTINSTITUUT/, B.V,TUV SUD Industrie Service GmbH:TUV SUD Industrie Service GmbH,
                                                 Shenzhen Institute of Special Equipment/, SISE:Shenzhen Institute of Special Equipment/, SISE,                     
                                                 National Elevator Inspection and Testing Centre/, NETEC:National Elevator Inspection and Testing Centre/, NETEC,
                                                 Shanghai Jiaotong University Elevator Testing Centre/, SJUETC:Shanghai Jiaotong University Elevator Testing Centre/, SJUETC,
                                                 National Elevator Quality Supervision and Inspection Centre/, (Guang Dong):National Elevator Quality Supervision and Inspection Centre/, (Guang Dong),
                                                 Others:Others">
                                      </cn2-select>
                                    </td>
                                  </tr>
                                  <tr id="GeneSpec_SystTypeTest_OtheID" hidden class="hideWhenQuantityZero">
                                    <td id="otherManda">Others:</td>
                                    <td>
                                       <cn2-textbox no-label inline="10" 
                                         id="GeneSpec_SystTypeTest_Othe10"  maxlength="1000" suffix="0" 
                                         prefix="GeneSpec_SystTypeTest_Othe">
                                       </cn2-textbox>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Permissible Mass:</td>
                                    <td>
                                      <div class="row m-0 p-0">
                                        <div class="col-10 m-0 p-0">
                                          <cn2-textbox no-label classOfWorks maxlength="8"
                                            onkeypress="return withOnlyDecimal(this, event, 1)"
                                            onblur="removeDecimalPoint(this, 'range'); notEnoughSyst(this, 'permiMass');" range="0.1-9999.9"
                                            id="GeneSpec_SystTypeTest_PermMass10_10" inline="12"
                                            prefix="GeneSpec_SystTypeTest_PermMass" sub-form suffix="0">
                                          </cn2-textbox><span hidden spanNoteError id = "SystTypeTest_PermMass10_10" prefix = "SystTypeTest_PermMass" sub-form suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                        </div>
                                        <div class="col-2 m-0 p-0 pt-1 text-center">
                                          kg
                                        </div>
                                      </div>                                      
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" style="
                                          border-top: 1px solid black;
                                        ">
                                      <h5 style="display: inline;">
                                        Component Type Test
                                      </h5>
                                      &nbsp;
                                      <cn2-button label="Add" id="btnGeneSpec_CompTypeTest_Add10" disabled
                                        add-disabled
                                        event-click="duplicateForm(this, 'Component_Container', 'sub');"
                                        prefix="btnGeneSpec_CompTypeTest_Add" suffix="0"></cn2-button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" con="Component_Container" style="
                                          border-top: 1px solid black;
                                          border-bottom: 1px solid black;
                                        ">
                                      <table class="table table-borderless mb-0" sub-con>
                                        <tbody>
                                          <tr>
                                            <td class="pl-0" width="40%">
                                              Component:
                                            </td>
                                            <td>
                                              <cn2-select no-label classOfWorks
                                                event-change="otherCompTypeTest(this);componentChanges(this);hideCompTypeTest(this);hideFieldsNotiBody(this);"
                                                options="PESSRAL:PESSRAL,UCMP:UCMP,ACOP:ACOP,Landing Door Locking Device:Landing Door Locking Device,Car Door Locking Device:Car Door Locking Device,Safety Gear:Safety Gear,Overspeed Governor:Overspeed Governor,Buffer:Buffer,Rupture Valve/One-Way Restrictor:Rupture Valve/One-Way Restrictor"
                                                id="GeneSpec_CompTypeTest_Comp10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_Comp" sub-form suffix="0">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Component OEM:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpec_CompTypeTest_CompOfOEM10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_CompOfOEM" sub-form suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Country of <br> Manufacture:
                                            </td>
                                            <td>
                                              <cn2-select no-label classOfWorks
                                                id="GeneSpec_CompTypeTest_CounOfManu10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_CounOfManu" sub-form suffix="0"
                                                options="Afghanistan:Afghanistan,Albania:Albania,Algeria:Algeria,American Samoa:American Samoa,
                                                         Andorra:Andorra,Anguilla:Anguilla,Antartica:Antartica,Antigua and Barbuda:Antigua and Barbuda,Argentina:Argentina,
                                                         Armenia:Armenia,Aruba:Aruba,Australia:Australia,Austria:Austria,Azerbaijan:Azerbaijan,
                                                         Bahamas:Bahamas,Bahrain:Bahrain,Bangladesh:Bangladesh,Barbados:Barbados,Belarus:Belarus,
                                                         Belgium:Belgium,Belize:Belize,Benin:Benin,Bermuda:Bermuda,Bhutan:Bhutan,Bolivia:Bolivia,
                                                         Bosnia and Herzegovina:Bosnia and Herzegovina,Botswana:Botswana,Bouvet Island:Bouvet Island,Brazil:Brazil,
                                                         British Indian Ocean Territory:British Indian Ocean Territory,Brunei Darussalam:Brunei Darussalam,
                                                         Bulgaria:Bulgaria,Burkina Faso:Burkina Faso,Burundi:Burundi,Cambodia:Cambodia,Cameroon:Cameroon,
                                                         Canada:Canada,Cape Verde:Cape Verde,Cayman Islands:Cayman Islands,Central African Republic:Central African Republic,
                                                         Chad:Chad,Chile:Chile,China:China,Christmas Island:Christmas Island,Cocos (Keeling) Islands:Cocos (Keeling) Islands,
                                                         Colombia:Colombia,Comoros:Comoros,Congo:Congo,Cook Islands:Cook Islands,Costa Rica:Costa Rica,Cote D'ivoire:Cote D'ivoire,
                                                         Croatia:Croatia,Cuba:Cuba,Cyprus:Cyprus,Czech Republic:Czech Republic,Denmark:Denmark, Djibouti:Djibouti, Dominica:Dominica,
                                                         Dominican Republic:Dominican Republic,Ecuador:Ecuador,Egypt:Egypt,El Salvador:El Salvador,Equatorial Guinea:Equatorial Guinea,
                                                         Eritrea:Eritrea,Estonia:Estonia,Ethiopia:Ethiopia,Falkland Islands (Malvinas):Falkland Islands (Malvinas),
                                                         Faroe Islands:Faroe Islands,Fiji:Fiji,Finland:Finland,France:France,French Guiana:French Guiana,
                                                         French Polynesia:French Polynesia,French Southern Territories:French Southern Territories,
                                                         Gabon:Gabon,Gambia:Gambia,Georgia:Georgia,Germany:Germany,Ghana:Ghana,Gibraltar:Gibraltar,
                                                         Greece:Greece,Greenland:Greenland,Grenada:Grenada,Guadeloupe:Guadeloupe,Guam:Guam,Guatemala:Guatemala,
                                                         Guernsey:Guernsey,Guinea:Guinea,Guinea-bissau:Guinea-bissau,Guyana:Guyana,Haiti:Haiti,
                                                         Heard Island and Mcdonald Islands:Heard Island and Mcdonald Islands,Holy See (Vatican City State):Holy See (Vatican City State),
                                                         Honduras:Honduras,Hong Kong:Hong Kong,Hungary:Hungary,Iceland:Iceland,India:India,Indonesia:Indonesia,
                                                         Iran:Iran,Iraq:Iraq,Ireland:Ireland,Isle of Man:Isle of Man,Israel:Israel,Italy:Italy,Jamaica:Jamaica,
                                                         Japan:Japan,Jersey:Jersey,Jordan:Jordan,Kazakhstan:Kazakhstan,Kenya:Kenya,Kiribati:Kiribati,
                                                         Democratic People's Republic of Korea:Democratic People's Republic of Korea,Republic of Korea:Republic of Korea,
                                                         Kuwait:Kuwait,Kyrgyzstan:Kyrgyzstan,Lao People's Democratic Republic:Lao People's Democratic Republic,
                                                         Latvia:Latvia,Lebanon:Lebanon,Lesotho:Lesotho,Liberia:Liberia,Libyan Arab Jamahiriya:Libyan Arab Jamahiriya,
                                                         Liechtenstein:Liechtenstein,Lithuania:Lithuania,Luxembourg:Luxembourg,Macao:Macao,
                                                         The Former Yugoslav Republic of Macedonia:The Former Yugoslav Republic of Macedonia,Madagascar:Madagascar,
                                                         Malawi:Malawi,Malaysia:Malaysia,Maldives:Maldives,Mali:Mali,Malta:Malta,Marshall Islands:Marshall Islands,
                                                         Martinique:Martinique,Mauritania:Mauritania,Mauritius:Mauritius,Mayotte:Mayotte,Mexico:Mexico,
                                                         Federated States of Micronesia:Federated States of Micronesia,Republic of Moldova:Republic of Moldova
                                                         Monaco:Monaco,Mongolia:Mongolia,Montenegro:Montenegro,Montserrat:Montserrat,Morocco:Morocco,
                                                         Mozambique:Mozambique,Myanmar:Myanmar,Namibia:Namibia,Nauru:Nauru,Nepal:Nepal,Netherlands:Netherlands,
                                                         Netherlands Antilles:Netherlands Antilles,New Caledonia:New Caledonia,New Zealand:New Zealand,
                                                         Nicaragua:Nicaragua,Niger:Niger,Nigeria:Nigeria,Niue:Niue,Norfolk Island:Norfolk Island,
                                                         Northern Mariana Islands:Northern Mariana Islands,Norway:Norway,Oman:Oman,Pakistan:Pakistan,
                                                         Palau:Palau,Palestinian Territory:Palestinian Territory,Panama:Panama,
                                                         Papua New Guinea:Papua New Guinea,Paraguay:Paraguay,Peru:Peru,Philippines:Philippines,
                                                         Pitcairn:Pitcairn,Poland:Poland,Portugal:Portugal,Puerto Rico:Puerto Rico,Qatar:Qatar,
                                                         Reunion:Reunion,Romania:Romania,Russian Federation:Russian Federation,Rwanda:Rwanda,
                                                         Saint Helena:Saint Helena,Saint Kitts and Nevis:Saint Kitts and Nevis,Saint Lucia:Saint Lucia,
                                                         Saint Pierre and Miquelon:Saint Pierre and Miquelon,Saint Vincent and The Grenadines:Saint Vincent and The Grenadines,
                                                         Samoa:Samoa,San Marino:San Marino,Sao Tome and Principe:Sao Tome and Principe,Saudi Arabia:Saudi Arabia,
                                                         Senegal:Senegal,Serbia:Serbia,Seychelles:Seychelles,Sierra Leone:Sierra Leone,Singapore:Singapore,Slovakia:Slovakia,
                                                         Slovenia:Slovenia,Solomon Islands:Solomon Islands,Somalia:Somalia,South Africa:South Africa,
                                                         South Georgia and The South Sandwich Islands:South Georgia and The South Sandwich Islands,Spain:Spain,
                                                         Sri Lanka:Sri Lanka,Sudan:Sudan,Suriname:Suriname,Svalbard and Jan Mayen:Svalbard and Jan Mayen,
                                                         Swaziland:Swaziland,Sweden:Sweden,Switzerland:Switzerland,Syrian Arab Republic:Syrian Arab Republic,
                                                         Taiwan:Taiwan,Tajikistan:Tajikistan,United Republic of Tanzania:United Republic of Tanzania,Thailand:Thailand,
                                                         Timor-leste:Timor-leste,Togo:Togo,Tokelau:Tokelau,Tonga:Tonga,Trinidad and Tobago:Trinidad and Tobago,Tunisia:Tunisia,
                                                         Turkey:Turkey,Turkmenistan:Turkmenistan,Turks and Caicos Islands:Turks and Caicos Islands,Tuvalu:Tuvalu,Uganda:Uganda,
                                                         Ukraine:Ukraine,United Arab Emirates:United Arab Emirates,United Kingdom:United Kingdom,United States:United States,
                                                         United States Minor Outlying Islands:United States Minor Outlying Islands,Uruguay:Uruguay,Uzbekistan:Uzbekistan,
                                                         Vanuatu:Vanuatu,Venezuela:Venezuela,Vietnam:Vietnam,British Virgin Islands:British Virgin Islands,
                                                         U.S. Virgin Islands:U.S. Virgin Islands,Wallis and Futuna:Wallis and Futuna,Western Sahara:Western Sahara,
                                                         Yemen:Yemen,Zambia:Zambia,Zimbabwe:Zimbabwe">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Component Model No.
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpec_CompTypeTest_CompModeNo10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_CompModeNo" sub-form suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Certificate Number:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpec_CompTypeTest_CertNo10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_CertNo" sub-form suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Expiry Date of Cert:
                                            </td>
                                            <td>
                                              <cn2-datefield no-label ifZeroEnable inline="10" disabled
                                                id="GeneSpec_CompTypeTest_ExpiDateOfCert10_10" onfocusout="validateDate(this);dateEarlierTodayValidation(this)"
                                                prefix="GeneSpec_CompTypeTest_ExpiDateOfCert" sub-form
                                                suffix="0">
                                              </cn2-datefield>
                                              <cn2-datefield no-label disabled hidden id="GeneSpec_CompTypeTest_ExpiDateOfCert_Hide10_10"></cn2-datefield>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Notified Body:
                                            </td>
                                            <td hidden id="CompTypeTest_NotiBody10">
                                              <cn2-select no-label event-change="otherCompTypeTest(this);"
                                                id="GeneSpec_CompTypeTest_NotiBody10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_NotiBody" sub-form suffix="0"
                                                options="'BULGARKONTROLA' S.A. - Conformity Assessment Directorate:'BULGARKONTROLA' S.A. - Conformity Assessment Directorate,'NB LIFTCONTROL' Ltd.:'NB LIFTCONTROL' Ltd.,A1 Belgelendirme ve Muayene Hizmetleri Limited Şirketi:A1 Belgelendirme ve Muayene Hizmetleri Limited Şirketi,
                                                A2C CONTROLE:A2C CONTROLE,AB SALWENS INGENJÖRSBYRÅ:AB SALWENS INGENJÖRSBYRÅ,ABOMA B.V.:ABOMA B.V.,AENOR INTERNACIONAL/, S.A. (Unipersonal):AENOR INTERNACIONAL/, S.A. (Unipersonal),
                                                AGENZIA EUROPEA PER LA SICUREZZA S.R.L.:AGENZIA EUROPEA PER LA SICUREZZA S.R.L.,AISA S.R.L.:AISA S.R.L.,ALFA ATEST d.o.o.:ALFA ATEST d.o.o.,ANCCP Certification Agency Srl:ANCCP Certification Agency Srl,AND Uluslararası Denetim ve Gözetim Hizmetleri Ticaret Limited Şirketi:AND Uluslararası Denetim ve Gözetim Hizmetleri Ticaret Limited Şirketi,
                                                APAVE:APAVE,APAVE ITALIA CPM SRL:APAVE ITALIA CPM SRL,APPLUS NORCONTROL/, S.L.U.:APPLUS NORCONTROL/, S.L.U.,AS Inspecta Latvia:AS Inspecta Latvia,ASC Nederland B.V.:ASC Nederland B.V.,ASSOCIAÇÃO PORTUGUESA DE CERTIFICAÇÃO:ASSOCIAÇÃO PORTUGUESA DE CERTIFICAÇÃO,AUTOMATOS Srl:AUTOMATOS Srl,
                                                Alberk QA Uluslararası Teknik Kontrol ve Belgelendirme Anonim Şirketi:Alberk QA Uluslararası Teknik Kontrol ve Belgelendirme Anonim Şirketi,Algemene certificaten voor elektriciteit en gas:Algemene certificaten voor elektriciteit en gas,Aliment Mühendislik Uluslar Arası Belgelendirme Gözetim ve Eğitim Hizmetleri Ticaret Limited Şirketi:Aliment Mühendislik Uluslar Arası Belgelendirme Gözetim ve Eğitim Hizmetleri Ticaret Limited Şirketi,
                                                Ardem Belgelendirme Muayene ve Gözetim Hizmetleri Ticaret Limited Şirketi:Ardem Belgelendirme Muayene ve Gözetim Hizmetleri Ticaret Limited Şirketi,Artıbel Belgelendirme Teknik Kontrol Gözetim ve Eğitim Hizmetleri Limited Şirketi:Artıbel Belgelendirme Teknik Kontrol Gözetim ve Eğitim Hizmetleri Limited Şirketi,BOREAS SRL:BOREAS SRL,BRITISH ENGINEERING SERVICES LTD:BRITISH ENGINEERING SERVICES LTD,
                                                BSI Assurance UK Ltd:	BSI Assurance UK Ltd,BSI á Íslandi ehf.:BSI á Íslandi ehf.,BUREAU ALPES CONTROLES SA:BUREAU ALPES CONTROLES SA,BUREAU VERITAS HELLAS S.A.:BUREAU VERITAS HELLAS S.A.,BUREAU VERITAS IBERIA/, S.L.:BUREAU VERITAS IBERIA/, S.L.,BUREAU VERITAS INSPECCION Y TESTING/, S.L. UNIPERSONAL:BUREAU VERITAS INSPECCION Y TESTING/, S.L. UNIPERSONAL,BUREAU VERITAS ITALIA S.P.A.:BUREAU VERITAS ITALIA S.P.A.,
                                                BUREAU VERITAS UK LIMITED:BUREAU VERITAS UK LIMITED,BUREAU VOOR TECHNISCHE INSPECTIES/, VERENIGING ZONDER WINSTOOGMERK:BUREAU VOOR TECHNISCHE INSPECTIES/, VERENIGING ZONDER WINSTOOGMERK,Bruun Inspektion:Bruun Inspektion,Bureau Veritas Exploitation SAS:Bureau Veritas Exploitation SAS,Bösmüller Prüfgesellschaft GmbH:Bösmüller Prüfgesellschaft GmbH,C.E.V.I. S.r.l. - Centro Elettrotecnico Verifiche Impianti:C.E.V.I. S.r.l. - Centro Elettrotecnico Verifiche Impianti,
                                                CAC Conformity Assessment Center d.o.o.:CAC Conformity Assessment Center d.o.o.,CENPI SCRL - CONSORZIO EUROPEO DI NORMALIZZAZIONE E PREVENZIONE INFORTUNI:CENPI SCRL - CONSORZIO EUROPEO DI NORMALIZZAZIONE E PREVENZIONE INFORTUNI,CER SRL:CER SRL,CERT 2000 SRL:CERT 2000 SRL,CERT.IM SRL:CERT.IM SRL,CERTAT S.r.l.:CERTAT S.r.l.,
                                                CERTIFICAZIONE SISTEMI DI MOVIMENTAZIONI SRL:CERTIFICAZIONE SISTEMI DI MOVIMENTAZIONI SRL,CERTIFICAZIONI SRL:CERTIFICAZIONI SRL,CERTIFOR S.r.l.:CERTIFOR S.r.l.,CERVINO SRL:CERVINO SRL,CNIM SRL:CNIM SRL,CONTROL LIFT SA:CONTROL LIFT SA,D Kare Gözetim Test ve Belgelendirme Ticaret Limited Şirketi:D Kare Gözetim Test ve Belgelendirme Ticaret Limited Şirketi,DEKRA Automobil GmbH:DEKRA Automobil GmbH,DEKRA Certification France:DEKRA Certification France,
                                                DEKRA Industrial AB:DEKRA Industrial AB,DEKRA Industrial SAS:DEKRA Industrial SAS,DQS HELLAS Management Systems Certification Company LTD:DQS HELLAS Management Systems Certification Company LTD,Dansk Trykinspektion ApS:Dansk Trykinspektion ApS,Dipl.-Ing. Pietsch & Ing. Dr. Weindorfer Prüfgesellschaft m.b.H.:Dipl.-Ing. Pietsch & Ing. Dr. Weindorfer Prüfgesellschaft m.b.H.,E.I.C. Engineering inspection company s.r.o.:E.I.C. Engineering inspection company s.r.o.,ECOS ITALIA S.r.l.:ECOS ITALIA S.r.l.,
                                                E.L.T.I. Srl - EUROPEAN LIFT TESTING ITALIA:E.L.T.I. Srl - EUROPEAN LIFT TESTING ITALIA,E.S.C. ENGINEERING SAFETY CERTIFICATION S.r.l.:E.S.C. ENGINEERING SAFETY CERTIFICATION S.r.l.,EC - ENTE CERTIFICAZIONI SPA:EC - ENTE CERTIFICAZIONI SPA,ECO - European Certifying Organization S.p.A.:ECO - European Certifying Organization S.p.A.,ECO TECH ENGINEERING E SERVIZI AMBIENTALI S.r.l.:ECO TECH ENGINEERING E SERVIZI AMBIENTALI S.r.l.,
                                                ECOS s.r.l.:ECOS s.r.l.,ECS SRL:ECS SRL,EKC Kalite Belgelendirme Muayene Eğitim Sanayi Ticaret Anonim Şirketi:EKC Kalite Belgelendirme Muayene Eğitim Sanayi Ticaret Anonim Şirketi,EKO:EKO,ELTRON:ELTRON,EMQ-DIN SRL:EMQ-DIN SRL,ENTE CERTIFICAZIONE MACCHINE SRL:ENTE CERTIFICAZIONE MACCHINE SRL,ERGOCERT HELLAS INSPECTIONS-AUDITS-CERTIFICATIONS S.A.:ERGOCERT HELLAS INSPECTIONS-AUDITS-CERTIFICATIONS S.A.,ESTIMA KM Ltd.:ESTIMA KM Ltd.,ETEL SA:ETEL SA,ETRURIA CERTIFICAZIONI SRLL:ETRURIA CERTIFICAZIONI SRL,EUCERT Organismo di Certificazione Europeo s.r.l.:EUCERT Organismo di Certificazione Europeo s.r.l.,
                                                EURO QUALITY SYSTEM France:EURO QUALITY SYSTEM France,EUROCERT SRL:EUROCERT SRL,EUROCONTROL S.A.:EUROCONTROL S.A.,EUROCONTROLLI SRL:EUROCONTROLLI SRL,EUROPEAN INSPECTION AND CERTIFICATION COMPANY SA - EUROCERT SA:EUROPEAN INSPECTION AND CERTIFICATION COMPANY SA - EUROCERT SA,Eurofins Product Testing Italy S.r.l.:Eurofins Product Testing Italy S.r.l.,
                                                FEMKO Uluslararası Teknik Kontrol Eğitim Belgelendirme Limited Şirketi:FEMKO Uluslararası Teknik Kontrol Eğitim Belgelendirme Limited Şirketi,G & R - ORGANISMO DI CERTIFICAZIONE SRL:G & R - ORGANISMO DI CERTIFICAZIONE SRL,GATECI - Gabinete Técnico de Certificação e Inspeção/, Lda.:GATECI - Gabinete Técnico de Certificação e Inspeção/, Lda.,GCL International Ltd:GCL International Ltd,GCNTR Uluslararası Belgelendirme/, Gözetim/, Eğitim ve Dış Ticaret Limited Şirketi:GCNTR Uluslararası Belgelendirme/, Gözetim/, Eğitim ve Dış Ticaret Limited Şirketi,
                                                GTÜ Anlagensicherheit GmbH:GTÜ Anlagensicherheit GmbH,Goetschi Ingenieurbüro AG:Goetschi Ingenieurbüro AG,HISSBESIKTNINGAR I SVERIGE AB:HISSBESIKTNINGAR I SVERIGE AB,Heiskontrollen AS:Heiskontrollen AS,I.A.C.E. SRL:I.A.C.E. SRL,I.G.M. CERTIFICAZIONI S.R.L.:I.G.M. CERTIFICAZIONI S.R.L.,I.N.C. SRL:I.N.C. SRL,I.N.C.S.A. SRL - ISTITUTO NAZIONALE CONTROLLO SICUREZZA ASCENSORI:I.N.C.S.A. SRL - ISTITUTO NAZIONALE CONTROLLO SICUREZZA ASCENSORI,ICERT S.r.l.:ICERT S.r.l.,ICIM S.P.A.:ICIM S.P.A.,ICOVER S.p.A. - ISTITUTO COLLAUDI E VERIFICHE:ICOVER S.p.A. - ISTITUTO COLLAUDI E VERIFICHE,
                                                IE.DI.GE. ENGINEERING S.r.l:IE.DI.GE. ENGINEERING S.r.l,IMQ ISTITUTO ITALIANO DEL MARCHIO DI QUALITÀ S.P.A.:IMQ ISTITUTO ITALIANO DEL MARCHIO DI QUALITÀ S.P.A.,INGEGNERIA PER L'INDUSTRIA S.R.L.:INGEGNERIA PER L'INDUSTRIA S.R.L.,INGENIERIA DE GESTION INDUSTRIAL/, S.L. (INGEIN):INGENIERIA DE GESTION INDUSTRIAL/, S.L. (INGEIN),INGENIERIA Y TECNICAS DE CALIDAD S.L. INTECA:INGENIERIA Y TECNICAS DE CALIDAD S.L. INTECA,INSPECTA TARKASTUS OY:INSPECTA TARKASTUS OY,INSPECTION AND CERTIFICATION COMPANY LIMITED (EPIRUS CERT):INSPECTION AND CERTIFICATION COMPANY LIMITED (EPIRUS CERT),
                                                INSTITUTE OF OCCUPATIONAL SAFETY:INSTITUTE OF OCCUPATIONAL SAFETY,INSTITUTE OF OCCUPATIONAL SAFETY AND ENVIRONMENTAL PROTECTION - IVD:INSTITUTE OF OCCUPATIONAL SAFETY AND ENVIRONMENTAL PROTECTION - IVD,INSTITUTO DE SOLDADURA E QUALIDADE:INSTITUTO DE SOLDADURA E QUALIDADE,INSTITUTO ELECTROTÉCNICO PORTUGUES:INSTITUTO ELECTROTÉCNICO PORTUGUES,ISTITUTO DI CERTIFICAZIONE EUROPEA PRODOTTI INDUSTRIALI S.P.A.:ISTITUTO DI CERTIFICAZIONE EUROPEA PRODOTTI INDUSTRIALI S.P.A.,ITALCERT SRL:ITALCERT SRL,IeS INGEGNERIA E SICUREZZA DEGASPERI S.R.L.:IeS INGEGNERIA E SICUREZZA DEGASPERI S.R.L.,
                                                Inspecco Belgelendirme ve Gözetim Hizmetleri A. Ş.:Inspecco Belgelendirme ve Gözetim Hizmetleri A. Ş.,Inspecta Estonia OÜ:Inspecta Estonia OÜ,KBM Teknik Kontrol ve Belgelendirme Limited Şirketi:KBM Teknik Kontrol ve Belgelendirme Limited Şirketi,KONHEF vzw:KONHEF vzw,KRONOS GREEK CERTIFICATION S.A.:KRONOS GREEK CERTIFICATION S.A.,Kiwa Inspecta A/S:Kiwa Inspecta A/S,Kiwa Inspecta AB:	Kiwa Inspecta AB,Kiwa Inspecta AS:Kiwa Inspecta AS,Kontest Belgelendirme ve Muayene Hizmetleri Limited Şirketi:Kontest Belgelendirme ve Muayene Hizmetleri Limited Şirketi,
                                                Kontrol biro d.o.o.:Kontrol biro d.o.o.,LC LUXCONTROL ASBL:LC LUXCONTROL ASBL,LIFT CERT LIMITED:LIFT CERT LIMITED,LIFT Certificat TU Sofia-Technical University of Sofia-Technologies Ltd:LIFT Certificat TU Sofia-Technical University of Sofia-Technologies Ltd,LIFTINSTITUUT B.V.:LIFTINSTITUUT B.V.,LLC BUREAU VERITAS LATVIA:LLC BUREAU VERITAS LATVIA,LLC Rodau Inspection:LLC Rodau Inspection,LLOYD'S REGISTER QUALITY ASSURANCE LTD (0088):LLOYD'S REGISTER QUALITY ASSURANCE LTD (0088),Lloyd's Register Quality Assurance France SAS:Lloyd's Register Quality Assurance France SAS,MARTON MŰSZAKI SZAKÉRTŐ IRODA KFT.:MARTON MŰSZAKI SZAKÉRTŐ IRODA KFT.,MATERIALS INDUSTRIAL RESEARCH AND TECHNOLOGY CENTER S.A.(MIRTEC S.A.):MATERIALS INDUSTRIAL RESEARCH AND TECHNOLOGY CENTER S.A.(MIRTEC S.A.),
                                                MCJ S.r.l.:MCJ S.r.l.,NOVA CERTIFICATIONS SINGLE MEMBER LTD:NOVA CERTIFICATIONS SINGLE MEMBER LTD,Nobocert Uluslararası Belgelendirme ve Muayene Hizmetleri Limited Şirketi:Nobocert Uluslararası Belgelendirme ve Muayene Hizmetleri Limited Şirketi,Nortest Cyprus LTD:Nortest Cyprus LTD,O.M.N.I.A. Srl:O.M.N.I.A. Srl,OCA INSPECCION/, CONTROL Y PREVENCION/, S.A.U.:OCA INSPECCION/, CONTROL Y PREVENCION/, S.A.U.,OCA INSTITUTO DE CERTIFICACION/, S.L.U.:OCA INSTITUTO DE CERTIFICACION/, S.L.U.,OCERT SRL:OCERT SRL,OEC SRL:OEC SRL,ONAFHANKELIJK CONTRÔLE BUREAU (O.C.B.) V.Z.W.:ONAFHANKELIJK CONTRÔLE BUREAU (O.C.B.) V.Z.W.,ORGANISMO DI CERTIFICAZIONE EUROPEA SRL:ORGANISMO DI CERTIFICAZIONE EUROPEA SRL,
                                                ORGANISMO EUROPEO CERTIFICAZIONE IMPIANTI SOLLEVAMENTO S.r.l. - OECIS:ORGANISMO EUROPEO CERTIFICAZIONE IMPIANTI SOLLEVAMENTO S.r.l. - OECIS,OVERTEC SRL:OVERTEC SRL,PLC SRL:PLC SRL,POTA Prüf-Organisation Technischer Anlagen:POTA Prüf-Organisation Technischer Anlagen,PRO-CERT SRL:PRO-CERT SRL,PRO. VE. CO. - ENGINEERING SERVICE SRL:PRO. VE. CO. - ENGINEERING SERVICE SRL,QMSCERT AUDITS-INSPECTIONS-CERTIFICATIONS LTD. (Q-CERT LTD.):QMSCERT AUDITS-INSPECTIONS-CERTIFICATIONS LTD. (Q-CERT LTD.),QUALICONSULT:QUALICONSULT,QUALICONSULT EXPLOITATION:QUALICONSULT EXPLOITATION,
                                                R.A.F. VERIFICHE S.R.L.:R.A.F. VERIFICHE S.R.L.,RINA Services S.P.A.:RINA Services S.P.A.,SAFETY SYSTEMS S.r.l:SAFETY SYSTEMS S.r.l,SBR France:SBR France,SC RINA SIMTEX - ORGANISMUL DE CERTIFICARE SRL:SC RINA SIMTEX - ORGANISMUL DE CERTIFICARE SRL,SEGURIDAD INDUSTRIAL/, MEDIOAMBIENTE Y CALIDAD/, S.L.:SEGURIDAD INDUSTRIAL/, MEDIOAMBIENTE Y CALIDAD/, S.L.,SERBLOK S.r.l.:SERBLOK S.r.l.,SEUCER SRL:SEUCER SRL,SGS ITALIA S.P.A.:SGS ITALIA S.P.A.,SGS Inspecciones Reglamentarias/, S.A.:SGS Inspecciones Reglamentarias/, S.A.,SGS – Statutory Services Belgium vzw/asbl:SGS – Statutory Services Belgium vzw/asbl,
                                                SGS-ICS SERVIÇOS INTERNACIONAIS DE CERTIFICAÇÃO LDA:SGS-ICS SERVIÇOS INTERNACIONAIS DE CERTIFICAÇÃO LDA,SGS-TÜV Saar GmbH:SGS-TÜV Saar GmbH,SIC S.R.L.:SIC S.R.L.,SICAPT S.R.L.:SICAPT S.R.L.,SICURCERT S.r.l.:SICURCERT S.r.l.,
                                                SIDEL S.P.A.:SIDEL S.P.A.,SIDELMED S.p.A.:SIDELMED S.p.A.,SISTEMA CERTIFICAZIONE EUROPEA CONTROLLO E SICUREZZA SRL:SISTEMA CERTIFICAZIONE EUROPEA CONTROLLO E SICUREZZA SRL,SLP Hiss & Lyftbesiktning AB:SLP Hiss & Lyftbesiktning AB,SOCIETA INTERNAZIONALE CONTROLLO IMPIANTI TECNOLOGICI SRL - SICIT:SOCIETA INTERNAZIONALE CONTROLLO IMPIANTI TECNOLOGICI SRL - SICIT,SOCOTEC BELGIUM ASBL:SOCOTEC BELGIUM ASBL,SOCOTEC Equipements:SOCOTEC Equipements,SRAC CERT SRL:SRAC CERT SRL,STROJIRENSKY ZKUSEBNI USTAV s.p.:STROJIRENSKY ZKUSEBNI USTAV s.p.,
                                                SUPERVISION SERVICE OF ELEVATING GEARS:SUPERVISION SERVICE OF ELEVATING GEARS,SVI CERTIFICAZIONI SRL:SVI CERTIFICAZIONI SRL,SWISS APPROVAL TECHNISCHE BEWERTUNG S.A.:SWISS APPROVAL TECHNISCHE BEWERTUNG S.A.,Szutest Uygunluk Değerlendirme A.Ş.:Szutest Uygunluk Değerlendirme A.Ş.,TCS Uluslararası Belgelendirme Hizmetleri San. ve Tic. Ltd. Şti.:TCS Uluslararası Belgelendirme Hizmetleri San. ve Tic. Ltd. Şti.,TECHNICKE LABORATORE OPAVA/, akciova spolecnost:TECHNICKE LABORATORE OPAVA/, akciova spolecnost,TECHNICKY A ZKUSEBNI USTAV STAVEBNI PRAHA s.p.:TECHNICKY A ZKUSEBNI USTAV STAVEBNI PRAHA s.p.,TECHNISCH BUREAU VERBRUGGHEN V. Z. W.:TECHNISCH BUREAU VERBRUGGHEN V. Z. W.,
                                                TECNICA SRL:TECNICA SRL,TEST EXPERT-TECHNICAL ORGANIZATION FOR INSPECTIONS SURVEILLANCE AND CERTIFICATIONS LTD:TEST EXPERT-TECHNICAL ORGANIZATION FOR INSPECTIONS SURVEILLANCE AND CERTIFICATIONS LTD,TIM d.o.o.:TIM d.o.o.,TORAMO Certificazioni Srl:TORAMO Certificazioni Srl,TRANSPORTOWY DOZOR TECHNICZNY:TRANSPORTOWY DOZOR TECHNICZNY,TRIVENETO SRL:TRIVENETO SRL,TURKISH STANDARDS INSTITUTION (TSE):TURKISH STANDARDS INSTITUTION (TSE),TUV AUSTRIA HELLAS LTD:TUV AUSTRIA HELLAS LTD,
                                                TUV CYPRUS LTD:TUV CYPRUS LTD,TUV ITALIA SRL:TUV ITALIA SRL,Technicka inspekcia a.s.:Technicka inspekcia a.s.,Technicky skusobny ustav Piestany s.p.:Technicky skusobny ustav Piestany s.p.,Technikos priežiūros tarnyba:Technikos priežiūros tarnyba,Tehnoaudit OÜ:Tehnoaudit OÜ,TÜV AUSTRIA SERVICES GMBH:TÜV AUSTRIA SERVICES GMBH,TÜV NEDERLAND QA B.V.:TÜV NEDERLAND QA B.V.,TÜV NORD BALTIK LTD:TÜV NORD BALTIK LTD,TÜV NORD CERT GmbH:TÜV NORD CERT GmbH,TÜV NORD Systems GmbH & Co. KG:TÜV NORD Systems GmbH & Co. KG,
                                                TÜV RHEINLAND IBERICA INSPECTION/, CERTIFICATION AND TESTING/, S.A.:TÜV RHEINLAND IBERICA INSPECTION/, CERTIFICATION AND TESTING/, S.A.,TÜV Rheinland Industrie Service GmbH:TÜV Rheinland Industrie Service GmbH,TÜV Rheinland InterCert Muszaki Felügyeleti és Tanúsító Korlátolt Felelosségu Társaság:TÜV Rheinland InterCert Muszaki Felügyeleti és Tanúsító Korlátolt Felelosségu Társaság,TÜV SÜD ATISAE/, S.A.U.:TÜV SÜD ATISAE/, S.A.U.,TÜV SÜD Czech s. r. o.:TÜV SÜD Czech s. r. o.,TÜV SÜD Industrie Service GmbH:TÜV SÜD Industrie Service GmbH,TÜV SÜD SLOVAKIA s.r.o.:TÜV SÜD SLOVAKIA s.r.o.,TÜV Technische Überwachung Hessen GmbH:TÜV Technische Überwachung Hessen GmbH,
                                                TÜV Thüringen e.V.:TÜV Thüringen e.V.,UAB 'Kiwa Inspecta':UAB 'Kiwa Inspecta',UDEM Uluslararasi Belgelendirme Denetim Egitim Merkezi San. ve Tic. A.Ş.:UDEM Uluslararasi Belgelendirme Denetim Egitim Merkezi San. ve Tic. A.Ş.,UNION OF TECHNICAL SAFETY EXPERTS OF MANUFACTUTRES OF LATVIA - TÜV RHEINLAND GROUP LTD:UNION OF TECHNICAL SAFETY EXPERTS OF MANUFACTUTRES OF LATVIA - TÜV RHEINLAND GROUP LTD,URZAD DOZORU TECHNICZNEGO:URZAD DOZORU TECHNICZNEGO,V.I.S. SRL:V.I.S. SRL,VENETA ENGINEERING SRL:VENETA ENGINEERING SRL,VERICERT SRL:VERICERT SRL,VINCOTTE LUXEMBOURG ASBL:VINCOTTE LUXEMBOURG ASBL,VINÇOTTE asbl/vzw:VINÇOTTE asbl/vzw,
                                                VINÇOTTE sa/nv:VINÇOTTE sa/nv,Zavod za integralnu kontrolu d.o.o.:Zavod za integralnu kontrolu d.o.o.,Zavod za ispitivanje kvalitete robe d.o.o.:Zavod za ispitivanje kvalitete robe d.o.o.,control-A Aufzugsprüfung GmbH:control-A Aufzugsprüfung GmbH,emt inspektion ApS:emt inspektion ApS,g-ACK AB:g-ACK AB,ÉMI-TÜV SÜD MINŐSÉGÜGYI ÉS BIZTONSÁGTECHNIKAI KFT.:ÉMI-TÜV SÜD MINŐSÉGÜGYI ÉS BIZTONSÁGTECHNIKAI KFT.,Shenzhen Institute of Special Equipment/, SISE:Shenzhen Institute of Special Equipment/, SISE,National Elevator Inspection and Testing Centre/, NETEC:National Elevator Inspection and Testing Centre/, NETEC,Shanghai Jiaotong University Elevator Testing Centre/, SJUETC:Shanghai Jiaotong University Elevator Testing Centre/, SJUETC,
                                                National Elevator Quality Supervision and Inspection Centre/, (Guang Dong):National Elevator Quality Supervision and Inspection Centre/, (Guang Dong),National Elevator Quality Supervision and Inspection Centre (Zhe Jiang):National Elevator Quality Supervision and Inspection Centre (Zhe Jiang),National Elevator Quality Supervision and Inspection Centre (Chong Qing):National Elevator Quality Supervision and Inspection Centre (Chong Qing),China Special Equipment Inspection and Research Institute:China Special Equipment Inspection and Research Institute,Others:Others">
                                              </cn2-select>
                                            </td>
                                            <td hidden id="CompTypeTest_NotiBody20">
                                             <cn2-select no-label event-change="otherCompTypeTest(this);"
                                                id="GeneSpec_CompTypeTest_NotiBody210_20" inline="10" disabled 
                                                prefix="GeneSpec_CompTypeTest_NotiBody2" sub-form suffix="0"
                                                options="LIFTINSTITUUT B.V:LIFTINSTITUUT B.V,TUV SUD Industrie Service GmbH:TUV SUD Industrie Service GmbH, 
                                                Shenzhen Institute of Special Equipment/, SISE:Shenzhen Institute of Special Equipment/, SISE,                     
                                                National Elevator Inspection and Testing Centre/, NETEC:National Elevator Inspection and Testing Centre/, NETEC,
                                                Shanghai Jiaotong University Elevator Testing Centre/, SJUETC:Shanghai Jiaotong University Elevator Testing Centre/, SJUETC,
                                                National Elevator Quality Supervision and Inspection Centre/, (Guang Dong):National Elevator Quality Supervision and Inspection Centre/, (Guang Dong),
                                                Others:Others">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr id="GeneSpec_CompTypeTest_OtheID" hidden class="hideWhenQuantityZero">
                                            <td id="otherManda1">Others:</td>
                                            <td>
                                              <cn2-textbox no-label inline="10" 
                                               id="GeneSpec_CompTypeTest_Othe10"  maxlength="1000" suffix="0" 
                                               prefix="GeneSpec_CompTypeTest_Othe">
                                              </cn2-textbox>
                                            </td>
                                         </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hideEmerBrakType" class="hideWhenQuantityZero">
                                            <td class="pl-0">
                                              Emergency Brake Type:
                                            </td>
                                            <td>
                                              <cn2-select no-label disabled inline="10"
                                                options="Machine Brake:Machine Brake,Rope Gripper:Rope Gripper,Sheave Jammer:Sheave Jammer,Safety Gears:Safety Gears,Others:Others"
                                                id="GeneSpec_CompTypeTest_EmerBrakType10_10"
                                                prefix="GeneSpec_CompTypeTest_EmerBrakType" sub-form suffix="0">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hidePermMass">
                                            <td class="pl-0">
                                              Permissible Mass:
                                            </td>
                                            <td>
                                              <div class="row m-0 p-0">
                                                <div class="col-10 m-0 p-0">
                                                  <cn2-textbox no-label maxlength="8" inline="12" disabled onkeypress="return withOnlyDecimal(this, event, 1)"
                                                    onblur="removeDecimalPoint(this, 'range'); notEnough(this, 'permiMass');" 
                                                    range="0.1-9999.9" id="GeneSpec_CompTypeTest_PermMass10_10"
                                                    prefix="GeneSpec_CompTypeTest_PermMass" sub-form suffix="0">
                                                  </cn2-textbox><span hidden spanNoteError id = "CompTypeTest_PermMass10_10" prefix = "CompTypeTest_PermMass" sub-form suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                                </div>
                                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                                  kg
                                                </div>
                                              </div>                                              
                                            </td>
                                          </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hideRateSpee">
                                            <td class="pl-0">
                                              Rated Speed (Overspeed
                                              Governor):
                                            </td>
                                            <td>
                                              <div class="row m-0 p-0">
                                                <div class="col-10 m-0 p-0">
                                                  <cn2-textbox no-label maxlength="8" inline="12" disabled
                                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                                    onblur="removeDecimalPoint(this, 'range'); notEnough(this, 'ratedSpeed');"
                                                    range="0.1-9999.9" id="GeneSpec_CompTypeTest_RateSpee10_10"
                                                    prefix="GeneSpec_CompTypeTest_RateSpee" sub-form suffix="0">
                                                  </cn2-textbox><span hidden spanNoteError id = "CompTypeTest_RateSpee10_10" prefix = "CompTypeTest_RateSpee" sub-form suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                                </div>
                                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                                  m/s
                                                </div>
                                              </div>                                              
                                            </td>
                                          </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hideMechTripSpee">
                                            <td class="pl-0">
                                              Mechanical Tripping
                                              Speed (Overspeed
                                              Governor):
                                            </td>
                                            <td>
                                              <div class="row m-0 p-0">
                                                <div class="col-10 m-0 p-0">
                                                  <cn2-textbox no-label maxlength="8" inline="12" disabled IfMajoAlteWork
                                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                                    onblur="removeDecimalPoint(this, 'range'); notEnough(this, 'tripSpeed');"
                                                    range="0.1-9999.9" id="GeneSpec_CompTypeTest_MechTripSpee10_10"
                                                    prefix="GeneSpec_CompTypeTest_MechTripSpee" sub-form suffix="0"
                                                    limit="0">
                                                  </cn2-textbox><span hidden spanNoteError id = "CompTypeTest_MechTripSpee10_10" prefix = "CompTypeTest_MechTripSpee" sub-form suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                                </div>
                                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                                  m/s
                                                </div>
                                              </div>                                              
                                            </td>
                                          </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hideReduStriBuffUsed">
                                            <td class="pl-0">
                                              Reduced stroke buffer
                                              used?:
                                            </td>
                                            <td>
                                              <cn2-select no-label options="Yes:Yes,No:No" disabled exclude 
                                                event-change="activateImpactSpeed(this);" default-value="No"
                                                id="GeneSpec_CompTypeTest_ReduStriBuffUsed10_10" inline="10"
                                                prefix="GeneSpec_CompTypeTest_ReduStriBuffUsed" sub-form
                                                suffix="0">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr hidden id="GeneSpec_CompTypeTest_hideMaxiImpaSpee">
                                            <td class="pl-0">
                                              Maximum Impact Speed
                                              (Buffer):
                                            </td>
                                            <td>
                                              <div class="row m-0 p-0">
                                                <div class="col-10 m-0 p-0">
                                                  <cn2-textbox no-label inline="12"  disabled 
                                                    id="GeneSpec_CompTypeTest_MaxiImpaSpee10_10"
                                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                                    onblur="removeDecimalPoint(this, 'range'); notEnough(this, 'impactSpeed');"
                                                    range="0.1-9999.9" prefix="GeneSpec_CompTypeTest_MaxiImpaSpee"
                                                    sub-form suffix="0">
                                                  </cn2-textbox><span hidden spanNoteError id = "CompTypeTest_MaxiImpaSpee10_10" prefix = "CompTypeTest_MaxiImpaSpee" sub-form suffix="0" style = "color: #ce0000; font-size: 80%;"></span>
                                                </div>
                                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                                  m/s
                                                </div>
                                              </div>                                              
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">
                                              <cn2-button danger label="Delete" class="float-right" sub-form
                                                style="
                                                    margin-right: 77px;
                                                  "
                                                event-click="deleteForm(this, 'Component_Container', 'sub');"
                                                id="btnGeneSpec_CompTypeTest_Dele10_10"
                                                prefix="btnGeneSpec_CompTypeTest_Dele" suffix="0" disabled>
                                              </cn2-button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mls-espo-right-inner-container borderchecking">
      <h2>Section VIII Vertical Platform Lift/ Stairlift Details</h2>
      <table class="table table-borderless mb-0">
        <tbody>
          <tr>
            <td class="pl-0">
              VIII.3. Group of Lifts (sharing lift type, basic lift
              details, specifications and type testing certificates)
            </td>
          </tr>
          <tr>
            <td class="pl-0">
              <cn2-button label="Add" id="btnSubmChec_CateAndNoLift2_Add10"
                event-click="duplicateForm(this, 'LiftDetails2_Container', 'main');"></cn2-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div con="LiftDetails2_Container" class="col-xs-12 col-sm-12 col-lg-12 col-md-12"
        style="padding-left: 0;">
        <div id="LiftDetails2_Forms10" prefix="LiftDetails2_Forms" suffix="0" style="margin-bottom: 0px;"
          form-div sub-con>
          <div id="LiftDetails2Accordion10" prefix="LiftDetails2Accordion" suffix="0">
            <h2 class="accordion-toggle">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="90%" class="align-top">
                      <br />
                      <b>Group&nbsp;<span counter-form>1</span> </b>
                    </td>
                    <td class="align-top">
                      <br />
                      <cn2-button label="Delete" id="btnSubmChec_CateAndNoLift2_Dele10" main-delete
                        event-click="deleteForm(this, 'LiftDetails2_Container', 'main');"
                        prefix="btnSubmChec_CateAndNoLift2_Dele" suffix="0" danger disabled>
                      </cn2-button>
                    </td>
                    <td style="float: right;">
                      <span class="fa fa-angle-up collapsed" data-toggle="collapse"
                        href="#LiftDetails2FormChildAccordionBody10" id="#LiftDetails2FormChildAccordionBody10"
                        prefix="#LiftDetails2FormChildAccordionBody" suffix="0" child onclick="spanUpDown(this)"
                        aria-expanded="true" main-accordion-header style="margin-top: -10px !important;"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </h2>
            <div id="LiftDetails2FormChildAccordionBody10" class="panel-collapse collapse show" child="div"
              prefix="LiftDetails2FormChildAccordionBody" suffix="0" main-accordion-body>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="148px">
                      Quantity
                    </td>
                    <td width="25%" class="pl-0">
                      <cn2-select no-label id="SubmChec_CateAndNoLift2_NoOfLift10" details-quantity
                        prefix="SubmChec_CateAndNoLift2_NoOfLift" suffix="0" inline="10" fee="fee2"
                        event-change="activateWhenQuantity(this, 'fee2');totalPlanfee();"></cn2-select>
                    </td>
                    <td colspan="2"></td>
                  </tr>
                  <tr style="border-top: 1px solid black;">
                    <td colspan="4">
                      <cn2-button label="Add" id="btnSubmChec2_AddSeriNumb10" disabled add-disabled
                        event-click="duplicateForm(this, 'FirstField2_Container', 'sub');"
                        prefix="btnSubmChec2_AddSeriNumb" suffix="0"></cn2-button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="pt-2 pl-0">
                      <div class="p-0 m-0" con="FirstField2_Container">
                        <table class="table table-bordered mb-0" sub-con>
                          <tbody>
                            <tr>
                              <td width="150px">
                                Lift Number:
                              </td>
                              <td width="25%" class="pl-0">
                                <cn2-textbox no-label maxlength="20" disabled ifZero manda inline="10"
                                  id="SubmChec_CateAndNoLift2_LiftNumb10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift2_LiftNumb" sub-form suffix="0"></cn2-textbox>
                              </td>
                              <td width="200px">
                                Accessibility Provision:
                              </td>
                              <td>
                                <cn2-select no-label options="Accessible Lift:Accessible Lift,No:No" disabled
                                  ifZero manda inline="10" id="SubmChec_CateAndNoLift2_AcceProv10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift2_AcceProv" sub-form suffix="0">
                                </cn2-select>
                              </td>
                            </tr>
                            <tr>
                              <td width="150px">
                              Lift ID:
                              </td>
                              <td width="25%" class="pl-0">
                               <cn2-textbox no-label maxlength="20" disabled inline="10" liftid
                                id="SubmChec_CateAndNoLift2_LiftID10_10" recent-value onkeydown="firstCharIsL(event, this.value);"
                                 prefix="SubmChec_CateAndNoLift2_LiftID" sub-form suffix="0"></cn2-textbox>
                              </td>
                              <td>
                                Travel Height:
                              </td>
                              <td class="pl-0">
                                <div class="row m-0 p-0">
                                  <div class="col-10 m-0 p-0">
                                    <cn2-textbox no-label maxlength="8" ifZero manda inline="12" disabled
                                      onkeypress="return withOnlyDecimal(this, event, 1)" recent-value
                                      onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9"
                                      id="SubmChec_CateAndNoLift2_Trav10_10" prefix="SubmChec_CateAndNoLift2_Trav"
                                      sub-form suffix="0">
                                    </cn2-textbox>
                                  </div>
                                  <div class="col-2 m-0 p-0 pt-1 text-center">
                                    m
                                  </div>
                                </div>                                
                              </td>
                              
                            </tr>
                            <tr>
                              <td class="pb-4">
                                Number of Stops Served:
                              </td>
                              <td class="pb-4 pl-0">
                                <cn2-textbox no-label maxlength="3" numeric ifZero manda inline="10" disabled
                                  id="SubmChec_CateAndNoLift2_NumbOfStopServ10_10" recent-value
                                  prefix="SubmChec_CateAndNoLift2_NumbOfStopServ" sub-form suffix="0"
                                  event-blur="rangeValue(this, 'range', '1-300');">
                                </cn2-textbox>
                              </td>
                              <td class="pb-4"></td>
                              <td class="text-right pb-4">
                                <cn2-button danger label="Delete" id="btnSubmChec2_DeleSeriNumb10_10" sub-form
                                  event-click="deleteForm(this, 'FirstField2_Container', 'sub');" disabled
                                  prefix="btnSubmChec2_DeleSeriNumb" suffix="0" style="margin-right: 42px;">
                                </cn2-button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table class="table table-borderless" style="
                              border-top: 1px solid black;
                              border-bottom: 1px solid black;
                            ">
                        <tbody>
                          <tr>
                            <td colspan="4">
                              <u>Basic Lift Details</u>
                            </td>
                          </tr>
                          <tr>
                            <td width="150px">
                              Brand Name:
                            </td>
                            <td width="25%" class="pl-0">
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="GeneSpec2_BaciLiftDeta2_BranName10"
                                prefix="GeneSpec2_BaciLiftDeta2_BranName" suffix="0"></cn2-textbox>
                            </td>
                            <td width="200px">
                              Model Number:
                            </td>
                            <td>
                              <cn2-textbox no-label disabled ifZero manda maxlength="20" inline="10"
                                id="GeneSpec2_ModeNumb10" prefix="GeneSpec2_ModeNumb" suffix="0"></cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Lift Type:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled ifZero manda inline="10"
                                options="Vertical Platform Lift:Vertical Platform Lift,Stairlift:Stairlift"
                                id="SubmChec_CateAndNoLift2_CateOfLift10" event-change="populateCodeComp(this, 'GeneSpec2_CodeCompWith');typeDriveSys(this, 'GeneSpec2_BaciLiftDeta2_DrivSyst');" 
                                prefix="SubmChec_CateAndNoLift2_CateOfLift" suffix="0">
                              </cn2-select>
                            </td>
                            <td>
                              Type of Drive System:
                            </td>
                            <td>
                              <cn2-select no-label disabled ifZero inline="10"
                                options="Rack and Pinion:Rack and Pinion,Ropes and Chain Suspension:Ropes and Chain Suspension,Screw and Nut:Screw and Nut,Friction/Traction Drive:Friction/Traction Drive,Guided Chain:Guided Chain,Scissors Mechanism:Scissors Mechanism,Hydraulic (direct):Hydraulic (direct),Hydraulic (indirect):Hydraulic (indirect)"
                                id="GeneSpec2_BaciLiftDeta2_DrivSyst10"
                                prefix="GeneSpec2_BaciLiftDeta2_DrivSyst" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Code Compliance (For major alteration
                                works, this refers to the part being
                                modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Code compliance with:
                            </td>
                            <td colspan="2" class="pl-0">
                               <cn2-select no-label disabled ifZero manda id="GeneSpec2_CodeCompWith10"
                                prefix="GeneSpec2_CodeCompWith" suffix="0"
                               options="EN 81-41ː2010:EN 81-41ː2010,EN 81-40ː2008:EN 81-40ː2008,ASME 18.1:ASME 18.1,Alternative Standard:Alternative Standard"
                                event-change="activateFields(this, 'codeCompliance', ['GeneSpec2_CodeCompWith_Othe'])">
                              </cn2-select>
                            </td>
                            <td>
                              <cn2-textbox no-label disabled inline="10" maxlength="18" ccw-field
                                id="GeneSpec2_CodeCompWith_Othe10" prefix="GeneSpec2_CodeCompWith_Othe"
                                suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              (code) with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="GeneSpec2_With10" prefix="GeneSpec2_With"
                                suffix="0" default-value="No deviation from code"
                                options="No deviation from code:No deviation from code,Alternative Solution:Alternative Solution,Waiver:Waiver,Modification:Modification">
                              </cn2-select>
                            </td>
                            <td>
                              (deviation)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <span style="font-size: 0.7rem;">(Note: For any selection with
                                “Alternative Standards” and/or
                                “Alternative
                                Solution”/”Waiver”/”Modification”, the
                                respective alternative
                                solution/waiver/modification form has
                                to submitted)</span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Specifications (For major alteration
                                works, please fill in for the parts
                                being modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <u>Car/Platform Size</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Depth:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpec2_CarSize_Dept10" prefix="GeneSpec2_CarSize_Dept" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td>Width:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpec2_CarSize_Widt10" prefix="GeneSpec2_CarSize_Widt" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td>Rated Load:</td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpec2_RateLoad10" prefix="GeneSpec2_RateLoad" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  kg
                                </div>
                              </div>                              
                            </td>
                            <td>
                              Rated Speed (Highest <br />
                              Speed):
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="8"
                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpec2_RateSpee10" prefix="GeneSpec2_RateSpee" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  m/s
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td>Car Mass:</td>
                              <td class="pl-0">
                                <div class="row m-0 p-0">
                                 <div class="col-10 m-0 p-0">
                                   <cn2-textbox no-label ifZero classOfWorks IfMajoAlteWork1 WhenMajorAlte inline="12" maxlength="10"
                                   onkeypress="return withOnlyDecimal(this, event, 1)"
                                   onblur="removeDecimalPoint(this, 'range'); computeSafetyFactor(this);"
                                   range="0.1-9999.9" disabled id="GeneSpec2_CarMass10" prefix="GeneSpec2_CarMass"
                                   suffix="0">
                                   </cn2-textbox>
                                 </div>
                                  <div class="col-2 m-0 p-0 pt-1 text-center">
                                   kg
                                  </div>
                               </div>                              
                              </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="escalator-page" hidden>
    <div class="mls-espo-right-inner-container borderchecking">
      <h2>Section VII Escalator/ Passenger Conveyor Details</h2>
      <table class="table table-borderless mb-0">
        <tbody>
          <tr>
            <td class="pl-0">
              VII.3. Group of Escalators (with same escalator type,
              manufacturer details, specifications and type testing
              certificates)
            </td>
          </tr>
          <tr>
            <td class="pl-0">
              <cn2-button label="Add" id="btnSubmChec_CateAndNoLift3_Add10"
                event-click="duplicateForm(this, 'EscaDetails_Container', 'main');"></cn2-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div con="EscaDetails_Container" class="col-xs-12 col-sm-12 col-lg-12 col-md-12" style="padding-left: 0;">
        <div id="EscaDetails_Forms10" prefix="EscaDetails_Forms" suffix="0" style="margin-bottom: 0px;" form-div
          sub-con>
          <div id="EscaDetailsAccordion10" prefix="EscaDetailsAccordion" suffix="0">
            <h2 class="accordion-toggle">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="90%" class="align-top">
                      <br />
                      <b>Group&nbsp;<span counter-form>1</span> </b>
                    </td>
                    <td class="align-top">
                      <br />
                      <cn2-button label="Delete" id="btnSubmChec_CateAndNoLift3_Dele10" main-delete
                        event-click="deleteForm(this, 'EscaDetails_Container', 'main');"
                        prefix="btnSubmChec_CateAndNoLift3_Dele" suffix="0" danger disabled>
                      </cn2-button>
                    </td>
                    <td style="float: right;">
                      <span class="fa fa-angle-up collapsed" data-toggle="collapse"
                        href="#EscaDetailsFormChildAccordionBody10" id="#EscaDetailsFormChildAccordionBody10"
                        prefix="#EscaDetailsFormChildAccordionBody" suffix="0" child onclick="spanUpDown(this)"
                        aria-expanded="true" main-accordion-header style="margin-top: -10px !important;"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </h2>
            <div id="EscaDetailsFormChildAccordionBody10" class="panel-collapse collapse show" child="div"
              prefix="EscaDetailsFormChildAccordionBody" suffix="0" main-accordion-body>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="148px">
                      Quantity
                    </td>
                    <td width="25%" class="pl-0">
                      <cn2-select no-label id="SubmChec_CateAndNoEsca_NoOfEsca10" details-quantity
                        prefix="SubmChec_CateAndNoEsca_NoOfEsca" suffix="0" inline="10" fee="fee3"
                        event-change="activateWhenQuantity(this, 'fee3');totalPlanfee();"></cn2-select>
                    </td>
                    <td colspan="2"></td>
                  </tr>
                  <tr style="border-top: 1px solid black;">
                    <td colspan="4">
                      <cn2-button label="Add" id="btnSubmChec3_AddSeriNumb10" disabled add-disabled
                        event-click="duplicateForm(this, 'FirstField3_Container', 'sub');"
                        prefix="btnSubmChec3_AddSeriNumb" suffix="0"></cn2-button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="pt-2 pl-0">
                      <div class="p-0 m-0" con="FirstField3_Container">
                        <table class="table table-bordered mb-0" sub-con>
                          <tbody>
                            <tr>
                              <td width="150px">
                                Escalator Number:
                              </td>
                              <td width="25%" class="pl-0">
                                <cn2-textbox no-label maxlength="20" disabled ifZero manda inline="10"
                                  event-change="setSubmChec_CateAndNoEsca_NoOfEscaHidden(this);"
                                  id="SubmChec_EscaNumb10_10" prefix="SubmChec_EscaNumb" sub-form suffix="0">
                                </cn2-textbox>
                                <cn2-textbox no-label disabled hidden id="SubmChec_CateAndNoEsca_NoOfEscaHide10"></cn2-texbox>
                              </td>
                              <td width="200px">
                                Rise of Escalator:
                              </td>
                              <td>
                                <div class="row m-0 p-0">
                                  <div class="col-10 m-0 p-0">
                                    <cn2-textbox no-label maxlength="8"
                                      onkeypress="return withOnlyDecimal(this, event, 1)"
                                      onblur="removeDecimalPoint(this);" disabled ifZero manda inline="12"
                                      id="SubmChec_RiseOfEsca10_10" prefix="SubmChec_RiseOfEsca" sub-form
                                      suffix="0">
                                    </cn2-textbox>
                                  </div>
                                  <div class="col-2 m-0 p-0 pt-1 text-center">
                                    m
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                             <td width="150px">
                             Escalator ID:
                             </td>
                             <td width="25%" class="pl-0">
                              <cn2-textbox no-label maxlength="20" disabled inline="10" escaid
                                id="SubmChec_EscaID10_10" onkeydown="firstCharIsE(event, this.value);"
                                prefix="SubmChec_EscaID" sub-form suffix="0"></cn2-textbox>
                             </td>
                             <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td colspan="4" class="text-right">
                                <cn2-button danger label="Delete" id="btnSubmChec3_DeleSeriNumb10_10" sub-form
                                  event-click="deleteForm(this, 'FirstField3_Container', 'sub');" disabled
                                  prefix="btnSubmChec3_DeleSeriNumb" suffix="0" style="margin-right: 42px;">
                                </cn2-button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table class="table table-borderless"
                        style="border-top: 1px solid black;border-bottom: 1px solid black;">
                        <tbody>
                          <tr>
                            <td colspan="4">
                              <u>Basic Escalator Details</u>
                            </td>
                          </tr>
                          <tr>
                            <td width="150px">
                              Brand Name:
                            </td>
                            <td width="25%" class="pl-0">
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="GeneSpecEsca_BaciEscaDeta_BranName10"
                                prefix="GeneSpecEsca_BaciEscaDeta_BranName" suffix="0"></cn2-textbox>
                            </td>
                            <td width="200px">
                              Model Number:
                            </td>
                            <td>
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="GeneSpecEsca_ModeNumb10" prefix="GeneSpecEsca_ModeNumb" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Escalator Type:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled ifZero manda inline="10"
                                options="Escalator:Escalator,Passenger Conveyor (Inclined):Passenger Conveyor (Inclined),Passenger Conveyor (No Inclination):Passenger Conveyor (No Inclination)"
                                id="GeneSpecEsca_CateAndNoEsca_CateOfEsca10"
                                prefix="GeneSpecEsca_CateAndNoEsca_CateOfEsca" suffix="0">
                              </cn2-select>
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Code Compliance (For major alteration
                                works, this refers to the part being
                                modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Code compliance with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="GeneSpecEsca_CodeCompWith10"
                                prefix="GeneSpecEsca_CodeCompWith" suffix="0"
                                options="SS 626ː2017:SS 626ː2017,Alternative Standard:Alternative Standard"
                                event-change="activateFields(this, 'codeCompliance', ['GeneSpecEsca_CodeCompWith_Othe'])">
                              </cn2-select>
                            </td>
                            <td>
                              <cn2-textbox no-label disabled inline="10" maxlength="18" ccw-field
                                id="GeneSpecEsca_CodeCompWith_Othe10" prefix="GeneSpecEsca_CodeCompWith_Othe"
                                suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              (code) with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="GeneSpecEsca_With10"
                                prefix="GeneSpecEsca_With" suffix="0"
                                options="No deviation from code:No deviation from code,Alternative Solution:Alternative Solution,Waiver:Waiver,Modification:Modification">
                              </cn2-select>
                            </td>
                            <td>
                              (deviation)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <span style="font-size: 0.7rem;">(Note: For any selection with
                                “Alternative Standards” and/or
                                “Alternative
                                Solution”/”Waiver”/”Modification”, the
                                respective alternative
                                solution/waiver/modification form has
                                to submitted)</span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Specifications (For major alteration
                                works, please fill in for the parts
                                being modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Inclination <br />
                              Angle:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="3" numeric disabled
                                    id="GeneSpecEsca_AnglOfIncl10" prefix="GeneSpecEsca_AnglOfIncl" suffix="0"
                                    event-blur="rangeValue(this, 'range', '1-300');">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  <sup>o</sup>
                                </div>
                              </div>                              
                            </td>
                            <td>
                              Step/ Pallet <br />
                              Width:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="8"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpecEsca_StepWidt10" prefix="GeneSpecEsca_StepWidt" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  m
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Rated Speed (Highest <br />
                              Speed):
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-8 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="8"
                                    onkeypress="return withOnlyDecimal(this, event, 2)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="GeneSpecEsca_RateSpee10" prefix="GeneSpecEsca_RateSpee" suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-4 m-0 p-0 pt-1 text-center">
                                  m/min
                                </div>
                              </div>                              
                            </td>
                            <td>Balustrade Type:</td>
                            <td class="pl-0">
                              <cn2-select no-label classOfWorks inline="10" options="Glass:Glass,Metal:Metal"
                                disabled id="GeneSpecEsca_BaluType10" prefix="GeneSpecEsca_BaluType" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>Drive Chain Number:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="50" disabled
                                id="GeneSpecEsca_DrivChaiNumb10" prefix="GeneSpecEsca_DrivChaiNumb" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Number of E-Stop Switches:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="3" numeric disabled
                                id="GeneSpecEsca_NumbOfEStoSwit10" prefix="GeneSpecEsca_NumbOfEStoSwit"
                                suffix="0" event-blur="rangeValue(this, 'range', '1-300');">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Drive Chain Type:</td>
                            <td class="pl-0">
                              <cn2-select no-label classOfWorks inline="10"
                                options="Duplex:Duplex,Triplex:Triplex" disabled
                                id="GeneSpecEsca_DrivChaiType10" prefix="GeneSpecEsca_DrivChaiType" suffix="0">
                              </cn2-select>
                            </td>
                            <td>Number of Flat Steps at Landing:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="3" numeric disabled
                                id="GeneSpecEsca_NumbOfFlatStepAtLand10"
                                prefix="GeneSpecEsca_NumbOfFlatStepAtLand" suffix="0"
                                event-blur="rangeValue(this, 'range', '1-300');">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Controller Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="50" disabled
                                id="GeneSpecEsca_ContMode10" prefix="GeneSpecEsca_ContMode" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Drive Machine Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="50" disabled
                                id="GeneSpec_DrivMachMode10" prefix="GeneSpec_DrivMachMode" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>Drive Machine Brake Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="50" disabled
                                id="GeneSpec_DrivMachBrakMode10" prefix="GeneSpec_DrivMachBrakMode" suffix="0">
                              </cn2-textbox>
                            </td>
                            <td>Auxiliary Brake Model:</td>
                            <td class="pl-0">
                              <cn2-textbox no-label classOfWorks inline="10" maxlength="50" disabled
                                id="GeneSpec_AuxiBrakMode10" prefix="GeneSpec_AuxiBrakMode" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mp-page" hidden>
    <div class="mls-espo-right-inner-container borderchecking">
      <h2>Section VII MCPS Details</h2>
      <table class="table table-borderless mb-0">
        <tbody>
          <tr>
            <td class="pl-0">
              VII.3. Group of MCPS (with same MCPS type, manufacturer details, specifications and type testing
              certificates)
            </td>
          </tr>
          <tr>
            <td class="pl-0">
              <cn2-button label="Add" id="btnSubmChec_CateAndNoLift4_Add10"
                event-click="duplicateForm(this, 'MCPSDetails_Container', 'main');"></cn2-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div con="MCPSDetails_Container" class="col-xs-12 col-sm-12 col-lg-12 col-md-12" style="padding-left: 0;">
        <div id="MCPSDetails_Forms10" prefix="MCPSDetails_Forms" suffix="0" style="margin-bottom: 0px;" form-div
          sub-con>
          <div id="MCPSDetailsAccordion10" prefix="MCPSDetailsAccordion" suffix="0">
            <h2 class="accordion-toggle">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="90%" class="align-top">
                      <br />
                      <b>Group&nbsp;<span counter-form>1</span> </b>
                    </td>
                    <td class="align-top">
                      <br />
                      <cn2-button label="Delete" id="btnSubmChec_CateAndNoLift4_Dele10" main-delete
                        event-click="deleteForm(this, 'MCPSDetails_Container', 'main');"
                        prefix="btnSubmChec_CateAndNoLift4_Dele" suffix="0" danger disabled>
                      </cn2-button>
                    </td>
                    <td style="float: right;">
                      <span class="fa fa-angle-up collapsed" data-toggle="collapse"
                        href="#MCPSDetailsFormChildAccordionBody10" id="#MCPSDetailsFormChildAccordionBody10"
                        prefix="#MCPSDetailsFormChildAccordionBody" suffix="0" child onclick="spanUpDown(this)"
                        aria-expanded="true" main-accordion-header style="margin-top: -10px !important;"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </h2>
            <div id="MCPSDetailsFormChildAccordionBody10" class="panel-collapse collapse show" child="div"
              prefix="MCPSDetailsFormChildAccordionBody" suffix="0" main-accordion-body>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td width="148px">
                      Quantity
                    </td>
                    <td width="25%" class="pl-0">
                      <cn2-select no-label id="SubmChec_CateAndNoMCPS_Quan10" details-quantity
                        prefix="SubmChec_CateAndNoMCPS_Quan" suffix="0" inline="10" fee="fee4"
                        event-change="activateWhenQuantity(this, 'fee4');totalPlanfee();"></cn2-select>
                    </td>
                    <td colspan="2"></td>
                  </tr>
                  <tr style="border-top: 1px solid black;">
                    <td colspan="4">
                      <cn2-button label="Add" id="btnSubmChec4_AddSeriNumb10" disabled add-disabled
                        event-click="duplicateForm(this, 'FirstField4_Container', 'sub');"
                        prefix="btnSubmChec4_AddSeriNumb" suffix="0"></cn2-button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="pt-2 pl-0">
                      <div class="p-0 m-0" con="FirstField4_Container">
                        <table class="table table-bordered mb-0" sub-con>
                          <tbody>
                            <tr>
                              <td width="150px">
                                MCPS Number:
                              </td>
                              <td width="25%" class="pl-0">
                                <cn2-textbox no-label maxlength="20" disabled ifZero manda inline="10"
                                  id="SubmChec_CateAndNoMCPS_MCPSNo10" prefix="SubmChec_CateAndNoMCPS_MCPSNo"
                                  sub-form suffix="0">
                                </cn2-textbox>
                              </td>
                              <td width="200px">
                                Number of stacks:
                              </td>
                              <td>
                                <cn2-textbox no-label event-blur="rangeValue(this, 'range', '1-50');" disabled
                                  ifZero manda inline="10" id="SubmChec_CateAndNoMCPS_NoOfStac10"
                                  prefix="SubmChec_CateAndNoMCPS_NoOfStac" sub-form suffix="0">
                                </cn2-textbox>
                              </td>
                            </tr>
                            <tr>
                             <td width="150px">
                               MCPS ID:
                             </td>
                             <td width="25%" class="pl-0">
                               <cn2-textbox no-label maxlength="20" disabled inline="10" mcpsid
                                 id="SubmChec_CateAndNoMCPS_MCPSID10_10" onkeydown="firstCharIsM(event, this.value);"
                                 prefix="SubmChec_CateAndNoMCPS_MCPSID" sub-form suffix="0"></cn2-textbox>
                             </td>
                             <td width="200px">
                                Number of Car Park Lots:
                              </td>
                              <td>
                                <cn2-textbox no-label event-blur="rangeValue(this, 'range', '1-300');" disabled
                                  ifZero manda inline="10" id="SubmChec_CateAndNoMCPS_NoOfCarpLots10"
                                  prefix="SubmChec_CateAndNoMCPS_NoOfCarpLots" sub-form suffix="0">
                                </cn2-textbox>
                              </td>
                           </tr>
                            <tr>  
                              <td colspan="4" class="text-right">
                                <cn2-button danger label="Delete" id="btnSubmChec3_DeleSeriNumb10_10" sub-form
                                  event-click="deleteForm(this, 'FirstField4_Container', 'sub');" disabled
                                  prefix="btnSubmChec3_DeleSeriNumb" suffix="0" style="margin-right: 42px;">
                                </cn2-button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table class="table table-borderless"
                        style="border-top: 1px solid black;border-bottom: 1px solid black;">
                        <tbody>
                          <tr>
                            <td colspan="4">
                              <u>Basic MCPS Details</u>
                            </td>
                          </tr>
                          <tr>
                            <td width="150px">
                              Brand Name:
                            </td>
                            <td width="25%" class="pl-0">
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="SubmChec_CateAndNoMCPS_BranName10" prefix="SubmChec_CateAndNoMCPS_BranName"
                                suffix="0"></cn2-textbox>
                            </td>
                            <td width="200px">
                              Model Number:
                            </td>
                            <td>
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="SubmChec_CateAndNoMCPS_ModeNo10" prefix="SubmChec_CateAndNoMCPS_ModeNo"
                                suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              MCPS Type:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label disabled ifZero manda inline="10"
                                options="Tower Systems:Tower Systems,Puzzle Systems:Puzzle Systems,Stacked Systems:Stacked Systems,Turntable:Turntable,Stack Packer:Stack Packer,Others:Others"
                                event-change="ifOthers(this, 'SubmChec_CateAndNoMCPS_MCPSOthe')"
                                id="SubmChec_CateAndNoMCPS_MCPSType10" prefix="SubmChec_CateAndNoMCPS_MCPSType"
                                suffix="0">
                              </cn2-select> <br><br>
                              <cn2-textbox no-label hidden id="SubmChec_CateAndNoMCPS_MCPSOthe10"
                                prefix="SubmChec_CateAndNoMCPS_MCPSOthe" inline="10" suffix="0" default-hidden>
                              </cn2-textbox>
                            </td>
                            <td>
                              Country of <br> Manufacture:
                            </td>
                            <td>
                              <cn2-textbox no-label disabled ifZero manda maxlength="50" inline="10"
                                id="SubmChec_CateAndNoMCPS_CounOfManu10"
                                prefix="SubmChec_CateAndNoMCPS_CounOfManu" suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Code Compliance (For major alteration
                                works, this refers to the part being
                                modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Code compliance with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="SubmChec_CateAndNoMCPS_CodeComp10"
                                prefix="SubmChec_CateAndNoMCPS_CodeComp" suffix="0"
                                options="BCA Code of Practice:BCA Code of Practice,EN14010:EN14010,Alternative Standard:Alternative Standard"
                                event-change="activateFields(this, 'codeCompliance', ['SubmChec_CateAndNoMCPS_CodeWith'])">
                              </cn2-select>
                            </td>
                            <td>
                              <cn2-textbox no-label disabled inline="10" maxlength="18" ccw-field
                                id="SubmChec_CateAndNoMCPS_CodeWith10" prefix="SubmChec_CateAndNoMCPS_CodeWith"
                                suffix="0">
                              </cn2-textbox>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              (code) with:
                            </td>
                            <td colspan="2" class="pl-0">
                              <cn2-select no-label disabled ifZero manda id="SubmChec_CateAndNoMCPS_CodeDevi10"
                                prefix="SubmChec_CateAndNoMCPS_CodeDevi" suffix="0"
                                options="No deviation from code:No deviation from code,Alternative Solution:Alternative Solution,Waiver:Waiver,Modification:Modification">
                              </cn2-select>
                            </td>
                            <td>
                              (deviation)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <span style="font-size: 0.7rem;">(Note: For any selection with
                                “Alternative Standards” and/or
                                “Alternative
                                Solution”/”Waiver”/”Modification”, the
                                respective alternative
                                solution/waiver/modification form has
                                to submitted)</span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="border-top: 1px solid black;">
                              <u>Specifications (For major alteration
                                works, please fill in for the parts
                                being modified only)</u>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              Size of Transfer area
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Width:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_TranWidt10" prefix="SubmChec_CateAndNoMCPS_TranWidt"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td>
                              Type of Operation:
                            </td>
                            <td class="pl-0">
                              <cn2-select no-label classOfWorks inline="10"
                                options="Automatic:Automatic,Hold to run:Hold to run" disabled
                                id="SubmChec_CateAndNoMCPS_TypeOfOper10"
                                prefix="SubmChec_CateAndNoMCPS_TypeOfOper" suffix="0">
                              </cn2-select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Length:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_TranLeng10" prefix="SubmChec_CateAndNoMCPS_TranLeng"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              Maximum vehicle size:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Width:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_VehiWidt10" prefix="SubmChec_CateAndNoMCPS_VehiWidt"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>
                              Length:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_VehiLeng10" prefix="SubmChec_CateAndNoMCPS_VehiLeng"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td>
                              Maximum Load:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_MaxiLoad10" prefix="SubmChec_CateAndNoMCPS_MaxiLoad"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  kg
                                </div>
                              </div>                              
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Height:
                            </td>
                            <td class="pl-0">
                              <div class="row m-0 p-0">
                                <div class="col-10 m-0 p-0">
                                  <cn2-textbox no-label classOfWorks inline="12" maxlength="10"
                                    onkeypress="return withOnlyDecimal(this, event, 1)"
                                    onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9" disabled
                                    id="SubmChec_CateAndNoMCPS_VehiHeig10" prefix="SubmChec_CateAndNoMCPS_VehiHeig"
                                    suffix="0">
                                  </cn2-textbox>
                                </div>
                                <div class="col-2 m-0 p-0 pt-1 text-center">
                                  mm
                                </div>
                              </div>                              
                            </td>
                            <td colspan="2">
                              <span style="font-size: .7rem;">
                                Note: The car mass here should include all components installed on the car (not
                                including interior finishing)
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  //document.getElementById("page4").innerHTML = page4;
  document.getElementById("page5").innerHTML = page5;
}

function hideTypeeTestParameterFirstStairLift() {
  //Type Test Parameter under StairLift to be removed temporarily.
  //   <tr>
  //   <td colspan="4" style="
  //         border-bottom: 1px solid black;
  //         border-top: 1px solid black;
  //       ">
  //     <h5 style="display: inline;">
  //       Type Test Parameters
  //     </h5>
  //   </td>
  // </tr>
  // <tr>
  //   <td colspan="4">
  //     <table class="table table-bordered mb-0 ml-2">
  //       <tbody>
  //         <tr>
  //           <td colspan="2">
  //             <h5 style="display: inline;">
  //               System Type Test
  //             </h5>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td width="40%">
  //             Certificate Number:
  //           </td>
  //           <td>
  //             <cn2-textbox no-label classOfWorks maxlength="1000"
  //               id="GeneSpec2_SystTypeTest_CertNumb10" inline="10"
  //               prefix="GeneSpec2_SystTypeTest_CertNumb" suffix="0"></cn2-textbox>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Expiry Date of Cert:</td>
  //           <td>
  //             <cn2-datefield no-label ifZeroEnable disabled
  //               id="GeneSpec2_SystTypeTest_ExpiDateOfCert10" inline="10" onfocusout="validateDate(this);dateEarlierTodayValidation(this)"
  //               prefix="GeneSpec2_SystTypeTest_ExpiDateOfCert" suffix="0">
  //             </cn2-datefield>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Notified Body:</td>
  //           <td>
  //             <cn2-textbox no-label classOfWorks maxlength="1000"
  //               id="GeneSpec2_SystTypeTest_NotiBody10" inline="10"
  //               prefix="GeneSpec2_SystTypeTest_NotiBody" suffix="0"></cn2-textbox>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Permissible Mass:</td>
  //           <td>
  //             <div class="row m-0 p-0">
  //               <div class="col-10 m-0 p-0">
  //                 <cn2-textbox no-label classOfWorks maxlength="8"
  //                   onkeypress="return withOnlyDecimal(this, event, 1)"
  //                   onblur="removeDecimalPoint(this, 'range');" range="0.1-9999.9"
  //                   id="GeneSpec2_SystTypeTest_PermMass10" inline="12"
  //                   prefix="GeneSpec2_SystTypeTest_PermMass" suffix="0">
  //                 </cn2-textbox>
  //               </div>
  //               <div class="col-2 m-0 p-0 pt-1 text-center">
  //                 kg
  //               </div>
  //             </div>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td colspan="2" style="
  //                 border-top: 1px solid black;
  //               ">
  //             <h5 style="display: inline;">
  //               Component Type Test
  //             </h5>
  //             &nbsp;
  //             <cn2-button label="Add" id="btnGeneSpec2_CompTypeTest_Add10" disabled
  //               add-disabled
  //               event-click="duplicateForm(this, 'Component2_Container', 'sub');"
  //               prefix="btnGeneSpec2_CompTypeTest_Add" suffix="0"></cn2-button>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td colspan="2" con="Component2_Container" style="
  //                 border-top: 1px solid black;
  //                 border-bottom: 1px solid black;
  //               ">
  //             <table class="table table-borderless mb-0" sub-con>
  //               <tbody>
  //                 <tr>
  //                   <td class="pl-0" width="40%">
  //                     Component:
  //                   </td>
  //                   <td>
  //                     <cn2-select no-label classOfWorks
  //                       options="Landing Door Locking Devices:Landing Door Locking Devices,Devices preventing falling or unchecked upwards movement of load-carrying unit:Devices preventing falling or unchecked upwards movement of load-carrying unit,Overspeed Limitation Devices:Overspeed Limitation Devices,Energy-Accumulating Shock Absorbers:Energy-Accumulating Shock Absorbers,Energy-Dissipating Shock Absorbers:Energy-Dissipating Shock Absorbers,Safety Devices fitted to jacks of hydraulic power circuits where these are used as devices to prevent falls:Safety Devices fitted to jacks of hydraulic power circuits where these are used as devices to prevent falls,Electric safety devices in the form of safety switches containing electronic components:Electric safety devices in the form of safety switches containing electronic components"
  //                       id="GeneSpec2_CompTypeTest_Comp10_10" inline="10"
  //                       prefix="GeneSpec2_CompTypeTest_Comp" sub-form suffix="0">
  //                     </cn2-select>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td class="pl-0">
  //                     Component OEM:
  //                   </td>
  //                   <td>
  //                     <cn2-textbox no-label classOfWorks maxlength="1000"
  //                       id="GeneSpec2_CompTypeTest_CompOfOEM10_10" inline="10"
  //                       prefix="GeneSpec2_CompTypeTest_CompOfOEM" sub-form suffix="0">
  //                     </cn2-textbox>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td class="pl-0">
  //                     Country of <br> Manufacture:
  //                   </td>
  //                   <td>
  //                     <cn2-textbox no-label classOfWorks maxlength="1000"
  //                       id="GeneSpec2_CompTypeTest_CounOfManu10_10" inline="10"
  //                       prefix="GeneSpec2_CompTypeTest_CounOfManu" sub-form suffix="0">
  //                     </cn2-textbox>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td class="pl-0">
  //                     Component Model No.
  //                   </td>
  //                   <td>
  //                     <cn2-textbox no-label classOfWorks maxlength="1000"
  //                       id="GeneSpec2_CompTypeTest_CompModeNo10_10" inline="10"
  //                       prefix="GeneSpec2_CompTypeTest_CompModeNo" sub-form suffix="0">
  //                     </cn2-textbox>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td class="pl-0">
  //                     Certificate Number:
  //                   </td>
  //                   <td>
  //                     <cn2-textbox no-label classOfWorks maxlength="1000"
  //                       id="GeneSpec2_CompTypeTest_CertNo10_10" inline="10"
  //                       prefix="GeneSpec2_CompTypeTest_CertNo" sub-form suffix="0">
  //                     </cn2-textbox>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td class="pl-0">
  //                     Expiry Date of Cert:
  //                   </td>
  //                   <td>
  //                     <cn2-datefield no-label ifZeroEnable inline="10" disabled
  //                       id="GeneSpec2_CompTypeTest_ExpiDateOfCert10_10" onfocusout="validateDate(this);dateEarlierTodayValidation(this)";
  //                       prefix="GeneSpec2_CompTypeTest_ExpiDateOfCert" sub-form
  //                       suffix="0">
  //                     </cn2-datefield>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="2">
  //                     <cn2-button danger label="Delete" class="float-right" sub-form
  //                       style="
  //                           margin-right: 77px;
  //                         "
  //                       event-click="deleteForm(this, 'Component2_Container', 'sub');"
  //                       id="btnGeneSpec2_CompTypeTest_Dele10_10"
  //                       prefix="btnGeneSpec2_CompTypeTest_Dele" suffix="0" disabled>
  //                     </cn2-button>
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </td>
  // </tr>
}

function hideTypeTestParameterFirstConveyor() {
  //Type Test Parameters under Conveyor Details to be removed temporarily.
  /* <tr>
                            <td colspan="4" style="
                                  border-bottom: 1px solid black;
                                  border-top: 1px solid black;
                                ">
                              <h5 style="display: inline;">
                                Type Test Parameters
                              </h5>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <table class="table table-bordered mb-0 ml-2">
                                <tbody>
                                  <tr>
                                    <td colspan="2">
                                      <h5 style="display: inline;">
                                        System Type Test
                                      </h5>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="40%">
                                      Certificate Number:
                                    </td>
                                    <td>
                                      <cn2-textbox no-label classOfWorks maxlength="1000"
                                        id="GeneSpecEsca_SystTypeTest_CertNumb10" inline="10"
                                        prefix="GeneSpecEsca_SystTypeTest_CertNumb" suffix="0"></cn2-textbox>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Expiry Date of Cert:</td>
                                    <td>
                                      <cn2-datefield no-label ifZeroEnable disabled
                                        id="GeneSpecEsca_SystTypeTest_ExpiDateOfCert10" onfocusout="validateDate(this);dateEarlierTodayValidation(this)" inline="10"
                                        prefix="GeneSpecEsca_SystTypeTest_ExpiDateOfCert" suffix="0">
                                      </cn2-datefield>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Notified Body:</td>
                                    <td>
                                      <cn2-textbox no-label classOfWorks maxlength="1000"
                                        id="GeneSpecEsca_SystTypeTest_NotiBody10" inline="10"
                                        prefix="GeneSpecEsca_SystTypeTest_NotiBody" suffix="0"></cn2-textbox>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" style="
                                          border-top: 1px solid black;
                                        ">
                                      <h5 style="display: inline;">
                                        Component Type Test
                                      </h5>
                                      &nbsp;
                                      <cn2-button label="Add" id="btnGeneSpec3_CompTypeTest_Add10" disabled
                                        add-disabled
                                        event-click="duplicateForm(this, 'Component3_Container', 'sub');"
                                        prefix="btnGeneSpec3_CompTypeTest_Add" suffix="0"></cn2-button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" con="Component3_Container" style="
                                          border-top: 1px solid black;
                                          border-bottom: 1px solid black;
                                        ">
                                      <table class="table table-borderless mb-0" sub-con>
                                        <tbody>
                                          <tr>
                                            <td class="pl-0" width="40%">
                                              Component:
                                            </td>
                                            <td>
                                              <cn2-select no-label classOfWorks
                                                options="Step / Pallet:Step / Pallet,PESSRAE:PESSRAE"
                                                id="GeneSpecEsca_CompTypeTest_Comp10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_Comp" sub-form suffix="0">
                                              </cn2-select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Component OEM:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpecEsca_CompTypeTest_CompOfOEM10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_CompOfOEM" sub-form
                                                suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Country of <br> Manufacture:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpecEsca_CompTypeTest_CounOfManu10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_CounOfManu" sub-form
                                                suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Component Model No.
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpecEsca_CompTypeTest_CompModeNo10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_CompModeNo" sub-form
                                                suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Certificate Number:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpecEsca_CompTypeTest_CertNo10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_CertNo" sub-form suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Expiry Date of Cert:
                                            </td>
                                            <td>
                                              <cn2-datefield no-label ifZeroEnable inline="10" disabled
                                                id="GeneSpecEsca_CompTypeTest_ExpiDateOfCert10_10" onfocusout="validateDate(this);dateEarlierTodayValidation(this)";
                                                prefix="GeneSpecEsca_CompTypeTest_ExpiDateOfCert" sub-form
                                                suffix="0">
                                              </cn2-datefield>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="pl-0">
                                              Notified Body:
                                            </td>
                                            <td>
                                              <cn2-textbox no-label classOfWorks maxlength="1000"
                                                id="GeneSpecEsca_CompTypeTest_NotiBody10_10" inline="10"
                                                prefix="GeneSpecEsca_CompTypeTest_NotiBody" suffix="0">
                                              </cn2-textbox>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">
                                              <cn2-button danger label="Delete" class="float-right" sub-form
                                                style="
                                                    margin-right: 77px;
                                                  "
                                                event-click="deleteForm(this, 'Component3_Container', 'sub');"
                                                id="btnGeneSpec3_CompTypeTest_Dele10_10"
                                                prefix="btnGeneSpec3_CompTypeTest_Dele" suffix="0" disabled>
                                              </cn2-button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr> */
}

function updatesRenderComputationPages() {
  for (let page of ["page5"]) {
    let div = document.getElementById(page);

    for (let a of div.querySelectorAll("[id]")) {
      if (jsonData[a.id] !== undefined) {
        if (typeof jsonData[a.id] === "string") {
          if (a.hasAttribute("default-value")) {
            a.value = a.getAttribute("default-value");
          } else {
            a.value = jsonData[a.id];
          }
        } else {
          a.checked = jsonData[a.id];
        }
      }
    }

    for (let a of div.querySelectorAll(
      ".lift-page, .escalator-page, .mp-page, .table-middle"
    )) {
      if (!a.className.includes("table-middle")) {
        for (let c of a.querySelectorAll("[form-div]")) {
          for (let b of c.querySelectorAll("td")) {
            if (!b.className.includes("align-"))
              b.classList.add("align-middle");
          }
        }
      } else {
        for (let b of a.querySelectorAll("td")) {
          if (!b.className.includes("align-")) b.classList.add("align-middle");
        }
      }
    }

    for (let a of div.querySelectorAll(
      "[prefix='SubmChec_CateAndNoLift_NoOfLift'], [prefix='SubmChec_CateAndNoLift2_NoOfLift'], [prefix='SubmChec_CateAndNoEsca_NoOfEsca'], [prefix='SubmChec_CateAndNoMCPS_Quan']"
    )) {
      a.setAttribute("options", options.join(","));
    }
  }
}

function populateCodeComp(el, field) {
  let con = findBlock(document.getElementById(el.id));
  let r = con.querySelector("[prefix='" + field + "']");
  if (el.value == "Vertical Platform Lift") {
    r.removeAttribute("options");
    r.setAttribute(
      "options",
      "EN 81-41ː2010:EN 81-41ː2010,ASME 18.1:ASME 18.1,Alternative Standard:Alternative Standard"
    );
    r.shadowRoot.querySelector("select").onchange();
  } else if (el.value == "Stairlift") {
    r.removeAttribute("options");
    r.setAttribute(
      "options",
      "EN 81-40ː2008:EN 81-40ː2008,ASME 18.1:ASME 18.1,Alternative Standard:Alternative Standard"
    );
    r.shadowRoot.querySelector("select").onchange();
  } else {
    r.removeAttribute("options");
    r.setAttribute(
      "options",
      "EN 81-41ː2010:EN 81-41ː2010,EN 81-40ː2008:EN 81-40ː2008,ASME 18.1:ASME 18.1,Alternative Standard:Alternative Standard"
    );
  }
}

function typeDriveSys(el, field) {
  let index = el.id.slice(-2);
  let selecBox = document.getElementById(field + index);

  if (el.value == "Vertical Platform Lift") {
    selecBox.removeAttribute("disabled");
    selecBox.setAttribute("mandatory", "");
    selecBox.setAttribute(
      "options",
      "Rack and Pinion:Rack and Pinion, Ropes and Suspension:Ropes and Suspension, Screw and Nut:Screw and Nut,Friction/Traction Drive:Friction/Traction Drive,Guided Chain:Guided Chain,Scissors Mechanism:Scissors Mechanism,Hydraulic (direct):Hydraulic (direct),Hydraulic(indirect):Hydraulic (indirect)"
    );
  } else {
    selecBox.setAttribute(
      "options",
      "Rope Suspension:Rope Suspension, Rack and Pinion:Rack and Pinion, Chain/Belt:Chain/Belt, Screw and Nut/Screw and Nut, Friction:Friction,Guided Rope and Ball:Guided Rope and Ball"
    );
  }
}

function notiBodyChange(el) {
  let index = el.id.slice(-2);
  let selecBox = document.getElementById(field + index);

  if (el.value == "PESSRAL") {
    selecBox.removeAttribute("options");
    selecBox.setAttribute(
      "options",
      "LIFTINSTITUUT B.V:LIFTINSTITUUT B.V,TUV SUD Industrie Service GmbH:TUV SUD Industrie Service GmbH,TUV Rheinland Industrie Service GmbH:TUV Rheinland Industrie Service GmbH,National Elevator Inspection and Testing Centre NETEC:National Elevator Inspection and Testing Centre NETEC,Shanghai Jiaotong University Elevator Testing Centre SJUETC:Shanghai Jiaotong University Elevator Testing Centre SJUETC,National Elevator Quality Supervision and Inspection Centre (Guang Dong):National Elevator Quality Supervision and Inspection Centre (Guang Dong),Others:Others"
    );
  } else {
    selecBox.removeAttribute("options");
    selecBox.setAttribute("options", "");
  }
}

function resetPages() {
  let textBoxesPage4 = document
    .getElementById("page4")
    .querySelectorAll(
      "cn2-textbox, cn2-textarea, cn2-datefield, cn2-select, cn2-checked"
    );

  for (let a of textBoxesPage4) {
    a.value = "";
    if (a.id == "Member_Member_Name_QP10") {
      a.removeAttribute("mandatory");
      a.setAttribute("mandatory", "");
    }
    if (a.hasAttribute("data-invalid")) {
      a.removeAttribute("data-invalid");
      a.removeAttribute("data-invalid-message");
    }
  }

  for (let b of document.getElementById("page5").children) {
    if (!b.hasAttribute("hidden")) {
      for (let a of b.querySelectorAll("[con]")) {
        let count = a.childElementCount;
        if (count > 1) {
          for (let i = 1; i < count; i++) {
            a.lastElementChild.remove();
          }
        }
      }
    }
  }

  for (let b of document.getElementById("page5").children) {
    if (!b.hasAttribute("hidden")) {
      for (let a of b.querySelectorAll("[con]")) {
        for (let c of a.querySelectorAll("[details-quantity]")) {
          c.value = "";
          c.shadowRoot.querySelector("select").onchange();
        }

        for (let d of a.querySelectorAll("cn2-button[danger]")) {
          d.removeAttribute("disabled");
          d.setAttribute("disabled", "");
        }
      }
    }
  }

  for (let a of document
    .getElementById("page6")
    .querySelectorAll("cn2-textbox, cn2-datefield, cn2-select")) {
    a.value = "";
    a.removeAttribute("disabled");
    a.removeAttribute("mandatory");
    if (!a.hasAttribute("dont-disabled")) {
      a.setAttribute("disabled", "");
    }

    if (a.id == "PaymMode_PaidEarl20") {
      a.removeAttribute("disabled");
      a.setAttribute("mandatory", "");
    }
  }

  for (let a of document
    .getElementById("page6")
    .querySelectorAll("input[type='radio']")) {
    a.checked = false;
    if (a.id == "PaymMode_PaidEarl10") {
      a.checked = true;
    }
  }

  document.getElementById("PaymMode_Paym10").value = "0.00";
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteClass).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteClass);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function removeAddUENerror(element, uenFieldPrefix, suffix) {
  let id = getId(element.id);
  let uen = document.getElementById(uenFieldPrefix + id + suffix);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeMandIfOneChecked(element) {
  let group = document.querySelectorAll(`[name="${element.name}"]`);
  let pass = false;
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked) {
      pass = true;
    }
  }
  if (pass == true) {
    for (let i = 0; i < group.length; i++) {
      group[i].removeAttribute("mandatory");
      group[i].removeAttribute("checked");
    }
  } else {
    for (let i = 0; i < group.length; i++) {
      group[i].setAttribute("mandatory", "");
      group[i].setAttribute("checked", "");
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
  let d = new Date(year, month - 1, day);
  if (
    (d.getFullYear() != year &&
      d.getMonth() != month - 1 &&
      d.getDate() != day) ||
    year > 2999 ||
    year < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  } else if (
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

//Prevent future date being selected
function dateFutureTodayValidation(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  var currentDate = new Date(year, month - 1, day);

  let dateTime = new Date();

  if (dateTime.getTime() < currentDate.getTime()) {
    datefield.setAttribute("data-invalid", "");
    datefield.setAttribute(
      "data-invalid-message",
      "The selected date must not be later than today’s date."
    );
  } else {
    datefield.removeAttribute("data-invalid");
    datefield.removeAttribute("data-invalid-message");
  }
}

//Prevent earlier date being selected
function dateEarlierTodayValidation(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  var currentDate = new Date(year, month - 1, day);

  let dateTime = new Date();

  if (dateTime.getTime() > currentDate.getTime()) {
    datefield.setAttribute("data-invalid", "");
    datefield.setAttribute(
      "data-invalid-message",
      "The selected date must not be earlier than today’s date."
    );
  } else {
    datefield.removeAttribute("data-invalid");
    datefield.removeAttribute("data-invalid-message");
  }
}

// function Project_TypeOfPlan10_change(element) {
//   let field = document.getElementById(element.id);
//   let planNumberField = document.getElementById("PartOfAppl_PlanType10");
//   let page4 = document.querySelector("[target='page4']");
//   let page5 = document.querySelector("[target='page5']");
//   let page6 = document.querySelector("[target='page6']");
//   page4.setAttribute("hidden", "");
//   page5.setAttribute("hidden", "");
//   page6.setAttribute("page-number", "5");

//   toggleSubmissionChecklist(false);

//   toggleEscalatorParticularQPSubmission(false);
//   toggleEscalatorParticularQPSupervision(false);
//   toggleEscalatorParticularQPTestingComissioning(false);
//   toggleEscalatorParticularQPContractor(false);

//   toggleLiftParticularQPSubmission(false);
//   toggleLiftParticularQPSupervision(false);
//   toggleLiftParticularQPTestingComissioning(false);
//   toggleLiftParticularQPContractor(false);

//   toggleMCPSParticularQPSubmission(false);
//   toggleMCPSParticularQPSupervision(false);
//   toggleMCPSParticularQPTestingComissioning(false);
//   toggleMCPSParticularQPContractor(false);

//   toggleEscalatorDetails(false);
//   toggleLiftDetails(false);
//   toggleMCPSDetails(false);
//   switch (field.valueLabel) {
//     case "Lift":
//       planNumberField.value = "LP";
//       page4.removeAttribute("hidden");
//       page5.removeAttribute("hidden", "");
//       page4.setAttribute(
//         "label",
//         "Particulars and Declaration by Qualified Person for Submission of the Plans for Lift Works"
//       );
//       page5.setAttribute("label", "Lift Details");
//       toggleLiftParticularQPSubmission(true);
//       toggleLiftParticularQPSupervision(true);
//       toggleLiftParticularQPTestingComissioning(true);
//       toggleLiftParticularQPContractor(true);
//       toggleSubmissionChecklist(true);
//       toggleLiftDetails(true);
//       break;
//     case "Escalator":
//       planNumberField.value = "EP";
//       page4.removeAttribute("hidden");
//       page5.removeAttribute("hidden", "");
//       page4.setAttribute(
//         "label",
//         "Particulars and Declaration by Qualified Person for Submission of the Plans for Escalator Works"
//       );
//       page5.setAttribute("label", "Escalator Details");
//       toggleEscalatorParticularQPSubmission(true);
//       toggleEscalatorParticularQPSupervision(true);
//       toggleEscalatorParticularQPTestingComissioning(true);
//       toggleEscalatorParticularQPContractor(true);
//       toggleSubmissionChecklist(true);
//       toggleEscalatorDetails(true);
//       break;
//   }
// }

function PartOfAppl_PlanType20_change(element) {
  let textBox = document.getElementById(element.id);

  if (textBox.value.trim() === "000") {
    textBox.setAttribute("data-invalid", "");
    textBox.setAttribute(
      "data-invalid-message",
      "Data of field is limited to 3 digits. Please try again."
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

function DeclByAppl_IsThisAmenPlan_Yes10_change(element) {
  let planTypeField = document.querySelectorAll(
    "[prefix='DeclByAppl_AmenPlanType']"
  );
  let planNoField = document.querySelectorAll(
    "[prefix='DeclByAppl_AmenPlanNo']"
  );
  let addBtn = document.getElementById("planNoAddBtn");
  let deleteBtn = document.querySelectorAll(".amendmentDelete");
  let childCount = document.getElementById("amendmentPlanNo").childElementCount;
  let formField = document.querySelectorAll(".Afields");
  let planSign = document.getElementById("amendmentSign");
  if (element.checked) {
    addBtn.removeAttribute("disabled");
    planSign.textContent = "*";
    for (let i = 0; i < planTypeField.length; i++) {
      planTypeField[i].removeAttribute("disabled");
      planNoField[i].removeAttribute("disabled");
      planNoField[i].setAttribute("mandatory", "");
    }
  } else {
    addBtn.setAttribute("disabled", "");
    planSign.textContent = "";
    for (let i = 0; i < planTypeField.length; i++) {
      planTypeField[i].setAttribute("disabled", "");
      planTypeField[i].value = "";
      planNoField[i].setAttribute("disabled", "");
      planNoField[i].value = "";
      planNoField[i].removeAttribute("mandatory");
      deleteBtn[i].setAttribute("disabled", "");
    }
    if (childCount > 1) {
      for (let x = 0; x < formField.length; x++) {
        if (x != 0) {
          formField[x].parentNode.removeChild(formField[x]);
          let elements = formField[x].querySelectorAll("cn2-textbox");
          for (let element of elements) delete jsonData[element.id];
        }
      }
    }
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteClass).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteClass);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
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

function removeAddUENerror(element, uenFieldPrefix, suffix) {
  let id = getId(element.id);
  let uen = document.getElementById(uenFieldPrefix + id + suffix);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeDuplicateError(parent, prefix) {
  let childCount = document.getElementById(parent).childElementCount;
  let fields = document.querySelectorAll(`[prefix='${prefix}']`);
  if (childCount > 1) {
    fields[fields.length - 1].removeAttribute("data-invalid");
    fields[fields.length - 1].removeAttribute("data-invalid-message");
  }
}

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeMandaOnCheck(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("mandatory");
    checkbox.removeAttribute("checked");
  } else {
    checkbox.setAttribute("mandatory", "");
    checkbox.setAttribute("checked", "");
  }
}

function toggleEscalatorDetails(condition) {
  let mandaFields = [
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoEsca_NoOfEsca"]`),
    document.querySelectorAll(`[prefix="SubmChec_EscaNumb"]`),
    document.querySelectorAll(`[prefix="SubmChec_RiseOfEsca10"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_BaciEscaDeta_BranName"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_ModeNumb"]`),
    document.querySelectorAll(
      `[prefix="GeneSpecEsca_CateAndNoEsca_CateOfEsca"]`
    ),
    document.querySelectorAll(`[prefix="GeneSpecEsca_CodeCompWith"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_With"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_AnglOfIncl"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_StepWidt"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_RateSpee"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_BaluType"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_DrivChaiNumb"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_NumbOfEStoSwit"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_DrivChaiType"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_NumbOfFlatStepAtLand"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_ContMode"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_DrivMachMode"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_DrivMachBrakMode"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_AuxiBrakMode"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_SystTypeTest_CertNumb"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_SystTypeTest_NotiBody"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_CompTypeTest_Comp"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_CompTypeTest_CompOfOEM"]`),
    document.querySelectorAll(
      `[prefix="GeneSpecEsca_CompTypeTest_CounOfManu"]`
    ),
    document.querySelectorAll(
      `[prefix="GeneSpecEsca_CompTypeTest_CompModeNo"]`
    ),
    document.querySelectorAll(`[prefix="GeneSpecEsca_CompTypeTest_CertNo"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_CompTypeTest_NotiBody"]`),
  ];
  let disabledField = document.querySelectorAll(
    `[prefix="GeneSpec_CodeCompWith_Othe"]`
  );
  let optionalField = [
    document.querySelectorAll(
      `[prefix="GeneSpecEsca_SystTypeTest_ExpiDateOfCert"]`
    ),
    document.querySelectorAll(
      `[prefix="GeneSpecEsca_CompTypeTest_ExpiDateOfCert"]`
    ),
  ];
  let deleteBtns = [
    document.querySelectorAll(`[prefix="EscaDeta_Delete10"]`),
    document.querySelectorAll(`[prefix="EscaDeta_EscaNo_Delete"]`),
    document.querySelectorAll(`[prefix="innerComponentEsca_Delete"]`),
  ];
  let formField = document.querySelectorAll(`[prefix="EscaDetaChild"]`);
  let formField2 = document.querySelectorAll(`[prefix="EscaDeta_EscaNo_Form"]`);
  let formField3 = document.querySelectorAll(`[prefix="innerComponentEsca"]`);
  let childCount = document.getElementById("EscaDetaContainer")
    .childElementCount;
  let childCount2 = document.getElementById("EscaDeta_EscaNo_Cont10")
    .childElementCount;
  let childCount3 = document.getElementById("componentTypeTestEsca10")
    .childElementCount;
  let main = document.getElementById("EscalatorDetails");

  if (condition == true) {
    main.removeAttribute("hidden");
    for (fields of mandaFields) {
      for (let i = 0; i < fields.length; i++) {
        fields[i].setAttribute("mandatory", "");
      }
    }
    for (let i = 0; i < disabledField.length; i++) {
      disabledField[i].setAttribute("disabled", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (fields of mandaFields) {
      for (let i = 0; i < fields.length; i++) {
        fields[i].removeAttribute("mandatory");
        fields[i].removeAttribute("data-invalid");
        fields[i].removeAttribute("data-invalid-message");
        fields[i].value = "";
      }
    }
    for (let i = 0; i < disabledField.length; i++) {
      disabledField[i].removeAttribute("mandatory");
      disabledField[i].value = "";
    }
    for (f of optionalField) {
      for (let b = 0; b < f.length; b++) {
        f[b].value = "";
      }
    }

    for (buttons of deleteBtns) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled", "");
      }
    }
    resetAccordion();
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
          let elements = document.formField[i].querySelectorAll(
            "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
          );
          for (let element of elements) delete jsonData[element.id];
        }
      }
    }
    if (childCount2 > 1) {
      for (let i = 0; i < formField2.length; i++) {
        if (i != 0) {
          formField2[i].parentNode.removeChild(formField2[i]);
        }
      }
    }
    if (childCount3 > 1) {
      for (let i = 0; i < formField3.length; i++) {
        if (i != 0) {
          formField3[i].parentNode.removeChild(formField3[i]);
        }
      }
    }
  }
}

function toggleLiftDetails(condition) {
  let mandaFields = [
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_NoOfLift"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_LiftNumb"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_AcceProv"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_Trav"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_FireSafeProv"]`),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_NumbOfStopServ"]`
    ),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_MaxiBlinHoisHeig"]`
    ),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_RateSpee"]`),
    document.querySelectorAll(`[prefix="GeneSpec_ModeNumb"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_CateOfLift"]`),
    document.querySelectorAll(`[prefix="GeneSpec_BaciLiftDeta_MachRoom"]`),
    document.querySelectorAll(`[prefix="GeneSpec_BaciLiftDeta_Gear"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CodeCompWith"]`),
    document.querySelectorAll(`[prefix="GeneSpec_With"]`),
    document.querySelectorAll(`[prefix="GeneSpec_BaciLiftDeta_BranName"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Dept"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarMass"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Widt"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Heig"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MaxPassCapa"]`),
    document.querySelectorAll(`[prefix="GeneSpec_RateLoad"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MaxAlloDecoWeig"]`),
    document.querySelectorAll(`[prefix="GeneSpec_ContMode"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MachBrakType"]`),
    document.querySelectorAll(`[prefix="GeneSpec_TracMachMode"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MachBrakMode"]`),
    document.querySelectorAll(`[prefix="GeneSpec_RopeBeltNumb"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SuspRopeBeltConf1"]`),
    document.querySelectorAll(`[prefix="GeneSpec_RopeBeltSize"]`),
    document.querySelectorAll(`[prefix="GeneSpec_GuilRailSize]"`),
    document.querySelectorAll(`[prefix="GeneSpec_SuspRopeBeltConf2"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarDoorOperBran"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SuspRopeBeltConf3"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarDoorType"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarDoorOperMode"]`),
    document.querySelectorAll(`[prefix="GeneSpec_LighCurtPhotMake"]`),
    document.querySelectorAll(`[prefix="GeneSpec_LighCurtPhotMode"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MechEdgeProv"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SystTypeTest_CertNumb"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SystTypeTest_NotiBody"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SystTypeTest_PermMass"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_Comp"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_CompOfOEM10"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_CounOfManu10"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_CompModeNo10"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_CertNo"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_NotiBody"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_PermMass"]`),
  ];
  let disabledField = [
    document.querySelectorAll(`[prefix="GeneSpec_CodeCompWith_Othe"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_EmerBrakType"]`),
  ];
  let optionalField = [
    document.querySelectorAll(
      `[prefix="GeneSpec_SystTypeTest_ExpiDateOfCert"]`
    ),
    document.querySelectorAll(
      `[prefix="GeneSpec_CompTypeTest_ExpiDateOfCert"]`
    ),
  ];
  let deleteBtns = [
    document.querySelectorAll(`[prefix="innerComponentLift_Delete"]`),
    document.querySelectorAll(`[prefix="LiftDeta_LiftNo_Delete"]`),
    document.querySelectorAll(`[prefix="LiftDeta_Delete10"]`),
  ];
  let formField = document.querySelectorAll(`[prefix="LiftDetaChild"]`);
  let formField2 = document.querySelectorAll(`[prefix="LiftDeta_LiftNo_Form"]`);
  let formField3 = document.querySelectorAll(`[prefix="innerComponentLift"]`);
  let childCount = document.getElementById("LiftDetaContainer")
    .childElementCount;
  let childCount2 = document.getElementById("LiftDeta_Cont10")
    .childElementCount;
  let childCount3 = document.getElementById("componentTypeTestLift10")
    .childElementCount;
  let main = document.getElementById("LiftDetails");

  if (condition == true) {
    main.removeAttribute("hidden");
    for (fields of mandaFields) {
      for (let i = 0; i < fields.length; i++) {
        fields[i].setAttribute("mandatory", "");
      }
    }
    for (f of disabledField) {
      for (let i = 0; i < f.length; i++) {
        f[i].setAttribute("disabled", "");
      }
    }
  } else {
    main.setAttribute("hidden", "");
    removeDuplicateAddErrorsLift();
    for (fields of mandaFields) {
      for (let i = 0; i < fields.length; i++) {
        fields[i].removeAttribute("mandatory");
        fields[i].removeAttribute("data-invalid");
        fields[i].removeAttribute("data-invalid-message");
        fields[i].value = "";
      }
    }
    for (f of disabledField) {
      for (let i = 0; i < f.length; i++) {
        f[i].removeAttribute("mandatory");
        f[i].value = "";
      }
    }

    for (let i = 0; i < optionalField.length; i++) {
      optionalField[i].value = "";
    }
    for (buttons of deleteBtns) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled", "");
      }
    }
    resetAccordionLift();
    if (childCount > 1) {
      for (let a = 0; a < formField.length; a++) {
        if (a != 0) {
          formField[a].parentNode.removeChild(formField[a]);
          let elements = document.formField[a].querySelectorAll(
            "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
          );
          for (let element of elements) delete jsonData[element.id];
        }
      }
    }
    if (childCount2 > 1) {
      for (let i = 0; i < formField2.length; i++) {
        if (i != 0) {
          formField2[i].parentNode.removeChild(formField2[i]);
        }
      }
    }
    if (childCount3 > 1) {
      for (let i = 0; i < formField3.length; i++) {
        if (i != 0) {
          formField3[i].parentNode.removeChild(formField3[i]);
        }
      }
    }
  }
}

function toggleEscalatorParticularQPSubmission(condition) {
  let main = document.getElementById("particularsQPEscalatorSubmission");
  let nonMandaFields = [
    document.getElementById("MemberRole_Professional_No_QP40"),
    document.getElementById("Member_Firm_Name_QP40"),
    document.getElementById("Member_Address_QP40"),
    document.getElementById("Member_Tel_No_QP40"),
    document.getElementById("Member_Mobile_No_QP40"),
    document.getElementById("Member_Email_Address1_QP40"),
    document.getElementById("DeclByQualPers_IHereDeclThatIHaveSubm50"),
  ];
  let mandaFields = [
    document.getElementById("Member_Member_Name_QP40"),
    document.getElementById("Members_UEN_QP40"),
  ];
  let mandaCheckboxes = [
    document.getElementById("DeclByQualPers_Esca_IConfThatI10"),
    document.getElementById("DeclByQualPers_Esca_IHereDeclThat10"),
    document.getElementById("DeclByQualPers_Esca_IHereDeclThatIHaveSubm10"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
    for (f of mandaFields) {
      f.setAttribute("mandatory", "");
    }
    for (c of mandaCheckboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
    for (f of nonMandaFields) {
      f.value = "";
      if (f.id == "DeclByQualPers_IHereDeclThatIHaveSubm50") {
        f.setAttribute("disabled");
        f.value = "";
      }
    }
    for (c of mandaCheckboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
  }
}

function toggleLiftParticularQPSubmission(condition) {
  let main = document.getElementById("particularsQPLiftSubmission");
  let nonMandaFields = [
    document.getElementById("MemberRole_Professional_No_QP10"),
    document.getElementById("Member_Firm_Name_QP10"),
    document.getElementById("Member_Address_QP10"),
    document.getElementById("Member_Tel_No_QP10"),
    document.getElementById("Member_Mobile_No_QP10"),
    document.getElementById("Member_Email_Address1_QP10"),
    document.getElementById("DeclByQualPers_IHereDeclThatIHaveSubm70"),
  ];
  let mandaFields = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("Members_UEN_QP10"),
  ];
  let mandaCheckboxes = [
    document.getElementById("DeclByQualPers_Lift_IConfThatI10"),
    document.getElementById("DeclByQualPers_Lift_IHereDeclThat10"),
    document.getElementById("DeclByQualPers_Lift_IHereDeclThatIHaveSubm10"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.setAttribute("mandatory", "");
      f.shadowRoot.querySelector("input").removeAttribute("class");
      f.shadowRoot
        .querySelector("input")
        .setAttribute("class", "form-control input-text-required");
    }
    for (c of mandaCheckboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
    for (f of nonMandaFields) {
      f.value = "";
      if (f.id == "DeclByQualPers_IHereDeclThatIHaveSubm70") {
        f.setAttribute("disabled");
        f.value = "";
      }
    }
    for (c of mandaCheckboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
  }
}

function toggleMCPSParticularQPSubmission(condition) {
  let main = document.getElementById("particularsQPMCPSSubmission");
  let nonMandaFields = [
    document.getElementById("MemberRole_Professional_No_QP10"),
    document.getElementById("Member_Firm_Name_QP10"),
    document.getElementById("Member_Address_QP10"),
    document.getElementById("Member_Tel_No_QP10"),
    document.getElementById("Member_Mobile_No_QP10"),
    document.getElementById("Member_Email_Address1_QP10"),
    document.getElementById("DeclByQualPers_IHereDeclThatIHaveSubm70"),
  ];
  let mandaFields = [
    document.getElementById("Member_Member_Name_QP10"),
    document.getElementById("Members_UEN_QP10"),
  ];
  let mandaCheckboxes = [
    document.getElementById("DeclByQualPers_Lift_IConfThatI10"),
    document.getElementById("DeclByQualPers_Lift_IHereDeclThat10"),
    document.getElementById("DeclByQualPers_Lift_IHereDeclThatIHaveSubm10"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.setAttribute("mandatory", "");
      f.shadowRoot.querySelector("input").removeAttribute("class");
      f.shadowRoot
        .querySelector("input")
        .setAttribute("class", "form-control input-text-required");
    }
    for (c of mandaCheckboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
    for (f of nonMandaFields) {
      f.value = "";
      if (f.id == "DeclByQualPers_IHereDeclThatIHaveSubm70") {
        f.setAttribute("disabled");
        f.value = "";
      }
    }
    for (c of mandaCheckboxes) {
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
      c.checked = false;
    }
  }
}

function toggleEscalatorParticularQPSupervision(condition) {
  let main = document.getElementById("particularsQPEscalatorSupervision");
  let nonMandaFields = [
    document.getElementById("Member_Member_Name_QP50"),
    document.getElementById("MemberRole_Professional_No_QP50"),
    document.getElementById("Member_Firm_Name_QP50"),
    document.getElementById("Members_UEN_QP50"),
    document.getElementById("Member_Address_QP50"),
    document.getElementById("Member_Tel_No_QP50"),
    document.getElementById("Member_Mobile_No_QP50"),
    document.getElementById("Member_Email_Address1_QP50"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");

    for (f of nonMandaFields) {
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
  }
}

function toggleLiftParticularQPSupervision(condition) {
  let main = document.getElementById("particularsQPLiftSupervision");
  let nonMandaFields = [
    document.getElementById("Member_Member_Name_QP20"),
    document.getElementById("MemberRole_Professional_No_QP20"),
    document.getElementById("Member_Firm_Name_QP20"),
    document.getElementById("Members_UEN_QP20"),
    document.getElementById("Member_Address_QP20"),
    document.getElementById("Member_Tel_No_QP20"),
    document.getElementById("Member_Mobile_No_QP20"),
    document.getElementById("Member_Email_Address1_QP20"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");

    for (f of nonMandaFields) {
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
  }
}

function toggleEscalatorParticularQPTestingComissioning(condition) {
  let main = document.getElementById(
    "particularsQPEscalatorTestingComissioning"
  );
  let nonMandaFields = [
    document.getElementById("Member_Member_Name_QP60"),
    document.getElementById("MemberRole_Professional_No_QP60"),
    document.getElementById("Member_Firm_Name_QP60"),
    document.getElementById("Members_UEN_QP60"),
    document.getElementById("Member_Address_QP60"),
    document.getElementById("Member_Tel_No_QP60"),
    document.getElementById("Member_Mobile_No_QP60"),
    document.getElementById("Member_Email_Address1_QP60"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");

    for (f of nonMandaFields) {
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
  }
}

function toggleLiftParticularQPTestingComissioning(condition) {
  let main = document.getElementById("particularsQPLiftTestingComissioning");
  let nonMandaFields = [
    document.getElementById("Member_Member_Name_QP30"),
    document.getElementById("MemberRole_Professional_No_QP30"),
    document.getElementById("Member_Firm_Name_QP30"),
    document.getElementById("Members_UEN_QP30"),
    document.getElementById("Member_Address_QP30"),
    document.getElementById("Member_Tel_No_QP30"),
    document.getElementById("Member_Mobile_No_QP30"),
    document.getElementById("Member_Email_Address1_QP30"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");

    for (f of nonMandaFields) {
      f.value = "";
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
    }
  }
}

function toggleEscalatorParticularQPContractor(condition) {
  let main = document.getElementById("particularsQPEscalatorContractor");
  let nonMandaFields = [
    document.getElementById("MemberRole_Professional_No_EscaCont10"),
    document.getElementById("Member_Mobile_No_EscaCont10"),
  ];
  let mandaFields = [
    document.getElementById("Member_Name_EscaCont10"),
    document.getElementById("Member_Firm_Name_EscaCont10"),
    document.getElementById("Members_UEN_EscaCont10"),
    document.getElementById("Member_Address_EscaCont10"),
    document.getElementById("Member_Tel_No_EscaCont10"),
    document.getElementById("Member_Email_Address1_EscaCont10"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
    for (f of mandaFields) {
      f.setAttribute("mandatory", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
      f.value = "";
    }
    for (f of nonMandaFields) {
      f.value = "";
    }
  }
}

function toggleLiftParticularQPContractor(condition) {
  let main = document.getElementById("particularsQPLiftContractor");
  let nonMandaFields = [
    document.getElementById("MemberRole_Professional_No_LiftCont10"),
    document.getElementById("Member_Mobile_No_LiftCont10"),
  ];
  let mandaFields = [
    document.getElementById("Member_Name_LiftCont10"),
    document.getElementById("Member_Firm_Name_LiftCont10"),
    document.getElementById("Members_UEN_LiftCont10"),
    document.getElementById("Member_Address_LiftCont10"),
    document.getElementById("Member_Tel_No_LiftCont10"),
    document.getElementById("Member_Email_Address1_LiftCont10"),
  ];
  if (condition == true) {
    main.removeAttribute("hidden");
    for (f of mandaFields) {
      f.setAttribute("mandatory", "");
    }
  } else {
    main.setAttribute("hidden", "");
    for (f of mandaFields) {
      f.removeAttribute("mandatory");
      f.removeAttribute("data-invalid");
      f.removeAttribute("data-invalid-message");
      f.value = "";
    }
    for (f of nonMandaFields) {
      f.value = "";
    }
  }
}

function validateEmailAdd(el) {
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

function SubmChec_NotiOfAppoAuth_change(element) {
  let targetDate = document.getElementById(
    "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev20"
  );
  switch (element.id) {
    case "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10":
      targetDate.removeAttribute("disabled");
      targetDate.setAttribute("mandatory", "");
      break;
    default:
      targetDate.setAttribute("disabled", "");
      targetDate.removeAttribute("mandatory");
      targetDate.removeAttribute("data-invalid");
      targetDate.value = "";
      break;
  }
}

function SubmChec_AlteSoluAre_change(element) {
  let targetDate = document.getElementById(
    "SubmChec_AlteSoluAre_HadBeenSubmPrev20"
  );
  switch (element.id) {
    case "SubmChec_AlteSoluAre_HadBeenSubmPrev10":
      targetDate.removeAttribute("disabled");
      targetDate.setAttribute("mandatory", "");
      break;
    default:
      targetDate.setAttribute("disabled", "");
      targetDate.removeAttribute("mandatory");
      targetDate.removeAttribute("data-invalid");
      targetDate.value = "";
      break;
  }
}

function SubmChec_WaivModiForm_change(element) {
  let targetDate = document.getElementById(
    "SubmChec_WaivModiForm_HadBeenSubmPrev20"
  );
  switch (element.id) {
    case "SubmChec_WaivModiForm_HadBeenSubmPrev10":
      targetDate.removeAttribute("disabled");
      targetDate.setAttribute("mandatory", "");
      break;
    default:
      targetDate.setAttribute("disabled", "");
      targetDate.removeAttribute("mandatory");
      targetDate.removeAttribute("data-invalid");
      targetDate.value = "";
      break;
  }
}

function toggleSubmissionChecklist(condition) {
  let main = document.getElementById("SubmissionChecklist");
  let radiosUnchecked = [
    document.getElementById("SubmChec_NotiOfAppoAuth_IsAtta10"),
    document.getElementById("SubmChec_AlteSoluAre_IsAtta10"),
    document.getElementById("SubmChec_AlteSoluAre_HadBeenSubmPrev10"),
    document.getElementById("SubmChec_WaivModiForm_IsAtta10"),
    document.getElementById("SubmChec_WaivModiForm_HadBeenSubmPrev10"),
  ];
  let radiosChecked = [
    document.getElementById("SubmChec_NotiOfAppoAuth_HadBeenSubmPrev10"),
    document.getElementById("SubmChec_AlteSoluAre_IsNotRequ10"),
    document.getElementById("SubmChec_WaivModiForm_IsNotRequ10"),
  ];
  let disabledFields = [
    document.getElementById("SubmChec_AlteSoluAre_HadBeenSubmPrev20"),
    document.getElementById("SubmChec_WaivModiForm_HadBeenSubmPrev20"),
  ];
  let datefield = document.getElementById(
    "SubmChec_NotiOfAppoAuth_HadBeenSubmPrev20"
  );
  if (condition == true) {
    main.removeAttribute("hidden");
    for (r of radiosChecked) {
      r.checked = true;
    }
    datefield.setAttribute("mandatory", "");
    datefield.removeAttribute("disabled");
  } else {
    main.setAttribute("hidden", "");
    for (r of radiosUnchecked) {
      r.checked = false;
    }
    for (f of disabledFields) {
      f.setAttribute("disabled", "");
      f.removeAttribute("mandatory");
      f.value = "";
    }
    datefield.removeAttribute("mandatory");
    datefield.value = "";
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

  for (let subForm of clone.querySelectorAll("[sub-container]")) {
    if (subForm.querySelectorAll("[sub-form]").length > 0) {
      //remove other instance of sub-form
      if (subForm.querySelectorAll("[sub-form]").length > 1) {
        let subForms = subForm.querySelectorAll("[sub-form]");
        for (let x = subForms.length - 1; x > 0; x--) {
          subForm.removeChild(subForms[x]);
        }
      }

      //remove other instances of sub-sub-form
      if (
        subForm.querySelector("[sub-form]").querySelectorAll("[sub-sub-form]") >
        0
      ) {
        if (
          subForm
            .querySelector("[sub-form]")
            .querySelectorAll("[sub-sub-form]") > 1
        ) {
          let subSubForms = subForm
            .querySelector("[sub-form]")
            .querySelectorAll("[sub-sub-form]");
          for (let x = subSubForms.length - 1; x > 1; x--) {
            subForm
              .querySelector("[sub-form]")
              .querySelectorAll("[sub-sub-container]")
              .removeChild(subSubForms[x]);
          }
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

function GeneSpecEsca_CodeCompWith10_change(element) {
  let field = document.getElementById(element.id);
  let id = getId(element.id);
  let targetField = document.getElementById(
    "GeneSpecEsca_CodeCompWith_Othe" + id + "0"
  );
  switch (field.valueLabel) {
    case "Alternative Standard":
      targetField.setAttribute("mandatory", "");
      targetField.removeAttribute("disabled");
      break;
    default:
      targetField.setAttribute("disabled", "");
      targetField.removeAttribute("mandatory");
      targetField.value = "";
      break;
  }
}

function GeneSpec_CodeCompWith10_change(element) {
  let field = document.getElementById(element.id);
  let id = getId(element.id);
  let targetField = document.getElementById(
    "GeneSpec_CodeCompWith_Othe" + id + "0"
  );
  switch (field.valueLabel) {
    case "Alternative Standard":
      targetField.setAttribute("mandatory", "");
      targetField.removeAttribute("disabled");
      break;
    default:
      targetField.setAttribute("disabled", "");
      targetField.removeAttribute("mandatory");
      break;
  }
}

// function GeneSpec_CompTypeTest_Comp10_10_change(element) {
//   let field = document.getElementById(element.id);
//   let targetField = field.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
//     .querySelector(`[EBTparent=""]`)
//     .querySelector(`[prefix="GeneSpec_CompTypeTest_EmerBrakType"]`);
//   let targetFieldSign = field.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
//     .querySelector(`[EBTparent=""]`)
//     .querySelector(`#GeneSpec_CompTypeTest_EmerBrakType_sign`);
//   switch (field.valueLabel) {
//     case "UCMP":
//     case "ACOP":
//       targetField.setAttribute("mandatory", "");
//       targetField.removeAttribute("disabled");
//       targetFieldSign.textContent = "*";
//       break;
//     default:
//       targetField.setAttribute("disabled", "");
//       targetField.removeAttribute("mandatory");
//       targetFieldSign.textContent = "";
//       break;
//   }
// }

function disableCodeCompliance(container, prefix) {
  let childCount = document.getElementById(`${container}`).childElementCount;
  let complianceField = document.querySelectorAll(`[prefix="${prefix}"]`);
  if (childCount > 1) {
    complianceField[complianceField.length - 1].removeAttribute("mandatory");
    complianceField[complianceField.length - 1].setAttribute("disabled", "");
  }
}

function GeneSpecEsca_AnglOfIncl10_blur(element) {
  let field = document.getElementById(element.id);
  if (field.value) {
    if (field.value > 300 || field.value < 1) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Accept numbers only. Please enter a range of 1 to 300."
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

function GeneSpecEsca_StepWidt10_blur(element) {
  let field = document.getElementById(element.id);
  if (field.value) {
    if (field.value > 9999.99 || field.value < 0.1) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Please enter a maximum value of 9999.99 with up to 1 decimal place."
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

function removeDuplicateAddErrors() {
  let childCount = document.getElementById("EscaDetaContainer")
    .childElementCount;
  let errorFields = [
    document.querySelectorAll(`[prefix="GeneSpecEsca_AnglOfIncl"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_RateSpee"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_StepWidt"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_NumbOfEStoSwit"]`),
    document.querySelectorAll(`[prefix="GeneSpecEsca_NumbOfFlatStepAtLand"]`),
  ];
  if (childCount > 1) {
    for (fields of errorFields) {
      fields[fields.length - 1].removeAttribute("data-invalid");
      fields[fields.length - 1].removeAttribute("data-invalid-message");
      fields[fields.length - 1].removeAttribute("data-valid");
      fields[fields.length - 1].removeAttribute("data-valid-message");
    }
  }
}

function removeDuplicateAddErrorsLift() {
  let childCount = document.getElementById("LiftDetaContainer")
    .childElementCount;
  let errorFields = [
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_Trav"]`),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_NumbOfStopServ"]`
    ),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_MaxiBlinHoisHeig"]`
    ),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_RateSpee"]`),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_Trav"]`),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_NumbOfStopServ"]`
    ),
    document.querySelectorAll(
      `[prefix="SubmChec_CateAndNoLift_MaxiBlinHoisHeig"]`
    ),
    document.querySelectorAll(`[prefix="SubmChec_CateAndNoLift_RateSpee"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Dept"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarMass"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Widt"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CarSize_Heig"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MaxPassCapa"]`),
    document.querySelectorAll(`[prefix="GeneSpec_RateLoad"]`),
    document.querySelectorAll(`[prefix="GeneSpec_MaxAlloDecoWeig"]`),
    document.querySelectorAll(`[prefix="GeneSpec_RopeBeltSize"]`),
    document.querySelectorAll(`[prefix="GeneSpec_GuilRailSize"]`),
    document.querySelectorAll(`[prefix="GeneSpec_SystTypeTest_PermMass"]`),
    document.querySelectorAll(`[prefix="GeneSpec_CompTypeTest_PermMass"]`),
  ];
  if (childCount > 1) {
    for (fields of errorFields) {
      fields[fields.length - 1].removeAttribute("data-invalid");
      fields[fields.length - 1].removeAttribute("data-invalid-message");
      fields[fields.length - 1].removeAttribute("data-valid");
      fields[fields.length - 1].removeAttribute("data-valid-message");
    }
  }
}

function disableAddEBT() {
  let childCount = document.getElementById("LiftDetaContainer")
    .childElementCount;
  let field = document.querySelectorAll(
    `[prefix="GeneSpec_CompTypeTest_EmerBrakType"]`
  );
  let fieldSign = document.querySelectorAll(
    `#GeneSpec_CompTypeTest_EmerBrakType_sign`
  );
  let fieldDelete = document.querySelectorAll(
    `[prefix="innerComponentLift_Delete"]`
  );
  if (childCount > 1) {
    field[field.length - 1].removeAttribute("mandatory");
    field[field.length - 1].setAttribute("disabled", "");
    fieldDelete[fieldDelete.length - 1].setAttribute("disabled", "");
    fieldSign[fieldSign.length - 1].textContent = "";
  }
}

function resetAccordion() {
  let collapse = document.querySelectorAll(`[prefix="EscaCollapse"]`);
  let span = document.querySelectorAll(`[prefix="#EscaCollapse"]`);

  for (let i = 0; i < collapse.length; i++) {
    if (collapse[i].classList.contains("show")) {
      collapse[i].classList.remove("show");
    }
    if (span[i].classList.contains("fa-angle-up")) {
      span[i].classList.remove("fa-angle-up");
      span[i].classList.add("fa-angle-down");
    }
  }
}

function resetAccordionLift() {
  let collapse = document.querySelectorAll(`[prefix="LiftCollapse"]`);
  let span = document.querySelectorAll(`[prefix="#LiftCollapse"]`);

  for (let i = 0; i < collapse.length; i++) {
    if (collapse[i].classList.contains("show")) {
      collapse[i].classList.remove("show");
    }
    if (span[i].classList.contains("fa-angle-up")) {
      span[i].classList.remove("fa-angle-up");
      span[i].classList.add("fa-angle-down");
    }
  }
}

function removeLiftInsideAddDuplicateErrors(element) {
  let id = getId(element.id);
  let childCount = document.getElementById("LiftDeta_LiftNo_Cont" + id + "0")
    .childElementCount;
  let errorFields = [
    document
      .getElementById("LiftDeta_LiftNo_Cont" + id + "0")
      .querySelectorAll(`[prefix='SubmChec_CateAndNoLift_Trav']`),
    document
      .getElementById("LiftDeta_LiftNo_Cont" + id + "0")
      .querySelectorAll(`[prefix='SubmChec_CateAndNoLift_NumbOfStopServ']`),
    document
      .getElementById("LiftDeta_LiftNo_Cont" + id + "0")
      .querySelectorAll(`[prefix='SubmChec_CateAndNoLift_RateSpee']`),
    document
      .getElementById("LiftDeta_LiftNo_Cont" + id + "0")
      .querySelectorAll(`[prefix='SubmChec_CateAndNoLift_MaxiBlinHoisHeig']`),
  ];
  if (childCount > 1) {
    for (fields of errorFields) {
      if (fields[fields.length - 1]) {
        fields[fields.length - 1].removeAttribute("data-invalid");
        fields[fields.length - 1].removeAttribute("data-invalid-message");
        fields[fields.length - 1].removeAttribute("data-valid");
        fields[fields.length - 1].removeAttribute("data-valid-message");
      }
    }
  }
}

function disableLifeInsideAccordionField(element) {
  let id = getId(element.id);
  let childCount = document.getElementById("componentTypeTestLift" + id + "0")
    .childElementCount;
  let targetField = document
    .getElementById("componentTypeTestLift" + id + "0")
    .querySelectorAll(`[prefix='GeneSpec_CompTypeTest_EmerBrakType']`);
  let targetFieldSign = document
    .getElementById("componentTypeTestLift" + id + "0")
    .querySelectorAll(`#GeneSpec_CompTypeTest_EmerBrakType_sign`);
  if (childCount > 1) {
    targetField[targetField.length - 1].removeAttribute("mandatory");
    targetField[targetField.length - 1].setAttribute("disabled", "");
    targetFieldSign[targetFieldSign.length - 1].textContent = "";
  }
}

function TypeOfBuilWork_NewBuilBuilWork15_change(element) {
  let optionalFields = [
    document.getElementById("AreaStorSub_StatGrosFlooArea15"),
    document.getElementById("AreaStorSub_StatGrosFlooArea18"),
  ];
  let compuFees = [
    document.getElementById("CompFees15"),
    document.getElementById("CompFees18"),
  ];
  if (element.checked) {
    for (field of optionalFields) {
      field.removeAttribute("disabled");
    }
  } else {
    for (field of optionalFields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (f of compuFees) {
      f.value = "0.00";
    }
  }
}

function TypeOfBuilWork_NewStru15_change(element) {
  let optionalFields = [
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("AreaStorSub_PlanArea18"),
  ];
  let compuFees = [
    document.getElementById("CompFees25"),
    document.getElementById("CompFees28"),
  ];
  if (element.checked) {
    for (field of optionalFields) {
      field.removeAttribute("disabled");
    }
  } else {
    for (field of optionalFields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (f of compuFees) {
      f.value = "0.00";
    }
  }
}

function TypeOfBuilWork_AddiAlteWorkWith10_change(element) {
  let optionalFields = [
    document.getElementById("AreaStorSub_ResiBuilNoOfStor10"),
    document.getElementById("AreaStorSub_NonResiBuilNoOfStor10"),
  ];
  let compuFees = [
    document.getElementById("CompFees40"),
    document.getElementById("CompFees50"),
  ];
  let checkboxes = [
    document.getElementById("Crit_ResiBuil10"),
    document.getElementById("Crit_NonResiBuil10"),
  ];
  if (element.checked) {
    for (c of checkboxes) {
      c.removeAttribute("disabled");
    }
  } else {
    for (c of checkboxes) {
      c.setAttribute("disabled", "");
      c.checked = false;
    }
    for (field of optionalFields) {
      field.setAttribute("disabled", "");
      field.value = "0";
    }
    for (f of compuFees) {
      f.value = "0.00";
    }
  }
}

function TypeOfBuilWork_NewBuilBuilWork10_change(element) {
  let optionalField = document.getElementById("AreaStorSub_StatGrosFlooArea10");
  let compuFees = document.getElementById("CompFees10");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function TypeOfBuilWork_NewStru10_change(element) {
  let optionalField = document.getElementById("AreaStorSub_PlanArea10");
  let compuFees = document.getElementById("CompFees20");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function TypeOfBuilWork_AddiAlteWorkOr10_change(element) {
  let optionalField = document.getElementById("AreaStorSub_NoOfStor10");
  let compuFees = document.getElementById("CompFees30");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function Crit_ResiBuil10_change(element) {
  let optionalField = document.getElementById("AreaStorSub_ResiBuilNoOfStor10");
  let compuFees = document.getElementById("CompFees40");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function Crit_NonResiBuil10_change(element) {
  let optionalField = document.getElementById(
    "AreaStorSub_NonResiBuilNoOfStor10"
  );
  let compuFees = document.getElementById("CompFees50");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function TypeOfBuilWork_AmenDeviToAppr10_change(element) {
  let optionalField = document.getElementById("Crit_AllBuilStruNoOfStor10");
  let compuFees = document.getElementById("CompFees60");

  if (element.checked) {
    optionalField.removeAttribute("disabled");
  } else {
    optionalField.setAttribute("disabled", "");
    optionalField.value = "0";
    compuFees.value = "0.00";
  }
}

function AreaStorSub_StatGrosFlooArea15_input(element) {
  let field = document.getElementById(element.id);
  let compuFee = document.getElementById("CompFees15");
  let final;
  final = (parseFloat(field.value) / 100) * 400;
  if (field.value) {
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function AreaStorSub_PlanArea15_input(element) {
  let field = document.getElementById(element.id);
  let compuFee = document.getElementById("CompFees25");
  let final;
  final = (parseFloat(field.value) / 100) * 400;
  if (field.value) {
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function AreaStorSub_StatGrosFlooArea18_input(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees18");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 240;
    let final = 7500 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = 0.0;
  }
}

function AreaStorSub_PlanArea18_input(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees28");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 240;
    let final = 7500 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = 0.0;
  }
}

function AreaStorSub_StatGrosFlooArea10_input(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees10");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 200;
    let final = 7500 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = 0.0;
  }
}

function AreaStorSub_PlanArea10_input(element) {
  let value = element.value;
  let resultField = document.getElementById("CompFees20");
  let price,
    final = 0;
  if (value <= 2500 && value != "") {
    price = (value / 100) * 300;
    final = price.toFixed(2);
    resultField.value = final;
  } else if (value > 2500) {
    let temp = value - 2500;
    price = (temp / 100) * 200;
    let final = 7500 + price;
    let final2 = final.toFixed(2);
    resultField.value = final2;
  } else {
    resultField.value = 0.0;
  }
}

function AreaStorSub_NoOfStor10_input(element) {
  let compuFee = document.getElementById("CompFees30");
  let field = document.getElementById(element.id);
  let final;
  if (field.value) {
    final = parseFloat(field.value) * 200;
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function Crit_AllBuilStruNoOfStor10(element) {
  let compuFee = document.getElementById("CompFees60");
  let field = document.getElementById(element.id);
  let final;
  if (field.value) {
    final = parseFloat(field.value) * 200;
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function AreaStorSub_ResiBuilNoOfStor10_input(element) {
  let compuFee = document.getElementById("CompFees40");
  let field = document.getElementById(element.id);
  let final;
  if (field.value) {
    final = parseFloat(field.value) * 200;
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function AreaStorSub_NonResiBuilNoOfStor10_input(element) {
  let compuFee = document.getElementById("CompFees50");
  let field = document.getElementById(element.id);
  let final;
  if (field.value) {
    final = parseFloat(field.value) * 400;
    compuFee.value = final.toFixed(2);
  } else {
    compuFee.value = 0.0;
  }
}

function totalPlanfee() {
  let compute = setTimeout(() => {
    let tableShowed = [
      ...document
        .getElementById("page6")
        .querySelectorAll("[new-no], [major-no], [yes]"),
    ].filter((tbl) => !tbl.hasAttribute("hidden"))[0];
    let compFees = [
      tableShowed.querySelector("#CompFees10"),
      tableShowed.querySelector("#CompFees20"),
      tableShowed.querySelector("#CompFees30"),
      tableShowed.querySelector("#CompFees40"),
      tableShowed.querySelector("#CompFees50"),
      tableShowed.querySelector("#CompFees60"),
      tableShowed.querySelector("#CompFees15"),
      tableShowed.querySelector("#CompFees18"),
      tableShowed.querySelector("#CompFees25"),
      tableShowed.querySelector("#CompFees28"),
    ].filter((i) => i);

    let totalPlanField = document.getElementById("PaymMode_Paym10");
    let final = 0;
    for (c of compFees) {
      if (c.value) {
        let converted = parseFloat(c.value);
        final += converted;
      }
    }

    let finalDecimal = final.toFixed(2);
    totalPlanField.value = finalDecimal;

    clearTimeout(compute);
  }, 1000);
}

function FeeComForBuilWork_change(element) {
  let firstRadioHideRows = document.querySelectorAll("#hiddenIf1stRadioTicked");
  let firstRadioHideCheckboxes = [
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork15"),
    document.getElementById("TypeOfBuilWork_NewStru15"),
  ];
  let firstRadioHideFields = [
    document.getElementById("AreaStorSub_StatGrosFlooArea15"),
    document.getElementById("CompFees15"),
    document.getElementById("AreaStorSub_StatGrosFlooArea18"),
    document.getElementById("CompFees18"),
    document.getElementById("AreaStorSub_PlanArea15"),
    document.getElementById("CompFees25"),
    document.getElementById("AreaStorSub_PlanArea18"),
    document.getElementById("CompFees28"),
  ];

  let firstRadioShowRows = document.querySelectorAll("#showIf1stRadioTicked");
  let firstRadioShowCheckboxes = [
    document.getElementById("TypeOfBuilWork_NewBuilBuilWork10"),
    document.getElementById("TypeOfBuilWork_NewStru10"),
  ];
  let firstRadioShowFields = [
    document.getElementById("AreaStorSub_StatGrosFlooArea10"),
    document.getElementById("CompFees10"),
    document.getElementById("AreaStorSub_PlanArea10"),
    document.getElementById("CompFees20"),
  ];
  switch (element.id) {
    case "FeeComForBuilWork10": //BC for approval before 10 September 2017
      for (let i = 0; i < firstRadioHideRows.length; i++) {
        firstRadioHideRows[i].setAttribute("hidden", "");
      }
      for (let i = 0; i < firstRadioShowRows.length; i++) {
        firstRadioShowRows[i].removeAttribute("hidden");
      }
      for (c of firstRadioHideCheckboxes) {
        c.checked = false;
      }
      for (f of firstRadioHideFields) {
        f.value = "";
        f.setAttribute("disabled", "");
      }
      break;
    case "FeeComForBuilWork20": //CBC for approval on or after 10 September 2017)
      for (let i = 0; i < firstRadioHideRows.length; i++) {
        firstRadioHideRows[i].removeAttribute("hidden", "");
      }
      for (let i = 0; i < firstRadioShowRows.length; i++) {
        firstRadioShowRows[i].setAttribute("hidden", "");
      }
      for (c of firstRadioShowCheckboxes) {
        c.checked = false;
      }
      for (f of firstRadioShowFields) {
        f.value = "";
        f.setAttribute("disabled", "");
      }
      break;
  }
}

function pMode_change(element) {
  let refId = element.id;

  let chequeGroup = [
    document.getElementById("PaymMode_Cheq20"),
    document.getElementById("PaymMode_Cheq40"),
    document.getElementById("PaymMode_Cheq30"),
    document.getElementById("PaymMode_Cheq50"),
  ];

  let giroGroup = [
    document.getElementById("PaymMode_Giro20"),
    document.getElementById("PaymMode_Giro50"),
    document.getElementById("PaymMode_Giro40"),
  ];

  let paidEarlierGroup = [document.getElementById("PaymMode_PaidEarl20")];

  document.getElementById("PaymMode_Cheq30").removeAttribute("data-invalid");
  document
    .getElementById("PaymMode_Cheq30")
    .removeAttribute("data-invalid-message");

  document.getElementById("PaymMode_Giro50").removeAttribute("data-invalid");
  document
    .getElementById("PaymMode_Giro50")
    .removeAttribute("data-invalid-message");

  switch (refId) {
    case "PaymMode_Cheq10":
      for (let member of chequeGroup) {
        member.removeAttribute("disabled");
        member.setAttribute("mandatory", "");
      }

      for (let member of giroGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }

      for (let member of paidEarlierGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }
      break;
    case "PaymMode_Giro10":
      for (let member of chequeGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }

      for (let member of giroGroup) {
        member.removeAttribute("disabled");
        member.setAttribute("mandatory", "");
      }

      for (let member of paidEarlierGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }
      break;
    case "PaymMode_PaidEarl10":
      for (let member of chequeGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }

      for (let member of giroGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }

      for (let member of paidEarlierGroup) {
        member.removeAttribute("disabled");
        member.setAttribute("mandatory", "");
      }
      break;
    default:
      for (let member of chequeGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
      }

      for (let member of giroGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }

      for (let member of paidEarlierGroup) {
        member.setAttribute("disabled", "");
        member.removeAttribute("mandatory");
        member.removeAttribute("not-filledup");
        member.value = "";
      }
      break;
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

function removeMandaIfOneSelected(element) {
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

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let child = parent.querySelector(`[prefix="${prefix}"]`);
  let index = 0;
  child.setAttribute("raw-value", child.value);
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function nricMaskingAccorDelete(prefix) {
  let masked = document.querySelectorAll(`[prefix="${prefix}"]`);
  let index = 0;
  let index2 = 0;
  let x = 1;
  for (let i = 0; i < masked.length; i++) {
    x++;
    index2 = index2 + 10;
    delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    if (x == masked.length) {
      index2 = index2 + 10;
      delete jsonData["Member_IC_Passport_No_OWNER" + index2];
    }
  }
  for (let i = 0; i < masked.length; i++) {
    index = index + 10;
    let rawVal = masked[i].getAttribute("raw-value");
    jsonData["Member_IC_Passport_No_OWNER" + index] = rawVal;
  }
}

function findTables(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function DeclByQualPers_IHereDeclThatIHaveSubm_change(el, field) {
  if (el.checked) {
    document.getElementById(field).removeAttribute("disabled");
  } else {
    document.getElementById(field).setAttribute("disabled", "");
    document.getElementById(field).value = "";
  }
}

function firstCharIsL(e, value) {
  if (
    !(
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight" ||
      e.key == "Delete" ||
      e.key == "Backspace"
    )
  ) {
    let currentVal = e.target.value + e.key;

    e.preventDefault();
    if (
      currentVal.match(/^[a-zA-Z][0-9]*$/g) &&
      currentVal.split("")[0].toUpperCase() == "L"
    ) {
      e.target.value = currentVal.toUpperCase();
    }
  }
}

function firstCharIsE(e, value) {
  if (
    !(
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight" ||
      e.key == "Delete" ||
      e.key == "Backspace"
    )
  ) {
    let currentVal = e.target.value + e.key;

    e.preventDefault();
    if (
      currentVal.match(/^[a-zA-Z][0-9]*$/g) &&
      currentVal.split("")[0].toUpperCase() == "E"
    ) {
      e.target.value = currentVal.toUpperCase();
    }
  }
}

function firstCharIsM(e, value) {
  if (
    !(
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight" ||
      e.key == "Delete" ||
      e.key == "Backspace"
    )
  ) {
    let currentVal = e.target.value + e.key;

    e.preventDefault();
    if (
      currentVal.match(/^[a-zA-Z][0-9]*$/g) &&
      currentVal.split("")[0].toUpperCase() == "M"
    ) {
      e.target.value = currentVal.toUpperCase();
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

function setSubmChec_CateAndNoLift_NoOfLiftHidden(element) {
  let submChec10 = element.value;
  let submChec20 = document.getElementById("SubmChec_CateAndNoLift_NoOfLiftHide10");

  if (!submChec10 == "") {
    submChec20.value = submChec10;
  } else {
    submChec20.value = "";
  }
}

function setGeneSpec_SystTypeTest_ExpiDateOfCert_Hidden(element) {
  let GeneSpec10 = element.value;
  let GeneSpec20 = document.getElementById("GeneSpec_SystTypeTest_ExpiDateOfCert_Hide10");

  if (!GeneSpec10 == "") {
    GeneSpec20.value = GeneSpec10;
  } else {
    GeneSpec20.value = "";
  }
}

function setGeneSpec_CompTypeTest_ExpiDateOfCert_Hidden(element) {
  let GeneSpec10 = element.value;
  let GeneSpec20 = document.getElementById("GeneSpec_CompTypeTest_ExpiDateOfCert_Hide10_10");

  if (!GeneSpec10 == "") {
    GeneSpec20.value = GeneSpec10;
  } else {
    GeneSpec20.value = "";
  }
}

function setSubmChec_CateAndNoEsca_NoOfEscaHidden(element) {
  let submChec10 = element.value;
  let submChec20 = document.getElementById("SubmChec_CateAndNoEsca_NoOfEscaHide10");

  if (!submChec10 == "") {
    submChec20.value = submChec10;
  } else {
    submChec20.value = "";
  }
}