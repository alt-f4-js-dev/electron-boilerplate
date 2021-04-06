document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(
    "cn2-master-head"
  ).title = `JOINT APPLICATION FOR PERMIT TO CARRY OUT STRUCTURAL WORKS <br> [Section 6 of The Building Control Act]`;

  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  formNameVersion("form__name", "form__version");
});

function isSubmittedForm() {
  return ipcRenderer.sendSync("is-submitted-form");
}

function formNameVersion(name, version) {
  //get Data
  let getFormName = jsonData["FormName10"] || jsonData[name];
  let getFormVersion = jsonData["XFDVersion"] || jsonData[version];
  //set Data
  jsonData["FormName10"] = getFormName;
  jsonData["XFDVersion"] = getFormVersion;
}

function toggleDecl(el) {
  let particularsBuilder = document.getElementById("DeclByBuil_AppoFoll10");
  let name1 = document.getElementById("Member_Member_Name_PE80");
  let name2 = document.getElementById("Member_Member_Name_PE90");
  let regNo1 = document.getElementById("MemberRole_Professional_No_PE80");
  let regNo2 = document.getElementById("MemberRole_Professional_No_PE90");

  let name1Target = document.getElementById("Member_Member_Name_PE10");
  let name2Target = document.getElementById("Member_Member_Name_PE20");
  let regNo1Target = document.getElementById("MemberRole_Professional_No_PE10");
  let regNo2Target = document.getElementById("MemberRole_Professional_No_PE20");

  let gfaField = document.getElementById("SubmChec_UndeTheBuilCont_GFA10");
  let datefield = document.getElementById(
    "SubmChec_UndeTheBuilCont_PlanPerm10"
  );
  var d = new Date(datefield.value);
  let compareDate = new Date("2011-07-15");
  let decemberDate = new Date("2019-12-14");
  switch (el.id) {
    case "PartOfAppl_AsDescHereIn_DemoWork10":
      if (el.checked) {
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType10_10")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType30")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType50")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType20")
          .removeAttribute("disabled");
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType40")
          .removeAttribute("disabled");

        document
          .getElementById("DetaOfDemoWork_Desc10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DetaOfDemoWork_Desc10")
          .removeAttribute("disabled");
        document
          .getElementById("DetaOfDemoWork_NoOfBlksBldgs10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DetaOfDemoWork_NoOfBlksBldgs10")
          .removeAttribute("disabled");
        document
          .getElementById("DetaOfDemoWork_NoOfStroPerBlk10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DetaOfDemoWork_NoOfStroPerBlk10")
          .removeAttribute("disabled");
        document
          .getElementById("DetaOfDemoWork_TotaFlooAreaTo20")
          .setAttribute("mandatory", "");
        document
          .getElementById("DetaOfDemoWork_TotaFlooAreaTo20")
          .removeAttribute("disabled");
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .removeAttribute("disabled");
        document
          .getElementById("DemoWastQuan_QuanOfBricWast10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DemoWastQuan_QuanOfBricWast10")
          .removeAttribute("disabled");
        document
          .getElementById("DemoWastQuan_QuanOfOtheWast10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DemoWastQuan_QuanOfOtheWast10")
          .removeAttribute("disabled");

        document
          .getElementById("DemoWastQuan_UsagOfDemoWast10")
          .removeAttribute("disabled");
        document.getElementById("NameOfTheGWC10").setAttribute("mandatory", "");
        document.getElementById("NameOfTheGWC10").removeAttribute("disabled");
        document.getElementById("GWCLiceNumb10").setAttribute("mandatory", "");
        document.getElementById("GWCLiceNumb10").removeAttribute("disabled");
      } else {
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType10_10")
          .setAttribute("disabled", "");
        document.getElementById(
          "PartOfAppl_AsDescHereIn_BuilType10_10"
        ).checked = false;
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType30")
          .setAttribute("disabled", "");
        document.getElementById(
          "PartOfAppl_AsDescHereIn_BuilType30"
        ).checked = false;
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType50")
          .setAttribute("disabled", "");
        document.getElementById(
          "PartOfAppl_AsDescHereIn_BuilType50"
        ).checked = false;
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType20")
          .setAttribute("disabled", "");
        document.getElementById(
          "PartOfAppl_AsDescHereIn_BuilType20"
        ).checked = false;
        document
          .getElementById("PartOfAppl_AsDescHereIn_BuilType40")
          .setAttribute("disabled", "");
        document.getElementById(
          "PartOfAppl_AsDescHereIn_BuilType40"
        ).checked = false;

        document
          .getElementById("DetaOfDemoWork_Desc10")
          .removeAttribute("mandatory");
        document.getElementById("DetaOfDemoWork_Desc10").value = "";
        document
          .getElementById("DetaOfDemoWork_Desc10")
          .setAttribute("disabled", "");
        document
          .getElementById("DetaOfDemoWork_NoOfBlksBldgs10")
          .removeAttribute("mandatory");
        document.getElementById("DetaOfDemoWork_NoOfBlksBldgs10").value = "";
        document
          .getElementById("DetaOfDemoWork_NoOfBlksBldgs10")
          .setAttribute("disabled", "");
        document
          .getElementById("DetaOfDemoWork_NoOfStroPerBlk10")
          .removeAttribute("mandatory");
        document.getElementById("DetaOfDemoWork_NoOfStroPerBlk10").value = "";
        document
          .getElementById("DetaOfDemoWork_NoOfStroPerBlk10")
          .setAttribute("disabled", "");
        document
          .getElementById("DetaOfDemoWork_TotaFlooAreaTo20")
          .removeAttribute("mandatory");
        document.getElementById("DetaOfDemoWork_TotaFlooAreaTo20").value = "";
        document
          .getElementById("DetaOfDemoWork_TotaFlooAreaTo20")
          .setAttribute("disabled", "");
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .removeAttribute("mandatory");
        document.getElementById("DemoWastQuan_QuanOfConcWast10").value = "";
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .setAttribute("disabled", "");
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .removeAttribute("mandatory");
        document.getElementById("DemoWastQuan_QuanOfConcWast10").value = "";
        document
          .getElementById("DemoWastQuan_QuanOfConcWast10")
          .setAttribute("disabled", "");
        document
          .getElementById("DemoWastQuan_QuanOfBricWast10")
          .removeAttribute("mandatory");
        document.getElementById("DemoWastQuan_QuanOfBricWast10").value = "";
        document
          .getElementById("DemoWastQuan_QuanOfBricWast10")
          .setAttribute("disabled", "");
        document
          .getElementById("DemoWastQuan_QuanOfOtheWast10")
          .removeAttribute("mandatory");
        document.getElementById("DemoWastQuan_QuanOfOtheWast10").value = "";
        document
          .getElementById("DemoWastQuan_QuanOfOtheWast10")
          .setAttribute("disabled", "");

        document
          .getElementById("DemoWastQuan_UsagOfDemoWast10")
          .setAttribute("disabled", "");
        document.getElementById("DemoWastQuan_UsagOfDemoWast10").value = "";
        document.getElementById("NameOfTheGWC10").removeAttribute("mandatory");
        document.getElementById("NameOfTheGWC10").value = "";
        document.getElementById("NameOfTheGWC10").setAttribute("disabled", "");
        document.getElementById("GWCLiceNumb10").removeAttribute("mandatory");
        document.getElementById("GWCLiceNumb10").value = "";
        document.getElementById("GWCLiceNumb10").setAttribute("disabled", "");
        document.getElementById("DemoWastQuan_TotaDemoWastColl10").value = "";
      }
      break;
    case "Project_AsbestosSurveyBeen20":
      if (el.value === "Yes") {
        document
          .getElementById("Project_PartOfCompPers_Name10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_PartOfCompPers_Name10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_PartOfCompPers_EmaiAddr10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_PartOfCompPers_EmaiAddr10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_PartOfCompPers_ContNo10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_PartOfCompPers_ContNo10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("Project_PartOfCompPers_Name10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_PartOfCompPers_Name10")
          .removeAttribute("mandatory");
        document.getElementById("Project_PartOfCompPers_Name10").value = "";
        document
          .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
          .removeAttribute("mandatory");
        document.getElementById(
          "Project_PartOfCompPers_NameOfEmplComp10"
        ).value = "";
        document
          .getElementById("Project_PartOfCompPers_EmaiAddr10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_PartOfCompPers_EmaiAddr10")
          .removeAttribute("mandatory");
        document.getElementById("Project_PartOfCompPers_EmaiAddr10").value = "";
        document
          .getElementById("Project_PartOfCompPers_ContNo10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_PartOfCompPers_ContNo10")
          .removeAttribute("mandatory");
        document.getElementById("Project_PartOfCompPers_ContNo10").value = "";
      }
      break;
    case "Project_AsbeRemoWorkTo20":
      if (el.value === "Yes") {
        document
          .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
          .removeAttribute("disabled");
        document
          .getElementById("Project_InfoOnAsbeRemo_ContNo10")
          .setAttribute("mandatory", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_ContNo10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
          .removeAttribute("mandatory");
        document.getElementById(
          "Project_InfoOnAsbeRemo_NameOfApprAsbe10"
        ).value = "";
        document
          .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
          .removeAttribute("mandatory");
        document.getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10").value =
          "";
        document
          .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
          .removeAttribute("mandatory");
        document.getElementById("Project_InfoOnAsbeRemo_EmaiAddr10").value = "";
        document
          .getElementById("Project_InfoOnAsbeRemo_ContNo10")
          .setAttribute("disabled", "");
        document
          .getElementById("Project_InfoOnAsbeRemo_ContNo10")
          .removeAttribute("mandatory");
        document.getElementById("Project_InfoOnAsbeRemo_ContNo10").value = "";
      }
      break;
    case "RADIO1":
      if (el.checked) {
        particularsBuilder.removeAttribute("mandatory");
        particularsBuilder.setAttribute("disabled", "");
        particularsBuilder.value = "";
        name1.value = "";
        regNo1.value = "";
        document
          .getElementById("Member_Member_Name_OWNER20")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER20")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_BLDR20")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR20")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR20").value = "";
        document.getElementById("Member_Firm_Name_BLDR20").value = "";

        document.getElementById("Member_Member_Name_PE80").value = "";
        document.getElementById("MemberRole_Professional_No_PE80").value = "";
        // document.getElementById("DeclByThePers_Er10").value = "";
        // document.getElementById("DeclByThePers_OfPE10").value = "";
      }
      break;
    case "RADIO2":
      if (el.checked) {
        particularsBuilder.setAttribute("mandatory", "");
        particularsBuilder.removeAttribute("disabled", "");
        if (name1Target.valueLabel != "Please Select") {
          name1.value = name1Target.valueLabel;
          regNo1.value = regNo1Target.value;
        }

        document
          .getElementById("Member_Member_Name_BLDR20")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_BLDR20")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_OWNER20")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER20")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER20").value = "";
        document.getElementById("Member_Firm_Name_OWNER20").value = "";

        if (document.getElementById("Member_Member_Name_PE10").value !== "") {
          document.getElementById(
            "DeclByThePers_Er10"
          ).value = document.getElementById("Member_Member_Name_PE10").data[
            document.getElementById("Member_Member_Name_PE10").value
          ].Member_Member_Name_PE10;
          document.getElementById(
            "DeclByThePers_OfPE10"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE10"
          ).value;
          // document.getElementById(
          //   "Member_Member_Name_PE80"
          // ).value = document.getElementById("Member_Member_Name_PE10").data[
          //   document.getElementById("Member_Member_Name_PE10").value
          // ].Member_Member_Name_PE10;
          document.getElementById(
            "MemberRole_Professional_No_PE80"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE10"
          ).value;
        }
      }
      break;
    case "DeclByThePers10":
      if (el.checked) {
        name1.value = "";
        regNo1.value = "";
        document.getElementById("RADIO1").removeAttribute("disabled");
        document.getElementById("RADIO2").removeAttribute("disabled");
        document.getElementById("RADIO1").checked = true;
        document
          .getElementById("Member_Member_Name_OWNER20")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER20")
          .removeAttribute("disabled");
        document
          .getElementById("Member_Member_Name_PE10")
          .setAttribute("mandatory", "");

        if (document.getElementById("Member_Member_Name_PE10").value !== "") {
          document.getElementById(
            "DeclByThePers_Er10"
          ).value = document.getElementById("Member_Member_Name_PE10").data[
            document.getElementById("Member_Member_Name_PE10").value
          ].Member_Member_Name_PE10;
          document.getElementById(
            "DeclByThePers_OfPE10"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE10"
          ).value;
          // document.getElementById(
          //   "Member_Member_Name_PE80"
          // ).value = document.getElementById("Member_Member_Name_PE10").data[
          //   document.getElementById("Member_Member_Name_PE10").value
          // ].Member_Member_Name_PE10;
          document.getElementById(
            "MemberRole_Professional_No_PE80"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE10"
          ).value;
        }
      } else {
        particularsBuilder.setAttribute("disabled", "");
        particularsBuilder.removeAttribute("mandatory");
        particularsBuilder.value = "";
        document.getElementById("RADIO1").setAttribute("disabled", "");
        document.getElementById("RADIO2").setAttribute("disabled", "");
        document.getElementById("RADIO1").checked = false;
        document.getElementById("RADIO2").checked = false;
        document
          .getElementById("Member_Member_Name_PE10")
          .removeAttribute("mandatory");

        document
          .getElementById("Member_Member_Name_BLDR20")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR20")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR20").value = "";
        document
          .getElementById("Member_Firm_Name_BLDR20")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_BLDR20").value = "";
        document
          .getElementById("Member_Member_Name_OWNER20")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER20")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER20").value = "";
        document
          .getElementById("Member_Firm_Name_OWNER20")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_OWNER20").value = "";

        document.getElementById("DeclByThePers_Er10").value = "";
        document.getElementById("DeclByThePers_OfPE10").value = "";
        document.getElementById("Member_Member_Name_PE80").value = "";
        document.getElementById("MemberRole_Professional_No_PE80").value = "";
      }
      break;
    case "RADIO3":
      if (el.checked) {
        name2.value = "";
        regNo2.value = "";

        document
          .getElementById("Member_Member_Name_OWNER30")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER30")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_BLDR30")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR30")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR30").value = "";
        document.getElementById("Member_Firm_Name_BLDR30").value = "";
        document
          .getElementById("DeclByBuil_AppoFoll10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_AppoFoll10")
          .removeAttribute("mandatory");

        // document.getElementById("DeclByThePers_Er20").value = "";
        // document.getElementById("DeclByThePers_OfPE30").value = "";
        document.getElementById("Member_Member_Name_PE90").value = "";
        document.getElementById("MemberRole_Professional_No_PE90").value = "";
      }
      break;
    case "RADIO4":
      if (el.checked) {
        if (name2Target.valueLabel != "Please Select") {
          name2.value = name2Target.valueLabel;
          regNo2.value = regNo2.value;
        }

        document
          .getElementById("Member_Member_Name_BLDR30")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_BLDR30")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_OWNER30")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER30")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER30").value = "";
        document.getElementById("Member_Firm_Name_OWNER30").value = "";

        document
          .getElementById("DeclByBuil_AppoFoll10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByBuil_AppoFoll10")
          .removeAttribute("disabled");

        if (document.getElementById("Member_Member_Name_PE20").value !== "") {
          document.getElementById(
            "DeclByThePers_Er20"
          ).value = document.getElementById("Member_Member_Name_PE20").data[
            document.getElementById("Member_Member_Name_PE20").value
          ].Member_Member_Name_PE20;
          document.getElementById(
            "DeclByThePers_OfPE30"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE20"
          ).value;
          document.getElementById(
            "Member_Member_Name_PE90"
          ).value = document.getElementById("Member_Member_Name_PE20").data[
            document.getElementById("Member_Member_Name_PE20").value
          ].Member_Member_Name_PE20;
          document.getElementById(
            "MemberRole_Professional_No_PE90"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE20"
          ).value;
        }
      }
      break;
    case "DeclByThePers20":
      if (el.checked) {
        name2.value = "";
        regNo2.value = "";

        document.getElementById("RADIO3").removeAttribute("disabled");
        document.getElementById("RADIO4").removeAttribute("disabled");
        document.getElementById("RADIO3").checked = true;
        document
          .getElementById("Member_Member_Name_OWNER30")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER30")
          .removeAttribute("disabled");
        document
          .getElementById("Member_Member_Name_PE20")
          .setAttribute("mandatory", "");

        if (document.getElementById("Member_Member_Name_PE20").value !== "") {
          document.getElementById(
            "DeclByThePers_Er20"
          ).value = document.getElementById("Member_Member_Name_PE20").data[
            document.getElementById("Member_Member_Name_PE20").value
          ].Member_Member_Name_PE20;
          document.getElementById(
            "DeclByThePers_OfPE30"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE20"
          ).value;
          document.getElementById(
            "Member_Member_Name_PE90"
          ).value = document.getElementById("Member_Member_Name_PE20").data[
            document.getElementById("Member_Member_Name_PE20").value
          ].Member_Member_Name_PE20;
          document.getElementById(
            "MemberRole_Professional_No_PE90"
          ).value = document.getElementById(
            "MemberRole_Professional_No_PE20"
          ).value;
        }
      } else {
        document.getElementById("RADIO3").setAttribute("disabled", "");
        document.getElementById("RADIO4").setAttribute("disabled", "");
        document.getElementById("RADIO3").checked = false;
        document.getElementById("RADIO4").checked = false;
        document
          .getElementById("Member_Member_Name_PE20")
          .removeAttribute("mandatory");

        document
          .getElementById("Member_Member_Name_BLDR30")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR30")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR30").value = "";
        document
          .getElementById("Member_Firm_Name_BLDR30")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_BLDR30").value = "";
        document
          .getElementById("Member_Member_Name_OWNER30")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER30")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER30").value = "";
        document
          .getElementById("Member_Firm_Name_OWNER30")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_OWNER30").value = "";

        document.getElementById("DeclByThePers_Er20").value = "";
        document.getElementById("DeclByThePers_OfPE30").value = "";
        document
          .getElementById("DeclByBuil_AppoFoll10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_AppoFoll10")
          .removeAttribute("mandatory");

        document.getElementById("Member_Member_Name_PE90").value = "";
        document.getElementById("MemberRole_Professional_No_PE90").value = "";
      }
      break;
    case "DeclByThePers_IconfThatI10":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_BLDR40")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_BLDR40")
          .removeAttribute("disabled");
        document
          .getElementById("Members_UEN_BLDR40")
          .setAttribute("mandatory", "");
        document
          .getElementById("Members_UEN_BLDR40")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("Member_Member_Name_BLDR40")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR40")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR40").value = "";
        document
          .getElementById("Members_UEN_BLDR40")
          .setAttribute("disabled", "");
        document
          .getElementById("Members_UEN_BLDR40")
          .removeAttribute("mandatory");
        document
          .getElementById("Members_UEN_BLDR40")
          .removeAttribute("data-invalid");
        document
          .getElementById("Members_UEN_BLDR40")
          .removeAttribute("data-invalid-message");
        document.getElementById("Members_UEN_BLDR40").value = "";
        document.getElementById("Member_Firm_Name_BLDR40").value = "";
      }
      break;
    case "Member_Member_Name_PE10":
      if (
        document.getElementById("DeclByThePers10").checked &&
        document.getElementById("RADIO2").checked
      ) {
        let root = document.getElementById("Member_Member_Name_PE10");
        // document.getElementById("DeclByThePers_Er10").value = root.data[root.value].Member_Member_Name_PE10;
        document.getElementById(
          "DeclByThePers_OfPE10"
        ).value = document.getElementById(
          "MemberRole_Professional_No_PE10"
        ).value;
        // document.getElementById("Member_Member_Name_PE80").value =
        //   root.data[root.value].Member_Member_Name_PE10;
        document.getElementById(
          "MemberRole_Professional_No_PE80"
        ).value = document.getElementById(
          "MemberRole_Professional_No_PE10"
        ).value;
      }
      break;
    case "Member_Member_Name_PE20":
      if (
        document.getElementById("DeclByThePers20").checked &&
        document.getElementById("RADIO4").checked
      ) {
        let root = document.getElementById("Member_Member_Name_PE20");
        document.getElementById("DeclByThePers_Er20").value =
          root.data[root.value].Member_Member_Name_PE20;
        document.getElementById(
          "DeclByThePers_OfPE30"
        ).value = document.getElementById(
          "MemberRole_Professional_No_PE20"
        ).value;
        document.getElementById("Member_Member_Name_PE90").value =
          root.data[root.value].Member_Member_Name_PE20;
        document.getElementById(
          "MemberRole_Professional_No_PE90"
        ).value = document.getElementById(
          "MemberRole_Professional_No_PE20"
        ).value;
      }
      break;
    case "RADIO1_1":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_OWNER50")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER50")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_BLDR50")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR50")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR50").value = "";
        document.getElementById("Member_Firm_Name_BLDR50").value = "";
      }
      break;
    case "RADIO2_1":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_BLDR50")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_BLDR50")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_OWNER50")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER50")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER50").value = "";
        document.getElementById("Member_Firm_Name_OWNER50").value = "";
      }
      break;
    // case "DeclByQualPers_IHaveBeenAppt10":
    //   if (el.checked) {
    //     document.getElementById("RADIO1_1").removeAttribute("disabled");
    //     document.getElementById("RADIO2_1").removeAttribute("disabled");
    //     document.getElementById("RADIO1_1").checked = true;
    //     document
    //       .getElementById("Member_Member_Name_OWNER50")
    //       .setAttribute("mandatory", "");
    //     document
    //       .getElementById("Member_Member_Name_OWNER50")
    //       .removeAttribute("disabled");
    //   } else {
    //     document.getElementById("RADIO1_1").setAttribute("disabled", "");
    //     document.getElementById("RADIO2_1").setAttribute("disabled", "");
    //     document.getElementById("RADIO1_1").checked = false;
    //     document.getElementById("RADIO2_1").checked = false;

    //     document
    //       .getElementById("Member_Member_Name_BLDR50")
    //       .setAttribute("disabled", "");
    //     document
    //       .getElementById("Member_Member_Name_BLDR50")
    //       .removeAttribute("mandatory");
    //     document.getElementById("Member_Member_Name_BLDR50").value = "";
    //     document
    //       .getElementById("Member_Firm_Name_BLDR50")
    //       .setAttribute("disabled", "");
    //     document.getElementById("Member_Firm_Name_BLDR50").value = "";
    //     document
    //       .getElementById("Member_Member_Name_OWNER50")
    //       .setAttribute("disabled", "");
    //     document
    //       .getElementById("Member_Member_Name_OWNER50")
    //       .removeAttribute("mandatory");
    //     document.getElementById("Member_Member_Name_OWNER50").value = "";
    //     document
    //       .getElementById("Member_Firm_Name_OWNER50")
    //       .setAttribute("disabled", "");
    //     document.getElementById("Member_Firm_Name_OWNER50").value = "";
    //   }
    //   break;
    case "DeclByQualPers_IHaveAppo10":
    case "DeclByQualPers_ThePartOfThe10":
      if (el.checked) {
        document
          .getElementById("DeclByTheQual_IHaveApp10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByTheQual_IHaveApp10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByTheQual_IHaveApp30")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByTheQual_IHaveApp30")
          .removeAttribute("disabled");

        document
          .getElementById("DeclByTheQual_ImmeSupeOfCrit10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByTheQual_ImmeSupeOfCrit20")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("DeclByTheQual_IHaveApp10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByTheQual_IHaveApp10")
          .removeAttribute("mandatory");
        document.getElementById("DeclByTheQual_IHaveApp10").value = "";
        document
          .getElementById("DeclByTheQual_IHaveApp30")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByTheQual_IHaveApp30")
          .removeAttribute("mandatory");
        document.getElementById("DeclByTheQual_IHaveApp30").value = "";

        document
          .getElementById("DeclByTheQual_ImmeSupeOfCrit10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByTheQual_ImmeSupeOfCrit20")
          .setAttribute("disabled", "");
      }
      break;
    case "RADIO1_2":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_OWNER60")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER60")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_BLDR110")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR110")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR110").value = "";
        document.getElementById("Member_Firm_Name_BLDR110").value = "";
      }
      break;
    case "RADIO2_2":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_BLDR110")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_BLDR110")
          .removeAttribute("disabled");

        document
          .getElementById("Member_Member_Name_OWNER60")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER60")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER60").value = "";
        document.getElementById("Member_Firm_Name_OWNER60").value = "";
      }
      break;
    case "DeclByQualPers_IHaveBeenAppt10":
      if (el.checked) {
        document.getElementById("RADIO1_2").removeAttribute("disabled");
        document.getElementById("RADIO2_2").removeAttribute("disabled");
        document.getElementById("RADIO1_2").checked = true;
        document
          .getElementById("Member_Member_Name_OWNER60")
          .setAttribute("mandatory", "");
        document
          .getElementById("Member_Member_Name_OWNER60")
          .removeAttribute("disabled");
      } else {
        document.getElementById("RADIO1_2").setAttribute("disabled", "");
        document.getElementById("RADIO2_2").setAttribute("disabled", "");
        document.getElementById("RADIO1_2").checked = false;
        document.getElementById("RADIO2_2").checked = false;

        document
          .getElementById("Member_Member_Name_BLDR110")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_BLDR110")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_BLDR110").value = "";
        document
          .getElementById("Member_Firm_Name_BLDR110")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_BLDR110").value = "";
        document
          .getElementById("Member_Member_Name_OWNER60")
          .setAttribute("disabled", "");
        document
          .getElementById("Member_Member_Name_OWNER60")
          .removeAttribute("mandatory");
        document.getElementById("Member_Member_Name_OWNER60").value = "";
        document
          .getElementById("Member_Firm_Name_OWNER50")
          .setAttribute("disabled", "");
        document.getElementById("Member_Firm_Name_OWNER50").value = "";
      }
      break;
    case "DeclBySiteSupe_I10":
      if (el.value === "I") {
        document.getElementById("DeclBySiteSupe_ConfThat10").value = "I am";
      } else if (el.value === "We") {
        document.getElementById("DeclBySiteSupe_ConfThat10").value = "We are";
      }
      break;
    case "DeclBySiteSupe_ConfThat10":
      if (el.value === "I am") {
        document.getElementById("DeclBySiteSupe_I10").value = "I";
      } else if (el.value === "We are") {
        document.getElementById("DeclBySiteSupe_I10").value = "We";
      }
      break;
    case "PartOfAppl_AsDescHereIn_StruWork10":
      if (el.checked) {
        document
          .getElementById("SubmChec_UndeTheBuilCont_GFA10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_GFA10")
          .removeAttribute("disabled");

        document
          .getElementById("SubmChec_UndeTheBuilContPlanPermAppl10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilContPlanPermNotAppl10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("SubmChec_UndeTheBuilCont_GFA10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_GFA10")
          .removeAttribute("mandatory");
        document.getElementById("SubmChec_UndeTheBuilCont_GFA10").value = "";

        document
          .getElementById("SubmChec_UndeTheBuilContPlanPermAppl10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilContPlanPermAppl10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
          .setAttribute("disabled", "");
        document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10").value =
          "";
        document
          .getElementById("SubmChec_UndeTheBuilContPlanPermNotAppl10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilContPlanPermNotAppl10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmType10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorIs10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_NotAppl10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_NotAppl_PopUp10"
        ).value = "";
      }
      break;
    case "SubmChec_UndeTheBuilContPlanPermAppl10":
      if (el.checked && handleGFA()) {
        document
          .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
          .removeAttribute("disabled");
      }
      break;
    case "SubmChec_UndeTheBuilContPlanPermNotAppl10":
      if (el.checked && handleGFA()) {
        document
          .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
          .removeAttribute("mandatory");
        document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10").value =
          "";
      }
      break;
    case "SubmChec_UndeTheBuilCont_Appl10":
      if (parseFloat(gfaField.value) < 5000 || d <= compareDate.getTime()) {
        showMessage(
          "A project with GFA less than 5000 m2 or with the application for planning permission made on and before 15 Jul 2011 is not required to submit Constructability Score"
        );
        resetGFAFields();
        break;
      }
      if (el.checked) {
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmType10"
        ).value = "ES";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
          .removeAttribute("disabled");

        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10")
          .removeAttribute("disabled");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"
        ).checked = true;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
          .removeAttribute("mandatory");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_NotAppl_PopUp10"
        ).value = "";
      }
      break;
    case "SubmChec_UndeTheBuilCont_NotAppl10":
      if (
        parseFloat(gfaField.value) >= 5000 &&
        d >= compareDate.getTime() &&
        d <= decemberDate.getTime()
      ) {
        showMessage(
          "A project with GFA >= 5000 m2 and with the application for planning permission made on and after 15 jul 2011 and on or before 14 December 2019 is required to submit Constructability Score"
        );
        document.getElementById(
          "SubmChec_UndeTheBuilCont_NotAppl10"
        ).checked = false;
        resetGFAFields();
        break;
      }
      if (el.checked) {
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
          .removeAttribute("disabled");

        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmType10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .removeAttribute("mandatory");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .removeAttribute("mandatory");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .removeAttribute("mandatory");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorIs10"
        ).value = "";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
          .setAttribute("disabled", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
          .removeAttribute("mandatory");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10"
        ).value = "";

        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10"
        ).checked = false;
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10")
          .setAttribute("disabled", "");
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10"
        ).checked = false;
      }
      break;
    case "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10":
      if (el.checked) {
        document.getElementById(
          "SubmChec_UndeTheBuilCont_Appl_SubmType10"
        ).value = "ES";
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
          .removeAttribute("disabled");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .setAttribute("mandatory", "");
        document
          .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
          .removeAttribute("disabled");
      }
      break;
    case "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10":
    case "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10":
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
        .setAttribute("disabled", "");
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
        .removeAttribute("mandatory");
      document.getElementById(
        "SubmChec_UndeTheBuilCont_Appl_SubmType10"
      ).value = "";
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
        .setAttribute("disabled", "");
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
        .removeAttribute("mandatory");
      document.getElementById(
        "SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10"
      ).value = "";
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
        .setAttribute("disabled", "");
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
        .removeAttribute("mandatory");
      document.getElementById(
        "SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10"
      ).value = "";
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
        .setAttribute("disabled", "");
      document
        .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
        .removeAttribute("mandatory");
      document.getElementById(
        "SubmChec_UndeTheBuilCont_Appl_BuilScorIs10"
      ).value = "";
      break;
    case "DeclByBuil_IWeConfThat10":
      if (document.getElementById("DeclByBuil_IWeConfThat10").value === "I") {
        document.getElementById("DeclByBuil_IWeConfThat20").value = "I am";
        document.getElementById("DeclByBuil_IWeConfThat40").value = "I";
      } else {
        if (document.getElementById("DeclByBuil_IWeConfThat10") === "We") {
          document.getElementById("DeclByBuil_IWeConfThat20").value = "we are";
          document.getElementById("DeclByBuil_IWeConfThat40").value = "we";
        }
      }
      break;
    case "DeclByBuil_IWeConfThat20":
      if (
        document.getElementById("DeclByBuil_IWeConfThat20").value === "I am"
      ) {
        document.getElementById("DeclByBuil_IWeConfThat10").value = "I";
        document.getElementById("DeclByBuil_IWeConfThat40").value = "I";
      } else {
        if (document.getElementById("DeclByBuil_IWeConfThat20") === "we are") {
          document.getElementById("DeclByBuil_IWeConfThat10").value = "We";
          document.getElementById("DeclByBuil_IWeConfThat40").value = "we";
        }
      }
      break;
    case "DeclByBuil_IWeConfThat40":
      if (document.getElementById("DeclByBuil_IWeConfThat40").value === "I") {
        document.getElementById("DeclByBuil_IWeConfThat20").value = "I am";
        document.getElementById("DeclByBuil_IWeConfThat10").value = "I";
      } else {
        if (document.getElementById("DeclByBuil_IWeConfThat40") === "we") {
          document.getElementById("DeclByBuil_IWeConfThat20").value = "we are";
          document.getElementById("DeclByBuil_IWeConfThat10").value = "We";
        }
      }
      break;
    case "chkDeclByBuil_Item3_AreSpecBuil10":
      if (el.checked) {
        document
          .getElementById("DeclByBuil_Item3_AreSpecBuil10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_AreSpecBuil10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByBuil_Item3_PiliWork10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_PostTensWork10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_GrouSuppStabWork10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_SiteInveWork10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_StruSteeWork10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_InstMoniForProj10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_PreCastConcWork10")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById("DeclByBuil_Item3_AreSpecBuil10")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclByBuil_Item3_AreSpecBuil10")
          .setAttribute("disabled", "");
        document.getElementById("DeclByBuil_Item3_AreSpecBuil10").value = "";

        document
          .getElementById("DeclByBuil_Item3_PiliWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_PostTensWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_GrouSuppStabWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_SiteInveWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_StruSteeWork10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_InstMoniForProj10")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_PreCastConcWork10")
          .setAttribute("disabled", "");

        document.getElementById("DeclByBuil_Item3_PiliWork10").checked = false;
        document.getElementById(
          "DeclByBuil_Item3_PostTensWork10"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_GrouSuppStabWork10"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_SiteInveWork10"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_StruSteeWork10"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_InstMoniForProj10"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_PreCastConcWork10"
        ).checked = false;
      }
      break;
    case "chkDeclByBuil_Item2_AppoSpecBuil10":
      if (el.checked) {
        // document.getElementById("DeclByBuil_Item3_AreSpecBuil20").removeAttribute("disabled");
        // document.getElementById("DeclByBuil_Item3_AreSpecBuil20").setAttribute("mandatory", "");
        document
          .getElementById("DeclByBuil_Item2_AppoSpecBuil10")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item2_AppoSpecBuil10")
          .setAttribute("mandatory", "");
        document
          .getElementById("DeclByBuil_Item3_PiliWork20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_PostTensWork20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_GrouSuppStabWork20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_SiteInveWork20")
          .removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_StruSteeWork20")
          .removeAttribute("disabled");
        // document.getElementById("DeclByBuil_Item3_InstMoniForProj20").removeAttribute("disabled");
        document
          .getElementById("DeclByBuil_Item3_PreCastConcWork20")
          .removeAttribute("disabled");
      } else {
        // document.getElementById("DeclByBuil_Item3_AreSpecBuil20").removeAttribute("mandatory");
        // document.getElementById("DeclByBuil_Item3_AreSpecBuil20").setAttribute("disabled", "");
        // document.getElementById("DeclByBuil_Item3_AreSpecBuil20").value = "";
        document
          .getElementById("DeclByBuil_Item2_AppoSpecBuil10")
          .removeAttribute("mandatory");
        document
          .getElementById("DeclByBuil_Item2_AppoSpecBuil10")
          .setAttribute("disabled", "");
        document.getElementById("DeclByBuil_Item2_AppoSpecBuil10").value = "";

        document
          .getElementById("DeclByBuil_Item3_PiliWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_PostTensWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_GrouSuppStabWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_SiteInveWork20")
          .setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_StruSteeWork20")
          .setAttribute("disabled", "");
        // document.getElementById("DeclByBuil_Item3_InstMoniForProj20").setAttribute("disabled", "");
        document
          .getElementById("DeclByBuil_Item3_PreCastConcWork20")
          .setAttribute("disabled", "");

        document.getElementById("DeclByBuil_Item3_PiliWork20").checked = false;
        document.getElementById(
          "DeclByBuil_Item3_PostTensWork20"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_GrouSuppStabWork20"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_SiteInveWork20"
        ).checked = false;
        document.getElementById(
          "DeclByBuil_Item3_StruSteeWork20"
        ).checked = false;
        // document.getElementById("DeclByBuil_Item3_InstMoniForProj20").checked = false;
        document.getElementById(
          "DeclByBuil_Item3_PreCastConcWork20"
        ).checked = false;
      }
      break;
    case "RADIO1_3":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_OWNER70")
          .removeAttribute("disabled");
        document
          .getElementById("Member_Member_Name_OWNER70")
          .setAttribute("mandatory", "");

        document
          .getElementById("Member_Member_Name_BLDR70")
          .removeAttribute("mandatory");
        document
          .getElementById("Member_Member_Name_BLDR70")
          .setAttribute("disabled", "");
        document.getElementById("Member_Member_Name_BLDR70").value = "";

        document.getElementById("Member_Firm_Name_BLDR70").value = "";
      }
      break;
    case "RADIO2_3":
      if (el.checked) {
        document
          .getElementById("Member_Member_Name_BLDR70")
          .removeAttribute("disabled");
        document
          .getElementById("Member_Member_Name_BLDR70")
          .setAttribute("mandatory", "");

        document
          .getElementById("Member_Member_Name_OWNER70")
          .removeAttribute("mandatory");
        document
          .getElementById("Member_Member_Name_OWNER70")
          .setAttribute("disabled", "");
        document.getElementById("Member_Member_Name_OWNER70").value = "";

        document.getElementById("Member_Firm_Name_OWNER70").value = "";
      }
      break;
    case "DeclOfQualPers_IConfThatI10":
      if (el.checked) {
        document.getElementById("RADIO1_3").removeAttribute("disabled");
        document.getElementById("RADIO2_3").removeAttribute("disabled");
        document.getElementById("RADIO1_3").checked = true;

        document
          .getElementById("Member_Member_Name_OWNER70")
          .removeAttribute("disabled");
        document
          .getElementById("Member_Member_Name_OWNER70")
          .setAttribute("mandatory", "");
      } else {
        document
          .getElementById("Member_Member_Name_BLDR70")
          .removeAttribute("mandatory");
        document
          .getElementById("Member_Member_Name_BLDR70")
          .setAttribute("disabled", "");
        document.getElementById("Member_Member_Name_BLDR70").value = "";

        document.getElementById("Member_Firm_Name_BLDR70").value = "";

        document
          .getElementById("Member_Member_Name_OWNER70")
          .removeAttribute("mandatory");
        document
          .getElementById("Member_Member_Name_OWNER70")
          .setAttribute("disabled", "");
        document.getElementById("Member_Member_Name_OWNER70").value = "";

        document.getElementById("Member_Firm_Name_OWNER70").value = "";

        document.getElementById("RADIO1_3").checked = false;
        document.getElementById("RADIO2_3").checked = false;
      }
      break;
  }
}

