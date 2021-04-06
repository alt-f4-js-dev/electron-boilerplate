let lastPage = "";
let lastAppType = "";
let isChanging = false;
let oldBlockNo = "";
let pageDiv = null;
let basement = "";
let superstructure = "";
let zeroes = [];
let zeroesFloat = [];

document.addEventListener("DOMContentLoaded", function (event) {
  formNameVersion("form__name", "form__version");
  basement = document.getElementById("basementContainer");
  superstructure = document.getElementById("superstructureContainer");

  for (let a of document.querySelectorAll("[center-textbox]")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let b of document.querySelectorAll("cn2-nav-button")) {
    if (b.hasAttribute("superstructure")) {
      if (!b.hasAttribute("rendered")) {
        b.addEventListener(
          "click",
          (e) => {
            // for loader
            showLoader("Loading the page ...");
            setTimeout(function () {
              updatesRenderComputationPages(e.target);
              hideLoader();
            }, 15000);
            renderComputationPages("1st");
          },
          { once: true }
        );
      }
    }
  }

  for (let c of document.querySelectorAll("cn2-nav-button")) {
    if (c.hasAttribute("basement")) {
      if (!c.hasAttribute("rendered")) {
        c.addEventListener(
          "click",
          (e) => {
            // for loader
            showLoader("Loading the page ...");
            setTimeout(function () {
              updatesRenderComputationPages(e.target);
              hideLoader();
            }, 15000);
            renderComputationPages("2nd");
          },
          { once: true }
        );
      }
    }
  }
  // only do this function on the first load of the form
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    pageDiv = document.getElementById("page");
    let pages = [...document.querySelectorAll("cn2-nav-button")];
    pages.push(
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-next")
    );
    pages.push(
      document
        .querySelector("cn2-fixed-footer")
        .shadowRoot.getElementById("footer-previous")
    );
    for (let a of pages) {
      a.addEventListener("click", () => {
        pageDiv.scrollTop = 0;
      });
    }

    // setting all td cells to "align-middle"
    for (let a of document.querySelectorAll("td")) {
      if (!a.className.includes("align-")) a.classList.add("align-middle");
    }

    // removing all align-middle class of td cells of page 3
    for (let a of document.querySelector("#page3").querySelectorAll("td")) {
      a.classList.remove("align-middle");
    }

    // setting multiplier attribute to blue
    for (let a of document.querySelectorAll("[multiplier]")) {
      a.style.color = "blue";
      a.style.fontWeight = "bold";
    }

    // setting the text-align of some textboxes to center

    for (let a of document
      .getElementById("page6")
      .querySelectorAll("cn2-textbox")) {
      if (!a.hasAttribute("dont-centerbox"))
        a.shadowRoot.querySelector("input").style.textAlign = "center";
    }
    for (let a of document.getElementById("page6").querySelectorAll("td")) {
      a.setAttribute("page-owner", "page6");
    }
    if (document.getElementById("page7")) {
      for (let a of document
        .getElementById("page7")
        .querySelectorAll("cn2-textbox")) {
        if (!a.hasAttribute("dont-centerbox"))
          a.shadowRoot.querySelector("input").style.textAlign = "center";
      }
      for (let a of document.getElementById("page7").querySelectorAll("td")) {
        a.setAttribute("page-owner", "page7");
      }
    }

    // putting the events for decimal formatting
    for (let a of document.querySelectorAll("[decimal-format]")) {
      a.setAttribute("event-blur", "displayZero(this);");
      a.setAttribute(
        "event-input",
        "decimalFormat(this, event); computeSub(this);"
      );
      if (!a.hasAttribute("dont-centerbox"))
        a.shadowRoot.querySelector("input").style.textAlign = "center";
    }

    // for validating if all mandatory fields in page5 is filled up
    for (let a of document
      .getElementById("page5")
      .querySelectorAll("cn2-textbox")) {
      if (
        a.id != "CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10"
      ) {
        if (!a.hasAttribute("no-event")) {
          a.setAttribute(
            "event-blur",
            "validateProjectDetailsPage(); formatDecimal(this, '2');"
          );
        }
      } else {
        a.setAttribute("event-blur", "validateProjectDetailsPage();");
      }
    }

    // for renaming the block no./name
    for (let a of document.querySelectorAll("[page-block-no]")) {
      if (a.hasAttribute("id")) {
        a.setAttribute("event-blur", "changeBlockNo(this);");
      }
    }

    // for validating the modal
    for (let a of document.querySelectorAll("[target]")) {
      a.addEventListener("click", (event) => {
        let isClosed = true;
        stopHere: for (let a of document.querySelectorAll("[close-this]")) {
          if (a.getAttribute("close-this") == "open") {
            isClosed = false;
            break stopHere;
          }
        }

        if (!isClosed) {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.getAttribute("target") == lastPage) {
              b.setAttribute("selected", "");
            } else {
              if (b.hasAttribute("selected")) b.removeAttribute("selected");
            }
          }

          for (let a of document.getElementById("page").children) {
            if (a.id == lastPage) {
              a.setAttribute("style", "display: block;");
            } else {
              a.setAttribute("style", "display: none;");
            }
          }

          showMessage("Please click the 'Close' button.");
          return;
        } else {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.hasAttribute("selected")) {
              lastPage = a.getAttribute("target");
            }
          }
        }
      });
    }
    document
      .querySelector("cn2-fixed-footer")
      .shadowRoot.getElementById("footer-next")
      .addEventListener("click", (event) => {
        let isClosed = true;
        stopHere: for (let a of document.querySelectorAll("[close-this]")) {
          if (a.getAttribute("close-this") == "open") {
            isClosed = false;
            break stopHere;
          }
        }

        if (!isClosed) {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.getAttribute("target") == lastPage) {
              b.setAttribute("selected", "");
            } else {
              if (b.hasAttribute("selected")) b.removeAttribute("selected");
            }
          }

          for (let a of document.getElementById("page").children) {
            if (a.id == lastPage) {
              a.setAttribute("style", "display: block;");
            } else {
              a.setAttribute("style", "display: none;");
            }
          }

          showMessage("Please click the 'Close' button.");
          return;
        } else {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.hasAttribute("selected")) {
              lastPage = a.getAttribute("target");
            }
          }
        }
      });
    document
      .querySelector("cn2-fixed-footer")
      .shadowRoot.getElementById("footer-previous")
      .addEventListener("click", (event) => {
        let isClosed = true;
        stopHere: for (let a of document.querySelectorAll("[close-this]")) {
          if (a.getAttribute("close-this") == "open") {
            isClosed = false;
            break stopHere;
          }
        }

        if (!isClosed) {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.getAttribute("target") == lastPage) {
              b.setAttribute("selected", "");
            } else {
              if (b.hasAttribute("selected")) b.removeAttribute("selected");
            }
          }

          for (let a of document.getElementById("page").children) {
            if (a.id == lastPage) {
              a.setAttribute("style", "display: block;");
            } else {
              a.setAttribute("style", "display: none;");
            }
          }

          showMessage("Please click the 'Close' button.");
          return;
        } else {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.hasAttribute("selected")) {
              lastPage = a.getAttribute("target");
            }
          }
        }
      });
    document
      .querySelector("cn2-fixed-footer")
      .shadowRoot.getElementById("footer-save")
      .addEventListener("click", () => {
        let isClosed = true;
        stopHere: for (let a of document.querySelectorAll("[close-this]")) {
          if (a.getAttribute("close-this") == "open") {
            isClosed = false;
            break stopHere;
          }
        }

        if (!isClosed) {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.getAttribute("target") == lastPage) {
              b.setAttribute("selected", "");
            } else {
              if (b.hasAttribute("selected")) b.removeAttribute("selected");
            }
          }

          for (let a of document.getElementById("page").children) {
            if (a.id == lastPage) {
              a.setAttribute("style", "display: block;");
            } else {
              a.setAttribute("style", "display: none;");
            }
          }

          // showMessage("Please click the 'Close' button.");
          return;
        } else {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.hasAttribute("selected")) {
              lastPage = a.getAttribute("target");
            }
          }
        }
      });
    document
      .querySelector("cn2-master-head")
      .shadowRoot.getElementById("printButton")
      .addEventListener("click", () => {
        let isClosed = true;
        stopHere: for (let a of document.querySelectorAll("[close-this]")) {
          if (a.getAttribute("close-this") == "open") {
            isClosed = false;
            break stopHere;
          }
        }

        if (!isClosed) {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.getAttribute("target") == lastPage) {
              b.setAttribute("selected", "");
            } else {
              if (b.hasAttribute("selected")) b.removeAttribute("selected");
            }
          }

          for (let a of document.getElementById("page").children) {
            if (a.id == lastPage) {
              a.setAttribute("style", "display: block;");
            } else {
              a.setAttribute("style", "display: none;");
            }
          }

          // showMessage("Please click the 'Close' button.");
          return;
        } else {
          for (let b of document.querySelectorAll("[target]")) {
            if (b.hasAttribute("selected")) {
              lastPage = a.getAttribute("target");
            }
          }
        }
      });

    for (let a in jsonData) {
      val = jsonData[a];
      if (val === "0") {
        zeroes.push(a);
      } else if (val === "0.00") {
        zeroesFloat.push(a);
      }
    }
  }
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData[name];
  let getFormVersion = jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function showLoader(message) {
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

function hideLoader() {
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

// for counting decimal
Number.prototype.countDecimals = function () {
  if (!isNaN(this.valueOf()) && this.valueOf() != "NaN") {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0;
  } else {
    return 0;
  }
};

// when any application type radio is clicked
function showByAppType(el) {
  let appTypeVal = document.getElementById(el.id).getAttribute("app-type"); // getting the application type of the clicked radio

  // removing value in  when atleast one radio is selected
  for (let a of document
    .getElementById("partIV_otheInfo1")
    .querySelectorAll("cn2-textbox")) {
    if (a.hasAttribute("no-label")) {
      a.value = "";
    }
  }
  for (let a of document
    .getElementById("partIV_otheInfo2")
    .querySelectorAll("cn2-textbox")) {
    if (a.hasAttribute("no-label")) {
      a.value = " ";
    }
    if (a.hasAttribute("mandatory")) {
      a.removeAttribute("mandatory");
      a.setAttribute("disabled", "");
    }
  }
  for (let a of document
    .getElementById("partIV_otheInfo2")
    .querySelectorAll("cn2-select")) {
    if (a.hasAttribute("event-change")) {
      a.value = " ";
    }
  }


  // removing checked and mandatory attribute when atleast one radio is selected
  for (let a of document.querySelectorAll('[name="appTypeRadio"]')) {
    if (a.hasAttribute("checked")) a.removeAttribute("checked");
    if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
  }

  // removing the "hidden" attribute of the navbars and their pages
  for (let a of document.querySelectorAll("[app-show]")) {
    if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
  }

  // for showing all divs that activated by any app type
  for (let a of document.querySelectorAll("[app-type-bsAll]")) {
    if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
  }

  // searching for DIVs that the selected application type is supposed to be showing
  if (appTypeVal == "bs01") {
    // showing the DIVs of the selected application type
    for (let a of document.querySelectorAll("[app-type-bs01]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      getRawID(a.querySelectorAll("[id]"));
      setMToMandatoryDIV(a.id);
    }

    // hide the DIVs of the not selected application type
    for (let a of document.querySelectorAll(
      "[app-type-bs02], [app-type-bs03]"
    )) {
      a.setAttribute("hidden", "");
      setTempID(a.querySelectorAll("[id]"));
      setMandatoryToMDIV(a.id);
      emptyValueAll(a.id);
    }
    document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");

    for (let a of document.querySelectorAll("[bs03]")) {
      a.setAttribute("hidden", "")
    }
    document.querySelector("[copLabel]").innerHTML = "01"
    for (let a of document.querySelectorAll("[copLabel2]")) {
      a.innerHTML = "total"
    }
  } else if (appTypeVal == "bs02") {
    // showing the DIVs of the selected application type
    for (let a of document.querySelectorAll("[app-type-bs02]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      getRawID(a.querySelectorAll("[id]"));
      setMToMandatoryDIV(a.id);
    }

    // hide the DIVs of the not selected application type
    for (let a of document.querySelectorAll(
      "[app-type-bs01], [app-type-bs03]"
    )) {
      a.setAttribute("hidden", "");
      setTempID(a.querySelectorAll("[id]"));
      setMandatoryToMDIV(a.id);
      emptyValueAll(a.id);
    }
    document.querySelector("[app-type-bs-01-03]").setAttribute("hidden", "");
  } else if (appTypeVal == "bs03") {
    // showing the DIVs of the selected application type
    for (let a of document.querySelectorAll("[app-type-bs03]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
      getRawID(a.querySelectorAll("[id]"));
      setMToMandatoryDIV(a.id);
    }

    // hide the DIVs of the not selected application type
    for (let a of document.querySelectorAll(
      "[app-type-bs01], [app-type-bs02]"
    )) {
      a.setAttribute("hidden", "");
      setTempID(a.querySelectorAll("[id]"));
      setMandatoryToMDIV(a.id);
      emptyValueAll(a.id);
    }
    document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");

    for (let a of document.querySelectorAll("[bs03]")) {
      a.removeAttribute("hidden")
    }
    document.querySelector("[copLabel]").innerHTML = "03"
    for (let a of document.querySelectorAll("[copLabel2]")) {
      a.innerHTML = "as-built"
    }
  }

  //resseting block page when changing application type
  //if (lastAppType != "" && lastAppType != appTypeVal) {
  isChanging = true;
  let page6 = document.getElementById("page6");

  if (page6.innerHTML != "") {
    let textBoxeSs = page6.querySelectorAll("cn2-textbox")

    for (let textSS of textBoxeSs) {

      if (textSS.hasAttribute("event-input")) {
        textSS.value = ""
        jsonData[textSS.id] = textSS.value
        //textSS.shadowRoot.querySelector("input").oninput();
      } else if (textSS.hasAttribute("event-blur")) {
        if (!textSS.hasAttribute("proj-ref-no") || !textSS.hasAttribute("page-block-no")) {
          textSS.value = ""
          jsonData[textSS.id] = textSS.value
          //textSS.shadowRoot.querySelector("input").onblur();
        }
      } else if (textSS.hasAttribute("dont-centerbox")) {
        textSS.value = ""
        jsonData[textSS.id] = textSS.value
        //textSS.shadowRoot.querySelector("input").onblur();
      }
    }
  }

  let page7 = document.getElementById("page7");

  if (page7.innerHTML != "") {
    let textBoxesBase = page7.querySelectorAll("cn2-textbox")

    for (let textBase of textBoxesBase) {

      if (textBase.hasAttribute("event-input")) {
        textBase.value = ""
        jsonData[textBase.id] = textBase.value
        //textBase.shadowRoot.querySelector("input").oninput();
      } else if (textBase.hasAttribute("event-blur")) {
        if (!textBase.hasAttribute("proj-ref-no") || !textBase.hasAttribute("page-block-no")) {
          textBase.value = ""
          jsonData[textBase.id] = textBase.value
          //textBase.shadowRoot.querySelector("input").onblur();
        }
      } else if (textBase.hasAttribute("dont-centerbox")) {
        textBase.value = ""
        jsonData[textBase.id] = textBase.value
        //textBase.shadowRoot.querySelector("input").onblur();
      }
    }
  }
  //function run(con, defaultName) {
  let deleteInstance = function (value) {
    if (value != 1) {
      isChangeApp = true;
      document
        .querySelectorAll("[danger-bdsss]")
      [value - 1].shadowRoot.querySelector("button")
        .click();
      for (let a of document.querySelectorAll("[danger-bdsss]")) {
        if (a.hasAttribute("blockowner")) {
          delete jsonData[a.getAttribute("blockowner")]
        }
      }
      return deleteInstance(value - 1);
    } else {
      for (let a of document.querySelectorAll("[danger-bdsss]")) {
        if (a.hasAttribute("blockowner")) {
          delete jsonData[a.getAttribute("blockowner")]
        }
      }
      return document.querySelector("[danger-bdsss]").getAttribute("blockowner");
    }
  };

  let blockPage = document.querySelector(
    "[block-page='" +
    deleteInstance(document.querySelectorAll("[danger-bdsss]").length) +
    "']"
  );
  for (let a of blockPage.querySelectorAll("cn2-textbox")) {
    if (
      !(a.hasAttribute("proj-ref-no") || a.hasAttribute("page-block-no"))
    ) {
      a.value = "0";
    }
  }
  let lastTextbox = [
    ...blockPage.querySelectorAll("cn2-textbox:not([disabled])"),
  ].pop();
  if (lastTextbox != undefined) {
    if (lastTextbox.hasAttribute("event-input")) {
      lastTextbox.shadowRoot.querySelector("input").oninput();
    }
    if (lastTextbox.hasAttribute("event-blur")) {
      lastTextbox.shadowRoot.querySelector("input").onblur();
    }
    if (lastTextbox.hasAttribute("dont-centerbox")) {
      lastTextbox.shadowRoot.querySelector("input").onblur();
    }

  }


  for (let a of blockPage.querySelectorAll("[raw-value]")) {
    a.removeAttribute("raw-value");
  }

  // if (blockPage.querySelectorAll("cn2-textbox[page-block-no]").length != 0) {
  //   if (
  //     blockPage.querySelectorAll("cn2-textbox[page-block-no]")[0].value !=
  //     defaultName
  //   ) {

  //     blockPage.querySelectorAll(
  //       "cn2-textbox[page-block-no]"
  //     )[0].value = defaultName;
  //     blockPage
  //       .querySelectorAll("cn2-textbox[page-block-no]")[0]
  //       .shadowRoot.querySelector("input")
  //       .onblur();
  //   }
  // }

  document.querySelectorAll("[total-blocks]")[0].value = "1";
  for (let a of document.querySelectorAll("[total-bds-round]")) {
    a.value = "0";
    a.removeAttribute("raw-value")
  }
  document.querySelectorAll("[blockchildtr]")[0].querySelector("td").innerHTML =
    "";

  for (let a of blockPage.querySelectorAll("cn2-textbox")) {
    if (
      !(a.hasAttribute("proj-ref-no") || a.hasAttribute("page-block-no"))
    ) {
      a.value = zeroes.includes(a.id)
        ? "0"
        : zeroesFloat.includes(a.id)
          ? "0.00"
          : "";
    }
  }
  //}

  // run(superstructure, "01");
  // run(basement, "B01");

  let checkboxEx = document.querySelector("[proj-det-radio]").querySelectorAll("cn2-checkbox")

  for (let checkBox of checkboxEx) {
    checkBox.checked = false;
    checkBox.setAttribute("mandatory", "");
    checkBox.setAttribute("checked", "");
    checkBox.removeAttribute("disabled")
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").value = ""
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").removeAttribute("mandatory")
  }

  for (let a of document
    .querySelector("[gfa-table]")
    .querySelectorAll("cn2-textbox, cn2-checkbox")) {
    if (a.tagName.toLowerCase() == "cn2-textbox") {
      a.setAttribute("disabled", "");
      a.removeAttribute("mandatory");
      a.removeAttribute("placeholder");
      if (
        ![
          "CalcOfOverBuil_ProjDetl_SubGfa_NewWork10",
          "CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10",
          "CalcOfOverBuil_ProjDetl_TotaGfa10",
        ].includes(a.id)
      )
        a.value = "";
      else a.value = "0.00";
    } else if (a.tagName.toLowerCase() == "cn2-checkbox") {
      a.checked = false;
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
    }
  }

  for (let a of document
    .querySelector("[proj-det-radio]")
    .querySelectorAll("input[type='radio']")) {
    a.checked = false;
    a.setAttribute("mandatory", "");
    a.setAttribute("checked", "");
  }
  validateProjectDetailsPage();
  appTypeChanged(appTypeVal);

  if (document
    .querySelectorAll("[typical-block-list]")[0] != undefined || document
      .querySelectorAll("[typical-block-list]")[0] != null) {
    document
      .querySelectorAll("[typical-block-list]")[0]
      .querySelector("[role='tablist']").innerHTML = "";
  }

  document.querySelector("[target='page6']").removeAttribute("label")
  document.querySelector("[target='page6']").removeAttribute("basement")
  document.querySelector("[target='page6']").removeAttribute("superstructure")
  document.querySelector("[target='page7']").removeAttribute("label")
  document.querySelector("[target='page7']").removeAttribute("basement")
  document.querySelector("[target='page7']").removeAttribute("superstructure")

  document.querySelector("[target='page6']").setAttribute("superstructure", "")
  document.querySelector("[target='page6']").setAttribute("page-number", "6")
  document.querySelector("[target='page6']").setAttribute("label", "01")

  document.querySelector("[target='page7']").setAttribute("basement", "")
  document.querySelector("[target='page7']").setAttribute("page-number", "7")
  document.querySelector("[target='page7']").setAttribute("label", "B01")

  document.getElementById("page6").innerHTML = ""
  document.getElementById("page6").removeAttribute("block-page")
  document.getElementById("page6").removeAttribute("superstructure")
  document.getElementById("page6").removeAttribute("basement")
  document.getElementById("page6").setAttribute("superstructure", "")
  document.getElementById("page6").setAttribute("block-page", "01")

  document.getElementById("page7").innerHTML = ""
  document.getElementById("page7").removeAttribute("block-page")
  document.getElementById("page7").removeAttribute("superstructure")
  document.getElementById("page7").removeAttribute("basement")
  document.getElementById("page7").setAttribute("basement", "")
  document.getElementById("page7").setAttribute("block-page", "B01")

  document.getElementById("CHECK10").checked = false;
  document.getElementById("CHECK20").checked = false;

  document.getElementById("PartOfAppl_BuilDesiScorSame10").value = "0"
  document.getElementById("PartOfAppl_BuilDesiScorDiff10").value = "0"

  document.getElementById("PartOfAppl_BuilDesiScorSame20").value = "0"
  document.getElementById("PartOfAppl_BuilDesiScorDiff20").value = "0"


  document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStruc").value = ""
  document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteWall").value = ""

  document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_BlkNm10").value = "01"
  document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_BlkNm10").value = "B01"

  jsonData["CalcOfOverBuil_CompOfBuilDesi_StruSyst_Blk10"] = "01"
  jsonData["CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlkBase10"] = "B01"

  jsonData["01"] = [];
  jsonData["B01"] = [];

  let supContainer = document.getElementById("superstructureContainer")
  let blocTr = supContainer.querySelector("[block-tr]")

  for (let a of blocTr.querySelectorAll("tr")) {
    if (a.hasAttribute("blocktr")) {
      a.setAttribute("blocktr", "01")
    }
    if (a.hasAttribute("blockchildtr")) {
      a.setAttribute("blockchildtr", "01")
    }
  }

  let baseContainer = document.getElementById("basementContainer")
  let blocTrBase = baseContainer.querySelector("[block-tr]")

  for (let a of blocTrBase.querySelectorAll("tr")) {
    if (a.hasAttribute("blocktr")) {
      a.setAttribute("blocktr", "B01")
    }
    if (a.hasAttribute("blockchildtr")) {
      a.setAttribute("blockchildtr", "B01")
    }
  }

  document.getElementById("deleteBlock10").setAttribute("blockowner", "01")
  document.getElementById("deleteBlock10").setAttribute("disabled", "")
  document.getElementById("deleteBlockBase10").setAttribute("blockowner", "B01")
  document.getElementById("deleteBlockBase10").setAttribute("disabled", "")
  document.querySelector("[target='page6']").removeAttribute("rendered")
  document.querySelector("[target='page7']").removeAttribute("rendered")
  document.querySelector("[target='page6']").addEventListener(
    "click",
    (e) => {
      // for loader
      showLoader("Loading the page ...");
      setTimeout(function () {
        updatesRenderComputationPages(e.target);
        hideLoader();
      }, 15000);
      renderComputationPages("1st");
    },
    { once: true }
  );
  document.querySelector("[target='page7']").addEventListener(
    "click",
    (e) => {
      // for loader
      showLoader("Loading the page ...");
      setTimeout(function () {
        updatesRenderComputationPages(e.target);
        hideLoader();
      }, 15000);
      renderComputationPages("2nd");
    },
    { once: true }
  );


  lastAppType = appTypeVal;
  isChanging = false;
}

function appTypeChanged(type) {
  let types = ["bs01", "bs02", "bs03"];
  if (types.includes(type)) {
    let index = types.indexOf(type);
    let formTitle = [
      `SUBMISSION OF BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 6 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
      `SUBMISSION OF STRUCTURAL BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 7 of the Building Control (Buildability & Productivity) Regulations`,
      `SUBMISSION OF AS-BUILT BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 13 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
    ];
    let formName = ["BCA-BS01_COP2020", "BCA-BS02_COP2020", "BCA-BS03_COP2020"];
    let projDetailsTitle = [
      `CALCULATIONS OF OVERALL BUILDABLE DESIGN SCORE <br> Regulation 6 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
      `CALCULATIONS OF STRUCTURAL BUILDABLE DESIGN SCORE <br> Regulation 7 of the Building Control (Buildability & Productivity) Regulations`,
      `CALCULATIONS OF AS-BUILT BUILDABLE DESIGN SCORE <br> Regulation 13 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
    ];
    let projDetailsName = [
      `Calculations of Overall Buildable Design Score`,
      `Calculations of Structural Buildable Design Score`,
      `Calculations of As-Built Buildable Design Score`,
    ];

    //changing form title
    document
      .querySelector("cn2-master-head")
      .setAttribute("title", formTitle[index]);

    // changing title
    document.querySelector("title").innerHTML = formName[index];

    // changing footer
    document
      .querySelector("cn2-fixed-footer")
      .shadowRoot.querySelector("#form__name").innerHTML = formName[index];

    // changing section title and name of Project Details
    document.querySelector("[projDetailsTitle]").innerHTML =
      projDetailsTitle[index];
    document
      .querySelector("[projDetailsName]")
      .setAttribute("label", projDetailsName[index]);

    document.querySelector("[target='page6']").setAttribute("hidden", "")
    document.querySelector("[target='page7']").setAttribute("hidden", "")

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_FlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_PercOfFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_AppoBuilDesiScor10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaAppoBuil10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10").value = "0"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaPercFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_BuilDesiScor10").value = "0.00"

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_WallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_PercOfWallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaWallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaPercWallLeng10").value = "0.00"

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_FlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_PercOfFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaPercFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10").value = "0"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_BuilDesiScor10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_AppoBuilDesiScor10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaAppoBuil10").value = "0.00"

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_WallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_PercOfWallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaWallLeng10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaPercWallLeng10").value = "0.00"


  }
}

// for validating if all mandatory fields in page5 is filled up
function validateProjectDetailsPage() {
  let noRequired = true;
  let totalGFA = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorRequ10").value;
  stopHere: for (let a of document
    .getElementById("gfaContainer")
    .querySelectorAll("cn2-textbox, cn2-checkbox, input[type='radio']")) {
    if (a.id != "CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20") {
      if (a.hasAttribute("mandatory") || a.hasAttribute("checked")) {
        if (a.hasAttribute("mandatory") && !a.hasAttribute("checked")) {
          if (a.value == "" || totalGFA == 0) {
            noRequired = false;
            break stopHere;
          }
        } else {
          noRequired = false;
          break stopHere;
        }
      }
    }
  }

  if (noRequired) {
    for (let a of document.querySelectorAll("[project-details-show]")) {
      if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
    }
    [...document.querySelectorAll("[total-blocks-add]")].map((el) =>
      el.removeAttribute("disabled")
    );
    [...basement.querySelectorAll("[total-bds-round]")].map(
      (el) => (el.value = el.getAttribute("raw-value"))
    );
    [...superstructure.querySelectorAll("[total-bds-round]")].map(
      (el) => (el.value = el.getAttribute("raw-value"))
    );
  } else {
    for (let a of document.querySelectorAll("[project-details-show]")) {
      a.setAttribute("hidden", "");
    }
    [...document.querySelectorAll("[total-blocks-add]")].map((el) =>
      el.setAttribute("disabled", "")
    );
    // [...basement.querySelectorAll("[total-bds-round]")].map(
    //   (el) => (el.value = "0")
    // );
    // [...superstructure.querySelectorAll("[total-bds-round]")].map(
    //   (el) => (el.value = "0")
    // );
  }

  showParticularTotals();
}

// when one of the four development options radio is selected in page 7
function devType(el) {
  let table = document.querySelector("[proj-det-radio]");
  let val = el.checked;
  if (!el.hasAttribute("not-included")) {
    [...table.querySelectorAll("input")].map((r) => {
      if (!r.hasAttribute("not-included")) {
        r.checked = false;
        if (val) {
          if (r.id != el.id) {
            //r.setAttribute("disabled", "");
          }
        } else r.removeAttribute("disabled");
      }
    });
    document.getElementById(el.id).checked = val;
  }

  isOneSelected = [...table.querySelectorAll("input")].some(
    (r) => r.checked
  );

  if (isOneSelected) {
    [...table.querySelectorAll("input")].map((r) => {
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
      document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10").removeAttribute("checked")
      document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10").removeAttribute("mandatory")
    });
  } else {
    [...table.querySelectorAll("input")].map((r) => {
      r.setAttribute("mandatory", "");
      r.setAttribute("checked", "");
    });
  }

  if (
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjCompWithMini10")
      .checked
  ) {
    document
      .getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20")
      .setAttribute("mandatory", "");
    // document.getElementById(
    //   "CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE20"
    // ).value = "";
    document
      .getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20")
      .removeAttribute("disabled");
  } else {
    document
      .getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20")
      .removeAttribute("mandatory");
    document.getElementById(
      "CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20"
    ).value = "";
    document
      .getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20")
      .setAttribute("disabled", "");
  }

  if (el.id == "CalcOfOverBuil_ProjDetl_ProjCompWithMini610") {
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10").checked = false
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10").setAttribute("disabled", "")
  } else {
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10").removeAttribute("disabled")
  }

  validateProjectDetailsPage();
  disableDescPPV();
}

// activating the textbox beside the clicked checkbox
function activateNextTextbox(el, textbox) {
  if (document.getElementById(el.id).checked) {
    // enabling the textbox
    document.getElementById(textbox).value = "";
    if (document.getElementById(textbox).hasAttribute("disabled"))
      document.getElementById(textbox).removeAttribute("disabled");
    document.getElementById(textbox).setAttribute("mandatory", "");
    document.getElementById(textbox).setAttribute("placeholder", "0.00");
  } else {
    // disabling the textbox
    document.getElementById(textbox).setAttribute("disabled", "");
    document.getElementById(textbox).removeAttribute("placeholder");
    document.getElementById(textbox).value = "";
    if (document.getElementById(textbox).hasAttribute("mandatory"))
      document.getElementById(textbox).removeAttribute("mandatory");
  }

  // calling the computation of Sub GFA in page 9 function when applicable
  if (document.getElementById(el.id).hasAttribute("sub-type")) {
    computeSub(document.getElementById(el.id));
  }
}

// setting the 3 decimal format
function decimalFormat(el, event) {
  // preventing default action
  event.preventDefault();

  let decimal = new RegExp(/^\d*(\.\d{0,3})?$/); // regex formatting for 3 decimal place only
  let value = document.getElementById(el.id).value; // value
  document.getElementById(el.id).value = document
    .getElementById(el.id)
    .value.slice(0, -1); // removing the last inputted character

  // validating if the new value is a match to our regex
  if (value.match(decimal)) {
    // appending the new character to the value if format is validated
    document.getElementById(el.id).value = value;
  }
}

// display "0" in front of decimal point when nothing's there
function displayZero(el) {
  if (document.getElementById(el.id).value.slice(0, 1) == ".") {
    // display zero in front when the first character of the value is a decimal
    document.getElementById(el.id).value =
      "0" + document.getElementById(el.id).value;
  }
}

// computation of Sub GFA in page 9
function computeSub(el) {
  let subType = document.getElementById(el.id).getAttribute("sub-type"); // getting the sub type of the element
  let total = 0; // default total

  // getting the sum of the element's values based on the sub type
  for (let a of document.querySelectorAll("[" + subType + "]")) {
    !isNaN(parseFloat(a.value)) ? (total += parseFloat(a.value)) : (total += 0);
  }

  // printing the total to the respective field
  !isNaN(total.toFixed(2))
    ? (document.querySelector("[" + subType + "-total]").value = total.toFixed(
      2
    ))
    : (document.querySelector("[" + subType + "-total]").value = 0);

  let firstTotal = 0; // first sub total
  let secondTotal = 0; // second sub total

  // validating if the value is a valid float number
  parseFloat(document.querySelector("[sub-first-total]").value)
    ? (firstTotal = parseFloat(
      document.querySelector("[sub-first-total]").value
    ))
    : (firstTotal = 0);
  parseFloat(document.querySelector("[sub-second-total]").value)
    ? (secondTotal = parseFloat(
      document.querySelector("[sub-second-total]").value
    ))
    : (secondTotal = 0);

  // formatting the sum of two sub total into 2 decimal places
  let finalTotal = (firstTotal + secondTotal).toFixed(2);

  // printing the total GFA
  finalTotal
    ? (document.querySelector("[totalGFA]").value = finalTotal)
    : (document.querySelector("[totalGFA]").value = 0);

  validateProjectDetailsPage();
}

// refresh page IDs of computation pages
function refreshPage() {
  let firstPage =
    [
      ...document
        .getElementById("menu")
        .querySelectorAll("cn2-nav-button:not([project-details-show])"),
    ]
      .map((r) => r.getAttribute("target"))
      .map((r) => r.replace("page", ""))
      .map((r) => parseInt(r))
      .sort()
      .pop() + 1;
  let temp = firstPage;
  for (let a of document
    .getElementById("page")
    .querySelectorAll("[project-details-show]")) {
    a.setAttribute("id", `page${firstPage}`);
    for (let b of a.querySelectorAll("[page-owner]")) {
      b.setAttribute("page-owner", `page${firstPage}`);
    }

    firstPage++;
  }
  for (let a of document
    .getElementById("menu")
    .querySelectorAll("[project-details-show]")) {
    a.setAttribute("target", `page${temp}`);
    a.setAttribute("page-number", temp);

    temp++;
  }
}

// disable/enable delete button in add/delete when only one form/field is present
function deleteBtnStatus(con) {
  con === undefined ? (con = document) : "";
  let value = con.querySelector("[total-blocks]").value; // handles the total count of rows in the table

  for (let a of con.querySelectorAll("[danger-bdsss]")) {
    if (value > 1) {
      if (a.hasAttribute("disabled")) a.removeAttribute("disabled"); // enabling the delete button
    } else if (value == "1") {
      a.setAttribute("disabled", ""); // disabling the delete button
    }
  }

  refreshPage();
}

// duplicating the block page
function duplicatePage(el, isBasement) {
  let isBase = isBasement == "basement" ? true : false;
  let typeOfPage = isBasement == "basement" ? "basement" : "superstructure";
  let isBasePrefix = isBasement == "basement" ? "Base" : "";
  let query = isBasement == "basement" ? "B01" : "01";
  let queryPage = isBasement == "basement" ? "page 7" : "page 6";

  let con = null;
  if (isBase) {
    con = basement;
  } else {
    con = superstructure;
  }

  let isPresent = [
    ...document.querySelectorAll("[block-page='" + query + "']"),
  ].every((r) => r.innerHTML != "");

  if (isPresent) {
    // for loader
    showLoader();
    setTimeout(function () {
      hideLoader();
    }, 15000);

    // duplicating page ------------------------------------------------------------------------------------------------------------------------------------------
    let counter =
      [...document.querySelectorAll("[block-page][" + typeOfPage + "]")]
        .map((el) => el.getAttribute("block-page").slice(-2))
        .filter((v) => !isNaN(parseInt(v)))
        .map((v) => parseInt(v))
        .sort()[document.querySelectorAll("[block-page][" + typeOfPage + "]").length - 1] + 1;
    let counterLabel = "";
    if (counter < 10 && counter > 0) {
      counterLabel = `0${counter}`;
    } else {
      counterLabel = counter;
    }

    if (isBase) counterLabel = "B" + counterLabel;
    jsonData[counterLabel] = [];

    let pageID =
      [...document.querySelectorAll("cn2-nav-button[project-details-show][" + typeOfPage + "]")]
        .map((r) => r.getAttribute("target"))
        .map((r) => r.replace("page", ""))
        .map((r) => parseInt(r))
        .sort()
        .shift() + 1;



    let clonePage = document
      .querySelectorAll(`div[${typeOfPage}]`)[0]
      .cloneNode(true);
    let cloneNav = document
      .querySelectorAll(`cn2-nav-button[${typeOfPage}]`)[0]
      .cloneNode(true);
    let pageCount = document.getElementById("page").children.length + 1;

    // formatting the outerHTML of clonePage
    clonePage.setAttribute("id", `page${pageID}`);
    clonePage.setAttribute("block-page", counterLabel);
    clonePage.removeAttribute("style");
    clonePage.removeAttribute("hidden");
    clonePage.querySelector('[role="tablist"]').innerHTML = "";
    clonePage.querySelector("[typical-modal]").setAttribute("hidden", "");
    for (let a of clonePage.querySelectorAll("[non-typical-modal]")) {
      a.removeAttribute("hidden");
    }
    clonePage.querySelector("[close-this]").setAttribute("close-this", "close");
    clonePage.querySelector(
      "[prefix='TypiBlocNoName" + isBasePrefix + "']"
    ).value = "";
    clonePage
      .querySelector("[prefix='TypiBlockAdd" + isBasePrefix + "']")
      .removeAttribute("disabled");
    clonePage
      .querySelector("[prefix='TypiBlockRemove" + isBasePrefix + "']")
      .setAttribute("disabled", "");
    clonePage
      .querySelector("[prefix='TypiBlockEdit" + isBasePrefix + "']")
      .setAttribute("disabled", "");
    clonePage
      .querySelector("[prefix='TypiBlockSave" + isBasePrefix + "']")
      .setAttribute("disabled", "");

    // formatting the outerHTML of cloneNav
    cloneNav.setAttribute("target", `page${pageID}`);
    cloneNav.setAttribute("page-number", pageCount);
    cloneNav.setAttribute("label", `${counterLabel}`);
    cloneNav.removeAttribute("style");
    cloneNav.removeAttribute("hidden");
    cloneNav.addEventListener("click", (event) => {
      let isClosed = true;
      stopHere: for (let a of document.querySelectorAll("[close-this]")) {
        if (a.getAttribute("close-this") == "open") {
          isClosed = false;
          break stopHere;
        }
      }

      if (!isClosed) {
        for (let b of document.querySelectorAll("[target]")) {
          if (b.getAttribute("target") == lastPage) {
            b.setAttribute("selected", "");
          } else {
            if (b.hasAttribute("selected")) b.removeAttribute("selected");
          }
        }

        for (let a of document.getElementById("page").children) {
          if (a.id == lastPage) {
            a.setAttribute("style", "display: block;");
          } else {
            a.setAttribute("style", "display: none;");
          }
        }

        showMessage("Please click the 'Close' button.");
        return;
      } else {
        for (let b of document.querySelectorAll("[target]")) {
          if (b.hasAttribute("selected")) {
            lastPage = cloneNav.getAttribute("target");
          }
        }
      }

      pageDiv.scrollTop = 0;
    });

    // changing of IDs
    for (let a of clonePage.querySelectorAll("[id]")) {
      let prefix = a.getAttribute("prefix");
      let suffix = a.getAttribute("suffix");
      let newID = prefix + counter + suffix;
      a.setAttribute("id", newID);
      if (
        ["cn2-datefield", "cn2-select", "cn2-textarea", "cn2-textbox"].includes(
          a.tagName.toLowerCase()
        )
      ) {
        jsonData[newID] = a.getAttribute("default-instance");
        a.value = a.getAttribute("default-instance");
      } else if (["cn2-checkbox", "input"].includes(a.tagName.toLowerCase())) {
        jsonData[newID] = false;
      }
    }

    // changing of page-owner
    for (let a of clonePage.querySelectorAll("[page-owner]")) {
      a.setAttribute("page-owner", `page${pageID}`);
    }
    // changing the H2
    clonePage.querySelector(
      "h2"
    ).innerHTML = `Part V : Computation of Buildable Design Score - ${counterLabel}`;
    // changing the Project Reference Number
    for (let a of clonePage.querySelectorAll("[proj-ref-no]")) {
      a.value = document.getElementById(
        "CalcOfOverBuil_ProjDetl_ProjRefNo10"
      ).value;
    }
    // changing the Block No.
    for (let a of clonePage.querySelectorAll("[page-block-no]")) {
      if (a.hasAttribute("id")) {
        a.value = counterLabel;
        a.setAttribute("event-blur", "changeBlockNo(this);");
      } else {
        a.innerHTML = counterLabel;
      }
    }
    // centering the text align
    for (let a of clonePage.querySelectorAll("cn2-textbox")) {
      if (!a.hasAttribute("dont-centerbox"))
        a.shadowRoot.querySelector("input").style.textAlign = "center";
    }

    // duplicating row ------------------------------------------------------------------------------------------------------------------------------------------
    let cloneTR = con.querySelectorAll(`[blocktr]`)[0].cloneNode(true);
    let cloneChildTR = con
      .querySelectorAll(`[blockchildtr]`)[0]
      .cloneNode(true);

    cloneChildTR.innerHTML = "";
    let newTD = document.createElement("td");
    newTD.setAttribute("colspan", "6");
    newTD.setAttribute("style", "margin: 0px; padding: 0px;");
    cloneChildTR.appendChild(newTD);
    for (let a of cloneTR.querySelectorAll("[id]")) {
      a.setAttribute(
        "id",
        a.getAttribute("prefix") + counter + a.getAttribute("suffix")
      );
      if (a.hasAttribute("block")) {
        a.value = counterLabel;
        jsonData[
          a.getAttribute("prefix") + counter + a.getAttribute("suffix")
        ] = counterLabel;
      } else if (
        a.hasAttribute("floor") ||
        a.hasAttribute("percent-floor") ||
        a.hasAttribute("walllength") ||
        a.hasAttribute("percent-wall") ||
        a.hasAttribute("bds") ||
        a.hasAttribute("abds")
      ) {
        a.value = "0.00";
        jsonData[
          a.getAttribute("prefix") + counter + a.getAttribute("suffix")
        ] = "0.00";
      }
    }

    for (let a of cloneTR.querySelectorAll("cn2-textbox")) {
      if (!a.hasAttribute("dont-centerbox"))
        a.shadowRoot.querySelector("input").style.textAlign = "center";
    }

    cloneTR.setAttribute("blocktr", counterLabel);
    cloneTR.querySelector("[danger]").setAttribute("blockOwner", counterLabel);
    cloneChildTR.setAttribute("blockchildtr", counterLabel);

    con.querySelector("[block-tr]").appendChild(cloneTR);
    con.querySelector("[block-tr]").appendChild(cloneChildTR);
    document.getElementById("page").appendChild(clonePage);
    document.getElementById("menu").appendChild(cloneNav);

    con.querySelector("[total-blocks]").value =
      parseInt(con.querySelector("[total-blocks]").value) + 1;
    document
      .querySelector(`[target="page5"]`)
      .shadowRoot.querySelector("button")
      .click();
    deleteBtnStatus(con);
  } else {
    showMessage(
      `Navigate to ${queryPage} to load the section before adding the block.`
    );
  }
}

// for removing a block page
function removePage(el, isBasement) {
  let isBase = isBasement == "basement" ? true : false;
  let typeOfPage = isBasement == "basement" ? "basement" : "superstructure";
  let con = null;
  if (isBase) {
    con = basement;
  } else {
    con = superstructure;
  }
  // removing page ------------------------------------------------------------------------------------------------------------------------------------------
  if (
    con
      .querySelector(
        "[blocktr='" +
        document.getElementById(el.id).getAttribute("blockOwner") +
        "']"
      )
      .nextElementSibling.querySelector("td")
      .querySelectorAll("table").length == 0
  ) {
    // remove page ------------------------------------------------------------------------------------------------------------------------------------------
    let counterRow = parseInt(
      el.id
        .replace(document.getElementById(el.id).getAttribute("prefix"), "")
        .replace(document.getElementById(el.id).getAttribute("suffix"), "")
    );
    let counterPage = parseInt(
      el.id
        .replace(document.getElementById(el.id).getAttribute("prefix"), "")
        .replace(document.getElementById(el.id).getAttribute("suffix"), "")
    );
    let deleteBlockPage = document.querySelector(
      "[block-page='" +
      document.getElementById(el.id).getAttribute("blockOwner") +
      "']"
    );

    let deleteNav = document.querySelector(
      "[target='" + deleteBlockPage.id + "']"
    );
    let deleteNavNo = parseInt(
      document
        .querySelector("[target='" + deleteBlockPage.id + "']")
        .getAttribute("page-number")
    );
    let nextSibPage = deleteBlockPage;

    delete jsonData[document.getElementById(el.id).getAttribute("blockOwner")];

    if (nextSibPage.nextElementSibling) {
      while (nextSibPage.nextElementSibling != null) {
        let currentPage = nextSibPage.nextElementSibling;
        if (currentPage.hasAttribute(typeOfPage)) {
          let oldID = currentPage.id;
          currentPage.setAttribute("id", "page" + deleteNavNo);
          for (let a of currentPage.querySelectorAll("[id]")) {
            let defaultVal = a.value;
            delete jsonData[a.id];
            a.setAttribute(
              "id",
              a.getAttribute("prefix") + counterPage + a.getAttribute("suffix")
            );
            jsonData[
              a.getAttribute("prefix") + counterPage + a.getAttribute("suffix")
            ] = defaultVal;
          }

          // changing of page-owner
          for (let a of currentPage.querySelectorAll("[page-owner]")) {
            a.setAttribute("page-owner", "page" + deleteNavNo);
          }

          let currentNav = document.querySelector("[target='" + oldID + "']");
          currentNav.setAttribute("target", "page" + deleteNavNo);
          currentNav.setAttribute("page-number", deleteNavNo);

          counterPage++;
        }
        deleteNavNo++;
        nextSibPage = nextSibPage.nextElementSibling;
      }
    } else {
      let currentPage = nextSibPage;
      for (let a of currentPage.querySelectorAll("[id]")) {
        delete jsonData[a.id];
      }
    }

    deleteNav.remove();
    deleteBlockPage.remove();

    // remove row ------------------------------------------------------------------------------------------------------------------------------------------
    let deleteBlock = con.querySelector(
      "[blocktr='" +
      document.getElementById(el.id).getAttribute("blockOwner") +
      "']"
    );
    let deleteBlockChlid = con.querySelector(
      "[blocktr='" +
      document.getElementById(el.id).getAttribute("blockOwner") +
      "']"
    ).nextElementSibling;
    let nextSib = deleteBlock;

    if (nextSib.nextElementSibling.nextElementSibling) {
      while (nextSib.nextElementSibling.nextElementSibling != null) {
        let currentRow = nextSib.nextElementSibling.nextElementSibling;
        let currentChildRow =
          nextSib.nextElementSibling.nextElementSibling.nextElementSibling;
        for (let a of currentRow.querySelectorAll("[id]")) {
          let defaultVal = a.value;
          delete jsonData[a.id];
          a.setAttribute(
            "id",
            a.getAttribute("prefix") + counterRow + a.getAttribute("suffix")
          );
          jsonData[
            a.getAttribute("prefix") + counterRow + a.getAttribute("suffix")
          ] = defaultVal;
        }
        for (let a of currentChildRow.querySelectorAll("[id]")) {
          let defaultVal = a.value;
          delete jsonData[a.id];
          a.setAttribute(
            "id",
            a.getAttribute("prefix") + counterRow + a.getAttribute("suffix")
          );
          jsonData[
            a.getAttribute("prefix") + counterRow + a.getAttribute("suffix")
          ] = defaultVal;
        }

        nextSib = nextSib.nextElementSibling.nextElementSibling;
        counterRow++;
      }
    } else {
      let currentRow = nextSib;
      let currentChildRow = nextSib.nextElementSibling;
      for (let a of currentRow.querySelectorAll("[id]")) {
        delete jsonData[a.id];
      }
      for (let a of currentChildRow.querySelectorAll("[id]")) {
        delete jsonData[a.id];
      }
    }

    deleteBlock.remove();
    deleteBlockChlid.remove();

    con.querySelector("[total-blocks]").value =
      parseInt(con.querySelector("[total-blocks]").value) - 1;

    overAllTotal(con);
    deleteBtnStatus(con);
  } else {
    showMessage(
      "You cannot delete a block with Typical blocks.\nPlease delete the Typical blocks first."
    );
    return;
  }
}

// for renaming block no./name
function changeBlockNo(el) {
  let masterBlockPage = findBlock(document.getElementById(el.id));
  let masterBlock = findBlock(document.getElementById(el.id)).getAttribute(
    "block-page"
  );
  let isNotPresent = [
    ...document.getElementById("page5").querySelectorAll("[block]"),
  ]
    .map((r) => r.value)
    .filter((r) => r != masterBlock)
    .every((r) => r != el.value);

  if (isNotPresent) {
    stopHere: for (let a of document.querySelectorAll("[blocktr]")) {
      for (let b of a.querySelectorAll("[block]")) {
        if (b.value == masterBlock) {
          b.value = el.value;
          jsonData[el.value] = [];
          for (let c of jsonData[masterBlock]) {
            jsonData[el.value].push(c);
          }
          delete jsonData[masterBlock];
          for (let c of masterBlockPage.querySelectorAll("[page-block-no]")) {
            if (c.hasAttribute("id")) c.value = el.value;
            else c.innerHTML = el.value;
          }
          for (let c of document.querySelectorAll(
            "[blocktr='" + masterBlock + "']"
          )) {
            c.setAttribute("blocktr", el.value);
          }
          for (let c of document.querySelectorAll(
            "[blockowner='" + masterBlock + "']"
          )) {
            c.setAttribute("blockowner", el.value);
          }
          for (let c of document.querySelectorAll(
            "[blockchildtr='" + masterBlock + "']"
          )) {
            c.setAttribute("blockchildtr", el.value);
          }
          for (let c of document.querySelectorAll(
            "[block-page='" + masterBlock + "']"
          )) {
            c.setAttribute("block-page", el.value);
          }
          document
            .querySelector("cn2-nav-button[label='" + masterBlock + "']")
            .setAttribute("label", el.value);
          findBlock(document.getElementById(el.id)).querySelector(
            "h2[raw]"
          ).innerHTML =
            "Part V : Computation of Buildable Design Score - " + el.value;
          break stopHere;
        }
      }
    }
  } else {
    showMessage("The Block No. already exist");
    document.getElementById(el.id).value = masterBlock;
    return;
  }
}

// for showing modal
function showAddBlock(el) {
  let page = document.getElementById(
    document.getElementById(el.id).parentElement.getAttribute("page-owner")
  );
  page.querySelector("[typical-modal]").removeAttribute("hidden");
  for (let a of page.querySelectorAll("[non-typical-modal]")) {
    a.setAttribute("hidden", "");
  }
  page.querySelector("[close-this]").setAttribute("close-this", "open");
}

// for hiding modal
function hideAddBlock(el, isBasement) {
  let prefix = isBasement == "basement" ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  page.querySelector("[typical-modal]").setAttribute("hidden", "");
  for (let a of page.querySelectorAll("[non-typical-modal]")) {
    a.removeAttribute("hidden");
  }
  page.querySelector("[close-this]").setAttribute("close-this", "close");

  for (let d of page
    .querySelector("[typical-block-list]")
    .querySelector("[role='tablist']")
    .querySelectorAll("a")) {
    if (d.className.includes("active")) d.classList.remove("active");
  }
  page.querySelector("[prefix='TypiBlocNoName" + prefix + "']").value = "";
  page
    .querySelector("[prefix='TypiBlockAdd" + prefix + "']")
    .removeAttribute("disabled");
  page
    .querySelector("[prefix='TypiBlockRemove" + prefix + "']")
    .setAttribute("disabled", "");
  page
    .querySelector("[prefix='TypiBlockEdit" + prefix + "']")
    .setAttribute("disabled", "");
  page
    .querySelector("[prefix='TypiBlockSave" + prefix + "']")
    .setAttribute("disabled", "");
}

// find block page
function findBlock(el) {
  while (!el.hasAttribute("block-page")) {
    el = el.parentElement;
  }
  return el;
}

// find if block is basement
function isBasePage(el) {
  while (!el.hasAttribute("block-page")) {
    el = el.parentElement;
  }
  return el.hasAttribute("basement") ? true : false;
}

// find tr parent of row
function findTR(el) {
  while (el.tagName.toLowerCase() != "tr") {
    el = el.parentElement;
  }
  return el;
}

// find table parent of row
function findTable(el) {
  while (el.tagName.toLowerCase() != "table") {
    el = el.parentElement;
  }
  return el;
}

// for saving the typical block no./name
function addToTheList(el, isBasement) {
  let params = isBasement == "basement" ? "basement" : null;
  let con = null;
  if (isBasement) {
    con = basement;
  } else {
    con = superstructure;
  }
  let prefixBase = isBasement == "basement" ? "Base" : "";
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let counter = el.id.replace(
    document.getElementById(el.id).getAttribute("prefix"),
    ""
  );
  let val = document
    .getElementById("TypiBlocNoName" + prefixBase + counter)
    .value.toUpperCase()
  if (document.getElementById("TypiBlocNoName" + prefixBase + counter).value) {
    if (!jsonData[masterBlock].includes(val)) {
      // adding in the list ---------------------------------------------------------------------------------------------------------------
      let area = document
        .getElementById("TypiBlocNoName" + prefixBase + counter)
        .parentElement.parentElement.parentElement.querySelector(
          "[typical-block-list]"
        )
        .querySelector("[role='tablist']");
      let newList = document.createElement("a");
      newList.classList.add("list-group-item");
      newList.classList.add("list-group-item-action");
      newList.setAttribute(
        "id",
        document
          .getElementById("TypiBlocNoName" + prefixBase + counter)
          .value.toUpperCase()
      );
      newList.setAttribute("data-toggle", "list");
      newList.setAttribute("role", "tab");
      newList.style.fontWeight = "bold";
      newList.style.backgroundColor = "bold";
      newList.innerHTML = document
        .getElementById("TypiBlocNoName" + prefixBase + counter)
        .value.toUpperCase()
      newList.addEventListener("click", (event) => {
        if (
          page
            .querySelector("[prefix='TypiBlockSave" + prefixBase + "']")
            .hasAttribute("disabled")
        ) {
          if (
            page
              .querySelector("[prefix='TypiBlockRemove" + prefixBase + "']")
              .hasAttribute("disabled")
          )
            page
              .querySelector("[prefix='TypiBlockRemove" + prefixBase + "']")
              .removeAttribute("disabled");
          if (
            page
              .querySelector("[prefix='TypiBlockEdit" + prefixBase + "']")
              .hasAttribute("disabled")
          )
            page
              .querySelector("[prefix='TypiBlockEdit" + prefixBase + "']")
              .removeAttribute("disabled");
        } else {
          page
            .querySelector("[prefix='TypiBlockRemove" + prefixBase + "']")
            .setAttribute("disabled", "");
          page
            .querySelector("[prefix='TypiBlockEdit" + prefixBase + "']")
            .setAttribute("disabled", "");
        }
      });

      area.appendChild(newList);
      document.getElementById("TypiBlocNoName" + prefixBase + counter).value =
        "";
      document.getElementById("TypiBlocNoName" + prefixBase + counter).focus();

      jsonData[masterBlock].push(val);

      // adding in the table ---------------------------------------------------------------------------------------------------------------

      let parentID = document
        .querySelector("[blockchildtr='" + masterBlock + "']")
        .previousElementSibling.querySelector(
          "[prefix='CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_BlkNm']"
        )
        .id.replace(
          document
            .querySelector("[blockchildtr='" + masterBlock + "']")
            .previousElementSibling.querySelector(
              "[prefix='CalcOfOverBuil_BuilDesiScoreSumm" +
              prefixBase +
              "_BlkNm']"
            )
            .getAttribute("prefix"),
          ""
        );
      let childField = document
        .querySelector("[blockchildtr='" + masterBlock + "']")
        .querySelector("td");
      let childID = (childField.children.length + 1).toString() + "0";

      let newCN2Textbox1 = document.createElement("cn2-textbox");
      newCN2Textbox1.setAttribute("no-label", "");
      newCN2Textbox1.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox1.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_BlkNm" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox1.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_BlkNm"
      );
      newCN2Textbox1.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_BlkNm" +
        parentID +
        "_" +
        childID
      ] = val;
      newCN2Textbox1.setAttribute("disabled", "");
      newCN2Textbox1.setAttribute("block", "");
      newCN2Textbox1.value = val;

      let newCN2Textbox2 = document.createElement("cn2-textbox");
      newCN2Textbox2.setAttribute("no-label", "");
      newCN2Textbox2.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox2.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_FlooArea" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox2.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_FlooArea"
      );
      newCN2Textbox2.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_FlooArea" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox2.setAttribute("disabled", "");
      newCN2Textbox2.setAttribute("floor", "");

      let newCN2Textbox3 = document.createElement("cn2-textbox");
      newCN2Textbox3.setAttribute("no-label", "");
      newCN2Textbox3.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox3.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_PercOfFlooArea" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox3.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_PercOfFlooArea"
      );
      newCN2Textbox3.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_PercOfFlooArea" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox3.setAttribute("disabled", "");
      newCN2Textbox3.setAttribute("percent-floor", "");

      let newCN2Textbox6 = document.createElement("cn2-textbox");
      newCN2Textbox6.setAttribute("no-label", "");
      newCN2Textbox6.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox6.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_WallLeng" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox6.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_WallLeng"
      );
      newCN2Textbox6.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_WallLeng" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox6.setAttribute("disabled", "");
      newCN2Textbox6.setAttribute("walllength", "");

      let newCN2Textbox7 = document.createElement("cn2-textbox");
      newCN2Textbox7.setAttribute("no-label", "");
      newCN2Textbox7.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox7.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_PercOfWallLeng" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox7.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_PercOfWallLeng"
      );
      newCN2Textbox7.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_PercOfWallLeng" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox7.setAttribute("disabled", "");
      newCN2Textbox7.setAttribute("percent-wall", "");

      let newCN2Textbox4 = document.createElement("cn2-textbox");
      newCN2Textbox4.setAttribute("no-label", "");
      newCN2Textbox4.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox4.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_BuilDesiScor" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox4.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_BuilDesiScor"
      );
      newCN2Textbox4.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_BuilDesiScor" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox4.setAttribute("disabled", "");
      newCN2Textbox4.setAttribute("bds", "");

      let newCN2Textbox5 = document.createElement("cn2-textbox");
      newCN2Textbox5.setAttribute("no-label", "");
      newCN2Textbox5.shadowRoot.querySelector("input").style.textAlign =
        "center";
      newCN2Textbox5.setAttribute(
        "id",
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_AppoBuilDesiScor" +
        parentID +
        "_" +
        childID
      );
      newCN2Textbox5.setAttribute(
        "prefix",
        "CalcOfOverBuil_BuilDesiScoreSumm" + prefixBase + "_AppoBuilDesiScor"
      );
      newCN2Textbox5.setAttribute("suffix", "0");
      jsonData[
        "CalcOfOverBuil_BuilDesiScoreSumm" +
        prefixBase +
        "_AppoBuilDesiScor" +
        parentID +
        "_" +
        childID
      ] = "0.00";
      newCN2Textbox5.setAttribute("disabled", "");
      newCN2Textbox5.setAttribute("abds", "");

      let newChild = document.createElement("table");
      newChild.classList.add("table");
      newChild.classList.add("table-bordered");
      newChild.setAttribute("id", val);
      newChild.style.marginTop = "0px";
      newChild.style.marginBottom = "0px";
      newChild.style.marginLeft = "0px";
      newChild.style.marginRight = "0px";

      let newTBody = document.createElement("tbody");

      let newTR = document.createElement("tr");
      newTR.classList.add("text-center");

      let newTDBlock = document.createElement("td");
      newTDBlock.setAttribute("width", "11%");
      newTDBlock.style.marginTop = "0px";
      newTDBlock.style.marginBottom = "0px";
      newTDBlock.style.marginLeft = "0px";
      newTDBlock.style.marginRight = "0px";
      newTDBlock.appendChild(newCN2Textbox1);

      let newTDArea = document.createElement("td");
      newTDArea.setAttribute("width", "11%");
      newTDArea.style.marginTop = "0px";
      newTDArea.style.marginBottom = "0px";
      newTDArea.style.marginLeft = "0px";
      newTDArea.style.marginRight = "0px";
      newTDArea.appendChild(newCN2Textbox2);
      //newTDArea.appendChild(newCN2Textbox2Span);

      let newTDPercent = document.createElement("td");
      //let newTDPercentSymbol = document.createElement("span");
      newTDPercent.setAttribute("width", "11%");
      newTDPercent.classList.add("text-left");
      newTDPercent.style.marginTop = "0px";
      newTDPercent.style.marginBottom = "0px";
      newTDPercent.style.marginLeft = "0px";
      newTDPercent.style.marginRight = "0px";
      newTDPercent.appendChild(newCN2Textbox3);
      //newTDPercent.appendChild(newTDPercentSymbol);

      let newTDWall = document.createElement("td");
      newTDWall.setAttribute("width", "11%");
      newTDWall.style.marginTop = "0px";
      newTDWall.style.marginBottom = "0px";
      newTDWall.style.marginLeft = "0px";
      newTDWall.style.marginRight = "0px";
      newTDWall.appendChild(newCN2Textbox6);
      //newTDArea.appendChild(newCN2Textbox2Span);

      let newTDWallPercent = document.createElement("td");
      //let newTDPercentSymbol = document.createElement("span");
      newTDWallPercent.setAttribute("width", "11%");
      newTDWallPercent.classList.add("text-left");
      newTDWallPercent.style.marginTop = "0px";
      newTDWallPercent.style.marginBottom = "0px";
      newTDWallPercent.style.marginLeft = "0px";
      newTDWallPercent.style.marginRight = "0px";
      newTDWallPercent.appendChild(newCN2Textbox7);
      //newTDPercent.appendChild(newTDPercentSymbol);

      let newTDBDS = document.createElement("td");
      newTDBDS.setAttribute("width", "11%");
      newTDBDS.style.marginTop = "0px";
      newTDBDS.style.marginBottom = "0px";
      newTDBDS.style.marginLeft = "0px";
      newTDBDS.style.marginRight = "0px";
      newTDBDS.appendChild(newCN2Textbox4);

      let newTDABDS = document.createElement("td");
      newTDABDS.setAttribute("width", "11%");
      newTDABDS.style.marginTop = "0px";
      newTDABDS.style.marginBottom = "0px";
      newTDABDS.style.marginLeft = "0px";
      newTDABDS.style.marginRight = "0px";
      newTDABDS.appendChild(newCN2Textbox5);

      let newTDDel = document.createElement("td");
      newTDDel.setAttribute("width", "11%");
      newTDDel.style.marginTop = "0px";
      newTDDel.style.marginBottom = "0px";
      newTDDel.style.marginLeft = "0px";
      newTDDel.style.marginRight = "0px";

      newTR.appendChild(newTDBlock);
      newTR.appendChild(newTDArea);
      newTR.appendChild(newTDPercent);
      newTR.appendChild(newTDWall);
      newTR.appendChild(newTDWallPercent);
      newTR.appendChild(newTDBDS);
      newTR.appendChild(newTDABDS);
      newTR.appendChild(newTDDel);
      newTBody.appendChild(newTR);
      newChild.appendChild(newTBody);
      childField.appendChild(newChild);
      for (let a of newChild.querySelectorAll("cn2-textbox")) {
        a.shadowRoot.querySelector("input").style.color = "green";
      }
      distributeTotal(el, masterBlock, params);

      con.querySelector("[total-blocks]").value =
        parseInt(con.querySelector("[total-blocks]").value) + 1;
    } else {
      showMessage(
        "Block No./Name " +
        val +
        " already exist.\nPlease use another Block No."
      );
      return;
    }

    for (let c of page
      .querySelector("[typical-block-list]")
      .querySelector("[role='tablist']")
      .querySelectorAll("a")) {
      if (c.className.includes("active")) c.classList.remove("active");
    }
  }
}

