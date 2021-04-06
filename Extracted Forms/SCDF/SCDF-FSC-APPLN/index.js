let alreadyHasOne = false;
let alreadyHasOneId = "";
let defaults = {};

document.addEventListener("DOMContentLoaded", function (event) {
  // showMessage(
  //   "Please note that QP Company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
  // );

  if (
    !document
      .querySelector("cn2-nav-button[target='page1']")
      .hasAttribute("valid")
  ) {
    validateRILoad();
  }

  document.getElementById("COC").innerHTML = "COC number";
  document.getElementById("COC2").innerHTML = "COC number";
  document.getElementById("PN").innerHTML = "product name";

  let bpPlan1 = document.querySelector("[group-id = 'appvBPplan']");
  let fpPlan1 = document.querySelector("[group-id = 'appvFPPplan']");
  let mvPlan1 = document.querySelector("[group-id = 'appvMVPplan']");

  let bpPlan2 = document.querySelector("[group-id = 'appvBPplan2']");
  let fpPlan2 = document.querySelector("[group-id = 'appvFPPplan2']");
  let mvPlan2 = document.querySelector("[group-id = 'appvMVPplan2']");

  if (bpPlan1.data != 0) {
    bpPlan1.removeAttribute("hidden");
    bpPlan2.setAttribute("hidden", "");
  } else {
    bpPlan2.removeAttribute("hidden");
    bpPlan1.setAttribute("hidden", "");
  }

  if (fpPlan1.data != 0) {
    fpPlan1.removeAttribute("hidden");
    fpPlan2.setAttribute("hidden", "");
  } else {
    fpPlan2.removeAttribute("hidden");
    fpPlan1.setAttribute("hidden", "");
  }

  if (mvPlan1.data != 0) {
    mvPlan1.removeAttribute("hidden");
    mvPlan2.setAttribute("hidden", "");
  } else {
    mvPlan2.removeAttribute("hidden");
    mvPlan1.setAttribute("hidden", "");
  }

  let componentList = [
    "cn2-textbox",
    "cn2-textarea",
    "cn2-select",
    "cn2-datefield",
    "cn2-checkbox",
    "input",
  ];

  let currentContainer = document.getElementById("riForm");
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

function generateRandomNumber(array) {
  let newNumber = Math.floor(Math.random() * 1000 + 1);
  if (array.includes(newNumber)) {
    generateRandomNumber(array);
  } else {
    return newNumber;
  }
}

// set mandatory to "m" when form will be hidden
function setMandatoryToM(con) {
  if (con) {
    for (let a of con) {
      document.getElementById(a.id).removeAttribute("mandatory");
      document.getElementById(a.id).setAttribute("m", "");
      document.getElementById(a.id).value = "";
    }
  }
}

// set "m" to mandatory when form will be show
function setMToMandatory(con) {
  if (con) {
    for (let a of con) {
      document.getElementById(a.id).removeAttribute("m");
      document.getElementById(a.id).setAttribute("mandatory", "");
      document.getElementById(a.id).value = "";
    }
  }
}

function PartOfRI_A_Form1Form2_change(element) {
  element = document.getElementById(element.id);
  let radios = document.querySelectorAll("[name=" + element.name + "]");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
    radio.setAttribute("c", "");
    radio.setAttribute("m", "");
  }
}

function PartOfCompFire_ApplType10_change(element) {
  let textbox = document.getElementById("ptfpDesc");
  let value = element.value.trim();
  if (value === "Partial Temporary Fire Permit") {
    textbox.removeAttribute("hidden");
    setMToMandatory(textbox.querySelectorAll("[m]"));
  } else {
    textbox.setAttribute("hidden", "");
    setMandatoryToM(textbox.querySelectorAll("[mandatory]"));
  }
}

function PartOfCompFire_HasThisProjBeen_change() {
  let radioSet = [
    document.getElementById("PartOfCompFire_HasThisProjBeen_No10"),
    document.getElementById("PartOfCompFire_HasThisProjBeen_YesPartTFP10"),
    document.getElementById("PartOfCompFire_HasThisProjBeen_YesFullTFP10"),
  ];

  for (let radioTargets of radioSet) {
    radioTargets.removeAttribute("mandatory");
    radioTargets.removeAttribute("checked");
  }
}

function QPDeclBldg_BldgType10_change(element) {
  let value = element.value.trim();
  let tabTr = document.getElementById("pubBuil");
  let hh = document.getElementById("QPDeclBldg_HabiHts10");
  let bfa = document.getElementById("QPDeclBldg_BaseFlrArea10");
  let sys = document.getElementById("QPDeclBldg_Syst10");
  let systD = document.getElementById("syst");
  let bfaTd = document.getElementById("bfaTd");
  let nstd = document.getElementById("nstd");
  let imtd1 = document.getElementById("imtd1");
  let imtd2 = document.getElementById("imtd2");
  let pubBuil = [
    document.getElementById("QPDeclBldg_HabiHts10"),
    document.getElementById("QPDeclBldg_HabiHts20"),
    document.getElementById("QPDeclBldg_BaseFlrArea10"),
  ];
  tabTr.removeAttribute("hidden");
  if (value === "Public building (inclusive of commercial building)") {
    hh.setAttribute(
      "options",
      "<9 storey:<9 storey, >=9 storey and <30 storey (including basement):>=9 storey and <30 storey (including basement), >=31 storey (including basement):>=31 storey (including basement)"
    );
    bfa.setAttribute(
      "options",
      "<10/,000sqm:<10/,000sqm, >=10/,000sqm:>=10/,000sqm"
    );
    sys.value = "";
    hh.value = "";
    bfa.value = "";
    bfaTd.removeAttribute("hidden");
    nstd.removeAttribute("hidden");
    imtd1.removeAttribute("hidden");
    systD.setAttribute("hidden", "");
    imtd2.setAttribute("hidden", "");
    for (let target of pubBuil) {
      target.value = "";
      target.setAttribute("mandatory", "");
    }
    document.getElementById("QPDeclBldg_HabiHts30").value = "";
    document
      .getElementById("QPDeclBldg_HabiHts30")
      .removeAttribute("mandatory");
  } else if (value === "Private residential") {
    bfaTd.setAttribute("hidden", "");
    nstd.setAttribute("hidden", "");
    imtd1.setAttribute("hidden", "");
    hh.setAttribute(
      "options",
      "<=24m or <=8 storey:<=24m or <=8 storey, >24m or >8 storey:>24m or >8 storey"
    );
    imtd2.removeAttribute("hidden");
    systD.removeAttribute("hidden");
    hhtd.removeAttribute("hidden");
    for (let target of pubBuil) {
      target.value = "";
      target.removeAttribute("mandatory");
    }
    document.getElementById("QPDeclBldg_HabiHts30").value = "";
    document
      .getElementById("QPDeclBldg_HabiHts30")
      .setAttribute("mandatory", "");
  } else if ((value = "Industrial")) {
    hh.value = "";
    bfa.value = "";
    sys.value = "";
    hh.setAttribute(
      "options",
      "<=24m:<=24m, >24m:>24m, >=31 storey (including basement):>=31 storey (including basement)"
    );
    bfa.setAttribute(
      "options",
      "<10/,000sqm:<10/,000sqm, >=10/,000sqm:>=10/,000sqm"
    );
    bfaTd.removeAttribute("hidden");
    nstd.removeAttribute("hidden");
    imtd1.removeAttribute("hidden");
    systD.setAttribute("hidden", "");
    imtd2.setAttribute("hidden", "");
    for (let target of pubBuil) {
      target.value = "";
      target.setAttribute("mandatory", "");
    }
    document.getElementById("QPDeclBldg_HabiHts30").value = "";
    document
      .getElementById("QPDeclBldg_HabiHts30")
      .removeAttribute("mandatory");
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

function uenValidate(el) {
  if (el.value != "          ") {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "This field is limited to 10 characters and the UEN format is #########@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
        );
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
  }
}

function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function PartOfAppl_TypeOfPlan_change(element) {
  let gfa = document.getElementById("gfa");
  let sgfa = document.getElementById("sgfa");
  let pg8 = document.getElementById("page8");
  let adj8 = document.querySelector('[target="page8"]');
  let adj9 = document.querySelector('[target="page9"]');
  let adj10 = document.querySelector('[target="page10"]');
  let radios = document.querySelectorAll("[name='PartOfAppl_TypeOfPlan_name']");
  for (let radio of radios) {
    radio.removeAttribute("checked");
    radio.removeAttribute("mandatory");
  }
  if (element.id === "PartOfAppl_TypeOfPlan10") {
    // New fire safety works
    sgfa.removeAttribute("hidden");
    if (document.getElementById(sgfa.id).querySelectorAll("[m]"))
      setMToMandatory(document.getElementById(sgfa.id).querySelectorAll("[m]"));
    pg8.removeAttribute("hidden");
    if (document.getElementById(pg8.id).querySelectorAll("[m]"))
      setMToMandatory(document.getElementById(pg8.id).querySelectorAll("[m]"));
    adj8.removeAttribute("hidden");

    gfa.setAttribute("hidden", "");
    if (document.getElementById(gfa.id).querySelectorAll("[mandatory]"))
      setMandatoryToM(
        document.getElementById(gfa.id).querySelectorAll("[mandatory]")
      );
    adj8.setAttribute("page-number", "8");
    adj9.setAttribute("page-number", "9");
    adj10.setAttribute("page-number", "10");
  } else {
    // Amendment to approved fire safety works, Change of Use/ Alteration and Additions to existing fire safety works
    gfa.removeAttribute("hidden");
    if (document.getElementById(gfa.id).querySelectorAll("[m]"))
      setMToMandatory(document.getElementById(gfa.id).querySelectorAll("[m]"));

    sgfa.setAttribute("hidden", "");
    if (document.getElementById(sgfa.id).querySelectorAll("[mandatory]"))
      setMandatoryToM(
        document.getElementById(sgfa.id).querySelectorAll("[mandatory]")
      );
    pg8.setAttribute("hidden", "");
    if (document.getElementById(pg8.id).querySelectorAll("[mandatory]"))
      setMandatoryToM(
        document.getElementById(pg8.id).querySelectorAll("[mandatory]")
      );
    adj8.setAttribute("hidden", "");

    adj8.setAttribute("page-number", "");
    adj9.setAttribute("page-number", "8");
    adj10.setAttribute("page-number", "9");
  }
}

function QPDeclCertConf_IDeclThat_change(element) {
  let subm9 = document.getElementById("QPDeclFSC0_IDecl_PLSDecl10");
  if (element.id === "QPDeclCertConf_IDeclThat10") {
    subm9.removeAttribute("checked");
    subm9.removeAttribute("mandatory");
  } else {
    subm9.setAttribute("checked", "");
    subm9.setAttribute("mandatory", "");
  }
}

function duplicateOneForm(formContainer, formField, category) {
  let container = document.getElementById(formContainer);
  let clonedForm = container.lastElementChild.cloneNode(true);
  let containerCount = container.childElementCount;
  let generalCounter = containerCount + 1;
  let counters = clonedForm.querySelectorAll("[counter-form]");

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

  if (clonedForm.querySelectorAll("[radio1-ri-validate]")) {
    let currents = clonedForm.querySelectorAll("[radio1-ri-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("radio1-ri-validate", generalCounter);
    }
  }
  if (clonedForm.querySelectorAll("[radio2-ri-validate]")) {
    let currents = clonedForm.querySelectorAll("[radio2-ri-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("radio2-ri-validate", generalCounter);
    }
  }
  if (clonedForm.querySelectorAll("[ri-validate]")) {
    let currents = clonedForm.querySelectorAll("[ri-validate]");
    for (let a of currents) {
      clonedForm
        .querySelector("#" + a.id)
        .setAttribute("ri-validate", generalCounter);
    }
  }

  if (clonedForm.querySelectorAll("[danger-main]")) {
    let deleteBtn2 = clonedForm.querySelectorAll("[danger-main]");
    for (let x of deleteBtn2) {
      x.removeAttribute("event-click");
      let newEvent2 = "";
      if (category != "" && category != undefined) {
        newEvent2 = `removeOneForm('bpPlan', '${clonedForm.id}', '${category}'); disableDelete('bpPlan', '${category}')`;
      } else {
        newEvent2 =
          "checkIfHasOne(this, 'riForm', 'delete' ,'" +
          clonedForm.id +
          "'); removeOneForm('" +
          formContainer +
          "', '" +
          clonedForm.id +
          "'); disableDelete('riForm', '.delete1C');";
      }
      x.setAttribute("event-click", newEvent2);
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

  container.appendChild(clonedForm);
}

function removeOneForm(formCon, form, category) {
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
          // x.checked = defaults[oldName];
        }
      }

      if (currentDiv.querySelectorAll("[danger-main]")) {
        let deleteBtn2 = currentDiv.querySelectorAll("[danger-main]");
        for (let x of deleteBtn2) {
          x.removeAttribute("event-click");
          let newEvent2 = "";
          if (category != "" && category != undefined) {
            newEvent2 = `removeOneForm('bpPlan', '${currentDiv.id}', '${category}'); disableDelete('bpPlan', '${category}')`;
          } else {
            newEvent2 =
              "checkIfHasOne(this, 'riForm', 'delete', '" +
              currentDiv.id +
              "'); removeOneForm('" +
              formCon +
              "', '" +
              currentDiv.id +
              "'); disableDelete('riForm', '.delete1C');";
          }
          x.setAttribute("event-click", newEvent2);
        }
      }

      if (currentDiv.querySelectorAll("[radio1-ri-validate]")) {
        let currents = currentDiv.querySelectorAll("[radio1-ri-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("radio1-ri-validate", generalCounter);
        }
      }
      if (currentDiv.querySelectorAll("[radio2-ri-validate]")) {
        let currents = currentDiv.querySelectorAll("[radio2-ri-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("radio2-ri-validate", generalCounter);
        }
      }
      if (currentDiv.querySelectorAll("[ri-validate]")) {
        let currents = currentDiv.querySelectorAll("[ri-validate]");
        for (let a of currents) {
          currentDiv
            .querySelector("#" + a.id)
            .setAttribute("ri-validate", generalCounter);
        }
      }
    }
  }
}

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

