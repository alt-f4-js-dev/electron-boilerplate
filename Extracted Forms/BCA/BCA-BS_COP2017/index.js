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

  for (let a of document.querySelectorAll("[name='appTypeRadio']")) {
    if (a.checked == true) {
      lastAppType = document.getElementById(a.id).getAttribute("app-type")
    }
  }

  for (let a of document.querySelectorAll("[center-textbox]")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let a of document.querySelectorAll("[block-page]")) {
    for (let b of a.querySelectorAll("cn2-textbox")) {
      if (!b.hasAttribute("dont-centerbox")) {
        b.shadowRoot.querySelector("input").style.textAlign = "center";
      }
    }
  }
  // only do this function on the first load of the form
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    document.getElementById("PartOfAppl_Bs01_Cop10").click();
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

  for (let addBtn of document.querySelectorAll("[prefix = 'TypiBlockAdd']")) {
    let tabPage = findBlock(document.getElementById(addBtn.id))
    for (let a of document.querySelectorAll("[typical-block-list]")) {
      a.addEventListener("click", (event) => {
        if (
          tabPage
            .querySelector("[prefix='TypiBlockSave']")
            .hasAttribute("disabled")
        ) {
          if (
            tabPage
              .querySelector("[prefix='TypiBlockRemove']")
              .hasAttribute("disabled")
          )
            tabPage
              .querySelector("[prefix='TypiBlockRemove']")
              .removeAttribute("disabled");
          if (
            tabPage
              .querySelector("[prefix='TypiBlockEdit']")
              .hasAttribute("disabled")
          )
            tabPage
              .querySelector("[prefix='TypiBlockEdit']")
              .removeAttribute("disabled");
        } else {
          tabPage
            .querySelector("[prefix='TypiBlockRemove']")
            .setAttribute("disabled", "");
          tabPage
            .querySelector("[prefix='TypiBlockEdit']")
            .setAttribute("disabled", "");
        }
      });
    }
  }

  for (let addBaseBtn of document.querySelectorAll("[prefix = 'TypiBlockAddBase']")) {
    let tabBasePage = findBlock(document.getElementById(addBaseBtn.id))
    for (let a of document.querySelectorAll("[typical-block-list]")) {
      a.addEventListener("click", (event) => {
        if (
          tabBasePage
            .querySelector("[prefix='TypiBlockSave" + "Base" + "']")
            .hasAttribute("disabled")
        ) {
          if (
            tabBasePage
              .querySelector("[prefix='TypiBlockRemove" + "Base" + "']")
              .hasAttribute("disabled")
          )
            tabBasePage
              .querySelector("[prefix='TypiBlockRemove" + "Base" + "']")
              .removeAttribute("disabled");
          if (
            tabBasePage
              .querySelector("[prefix='TypiBlockEdit" + "Base" + "']")
              .hasAttribute("disabled")
          )
            tabBasePage
              .querySelector("[prefix='TypiBlockEdit" + "Base" + "']")
              .removeAttribute("disabled");
        } else {
          tabBasePage
            .querySelector("[prefix='TypiBlockRemove" + "Base" + "']")
            .setAttribute("disabled", "");
          tabBasePage
            .querySelector("[prefix='TypiBlockEdit" + "Base" + "']")
            .setAttribute("disabled", "");
        }
      });
    }
  }

  for (let blckchildTR of document.querySelectorAll("[blockchildtr]")) {
    for (let a of blckchildTR.querySelectorAll("cn2-textbox")) {
      a.shadowRoot.querySelector("input").style.textAlign =
        "center";
      a.shadowRoot.querySelector("input").style.color = "green";
    }
  }

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
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
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

function PartOfAppl_change(element) {
  let particularsBS01BS02 = document.getElementById("particularsBS01BS02");
  let particularsBS03 = document.getElementById("particularsBS03");
  let particularsBS01 = document.querySelectorAll("#particularsBS01");
  let particularsBS02 = document.querySelectorAll("#particularsBS02");

  particularsBS01BS02.setAttribute("hidden", "");
  particularsBS03.setAttribute("hidden", "");
  for (let i = 0; i < particularsBS01.length; i++) {
    particularsBS01[i].setAttribute("hidden", "");
  }
  for (let i = 0; i < particularsBS02.length; i++) {
    particularsBS02[i].setAttribute("hidden", "");
  }
  toggleParticularsBS03(false);
  switch (element.id) {
    case "PartOfAppl_Bs01_Cop10":
      particularsBS01BS02.removeAttribute("hidden");
      for (let i = 0; i < particularsBS01.length; i++) {
        particularsBS01[i].removeAttribute("hidden", "");
      }
      break;
    case "PartOfAppl_Bs02_Cop10":
      particularsBS01BS02.removeAttribute("hidden");
      for (let i = 0; i < particularsBS02.length; i++) {
        particularsBS02[i].removeAttribute("hidden", "");
      }
      break;
    case "PartOfAppl_Bs03_Cop10":
      particularsBS03.removeAttribute("hidden");
      toggleParticularsBS03(true);
      break;
  }
}

function toggleParticularsBS03(condition) {
  let radios = [
    document.getElementById("PartOfAppl_BuildDesiScorSupe20"),
    document.getElementById("PartOfAppl_BuilDesiScorDiff20"),
  ];
  if (condition == true) {
    for (r of radios) {
      r.setAttribute("mandatory", "");
      r.setAttribute("checked", "");
    }
  } else {
    for (r of radios) {
      r.removeAttribute("mandatory");
      r.removeAttribute("checked");
    }
  }
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
    document.getElementById("qpDecla").innerHTML = "Qualified Persons"
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
    //document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");
  } else if (appTypeVal == "bs02") {
    document.getElementById("qpDecla").innerHTML = "Qualified Person"
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
    //document.querySelector("[app-type-bs-01-03]").setAttribute("hidden", "");
  } else if (appTypeVal == "bs03") {
    document.getElementById("qpDecla").innerHTML = "Qualified Persons"
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
    //document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");
  }

  //resseting block page when changing application type
  if (lastAppType != "" && lastAppType != appTypeVal) {
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
        } else if (textSS.hasAttribute("default-instance")) {
          if (textSS.id != "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD310" && textSS.id != "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA310") {
            textSS.setAttribute("default-instance", "0.00")
            textSS.value = "0.00"
            jsonData[textSS.id] = textSS.value
          } else {
            textSS.setAttribute("default-instance", "")
            textSS.value = ""
            jsonData[textSS.id] = textSS.value
          }
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
        } else if (textBase.hasAttribute("default-instance")) {
          if (textBase.id != "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD3Base10" && textBase.id != "CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA3Base10") {
            textBase.setAttribute("default-instance", "0.00")
            textBase.value = "0.00"
            jsonData[textBase.id] = textBase.value
          } else {
            textBase.setAttribute("default-instance", "")
            textBase.value = ""
            jsonData[textBase.id] = textBase.value
          }
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
    if (document.getElementById("page6").innerHTML != "" || document.getElementById("page7").innerHTML != "") {
      if (lastTextbox != undefined) {
        if (lastTextbox.hasAttribute("event-input"))
          lastTextbox.shadowRoot.querySelector("input").oninput();
        if (lastTextbox.hasAttribute("event-blur"))
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
      document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE20").value = ""
      document.getElementById("CalcOfOverBuil_ProjDetl_ProjSubmOutcPropE20").removeAttribute("mandatory")
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
    // if (document.getElementById("page6").innerHTML != "" && document.getElementById("page7").innerHTML != "") {
    //   validateProjectDetailsPage();
    // }


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

    document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteStruc").value = ""
    document.getElementById("CalcOfOverBuil_ProjDetl_PrefLeveForDeveOnIGLSSiteWall").value = ""

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_BlkNm10").value = "01"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_BlkNm10").value = "B01"

    document.getElementById("PartOfAppl_BuilDesiScorSame10").value = "0"
    document.getElementById("PartOfAppl_BuilDesiScorDiff10").value = "0"

    document.getElementById("PartOfAppl_BuildDesiScorSupe10").value = "0"
    document.getElementById("PartOfAppl_BuildDesiScorBase10").value = "0"

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
    document.getElementById("deleteBlockBase10").setAttribute("blockowner", "B01")

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
  }
  appTypeChanged(appTypeVal);
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
    let formName = ["BCA-BS01_COP2017", "BCA-BS02_COP2017", "BCA-BS03_COP2017"];
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

    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_FlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_PercOfFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaPercFlooArea10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10").value = "0"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_BuilDesiScor10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_AppoBuilDesiScor10").value = "0.00"
    document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaAppoBuil10").value = "0.00"
  }
}

// for validating if all mandatory fields in page5 is filled up
function validateProjectDetailsPage() {
  let noRequired = true;
  let totalGFA = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorRequ10").value;
  stopHere: for (let a of document
    .getElementById("gfaContainer")
    .querySelectorAll("cn2-textbox, cn2-checkbox, input[type='radio']")) {
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
}

// when one of the four development options radio is selected in page 7
function devOptions() {
  // removing checked and mandatory attribute when atleast one radio is selected
  for (let a of document.querySelectorAll('[name="devRadio"]')) {
    if (a.hasAttribute("checked")) a.removeAttribute("checked");
    if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
  }

  validateProjectDetailsPage();
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
    ).innerHTML = `PART IV : Computation of Buildable Design Score - ${counterLabel}`;
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
            .setAttribute("label", "" + el.value);
          document.querySelector("h2[raw]").innerHTML =
            "PART IV : Computation of Buildable Design Score - " + el.value;
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
      newTDBlock.setAttribute("width", "16%");
      newTDBlock.style.marginTop = "0px";
      newTDBlock.style.marginBottom = "0px";
      newTDBlock.style.marginLeft = "0px";
      newTDBlock.style.marginRight = "0px";
      newTDBlock.appendChild(newCN2Textbox1);

      let newTDArea = document.createElement("td");
      newTDArea.setAttribute("width", "16%");
      newTDArea.style.marginTop = "0px";
      newTDArea.style.marginBottom = "0px";
      newTDArea.style.marginLeft = "0px";
      newTDArea.style.marginRight = "0px";
      newTDArea.appendChild(newCN2Textbox2);
      //newTDArea.appendChild(newCN2Textbox2Span);

      let newTDPercent = document.createElement("td");
      let newTDPercentSymbol = document.createElement("span");
      newTDPercent.setAttribute("width", "16%");
      newTDPercent.classList.add("text-left");
      newTDPercent.style.marginTop = "0px";
      newTDPercent.style.marginBottom = "0px";
      newTDPercent.style.marginLeft = "0px";
      newTDPercent.style.marginRight = "0px";
      newTDPercent.appendChild(newCN2Textbox3);
      newTDPercent.appendChild(newTDPercentSymbol);

      let newTDBDS = document.createElement("td");
      newTDBDS.setAttribute("width", "16%");
      newTDBDS.style.marginTop = "0px";
      newTDBDS.style.marginBottom = "0px";
      newTDBDS.style.marginLeft = "0px";
      newTDBDS.style.marginRight = "0px";
      newTDBDS.appendChild(newCN2Textbox4);

      let newTDABDS = document.createElement("td");
      newTDABDS.setAttribute("width", "16%");
      newTDABDS.style.marginTop = "0px";
      newTDABDS.style.marginBottom = "0px";
      newTDABDS.style.marginLeft = "0px";
      newTDABDS.style.marginRight = "0px";
      newTDABDS.appendChild(newCN2Textbox5);

      let newTDDel = document.createElement("td");
      newTDDel.setAttribute("width", "16%");
      newTDDel.style.marginTop = "0px";
      newTDDel.style.marginBottom = "0px";
      newTDDel.style.marginLeft = "0px";
      newTDDel.style.marginRight = "0px";

      newTR.appendChild(newTDBlock);
      newTR.appendChild(newTDArea);
      newTR.appendChild(newTDPercent);
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
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1" +
    prefix +
    "']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1" +
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
  let allBDS = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo" + prefix + "']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo" + prefix + "']"
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
    .querySelector("[percent-floor]")
    .setAttribute("raw-value", perFloorAreaRaw);
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[bds]").value = allBDS;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]").value = perallBDS;
  con
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]")
    .setAttribute("raw-value", perallBDSRaw);

  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[floor]")) {
      b.value = allFloorArea;
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[percent-floor]")) {
      b.value = perFloorArea;
      b.setAttribute("raw-value", perFloorAreaRaw);
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[bds]")) {
      b.value = allBDS;
      b.setAttribute("raw-value", allBDS);
    }
  }
  for (let a of con.querySelectorAll("[blockchildtr='" + masterBlock + "']")) {
    for (let b of a.querySelectorAll("[abds]")) {
      b.value = perallBDS;
      b.setAttribute("raw-value", perallBDSRaw);
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
  let totalABDSField = con.querySelector("[total-abds]");
  let totalABDSRoundedField = con.querySelector("[total-abds-rounded]");
  let total =
    con.id == "basementContainer"
      ? "page4-totalbasebds"
      : "page4-totalsuperbds";
  let page4TotalABDSRoundedField = document.querySelectorAll(`[${total}]`);
  let totalArea = [...con.querySelectorAll("[floor]")]
    .filter((a) => !isNaN(parseFloat(a.value)))
    .map((a) => parseFloat(a.value))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  let totalABDS = [...con.querySelectorAll("[abds]")]
    .filter((a) => !isNaN(parseFloat(a.getAttribute("raw-value"))))
    .map((a) => parseFloat(a.getAttribute("raw-value")))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  totalAreaField.value = !isNaN(parseFloat(totalArea))
    ? parseFloat(totalArea).toFixed(2)
    : "0.00";
  totalPercentField.value =
    parseFloat(totalArea) != 0 && !isNaN(parseFloat(totalArea))
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
    findTR(a).querySelector("[percent-floor]").removeAttribute("raw-value")
    findTR(a).querySelector("[percent-floor]").value = !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2)
    findTR(a).querySelector("[percent-floor]").setAttribute("raw-value", !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2))
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

  if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true || document.getElementById("PartOfAppl_Bs02_Cop10").checked == true) {
    document.getElementById("PartOfAppl_BuilDesiScorSame10").value = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10").value
    document.getElementById("PartOfAppl_BuilDesiScorDiff10").value = document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10").value
    document.getElementById("PartOfAppl_BuildDesiScorSupe10").value = "0"
    document.getElementById("PartOfAppl_BuildDesiScorBase10").value = "0"
  } else {
    document.getElementById("PartOfAppl_BuildDesiScorSupe10").value = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10").value
    document.getElementById("PartOfAppl_BuildDesiScorBase10").value = document.getElementById("CalcOfOverBuil_BuilDesiScoreSummBase_TotaBuilDesiScorForThisProj10").value
    document.getElementById("PartOfAppl_BuilDesiScorSame10").value = "0"
    document.getElementById("PartOfAppl_BuilDesiScorDiff10").value = "0"
  }

  minimumBuildDesignScoreSuper();
  minimumBuildDesignScoreBasement();
}