// for deleting the typical block no./name
function removeFromTheList(el, isBasement) {
  let params = isBasement == "basement" ? "basement" : null;
  let con = null;
  if (isBasement) {
    con = basement;
  } else {
    con = superstructure;
  }
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let selected = page
    .querySelector("[typical-block-list]")
    .querySelector("[role='tablist']")
    .querySelector(".active");

  if (selected) {
    // adding in the list ---------------------------------------------------------------------------------------------------------------
    let newJSON = jsonData[masterBlock].filter(
      (a) => a != selected.innerHTML
    );
    delete jsonData[masterBlock];
    jsonData[masterBlock] = newJSON;

    selected.remove();

    // adding in the table ---------------------------------------------------------------------------------------------------------------
    let childField = con
      .querySelector("[blockchildtr='" + masterBlock + "']")
      .querySelector("td")
      .querySelector("table[id='" + selected.innerHTML + "']");
    let nextSibPage = childField;

    if (nextSibPage.nextElementSibling) {
      while (nextSibPage.nextElementSibling != null) {
        let currentPage = nextSibPage.nextElementSibling;
        for (let a of currentPage.querySelectorAll("[id]")) {
          let defaultVal = a.value;
          let counterParent = a.id
            .replace(document.getElementById(a.id).getAttribute("prefix"), "")
            .split("_")[0];
          let counter =
            parseInt(
              a.id
                .replace(
                  document.getElementById(a.id).getAttribute("prefix"),
                  ""
                )
                .split("_")[1]
            ) - 10;
          delete jsonData[a.id];
          a.setAttribute(
            "id",
            a.getAttribute("prefix") + counterParent + "_" + counter
          );
          jsonData[
            a.getAttribute("prefix") + counterParent + "_" + counter
          ] = defaultVal;
        }

        nextSibPage = nextSibPage.nextElementSibling;
      }
    } else {
      let currentPage = nextSibPage;
      for (let a of currentPage.querySelectorAll("[id]")) {
        delete jsonData[a.id];
      }
    }

    childField.remove();

    distributeTotal(el, masterBlock, params);

    con.querySelector("[total-blocks]").value =
      parseInt(con.querySelector("[total-blocks]").value) - 1;
  }
}