function handleGFA2() {
  let gfaField = document.getElementById("SubmChec_UndeTheBuilCont_GFA10");
  let datefield = document.getElementById(
    "SubmChec_UndeTheBuilCont_PlanPerm10"
  );
  var d = new Date(datefield.value);
  let compareDate = new Date("2011-07-15");
  let decemberDate = new Date("2019-12-14");

  if (gfaField.value || datefield.value) {
    if (document.getElementById("SubmChec_UndeTheBuilCont_Appl10").checked) {
      if (parseFloat(gfaField.value) < 5000 || d <= compareDate.getTime()) {
        showMessage(
          "A project with GFA less than 5000 m2 or with the application for planning permission made on and before 15 Jul 2011 is not required to submit Constructability Score"
        );
        resetGFAFields();
      }
    } else if (
      document.getElementById("SubmChec_UndeTheBuilCont_NotAppl10").checked
    ) {
      if (
        parseFloat(gfaField.value) >= 5000 &&
        d >= compareDate.getTime() &&
        d <= decemberDate
      ) {
        showMessage(
          "A project with GFA >= 5000 m2 and with the application for planning permission made on and after 15 jul 2011 and on or before 14 December 2019 is required to submit Constructability Score"
        );
        document.getElementById(
          "SubmChec_UndeTheBuilCont_NotAppl10"
        ).checked = false;
        resetGFAFields();
      }
    }
  }
}

