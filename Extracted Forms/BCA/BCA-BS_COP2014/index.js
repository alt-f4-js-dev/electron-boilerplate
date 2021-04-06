let lastPage = "";
let lastAppType = "bs01";
let isChangeApp = false;
let oldBlockNo = "";
let pageDiv = null;

document.addEventListener("DOMContentLoaded", function (event) {
  formNameVersion("form__name", "form__version");

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

  for (let blckchildTR of document.querySelectorAll("[blockchildtr]")) {
    for (let a of blckchildTR.querySelectorAll("cn2-textbox")) {
      a.shadowRoot.querySelector("input").style.textAlign =
        "center";
      a.shadowRoot.querySelector("input").style.color = "green";
    }
  }
  // for page always on top when selected
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
  // for (let a of document.querySelectorAll("td")) {
  //   a.classList.add("align-middle");
  // }

  // removing all align-middle class of td cells of page 3
  for (let a of document.querySelector("#page2").querySelectorAll("td")) {
    a.classList.remove("align-middle");
  }

  // setting multiplier attribute to blue
  for (let a of document.querySelectorAll("[multiplier]")) {
    a.style.color = "blue";
    a.style.fontWeight = "bold";
  }

  // setting the text-align of some textboxes to center
  for (let a of document
    .getElementById("page5")
    .querySelectorAll("cn2-textbox")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let a of document
    .getElementById("page6")
    .querySelectorAll("cn2-textbox")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  for (let a of document.getElementById("page6").querySelectorAll("td")) {
    a.setAttribute("page-owner", "page6");
  }

  // putting the events for decimal formatting
  for (let a of document.querySelectorAll("[decimal-format]")) {
    a.setAttribute("event-blur", "displayZero(this);");
    a.setAttribute(
      "event-input",
      "decimalFormat(this, event); computeSub(this);"
    );
    if (!a.hasAttribute("dont-centerbox")) {
      a.shadowRoot.querySelector("input").style.textAlign = "center";
    }
  }

  // for validating if all mandatory fields in page5 is filled up
  for (let a of document
    .querySelector("[gfa-table]")
    .querySelectorAll("cn2-textbox")) {
    a.setAttribute(
      "event-blur",
      "validateProjectDetailsPage(); formatDecimal(this, '2');"
    );
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
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
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

function appTypeChanged(type) {
  let types = ["bs01", "bs02", "bs03"];
  if (types.includes(type)) {
    let index = types.indexOf(type);
    let formTitle = [
      `SUBMISSION OF BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 6 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
      `SUBMISSION OF STRUCTURAL BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 7 of the Building Control (Buildability & Productivity) Regulations`,
      `SUBMISSION OF AS-BUILT BUILDABLE DESIGN SCORE CALCULATIONS <br> Regulation 13 of the Building Control (Buildability & Productivity) Regulations (Cap.29)`,
    ];
    let formName = ["BCA-BS01_COP2014", "BCA-BS02_COP2014", "BCA-BS03_COP2014"];
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

    // removing checked and mandatory attribute when atleast one radio is selected
    for (let a of document.querySelectorAll('[name="devRadio"]')) {
      if (a.hasAttribute("checked")) a.setAttribute("checked", "");
      if (a.hasAttribute("mandatory")) a.setAttribute("mandatory", "");

      a.checked == false;
    }

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

    // ------------------------------------------------------------------------------------
    // let navbar = document.querySelector("[qpPage]");
    // let page = document.querySelector("[struc]");
    // if (["bs01", "bs03"].includes(type)) {
    //   navbar.setAttribute(
    //     "label",
    //     `Particulars and Declaration by Qualified Person for Structural Works`
    //   );
    //   page.querySelectorAll(
    //     "h2"
    //   )[0].innerHTML = `Section II Particulars of Qualified Person for Structural Works`;
    // } else {
    //   navbar.setAttribute(
    //     "label",
    //     `Particulars and Declaration by Qualified Person for Architectural and Structural Works`
    //   );
    //   page.querySelectorAll(
    //     "h2"
    //   )[0].innerHTML = `Section III Particulars of Qualified Person for Structural Works`;
    // }
  }
}

// when any application type radio is clicked
function showByAppType(el) {
  let appTypeVal = document.getElementById(el.id).getAttribute("app-type"); // getting the application type of the clicked radio

  appTypeChanged(appTypeVal);

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

  document.getElementById("PartOfAppl_TotaBuilDesiScor10").value = "0";
  document.getElementById("PartOfAppl_TotaBuilDesiScor20").value = "0";

  // searching for DIVs that the selected application type is supposed to be showing
  if (appTypeVal == "bs01") {
    document.getElementById("declaPerson").innerHTML = "s"
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

    for (let a of document.querySelectorAll("[group-id='bs0102']")) {
      a.removeAttribute("hidden");
    }
    for (let a of document.querySelectorAll("[group-id='bs01']")) {
      a.removeAttribute("hidden");
    }
    for (let a of document.querySelectorAll("[group-id='bs02']")) {
      a.setAttribute("hidden", "");
    }
    for (let b of document.querySelectorAll("[group-id='bs03']")) {
      b.setAttribute("hidden", "");
    }
    //document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");
    //document.getElementById("bscop02").setAttribute("hidden", "");
    //App Type BS01 AND BS03 ------------------------
    let bs01ANDbs03 = document.querySelectorAll("[bs01ANDbs03]");
    for (let target of bs01ANDbs03) {
      //remove hidden
      if (target.hasAttribute("hidden")) target.removeAttribute("hidden");
      //set all mandatory fields
      setMandatoryToMDIV(target.id);
    }
  } else if (appTypeVal == "bs02") {
    document.getElementById("declaPerson").innerHTML = ""
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
    for (let a of document.querySelectorAll("[group-id='bs0102']")) {
      a.removeAttribute("hidden");
    }
    for (let a of document.querySelectorAll("[group-id='bs01']")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll("[group-id='bs02']")) {
      a.removeAttribute("hidden");
    }
    for (let b of document.querySelectorAll("[group-id='bs03']")) {
      b.setAttribute("hidden", "");
    }
    //document.querySelector("[app-type-bs-01-03]").setAttribute("hidden", "");
    //App Type BS01 AND BS03 -----------------------
    let bs01ANDbs03 = document.querySelectorAll("[bs01ANDbs03]");
    for (let target of bs01ANDbs03) {
      //hide all
      target.setAttribute("hidden", "");
      //remove mandatory in all fields
      setMandatoryToMDIV(target.id);
      //Empty all fields
      emptyValueAll(target.id);
    }
  } else if (appTypeVal == "bs03") {
    document.getElementById("declaPerson").innerHTML = "s"
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
    for (let a of document.querySelectorAll("[group-id='bs0102']")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll("[group-id='bs01']")) {
      a.setAttribute("hidden", "");
    }
    for (let a of document.querySelectorAll("[group-id='bs02']")) {
      a.setAttribute("hidden", "");
    }
    for (let b of document.querySelectorAll("[group-id='bs03']")) {
      b.removeAttribute("hidden");
    }
    document.getElementById("PartOfAppl_BuilDesiScoSame10").checked = true;
    //document.querySelector("[app-type-bs-01-03]").removeAttribute("hidden");
    //document.getElementById("bscop02").setAttribute("hidden", "");
    //App Type BS01 AND BS03 ------------------------
    let bs01ANDbs03 = document.querySelectorAll("[bs01ANDbs03]");
    for (let target of bs01ANDbs03) {
      //remove hidden
      if (target.hasAttribute("hidden")) target.removeAttribute("hidden");
      //set all mandatory fields
      setMandatoryToMDIV(target.id);
    }
  }

  // resseting block page when changing application type
  // if (lastAppType != "" && lastAppType != appTypeVal) {
  let deleteInstance = function (value) {
    if (value != 1) {
      isChangeApp = true;
      document
        .querySelectorAll("[danger-bdsss]")
      [value - 1].shadowRoot.querySelector("button")
        .click();
      return deleteInstance(value - 1);
    } else {
      document
        .querySelector("[danger-bdsss]")
        .setAttribute("blockowner", "01");
      return document
        .querySelector("[danger-bdsss]")
        .getAttribute("blockowner");
    }
  };

  let blockPage = document.querySelector(
    "[block-page='" +
    deleteInstance(document.querySelectorAll("[danger-bdsss]").length) +
    "']"
  );

  for (let a of blockPage.querySelectorAll("cn2-textbox:not([disabled])")) {
    if (!a.hasAttribute("page-block-no")) {
      if (a.hasAttribute("event-input"))
        a.shadowRoot.querySelector("input").oninput();
      if (a.hasAttribute("event-blur"))
        a.shadowRoot.querySelector("input").onblur();
    }
  }
  for (let a of blockPage.querySelectorAll("cn2-textbox")) {
    if (!(a.hasAttribute("proj-ref-no") || a.hasAttribute("page-block-no"))) {
      a.value = "";
    }
  }
  for (let a of blockPage.querySelectorAll("[raw-value]")) {
    a.removeAttribute("raw-value");
  }
  if (
    blockPage.querySelectorAll("cn2-textbox[page-block-no]")[0].value != "01"
  ) {
    blockPage.querySelectorAll("cn2-textbox[page-block-no]")[0].value = "01";
    blockPage
      .querySelectorAll("cn2-textbox[page-block-no]")[0]
      .shadowRoot.querySelector("input")
      .onblur();
  }
  document.querySelectorAll("[total-blocks]")[0].value = "1";
  document.querySelector("[total-bds-round]").value = "";
  document
    .querySelectorAll("[blockchildtr]")[0]
    .querySelector("td").innerHTML = "";
  document
    .querySelectorAll("[typical-block-list]")[0]
    .querySelector("[role='tablist']").innerHTML = "";
  jsonData["01"] = [];
  //  }

  //lastAppType = appTypeVal;
  deleteBtnStatus();

  //reset page 5
  let page5 = document.getElementById("page5");
  let checkboxes = page5.querySelectorAll("cn2-checkbox");
  let textBox = page5.querySelectorAll("cn2-textbox");
  let radio = page5.querySelectorAll("input");

  for (let a of checkboxes) {
    a.checked = false;
  }
  for (let b of textBox) {
    if (
      b.id != "CalcOfOverBuil_ProjDetl_ProjRefNo10" ||
      b.hasAttribute("block")
    ) {
      b.value = "";
      b.setAttribute("disabled", "");
      b.removeAttribute("mandatory");
      if (b.hasAttribute("gfa-type")) {
        b.removeAttribute("placeholder");
      }
    }
  }
  for (let c of radio) {
    c.checked = false;
    c.setAttribute("checked", "");
    c.setAttribute("mandatory", "");
  }

  validateProjectDetailsPage();

  if (document
    .querySelectorAll("[typical-block-list]")[0] != undefined || document
      .querySelectorAll("[typical-block-list]")[0] != null) {
    document
      .querySelectorAll("[typical-block-list]")[0]
      .querySelector("[role='tablist']").innerHTML = "";
  }

  jsonData["01"] = [];

  document.getElementById("CalcOfOverBuil_ProjDetl_TotaNoOfBlk10").value = "1";
  document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_BlkNm10").value =
    "01";
  document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_FlooArea10").value =
    "0.00";
  document.getElementById(
    "CalcOfOverBuil_BuilDesiScoreSumm_PercOfFlooArea10"
  ).value = "0.00";
  document.getElementById(
    "CalcOfOverBuil_BuilDesiScoreSumm_BuilDesiScor10"
  ).value = "0.00";
  document.getElementById(
    "CalcOfOverBuil_BuilDesiScoreSumm_AppoBuilDesiScor10"
  ).value = "0.00";
  document.querySelector("[target='page5']").removeAttribute("hidden");
  for (let a of document.querySelectorAll("[page4-totalbds]")) {
    a.value = 0
  }
}

// for validating if all mandatory fields in page5 is filled up
function validateProjectDetailsPage() {
  let noRequired = true;
  let totalGFA = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorRequ10").value;
  stopHere: for (let a of document
    .getElementById("page5")
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
    document.querySelector("[total-blocks-add]").removeAttribute("disabled");
  } else {
    for (let a of document.querySelectorAll("[project-details-show]")) {
      a.setAttribute("hidden", "");
    }
    document.querySelector("[total-blocks-add]").setAttribute("disabled", "");
  }
}

// when one of the four development options radio is selected in page 7
function devOptions() {
  // removing checked and mandatory attribute when atleast one radio is selected
  for (let a of document.querySelectorAll('[name="devRadio"]')) {
    if (a.hasAttribute("checked")) a.removeAttribute("checked");
    if (a.hasAttribute("mandatory")) a.removeAttribute("mandatory");
  }
  minimumBuildDesignScore();
  validateProjectDetailsPage();
}

function minimumBuildDesignScore(temp) {
  // let existingVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_WorkWithExisBldg10").value;
  // let newWorkVal = document.getElementById("CalcOfOverBuil_ProjDetl_SubGfa_NewWork10").value;

  let totalGFA = document.getElementById(
    "CalcOfOverBuil_ProjDetl_TotaGfa10"
  ).value;

  let values = {
    0: [0, 70, 73, 75, 78, 78, 81],
    1: [0, 57, 57, 57, 57, 57, 57],
    2: [0, 77, 80, 82, 85, 85, 88],
    3: [0, 60, 60, 60, 60, 60, 60],
    4: [0, 79, 82, 84, 87, 87, 90],
    5: [0, 62, 62, 62, 62, 62, 62],
    6: [0, 79, 82, 84, 87, 87, 90],
    7: [0, 62, 62, 62, 62, 62, 62],
    8: [0, 70, 73, 76, 79, 79, 82],
    9: [0, 60, 60, 60, 60, 60, 60],
    10: [0, 74, 77, 79, 82, 82, 85],
    11: [0, 60, 60, 60, 60, 60, 60],
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

      percentageValue = parseFloat(val / totalGFA);

      if (!isNaN(parseFloat(totalGFA))) {
        for (let a of document.querySelectorAll('[name="devRadio"]')) {
          let parsed = parseFloat(totalGFA);
          if (parsed == 0) {
            index = 0;
          } else if (parsed >= 2000 && parsed < 5000) {
            if (a.checked === true) {
              if (
                a.id == "CalcOfOverBuil_ProjDetl_Deve10" ||
                a.id == "CalcOfOverBuil_ProjDetl_Deve30"
              ) {
                index = 1;
              } else if (a.id == "CalcOfOverBuil_ProjDetl_Deve20") {
                index = 2;
              } else {
                index = 1;
              }
            }
          } else if (parsed >= 5000 && parsed < 25000) {
            if (a.checked === true) {
              if (
                a.id == "CalcOfOverBuil_ProjDetl_Deve10" ||
                a.id == "CalcOfOverBuil_ProjDetl_Deve30"
              ) {
                index = 3;
              } else if (a.id == "CalcOfOverBuil_ProjDetl_Deve20") {
                index = 4;
              } else {
                index = 2;
              }
            }
          } else if (parsed >= 25000) {
            if (a.checked === true) {
              if (
                a.id == "CalcOfOverBuil_ProjDetl_Deve10" ||
                a.id == "CalcOfOverBuil_ProjDetl_Deve30"
              ) {
                index = 5;
              } else if (a.id == "CalcOfOverBuil_ProjDetl_Deve20") {
                index = 6;
              } else {
                index = 3;
              }
            }
          } else {
            index = 0;
          }
        }
      }

      total += values[type][index] * percentageValue;
    }
  }

  if (totalGFA != 0) {
    document.querySelector("[total-bds-round]").value = !isNaN(Math.round(total)) ? Math.round(total) : "0";
  } else {
    document.querySelector("[total-bds-round]").value = !isNaN(Math.round(0)) ? Math.round(0) : "0";
  }

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

  if (existWorkSubGFA.value && newWorkSubGFA.value) {
    totalGFA.value = (
      parseFloat(existWorkSubGFA.value) + parseFloat(finalDecimal)
    ).toFixed(2);
  } else if (newWorkSubGFA.value) {
    totalGFA.value = finalDecimal;
  } else {
    totalGFA = "";
  }

  for (let a of document.querySelectorAll('[name="devRadio"]')) {
    //if radio is checked
    if (a.checked === true) {
      validateProjectDetailsPage();
      minimumBuildDesignScore(totalGFA.value);
    }
  }
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

  if (newWorkSubGFA.value && existWorkSubGFA.value) {
    totalGFA.value = (
      parseFloat(newWorkSubGFA.value) + parseFloat(finalDecimal)
    ).toFixed(2);
  } else if (existWorkSubGFA.value) {
    totalGFA.value = finalDecimal;
  } else {
    totalGFA = "";
  }

  for (let a of document.querySelectorAll('[name="devRadio"]')) {
    //if radio is checked
    if (a.checked === true) {
      validateProjectDetailsPage();
      minimumBuildDesignScore(totalGFA.value);
    }
  }
}

// activating the textbox beside the clicked checkbox
function activateNextTextbox(el, textbox) {
  if (document.getElementById(el.id).checked) {
    // enabling the textbox
    document.getElementById(textbox).value = "";
    if (document.getElementById(textbox).hasAttribute("disabled")) {
      document.getElementById(textbox).removeAttribute("disabled");
      document.getElementById(textbox).setAttribute("mandatory", "");
    }

    document.getElementById(textbox).value = "0.00"
    document.getElementById(textbox).shadowRoot.querySelector("input").removeAttribute("class")
    document.getElementById(textbox).shadowRoot.querySelector("input").setAttribute("class", "form-control inline-input-control col-xs-10 col-sm-10 col-md-10 col-lg-10")
  } else {
    // disabling the textbox
    document.getElementById(textbox).value = "";
    document.getElementById(textbox).setAttribute("disabled", "");
    if (document.getElementById(textbox).hasAttribute("mandatory")) {
      document.getElementById(textbox).removeAttribute("mandatory");
    }
  }

  // calling the computation of Sub GFA in page 9 function when applicable
  if (document.getElementById(el.id).hasAttribute("sub-type")) {
    computeSub(document.getElementById(el.id));
  }

  validateProjectDetailsPage();
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
  minimumBuildDesignScore();
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

// disable/enable delete button in add/delete when only one form/field is present
function deleteBtnStatus() {
  let value = document.querySelector("[total-blocks]").value; // handles the total count of rows in the table

  for (let a of document.querySelectorAll("[danger-bdsss]")) {
    if (value > 1) {
      if (a.hasAttribute("disabled")) a.removeAttribute("disabled"); // enabling the delete button
    } else if (value == "1") {
      a.setAttribute("disabled", ""); // disabling the delete button
    }
  }
}

// duplicating the block page
function duplicatePage(el) {
  // for loader
  document.getElementById("maskID").removeAttribute("hidden");
  setTimeout(function () {
    document.getElementById("maskID").setAttribute("hidden", "");
  }, 10000);

  document
    .querySelector("[target='page1']")
    .shadowRoot.querySelector("button")
    .click();

  // duplicating page ------------------------------------------------------------------------------------------------------------------------------------------
  let counter =
    [...document.querySelectorAll("[block-page]")]
      .map((el) => el.getAttribute("block-page"))
      .filter((v) => !isNaN(parseInt(v)))
      .map((v) => parseInt(v))
      .sort()[document.querySelectorAll("[block-page]").length - 1] + 1;
  let counterLabel = "";
  if (counter < 10 && counter > 0) {
    counterLabel = `0${counter}`;
  } else {
    counterLabel = counter;
  }

  jsonData[counterLabel] = [];

  let clonePage = document.querySelectorAll("[block-page]")[0].cloneNode(true);

  let pageID =
    [...document.querySelectorAll("cn2-nav-button[project-details-show]")]
      .map((r) => r.getAttribute("target"))
      .map((r) => r.replace("page", ""))
      .map((r) => parseInt(r))
      .sort()[document.querySelectorAll("cn2-nav-button[project-details-show]").length - 1] + 1;

  let pageCount = document.getElementById("page").children.length + 1;
  let cloneNav = document.querySelectorAll("[page-number]")[0].cloneNode(true);

  // formatting the outerHTML of clonePage
  clonePage.setAttribute("id", `page${pageID}`);
  clonePage.setAttribute("block-page", counterLabel);
  clonePage.setAttribute("project-details-show", "");
  clonePage.removeAttribute("style");
  clonePage.removeAttribute("hidden");
  clonePage.querySelector('[role="tablist"]').innerHTML = "";
  clonePage.querySelector("[typical-modal]").setAttribute("hidden", "");
  for (let a of clonePage.querySelectorAll("[non-typical-modal]")) {
    if (a.id != "9-2") {
      a.removeAttribute("hidden");
    }
  }
  clonePage.querySelector("[close-this]").setAttribute("close-this", "close");
  clonePage.querySelector("[prefix='TypiBlocNoName']").value = "";
  clonePage
    .querySelector("[prefix='TypiBlockAdd']")
    .removeAttribute("disabled");
  clonePage
    .querySelector("[prefix='TypiBlockRemove']")
    .setAttribute("disabled", "");
  clonePage
    .querySelector("[prefix='TypiBlockEdit']")
    .setAttribute("disabled", "");
  clonePage
    .querySelector("[prefix='TypiBlockSave']")
    .setAttribute("disabled", "");

  // formatting the outerHTML of cloneNav
  cloneNav.setAttribute("target", `page${pageID}`);
  cloneNav.setAttribute("page-number", pageCount);
  cloneNav.setAttribute("label", `${counterLabel}`);
  cloneNav.removeAttribute("style");
  cloneNav.removeAttribute("selected");
  cloneNav.setAttribute("project-details-show", "");
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
    jsonData[newID] = "";
    a.value = "";
  }

  // changing of page-owner
  for (let a of clonePage.querySelectorAll("[page-owner]")) {
    a.setAttribute("page-owner", `page${pageID}`);
  }
  // changing the H2
  clonePage.querySelector(
    "h2"
  ).innerHTML = `Part III : Computation of Buildable Design Score - ${counterLabel}`;
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
  let cloneTR = document.querySelectorAll(`[blocktr]`)[0].cloneNode(true);
  let cloneChildTR = document
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
      jsonData[a.getAttribute("prefix") + counter + a.getAttribute("suffix")] =
        "0.00";
    }
  }

  for (let a of cloneTR.querySelectorAll("cn2-textbox")) {
    if (!a.hasAttribute("dont-centerbox"))
      a.shadowRoot.querySelector("input").style.textAlign = "center";
  }

  cloneTR.setAttribute("blocktr", counterLabel);
  cloneTR.querySelector("[danger]").setAttribute("blockOwner", counterLabel);
  cloneChildTR.setAttribute("blockchildtr", counterLabel);

  document.querySelector("[block-tr]").appendChild(cloneTR);
  document.querySelector("[block-tr]").appendChild(cloneChildTR);
  document.getElementById("page").appendChild(clonePage);
  document.getElementById("menu").appendChild(cloneNav);

  document.querySelector("[total-blocks]").value =
    parseInt(document.querySelector("[total-blocks]").value) + 1;
  document
    .querySelector(`[target="page${pageID}"]`)
    .shadowRoot.querySelector("button")
    .click();
  deleteBtnStatus();
}

// for removing a block page
function removePage(el) {
  // removing page ------------------------------------------------------------------------------------------------------------------------------------------
  if (
    document
      .querySelector(
        "[blocktr='" +
        document.getElementById(el.id).getAttribute("blockOwner") +
        "']"
      )
      .nextElementSibling.querySelector("td")
      .querySelectorAll("table").length == 0 ||
    isChangeApp
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

    let deleteBlockPage = document.getElementById("page").querySelector(
      "#" +
      document
        .getElementById("menu")
        .querySelector(
          "cn2-nav-button[label='" +
          document.getElementById(el.id).getAttribute("blockOwner") +
          "']"
        )
        .getAttribute("target")
    );
    let deleteNav = document.querySelector(
      "[target='" + deleteBlockPage.id + "']"
    );
    let deleteNavNo = parseInt(deleteBlockPage.id.replace("page", ""));
    let nextSibPage = deleteBlockPage;

    delete jsonData[document.getElementById(el.id).getAttribute("blockOwner")];

    if (nextSibPage.nextElementSibling) {
      while (nextSibPage.nextElementSibling != null) {
        let currentPage = nextSibPage.nextElementSibling;
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

        nextSibPage = nextSibPage.nextElementSibling;
        deleteNavNo++;
        counterPage++;
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
    let deleteBlock = document.querySelector(
      "[blocktr='" +
      document.getElementById(el.id).getAttribute("blockOwner") +
      "']"
    );
    let deleteBlockChild = document.querySelector(
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
    deleteBlockChild.remove();

    document.querySelector("[total-blocks]").value =
      parseInt(document.querySelector("[total-blocks]").value) - 1;

    overAllTotal();
    deleteBtnStatus();
    isChangeApp = false;
  } else {
    if (!isChangeApp) {
      showMessage(
        "You cannot delete a block with Typical blocks.\nPlease delete the Typical blocks first."
      );
      return;
    } else {
      isChangeApp = false;
    }
  }
}

// for renaming block no./name
function changeBlockNo(el) {
  if (el.value != "") {
    let masterBlockPage = findBlock(document.getElementById(el.id));
    let masterBlock = document
      .querySelector(
        "[target='" + findBlock(document.getElementById(el.id)).id + "']"
      )
      .getAttribute("label");
    let rawBlocks = [];

    for (let a of document.querySelectorAll("[blocktr]")) {
      for (let b of a.querySelectorAll("[block]")) {
        rawBlocks.push(b.value);
      }
    }

    let temp1Blocks = rawBlocks.filter((a) => a != masterBlock);

    if (!temp1Blocks.includes(el.value)) {
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
            // for (let c of document.querySelectorAll(
            //   "[block-page='" + masterBlock + "']"
            // )) {
            //   c.setAttribute("block-page", el.value);
            // }
            document
              .querySelector("cn2-nav-button[label='" + masterBlock + "']")
              .setAttribute("label", "" + el.value);
            masterBlockPage.querySelector("h2[raw]").innerHTML =
              "Part III : Computation of Buildable Design Score - " + el.value;
            break stopHere;
          }
        }
      }
    } else {
      showMessage("The Block No. already exist");
      document.getElementById(el.id).value = masterBlock;
      return;
    }
  } else {
    el.value = findBlock(document.getElementById(el.id)).getAttribute(
      "block-page"
    );
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
function hideAddBlock(el) {
  let page = findBlock(document.getElementById(el.id));
  page.querySelector("[typical-modal]").setAttribute("hidden", "");
  for (let a of page.querySelectorAll("[non-typical-modal]")) {
    if (a.id != "9-2") {
      a.removeAttribute("hidden");
    }
  }
  page.querySelector("[close-this]").setAttribute("close-this", "close");

  for (let d of page
    .querySelector("[typical-block-list]")
    .querySelector("[role='tablist']")
    .querySelectorAll("a")) {
    if (d.className.includes("active")) d.classList.remove("active");
  }
  page.querySelector("[prefix='TypiBlocNoName']").value = "";
  page.querySelector("[prefix='TypiBlockAdd']").removeAttribute("disabled");
  page.querySelector("[prefix='TypiBlockRemove']").setAttribute("disabled", "");
  page.querySelector("[prefix='TypiBlockEdit']").setAttribute("disabled", "");
  page.querySelector("[prefix='TypiBlockSave']").setAttribute("disabled", "");
}

// find block page
function findBlock(el) {
  while (!el.hasAttribute("block-page")) {
    el = el.parentElement;
  }
  return el;
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
function addToTheList(el) {
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let counter = el.id.replace(
    document.getElementById(el.id).getAttribute("prefix"),
    ""
  );
  let val = document
    .getElementById("TypiBlocNoName" + counter)
    .value.toUpperCase();
  if (val != null || val != "") {
    if (document.getElementById("TypiBlocNoName" + counter).value.trim()) {
      if (!jsonData[masterBlock].includes(val)) {
        // adding in the list ---------------------------------------------------------------------------------------------------------------
        let area = document
          .getElementById("TypiBlocNoName" + counter)
          .parentElement.parentElement.parentElement.querySelector(
            "[typical-block-list]"
          )
          .querySelector("[role='tablist']");
        let newList = document.createElement("a");
        newList.classList.add("list-group-item");
        newList.classList.add("list-group-item-action");
        newList.setAttribute(
          "id",
          document.getElementById("TypiBlocNoName" + counter).value.toUpperCase()
        );
        newList.setAttribute("data-toggle", "list");
        newList.setAttribute("role", "tab");
        newList.style.fontWeight = "bold";
        newList.style.backgroundColor = "bold";
        newList.innerHTML = document
          .getElementById("TypiBlocNoName" + counter)
          .value.toUpperCase();
        newList.addEventListener("click", (event) => {
          if (
            page
              .querySelector("[prefix='TypiBlockSave']")
              .hasAttribute("disabled")
          ) {
            if (
              page
                .querySelector("[prefix='TypiBlockRemove']")
                .hasAttribute("disabled")
            )
              page
                .querySelector("[prefix='TypiBlockRemove']")
                .removeAttribute("disabled");
            if (
              page
                .querySelector("[prefix='TypiBlockEdit']")
                .hasAttribute("disabled")
            )
              page
                .querySelector("[prefix='TypiBlockEdit']")
                .removeAttribute("disabled");
          } else {
            page
              .querySelector("[prefix='TypiBlockRemove']")
              .setAttribute("disabled", "");
            page
              .querySelector("[prefix='TypiBlockEdit']")
              .setAttribute("disabled", "");
          }
        });

        area.appendChild(newList);
        document.getElementById("TypiBlocNoName" + counter).value = "";
        document.getElementById("TypiBlocNoName" + counter).focus();

        jsonData[masterBlock].push(val);

        // adding in the table ---------------------------------------------------------------------------------------------------------------

        let parentID = document
          .querySelector("[blockchildtr='" + masterBlock + "']")
          .previousElementSibling.querySelector(
            "[prefix='CalcOfOverBuil_BuilDesiScoreSumm_BlkNm']"
          )
          .id.replace(
            document
              .querySelector("[blockchildtr='" + masterBlock + "']")
              .previousElementSibling.querySelector(
                "[prefix='CalcOfOverBuil_BuilDesiScoreSumm_BlkNm']"
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
          "CalcOfOverBuil_BuilDesiScoreSumm_BlkNm" + parentID + "_" + childID
        );
        newCN2Textbox1.setAttribute(
          "prefix",
          "CalcOfOverBuil_BuilDesiScoreSumm_BlkNm"
        );
        newCN2Textbox1.setAttribute("suffix", "0");
        jsonData[
          "CalcOfOverBuil_BuilDesiScoreSumm_BlkNm" + parentID + "_" + childID
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
          "CalcOfOverBuil_BuilDesiScoreSumm_FlooArea" + parentID + "_" + childID
        );
        newCN2Textbox2.setAttribute(
          "prefix",
          "CalcOfOverBuil_BuilDesiScoreSumm_FlooArea"
        );
        newCN2Textbox2.setAttribute("suffix", "0");
        jsonData[
          "CalcOfOverBuil_BuilDesiScoreSumm_FlooArea" + parentID + "_" + childID
        ] = "0.00";
        newCN2Textbox2.setAttribute("disabled", "");
        newCN2Textbox2.setAttribute("floor", "");

        let newCN2Textbox3 = document.createElement("cn2-textbox");
        newCN2Textbox3.setAttribute("no-label", "");
        newCN2Textbox3.shadowRoot.querySelector("input").style.textAlign =
          "center";
        newCN2Textbox3.setAttribute(
          "id",
          "CalcOfOverBuil_BuilDesiScoreSumm_PercOfFlooArea" +
          parentID +
          "_" +
          childID
        );
        newCN2Textbox3.setAttribute(
          "prefix",
          "CalcOfOverBuil_BuilDesiScoreSumm_PercOfFlooArea"
        );
        newCN2Textbox3.setAttribute("suffix", "0");
        jsonData[
          "CalcOfOverBuil_BuilDesiScoreSumm_PercOfFlooArea" +
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
          "CalcOfOverBuil_BuilDesiScoreSumm_BuilDesiScor" +
          parentID +
          "_" +
          childID
        );
        newCN2Textbox4.setAttribute(
          "prefix",
          "CalcOfOverBuil_BuilDesiScoreSumm_BuilDesiScor"
        );
        newCN2Textbox4.setAttribute("suffix", "0");
        jsonData[
          "CalcOfOverBuil_BuilDesiScoreSumm_BuilDesiScor" +
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
          "CalcOfOverBuil_BuilDesiScoreSumm_AppoBuilDesiScor" +
          parentID +
          "_" +
          childID
        );
        newCN2Textbox5.setAttribute(
          "prefix",
          "CalcOfOverBuil_BuilDesiScoreSumm_AppoBuilDesiScor"
        );
        newCN2Textbox5.setAttribute("suffix", "0");
        jsonData[
          "CalcOfOverBuil_BuilDesiScoreSumm_AppoBuilDesiScor" +
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

        let newTBody = document.createElement("tbody");

        let newTR = document.createElement("tr");
        newTR.classList.add("text-center");

        let newTDBlock = document.createElement("td");
        newTDBlock.setAttribute("width", "16.55%");
        newTDBlock.appendChild(newCN2Textbox1);

        let newTDArea = document.createElement("td");
        newTDArea.setAttribute("width", "16.65%");
        newTDArea.appendChild(newCN2Textbox2);

        let newTDPercent = document.createElement("td");
        // let newTDPercentSymbol = document.createElement("span");
        // newTDPercentSymbol.innerHTML = "%";
        newTDPercent.setAttribute("width", "16.65%");
        newTDPercent.appendChild(newCN2Textbox3);
        // newTDPercent.appendChild(newTDPercentSymbol);

        let newTDBDS = document.createElement("td");
        newTDBDS.setAttribute("width", "16.65%");
        newTDBDS.appendChild(newCN2Textbox4);

        let newTDABDS = document.createElement("td");
        newTDABDS.setAttribute("width", "16.65%");
        newTDABDS.appendChild(newCN2Textbox5);

        let newTDDel = document.createElement("td");

        newTR.appendChild(newTDBlock);
        newTR.appendChild(newTDArea);
        newTR.appendChild(newTDPercent);
        newTR.appendChild(newTDBDS);
        newTR.appendChild(newTDABDS);
        newTR.appendChild(newTDDel);
        newTBody.appendChild(newTR);
        newChild.appendChild(newTBody);
        for (let a of newChild.querySelectorAll("cn2-textbox")) {
          a.shadowRoot.querySelector("input").style.color = "green";
        }
        childField.appendChild(newChild);

        distributeTotal(
          el,
          findBlock(document.getElementById(el.id)).getAttribute("block-page")
        );

        document.querySelector("[total-blocks]").value =
          parseInt(document.querySelector("[total-blocks]").value) + 1;
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

}

// for deleting the typical block no./name
function removeFromTheList(el) {
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
    let childField = document
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

    distributeTotal(
      el,
      findBlock(document.getElementById(el.id)).getAttribute("block-page")
    );

    document.querySelector("[total-blocks]").value =
      parseInt(document.querySelector("[total-blocks]").value) - 1;
  }
}

// for editing the typical block no./name
function editFromTheList(el) {
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let selected = findBlock(document.getElementById(el.id))
    .querySelector("[typical-block-list]")
    .querySelector("[role='tablist']")
    .querySelector(".active");
  let val = selected.innerHTML.toUpperCase()
  if (val != null || val != "") {
    if (selected) {
      let newJSON = jsonData[masterBlock].filter(
        (a) => a != selected.innerHTML
      );
      delete jsonData[masterBlock];
      jsonData[masterBlock] = newJSON;

      // selected.remove();

      page.querySelector("[prefix='TypiBlocNoName']").value = val;
      findBlock(document.getElementById(el.id))
        .querySelector("[prefix='TypiBlockAdd']")
        .setAttribute("disabled", "");
      findBlock(document.getElementById(el.id))
        .querySelector("[prefix='TypiBlockRemove']")
        .setAttribute("disabled", "");
      findBlock(document.getElementById(el.id))
        .querySelector("[prefix='TypiBlockEdit']")
        .setAttribute("disabled", "");
      findBlock(document.getElementById(el.id))
        .querySelector("[prefix='TypiBlockSave']")
        .removeAttribute("disabled");

      oldBlockNo = val;
    }
  }

}

// saving the editted block name/no.
function saveToTheList(el) {
  let masterBlock = findBlock(document.getElementById(el.id)).querySelector(
    "[page-block-no-default]"
  ).value;
  let page = findBlock(document.getElementById(el.id));
  let oldSelected = oldBlockNo;
  let newSelected = page
    .querySelector("[prefix='TypiBlocNoName']")
    .value.toUpperCase();
  if (newSelected != "" || newSelected != null) {
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

          page.querySelector("[prefix='TypiBlocNoName']").value = "";
          page.querySelector("[prefix='TypiBlocNoName']").focus();

          jsonData[masterBlock].push(newSelected);

          findBlock(document.getElementById(el.id))
            .querySelector("[prefix='TypiBlockAdd']")
            .removeAttribute("disabled");
          findBlock(document.getElementById(el.id))
            .querySelector("[prefix='TypiBlockRemove']")
            .removeAttribute("disabled");
          findBlock(document.getElementById(el.id))
            .querySelector("[prefix='TypiBlockEdit']")
            .removeAttribute("disabled");
          findBlock(document.getElementById(el.id))
            .querySelector("[prefix='TypiBlockSave']")
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
}

// distribute the total of master row in the child row/s
function distributeTotal(el, masterBlock) {
  masterBlock = document
    .querySelector("[block-page='" + masterBlock + "']")
    .querySelector("cn2-textbox[page-block-no]").value;
  let page6_1 = document.getElementById("page6_1");
  let page = findBlock(document.getElementById(el.id));
  let childFieldNew = page6_1
    .querySelector("[blockchildtr='" + masterBlock + "']")
    .querySelector("td");
  let childIDNew = childFieldNew.children.length + 1;
  let allFloorArea = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1']"
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
  let allBDSCheck = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo']"
  ).value
    ? page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_BlocNo']"
    ).value
    : "0.00";
  if (allBDSCheck > 100) {
    allBDS = (100).toFixed(2)
  } else {
    allBDS = allBDSCheck
  }
  let perallBDSRaw = !isNaN(parseFloat(allBDS) * (perFloorAreaRaw / 100))
    ? parseFloat(allBDS) * (perFloorAreaRaw / 100)
    : "0.00";
  let perallBDS = !isNaN(
    (parseFloat(allBDS) * (perFloorAreaRaw / 100)).toFixed(2)
  )
    ? (parseFloat(allBDS) * (perFloorAreaRaw / 100)).toFixed(2)
    : "0.00";

  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[floor]").value = allFloorArea;
  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-floor]").value = perFloorArea;
  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[percent-floor]")
    .setAttribute("raw-value", perFloorAreaRaw);
  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[bds]").value = allBDS;
  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]").value = perallBDS;
  page6_1
    .querySelector("[blocktr='" + masterBlock + "']")
    .querySelector("[abds]")
    .setAttribute("raw-value", perallBDSRaw);

  for (let a of page6_1.querySelectorAll(
    "[blockchildtr='" + masterBlock + "']"
  )) {
    for (let b of a.querySelectorAll("[floor]")) {
      b.value = allFloorArea;
    }
  }
  for (let a of page6_1.querySelectorAll(
    "[blockchildtr='" + masterBlock + "']"
  )) {
    for (let b of a.querySelectorAll("[percent-floor]")) {
      b.value = perFloorArea;
      b.setAttribute("raw-value", perFloorAreaRaw);
    }
  }
  for (let a of page6_1.querySelectorAll(
    "[blockchildtr='" + masterBlock + "']"
  )) {
    for (let b of a.querySelectorAll("[bds]")) {
      b.value = allBDS;
      b.setAttribute("raw-value", allBDS);
    }
  }
  for (let a of page6_1.querySelectorAll(
    "[blockchildtr='" + masterBlock + "']"
  )) {
    for (let b of a.querySelectorAll("[abds]")) {
      b.value = perallBDS;
      b.setAttribute("raw-value", perallBDSRaw);
    }
  }

  overAllTotal();
}

// for totals in page 8
function overAllTotal() {
  let page6 = document.getElementById("page6_1");
  let totalAreaField = page6.querySelector("[total-area]");
  let totalPercentField = page6.querySelector("[total-percent]");
  let totalABDSField = page6.querySelector("[total-abds]");
  let totalABDSRoundedField = page6.querySelector("[total-abds-rounded]");
  let totalBDSOnPage4 = document.querySelectorAll("[page4-totalbds]");
  //let totalBDSOnPage4B = document.querySelector("[page4-totalbds2]");
  let totalArea = [...page6.querySelectorAll("[floor]")]
    .filter((a) => !isNaN(parseFloat(a.value)))
    .map((a) => parseFloat(a.value))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  let totalABDS = [...page6.querySelectorAll("[abds]")]
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

  for (let a of page6.querySelectorAll("[floor]")) {
    let total = page6.querySelector("[total-area]").value;
    findTR(a).querySelector("[percent-floor]").removeAttribute("raw-value")
    findTR(a).querySelector("[percent-floor]").value = !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2)
    findTR(a).querySelector("[percent-floor]").setAttribute("raw-value", !isNaN(
      (parseFloat(a.value) / parseFloat(total) * 100)) ?
      (parseFloat(a.value) / parseFloat(total) * 100).toFixed(2) : parseFloat(0).toFixed(2))
  }

  for (let a of page6.querySelectorAll("[abds]")) {
    let b = parseFloat(findTR(a).querySelector("[percent-floor]").value) / 100;
    let c = parseFloat(findTR(a).querySelector("[bds]").value);

    b = !isNaN(b) ? b : 0.00
    c = !isNaN(c) ? c : 0.00

    a.value = (b * c).toFixed(2);
  }

  page6.querySelector("[total-abds]").value = [...page6.querySelectorAll("[abds]")]
    .map((el) => parseFloat(el.value))
    .reduce((a, b) => a + b)
    .toFixed(2);

  page6.querySelector("[total-abds-rounded]").value = Math.round(
    [...page6.querySelectorAll("[abds]")]
      .map((el) => parseFloat(el.value))
      .reduce((a, b) => a + b)
  );

  let score = document.getElementById("CalcOfOverBuil_BuilDesiScoreSumm_TotaBuilDesiScorForThisProj10").value

  // totalBDSOnPage4B.value = !isNaN(Math.round(score))
  //   ? Math.round(score)
  //   : "0";
  for (let a of totalBDSOnPage4) {
    a.value = !isNaN(Math.round(score)) ? Math.round(score) : "0";
  }
}

// computing SS
function computeTotalTable(el, type, totalField, pattern) {
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

    table.querySelector("[prefix='" + totalField + "']").value = !isNaN(
      totalTable.toFixed(2)
    )
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
  function run(el) {
    let page = findBlock(document.getElementById(el.id));
    let totalFieldSS = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1']"
    );
    let totalFieldSSPercent = page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl2']"
    );

    // for computing the percent
    let subTotalsList = [
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_PreConcSyst_SubTota']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_StruSteeSyst_SubTota']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_CastInsiSys_SubTota']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_RoofSyst_SubTota']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNot3']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotA3']"
      ).value,
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_OtheStrucSystNotB3']"
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
      : (totalFieldSSPercent.value = "0.00");

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
          field.value = !isNaN(multiplier) ? multiplier.toFixed(2) : "";
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

  BDS_SS_A4(el);
  BDS_WS_B3(el);
  BDS_BLK(el);
}

// for computation per row
function computeRows(el, pattern, isPercent) {
  let page = findBlock(document.getElementById(el.id));
  let total = parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_TotaFlooAreaIncl1']"
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
          ? (field.value = parseFloat(percentVal).toFixed(2) + "%")
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

        let percentVal = Number(Math.round(parseFloat(a.value) / total + 'e4') + 'e-4')
        let product = parseFloat(percentVal * multiplier * 45);
        let roundOff = Number(Math.round(product + 'e3') + 'e-3');
        field.setAttribute("raw-value", product);

        if (product.countDecimals() == 1) {
          product = product + "0";
        } else if (product.countDecimals() > 2) {
          product = product.toFixed(2);
        } else if (product.countDecimals() == 0) {
          product = product + ".00";
        }

        parseFloat(product) > 0 ? (field.value = (Number(Math.round(roundOff + 'e2') + 'e-2')).toFixed(2)) : (field.value = "");
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


            if (product.countDecimals() == 1) {
              product = product + "0";
            } else if (product.countDecimals() > 2) {
              product = product.toFixed(3);
            } else if (product.countDecimals() == 0) {
              product = product + ".00";
            }
            let roundOff = Math.round(product * 100) / 100
            prefix = document.getElementById(el.id).getAttribute("prefix")
            parseFloat(product) > 0
              ? (field.value = roundOff.toFixed(2))
              : (field.value = "");
            field.setAttribute("raw-value", roundOff);
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
          "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4']"
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
        if (a.id == "CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1" + index) {
          brickwallCalculation(document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk1" + index), !isNaN(percentVal) ? percentVal : 0)
        } else if (a.id == "CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2" + index) {
          brickwallCalculation(document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystB_BricBlk2" + index), !isNaN(percentVal) ? percentVal : 0)
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
  let index = el.id.slice(-2)
  let textBox1 = document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2" + index)
  let textBox2 = document.getElementById("CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2" + index)

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
  BDS_BLK(el)
}

// for computing WS B5_1 BDS
function BDS_WS_B5_1(el) {
  let page = findBlock(document.getElementById(el.id));
  let c3TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts']"
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
  let page = findBlock(document.getElementById(el.id));
  let total = 0;
  let field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts']"
  );
  let first = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts']"
    ).value)) ? parseFloat(
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts']"
      ).value).toFixed(2) : 0.00

  let second = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2']"
    ).value)) ? parseFloat(
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BH2']"
      ).value).toFixed(2) : 0.00

  let third = !isNaN(parseFloat(
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2']"
    ).value)) ? parseFloat(
      page.querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_BI2']"
      ).value).toFixed(2) : 0.00

  if (first < 0) {
    first = -Math.abs(first);
  }
  if (second < 0) {
    second = -Math.abs(second);
  }
  if (third < 0) {
    third = -Math.abs(third);
  }

  total = parseFloat(first) + parseFloat(second) + parseFloat(third)
  //field.setAttribute("raw-value", total.toFixed(2));
  field.value = total.toFixed(2)

  BDS_WS(el);
}

// for combining the two subtotals
function combineTwoSub(el) {
  let page = findBlock(document.getElementById(el.id));
  let sumOne = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1']"
  ).value;
  sumOne == ""
    ? (page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng1']"
    ).value = "0.00")
    : "";
  let sumTwo = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2']"
  ).value;
  sumTwo == ""
    ? (page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng2']"
    ).value = "0.00")
    : "";
  let sumField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng4']"
  );
  let sumFieldPercent = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaWallLeng3']"
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

  BDS_WS_B2(el);
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
  //BDS_WS_B4(el);
  BDS_SS_A4(el);

  //BLK_BLK_A1(el);
  //BLK_BLK_A2(el);
  //BLK_BLK_A3(el);
  //BLK_BLK_A4(el);
  //BLK_BLK_A5(el);

  BDS_BLK(el);
}

// validating if value is -1 or zero
function onlyZeroOrNegativeOne(el) {
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
  BDS_WS_B5_1(el);
  BDS_BLK(el);
}

// for computing SS A1 BDS
function BDS_SS_A1(el) {
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru']"
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
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein']"
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

// for computing SS A3 BDS
function BDS_SS_A3(el) {
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaStruSyst']"
  );
  let a1Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru']"
  ).value;
  let a2Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein']"
  ).value;

  let formattedA1 = !isNaN(parseFloat(a1Field)) ? parseFloat(a1Field) : 0;
  let formattedA2 = !isNaN(parseFloat(a2Field)) ? parseFloat(a2Field) : 0;
  let sum = formattedA1 + formattedA2;

  totalField.setAttribute("raw-value", sum);
  !isNaN(parseFloat(sum))
    ? (totalField.value = parseFloat(sum).toFixed(2))
    : (totalField.value = "");

  BDS_SS(el);
}

// for computing SS A4 BDS
function BDS_SS_A4(el) {
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS']"
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
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaSS']"
  );
  let fields = page.querySelectorAll("[page-ss]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSyst_SubTotaForStru']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaPrefRein']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_TotaBonuPntsSS']"
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
  for (let a of fields) {
    !isNaN(parseFloat(formattedTotal))
      ? (a.value = parseFloat(formattedTotal).toFixed(2))
      : (a.value = "");
  }

  BDS_Total(el);
}

// for computing WS B1 BDS
function BDS_WS_B1(el) {
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1']"
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
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn']"
  );
  let b1Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeig3']"
  ).value;
  let b2Field = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_CurtWallFullHeigA3']"
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
}

// for computing WS B3 BDS
function BDS_WS_B3(el) {
  let page = findBlock(document.getElementById(el.id));
  let c3TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubTotaOtheBonu']"
  );

  let c3Total = 0;
  let subC3Total = [];
  for (let b of page.querySelectorAll(`[b3-totals]`)) {
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

// for computing WS B5 BDS
function BDS_WS(el) {
  let page = findBlock(document.getElementById(el.id));
  let totalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaOfWallSystB']"
  );
  let fields = page.querySelectorAll("[page-ws]");
  let field1 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubtWallSystB1']"
  ).value;
  let field2 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaSmplDsgn']"
  ).value;
  let field3 = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_SubTotaOtheBonu']"
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
  for (let a of fields) {
    !isNaN(parseFloat(formattedTotal))
      ? (a.value = parseFloat(formattedTotal).toFixed(2))
      : (a.value = "");
  }

  BDS_Total(el);
}

// for computing BLK BDS
function BDS_BLK(el) {
  let page = findBlock(document.getElementById(el.id));
  let c1TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubOtheBuildDesi']"
  );
  let c2TotalField = page.querySelector(
    "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubBnusPntsBuild']"
  );
  // let c3TotalField = page.querySelector(
  //   "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_DemePnts']"
  // );
  // let b1Demerit = page.querySelector(
  //   "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_0']"
  // );
  // let demerit = page.querySelector(
  //   "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts']"
  // );
  let fields = page.querySelectorAll("[page-bf]");

  // for C1s
  let c1Total = 0;
  let subC1Total = [];
  for (let b of page.querySelectorAll(`[c1-totals]`)) {
    if (!isNaN(parseFloat(b.value))) subC1Total.push(parseFloat(b.value));
  }
  c1Total += parseFloat(
    subC1Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedC1Total = 0;
  if (c1Total > 10) {
    formattedC1Total = 10;
  } else {
    formattedC1Total = c1Total;
  }

  c1TotalField.setAttribute("raw-value", formattedC1Total);
  c1TotalField.value = formattedC1Total.toFixed(2);
  // end of C1s

  // for C2s
  let c2Total = 0;
  let subC2Total = [];
  for (let b of page.querySelectorAll(`[c2-totals]`)) {
    if (!isNaN(parseFloat(b.value))) subC2Total.push(parseFloat(b.value));
  }
  c2Total += parseFloat(
    subC2Total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  );

  let formattedC2Total = 0;
  if (c2Total > 20) {
    formattedC2Total = 20;
  } else {
    formattedC2Total = c2Total;
  }

  c2TotalField.setAttribute("raw-value", formattedC2Total);
  c2TotalField.value = formattedC2Total.toFixed(2);
  // end of C2s

  // for C2s
  let c3Total = 0;
  let subC3Total = [];
  for (let b of page.querySelectorAll(`[c3-totals]`)) {
    if (!isNaN(parseFloat(b.value))) subC3Total.push(parseFloat(b.value));
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

  // c3TotalField.setAttribute("raw-value", formattedC3Total);
  // c3TotalField.value = formattedC3Total.toFixed(2);
  // // end of C2s

  // // for overall demerit points
  // let newC3TotalField = -Math.abs(
  //   parseFloat(c3TotalField.value.replace("", "").trim())
  // );
  // let newB1Demerit = -Math.abs(
  //   parseFloat(b1Demerit.value.replace("", "").trim())
  // );

  // demerit.setAttribute("raw-value", parseFloat(newC3TotalField + newB1Demerit));
  // demerit.value = parseFloat(newC3TotalField + newB1Demerit)
  //   ? parseFloat(newC3TotalField + newB1Demerit).toFixed(2)
  //   : 0.0;

  let tempRawValues = [
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubOtheBuildDesi']"
      )
      .getAttribute("raw-value"),
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubBnusPntsBuild']"
      )
      .getAttribute("raw-value"),
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts']"
      )
      .value,
  ];

  let filteredRawValues = tempRawValues.filter((a) => !isNaN(parseFloat(a)));
  let rawValues = filteredRawValues.map((a) => parseFloat(a));

  let total = parseFloat(rawValues.reduce((a, b) => a + b, 0));
  for (let a of fields) {
    !isNaN(parseFloat(total))
      ? (a.value = parseFloat(total).toFixed(2))
      : (a.value = "");
  }

  BDS_Total(el);
}

// for computing BDS
function BDS_Total(el) {
  let page = findBlock(document.getElementById(el.id));
  let fields = page.querySelectorAll("[page-blk]");
  let tempRawValues = [
    page
      .querySelector(
        "[prefix='CalcOfOverBuil_CompOfBuilDesi_SubTotaSS']"
      )
      .value,
    page
      .querySelector("[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystB_TotaOfWallSystB']")
      .value,
    page
      .querySelector("[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubOtheBuildDesi']")
      .value,
    page
      .querySelector("[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubBnusPntsBuild']")
      .value,
    page
      .querySelector("[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_SubTotaDemePnts']")
      .value,
  ];

  let filteredRawValues = tempRawValues.filter((a) => !isNaN(parseFloat(a)));
  let rawValues = filteredRawValues.map((a) => parseFloat(a));

  let total = parseFloat(rawValues.reduce((a, b) => a + b, 0));

  if (total > 100) {
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota']"
    ).value = (100).toFixed(2);
    for (let a of fields) {
      a.value = (100).toFixed(2)
    }
  } else {
    page.querySelector(
      "[prefix='CalcOfOverBuil_CompOfBuilDesi_StruSystC_GranTota']"
    ).value = !isNaN(parseFloat(total)) ? parseFloat(total).toFixed(2) : "";
    for (let a of fields) {
      !isNaN(parseFloat(total))
        ? (a.value = parseFloat(total).toFixed(2))
        : (a.value = "");
    }
  }

  let masterBlock = findBlock(document.getElementById(el.id)).getAttribute(
    "block-page"
  );
  distributeTotal(el, masterBlock);
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

    let listGroup = document.querySelectorAll("[role='tab']");
    for (let groupChildBlock of listGroup) {
      groupChildBlock.remove();
    }

    document.getElementById("CalcOfOverBuil_ProjDetl_TotaNoOfBlk10").value =
      "1";
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

function notSame(el, other, cell) {
  if (el.value != "") {
    let page = findBlock(document.getElementById(el.id));
    let row = findTR(document.getElementById(el.id));
    let value = other
      .map((r) => page.querySelector("[prefix='" + r + "']").value)
      .some((r) => r != "");

    if (value) {
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