// for editing the typical block no./name
function editFromTheList(el, isBasement) {
  let prefix = isBasement == "basement" ? "Base" : "";
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let selected = findBlock(document.getElementById(el.id))
    .querySelector("[typical-block-list]")
    .querySelector("[role='tablist']")
    .querySelector(".active");
  let val = selected.innerHTML.toUpperCase();

  if (selected) {
    let newJSON = jsonData[masterBlock].filter(
      (a) => a != selected.innerHTML
    );
    delete jsonData[masterBlock];
    jsonData[masterBlock] = newJSON;

    // selected.remove();

    page.querySelector("[prefix='TypiBlocNoName" + prefix + "']").value = val.toUpperCase();
    findBlock(document.getElementById(el.id))
      .querySelector("[prefix='TypiBlockAdd" + prefix + "']")
      .setAttribute("disabled", "");
    findBlock(document.getElementById(el.id))
      .querySelector("[prefix='TypiBlockRemove" + prefix + "']")
      .setAttribute("disabled", "");
    findBlock(document.getElementById(el.id))
      .querySelector("[prefix='TypiBlockEdit" + prefix + "']")
      .setAttribute("disabled", "");
    findBlock(document.getElementById(el.id))
      .querySelector("[prefix='TypiBlockSave" + prefix + "']")
      .removeAttribute("disabled");

    oldBlockNo = val.toUpperCase();
  }
}

// saving the editted block name/no.
function saveToTheList(el, isBasement) {
  let prefix = isBasement == "basement" ? "Base" : "";
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let oldSelected = oldBlockNo;
  let newSelected = page
    .querySelector("[prefix='TypiBlocNoName" + prefix + "']")
    .value.toUpperCase();

  stopHere: for (let a of document.querySelectorAll("[blockchildtr]")) {
    for (let b of a.querySelectorAll("[block]")) {
      if (b.value == oldSelected) {
        b.value = newSelected;
        for (let c of a.querySelectorAll("table")) {
          if (c.id == oldSelected) {
            c.setAttribute("id", newSelected);
          }
        }

        let area = page
          .querySelector("[typical-block-list]")
          .querySelector("[role='tablist']");
        stopHere1: for (let c of area.querySelectorAll("a")) {
          if (c.id == oldSelected) {
            c.setAttribute("id", newSelected);
            c.innerHTML = newSelected
            break stopHere1;
          }
        }

        page.querySelector("[prefix='TypiBlocNoName" + prefix + "']").value =
          "";
        page.querySelector("[prefix='TypiBlocNoName" + prefix + "']").focus();

        jsonData[masterBlock].push(newSelected);

        findBlock(document.getElementById(el.id))
          .querySelector("[prefix='TypiBlockAdd" + prefix + "']")
          .removeAttribute("disabled");
        findBlock(document.getElementById(el.id))
          .querySelector("[prefix='TypiBlockRemove" + prefix + "']")
          .removeAttribute("disabled");
        findBlock(document.getElementById(el.id))
          .querySelector("[prefix='TypiBlockEdit" + prefix + "']")
          .removeAttribute("disabled");
        findBlock(document.getElementById(el.id))
          .querySelector("[prefix='TypiBlockSave" + prefix + "']")
          .setAttribute("disabled", "");

        for (let d of page
          .querySelector("[typical-block-list]")
          .querySelector("[role='tablist']")
          .querySelectorAll("a")) {
          if (d.className.includes("active")) d.classList.remove("active");
        }

        oldBlockNo = "";
        break stopHere;
      }
    }
  }
}

// distribute the total of master row in the child row/s
function distributeTotal(el, masterBlock, isBasement) {
  let prefix = isBasement == "basement" ? "Base" : "";
  let con = null;
  if (isBasement) {
    con = basement;
  } else {
    con = superstructure;
  }
  let page = findBlock(document.getElementById(el.id));
  let childFieldNew = con
    .querySelector("[blockchildtr='" + masterBlock + "']")
    .querySelector("td");
  let childIDNew = childFieldNew.children.length + 1;

  let allFloorArea = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1" +
    prefix +
    "']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1" +
      prefix +
      "']"
    ).value
    : "0.00";

  let perFloorAreaRaw = !isNaN(
    (parseFloat(allFloorArea) /
      parseFloat(childIDNew) /
      parseFloat(allFloorArea)) *
    100
  )
    ? (parseFloat(allFloorArea) /
      parseFloat(childIDNew) /
      parseFloat(allFloorArea)) *
    100
    : "0.00";
  let perFloorArea = !isNaN(
    (
      (parseFloat(allFloorArea) /
        parseFloat(childIDNew) /
        parseFloat(allFloorArea)) *
      100
    ).toFixed(2)
  )
    ? (
      (parseFloat(allFloorArea) /
        parseFloat(childIDNew) /
        parseFloat(allFloorArea)) *
      100
    ).toFixed(2)
    : "0.00";

  let allWallLength = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1" +
    prefix +
    "']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1" +
      prefix +
      "']"
    ).value
    : "0.00";

  let perWallAreaRaw = !isNaN(
    (parseFloat(allWallLength) /
      parseFloat(childIDNew) /
      parseFloat(allWallLength)) *
    100
  )
    ? (parseFloat(allWallLength) /
      parseFloat(childIDNew) /
      parseFloat(allWallLength)) *
    100
    : "0.00";
  let perWallArea = !isNaN(
    (
      (parseFloat(allWallLength) /
        parseFloat(childIDNew) /
        parseFloat(allWallLength)) *
      100
    ).toFixed(2)
  )
    ? (
      (parseFloat(allWallLength) /
        parseFloat(childIDNew) /
        parseFloat(allWallLength)) *
      100
    ).toFixed(2)
    : "0.00";

  let allBDS = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScore" + prefix + "']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScore" + prefix + "']"
    ).value
    : "0.00";
  let perallBDSRaw = !isNaN(parseFloat(allBDS) * (perFloorAreaRaw / 100))
    ? parseFloat(allBDS) * (perFloorAreaRaw / 100)
    : "0.00";
  let perallBDS = !isNaN(
    (parseFloat(allBDS) * (perFloorAreaRaw / 100)).toFixed(2)
  )
    ? (parseFloat(allBDS) * (perFloorAreaRaw / 100)).toFixed(2)
    : "0.00";

  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[floor]").value = allFloorArea;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-floor]").value = perFloorArea;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-floor]").value = perFloorAreaRaw
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[walllength]").value = allWallLength;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-wall]").value = perWallArea;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-wall]").value = perWallAreaRaw
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[bds]").value = allBDS;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]").value = perallBDS;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]").vlaue = perallBDSRaw

  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[floor]")) {
      b.value = allFloorArea;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[percent-floor]")) {
      b.value = perFloorArea;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[walllength]")) {
      b.value = allWallLength;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[percent-wall]")) {
      b.value = perFloorArea;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[bds]")) {
      b.value = allBDS;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[abds]")) {
      b.value = perallBDS;
    }
  }

  isBasePage(document.getElementById(el.id))
    ? overAllTotal(con)
    : overAllTotal(con);
}

// for totals in page 8
function overAllTotal(con) {
  let totalAreaField = con.querySelector("[total-area]");
  let totalPercentField = con.querySelector("[total-percent]");
  let totalWallField = con.querySelector("[total-walllength]");
  let totalWallPercentField = con.querySelector("[total-wall-percent]");
  let totalABDSField = con.querySelector("[total-abds]");
  let totalABDSRoundedField = con.querySelector("[total-abds-rounded]");
  let total =
    con.id == "basementContainer"
      ? "page4-totalBaseBDS"
      : "page4-totalSuperBDS";
  let page4TotalABDSRoundedField = document.querySelectorAll(`[${total}]`);
  let totalArea = [...con.querySelectorAll("[floor]")]
    .filter((a) => !isNaN(parseFloat(a.value)))
    .map((a) => parseFloat(a.value))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  let totalWallLength = [...con.querySelectorAll("[walllength]")]
    .filter((a) => !isNaN(parseFloat(a.value)))
    .map((a) => parseFloat(a.value))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  let totalABDS = [...con.querySelectorAll("[abds]")]
    .filter((a) => !isNaN(parseFloat(a.value)))
    .map((a) => parseFloat(a.value))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  totalAreaField.value = !isNaN(parseFloat(totalArea))
    ? parseFloat(totalArea).toFixed(2)
    : "0.00";
  totalPercentField.value =
    parseFloat(totalArea) != 0 && !isNaN(parseFloat(totalArea))
      ? "100.00"
      : "0.00";
  totalWallField.value = !isNaN(parseFloat(totalWallLength))
    ? parseFloat(totalWallLength).toFixed(2)
    : "0.00";
  totalWallPercentField.value =
    parseFloat(totalWallLength) != 0 && !isNaN(parseFloat(totalWallLength))
      ? "100.00"
      : "0.00";
  totalABDSField.value = !isNaN(parseFloat(totalABDS))
    ? parseFloat(totalABDS).toFixed(2)
    : "0.00";
  totalABDSRoundedField.value = !isNaN(Math.round(totalABDS))
    ? Math.round(totalABDS)
    : "0";
  for (let a of page4TotalABDSRoundedField) {
    a.value = !isNaN(Math.round(totalABDS)) ? Math.round(totalABDS) : "0";
  }

  for (let a of con.querySelectorAll("[floor]")) {
    let total = con.querySelector("[total-area]").value;
    findTR(a).querySelector("[percent-floor]").value = !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2)
  }

  for (let a of con.querySelectorAll("[walllength]")) {
    let total = con.querySelector("[total-walllength]").value;
    findTR(a).querySelector("[percent-wall]").value = !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2)
  }

  for (let a of con.querySelectorAll("[abds]")) {
    let b = parseFloat(findTR(a).querySelector("[percent-floor]").value) / 100;
    let c = parseFloat(findTR(a).querySelector("[bds]").value);

    b = !isNaN(b) ? b : 0.00
    c = !isNaN(c) ? c : 0.00

    a.value = (b * c).toFixed(2);
  }

  con.querySelector("[total-abds]").value = [...con.querySelectorAll("[abds]")]
    .map((el) => parseFloat(el.value))
    .reduce((a, b) => a + b)
    .toFixed(2);

  con.querySelector("[total-abds-rounded]").value = Math.round(
    [...con.querySelectorAll("[abds]")]
      .map((el) => parseFloat(el.value))
      .reduce((a, b) => a + b)
  );

  showParticularTotals();
  prefabricationCalculation();
  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function prefabricationCalculation() {
  let prefablvlSs = document.querySelectorAll("[percent-ss]")
  let prefablvlWs = document.querySelectorAll("[percent-ws]")
  let total1 = 0
  let total2 = 0
  let totalFieldSS = document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStruc");
  let totalFieldWS = document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteWall");

  //Structural System
  for (let a of prefablvlSs) {
    total1 += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0
  }

  if (total1 != 0) {
    totalFieldSS.value = total1.toFixed(2) + "%";
  }

  //Wall System
  for (let a of prefablvlWs) {
    total2 += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0
  }

  if (total2 != 0) {
    totalFieldWS.value = total2.toFixed(2) + "%";
  }

  let field = [totalFieldSS, totalFieldWS];
  let addingFieldId1 = document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStruc1")
  let addingFieldId2 = document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteWall1")
  for (let b of field) {
    if (b.value != 0) {
      if (b.id == "CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStruc") {
        totalprefab(addingFieldId1, b.id, "CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStrucTota")
      } else {
        totalprefab(addingFieldId2, b.id, "CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteWallTota")
      }
    }
  }
}

function totalprefab(el, addingField, totalField) {
  let inputFieldValue = !isNaN(parseFloat(el.value)) ? parseFloat(el.value) : 0;
  let resultField = document.getElementById(totalField);
  let addField = document.getElementById(addingField);
  let addingFieldValue = !isNaN(parseFloat(addField.value)) ? parseFloat(addField.value) : 0;

  if (addingFieldValue.value != 0) {
    resultField.value = (addingFieldValue + inputFieldValue).toFixed(2) + "%"
  } else {
    resultField.value = (addingFieldValue + 0).toFixed(2) + "%"
  }
}

// computing SS and WS
function computeTotalTable(el, type, totalField, pattern) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  totalField = totalField + prefix;
  if (pattern == "1:2") {
    if (type == "compute-ss") {
      let table = findTable(document.getElementById(el.id));
      let totalTable = [...table.querySelectorAll("[" + type + "]")].reduce(
        (a, b) => {
          let newA = !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
          let newB = !isNaN(parseFloat(b.value)) ? parseFloat(b.value) : 0;
          return a + (newA + newB);
        },
        0
      );
      page.querySelector("[prefix='" + totalField + "']").value = !isNaN(
        totalTable.toFixed(2)
      )
        ? totalTable.toFixed(2)
        : "";
    } else if (type == "compute-ws") {
      let totalTable = [...page.querySelectorAll("[" + type + "]")].reduce(
        (a, b) => {
          let newA = !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
          let newB = !isNaN(parseFloat(b.value)) ? parseFloat(b.value) : 0;
          return a + (newA + newB);
        },
        0
      );
      page.querySelector("[prefix='" + totalField + "']").value = !isNaN(
        totalTable.toFixed(2)
      )
        ? totalTable.toFixed(2)
        : "";
    }
    computeFloorArea(el, pattern, null, type);
  } else if (pattern == "2:2") {
    let totalTable = [...page.querySelectorAll("[" + type + "]")].reduce(
      (a, b) => {
        let newA = !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
        let newB = !isNaN(parseFloat(b.value)) ? parseFloat(b.value) : 0;
        return a + (newA + newB);
      },
      0
    );
    page.querySelector("[prefix='" + totalField + "']").value = !isNaN(
      totalTable.toFixed(2)
    )
      ? totalTable.toFixed(2)
      : "";

    combineTwoSub(el, type);
  }
}

// computing floor area
function computeFloorArea(el, pattern, range, type) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  function run(el) {
    if (type == "compute-ss") {
      let page = findBlock(document.getElementById(el.id));
      let totalFieldSS = page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1" +
        prefix +
        "']"
      );
      let totalFieldSSPercent = page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaPercArea1" +
        prefix +
        "']"
      );

      totalFieldSS.value > 0
        ? (totalFieldSSPercent.value = "100%")
        : (totalFieldSSPercent.value = "");

      computeRows(el, pattern, null, type);
    } else if (type == "compute-ws") {
      let page = findBlock(document.getElementById(el.id));
      let totalFieldWS = page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1" +
        prefix +
        "']"
      );
      let totalFieldWSPercent = page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercLeng1" +
        prefix +
        "']"
      );

      totalFieldWS.value > 0
        ? (totalFieldWSPercent.value = "100%")
        : (totalFieldWSPercent.value = "");

      computeRows(el, pattern, null, type);
    } else {
      computeRows(el, pattern, null, type);
    }

  }

  if (range) {
    if (range != "none") {
      if (
        parseFloat(el.value) >= parseFloat(range.split("-")[0]) &&
        parseFloat(el.value) <= parseFloat(range.split("-")[1])
      ) {
        run(el);
      } else {
        if (el.value != "") {
          let row = findTR(document.getElementById(el.id));
          let field = row.lastElementChild.querySelector("cn2-textbox");

          document.getElementById(el.id).value = "";
          field.value = "";

          showMessage(
            `Labour Saving Index must be BETWEEN ${parseFloat(
              range.split("-")[0]
            )} and ${parseFloat(range.split("-")[1])}.`
          );
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .focus();
          return;
        } else {
          run(el);
        }
      }
    } else {
      let row = findTR(document.getElementById(el.id));
      let field = row.lastElementChild.querySelector("cn2-textbox");

      if (el.value != "" && parseFloat(el.value) > 0) {
        field.value = !isNaN(parseFloat(el.value))
          ? parseFloat(el.value).toFixed(2)
          : "";
      } else {
        field.value = "";
      }
    }
    BDS_INNO_D1(el);
  } else {
    run(el);
  }
}

function denominatorValidation(el) {
  let page = findBlock(document.getElementById(el.id));
  count = 0
  for (let a of page.querySelectorAll("[denominator]")) {
    if (a.value != "") {
      if (a.value >= 65) {
        count++
      } else {
        count--
      }
    }
  }

  if (count != 0) {
    if (count >= 4) {
      return true
    } else {
      return false
    }
  }
}