function handleGFA() {
  let gfa =
    document.getElementById("SubmChec_UndeTheBuilCont_GFA10").value !== ""
      ? parseFloat(
          document.getElementById("SubmChec_UndeTheBuilCont_GFA10").value
        )
      : false;
  let firstApplied = document.getElementById(
    "SubmChec_UndeTheBuilContPlanPermAppl10"
  ).checked;
  let dateApplied =
    document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10").value !== ""
      ? document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10").value
      : false;

  let notRequired = document.getElementById(
    "SubmChec_UndeTheBuilContPlanPermNotAppl10"
  ).checked;

  let applicable = document.getElementById("SubmChec_UndeTheBuilCont_Appl10")
    .checked;
  let NotApplicable = document.getElementById(
    "SubmChec_UndeTheBuilCont_NotAppl10"
  ).checked;

  if (notRequired && NotApplicable) return resetGFAFields();
  if (firstApplied && applicable) {
    if (gfa !== false) {
      if (gfa <= 5000) {
        return resetGFAFields();
      }
    } else if (dateApplied !== false) {
      if (dateApplied < "2011-06-15") {
        return resetGFAFields();
      }
    }
  }
  return true;
}

function resetGFAFields() {
  document.getElementById("SubmChec_UndeTheBuilCont_GFA10").value = "";
  document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10").value = "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_PlanPerm10")
    .removeAttribute("mandatory");
  document.getElementById(
    "SubmChec_UndeTheBuilContPlanPermAppl10"
  ).checked = false;
  document.getElementById(
    "SubmChec_UndeTheBuilContPlanPermNotAppl10"
  ).checked = false;
  document.getElementById("SubmChec_UndeTheBuilCont_Appl10").checked = false;
  document.getElementById("SubmChec_UndeTheBuilCont_NotAppl10").checked = false;

  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"
  ).checked = false;
  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10"
  ).checked = false;
  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10"
  ).checked = false;

  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10")
    .setAttribute("disabled", "");
  document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10").value =
    "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10")
    .removeAttribute("mandatory");
  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10"
  ).value = "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10")
    .removeAttribute("mandatory");
  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10"
  ).value = "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10")
    .removeAttribute("mandatory");
  document.getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10").value =
    "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10")
    .removeAttribute("mandatory");
  document.getElementById(
    "SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10"
  ).value = "";
  document
    .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
    .setAttribute("disabled", "");
  document
    .getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10")
    .removeAttribute("mandatory");
  document.getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10").value =
    "";
  return false;
}