function checkIfHasOne(el, container, trigger, id) {
  let con = document.getElementById(container);
  let divs = con.querySelectorAll("[main-con]");
  let counter = 1;

  if (trigger == "delete") {
    if (
      con.querySelector("#" + id).getAttribute("main-con") == alreadyHasOneId
    ) {
      alreadyHasOne = false;
      alreadyHasOneId = "";
    }
  }

  for (let div of divs) {
    let form1 = document
      .getElementById(div.id)
      .querySelectorAll("[ri-validate]");
    for (let a of form1) {
      // document.getElementById(a.id).setAttribute("ri-validate", counter);
      if (alreadyHasOne) {
        noMandatory(a.id);
      } else {
        yesMandatory(a.id);
      }
    }

    let form2 = document
      .getElementById(div.id)
      .querySelectorAll("[radio1-ri-validate]");
    for (let a of form2) {
      // document.getElementById(a.id).setAttribute("radio1-ri-validate", counter);
      if (document.getElementById(a.id).hasAttribute("c")) {
        document.getElementById(a.id).setAttribute("checked", "");
        document.getElementById(a.id).removeAttribute("c");
      }
      if (document.getElementById(a.id).hasAttribute("m")) {
        document.getElementById(a.id).setAttribute("mandatory", "");
        document.getElementById(a.id).removeAttribute("m");
      }

      if (alreadyHasOne) {
        noMandatory(a.id);
      } else {
        yesMandatory(a.id);
      }
    }

    let form3 = document
      .getElementById(div.id)
      .querySelectorAll("[radio2-ri-validate]");
    for (let a of form3) {
      // document.getElementById(a.id).setAttribute("radio2-ri-validate", counter);
      if (document.getElementById(a.id).hasAttribute("c")) {
        document.getElementById(a.id).setAttribute("checked", "");
        document.getElementById(a.id).removeAttribute("c");
      }
      if (document.getElementById(a.id).hasAttribute("m")) {
        document.getElementById(a.id).setAttribute("mandatory", "");
        document.getElementById(a.id).removeAttribute("m");
      }

      if (alreadyHasOne) {
        noMandatory(a.id);
      } else {
        yesMandatory(a.id);
      }
    }

    let labels = document.getElementById(div.id).querySelectorAll("[asterisk]");

    if (alreadyHasOne) {
      for (let x of labels) {
        if (document.getElementById(x.id).innerHTML.includes("*")) {
          let newLabel = document
            .getElementById(x.id)
            .innerHTML.replace("*", "");
          document.getElementById(x.id).innerHTML = newLabel;
        }
      }
    } else {
      for (let x of labels) {
        if (document.getElementById(x.id).innerHTML.includes("*")) {
        } else {
          document.getElementById(x.id).innerHTML =
            document.getElementById(x.id).innerHTML + "*";
        }
      }
    }

    counter++;
  }
}