// for computation per row
function computeRows(el, pattern, isPercent, type) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  switch (pattern) {
    case "1:2":
      if (type == "compute-ss") {
        let totalss = parseFloat(
          page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1" +
            prefix +
            "']"
          ).value
        );
        for (let a of page.querySelectorAll("[compute-ss]")) {
          let percentVal = 0;
          let row = findTR(document.getElementById(a.id));
          let field = document.getElementById(
            row.lastElementChild.previousElementSibling.querySelector(
              "cn2-textbox"
            ).id
          )
          percentVal = parseFloat(a.value / totalss) * 100;
          if (percentVal.countDecimals() == 1) {
            percentVal = percentVal + "0";
          } else if (percentVal.countDecimals() > 2) {
            percentVal = percentVal.toFixed(2);
          } else if (percentVal.countDecimals() == 0) {
            percentVal = percentVal + ".00";
          }
          parseFloat(percentVal) > 0
            ? (field.value = percentVal + "%")
            : (field.value = "");
        }

        for (let a of page.querySelectorAll("[compute-ss]")) {
          let pagePrefix = document.getElementById(a.id).getAttribute("prefix")
          let row = findTR(document.getElementById(a.id));
          let multiplier =
            row.querySelector("[multiplier]").tagName != "CN2-TEXTBOX"
              ? parseFloat(row.querySelector("[multiplier]").innerHTML)
              : parseFloat(row.querySelector("[multiplier]").value);
          let field = document.getElementById(
            row.lastElementChild.querySelector("cn2-textbox").id
          );
          let percentVal = parseFloat(a.value) / totalss;
          let product = parseFloat(percentVal * multiplier);

          if (pagePrefix == "CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSConsFlooArea" + prefix) {
            let validate = denominatorValidation(document.getElementById(a.id))
            if (validate) {
              if (product.countDecimals() == 1) {
                product = product + "0";
              } else if (product.countDecimals() > 2) {
                product = product.toFixed(2);
              } else if (product.countDecimals() == 0) {
                product = product + ".00";
              }
              parseFloat(product) > 0 ? (field.value = product) : (field.value = "");
            } else {
              field.value = parseFloat(0).toFixed(2);
            }
          } else {
            if (product.countDecimals() == 1) {
              product = product + "0";
            } else if (product.countDecimals() > 2) {
              product = product.toFixed(2);
            } else if (product.countDecimals() == 0) {
              product = product + ".00";
            }
            parseFloat(product) > 0 ? (field.value = product) : (field.value = "");
          }
        }
        BDS_SS_A1(el);
      } else if (type == "compute-ws") {
        let totalws = parseFloat(
          page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1" +
            prefix +
            "']"
          ).value
        );
        for (let a of page.querySelectorAll("[compute-ws]")) {
          let percentVal = 0;
          let row = findTR(document.getElementById(a.id));
          let field = document.getElementById(
            row.lastElementChild.previousElementSibling.querySelector(
              "cn2-textbox"
            ).id
          );
          let field2 = document.getElementById(
            row.lastElementChild.querySelector(
              "cn2-textbox"
            ).id
          );

          percentVal = parseFloat(a.value / totalws) * 100;
          if (percentVal.countDecimals() == 1) {
            percentVal = percentVal + "0";
          } else if (percentVal.countDecimals() > 2) {
            percentVal = percentVal.toFixed(2);
          } else if (percentVal.countDecimals() == 0) {
            percentVal = percentVal + ".00";
          }

          if (!a.hasAttribute("compute-rnl")) {
            parseFloat(percentVal) > 0
              ? (field.value = percentVal + "%")
              : (field.value = "");
          } else {
            parseFloat(percentVal) > 0
              ? (field2.value = percentVal + "%")
              : (field2.value = "");
          }
        }

        for (let a of page.querySelectorAll("[compute-ws]")) {
          if (!a.hasAttribute("compute-rnl")) {
            let row = findTR(document.getElementById(a.id));
            let multiplier =
              row.querySelector("[multiplier]").tagName != "CN2-TEXTBOX"
                ? parseFloat(row.querySelector("[multiplier]").innerHTML)
                : parseFloat(row.querySelector("[multiplier]").value);
            let field = document.getElementById(
              row.lastElementChild.querySelector("cn2-textbox").id
            );
            let percentVal = parseFloat(a.value) / totalws;
            let product = parseFloat(percentVal * multiplier);
            //field.setAttribute("raw-value", product);

            if (product.countDecimals() == 1) {
              product = product + "0";
            } else if (product.countDecimals() > 2) {
              product = product.toFixed(2);
            } else if (product.countDecimals() == 0) {
              product = product + ".00";
            }

            parseFloat(product) > 0 ? (field.value = product) : (field.value = "");
          }
        }
        BDS_WS_B1(el);
      }
      break;
    case "1:1":
      if (isPercent == "isPercent") {
        let row = findTR(document.getElementById(el.id));
        let multiplier =
          row.querySelector("[multiplier]").querySelector("cn2-textbox") == null
            ? parseFloat(row.querySelector("[multiplier]").innerHTML)
            : parseFloat(
              row.querySelector("[multiplier]").querySelector("cn2-textbox")
                .value
            );
        let field = document.getElementById(
          row.lastElementChild.querySelector("cn2-textbox").id
        );
        if (el.value != "") {
          if (checkPercent(el)) {
            let percentVal = parseFloat(el.value) / 100;
            let product = parseFloat(percentVal * multiplier * 45);
            field.setAttribute("raw-value", product);

            if (product.countDecimals() == 1) {
              product = product + "0";
            } else if (product.countDecimals() > 2) {
              product = product.toFixed(3);
            } else if (product.countDecimals() == 0) {
              product = product + ".00";
            }
            let roundOff = Math.round(product * 100) / 100
            parseFloat(product) > 0
              ? (field.value = roundOff.toFixed(2))
              : (field.value = "");
          } else {
            field.value = "";
            field.setAttribute("raw-value", "");
          }
        } else {
          field.value = "";
          field.setAttribute("raw-value", "");
        }
        BDS_SS_A2(el);
      } else {
        let row = findTR(document.getElementById(el.id));
        let multiplier =
          row.querySelector("[multiplier]").querySelector("cn2-textbox") == null
            ? parseFloat(row.querySelector("[multiplier]").innerHTML)
            : parseFloat(
              row.querySelector("[multiplier]").querySelector("cn2-textbox")
                .value
            );
        let field = document.getElementById(
          row.lastElementChild.querySelector("cn2-textbox").id
        );

        let percentVal = parseFloat(el.value) / 100;
        let product = parseFloat(percentVal * multiplier * 45);
        field.setAttribute("raw-value", product);

        if (product.countDecimals() == 1) {
          product = product + "0";
        } else if (product.countDecimals() > 2) {
          product = product.toFixed(2);
        } else if (product.countDecimals() == 0) {
          product = product + ".00";
        }

        parseFloat(product) > 0 ? (field.value = product) : (field.value = "");

        BDS_SS_A2(el);
      }
      break;
    case "2:2":
      if (type == "compute-wall-1" || type == "compute-wall-2") {
        let sumOne = page.querySelector(
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2" +
          prefix +
          "']"
        ).value;
        sumOne == ""
          ? (page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2" +
            prefix +
            "']"
          ).value = "0.00")
          : "";
        let sumTwo = page.querySelector(
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2" +
          prefix +
          "']"
        ).value;
        sumTwo == ""
          ? (page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2" +
            prefix +
            "']"
          ).value = "0.00")
          : "";

        let formattedA1 = !isNaN(parseFloat(sumOne)) ? parseFloat(sumOne) : 0;
        let formattedA2 = !isNaN(parseFloat(sumTwo)) ? parseFloat(sumTwo) : 0;
        let totalBoth = formattedA1 + formattedA2;
        for (let a of page.querySelectorAll(
          "[compute-wall-1], [compute-wall-2]"
        )) {
          let row = findTR(document.getElementById(a.id));
          let percentVal = 0;
          let firstField = 0;
          if (row.querySelector("[compute-wall-1]")) {
            firstField = !isNaN(parseFloat(row.querySelector("[compute-wall-1]").value))
              ? parseFloat(row.querySelector("[compute-wall-1]").value).toFixed(2)
              : 0;
          }
          let secondField = 0;
          if (row.querySelector("[compute-wall-2]")) {
            secondField = !isNaN(parseFloat(row.querySelector("[compute-wall-2]").value))
              ? parseFloat(row.querySelector("[compute-wall-2]").value).toFixed(2)
              : 0;
          }
          let sum = parseFloat(firstField) + parseFloat(secondField);
          let field = document.getElementById(
            row.lastElementChild.previousElementSibling.querySelector(
              "cn2-textbox"
            ).id
          );
          percentVal = !isNaN(parseFloat(sum / totalBoth) * 100) ? parseFloat(sum / totalBoth) * 100 : 0;
          if (percentVal.countDecimals() == 1) {
            percentVal = percentVal + "0";
          } else if (percentVal.countDecimals() > 2) {
            percentVal = percentVal.toFixed(2);
          } else if (percentVal.countDecimals() == 0) {
            percentVal = percentVal + ".00";
          }
          parseFloat(percentVal) > 0
            ? (field.value = percentVal + "%")
            : (field.value = "");
        }
        for (let a of page.querySelectorAll(
          "[compute-wall-1], [compute-wall-2]"
        )) {
          let row = findTR(document.getElementById(a.id));
          let multiplier =
            row.querySelector("[multiplier]").tagName != "CN2-TEXTBOX"
              ? parseFloat(row.querySelector("[multiplier]").innerHTML)
              : parseFloat(row.querySelector("[multiplier]").value);
          let field = document.getElementById(
            row.lastElementChild.querySelector("cn2-textbox").id
          );
          let percentValRaw = document
            .getElementById(
              row.lastElementChild.previousElementSibling.querySelector(
                "cn2-textbox"
              ).id
            ).value;

          let percentVal = parseFloat(percentValRaw) / 100;
          let product = parseFloat(percentVal * multiplier);

          if (product.countDecimals() == 1) {
            product = product + "0";
          } else if (product.countDecimals() > 2) {
            product = product.toFixed(2);
          } else if (product.countDecimals() == 0) {
            product = product + ".00";
          }

          parseFloat(product) > 0
            ? (field.value = product)
            : (field.value = "0.00");
        }
        BDS_WS_B2(el);
      } else if (type == "compute-mep-1" || type == "compute-mep-2") {
        let sumOne = page.querySelector(
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea" +
          prefix +
          "']"
        ).value;
        sumOne == ""
          ? (page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea" +
            prefix +
            "']"
          ).value = "0.00")
          : "";
        let sumTwo = page.querySelector(
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea" +
          prefix +
          "']"
        ).value;
        sumTwo == ""
          ? (page.querySelector(
            "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea" +
            prefix +
            "']"
          ).value = "0.00")
          : "";

        let formattedA1 = !isNaN(parseFloat(sumOne)) ? parseFloat(sumOne) : 0;
        let formattedA2 = !isNaN(parseFloat(sumTwo)) ? parseFloat(sumTwo) : 0;
        let totalBoth = formattedA1 + formattedA2;
        for (let a of page.querySelectorAll(
          "[compute-mep-1], [compute-mep-2]"
        )) {
          let row = findTR(document.getElementById(a.id));
          let percentVal = 0;
          let firstField = 0;
          if (row.querySelector("[compute-mep-1]")) {
            firstField = !isNaN(parseFloat(row.querySelector("[compute-mep-1]").value))
              ? parseFloat(row.querySelector("[compute-mep-1]").value).toFixed(2)
              : 0;
          }
          let secondField = 0;
          if (row.querySelector("[compute-mep-2]")) {
            secondField = !isNaN(parseFloat(row.querySelector("[compute-mep-2]").value))
              ? parseFloat(row.querySelector("[compute-mep-2]").value).toFixed(2)
              : 0;
          }
          let sum = parseFloat(firstField) + parseFloat(secondField);
          let field = document.getElementById(
            row.lastElementChild.previousElementSibling.querySelector(
              "cn2-textbox"
            ).id
          );
          percentVal = !isNaN(parseFloat(sum / totalBoth) * 100) ? parseFloat(sum / totalBoth) * 100 : 0;
          if (percentVal.countDecimals() == 1) {
            percentVal = percentVal + "0";
          } else if (percentVal.countDecimals() > 2) {
            percentVal = percentVal.toFixed(2);
          } else if (percentVal.countDecimals() == 0) {
            percentVal = percentVal + ".00";
          }
          parseFloat(percentVal) > 0
            ? (field.value = percentVal + "%")
            : (field.value = "");
        }
        for (let a of page.querySelectorAll(
          "[compute-mep-1], [compute-mep-2]"
        )) {
          let row = findTR(document.getElementById(a.id));
          let multiplier =
            row.querySelector("[multiplier]").tagName != "CN2-TEXTBOX"
              ? parseFloat(row.querySelector("[multiplier]").innerHTML)
              : parseFloat(row.querySelector("[multiplier]").value);
          let field = document.getElementById(
            row.lastElementChild.querySelector("cn2-textbox").id
          );
          let percentValRaw = document
            .getElementById(
              row.lastElementChild.previousElementSibling.querySelector(
                "cn2-textbox"
              ).id
            ).value;

          let percentVal = parseFloat(percentValRaw) / 100;
          let product = parseFloat(percentVal * multiplier);

          if (product.countDecimals() == 1) {
            product = product + "0";
          } else if (product.countDecimals() > 2) {
            product = product.toFixed(2);
          } else if (product.countDecimals() == 0) {
            product = product + ".00";
          }

          parseFloat(product) > 0
            ? (field.value = product)
            : (field.value = "0.00");
        }
        BDS_MP_C1(el)
      }
      break;
  }
}

function brickwallCalculation(el, percentVal) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let index = el.id.slice(-2)
  let textBox1 = document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" + prefix + index)
  let textBox2 = document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" + prefix + index)

  if (percentVal != 0) {
    if (percentVal >= 20) {
      textBox1.value = parseFloat(0).toFixed(2)
      textBox2.value = parseFloat((3 * -1)).toFixed(2)
    } else if (percentVal < 20) {
      textBox1.value = parseFloat((2 * -1)).toFixed(2)
      textBox2.value = parseFloat(0).toFixed(2)
    }
  } else {
    textBox1.value = parseFloat(0).toFixed(2)
    textBox2.value = parseFloat(0).toFixed(2)
  }
  BDS_WS_B5(el)
}

// for computing table 7 and 8
function ifGreaterThan(el, limit, type) {
  if (type == "isPercent") {
    let row = findTR(document.getElementById(el.id));
    let field = row.lastElementChild.querySelector("cn2-textbox");
    if (el.value != "") {
      if (checkPercent(el)) {
        let multiplier =
          row.querySelector("[multiplier]").querySelector("cn2-textbox") == null
            ? parseFloat(row.querySelector("[multiplier]").innerHTML)
            : parseFloat(
              row.querySelector("[multiplier]").querySelector("cn2-textbox")
                .value
            );

        if (parseFloat(el.value) > parseFloat(limit)) {
          field.value = multiplier.toFixed(2);
        } else {
          field.value = "0.00";
        }
      } else {
        field.value = "";
      }
    } else {
      field.value = "";
    }
  } else if (type == "range") {
    if (el.value != "") {
      if (
        !isNaN(parseFloat(el.value)) &&
        !isNaN(parseFloat(limit) && el.value && limit)
      ) {
        if (
          parseFloat(el.value) <= parseFloat(limit) &&
          parseFloat(el.value) > 0
        ) {
          document.getElementById(el.id).value = "";
          showMessage(
            "Value must be ZERO (0) if there is no void GREATER THAN " +
            parseInt(limit) +
            "m."
          );
          document
            .getElementById(el.id)
            .shadowRoot.querySelector("input")
            .focus();
          return;
        }
      } else {
        document.getElementById(el.id).value = "";
        showMessage(
          "Value must be ZERO (0) if there is no void GREATER THAN " +
          parseInt(limit) +
          "m."
        );
        document
          .getElementById(el.id)
          .shadowRoot.querySelector("input")
          .focus();
        return;
      }
    }
  } else if (type == "percent") {
    if (el.value != "") {
      if (
        !isNaN(parseFloat(el.value)) &&
        !isNaN(parseFloat(limit) && el.value && limit)
      ) {
        if (
          parseFloat(el.value) < parseFloat(limit)
        ) {
          document.getElementById(el.id).value = "";
        }
      } else {
        document.getElementById(el.id).value = "";
      }
    }
  }
}

// for combining the two subtotals
function combineTwoSub(el, type) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));

  if (type == "compute-wall-1" || type == "compute-wall-2") {
    let sumOne = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2" +
      prefix +
      "']"
    ).value;
    sumOne == ""
      ? (page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2" +
        prefix +
        "']"
      ).value = "0.00")
      : "";
    let sumTwo = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2" +
      prefix +
      "']"
    ).value;
    sumTwo == ""
      ? (page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2" +
        prefix +
        "']"
      ).value = "0.00")
      : "";
    let sumField = 0;
    let sumFieldPercent = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercCove2" +
      prefix +
      "']"
    );

    let formattedA1 = !isNaN(parseFloat(sumOne)) ? parseFloat(sumOne) : 0;
    let formattedA2 = !isNaN(parseFloat(sumTwo)) ? parseFloat(sumTwo) : 0;
    let sum = (formattedA2 / formattedA1) + formattedA1;

    !isNaN(parseFloat(sum))
      ? (sumField = parseFloat(sum).toFixed(2))
      : (sumField = "");
    sum > 0 ? (sumFieldPercent.value = "100%") : (sumFieldPercent.value = "");

    computeRows(el, "2:2", null, type);
  } else if (type == "compute-mep-1" || type == "compute-mep-2") {
    let sumOne = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea" +
      prefix +
      "']"
    ).value;
    sumOne == ""
      ? (page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea" +
        prefix +
        "']"
      ).value = "0.00")
      : "";
    let sumTwo = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea" +
      prefix +
      "']"
    ).value;
    sumTwo == ""
      ? (page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea" +
        prefix +
        "']"
      ).value = "0.00")
      : "";
    let sumField = 0;
    let sumFieldPercent = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPercArea" +
      prefix +
      "']"
    );

    let formattedA1 = !isNaN(parseFloat(sumOne)) ? parseFloat(sumOne) : 0;
    let formattedA2 = !isNaN(parseFloat(sumTwo)) ? parseFloat(sumTwo) : 0;
    let sum = (formattedA2 / formattedA1) + formattedA1;

    !isNaN(parseFloat(sum))
      ? (sumField = parseFloat(sum).toFixed(2))
      : (sumField = "");
    sum > 0 ? (sumFieldPercent.value = "100%") : (sumFieldPercent.value = "");

    computeRows(el, "2:2", null, type);
  }

}

// for table 9 of wall system on block page
function blockPageWallTable9(el, type) {
  if (type == "firstRow") {
    let row = findTR(document.getElementById(el.id));
    let totalField = row.lastElementChild.querySelector("cn2-textbox");
    let totalVoid = row.querySelector("[compute-wall-9_1]").value;
    let totalHeight = row.querySelector("[compute-wall-9_2]").value;
    let points = 0;
    let percentVal = parseFloat(
      (parseFloat(totalVoid) / parseFloat(totalHeight)) * 100
    );

    if (percentVal == 0) {
      points = 2.0;
    } else if (0 < percentVal && percentVal < 10) {
      points = 1.5;
    } else if (10 <= percentVal && percentVal < 15) {
      points = 1.0;
    } else if (15 <= percentVal && percentVal < 20) {
      points = 0.5;
    } else if (20 >= percentVal) {
      points = 0.0;
    }
    if (totalVoid >= 1 && totalVoid <= 9) {
      totalField.value = "";
    } else if (totalVoid == 0) {
      totalField.value = parseFloat(points).toFixed(2);
    } else if (totalVoid > 9) {
      totalField.value = parseFloat(points).toFixed(2);
    }
  } else if (type == "secondRow") {
    let row = findTR(document.getElementById(el.id));
    let totalField = row.lastElementChild.querySelector("cn2-textbox");
    let totalHeight = row.querySelector("[compute-wall-9_1]").value;
    let totalOffset = row.querySelector("[compute-wall-9_2]").value;
    let bds = 0;

    if (
      (7 > parseInt(totalOffset) && parseInt(totalOffset) > 0) ||
      totalOffset == ""
    ) {
      if (parseFloat(totalHeight) >= 0 && parseInt(totalOffset)) {
        if (0 <= parseFloat(totalHeight) && parseFloat(totalHeight) < 15) {
          switch (parseInt(totalOffset)) {
            case 1:
              bds = 3.0;
              break;
            case 2:
              bds = 3.0;
              break;
            case 3:
              bds = 3.0;
              break;
            case 4:
              bds = 2.5;
              break;
            case 5:
              bds = 1.5;
              break;
            case 6:
              bds = 0.0;
              break;
          }
        } else if (
          15 <= parseFloat(totalHeight) &&
          parseFloat(totalHeight) < 45
        ) {
          switch (parseInt(totalOffset)) {
            case 1:
              bds = 3.0;
              break;
            case 2:
              bds = 3.0;
              break;
            case 3:
              bds = 2.5;
              break;
            case 4:
              bds = 1.5;
              break;
            case 5:
              bds = 1.0;
              break;
            case 6:
              bds = 0.0;
              break;
          }
        } else if (
          45 <= parseFloat(totalHeight) &&
          parseFloat(totalHeight) < 90
        ) {
          switch (parseInt(totalOffset)) {
            case 1:
              bds = 3.0;
              break;
            case 2:
              bds = 2.5;
              break;
            case 3:
              bds = 1.5;
              break;
            case 4:
              bds = 1.0;
              break;
            case 5:
              bds = 0.0;
              break;
            case 6:
              bds = 0.0;
              break;
          }
        } else if (
          90 <= parseFloat(totalHeight) &&
          parseFloat(totalHeight) < 135
        ) {
          switch (parseInt(totalOffset)) {
            case 1:
              bds = 3.0;
              break;
            case 2:
              bds = 1.5;
              break;
            case 3:
              bds = 1.0;
              break;
            case 4:
              bds = 0.0;
              break;
            case 5:
              bds = 0.0;
              break;
            case 6:
              bds = 0.0;
              break;
          }
        } else if (135 <= parseFloat(totalHeight)) {
          switch (parseInt(totalOffset)) {
            case 1:
              bds = 3.0;
              break;
            case 2:
              bds = 1.0;
              break;
            case 3:
              bds = 0.0;
              break;
            case 4:
              bds = 0.0;
              break;
            case 5:
              bds = 0.0;
              break;
            case 6:
              bds = 0.0;
              break;
          }
        }

        totalField.value = parseFloat(bds).toFixed(2);
      } else {
        totalField.value = "";
      }
    } else {
      document.getElementById(
        row.querySelector("[compute-wall-9_2]").id
      ).value = "";
      totalField.value = "";
      showMessage("Value must be 1 to 6.");
      document
        .getElementById(row.querySelector("[compute-wall-9_2]").id)
        .shadowRoot.querySelector("input")
        .focus();
      return;
    }
  }

  //BDS_WS_B2(el);
  //BDS_WS_B4(el);
}

function percentDsection(el, type) {
  let row = findTR(document.getElementById(el.id));
  let resultField = row.lastElementChild.querySelector("cn2-textbox");
  let val = parseFloat(el.value);
  let pointInput =
    row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
      "cn2-textbox"
    ) &&
      row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
        "cn2-textbox"
      ).value != ""
      ? parseFloat(
        row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
          "cn2-textbox"
        ).value
      )
      : !isNaN(
        parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .innerHTML
        )
      )
        ? parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .innerHTML
        )
        : 0;
  let pointInput2 =
    row.lastElementChild.previousElementSibling.querySelector(
      "cn2-textbox"
    ) &&
      row.lastElementChild.previousElementSibling.querySelector(
        "cn2-textbox"
      ).value != ""
      ? parseFloat(
        row.lastElementChild.previousElementSibling.querySelector(
          "cn2-textbox"
        ).value
      )
      : !isNaN(
        parseFloat(
          row.lastElementChild.previousElementSibling
            .innerHTML
        )
      )
        ? parseFloat(
          row.lastElementChild.previousElementSibling
            .innerHTML
        )
        : 0;
  if (type == "label") {
    if (!isNaN(val)) {
      resultField.value = (parseFloat(val) * (parseFloat(pointInput2) / 100)).toFixed(2)
    } else {
      resultField.value = parseFloat(0).toFixed(2);
    }
  } else {
    if (checkPercent(el)) {
      if (!isNaN(val)) {
        resultField.value = (parseFloat(pointInput) * (parseFloat(val) / 100)).toFixed(2)
      } else {
        resultField.value = ""
      }
    } else {
      resultField.value = ""
    }
  }
  BDS_INNO_D1(el)
}

// for "Buildable Features" and "Bonus Points" of block page
function percentChoice(el, decimal, range, type) {
  let row = findTR(document.getElementById(el.id));
  let resultField = row.lastElementChild.querySelector("cn2-textbox");
  let firstChoice =
    row.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.querySelector(
      "cn2-textbox"
    ) &&
      row.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.querySelector(
        "cn2-textbox"
      ).value != ""
      ? parseFloat(
        row.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.querySelector(
          "cn2-textbox"
        ).value
      )
      : !isNaN(
        parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .previousElementSibling.innerHTML
        )
      )
        ? parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .previousElementSibling.innerHTML
        )
        : 0;
  let secondChoice =
    row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
      "cn2-textbox"
    ) &&
      row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
        "cn2-textbox"
      ).value != ""
      ? parseFloat(
        row.lastElementChild.previousElementSibling.previousElementSibling.querySelector(
          "cn2-textbox"
        ).value
      )
      : !isNaN(
        parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .innerHTML
        )
      )
        ? parseFloat(
          row.lastElementChild.previousElementSibling.previousElementSibling
            .innerHTML
        )
        : 0;
  let firstEqui = range.split(":")[0].split("-");
  let secondEqui = range.split(":")[1].split("-");

  if (type != "label") {
    let val = parseFloat(el.value);
    if (checkPercent(el) || !isNaN(val)) {
      if (val >= parseFloat(firstEqui[0]) && val <= parseFloat(firstEqui[1])) {
        resultField.value = parseFloat(firstChoice).toFixed(2);
      } else if (
        val >= parseFloat(secondEqui[0]) &&
        val <= parseFloat(secondEqui[1])
      ) {
        resultField.value = parseFloat(secondChoice).toFixed(2);
      } else {
        resultField.value = "";
      }
    } else {
      resultField.value = "";
    }
  } else {
    let val = parseFloat(
      row.lastElementChild.previousElementSibling.querySelector("cn2-textbox")
        .value
    );
    if (!isNaN(val)) {
      if (val >= parseFloat(firstEqui[0]) && val <= parseFloat(firstEqui[1])) {
        resultField.value = parseFloat(firstChoice).toFixed(2);
      } else if (
        val >= parseFloat(secondEqui[0]) &&
        val <= parseFloat(secondEqui[1])
      ) {
        resultField.value = parseFloat(secondChoice).toFixed(2);
      } else {
        resultField.value = "";
      }
    } else {
      resultField.value = "";
    }
  }
  formatDecimal(el, decimal);
  BDS_SS_A2(el);
  BDS_WS_B3(el);
  BDS_WS_B4(el);
  BDS_MP_C2(el);
  BDS_MP_C3(el);

}

// validating if value is -1 or zero
function onlyZeroOrNegativeOne(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  if (el.value != "") {
    if (!isNaN(parseFloat(el.value))) {
      if (parseFloat(el.value) != -1 && parseFloat(el.value) != 0) {
        document.getElementById(el.id).value = "";
        showMessage("Demerit Point Must Be Either -1 or 0.");
        document
          .getElementById(el.id)
          .shadowRoot.querySelector("input")
          .focus();
        document.getElementById(el.id).setAttribute("raw-value", el.value);
        return;
      } else {
        formatDecimal(el, "2");
        document.getElementById(el.id).setAttribute("raw-value", el.value);
      }
    } else {
      document.getElementById(el.id).value = "";
      showMessage("Demerit Point Must Be Either -1 or 0.");
      document.getElementById(el.id).shadowRoot.querySelector("input").focus();
      document.getElementById(el.id).setAttribute("raw-value", el.value);
      return;
    }
  } else {
    document.getElementById(el.id).setAttribute("raw-value", el.value);
  }
  BDS_WS_B5_1(el);
}

function calculateMultiply(el) {
  let row = findTR(document.getElementById(el.id));
  let result = row.lastElementChild.querySelector("cn2-textbox");
  let multiplier = -Math.abs(
    row.lastElementChild.previousElementSibling.previousElementSibling
      .querySelector("b")
      .innerHTML.replace("-", "")
      .trim()
  );
  let val = parseFloat(el.value);

  if (el.value != "") {
    if (!isNaN(val)) {
      result.value = parseFloat(val * multiplier)
        ? parseFloat(val * multiplier).toFixed(2)
        : "";
      if (result.value != "")
        result.setAttribute("raw-value", parseFloat(val * multiplier));
      formatDecimal(el, "2");
    } else {
      result.value = "";
      result.setAttribute("raw-value", "");
    }
  } else {
    result.value = "";
    result.setAttribute("raw-value", "");
  }
}

function dataValidation(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let index = el.id.slice(-2);
  let validateBox = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_BonuPnts1" + prefix + index
  );
  let otherBox = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
  );

  if (
    document.getElementById(el.id).getAttribute("prefix") ==
    "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" ||
    document.getElementById(el.id).getAttribute("prefix") ==
    "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1GBase"
  ) {
    if (el.value != "") {
      if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true) {
        if (validateBox.value.length == 0) {
          showMessage(
            'Percentage of coverage is required under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        }
      } else if (document.getElementById("PartOfAppl_Bs03_Cop10").checked == true) {
        if (validateBox.value.length == 0) {
          showMessage(
            'Percentage of coverage is required and must be >= 65% under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        } else if (parseFloat(validateBox.value) < 65) {
          showMessage(
            'Percentage of coverage is required and must be >= 65% under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        }
      }
    }
  } else {
    if (document.getElementById(el.id).value.length == 0) {
      otherBox.value = "";
      percentChoice(
        document.getElementById(
          "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
        ),
        "2",
        "65-79.999:80-100"
      );
    } else {
      if (el.value != "") {
        if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true) {
          if (validateBox.value.length == 0) {
            showMessage(
              'Percentage of coverage is required under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
            );
            document.getElementById(
              "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
            ).value = "";
            percentChoice(document.getElementById(
              "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
            ), "2", "65-79.999:80-100");
          }
        } else if (document.getElementById("PartOfAppl_Bs03_Cop10").checked == true) {
          if (document.getElementById(
            "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
          ).value != "") {
            if (validateBox.value.length == 0) {
              showMessage(
                'Percentage of coverage is required and must be >= 65% under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
              );
              document.getElementById(
                "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
              ).value = "";
              percentChoice(document.getElementById(
                "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
              ), "2", "65-79.999:80-100");
            } else if (parseFloat(validateBox.value) < 65) {
              showMessage(
                'Percentage of coverage is required and must be >= 65% under "Structural System: 7.1 - Precast household shelters - in nos". OR Percentage Value must be BETWEEN 0 and 100.'
              );
              document.getElementById(
                "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
              ).value = "";
              percentChoice(document.getElementById(
                "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G" + prefix + index
              ), "2", "65-79.999:80-100");
            }
          }
        }
      }
    }
  }
}

// for computing SS A1 BDS
function BDS_SS_A1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore1" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[a1-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_SS(el);
}

// for computing SS A2 BDS
function BDS_SS_A2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore2" + prefix + "']"
  );

  let total = 0;
  for (let a of page.querySelectorAll("[a2-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  if (total > 10) {
    totalField.value = total.toFixed(2);
  } else {
    totalField.value = total.toFixed(2);
  }

  BDS_SS(el);
}