function calcWasteTotal() {
  let q1 =
    document.getElementById("DemoWastQuan_QuanOfConcWast10").value !== ""
      ? parseFloat(
          document.getElementById("DemoWastQuan_QuanOfConcWast10").value
        )
      : 0;
  let q3 =
    document.getElementById("DemoWastQuan_QuanOfBricWast10").value !== ""
      ? parseFloat(
          document.getElementById("DemoWastQuan_QuanOfBricWast10").value
        )
      : 0;
  let q2 =
    document.getElementById("DemoWastQuan_QuanOfOtheWast10").value !== ""
      ? parseFloat(
          document.getElementById("DemoWastQuan_QuanOfOtheWast10").value
        )
      : 0;
  document.getElementById("DemoWastQuan_TotaDemoWastColl10").value = parseFloat(
    q1 + q2 + q3
  ).toFixed(2);
}

function toggleAsbestos() {
  if (
    document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20")
      .checked ||
    document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10").checked
  ) {
    document
      .getElementById("Project_BldgFirstBuilt20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Project_BldgFirstBuilt20")
      .removeAttribute("disabled");
    document
      .getElementById("Project_AsbestosSurveyBeen20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Project_AsbestosSurveyBeen20")
      .removeAttribute("disabled");
    document
      .getElementById("Project_AsbestosContainingMaterial20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Project_AsbestosContainingMaterial20")
      .removeAttribute("disabled");
    document
      .getElementById("Project_AsbeRemoWorkTo20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Project_AsbeRemoWorkTo20")
      .removeAttribute("disabled");
  } else {
    document
      .getElementById("Project_BldgFirstBuilt20")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_BldgFirstBuilt20")
      .removeAttribute("mandatory");
    document.getElementById("Project_BldgFirstBuilt20").value = "";
    document
      .getElementById("Project_AsbestosSurveyBeen20")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_AsbestosSurveyBeen20")
      .removeAttribute("mandatory");
    document.getElementById("Project_AsbestosSurveyBeen20").value = "";

    document
      .getElementById("Project_PartOfCompPers_Name10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_PartOfCompPers_Name10")
      .removeAttribute("mandatory");
    document.getElementById("Project_PartOfCompPers_Name10").value = "";
    document
      .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_PartOfCompPers_NameOfEmplComp10")
      .removeAttribute("mandatory");
    document.getElementById("Project_PartOfCompPers_NameOfEmplComp10").value =
      "";
    document
      .getElementById("Project_PartOfCompPers_EmaiAddr10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_PartOfCompPers_EmaiAddr10")
      .removeAttribute("mandatory");
    document.getElementById("Project_PartOfCompPers_EmaiAddr10").value = "";
    document
      .getElementById("Project_PartOfCompPers_ContNo10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_PartOfCompPers_ContNo10")
      .removeAttribute("mandatory");
    document.getElementById("Project_PartOfCompPers_ContNo10").value = "";
    document
      .getElementById("Project_AsbestosContainingMaterial20")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_AsbestosContainingMaterial20")
      .removeAttribute("mandatory");
    document.getElementById("Project_AsbestosContainingMaterial20").value = "";
    document
      .getElementById("Project_AsbeRemoWorkTo20")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_AsbeRemoWorkTo20")
      .removeAttribute("mandatory");
    document.getElementById("Project_AsbeRemoWorkTo20").value = "";
    document
      .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10")
      .removeAttribute("mandatory");
    document.getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10").value =
      "";
    document
      .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10")
      .removeAttribute("mandatory");
    document.getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10").value = "";
    document
      .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_InfoOnAsbeRemo_EmaiAddr10")
      .removeAttribute("mandatory");
    document.getElementById("Project_InfoOnAsbeRemo_EmaiAddr10").value = "";
    document
      .getElementById("Project_InfoOnAsbeRemo_ContNo10")
      .setAttribute("disabled", "");
    document
      .getElementById("Project_InfoOnAsbeRemo_ContNo10")
      .removeAttribute("mandatory");
    document.getElementById("Project_InfoOnAsbeRemo_ContNo10").value = "";
  }
}

