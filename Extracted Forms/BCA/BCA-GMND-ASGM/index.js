document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
  document.getElementById(
    "Project_GMeFiliNo40"
  ).value = document.getElementById("Project_Project_Ref_No10").value;
});

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

// function loader() {
//   document.getElementById("maskID").removeAttribute("hidden");
//   setTimeout(function() {
//     document.getElementById("maskID").setAttribute("hidden", "");
//   }, 5000);
// }

function SubmChec_BuilWork_change(element) {
  //disableAB field
  disableAB(element);
  //declaration
  let subRadios1 = [
    document.getElementById("SubmChec_BuilWork_MeetMiniGM_Yes10"),
    document.getElementById("SubmChec_BuilWork_MeetMiniGM_No10"),
  ];
  let yesField = document.getElementById("SubmChec_BuilWork_MeetMiniGM_List10");
  let yesCheckbox = document.getElementById(
    "SubmChec_BuilWork_MeetMiniGM_AttaLettOfAwar10"
  );

  let radio2checkbox = document.getElementById("SubmChec_AttaLettOfClea10");

  let projDetailsAB = document.getElementById("Project_GMeFiliNo41");
  let projDetailsABSign = document.getElementById("Project_GMeFiliNo41_sign");

  let projDetailType = document.getElementById("Project_ProjType10");
  let projDetailTypeSign = document.getElementById("Project_ProjType10_sign");
  switch (element.id) {
    case "SubmChec_BuilWork_MeetMiniGM10":
      radio2checkbox.setAttribute("disabled", "");
      radio2checkbox.checked = false;
      for (radio of subRadios1) {
        radio.removeAttribute("disabled");
      }
      break;
    case "SubmChec_BuilWork_LocaOnLandSold10s":
      radio2checkbox.checked = false;
      radio2checkbox.removeAttribute("disabled");

      projDetailsAB.removeAttribute("mandatory");
      projDetailsABSign.textContent = "";

      projDetailType.removeAttribute("mandatory");
      projDetailTypeSign.textContent = "";
      for (radio of subRadios1) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      yesField.setAttribute("disabled", "");
      yesField.removeAttribute("mandatory");
      yesField.value = "";
      yesCheckbox.setAttribute("disabled", "");
      yesCheckbox.checked = false;
      break;
  }
}

function disableAB(element) {
  let abField = document.getElementById("Project_GMeFiliNo41");

  if (element.id == "SubmChec_BuilWork_LocaOnLandSold10s") {
    abField.setAttribute("disabled", "");
    abField.value = "";
  } else {
    abField.removeAttribute("disabled");
  }
}

function SubmChec_BuilWork_MeetMiniGM_change(element) {
  let yesField = document.getElementById("SubmChec_BuilWork_MeetMiniGM_List10");
  let yesCheckbox = document.getElementById(
    "SubmChec_BuilWork_MeetMiniGM_AttaLettOfAwar10"
  );

  let projDetailsAB = document.getElementById("Project_GMeFiliNo41");
  let projDetailsABSign = document.getElementById("Project_GMeFiliNo41_sign");

  let projDetailType = document.getElementById("Project_ProjType10");
  let projDetailTypeSign = document.getElementById("Project_ProjType10_sign");
  switch (element.id) {
    case "SubmChec_BuilWork_MeetMiniGM_Yes10":
      yesField.removeAttribute("disabled");
      yesField.setAttribute("mandatory", "");
      yesCheckbox.removeAttribute("disabled");

      projDetailsAB.setAttribute("mandatory", "");
      projDetailsABSign.textContent = "*";

      projDetailType.setAttribute("mandatory", "");
      projDetailTypeSign.textContent = "*";
      break;
    case "SubmChec_BuilWork_MeetMiniGM_No10":
      projDetailsAB.removeAttribute("mandatory");
      projDetailsABSign.textContent = "";

      projDetailType.removeAttribute("mandatory");
      projDetailTypeSign.textContent = "";

      yesField.setAttribute("disabled", "");
      yesField.removeAttribute("mandatory");
      yesField.value = "";
      yesCheckbox.setAttribute("disabled", "");
      yesCheckbox.checked = false;
      break;
  }
}

function Project_ProjType10_change() {
  let valueStr = document.getElementById("Project_ProjType10").value;
  let resField = document.getElementById(
    "SubmChec_UndeTheBuilCont_ResGMScor10"
  );
  let nonResField = document.getElementById(
    "SubmChec_UndeTheBuilCont_NonResGMScor10"
  );
  let resField2 = [
    document.getElementById("SubmChec_UndeTheBuilCont_CompResGMScor10"),
    document.getElementById("SubmChec_UndeTheBuilCont_CompResGMScor20"),
  ];
  let nonResField2 = [
    document.getElementById("SubmChec_UndeTheBuilCont_CompNonResGMScor10"),
    document.getElementById("SubmChec_UndeTheBuilCont_CompNonResGMScor20"),
  ];
  resField.setAttribute("disabled", "");
  resField.value = "";
  nonResField.setAttribute("disabled", "");
  nonResField.value = "";

  for (field of resField2) {
    field.setAttribute("disabled", "");
    field.value = "";
  }
  for (field of nonResField2) {
    field.setAttribute("disabled", "");
    field.value = "";
  }

  // switch (valueStr) {
  //   case "Residential":
  //   case "Residential (Lift Upgrading)":
  //     resField.removeAttribute("disabled");
  //     nonResField.value = "";

  //     for (field of resField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     for (field of nonResField2) {
  //     }
  //     break;
  //   case "Non-Residential":
  //   case "Non-Residential (Link Ways,Underground Passes,Open Sheds & Substations)":
  //     resField.value = "";
  //     nonResField.removeAttribute("disabled");

  //     for (field of resField2) {
  //     }
  //     for (field of nonResField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     break;
  //   case "Mixed-Use (Residential)":
  //     resField.removeAttribute("disabled");
  //     nonResField.value = "";

  //     for (field of resField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     for (field of nonResField2) {
  //       field.value = "";
  //     }
  //     break;
  //   case "Mixed-Used( Non-Residential)":
  //     resField.value = "";
  //     nonResField.removeAttribute("disabled");

  //     for (field of resField2) {
  //       field.value = "";
  //     }
  //     for (field of nonResField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     break;
  //   case "Mixed-Used (Residential & Non-Residential)":
  //     resField.removeAttribute("disabled");
  //     nonResField.removeAttribute("disabled");

  //     for (field of resField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     for (field of nonResField2) {
  //       field.removeAttribute("disabled");
  //     }
  //     break;
  // }

  //Enable Fields Project Details w/Radio Button
  EnabFieldProjDetails();
}