// for computing total A section
function BDS_SS(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let categoryType = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_Cate" + prefix + "']"
  );
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore3" + prefix + "']"
  );
  let fields = page.querySelectorAll("[page-ss]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore1" +
    prefix +
    "']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore2" + prefix + "']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore4" + prefix + "']"
  ).value;
  let field4 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore5" + prefix + "']"
  ).value;
  let field5 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore6" + prefix + "']"
  ).value;

  let formattedA1 = !isNaN(parseFloat(field1)) ? parseFloat(field1) : 0;
  let formattedA2 = !isNaN(parseFloat(field2)) ? parseFloat(field2) : 0;
  let formattedA3 = !isNaN(parseFloat(field3)) ? parseFloat(field3) : 0;
  let formattedA4 = !isNaN(parseFloat(field4)) ? parseFloat(field4) : 0;
  let formattedA5 = !isNaN(parseFloat(field5)) ? parseFloat(field5) : 0;
  let sum = formattedA1 + formattedA2 + formattedA3 + formattedA4 + formattedA5;

  let formattedTotal = 0;
  formattedTotal = sum;

  if (categoryType.value == "Public Residential (Non-Landed)") {
    if (formattedTotal > 45) {
      !isNaN(parseFloat(45))
        ? (totalField.value = parseFloat(45).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(45))
          ? (a.value = parseFloat(45).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Private Residential (Non-Landed)" || categoryType.value == "Commercial" || categoryType.value == "Institutional/, School & Others") {
    if (formattedTotal > 35) {
      !isNaN(parseFloat(35))
        ? (totalField.value = parseFloat(35).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(35))
          ? (a.value = parseFloat(35).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Industrial" || categoryType.value == "MRT Station") {
    if (formattedTotal > 50) {
      !isNaN(parseFloat(50))
        ? (totalField.value = parseFloat(50).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(50))
          ? (a.value = parseFloat(50).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  }

  //prefab level Structural System

  let percentFloor = 0
  let totalSSPrepabLvl = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst" +
    prefix +
    "']"
  );
  for (let a of page.querySelectorAll("[compute-ss-percent]")) {
    percentFloor += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalSSPrepabLvl.value = percentFloor.toFixed(2) + "%";

  preFabLvlCompute(totalSSPrepabLvl, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst1', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTota')
  BDS_Total(el);
}

// for computing WS B1 
function BDS_WS_B1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore1" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[b1-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_WS(el);
}

// for computing WS B2 
function BDS_WS_B2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore2" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[b2-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_WS(el);
}

// for computing WS B3 
function BDS_WS_B3(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScore" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[b3-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  if (total > 15) {
    totalField.value = parseFloat(15).toFixed(2);
  } else {
    totalField.value = total.toFixed(2);
  }

  BDS_WS(el);
}

// for computing WS B4 
function BDS_WS_B4(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let c3TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore1" + prefix + "']"
  );

  let c3Total = 0;
  let subC3Total = [];
  for (let b of page.querySelectorAll(`[b4-totals]`)) {
    if (
      !isNaN(parseFloat(b.value)) &&
      b.value != ""
    )
      subC3Total.push(parseFloat(b.value));
  }
  c3Total += parseFloat(
    subC3Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedC3Total = 0;
  if (c3Total < -4) {
    formattedC3Total = -4;
  } else {
    formattedC3Total = c3Total;
  }
  c3TotalField.value = formattedC3Total.toFixed(2);

  BDS_WS(el);
}

// for computing total B section
function BDS_WS(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let categoryType = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_Cate" + prefix + "']"
  );
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScore" + prefix + "']"
  );
  let fields = page.querySelectorAll("[page-ws]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore1" +
    prefix +
    "']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore2" +
    prefix +
    "']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScore" +
    prefix +
    "']"
  ).value;

  let field4 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore1" +
    prefix +
    "']"
  ).value;

  let formattedB1 = !isNaN(parseFloat(field1)) ? parseFloat(field1) : 0;
  let formattedB2 = !isNaN(parseFloat(field2)) ? parseFloat(field2) : 0;
  let formattedB3 = !isNaN(parseFloat(field3)) ? parseFloat(field3) : 0;
  let formattedB4 = !isNaN(parseFloat(field4)) ? parseFloat(field4) : 0;
  let sum = formattedB1 + formattedB2 + formattedB3 + formattedB4;

  let formattedTotal = 0;
  formattedTotal = sum;

  if (categoryType.value == "Public Residential (Non-Landed)") {
    if (formattedTotal > 40) {
      !isNaN(parseFloat(40))
        ? (totalField.value = parseFloat(40).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(40))
          ? (a.value = parseFloat(40).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Private Residential (Non-Landed)") {
    if (formattedTotal > 45) {
      !isNaN(parseFloat(45))
        ? (totalField.value = parseFloat(45).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(45))
          ? (a.value = parseFloat(45).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Industrial" || categoryType.value == "MRT Station") {
    if (formattedTotal > 25) {
      !isNaN(parseFloat(25))
        ? (totalField.value = parseFloat(25).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(25))
          ? (a.value = parseFloat(25).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Commercial" || categoryType.value == "Institutional, School & Others") {
    if (formattedTotal > 30) {
      !isNaN(parseFloat(30))
        ? (totalField.value = parseFloat(30).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(30))
          ? (a.value = parseFloat(30).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");

      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  }
  //prefab level Wall System

  let percentFloor = 0
  let totalSSPrepabLvl = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst" +
    prefix +
    "']"
  );
  for (let a of page.querySelectorAll("[compute-ws-percent]")) {
    percentFloor += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalSSPrepabLvl.value = percentFloor.toFixed(2) + "%";

  preFabLvlCompute(totalSSPrepabLvl, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst1', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTota')
  BDS_Total(el);
}

// for computing MEP C1
function BDS_MP_C1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore1" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[c1-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_MP(el);
}

// for computing MEP C2
function BDS_MP_C2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore2" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[c2-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_MP(el);
}

// for computing MEP C3
function BDS_MP_C3(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore3" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[c3-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  totalField.value = total.toFixed(2);

  BDS_MP(el);
}

// for computing total C section
function BDS_MP(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let categoryType = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_Cate" + prefix + "']"
  );
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScore" + prefix + "']"
  );
  let fields = page.querySelectorAll("[page-bf]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore1" +
    prefix +
    "']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore2" + prefix + "']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore3" + prefix + "']"
  ).value;

  let formattedA1 = !isNaN(parseFloat(field1)) ? parseFloat(field1) : 0;
  let formattedA2 = !isNaN(parseFloat(field2)) ? parseFloat(field2) : 0;
  let formattedA3 = !isNaN(parseFloat(field3)) ? parseFloat(field3) : 0;
  let sum = formattedA1 + formattedA2 + formattedA3

  let formattedTotal = 0;
  formattedTotal = sum;

  if (categoryType.value == "Public Residential (Non-Landed)") {
    if (formattedTotal > 15) {
      !isNaN(parseFloat(15))
        ? (totalField.value = parseFloat(15).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(15))
          ? (a.value = parseFloat(15).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Private Residential (Non-Landed)") {
    if (formattedTotal > 20) {
      !isNaN(parseFloat(20))
        ? (totalField.value = parseFloat(20).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(20))
          ? (a.value = parseFloat(20).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Industrial" || categoryType.value == "MRT Station") {
    if (formattedTotal > 25) {
      !isNaN(parseFloat(25))
        ? (totalField.value = parseFloat(25).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(25))
          ? (a.value = parseFloat(25).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  } else if (categoryType.value == "Commercial" || "Institutional/, School & Others") {
    if (formattedTotal > 35) {
      !isNaN(parseFloat(35))
        ? (totalField.value = parseFloat(35).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(35))
          ? (a.value = parseFloat(35).toFixed(2))
          : (a.value = "");
      }
    } else {
      !isNaN(parseFloat(formattedTotal))
        ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
        : (totalField.value = "");
      for (let a of fields) {
        !isNaN(parseFloat(formattedTotal))
          ? (a.value = parseFloat(formattedTotal).toFixed(2))
          : (a.value = "");
      }
    }
  }

  //Prefab level % 
  let mepprefabLvl = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst" +
    prefix +
    "']"
  );
  formattedA1 > 0 ? (mepprefabLvl.value = "100.00%") : (mepprefabLvl.value = "0.00%");

  preFabLvlCompute(mepprefabLvl, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst1', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTota')
  BDS_Total(el);
}

function prefabComponentChange(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheBScore" +
    prefix +
    "']");
  if (el.value == "No PAS/MAS") {
    totalField.value = parseFloat(0).toFixed(2)
  } else {
    totalField.value = parseFloat(2).toFixed(2)
  }

  BDS_INNO_D1(el)
}

// for computing Innovation D1
function BDS_INNO_D1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let fields = page.querySelectorAll("[page-blk]");
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScore" +
    prefix +
    "']"
  );
  let total = 0;
  for (let a of page.querySelectorAll("[d1-totals]")) {
    total += !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
  }

  if (total > 20) {
    totalField.value = parseFloat(20).toFixed(2);

    for (let a of fields) {
      !isNaN(parseFloat(20))
        ? (a.value = parseFloat(20).toFixed(2))
        : (a.value = "");
    }
  } else {
    totalField.value = total.toFixed(2);

    for (let a of fields) {
      !isNaN(parseFloat(total))
        ? (a.value = parseFloat(total).toFixed(2))
        : (a.value = "");
    }
  }

  BDS_Total(el);
}

function preFabLvlCompute(el, addingField, totalField) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let total = page.querySelector(
    "[prefix='" + totalField + prefix + "']"
  );
  let adding = page.querySelector(
    "[prefix='" + addingField + prefix + "']").value;

  let formattedA1 = !isNaN(parseFloat(el.value)) ? parseFloat(el.value) : 0;
  let formattedA2 = !isNaN(parseFloat(adding)) ? parseFloat(adding) : 0;

  let sum = 0
  sum = (formattedA1 + formattedA2).toFixed(2);

  if (sum != 0) {
    total.value = sum + "%"
  } else {
    total.value = 0.00 + "%"
  }
}

// for computing BDS
function BDS_Total(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let fields = page.querySelectorAll("[page-bs]");
  let tempRawValues = [
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore3" + prefix + "']"
    ).value,
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScore" +
      prefix +
      "']"
    ).value,
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScore" +
      prefix +
      "']"
    ).value,
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScore" +
      prefix +
      "']"
    ).value
  ];

  let filteredRawValues = tempRawValues
    .filter((a) => a != "")
    .filter((a) => !isNaN(parseFloat(a)));
  let rawValues = filteredRawValues.map((a) => parseFloat(a));

  let total = parseFloat(rawValues.reduce((a, b) => a + b, 0));

  let formatted = total;
  if (total > 120) formatted = 120;

  page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_TotaBScore" +
    prefix +
    "']"
  ).value = !isNaN(parseFloat(formatted))
      ? parseFloat(formatted).toFixed(2)
      : "";

  for (let a of fields) {
    !isNaN(parseFloat(formatted))
      ? (a.value = parseFloat(formatted).toFixed(2))
      : (a.value = "");
  }

  let masterBlock = findBlock(document.getElementById(el.id)).getAttribute(
    "block-page"
  );

  isBasePage(document.getElementById(el.id))
    ? distributeTotal(el, masterBlock, "basement")
    : distributeTotal(el, masterBlock);
}

// ------------------------------------------------------------------------------------------------

// showing the help modal
function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

// hiding the help modal
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

// to validate the inputted date
function validateDate(element) {
  let datefield = document.getElementById(element.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  let d = new Date(year, month - 1, day);
  if (
    (d.getFullYear() != year && d.getMonth() != month - 1 && d.getDate() != day) || year > 2999 || year < 1900
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

// for UEN format validation
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

// resetting UEN field when "Name" field is change
function removeSelectUENerror(uenFieldID, dateFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");

  let date = document.getElementById(dateFieldID);
  date.value = "";
  date.removeAttribute("data-invalid");
  date.removeAttribute("data-invalid-message");
  date.removeAttribute("mandatory");
  date.setAttribute("mandatory", "");
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
      if (a.hasAttribute("counter-form") || a.hasAttribute("counter-table")) {
        a.value = "1";
      } else {
        a.value = "";
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

// empty all fields inside a specific container
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
        if (!document.getElementById(a.id).hasAttribute("dont-empty")) {
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

// set temp ID of duplicate fields when hiding a div
function setTempID(fields) {
  if (fields || fields.length != 0) {
    for (let a of fields) {
      if (
        a.hasAttribute("id") &&
        (!a.hasAttribute("main-accordion-header") ||
          !a.hasAttribute("main-accordion-body"))
      ) {
        if (
          !(
            a.hasAttribute("main-accordion-header") ||
            a.hasAttribute("main-accordion-body")
          )
        ) {
          let tempID = a.id;
          a.removeAttribute("id");
          a.setAttribute("id", tempID + "_temp");
          a.setAttribute("raw-id", tempID);
        }
      }
    }
  }
}

// set raw ID of duplicate fields when showing a div
function getRawID(fields) {
  if (fields || fields.length != 0) {
    for (let a of fields) {
      if (
        a.hasAttribute("raw-id") &&
        (!a.hasAttribute("main-accordion-header") ||
          !a.hasAttribute("main-accordion-body"))
      ) {
        if (
          !(
            a.hasAttribute("main-accordion-header") ||
            a.hasAttribute("main-accordion-body")
          )
        ) {
          let tempID = a.getAttribute("raw-id").replace("_temp", "");
          a.removeAttribute("id");
          a.removeAttribute("raw-id");
          a.setAttribute("id", tempID);
        }
      }
    }
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

// checking if percent value is valid
function checkPercent(el) {
  if (parseFloat(el.value) <= 100.0 && parseFloat(el.value) >= 0) {
    return true;
  } else {
    document.getElementById(el.id).value = "";
    if (el.value != "") {
      showMessage("Please enter a percentage between 0 to 100.");
      document.getElementById(el.id).shadowRoot.querySelector("input").focus();
    }
    return false;
  }
}

function minimumBuildDesignScoreBasement() {
  let basementBDS = document.getElementById(
    "CalcOfOverBuil_BuilDesiScoreSummBase_TotaAppoBuil10"
  ).value;

  if (!(parseFloat(basementBDS) === 0 || basementBDS == "")) {
    let values = {
      0: [0, 68],
      1: [0, 68],
      2: [0, 68],
      3: [0, 68],
      4: [0, 68],
      5: [0, 68],
      6: [0, 68],
      7: [0, 68],
      8: [0, 68],
      9: [0, 68],
      10: [0, 68],
      11: [0, 68],
    };
    let total = 0;
    let count = 0;
    for (let a of document
      .querySelector("[gfa-table]")
      .querySelectorAll("cn2-checkbox")) {
      if (a.checked == true) {
        let txt = a.parentElement.nextElementSibling.querySelector(
          "cn2-textbox"
        );
        let type = txt.getAttribute("gfa-type");
        let val = txt.value;
        let index = 0;

        if (!isNaN(parseFloat(val))) {
          let parsed = parseFloat(val);
          if (parsed >= 2000) {
            index = 1;
          } else {
            index = 0;
          }
        } else {
          index = 0;
        }

        total += values[type][index];
        count++;
      }
    }

    [...basement.querySelectorAll("[total-bds-round]")].map((el) =>
      el.setAttribute(
        "raw-value",
        !isNaN(Math.round(total / count)) ? Math.round(total / count) : "0"
      )
    );
  } else {
    [...basement.querySelectorAll("[total-bds-round]")].map((el) =>
      el.setAttribute("raw-value", "0")
    );
  }

  validateProjectDetailsPage();
}

function minimumBuildDesignScoreSuper() {
  //let existingVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10").value;
  //let newWorkVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_NewWork10").value;
  let totalGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_TotaGfa10"
  ).value;

  let values = {
    0: [0, 78, 81],
    1: [0, 57, 57],
    2: [0, 85, 92],
    3: [0, 60, 60],
    4: [0, 87, 90],
    5: [0, 62, 62],
    6: [0, 87, 90],
    7: [0, 62, 62],
    8: [0, 79, 82],
    9: [0, 60, 60],
    10: [0, 82, 85],
    11: [0, 60, 60],
  };
  let total = 0;
  let percentageValue = 0;

  for (let a of document
    .querySelector("[gfa-table]")
    .querySelectorAll("cn2-checkbox")) {
    if (a.checked == true) {
      let txt = a.parentElement.nextElementSibling.querySelector("cn2-textbox");
      let type = txt.getAttribute("gfa-type");
      let val = txt.value;
      let index = 0;

      percentageValue = parseFloat(val / totalGFA).toFixed(2);

      if (!isNaN(parseFloat(totalGFA))) {
        let parsed = parseFloat(totalGFA);
        if (parsed == 0) {
          index = 0;
        } else if (parsed >= 5000 && parsed < 25000) {
          index = 1;
        } else if (parsed >= 25000) {
          index = 2;
        }
      } else {
        index = 0;
      }

      total += values[type][index] * percentageValue;
    }
  }

  if (totalGFA != 0) {
    [...superstructure.querySelectorAll("[total-bds-round]")].map((el) =>
      el.setAttribute(
        "raw-value",
        !isNaN(Math.round(total)) ? Math.round(total) : "0"
      )
    );
    superstructure.querySelector("[total-bds-round]").value = !isNaN(Math.round(total)) ? Math.round(total) : "0"
  } else {
    [...superstructure.querySelectorAll("[total-bds-round]")].map((el) =>
      el.setAttribute(
        "raw-value",
        !isNaN(Math.round(total)) ? Math.round(total) : "0"
      )
    );
    superstructure.querySelector("[total-bds-round]").value = !isNaN(Math.round(total)) ? Math.round(total) : "0"
  }

  minimumBuildDesignScoreBasement();
}

function summationNewWork() {
  let compFees = [
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Comm20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Indu20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_InstAndOther20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Scho20"),
  ];

  let newWorkSubGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_SubGfa_NewWork10"
  );
  let existWorkSubGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10"
  );
  let totalGFA = document.getElementById("CalcOfOverBuil_ProjDetl_TotaGfa10");
  let final = 0;
  let total = 0;
  for (c of compFees) {
    if (c.value) {
      let converted = parseFloat(c.value);
      final += converted;
    }
  }

  let finalDecimal = final.toFixed(2);
  newWorkSubGFA.value = finalDecimal;

  if (existWorkSubGFA.value) {
    totalGFA.value = (
      parseFloat(existWorkSubGFA.value) + parseFloat(finalDecimal)
    ).toFixed(2);
  } else {
    totalGFA.value = finalDecimal;
  }

  validateProjectDetailsPage();

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function summationExistingWork() {
  let compFees = [
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Comm40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Indu40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_InstAndOther40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Scho40"),
  ];

  let newWorkSubGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_SubGfa_NewWork10"
  );
  let existWorkSubGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10"
  );
  let totalGFA = document.getElementById("CalcOfOverBuil_ProjDetl_TotaGfa10");
  let final = 0;
  let total = 0;
  for (c of compFees) {
    if (c.value) {
      let converted = parseFloat(c.value);
      final += converted;
    }
  }

  let finalDecimal = final.toFixed(2);
  existWorkSubGFA.value = finalDecimal;

  if (newWorkSubGFA.value) {
    totalGFA.value = (
      parseFloat(newWorkSubGFA.value) + parseFloat(finalDecimal)
    ).toFixed(2);
  } else {
    totalGFA.value = finalDecimal;
  }

  validateProjectDetailsPage();

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
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

function enableMandaTextboxResidential(element) {
  let field1 = document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand20");
  let field2 = document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand40");
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiLand30"),
  ];
  let mandaSign = document.getElementById("residentialSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_ResiLand10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_ResiLand30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function enableMandaTextboxNonResidential(element) {
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand30"),
  ];
  let field1 = document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand20");
  let field2 = document.getElementById("CalcOfOverBuil_ProjDetl_ResiNonLand40");

  let mandaSign = document.getElementById("NonResidentialSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_ResiNonLand10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_ResiNonLand30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function enableMandaTextboxCommercial(element) {
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_Comm10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Comm30"),
  ];
  let field1 = document.getElementById("CalcOfOverBuil_ProjDetl_Comm20");
  let field2 = document.getElementById("CalcOfOverBuil_ProjDetl_Comm40");

  let mandaSign = document.getElementById("CommercialSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_Comm10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_Comm30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function enableMandaTextboxIndustrial(element) {
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_Indu10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Indu30"),
  ];
  let field1 = document.getElementById("CalcOfOverBuil_ProjDetl_Indu20");
  let field2 = document.getElementById("CalcOfOverBuil_ProjDetl_Indu40");

  let mandaSign = document.getElementById("IndustrialSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_Indu10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_Indu30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function enableMandaTextboxInstitutional(element) {
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_InstAndOther10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_InstAndOther30"),
  ];
  let field1 = document.getElementById(
    "CalcOfOverBuil_ProjDetl_InstAndOther20"
  );
  let field2 = document.getElementById(
    "CalcOfOverBuil_ProjDetl_InstAndOther40"
  );

  let mandaSign = document.getElementById("InstitutionalSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_InstAndOther10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_InstAndOther30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

function enableMandaTextboxSchool(element) {
  let checkboxes = [
    document.getElementById("CalcOfOverBuil_ProjDetl_Scho10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_Scho30"),
  ];
  let field1 = document.getElementById("CalcOfOverBuil_ProjDetl_Scho20");
  let field2 = document.getElementById("CalcOfOverBuil_ProjDetl_Scho40");

  let mandaSign = document.getElementById("SchoolSign");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  // if (pass == true) {
  //   mandaSign.textContent = "*";
  // } else {
  //   mandaSign.textContent = "";
  // }

  switch (element.id) {
    case "CalcOfOverBuil_ProjDetl_Scho10":
      if (element.checked) {
        field1.removeAttribute("disabled");
        field1.setAttribute("mandatory", "");
        field1.value = "0.00"
        field1.shadowRoot.querySelector("input").removeAttribute("class")
        field1.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field1.setAttribute("disabled", "");
        field1.removeAttribute("mandatory");
        field1.removeAttribute("placeholder");
        field1.value = "";
      }
      break;
    case "CalcOfOverBuil_ProjDetl_Scho30":
      if (element.checked) {
        field2.removeAttribute("disabled");
        field2.setAttribute("mandatory", "");
        field2.value = "0.00"
        field2.shadowRoot.querySelector("input").removeAttribute("class")
        field2.shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
      } else {
        field2.setAttribute("disabled", "");
        field2.removeAttribute("mandatory");
        field2.removeAttribute("placeholder");
        field2.value = "";
      }
      break;
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
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
  validateProjectDetailsPage();
}

function validate(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

function NavBtnValidation() {
  let targetSelect = document.getElementById(
    "CalcOfOverBuil_ProjDetl_TotaGfa10"
  );
  if (targetSelect.value == "" || targetSelect.value == 0.0) {
    showMessage("Please select Submission Type first to proceed to next page.");
    return false;
  }
}

function wallTable7(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let row = findBlock(document.getElementById(el.id)).querySelector(
    "[wall-item-7]"
  );
  let percent = parseFloat(
    row.lastElementChild.previousElementSibling.querySelector("cn2-textbox")
      .value
  );
  let less20 = document.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" + prefix + "']"
  );
  let more20 = document.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" + prefix + "']"
  );

  if (percent < 20 && percent > 0) {
    less20.value = "-2.00";
    more20.value = "0.00";
  } else if (percent <= 100 && percent >= 20) {
    less20.value = "0.00";
    more20.value = "-3.00";
  } else {
    less20.value = "0.00";
    more20.value = "0.00";
  }
}

function notSame(el, other, cell) {
  if (el.value != "") {
    let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
    let page = findBlock(document.getElementById(el.id));
    let row = findTR(document.getElementById(el.id));
    let value = other
      .map((r) => page.querySelector("[prefix='" + r + prefix + "']").value)
      .some((r) => r != "");

    if (value && !isChanging) {
      document.getElementById(el.id).value = "";
      row.lastElementChild.querySelector("cn2-textbox").value = "";
      showMessage(
        "Cell is disabled, please remove Percentage Value in " +
        cell +
        " OR Percentage Value must be BETWEEN 0 and 100"
      );
    }
  }
}

function showParticularTotals(el) {
  let radios = [...document.querySelectorAll("[name='declItemTwo']")];
  let a = document.getElementById("CHECK10");
  let b = document.getElementById("CHECK20");
  let aSuper = document.querySelector("[page4-totalSuperBDS]");
  let aBase = document.querySelector("[page4-totalBaseBDS]");
  let bSuper = document.querySelector("[page4-totalSuperBDSMin]");
  let bBase = document.querySelector("[page4-totalBaseBDSMin]");

  let isChecked = el
    ? el
    : radios.every((r) => r.checked === false)
      ? ""
      : radios.filter((r) => r.checked === true)[0];
  if (a.checked || b.checked) {
    if (isChecked.id == a.id) {
      b.checked = false;
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
      b.removeAttribute("mandatory");
      b.removeAttribute("checked");

      aSuper.value = document.getElementById(
        "CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10"
      ).value;
      aBase.value = document.getElementById(
        "CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10"
      ).value;
    } else if (isChecked.id == b.id) {
      a.checked = false;
      b.removeAttribute("mandatory");
      b.removeAttribute("checked");
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
      aSuper.value = "0";
      aBase.value = "0";
    } else {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
      b.setAttribute("mandatory", "");
      b.setAttribute("checked", "");
      aSuper.value = "0";
      aBase.value = "0";
    }
  } else {
    a.setAttribute("mandatory", "");
    a.setAttribute("checked", "");
    b.setAttribute("mandatory", "");
    b.setAttribute("checked", "");
    aSuper.value = "0";
    aBase.value = "0";
  }

  let aCheckbox = [
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropA10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropB10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropC10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropD10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropF10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjCompWithMini10"),
  ];
  let aTotals = {
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropA10: 96,
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropB10: 94,
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropC10: 92,
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropD10: 92,
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE10: 92,
    CalcOfOverBuil_ProjDetl_ProjSubmOutcPropF10: 92,
  };
  let bCheckbox = [
    document.getElementById(
      "CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10"
    ),
  ];
  let bTotals = {
    CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10: 70,
  };

  if (aCheckbox.some((r) => r.checked === true)) {
    let id = aCheckbox.filter((r) => r.checked === true)[0].id;
    let total = aTotals[id];
    if (id === "CalcOfOverBuil_ProjDetl_ProjCompWithMini10") {
      let textbox = document.getElementById(
        "CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20"
      ).value;
      total = isNaN(textbox) ? 0 : textbox;
    }
    bSuper.setAttribute("raw-value", total);
    if (b.checked) {
      bSuper.value = bSuper.getAttribute("raw-value");
    } else {
      bSuper.value = 0;
    }
  } else {
    bSuper.setAttribute("raw-value", 0);
    if (b.checked) {
      bSuper.value = 0;
    } else {
      bSuper.value = 0;
    }
  }

  if (bCheckbox.some((r) => r.checked === true)) {
    let id = bCheckbox.filter((r) => r.checked === true)[0].id;
    let total = bTotals[id];
    bBase.setAttribute("raw-value", total);
    if (b.checked) {
      bBase.value = bBase.getAttribute("raw-value");
    } else {
      bBase.value = 0;
    }
  } else {
    bBase.setAttribute("raw-value", 0);
    if (b.checked) {
      bBase.value = 0;
    } else {
      bBase.value = 0;
    }
  }

  if (document.getElementById("CalcOfOverBuil_ProjDetl_ProjCompWithMini610").checked) {
    if (a.checked) {
      aSuper.value = document.getElementById(
        "CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10"
      ).value;
      aBase.value = document.getElementById(
        "CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10"
      ).value;
    } else {
      aSuper.value = 0
      aBase.value = 0
    }
  } else {
    aSuper.value = 0
    aBase.value = 0
  }
}

function validRange(el, from, to) {
  let val = parseFloat(el.value);
  if (!isNaN(val) && el.value != "") {
    if (!(val >= from && val <= to)) {
      document.getElementById(el.id).value = "";
      showMessage("Value must be a Whole number BETWEEN 0 and 110");
    }
  } else {
    document.getElementById(el.id).value = "";
  }

  showParticularTotals();
}

function disabledTextBox(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let index = el.id.slice(-2);
  let validateBox1 = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8" + prefix + index
  );
  let validateBox2 = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1" + prefix + index
  );
  let validateBox3 = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4" + prefix + index
  );

  let textBox = document.getElementById(
    "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1I" + prefix + index
  );
  if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true) {
    if (textBox.value.length != 0) {
      if (
        el.id ==
        "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1I" + prefix + index
      ) {
        if (
          validateBox1.value.length == 0 &&
          validateBox2.value.length == 0 &&
          validateBox3.value.length == 0
        ) {
          showMessage(
            "Cell is disabled, please enter Percentage Value in A2.8(a) or A2.8(b)"
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        }
      } else {
        if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          }
        } else if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          }
        } else if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          }
        }
      }
    }
  } else {
    if (textBox.value.length != 0) {
      if (
        el.id ==
        "CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1I" + prefix + index
      ) {
        if (
          validateBox1.value.length == 0 &&
          validateBox2.value.length == 0 &&
          validateBox3.value.length == 0
        ) {
          showMessage(
            "Percent of coverage is required and must be >=65% under A2.8(a) or A2.8(b) OR Percentage Value must be BETWEEN 0 and 100"
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        } else if (validateBox1.value < 65 && validateBox2.value < 65 && validateBox3.value < 65) {
          showMessage(
            "Percent of coverage is required and must be >=65% under A2.8(a) or A2.8(b) OR Percentage Value must be BETWEEN 0 and 100"
          );
          document.getElementById(el.id).value = "";
          percentChoice(document.getElementById(el.id), "2", "65-79.999:80-100");
        }
      } else {
        if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          } else if (validateBox1.value < 65 && validateBox2.value < 65 && validateBox3.value < 65) {
            showMessage(
              "Percent of coverage is required and must be >=65% under A2.8(a) or A2.8(b) OR Percentage Value must be BETWEEN 0 and 100"
            );
            document.getElementById(textBox.id).value = "";
            percentChoice(document.getElementById(textBox.id), "2", "65-79.999:80-100");
          }
        } else if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          } else if (validateBox1.value < 65 && validateBox2.value < 65 && validateBox3.value < 65) {
            showMessage(
              "Percent of coverage is required and must be >=65% under A2.8(a) or A2.8(b) OR Percentage Value must be BETWEEN 0 and 100"
            );
            document.getElementById(textBox.id).value = "";
            percentChoice(document.getElementById(textBox.id), "2", "65-79.999:80-100");
          }
        } else if (
          el.id ==
          "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4" + prefix + index
        ) {
          if (
            validateBox1.value.length == 0 &&
            validateBox2.value.length == 0 &&
            validateBox3.value.length == 0
          ) {
            textBox.value = "";
            percentChoice(textBox, "2", "65-79.999:80-100");
          } else if (validateBox1.value < 65 && validateBox2.value < 65 && validateBox3.value < 65) {
            showMessage(
              "Percent of coverage is required and must be >=65% under A2.8(a) or A2.8(b) OR Percentage Value must be BETWEEN 0 and 100"
            );
            document.getElementById(textBox.id).value = "";
            percentChoice(document.getElementById(textBox.id), "2", "65-79.999:80-100");
          }
        }
      }
    }
  }
}

