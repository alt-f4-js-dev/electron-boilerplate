document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");

  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {
    let run = setTimeout(() => {
      getPlanTypePlanNumberMainBP();
      clearTimeout(run);
    }, 300);
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

function ToAgency_id_change(element) {
  let value = element.value.trim();
  let textarea = document.getElementById("Addr20");
  if (value === "BCA") {
    textarea.value = `Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550`;
  } else {
    textarea.value = `Defence Science & Technology Agency\nBuilding & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676`;
  }
}

function uenValidate(el) {
  let maxlength = document.getElementById(el.id).getAttribute("maxlength");
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
      document.getElementById(el.id).removeAttribute("data-invalid");
      document.getElementById(el.id).removeAttribute("data-invalid-message");
    }
  } else if (el.value.trim() === "") {
    document.getElementById(el.id).value = "";
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("data-invalid-message");
  }
}
function Member_Member_Name_PE10_change(element) {
  let select = document.getElementById(element.id);
  let value = select.valueLabel.trim();

  if (value !== "Please Select") {
    if (document.getElementById("DeclByQP_1I20").checked) {
      document.getElementById("DeclByQP_1I10").value = value;
    }
    if (document.getElementById("DeclByQP_2I60").checked) {
      document.getElementById("DeclByQP_2I10").value = value;
    }
  }
}
function DeclByQP2_change(element) {
  let datefield = document.getElementById("DeclByQP_2I_SubmOn20");
  let select = document.getElementById("DeclByQP_2I_ToBeSubm20");
  switch (element.id) {
    case "DeclByQP_2I_SubmOn10":
      datefield.removeAttribute("disabled");
      datefield.setAttribute("mandatory", "");
      select.setAttribute("disabled", "");
      select.removeAttribute("mandatory");
      select.value = "";
      break;
    case "DeclByQP_2I_ToBeSubm10":
      select.removeAttribute("disabled");
      select.setAttribute("mandatory", "");
      datefield.setAttribute("disabled", "");
      datefield.removeAttribute("mandatory");
      datefield.value = "";
      break;
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
    d.getFullYear() != year &&
    d.getMonth() != month - 1 &&
    d.getDate() != day
  ) {
    datefield.value = "";
  }
}
function DeclByQP_change(element, textbox) {
  textbox = document.getElementById(textbox);
  let value = document
    .getElementById("Member_Member_Name_PE10")
    .valueLabel.trim();
  if (element.checked) {
    if (value !== "Please Select") {
      textbox.value = value;
    }
  } else {
    textbox.value = "";
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

function togglePartQp() {
  document.getElementById("Members_UEN_PE10").value = "";
  document.getElementById("Members_UEN_PE10").removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_PE10")
    .removeAttribute("data-invalid-message");
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
    d.getFullYear() > 9999
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

function convertTextboxToSelect(id) {
  let text = document.getElementById(id);
  if (text.tagName.toLowerCase() == "cn2-textbox") {
    let attrs = {};
    for (
      var i = 0, atts = text.attributes, n = atts.length, arr = [];
      i < n;
      i++
    ) {
      attrs[atts[i].nodeName] = atts[i].nodeValue;
    }

    let select = document.createElement("cn2-select");
    for (let attr in attrs) {
      select.setAttribute(attr, attrs[attr]);
    }

    text.parentNode.replaceChild(select, text);
  }
}

function getPlanTypePlanNumberMainBP() {
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;

  let query = `projRefNo=${projRefNo}`;

  jsonData["agencyUrl10"].params = query;

  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    jsonData["agencyUrl10"].url,
    query
  );

  if (dataResponse === 501) {
    //
  } else {
    if (typeof dataResponse === "object" && dataResponse.length > 0) {
      convertTextboxToSelect("Project_PlanType_B1");

      let el = document.getElementById("Project_PlanType_B1");
      el.removeAttribute("maxlength");
      el.removeAttribute("numeric");
      el.removeAttribute("event-change");
      el.removeAttribute("event-keypress");

      let options = dataResponse
        .map(({ key, VALUE }) => `${VALUE}:${key}`)
        .join(",");
      el.setAttribute("options", options);
    }
  }
}