function removeMandaOnCheck(el, name) {
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

  if (el != "that") validateRI(el);
}

function convertSelectToTextbox(id) {
  let select = document.getElementById(id);
  let attrs = {};
  for (
    var i = 0, atts = select.attributes, n = atts.length, arr = [];
    i < n;
    i++
  ) {
    attrs[atts[i].nodeName] = atts[i].nodeValue;
  }

  let text = document.createElement("cn2-textbox");
  for (let attr in attrs) {
    text.setAttribute(attr, attrs[attr]);
  }

  select.parentNode.replaceChild(text, select);
}

function validateRI(element) {
  let params = document.getElementById(element.id).hasAttribute("ri-validate")
    ? document.getElementById(element.id).getAttribute("ri-validate")
    : document.getElementById(element.id).hasAttribute("radio1-ri-validate")
      ? document.getElementById(element.id).getAttribute("radio1-ri-validate")
      : document.getElementById(element.id).getAttribute("radio2-ri-validate");

  let form = "C" + params;
  let container = document
    .getElementById(form)
    .querySelectorAll("[ri-validate='" + params + "']");
  let radio1 = document
    .getElementById(form)
    .querySelector("[radio1-ri-validate]").checked;
  let radio2 = document
    .getElementById(form)
    .querySelector("[radio2-ri-validate]").checked;

  let rawChilds = document.getElementById("riForm").children;
  let childs = [];
  for (let a of rawChilds) {
    if (a.id != form) {
      childs.push(a);
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
    if (!alreadyHasOne) {
      for (let a of childs) {
        let field1 = a.querySelectorAll("[ri-validate]");
        for (let x of field1) {
          noMandatory(x.id);
        }
        let field2 = a.querySelectorAll("[radio1-ri-validate]");
        for (let x of field2) {
          noMandatory(x.id);
        }
        let field3 = a.querySelectorAll("[radio2-ri-validate]");
        for (let x of field3) {
          noMandatory(x.id);
        }

        let labels = a.querySelectorAll("[asterisk]");
        for (let x of labels) {
          if (
            document
              .getElementById(a.id)
              .querySelector("#" + x.id)
              .innerHTML.includes("*")
          ) {
            let newLabel = document
              .getElementById(a.id)
              .querySelector("#" + x.id)
              .innerHTML.replace("*", "");
            document
              .getElementById(a.id)
              .querySelector("#" + x.id).innerHTML = newLabel;
          }
        }
      }
    }
    alreadyHasOneId = document.getElementById(form).getAttribute("main-con");
    alreadyHasOne = true;
  } else {
    if (!alreadyHasOne) {
      for (let a of childs) {
        let field1 = a.querySelectorAll("[ri-validate]");
        for (let x of field1) {
          yesMandatory(x.id);
        }
        let field2 = a.querySelectorAll("[radio1-ri-validate]");
        for (let x of field2) {
          yesMandatory(x.id);
        }
        let field3 = a.querySelectorAll("[radio2-ri-validate]");
        for (let x of field3) {
          yesMandatory(x.id);
        }

        let labels = a.querySelectorAll("[asterisk]");
        for (let x of labels) {
          if (
            document
              .getElementById(a.id)
              .querySelector("#" + x.id)
              .innerHTML.includes("*")
          ) {
          } else {
            document.getElementById(a.id).querySelector("#" + x.id).innerHTML =
              document.getElementById(a.id).querySelector("#" + x.id)
                .innerHTML + "*";
          }
        }
      }
      alreadyHasOneId = "";
      alreadyHasOne = false;
    }
  }
}

function onlyFloat(element) {
  let current = element.value;
  if (!Math.abs(current)) {
    document.getElementById(element.id).value = document
      .getElementById(element.id)
      .value.slice(0, -1);
  }
}

function inputZero(element) {
  if (element.value[element.value.length - 1] == ".") {
    document.getElementById(element.id).value = document
      .getElementById(element.id)
      .value.slice(0, -1);
  }
}

function tick(el) {
  if (el.checked) {
    if (document.getElementById(el.id).hasAttribute("checked"))
      document.getElementById(el.id).removeAttribute("checked");
    if (document.getElementById(el.id).hasAttribute("mandatory"))
      document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
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
    d.getFullYear() < 1900
  ) {
    if (datefield.hasAttribute("mandatory")) {
      datefield.removeAttribute("mandatory");
      datefield.setAttribute("mandatory", "");
    }
    datefield.value = "";
  }
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function QPDeclBldg_DesigEngiTimBldr_Yes10_change() {
  let yes = document.getElementById("QPDeclBldg_DesigEngiTimBldr_Yes10");
  // let no = document.querySelector(
  //   `[switch-id="QPDeclBldg_FullAutoMechCarPark_Yes10"]`
  // );
  //desi components
  let desiTable = document.querySelector("[group-id='desigEngTimber']");
  let deseSwitch = document.querySelector(
    `[switch-id="QPDeclBldg_AutofireDetec_Yes10"]`
  );
  //full components
  // let fullTable = document.querySelectorAll("[group-id='fullAutoMech']");
  // let fullSwitch = document.querySelector(
  //   `[switch-id="QPDeclBldg_InstFireProt_Yes10"]`
  // );
  // let textBoxes = document.querySelectorAll("[group-id='fullAutoTextBox']");
  if (yes.checked) {
    //no.checked = false;
    desiTable.removeAttribute("hidden");
    deseSwitch.checked = false;

    // for (let ft of fullTable) {
    //   ft.setAttribute("hidden", "");
    // }

    //fullSwitch.checked = false;

    // for (let text of textBoxes) {
    //   text.value = "";
    // }
    //document.getElementById("textbox1").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10").value = "";
    //document.getElementById("textbox2").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_AutofireDetec_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_AutofireDetec_Oth10").value = "";
  } else {
    desiTable.setAttribute("hidden", "");
    deseSwitch.checked = false;

    // for (let ft of fullTable) {
    //   ft.setAttribute("hidden", "");
    // }
    //fullSwitch.checked = false;

    // for (let text of textBoxes) {
    //   text.value = "";
    // }
    document.getElementById("textbox1").setAttribute("hidden", "");
    document
      .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
      .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10").value = "";
    //document.getElementById("textbox2").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_AutofireDetec_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_AutofireDetec_Oth10").value = "";
  }
}

function QPDeclBldg_FullAutoMechCarPark_Yes10_change() {
  let yes = document.getElementById("QPDeclBldg_FullAutoMechCarPark_Yes10");
  // let no = document.querySelector(
  //   `[switch-id="QPDeclBldg_DesigEngiTimBldr_Yes10"]`
  // );
  //desi components
  // let desiTable = document.querySelector("[group-id='desigEngTimber']");
  // let deseSwitch = document.querySelector(
  //   `[switch-id="QPDeclBldg_AutofireDetec_Yes10"]`
  // );
  //full components
  let fullTable = document.querySelectorAll("[group-id='fullAutoMech']");
  let fullSwitch = document.querySelector(
    `[switch-id="QPDeclBldg_InstFireProt_Yes10"]`
  );
  let textBoxes = document.querySelectorAll("[group-id='fullAutoTextBox']");
  if (yes.checked) {
    //no.checked = false;
    //desiTable.setAttribute("hidden", "");
    //deseSwitch.checked = false;

    for (let ft of fullTable) {
      ft.removeAttribute("hidden");
    }
    fullSwitch.checked = false;

    for (let text of textBoxes) {
      text.value = "";
      text.setAttribute("mandatory", "");
    }
    //document.getElementById("textbox1").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10").value = "";
    //document.getElementById("textbox2").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_AutofireDetec_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_AutofireDetec_Oth10").value = "";
  } else {
    //desiTable.setAttribute("hidden", "");
    //deseSwitch.checked = false;

    for (let ft of fullTable) {
      ft.setAttribute("hidden", "");
    }
    fullSwitch.checked = false;

    for (let text of textBoxes) {
      text.value = "";
      text.removeAttribute("disabled");
    }
    //document.getElementById("textbox1").setAttribute("hidden", "");
    // document
    //   .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
    //   .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10").value = "";
    document.getElementById("textbox2").setAttribute("hidden", "");
    document
      .getElementById("QPDeclBldg_AutofireDetec_Oth10")
      .removeAttribute("mandatory");
    // document.getElementById("QPDeclBldg_AutofireDetec_Oth10").value = "";
  }
}

function QPDeclBldg_AutofireDetec_Yes10_change() {
  let yes = document.getElementById("QPDeclBldg_AutofireDetec_Yes10");

  if (yes.checked) {
    document.getElementById("textbox1").removeAttribute("hidden");
    document
      .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("textbox1").setAttribute("hidden", "");
    document
      .getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10")
      .removeAttribute("mandatory");
    document.getElementById("QPDeclBldg_DesigEngiTimBldr_Oth10").value = "";
  }
}

function QPDeclBldg_InstFireProt_Yes10_change() {
  let yes = document.getElementById("QPDeclBldg_InstFireProt_Yes10");

  if (yes.checked) {
    document.getElementById("textbox2").removeAttribute("hidden");
    document
      .getElementById("QPDeclBldg_AutofireDetec_Oth10")
      .setAttribute("mandatory", "");
  } else {
    document.getElementById("textbox2").setAttribute("hidden", "");
    document
      .getElementById("QPDeclBldg_AutofireDetec_Oth10")
      .removeAttribute("mandatory");
    document.getElementById("QPDeclBldg_AutofireDetec_Oth10").value = "";
  }
}

function nricMaskingApp(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function nricMaskingQP(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function fileAttachCheck(
  element,
  objectName,
  isAllowMultiple,
  formName,
  sectionName
) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
      sectionName: sectionName,
    };
  } else {
    delete jsonData[objectName];
  }
}

//--------------START WEB SERVICE----------------

function updateAgencyUrl(jsonKey, query) {
  const agencyUrl = jsonData[jsonKey];
  let hostname =
    typeof agencyUrl === "object" && agencyUrl.length == 2
      ? typeof agencyUrl[0] === "object"
        ? agencyUrl[0].url
        : agencyUrl[0]
      : typeof agencyUrl === "object"
        ? agencyUrl.url
        : agencyUrl;

  jsonData[jsonKey]["method"] = "GET";
  jsonData[jsonKey]["url"] = hostname;
  jsonData[jsonKey]["params"] = query;
}

function isValid(string) {
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  if (lastTwo.test(string) || lastFour.test(string))
    return true;
  else
    return false;
}
function checkTemplateValid(el) {
  let bpPlans = document.querySelectorAll("[bpPlanNos]");
  let fpPlans = document.querySelectorAll("[fpPlanNos]");
  let mvPlans = document.querySelectorAll("[mvPlanNos]");

  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");


  for (let bpPlan of bpPlans) {
    if (lastTwo.test(bpPlan.value) || lastFour.test(bpPlan.value) || bpPlan.value === "") {
      // if (/\s/.test(el.value)) {
      bpPlan.removeAttribute("data-invalid");
      bpPlan.removeAttribute("err-data");

    } else {
      bpPlan.setAttribute("data-invalid", "");
      bpPlan.setAttribute("err-data", "");
      bpPlan
        .setAttribute(
          "data-invalid-message",
          "The SCDF Approved BP Plans Nos. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
        );
    }
    // } else {
    //   document.getElementById(el.id).removeAttribute("data-invalid");
    // }
  }
  for (let fpPlan of fpPlans) {
    if (lastTwo.test(fpPlan.value) || lastFour.test(fpPlan.value) || fpPlan.value === "") {
      // if (/\s/.test(el.value)) {
      fpPlan.removeAttribute("data-invalid");
      fpPlan.removeAttribute("err-data");
    } else {
      fpPlan.setAttribute("data-invalid", "");
      fpPlan.setAttribute("err-data", "");
      fpPlan
        .setAttribute(
          "data-invalid-message",
          "The SCDF Approved FP Plans Nos. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
        );
    }
    // } else {
    //   document.getElementById(el.id).removeAttribute("data-invalid");
    // }
  }
  for (let mvPlan of mvPlans) {
    if (lastTwo.test(mvPlan.value) || lastFour.test(mvPlan.value) || mvPlan.value === "") {
      // if (/\s/.test(el.value)) {
      mvPlan.removeAttribute("data-invalid");
      mvPlan.removeAttribute("err-data");
    } else {
      mvPlan.setAttribute("data-invalid", "");
      mvPlan.setAttribute("err-data", "");
      mvPlan
        .setAttribute(
          "data-invalid-message",
          "The SCDF Approved MV Plans Nos. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
        );
    }
    // } else {
    //   document.getElementById(el.id).removeAttribute("data-invalid");
    // }
  }
}


function validateBpRefNo(element) {
  let parent = findTable(document.getElementById(element.id));
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let projRefNo =
    "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let refNo = "bpRefNo=" + parent.querySelector("cn2-textbox").value;
  let approvedDate =
    "approvedDate=" +
    convertDate(parent.querySelector("cn2-datefield").value, false);
  let query = projRefNo + refNo + approvedDate;
  let dataResponse;
  let mainElement = parent.querySelector("cn2-textbox");
  let dateElement = parent.querySelector("cn2-datefield");
  let errMsg = parent.querySelector(`[errMsg]`);
  if (
    parent.querySelector("cn2-textbox").value &&
    parent.querySelector("cn2-datefield").value
  ) {
    dataResponse = ipcRenderer.sendSync(
      "client-request",
      "GET",
      [
        agencyUrlJSON,
        JSON.parse(
          JSON.stringify({
            appId: "my-app-id",
            secret: "my-app-secret",
            authPrefix: "ape_l1_eg",
            httpMethod: "get",
            urlPath: "https://www.sample.gov",
          })
        ),
      ],
      query
    );
    updateAgencyUrl("agencyUrl10", query);

    if (![501].includes(dataResponse)) {
      if (typeof dataResponse == "object") {
        removeValidations(mainElement);
        removeValidations(dateElement);
        errMsg.innerHTML = "";
        if ("Y" == dataResponse.isValid) {
          mainElement.setAttribute("data-valid", "");
        } else {
          errMsg.innerHTML = "Error: Not valid/No record in agency database";
        }
      }
    } else {
      console.log("This is a submitted form");
    }
  } else {
    removeValidations(mainElement);
    removeValidations(dateElement);
    errMsg.innerHTML = "";
  }
}

function validateFpRefNo(element) {
  let parent = findTable(document.getElementById(element.id));
  let agencyUrlJSON = jsonData["agencyUrlJSON20"];
  let projRefNo =
    "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let refNo = "fpRefNo=" + parent.querySelector("cn2-textbox").value;
  let approvedDate =
    "approvedDate=" +
    convertDate(parent.querySelector("cn2-datefield").value, false);
  let query = projRefNo + refNo + approvedDate;
  let dataResponse;
  let mainElement = parent.querySelector("cn2-textbox");
  let dateElement = parent.querySelector("cn2-datefield");
  let errMsg = parent.querySelector(`[errMsg]`);
  if (
    parent.querySelector("cn2-textbox").value &&
    parent.querySelector("cn2-datefield").value
  ) {
    dataResponse = ipcRenderer.sendSync(
      "client-request",
      "GET",
      [
        agencyUrlJSON,
        JSON.parse(
          JSON.stringify({
            appId: "my-app-id",
            secret: "my-app-secret",
            authPrefix: "ape_l1_eg",
            httpMethod: "get",
            urlPath: "https://www.sample.gov",
          })
        ),
      ],
      query
    );
    updateAgencyUrl("agencyUrl20", query);

    if (![501].includes(dataResponse)) {
      if (typeof dataResponse == "object") {
        removeValidations(mainElement);
        removeValidations(dateElement);
        errMsg.innerHTML = "";
        if ("Y" == dataResponse.isValid) {
          mainElement.setAttribute("data-valid", "");
        } else {
          errMsg.innerHTML = "Error: Not valid/No record in agency database";
        }
      }
    } else {
      console.log("This is a submitted form");
    }
  } else {
    removeValidations(mainElement);
    removeValidations(dateElement);
    errMsg.innerHTML = "";
  }
}

function validateMvRefNo(element) {
  let parent = findTable(document.getElementById(element.id));
  let agencyUrlJSON = jsonData["agencyUrlJSON30"];
  let projRefNo =
    "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let refNo = "mvRefNo=" + parent.querySelector("cn2-textbox").value;
  let approvedDate =
    "approvedDate=" +
    convertDate(parent.querySelector("cn2-datefield").value, false);
  let query = projRefNo + refNo + approvedDate;
  let dataResponse;
  let mainElement = parent.querySelector("cn2-textbox");
  let dateElement = parent.querySelector("cn2-datefield");
  let errMsg = parent.querySelector(`[errMsg]`);
  if (
    parent.querySelector("cn2-textbox").value &&
    parent.querySelector("cn2-datefield").value
  ) {
    dataResponse = ipcRenderer.sendSync(
      "client-request",
      "GET",
      [
        agencyUrlJSON,
        JSON.parse(
          JSON.stringify({
            appId: "my-app-id",
            secret: "my-app-secret",
            authPrefix: "ape_l1_eg",
            httpMethod: "get",
            urlPath: "https://www.sample.gov",
          })
        ),
      ],
      query
    );
    updateAgencyUrl("agencyUrl30", query);

    if (![501].includes(dataResponse)) {
      if (typeof dataResponse == "object") {
        removeValidations(mainElement);
        removeValidations(dateElement);
        errMsg.innerHTML = "";
        if ("Y" == dataResponse.isValid) {
          mainElement.setAttribute("data-valid", "");
        } else {
          errMsg.innerHTML = "Error: Not valid/No record in agency database";
        }
      }
    } else {
      console.log("This is a submitted form");
    }
  } else {
    removeValidations(mainElement);
    removeValidations(dateElement);
    errMsg.innerHTML = "";
  }
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function convertDate(getDate, type) {
  if (type) {
    let rawDate = getDate.split("/");
    let newDate = "";
    newDate = newDate + rawDate[2] + "-" + rawDate[1] + "-" + rawDate[0];
    return newDate.toString();
  } else {
    let rawDate = getDate.split("-");
    let newDate = "";
    newDate = newDate + rawDate[2] + "/" + rawDate[1] + "/" + rawDate[0];
    return newDate.toString();
  }
}

function addRemoveValidations(parentId) {
  let parent = document.getElementById(parentId);
  let textbox = parent.querySelectorAll("cn2-textbox");
  let dateField = parent.querySelectorAll("cn2-datefield");
  let errMsg = parent.querySelectorAll(`[errMsg]`);
  checkTemplateValid(el);
  for (let i = 0; i < textbox.length; i++) {
    if (!textbox[i].value) {
      removeValidations(dateField[i]);
      removeValidations(textbox[i]);
      errMsg[i].innerHTML = "";
    }
    if (textbox[i].hasAttribute("err-data")) {
      textbox[i].removeAttribute("data-invalid");
    }
  }
}

function validateRILoad() {
  let parent = findTable(document.getElementById("PartOfRI_RINo10"));
  let riDisicplineDD = parent.querySelector(`[prefix="PartOfRI_RIDiscipline"]`);
  let riNoDD = parent.querySelector(`[web-serv-dd]`);
  let riNotext = parent.querySelector(`[web-serv-txt]`);
  let agencyUrlJSON = jsonData["agencyUrlJSON40"];
  let riNo = "riNo=" + riNoDD.valueLabel;
  let riDiscipline = "riDiscipline=" + riDisicplineDD.value;
  let query = riNo + riDiscipline;
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    [
      agencyUrlJSON,
      JSON.parse(
        JSON.stringify({
          appId: "my-app-id",
          secret: "my-app-secret",
          authPrefix: "ape_l1_eg",
          httpMethod: "get",
          urlPath: "https://www.sample.gov",
        })
      ),
    ],
    query
  );
  updateAgencyUrl("agencyUrl40", query);

  console.log(dataResponse);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      if (dataResponse.isValid == "Y") {
      } else {
        // not Valid/ No data in DB
        let getId = riNoDD.getAttribute("id");
        let getPrefix = riNoDD.getAttribute("prefix");
        let getValidateNo = riNoDD.getAttribute("ri-validate");
        let blur = riNoDD.hasAttribute("event-blur")
          ? riNoDD.getAttribute("event-blur")
          : null;
        riNotext.value = riNoDD.valueLabel;
        riNoDD.removeAttribute("mandatory");
        riNoDD.setAttribute("hidden", "");
        riNotext.removeAttribute("hidden");
        riNotext.setAttribute("mandatory", "");
        riNotext.setAttribute("id", getId);
        riNotext.setAttribute("prefix", getPrefix);
        riNotext.setAttribute("ri-validate", getValidateNo);
        blur ? riNotext.setAttribute("event-blur", blur) : "";
        riNoDD.removeAttribute("id");
        riNoDD.removeAttribute("prefix");
        riNoDD.removeAttribute("ri-validate");
      }
    } else {
      convertSelectToTextbox("PartOfRI_RINo10");
    }
  } else {
    console.log("This is a submitted form");
  }
}

