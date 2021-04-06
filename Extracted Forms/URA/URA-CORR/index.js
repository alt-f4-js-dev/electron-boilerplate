document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  let datefield = document.getElementById("Date10");
  if (datefield != null) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    datefield.value = today;
  }

  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

//

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
  if ((d.getFullYear() != year && d.getMonth() != (month - 1) && d.getDate() != day) || (d.getFullYear() > 2999 || d.getFullYear < 1900)) {
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

function error400_old(){
  showMessage(`The service to validate the submission details is unavailable. We are not able to validate your submission number at the moment.
You can still proceed to make submission after you have completed the form but to avoid rejection by the system later,  please ensure you have provided the correct details. Alternatively, you can try again when the validation service is available`);
}

function getMukimCon(el) {
  while (!el.hasAttribute("main-con")) {
    el = el.parentElement;
  }
  return el;
}
      
function validateSiteDetails(){
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

  if(Object.values(values).every(i => i != "")){
    let response = ipcRenderer.sendSync("client-request", "POST", ["https:", "www.ura.gov.sg"], ["443", "/corenet2DS/forms/rest/validateLodgmentAddress", values]);

    if(response["is_valid"] && response["msg"]){
      if(response["is_valid"] == "Y"){
        for(let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]){
          validMessage(a, "");
        }
        showMessage(response["msg"]);
      } else if(response["is_valid"] == "N"){
        for(let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]){
          invalidMessage(a, response["msg"]);
        }
      } else {
        for(let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]){
          validMessage(a, "");
        }
        error404_updated();
      }
    } else {
      for(let a of ["SiteAddr_HseBlkNo10", "SiteAddr_BldgNm10", "SiteAddr_Unit_Floor10", "SiteAddr_Unit_Unit10", "SiteAddr_PostCd10"]){
        validMessage(a, "");
      }
      error404_updated();
    }

    delete values["pedestrian_link"];
    
    response = ipcRenderer.sendSync("client-request", "POST", ["https:", "www.ura.gov.sg"], ["443", "/corenet2DS/forms/rest/getCULodgementUse", values]);

    if(response["predefined_use"] == "Y" && response["proposed_use"].length > 0){
      let newUses = [];
      let newUseCodes = [];
      for(let a of response["proposed_use"]){
        newUses.push(a.use_desc + ":" + a.use_desc);
        newUseCodes.push(a.use_code);
      }

      document.getElementById("SiteAddr_PropUse10").removeAttribute("options");
      document.getElementById("SiteAddr_PropUse10").removeAttribute("data-options");
      document.getElementById("SiteAddr_PropUse10").setAttribute("options", newUses.join(","));
      document.getElementById("SiteAddr_PropUse10").setAttribute("road-codes", newUseCodes.join(","));
    } else if (response["predefined_use"] == "N"){
    } else {
      error404_updated();
    }
  }
}
      
function populateWP(isValid, data){
  let fields = ["SubmInfo_LateDateOfWrtnPerm10", "SubmInfo_DCRefeOfWrit10", "SubmInfo_DateOfWritPerm10", "SubmInfo_WritPermDeciNo10", "SubmInfo_ApvdPlanNo10"];

  if (!isValid) {
    for(let a of fields){
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

document.addEventListener("DOMContentLoaded", () => {
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
});

function updateRoadName(con){
  let run = setTimeout(() => {
    let road = con.querySelector("[formatted-road]");
    let code = road.getAttribute("prefix").split("_").pop();
    if(jsonData["roadNameDropdown" + code]){
      let newOptions = jsonData["roadNameDropdown" + code].map(roadList => roadList[road.getAttribute("prefix") + "10"]).map(list => list + ":" + list).join(",");

      road.removeAttribute("options");
      road.removeAttribute("data-options");
      road.setAttribute("options", newOptions);
    }
  
    clearTimeout(run);
  }, 300);
}
            
function error404_updated() {
  if (!isSubmittedForm())
    showMessage(`The service to validate the submission details is unavailable. We are not able to validate your submission number at the moment.
You can still proceed to make submission after you have completed the form but to avoid rejection by the system later,  please ensure you have provided the correct details. Alternatively, you can try again when the validation service is available`);
}