// computing SS
function computeTotalTable(el, type, totalField, pattern) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  totalField = totalField + prefix;
  if (pattern == "1:2") {
    let table = findTable(document.getElementById(el.id));
    let totalTable = [...table.querySelectorAll("[" + type + "]")].reduce(
      (a, b) => {
        let newA = !isNaN(parseFloat(a.value)) ? parseFloat(a.value) : 0;
        let newB = !isNaN(parseFloat(b.value)) ? parseFloat(b.value) : 0;
        return a + (newA + newB);
      },
      0
    );

    table.querySelector("[table-total]").value = !isNaN(totalTable.toFixed(2))
      ? totalTable.toFixed(2)
      : "";

    computeFloorArea(el, pattern);
  } else if (pattern == "2:2") {
    let page = findBlock(document.getElementById(el.id));
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

    combineTwoSub(el);
  }
}

// computing floor area
function computeFloorArea(el, pattern, range) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  function run(el) {
    let page = findBlock(document.getElementById(el.id));
    let totalFieldSS = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1" +
      prefix +
      "']"
    );
    let totalFieldSSPercent = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl2" +
      prefix +
      "']"
    );

    // for computing the percent
    let subTotalsList = [
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot3" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA3" +
        prefix +
        "']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB3" +
        prefix +
        "']"
      ).value,
    ];
    let subTotals = 0;

    // getting the sum
    for (let a of subTotalsList) {
      !isNaN(parseFloat(a)) ? (subTotals += parseFloat(a)) : (subTotals += 0); // validation
    }
    subTotals.toFixed(2)
      ? (totalFieldSS.value = subTotals.toFixed(2))
      : (totalFieldSS.value = "");
    subTotals > 0
      ? (totalFieldSSPercent.value = "100%")
      : (totalFieldSSPercent.value = "");

    computeRows(el, pattern);
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

      BDS_SS_A4(el);
    }
  } else {
    run(el);
  }
}

// for computation per row
function computeRows(el, pattern, isPercent) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let total = parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1" +
      prefix +
      "']"
    ).value
  );
  switch (pattern) {
    case "1:2":
      for (let a of page.querySelectorAll("[compute-ss]")) {
        let percentVal = 0;
        let row = findTR(document.getElementById(a.id));
        let field = document.getElementById(
          row.lastElementChild.previousElementSibling.querySelector(
            "cn2-textbox"
          ).id
        );

        percentVal = parseFloat(a.value / total) * 100;
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
        let row = findTR(document.getElementById(a.id));
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

        let percentVal = parseFloat(a.value) / total;
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
      }
      BDS_SS_A1(el);
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
      let totalBoth = parseFloat(
        page.querySelector(
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4" +
          prefix +
          "']"
        ).value
      );
      for (let a of page.querySelectorAll(
        "[compute-wall-1], [compute-wall-2]"
      )) {
        let row = findTR(document.getElementById(a.id));
        let percentVal = 0;
        let firstField = 0;
        if (row.querySelector("[compute-wall-1]")) {
          firstField = parseFloat(row.querySelector("[compute-wall-1]").value)
            ? parseFloat(row.querySelector("[compute-wall-1]").value).toFixed(2)
            : 0;
        }
        let secondField = 0;
        if (row.querySelector("[compute-wall-2]")) {
          secondField = parseFloat(row.querySelector("[compute-wall-2]").value)
            ? parseFloat(row.querySelector("[compute-wall-2]").value).toFixed(2)
            : 0;
        }
        let sum = parseFloat(firstField) + parseFloat(secondField);
        let field = document.getElementById(
          row.lastElementChild.previousElementSibling.querySelector(
            "cn2-textbox"
          ).id
        );

        percentVal = parseFloat(sum / totalBoth) * 100;
        field.setAttribute("raw-value", percentVal);
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
        let index = a.id.slice(-2);
        if (a.id == "CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1" + prefix + index) {
          brickwallCalculation(document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1" + prefix + index), !isNaN(percentVal) ? percentVal : 0)
        } else if (a.id == "CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2" + prefix + index) {
          brickwallCalculation(document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2" + prefix + index), !isNaN(percentVal) ? percentVal : 0)
        }
      }
      for (let a of page.querySelectorAll(
        "[compute-wall-1], [compute-wall-2]"
      )) {
        let row = findTR(document.getElementById(a.id));
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
        let percentValRaw = document
          .getElementById(
            row.lastElementChild.previousElementSibling.querySelector(
              "cn2-textbox"
            ).id
          )
          .getAttribute("raw-value");

        let percentVal = parseFloat(percentValRaw) / 100;
        let product = parseFloat(percentVal * multiplier * 40);
        field.setAttribute("raw-value", product);

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

      BDS_WS_B1(el);
      BDS_WS_B2(el);
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
          BDS_SS_A4(el);
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
  }
}

// for combining the two subtotals
function combineTwoSub(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let sumOne = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1" +
    prefix +
    "']"
  ).value;
  sumOne == ""
    ? (page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1" +
      prefix +
      "']"
    ).value = "0.00")
    : "";
  let sumTwo = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2" +
    prefix +
    "']"
  ).value;
  sumTwo == ""
    ? (page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2" +
      prefix +
      "']"
    ).value = "0.00")
    : "";
  let sumField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4" +
    prefix +
    "']"
  );
  let sumFieldPercent = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng3" +
    prefix +
    "']"
  );

  let formattedA1 = !isNaN(parseFloat(sumOne)) ? parseFloat(sumOne) : 0;
  let formattedA2 = !isNaN(parseFloat(sumTwo)) ? parseFloat(sumTwo) : 0;
  let sum = formattedA1 + formattedA2;

  !isNaN(parseFloat(sum))
    ? (sumField.value = parseFloat(sum).toFixed(2))
    : (sumField.value = "");
  sum > 0 ? (sumFieldPercent.value = "100%") : (sumFieldPercent.value = "");

  computeRows(el, "2:2");
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
    } else if (20 <= percentVal) {
      points = 0.0;
    }
    if (totalVoid >= 1 && totalVoid <= 9) {
      totalField.value = ""
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

  BDS_WS_B2(el);
  //BDS_WS_B4(el);
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
  BDS_WS_B4(el);
  BDS_SS_A4(el);

  BLK_BLK_A1(el);
  BLK_BLK_A2(el);
  BLK_BLK_A3(el);
  BLK_BLK_A4(el);
  BLK_BLK_A5(el);

  BDS_BLK(el);


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
      document
        .getElementById(el.id)
        .shadowRoot.querySelector("input")
        .focus();
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

  BDS_WS_B5_1(el);
  BDS_BLK(el);
}

// for computing SS A1 BDS
function BDS_SS_A1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru" +
    prefix +
    "']"
  );
  let ssTotal = [];
  for (let a of page.querySelectorAll("[a1-totals]")) {
    if (!ssTotal.includes(a.getAttribute("a1-totals")))
      ssTotal.push(a.getAttribute("a1-totals"));
  }

  let total = 0;
  for (let a of ssTotal) {
    let subTotal = [];
    for (let b of page.querySelectorAll(`[a1-totals='${a}']`)) {
      if (!isNaN(parseFloat(b.getAttribute("raw-value"))))
        subTotal.push(parseFloat(b.getAttribute("raw-value")));
    }
    total += parseFloat(
      subTotal.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    );
  }

  totalField.setAttribute("raw-value", total);
  totalField.value = total.toFixed(2);

  BDS_SS_A3(el);
}

// for computing SS A2 BDS
function BDS_SS_A2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein" + prefix + "']"
  );
  let ssTotal = [];
  for (let a of page.querySelectorAll("[a2-totals]")) {
    if (!ssTotal.includes(a.getAttribute("a2-totals")))
      ssTotal.push(a.getAttribute("a2-totals"));
  }

  let total = 0;
  for (let a of ssTotal) {
    let subTotal = [];
    for (let b of page.querySelectorAll(`[a2-totals='${a}']`)) {
      if (
        !isNaN(parseFloat(b.getAttribute("raw-value"))) &&
        b.getAttribute("raw-value") != ""
      )
        subTotal.push(parseFloat(b.getAttribute("raw-value")));
    }
    total += parseFloat(
      subTotal.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    );
  }

  totalField.setAttribute("raw-value", total);
  if (total > 5) {
    totalField.value = parseFloat(5).toFixed(2);
  } else {
    totalField.value = total.toFixed(2);
  }

  BDS_SS_A3(el);
}

// for computing SS A3 BDS
function BDS_SS_A3(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSyst" + prefix + "']"
  );
  let a1Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru" +
    prefix +
    "']"
  ).value;
  let a2Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein" + prefix + "']"
  ).value;

  let formattedA1 = !isNaN(parseFloat(a1Field)) ? parseFloat(a1Field) : 0;
  let formattedA2 = !isNaN(parseFloat(a2Field)) ? parseFloat(a2Field) : 0;
  let sum = formattedA1 + formattedA2;
  let total = "";
  totalField.setAttribute("raw-value", sum);
  !isNaN(parseFloat(sum)) ? (total = parseFloat(sum).toFixed(2)) : (total = "");

  if (total > 45) {
    totalField.value = parseFloat(45).toFixed(2);
  } else {
    totalField.value = parseFloat(total).toFixed(2);
  }
  BDS_SS(el);
}

// for computing SS A4 BDS
function BDS_SS_A4(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS" + prefix + "']"
  );
  let ssTotal = [];
  for (let a of page.querySelectorAll("[a4-totals]")) {
    if (!ssTotal.includes(a.getAttribute("a4-totals")))
      ssTotal.push(a.getAttribute("a4-totals"));
  }

  let total = 0;
  for (let a of ssTotal) {
    let subTotal = [];
    for (let b of page.querySelectorAll(`[a4-totals='${a}']`)) {
      if (!isNaN(parseFloat(b.value))) subTotal.push(parseFloat(b.value));
    }
    total += parseFloat(
      subTotal.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    );
  }

  let formattedTotal = 0;
  if (total > 5) {
    formattedTotal = 5;
  } else {
    formattedTotal = total;
  }

  totalField.setAttribute("raw-value", formattedTotal);
  totalField.value = formattedTotal.toFixed(2);

  BDS_SS(el);
}

// for computing overall SS
function BDS_SS(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaSS" + prefix + "']"
  );
  let fields = page.querySelectorAll("[page-ss]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru" +
    prefix +
    "']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein" + prefix + "']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS" + prefix + "']"
  ).value;

  let formattedA1 = !isNaN(parseFloat(field1)) ? parseFloat(field1) : 0;
  let formattedA2 = !isNaN(parseFloat(field2)) ? parseFloat(field2) : 0;
  let formattedA3 = !isNaN(parseFloat(field3)) ? parseFloat(field3) : 0;
  let sum = formattedA1 + formattedA2 + formattedA3;

  let formattedTotal = 0;
  if (sum > 45) {
    formattedTotal = 45;
  } else {
    formattedTotal = sum;
  }

  !isNaN(parseFloat(formattedTotal))
    ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
    : (totalField.value = "");
  !isNaN(parseFloat(formattedTotal))
    ? totalField.setAttribute("raw-value", formattedTotal)
    : totalField.setAttribute("raw-value", "");
  for (let a of fields) {
    !isNaN(parseFloat(formattedTotal))
      ? (a.value = parseFloat(formattedTotal).toFixed(2))
      : (a.value = "");
  }

  BDS_Total(el);
}

// for computing WS B1 BDS
function BDS_WS_B1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1" +
    prefix +
    "']"
  );
  let ssTotal = [];
  for (let a of page.querySelectorAll("[b1-totals]")) {
    if (!ssTotal.includes(a.getAttribute("b1-totals")))
      ssTotal.push(a.getAttribute("b1-totals"));
  }

  let total = 0;
  for (let a of ssTotal) {
    let subTotal = [];
    for (let b of page.querySelectorAll(`[b1-totals='${a}']`)) {
      if (!isNaN(parseFloat(b.getAttribute("raw-value"))))
        subTotal.push(parseFloat(b.getAttribute("raw-value")));
    }
    total += parseFloat(
      subTotal.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    );
  }

  totalField.setAttribute("raw-value", total);
  totalField.value = total.toFixed(2);

  BDS_WS_B3(el);
}

// for computing WS B2 BDS
function BDS_WS_B2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn" +
    prefix +
    "']"
  );
  let b1Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig3" +
    prefix +
    "']"
  ).value;
  let b2Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA3" +
    prefix +
    "']"
  ).value;

  let formattedB1 = !isNaN(parseFloat(b1Field)) ? parseFloat(b1Field) : 0;
  let formattedB2 = !isNaN(parseFloat(b2Field)) ? parseFloat(b2Field) : 0;
  let sum = formattedB1 + formattedB2;
  let total = "";
  totalField.setAttribute("raw-value", sum);
  !isNaN(parseFloat(sum)) ? (total = parseFloat(sum).toFixed(2)) : (total = "");

  if (total > 5) {
    totalField.value = parseFloat(5).toFixed(2);
  } else {
    totalField.value = parseFloat(total).toFixed(2);
  }
  BDS_WS_B3(el);
  BDS_WS(el);
}

// for computing WS B3 BDS
function BDS_WS_B3(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB2" +
    prefix +
    "']"
  );
  let b1Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1" +
    prefix +
    "']"
  ).value;
  let b2Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn" +
    prefix +
    "']"
  ).value;
  let formattedB1 = !isNaN(parseFloat(b1Field)) ? parseFloat(b1Field) : 0;
  let formattedB2 = !isNaN(parseFloat(b2Field)) ? parseFloat(b2Field) : 0;
  let sum = formattedB1 + formattedB2;
  let total = "";
  totalField.setAttribute("raw-value", sum);
  !isNaN(parseFloat(sum)) ? (total = parseFloat(sum).toFixed(2)) : (total = "");

  if (total > 45) {
    totalField.value = parseFloat(45).toFixed(2);
  } else {
    totalField.value = parseFloat(total).toFixed(2);
  }

  BDS_WS(el);
}

// for computing WS B4 BDS
function BDS_WS_B4(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let c3TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesi" +
    prefix +
    "']"
  );

  let c3Total = 0;
  let subC3Total = [];
  for (let b of page.querySelectorAll(`[b4-totals]`)) {
    if (!isNaN(parseFloat(b.value)) && b.value != "")
      subC3Total.push(parseFloat(b.value));
  }
  c3Total += parseFloat(
    subC3Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedC3Total = 0;
  if (c3Total > 5) {
    formattedC3Total = 5;
  } else {
    formattedC3Total = c3Total;
  }

  c3TotalField.setAttribute("raw-value", formattedC3Total);
  c3TotalField.value = formattedC3Total.toFixed(2);

  BDS_WS(el);
}


// for computing WS B5_1 BDS
function BDS_WS_B5_1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let c3TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts" + prefix + "']"
  );

  let c3Total = 0;
  let subC3Total = [];
  for (let b of page.querySelectorAll(`[c3-totals]`)) {
    if (
      !isNaN(parseFloat(b.getAttribute("raw-value"))) &&
      b.getAttribute("raw-value") != ""
    )
      subC3Total.push(parseFloat(b.getAttribute("raw-value")));
  }
  c3Total += parseFloat(
    subC3Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedC3Total = 0;
  if (c3Total < -5) {
    formattedC3Total = -5;
  } else {
    formattedC3Total = c3Total;
  }

  c3TotalField.setAttribute("raw-value", formattedC3Total);
  c3TotalField.value = formattedC3Total.toFixed(2);

  BDS_WS_B5(el);
}