function addRemoveValidations(parentId) {
  let parent = document.getElementById(parentId);
  let dropDown = parent.querySelectorAll(`[web-serv-dd]`);
  let textbox = parent.querySelectorAll(`[web-serv-txt]`);

  for (let i = 0; i < textbox.length; i++) {
    if (!textbox[i].value) {
      let blur = textbox[i].hasAttribute("event-blur")
        ? textbox[i].getAttribute("event-blur")
        : null;
      let getId = textbox[i].getAttribute("id");
      let getPrefix = textbox[i].getAttribute("prefix");
      let getValidateNo = textbox[i].getAttribute("ri-validate");
      textbox[i].removeAttribute("mandatory");
      textbox[i].setAttribute("hidden", "");
      dropDown[i].removeAttribute("hidden");
      dropDown[i].setAttribute("mandatory", "");
      dropDown[i].setAttribute("id", getId);
      dropDown[i].setAttribute("prefix", getPrefix);
      dropDown[i].setAttribute("ri-validate", getValidateNo);
      blur ? dropDown[i].setAttribute("event-blur", blur) : "";
      textbox[i].removeAttribute("id");
      textbox[i].removeAttribute("prefix");
      textbox[i].removeAttribute("ri-validate");
    }
  }
}
//--------------END WEB SERVICE-------------------
// JSON array of dynamic fields