function twoFixed_change(element) {
  document.getElementById(element.id).value = parseFloat(element.value).toFixed(
    2
  );
}

function ToAgency_id_change(element) {
  let value = document.getElementById(element.id).valueLabel.trim();
  let textarea = document.getElementById("Addr20");
  if (value === "BCA") {
    textarea.value =
      "Commissioner of Building Control\nBuilding and Construction Authority\n52 Jurong Gateway Road, #11-01\nSingapore 608550\n";
  } else {
    textarea.value =
      "Defence Science & Technology Agency\nBuilding & Infrastructure\n1 Depot Road #12-05\nDefence Technology Tower A\nSingapore 109676";
  }
  textarea.adjustHeigth();
}

function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(".deleteBtn").setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function enableMandatoryField(element, fieldID, spanID) {
  let wait = setTimeout(() => {
    let field = document.getElementById(fieldID);
    let span = document.getElementById(spanID);
    let main = document.getElementById(element.id);

    if (main.checked) {
      field.removeAttribute("disabled");
      field.setAttribute("mandatory", "");
      field.value = field.value;
      span.textContent = "*";
    } else {
      field.setAttribute("disabled", "");
      field.removeAttribute("not-filledup");
      field.removeAttribute("mandatory");
      span.textContent = "";
    }

    clearTimeout(wait);
  }, 0);
}

function PartOfAppl_ForReApplOf_10_change(element) {
  disableAsDropdown(element);
  let rows = document.querySelectorAll("#PartOfAppl_ForReApplOf_rows");
  let checkboxes = [
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfThePers10"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPFor10"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPForGeo10"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfBuil10"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPForArch10"),
  ];
  let fields = [
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfThePers20"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPFor20"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPForGeo20"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfBuil20"),
    document.getElementById("PartOfAppl_ForReApplOf_ChanOfQPForArch20"),
  ];
  let spans = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
  ];

  let check;
  if (element.checked) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].removeAttribute("hidden");
    }
  } else {
    for (let i = 0; i < rows.length; i++) {
      rows[i].setAttribute("hidden", "");
    }
    for (c of checkboxes) {
      c.checked = false;
    }
    for (f of fields) {
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
    }
    for (s of spans) {
      s.textContent = "";
    }
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

function PartOfAppl_AsDescHereIn_DemoWork10_change(e) {
  let field = document.querySelectorAll(
    "[prefix='DeclByAppl_PermitToST_PerNo']"
  );
  let addBtn = document.getElementById("stAddBtn");
  let childCount = document.getElementById("stForm").childElementCount;

  let delBtn = document.querySelectorAll("#delete1A");
  let section = document.querySelectorAll("#demoWorks");
  let stSelect = document.querySelectorAll(
    "[prefix='DeclByAppl_PermitToST_PerNo']"
  );
  let stManda = document.getElementById("stnumManda");

  let checkboxes = [
    document.getElementById("PartOfAppl_AsDescHereIn_BuilType10_10"),
    document.getElementById("PartOfAppl_AsDescHereIn_BuilType20"),
    document.getElementById("PartOfAppl_AsDescHereIn_BuilType30"),
    document.getElementById("PartOfAppl_AsDescHereIn_BuilType40"),
    document.getElementById("PartOfAppl_AsDescHereIn_BuilType50"),
  ];
  let Mfields = [
    document.getElementById("DetaOfDemoWork_Desc10"),
    document.getElementById("DetaOfDemoWork_NoOfBlksBldgs10"),
    document.getElementById("DetaOfDemoWork_NoOfStroPerBlk10"),
    document.getElementById("DetaOfDemoWork_TotaFlooAreaTo20"),
    document.getElementById("DemoWastQuan_QuanOfConcWast10"),
    document.getElementById("DemoWastQuan_QuanOfOtheWast10"),
    document.getElementById("DemoWastQuan_QuanOfBricWast10"),
    document.getElementById("NameOfTheGWC10"),
    document.getElementById("GWCLiceNumb10"),
  ];
  let fields = [
    document.getElementById("DemoWastQuan_TotaDemoWastColl10"),
    document.getElementById("DemoWastQuan_UsagOfDemoWast10"),
  ];
  let isChecked = [
    document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10").checked,
    document.getElementById("PartOfAppl_AsDescHereIn_StruWork10").checked,
    document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20").checked,
  ];

  if (e.checked) {
    for (let i = 0; i < section.length; i++) {
      section[i].removeAttribute("hidden");
    }
    for (c of checkboxes) {
      c.setAttribute("mandatory", "");
      c.setAttribute("checked", "");
    }
    for (f of Mfields) {
      f.setAttribute("mandatory", "");
    }
  } else {
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].setAttribute("disabled", "");
    }
    for (c of checkboxes) {
      c.checked = false;
      c.removeAttribute("mandatory");
      c.removeAttribute("checked");
    }
    for (f of Mfields) {
      f.value = "";
      f.removeAttribute("mandatory");
    }
    for (f of fields) {
      f.value = "";
    }
    for (let i = 0; i < field.length; i++) {
      field[i].setAttribute("disabled", "");
      field[i].removeAttribute("mandatory");
    }
    addBtn.setAttribute("disabled", "");
    for (let i = 0; i < section.length; i++) {
      section[i].setAttribute("hidden", "");
    }
    if (childCount > 1) {
      let formField = document.querySelectorAll(".Afields");
      for (let i = 0; i < formField.length; i++) {
        if (i != 0) {
          formField[i].parentNode.removeChild(formField[i]);
        }
      }
    }
  }

  PartOfAppl_AsDescHereIn_PermitToST10_change(
    document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
  );
}