function BDS_WS_B5(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let total = 0;
  let field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts" +
    prefix +
    "']"
  );
  let first = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts" +
      prefix +
      "']"
    ).value)) ? parseFloat(
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts" +
        prefix +
        "']"
      ).value).toFixed(2) : 0.00;

  let second = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" + prefix + "']"
    ).value
  )) ? parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" + prefix + "']"
    ).value
  ).toFixed(2) : 0.00;

  let third = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" + prefix + "']"
    ).value
  )) ? parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" + prefix + "']"
    ).value
  ).toFixed(2) : 0.00;

  if (first < 0) {
    first = -Math.abs(first);
  }
  if (second < 0) {
    second = -Math.abs(second);
  }
  if (third < 0) {
    third = -Math.abs(third);
  }

  total = parseFloat(first) + parseFloat(second) + parseFloat(third);
  field.setAttribute("raw-value", total);
  field.value = !isNaN(total) ? parseFloat(total).toFixed(2) : 0.0;

  BDS_WS(el);
}

// for computing BLK C1
function BLK_BLK_A1(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let a1SubTotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA1" +
    prefix +
    "']"
  );

  let a1Total = 0;
  let subA1Total = [];
  for (let b of page.querySelectorAll(`[c1-subtotal]`)) {
    if (!isNaN(parseFloat(b.value))) subA1Total.push(parseFloat(b.value));
  }
  a1Total += parseFloat(
    subA1Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedA1Total = 0;
  formattedA1Total = a1Total;
  a1SubTotalField.setAttribute("raw-value", formattedA1Total);
  a1SubTotalField.value = formattedA1Total.toFixed(2);
}

// for computing BLK C2
function BLK_BLK_A2(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let a2SubTotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA2" +
    prefix +
    "']"
  );

  let a2Total = 0;
  let subA2Total = [];
  for (let b of page.querySelectorAll(`[c2-subtotal]`)) {
    if (!isNaN(parseFloat(b.value))) subA2Total.push(parseFloat(b.value));
  }
  a2Total += parseFloat(
    subA2Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedA2Total = 0;
  formattedA2Total = a2Total;

  a2SubTotalField.setAttribute("raw-value", formattedA2Total);
  a2SubTotalField.value = formattedA2Total.toFixed(2);
}

// for computing BLK C3
function BLK_BLK_A3(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let a3SubTotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA3" +
    prefix +
    "']"
  );

  let a3Total = 0;
  let subA3Total = [];
  for (let b of page.querySelectorAll(`[c3-subtotal]`)) {
    if (!isNaN(parseFloat(b.value))) subA3Total.push(parseFloat(b.value));
  }
  a3Total += parseFloat(
    subA3Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedA3Total = 0;
  formattedA3Total = a3Total;

  a3SubTotalField.setAttribute("raw-value", formattedA3Total);
  a3SubTotalField.value = formattedA3Total.toFixed(2);
}

// for computing BLK C4
function BLK_BLK_A4(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let a4SubTotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA4" +
    prefix +
    "']"
  );

  let a4Total = 0;
  let subA4Total = [];
  for (let b of page.querySelectorAll(`[c4-subtotal]`)) {
    if (!isNaN(parseFloat(b.value))) subA4Total.push(parseFloat(b.value));
  }
  a4Total += parseFloat(
    subA4Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedA4Total = 0;
  formattedA4Total = a4Total;

  a4SubTotalField.setAttribute("raw-value", formattedA4Total);
  a4SubTotalField.value = formattedA4Total.toFixed(2);
}

// for computing BLK C5
function BLK_BLK_A5(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let a5SubTotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA5" +
    prefix +
    "']"
  );

  let a5Total = 0;
  let subA5Total = [];
  for (let b of page.querySelectorAll(`[c5-subtotal]`)) {
    if (!isNaN(parseFloat(b.value))) subA5Total.push(parseFloat(b.value));
  }
  a5Total += parseFloat(
    subA5Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedA5Total = 0;
  formattedA5Total = a5Total;
  a5SubTotalField.setAttribute("raw-value", formattedA5Total);
  a5SubTotalField.value = formattedA5Total.toFixed(2);
}

// for computing WS B5 BDS
function BDS_WS(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota" + prefix + "']"
  );
  let fields = page.querySelectorAll("[page-ws]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB2" +
    prefix +
    "']"
  ).value; //B3
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesi" +
    prefix +
    "']"
  ).value; //B4
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts" +
    prefix +
    "']"
  ).value; //B5

  let formattedA1 = !isNaN(parseFloat(field1)) ? parseFloat(field1) : 0;
  let formattedA2 = !isNaN(parseFloat(field2)) ? parseFloat(field2) : 0;
  let formattedA3 = !isNaN(parseFloat(field3)) ? parseFloat(field3) : 0;
  let sum = formattedA1 + formattedA2 + formattedA3;

  let formattedTotal = 0;
  if (sum > 45) {
    formattedTotal = 45;
  } else {
    formattedTotal = sum;
  }

  !isNaN(parseFloat(formattedTotal))
    ? (totalField.value = parseFloat(formattedTotal).toFixed(2))
    : (totalField.value = "");
  !isNaN(parseFloat(formattedTotal))
    ? totalField.setAttribute(
      "raw-value",
      parseFloat(formattedTotal).toFixed(2)
    )
    : totalField.setAttribute("raw-value", "");
  for (let a of fields) {
    !isNaN(parseFloat(formattedTotal))
      ? (a.value = parseFloat(formattedTotal).toFixed(2))
      : (a.value = "");
  }

  BDS_Total(el);
}

// for computing BLK BDS
function BDS_BLK(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let fields = page.querySelectorAll("[page-bf]");
  let prefixes = [
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA1",
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA2",
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA3",
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA4",
    "CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA5"
  ];

  let total = 0;
  for (let a of prefixes) {
    let val = page
      .querySelector("[prefix='" + a + prefix + "']")
      .value
    total += !isNaN(parseFloat(val)) ? parseFloat(val) : 0.0;
  }

  let formatted = total;
  if (total > 20) {
    formatted = 20;
  } else {
    formatted = total;
  }

  // page
  //   .querySelector(
  //     "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6" +
  //     prefix +
  //     "']"
  //   )
  //   .setAttribute("raw-value", formatted);
  page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6" +
    prefix +
    "']"
  ).value = formatted.toFixed(2);

  for (let a of fields) {
    !isNaN(parseFloat(formatted))
      ? (a.value = parseFloat(formatted).toFixed(2))
      : (a.value = "");
  }
  BDS_Total(el);
}