document.addEventListener("DOMContentLoaded", function () {
  for (let grp of document.querySelectorAll("[cn2-array-group-enabled]")) {
    let grpID = grp.getAttribute("cn2-array-group");
    let parent = document.getElementById(grpID);
    if (parent && grp.hasAttribute("cn2-array-group-id")) {
      // hidden textarea
      let textarea = document.createElement("cn2-textarea");
      let textareaID = grp.getAttribute("cn2-array-group-id");
      textarea.setAttribute("no-label", "");
      textarea.setAttribute("hidden", "");
      textarea.setAttribute("id", textareaID);
      jsonData[textareaID] = null;

      parent.parentNode.insertBefore(textarea, parent);

      // add event in add button
      let click = grp.hasAttribute("event-click")
        ? grp.getAttribute("event-click").trim()
        : "";
      if (!click.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
        let newClick = "";
        if (click.slice(-1) != "; " && click != "") click += ";";
        newClick = click + " modifyHiddenArrayTextarea('" + grpID + "');";
        grp.setAttribute("event-click", newClick.trim());
      }

      // add event in delete button
      for (let btn of parent.querySelectorAll("cn2-button[danger]")) {
        let click = btn.hasAttribute("event-click")
          ? btn.getAttribute("event-click").trim()
          : "";
        if (!click.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
          let newClick = "";
          if (click.slice(-1) != "; " && click != "") click += ";";
          newClick = click + " modifyHiddenArrayTextarea('" + grpID + "');";
          btn.setAttribute("event-click", newClick.trim());
        }
      }

      // add event in fields
      for (let field of parent.querySelectorAll(
        "cn2-textbox, cn2-textarea, cn2-checkbox, cn2-datefield, cn2-select, input[type='radio']"
      )) {
        if (
          field.tagName.toLowerCase() !== "cn2-checkbox" &&
          field.tagName.toLowerCase() !== "input" &&
          field.tagName.toLowerCase() !== "cn2-datefield"
        ) {
          let blur = field.hasAttribute("event-blur")
            ? field.getAttribute("event-blur").trim()
            : "";
          if (!blur.includes("modifyHiddenArrayTextarea('" + grpID + "');")) {
            let newBlur = "";
            if (blur.slice(-1) != "; " && blur != "") blur += ";";
            newBlur = blur + " modifyHiddenArrayTextarea('" + grpID + "');";
            field.setAttribute("event-blur", newBlur.trim());
          }
        } else {
          if (
            field.tagName.toLowerCase() === "cn2-checkbox" ||
            field.tagName.toLowerCase() === "cn2-datefield"
          ) {
            let change = field.hasAttribute("event-change")
              ? field.getAttribute("event-change").trim()
              : "";
            if (
              !change.includes("modifyHiddenArrayTextarea('" + grpID + "');")
            ) {
              let newChange = "";
              if (change.slice(-1) != "; " && change != "") change += ";";
              newChange =
                change + " modifyHiddenArrayTextarea('" + grpID + "');";
              field.setAttribute("event-change", newChange.trim());
            }
          } else {
            let change = field.hasAttribute("onchange")
              ? field.getAttribute("onchange").trim()
              : "";
            if (
              !change.includes("modifyHiddenArrayTextarea('" + grpID + "');")
            ) {
              let newChange = "";
              if (change.slice(-1) != "; " && change != "") change += ";";
              newChange =
                change + " modifyHiddenArrayTextarea('" + grpID + "');";
              field.setAttribute("onchange", newChange.trim());
            }
          }
        }
      }

      // invoke the method
      modifyHiddenArrayTextarea(grpID);

      grp.removeAttribute("cn2-array-group-enabled");
    }
  }
});