function SubmChk_SubmChk10_change(element) {
  let field = document.getElementById(element.id);
  if (document.getElementById("RBtable").innerHTML.length != 0) {
    toggleRBfields(false);
  }
  if (document.getElementById("NRBtable").innerHTML.length != 0) {
    toggleNRBfields(false);
  }
  if (document.getElementById("STtable").innerHTML.length != 0) {
    toggleSTfields(false);
  }
  if (document.getElementById("RB2table").innerHTML.length != 0) {
    toggleRB2fields(false);
  }
  if (document.getElementById("NRB2table").innerHTML.length != 0) {
    toggleNRB2fields(false);
  }

  switch (field.value) {
    case "Residential Buildings (Code 1st to 3rd Edition)":
      showRBFields(true);
      toggleRBfields(true);
      break;
    case "Non-Residential Buildings (Code 1st to 3rd Edition)":
      showNRBfields(true);
      toggleNRBfields(true);
      break;
    case "Non-Residential Transit Station Criteria":
      showSTfields(true);
      toggleSTfields(true);
      break;
    case "Residential Buildings (Code 4th Edition) - Pending Implementation":
      showRB2fields(true);
      toggleRB2fields(true);
      break;
    case "Non-Residential Buildings (Code 4th Edition)(Also applicable to Transit Stations) - Pending Implementation":
      showNRB2fields(true);
      toggleNRB2fields(true);
      break;
  }
}
function showRBFields(condition) {
  let xmlStringRBFields = `<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <table class="table table-bordered" style="margin-bottom: 10px;">
                  <tr>
                    <td>
                      <b>Residential Building Criteria <br>(1st to 3rd Edition)</b>
                    </td>
                    <td class="text-center"><b>Item Scored</b></td>
                    <td class="text-center"><b>Attached Document</b></td>
                    <td><b>Please indicate the submission (ES no.) or correspondence no. of the
                        documents submitted</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-1 RETV
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBRETV_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBRETV_AttaDocu20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBRETV_DocuSubmInEarl20" event-change="dateField_change(this,RBRETV_DateFiel10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="RBRETV_DateFiel10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-2 Naturally
                          <br>Ventilated Design and
                          <br>Air-Conditioning System
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBNatuVentDesiAnd_ItemScor30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBNatuVentDesiAnd_AttaDocu30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBNatuVentDesiAnd_DocuSubmInEarl30"
                        event-change="dateField_change(this,NatuVentDesiAnd_DateFiel20)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="NatuVentDesiAnd_DateFiel20" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-3 Daylighting
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBDayl_ItemScor40" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBDayl_AttaDocu40" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBDayl_DocuSubmInEarl40" event-change="dateField_change(this,RBDayl_DateFiel30)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" group-name="RBtextFields" id="RBDayl_DateFiel30"
                        inline="8" no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-4 Artificial Lighting
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBArtiLigh_ItemScor50" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBArtiLigh_AttaDocu50" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBArtiLigh_DocuSubmInEarl40"
                        event-change="dateField_change(this,RBArtiLigh_DateFiel40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBArtiLigh_DateFiel40" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-5 Ventilation<br>in Carparks
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBVentInCarp_ItemScor60" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBVentInCarp_AttaDocu60" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBVentInCarp_DocuSubmInEarl50"
                        event-change="dateField_change(this,RBVentInCarp_DateFiel50)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBVentInCarp_DateFiel50" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        RB 1-6 Lifts
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBLift_ItemScor70" disabled>
                        </cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="RBLift_AttaDocu70" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="RBLift_DocuSubmInEarl60" event-change="dateField_change(this,RBLift_DateFiel60)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" group-name="RBtextFields" id="RBLift_DateFiel60"
                      inline="8" no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-7 Energy Efficient<br>Features
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBEnerEffiFeat_ItemScor80" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBEnerEffiFeat_AttaDocu80" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBEnerEffiFeat_DocuSubmInEarl70"
                        event-change="dateField_change(this,RBLift_DateFiel70)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBLift_DateFiel70" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 1-8 Renewable Energy
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBReneEner_ItemScor90" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBReneEner_AttaDocu90" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBReneEner_DocuSubmInEarl80"
                        event-change="dateField_change(this,RBReneEner_DateFiel80)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBReneEner_DateFiel80" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 2-1 Water Efficient<br>Fittings
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBWateEffiFitt_ItemScor100" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBWateEffiFitt_AttaDocu100" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBWateEffiFitt_DocuSubmInEarl90"
                        event-change="dateField_change(this,RBWateEffiFitt_DateFiel90)" disabled></cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBWateEffiFitt_DateFiel90" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 2-2 Water Usage<br>Monitoring
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBWateUsaMoni_ItemScor110" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBWateUsagMoni_AttaDocu110" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBWateUsagMoni_DocuSubmInEarl100"
                        event-change="dateField_change(this,RBWateUsagMoni_DateFiel100)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBWateUsagMoni_DateFiel100" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        RB 2-3 Irrigation System<br>and Landscaping
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBIrriSystAndLand_ItemScor120" disabled>
                        </cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="RBIrriSystAndLand_AttaDocu120" disabled>
                        </cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="RBIrriSystAndLand_DocuSubmInEarl110"
                      event-change="dateField_change(this,RBIrriSystAndLand_DateFiel110)" disabled></cn2-checkbox>
                    &nbsp;
                    <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBIrriSystAndLand_DateFiel110" inline="8"
                      no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 3-1 Sustainable<br>Construction
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBSustCons_ItemScor130" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBSustCons_AttaDocu130" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBSustCons_DocuSubmInEarl120"
                        event-change="dateField_change(this,RBSustCons_DateFiel120)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBSustCons_DateFiel120" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 3-2 Sustainable<br>Products
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBSustProd_ItemScor140" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBSustProd_AttaDocu140" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBSustProd_DocuSubmInEarl130"
                        event-change="dateField_change(this,RBSustProd_DateFiel130)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBSustProd_DateFiel130" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 3-3 Greenery Provision
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBGreeProv_ItemScor150" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBGreeProv_AttaDocu150" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBGreeProv_DocuSubmInEarl140"
                        event-change="dateField_change(this,RBGreeProv_DateFiel140)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBGreeProv_DateFiel140" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 3-4 Environmental<br>Management Practice
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBEnviMgmtPrac_ItemScor160" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBEnviMgmtPrac_AttaDocu160" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBEnviMgmtPrac_DocuSubmInEarl150"
                        event-change="dateField_change(this,RBEnviMgmtPrac_DateFiel150)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBEnviMgmtPrac_DateFiel150" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        RB 3-5 Green Transport
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBGreeTran_ItemScor170" disabled>
                        </cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="RBGreeTran_AttaDocu170" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="RBGreeTran_DocuSubmInEarl160"
                      event-change="dateField_change(this,RBGreeTran_DateFiel160)" disabled>
                    </cn2-checkbox>&nbsp;
                    <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBGreeTran_DateFiel160" inline="8"
                      no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 3-6 Stormwater<br>Management
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBStorMgmt_ItemScor180" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBStorMgmt_AttaDocu180" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBStorMgmt_DocuSubmInEarl170"
                        event-change="dateField_change(this,RBStorMgmt_DateFiel170)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBStorMgmt_DateFiel170" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 4-1 Noise Level
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBNoisLeve_ItemScor200" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBNoisLeve_AttaDocu190" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBNoisLeve_DocuSubmInEarl180"
                        event-change="dateField_change(this, RBNoisLeve_DateFiel180)" no-label disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBNoisLeve_DateFiel180" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 4-2 Indoor Air Pollutants
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBIndoAirPoll_ItemScor210" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBIndoAirPoll_AttaDocu190" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBIndoAirPoll_DocuSubmInEarl190"
                        event-change="dateField_change(this,RBIndoAirPoll_DateFiel190)" disabled></cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBIndoAirPoll_DateFiel190" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 4-3 Waste Disposal
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBWastDisp_ItemScor220" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBWastDisp_AttaDocu200" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBWastDisp_DocuSubmInEarl200"
                        event-change="dateField_change(this,RBWastDisp_DateFiel200)" no-label disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBWastDisp_DateFiel200" inline="8"
                        no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 4-4 Indoor Air Quality<br>for Wet areas
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBIndoAirQualFor_ItemScor230" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBIndoAirQualFor_AttaDocu210" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="RBIndoAirQualFor_DocuSubmInEarl210"
                        event-change="dateField_change(this,RBIndoAirQualFor_DateFiel210)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBIndoAirQualFor_DateFiel210" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB 5-1 Green Features<br>& Innovations
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox group-name="RBItemScoreCheckbox" id="RBGreeFeatInno_ItemScor240" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="RBGreeFeatInno_AttaDocu210" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="RBGreeFeatInno_DocuSubmInEarl220"
                        event-change="dateField_change(this,RBGreeFeatInno_DateFiel220)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBGreeFeatInno_DateFiel220" inline="8"
                        no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      Others
                      <cn2-button style="margin-left:20px;" label="Add" id="add1C"
                        event-click="insertDuplicate('otherForm','C1');disableDelete('otherForm','.deleteRB');disableNextAddedFields('otherForm','RBOthe_DateFie')"
                        disabled>
                      </cn2-button>
                    </td>
                  </tr>
                  <tbody>
                </table>
              </div>
              <div id="otherForm">
                <div id="C1" class="col-xs-12 col-sm-12 col-lg-12 col-md-12 Afields">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-textarea id="Othe10" prefix="Othe" suffix="0" no-label maxlength="250">
                              </cn2-textarea>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="RBOthe_ItemScor10" prefix="RBOthe_ItemScor" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="RBOthe_AttaDocu10" prefix="RBOthe_AttaDocu" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="40%">
                          <cn2-checkbox id="RBOthe_DocuSubmInEar10"
                            event-change="otherDateField_change(this,'RBOthe_DateFie');" prefix="RBOthe_DocuSubmInEar"
                            suffix="0" no-label>
                          </cn2-checkbox>&nbsp;

                          <cn2-textbox maxlength="30" group-name="RBtextFields" id="RBOthe_DateFie10" inline="8"
                            prefix="RBOthe_DateFie" suffix="0" no-label disabled>
                          </cn2-textbox>
                          <cn2-button id="delete1C" class="deleteRB" prefix="delete" suffix="C" label="Delete"
                            style="float:right;" danger
                            event-click="removeDuplicate(this.id,'C1','otherForm');disableDelete('otherForm','.deleteRB');"
                            disabled></cn2-button>
                        </td>
                    </tbody>
                  </table>
                </div>
              </div>`;

  if (condition == true) {
    document.getElementById("RBtable").innerHTML = xmlStringRBFields;
  } else {
    toggleRBfields(condition);
  }
}
function toggleRBfields(condition) {
  let residentialGroup = [
    document.getElementById("RBRETV_ItemScor20"),
    document.getElementById("RBRETV_AttaDocu20"),
    document.getElementById("RBRETV_DocuSubmInEarl20"),
    document.getElementById("RBNatuVentDesiAnd_ItemScor30"),
    document.getElementById("RBNatuVentDesiAnd_AttaDocu30"),
    document.getElementById("RBNatuVentDesiAnd_DocuSubmInEarl30"),
    document.getElementById("RBDayl_ItemScor40"),
    document.getElementById("RBDayl_AttaDocu40"),
    document.getElementById("RBDayl_DocuSubmInEarl40"),
    document.getElementById("RBArtiLigh_ItemScor50"),
    document.getElementById("RBArtiLigh_AttaDocu50"),
    document.getElementById("RBArtiLigh_DocuSubmInEarl40"),
    document.getElementById("RBVentInCarp_ItemScor60"),
    document.getElementById("RBVentInCarp_AttaDocu60"),
    document.getElementById("RBVentInCarp_DocuSubmInEarl50"),
    document.getElementById("RBLift_ItemScor70"),
    document.getElementById("RBLift_AttaDocu70"),
    document.getElementById("RBLift_DocuSubmInEarl60"),
    document.getElementById("RBEnerEffiFeat_ItemScor80"),
    document.getElementById("RBEnerEffiFeat_AttaDocu80"),
    document.getElementById("RBEnerEffiFeat_DocuSubmInEarl70"),
    document.getElementById("RBReneEner_ItemScor90"),
    document.getElementById("RBReneEner_AttaDocu90"),
    document.getElementById("RBReneEner_DocuSubmInEarl80"),
    document.getElementById("RBWateEffiFitt_ItemScor100"),
    document.getElementById("RBWateEffiFitt_AttaDocu100"),
    document.getElementById("RBWateEffiFitt_DocuSubmInEarl90"),
    document.getElementById("RBWateUsaMoni_ItemScor110"),
    document.getElementById("RBWateUsagMoni_AttaDocu110"),
    document.getElementById("RBWateUsagMoni_DocuSubmInEarl100"),
    document.getElementById("RBIrriSystAndLand_ItemScor120"),
    document.getElementById("RBIrriSystAndLand_AttaDocu120"),
    document.getElementById("RBIrriSystAndLand_DocuSubmInEarl110"),
    document.getElementById("RBSustCons_ItemScor130"),
    document.getElementById("RBSustCons_AttaDocu130"),
    document.getElementById("RBSustCons_DocuSubmInEarl120"),
    document.getElementById("RBSustProd_ItemScor140"),
    document.getElementById("RBSustProd_AttaDocu140"),
    document.getElementById("RBSustProd_DocuSubmInEarl130"),
    document.getElementById("RBGreeProv_ItemScor150"),
    document.getElementById("RBGreeProv_AttaDocu150"),
    document.getElementById("RBGreeProv_DocuSubmInEarl140"),
    document.getElementById("RBEnviMgmtPrac_ItemScor160"),
    document.getElementById("RBEnviMgmtPrac_AttaDocu160"),
    document.getElementById("RBEnviMgmtPrac_DocuSubmInEarl150"),
    document.getElementById("RBGreeTran_ItemScor170"),
    document.getElementById("RBGreeTran_AttaDocu170"),
    document.getElementById("RBGreeTran_DocuSubmInEarl160"),
    document.getElementById("RBStorMgmt_ItemScor180"),
    document.getElementById("RBStorMgmt_AttaDocu180"),
    document.getElementById("RBStorMgmt_DocuSubmInEarl170"),
    document.getElementById("RBNoisLeve_ItemScor200"),
    document.getElementById("RBNoisLeve_AttaDocu190"),
    document.getElementById("RBNoisLeve_DocuSubmInEarl180"),
    document.getElementById("RBIndoAirPoll_ItemScor210"),
    document.getElementById("RBIndoAirPoll_AttaDocu190"),
    document.getElementById("RBIndoAirPoll_DocuSubmInEarl190"),
    document.getElementById("RBWastDisp_ItemScor220"),
    document.getElementById("RBWastDisp_AttaDocu200"),
    document.getElementById("RBWastDisp_DocuSubmInEarl200"),
    document.getElementById("RBIndoAirQualFor_ItemScor230"),
    document.getElementById("RBIndoAirQualFor_AttaDocu210"),
    document.getElementById("RBIndoAirQualFor_DocuSubmInEarl210"),
    document.getElementById("RBGreeFeatInno_ItemScor240"),
    document.getElementById("RBGreeFeatInno_AttaDocu210"),
    document.getElementById("RBGreeFeatInno_DocuSubmInEarl220"),
    document.getElementById("add1C"),
  ];
  let dateGroup = [
    document.getElementById("RBRETV_DateFiel10"),
    document.getElementById("NatuVentDesiAnd_DateFiel20"),
    document.getElementById("RBDayl_DateFiel30"),
    document.getElementById("RBArtiLigh_DateFiel40"),
    document.getElementById("RBVentInCarp_DateFiel50"),
    document.getElementById("RBLift_DateFiel60"),
    document.getElementById("RBLift_DateFiel70"),
    document.getElementById("RBReneEner_DateFiel80"),
    document.getElementById("RBWateEffiFitt_DateFiel90"),
    document.getElementById("RBWateUsagMoni_DateFiel100"),
    document.getElementById("RBIrriSystAndLand_DateFiel110"),
    document.getElementById("RBSustCons_DateFiel120"),
    document.getElementById("RBSustProd_DateFiel130"),
    document.getElementById("RBGreeProv_DateFiel140"),
    document.getElementById("RBEnviMgmtPrac_DateFiel150"),
    document.getElementById("RBGreeTran_DateFiel160"),
    document.getElementById("RBStorMgmt_DateFiel170"),
    document.getElementById("RBNoisLeve_DateFiel180"),
    document.getElementById("RBIndoAirPoll_DateFiel190"),
    document.getElementById("RBWastDisp_DateFiel200"),
    document.getElementById("RBIndoAirQualFor_DateFiel210"),
    document.getElementById("RBGreeFeatInno_DateFiel220"),
  ];
  let formField = document.querySelectorAll(".Afields");
  let childCount = document.getElementById("otherForm").childElementCount;
  let otherCheckBox = document.querySelectorAll("[prefix='RBOthe_ItemScor']");
  let otherCheckboxAttach = document.querySelectorAll(
    "[prefix='RBOthe_AttaDocu']"
  );
  let otherTextArea = document.querySelectorAll("[prefix='Othe']");
  let checkboxDate = document.querySelectorAll(
    "[prefix='RBOthe_DocuSubmInEar']"
  );
  let otherDatefield = document.querySelectorAll("[prefix='RBOthe_DateFie']");
  let delBtn = document.querySelectorAll(".deleteRB");
  let main = document.getElementById("RBtable");
  if (condition == true) {
    for (member of residentialGroup) {
      member.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let i = 0; i < otherCheckBox.length; i++) {
      otherDatefield[i].setAttribute("disabled", "");
      otherCheckboxAttach[i].checked = false;
      otherCheckBox[i].checked = false;
      checkboxDate[i].checked = false;
      otherTextArea[i].value = "";
      otherDatefield[i].value = "";
      otherDatefield[i].removeAttribute("mandatory");
      delBtn[i].setAttribute("disabled", "");
    }
    for (member of residentialGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
    }
    for (field of dateGroup) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}
function showNRBfields(condition) {
  let xmlStringNRBFields = `<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <table class="table table-bordered">
                  <tr>
                    <td><b>Non-Residential Building Criteria (1st to 3rd Edition)</b>
                      </b>
                    </td>
                    <td><b>Item Scored</b></td>
                    <td><b>Attached Document</b></td>
                    <td><b>Please indicate the submission (ES no.) or correspondence no. of the
                        documents submitted</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-1 ETTV
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETTV20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETTV30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBETTV40" event-change="dateField_change(this,NRBETTVDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBETTVDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-2 Air-
                          <br>Conditioning System
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBAirCondSyst20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBAirCondSyst30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBAirCondSyst40"
                        event-change="dateField_change(this,NRBAirCondSystDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBAirCondSystDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-3 Building
                          <br>Envelope - Design
                          <br>/ Thermal Parameters
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBBuilEnveDesiTher20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBBuilEnveDesiTher30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBBuilEnveDesiTher40"
                        event-change="dateField_change(this,NRBBuilEnveDesiTherDate10)" disabled></cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="NRBBuilEnveDesiTherDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-4 Natural
                          <br>Ventilation / Mechanical
                          <br>Ventilation
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBNatuVentMechVent20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBNatuVentMechVent30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBNatuVentMechVent40"
                        event-change="dateField_change(this,NRBNatuVentMechVentDate10)" disabled></cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="NRBNatuVentMechVentDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-5 Daylighting
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBDayl20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBDayl30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBDayl40" event-change="dateField_change(this,NRBDaylDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBDaylDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        NRB 1-6 Artificial Lighting
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBArtiLigh20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBArtiLigh30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_NRBArtiLigh40" event-change="dateField_change(this,NRBArtiLighDate10)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBArtiLighDate10" inline="8" no-label
                      disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-7 Ventilation in
                          <br>Carparks
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVentInCarp20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVentInCarp30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBVentInCarp40"
                        event-change="dateField_change(this,NRBVentInCarpDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBVentInCarpDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-8 Ventilation in
                          <br>Common Areas
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVentInCommArea20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVentInCommArea30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBVentInCommArea40"
                        event-change="dateField_change(this,NRBVentInCommAreaDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBVentInCommAreaDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-9 Lifts and
                          <br>Escalators
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBLiftAndEsca20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBLiftAndEsca30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBLiftAndEsca40"
                        event-change="dateField_change(this,NRBLiftAndEscaDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBLiftAndEscaDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 1-10 Energy
                          <br>Efficient Practices and
                          <br>Features
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnerEffiPracFeat20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnerEffiPracFeat30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEnerEffiPracFeat40"
                        event-change="dateField_change(this,NRBEnerEffiPracFeatDate10)" disabled></cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="NRBEnerEffiPracFeatDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        NRB 1-11 Renewable
                        <br>Energy
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBReneEner20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBReneEner30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_NRBReneEner40" event-change="dateField_change(this,NRBReneEnerDate10)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBReneEnerDate10" inline="8" no-label
                      disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 2-1 Water Efficient
                          <br>Fittings
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateEffiFitt20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateEffiFitt30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBWateEffiFitt40"
                        event-change="dateField_change(this,NRBWateEffiFittDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBWateEffiFittDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 2-2 Water Usage
                          <br>and Leakage Detection
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateUsagAndLeak20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateUsagAndLeak30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBWateUsagAndLeak40"
                        event-change="dateField_change(this,NRBWateUsagAndLeakDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBWateUsagAndLeakDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 2-3 Irrigation
                          <br>System and Landscaping
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIrriSystAndLand20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIrriSystAndLand30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBIrriSystAndLand40"
                        event-change="dateField_change(this,NRBIrriSystAndLandDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBIrriSystAndLandDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 2-4 Water
                          <br>Consumption
                          <br>of Cooling Tower
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateConsOfCool10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBWateConsOfCool20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBWateConsOfCool40"
                        event-change="dateField_change(this,NRBWateConsOfCoolDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBWateConsOfCoolDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        NRB 3-1 Sustainable
                        <br>Construction
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBSustCons20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_NRBSustCons30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_NRBSustCons40" event-change="dateField_change(this,NRBSustConsDate10)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBSustConsDate10" inline="8" no-label
                      disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-2 Sustainable
                          <br>Products
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBSustProd20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBSustProd30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBSustProd40" event-change="dateField_change(this,NRBSustProdDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBSustProdDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-3 Greenery
                          <br>Provision
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeProv20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeProv30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBGreeProv40" event-change="dateField_change(this,NRBGreeProvDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBGreeProvDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-4 Environmental
                          <br>Management Practice
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnviManaPrac20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnviManaPrac30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEnviManaPrac40"
                        event-change="dateField_change(this,NRBEnviManaPracDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBEnviManaPracDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-5 Green Transport
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeTrans20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeTrans30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBGreeTrans40"
                        event-change="dateField_change(this,NRBGreeTransDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBGreeTransDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-6 Refrigerants
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBRefr20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBRefr30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBRefr40" event-change="dateField_change(this,NRBRefrDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBRefrDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 3-7 Stormwater
                          <br>Management
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBStorMana20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBStorMana30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBStorMana40" event-change="dateField_change(this,RBStorManaDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="RBStorManaDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 4-1 Thermal Comfort
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBTherComf20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBTherComf30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBTherComf40" event-change="dateField_change(this,NRBTherComfDate20)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBTherComfDate20" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 4-2 Noise Level
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBNoisLeve20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBNoisLeve30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBNoisLeve40" event-change="dateField_change(this,NRBNoisLeveDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="NRBNoisLeveDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 4-3 Indoor Air
                          <br>Pollutants
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIndoAirPoll20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIndoAirPoll30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBIndoAirPoll40"
                        event-change="dateField_change(this,NRBIndoAirPoll10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBIndoAirPoll10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 4-4 Indoor Air
                          <br>Quality (IAQ) Management
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIndoAirQualMana20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBIndoAirQualMana30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBIndoAirQualMana40"
                        event-change="dateField_change(this,NRBIndoAirQualMana10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBIndoAirQualMana10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 4-5 High Frequency
                          <br>Ballasts
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBHighFreqBall20" no-label disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBHighFreqBall30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBHighFreqBall40"
                        event-change="dateField_change(this,NRBHighFreqBall10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="NRBHighFreqBall10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB 5-1 Green Features
                          <br>and Innovations
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeFeatInno20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBGreeFeatInno30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBGreeFeatInno40"
                        event-change="dateField_change(this,SubmChec_NRBGreeFeatDate10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBGreeFeatDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">Others <cn2-button style="margin-left:20px;" label="Add" id="add1D"
                        event-click="insertDuplicate('otherForm1','D1');disableDelete('otherForm1','.deleteNRB');disableNextAddedFields('otherForm1','NRBOtheDate')"
                        disabled>
                      </cn2-button>
                    </td>
                  </tr>
                  <tbody>
                </table>
              </div>

              <div id="otherForm1">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 Dfields" id="D1">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-textarea id="NRB_Othe10" no-label prefix="NRB_Other" suffix="0" maxlength="250">
                              </cn2-textarea>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_NRBOtheItem10" prefix="SubmChec_NRBOtheItem" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_NRBOtheAttac10" prefix="SubmChec_NRBOtheAttac" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="40%">
                          <cn2-checkbox id="SubmChec_NRBOtheDt10"
                            event-change="otherDateField_change(this,'NRBOtheDate');" prefix="SubmChec_NRBOtheDt"
                            suffix="0"></cn2-checkbox>&nbsp;
                          <cn2-textbox maxlength="30" id="NRBOtheDate10" inline="8" prefix="NRBOtheDate" suffix="0"
                            no-label disabled>
                          </cn2-textbox>
                          <cn2-button id="delete1D" class="deleteNRB" prefix="delete" suffix="D" label="Delete"
                            style="float:right;" danger
                            event-click="removeDuplicate(this.id,'D1','otherForm1');disableDelete('otherForm1','.deleteNRB');"
                            disabled></cn2-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>`;

  if (condition == true) {
    document.getElementById("NRBtable").innerHTML = xmlStringNRBFields;
  } else {
    toggleNRBfields(condition);
  }
}
function toggleNRBfields(condition) {
  let nonresidentialGroup = [
    document.getElementById("SubmChec_NRBETTV20"),
    document.getElementById("SubmChec_NRBETTV30"),
    document.getElementById("SubmChec_NRBETTV40"),
    document.getElementById("SubmChec_NRBAirCondSyst20"),
    document.getElementById("SubmChec_NRBAirCondSyst30"),
    document.getElementById("SubmChec_NRBAirCondSyst40"),
    document.getElementById("SubmChec_NRBBuilEnveDesiTher20"),
    document.getElementById("SubmChec_NRBBuilEnveDesiTher30"),
    document.getElementById("SubmChec_NRBBuilEnveDesiTher40"),
    document.getElementById("SubmChec_NRBNatuVentMechVent20"),
    document.getElementById("SubmChec_NRBNatuVentMechVent30"),
    document.getElementById("SubmChec_NRBNatuVentMechVent40"),
    document.getElementById("SubmChec_NRBDayl20"),
    document.getElementById("SubmChec_NRBDayl30"),
    document.getElementById("SubmChec_NRBDayl40"),
    document.getElementById("SubmChec_NRBArtiLigh20"),
    document.getElementById("SubmChec_NRBArtiLigh30"),
    document.getElementById("SubmChec_NRBArtiLigh40"),
    document.getElementById("SubmChec_NRBVentInCarp20"),
    document.getElementById("SubmChec_NRBVentInCarp30"),
    document.getElementById("SubmChec_NRBVentInCarp40"),
    document.getElementById("SubmChec_NRBVentInCommArea20"),
    document.getElementById("SubmChec_NRBVentInCommArea30"),
    document.getElementById("SubmChec_NRBVentInCommArea40"),
    document.getElementById("SubmChec_NRBLiftAndEsca20"),
    document.getElementById("SubmChec_NRBLiftAndEsca30"),
    document.getElementById("SubmChec_NRBLiftAndEsca40"),
    document.getElementById("SubmChec_NRBEnerEffiPracFeat20"),
    document.getElementById("SubmChec_NRBEnerEffiPracFeat30"),
    document.getElementById("SubmChec_NRBEnerEffiPracFeat40"),
    document.getElementById("SubmChec_NRBReneEner20"),
    document.getElementById("SubmChec_NRBReneEner30"),
    document.getElementById("SubmChec_NRBReneEner40"),
    document.getElementById("SubmChec_NRBWateEffiFitt20"),
    document.getElementById("SubmChec_NRBWateEffiFitt30"),
    document.getElementById("SubmChec_NRBWateEffiFitt40"),
    document.getElementById("SubmChec_NRBWateUsagAndLeak20"),
    document.getElementById("SubmChec_NRBWateUsagAndLeak30"),
    document.getElementById("SubmChec_NRBWateUsagAndLeak40"),
    document.getElementById("SubmChec_NRBIrriSystAndLand20"),
    document.getElementById("SubmChec_NRBIrriSystAndLand30"),
    document.getElementById("SubmChec_NRBIrriSystAndLand40"),
    document.getElementById("SubmChec_NRBWateConsOfCool10"),
    document.getElementById("SubmChec_NRBWateConsOfCool20"),
    document.getElementById("SubmChec_NRBWateConsOfCool40"),
    document.getElementById("SubmChec_NRBSustCons20"),
    document.getElementById("SubmChec_NRBSustCons30"),
    document.getElementById("SubmChec_NRBSustCons40"),
    document.getElementById("SubmChec_NRBSustProd20"),
    document.getElementById("SubmChec_NRBSustProd30"),
    document.getElementById("SubmChec_NRBSustProd40"),
    document.getElementById("SubmChec_NRBGreeProv20"),
    document.getElementById("SubmChec_NRBGreeProv30"),
    document.getElementById("SubmChec_NRBGreeProv40"),
    document.getElementById("SubmChec_NRBEnviManaPrac20"),
    document.getElementById("SubmChec_NRBEnviManaPrac30"),
    document.getElementById("SubmChec_NRBEnviManaPrac40"),
    document.getElementById("SubmChec_NRBGreeTrans20"),
    document.getElementById("SubmChec_NRBGreeTrans30"),
    document.getElementById("SubmChec_NRBGreeTrans40"),
    document.getElementById("SubmChec_NRBRefr20"),
    document.getElementById("SubmChec_NRBRefr30"),
    document.getElementById("SubmChec_NRBRefr40"),
    document.getElementById("SubmChec_NRBStorMana20"),
    document.getElementById("SubmChec_NRBStorMana30"),
    document.getElementById("SubmChec_NRBStorMana40"),
    document.getElementById("SubmChec_NRBTherComf20"),
    document.getElementById("SubmChec_NRBTherComf30"),
    document.getElementById("SubmChec_NRBTherComf40"),
    document.getElementById("SubmChec_NRBNoisLeve20"),
    document.getElementById("SubmChec_NRBNoisLeve30"),
    document.getElementById("SubmChec_NRBNoisLeve40"),
    document.getElementById("SubmChec_NRBIndoAirPoll20"),
    document.getElementById("SubmChec_NRBIndoAirPoll30"),
    document.getElementById("SubmChec_NRBIndoAirPoll40"),
    document.getElementById("SubmChec_NRBIndoAirQualMana20"),
    document.getElementById("SubmChec_NRBIndoAirQualMana30"),
    document.getElementById("SubmChec_NRBIndoAirQualMana40"),
    document.getElementById("SubmChec_NRBHighFreqBall20"),
    document.getElementById("SubmChec_NRBHighFreqBall30"),
    document.getElementById("SubmChec_NRBHighFreqBall40"),
    document.getElementById("SubmChec_NRBGreeFeatInno20"),
    document.getElementById("SubmChec_NRBGreeFeatInno30"),
    document.getElementById("SubmChec_NRBGreeFeatInno40"),
    document.getElementById("add1D"),
  ];
  let dateGroup = [
    document.getElementById("NRBETTVDate10"),
    document.getElementById("NRBAirCondSystDate10"),
    document.getElementById("NRBBuilEnveDesiTherDate10"),
    document.getElementById("NRBNatuVentMechVentDate10"),
    document.getElementById("NRBDaylDate10"),
    document.getElementById("NRBArtiLighDate10"),
    document.getElementById("NRBVentInCarpDate10"),
    document.getElementById("NRBVentInCommAreaDate10"),
    document.getElementById("NRBLiftAndEscaDate10"),
    document.getElementById("NRBEnerEffiPracFeatDate10"),
    document.getElementById("NRBReneEnerDate10"),
    document.getElementById("NRBWateEffiFittDate10"),
    document.getElementById("NRBWateUsagAndLeakDate10"),
    document.getElementById("NRBIrriSystAndLandDate10"),
    document.getElementById("NRBWateConsOfCoolDate10"),
    document.getElementById("NRBSustConsDate10"),
    document.getElementById("NRBSustProdDate10"),
    document.getElementById("NRBGreeProvDate10"),
    document.getElementById("NRBEnviManaPracDate10"),
    document.getElementById("NRBGreeTransDate10"),
    document.getElementById("NRBRefrDate10"),
    document.getElementById("RBStorManaDate10"),
    document.getElementById("NRBTherComfDate20"),
    document.getElementById("NRBNoisLeveDate10"),
    document.getElementById("NRBIndoAirPoll10"),
    document.getElementById("NRBIndoAirQualMana10"),
    document.getElementById("NRBHighFreqBall10"),
    document.getElementById("SubmChec_NRBGreeFeatDate10"),
  ];
  let formField = document.querySelectorAll(".Dfields");
  let childCount = document.getElementById("otherForm1").childElementCount;

  let otherCheckBox = document.querySelectorAll(
    "[prefix='SubmChec_NRBOtheItem']"
  );
  let otherCheckboxAttach = document.querySelectorAll(
    "[prefix='SubmChec_NRBOtheAttac']"
  );
  let otherTextArea = document.querySelectorAll("[prefix='NRB_Other']");
  let checkboxDate = document.querySelectorAll("[prefix='SubmChec_NRBOtheDt']");
  let otherDatefield = document.querySelectorAll("[prefix='NRBOtheDate']");
  let delBtn = document.querySelectorAll(".deleteNRB");
  let main = document.getElementById("NRBtable");

  if (condition == true) {
    for (member of nonresidentialGroup) {
      member.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let i = 0; i < otherCheckBox.length; i++) {
      otherDatefield[i].setAttribute("disabled", "");
      otherCheckboxAttach[i].checked = false;
      otherCheckBox[i].checked = false;
      checkboxDate[i].checked = false;
      otherTextArea[i].value = "";
      otherDatefield[i].value = "";
      otherDatefield[i].removeAttribute("mandatory");
      delBtn[i].setAttribute("disabled", "");
    }
    for (member of nonresidentialGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
    }
    for (field of dateGroup) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}
function showSTfields(condition) {
  let xmlStringSTFields = ` <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <table class="table table-bordered" style="margin-bottom:15px;">
                  <tr>
                    <td width="30%">
                      <b>Non-Residential
                        Building –
                        Transit Station
                        Criteria
                      </b>
                    </td>
                    <td width="15%"><b>Item Scored</b></td>
                    <td width="15%"><b>Attached Document</b></td>
                    <td width="40%"><b>Please indicate the submission (ES no.) or correspondence no.
                        of the documents
                        submitted</b></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 1-1 Environmental
                          <br>Control Systems
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnviContSyst20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnviContSyst30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STEnviContSyst40"
                        event-change="dateField_change(this,STEnviContSystDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STEnviContSystDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 1-2 Lighting System
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STLighSyst20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STLighSyst30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STLighSyst40" event-change="dateField_change(this,STLighSystDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STLighSystDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 1-3 Electrical
                          <br>Services
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STElecServ20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STElecServ30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STElecServ40" event-change="dateField_change(this,STElecServDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STElecServDate10" inline="8" no-label
                        disabled>
                        </cn2-datefield>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 1-4 Lifts and
                          <br>Escalators
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STLiftAndEsca20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STLiftAndEsca30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STLiftAndEsca40"
                        event-change="dateField_change(this,STLiftAndEscaDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STLiftAndEscaDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 1-5 Energy
                          <br>Efficient Features
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnerEffiFeat20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnerEffiFeat30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STEnerEffiFeat40"
                        event-change="dateField_change(this,STEnerEffiFeatDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STEnerEffiFeatDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        ST 2-1 Water
                        <br>Efficient Fittings
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STWateEffiFitt20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STWateEffiFitt30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_STWateEffiFitt40"
                      event-change="dateField_change(this,STWateEffiFittDate10)" disabled>
                    </cn2-checkbox>&nbsp;
                    <cn2-textbox maxlength="30" id="STWateEffiFittDate10" inline="8" no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 2-2 Water Usage
                          <br>Monitoring
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STWateUsagMoni20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STWateUsagMoni30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STWateUsagMoni40"
                        event-change="dateField_change(this,STWateUsagMoniDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STWateUsagMoniDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 2-3 Water
                          <br>Consumption of Cooling
                          <br>Towers
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STWateConsOfCool20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STWateConsOfCool30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STWateConsOfCool40"
                        event-change="dateField_change(this,STWateConsOfCoolDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STWateConsOfCoolDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-1 Sustainable
                          <br>Construction
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSustCons20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSustCons30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STSustCons40" event-change="dateField_change(this,STSustConsDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STSustConsDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-2 Sustainable
                          <br>Products
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSustProd20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSustProd30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STSustProd40" event-change="dateField_change(this,STSustProdDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STSustProdDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        ST 3-3 Greenery Provision
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STGreeProv20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STGreeProv30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_STGreeProv40" event-change="dateField_change(this,STGreeProvDate10)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STGreeProvDate10" inline="8" no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-4 Site Selection
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSiteSele20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STSiteSele30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STSiteSele40" event-change="dateField_change(this,STSiteSeleDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STSiteSeleDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-5 Environmental
                          <br>Management Practice
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnviManaPrac20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STEnviManaPrac30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STEnviManaPrac40"
                        event-change="dateField_change(this,STEnviManaPracDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STEnviManaPracDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-6 Public Transport
                          <br>Accessibility
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STPublTran20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STPublTran30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STPublTran40" event-change="dateField_change(this,STPublTranDate10)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STPublTranDate10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 3-7 Refrigerants
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STRefr20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STRefr30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STRefr40" event-change="dateField_change(this,STRefrDate10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STRefrDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <td>
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        ST 4-1 Thermal Comfort
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STTherComf20" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="mls-espro-form-fields row">
                      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                        <cn2-checkbox id="SubmChec_STTherComf30" disabled></cn2-checkbox>
                      </div>
                    </div>
                  </td>
                  <td>
                    <cn2-checkbox id="SubmChec_STTherComf40" event-change="dateField_change(this,STTherComfDate10)"
                      disabled>
                    </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STTherComfDate10" inline="8" no-label disabled>
                    </cn2-textbox>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 4-2 Indoor Air Pollutants
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STIndoAirPoll20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STIndoAirPoll30" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STIndoAirPoll40"
                        event-change="dateField_change(this,STIndoAirPollDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STIndoAirPollDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 4-3 Indoor Air Quality
                          <br>(IAQ) Management
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STIndoAirQualMana20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STIndoAirQualMana30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STIndoAirQualMana40"
                        event-change="dateField_change(this,STIndoAirQualManaDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STIndoAirQualManaDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          ST 5-1 Green Features
                          <br>& Innovations
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STGreeFeatInno20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_STGreeFeatInno30" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_STGreeFeatInno40"
                        event-change="dateField_change(this,STGreeFeatInnoDate10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="STGreeFeatInnoDate10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      Others <cn2-button style="margin-left:20px" label="Add" id="add1E"
                        event-click="insertDuplicate('STform','E1');disableDelete('STform','.deleteST');disableNextAddedFields('STform','STOtheInnoDate')"
                        disabled>
                      </cn2-button>
                    </td>
                  </tr>
                  <tbody>
                </table>
              </div>

              <div id="STform">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 Efields" id="E1">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-textarea id="STOthe10" no-label prefix="STOthe" suffix="0" maxlength="250">
                              </cn2-textarea>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_STOtheItem10" prefix="SubmChec_STOtheItem" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_STOtheAttac10" prefix="SubmChec_STOtheAttac" suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="40%">
                          <cn2-checkbox id="SubmChec_STOtheDt10" prefix="SubmChec_STOtheDt" suffix="0"
                            event-change="otherDateField_change(this,'STOtheInnoDate')">
                          </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="STOtheInnoDate10" inline="8"
                            prefix="STOtheInnoDate" suffix="0" no-label disabled></cn2-textbox>
                          <cn2-button id="delete1E" class="deleteST" prefix="delete" suffix="E" label="Delete"
                            style="float:right;" danger
                            event-click="removeDuplicate(this.id,'E1','STform');disableDelete('STform','.deleteST');"
                            disabled>
                          </cn2-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>`;
  if (condition == true) {
    document.getElementById("STtable").innerHTML = xmlStringSTFields;
  } else {
    toggleSTfields(condition);
  }
}
function toggleSTfields(condition) {
  let nonResTranStatCrGroup = [
    document.getElementById("SubmChec_STEnviContSyst20"),
    document.getElementById("SubmChec_STEnviContSyst30"),
    document.getElementById("SubmChec_STEnviContSyst40"),
    document.getElementById("SubmChec_STLighSyst20"),
    document.getElementById("SubmChec_STLighSyst30"),
    document.getElementById("SubmChec_STLighSyst40"),
    document.getElementById("SubmChec_STElecServ20"),
    document.getElementById("SubmChec_STElecServ30"),
    document.getElementById("SubmChec_STElecServ40"),
    document.getElementById("SubmChec_STLiftAndEsca20"),
    document.getElementById("SubmChec_STLiftAndEsca30"),
    document.getElementById("SubmChec_STLiftAndEsca40"),
    document.getElementById("SubmChec_STEnerEffiFeat20"),
    document.getElementById("SubmChec_STEnerEffiFeat30"),
    document.getElementById("SubmChec_STEnerEffiFeat40"),
    document.getElementById("SubmChec_STWateEffiFitt20"),
    document.getElementById("SubmChec_STWateEffiFitt30"),
    document.getElementById("SubmChec_STWateEffiFitt40"),
    document.getElementById("SubmChec_STWateUsagMoni20"),
    document.getElementById("SubmChec_STWateUsagMoni30"),
    document.getElementById("SubmChec_STWateUsagMoni40"),
    document.getElementById("SubmChec_STWateConsOfCool20"),
    document.getElementById("SubmChec_STWateConsOfCool30"),
    document.getElementById("SubmChec_STWateConsOfCool40"),
    document.getElementById("SubmChec_STSustCons20"),
    document.getElementById("SubmChec_STSustCons30"),
    document.getElementById("SubmChec_STSustCons40"),
    document.getElementById("SubmChec_STSustProd20"),
    document.getElementById("SubmChec_STSustProd30"),
    document.getElementById("SubmChec_STSustProd40"),
    document.getElementById("SubmChec_STGreeProv20"),
    document.getElementById("SubmChec_STGreeProv30"),
    document.getElementById("SubmChec_STGreeProv40"),
    document.getElementById("SubmChec_STSiteSele20"),
    document.getElementById("SubmChec_STSiteSele30"),
    document.getElementById("SubmChec_STSiteSele40"),
    document.getElementById("SubmChec_STEnviManaPrac20"),
    document.getElementById("SubmChec_STEnviManaPrac30"),
    document.getElementById("SubmChec_STEnviManaPrac40"),
    document.getElementById("SubmChec_STPublTran20"),
    document.getElementById("SubmChec_STPublTran30"),
    document.getElementById("SubmChec_STPublTran40"),
    document.getElementById("SubmChec_STRefr20"),
    document.getElementById("SubmChec_STRefr30"),
    document.getElementById("SubmChec_STRefr40"),
    document.getElementById("SubmChec_STTherComf20"),
    document.getElementById("SubmChec_STTherComf30"),
    document.getElementById("SubmChec_STTherComf40"),
    document.getElementById("SubmChec_STIndoAirPoll20"),
    document.getElementById("SubmChec_STIndoAirPoll30"),
    document.getElementById("SubmChec_STIndoAirPoll40"),
    document.getElementById("SubmChec_STIndoAirQualMana20"),
    document.getElementById("SubmChec_STIndoAirQualMana30"),
    document.getElementById("SubmChec_STIndoAirQualMana40"),
    document.getElementById("SubmChec_STGreeFeatInno20"),
    document.getElementById("SubmChec_STGreeFeatInno30"),
    document.getElementById("SubmChec_STGreeFeatInno40"),
    document.getElementById("add1E"),
  ];
  let dateGroup = [
    document.getElementById("STEnviContSystDate10"),
    document.getElementById("STLighSystDate10"),
    document.getElementById("STElecServDate10"),
    document.getElementById("STLiftAndEscaDate10"),
    document.getElementById("STEnerEffiFeatDate10"),
    document.getElementById("STWateEffiFittDate10"),
    document.getElementById("STWateUsagMoniDate10"),
    document.getElementById("STWateConsOfCoolDate10"),
    document.getElementById("STSustConsDate10"),
    document.getElementById("STSustProdDate10"),
    document.getElementById("STGreeProvDate10"),
    document.getElementById("STSiteSeleDate10"),
    document.getElementById("STEnviManaPracDate10"),
    document.getElementById("STPublTranDate10"),
    document.getElementById("STRefrDate10"),
    document.getElementById("STTherComfDate10"),
    document.getElementById("STIndoAirPollDate10"),
    document.getElementById("STIndoAirQualManaDate10"),
    document.getElementById("STGreeFeatInnoDate10"),
  ];
  let formField = document.querySelectorAll(".Efields");
  let childCount = document.getElementById("STform").childElementCount;
  let otherCheckBox = document.querySelectorAll(
    "[prefix='SubmChec_STOtheItem']"
  );
  let otherCheckboxAttach = document.querySelectorAll(
    "[prefix='SubmChec_STOtheAttac']"
  );
  let otherTextArea = document.querySelectorAll("[prefix='STOthe']");
  let checkboxDate = document.querySelectorAll("[prefix='SubmChec_STOtheDt']");
  let otherDatefield = document.querySelectorAll("[prefix='STOtheInnoDate']");
  let delBtn = document.querySelectorAll(".deleteST");
  let main = document.getElementById("STtable");

  if (condition == true) {
    for (member of nonResTranStatCrGroup) {
      member.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let i = 0; i < otherCheckBox.length; i++) {
      otherDatefield[i].setAttribute("disabled", "");
      otherCheckboxAttach[i].checked = false;
      otherCheckBox[i].checked = false;
      checkboxDate[i].checked = false;
      otherTextArea[i].value = "";
      otherDatefield[i].value = "";
      otherDatefield[i].removeAttribute("mandatory");
      delBtn[i].setAttribute("disabled", "");
    }
    for (member of nonResTranStatCrGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
    }
    for (field of dateGroup) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}
function showNRB2fields(condition) {
  let xmlStringNRB2Fields = `<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <table class="table table-bordered">
                  <tr>
                    <td><b>Non-Residential Building Criteria (4th Edition) </b>
                      </b>
                    </td>
                    <td><b>Item Scored</b></td>
                    <td><b>Attached Document</b></td>
                    <td><b>Please indicate the submission (ES no.) or correspondence no. of the
                        documents submitted</b>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"><b>Base Requirements</b></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB01 Envelope and roof thermal transfer
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBERTF_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBERTF_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBERTF_ItemScor30"
                        event-change="dateField_change(this,SubmChec_NRBERTF_ItemScor40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBERTF_ItemScor40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB02 Air-tightness and leakage
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubCheck_NRBAirTighAndLeak_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubCheck_NRBAirTighAndLeak_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubCheck_NRBAirTighAndLeak_ItemScor30"
                        event-change="dateField_change(this,SubCheck_NRBAirTighAndLeak_ItemScor40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubCheck_NRBAirTighAndLeak_ItemScor40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB03 Air-conditioning system efficiency and controls
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBAirCondSystEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBAirCondSystEffi_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBAirCondSystEffi_ItemScor30"
                        event-change="dateField_change(this,SubmChec_NRBAirCondSystEffi_ItemScor40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBAirCondSystEffi_ItemScor40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB04 Lighting efficiency and controls
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBLightEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBLightEffi_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBLightEffi_ItemScor30"
                        event-change="dateField_change(this,SubmChec_NRBLightEffi_ItemScor40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBLightEffi_ItemScor40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB05 Vertical transportation efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVertTranEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBVertTranEffi_ItemScor20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBVertTranEffi_ItemScor30"
                        event-change="dateField_change(this,SubmChec_NRBVertTranEffi_ItemScor40)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBVertTranEffi_ItemScor40"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB06 Measurement and instrumentation
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBMeasAndInst_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBMeasAndInst_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBMeasAndInst_30"
                        event-change="dateField_change(this,SubmChec_NRBMeasAndInst_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBMeasAndInst_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB07 Electrical sub-metering
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBElecSubMete_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBElecSubMete_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBElecSubMete_30"
                        event-change="dateField_change(this,SubmChec_NRBElecSubMete_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBElecSubMete_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRB08 Dfm
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBDfm_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBDfm_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBDfm_30" event-change="dateField_change(this,SubmChec_NRBDfm_40)"
                        disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBDfm_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"><b>Elective Options</b></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-1 Environmental credential of project teams
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnviCredOfProj_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEnviCredOfProj_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEnviCredOfProj_30"
                        event-change="dateField_change(this,SubmChec_NRBEnviCredOfProj_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBEnviCredOfProj_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-2(a) Integrated approach to building design
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEInteApprToBldg_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEInteApprToBldg_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEInteApprToBldg_30"
                        event-change="dateField_change(this,SubmChec_NRBEInteApprToBldg_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEInteApprToBldg_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-2(b) Maintainability design considerations
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEMainDesiConsi_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEMainDesiConsi_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEMainDesiConsi_30"
                        event-change="dateField_change(this,SubmChec_NRBEMainDesiConsi_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEMainDesiConsi_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-2(c) Collaborative BIM
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECollBIM_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECollBIM_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBECollBIM_30"
                        event-change="dateField_change(this,SubmChec_NRBECollBIM_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBECollBIM_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-2(d) Green BIM
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEGreeBIM_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEGreeBIM_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEGreeBIM_30"
                        event-change="dateField_change(this,SubmChec_NRBEGreeBIM_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEGreeBIM_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-3 User Engagement
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEUserEnga_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEUserEnga_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEUserEnga_30"
                        event-change="dateField_change(this,SubmChec_NRBEUserEnga_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEUserEnga_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-4(a) Greenery provision
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEGreeProv_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEGreeProv_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEGreeProv_30"
                        event-change="dateField_change(this,SubmChec_NRBEGreeProv_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEGreeProv_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-4(b) Tree conservation
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETreeCons_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETreeCons_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBETreeCons_30"
                        event-change="dateField_change(this,SubmChec_NRBETreeCons_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBETreeCons_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-5 Tropical façade performance
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETropInFacaPerf_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBETropInFacaPerf_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBETropInFacaPerf_30"
                        event-change="dateField_change(this,SubmChec_NRBETropInFacaPerf_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBETropInFacaPerf_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-6(a) Natural ventilation – Building layout
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENatuVentBldgLayo_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENatuVentBldgLayo_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBENatuVentBldgLayo_30"
                        event-change="dateField_change(this,SubmChec_NRBENatuVentBldgLayo_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBENatuVentBldgLayo_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-6(b) CFD or Thermal comfort simulation report
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECFDOrThermComf_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECFDOrThermComf_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBECFDOrThermComf_30"
                        event-change="dateField_change(this,SubmChec_NRBECFDOrThermComf_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBECFDOrThermComf_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 1-6(c) Natural ventilation for common areas
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENatuVentForComm_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENatuVentForComm_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBENatuVentForComm_30"
                        event-change="dateField_change(this,SubmChec_NRBENatuVentForComm_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBENatuVentForComm_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 2-1 Air-conditioning total system efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEAirCondTotalSyst_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEAirCondTotalSyst_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEAirCondTotalSyst_30"
                        event-change="dateField_change(this,SubmChec_NRBEAirCondTotalSyst_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBEAirCondTotalSyst_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 2-2 Mechanical ventilation system efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEMechVentSystEffi_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEMechVentSystEffi_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEMechVentSystEffi_30"
                        event-change="dateField_change(this,SubmChec_NRBEMechVentSystEffi_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEMechVentSystEffi_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 2-3 Solar energy feasibility study
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESolaEnerFeastud_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESolaEnerFeastud_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBESolaEnerFeastud_30"
                        event-change="dateField_change(this,SubmChec_NRBESolaEnerFeastud_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBESolaEnerFeastud_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 2-4 Adoption of renewable energy
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEAdopOfReneEner_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEAdopOfReneEner_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_NRBEAdopOfReneEner_30"
                        event-change="dateField_change(this,SubmChec_NRBEAdopOfReneEner_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBEAdopOfReneEner_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-1(a) Water efficient fittings for public use
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateEffiFor_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateEffiFor_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEWateEffiFor_30"
                        event-change="dateField_change(this,SubmChec_NRBEWateEffiFor_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEWateEffiFor_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NBRBE 3-1(b) Water efficient automated irrigation systems/ drought
                          tolerant plant
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateEffiAutoIrri_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateEffiAutoIrri_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEWateEffiAutoIrri_30"
                        event-change="dateField_change(this,SubmChec_NRBEWateEffiAutoIrri_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBEWateEffiAutoIrri_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-1(c) Cooling tower water treatment system
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECoolToweWateTrea_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBECoolToweWateTrea_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBECoolToweWateTrea_30"
                        event-change="dateField_change(this,SubmChec_NRBECoolToweWateTrea_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_NRBECoolToweWateTrea_40" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-2 Water usage sub-metering
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateUsagSubMete_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWateUsagSubMete_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEWateUsagSubMete_30"
                        event-change="dateField_change(this,SubmChec_NRBEWateUsagSubMete_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEWateUsagSubMete_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-3(a) NEWater Supply
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENewWateSupp_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBENewWateSupp_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBENewWateSupp_30"
                        event-change="dateField_change(this,SubmChec_NRBENewWateSupp_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBENewWateSupp_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-3(b) On-site recycled water
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEOnSiteRecyWate_10" no-label disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEOnSiteRecyWate_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEOnSiteRecyWate_30"
                        event-change="dateField_change(this,SubmChec_NRBEOnSiteRecyWate_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEOnSiteRecyWate_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-3(c) Rainwater harvesting
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBERainHarv_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBERainHarv_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBERainHarv_30"
                        event-change="dateField_change(this,SubmChec_NRBERainHarv_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBERainHarv_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-4(a) Conservation and resource recovery
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEConsAndResoReco_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEConsAndResoReco_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEConsAndResoReco_30"
                        event-change="dateField_change(this,SubmChec_NRBEConsAndResoReco_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEConsAndResoReco_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-4(b) Resource efficient building design (CUI)
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEResoEffiBldgDesi_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEResoEffiBldgDesi_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEResoEffiBldgDesi_30"
                        event-change="dateField_change(this,SubmChec_NRBEResoEffiBldgDesi_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEResoEffiBldgDesi_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-4(c) Low carbon concrete
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowCarbConr_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowCarbConr_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBELowCarbConr_30"
                        event-change="dateField_change(this,SubmChec_NRBELowCarbConr_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBELowCarbConr_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-4(d) Sustainable building systems
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESustBldgSyst_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESustBldgSyst_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBESustBldgSyst_30"
                        event-change="dateField_change(this,SubmChec_NRBESustBldgSyst_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBESustBldgSyst_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-5 Sustainable Products
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESustProd_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESustProd_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBESustProd_30"
                        event-change="dateField_change(this,SubmChec_NRBESustProd_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBESustProd_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-6 Environmental Construction Management Plan
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEEnviConsManaPlan_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEEnviConsManaPlan_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEEnviConsManaPlan_30"
                        event-change="dateField_change(this,SubmChec_NRBEEnviConsManaPlan_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEEnviConsManaPlan_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-7(a) Facilities for collection and storage of different
                          recyclables
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEFaciForCollAnd_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEFaciForCollAnd_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEFaciForCollAnd_30"
                        event-change="dateField_change(this,SubmChec_NRBEFaciForCollAnd_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEFaciForCollAnd_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 3-7(b) Facilities or systems for food waste recycling
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEFaciOrSystFor_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEFaciOrSystFor_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEFaciOrSystFor_30"
                        event-change="dateField_change(this,SubmChec_NRBEFaciOrSystFor_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEFaciOrSystFor_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(a) Low VOC paint systems
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowVOCPainSyst_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowVOCPainSyst_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBELowVOCPainSyst_30"
                        event-change="dateField_change(this,SubmChec_NRBELowVOCPainSyst_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBELowVOCPainSyst_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(b) Low VOC emitting finishes, adhesives and sealants
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowVOCEmitFini_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBELowVOCEmitFini_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBELowVOCEmitFini_30"
                        event-change="dateField_change(this,SubmChec_NRBELowVOCEmitFini_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBELowVOCEmitFini_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(c) Demand control ventilation strategies
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDemaContVentStra_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDemaContVentStra_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEDemaContVentStra_30"
                        event-change="dateField_change(this,SubmChec_NRBEDemaContVentStra_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEDemaContVentStra_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(d) Provision of enhanced filtration media
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfEnhaFilt_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfEnhaFilt_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEProvOfEnhaFilt_30"
                        event-change="dateField_change(this,SubmChec_NRBEProvOfEnhaFilt_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEProvOfEnhaFilt_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(e) Provision of Ultraviolet Germicidal Irradiation (UVGI)
                          system
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfUltrGerm_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfUltrGerm_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEProvOfUltrGerm_30"
                        event-change="dateField_change(this,SubmChec_NRBEProvOfUltrGerm_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEProvOfUltrGerm_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-1(f) Provision of dedicated outdoor air system
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfDediOutd_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfDediOutd_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEProvOfDediOutd_30"
                        event-change="dateField_change(this,SubmChec_NRBEProvOfDediOutd_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEProvOfDediOutd_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-2(a) Daylighting provision for occupied areas
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDaylProvForOccu_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDaylProvForOccu_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEDaylProvForOccu_30"
                        event-change="dateField_change(this,SubmChec_NRBEDaylProvForOccu_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEDaylProvForOccu_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-2(b) Daylighting provision for common areas
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDaylProvForComm_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEDaylProvForComm_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEDaylProvForComm_30"
                        event-change="dateField_change(this,SubmChec_NRBEDaylProvForComm_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEDaylProvForComm_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-2(c) Provision of luminaires that provide visual comfort
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfLumiThat_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEProvOfLumiThat_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEProvOfLumiThat_30"
                        event-change="dateField_change(this,SubmChec_NRBEProvOfLumiThat_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEProvOfLumiThat_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-3 Biophilic Design
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEBiopDesi_10" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEBiopDesi_20" disabled></cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEBiopDesi_30"
                        event-change="dateField_change(this,SubmChec_NRBEBiopDesi_40)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEBiopDesi_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-4(a) Web-based or mobile application for users and FM
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWebBaseOrMobi_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEWebBaseOrMobi_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEWebBaseOrMobi_30"
                        event-change="dateField_change(this,SubmChec_NRBEWebBaseOrMobi_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEWebBaseOrMobi_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-4(b) BMS with BACnet, Modbus or open source
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEBMSWIthBAC_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBEBMSWIthBAC_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBEBMSWIthBAC_30"
                        event-change="dateField_change(this,SubmChec_NRBEBMSWIthBAC_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBEBMSWIthBAC_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          NRBE 4-5 System Handover and Documentation
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESystHandAndDocu_10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_NRBESystHandAndDocu_20" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_NRBESystHandAndDocu_30"
                        event-change="dateField_change(this,SubmChec_NRBESystHandAndDocu_40)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_NRBESystHandAndDocu_40" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">Others <cn2-button style="margin-left:20px;" label="Add" id="Add1g"
                        event-click="insertDuplicate('NRB2form','G1');disableDelete('NRB2form','.deleteNRB2');disableNextAddedFields('NRB2form','SubmChec_NRBEOthe_SubmNo')"
                        disabled>
                      </cn2-button>
                    </td>
                  </tr>
                  <tbody>
                </table>
              </div>
              <div id="NRB2form">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 Gfields" id="G1">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-textarea id="SubmChec_NRBEOthe10" no-label prefix="SubmChec_NRBEOthe" suffix="0"
                                maxlength="250">
                              </cn2-textarea>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_NRBEOthe_ItemScor10" prefix="SubmChec_NRBEOthe_ItemScor"
                                suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_NRBEOthe_AttaDocu10" prefix="SubmChec_NRBEOthe_AttaDocu"
                                suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="40%">
                          <cn2-checkbox id="SubmChec_NRBEOthe_PleaIndi10"
                            event-change="otherDateField_change(this,'SubmChec_NRBEOthe_SubmNo');"
                            prefix="SubmChec_NRBEOthe_PleaIndi" suffix="0"></cn2-checkbox>
                          &nbsp;
                          <cn2-textbox maxlength="30" id="SubmChec_NRBEOthe_SubmNo10" inline="8"
                            prefix="SubmChec_NRBEOthe_SubmNo" suffix="0" no-label disabled>
                          </cn2-textbox>
                          <cn2-button id="delete1G" class="deleteNRB2" prefix="delete" suffix="D" label="Delete"
                            style="float:right;" danger
                            event-click="removeDuplicate(this.id,'G1','NRB2form');disableDelete('NRB2form','.deleteNRB2');"
                            disabled></cn2-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>`;

  if (condition == true) {
    document.getElementById("NRB2table").innerHTML = xmlStringNRB2Fields;
  } else {
    toggleNRB2fields(condition);
  }
}
function toggleNRB2fields(condition) {
  let checkboxGroup = [
    document.getElementById("SubmChec_NRBERTF_ItemScor10"),
    document.getElementById("SubmChec_NRBERTF_ItemScor20"),
    document.getElementById("SubmChec_NRBERTF_ItemScor30"),
    document.getElementById("SubCheck_NRBAirTighAndLeak_ItemScor10"),
    document.getElementById("SubCheck_NRBAirTighAndLeak_ItemScor20"),
    document.getElementById("SubCheck_NRBAirTighAndLeak_ItemScor30"),
    document.getElementById("SubmChec_NRBAirCondSystEffi_ItemScor10"),
    document.getElementById("SubmChec_NRBAirCondSystEffi_ItemScor20"),
    document.getElementById("SubmChec_NRBAirCondSystEffi_ItemScor30"),
    document.getElementById("SubmChec_NRBLightEffi_ItemScor10"),
    document.getElementById("SubmChec_NRBLightEffi_ItemScor20"),
    document.getElementById("SubmChec_NRBLightEffi_ItemScor30"),
    document.getElementById("SubmChec_NRBVertTranEffi_ItemScor10"),
    document.getElementById("SubmChec_NRBVertTranEffi_ItemScor20"),
    document.getElementById("SubmChec_NRBVertTranEffi_ItemScor30"),
    document.getElementById("SubmChec_NRBMeasAndInst_10"),
    document.getElementById("SubmChec_NRBMeasAndInst_20"),
    document.getElementById("SubmChec_NRBMeasAndInst_30"),
    document.getElementById("SubmChec_NRBElecSubMete_10"),
    document.getElementById("SubmChec_NRBElecSubMete_20"),
    document.getElementById("SubmChec_NRBElecSubMete_30"),
    document.getElementById("SubmChec_NRBDfm_10"),
    document.getElementById("SubmChec_NRBDfm_20"),
    document.getElementById("SubmChec_NRBDfm_30"),
    document.getElementById("SubmChec_NRBEnviCredOfProj_10"),
    document.getElementById("SubmChec_NRBEnviCredOfProj_20"),
    document.getElementById("SubmChec_NRBEnviCredOfProj_30"),
    document.getElementById("SubmChec_NRBEInteApprToBldg_10"),
    document.getElementById("SubmChec_NRBEInteApprToBldg_20"),
    document.getElementById("SubmChec_NRBEInteApprToBldg_30"),
    document.getElementById("SubmChec_NRBEMainDesiConsi_10"),
    document.getElementById("SubmChec_NRBEMainDesiConsi_20"),
    document.getElementById("SubmChec_NRBEMainDesiConsi_30"),
    document.getElementById("SubmChec_NRBECollBIM_10"),
    document.getElementById("SubmChec_NRBECollBIM_20"),
    document.getElementById("SubmChec_NRBECollBIM_30"),
    document.getElementById("SubmChec_NRBEGreeBIM_10"),
    document.getElementById("SubmChec_NRBEGreeBIM_20"),
    document.getElementById("SubmChec_NRBEGreeBIM_30"),
    document.getElementById("SubmChec_NRBEUserEnga_10"),
    document.getElementById("SubmChec_NRBEUserEnga_20"),
    document.getElementById("SubmChec_NRBEUserEnga_30"),
    document.getElementById("SubmChec_NRBEGreeProv_10"),
    document.getElementById("SubmChec_NRBEGreeProv_20"),
    document.getElementById("SubmChec_NRBEGreeProv_30"),
    document.getElementById("SubmChec_NRBETreeCons_10"),
    document.getElementById("SubmChec_NRBETreeCons_20"),
    document.getElementById("SubmChec_NRBETreeCons_30"),
    document.getElementById("SubmChec_NRBETropInFacaPerf_10"),
    document.getElementById("SubmChec_NRBETropInFacaPerf_20"),
    document.getElementById("SubmChec_NRBETropInFacaPerf_30"),
    document.getElementById("SubmChec_NRBENatuVentBldgLayo_10"),
    document.getElementById("SubmChec_NRBENatuVentBldgLayo_20"),
    document.getElementById("SubmChec_NRBENatuVentBldgLayo_30"),
    document.getElementById("SubmChec_NRBECFDOrThermComf_10"),
    document.getElementById("SubmChec_NRBECFDOrThermComf_20"),
    document.getElementById("SubmChec_NRBECFDOrThermComf_30"),
    document.getElementById("SubmChec_NRBENatuVentForComm_10"),
    document.getElementById("SubmChec_NRBENatuVentForComm_20"),
    document.getElementById("SubmChec_NRBENatuVentForComm_30"),
    document.getElementById("SubmChec_NRBEAirCondTotalSyst_10"),
    document.getElementById("SubmChec_NRBEAirCondTotalSyst_20"),
    document.getElementById("SubmChec_NRBEAirCondTotalSyst_30"),
    document.getElementById("SubmChec_NRBEMechVentSystEffi_10"),
    document.getElementById("SubmChec_NRBEMechVentSystEffi_20"),
    document.getElementById("SubmChec_NRBEMechVentSystEffi_30"),
    document.getElementById("SubmChec_NRBESolaEnerFeastud_10"),
    document.getElementById("SubmChec_NRBESolaEnerFeastud_20"),
    document.getElementById("SubmChec_NRBESolaEnerFeastud_30"),
    document.getElementById("SubmChec_NRBEAdopOfReneEner_10"),
    document.getElementById("SubmChec_NRBEAdopOfReneEner_20"),
    document.getElementById("SubmChec_NRBEAdopOfReneEner_30"),
    document.getElementById("SubmChec_NRBEWateEffiFor_10"),
    document.getElementById("SubmChec_NRBEWateEffiFor_20"),
    document.getElementById("SubmChec_NRBEWateEffiFor_30"),
    document.getElementById("SubmChec_NRBEWateEffiAutoIrri_10"),
    document.getElementById("SubmChec_NRBEWateEffiAutoIrri_20"),
    document.getElementById("SubmChec_NRBEWateEffiAutoIrri_30"),
    document.getElementById("SubmChec_NRBECoolToweWateTrea_10"),
    document.getElementById("SubmChec_NRBECoolToweWateTrea_20"),
    document.getElementById("SubmChec_NRBECoolToweWateTrea_30"),
    document.getElementById("SubmChec_NRBEWateUsagSubMete_10"),
    document.getElementById("SubmChec_NRBEWateUsagSubMete_20"),
    document.getElementById("SubmChec_NRBEWateUsagSubMete_30"),
    document.getElementById("SubmChec_NRBENewWateSupp_10"),
    document.getElementById("SubmChec_NRBENewWateSupp_20"),
    document.getElementById("SubmChec_NRBENewWateSupp_30"),
    document.getElementById("SubmChec_NRBEOnSiteRecyWate_10"),
    document.getElementById("SubmChec_NRBEOnSiteRecyWate_20"),
    document.getElementById("SubmChec_NRBEOnSiteRecyWate_30"),
    document.getElementById("SubmChec_NRBERainHarv_10"),
    document.getElementById("SubmChec_NRBERainHarv_20"),
    document.getElementById("SubmChec_NRBERainHarv_30"),
    document.getElementById("SubmChec_NRBEConsAndResoReco_10"),
    document.getElementById("SubmChec_NRBEConsAndResoReco_20"),
    document.getElementById("SubmChec_NRBEConsAndResoReco_30"),
    document.getElementById("SubmChec_NRBEResoEffiBldgDesi_10"),
    document.getElementById("SubmChec_NRBEResoEffiBldgDesi_20"),
    document.getElementById("SubmChec_NRBEResoEffiBldgDesi_30"),
    document.getElementById("SubmChec_NRBELowCarbConr_10"),
    document.getElementById("SubmChec_NRBELowCarbConr_20"),
    document.getElementById("SubmChec_NRBELowCarbConr_30"),
    document.getElementById("SubmChec_NRBESustBldgSyst_10"),
    document.getElementById("SubmChec_NRBESustBldgSyst_20"),
    document.getElementById("SubmChec_NRBESustBldgSyst_30"),
    document.getElementById("SubmChec_NRBESustProd_10"),
    document.getElementById("SubmChec_NRBESustProd_20"),
    document.getElementById("SubmChec_NRBESustProd_30"),
    document.getElementById("SubmChec_NRBEEnviConsManaPlan_10"),
    document.getElementById("SubmChec_NRBEEnviConsManaPlan_20"),
    document.getElementById("SubmChec_NRBEEnviConsManaPlan_30"),
    document.getElementById("SubmChec_NRBEFaciForCollAnd_10"),
    document.getElementById("SubmChec_NRBEFaciForCollAnd_20"),
    document.getElementById("SubmChec_NRBEFaciForCollAnd_30"),
    document.getElementById("SubmChec_NRBEFaciOrSystFor_10"),
    document.getElementById("SubmChec_NRBEFaciOrSystFor_20"),
    document.getElementById("SubmChec_NRBEFaciOrSystFor_30"),
    document.getElementById("SubmChec_NRBELowVOCPainSyst_10"),
    document.getElementById("SubmChec_NRBELowVOCPainSyst_20"),
    document.getElementById("SubmChec_NRBELowVOCPainSyst_30"),
    document.getElementById("SubmChec_NRBELowVOCEmitFini_10"),
    document.getElementById("SubmChec_NRBELowVOCEmitFini_20"),
    document.getElementById("SubmChec_NRBELowVOCEmitFini_30"),
    document.getElementById("SubmChec_NRBEDemaContVentStra_10"),
    document.getElementById("SubmChec_NRBEDemaContVentStra_20"),
    document.getElementById("SubmChec_NRBEDemaContVentStra_30"),
    document.getElementById("SubmChec_NRBEProvOfEnhaFilt_10"),
    document.getElementById("SubmChec_NRBEProvOfEnhaFilt_20"),
    document.getElementById("SubmChec_NRBEProvOfEnhaFilt_30"),
    document.getElementById("SubmChec_NRBEProvOfUltrGerm_10"),
    document.getElementById("SubmChec_NRBEProvOfUltrGerm_20"),
    document.getElementById("SubmChec_NRBEProvOfUltrGerm_30"),
    document.getElementById("SubmChec_NRBEProvOfDediOutd_10"),
    document.getElementById("SubmChec_NRBEProvOfDediOutd_20"),
    document.getElementById("SubmChec_NRBEProvOfDediOutd_30"),
    document.getElementById("SubmChec_NRBEDaylProvForOccu_10"),
    document.getElementById("SubmChec_NRBEDaylProvForOccu_20"),
    document.getElementById("SubmChec_NRBEDaylProvForOccu_30"),
    document.getElementById("SubmChec_NRBEDaylProvForComm_10"),
    document.getElementById("SubmChec_NRBEDaylProvForComm_20"),
    document.getElementById("SubmChec_NRBEDaylProvForComm_30"),
    document.getElementById("SubmChec_NRBEProvOfLumiThat_10"),
    document.getElementById("SubmChec_NRBEProvOfLumiThat_20"),
    document.getElementById("SubmChec_NRBEProvOfLumiThat_30"),
    document.getElementById("SubmChec_NRBEBiopDesi_10"),
    document.getElementById("SubmChec_NRBEBiopDesi_20"),
    document.getElementById("SubmChec_NRBEBiopDesi_30"),
    document.getElementById("SubmChec_NRBEWebBaseOrMobi_10"),
    document.getElementById("SubmChec_NRBEWebBaseOrMobi_20"),
    document.getElementById("SubmChec_NRBEWebBaseOrMobi_30"),
    document.getElementById("SubmChec_NRBEBMSWIthBAC_10"),
    document.getElementById("SubmChec_NRBEBMSWIthBAC_20"),
    document.getElementById("SubmChec_NRBEBMSWIthBAC_30"),
    document.getElementById("SubmChec_NRBESystHandAndDocu_10"),
    document.getElementById("SubmChec_NRBESystHandAndDocu_20"),
    document.getElementById("SubmChec_NRBESystHandAndDocu_30"),
    document.getElementById("SubmChec_NRBEOthe_AttaDocu10"),
    document.getElementById("Add1g"),
  ];

  let textfieldGroup = [
    document.getElementById("SubmChec_NRBERTF_ItemScor40"),
    document.getElementById("SubCheck_NRBAirTighAndLeak_ItemScor40"),
    document.getElementById("SubmChec_NRBAirCondSystEffi_ItemScor40"),
    document.getElementById("SubmChec_NRBLightEffi_ItemScor40"),
    document.getElementById("SubmChec_NRBVertTranEffi_ItemScor40"),
    document.getElementById("SubmChec_NRBMeasAndInst_40"),
    document.getElementById("SubmChec_NRBElecSubMete_40"),
    document.getElementById("SubmChec_NRBDfm_40"),
    document.getElementById("SubmChec_NRBEnviCredOfProj_40"),
    document.getElementById("SubmChec_NRBEInteApprToBldg_40"),
    document.getElementById("SubmChec_NRBEMainDesiConsi_40"),
    document.getElementById("SubmChec_NRBECollBIM_40"),
    document.getElementById("SubmChec_NRBEGreeBIM_40"),
    document.getElementById("SubmChec_NRBEUserEnga_40"),
    document.getElementById("SubmChec_NRBEGreeProv_40"),
    document.getElementById("SubmChec_NRBETreeCons_40"),
    document.getElementById("SubmChec_NRBETropInFacaPerf_40"),
    document.getElementById("SubmChec_NRBENatuVentBldgLayo_40"),
    document.getElementById("SubmChec_NRBECFDOrThermComf_40"),
    document.getElementById("SubmChec_NRBENatuVentForComm_40"),
    document.getElementById("SubmChec_NRBEAirCondTotalSyst_40"),
    document.getElementById("SubmChec_NRBEMechVentSystEffi_40"),
    document.getElementById("SubmChec_NRBESolaEnerFeastud_40"),
    document.getElementById("SubmChec_NRBEAdopOfReneEner_40"),
    document.getElementById("SubmChec_NRBEWateEffiFor_40"),
    document.getElementById("SubmChec_NRBEWateEffiAutoIrri_40"),
    document.getElementById("SubmChec_NRBECoolToweWateTrea_40"),
    document.getElementById("SubmChec_NRBEWateUsagSubMete_40"),
    document.getElementById("SubmChec_NRBENewWateSupp_40"),
    document.getElementById("SubmChec_NRBEOnSiteRecyWate_40"),
    document.getElementById("SubmChec_NRBERainHarv_40"),
    document.getElementById("SubmChec_NRBEConsAndResoReco_40"),
    document.getElementById("SubmChec_NRBEResoEffiBldgDesi_40"),
    document.getElementById("SubmChec_NRBELowCarbConr_40"),
    document.getElementById("SubmChec_NRBESustBldgSyst_40"),
    document.getElementById("SubmChec_NRBESustProd_40"),
    document.getElementById("SubmChec_NRBEEnviConsManaPlan_40"),
    document.getElementById("SubmChec_NRBEFaciForCollAnd_40"),
    document.getElementById("SubmChec_NRBEFaciOrSystFor_40"),
    document.getElementById("SubmChec_NRBELowVOCPainSyst_40"),
    document.getElementById("SubmChec_NRBELowVOCEmitFini_40"),
    document.getElementById("SubmChec_NRBEDemaContVentStra_40"),
    document.getElementById("SubmChec_NRBEProvOfEnhaFilt_40"),
    document.getElementById("SubmChec_NRBEProvOfUltrGerm_40"),
    document.getElementById("SubmChec_NRBEProvOfDediOutd_40"),
    document.getElementById("SubmChec_NRBEDaylProvForOccu_40"),
    document.getElementById("SubmChec_NRBEDaylProvForComm_40"),
    document.getElementById("SubmChec_NRBEProvOfLumiThat_40"),
    document.getElementById("SubmChec_NRBEBiopDesi_40"),
    document.getElementById("SubmChec_NRBEWebBaseOrMobi_40"),
    document.getElementById("SubmChec_NRBEBMSWIthBAC_40"),
    document.getElementById("SubmChec_NRBESystHandAndDocu_40"),
  ];
  let formField = document.querySelectorAll(".Gfields");
  let childCount = document.getElementById("NRB2form").childElementCount;
  let otherCheckBox = document.querySelectorAll(
    "[prefix='SubmChec_NRBEOthe_ItemScor']"
  );
  let otherCheckboxAttach = document.querySelectorAll(
    "[prefix='SubmChec_NRBEOthe_AttaDocu']"
  );
  let otherTextArea = document.querySelectorAll("[prefix='SubmChec_NRBEOthe']");
  let checkboxDate = document.querySelectorAll(
    "[prefix='SubmChec_NRBEOthe_PleaIndi']"
  );
  let otherDatefield = document.querySelectorAll(
    "[prefix='SubmChec_NRBEOthe_SubmNo']"
  );
  let delBtn = document.querySelectorAll(".deleteNRB2");
  let main = document.getElementById("NRB2table");

  if (condition == true) {
    for (member of checkboxGroup) {
      member.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let i = 0; i < otherCheckBox.length; i++) {
      otherDatefield[i].setAttribute("disabled", "");
      otherCheckboxAttach[i].checked = false;
      otherCheckBox[i].checked = false;
      checkboxDate[i].checked = false;
      otherTextArea[i].value = "";
      otherDatefield[i].value = "";
      otherDatefield[i].removeAttribute("mandatory");
      delBtn[i].setAttribute("disabled", "");
    }
    for (member of checkboxGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
    }
    for (field of textfieldGroup) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}
function showRB2fields(condition) {
  let xmlStringRB2Fields = `
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <table class="table table-bordered">
                  <tr>
                    <td><b>Residential Building Criteria (4th Edition)</b>
                      </b>
                    </td>
                    <td><b>Item Scored</b></td>
                    <td><b>Attached Document</b></td>
                    <td><b>Please indicate the submission (ES no.) or correspondence no. of the
                        documents submitted</b>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"><b>Base Requirements</b></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB01 Envelope and roof thermal transfer
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBERTF_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBERTF_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmCheck_RBERTF_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBERTF_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBERTF_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB02 Air-tightness and leakage
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubCheck_RBAirTighAndLeak_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubCheck_RBAirTighAndLeak_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubCheck_RBAirTighAndLeak_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubCheck_RBAirTighAndLeak_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubCheck_RBAirTighAndLeak_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB03 Air-conditioning system efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBAirCondSystEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBAirCondSystEffi_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBAirCondSystEffi_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBAirCondSystEffi_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBAirCondSystEffi_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB04 Lighting efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBLightEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBLightEffi_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBLightEffi_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBLightEffi_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBLightEffi_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RB05 Vertical transportation efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBVertTranEffi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBVertTranEffi_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBVertTranEffi_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBVertTranEffi_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBVertTranEffi_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"><b>Elective Options</b></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-1 Environmental credential of project teams
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnvCredOfProj_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnvCredOfProj_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEEnvCredOfProj_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEEnvCredOfProj_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBEEnvCredOfProj_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-2(a) Integrated approach to building design
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEIntegApprToBldg_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEIntegApprToBldg_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEIntegApprToBldg_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEIntegApprToBldg_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEIntegApprToBldg_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-2(b) Maintainability design considerations
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEMainDesCons_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEMainDesCons_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEMainDesCons_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEMainDesCons_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEMainDesCons_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-2(c) Collaborative BIM
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBECollBIM_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBECollBIM_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBECollBIM_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBECollBIM_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBECollBIM_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-2(d) Green BIM
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEGreeBIM_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEGreeBIM_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEGreeBIM_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEGreeBIM_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEGreeBIM_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-3 User engagement
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEUserEnga_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEUserEnga_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEUserEnga_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEUserEnga_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBEUserEnga_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-4(a) Greenery provision
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEGreeProv_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEGreeProv_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEGreeProv_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEGreeProv_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEGreeProv_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-4(b) Tree conservation
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBETreeCons_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBETreeCons_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBETreeCons_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBETreeCons_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBETreeCons_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-5 Tropical façade performance
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBETropFacaPerf_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBETropFacaPerf_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBETropFacaPerf_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBETropFacaPerf_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBETropFacaPerf_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-6(a) Natural ventilation - Building layout design
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentBLD_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentBLD_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBENatuVentBLD_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBENatuVentBLD_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBENatuVentBLD_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-6(b) Natural ventilation - Dwelling unit design
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentDUD_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentDUD_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBENatuVentDUD_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBENatuVentDUD_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBENatuVentDUD_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-6(c) CFD or Thermal comfort simulation report
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBECFDOrTCSR_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBECFDOrTCSR_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBECFDOrTCSR_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBECFDOrTCSR_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBECFDOrTCSR_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 1-6(d) Natural ventilation for common areas
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentiForComm_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentiForComm_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBENatuVentiForComm_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBENatuVentiForComm_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBENatuVentiForComm_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 2-1 Enhanced air-conditioning system efficiency
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnhaAirCondSyst_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnhaAirCondSyst_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEEnhaAirCondSyst_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEEnhaAirCondSyst_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEEnhaAirCondSyst_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 2-2 Energy efficient products and features (maximum of 3
                          features)
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnerEffiProdAnd_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnerEffiProdAnd_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBEEnerEffiProdAnd_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEEnerEffiProdAnd_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEEnerEffiProdAnd_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 2-3 Solar energy feasibility study
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESolaEnerFeasStud_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESolaEnerFeasStud_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td>
                      <cn2-checkbox id="SubmChec_RBESolaEnerFeasStud_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBESolaEnerFeasStud_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBESolaEnerFeasStud_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 2-4 Adoption of renewable energy
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEAdopOfReneEner_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEAdopOfReneEner_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEAdopOfReneEner_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEAdopOfReneEner_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBEAdopOfReneEner_SubmOrCorr10"
                        inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-1(a) Water efficient fittings for dwelling units
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiFittA_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiFittA_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEWateEffiFittA_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEWateEffiFittA_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBEWateEffiFittA_SubmOrCorr10"
                        inline="8" no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-1(b) Water efficient fittings for common facilities
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiFittB_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiFittB_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEWateEffiFittB_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEWateEffiFittB_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;<cn2-textbox maxlength="30" id="SubmChec_RBEWateEffiFittB_SubmOrCorr10"
                        inline="8" no-label disabled></cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-1(c) Water efficient automated irrigation systems/drought
                          tolerant plant
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiAutoIrri_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateEffiAutoIrri_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEWateEffiAutoIrri_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEWateEffiAutoIrri_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEWateEffiAutoIrri_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-2 Water usage sub-metering
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateUsagSubMete_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWateUsagSubMete_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEWateUsagSubMete_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEWateUsagSubMete_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEWateUsagSubMete_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-3(a) NEWater supply
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENewWateSupp_ItemScor10" no-label disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENewWateSupp_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBENewWateSupp_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBENewWateSupp_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBENewWateSupp_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-3(b) On-site recycled water
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEOnSiteRecyWate_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEOnSiteRecyWate_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEOnSiteRecyWate_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEOnSiteRecyWate_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEOnSiteRecyWate_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-3(c) Rainwater harvesting
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBERainHarv_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBERainHarv_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBERainHarv_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBERainHarv_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBERainHarv_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-4(a) Conservation and resource recovery
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEConsAndResoReco_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEConsAndResoReco_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEConsAndResoReco_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEConsAndResoReco_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEConsAndResoReco_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-4(b) Resource efficient building Design(CUI)
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEResoEffiBldgDesi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEResoEffiBldgDesi_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEResoEffiBldgDesi_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEResoEffiBldgDesi_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEResoEffiBldgDesi_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-4(c) Low carbon concrete
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowCarbConc_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowCarbConc_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBELowCarbConc_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBELowCarbConc_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBELowCarbConc_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-4(d) Sustainable building systems
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESustBldgSyst_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESustBldgSyst_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBESustBldgSyst_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBESustBldgSyst_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBESustBldgSyst_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-5 Sustainable products
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESustProd_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESustProd_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBESustProd_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBESustProd_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBESustProd_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-6 Environmental construction management plan
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnviConsManaPlan_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEEnviConsManaPlan_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEEnviConsManaPlan_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEEnviConsManaPlan_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEEnviConsManaPlan_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-7(a) Facilities for collection and storage of different
                          recyclables
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEFacForCollAnd_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEFacForCollAnd_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEFacForCollAnd_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEFacForCollAnd_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEFacForCollAnd_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 3-7(b) Facilities or systems for the placement of horticultural
                          or wood waste for
                          recycling
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmCheck_RBEFacOrSystFor_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmCheck_RBEFacOrSystFor_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmCheck_RBEFacOrSystFor_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmCheck_RBEFacOrSystFor_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmCheck_RBEFacOrSystFor_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-1(a) Low VOC paint systems
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowVOCPainSyst_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowVOCPainSyst_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBELowVOCPainSyst_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBELowVOCPainSyst_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBELowVOCPainSyst_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-1(b) Low VOC interior finishes, adhesives and sealants
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowVOCInteFini_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBELowVOCInteFini_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBELowVOCInteFini_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBELowVOCInteFini_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBELowVOCInteFini_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-1(c) Natural ventilation and daylighting for all wet areas
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentAndDayl_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBENatuVentAndDayl_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBENatuVentAndDayl_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBENatuVentAndDayl_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBENatuVentAndDayl_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-2(a) Daylighting for dwelling units
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEDaylForDwelUnit_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEDaylForDwelUnit_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEDaylForDwelUnit_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEDaylForDwelUnit_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEDaylForDwelUnit_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-2(b) Daylighting for common areas
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEDaylForCommArea_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEDaylForCommArea_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEDaylForCommArea_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEDaylForCommArea_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEDaylForCommArea_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-3 Biophilic Design
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEBiopDesi_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEBiopDesi_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEBiopDesi_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEBiopDesi_SubmOrCorr10)" disabled>
                      </cn2-checkbox>
                      &nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEBiopDesi_SubmOrCorr10" inline="8" no-label disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-4(a) Smart metering for electricity, water or gas
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESmarMeteForElec_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBESmarMeteForElec_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBESmarMeteForElec_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBESmarMeteForElec_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBESmarMeteForElec_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          RBE 4-4(b) Web-based or mobile application for users
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWebOrMobiAppl_ItemScor10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="15%" class="text-center">
                      <div class="mls-espro-form-fields row">
                        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                          <cn2-checkbox id="SubmChec_RBEWebOrMobiAppl_AttaDocu10" disabled>
                          </cn2-checkbox>
                        </div>
                      </div>
                    </td>
                    <td width="40%">
                      <cn2-checkbox id="SubmChec_RBEWebOrMobiAppl_DocuSubmOrCorrChk10"
                        event-change="dateField_change(this,SubmChec_RBEWebOrMobiAppl_SubmOrCorr10)" disabled>
                      </cn2-checkbox>&nbsp;
                      <cn2-textbox maxlength="30" id="SubmChec_RBEWebOrMobiAppl_SubmOrCorr10" inline="8" no-label
                        disabled>
                      </cn2-textbox>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">Others <cn2-button style="margin-left:20px;" label="Add" id="Add1f"
                        event-click="insertDuplicate('RB2form','F1');disableDelete('RB2form','.deleteRB2');disableNextAddedFields('RB2form','SubmChec_RBEOthe_SubmOrCorr')"
                        disabled>
                      </cn2-button>
                    </td>
                  </tr>
                  <tbody>
                </table>
              </div>
              <div id="RB2form">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 Ffields" id="F1">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-textarea id="SubmChec_RBEOthe10" no-label prefix="SubmChec_RBEOthe" suffix="0"
                                maxlength="250">
                              </cn2-textarea>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_RBEOthe_ItemScor10" prefix="SubmChec_RBEOthe_ItemScor"
                                suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="15%" class="text-center">
                          <div class="mls-espro-form-fields row">
                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 pt-2">
                              <cn2-checkbox id="SubmChec_RBEOthe_AttaDocu10" prefix="SubmChec_RBEOthe_AttaDocu"
                                suffix="0">
                              </cn2-checkbox>
                            </div>
                          </div>
                        </td>
                        <td width="40%">
                          <cn2-checkbox id="SubmChec_RBEOthe_DocuSubmOrCorrChk10"
                            event-change="otherDateField_change(this,'SubmChec_RBEOthe_SubmOrCorr');"
                            prefix="SubmChec_RBEOthe_DocuSubmOrCorrChk" suffix="0">
                          </cn2-checkbox>&nbsp;
                          <cn2-textbox maxlength="30" id="SubmChec_RBEOthe_SubmOrCorr10" inline="8"
                            prefix="SubmChec_RBEOthe_SubmOrCorr" suffix="0" no-label disabled>
                          </cn2-textbox>
                          <cn2-button id="delete1F" class="deleteRB2" prefix="delete" suffix="D" label="Delete"
                            style="float:right;" danger
                            event-click="removeDuplicate(this.id,'F1','RB2form');disableDelete('RB2form','.deleteRB2');"
                            disabled>
                          </cn2-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>`;

  if (condition == true) {
    document.getElementById("RB2table").innerHTML = xmlStringRB2Fields;
  } else {
    toggleRB2fields(condition);
  }
}
function toggleRB2fields(condition) {
  let checkboxGroup = [
    document.getElementById("SubmChec_RBERTF_ItemScor10"),
    document.getElementById("SubmChec_RBERTF_AttaDocu10"),
    document.getElementById("SubmCheck_RBERTF_DocuSubmOrCorrChk10"),
    document.getElementById("SubCheck_RBAirTighAndLeak_ItemScor10"),
    document.getElementById("SubCheck_RBAirTighAndLeak_AttaDocu10"),
    document.getElementById("SubCheck_RBAirTighAndLeak_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBAirCondSystEffi_ItemScor10"),
    document.getElementById("SubmChec_RBAirCondSystEffi_AttaDocu10"),
    document.getElementById("SubmChec_RBAirCondSystEffi_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBLightEffi_ItemScor10"),
    document.getElementById("SubmChec_RBLightEffi_AttaDocu10"),
    document.getElementById("SubmChec_RBLightEffi_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBVertTranEffi_ItemScor10"),
    document.getElementById("SubmChec_RBVertTranEffi_AttaDocu10"),
    document.getElementById("SubmChec_RBVertTranEffi_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEEnvCredOfProj_ItemScor10"),
    document.getElementById("SubmChec_RBEEnvCredOfProj_AttaDocu10"),
    document.getElementById("SubmChec_RBEEnvCredOfProj_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEIntegApprToBldg_ItemScor10"),
    document.getElementById("SubmChec_RBEIntegApprToBldg_AttaDocu10"),
    document.getElementById("SubmChec_RBEIntegApprToBldg_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEMainDesCons_ItemScor10"),
    document.getElementById("SubmChec_RBEMainDesCons_AttaDocu10"),
    document.getElementById("SubmChec_RBEMainDesCons_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBECollBIM_ItemScor10"),
    document.getElementById("SubmChec_RBECollBIM_AttaDocu10"),
    document.getElementById("SubmChec_RBECollBIM_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEGreeBIM_ItemScor10"),
    document.getElementById("SubmChec_RBEGreeBIM_AttaDocu10"),
    document.getElementById("SubmChec_RBEGreeBIM_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEUserEnga_ItemScor10"),
    document.getElementById("SubmChec_RBEUserEnga_AttaDocu10"),
    document.getElementById("SubmChec_RBEUserEnga_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEGreeProv_ItemScor10"),
    document.getElementById("SubmChec_RBEGreeProv_AttaDocu10"),
    document.getElementById("SubmChec_RBEGreeProv_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBETreeCons_ItemScor10"),
    document.getElementById("SubmChec_RBETreeCons_AttaDocu10"),
    document.getElementById("SubmChec_RBETreeCons_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBETropFacaPerf_ItemScor10"),
    document.getElementById("SubmChec_RBETropFacaPerf_AttaDocu10"),
    document.getElementById("SubmChec_RBETropFacaPerf_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBENatuVentBLD_ItemScor10"),
    document.getElementById("SubmChec_RBENatuVentBLD_AttaDocu10"),
    document.getElementById("SubmChec_RBENatuVentBLD_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBENatuVentDUD_ItemScor10"),
    document.getElementById("SubmChec_RBENatuVentDUD_AttaDocu10"),
    document.getElementById("SubmChec_RBENatuVentDUD_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBECFDOrTCSR_ItemScor10"),
    document.getElementById("SubmChec_RBECFDOrTCSR_AttaDocu10"),
    document.getElementById("SubmChec_RBECFDOrTCSR_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBENatuVentiForComm_ItemScor10"),
    document.getElementById("SubmChec_RBENatuVentiForComm_AttaDocu10"),
    document.getElementById("SubmChec_RBENatuVentiForComm_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEEnhaAirCondSyst_ItemScor10"),
    document.getElementById("SubmChec_RBEEnhaAirCondSyst_AttaDocu10"),
    document.getElementById("SubmChec_RBEEnhaAirCondSyst_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEEnerEffiProdAnd_ItemScor10"),
    document.getElementById("SubmChec_RBEEnerEffiProdAnd_AttaDocu10"),
    document.getElementById("SubmChec_RBEEnerEffiProdAnd_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBESolaEnerFeasStud_ItemScor10"),
    document.getElementById("SubmChec_RBESolaEnerFeasStud_AttaDocu10"),
    document.getElementById("SubmChec_RBESolaEnerFeasStud_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEAdopOfReneEner_ItemScor10"),
    document.getElementById("SubmChec_RBEAdopOfReneEner_AttaDocu10"),
    document.getElementById("SubmChec_RBEAdopOfReneEner_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEWateEffiFittA_ItemScor10"),
    document.getElementById("SubmChec_RBEWateEffiFittA_AttaDocu10"),
    document.getElementById("SubmChec_RBEWateEffiFittA_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEWateEffiFittB_ItemScor10"),
    document.getElementById("SubmChec_RBEWateEffiFittB_AttaDocu10"),
    document.getElementById("SubmChec_RBEWateEffiFittB_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEWateEffiAutoIrri_ItemScor10"),
    document.getElementById("SubmChec_RBEWateEffiAutoIrri_AttaDocu10"),
    document.getElementById("SubmChec_RBEWateEffiAutoIrri_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEWateUsagSubMete_ItemScor10"),
    document.getElementById("SubmChec_RBEWateUsagSubMete_AttaDocu10"),
    document.getElementById("SubmChec_RBEWateUsagSubMete_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBENewWateSupp_ItemScor10"),
    document.getElementById("SubmChec_RBENewWateSupp_AttaDocu10"),
    document.getElementById("SubmChec_RBENewWateSupp_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEOnSiteRecyWate_ItemScor10"),
    document.getElementById("SubmChec_RBEOnSiteRecyWate_AttaDocu10"),
    document.getElementById("SubmChec_RBEOnSiteRecyWate_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBERainHarv_ItemScor10"),
    document.getElementById("SubmChec_RBERainHarv_AttaDocu10"),
    document.getElementById("SubmChec_RBERainHarv_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEConsAndResoReco_ItemScor10"),
    document.getElementById("SubmChec_RBEConsAndResoReco_AttaDocu10"),
    document.getElementById("SubmChec_RBEConsAndResoReco_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEResoEffiBldgDesi_ItemScor10"),
    document.getElementById("SubmChec_RBEResoEffiBldgDesi_AttaDocu10"),
    document.getElementById("SubmChec_RBEResoEffiBldgDesi_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBELowCarbConc_ItemScor10"),
    document.getElementById("SubmChec_RBELowCarbConc_AttaDocu10"),
    document.getElementById("SubmChec_RBELowCarbConc_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBESustBldgSyst_ItemScor10"),
    document.getElementById("SubmChec_RBESustBldgSyst_AttaDocu10"),
    document.getElementById("SubmChec_RBESustBldgSyst_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBESustProd_ItemScor10"),
    document.getElementById("SubmChec_RBESustProd_AttaDocu10"),
    document.getElementById("SubmChec_RBESustProd_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEEnviConsManaPlan_ItemScor10"),
    document.getElementById("SubmChec_RBEEnviConsManaPlan_AttaDocu10"),
    document.getElementById("SubmChec_RBEEnviConsManaPlan_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEFacForCollAnd_ItemScor10"),
    document.getElementById("SubmChec_RBEFacForCollAnd_AttaDocu10"),
    document.getElementById("SubmChec_RBEFacForCollAnd_DocuSubmOrCorrChk10"),
    document.getElementById("SubmCheck_RBEFacOrSystFor_ItemScor10"),
    document.getElementById("SubmCheck_RBEFacOrSystFor_AttaDocu10"),
    document.getElementById("SubmCheck_RBEFacOrSystFor_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBELowVOCPainSyst_ItemScor10"),
    document.getElementById("SubmChec_RBELowVOCPainSyst_AttaDocu10"),
    document.getElementById("SubmChec_RBELowVOCPainSyst_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBELowVOCInteFini_ItemScor10"),
    document.getElementById("SubmChec_RBELowVOCInteFini_AttaDocu10"),
    document.getElementById("SubmChec_RBELowVOCInteFini_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBENatuVentAndDayl_ItemScor10"),
    document.getElementById("SubmChec_RBENatuVentAndDayl_AttaDocu10"),
    document.getElementById("SubmChec_RBENatuVentAndDayl_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEDaylForDwelUnit_ItemScor10"),
    document.getElementById("SubmChec_RBEDaylForDwelUnit_AttaDocu10"),
    document.getElementById("SubmChec_RBEDaylForDwelUnit_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEDaylForCommArea_ItemScor10"),
    document.getElementById("SubmChec_RBEDaylForCommArea_AttaDocu10"),
    document.getElementById("SubmChec_RBEDaylForCommArea_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEBiopDesi_ItemScor10"),
    document.getElementById("SubmChec_RBEBiopDesi_AttaDocu10"),
    document.getElementById("SubmChec_RBEBiopDesi_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBESmarMeteForElec_ItemScor10"),
    document.getElementById("SubmChec_RBESmarMeteForElec_AttaDocu10"),
    document.getElementById("SubmChec_RBESmarMeteForElec_DocuSubmOrCorrChk10"),
    document.getElementById("SubmChec_RBEWebOrMobiAppl_ItemScor10"),
    document.getElementById("SubmChec_RBEWebOrMobiAppl_AttaDocu10"),
    document.getElementById("SubmChec_RBEWebOrMobiAppl_DocuSubmOrCorrChk10"),
    document.getElementById("Add1f"),
  ];
  let textfieldGroup = [
    document.getElementById("SubmChec_RBERTF_SubmOrCorr10"),
    document.getElementById("SubCheck_RBAirTighAndLeak_SubmOrCorr10"),
    document.getElementById("SubmChec_RBAirCondSystEffi_SubmOrCorr10"),
    document.getElementById("SubmChec_RBLightEffi_SubmOrCorr10"),
    document.getElementById("SubmChec_RBVertTranEffi_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEEnvCredOfProj_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEIntegApprToBldg_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEMainDesCons_SubmOrCorr10"),
    document.getElementById("SubmChec_RBECollBIM_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEGreeBIM_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEUserEnga_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEGreeProv_SubmOrCorr10"),
    document.getElementById("SubmChec_RBETreeCons_SubmOrCorr10"),
    document.getElementById("SubmChec_RBETropFacaPerf_SubmOrCorr10"),
    document.getElementById("SubmChec_RBENatuVentBLD_SubmOrCorr10"),
    document.getElementById("SubmChec_RBENatuVentDUD_SubmOrCorr10"),
    document.getElementById("SubmChec_RBECFDOrTCSR_SubmOrCorr10"),
    document.getElementById("SubmChec_RBENatuVentiForComm_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEEnhaAirCondSyst_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEEnerEffiProdAnd_SubmOrCorr10"),
    document.getElementById("SubmChec_RBESolaEnerFeasStud_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEAdopOfReneEner_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEWateEffiFittA_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEWateEffiFittB_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEWateEffiAutoIrri_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEWateUsagSubMete_SubmOrCorr10"),
    document.getElementById("SubmChec_RBENewWateSupp_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEOnSiteRecyWate_SubmOrCorr10"),
    document.getElementById("SubmChec_RBERainHarv_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEConsAndResoReco_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEResoEffiBldgDesi_SubmOrCorr10"),
    document.getElementById("SubmChec_RBELowCarbConc_SubmOrCorr10"),
    document.getElementById("SubmChec_RBESustBldgSyst_SubmOrCorr10"),
    document.getElementById("SubmChec_RBESustProd_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEEnviConsManaPlan_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEFacForCollAnd_SubmOrCorr10"),
    document.getElementById("SubmCheck_RBEFacOrSystFor_SubmOrCorr10"),
    document.getElementById("SubmChec_RBELowVOCPainSyst_SubmOrCorr10"),
    document.getElementById("SubmChec_RBELowVOCInteFini_SubmOrCorr10"),
    document.getElementById("SubmChec_RBENatuVentAndDayl_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEDaylForDwelUnit_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEDaylForCommArea_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEBiopDesi_SubmOrCorr10"),
    document.getElementById("SubmChec_RBESmarMeteForElec_SubmOrCorr10"),
    document.getElementById("SubmChec_RBEWebOrMobiAppl_SubmOrCorr10"),
  ];

  let formField = document.querySelectorAll(".Ffields");
  let childCount = document.getElementById("RB2form").childElementCount;
  let otherCheckBox = document.querySelectorAll(
    "[prefix='SubmChec_RBEOthe_ItemScor']"
  );
  let otherCheckboxAttach = document.querySelectorAll(
    "[prefix='SubmChec_RBEOthe_AttaDocu']"
  );
  let otherTextArea = document.querySelectorAll("[prefix='SubmChec_RBEOthe']");
  let checkboxDate = document.querySelectorAll(
    "[prefix='SubmChec_RBEOthe_DocuSubmOrCorrChk']"
  );
  let otherDatefield = document.querySelectorAll(
    "[prefix='SubmChec_RBEOthe_SubmOrCorr']"
  );
  let delBtn = document.querySelectorAll(".deleteRB2");
  let main = document.getElementById("RB2table");

  if (condition == true) {
    for (member of checkboxGroup) {
      member.removeAttribute("disabled");
    }
    main.removeAttribute("hidden");
  } else {
    main.setAttribute("hidden", "");
    if (childCount > 1) {
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
    for (let i = 0; i < otherCheckBox.length; i++) {
      otherDatefield[i].setAttribute("disabled", "");
      otherCheckboxAttach[i].checked = false;
      otherCheckBox[i].checked = false;
      checkboxDate[i].checked = false;
      otherTextArea[i].value = "";
      otherDatefield[i].value = "";
      otherDatefield[i].removeAttribute("mandatory");
      delBtn[i].setAttribute("disabled", "");
    }
    for (member of checkboxGroup) {
      member.setAttribute("disabled", "");
      member.checked = false;
    }
    for (field of textfieldGroup) {
      field.setAttribute("disabled", "");
      field.removeAttribute("mandatory");
      field.value = "";
    }
  }
}

function dateField_change(element, dateField) {
  if (element.checked) {
    document.getElementById(dateField.id).removeAttribute("disabled");
    document.getElementById(dateField.id).setAttribute("mandatory", "");
  } else {
    document.getElementById(dateField.id).removeAttribute("mandatory");
    document.getElementById(dateField.id).setAttribute("disabled", "");
    document.getElementById(dateField.id).value = "";
  }
}

function otherCheckBox_change(element) {
  let textArea = document
    .getElementById(element.id)
    .parentNode.parentNode.parentNode.parentNode.querySelector("cn2-textarea");

  if (element.checked) {
    textArea.removeAttribute("disabled");
    textArea.setAttribute("mandatory", "");
  } else {
    textArea.removeAttribute("mandatory");
    textArea.setAttribute("disabled", "");
    textArea.value = "";
  }
}

function otherDateField_change(element, fieldPrefix) {
  let id = getId(element.id);
  let dateField = document.getElementById(fieldPrefix + id + "0");
  if (element.checked) {
    dateField.removeAttribute("disabled");
    dateField.setAttribute("mandatory", "");
  } else {
    dateField.removeAttribute("mandatory");
    dateField.setAttribute("disabled", "");
    dateField.value = "";
  }
}

function disableDelete(containerName, deleteid) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteid).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(deleteid);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function checkTemplateValid(el) {
  let refId = el.id;
  console.log(refId);
  switch (refId) {
    case refId:
      if (el.value != "      ") {
        if (/\s/.test(el.value)) {
          document.getElementById(el.id).setAttribute("data-invalid", "");
          document
            .getElementById(el.id)
            .setAttribute(
              "data-invalid-message",
              "This field is limited to 6 characters and The Lot No. format is ######@ where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
            );
        } else {
          document.getElementById(el.id).removeAttribute("data-invalid");
        }
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
      }
      break;
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

function resetUEN(uenField) {
  let uen = document.getElementById(uenField);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function promptErrorMoreThan100(element) {
  let field = document.getElementById(element.id);

  if (field.value) {
    if (field.value > 100) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Green Mark Score can't be more than 100."
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

function disableNextAddedFields(containerName, textbox) {
  let childCount = document.getElementById(containerName).childElementCount;
  textbox = document.querySelectorAll(`[prefix='${textbox}']`);
  if (childCount > 1) {
    textbox[textbox.length - 1].setAttribute("disabled", "");
    textbox[textbox.length - 1].removeAttribute("mandatory");
  }
}

function Subm_Code_change(el) {
  let rad = document.querySelectorAll(`[name="Subm_Code"]`);
  let aste = document.querySelectorAll(`[submission-code]`);

  //Atleast one Radio
  if (el.checked) {
    for (let target of rad) {
      target.removeAttribute("mandatory");
      target.removeAttribute("checked");
    }
    for (let target of aste) {
      target.innerHTML = "";
    }
  }

  //Enable Fields Project Details
  EnabFieldProjDetails();
}

//Enable Fields Project Details
function EnabFieldProjDetails() {
  let rad = document.getElementById("Subm_Code1st");
  let rad2 = document.getElementById("Subm_Code4th");
  let projType = document.getElementById("Project_ProjType10");
  let firstNon = document.getElementById(
    "SubmChec_UndeTheBuilCont_NonResGMScor10"
  );
  let firstRes = document.getElementById(
    "SubmChec_UndeTheBuilCont_ResGMScor10"
  );
  let fourthNonComBr = document.getElementById(
    "SubmChec_UndeTheBuilCont_CompNonResGMScor10"
  );
  let fourthNonComEo = document.getElementById(
    "SubmChec_UndeTheBuilCont_CompNonResGMScor20"
  );

  let fourthResComBr = document.getElementById(
    "SubmChec_UndeTheBuilCont_CompResGMScor10"
  );
  let fourthResComEo = document.getElementById(
    "SubmChec_UndeTheBuilCont_CompResGMScor20"
  );

  let tempArray = Array();

  //Residential / Non-Residential
  if (rad.checked) {
    //1st
    if (
      projType.value == "Residential" ||
      projType.value == "Residential (Lift Upgrading)" ||
      projType.value == "Mixed-Use (Residential)"
    ) {
      firstNon.value = "";
    } else {
      firstNon.value = "";
      firstNon.removeAttribute("disabled");
    }
    if (
      projType.value.includes("Non") &&
      projType.value != "Mixed-Use (Residential & Non-Residential)"
    ) {
      firstRes.value = "";
    } else {
      firstRes.value = "";
      firstRes.removeAttribute("disabled");
    }

    //4th
    let fourthEd = tempArray.concat(
      fourthNonComBr,
      fourthNonComEo,
      fourthResComBr,
      fourthResComEo
    );
    for (let target of fourthEd) {
      target.setAttribute("disabled", "");
      target.value = "";
      target.removeAttribute("data-invalid");
      target.removeAttribute("data-invalid-message");
    }
  } else if (rad2.checked) {
    //4th

    if (
      projType.value == "Residential" ||
      projType.value == "Mixed-Use (Residential)"
    ) {
      let nonResi = tempArray.concat(fourthNonComBr, fourthNonComEo);

      for (let nonCompResi of nonResi) {
        nonCompResi.setAttribute("disabled", "");
        nonCompResi.value = "NA";
      }

      fourthResComBr.removeAttribute("disabled");
      fourthResComBr.value = "";

      fourthResComEo.removeAttribute("disabled");
      fourthResComEo.value = "";
    } else if (projType.value == "Residential (Lift Upgrading)") {
      let nonResi = tempArray.concat(
        fourthNonComBr,
        fourthNonComEo,
        fourthResComEo
      );

      for (let nonCompResi of nonResi) {
        nonCompResi.setAttribute("disabled", "");
        nonCompResi.value = "NA";
      }

      fourthResComBr.removeAttribute("disabled");
      fourthResComBr.value = "";
    } else if (
      projType.value == "Non-Residential" ||
      projType.value == "Mixed-Use (Non-Residential)"
    ) {
      console.log(projType.value);
      let resiComply = tempArray.concat(fourthResComBr, fourthResComEo);
      for (let target of resiComply) {
        target.setAttribute("disabled", "");
        target.value = "NA";
      }
      fourthNonComBr.removeAttribute("disabled");
      fourthNonComBr.value = "";

      fourthNonComEo.removeAttribute("disabled");
      fourthNonComEo.value = "";
    } else if (
      projType.value ==
      "Non-Residential (Link Ways,Underground Passes,Open Sheds,Substations and the like)"
    ) {
      let resiComply = tempArray.concat(
        fourthResComBr,
        fourthResComEo,
        fourthNonComEo
      );
      for (let target of resiComply) {
        target.setAttribute("disabled", "");
        target.value = "NA";
      }
      fourthNonComBr.removeAttribute("disabled");
      fourthNonComBr.value = "";
    } else if (projType.value == "Mixed-Use (Residential & Non-Residential)") {
      let nonresiComply = tempArray.concat(
        fourthNonComBr,
        fourthNonComEo,
        fourthResComBr,
        fourthResComEo
      );
      for (let target of nonresiComply) {
        target.value = "";
        target.removeAttribute("disabled");
      }
    }

    //1st
    firstRes.setAttribute("disabled", "");
    firstNon.setAttribute("disabled", "");
    firstRes.value = "";
    firstNon.value = "";
    firstNon.removeAttribute("data-invalid");
    firstNon.removeAttribute("data-invalid-message");
    firstRes.removeAttribute("data-invalid");
    firstRes.removeAttribute("data-invalid-message");
  }
}

function Project_LotNumb10_change(el) {
  if (el.value != "      ") {
    if (/\s/.test(el.value)) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "Lot No. format is '#####@' where # is a valid numeric no. and @ is a valid character"
        );
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
    }
  } else {
    document.getElementById(el.id).removeAttribute("data-invalid");
  }
}

// override common functions
function saveFormDataToJson() {
  for (let [id, value] of Object.entries(jsonData)) {
    let targetElement = document.getElementById(id);
    if (targetElement) {
      switch (targetElement.tagName) {
        case "CN2-CHECKBOX":
          jsonData[id] = targetElement.checked ? "on" : "off";
          break;
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

            if (targetElement.value == "") {
              jsonData[id] = "";
            }
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