function quantity_input(element) {
  let field = document.getElementById(element.id);
  let fields = [
    document.getElementById("DemoWastQuan_QuanOfConcWast10"),
    document.getElementById("DemoWastQuan_QuanOfBricWast10"),
    document.getElementById("DemoWastQuan_QuanOfOtheWast10"),
  ];
  let fieldSum = document.getElementById("DemoWastQuan_TotaDemoWastColl10");
  if (field.value) {
    if (!isNaN(field.value)) {
      let final = parseFloat(field.value).toFixed(2);
      field.value = final;
      if (field.value == 0) {
        field.setAttribute("data-invalid", "");
        field.setAttribute(
          "data-invalid-message",
          "This entry is invalid.Please try again."
        );
      } else {
        field.removeAttribute("data-invalid");
        field.removeAttribute("data-invalid-message");
      }
    } else {
      field.value = "";
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  let sum = 0;
  for (f of fields) {
    if (f.value) {
      sum += parseFloat(f.value);
    }
  }
  let finalSum = sum.toFixed(2);
  if (finalSum != 0) {
    fieldSum.value = finalSum;
  } else {
    fieldSum.value = "";
  }
}

function Project_ProjCost10_change(e) {
  let field = document.getElementById(e.id);
  let input = parseFloat(field.value);
  if (field.value) {
    if (!isNaN(field.value)) {
      let final = parseFloat(field.value).toFixed(2);
      field.value = final;
      document.getElementById("DetaOfDemoWork_TotaFlooAreaTo20").value = final;
      if (field.value == 0) {
        field.setAttribute("data-invalid", "");
        field.setAttribute(
          "data-invalid-message",
          "This entry is invalid.Please try again."
        );
      } else {
        field.removeAttribute("data-invalid");
        field.removeAttribute("data-invalid-message");
      }
    } else {
      field.value = "";
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
}

// function Proj_ExpeDateOfComm10_change(element) {
//   let datefield = document.getElementById(element.id);
//   let date = datefield.value.split("-");
//   let year = date[0];
//   let month = date[1];
//   let day = date[2];

//   let CurrentDate = new Date();
//   let GivenDate = new Date(`${year}-${month}-${day}`);
//   if (GivenDate < CurrentDate) {
//     datefield.value = "";
//   }
// }

function Project_AsbestosSurveyBeen20_change(element) {
  let row = document.getElementById("Project_AsbestosSurveyBeen20_row");
  let fields = document.querySelectorAll("#no2Particulars");
  if (element.value == "Yes") {
    row.setAttribute("rowspan", "6");
    for (let i = 0; i < fields.length; i++) {
      fields[i].removeAttribute("hidden");
    }
  } else {
    row.removeAttribute("rowspan");
    for (let i = 0; i < fields.length; i++) {
      fields[i].setAttribute("hidden", "");
    }
  }
}

function Project_AsbeRemoWorkTo20_change(element) {
  let row = document.getElementById("Project_AsbeRemoWorkTo20_row");
  let fields = document.querySelectorAll("#no3Particulars");
  if (element.value == "Yes") {
    row.setAttribute("rowspan", "6");
    for (let i = 0; i < fields.length; i++) {
      fields[i].removeAttribute("hidden");
    }
  } else {
    row.removeAttribute("rowspan");
    for (let i = 0; i < fields.length; i++) {
      fields[i].setAttribute("hidden", "");
    }
  }
}

function enablePage3(element) {
  let pass = false;
  let checks = [
    document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10"),
    document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20"),
  ];
  let row1 = document.getElementById("Project_AsbestosSurveyBeen20_row");
  let fields1 = document.querySelectorAll("#no2Particulars");
  let row2 = document.getElementById("Project_AsbeRemoWorkTo20_row");
  let fields2 = document.querySelectorAll("#no3Particulars");

  let page3 = document.querySelector("[target='page3']");
  let pages = document.querySelectorAll("cn2-nav-button");
  let fields = [
    document.getElementById("Project_BldgFirstBuilt20"),
    document.getElementById("Project_AsbestosSurveyBeen20"),
    document.getElementById("Project_PartOfCompPers_Name10"),
    document.getElementById("Project_PartOfCompPers_NameOfEmplComp10"),
    document.getElementById("Project_PartOfCompPers_EmaiAddr10"),
    document.getElementById("Project_PartOfCompPers_ContNo10"),
    document.getElementById("Project_AsbestosContainingMaterial20"),
    document.getElementById("Project_AsbeRemoWorkTo20"),
    document.getElementById("Project_InfoOnAsbeRemo_NameOfApprAsbe10"),
    document.getElementById("Project_InfoOnAsbeRemo_WorkNotiNumb10"),
    document.getElementById("Project_InfoOnAsbeRemo_EmaiAddr10"),
    document.getElementById("Project_InfoOnAsbeRemo_ContNo10"),
  ];
  let selectFields = [
    document.getElementById("Project_BldgFirstBuilt20"),
    document.getElementById("Project_AsbestosSurveyBeen20"),
    document.getElementById("Project_AsbestosContainingMaterial20"),
    document.getElementById("Project_AsbeRemoWorkTo20"),
  ];

  for (c of checks) {
    if (c.checked) {
      pass = true;
    }
  }

  if (pass == true) {
    document
      .querySelector("cn2-fixed-footer")
      .setAttribute("data-next-page", "page3");
    page3.removeAttribute("hidden");
    for (let i = 0; i < pages.length; i++) {
      pages[i].setAttribute("page-number", `${i + 1}`);
    }
    for (f of selectFields) {
      f.setAttribute("mandatory", "");
    }
  } else {
    document
      .querySelector("cn2-fixed-footer")
      .setAttribute("data-next-page", "page4");
    let num = 1;
    page3.setAttribute("hidden", "");
    for (f of selectFields) {
      f.removeAttribute("mandatory", "");
    }
    for (let i = 0; i < fields1.length; i++) {
      fields1[i].setAttribute("hidden", "");
    }
    row1.removeAttribute("rowspan");
    for (let i = 0; i < fields2.length; i++) {
      fields2[i].setAttribute("hidden", "");
    }
    row2.removeAttribute("rowspan");
    for (let i = 0; i < pages.length; i++) {
      if (!pages[i].hasAttribute("hidden")) {
        pages[i].setAttribute("page-number", `${num}`);
        num++;
      }
    }
    for (f of fields) {
      f.value = "";
      f.removeAttribute("mandatory");
    }
  }
}

function addRemoveError(element) {
  let uen = document.querySelectorAll('[prefix="Members_UEN_OWNER"]');
  let childCount = document.getElementById("particularsOfDeveloper")
    .childElementCount;
  if (childCount > 1) {
    uen[uen.length - 1].removeAttribute("data-invalid");
    uen[uen.length - 1].removeAttribute("data-invalid-message");
  }
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(deleteClass).setAttribute("disabled", "true");
  } else {
    let deleteBtns = document.querySelectorAll(deleteClass);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function addMandaSign(element, spans) {
  let span = document.getElementById(spans);
  if (element.checked) {
    span.textContent = "*";
  } else {
    span.textContent = "";
  }
}

function Member_Member_Name_PE10_change(element) {
  let thisField = document.getElementById(element.id);
  let name1 = document.getElementById("Member_Member_Name_PE80");
  let regNo1 = document.getElementById("MemberRole_Professional_No_PE80");
  let name1Target = document.getElementById("Member_Member_Name_PE10");
  let regNo1Target = document.getElementById("MemberRole_Professional_No_PE10");

  let checkbox = document.getElementById("DeclByThePers10");
  let field = document.getElementById("DeclByThePers_Er10");
  let field2 = document.getElementById("DeclByThePers_OfPE10");
  if (thisField.value && thisField.valueLabel != "Please Select") {
    if (checkbox.checked) {
      field.value = thisField.valueLabel;
      field2.value = document.getElementById(
        "MemberRole_Professional_No_PE10"
      ).value;
    }
    if (document.getElementById("RADIO2").checked) {
      if (thisField.valueLabel != "Please Select")
        name1.value = name1Target.valueLabel;
      regNo1.value = regNo1Target.value;
    }
  } else {
    field.value = "";
    field2.value = "";
  }
}

function Member_Member_Name_PE20_change(element) {
  let thisField = document.getElementById(element.id);
  let name2 = document.getElementById("Member_Member_Name_PE90");
  let regNo2 = document.getElementById("MemberRole_Professional_No_PE90");
  let name2Target = document.getElementById("Member_Member_Name_PE20");
  let regNo2Target = document.getElementById("MemberRole_Professional_No_PE20");
  let checkbox = document.getElementById("DeclByThePers20");
  let field = document.getElementById("DeclByThePers_Er20");
  let field2 = document.getElementById("DeclByThePers_OfPE30");
  if (thisField.value) {
    if (checkbox.checked) {
      field.value = thisField.valueLabel;
      field2.value = document.getElementById(
        "MemberRole_Professional_No_PE20"
      ).value;
    }
    if (document.getElementById("RADIO4").checked) {
      name2.value = name2Target.valueLabel;
      regNo2.value = regNo2Target.value;
    }
  } else {
    field.value = "";
    field2.value = "";
  }
}

function DeclByThePers20_change(element) {
  let targetCheck = document.getElementById("DeclByQualPers_IAmNotA10");
  let targetCheckSign = document.getElementById(
    "DeclByQualPers_IAmNotA10_span"
  );

  let targetCheck2 = document.getElementById("DeclByQualPers_IHaveAppo10");
  let targetCheckSign2 = document.getElementById(
    "DeclByQualPers_IHaveAppo10_span"
  );

  let targetCheck3 = document.getElementById("DeclByQualPers_ThePartOfThe10");
  let targetCheckSign3 = document.getElementById(
    "DeclByQualPers_ThePartOfThe10_span"
  );
  if (element.checked) {
    document
      .getElementById("Member_Member_Name_PE20")
      .removeAttribute("disabled");
    document
      .getElementById("Member_Member_Title20")
      .removeAttribute("disabled");
    document.getElementById("Member_Member_Title20").value = "Er";
    document.getElementById("Members_UEN_QP10").removeAttribute("disabled");
  } else {
    document
      .getElementById("Member_Member_Name_PE20")
      .setAttribute("disabled", "");
    document.getElementById("Member_Member_Name_PE20").value = "";
    document
      .getElementById("Member_Member_Title20")
      .setAttribute("disabled", "");
    document.getElementById("Member_Member_Title20").value = "";
    document.getElementById("Members_UEN_QP10").setAttribute("disabled", "");
    document.getElementById("Members_UEN_QP10").removeAttribute("data-invalid");
    document
      .getElementById("Members_UEN_QP10")
      .removeAttribute("data-invalid-message");
    document.getElementById("Members_UEN_QP10").value = "";
    document.getElementById("MemberRole_Professional_No_PE20").value = "";
    document.getElementById("Member_Firm_Name_PE20").value = "";
    document.getElementById("Member_Address_PE20").value = "";
    document.getElementById("Member_Tel_No_PE20").value = "";
    document.getElementById("Member_Mobile_No_PE20").value = "";
    document.getElementById("Member_Email_Address1_PE20").value = "";
  }

  // if (element.checked) {
  //   targetCheck.setAttribute("mandatory", "");
  //   targetCheck.setAttribute("checked", "");
  //   targetCheckSign.textContent = "*";

  //   if (!document.getElementById("DeclByQualPers_IHaveAppo10").checked) {
  //     targetCheck2.setAttribute("mandatory", "");
  //     targetCheck2.setAttribute("checked", "");
  //     targetCheckSign2.textContent = "*";
  //   }

  //   if (!document.getElementById("DeclByQualPers_IHaveAppo10").checked) {
  //     targetCheck3.setAttribute("mandatory", "");
  //     targetCheck3.setAttribute("checked", "");
  //     targetCheckSign3.textContent = "*";
  //   }
  // } else {
  //   targetCheck.removeAttribute("mandatory");
  //   targetCheck.removeAttribute("checked");
  //   targetCheckSign.textContent = "";

  //   targetCheck2.setAttribute("mandatory", "");
  //   targetCheck2.setAttribute("checked", "");
  //   targetCheckSign2.textContent = "";

  //   targetCheck3.setAttribute("mandatory", "");
  //   targetCheck3.setAttribute("checked", "");
  //   targetCheckSign3.textContent = "";
  // }
}

function removeManda(element) {
  let main = document.getElementById(element.id);
  if (main.checked) {
    main.removeAttribute("mandatory");
    main.removeAttribute("checked");
  } else {
    main.setAttribute("mandatory", "");
    main.setAttribute("checked", "");
  }
}

function declUndertake_change(element) {
  let numProjects = document.querySelectorAll(
    "[prefix='SectIIIPartOf_NoOfProj']"
  );
  let numProjectsSign = document.querySelectorAll(
    "#SectIIIPartOf_NoOfProj10_span"
  );
  let section2hide = document.getElementById("section2hide");
  switch (element.id) {
    case "DeclByTheQual_ImmeSupeOfCrit20":
      section2hide.setAttribute("hidden", "");
      for (let i = 0; i < numProjects.length; i++) {
        if (numProjects[i].value >= 1) {
          numProjects[i].setAttribute("data-invalid", "");
          numProjects[i].setAttribute(
            "data-invalid-message",
            "Value entered cannot be more than 0 for Full Time Site Supervision of Structural Works"
          );
        }
      }
      break;
    case "DeclByTheQual_ImmeSupeOfCrit10":
      section2hide.removeAttribute("hidden");
      for (let i = 0; i < numProjects.length; i++) {
        if (numProjects[i].value >= 1) {
          numProjects[i].removeAttribute("data-invalid", "");
          numProjects[i].removeAttribute("data-invalid-message", "");
        }
      }
      break;
    default:
      break;
  }
}

function DeclByTheQual_IHaveApp20_change(element) {
  let targetCheck2 = document.getElementById("DeclByQualPers_IHaveAppo10");
  let targetCheckSign2 = document.getElementById(
    "DeclByQualPers_IHaveAppo10_span"
  );

  let targetCheck3 = document.getElementById("DeclByQualPers_ThePartOfThe10");
  let targetCheckSign3 = document.getElementById(
    "DeclByQualPers_ThePartOfThe10_span"
  );

  let numProjects = document.querySelectorAll(
    "[prefix='SectIIIPartOf_NoOfProj']"
  );
  let numProjectsSign = document.querySelectorAll(
    "#SectIIIPartOf_NoOfProj10_span"
  );

  let ownRadio = document.getElementById("DeclByTheQual_ImmeSupeOfCrit10");
  if (element.checked) {
    ownRadio.checked = true;
    targetCheck2.removeAttribute("mandatory");
    targetCheck2.removeAttribute("checked");
    targetCheckSign2.textContent = "";

    targetCheck3.removeAttribute("mandatory");
    targetCheck3.removeAttribute("checked");
    targetCheckSign3.textContent = "";
  } else {
    ownRadio.checked = false;
    if (document.getElementById("DeclByThePers20").checked) {
      targetCheck2.setAttribute("mandatory", "");
      targetCheck2.setAttribute("checked", "");
      targetCheckSign2.textContent = "*";

      targetCheck3.setAttribute("mandatory", "");
      targetCheck3.setAttribute("checked", "");
      targetCheckSign3.textContent = "*";
    }
    for (let i = 0; i < numProjects.length; i++) {
      numProjects[i].removeAttribute("mandatory");
      numProjectsSign[i].textContent = "";
    }
  }
}

function DeclByQualPers_IHaveAppo10_change(element) {
  let fields = [
    document.getElementById("DeclByQualPers_StatTotaNoResi10"),
    document.getElementById("DeclByQualPers_StatTotaNoOf10"),
  ];

  if (element.checked) {
    for (f of fields) {
      f.removeAttribute("disabled");
    }
    document.getElementById("DeclByQualPers_FullTimeSupeOf10").checked = true;
    document
      .getElementById("DeclByQualPers_FullTimeSupeOf10")
      .removeAttribute("disabled");
  } else {
    for (f of fields) {
      f.value = "";
      f.setAttribute("disabled", "");
    }
    document.getElementById("DeclByQualPers_FullTimeSupeOf10").checked = false;
    document
      .getElementById("DeclByQualPers_FullTimeSupeOf10")
      .setAttribute("disabled", "");
  }
}

// function Member_Member_Name_SS10_change(element){
//   let name = document.querySelectorAll("[prefix='Member_Member_Name_SS']");
//   let target = document.querySelectorAll("[prefix='Member_PE_No_SS']");

//   for (let i = 0; i < name.length; i++) {
//     if(name[i].valueLabel == "Professional Engineer (Civil)" || name[i].valueLabel == "Professional Engineer (Structural)" ){
//       target[i].value = "SAM-2019";

//     }else{
//       target[i].value = "";
//     }
//   }
// }

function SectIIIPartOf_NoOfProj10_blur(element) {
  let field = document.getElementById(element.id);
  let radio = document.getElementById("DeclByTheQual_ImmeSupeOfCrit20");
  if (radio.checked) {
    if (field.value) {
      if (field.value >= 1) {
        field.setAttribute("data-invalid", "");
        field.setAttribute(
          "data-invalid-message",
          "Value entered cannot be more than 0 for Full Time Site Supervision of Structural Works"
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
}

function removeNoError(element) {
  let fields = document.querySelectorAll("[prefix='SectIIIPartOf_NoOfProj']");
  let childCount = document.getElementById("particularsOfSiteSupervisorForm")
    .childElementCount;

  if (childCount > 1) {
    fields[fields.length - 1].removeAttribute("data-invalid");
    fields[fields.length - 1].removeAttribute("data-invalid-message");
  }
}

function PartOfAppl_AsDescHereIn_StruWork10_change(element) {
  let GFA = document.getElementById("SubmChec_UndeTheBuilCont_GFA10");
  let GFAspan = document.getElementById("GFAspan");
  let radios = [
    document.getElementById("SubmChec_UndeTheBuilContPlanPermAppl10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl10"),
    document.getElementById("SubmChec_UndeTheBuilContPlanPermNotAppl10"),
    document.getElementById("SubmChec_UndeTheBuilCont_NotAppl10"),
  ];

  let fields = [
    document.getElementById("SubmChec_UndeTheBuilCont_GFA10"),
    document.getElementById("SubmChec_UndeTheBuilCont_PlanPerm10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartOne10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmNoPartTwo10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorIs10"),
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_TheExpeStarDate10"),
    document.getElementById("SubmChec_UndeTheBuilCont_NotAppl_PopUp10"),
  ];

  let subRadios = [
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_BuilScorSubmIn10"),
    document.getElementById(
      "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInThre10"
    ),
    document.getElementById(
      "SubmChec_UndeTheBuilCont_Appl_BuilScorSubmInSix10"
    ),
  ];

  if (element.checked) {
    GFA.removeAttribute("disabled");
    GFA.setAttribute("mandatory", "");
    GFAspan.textContent = "*";
    for (r of radios) {
      r.removeAttribute("disabled");
    }
    // document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10").value =
    //   "ES";
  } else {
    GFA.setAttribute("disabled", "");
    GFAspan.textContent = "";
    for (r of radios) {
      r.setAttribute("disabled", "");
      r.checked = false;
    }
    for (r of subRadios) {
      r.setAttribute("disabled", "");
      r.checked = false;
    }
    for (f of fields) {
      f.value = "";
      f.removeAttribute("mandatory");
      f.setAttribute("disabled", "");
    }
    document.getElementById("SubmChec_UndeTheBuilCont_Appl_SubmType10").value =
      "";
  }

  PartOfAppl_AsDescHereIn_PermitToST10_change(
    document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
  );
}

function PartOfAppl_AsDescHereIn_AAWorkInvoDemo20_change(element) {
  PartOfAppl_AsDescHereIn_PermitToST10_change(
    document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
  );
}

function SubmChec_UndeTheBuilCont_Appl_SubmType10_change(element) {
  let field = document.getElementById(element.id);
  if (field.value) {
    if (field.value == 0) {
      field.value = "";
    }
  }
}

function addSTplan(element) {
  let fields = document.querySelectorAll(
    "[prefix='DeclByAppl_PermitToST_PerNo']"
  );
  if (dataResponse === 501) {
    convertSelectToTextbox("DeclByAppl_PermitToST_PerNo10");
    element.removeAttribute("d-list");
    //}
  } else {
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].hasAttribute("d-list")) {
        options = fields[i].shadowRoot.querySelector("select").options;
        let yesDemo = false;
        let yesStruc = false;
        if (
          document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10")
            .checked === true
        ) {
          yesDemo = true;
          yesStruc = false;
        }

        if (
          document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20")
            .checked === true
        ) {
          yesDemo = true;
          yesStruc = true;
        }

        if (
          document.getElementById("PartOfAppl_AsDescHereIn_StruWork10")
            .checked === true
        ) {
          yesStruc = true;
          yesDemo = true;
        }
        for (let i = 0; i < options.length; i++) {
          options[i].removeAttribute("disabled");
          options[i].setAttribute("disabled", "");
          if (yesDemo && options[i].value == "Demolition ST nos sample")
            options[i].removeAttribute("disabled");
          if (
            yesStruc &&
            options[i].value == "ST Nos from ISPS2 database sample"
          )
            options[i].removeAttribute("disabled");
        }
      }
    }
  }
}

function DeclByAppl_PermitToST_AppCon10_clicked(element) {
  // document.getElementById(
  //   "PartOfAppl_AsDescHereIn_PermitToST10"
  // ).checked = false;
  // PartOfAppl_AsDescHereIn_PermitToST10_change(
  //   document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
  // );
  if (element.checked) {
    document
      .getElementById("DeclByAppl_PermitAppCon_PerNo10")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByAppl_PermitAppCon_PerNo10")
      .setAttribute("mandatory", "");
  } else {
    document
      .getElementById("DeclByAppl_PermitAppCon_PerNo10")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByAppl_PermitAppCon_PerNo10")
      .removeAttribute("mandatory");
    document.getElementById("DeclByAppl_PermitAppCon_PerNo10").value = "";
  }
}

function PartOfAppl_AsDescHereIn_PermitToST10_change(element) {
  if (isSubmittedForm()) {
    //No webservice
  } else {
    let field = document.querySelectorAll(
      "[prefix='DeclByAppl_PermitToST_PerNo']"
    );

    let addBtn = document.getElementById("stAddBtn");
    let delBtn = document.querySelectorAll("#delete1A");
    let childCount = document.getElementById("stForm").childElementCount;
    let stManda = document.getElementById("stnumManda");

    let fields = [
      document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10").checked,
      document.getElementById("PartOfAppl_AsDescHereIn_StruWork10").checked,
      document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20")
        .checked,
    ];

    field[0].value = "";
    if (field[0].hasAttribute("mandatory")) {
      field[0].removeAttribute("mandatory");
      field[0].setAttribute("mandatory", "");
    }
    let options;
    if (element.checked) {
      stManda.textContent = "*";
      for (let i = 0; i < field.length; i++) {
        field[i].removeAttribute("disabled");
        field[i].setAttribute("mandatory", "");
        options = field[i].shadowRoot.querySelector("select").options;
        let yesDemo = false;
        let yesStruc = false;
        if (
          document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10")
            .checked === true
        ) {
          yesDemo = true;
          yesStruc = false;
        }

        if (
          document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20")
            .checked === true
        ) {
          yesDemo = true;
          yesStruc = true;
        }

        if (
          document.getElementById("PartOfAppl_AsDescHereIn_StruWork10")
            .checked === true
        ) {
          yesStruc = true;
          yesDemo = true;
        }
        for (let i = 0; i < options.length; i++) {
          options[i].removeAttribute("disabled");
          options[i].setAttribute("disabled", "");
          if (yesDemo && options[i].value == "Demolition ST nos sample")
            options[i].removeAttribute("disabled");
          if (
            yesStruc &&
            options[i].value == "ST Nos from ISPS2 database sample"
          )
            options[i].removeAttribute("disabled");
        }
      }
      addBtn.removeAttribute("disabled");
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].setAttribute("disabled", "");
      }
      if (childCount > 1) {
        let formField = document.querySelectorAll(".Afields");
        for (let i = 0; i < formField.length; i++) {
          if (i != 0) {
            formField[i].parentNode.removeChild(formField[i]);
          }
        }
      }
    } else {
      stManda.textContent = "";
      for (let i = 0; i < field.length; i++) {
        field[i].removeAttribute("mandatory");
        field[i].setAttribute("disabled", "");
        field[i].value = "";
      }
      addBtn.setAttribute("disabled", "");
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].setAttribute("disabled", "");
      }
      if (childCount > 1) {
        let formField = document.querySelectorAll(".Afields");
        for (let i = 0; i < formField.length; i++) {
          if (i != 0) {
            formField[i].parentNode.removeChild(formField[i]);
          }
        }
      }
    }
  }
}

function PartOfAppl_AsDescHereIn_checked() {
  let fields = [
    document.getElementById("PartOfAppl_AsDescHereIn_DemoWork10").checked,
    document.getElementById("PartOfAppl_AsDescHereIn_StruWork10").checked,
    document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20").checked,
  ];

  if (fields.some((r) => r === true)) {
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .removeAttribute("disabled");
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .setAttribute("checked", "");
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .setAttribute("mandatory", "");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .setAttribute("checked", "");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .setAttribute("mandatory", "");
    // document.getElementById(
    //   "PartOfAppl_AsDescHereIn_PermitToST10"
    // ).checked = false;
    // document.getElementById(
    //   "DeclByAppl_PermitToST_AppCon10"
    // ).checked = false;
  } else {
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .setAttribute("disabled", "");
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .removeAttribute("checked");
    document
      .getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .removeAttribute("checked");
    document
      .getElementById("DeclByAppl_PermitToST_AppCon10")
      .removeAttribute("mandatory");
    document.getElementById(
      "PartOfAppl_AsDescHereIn_PermitToST10"
    ).checked = false;
    document.getElementById("DeclByAppl_PermitToST_AppCon10").checked = false;
    DeclByAppl_PermitToST_AppCon10_clicked(
      document.getElementById("DeclByAppl_PermitToST_AppCon10")
    );
  }
}

function DeclByAppl_PermitToST_PerNo10_change(element) {
  let field = document.getElementById(element.id);
  if (dataResponse === 501) {
    convertSelectToTextbox("DeclByAppl_PermitToST_PerNo10");
    element.removeAttribute("d-list");
  } else {
    let options = DeclByAppl_PermitToST_PerNo10.shadowRoot.querySelector(
      "select"
    ).options;
    if (field.value) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].value == "ST Nos from ISPS2 database sample") {
          options[i].setAttribute("disabled", "");
        }
      }
    }
  }
}