// for computing BDS
function BDS_Total(el) {
  let prefix = isBasePage(document.getElementById(el.id)) ? "Base" : "";
  let page = findBlock(document.getElementById(el.id));
  let fields = page.querySelectorAll("[page-blk]");
  let tempRawValues = [
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaSS" + prefix + "']"
      ).value,
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota" +
        prefix +
        "']"
      ).value,
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6" +
        prefix +
        "']"
      ).value
  ];

  let filteredRawValues = tempRawValues
    .filter(a => a != "")
    .filter(a => !isNaN(parseFloat(a)));
  let rawValues = filteredRawValues.map(a => parseFloat(a));

  let total = parseFloat(rawValues.reduce((a, b) => a + b, 0));

  for (let a of fields) {
    !isNaN(parseFloat(total))
      ? (a.value = parseFloat(total).toFixed(2))
      : (a.value = "");
  }

  let formatted = total;
  if (total > 110) formatted = 110;

  page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA7" +
    prefix +
    "']"
  ).value = !isNaN(parseFloat(formatted))
      ? parseFloat(formatted).toFixed(2)
      : "";

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
  // let existingVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10").value;
  // let newWorkVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_NewWork10").value;

  let totalGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_TotaGfa10"
  ).value;

  let values = {
    0: [0, 73, 78, 81],
    1: [0, 57, 57, 57],
    2: [0, 80, 85, 88],
    3: [0, 60, 60, 60],
    4: [0, 82, 87, 90],
    5: [0, 62, 62, 62],
    6: [0, 82, 87, 90],
    7: [0, 62, 62, 62],
    8: [0, 73, 79, 82],
    9: [0, 60, 60, 60],
    10: [0, 77, 82, 85],
    11: [0, 60, 60, 60]
  };
  let total = 0;
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
        } else if (parsed >= 2000 && parsed < 5000) {
          index = 1;
        } else if (parsed >= 5000 && parsed < 25000) {
          index = 2;
        } else if (parsed >= 25000) {
          index = 3;
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
      } else {
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
        } else {
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

function renderComputationPages(type) {
  let xmlStringSuper = `<div class="mls-espo-right-inner-container borderchecking">
  <h2 raw="PART IV : Computation of Buildable Design Score - ">
      PART IV : Computation of Buildable Design Score - 01
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
                          <cn2-button id="closeTypicalBlockBtn10" prefix="closeTypicalBlockBtn"
                              suffix="0" event-click="hideAddBlock(this);"
                              label="&nbsp;&nbsp;Close&nbsp;&nbsp;" danger close-this="close">
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
                          <cn2-textbox id="TypiBlocNoName10" dont-centerbox
                              prefix="TypiBlocNoName" suffix="0" no-label>
                          </cn2-textbox>
                      </td>
                      <td class="text-center">
                          <cn2-button id="TypiBlockAdd10" prefix="TypiBlockAdd" suffix="0"
                              label="&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;"
                              event-click="addToTheList(this);">
                          </cn2-button>
                      </td>
                  </tr>
                  <tr>
                      <td rowspan="2" style="vertical-align: top !important;">
                          Existing Block No./Name
                      </td>
                      <td class="text-left" typical-block-list
                          style="vertical-align: top !important;" rowspan="2">
                          <div class="list-group" id="list-tab10" prefix="list-tab"
                              field="list-tab" suffix="0" role="tablist"></div>
                      </td>
                      <td class="text-center" style="vertical-align: top !important;">
                          <cn2-button danger prefix="TypiBlockRemove" suffix="0"
                              id="TypiBlockRemove10" label="Remove" disabled
                              event-click="removeFromTheList(this);"></cn2-button>
                          <br />
                          <br />
                          <cn2-button buttons-id prefix="TypiBlockEdit" suffix="0"
                              id="TypiBlockEdit10" disabled
                              label="&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;"
                              event-click="editFromTheList(this);">
                          </cn2-button>
                          <br />
                          <br />
                          <cn2-button buttons-id prefix="TypiBlockSave" suffix="0"
                              id="TypiBlockSave10" disabled
                              label="&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;"
                              event-click="saveToTheList(this);">
                          </cn2-button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- ALL Application Types -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id="9-1"
          non-typical-modal>
          <table class="table table-borderless mb-10">
              <tbody>
                  <tr>
                      <td colspan="3"></td>
                      <td class="text-center">
                          <b> SS </b>
                      </td>
                      <td class="text-center">
                          <b> WS </b>
                      </td>
                      <td class="text-center">
                          <b> BF </b>
                      </td>
                      <td class="text-center">
                          <b> BLK </b>
                      </td>
                  </tr>
                  <tr>
                      <td width="200px">
                          Project Reference No. :
                      </td>
                      <td width="200px">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNo10"
                              no-label proj-ref-no
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNo" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <h3>BS</h3>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Ss10" no-label
                              page-ss prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Ss"
                              suffix="0" disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Ws10" no-label
                              page-ws prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Ws"
                              suffix="0" disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Bf10" no-label
                              page-bf prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Bf"
                              suffix="0" disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo10"
                              no-label page-blk
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Block No./Name :
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Blk10" no-label
                              page-block-no-default
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_Blk" suffix="0"
                              page-block-no>
                          </cn2-textbox>
                      </td>
                      <td></td>
                      <td colspan="3" class="text-left">
                          Please indicate other typical blocks (if any) :
                      </td>
                      <td class="text-right">
                          <cn2-button id="addTypicalBlockBtn10" prefix="addTypicalBlockBtn"
                              suffix="0" event-click="showAddBlock(this);" label="Add"
                              style="width: 100%;">
                          </cn2-button>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="5">Structural System</td>
                      <td width="15%">Labour Saving Index<br>(a)</td>
                      <td width="15%">Area (m<sup>2</sup>)<br>(b)</td>
                      <td width="15%">% Area<br>(c)</td>
                      <td width="15%">
                          Buildable Design Score <br />
                          (a) x (c) x 45
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">1.</td>
                      <td colspan="8" class="text-left">
                          PRECAST CONCRETE SYSTEM
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="11"></td>
                      <td width="1%"><b> 1.1 </b></td>
                      <td width="1%">&nbsp;</td>
                      <td colspan="2" class="text-left">Full Precast</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.2 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat plate and perimeter
                          beams (beam depth ≤ 600mm)
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.2 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat plate and perimeter
                          beams (beam depth > 600mm)
                      </td>
                      <td multiplier>0.80</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat slab and perimeter beams
                          (beam depth ≤ 600mm)
                      </td>
                      <td multiplier>0.85</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.3 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat slab and perimeter beams
                          (beam depth > 600mm)
                      </td>
                      <td multiplier>0.75</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.4 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast beam and precast slab
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.5 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast beam and precast column/wall
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.6 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall and precast slab
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.7 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast slab only
                      </td>
                      <td multiplier>0.70</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.8 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall only
                      </td>
                      <td multiplier>0.70</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Precast Concrete System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">2</td>
                      <td colspan="8" class="text-left">
                          STRUCTURAL STEEL SYSTEM (applicable only if steel
                          decking or precast slab is adopted)<sup>see Note 1</sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td width="1%" colspan="2"><b> 2.1 </b></td>
                      <td colspan="2" class="text-left">
                          Steel beam and steel column (without concrete
                          encasement)
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%" colspan="2"><b> 2.2 </b></td>
                      <td colspan="2" class="text-left">
                          Steel beam and steel column (with concrete encasement)
                      </td>
                      <td multiplier width="15%">0.95</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Structural Steel System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">3.</td>
                      <td colspan="8" class="text-left">
                          CAST IN-SITU SYSTEM
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7"></td>
                      <td width="1%"><b> 3.1 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Flat plate with perimeter beams (beam depth &le; 600mm)
                      </td>
                      <td multiplier width="15%">0.85</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.1 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Flat plate with perimeter beams (beam depth > 600mm)
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.2 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Flat slab with perimeter beams (beam depth &le; 600mm)
                      </td>
                      <td multiplier width="15%">0.80</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.2 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Flat slab with perimeter beams (beam depth > 600mm)
                      </td>
                      <td multiplier width="15%">0.70</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.3 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          One-directional beam
                      </td>
                      <td multiplier width="15%">0.70</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.4 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Two-directional beam
                      </td>
                      <td multiplier width="15%">0.45</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Cast In-Situ System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">4.</td>
                      <td colspan="7" class="text-left">ROOF SYSTEM (for superstructure block
                          only)</td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="6"></td>
                      <td width="1%"><b> 4.1 </b></td>
                      <td colspan="2" class="text-left">
                          Integrated metal roof on steel truss
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.2 </b></td>
                      <td colspan="2" class="text-left">
                          Metal roof on steel truss or timber truss
                      </td>
                      <td multiplier width="15%">0.95</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.3 </b></td>
                      <td colspan="2" class="text-left">
                          Tiled roof on steel beam or precast concrete beam or
                          timber beam
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.4 </b></td>
                      <td colspan="2" class="text-left">
                          Metal roof on cast in-situ beam
                      </td>
                      <td multiplier width="15%">0.60</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.5 </b></td>
                      <td colspan="2" class="text-left">
                          Tiled roof with cast in-situ beam
                      </td>
                      <td multiplier width="15%">0.55</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD110"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="4">
                          <b> Sub Total Area for Roof System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">5.</td>
                      <td colspan="7" class="text-left">
                          OTHER STRUCTURAL SYSTEMS NOT LISTED IN BDAS (Please
                          seek BCA’s advice on the LSI before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="4"></td>
                      <td width="1%"><b> 5.1 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot110" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot210"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot2"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot310"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot3"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot4"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot5"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 5.2 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA110" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA210"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA2"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA310"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA3"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA4"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA5"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 5.3 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB110" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB210"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB2"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB310"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB3"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB4"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB5"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td class="text-right" colspan="4">
                          <b> Total floor area including roof area </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr class="text-center">
                      <td class="text-right">
                          <b> Sub-total for Structural System (A1) </b>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">6.</td>
                      <td colspan="2" class="text-left">
                          PREFABRICATED REINFORCEMENT IN CAST IN-SITU COMPONENTS
                      </td>
                      <td width="15%">Labour Saving Index (a)</td>
                      <td width="15%">Percentage of Coverage (b)</td>
                      <td width="15%">
                          Buildable Design Score (a) x (b) X 45
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 6.1 </b></td>
                      <td class="text-left" style="background-color: yellow;">
                          Floor mesh - in areas (≥ 65%) <sup>see Note 2</sup> <br> <i>(mandatory
                              for all developments)</i>
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn110"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn1"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="5"></td>
                      <td width="1%"><b> 6.2 </b></td>
                      <td class="text-left">
                          Beam cage / Continuous stirrup - in nos. (only accept
                          cages from factory)
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA110"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA1"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 6.3 </b></td>
                      <td class="text-left">
                          Column cage / Continuous stirrup - in nos.
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB110"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB1"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 6.4 </b></td>
                      <td class="text-left">
                          Wall mesh - in nos.
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC110"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC1"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for prefabricated reinforcement (A2) <br>
                              (maximum 5 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for Structural System A3 = A1 + A2 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSyst10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSyst"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">7.</td>
                      <td colspan="4" rowspan="2" class="text-left">MANDATORY ITEMS</td>
                      <td width="15%" colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 65% to < 80%</b> </td> <td class="text-center">
                                  <b>≥ 80%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="1" style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 7.1 </b></td>
                      <td class="text-left" colspan="3" style="background-color: yellow;">
                          Precast household shelters - in nos. <br> <i>(mandatory for residential
                              non-landed projects) <sup>see Note 3</sup></i>
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPnts110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPnts1" suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');dataValidation(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPnts210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPnts2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">8.</td>
                      <td colspan="4" rowspan="2" class="text-left">STANDARDISATION &
                          REPETITION
                      </td>
                      <td colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td width="1%"><b> 8.1 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Columns (3 most common sizes in module of 0.5M)- in nos.
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 8.2 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Beams (3 most common sizes in module of 0.5M)- in nos.
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">

                      <td width="1%"><b> 8.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td class="text-left" colspan="2">
                          Vertical repetition of structural floor layout - in areas (For
                          blocks
                          more than 6 storey)
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> OR </b></td>
                      <td width="1%"><b> 8.3 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td class="text-left" colspan="2">
                          Vertical repetition of structural floor layout - in areas (For
                          blocks up
                          to 6 storey)
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">9.</td>
                      <td colspan="3" rowspan="2" class="text-left">OTHERS</td>
                      <td colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7">&nbsp;</td>
                      <td width="1%"><b> 9.1 </b></td>
                      <td class="text-left" colspan="2">
                          Precast meter chambers(for residential landed developments) -in
                          nos.
                      </td>
                      <td multiplier width="15%">0.50</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.2 </b></td>
                      <td class="text-left" colspan="2">
                          Prefabricated MEP rises - in nos.
                      </td>
                      <td multiplier width="15%">0.50</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.3 </b></td>
                      <td class="text-left" colspan="2">
                          Single floor level without drops/kerbs within apartment unit
                          (e.g. at
                          kitchen, toilets) - in nos.
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG1" suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4">&nbsp;</td>
                      <td class="text-center"><b>Direct Points Awarded</b></td>
                      <td class="text-center"><b>Percentage of Coverage</b></td>
                      <td class="text-center"><b>Buildable Design Score</b></td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.4 </b></td>
                      <td class="text-left" colspan="3">
                          High strength concrete <br> (≥ Grade 70, at least 5%) <sup><i>see Note
                                  4</i></sup>
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH1" suffix="0"
                              event-blur="ifGreaterThan(this, '4.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.5 </b></td>
                      <td class="text-left" colspan="3">
                          Self compacing concrete (≥ 30%)<sup><i>see Note 5</i></sup>
                      </td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI1" suffix="0"
                              event-blur="ifGreaterThan(this, '29.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.6 </b></td>
                      <td class="text-left" colspan="3">
                          Diaphragm wall <br> (≥ 65% length of basement permanent
                          retaining
                          wall) <sup><i>see Note 6</i></sup>
                      </td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ110" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ1" suffix="0"
                              event-blur="ifGreaterThan(this, '64.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ2" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">10.</td>
                      <td colspan="5" class="text-left" colspan="2">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek
                          BCA’s advice before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="5"></td>
                      <td width="1%"><b> 10.1 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot110" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot2"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot310"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot3" suffix="0"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot4"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 10.2 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA110" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA2"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA310"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA3" suffix="0"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA4"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 10.3 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB110" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB2"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB310"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB3" suffix="0"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB4"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for mandatory items, standardisation & repetition and
                              others (A4) <br />
                              (maximum 5 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Total for Structural System A = A3 + A4 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaSS10" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaSS" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="6"
                          style="border-left: none; border-right: none; border-bottom: none;">
                          <p style="font-style: italic;">
                              All notes to refer to Explanatory Notes under
                              Structural System.
                          </p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!--  Application Type = BS01_COP(SEP2013) and BS03_COP(SEP2013) -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bs-01-03 id="9-2"
          non-typical-modal>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
              <tr style="font-weight: bold;" class="text-center">
                      <td colspan="5">Wall System</td>
                      <td width="1%">Labour Saving Index <br> (a)</td>
                      <td width="15%">
                          External Wall Length (m<sup>2</sup>) <br> (b)
                      </td>
                      <td width="15%">Internal Wall Length (m) <br> (c)</td>
                      <td width="15%">% Length (External + Internal) <br> (d)</td>
                      <td width="15%">
                          Buildable Design Score <br />
                          (a) x (d) x 40
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">1.</td>
                      <td colspan="9" class="text-left">
                          MANDATORY ITEMS
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 1.1 </b></td>
                      <td colspan="3" class="text-left" style="background-color: yellow;">
                          Drywall Partition for all internal dry areas (exclude partywall/ toilet
                          wall/ kitchen wall) <br>
                          <i>(applicable for residential non-landed projects only)</i> <sup><i>see
                                  Note 7</i></sup>
                      </td>
                      <td multiplier>1.00</td>
                      <td style="background-color: grey;">
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">2.</td>
                      <td colspan="9" class="text-left">
                          CURTAIN WALL/FULL HEIGHT GLASS PARTITION/DRY PARTITION
                          WALL/PREFABRICATED RAILING
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="4"></td>
                      <td width="1%"><b> 2.1 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Curtain Wall / Full Height Glass Partition
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.2 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Prefabricated Railing
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Drywall Partition <sup><i>see Note 7</i></sup>
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.3 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Drywall Partition with tile/stone finishes <sup><i>see Note 7</i></sup>
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td >3.</td>
                      <td colspan="9" class="text-left">
                          PRECAST CONCRETE WALL
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 3.1 </b></td>
                      <td colspan="3" class="text-left">Off-form (external walls and columns only)
                      </td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td  style="background-color: grey;">
                          &nbsp;
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 3.2 </b></td>
                      <td colspan="3" class="text-left">
                          With skin coat
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 3.3 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.60</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >4.</td>
                      <td colspan="9" class="text-left">
                          LIGHTWEIGHT CONCRETE PANEL <sup><i>see Note 8</i></sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td ><b> 4.1 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.85</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 4.2 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.55</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td >5.</td>
                      <td colspan="9" class="text-left">
                          CAST IN-SITU RC WALL
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 5.1 </b></td>
                      <td colspan="3" class="text-left">Off-form (external walls and columns only)
                      </td>
                      <td multiplier >0.95</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1X10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1X"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td  style="background-color: grey;">
                          &nbsp;
                          <!-- <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2X10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2X"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox> -->
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3X10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3X"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4X10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4X"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 5.2 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.80</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 5.3 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >6.</td>
                      <td colspan="9" class="text-left">
                          PRECISION BLOCKWALL <sup><i>see Note 9</i></sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td ><b> 6.1 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.30</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 6.2 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.10</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >7.</td>
                      <td colspan="9" class="text-left">
                          BRICKWALL / BLOCKWALL
                      </td>
                  </tr>
                  <tr class="text-center" wall-item-7>
                      <td></td>
                      <td ><b> 7.1 </b></td>
                      <td colspan="3" class="text-left">
                          With or without plastering (to include the length if used) <sup><i>see
                                  Note 10</i></sup>
                      </td>
                      <td multiplier  style="background-color: grey;">&nbsp;</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk3"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk4"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >8.</td>
                      <td colspan="9" class="text-left">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek
                          BCA's advice on the LSI before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 8.1 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys110" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2"
                              suffix="0"
                              event-blur="computeFloorArea(this, '2:2', '0.00-1.00'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys3"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys4"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys5"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys610"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys6"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 8.2 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA110" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier width="10%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              event-blur="formatDecimal(this, '2');" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA3"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA4"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA5"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA610"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA6"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 8.3 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB110" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier width="10%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB2"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              event-blur="formatDecimal(this, '2');" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB3"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB4"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB510"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB5"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB610"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB6"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right" rowspan="2">
                          <b>
                              Total Wall Length (External Wall Length <br />
                              and Internal Wall Length)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td rowspan="2">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td rowspan="2"></td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="2">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng410"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="9" class="text-right">
                          <b> Sub-total for Wall System (B1) </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">9.</td>
                      <td colspan="3" class="text-left">
                          SIMPLE DESIGN
                      </td>
                      <td width="15%">Direct Points Awarded</td>
                      <td width="15%">Total height of all voids (m)</td>
                      <td width="15%">Total height of Building (m)</td>
                      <td width="15%">
                          Scenario based on Max Offset (m) OR % of Offset floors
                          in Table B
                      </td>
                      <td width="15%">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td width="1%"><b> 9.1 </b></td>
                      <td colspan="2" class="text-left">
                          Design without high voids
                      </td>
                      <td multiplier style="font-weight: bold;">
                          See Table A
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig1"
                              suffix="0" event-input="blockPageWallTable9(this, 'firstRow');"
                              compute-wall-9_1
                              event-blur="ifGreaterThan(this, '9', 'range'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig2"
                              suffix="0" event-input="blockPageWallTable9(this, 'firstRow');"
                              compute-wall-9_2 event-blur="formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <b>N.A.</b>
                      </td>
                      <td>
                          <cn2-textbox b2-totals="1"
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.2 </b></td>
                      <td colspan="2" class="text-left">
                          Design without complex form
                      </td>
                      <td multiplier style="font-weight: bold;">
                          See Table B
                      </td>
                      <td>
                          <b>N.A.</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA1"
                              suffix="0" event-input="blockPageWallTable9(this, 'secondRow');"
                              compute-wall-9_1 event-blur="formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA2"
                              suffix="0"
                              event-blur="blockPageWallTable9(this, 'secondRow'); formatDecimal(this, '2');"
                              compute-wall-9_2 maxlength="1" numeric>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox b2-totals="1"
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA310"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="8" class="text-right">
                          <b> Sub-total for simple design (B2) <br>
                              (maximum 5 points)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="8" class="text-right">
                          <b>
                              Total for Wall System B3 = B1 + B2 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB2"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td rowspan="2">10.</td>
                      <td width = "35%" colspan="4" rowspan="2" class="text-left">MANDATORY ITEMS</td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center" width = "10%"><b>≥ 70% to < 90%</b> </td> <td class="text-center" width = "10%">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7" style="background-color: yellow;"></td>
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (a) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 2.8m, 2.975m, 3.15m, 3.3m, 3.5m,
                          or 3.6m height <br> <i>(applicable for residential non-landed projects
                              only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (b) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 4.025m, 4.2m, 4.375m, 4.5m,
                          4.55m, 4.725m, 4.8m, or 4.9m height <br> <i>(applicable for office
                              projects only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (c) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 3.15m, 3.3m, 3.325m, 3.45m, 3.5m,
                          or 3.6m height <br> <i>(applicable for hotel projects only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.2 </b></td>
                      <td  style="background-color: yellow;">&nbsp;</td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard door structural openings (width) -in nos. <br> <i>(applicable
                              for residential non-landed projects only)</i> <sup><i>see Note
                                  11</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.50</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeC', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1C'], '11.2 and/or 12.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.3 </b></td>
                      <td  style="background-color: yellow;">&nbsp;</td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast refuse chutes - in nos. <br> <i>(applicable for
                              residential non-landed projects only)</i> <sup><i>see Note
                                  12</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1E'], '12.3')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.4 </b></td>
                      <td  style="background-color: yellow;"><b> (a) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast staircase of riser height of 150mm or 175mm & tread
                          width of 275mm or 300mm for typical storeys - in nos. <br>
                          <i>(applicable for all developments except industrial buildings)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI1'], '10.4(b)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.4 </b></td>
                      <td  style="background-color: yellow;"><b> (b) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast staircase of riser height of 150mm or 175mm & tread
                          width of 250mm, 275mm or 300mm for typical storeys - in nos. <br>
                          <i>(applicable for all industrial buildings only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI110"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH1'], '10.4(a)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI210"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI2"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td  rowspan="2">11.</td>
                      <td colspan="4" rowspan="2" class="text-left">STANDARDISATION AND REPETITION
                      </td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td  colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 11.1 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Windows (3 most common sizes) - in nos.
                      </td>
                      <td class="text-center"><b>1M/1M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeA10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeA"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeB10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeB"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 11.2 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Door structural openings (width) (3 most common sizes) - in nos.</i>
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeC10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeC"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1'], '10.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeD10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeD"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 11.3 </b></td>
                      <td ><b> (a) </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of floor-to-floor height - in nos. (For blocks more than 6
                          storey)
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c) and/or 11.3(b)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> OR </b></td>
                      <td ><b> 11.3 </b></td>
                      <td ><b> (b) </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of floor-to-floor height - in nos. (For blocks up to 6
                          storey)
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c) and/or 11.3(a)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeG10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeG"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td >&nbsp;</td>
                      <td ><b> 11.4 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of horizontal grids - in nos.
                      </td>
                      <td class="text-center"><b>6M</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeH10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeH"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeI10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeI"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td  rowspan="2">12.</td>
                      <td colspan="4" rowspan="2" class="text-left">OTHERS</td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td  colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 65% to < 80%</b> </td> <td class="text-center">
                                  <b>≥ 80%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="9"></td>
                      <td ><b> 12.1 </b></td>
                      <td class="text-left" colspan="3">
                          Typical storeys standardised to either 2.8m, 2.975m, 3.15m, 3.3m,
                          3.325m, 3.45m,
                          3.5m, 3.6m, 4.025m, 4.2m, 4.375m, 4.5m, 4.55m, 4.725m, 4.8m or 4.9m
                          height and
                          with precast staircase of riser height of 150mm or 175mm & tread width
                          of 250mm or
                          275mm

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1B10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1B"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.2 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised door structural openings - in nos <sup><i>see Note
                                  11</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.50</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1C10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1C"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1'], '10.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1D10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1D"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.3 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised precast refuse chutes - in nos <sup><i>see Note
                                  12</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1E10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1E"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG1'], '10.3');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1F10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1F"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.4 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised precast household shelters (3 most common sizes) -
                          in nos. <sup><i>see Note 13</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1G"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');dataValidation(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1H10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1H"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.5 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised prefabricated bathroom/toilet units (3 most common
                          sizes) - in nos. <sup><i>see Note 14</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1I10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1I"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1J10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1J"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.6 </b></td>
                      <td class="text-left" colspan="3">
                          Drywall for party wall - in nos. <br><i>(applicable for residential
                              projects
                              only)</i>

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >2.00</td>
                      <td multiplier >4.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1K10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1K"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1L10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1L"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.7 </b></td>
                      <td class="text-left" colspan="3">
                          Drywall for wet areas (kitchens and toilets) - in nos.
                          <br><i>(applicable
                              for residential projects only)</i>

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >3.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1M10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1K"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1N10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1L"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.8 </b></td>
                      <td class="text-left" colspan="3">
                          Engineered timber flooring, carpet, vinyl, raised floor and engineered
                          stone flooring finishes - in areas
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier ></td>
                      <td multiplier >0.50</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1O10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1O"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1P10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1P"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.9 </b></td>
                      <td class="text-left" colspan="3">
                          Power float concrete floor
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier ></td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1Q10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1Q"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1R10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1R"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td >13.</td>
                      <td colspan="9" class="text-left">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek BCA’s advice
                          before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 13.1 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA10"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysC10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysC"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysD10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysD"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysE10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysE"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 13.2 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1A10"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1A"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1B10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1B"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1C10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1C"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1D10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1D"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1E10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1E"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 13.3 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2A10"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2A"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1B20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2B"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1C20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2C"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1D20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2D"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1E20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2E"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>

                  <tr class="text-center">
                      <td colspan="9" class="text-right">
                          <b> Sub-total for mandatory items, standardisation & repetition and
                              others (B4) <br> (maximum 5 points) </b>
                      </td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesi10"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesi"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">14.</td>
                      <td colspan="6">Demerit Points</td>
                      <td width="10%">Module</td>
                      <td width="43%" colspan="3">Point deduction</td>
                      <td width="15%">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"></td>
                      <td width="1%"><b> <span bsCop>14</span>.1 </b></td>
                      <td class="text-left" colspan="5">
                          Non-functional void on slab
                      </td>
                      <td><b>N.A.</b></td>
                      <td colspan="3"><span style="color: blue;"><b>- 1.00</b></span></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_010" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_0" suffix="0"
                              c3-totals event-blur="onlyZeroOrNegativeOne(this);">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="7"></td>
                      <td></td>
                      <td><b>Percentage of coverage</b></td>
                      <td><b>Point deduction per floor</b></td>
                      <td width="15%"><b>No. of floors</b></td>
                      <td></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="8" width="1%"></td>
                      <td width="1%" rowspan="3"><b> <span bsCop>14</span>.2 </b></td>
                      <td class="text-left" colspan="5" rowspan="3">
                          Cast in-situ floor with transfer beam - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 30% </b></span></td>
                      <td><span style="color: blue;"><b>-1.00</b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 30% to <br> &lt; 60%</b></span>
                      </td>
                      <td><span style="color: blue;"><b>- 1.50</b></span> </td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 60%</b></span></td>
                      <td><span style="color: blue;"><b>- 2.00</b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%" rowspan="3"><b> <span bsCop>14</span>.3 </b></td>
                      <td class="text-left" colspan="5" rowspan="3">
                          Cast in-situ floor with cantilever transfer beam - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 30%</b></span></td>
                      <td><span style="color: blue;"><b>- 2.00</b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 30% to <br> &lt; 60%</b></span>
                      </td>
                      <td><span style="color: blue;"><b>- 2.50</b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 60%</b></span></td>
                      <td><span style="color: blue;"><b>- 3.00</b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">

                      <td width="1%" rowspan="2"><b> <span bsCop>14</span>.4 </b></td>
                      <td class="text-left" colspan="5" rowspan="2">
                          Inclined columns - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &lt; 30% </b></span></td>
                      <td><span style="color: blue;"><b> - 1.00 </b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &ge; 30% </b></span></td>
                      <td><span style="color: blue;"><b> - 1.50 </b></span></td>
                      <td>
                          <cn2-textbox no-label id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ110"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ1" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ210" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ2" suffix="0"
                              disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>(Maximum 5 Demerit Points)</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7">&nbsp;</td>
                      <td colspan="2" class="text-center"><b>Percentage of Coverage</b></td>
                      <td colspan="2" class="text-center"><b>Point deduction</b></td>
                      <td>&nbsp;</td>
                  </tr>


                  <tr class="text-center">
                      <td rowspan="2">&nbsp;</td>
                      <td width="1%" rowspan="2"><b> <span bsCop>14</span>.5 </b></td>
                      <td class="text-left" colspan="5" rowspan="2">
                          Brickwall / Blockwall
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 20%</b></span></td>
                      <td colspan="2"><span style="color: blue;"><b>- 2.00</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH210" no-label c3-totals
                              placeholder="0.00"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &ge; 20% </b></span></td>
                      <td colspan="2"><span style="color: blue;"><b> - 3.00 </b></span> </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI210" c3-totals no-label
                              placeholder="0.00"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                  </tr>

                  <tr></tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>Sub-total for Demerit Points (B5)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>Total for Wall System B = B3 + B4 +
                              B5 <br> (maximum 45 points)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="12"
                          style="border-left: none; border-right: none; border-bottom: none;">
                          <p style="font-style: italic;">
                              All notes to refer to Explanatory Notes under Wall System.
                          </p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- ALL Application Types -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id="9-3"
          non-typical-modal>

          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="2" rowspan="2" width = "35%">DESIGN for MANUFACTURING & <br> ASSEMBLY (DfMA)
                          TECHNOLOGIES</td>
                      <td rowspan="2" >Unit</td>
                      <td style="padding: 0px;" colspan="2">
                          Percentage of Coverage
                      </td>
                      <td  rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td width = "10%">
                          <b>&ge; 65% to &lt; 80%</b>
                      </td>
                      <td width = "10%">
                          <b>&ge; 80%</b>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A1 1<sup>st</sup> CLASS</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Fully Integrated System</b></td>
                  </tr>

                  <tr class="text-center">
                      <td  rowspan="2"><b> A1.1 </b></td>
                      <td class="text-left">
                          Prefabricated Prefinished Volumetric Construction (PPVC) (The PPVC
                          system has to
                          be accepted by the Building Innovation Panel (BIP) and accredited under
                          the PPVC
                          Manufacturer Accreditation Scheme)

                      </td>
                      <td>Area</td>
                      <td multiplier>8.00</td>
                      <td multiplier>10.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA2"
                              suffix="0" disabled c1-totals c1-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Description of accepted
                          PPVC system: <sup><i>see Note 15</i></sup>
                      </td>
                      <td colspan="5">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA3"
                              suffix="0">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A1.2 </b></td>
                      <td class="text-left">
                          Prefabricated Prefinished Volumetric Construction (PPVC) meeting
                          requirements stipulated under Sections 5.1 and 5.2
                      </td>
                      <td>Area</td>
                      <td multiplier>6.00</td>
                      <td multiplier>7.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA4"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_Volm5"
                              suffix="0" disabled c1-totals c1-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 1<sup>st</sup> Class
                              (C1)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA1"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                    <tr>
                      <td colspan="7"><b>A2 2<sup>nd</sup> CLASS (UPPER)</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Fully Integrated sub-assemblies</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A2.1 </b></td>
                      <td class="text-left">
                          Mass Engineered Timber (e.g Cross Laminated Timber, CLT)
                      </td>
                      <td>Area</td>
                      <td multiplier>6.00</td>
                      <td multiplier>7.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB2"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.2 </b></td>
                      <td class="text-left">
                          Prefabricated Volumetric Construction (PVC)
                      </td>
                      <td>Area</td>
                      <td multiplier>5.00</td>
                      <td multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB3"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB4"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.3 </b></td>
                      <td class="text-left">
                          Structural steel with innovative connections<sup> <i>see Note
                                  16</i></sup>
                      </td>
                      <td>Area</td>
                      <td multiplier multiplier>5.00</td>
                      <td multiplier multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB5"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB6"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.4 </b></td>
                      <td class="text-left">
                          Steel-Mechanical, Electrical & Plumbing (MEP) floor system
                      </td>
                      <td>Area</td>
                      <td multiplier>5.00</td>
                      <td multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB7"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB8"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.5 </b></td>
                      <td class="text-left">
                          Prefinished wall with MEP services
                      </td>
                      <td>Length</td>
                      <td multiplier>1.00</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB9"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC1"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.6 </b></td>
                      <td class="text-left">
                          Prefinished ceiling with MEP services
                      </td>
                      <td>Area</td>
                      <td multiplier>1.00</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC2"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC3"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.7 </b></td>
                      <td class="text-left">
                          Prefab MEP modules integrated with work platform/ catwalk
                      </td>
                      <td>Nos</td>
                      <td multiplier>3.00</td>
                      <td multiplier>5.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC4"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC5"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="2" rowspan="2">&nbsp;</td>
                      <td rowspan="2" >Repetition of
                          Layouts</td>
                      <td style="padding: 0px;" colspan="2">
                          Percentage of Coverage
                      </td>
                      <td  rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td >
                          <b>&ge; 65% to &lt; 80%</b>
                      </td>
                      <td >
                          <b>&ge; 80%</b>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  rowspan="3" style="background-color: yellow;"><b> A2.8(a)
                          </b></td>
                      <td class="text-left" rowspan="2" style="background-color: yellow;">
                          Prefabricated bathroom units pre-assembled off-site complete with
                          finishes,
                          sanitary wares, concealed pipes, conduits, ceiling, bathroom cabinets,
                          shower
                          screen and fittings before installing in position - in nos.
                          (<i>mandatory for residential non-landed projects and the residential
                              non-landed
                              component of mixed-use developments under the Government Land Sales
                              Programme</i>)
                      </td>
                      <td>≥40</td>
                      <td multiplier>4.00</td>
                      <td multiplier>5.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC9"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td>&lt;40</td>
                      <td multiplier>3.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD2"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td style="background-color: yellow;">
                          Description of accepted
                          PBU system: <sup><i>see Note 17</i></sup>
                      </td>
                      <td colspan="5">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD3"
                              suffix="0">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.8(b) </b></td>
                      <td class="text-left">
                          Prefabricated bathroom/toilet units pre-assembled off-site complete with
                          finishes,
                          piping / wiring - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td multiplier>2.00</td>
                      <td multiplier>3.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD5"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 2<sup>nd</sup> Class
                              (Upper)(C2)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA2"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A3 2<sup>nd</sup> CLASS (LOWER)</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Advanced prefab systems</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A3.1 </b></td>
                      <td class="text-left">
                          Structural steel
                      </td>
                      <td>Area</td>
                      <td multiplier>2.00</td>
                      <td multiplier>3.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD6"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD7"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.2 </b></td>
                      <td class="text-left">
                          Unitized curtain wall
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD8"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD9"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.3 </b></td>
                      <td class="text-left">
                          Prefinished wall (e.g Precast wall with off-site finishes)
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE2"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.4 </b></td>
                      <td class="text-left">
                          Prefinished slab
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE3"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB8"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.5 </b></td>
                      <td class="text-left">
                          Prefinished ceiling
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE5"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE6"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.6 </b></td>
                      <td class="text-left">
                          Prefab MEP modules e.g pipes, cable trays/ trunking etc
                      </td>
                      <td>Nos</td>
                      <td multiplier>2.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE7"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE8"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.7 </b></td>
                      <td class="text-left">
                          Prefab MEP plant modules e.g pump, compressor etc
                      </td>
                      <td>Nos</td>
                      <td multiplier>2.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE9"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF1"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 2<sup>nd</sup> Class
                              (Lower)(C3)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA3"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A4 3<sup>rd</sup> CLASS</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Prefabricated components</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A4.1 </b></td>
                      <td class="text-left">
                          Integrated precast components comprising at least 2 elements (e.g
                          multi-tier
                          column/wall, double bay facade wall)
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF2"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF3"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.2 </b></td>
                      <td class="text-left">
                          Precast external wall with cast-in windows - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF4"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF5"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.3 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast column/ precast wall (horizontal
                          joints)<sup> <i>see Note 18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF6"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF7"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.4 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast beam joints <sup> <i>see Note
                                  18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF8"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF9"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.5 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast wall (vertical joints) <sup> <i>see
                                  Note
                                  18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG1"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG2"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.6 </b></td>
                      <td class="text-left">
                          Prefabricated wall/ facade with onsite dry applied finishes
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG3"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG4"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.7 </b></td>
                      <td class="text-left">
                          Prefabricated slab with onsite dry applied finishes
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG5"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG6"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.8 </b></td>
                      <td class="text-left">
                          Prefabricated ceiling with onsite dry applied finishes
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG7"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG8"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> A4.9 </b></td>
                      <td class="text-left" style="background-color: yellow;">
                          Prefabricated and pre-insulated duct for air- conditioning system<i>
                              (mandatory for all projects)</i>
                      </td>
                      <td>Area</td>
                      <td multiplier>0.50</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG9"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH1"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.10 </b></td>
                      <td class="text-left">
                          Flexible sprinkler dropper - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH2"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH3"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.11 </b></td>
                      <td class="text-left">
                          Flexible water pipes - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH4"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH5"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.12 </b></td>
                      <td class="text-left">
                          Common M&E bracket (at least 3 M&E services) - in length
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH6"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH7"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 3<sup>rd</sup> Class
                              (C4)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA4"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A5. OTHER SYSTEMS NOT LISTED IN BDAS (Please seek BCA's
                              advice on the system before proceeding)</b></td>
                  </tr>
                  <tr>
                      <td ><b> A5.1 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA110" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA1"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI2"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI3"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI410"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI4"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td><b> A5.2 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA210" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA2"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI5"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI6"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI710"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI810"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI610"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td><b> A5.3 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA310" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA3"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI910"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI7"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ110"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ1"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ210"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ2"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ310"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ3"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for other (C5)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA510"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA5"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for DfMA C = C1 + C2 + C3 +
                              C4 + C5
                              <br>(maximum 20 points)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA610"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>GRAND TOTAL (A + B + C)<br>
                              (maximum 110 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA710"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA7"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"
                          style="border-left: none; border-right: none; border-bottom: none;">
                          <p style="font-style: italic;">
                              All notes to refer to Explanatory Notes under Buildable Features.
                          </p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>`;
  let xmlStringBase = `<div class="mls-espo-right-inner-container borderchecking">
  <h2 raw="PART IV : Computation of Buildable Design Score - ">
      PART IV : Computation of Buildable Design Score - B01
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
                          <cn2-button id="closeTypicalBlockBtnBase10"
                              prefix="closeTypicalBlockBtnBase" suffix="0"
                              event-click="hideAddBlock(this, 'basement');"
                              label="&nbsp;&nbsp;Close&nbsp;&nbsp;" danger close-this="close">
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
                          <cn2-textbox id="TypiBlocNoNameBase10" dont-centerbox
                              prefix="TypiBlocNoNameBase" suffix="0" no-label>
                          </cn2-textbox>
                      </td>
                      <td class="text-center">
                          <cn2-button id="TypiBlockAddBase10" prefix="TypiBlockAddBase" suffix="0"
                              label="&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;"
                              event-click="addToTheList(this, 'basement');">
                          </cn2-button>
                      </td>
                  </tr>
                  <tr>
                      <td rowspan="2" style="vertical-align: top !important;">
                          Existing Block No./Name
                      </td>
                      <td class="text-left" typical-block-list
                          style="vertical-align: top !important;" rowspan="2">
                          <div class="list-group" id="liBasest-tab10" prefix="listBase-tab"
                              field="list-tab" suffix="0" role="tablist"></div>
                      </td>
                      <td class="text-center" style="vertical-align: top !important;">
                          <cn2-button danger prefix="TypiBlockRemoveBase" suffix="0"
                              id="TypiBlockRemoveBase10" label="Remove" disabled
                              event-click="removeFromTheList(this, 'basement');"></cn2-button>
                          <br />
                          <br />
                          <cn2-button buttons-id prefix="TypiBlockEditBase" suffix="0"
                              id="TypiBlockEditBase10" disabled
                              label="&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;"
                              event-click="editFromTheList(this, 'basement');">
                          </cn2-button>
                          <br />
                          <br />
                          <cn2-button buttons-id prefix="TypiBlockSaveBase" suffix="0"
                              id="TypiBlockSaveBase10" disabled
                              label="&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;"
                              event-click="saveToTheList(this, 'basement');">
                          </cn2-button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- ALL Application Types -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id=Base"9-1"
          non-typical-modal>
          <table class="table table-borderless mb-10">
              <tbody>
                  <tr>
                      <td colspan="3"></td>
                      <td class="text-center">
                          <b> SS </b>
                      </td>
                      <td class="text-center">
                          <b> WS </b>
                      </td>
                      <td class="text-center">
                          <b> BF </b>
                      </td>
                      <td class="text-center">
                          <b> BLK </b>
                      </td>
                  </tr>
                  <tr>
                      <td width="200px">
                          Project Reference No. :
                      </td>
                      <td width="200px">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNoBase10"
                              no-label proj-ref-no
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_ProfRefNoBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <h3>BS</h3>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SsBase10"
                              no-label page-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SsBase" suffix="0"
                              disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_WsBase10"
                              no-label page-ws
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_WsBase" suffix="0"
                              disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BfBase10"
                              no-label page-bf
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BfBase" suffix="0"
                              disabled></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNoBase10"
                              no-label page-blk
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNoBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Block No./Name :
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlkBase10"
                              no-label page-block-no-default
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlkBase" suffix="0"
                              page-block-no>
                          </cn2-textbox>
                      </td>
                      <td></td>
                      <td colspan="3" class="text-left">
                          Please indicate other typical blocks (if any) :
                      </td>
                      <td class="text-right">
                          <cn2-button id="addTypicalBlockBtnBase10"
                              prefix="addTypicalBlockBtnBase" suffix="0"
                              event-click="showAddBlock(this);" label="Add" style="width: 100%;">
                          </cn2-button>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="5">Structural System</td>
                      <td width="15%">Labour Saving Index<br>(a)</td>
                      <td width="15%">Area (m<sup>2</sup>)<br>(b)</td>
                      <td width="15%">% Area<br>(c)</td>
                      <td width="15%">
                          Buildable Design Score <br />
                          (a) x (c) x 45
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">1.</td>
                      <td colspan="8" class="text-left">
                          PRECAST CONCRETE SYSTEM
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="11"></td>
                      <td width="1%"><b> 1.1 </b></td>
                      <td width="1%">&nbsp;</td>
                      <td colspan="2" class="text-left">Full Precast</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSyst3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.2 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat plate and perimeter
                          beams (beam depth ≤ 600mm)
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystA3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.2 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat plate and perimeter
                          beams (beam depth > 600mm)
                      </td>
                      <td multiplier>0.80</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystB3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat slab and perimeter beams
                          (beam depth ≤ 600mm)
                      </td>
                      <td multiplier>0.85</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystC3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.3 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall with flat slab and perimeter beams
                          (beam depth > 600mm)
                      </td>
                      <td multiplier>0.75</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystD3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.4 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast beam and precast slab
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystE3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.5 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast beam and precast column/wall
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystF3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.6 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall and precast slab
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystG3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.7 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast slab only
                      </td>
                      <td multiplier>0.70</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystH3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 1.8 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Precast column/wall only
                      </td>
                      <td multiplier>0.70</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecConcSystI3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Precast Concrete System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTotaBase10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTotaBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">2</td>
                      <td colspan="8" class="text-left">
                          STRUCTURAL STEEL SYSTEM (applicable only if steel
                          decking or precast slab is adopted)<sup>see Note 1</sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td width="1%" colspan="2"><b> 2.1 </b></td>
                      <td colspan="2" class="text-left">
                          Steel beam and steel column (without concrete
                          encasement)
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%" colspan="2"><b> 2.2 </b></td>
                      <td colspan="2" class="text-left">
                          Steel beam and steel column (with concrete encasement)
                      </td>
                      <td multiplier width="15%">0.95</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSystA3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Structural Steel System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTotaBase10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTotaBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">3.</td>
                      <td colspan="8" class="text-left">
                          CAST IN-SITU SYSTEM
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7"></td>
                      <td width="1%"><b> 3.1 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Flat plate with perimeter beams (beam depth &le; 600mm)
                      </td>
                      <td multiplier width="15%">0.85</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSyst3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.1 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Flat plate with perimeter beams (beam depth > 600mm)
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystA3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.2 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Flat slab with perimeter beams (beam depth &le; 600mm)
                      </td>
                      <td multiplier width="15%">0.80</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystB3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.2 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Flat slab with perimeter beams (beam depth > 600mm)
                      </td>
                      <td multiplier width="15%">0.70</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystC3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.3 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          One-directional beam
                      </td>
                      <td multiplier width="15%">0.70</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystD3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 3.4 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Two-directional beam
                      </td>
                      <td multiplier width="15%">0.45</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSystE3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="3">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="5">
                          <b> Sub Total Area for Cast In-Situ System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTotaBase10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTotaBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">4.</td>
                      <td colspan="7" class="text-left">ROOF SYSTEM (for superstructure block
                          only)</td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="6"></td>
                      <td width="1%"><b> 4.1 </b></td>
                      <td colspan="2" class="text-left">
                          Integrated metal roof on steel truss
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.2 </b></td>
                      <td colspan="2" class="text-left">
                          Metal roof on steel truss or timber truss
                      </td>
                      <td multiplier width="15%">0.95</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystA3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.3 </b></td>
                      <td colspan="2" class="text-left">
                          Tiled roof on steel beam or precast concrete beam or
                          timber beam
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystB3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.4 </b></td>
                      <td colspan="2" class="text-left">
                          Metal roof on cast in-situ beam
                      </td>
                      <td multiplier width="15%">0.60</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystC3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 4.5 </b></td>
                      <td colspan="2" class="text-left">
                          Tiled roof with cast in-situ beam
                      </td>
                      <td multiplier width="15%">0.55</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD1Base10"
                              no-label
                              event-input="computeTotalTable(this, 'compute-ss', 'CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota', '1:2');"
                              compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSystD3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a1-totals="4">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="4">
                          <b> Sub Total Area for Roof System </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTotaBase10"
                              no-label table-total
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTotaBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td colspan="2"></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">5.</td>
                      <td colspan="7" class="text-left">
                          OTHER STRUCTURAL SYSTEMS NOT LISTED IN BDAS (Please
                          seek BCA’s advice on the LSI before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="4"></td>
                      <td width="1%"><b> 5.1 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot2Base10"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot2Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot3Base10"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 5.2 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA2Base10"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA2Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA3Base10"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 5.3 </b></td>
                      <td colspan="2" class="text-left">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB2Base10"
                              no-label
                              event-blur="computeFloorArea(this, '1:2', '0.00-1.00'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB2Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB3Base10"
                              no-label event-input="computeFloorArea(this, '1:2');" compute-ss
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled a1-totals="5">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td class="text-right" colspan="4">
                          <b> Total floor area including roof area </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr class="text-center">
                      <td class="text-right">
                          <b> Sub-total for Structural System (A1) </b>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStruBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStruBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">6.</td>
                      <td colspan="2" class="text-left">
                          PREFABRICATED REINFORCEMENT IN CAST IN-SITU COMPONENTS
                      </td>
                      <td width="15%">Labour Saving Index (a)</td>
                      <td width="15%">Percentage of Coverage (b)</td>
                      <td width="15%">
                          Buildable Design Score (a) x (b) X 45
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 6.1 </b></td>
                      <td class="text-left" style="background-color: yellow;">
                          Floor mesh - in areas (≥ 65%) <sup>see Note 2</sup> <br> <i>(mandatory
                              for all developments)</i>
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn1Base10"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn1Base"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinIn2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="5"></td>
                      <td width="1%"><b> 6.2 </b></td>
                      <td class="text-left">
                          Beam cage / Continuous stirrup - in nos. (only accept
                          cages from factory)
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA1Base10"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA1Base"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 6.3 </b></td>
                      <td class="text-left">
                          Column cage / Continuous stirrup - in nos.
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB1Base10"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB1Base"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInB2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 6.4 </b></td>
                      <td class="text-left">
                          Wall mesh - in nos.
                      </td>
                      <td multiplier width="15%">0.05</td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC1Base10"
                              no-label
                              event-blur="computeRows(this, '1:1', 'isPercent'); formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC1Base"
                              suffix="0" maxlength="6" currency></cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSyst_PrecFabrReinInC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a2-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for prefabricated reinforcement (A2) <br>
                              (maximum 5 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefReinBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefReinBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for Structural System A3 = A1 + A2 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSystBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSystBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">7.</td>
                      <td colspan="3" rowspan="2" class="text-left">MANDATORY ITEMS</td>
                      <td width="15%" colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 65% to < 80%</b> </td> <td class="text-center">
                                  <b>≥ 80%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="1" style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 7.1 </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Precast household shelters - in nos. <br> <i>(mandatory for residential
                              non-landed projects) <sup>see Note 3</sup></i>
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPnts1Base10" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPnts1Base" suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');dataValidation(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPnts2Base10" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPnts2Base" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">8.</td>
                      <td colspan="4" rowspan="2" class="text-left">STANDARDISATION &
                          REPETITION
                      </td>
                      <td colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td width="1%"><b> 8.1 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Columns (3 most common sizes in module of 0.5M)- in nos.
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsA2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 8.2 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Beams (3 most common sizes in module of 0.5M)- in nos.
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsB2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">

                      <td width="1%"><b> 8.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td class="text-left" colspan="2">
                          Vertical repetition of structural floor layout - in areas (For
                          blocks
                          more than 6 storey)
                      </td>
                      <td multiplier width="15%">1.50</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> OR </b></td>
                      <td width="1%"><b> 8.3b </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td class="text-left" colspan="2">
                          Vertical repetition of structural floor layout - in areas (For
                          blocks up
                          to 6 storey)
                      </td>
                      <td multiplier width="15%">0.75</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsD2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%" rowspan="2">9.</td>
                      <td colspan="3" rowspan="2" class="text-left">OTHERS</td>
                      <td colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td width="15%" rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7">&nbsp;</td>
                      <td width="1%"><b> 9.1 </b></td>
                      <td class="text-left" colspan="2">
                          Precast meter chambers(for residential landed developments) -in
                          nos.
                      </td>
                      <td multiplier width="15%">0.50</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsE2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.2 </b></td>
                      <td class="text-left" colspan="2">
                          Prefabricated MEP rises - in nos.
                      </td>
                      <td multiplier width="15%">0.50</td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsF2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.3 </b></td>
                      <td class="text-left" colspan="2">
                          Single floor level without drops/kerbs within apartment unit
                          (e.g. at
                          kitchen, toilets) - in nos.
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsG2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4">&nbsp;</td>
                      <td class="text-center"><b>Direct Points Awarded</b></td>
                      <td class="text-center"><b>Percentage of Coverage</b></td>
                      <td class="text-center"><b>Buildable Design Score</b></td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.4 </b></td>
                      <td class="text-left" colspan="3">
                          High strength concrete <br> (≥ Grade 70, at least 5%) <sup><i>see Note
                                  4</i></sup>
                      </td>
                      <td multiplier width="15%">1.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH1Base"
                              suffix="0"
                              event-blur="ifGreaterThan(this, '4.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsH2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.5 </b></td>
                      <td class="text-left" colspan="3">
                          Self compacing concrete (≥ 30%)<sup><i>see Note 5</i></sup>
                      </td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI1Base"
                              suffix="0"
                              event-blur="ifGreaterThan(this, '29.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsI2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.6 </b></td>
                      <td class="text-left" colspan="3">
                          Diaphragm wall <br> (≥ 65% length of basement permanent
                          retaining
                          wall) <sup><i>see Note 6</i></sup>
                      </td>
                      <td multiplier width="15%">2.00</td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ1Base"
                              suffix="0"
                              event-blur="ifGreaterThan(this, '64.99', 'isPercent'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_BonuPntsJ2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">10.</td>
                      <td colspan="5" class="text-left" colspan="2">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek
                          BCA’s advice before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="5"></td>
                      <td width="1%"><b> 10.1 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot1Base10" dont-centerbox
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot2Base"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot3Base10"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot3Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNot4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 10.2 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA2Base"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA3Base10"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA3Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotA4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 10.3 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%" multiplier>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB2Base"
                              suffix="0"
                              event-blur="computeFloorArea(this, '1:1', 'none'); formatDecimal(this, '2');"
                              maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB3Base10"
                              no-label event-blur="formatDecimal(this, '2');"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB3Base"
                              suffix="0" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td width="15%">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_OtheBonuPntsNotB4Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              a4-totals="2">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Sub-total for mandatory items, standardisation & repetition and
                              others (A4) <br />
                              (maximum 5 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSSBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSSBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-right">
                      <td colspan="4">
                          <b>
                              Total for Structural System A = A3 + A4 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_SubTotaSSBase10" no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_SubTotaSSBase" suffix="0"
                              event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="6">
                          <span style="font-style: italic;">
                              All notes to refer to Explanatory Notes under
                              Structural System.
                          </span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
       <!--  Application Type = BS01_COP(SEP2013) and BS03_COP(SEP2013) -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bs-01-03 id=Base"9-2"
          non-typical-modal>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
              <tr style="font-weight: bold;" class="text-center">
                      <td colspan="5">Wall System</td>
                      <td width="1%">Labour Saving Index <br> (a)</td>
                      <td width="15%">
                          External Wall Length (m<sup>2</sup>) <br> (b)
                      </td>
                      <td width="15%">Internal Wall Length (m) <br> (c)</td>
                      <td width="15%">% Length (External + Internal) <br> (d)</td>
                      <td width="15%">
                          Buildable Design Score <br />
                          (a) x (d) x 40
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">1.</td>
                      <td colspan="9" class="text-left">
                          MANDATORY ITEMS
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td style="background-color: yellow;"></td>
                      <td width="1%" style="background-color: yellow;"><b> 1.1 </b></td>
                      <td colspan="3" class="text-left" style="background-color: yellow;">
                          Drywall Partition for all internal dry areas (exclude partywall/ toilet
                          wall/ kitchen wall) <br>
                          <i>(applicable for residential non-landed projects only)</i> <sup><i>see
                                  Note 7</i></sup>
                      </td>
                      <td multiplier>1.00</td>
                      <td style="background-color: grey;">
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiX4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">2.</td>
                      <td colspan="9" class="text-left">
                          CURTAIN WALL/FULL HEIGHT GLASS PARTITION/DRY PARTITION
                          WALL/PREFABRICATED RAILING
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="4"></td>
                      <td width="1%"><b> 2.1 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Curtain Wall / Full Height Glass Partition
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHei4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.2 </b></td>
                      <td width="1%"><b> &nbsp; </b></td>
                      <td colspan="2" class="text-left">
                          Prefabricated Railing
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.3 </b></td>
                      <td width="1%"><b> (a) </b></td>
                      <td colspan="2" class="text-left">
                          Drywall Partition <sup><i>see Note 7</i></sup>
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiB4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 2.3 </b></td>
                      <td width="1%"><b> (b) </b></td>
                      <td colspan="2" class="text-left">
                          Drywall Partition with tile/stone finishes <sup><i>see Note 7</i></sup>
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeiC4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">3.</td>
                      <td colspan="9" class="text-left">
                          PRECAST CONCRETE WALL
                      </td>
                  </tr>
                 <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 3.1 </b></td>
                      <td colspan="3" class="text-left">Off-form (external walls and columns only)
                      </td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td  style="background-color: grey;">
                          &nbsp;
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWall4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 3.2 </b></td>
                      <td colspan="3" class="text-left">
                          With skin coat
                      </td>
                      <td multiplier>0.90</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 3.3 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.60</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallB4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecConcWallA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >4.</td>
                      <td colspan="9" class="text-left">
                          LIGHTWEIGHT CONCRETE PANEL <sup><i>see Note 8</i></sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td ><b> 4.1 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.85</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPane4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 4.2 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.55</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_LighConcPaneA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >5.</td>
                      <td colspan="9" class="text-left">
                          CAST IN-SITU RC WALL
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 5.1 </b></td>
                      <td colspan="3" class="text-left">Off-form (external walls and columns only)
                      </td>
                      <td multiplier >0.95</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1XBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1XBase"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td  style="background-color: grey;">
                          &nbsp;
                          <!-- <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2XBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2XBase"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox> -->
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3XBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3XBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4XBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4XBase"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 5.2 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.80</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWall4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 5.3 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CastInSituWallA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >6.</td>
                      <td colspan="9" class="text-left">
                          PRECISION BLOCKWALL <sup><i>see Note 9</i></sup>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td ><b> 6.1 </b></td>
                      <td colspan="3" class="text-left">With skim coat</td>
                      <td multiplier >0.30</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWall4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 6.2 </b></td>
                      <td colspan="3" class="text-left">
                          With plastering, tile/stone finishes
                      </td>
                      <td multiplier>0.10</td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_PrecBlkWallA4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >7.</td>
                      <td colspan="9" class="text-left">
                          BRICKWALL / BLOCKWALL
                      </td>
                  </tr>
                  <tr class="text-center" wall-item-7>
                      <td></td>
                      <td ><b> 7.1 </b></td>
                      <td colspan="3" class="text-left">
                          With or without plastering (to include the length if used) <sup><i>see
                                  Note 10</i></sup>
                      </td>
                      <td multiplier  style="background-color: grey;">&nbsp;</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk3Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk4Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td >8.</td>
                      <td colspan="9" class="text-left">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek
                          BCA's advice on the LSI before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 8.1 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label 
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1Base10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2Base"
                              suffix="0"
                              event-blur="computeFloorArea(this, '2:2', '0.00-1.00'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys3Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys4Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys6Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys6Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 8.2 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA1Base10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier width="10%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              event-blur="formatDecimal(this, '2');" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA3Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA4Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA6Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysA6Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 8.3 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB1Base10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td multiplier width="10%">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB2Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              event-blur="formatDecimal(this, '2');" maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB3Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1', '2:2');"
                              compute-wall-1 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB4Base"
                              suffix="0"
                              event-input="computeTotalTable(this, 'compute-wall-2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2', '2:2');"
                              compute-wall-2 event-blur="formatDecimal(this, '2');" maxlength="6"
                              currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB6Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysB6Base"
                              suffix="0" disabled b1-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right" rowspan="2">
                          <b>
                              Total Wall Length (External Wall Length <br />
                              and Internal Wall Length)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td rowspan="2">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                      <td rowspan="2"></td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="2">
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="9" class="text-right">
                          <b> Sub-total for Wall System (B1) </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">9.</td>
                      <td colspan="3" class="text-left">
                          SIMPLE DESIGN
                      </td>
                      <td width="15%">Direct Points Awarded</td>
                      <td width="15%">Total height of all voids (m)</td>
                      <td width="15%">Total height of Building (m)</td>
                      <td width="15%">
                          Scenario based on Max Offset (m) OR % of Offset floors
                          in Table B
                      </td>
                      <td width="15%">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="2"></td>
                      <td width="1%"><b> 9.1 </b></td>
                      <td colspan="2" class="text-left">
                          Design without high voids
                      </td>
                      <td multiplier style="font-weight: bold;">
                          See Table A
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig1Base"
                              suffix="0" event-input="blockPageWallTable9(this, 'firstRow');"
                              compute-wall-9_1
                              event-blur="ifGreaterThan(this, '9', 'range'); formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig2Base"
                              suffix="0" event-input="blockPageWallTable9(this, 'firstRow');"
                              compute-wall-9_2 event-blur="formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <b>N.A.</b>
                      </td>
                      <td>
                          <cn2-textbox b2-totals="1"
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"><b> 9.2 </b></td>
                      <td colspan="2" class="text-left">
                          Design without complex form
                      </td>
                      <td multiplier style="font-weight: bold;">
                          See Table B
                      </td>
                      <td>
                          <b>N.A.</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA1Base"
                              suffix="0" event-input="blockPageWallTable9(this, 'secondRow');"
                              compute-wall-9_1 event-blur="formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA2Base"
                              suffix="0"
                              event-blur="blockPageWallTable9(this, 'secondRow'); formatDecimal(this, '2');"
                              compute-wall-9_2 maxlength="1" numeric>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox b2-totals="1"
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="8" class="text-right">
                          <b> Sub-total for simple design (B2) <br>
                              (maximum 5 points)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgnBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgnBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="8" class="text-right">
                          <b>
                              Total for Wall System B3 = B1 + B2 <br />
                              (maximum 45 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB2Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td  rowspan="2">10.</td>
                      <td colspan="4" rowspan="2" class="text-left" width = "35%">MANDATORY ITEMS</td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td  colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center" width = "10%"><b>≥ 70% to < 90%</b> </td> <td class="text-center" width = "10%">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="7" style="background-color: yellow;"></td>
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (a) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 2.8m, 2.975m, 3.15m, 3.3m, 3.5m,
                          or 3.6m height <br> <i>(applicable for residential non-landed projects
                              only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (b) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 4.025m, 4.2m, 4.375m, 4.5m,
                          4.55m, 4.725m, 4.8m, or 4.9m height <br> <i>(applicable for office
                              projects only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.1 </b></td>
                      <td  style="background-color: yellow;"><b> (c) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Typical storeys standardised to either 3.15m, 3.3m, 3.325m, 3.45m, 3.5m,
                          or 3.6m height <br> <i>(applicable for hotel projects only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier  style="background-color: lightgray;">&nbsp;</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1A'], '11.3(a) and/or 11.3(b) and 12.1')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.2 </b></td>
                      <td  style="background-color: yellow;">&nbsp;</td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard door structural openings (width) -in nos. <br> <i>(applicable
                              for residential non-landed projects only)</i> <sup><i>see Note
                                  11</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.50</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeC', 'CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1C'], '11.2 and/or 12.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.3 </b></td>
                      <td  style="background-color: yellow;">&nbsp;</td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast refuse chutes - in nos. <br> <i>(applicable for
                              residential non-landed projects only)</i> <sup><i>see Note
                                  12</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1E'], '12.3')"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.4 </b></td>
                      <td  style="background-color: yellow;"><b> (a) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast staircase of riser height of 150mm or 175mm & tread
                          width of 275mm or 300mm for typical storeys - in nos. <br>
                          <i>(applicable for all developments except industrial buildings)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI1'], '10.4(b)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> 10.4 </b></td>
                      <td  style="background-color: yellow;"><b> (b) </b></td>
                      <td class="text-left" colspan="2" style="background-color: yellow;">
                          Standard precast staircase of riser height of 150mm or 175mm & tread
                          width of 250mm, 275mm or 300mm for typical storeys - in nos. <br>
                          <i>(applicable for all industrial buildings only)</i>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigH1'], '10.4(a)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigI2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td  rowspan="2">11.</td>
                      <td colspan="4" rowspan="2" class="text-left">STANDARDISATION AND REPETITION
                      </td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td  colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 70% to < 90%</b> </td> <td class="text-center">
                                  <b>≥ 90%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 11.1 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Windows (3 most common sizes) - in nos.
                      </td>
                      <td class="text-center"><b>1M/1M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeABase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeABase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeBBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeBBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 11.2 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Door structural openings (width) (3 most common sizes) - in nos.</i>
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeCBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeCBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1'], '10.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeDBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeDBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 11.3 </b></td>
                      <td ><b> (a) </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of floor-to-floor height - in nos. (For blocks more than 6
                          storey)
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeEBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeEBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c) and/or 11.3(b)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeFBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeFBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> OR </b></td>
                      <td ><b> 11.3 </b></td>
                      <td ><b> (b) </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of floor-to-floor height - in nos. (For blocks up to 6
                          storey)
                      </td>
                      <td class="text-center"><b>0.5M</b></td>
                      <td multiplier >0.75</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeF2Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeE', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c) and/or 11.3(a)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeGBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeGBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td >&nbsp;</td>
                      <td ><b> 11.4 </b></td>
                      <td ><b> &nbsp; </b></td>
                      <td class="text-left" colspan="2">
                          Repetition of horizontal grids - in nos.
                      </td>
                      <td class="text-center"><b>6M</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeHBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeHBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '70-89.999:90-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeIBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_StanRepeIBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                   <tr style="font-weight: bold;" class="text-center">
                      <td  rowspan="2">12.</td>
                      <td colspan="4" rowspan="2" class="text-left">OTHERS</td>
                      <td class="text-center" rowspan="2"><b>Module</b></td>
                      <td  colspan="2">Percentage of Coverage</td>
                      <td rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">
                          Buildable Design Score
                      </td>
                  </tr>
                  <tr>
                      <td class="text-center"><b>≥ 65% to < 80%</b> </td> <td class="text-center">
                                  <b>≥ 80%</b></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="9"></td>
                      <td ><b> 12.1 </b></td>
                      <td class="text-left" colspan="3">
                          Typical storeys standardised to either 2.8m, 2.975m, 3.15m, 3.3m,
                          3.325m, 3.45m,
                          3.5m, 3.6m, 4.025m, 4.2m, 4.375m, 4.5m, 4.55m, 4.725m, 4.8m or 4.9m
                          height and
                          with precast staircase of riser height of 150mm or 175mm & tread width
                          of 250mm or
                          275mm

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1ABase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1ABase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigC1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigD1', 'CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigE1'], '10.1(a), 10.1(b), 10.1(c)');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1BBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1BBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.2 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised door structural openings - in nos <sup><i>see Note
                                  11</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.50</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1CBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1CBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigF1'], '10.2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1DBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1DBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.3 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised precast refuse chutes - in nos <sup><i>see Note
                                  12</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >0.50</td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1EBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1EBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2'); notSame(this, ['CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigG1'], '10.3');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1FBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1FBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.4 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised precast household shelters (3 most common sizes) -
                          in nos. <sup><i>see Note 13</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1GBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1GBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');dataValidation(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1HBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1HBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.5 </b></td>
                      <td class="text-left" colspan="3">
                          Industry standardised prefabricated bathroom/toilet units (3 most common
                          sizes) - in nos. <sup><i>see Note 14</i></sup>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.00</td>
                      <td multiplier >2.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1IBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1IBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1JBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1JBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.6 </b></td>
                      <td class="text-left" colspan="3">
                          Drywall for party wall - in nos. <br><i>(applicable for residential
                              projects
                              only)</i>

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >2.00</td>
                      <td multiplier >4.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1KBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1KBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1LBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1LBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.7 </b></td>
                      <td class="text-left" colspan="3">
                          Drywall for wet areas (kitchens and toilets) - in nos.
                          <br><i>(applicable
                              for residential projects only)</i>

                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier >1.50</td>
                      <td multiplier >3.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1MBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1KBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1NBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1LBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.8 </b></td>
                      <td class="text-left" colspan="3">
                          Engineered timber flooring, carpet, vinyl, raised floor and engineered
                          stone flooring finishes - in areas
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier ></td>
                      <td multiplier >0.50</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1OBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1OBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1PBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1PBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 12.9 </b></td>
                      <td class="text-left" colspan="3">
                          Power float concrete floor
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td multiplier ></td>
                      <td multiplier >1.00</td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1QBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1QBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');formatDecimal(this, '2');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1RBase10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_Othe1RBase"
                              suffix="0" event-blur="formatDecimal(this, '2');" disabled
                              b4-totals="1"></cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td >13.</td>
                      <td colspan="9" class="text-left">
                          OTHER SYSTEMS NOT LISTED IN BDAS (Please seek BCA’s advice
                          before proceeding)
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="3"></td>
                      <td ><b> 13.1 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysABase10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysABase"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysBBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysBBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysCBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysCBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysDBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysDBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysEBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSysEBase"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 13.2 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1ABase10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1ABase"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1BBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1BBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1CBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1CBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1DBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1DBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1EBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1EBase"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> 13.3 </b></td>
                      <td colspan="3" class="text-left">
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2ABase10" dont-centerbox
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2ABase"
                              suffix="0" dont-centerbox></cn2-textbox>
                      </td>
                      <td ><b>N.A.</b></td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1BBase20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2BBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1CBase20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2CBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100', 'label');"
                              maxlength="4" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1DBase20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2DBase"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td >
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys1EBase20"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystB_OtheWallSys2EBase"
                              suffix="0" disabled b4-totals="1">
                          </cn2-textbox>
                      </td>
                  </tr>

                  <tr class="text-center">
                      <td colspan="9" class="text-right">
                          <b> Sub-total for mandatory items, standardisation & repetition and
                              others (B4) <br> (maximum 5 points) </b>
                      </td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesiBase10"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_WallSyst_SubOtheBuildDesiBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td width="1%">14.</td>
                      <td colspan="6">Demerit Points</td>
                      <td width="10%">Module</td>
                      <td width="43%" colspan="3">Point deduction</td>
                      <td width="15%">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%"></td>
                      <td width="1%"><b> <span bsCop>14</span>.1 </b></td>
                      <td class="text-left" colspan="5">
                          Non-functional void on slab
                      </td>
                      <td><b>N.A.</b></td>
                      <td colspan="3"><span style="color: blue;"><b>- 1.00</b></span></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_0Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_0Base"
                              suffix="0" c3-totals event-blur="onlyZeroOrNegativeOne(this);">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="7"></td>
                      <td></td>
                      <td><b>Percentage of coverage</b></td>
                      <td><b>Point deduction per floor</b></td>
                      <td width="15%"><b>No. of floors</b></td>
                      <td></td>
                  </tr>
                  <tr class="text-center">
                      <td rowspan="8" width="1%"></td>
                      <td width="1%" rowspan="3"><b> <span bsCop>14</span>.2 </b></td>
                      <td class="text-left" colspan="5" rowspan="3">
                          Cast in-situ floor with transfer beam - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 30% </b></span></td>
                      <td><span style="color: blue;"><b>-1.00</b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_B2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 30% to <br> &lt; 60%</b></span>
                      </td>
                      <td><span style="color: blue;"><b>- 1.50</b></span> </td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BA2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 60%</b></span></td>
                      <td><span style="color: blue;"><b>- 2.00</b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BB2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td width="1%" rowspan="3"><b> <span bsCop>14</span>.3 </b></td>
                      <td class="text-left" colspan="5" rowspan="3">
                          Cast in-situ floor with cantilever transfer beam - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 30%</b></span></td>
                      <td><span style="color: blue;"><b>- 2.00</b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BC2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 30% to <br> &lt; 60%</b></span>
                      </td>
                      <td><span style="color: blue;"><b>- 2.50</b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BD2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&ge; 60%</b></span></td>
                      <td><span style="color: blue;"><b>- 3.00</b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BE2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">

                      <td width="1%" rowspan="2"><b> <span bsCop>14</span>.4 </b></td>
                      <td class="text-left" colspan="5" rowspan="2">
                          Inclined columns - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &lt; 30% </b></span></td>
                      <td><span style="color: blue;"><b> - 1.00 </b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BF2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &ge; 30% </b></span></td>
                      <td><span style="color: blue;"><b> - 1.50 </b></span></td>
                      <td>
                          <cn2-textbox no-label
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ1Base10"
                              event-blur="calculateMultiply(this);"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ1Base" suffix="0"
                              numeric></cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BJ2Base"
                              suffix="0" disabled c3-totals>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>(Maximum 5 Demerit Points)</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePntsBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePntsBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7">&nbsp;</td>
                      <td colspan="2" class="text-center"><b>Percentage of Coverage</b></td>
                      <td colspan="2" class="text-center"><b>Point deduction</b></td>
                      <td>&nbsp;</td>
                  </tr>


                  <tr class="text-center">
                      <td rowspan="2">&nbsp;</td>
                      <td width="1%" rowspan="2"><b> <span bsCop>14</span>.5 </b></td>
                      <td class="text-left" colspan="5" rowspan="2">
                          Brickwall / Blockwall
                      </td>
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b>&lt; 20%</b></span></td>
                      <td colspan="2"><span style="color: blue;"><b>- 2.00</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2Base10"
                              no-label placeholder="0.00"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2Base" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td><b>N.A.</b></td>
                      <td><span style="color: blue;"><b> &ge; 20% </b></span></td>
                      <td colspan="2"><span style="color: blue;"><b> - 3.00 </b></span> </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2Base10"
                              no-label placeholder="0.00"
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2Base" suffix="0"
                              disabled>
                          </cn2-textbox>
                      </td>
                  </tr>

                  <tr></tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>Sub-total for Demerit Points (B5)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePntsBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePntsBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="11" class="text-right"><b>Total for Wall System B = B3 + B4 +
                              B5 <br> (maximum 45 points)</b>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTotaBase10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTotaBase"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="12"
                          style="border-left: none; border-right: none; border-bottom: none;">
                          <p style="font-style: italic;">
                              All notes to refer to Explanatory Notes under Wall System.
                          </p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- ALL Application Types -->
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" app-type-bsAll id=Base"9-3"
          non-typical-modal>

          <table class="table table-bordered" style="margin-top: 0px; margin-bottom: 30px;">
              <tbody>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="2" rowspan="2" width = "35%">DESIGN for MANUFACTURING & <br> ASSEMBLY (DfMA)
                          TECHNOLOGIES</td>
                      <td rowspan="2" >Unit</td>
                      <td style="padding: 0px;" colspan="2">
                          Percentage of Coverage
                      </td>
                      <td  rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td width = "10%">
                          <b>&ge; 65% to &lt; 80%</b>
                      </td>
                      <td width = "10%">
                          <b>&ge; 80%</b>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A1 1<sup>st</sup> CLASS</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Fully Integrated System</b></td>
                  </tr>

                  <tr class="text-center">
                      <td  rowspan="2"><b> A1.1 </b></td>
                      <td class="text-left">
                          Prefabricated Prefinished Volumetric Construction (PPVC) (The PPVC
                          system has to
                          be accepted by the Building Innovation Panel (BIP) and accredited under
                          the PPVC
                          Manufacturer Accreditation Scheme)

                      </td>
                      <td>Area</td>
                      <td multiplier>8.00</td>
                      <td multiplier>10.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA2Base"
                              suffix="0" disabled c1-totals c1-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Description of accepted
                          PPVC system: <sup><i>see Note 15</i></sup>
                      </td>
                      <td colspan="5">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA3Base"
                              suffix="0">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A1.2 </b></td>
                      <td class="text-left">
                          Prefabricated Prefinished Volumetric Construction (PPVC) meeting
                          requirements stipulated under Sections 5.1 and 5.2
                      </td>
                      <td>Area</td>
                      <td multiplier>6.00</td>
                      <td multiplier>7.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA4Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmA5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_Volm5Base"
                              suffix="0" disabled c1-totals c1-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 1<sup>st</sup> Class
                              (C1)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA1Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA1Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                   <tr>
                      <td colspan="7"><b>A2 2<sup>nd</sup> CLASS (UPPER)</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Fully Integrated sub-assemblies</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A2.1 </b></td>
                      <td class="text-left">
                          Mass Engineered Timber (e.g Cross Laminated Timber, CLT)
                      </td>
                      <td>Area</td>
                      <td multiplier>6.00</td>
                      <td multiplier>7.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB2Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.2 </b></td>
                      <td class="text-left">
                          Prefabricated Volumetric Construction (PVC)
                      </td>
                      <td>Area</td>
                      <td multiplier>5.00</td>
                      <td multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB3Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB4Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.3 </b></td>
                      <td class="text-left">
                          Structural steel with innovative connections<sup> <i>see Note
                                  16</i></sup>
                      </td>
                      <td>Area</td>
                      <td multiplier multiplier>5.00</td>
                      <td multiplier multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB5Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB6Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.4 </b></td>
                      <td class="text-left">
                          Steel-Mechanical, Electrical & Plumbing (MEP) floor system
                      </td>
                      <td>Area</td>
                      <td multiplier>5.00</td>
                      <td multiplier>6.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB7Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB8Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.5 </b></td>
                      <td class="text-left">
                          Prefinished wall with MEP services
                      </td>
                      <td>Length</td>
                      <td multiplier>1.00</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB9Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC1Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.6 </b></td>
                      <td class="text-left">
                          Prefinished ceiling with MEP services
                      </td>
                      <td>Area</td>
                      <td multiplier>1.00</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC2Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC3Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.7 </b></td>
                      <td class="text-left">
                          Prefab MEP modules integrated with work platform/ catwalk
                      </td>
                      <td>Nos</td>
                      <td multiplier>3.00</td>
                      <td multiplier>5.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC4Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC5Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr style="font-weight: bold;" class="text-center">
                      <td colspan="2" rowspan="2">&nbsp;</td>
                      <td rowspan="2" >Repetition of
                          Layouts</td>
                      <td style="padding: 0px;" colspan="2">
                          Percentage of Coverage
                      </td>
                      <td  rowspan="2">Percentage of Coverage</td>
                      <td  rowspan="2">Buildable Design Score</td>
                  </tr>
                  <tr class="text-center">
                      <td >
                          <b>&ge; 65% to &lt; 80%</b>
                      </td>
                      <td >
                          <b>&ge; 80%</b>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  rowspan="3" style="background-color: yellow;"><b> A2.8(a)
                          </b></td>
                      <td class="text-left" rowspan="2" style="background-color: yellow;">
                          Prefabricated bathroom units pre-assembled off-site complete with
                          finishes,
                          sanitary wares, concealed pipes, conduits, ceiling, bathroom cabinets,
                          shower
                          screen and fittings before installing in position - in nos.
                          (<i>mandatory for residential non-landed projects and the residential
                              non-landed
                              component of mixed-use developments under the Government Land Sales
                              Programme</i>)
                      </td>
                      <td>≥40</td>
                      <td multiplier>4.00</td>
                      <td multiplier>5.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC8Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmC9Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td>&lt;40</td>
                      <td multiplier>3.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD2Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td style="background-color: yellow;">
                          Description of accepted
                          PBU system: <sup><i>see Note 17</i></sup>
                      </td>
                      <td colspan="5">
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD3Base"
                              suffix="0">
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A2.8(b) </b></td>
                      <td class="text-left">
                          Prefabricated bathroom/toilet units pre-assembled off-site complete with
                          finishes,
                          piping / wiring - in nos.
                      </td>
                      <td><b>N.A.</b></td>
                      <td multiplier>2.00</td>
                      <td multiplier>3.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD4Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');disabledTextBox(this)"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD5Base"
                              suffix="0" disabled c1-totals c2-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 2<sup>nd</sup> Class
                              (Upper)(C2)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA2Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA2Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A3 2<sup>nd</sup> CLASS (LOWER)</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Advanced prefab systems</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A3.1 </b></td>
                      <td class="text-left">
                          Structural steel
                      </td>
                      <td>Area</td>
                      <td multiplier>2.00</td>
                      <td multiplier>3.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD6Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD7Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.2 </b></td>
                      <td class="text-left">
                          Unitized curtain wall
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD8Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmD9Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.3 </b></td>
                      <td class="text-left">
                          Prefinished wall (e.g Precast wall with off-site finishes)
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE2Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.4 </b></td>
                      <td class="text-left">
                          Prefinished slab
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE3Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmB8Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.5 </b></td>
                      <td class="text-left">
                          Prefinished ceiling
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE5Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE6Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.6 </b></td>
                      <td class="text-left">
                          Prefab MEP modules e.g pipes, cable trays/ trunking etc
                      </td>
                      <td>Nos</td>
                      <td multiplier>2.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE7Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE8Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A3.7 </b></td>
                      <td class="text-left">
                          Prefab MEP plant modules e.g pump, compressor etc
                      </td>
                      <td>Nos</td>
                      <td multiplier>2.00</td>
                      <td multiplier>4.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmE9Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF1Base"
                              suffix="0" disabled c1-totals c3-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 2<sup>nd</sup> Class
                              (Lower)(C3)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA3Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA3Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A4 3<sup>rd</sup> CLASS</b></td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>Prefabricated components</b></td>
                  </tr>

                  <tr class="text-center">
                      <td ><b> A4.1 </b></td>
                      <td class="text-left">
                          Integrated precast components comprising at least 2 elements (e.g
                          multi-tier
                          column/wall, double bay facade wall)
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF2Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF3Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.2 </b></td>
                      <td class="text-left">
                          Precast external wall with cast-in windows - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>2.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF4Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF5Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.3 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast column/ precast wall (horizontal
                          joints)<sup> <i>see Note 18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF6Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF7Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.4 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast beam joints <sup> <i>see Note
                                  18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF8Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmF9Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.5 </b></td>
                      <td class="text-left">
                          Mechanical connection for precast wall (vertical joints) <sup> <i>see
                                  Note
                                  18</i></sup>
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>0.50</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG1Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG2Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.6 </b></td>
                      <td class="text-left">
                          Prefabricated wall/ facade with onsite dry applied finishes
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG3Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG4Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.7 </b></td>
                      <td class="text-left">
                          Prefabricated slab with onsite dry applied finishes
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG5Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG6Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.8 </b></td>
                      <td class="text-left">
                          Prefabricated ceiling with onsite dry applied finishes
                      </td>
                      <td>Area</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG7Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG8Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG8Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td  style="background-color: yellow;"><b> A4.9 </b></td>
                      <td class="text-left" style="background-color: yellow;">
                          Prefabricated and pre-insulated duct for air- conditioning system<i>
                              (mandatory for all projects)</i>
                      </td>
                      <td>Area</td>
                      <td multiplier>0.50</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmG9Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH1Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.10 </b></td>
                      <td class="text-left">
                          Flexible sprinkler dropper - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH2Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH3Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.11 </b></td>
                      <td class="text-left">
                          Flexible water pipes - in nos.
                      </td>
                      <td>Nos</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH4Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH5Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td ><b> A4.12 </b></td>
                      <td class="text-left">
                          Common M&E bracket (at least 3 M&E services) - in length
                      </td>
                      <td>Length</td>
                      <td style="background-color: grey;">&nbsp;</td>
                      <td multiplier>1.00</td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH6Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH7Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmH7Base"
                              suffix="0" disabled c1-totals c4-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for 3<sup>rd</sup> Class
                              (C4)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA4Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA4Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"><b>A5. OTHER SYSTEMS NOT LISTED IN BDAS (Please seek BCA's
                              advice on the system before proceeding)</b></td>
                  </tr>
                  <tr>
                      <td ><b> A5.1 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA1Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA1Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI2Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI3Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI4Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI4Base"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td><b> A5.2 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA2Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA2Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI5Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI5Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI6Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI6Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI7Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI710Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI8Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI610Base"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td><b> A5.3 </b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA3Base10" dont-centerbox
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_TitleA3Base"
                              suffix="0" maxlength="1024">
                          </cn2-textbox>
                      </td>
                      <td class="text-center"><b>N.A.</b></td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI9Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmI7Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ1Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ1Base"
                              suffix="0" event-blur="formatDecimal(this, '2');" maxlength="6">
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ2Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ2Base"
                              suffix="0"
                              event-blur="percentChoice(this, '2', '65-79.999:80-100');"
                              maxlength="6" currency>
                          </cn2-textbox>
                      </td>
                      <td>
                          <cn2-textbox id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ3Base10"
                              no-label prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_VolmJ3Base"
                              suffix="0" disabled c1-totals c5-subtotal>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for other (C5)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA5Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA5Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>Sub-total for DfMA C = C1 + C2 + C3 +
                              C4 + C5
                              <br>(maximum 20 points)</b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA6Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr class="text-center">
                      <td colspan="6" class="text-right"><b>GRAND TOTAL (A + B + C)<br>
                              (maximum 110 points)
                          </b>
                      </td>
                      <td>
                          <cn2-textbox
                              id="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA7Base10"
                              no-label
                              prefix="CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotalA7Base"
                              suffix="0" disabled>
                          </cn2-textbox>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="7"
                          style="border-left: none; border-right: none; border-bottom: none;">
                          <p style="font-style: italic;">
                              All notes to refer to Explanatory Notes under Buildable Features.
                          </p>
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


  // if (document.getElementById("PartOfAppl_Bs01_Cop10").checked == true || document.getElementById("PartOfAppl_Bs03_Cop10").checked == true) {
  //   document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");
  // } else {
  //   document.querySelector("[app-type-bs-01-03]").setAttribute("hidden", "");
  // }

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