function activateRemark(el) {
  let sizeField = [
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitSize10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitSize20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitSize30"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitSize40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitSize50"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelSize10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelSize20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelSize30"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecRefuChutSize10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefPumpSkidSize10")
  ]
  let remarksField = [
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitRema10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitRema20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitRema30"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitRema40"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefBathUnitRema50"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelRema10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelRema20"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecHousShelRema30"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrecRefuChutRema10"),
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefPumpSkidRema10")
  ];

  if (sizeField[0].value == "Others") {
    remarksField[0].removeAttribute("disabled");
    remarksField[0].setAttribute("mandatory", "");
  } else {
    remarksField[0].setAttribute("disabled", "");
    remarksField[0].removeAttribute("mandatory");
    remarksField[0].value = "";
  }

  if (sizeField[1].value == "Others") {
    remarksField[1].removeAttribute("disabled");
    remarksField[1].setAttribute("mandatory", "");
  } else {
    remarksField[1].setAttribute("disabled", "");
    remarksField[1].removeAttribute("mandatory");
    remarksField[1].value = "";
  }

  if (sizeField[2].value == "Others") {
    remarksField[2].removeAttribute("disabled");
    remarksField[2].setAttribute("mandatory", "");
  } else {
    remarksField[2].setAttribute("disabled", "");
    remarksField[2].removeAttribute("mandatory");
    remarksField[2].value = "";
  }

  if (sizeField[3].value == "Others") {
    remarksField[3].removeAttribute("disabled");
    remarksField[3].setAttribute("mandatory", "");
  } else {
    remarksField[3].setAttribute("disabled", "");
    remarksField[3].removeAttribute("mandatory");
    remarksField[3].value = "";
  }

  if (sizeField[4].value == "Others") {
    remarksField[4].removeAttribute("disabled");
    remarksField[4].setAttribute("mandatory", "");
  } else {
    remarksField[4].setAttribute("disabled", "");
    remarksField[4].removeAttribute("mandatory");
    remarksField[4].value = "";
  }

  if (sizeField[5].value == "Others") {
    remarksField[5].removeAttribute("disabled");
    remarksField[5].setAttribute("mandatory", "");
  } else {
    remarksField[5].setAttribute("disabled", "");
    remarksField[5].removeAttribute("mandatory");
    remarksField[5].value = "";
  }

  if (sizeField[6].value == "Others") {
    remarksField[6].removeAttribute("disabled");
    remarksField[6].setAttribute("mandatory", "");
  } else {
    remarksField[6].setAttribute("disabled", "");
    remarksField[6].removeAttribute("mandatory");
    remarksField[6].value = "";
  }

  if (sizeField[7].value == "Others") {
    remarksField[7].removeAttribute("disabled");
    remarksField[7].setAttribute("mandatory", "");
  } else {
    remarksField[7].setAttribute("disabled", "");
    remarksField[7].removeAttribute("mandatory");
    remarksField[7].value = "";
  }

  if (sizeField[8].value == "Others") {
    remarksField[8].removeAttribute("disabled");
    remarksField[8].setAttribute("mandatory", "");
  } else {
    remarksField[8].setAttribute("disabled", "");
    remarksField[8].removeAttribute("mandatory");
    remarksField[8].value = "";
  }

  if (sizeField[9].value == "Others") {
    remarksField[9].removeAttribute("disabled");
    remarksField[9].setAttribute("mandatory", "");
  } else {
    remarksField[9].setAttribute("disabled", "");
    remarksField[9].removeAttribute("mandatory");
    remarksField[9].value = "";
  }

}

function categoryType_change(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let struValues = page.querySelectorAll("[structuralValue]");
  let archValues = page.querySelectorAll("[architecturalValue]");
  let MEPValues = page.querySelectorAll("[MEPValue]");
  let categoryType = el.value;
  let struPoints = page.querySelector("[struSystPoints]");
  let archPoints = page.querySelector("[archSystPoints]");
  let mepPoints = page.querySelector("[mepSystPoints]");
  let innoPoints = page.querySelectorAll(`[name='innoSystPoints']`);
  let induStanField = page.querySelector("[prefix='CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove1" + prefix + "']");

  if (categoryType != "") {
    //Structural
    if (categoryType == "Private Residential (Non-Landed)") {
      struValues[0].innerHTML = "35.00";
      struValues[1].innerHTML = "33.00";
      struValues[2].innerHTML = "32.00";
      struValues[3].innerHTML = "32.00";
      struValues[4].innerHTML = "29.00";
      struValues[5].innerHTML = "29.00";
      struValues[6].innerHTML = "23.00";
      struValues[7].innerHTML = "23.00";
      struValues[8].innerHTML = "20.00";
      struValues[9].innerHTML = "10.00";
      induStanField.setAttribute("disabled", "");
      struPoints.textContent = "Maximum 35 points";
    } else if (categoryType == "Public Residential (Non-Landed)") {
      struValues[0].innerHTML = "45.00";
      struValues[1].innerHTML = "42.00";
      struValues[2].innerHTML = "39.00";
      struValues[3].innerHTML = "39.00";
      struValues[4].innerHTML = "35.00";
      struValues[5].innerHTML = "35.00";
      struValues[6].innerHTML = "28.00";
      struValues[7].innerHTML = "28.00";
      struValues[8].innerHTML = "22.00";
      struValues[9].innerHTML = "10.00";
      induStanField.setAttribute("disabled", "");
      struPoints.textContent = "Maximum 45 points";
    } else if (categoryType == "Industrial" || categoryType == "MRT Station") {
      struValues[0].innerHTML = "50.00";
      struValues[1].innerHTML = "48.00";
      struValues[2].innerHTML = "46.00";
      struValues[3].innerHTML = "46.00";
      struValues[4].innerHTML = "41.00";
      struValues[5].innerHTML = "41.00";
      struValues[6].innerHTML = "34.00";
      struValues[7].innerHTML = "34.00";
      struValues[8].innerHTML = "28.00";
      struValues[9].innerHTML = "15.00";
      induStanField.removeAttribute("disabled");
      struPoints.textContent = "Maximum 50 points";
    } else if (categoryType == "Institutional/, School & Others" || categoryType == "Commercial") {
      struValues[0].innerHTML = "35.00";
      struValues[1].innerHTML = "34.00";
      struValues[2].innerHTML = "33.00";
      struValues[3].innerHTML = "33.00";
      struValues[4].innerHTML = "32.00";
      struValues[5].innerHTML = "32.00";
      struValues[6].innerHTML = "26.00";
      struValues[7].innerHTML = "26.00";
      struValues[8].innerHTML = "24.00";
      struValues[9].innerHTML = "11.00";
      induStanField.removeAttribute("disabled");
      struPoints.textContent = "Maximum 35 points";
    }
    //Architectural
    if (categoryType == "Private Residential (Non-Landed)") {
      archValues[0].innerHTML = "30.00";
      archValues[1].innerHTML = "29.00";
      archValues[2].innerHTML = "29.00";
      archValues[3].innerHTML = "27.00";
      archValues[4].innerHTML = "26.00";
      archValues[5].innerHTML = "26.00";
      archValues[6].innerHTML = "26.00";
      archValues[7].innerHTML = "26.00";
      archValues[8].innerHTML = "22.00";
      archValues[9].innerHTML = "16.00";
      archValues[10].innerHTML = "5.00";
      archValues[11].innerHTML = "0.00";
      archValues[12].innerHTML = "15.00";
      archValues[13].innerHTML = "12.00";
      archValues[14].innerHTML = "12.00";
      archValues[15].innerHTML = "9.00";
      archValues[16].innerHTML = "7.00";
      archValues[17].innerHTML = "7.00";
      archValues[18].innerHTML = "4.00";
      archValues[19].innerHTML = "0.00";
      archValues[20].innerHTML = "0.00";
      archPoints.textContent = "Maximum 45 points";
    } else if (categoryType == "Public Residential (Non-Landed)") {
      archValues[0].innerHTML = "30.00";
      archValues[1].innerHTML = "28.00";
      archValues[2].innerHTML = "28.00";
      archValues[3].innerHTML = "27.00";
      archValues[4].innerHTML = "25.00";
      archValues[5].innerHTML = "25.00";
      archValues[6].innerHTML = "25.00";
      archValues[7].innerHTML = "25.00";
      archValues[8].innerHTML = "22.00";
      archValues[9].innerHTML = "16.00";
      archValues[10].innerHTML = "5.00";
      archValues[11].innerHTML = "0.00";
      archValues[12].innerHTML = "10.00";
      archValues[13].innerHTML = "8.00";
      archValues[14].innerHTML = "8.00";
      archValues[15].innerHTML = "6.00";
      archValues[16].innerHTML = "4.00";
      archValues[17].innerHTML = "4.00";
      archValues[18].innerHTML = "2.00";
      archValues[19].innerHTML = "0.00";
      archValues[20].innerHTML = "0.00";
      archPoints.textContent = "Maximum 40 points";
    } else if (categoryType == "Industrial" || categoryType == "MRT Station") {
      archValues[0].innerHTML = "20.00";
      archValues[1].innerHTML = "18.00";
      archValues[2].innerHTML = "18.00";
      archValues[3].innerHTML = "17.00";
      archValues[4].innerHTML = "16.00";
      archValues[5].innerHTML = "16.00";
      archValues[6].innerHTML = "16.00";
      archValues[7].innerHTML = "16.00";
      archValues[8].innerHTML = "13.00";
      archValues[9].innerHTML = "10.00";
      archValues[10].innerHTML = "5.00";
      archValues[11].innerHTML = "0.00";
      archValues[12].innerHTML = "5.00";
      archValues[13].innerHTML = "4.00";
      archValues[14].innerHTML = "4.00";
      archValues[15].innerHTML = "3.00";
      archValues[16].innerHTML = "3.00";
      archValues[17].innerHTML = "3.00";
      archValues[18].innerHTML = "2.00";
      archValues[19].innerHTML = "0.00";
      archValues[20].innerHTML = "0.00";
      archPoints.textContent = "Maximum 25 points";
    } else if (categoryType == "Institutional/, School & Others" || categoryType == "Commercial") {
      archValues[0].innerHTML = "20.00";
      archValues[1].innerHTML = "19.00";
      archValues[2].innerHTML = "19.00";
      archValues[3].innerHTML = "18.00";
      archValues[4].innerHTML = "17.00";
      archValues[5].innerHTML = "17.00";
      archValues[6].innerHTML = "17.00";
      archValues[7].innerHTML = "17.00";
      archValues[8].innerHTML = "13.00";
      archValues[9].innerHTML = "12.00";
      archValues[10].innerHTML = "4.00";
      archValues[11].innerHTML = "0.00";
      archValues[12].innerHTML = "10.00";
      archValues[13].innerHTML = "9.00";
      archValues[14].innerHTML = "9.00";
      archValues[15].innerHTML = "7.00";
      archValues[16].innerHTML = "5.00";
      archValues[17].innerHTML = "5.00";
      archValues[18].innerHTML = "4.00";
      archValues[19].innerHTML = "0.00";
      archValues[20].innerHTML = "0.00";
      archPoints.textContent = "Maximum 30 points";
    }
    //MEP System
    if (categoryType == "Private Residential (Non-Landed)") {
      MEPValues[0].innerHTML = "20.00";
      MEPValues[1].innerHTML = "16.00";
      MEPValues[2].innerHTML = "6.00";
      MEPValues[3].innerHTML = "6.00";
      MEPValues[4].innerHTML = "6.00";
      MEPValues[5].innerHTML = "2.00";
      MEPValues[6].innerHTML = "2.00";
      MEPValues[7].innerHTML = "2.00";
      MEPValues[8].innerHTML = "2.00";
      mepPoints.textContent = "Maximum 20 points";
    } else if (categoryType == "Public Residential (Non-Landed)") {
      MEPValues[0].innerHTML = "15.00";
      MEPValues[1].innerHTML = "12.00";
      MEPValues[2].innerHTML = "4.00";
      MEPValues[3].innerHTML = "4.00";
      MEPValues[4].innerHTML = "4.00";
      MEPValues[5].innerHTML = "2.00";
      MEPValues[6].innerHTML = "2.00";
      MEPValues[7].innerHTML = "2.00";
      MEPValues[8].innerHTML = "2.00";
      mepPoints.textContent = "Maximum 15 points";
    } else if (categoryType == "Industrial" || categoryType == "MRT Station") {
      MEPValues[0].innerHTML = "25.00"
      MEPValues[1].innerHTML = "20.00"
      MEPValues[2].innerHTML = "7.00"
      MEPValues[3].innerHTML = "7.00"
      MEPValues[4].innerHTML = "7.00"
      MEPValues[5].innerHTML = "3.00"
      MEPValues[6].innerHTML = "3.00"
      MEPValues[7].innerHTML = "3.00"
      MEPValues[8].innerHTML = "3.00"
      mepPoints.textContent = "Maximum 25 points";
    } else if (categoryType == "Institutional/, School & Others" || categoryType == "Commercial") {
      MEPValues[0].innerHTML = "35.00"
      MEPValues[1].innerHTML = "28.00"
      MEPValues[2].innerHTML = "11.00"
      MEPValues[3].innerHTML = "11.00"
      MEPValues[4].innerHTML = "11.00"
      MEPValues[5].innerHTML = "4.00"
      MEPValues[6].innerHTML = "4.00"
      MEPValues[7].innerHTML = "4.00"
      MEPValues[8].innerHTML = "4.00"
      mepPoints.textContent = "Maximum 35 points";
    }

  } else {
    //Structural
    struValues[0].innerHTML = "45.00";
    struValues[1].innerHTML = "42.00";
    struValues[2].innerHTML = "39.00";
    struValues[3].innerHTML = "39.00";
    struValues[4].innerHTML = "35.00";
    struValues[5].innerHTML = "35.00";
    struValues[6].innerHTML = "28.00";
    struValues[7].innerHTML = "28.00";
    struValues[8].innerHTML = "22.00";
    struValues[9].innerHTML = "10.00";
    //Architectural
    archValues[0].innerHTML = "30.00";
    archValues[1].innerHTML = "28.00";
    archValues[2].innerHTML = "28.00";
    archValues[3].innerHTML = "27.00";
    archValues[4].innerHTML = "25.00";
    archValues[5].innerHTML = "25.00";
    archValues[6].innerHTML = "25.00";
    archValues[7].innerHTML = "25.00";
    archValues[8].innerHTML = "22.00";
    archValues[9].innerHTML = "16.00";
    archValues[10].innerHTML = "5.00";
    archValues[11].innerHTML = "0.00";
    archValues[12].innerHTML = "10.00";
    archValues[13].innerHTML = "8.00";
    archValues[14].innerHTML = "8.00";
    archValues[15].innerHTML = "6.00";
    archValues[16].innerHTML = "4.00";
    archValues[17].innerHTML = "4.00";
    archValues[18].innerHTML = "2.00";
    archValues[19].innerHTML = "0.00";
    archValues[20].innerHTML = "0.00";
    //MEP System
    MEPValues[0].innerHTML = "15.00";
    MEPValues[1].innerHTML = "12.00";
    MEPValues[2].innerHTML = "4.00";
    MEPValues[3].innerHTML = "4.00";
    MEPValues[4].innerHTML = "4.00";
    MEPValues[5].innerHTML = "2.00";
    MEPValues[6].innerHTML = "2.00";
    MEPValues[7].innerHTML = "2.00";
    MEPValues[8].innerHTML = "2.00";
  }

  let allPageTextBox = page.querySelectorAll("cn2-textbox");
  for (let textBox of allPageTextBox) {
    if (!textBox.hasAttribute("disabled")) {
      if (textBox.hasAttribute("event-input")) {
        textBox.shadowRoot.querySelector("input").oninput();
      }
    }
  }

}