function maxValue(element, event, maxValue) {
  let field = document.getElementById(element.id);
  let input = parseFloat(field.value).toFixed(2);
  if (input > parseFloat(maxValue)) {
    field.value = maxValue;
  }
}

function maxV(element, event, length) {
  let field = document.getElementById(element.id);
  let finalLen = length - 1;
  if (event.keyCode != 46 && !field.value.includes(".")) {
    if (field.value.length > finalLen) {
      event.preventDefault();
    }
  }
}

function disableConcurrently(element) {
  let checkboxes = [
    document.getElementById("PartOfAppl_AsDescHereIn_StruWork10"),
    document.getElementById("PartOfAppl_AsDescHereIn_AAWorkInvoDemo20"),
  ];
  let target = document.getElementById("DeclByAppl_PermitToST_AppCon10");
  let pass = false;

  for (c of checkboxes) {
    if (c.checked) {
      pass = true;
    }
  }
  if (pass == true) {
    target.setAttribute("disabled", "");
    target.checked = false;
    DeclByAppl_PermitToST_AppCon10_clicked(target);
  } else {
    target.removeAttribute("disabled");
  }
}

function DeclByThePers10_change(element) {}

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

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

function togglePartDev(el) {
  let id = el.id
    .replace(document.getElementById(el.id).getAttribute("prefix"), "")
    .replace(document.getElementById(el.id).getAttribute("suffix"), "");
  //document.getElementById("Members_UEN_OWNER" + id + "00").value = "";
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid");
  document
    .getElementById("Members_UEN_OWNER" + id + "00")
    .removeAttribute("data-invalid-message");
  removeValidations(document.getElementById("Members_UEN_OWNER" + id + "00"));
  removeValidations(
    document.getElementById("Member_IC_Passport_No_Masked_OWNER" + id + "00")
  );
}

function togglePartQp(el, el2) {
  document.getElementById(el).removeAttribute("data-invalid");
  document.getElementById(el).removeAttribute("data-invalid-message");
  removeValidations(document.getElementById(el));
  removeValidations(document.getElementById(el2));
}

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