function modifyHiddenArrayTextarea(grpID) {
  let parent = document.getElementById(grpID);
  let button = document.querySelector(`[cn2-array-group="${grpID}"]`);
  let textarea = document.getElementById(
    button.getAttribute("cn2-array-group-id")
  );

  let groupInfo = [];
  for (let instance of parent.children) {
    let fieldInfo = {};
    for (let field of instance.querySelectorAll(
      "cn2-textbox, cn2-textarea, cn2-checkbox, cn2-datefield, cn2-select, input[type='radio']"
    )) {
      if (
        field.tagName.toLowerCase() !== "cn2-checkbox" &&
        field.tagName.toLowerCase() !== "input"
      ) {
        fieldInfo[field.id] = field.value;
      } else {
        fieldInfo[field.id] = field.checked ? "on" : "off";
      }
    }

    groupInfo.push(fieldInfo);
  }

  textarea.value = JSON.stringify(groupInfo);
  if (jsonData[textarea.id] === null) jsonData[textarea.id] = textarea.value;
}

document.addEventListener("DOMContentLoaded", () => {
  if (ipcRenderer.sendSync("isAgency") === true) {
    [...document.querySelectorAll("[nricUnmasked]")].map((el) =>
      el.removeAttribute("hidden")
    );
    [...document.querySelectorAll("[nricMasked]")].map((el) =>
      el.setAttribute("hidden", "")
    );
  } else {
    [...document.querySelectorAll("[nricMasked]")].map((el) =>
      el.removeAttribute("hidden")
    );
    [...document.querySelectorAll("[nricUnmasked]")].map((el) =>
      el.setAttribute("hidden", "")
    );
  }
});