function atLeastOne(element) {
  let name = document.querySelectorAll(`[name=${element.name}]`);
  let chkbox = document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcProp_DefaBuilDesiScor10");
  let devType = document.querySelectorAll("[name='devtype']");
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

  if (element.id == "CalcOfOverBuil_ProjDet1_OutcBaseProp10") {
    for (let a of devType) {
      a.removeAttribute("disabled");
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
  } else {
    for (let a of devType) {
      a.setAttribute("disabled", "");
      a.checked = false;
      a.removeAttribute("checked");
      a.removeAttribute("mandatory");
    }
  }

  if (element.id == "CalcOfOverBuil_ProjDet1_OutcBaseProp10" || element.id == "CalcOfOverBuil_ProjDetl_ProjCompWithMini10") {
    chkbox.removeAttribute("disabled");
  } else {
    chkbox.setAttribute("disabled", "");
    chkbox.checked = false;
  }

  if (element.id == "CalcOfOverBuil_ProjDetl_ProjCompWithMini10") {
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").removeAttribute("disabled");
  } else {
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").setAttribute("disabled", "");
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").value = "";
    document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOpenOptiProp20").removeAttribute("mandatory");
  }

  showParticularTotals();
}

function disableDescPPV() {
  let chkbox1 = document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE10");
  let chkbox2 = document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropF10");
  let radio1 = document.getElementById("CalcOfOverBuil_ProjDetl_ProjCompWithMini10");
  let radio2 = document.getElementById("CalcOfOverBuil_ProjDetl_ProjCompWithMini610");
  let descPPV = document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropA_DescAccePpvcSyst10");

  if (chkbox1.checked || chkbox2.checked || radio1.checked || radio2.checked) {
    descPPV.setAttribute("disabled", "");
    descPPV.value = "";
  } else {
    descPPV.removeAttribute("disabled");
  }
}

function renderComputationPages(type) {
  let xmlStringSuper = `<div class="mls-espo-right-inner-container borderchecking">
  <h2 raw="Part V : Computation of Buildable Design Score - ">
      Part V : Computation of Buildable Design Score - 01
  </h2>
  <div class="mls-espro-form-fields row">
      <!-- Modal for adding Typical Block -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" typical-modal hidden>
      <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 0px;">
      <tbody>
        <tr>
          <td width="35%">
            Add/Remove Typical Block(s)
          </td>
          <td></td>
          <td class="text-center">
            <cn2-button id="closeTypicalBlockBtn10" prefix="closeTypicalBlockBtn" suffix="0"
              event-click="hideAddBlock(this);" label="&nbsp;&nbsp;Close&nbsp;&nbsp;" danger
              close-this="close">
            </cn2-button>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td width="35%">Master Block No.</td>
          <td style="color: blue; font-weight: bold;" page-block-no>
            01
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Typical Block No./Name</td>
          <td class="text-center">
            <cn2-textbox id="TypiBlocNoName10" dont-centerbox prefix="TypiBlocNoName" suffix="0" no-label>
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-button id="TypiBlockAdd10" prefix="TypiBlockAdd" suffix="0"
              label="&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;" event-click="addToTheList(this);">
            </cn2-button>
          </td>
        </tr>
        <tr>
          <td rowspan="2" style="vertical-align: top !important;">
            Existing Block No./Name
          </td>
          <td class="text-left" typical-block-list style="vertical-align: top !important;" rowspan="2">
            <div class="list-group" id="list-tab10" prefix="list-tab" field="list-tab" suffix="0"
              role="tablist"></div>
          </td>
          <td class="text-center" style="vertical-align: top !important;">
            <cn2-button danger prefix="TypiBlockRemove" suffix="0" id="TypiBlockRemove10" label="Remove"
              disabled event-click="removeFromTheList(this);"></cn2-button>
            <br />
            <br />
            <cn2-button buttons-id prefix="TypiBlockEdit" suffix="0" id="TypiBlockEdit10" disabled
              label="&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;" event-click="editFromTheList(this);">
            </cn2-button>
            <br />
            <br />
            <cn2-button buttons-id prefix="TypiBlockSave" suffix="0" id="TypiBlockSave10" disabled
              label="&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;" event-click="saveToTheList(this);">
            </cn2-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ALL Application Types -->
  <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id="9-1" non-typical-modal>
    <table class="table table-borderless mb-10">
      <tbody>
        <tr>
          <td colspan="3"></td>
          <td class="text-center">
            <b> Structural </b>
          </td>
          <td class="text-center">
            <b> Architectural </b>
          </td>
          <td class="text-center">
            <b> MEP </b>
          </td>
          <td class="text-center">
            <b> Innovation </b>
          </td>
          <td class="text-center">
            <b> BScore </b>
          </td>
        </tr>
        <tr>
          <td width="200px">
            Project Reference No. :
          </td>
          <td width="200px">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNo10" no-label proj-ref-no
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNo" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <h3>BS</h3>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Structural10" no-label page-ss
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Structural" suffix="0" disabled></cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Architectural10" no-label page-ws
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Architectural" suffix="0" disabled></cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_MEP10" no-label page-bf
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_MEP" suffix="0" disabled></cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Innovation10" no-label page-blk
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Innovation" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScore10" no-label page-bs
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScore" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>
            Block No./Name :
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Blk10" no-label page-block-no-default
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Blk" suffix="0" page-block-no>
            </cn2-textbox>
          </td>
          <td></td>
          <td colspan="4" class="text-left">
            Please indicate other typical blocks (if any) :
          </td>
          <td class="text-right">
            <cn2-button id="addTypicalBlockBtn10" prefix="addTypicalBlockBtn" suffix="0"
              event-click="showAddBlock(this);" label="Add" style="width: 100%;">
            </cn2-button>
          </td>
        </tr>
        <tr>
          <td>
            Category (Please Select)
          </td>
          <td colspan="3">
            <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_Cate10" no-label inline="10"
              prefix="CalcOfOverBuil_CompOfBuilDesi_Cate"
              event-change = "categoryType_change(this)"
              options="Public Residential (Non-Landed):Public Residential (Non-Landed),Private Residential (Non-Landed):Private Residential (Non-Landed),
                      Industrial:Industrial,Commercial:Commercial,Institutional/, School & Others:Institutional/, School & Others,MRT Station:MRT Station">
            </cn2-select>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>
      PRE-REQUISITES
    </h2>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Unit</td>
          <td>Wall Length (m)</td>
          <td>% of Coverage</td>
        </tr>
        <tr style="font-weight: bold;">
          <td colspan="5">FOR ALL PROJECTS</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Floor mesh <b>(&ge; 65%)</b> See Note A. 1</td>
          <td>Area</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj110" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj1" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Repetition of typical floor height in 1.5M or 1.75M <b>(&ge; 80%)</b><b><i>*NEW*</i></b></td>
          <td>Nos.</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj210" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj2" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '80', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Precast staircases for typical storeys <b>(≥ 65%)</b>(See Note A.2)</td>
          <td>Nos.</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj310" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj3" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Prefabricated and pre-insulated duct for air-conditioning system <b>(≥ 65%)</b></td>
          <td>Length</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj410" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj4" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr style="font-weight: bold;">
          <td colspan="5">FOR RESIDENTIAL NON-LANDED (RNL) PROJECTS</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Drywall partition (See Note A.3)<br />
            <b>(All internal dry areas excluding partywall / toilet wall / kitchen wall)</b></td>
          <td>Length</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj110" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj1" suffix="0" compute-rnl compute-ws
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProjComp110" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProjComp1" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Precast household shelter <b>(≥ 65%)</b> (See Note A.4)</td>
          <td>Nos.</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj210" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj2" suffix="0"
              event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Industry standard door structural openings (width) <b>(≥ 65%)</b> (See Note A.5)</td>
          <td>Nos.</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj310" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj3" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Industry standard precast refuse chutes <b>(≥ 65%)</b> (See Note A.6)</td>
          <td>Nos.</td>
          <td class="text-center">-</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj410" no-label currency maxlength="6"
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj4" suffix="0"
              event-change="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>A. STRUCTURAL SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <span struSystPoints>Maximum 45 points</span></h2> 
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Constructed Floor Area (m<sup>2</sup>)</td>
          <td>% of area (b)</td>
          <td>B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>A1</b></td>
          <td colspan="5"><b>DfMA STRUCTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td width="5%">1.1</td>
          <td width="40%">Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</b>
            <cn2-textbox placeholder="e.g. To state PPVC system" id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PPVC10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PPVC" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" structuralValue multiplier>45.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISConsFlooArea10" no-label
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6" prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISConsFlooArea" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISPercArea10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Mass Engineered Timber (MET) / Hybrid system of MET with structural steel / precast</td>
          <td class="text-center" structuralValue multiplier>42.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETConsFlooArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETConsFlooArea" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETPercArea10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="5"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Structural steel / Hybrid system of structural steel and precast concrete (see Note B.2)</td>
          <td class="text-center" structuralValue multiplier>39.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeConsFlooArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeConsFlooArea" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteePercArea10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteePercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td rowspan="2">3.2</td>
          <td rowspan="2">Advanced precast concrete system (APCS):
            Precast slab with at least 4 of the features listed below (each with ≥ 65% coverage):
          </td>
          <td rowspan="2" class="text-center" structuralValue multiplier>39.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSConsFlooArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSConsFlooArea" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSPercArea10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td rowspan="2">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">Denominator</td>
          <td class="text-center">Coverage (%)</td>
        </tr>
        <tr>
          <td>3.2(a)</td>
          <td>Integrated precast components (comprising at least 2 structural / architectural elements)
            e.g. double bay façade wall, beam-façade wall, multi-tier column/wall, precast household
            shelter,
            precast refuse chute, prefabricated bathroom unit, prefinished façade walls, precast external
            wall
            with cast-in windows
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All column / wall / façade wall / household shelters / refuse chutes / bathrooms (Nos.)
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSIntePrecPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSIntePrecPercArea" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(b)</td>
          <td>Mechanical connection for precast column / precast wall (horizontal joints)
            e.g. column shoes, grouted sleeves, spiral connector
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All columns / walls (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(c)</td>
          <td>Mechanical connection for precast beam (e.g. telescopic beam connector, grouted sleeves) /
            Integrated prefabricated column and beam junction (e.g. Lotus-Root system, slim floor system
            e.g. Deltabeam))
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All beams / column - beam junctions (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(d)</td>
          <td>Mechanical connection for precast wall (vertical joints) e.g. flexible loops</td>
          <td class="text-center">-</td>
          <td class="text-center">All non-structural walls (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea3" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(e)</td>
          <td>Mechanical connection for other precast components e.g. mechanical connections for parapet
            walls,
            staircases. Staircase flight and landing slabs shall be in precast concrete
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All parapet walls / staircase (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea4" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(f)</td>
          <td>Large panel slab / hollow core slab / double T slab ≥ 2.4m width</td>
          <td class="text-center">-</td>
          <td class="text-center">Total floor area of block (m<sup>2</sup>)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea5" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="5"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Prefabricated slab and column / wall or
            Prefabricated slab and beam
          </td>
          <td class="text-center" structuralValue multiplier>35.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea110" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore1" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Prefabricated column/wall and beam</td>
          <td class="text-center" structuralValue multiplier>35.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore2" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Prefabricated column/wall only</td>
          <td class="text-center" structuralValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea3" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore3" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Prefabricated slab only</td>
          <td class="text-center" structuralValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea4" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea410" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea4" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore4" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A2</b></td>
          <td colspan="5"><b>OTHER STRUCTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="5"><b>CAST IN-SITU</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>Flat plate / flat slab</td>
          <td class="text-center" structuralValue multiplier>22.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatConsFlooArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatConsFlooArea" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>Beam-slab system</td>
          <td class="text-center" structuralValue multiplier>10.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabConsFlooArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabConsFlooArea" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabBScore" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>6</b></td>
          <td colspan="5"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst1" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo1" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea1" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore1" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst2" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo2" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea2" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore2" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst3" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo3" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea3" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore3" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total A1 + A2</b></td>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaPercArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaPercArea1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore1" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>A3</b></td>
          <td colspan="6"><b>SIMPLICITY</b></td>
        </tr>
        <tr>
          <td>7.1(a)</td>
          <td>Prefabricated reinforcement cages for beam</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove1" suffix="0" 
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore1" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.1(b)</td>
          <td>Prefabricated reinforcement cages for column</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore2" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.1(c)</td>
          <td>Prefabricated reinforcement cages for wall</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore3" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.2</td>
          <td>Large panel slab / Integrated precast components (2 elements) e.g. double bay façade wall,
            beam-façade wall, multi-tier column/wall
            <b>(only if points are not claimed under Item 3.2 APCS)</b></td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove4" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore4" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3</td>
          <td colspan="6">Mechanical Connections
            <b>(only if points are not claimed under Item 3.2 APCS)</b></td>
        </tr>
        <tr>
          <td>7.3(a)</td>
          <td>For precast column / precast wall (horizontal joints) e.g. column shoes, grouted sleeves,
            spiral connector</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove5" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore5" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(b)</td>
          <td>For precast beam (e.g. telescopic beam connector, grouted sleeves) / Integrated prefabricated
            column and beam junction
            (e.g. Lotus-Root system, slim floor system e.g. Deltabeam))</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove6" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore6" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(c)</td>
          <td>For precast wall (vertical joints) e.g. flexible loops</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove7" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore7" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(d)</td>
          <td>For other precast components e.g. mechanical connections for parapet walls, staircases.
            Staircase flight and landing slabs shall be in precast concrete</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove8" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore8" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.4</td>
          <td>Precast slab with lattice girder reinforcement</td>
          <td class="text-center">Area</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove910" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove9" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore910" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore9" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.5</td>
          <td>High strength concrete (at least Grade C60/75)</td>
          <td class="text-center">Volume ≥ 5%</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove1010" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove10" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore1010" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore10" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A4</b></td>
          <td colspan="6"><b>MODULARIZATION</b></td>
        </tr>
        <tr>
          <td>8.1</td>
          <td>Columns (3 most common sizes in module of 0.5M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore1" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.2</td>
          <td>Beams (3 most common sizes in module of 0.5M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore2" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.3</td>
          <td>Vertical repetition of structural floor layout</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore3" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A5</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td>9.1</td>
          <td>Industry standardized precast household shelters (3 most common sizes) (See Note A.4)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanPercCove10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanPercCove" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanBScore" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A6</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>10.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst4" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo4" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove4" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area4" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area4" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore4" suffix="0" a2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst5" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo5" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove5" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area5" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area5" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore5" suffix="0" a2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst6" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo6" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove6" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area6" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area6" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore6" a2-totals suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6"><b>Total A3 + A4 + A5</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore2" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6"><b>Total for structural system (A = A1 + A2 + A3 + A4 + A5 +
              A6)</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore3" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>B. ARCHITECTURAL SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <span archSystPoints>Maximum 40 points</span></h2>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Wall Length (m)</td>
          <td>% of area (b)</td>
          <td>B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>B1</b></td>
          <td colspan="5"><b>DfMA ARCHITECTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td width="5%">1.1</td>
          <td width="40%">Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)
          </td>
          <td class="text-center" architecturalValue multiplier>30.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCWallLeng10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCWallLeng" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCPercLeng10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCPercLeng" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCBScore" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Prefabricated & prefinished wall with MEP services<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefMEP10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefMEP" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng110" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore1" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>2.2</td>
          <td>Prefabricated Bathroom Unit (PBU)<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefBathUnit10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefBathUnit" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng210" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore2" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="5"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Prefabricated & prefinished wall / Precast wall off-form<br />
            <cn2-textbox placeholder="e.g. To state system, MET, bare precast concrete" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPrefWall10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPrefWall" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>27.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercLeng10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercLeng" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="5"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1(a)</td>
          <td>Drywall partition for party wall / wet areas
            (For Residential Non-landed projects)
          </td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng110" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore1" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.1(b)</td>
          <td>Drywall partition for other areas
          </td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng210" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore2" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Curtain wall / Full height glass partition / Prefabricated railing</td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng3" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng310" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore3" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Precast wall</td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng4" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng410" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng4" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore4" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Lightweight concrete panel (See Note B.3)</td>
          <td class="text-center" architecturalValue multiplier>22.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng5" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng510" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng5" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore5" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>B2</b></td>
          <td colspan="5"><b>OTHER WALL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="5"><b>CAST IN-SITU COMPONENTS / BLOCKWALL</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>Cast in-situ wall</td>
          <td class="text-center" architecturalValue multiplier>16.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore1" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>Precision blockwall (See Note B.4)</td>
          <td class="text-center" architecturalValue multiplier>5.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore2" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.3</td>
          <td>Brickwall / blockwall (See Note B.5)</td>
          <td class="text-center" architecturalValue multiplier>0.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng3" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore3" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>6</b></td>
          <td colspan="5"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst1" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo1" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore1" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst2" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo2" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore2" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst30" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo3" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng3" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore3" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total B1 + B2</b></td>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1" suffix="0" disabled table-total>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercLeng1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore1" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>

    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-
         center">
          <td colspan="2">Description</td>
          <td class="text-center">Allocated points (a)</td>
          <td class="text-center">Wall Length (m)</td>
          <td class="text-center">Area with Finishes (m<sup>2</sup>)</td>
          <td class="text-center">% coverage (b)</td>
          <td class="text-center">B-Score (a) x (b)</td>
        </tr>
        <tr>
          <td><b>B3</b></td>
          <td colspan="6"><b>DfMA ARCHITECTURAL FINISHES</b></td>
        </tr>
        <tr>
          <td><b>7</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td>7.1</td>
          <td>Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</td>
          <td class="text-center" architecturalValue multiplier>10.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng3" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAreaWithFini310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAreaWithFini3" suffix="0" 
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercCove3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore3" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>8</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>8.1</td>
          <td>Prefabricated & prefinished wall / floor / ceiling with MEP services<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref1" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>8.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini1" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore1" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.2</td>
          <td>Prefabricated Bathroom Unit (PBU)<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref2" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>8.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore2" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>9</b></td>
          <td colspan="6"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>9.1</td>
          <td>Prefabricated & prefinished wall / floor, curtain wall, glass wall partition<br />
            <cn2-textbox placeholder="e.g. MET, bare precast concrete" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPref210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPref2" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>6.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSAreaWithFini210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSAreaWithFini2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercCove2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore2" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>10</b></td>
          <td colspan="6"><b>PRODUCTIVE FINISHES</b></td>
        </tr>
        <tr>
          <td>10.1</td>
          <td>Drywall partition, prefinished ceiling</td>
          <td class="text-center" architecturalValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini1" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore1" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.2</td>
          <td>Power float concrete floor, vinyl flooring, prefinished timber flooring, carpet, raised floor,
            engineered stone flooring finishes and wall paper</td>
          <td class="text-center" architecturalValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore2" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>B4</b></td>
          <td colspan="6"><b>OTHER FINISHES</b></td>
        </tr>
        <tr>
          <td><b>11</b></td>
          <td colspan="6"><b>OTHER FINISHES NOT LISTED (Please seek BCA's advice on the
              points to be allocated)</b></td>
        </tr>
        <tr>
          <td>11.1</td>
          <td>Large format tiles</td>
          <td class="text-center" architecturalValue multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng1" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini1" suffix="0" 
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore1" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.2</td>
          <td>Skim coat, vinyl tiles for wall</td>
          <td class="text-center" architecturalValue multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini2" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore2" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.3</td>
          <td>Plastering and other finishes e.g. tiles</td>
          <td class="text-center" architecturalValue multiplier>0.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng3" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini3" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore3" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.4</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst4" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo4" suffix="0" onblur="computeFloorArea(this, '2:2', '', 'compute-wall-1'); formatDecimal(this, '2');" currency maxlength="6" multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng4" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini4" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystPercCove410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystPercCove4" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystBScore4" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.5</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst5" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo5" suffix="0" onblur="computeFloorArea(this, '2:2', '', 'compute-wall-1'); formatDecimal(this, '2');" currency maxlength="6" multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng5" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini5" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove5" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore5" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total B3 + B4</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercCove2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore2" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-
         center">
          <td colspan="3" class="text-center">Description</td>
          <td class="text-center">Total height of all voids (m)</td>
          <td class="text-center">Total height of building (m)</td>
          <td class="text-center" width="20%">Scenario based on Max Offset (m) OR % of
            Offset floors
            in Table B</td>
          <td class="text-center">B-Score</td>
        </tr>
        <tr>
          <td><b>B5</b></td>
          <td colspan="6"><b>SIMPLICITY</b></td>
        </tr>
        <tr>
          <td>12.1</td>
          <td>Design without high voids (See Note B.6)</td>
          <td width="15%" class="text-center">See Table A</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid1" suffix="0"
              event-input="blockPageWallTable9(this, 'firstRow');" compute-wall-9_1 event-blur="ifGreaterThan(this, '9', 'range'); 
              formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil1" suffix="0"
              event-input="blockPageWallTable9(this, 'firstRow');" compute-wall-9_2 event-blur="formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore1" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>12.2</td>
          <td>Design without complex form (See Note B.6)</td>
          <td class="text-center">See Table B</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil2" suffix="0" event-input="blockPageWallTable9(this, 'secondRow');" 
              compute-wall-9_1 event-blur="formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet2" suffix="0" 
              event-change="blockPageWallTable9(this, 'secondRow');" options="1:1,2:2,3:3,4:4,5:5,6:6" compute-wall-9_2>
            </cn2-select>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore2" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2">Unit</td>
          <td colspan="2" width="30%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥ 65% to <80% </td>
          <td>≥ 80%</td>
        </tr>
        <tr>
          <td class="text-center"><b>B6</b></td>
          <td colspan="6"><b>MODULARIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td><b>13</b></td>
          <td colspan="6"><b>MODULARIZATION</b></td>
        </tr>
        <tr>
          <td class="text-center">13.1</td>
          <td>Horizontal grids in 3M</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" width="15%" multiplier>2.00</td>
          <td class="text-center" width="15%" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore1" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">13.2</td>
          <td>Dimension of PPVC modules in 0.5M</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore2" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
        <td class="text-center" rowspan="2">13.3</td>
        <td rowspan="2">Horizontal design repetition of unit layouts
        </td>
        <td class="text-center">30 to 34 Repetitions</td>
        <td class="text-center" multiplier>3.00</td>
        <td class="text-center" multiplier>3.00</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove910" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove9" suffix="0"
            event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
          </cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore910" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore9" suffix="0" b3-totals disabled>
          </cn2-textbox>
        </td>
      </tr>
      <tr>
      <td class="text-center">≥ 35 Repetition</td>
      <td class="text-center" multiplier>2.50</td>
      <td class="text-center" multiplier>2.50</td>
      <td>
        <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove1010" no-label
          prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove10" suffix="0"
          event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
        </cn2-textbox>
      </td>
      <td>
        <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore1010" no-label
          prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore10" suffix="0"  b3-totals disabled>
        </cn2-textbox>
      </td>
      </tr>
        <tr>
          <td rowspan="4" class="text-center">13.4</td>
          <td rowspan="4">Repetition of PPVC modules (See Note B.1)
          </td>
          <td class="text-center">≥80 Repetitions</td>
          <td class="text-center" multiplier>4.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore3" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">70 to 79 Repetitions</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove4" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore4" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">60 to 69 Repetitions</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove5" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore510" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore5" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">50 to 59 Repetitions</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove6" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore6" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="text-center">13.5</td>
          <td rowspan="2">Repetition of PBU modules (See Note B.7)</td>
          <td class="text-center">≥40 Repetitions</td>
          <td class="text-center" multiplier>3.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>  
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove7" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore7" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <40 Repetitions</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove8" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore8" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>14</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION</b></td>
        </tr>
        <tr>
          <td class="text-center">14.1</td>
          <td>Industry standardised door structural openings (3 most common size in 0.5M)
            <b>(All projects excluding Residential Non-landed)</b></td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore1" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">14.2</td>
          <td>Industry standardised prefabricated bathroom / toilet units (3 most common sizes) (See Note
            B.7)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore2" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">14.3</td>
          <td>Windows (3 most common sizes in 1M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore3" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>15</b></td>
          <td colspan="6"><b>OTHERS</b></td>
        </tr>
        <tr>
          <td class="text-center">15.1</td>
          <td>Prefabricated Kitchen Unit (PKU) accepted by Building Innovation Panel (BIP)<br />
            <cn2-textbox placeholder="e.g. To state PKU system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnit10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnit" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitPercCove10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitPercCove" suffix="0" 
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBScore" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">15.2</td>
          <td>Pole system wardrobe / Modular kitchen cabinets<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSyst10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSyst" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystPercCove10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystPercCove" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBScore" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>16</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>16.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst6" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit6" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove6" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove6" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove6" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore610" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore6" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>16.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst7" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit7" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove7" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove7" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove7" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore710" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore7" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>16.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst8" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit8" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove8" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove8" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove8" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore810" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore8" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total B5 + B6</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScore" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2">Unit</td>
          <td colspan="2" width="30%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>
            <30% </td>
          <td>≥ 30%</td>
        </tr>
        <tr>
          <td><b>B7</b></td>
          <td colspan="6"><b>DEMERIT POINTS</b></td>
        </tr>
        <tr>
          <td>17.1</td>
          <td>Cast in-situ floor with transfer beam / cantilever transfer beam</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore1" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>17.2</td>
          <td>Inclined columns</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore2" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>17.3</td>
          <td>Non-functional void on slab (if applicable, demerit point is -1)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore3" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total B7 (Max -4 pts)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore1" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total for architectural system (B = B1 + B2 + B3 + B4 + B5 +
              B6 + B7)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScore" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>C. MEP SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <span mepSystPoints>Maximum 15 points</span></h2>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Total Qualifying Area (m<sup>2</sup>)</td>
          <td>Prefabricated Area (m<sup>2</sup>)</td>
          <td width="15%">% of Coverage</td>
          <td width="15%">B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>C1</b></td>
          <td colspan="6"><b>DfMA MEP SYSTEM (See Note B.8)</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td>1.1</td>
          <td>Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</td>
          <td class="text-center" MEPValue multiplier>15.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISTotaQualArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISTotaQualArea" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPrefArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPrefArea" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISBScore" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Prefabricated MEP modules integrated with structural or architectural system</td>
          <td class="text-center" MEPValue multiplier>12.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISATotaQualArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISATotaQualArea" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPrefArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPrefArea" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISABScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISABScore" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="6"><b>ADVANCED PREFAB SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Prefabricated MEP vertical modules</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea1" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea1" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea1" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore1" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>3.2</td>
          <td>Prefabricated MEP horizontal modules</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea2" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea2" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea2" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore2" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>3.3</td>
          <td>Prefabricated MEP plant module</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea3" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea3" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea3" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore3" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total C1</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPercArea10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPercArea" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore1" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>C2</b></td>
          <td colspan="6"><b>DfMA MEP COMPONENTS</b></td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="6"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Flexible sprinkler dropper</td>
          <td class="text-center">Nos.</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore1" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Flexible water pipes</td>
          <td class="text-center">Nos.</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore2" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Common M&E bracket (at least 3 M&E services)</td>
          <td class="text-center">Length</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore3" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Pre-insulated mechanical piping e.g. chilled water pipes</td>
          <td class="text-center">Length</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove4" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore410" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore4" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst1" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit1" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove1" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove1" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore1" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst2" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit2" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove2" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove2" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore2" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst3" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit3" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove3" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove3" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove3" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore3" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total C2</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore2" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>C3</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>Mechanical connection for prefabricated MEP modules</td>
          <td class="text-center">Area</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove1" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore1" suffix="0" c3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>Industry standardized prefabricated pump skids for water and firefighting services</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>0.50</td>
          <td class="text-center" multiplier>1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove2" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore210" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore2" suffix="0" c3-totals disabled>
            </cn2-textbox>
          </td>
        <tr>
          <td colspan="6" class="text-right"><b>Total C3</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore310" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore3" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total for MEP system (C = C1 + C2 + C3)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScore10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScore" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>

        <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h2>D. INNOVATION AND OTHERS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span name="innoSystPoints">Maximum 20 points</span></h2>
        <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr style="font-weight: bold;">
              <td class="text-center" colspan="2">Description</td>
              <td class="text-center" width="20%">Unit</td>
              <td class="text-center" width="10%">Points</td>
              <td class="text-center" width="10%">% of Coverage</td>
              <td class="text-center" width="10%">B-Score</td>
            </tr>
            <tr>
              <td><b>D1</b></td>
              <td colspan="5"><b>INNOVATIVE SYSTEM (Please seek BCA's advice on the points
                  to be allocated)</b></td>
            </tr>
            <tr>
              <td>1.1</td>
              <td>  
                <cn2-textbox placeholder="e.g. Prefabricated organic components - precast wavy façade" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst110" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst1" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit110" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit1" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints110" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints1" suffix="0"
                  event-blur="formatDecimal(this, '2');percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove110" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove1" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore110" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore1" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>
                <cn2-textbox placeholder="e.g. Prefabricated Kitchen Unit (PKU) or Prefabricated Common Toilet (PCT)" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst210" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst2" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit210" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit2" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints210" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints2" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove210" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove2" suffix="0"
                  event-change="formatDecimal(this, '2');percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore210" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore2" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.3</td>
              <td>
                <cn2-textbox placeholder="e.g. High-strength / lightweight materials - high strength steel reinforcement" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst310" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst3" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit310" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit3" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints310" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints3" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove310" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove3" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore310" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore3" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.4</td>
              <td>
                <cn2-textbox placeholder="e.g. Innovative structural connections (See Note C.1)" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst410" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst4" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit410" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit4" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints410" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints4" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove410" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove4" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore410" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore4" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst510" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst5" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit510" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit5" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints510" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints5" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove510" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove5" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore510" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore5" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.6</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst610" dont-centerbox no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst6" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit610" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit6" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints610" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints6" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove610" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove6" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore610" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore6" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td><b>D2</b></td>
              <td colspan="5"><b>OTHERS</b></td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>
                Prefab components / PPVC / PBU / MEP accredited under PAS / MAS
              </td>
              <td >
                <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheUnit10" no-label event-change = "prefabComponentChange(this)"
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheUnit" suffix="0" options="No PAS/MAS:No PAS/MAS,PAS - Prefab Components:PAS - Prefab Components,MAS - PPVC:MAS - PPVC,
                           MAS - PBU:MAS - PBU,MAS - Prefab MEP:MAS - Prefab MEP">
                </cn2-select>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePoints10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePoints" suffix="0" disabled
                  event-blur="formatDecimal(this, '2'); computeFloorArea(this, '1:1', 'none');">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePercCove10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePercCove" suffix="0"
                  event-change="formatDecimal(this, '2');" currency maxlength="6">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheBScore10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheBScore" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right"><b>Total for Innovations system and others (D)</b></td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScore10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScore" suffix="0" disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right"><b>Total B-Score (A + B + C + D) (out of 120 points)</b>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_TotaBScore10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_TotaBScore" suffix="0" disabled>
                </cn2-textbox>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
        <tbody>
          <tr>
            <td width="20%"><b>Prefabrication Level(%)</b></td>
            <td width="11%"></td>
            <td width="11%"></td>
            <td width="15%" class="text-center">To input additional prefab level % if system is not listed</td>
            <td width="11%"></td>
            <td width="11%"></td>
          </tr>
          <tr>
            <td>(a) Structural System</td>
            <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst10" no-label
                prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst" suffix="0" disabled>
              </cn2-textbox>
            </td>
            <td class="text-center">+</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst110" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst1" 
            event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTota')"
            event-change="formatDecimal(this, '2');" currency maxlength="6"
            suffix="0">
            </cn2-textbox>
            </td>
            <td class="text-center">=</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTota10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTota" suffix="0" disabled>
            </cn2-textbox>
            </td>
          </tr>
          <tr>
            <td>(b) Architectural System</td>
            <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst10" no-label
                prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst" suffix="0"
                disabled>
              </cn2-textbox>
            </td>
            <td class="text-center">+</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst110" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst1" 
            event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTota')"
            event-change="formatDecimal(this, '2');" currency maxlength="6"
            suffix="0">
            </cn2-textbox>
            </td>
            <td class="text-center">=</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTota10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTota" suffix="0" disabled>
            </cn2-textbox>
            </td>
          </tr>
          <tr>
            <td>(c) MEP System</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst" suffix="0" disabled>
            </cn2-textbox>
            </td>
            <td class="text-center">+</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst110" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst1" 
            event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTota')"
            event-change="formatDecimal(this, '2');" currency maxlength="6"
            suffix="0">
            </cn2-textbox>
            </td>
            <td class="text-center">=</td>
            <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTota10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTota" suffix="0" disabled>
            </cn2-textbox>
            </td>
          </tr>
        </tbody>
      </table> 
      </div>
  </div>
</div>`;
  let xmlStringBase = `<div class="mls-espo-right-inner-container borderchecking">
  <h2 raw="Part V : Computation of Buildable Design Score - ">
    Part V : Computation of Buildable Design Score - B01
  </h2>
  <div class="mls-espro-form-fields row">
    <!-- Modal for adding Typical Block -->
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" typical-modal hidden>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 0px;">
    <tbody>
      <tr>
        <td width="35%">
          Add/Remove Typical Block(s)
        </td>
        <td></td>
        <td class="text-center">
          <cn2-button id="closeTypicalBlockBtnBase10" prefix="closeTypicalBlockBtnBase" suffix="0"
            event-click="hideAddBlock(this, 'basement');" label="&nbsp;&nbsp;Close&nbsp;&nbsp;" danger
            close-this="close">
          </cn2-button>
        </td>
      </tr>
      <tr>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td width="35%">Master Block No.</td>
        <td style="color: blue; font-weight: bold;" page-block-no>
          B01
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Typical Block No./Name</td>
        <td class="text-center">
          <cn2-textbox id="TypiBlocNoNameBase10" dont-centerbox prefix="TypiBlocNoNameBase" suffix="0" no-label>
          </cn2-textbox>
        </td>
        <td class="text-center">
          <cn2-button id="TypiBlockAddBase10" prefix="TypiBlockAddBase" suffix="0"
            label="&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;" event-click="addToTheList(this, 'basement');">
          </cn2-button>
        </td>
      </tr>
      <tr>
        <td rowspan="2" style="vertical-align: top !important;">
          Existing Block No./Name
        </td>
        <td class="text-left" typical-block-list style="vertical-align: top !important;" rowspan="2">
          <div class="list-group" id="list-tab10" prefix="list-tab" field="list-tab" suffix="0"
            role="tablist"></div>
        </td>
        <td class="text-center" style="vertical-align: top !important;">
          <cn2-button danger prefix="TypiBlockRemoveBase" suffix="0" id="TypiBlockRemoveBase10" label="Remove"
            disabled event-click="removeFromTheList(this, 'basement');"></cn2-button>
          <br />
          <br />
          <cn2-button buttons-id prefix="TypiBlockEditBase" suffix="0" id="TypiBlockEditBase10" disabled
            label="&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;" event-click="editFromTheList(this, 'basement');">
          </cn2-button>
          <br />
          <br />
          <cn2-button buttons-id prefix="TypiBlockSaveBase" suffix="0" id="TypiBlockSaveBase10" disabled
            label="&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;" event-click="saveToTheList(this, 'basement');">
          </cn2-button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!-- ALL Application Types -->
<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id="9-1" non-typical-modal>
  <table class="table table-borderless mb-10">
    <tbody>
      <tr>
        <td colspan="3"></td>
        <td class="text-center">
          <b> Structural </b>
        </td>
        <td class="text-center">
          <b> Architectural </b>
        </td>
        <td class="text-center">
          <b> MEP </b>
        </td>
        <td class="text-center">
          <b> Innovation </b>
        </td>
        <td class="text-center">
          <b> BScore </b>
        </td>
      </tr>
      <tr>
        <td width="200px">
          Project Reference No. :
        </td>
        <td width="200px">
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNoBase10" no-label proj-ref-no
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNoBase" suffix="0" disabled>
          </cn2-textbox>
        </td>
        <td>
          <h3>BS</h3>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StructuralBase10" no-label page-ss
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StructuralBase" suffix="0" disabled></cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ArchitecturalBase10" no-label page-ws
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ArchitecturalBase" suffix="0" disabled></cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_MEPBase10" no-label page-bf
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_MEPBase" suffix="0" disabled></cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InnovationBase10" no-label page-blk
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InnovationBase" suffix="0" disabled>
          </cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScoreBase10" no-label page-bs
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BScoreBase" suffix="0" disabled>
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>
          Block No./Name :
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlkBase10" no-label page-block-no-default
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlkBase" suffix="0" page-block-no>
          </cn2-textbox>
        </td>
        <td></td>
        <td colspan="4" class="text-left">
          Please indicate other typical blocks (if any) :
        </td>
        <td class="text-right">
          <cn2-button id="addTypicalBlockBtnBase10" prefix="addTypicalBlockBtnBase" suffix="0"
            event-click="showAddBlock(this);" label="Add" style="width: 100%;">
          </cn2-button>
        </td>
      </tr>
      <tr>
        <td>
          Category (Please Select)
        </td>
        <td colspan="3">
          <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_CateBase10" no-label inline="10"
            prefix="CalcOfOverBuil_CompOfBuilDesi_CateBase"
            event-change="categoryType_change(this);"
            options="Public Residential (Non-Landed):Public Residential (Non-Landed),Private Residential (Non-Landed):Private Residential (Non-Landed),
                    Industrial:Industrial,Commercial:Commercial,Institutional/, School & Others:Institutional/, School & Others,MRT Station:MRT Station">
          </cn2-select>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>
    PRE-REQUISITES
  </h2>
  <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
    <tbody>
      <tr style="font-weight: bold;" class="text-center">
        <td colspan="2">Description</td>
        <td>Unit</td>
        <td>Wall Length (m)</td>
        <td>% of Coverage</td>
      </tr>
      <tr style="font-weight: bold;">
        <td colspan="5">FOR ALL PROJECTS</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Floor mesh <b>(&ge; 65%)</b> See Note A. 1</td>
        <td>Area</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj1Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj1Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Repetition of typical floor height in 1.5M or 1.75M <b>(&ge; 80%)</b><b><i>*NEW*</i></b></td>
        <td>Nos.</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj2Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj2Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '80', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Precast staircases for typical storeys <b>(≥ 65%)</b>(See Note A.2)</td>
        <td>Nos.</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj3Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj3Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Prefabricated and pre-insulated duct for air-conditioning system <b>(≥ 65%)</b></td>
        <td>Length</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj4Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForAllProj4Base" suffix="0" 
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr style="font-weight: bold;">
        <td colspan="5">FOR RESIDENTIAL NON-LANDED (RNL) PROJECTS</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Drywall partition (See Note A.3)<br />
          <b>(All internal dry areas excluding partywall / toilet wall / kitchen wall)</b></td>
        <td>Length</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj1Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj1Base" suffix="0" compute-rnl compute-ws
            event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
            event-blur="formatDecimal(this, '2')" currency maxlength="6">
          </cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProjComp1Base10" no-label compute-ws-percent
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProjComp1Base" suffix="0" disabled>
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Precast household shelter <b>(≥ 65%)</b> (See Note A.4)</td>
        <td>Nos.</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj2Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj2Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>Industry standard door structural openings (width) <b>(≥ 65%)</b> (See Note A.5)</td>
        <td>Nos.</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj3Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj3Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
      <tr>
        <td>8</td>
        <td>Industry standard precast refuse chutes <b>(≥ 65%)</b> (See Note A.6)</td>
        <td>Nos.</td>
        <td class="text-center">-</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj4Base10" no-label currency maxlength="6"
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ForResiNonLandProj4Base" suffix="0"
            event-blur="formatDecimal(this, '2'); ifGreaterThan(this, '65', 'percent')">
          </cn2-textbox>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>A. STRUCTURAL SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <span struSystPoints>Maximum 45 points</span></h2>
  <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Constructed Floor Area (m<sup>2</sup>)</td>
          <td>% of area (b)</td>
          <td>B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>A1</b></td>
          <td colspan="5"><b>DfMA STRUCTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td width="5%">1.1</td>
          <td width="40%">Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</b>
            <cn2-textbox placeholder="e.g. To state PPVC system" id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PPVCBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PPVCBase" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" structuralValue multiplier>45.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISConsFlooAreaBase10" no-label
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6" prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISConsFlooAreaBase" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISPercAreaBase10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Mass Engineered Timber (MET) / Hybrid system of MET with structural steel / precast</td>
          <td class="text-center" structuralValue multiplier>42.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETConsFlooAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETConsFlooAreaBase" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETPercAreaBase10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_FISAMETBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="5"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Structural steel / Hybrid system of structural steel and precast concrete (see Note B.2)</td>
          <td class="text-center" structuralValue multiplier>39.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeConsFlooAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeConsFlooAreaBase" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteePercAreaBase10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteePercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSStruSteeBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td rowspan="2">3.2</td>
          <td rowspan="2">Advanced precast concrete system (APCS):
            Precast slab with at least 4 of the features listed below (each with ≥ 65% coverage):
          </td>
          <td rowspan="2" class="text-center" structuralValue multiplier>39.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSConsFlooAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSConsFlooAreaBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSPercAreaBase10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td rowspan="2">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSAPCSBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">Denominator</td>
          <td>Coverage (%)</td>
        </tr>
        <tr>
          <td>3.2(a)</td>
          <td>Integrated precast components (comprising at least 2 structural / architectural elements)
            e.g. double bay façade wall, beam-façade wall, multi-tier column/wall, precast household
            shelter,
            precast refuse chute, prefabricated bathroom unit, prefinished façade walls, precast external
            wall
            with cast-in windows
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All column / wall / façade wall / household shelters / refuse chutes / bathrooms (Nos.)
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSIntePrecPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSIntePrecPercAreaBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(b)</td>
          <td>Mechanical connection for precast column / precast wall (horizontal joints)
            e.g. column shoes, grouted sleeves, spiral connector
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All columns / walls (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(c)</td>
          <td>Mechanical connection for precast beam (e.g. telescopic beam connector, grouted sleeves) /
            Integrated prefabricated column and beam junction (e.g. Lotus-Root system, slim floor system
            e.g. Deltabeam))
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All beams / column - beam junctions (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(d)</td>
          <td>Mechanical connection for precast wall (vertical joints) e.g. flexible loops</td>
          <td class="text-center">-</td>
          <td class="text-center">All non-structural walls (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(e)</td>
          <td>Mechanical connection for other precast components e.g. mechanical connections for parapet
            walls,
            staircases. Staircase flight and landing slabs shall be in precast concrete
          </td>
          <td class="text-center">-</td>
          <td class="text-center">All parapet walls / staircase (Nos.)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea4Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td>3.2(f)</td>
          <td>Large panel slab / hollow core slab / double T slab ≥ 2.4m width</td>
          <td class="text-center">-</td>
          <td class="text-center">Total floor area of block (m<sup>2</sup>)</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_APSMechConnPercArea5Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              event-change="formatDecimal(this, '2');" currency maxlength="6" denominator>
            </cn2-textbox>
          </td>
          <td class="text-center">-</td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="5"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Prefabricated slab and column / wall or
            Prefabricated slab and beam
          </td>
          <td class="text-center" structuralValue multiplier>35.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea1Base10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore1Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Prefabricated column/wall and beam</td>
          <td class="text-center" structuralValue multiplier>35.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore2Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Prefabricated column/wall only</td>
          <td class="text-center" structuralValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore3Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Prefabricated slab only</td>
          <td class="text-center" structuralValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefConsFlooArea4Base" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea4Base10" no-label compute-ss-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefPercArea4Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PCPrefBScore4Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A2</b></td>
          <td colspan="5"><b>OTHER STRUCTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="5"><b>CAST IN-SITU</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>Flat plate / flat slab</td>
          <td class="text-center" structuralValue multiplier>22.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatConsFlooAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatConsFlooAreaBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISFlatPlatBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>Beam-slab system</td>
          <td class="text-center" structuralValue multiplier>10.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabConsFlooAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabConsFlooAreaBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
              compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CISBeamSlabBScoreBase" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>6</b></td>
          <td colspan="5"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst1Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo1Base" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea1Base" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore1Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst2Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo2Base" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea2Base" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore2Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst3Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo3Base" suffix="0" onblur="computeFloorArea(this, '1:2', '', 'compute-ss');formatDecimal(this, '2')" currency maxlength="6"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystConsFlooArea3Base" suffix="0"
               event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1', '1:2');"
               compute-ss event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPercArea3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore3Base" suffix="0" disabled a1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total A1 + A2</b></td>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaConsFlooArea1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaPercArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaPercArea1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>A3</b></td>
          <td colspan="6"><b>SIMPLICITY</b></td>
        </tr>
        <tr>
          <td>7.1(a)</td>
          <td>Prefabricated reinforcement cages for beam</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove1Base" suffix="0" 
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore1Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.1(b)</td>
          <td>Prefabricated reinforcement cages for column</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore2Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.1(c)</td>
          <td>Prefabricated reinforcement cages for wall</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore3Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.2</td>
          <td>Large panel slab / Integrated precast components (2 elements) e.g. double bay façade wall,
            beam-façade wall, multi-tier column/wall
            <b>(only if points are not claimed under Item 3.2 APCS)</b></td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove4Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore4Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3</td>
          <td colspan="6">Mechanical Connections
            <b>(only if points are not claimed under Item 3.2 APCS)</b></td>
        </tr>
        <tr>
          <td>7.3(a)</td>
          <td>For precast column / precast wall (horizontal joints) e.g. column shoes, grouted sleeves,
            spiral connector</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove5Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore5Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(b)</td>
          <td>For precast beam (e.g. telescopic beam connector, grouted sleeves) / Integrated prefabricated
            column and beam junction
            (e.g. Lotus-Root system, slim floor system e.g. Deltabeam))</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove6Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore6Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(c)</td>
          <td>For precast wall (vertical joints) e.g. flexible loops</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove7Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore7Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.3(d)</td>
          <td>For other precast components e.g. mechanical connections for parapet walls, staircases.
            Staircase flight and landing slabs shall be in precast concrete</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove8Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore8Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>7.4</td>
          <td>Precast slab with lattice girder reinforcement</td>
          <td class="text-center">Area</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove9Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove9Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore9Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore9Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
        <td>7.5</td>
        <td>High strength concrete (at least Grade C60/75)</td>
        <td class="text-center">Volume ≥ 5%</td>
        <td class="text-center" multiplier>2.00</td>
        <td class="text-center" multiplier>2.00</td>
        <td width="20%">
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove10Base10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpPercCove10Base" suffix="0"
            event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
          </cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore10Base10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SimpBScore10Base" suffix="0" disabled a2-totals>
          </cn2-textbox>
        </td>
      </tr>
        <tr>
          <td><b>A4</b></td>
          <td colspan="6"><b>MODULARIZATION</b></td>
        </tr>
        <tr>
          <td>8.1</td>
          <td>Columns (3 most common sizes in module of 0.5M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore1Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.2</td>
          <td>Beams (3 most common sizes in module of 0.5M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore2Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.3</td>
          <td>Vertical repetition of structural floor layout</td>
          <td class="text-center">Area</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ModuBScore3Base" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A5</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td>9.1</td>
          <td>Industry standardized precast household shelters (3 most common sizes) (See Note A.4)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanPercCoveBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanPercCoveBase" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_InduStanBScoreBase" suffix="0" disabled a2-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>A6</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>10.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst4Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo4Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove4Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area4Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area4Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore4Base" a2-totals suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst5Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit5Base10" no-label currency
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo5Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove5Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area5Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area5Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore5Base" a2-totals suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSyst6Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystUnit6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystMaxAllo6Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc1Cove6Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc2Area6Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystPerc3Area6Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtherSystBScore6Base" a2-totals suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6"><b>Total A3 + A4 + A5</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6"><b>Total for structural system (A = A1 + A2 + A3 + A4 + A5 +
              A6)</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaBScore3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>B. ARCHITECTURAL SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <span archSystPoints>Maximum 40 points</span></h2>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Wall Length (m)</td>
          <td>% of area (b)</td>
          <td>B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>B1</b></td>
          <td colspan="5"><b>DfMA ARCHITECTURAL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td width="5%">1.1</td>
          <td width="40%">Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)
          </td>
          <td class="text-center" architecturalValue multiplier>30.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCWallLengBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCWallLengBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td width="20%">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCPercLengBase10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCPercLengBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PPVCBScoreBase" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="5"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Prefabricated & prefinished wall with MEP services<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefMEPBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefMEPBase" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng1Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore1Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>2.2</td>
          <td>Prefabricated Bathroom Unit (PBU)<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefBathUnitBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPrefBathUnitBase" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>28.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng2Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercLeng2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore2Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="5"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Prefabricated & prefinished wall / Precast wall off-form<br />
            <cn2-textbox placeholder="e.g. To state system, MET, bare precast concrete" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPrefWallBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPrefWallBase" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>27.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLengBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLengBase" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercLengBase10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercLengBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScoreBase" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="5"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1(a)</td>
          <td>Drywall partition for party wall / wet areas
            (For Residential Non-landed projects)
          </td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng1Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore1Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.1(b)</td>
          <td>Drywall partition for other areas
          </td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng2Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore2Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Curtain wall / Full height glass partition / Prefabricated railing</td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng3Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore3Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Precast wall</td>
          <td class="text-center" architecturalValue multiplier>25.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng4Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng4Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng4Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore4Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Lightweight concrete panel (See Note B.3)</td>
          <td class="text-center" architecturalValue multiplier>22.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompWallLeng5Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng5Base10" no-label compute-ws-percent
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompPercLeng5Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_PrefCompBScore5Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>B2</b></td>
          <td colspan="5"><b>OTHER WALL SYSTEM</b></td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="5"><b>CAST IN-SITU COMPONENTS / BLOCKWALL</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>Cast in-situ wall</td>
          <td class="text-center" architecturalValue multiplier>16.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore1Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>Precision blockwall (See Note B.4)</td>
          <td class="text-center" architecturalValue multiplier>5.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore2Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.3</td>
          <td>Brickwall / blockwall (See Note B.5)</td>
          <td class="text-center" architecturalValue multiplier>0.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISWallLeng3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISPercLeng3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_CISBScore3Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>6</b></td>
          <td colspan="5"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst1Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo1Base" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore1Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst2Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo2Base" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore2Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSyst30Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystMaxAllo3Base" suffix="0"
              onblur="computeFloorArea(this, '1:2', '', 'compute-ws');formatDecimal(this, '2')"
              multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystWallLeng3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-ws', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1', '1:2');"
              compute-ws event-blur="formatDecimal(this, '2')" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystPercLeng3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtherSystBScore3Base" suffix="0" disabled b1-totals>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total B1 + B2</b></td>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng1Base" suffix="0" disabled table-total>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercLeng1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>

    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-
         center">
          <td colspan="2">Description</td>
          <td class="text-center">Allocated points (a)</td>
          <td class="text-center">Wall Length (m)</td>
          <td class="text-center">Area with Finishes (m<sup>2</sup>)</td>
          <td class="text-center">% coverage (b)</td>
          <td class="text-center">B-Score (a) x (b)</td>
        </tr>
        <tr>
          <td><b>B3</b></td>
          <td colspan="6"><b>DfMA ARCHITECTURAL FINISHES</b></td>
        </tr>
        <tr>
          <td><b>7</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td>7.1</td>
          <td>Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</td>
          <td class="text-center" architecturalValue multiplier>10.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISWallLeng3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAreaWithFini3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAreaWithFini3Base" suffix="0" 
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISPercCove3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISBScore3Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>8</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>8.1</td>
          <td>Prefabricated & prefinished wall / floor / ceiling with MEP services<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref1Base" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>8.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore1Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>8.2</td>
          <td>Prefabricated Bathroom Unit (PBU)<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPref2Base" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>8.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAAreaWithFini2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISAPercCove2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_FISABScore2Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>9</b></td>
          <td colspan="6"><b>ADVANCED PREFABRICATED SYSTEMS</b></td>
        </tr>
        <tr>
          <td>9.1</td>
          <td>Prefabricated & prefinished wall / floor, curtain wall, glass wall partition<br />
            <cn2-textbox placeholder="e.g. MET, bare precast concrete" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPref2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPref2Base" suffix="0" inline="10" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center" architecturalValue multiplier>6.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSAreaWithFini2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSAreaWithFini2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSPercCove2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_APSBScore2Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>10</b></td>
          <td colspan="6"><b>PRODUCTIVE FINISHES</b></td>
        </tr>
        <tr>
          <td>10.1</td>
          <td>Drywall partition, prefinished ceiling</td>
          <td class="text-center" architecturalValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore1Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>10.2</td>
          <td>Power float concrete floor, vinyl flooring, prefinished timber flooring, carpet, raised floor,
            engineered stone flooring finishes and wall paper</td>
          <td class="text-center" architecturalValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td class="text-center">
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniAreaWithFini2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniPercCove2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ProdFiniBScore2Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>B4</b></td>
          <td colspan="6"><b>OTHER FINISHES</b></td>
        </tr>
        <tr>
          <td><b>11</b></td>
          <td colspan="6"><b>OTHER FINISHES NOT LISTED (Please seek BCA's advice on the
              points to be allocated)</b></td>
        </tr>
        <tr>
          <td>11.1</td>
          <td>Large format tiles</td>
          <td class="text-center" architecturalValue multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng1Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini1Base" suffix="0" 
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore1Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.2</td>
          <td>Skim coat, vinyl tiles for wall</td>
          <td class="text-center" architecturalValue multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini2Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore2Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.3</td>
          <td>Plastering and other finishes e.g. tiles</td>
          <td class="text-center" architecturalValue multiplier>0.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini3Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore3Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.4</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst4Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo4Base" suffix="0" onblur="computeFloorArea(this, '2:2', '', 'compute-wall-1'); formatDecimal(this, '2');" currency maxlength="6" multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng4Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini4Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystPercCove4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystPercCove4Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheSystBScore4Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>11.5</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst5Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystMaxAllo5Base" suffix="0" onblur="computeFloorArea(this, '2:2', '', 'compute-wall-1'); formatDecimal(this, '2');" currency maxlength="6" multiplier>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystWallLeng5Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2', '2:2');" compute-wall-1
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystAreaWithFini5Base" suffix="0"
              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2', '2:2');" compute-wall-2
              onblur="formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPercCove5Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore5Base" suffix="0" b2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total B3 + B4</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaWallLeng2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaAreaWithFini2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaPercCove2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_TotaBScore2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-
         center">
          <td colspan="3" class="text-center">Description</td>
          <td class="text-center">Total height of all voids (m)</td>
          <td class="text-center">Total height of building (m)</td>
          <td class="text-center" width="20%">Scenario based on Max Offset (m) OR % of
            Offset floors
            in Table B</td>
          <td class="text-center">B-Score</td>
        </tr>
        <tr>
          <td><b>B5</b></td>
          <td colspan="6"><b>SIMPLICITY</b></td>
        </tr>
        <tr>
          <td>12.1</td>
          <td>Design without high voids (See Note B.6)</td>
          <td width="15%" class="text-center">See Table A</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid1Base" suffix="0"
              event-input="blockPageWallTable9(this, 'firstRow');" compute-wall-9_1 event-blur="ifGreaterThan(this, '9', 'range'); 
              formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil1Base" suffix="0"
              event-input="blockPageWallTable9(this, 'firstRow');" compute-wall-9_2 event-blur="formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore1Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>12.2</td>
          <td>Design without complex form (See Note B.6)</td>
          <td class="text-center">See Table B</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfVoid2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpTotalHeigOfBuil2Base" suffix="0" event-input="blockPageWallTable9(this, 'secondRow');" 
              compute-wall-9_1 event-blur="formatDecimal(this, '2');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpMaxOffSet2Base" suffix="0" 
              event-change="blockPageWallTable9(this, 'secondRow');" options="1:1,2:2,3:3,4:4,5:5,6:6" compute-wall-9_2>
            </cn2-select>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_SimpBScore2Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2">Unit</td>
          <td colspan="2" width="30%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥ 65% to <80% </td>
          <td>≥ 80%</td>
        </tr>
        <tr>
          <td class="text-center"><b>B6</b></td>
          <td colspan="6"><b>MODULARIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td><b>13</b></td>
          <td colspan="6"><b>MODULARIZATION</b></td>
        </tr>
        <tr>
          <td class="text-center">13.1</td>
          <td>Horizontal grids in 3M</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" width="15%" multiplier>2.00</td>
          <td class="text-center" width="15%" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore1Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">13.2</td>
          <td>Dimension of PPVC modules in 0.5M</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore2Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
        <td class="text-center" rowspan="2">13.3</td>
        <td rowspan="2">Horizontal design repetition of unit layouts
        </td>
        <td class="text-center">30 to 34 Repetitions</td>
        <td class="text-center" multiplier>3.00</td>
        <td class="text-center" multiplier>3.00</td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove9Base10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove9Base" suffix="0"
            event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
          </cn2-textbox>
        </td>
        <td>
          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore9Base10" no-label
            prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore9Base" suffix="0" b3-totals disabled>
          </cn2-textbox>
        </td>
      </tr>
      <tr>
      <td class="text-center">≥ 35 Repetition</td>
      <td class="text-center" multiplier>2.50</td>
      <td class="text-center" multiplier>2.50</td>
      <td>
        <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove10Base10" no-label
          prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove10Base" suffix="0"
          event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
        </cn2-textbox>
      </td>
      <td>
        <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore1010" no-label
          prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore10" suffix="0"  b3-totals disabled>
        </cn2-textbox>
      </td>
      </tr>
        <tr>
          <td rowspan="4" class="text-center">13.4</td>
          <td rowspan="4">Repetition of PPVC modules (See Note B.1)
          </td>
          <td class="text-center">≥80 Repetitions</td>
          <td class="text-center" multiplier>4.00</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore3Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">70 to 79 Repetitions</td>
          <td class="text-center" multiplier>3.00</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove4Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore4Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">60 to 69 Repetitions</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove5Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore5Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore5Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">50 to 59 Repetitions</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove6Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore6Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="text-center">13.5</td>
          <td rowspan="2">Repetition of PBU modules (See Note B.7)</td>
          <td class="text-center">≥40 Repetitions</td>
          <td class="text-center" multiplier>3.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>  
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove7Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore7Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <40 Repetitions</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>3.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuPercCove8Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_ModuBScore8Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>14</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION</b></td>
        </tr>
        <tr>
          <td class="text-center">14.1</td>
          <td>Industry standardised door structural openings (3 most common size in 0.5M)
            <b>(All projects excluding Residential Non-landed)</b></td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore1Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">14.2</td>
          <td>Industry standardised prefabricated bathroom / toilet units (3 most common sizes) (See Note
            B.7)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore2Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">14.3</td>
          <td>Windows (3 most common sizes in 1M)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.00</td>
          <td class="text-center" multiplier>2.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_InduStanBScore3Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>15</b></td>
          <td colspan="6"><b>OTHERS</b></td>
        </tr>
        <tr>
          <td class="text-center">15.1</td>
          <td>Prefabricated Kitchen Unit (PKU) accepted by Building Innovation Panel (BIP)<br />
            <cn2-textbox placeholder="e.g. To state PKU system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBase" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitPercCoveBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitPercCoveBase" suffix="0" 
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePrefKitcUnitBScoreBase" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-center">15.2</td>
          <td>Pole system wardrobe / Modular kitchen cabinets<br />
            <cn2-textbox placeholder="e.g. To state system" id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBase" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>2.50</td>
          <td class="text-center" multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystPercCoveBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystPercCoveBase" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OthePoleSystBScoreBase" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>16</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>16.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst6Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit6Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove6Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove6Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove6Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore6Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore6Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>16.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst7Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit7Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove7Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove7Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove7Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore7Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore7Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>16.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSyst8Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystUnit8Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc1Cove8Base" suffix="0"
              event-blur="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc2Cove8Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystPerc3Cove8Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore8Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystBScore8Base" suffix="0" b3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total B5 + B6</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OtheSystTotaBScoreBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2">Unit</td>
          <td colspan="2" width="30%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>
            <30% </td>
          <td>≥ 30%</td>
        </tr>
        <tr>
          <td><b>B7</b></td>
          <td colspan="6"><b>DEMERIT POINTS</b></td>
        </tr>
        <tr>
          <td>17.1</td>
          <td>Cast in-situ floor with transfer beam / cantilever transfer beam</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore1Base" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>17.2</td>
          <td>Inclined columns</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore2Base" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>17.3</td>
          <td>Non-functional void on slab (if applicable, demerit point is -1)</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>-1.00</td>
          <td class="text-center" multiplier>-1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '1-29.999:30-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinBScore3Base" suffix="0" b4-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total B7 (Max -4 pts)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_DemePoinTotaBScore1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total for architectural system (B = B1 + B2 + B3 + B4 + B5 +
              B6 + B7)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_ArchSyst_OverallTotaBScoreBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>C. MEP SYSTEM &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <span mepSystPoints>Maximum 15 points</span></h2>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2">Description</td>
          <td>Allocated points (a)</td>
          <td>Total Qualifying Area (m<sup>2</sup>)</td>
          <td>Prefabricated Area (m<sup>2</sup>)</td>
          <td width="15%">% of Coverage</td>
          <td width="15%">B-Score<br/>(a) x (b)</td>
        </tr>
        <tr>
          <td><b>C1</b></td>
          <td colspan="6"><b>DfMA MEP SYSTEM (See Note B.8)</b></td>
        </tr>
        <tr>
          <td><b>1</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SYSTEM</b></td>
        </tr>
        <tr>
          <td>1.1</td>
          <td>Prefabricated Prefinished Volumetric Construction (PPVC) (See Note B.1)</td>
          <td class="text-center" MEPValue multiplier>15.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISTotaQualAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISTotaQualAreaBase" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPrefAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPrefAreaBase" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISBScoreBase" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>2</b></td>
          <td colspan="6"><b>FULLY INTEGRATED SUB-ASSEMBLIES</b></td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Prefabricated MEP modules integrated with structural or architectural system</td>
          <td class="text-center" MEPValue multiplier>12.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISATotaQualAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISATotaQualAreaBase" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPrefAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPrefAreaBase" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISAPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISABScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_FISABScoreBase" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>3</b></td>
          <td colspan="6"><b>ADVANCED PREFAB SYSTEMS</b></td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Prefabricated MEP vertical modules</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea1Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea1Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore1Base" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>3.2</td>
          <td>Prefabricated MEP horizontal modules</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea2Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea2Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore2Base" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>3.3</td>
          <td>Prefabricated MEP plant module</td>
          <td class="text-center" MEPValue multiplier>4.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea3Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-1', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualArea', '2:2');" 
              compute-mep-1>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPrefArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSTotaQualArea3Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" event-input="computeTotalTable(this, 'compute-mep-2', 'CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefArea', '2:2');" 
              compute-mep-2>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSPercArea3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_APSBScore3Base" suffix="0" c1-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="3"><b>Total C1</b>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaQualAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPrefAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPercAreaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaPercAreaBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore1Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>C2</b></td>
          <td colspan="6"><b>DfMA MEP COMPONENTS</b></td>
        </tr>
        <tr>
          <td><b>4</b></td>
          <td colspan="6"><b>PREFABRICATED COMPONENTS</b></td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Flexible sprinkler dropper</td>
          <td class="text-center">Nos.</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore1Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Flexible water pipes</td>
          <td class="text-center">Nos.</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore2Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Common M&E bracket (at least 3 M&E services)</td>
          <td class="text-center">Length</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore3Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Pre-insulated mechanical piping e.g. chilled water pipes</td>
          <td class="text-center">Length</td>
          <td class="text-center">-</td>
          <td class="text-center" MEPValue multiplier>1.50</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabPercCove4Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore4Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_PrefFabBScore4Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td><b>5</b></td>
          <td colspan="6"><b>OTHER SYSTEM NOT LISTED ABOVE (Please seek BCA's advice on
              the points to be allocated)</b></td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst1Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit1Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove1Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove1Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore1Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst2Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit2Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove2Base" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove2Base" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore2Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>5.3</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSyst3Base" suffix="0" dont-centerbox>
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystUnit3Base" suffix="0">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc1Cove3Base" suffix="0"
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc2Cove3Base" suffix="0" 
              event-change="formatDecimal(this, '2');" currency maxlength="6" onblur="percentChoice(this, '2', '65-79.999:80-100', 'label');">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystPerc3Cove3Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_OtheSystBScore3Base" suffix="0" c2-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total C2</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore2Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
      <tbody>
        <tr style="font-weight: bold;" class="text-center">
          <td colspan="2" rowspan="2">Description</td>
          <td rowspan="2" width="10%">Unit</td>
          <td colspan="2" width="20%">Percentage of Coverage</td>
          <td rowspan="2">% of Coverage</td>
          <td rowspan="2" width="15%">B-Score</td>
        </tr>
        <tr style="font-weight: bold;" class="text-center">
          <td>≥65% to <80% </td>
          <td>≥80%</td>
        </tr>
        <tr>
          <td><b>C3</b></td>
          <td colspan="6"><b>INDUSTRY STANDARDIZATION AND OTHERS</b></td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>Mechanical connection for prefabricated MEP modules</td>
          <td class="text-center">Area</td>
          <td class="text-center" multiplier>1.00</td>
          <td class="text-center" multiplier>2.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove1Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore1Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore1Base" suffix="0" c3-totals disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>Industry standardized prefabricated pump skids for water and firefighting services</td>
          <td class="text-center">Nos.</td>
          <td class="text-center" multiplier>0.50</td>
          <td class="text-center" multiplier>1.00</td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanPercCove2Base" suffix="0"
              event-blur="percentChoice(this, '2', '65-79.999:80-100'); formatDecimal(this, '2');" currency maxlength="6">
            </cn2-textbox>
          </td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore2Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_InduStanBScore2Base" suffix="0" c3-totals disabled>
            </cn2-textbox>
          </td>
        <tr>
          <td colspan="6" class="text-right"><b>Total C3</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore3Base10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaBScore3Base" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-right"><b>Total for MEP system (C = C1 + C2 + C3)</b></td>
          <td>
            <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScoreBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_MEPSyst_TotaMEPSystBScoreBase" suffix="0" disabled>
            </cn2-textbox>
          </td>
        </tr>

        <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h2>D. INNOVATION AND OTHERS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span name="innoSystPoints">Maximum 20 points</span></h2>
        <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr style="font-weight: bold;" class="text-center">
              <td colspan="2">Description</td>
              <td width="20%">Unit</td>
              <td width="10%">Points</td>
              <td width="10%">% of Coverage</td>
              <td width="10%">B-Score</td>
            </tr>
            <tr>
              <td><b>D1</b></td>
              <td colspan="5"><b>INNOVATIVE SYSTEM (Please seek BCA's advice on the points
                  to be allocated)</b></td>
            </tr>
            <tr>
              <td>1.1</td>
              <td>
                <cn2-textbox placeholder="e.g. Prefabricated organic components - precast wavy façade" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst1Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst1Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit1Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit1Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints1Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints1Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); computeFloorArea(this, '1:1', 'none');">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove1Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove1Base" suffix="0"
                  event-change="formatDecimal(this, '2');" currency maxlength="6">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore1Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore1Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>
                <cn2-textbox placeholder="e.g. Prefabricated Kitchen Unit (PKU) or Prefabricated Common Toilet (PCT)" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst2Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst2Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit2Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit2Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints2Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints2Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove2Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove2Base" suffix="0"
                  event-change="formatDecimal(this, '2');percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore2Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore2Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.3</td>
              <td>
                <cn2-textbox placeholder="e.g. High-strength / lightweight materials - high strength steel reinforcement" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst3Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst3Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit3Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit3Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints3Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints3Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove3Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove3Base" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore3Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore3Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.4</td>
              <td>
                <cn2-textbox placeholder="e.g. Innovative structural connections (See Note C.1)" id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst4Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst4Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit4Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit4Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints4Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints4Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove4Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove4Base" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore4Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore4Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst5Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst5Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit5Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit5Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints5Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints5Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove5Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove5Base" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore5Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore5Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>1.6</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst6Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSyst6Base" suffix="0" dont-centerbox>
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit6Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystUnit6Base" suffix="0">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints6Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPoints6Base" suffix="0"
                  event-blur="formatDecimal(this, '2'); percentDsection(this, 'label')">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove6Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystPercCove6Base" suffix="0"
                  event-change="formatDecimal(this, '2'); percentDsection(this)">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore6Base10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_InnoSystBScore6Base" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td><b>D2</b></td>
              <td colspan="5"><b>OTHERS</b></td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>
                Prefab components / PPVC / PBU / MEP accredited under PAS / MAS
              </td>
              <td>
                <cn2-select id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheUnitBase10" no-label event-change = "prefabComponentChange(this)"
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheUnitBase" suffix="0" options="No PAS/MAS:No PAS/MAS,PAS - Prefab Components:PAS - Prefab Components,MAS - PPVC:MAS - PPVC,
                           MAS - PBU:MAS - PBU,MAS - Prefab MEP:MAS - Prefab MEP">
                </cn2-select>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePointsBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePointsBase" suffix="0" disabled
                  event-blur="formatDecimal(this, '2'); computeFloorArea(this, '1:1', 'none');">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePercCoveBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OthePercCoveBase" suffix="0"
                  event-change="formatDecimal(this, '2');" currency maxlength="6">
                </cn2-textbox>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheBScoreBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_OtheBScoreBase" suffix="0"  d1-totals disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right"><b>Total for Innovations system and others (D)</b></td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScoreBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_InnoOthe_TotaInnoOtheBScoreBase" suffix="0" disabled>
                </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right"><b>Total B-Score (A + B + C + D) (out of 120 points)</b>
              </td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_TotaBScoreBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_TotaBScoreBase" suffix="0" disabled>
                </cn2-textbox>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table class="table table-borderless" style="margin-top: 0px; margin-bottom: 30px;">
          <tbody>
            <tr>
              <td width="20%"><b>Prefabrication Level(%)</b></td>
              <td width="11%"></td>
              <td width="11%"></td>
              <td width="15%" class="text-center">To input additional prefab level % if system is not listed</td>
              <td width="11%"></td>
              <td width="11%"></td>
            </tr>
            <tr>
              <td>(a) Structural System</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystBase" suffix="0" disabled>
                </cn2-textbox>
              </td>
              <td class="text-center">+</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystBase110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst1Base" 
              event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTota')"
              event-change="formatDecimal(this, '2');" currency maxlength="6"
              suffix="0">
              </cn2-textbox>
              </td>
              <td class="text-center">=</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTotaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_StruSystTotaBase" suffix="0" disabled>
              </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>(b) Architectural System</td>
              <td>
                <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystBase10" no-label
                  prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystBase" suffix="0"
                  disabled>
                </cn2-textbox>
              </td>
              <td class="text-center">+</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystBase110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst1Base" 
              event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTota')"
              event-change="formatDecimal(this, '2');" currency maxlength="6"
              suffix="0">
              </cn2-textbox>
              </td>
              <td class="text-center">=</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTotaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_ArchSystTotaBase" suffix="0" disabled>
              </cn2-textbox>
              </td>
            </tr>
            <tr>
              <td>(c) MEP System</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystBase" suffix="0" disabled>
              </cn2-textbox>
              </td>
              <td class="text-center">+</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystBase110" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst1Base" 
              event-input= "preFabLvlCompute(this, 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSyst', 'CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTota')"
              event-change="formatDecimal(this, '2');" currency maxlength="6"
              suffix="0">
              </cn2-textbox>
              </td>
              <td class="text-center">=</td>
              <td>
              <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTotaBase10" no-label
              prefix="CalcOfOverBuil_CompOfBuilDesi_PrefLeve_MEPSystTotaBase" suffix="0" disabled>
              </cn2-textbox>
              </td>
            </tr>
          </tbody>
        </table>
         </div>
       </div>
    </div>`;

  if (type == "1st")
    document.querySelector(`[block-page="01"]`).innerHTML = xmlStringSuper;
  if (type == "2nd")
    document.querySelector(`[block-page="B01"]`).innerHTML = xmlStringBase;
}

function updatesRenderComputationPages(el) {
  let div = document.getElementById(el.getAttribute("target"));
  el.setAttribute("rendered", "");
  for (let a of div.querySelectorAll("[id]")) {
    if (jsonData[a.id] !== undefined) {
      a.value = jsonData[a.id];
      if (!(a.hasAttribute("proj-ref-no") || a.hasAttribute("page-block-no")))
        a.setAttribute("default-instance", jsonData[a.id]);
    }
  }

  // setting all td cells to "align-middle"
  for (let a of div.querySelectorAll("td")) {
    if (!a.className.includes("align-")) a.classList.add("align-middle");
  }

  // setting multiplier attribute to blue
  for (let a of div.querySelectorAll("[multiplier]")) {
    a.style.color = "blue";
    a.style.fontWeight = "bold";
  }

  // setting the text-align of some textboxes to center
  for (let a of div.querySelectorAll("[center-textbox]")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let a of div.querySelectorAll("cn2-textbox")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let a of div.querySelectorAll("td")) {
    a.setAttribute("page-owner", el.getAttribute("target"));
  }

  // putting the events for decimal formatting
  for (let a of div.querySelectorAll("[decimal-format]")) {
    a.setAttribute("event-blur", "displayZero(this);");
    a.setAttribute(
      "event-input",
      "decimalFormat(this, event); computeSub(this);"
    );
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  // for renaming the block no./name
  for (let a of div.querySelectorAll("[page-block-no]")) {
    if (a.hasAttribute("id")) {
      a.setAttribute("event-blur", "changeBlockNo(this);");
    }
  }

  let spanNo = document.querySelectorAll("[bsCop]")

  if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true) {
    for (let a of spanNo) {
      a.innerHTML = "14"
    }
  } else {
    for (let a of spanNo) {
      a.innerHTML = "B"
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