// START WEB SERVICE ---------------- DropDown
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

  jsonData[jsonKey]["url"] = hostname;
  jsonData[jsonKey]["params"] = query;
}

function DeclByAppl_PermitToST_PerNo_change(el, element) {
  let wait = setTimeout(() => {
    let ElementMessage = document.getElementById(
      "DeclByAppl_PermitToST_PerNo_message10"
    );
    let validationField = document.getElementById(
      "DeclByAppl_PermitToST_PerNo_validation10"
    );
    let agencyURL = jsonData["agencyUrl10"];
    let projRefNo =
      "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
    let dataResponse = ipcRenderer.sendSync(
      "client-request",
      "GET",
      agencyURL,
      projRefNo
    );
    if (dataResponse === 501) {
      convertSelectToTextbox("DeclByAppl_PermitToST_PerNo10");
      let elField = document.getElementById("DeclByAppl_PermitToST_PerNo10");
      if (el.checked) {
        elField.removeAttribute("disabled");
        elField.setAttribute("mandatory", "");
        elField.value = jsonData[elField.id];
      } else {
        elField.removeAttribute("d-list");
        elField.setAttribute("disabled", "");
        elField.removeAttribute("not-filledup");
        elField.removeAttribute("mandatory");
        elField.value = "";
      }
      //}
    } else {
      updateAgencyUrl("agencyUrl10", projRefNo);
      let mainElement = document.getElementById(element.id);
      let dataOptions = [];
      let options = ["Demolition ST Nos"];

      if (navigator.onLine) {
        ElementMessage.innerHTML = "";
        if (typeof dataResponse == "object") {
          dataResponse = JSON.parse(dataResponse);
          removeValidations(validationField);
          if ("SUCCESS" == dataResponse.status) {
            console.log("test2");
            console.log(dataResponse);
            dataOptions = dataResponse.stNo.split(",");
            for (let i = 0; i < dataOptions.length; i++) {
              options.push(dataOptions[i] + ":" + dataOptions[i]);
            }
            validationField.setAttribute("data-invalid", "");
            mainElement.setAttribute("options", options);
          } else {
            console.log("test1");
            console.log(dataResponse);
            ElementMessage.innerHTML = dataResponse.message
              ? dataResponse.message
              : "Not valid/No record found in agency database";
            mainElement.removeAttribute("options");
          }
        } else {
          console.log(
            document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
              .checked
          );
          if (
            document.getElementById("PartOfAppl_AsDescHereIn_PermitToST10")
              .checked
          ) {
            console.log("test4");
            convertSelectToTextbox("DeclByAppl_PermitToST_PerNo10");
            element.removeAttribute("d-list");
          } else {
            console.log("test5");
            convertTextboxToSelect("DeclByAppl_PermitToST_PerNo10");
            element.setAttribute("d-list", "");
          }
        }
      } else {
        ElementMessage.innerHTML = "500: Service is unavailable";
        validationField.setAttribute("data-invalid", "");
        mainElement.removeAttribute("options");
      }
    }

    clearTimeout(wait);
  }, 0);
}
function convertSelectToTextbox(id) {
  let select = document.getElementById(id);
  if (select.tagName.toLowerCase() == "cn2-select") {
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
}

function convertTextboxToSelect(id) {
  let select = document.getElementById(id);
  if (select.tagName.toLowerCase() == "cn2-textbox") {
    let attrs = {};
    for (
      var i = 0, atts = select.attributes, n = atts.length, arr = [];
      i < n;
      i++
    ) {
      attrs[atts[i].nodeName] = atts[i].nodeValue;
    }

    let text = document.createElement("cn2-select");
    for (let attr in attrs) {
      text.setAttribute(attr, attrs[attr]);
    }

    select.parentNode.replaceChild(text, select);
  }
}

function PartOfAppl_ForReApplOf_Chan_change(chkbox, element) {
  let agencyURL = jsonData["agencyUrl20"];
  let projRefNo =
    "projRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    projRefNo
  );
  let mainElement = document.getElementById(element);
  if (dataResponse === 501) {
    convertSelectToTextbox(element);
    if (chkbox.checked) {
      document.getElementById(element).setAttribute("disabled", "");
      document.getElementById(element).value = jsonData[element];
    } else {
      document.getElementById(element).removeAttribute("disabled");
      document.getElementById(element).value = "";
    }
    //}
  } else {
    updateAgencyUrl("agencyUrl20", projRefNo);
    let dataOptions = [];
    let options = [];
    if (navigator.onLine) {
      if (dataResponse) {
        dataResponse = JSON.parse(dataResponse);
        removeValidations(mainElement);
        if ("SUCCESS" == dataResponse.status) {
          dataOptions = dataResponse.permitNo.split(",");
          for (let i = 0; i < dataOptions.length; i++) {
            options.push(dataOptions[i] + ":" + dataOptions[i]);
          }
          mainElement.setAttribute("options", options);
        } else {
          targetFieldPrevPermNo(element);
        }
      }
    } else {
      targetFieldPrevPermNo(element);
    }
    uncheckPrevPermNo(chkbox, element);
  }
}

function targetFieldPrevPermNo(element) {
  let dropdown = document.getElementById(element);
  let textbox = document.querySelector(`[txt-sub-id=${element}]`);
  let txtID = textbox.getAttribute("txt-sub-id");

  dropdown.setAttribute("hidden", "");
  dropdown.removeAttribute("id");
  textbox.setAttribute("id", txtID);
  textbox.removeAttribute("hidden");
  textbox.removeAttribute("disabled");
}

function uncheckPrevPermNo(chkbox, element) {
  if (!chkbox.checked) {
    let textbox = document.getElementById(element);
    let dropdown = document.querySelector(`[dd-sub-id=${element}]`);
    let ddID = dropdown.getAttribute("dd-sub-id");
    textbox.setAttribute("hidden", "");
    textbox.removeAttribute("id");
    textbox.removeAttribute("mandatory");
    textbox.value = "";
    dropdown.setAttribute("id", ddID);
    dropdown.removeAttribute("hidden");
  }
}

function disableAsDropdown(element) {
  let dropDown = [
    document.querySelector(
      `[dd-sub-id="PartOfAppl_ForReApplOf_ChanOfThePers20"]`
    ),
    document.querySelector(
      `[dd-sub-id="PartOfAppl_ForReApplOf_ChanOfQPFor20"]`
    ),
    document.querySelector(
      `[dd-sub-id="PartOfAppl_ForReApplOf_ChanOfQPForGeo20"]`
    ),
    document.querySelector(`[dd-sub-id="PartOfAppl_ForReApplOf_ChanOfBuil20"]`),
    document.querySelector(
      `[dd-sub-id="PartOfAppl_ForReApplOf_ChanOfQPForArch20"]`
    ),
  ];
  let textbox = [
    document.querySelector(
      `[txt-sub-id="PartOfAppl_ForReApplOf_ChanOfThePers20"]`
    ),
    document.querySelector(
      `[txt-sub-id="PartOfAppl_ForReApplOf_ChanOfQPFor20"]`
    ),
    document.querySelector(
      `[txt-sub-id="PartOfAppl_ForReApplOf_ChanOfQPForGeo20"]`
    ),
    document.querySelector(
      `[txt-sub-id="PartOfAppl_ForReApplOf_ChanOfBuil20"]`
    ),
    document.querySelector(
      `[txt-sub-id="PartOfAppl_ForReApplOf_ChanOfQPForArch20"]`
    ),
  ];

  for (let x of dropDown) {
    let ddID = x.getAttribute("dd-sub-id");
    x.setAttribute("id", ddID);
    x.removeAttribute("hidden");
    x.value = "";
  }
  for (let x of textbox) {
    if (x.hasAttribute("id")) {
      x.removeAttribute("id");
      x.removeAttribute("mandatory");
      x.setAttribute("hidden", "");
      x.value = "";
    }
  }
}

function removeValidations(element) {
  let el = document.getElementById(element.id);

  el.removeAttribute("data-valid");
  el.removeAttribute("data-valid-message");
  el.removeAttribute("data-invalid");
  el.removeAttribute("data-invalid-message");
}

function webServiceNricUen() {
  let run = setTimeout(() => {
    let nric =
      document.getElementById("Member_IC_Passport_No_BLDR10").value || "";
    let uen = document.getElementById("Members_UEN_BLDR10").value || "";

    let uenField = document.getElementById("Members_UEN_BLDR10");

    if (nric.trim() != "" && uen.trim() != "") {
      let agencyURL = jsonData["agencyUrl30"].url;
      let query = `nric=${nric}&uen=${uen}`;
      let dataResponse = ipcRenderer.sendSync(
        "client-request",
        "GET",
        agencyURL,
        query
      );

      jsonData["agencyUrl30"].params = query;

      removeValidations(uenField);

      if (dataResponse === 501) {
        //
      } else {
        if (typeof dataResponse === "object") {
          if (dataResponse.isBuilderValid) {
            if (dataResponse.isBuilderValid == "Y") {
              uenField.setAttribute("data-valid", "");
            } else if (dataResponse.isBuilderValid == "N") {
              uenField.setAttribute("data-invalid", "");
              uenField.setAttribute(
                "data-invalid-message",
                dataResponse.notValidErrorMessage
              );
            }
          }
        }
      }
    }

    clearTimeout(run);
  }, 100);
}

function addRemoveValidations(elements) {
  let prefix = document.querySelectorAll(`[prefix=${elements}]`);
  for (let x of prefix) {
    if (!x.value) {
      let parent = findTable(x);
      for (let textbox of parent.querySelectorAll("cn2-textbox")) {
        removeValidations(textbox);
      }
    }
  }
}

// END WEB SERVICE

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
          let isOff = ["Member_Member_Name_BLDR50"].includes(id);
          if (
            targetElement.hasAttribute("data-options") &&
            !targetElement.hasAttribute("options")
          ) {
            let innerSelect = targetElement.shadowRoot.querySelector("select");
            let val = innerSelect.options[innerSelect.selectedIndex].text;
            jsonData[id] = val == "Please Select" ? (isOff ? "off" : "") : val;
          } else {
            jsonData[id] =
              targetElement.value == "Please Select"
                ? isOff
                  ? "off"
                  : ""
                : targetElement.value;
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
          if (
            [
              "DetaOfDemoWork_TotaFlooAreaTo10",
              "DetaOfDemoWork_TotaFlooAreaTo20",
              "DemoWastQuan_QuanOfConcWast10",
              "DemoWastQuan_QuanOfBricWast10",
              "DemoWastQuan_QuanOfOtheWast10",
              "DemoWastQuan_TotaDemoWastColl10",
              "Project_ProjCost10",
              "DeclByThePers_OfPE10",
              "DeclByThePers_OfPE30",
              "MemberRole_Professional_No_PE10",
              "MemberRole_Professional_No_PE20",
              "SubmChec_UndeTheBuilCont_Appl_BuilScorIs10",
              //"MemberRole_Professional_No_PE90",
              "SubmChec_UndeTheBuilCont_GFA10",
              //"MemberRole_Professional_No_PE80",
            ].includes(id) &&
            jsonData["FormName10"].includes("BCA-BE-PERMIT")
          ) {
            jsonData[id] = +targetElement.value + "";
          } else if ([].includes(id)) {
            jsonData[id] =
              targetElement.value == "0" ? "" : targetElement.value;
          } else if ([].includes(id)) {
            jsonData[id] = targetElement.value || "0.00";
          } else {
            jsonData[id] = targetElement.value;
          }
          break;
      }
    }
  }
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
