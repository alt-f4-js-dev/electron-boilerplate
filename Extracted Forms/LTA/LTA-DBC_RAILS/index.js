let subPages = []; // handles original node format of subpages of page 3 on dom load
let textboxes = []; // handles original textboxes
let defaultVals = []; // handles element with defaultValue of '0'
let tickedCheckAll = []; // handles original checkboxes
let tickedRadioAll = []; // handles original radios
let checkedTick = [
  "RAILSDP_RADIO1",
  "RAILSDP_Type2A",
  "RAILSENG_RADIO2",
  "RAILNOA_RADIO2",
  "RAILSENG_RADIO2",
  "RAILNOA_RADIO2",
  "RAILSENG_RADIO1_1",
  "RAILSENG_RADIO3",
  "RAILSUND_RADIO1",
]; // handles radio/checkbox with default value of true
let activeDevType = "";

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  if (!document.querySelector("[target='page1']").hasAttribute("valid")) {

    let datefield = document.getElementById("Date10").value;
    const dateStr2Array = datefield.split(/[ :\-\/]/g);
    const datePart = dateStr2Array.slice(0, 3);
    let year = datePart[2];
    let month = datePart[0];
    let day = datePart[1];
    let dateValue = day + "-" + month + "-" + year
    const dateTrial = new Date(dateValue);

    let decemberDate = "31/12/2020"
    const dateStr3Array = decemberDate.split(/[ :\-\/]/g);
    const datePart2 = dateStr3Array.slice(0, 3);
    let year2 = datePart2[2];
    let month2 = datePart2[0];
    let day2 = datePart2[1];
    let dateValue2 = day2 + "-" + month2 + "-" + year2
    const dateTrial2 = new Date(dateValue2);

    if (dateTrial.getTime() < dateTrial2.getTime()) {
      for (let a of document.querySelectorAll("[afterDec]")) {
        a.setAttribute("hidden", "");
      }
      let b = document.querySelectorAll("[beforeDec]");

      for (x = 0; x < b.length; x++) {
        b[x].innerHTML = 3 + x + ".";
      }

    } else {
      for (let a of document.querySelectorAll("[afterDec]")) {
        a.removeAttribute("hidden");
      }
    }
    let pageCounter = [
      "3-1",
      "3-2",
      "3-3",
      "3-4",
      "3-5",
      "3-6",
      "3-7",
      "3-8",
      "3-9",
    ];
    for (i = 0; i < pageCounter.length; i++) {
      let div = document.getElementById(pageCounter[i]);
      let searchMandatory = div.querySelectorAll("[mandatory]");
      let searchChecked = div.querySelectorAll("[checked]");
      subPages.push(pageCounter[i] + "_m", searchMandatory);
      subPages.push(pageCounter[i] + "_c", searchChecked);
      // getting original textboxes
      let textbox = div.querySelectorAll("cn2-textbox");
      textboxes.push([pageCounter[i], textbox]);
      // getting original elements with default of '0'
      let defaultVal = div.querySelectorAll("[data-defaultZero='0']");
      if (defaultVal.length != 0) {
        defaultVals.push([pageCounter[i], defaultVal]);
      }
      // getting original checkboxes
      let check = div.querySelectorAll("cn2-checkbox");
      if (check.length != 0) {
        tickedCheckAll.push(check);
      }
      // getting original radios
      let radio = div.querySelectorAll("input[type='radio']");
      if (radio.length != 0) {
        tickedRadioAll.push(radio);
      }
    }
    let currentID =
      parseInt(document.querySelector("[section]:not([hidden])").id.slice(-1)) -
      1;
    activatePage3(currentID);

    reset31(true);
    reset33(false);
    reset44(false);
    reset66(false);
    let checkBoxfee1 = document.getElementById("RAILSDP_sideCheck");
    checkBoxfee1.checked = true;
    activateFee(
      checkBoxfee1,
      [
        RAILSDP_FeeCompDeclFee_Type1Deve_Qty10,
        RAILSDP_FeeCompDeclFee_Type2Deve_Qty10,
        RAILSDP_FeeCompDeclFee_Type3Deve_Qty10,
        RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10,
      ],
      [
        RAILSDP_FeeCompDeclFee_Type1Deve_CompFees10,
        RAILSDP_FeeCompDeclFee_Type2Deve_CompFees10,
        RAILSDP_FeeCompDeclFee_Type3Deve_CompFees10,
        RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10,
      ],
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    );
  }
});

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
    document.getElementById(element.id).value =
      document.getElementById(element.id).value + "00";
  }
}

function disabledThis() {
  let list = [
    "RAILSDP_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",

    "RAILSENG_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",

    "RAILNOA_FeeCompDeclFee_NewSubm_Amount10",
    "RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",

    "RAILSUND_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",
  ];

  for (let x of list) {
    document.getElementById(x).value = "";
    document.getElementById(x).checked = false;
    document.getElementById(x).removeAttribute("mandatory");
    document.getElementById(x).setAttribute("disabled", "");
  }

  // let parentDiv1 = document.getElementById('section4-1');
  // let parentDiv2 = document.getElementById('section4-2');
  // let parentDiv3 = document.getElementById('section4-3');
  // let parentDiv4 = document.getElementById('section4-4');
  // if (id == 'Sub_Type_RADIO1') {
  // 	parentDiv1.removeAttribute('hidden');
  // 	parentDiv2.removeAttribute('hidden');
  // 	parentDiv3.removeAttribute('hidden');
  // 	parentDiv4.removeAttribute('hidden');
  // 	document.getElementById('remarksID2').innerText = '4.2';
  // 	document.getElementById('remarksID4').innerText = '4.4';
  // 	document.getElementById('remarksID4_1').innerText = '4.4';
  // 	document.getElementById('remarksID3').innerText = '4.3';
  // } else {
  // 	parentDiv1.setAttribute('hidden', '');
  // 	parentDiv2.setAttribute('hidden', '');
  // 	parentDiv3.setAttribute('hidden', '');
  // 	parentDiv4.setAttribute('hidden', '');
  // 	document.getElementById('remarksID2').innerText = '4.1';
  // 	document.getElementById('remarksID4').innerText = '4.1';
  // 	document.getElementById('remarksID4_1').innerText = '4.1';
  // 	document.getElementById('remarksID3').innerText = '4.1';
  // }
}

function subType(el) {
  // disabledThis();
  let newRadio = document.getElementById("Sub_Type_RADIO1");
  let reRadio = document.getElementById("Sub_Type_RADIO2");
  let newRadio1 = document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10");
  let reRadio1 = document.getElementById("RAILSDP_FeeCompDeclFee_Resu10");
  let newRadio2 = document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10");
  let reRadio2 = document.getElementById("RAILSENG_FeeCompDeclFee_Resu10");
  let newRadio3 = document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10");
  let reRadio3 = document.getElementById("RAILNOA_FeeCompDeclFee_Resu10");
  let newRadio4 = document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10");
  let reRadio4 = document.getElementById("RAILSUND_FeeCompDeclFee_Resu10");
  let number = document.getElementById("Sub_Number");
  let newFields = [
    "RAILSDP_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSENG_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILNOA_FeeCompDeclFee_NewSubm_Amount10",
    "RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSUND_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10",
  ];
  let reTextBox = [
    "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",
    "RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",
    "RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",
    "RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10",
  ];
  let reRadioBtn = [
    "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10",
    "RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl10",
    "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10",
  ];

  if (el.id == "Sub_Type_RADIO1") {
    reRadio.checked = false;
    number.removeAttribute("mandatory");
    number.setAttribute("disabled", "");
    number.value = "";
    document.getElementById("subTypeLBl").innerHTML = "Submission No. ";
    let asterisks = document.querySelectorAll("[subpages]");
    for (let x of asterisks) {
      if (x.innerText.includes("*"))
        document.getElementById(x.id).innerText = document
          .getElementById(x.id)
          .innerText.slice(0, -1);
    }
  } else {
    newRadio.checked = false;
    number.setAttribute("mandatory", "");
    number.removeAttribute("disabled");
    document.getElementById("subTypeLBl").innerHTML = "Submission No. *";
  }

  let currentID = document.querySelector("[section]:not([hidden])").id;
  let samePages = ["3-1", "3-3", "3-4", "3-6"];
  for (let x of samePages) {
    if (currentID == x) {
      let fields = document.querySelectorAll("[page='" + x + "']");
      for (let y of fields) {
        if (el.id == "Sub_Type_RADIO1") {
          if (document.getElementById(y.id).innerText.includes(" *")) {
          } else {
            document.getElementById(y.id).innerText += " *";
          }
        } else {
          if (document.getElementById(y.id).innerText.includes(" *"))
            document.getElementById(y.id).innerText = document
              .getElementById(y.id)
              .innerText.slice(0, -2);
        }
      }
    } else {
      let fields = document.querySelectorAll("[page='" + x + "']");
      for (let y of fields) {
        if (el.id == "Sub_Type_RADIO1") {
          if (document.getElementById(y.id).innerText.includes(" *")) {
          } else {
            document.getElementById(y.id).innerText += " *";
          }
        } else {
          if (document.getElementById(y.id).innerText.includes(" *"))
            document.getElementById(y.id).innerText = document
              .getElementById(y.id)
              .innerText.slice(0, -2);
        }
      }
    }
  }

  if (el.id == "Sub_Type_RADIO1") {
    newRadio1.setAttribute("mandatory", "");
    newRadio1.setAttribute("checked", "");
    newRadio1.removeAttribute("disabled");
    reRadio1.checked = false;
    reRadio1.setAttribute("disabled", "");
    reRadio1.removeAttribute("mandatory");
    reRadio1.removeAttribute("checked");

    newRadio2.setAttribute("mandatory", "");
    newRadio2.setAttribute("checked", "");
    newRadio2.removeAttribute("disabled");
    reRadio2.checked = false;
    reRadio2.setAttribute("disabled", "");
    reRadio2.removeAttribute("mandatory");
    reRadio2.removeAttribute("checked");

    newRadio3.setAttribute("mandatory", "");
    newRadio3.setAttribute("checked", "");
    newRadio3.removeAttribute("disabled");
    reRadio3.checked = false;
    reRadio3.setAttribute("disabled", "");
    reRadio3.removeAttribute("mandatory");
    reRadio3.removeAttribute("checked");

    newRadio4.setAttribute("mandatory", "");
    newRadio4.setAttribute("checked", "");
    newRadio4.removeAttribute("disabled");
    reRadio4.checked = false;
    reRadio4.setAttribute("disabled", "");
    reRadio4.removeAttribute("mandatory");
    reRadio4.removeAttribute("checked");
  } else {
    reRadio1.setAttribute("mandatory", "");
    reRadio1.setAttribute("checked", "");
    reRadio1.removeAttribute("disabled");
    newRadio1.checked = false;
    newRadio1.setAttribute("disabled", "");
    newRadio1.removeAttribute("mandatory");
    newRadio1.removeAttribute("checked");

    reRadio2.setAttribute("mandatory", "");
    reRadio2.setAttribute("checked", "");
    reRadio2.removeAttribute("disabled");
    newRadio2.checked = false;
    newRadio2.setAttribute("disabled", "");
    newRadio2.removeAttribute("mandatory");
    reRadio2.removeAttribute("checked");

    reRadio3.setAttribute("mandatory", "");
    reRadio3.setAttribute("checked", "");
    reRadio3.removeAttribute("disabled");
    newRadio3.checked = false;
    newRadio3.setAttribute("disabled", "");
    newRadio3.removeAttribute("mandatory");
    reRadio3.removeAttribute("checked");

    reRadio4.setAttribute("mandatory", "");
    reRadio4.setAttribute("checked", "");
    reRadio4.removeAttribute("disabled");
    newRadio4.checked = false;
    newRadio4.setAttribute("disabled", "");
    newRadio4.removeAttribute("mandatory");
    reRadio4.removeAttribute("checked");
  }

  let newSubs = [
    "RAILSDP_FeeCompDeclFee_NewSubm10",
    "",
    "RAILSENG_FeeCompDeclFee_NewSubm10",
    "RAILNOA_FeeCompDeclFee_NewSubm10",
    "",
    "RAILSUND_FeeCompDeclFee_NewSubm10",
    "",
    "",
    "",
  ];
  let reSubs = [
    "RAILSDP_FeeCompDeclFee_Resu10",
    "",
    "RAILSENG_FeeCompDeclFee_Resu10",
    "RAILNOA_FeeCompDeclFee_Resu10",
    "",
    "RAILSUND_FeeCompDeclFee_Resu10",
    "",
    "",
    "",
  ];

  if (el.id == "Sub_Type_RADIO1") {
    for (let x of newSubs) {
      if (x != "") {
        document.getElementById(x).checked = true;
        document.getElementById(x).removeAttribute("mandatory");
        document.getElementById(x).removeAttribute("checked");
      }
    }
    for (let x of reSubs) {
      if (x != "") {
        document.getElementById(x).checked = false;
        document.getElementById(x).removeAttribute("mandatory");
        document.getElementById(x).removeAttribute("checked");
      }
    }
  } else {
    for (let x of newSubs) {
      if (x != "") {
        document.getElementById(x).checked = false;
        document.getElementById(x).removeAttribute("mandatory");
        document.getElementById(x).removeAttribute("checked");
      }
    }
    for (let x of reSubs) {
      if (x != "") {
        document.getElementById(x).checked = true;
        document.getElementById(x).removeAttribute("mandatory");
        document.getElementById(x).removeAttribute("checked");
      }
    }
  }

  if (el.id == "Sub_Type_RADIO1") {
    for (let x of newFields) {
      document.getElementById(x).setAttribute("mandatory", "");
      document.getElementById(x).removeAttribute("disabled");
    }
    for (let x of reRadioBtn) {
      document.getElementById(x).setAttribute("disabled", "");
      document.getElementById(x).checked = false;
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).removeAttribute("checked");
    }
    for (let x of reTextBox) {
      document.getElementById(x).setAttribute("disabled", "");
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
    }
  } else {
    for (let x of newFields) {
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
      document.getElementById(x).value = "";
    }
    for (let x of reRadioBtn) {
      document.getElementById(x).removeAttribute("disabled");
    }
  }
  if (document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value;
  }

  document
    .getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";
  document
    .getElementById("RAILSENG_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";
  document
    .getElementById("RAILNOA_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";
  document
    .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";

  hideMandas();
}

function activatePage3(position, el) {
  let pageIDs = ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "3-9"];
  let subPagesCounter = {
    "3-1_m": 1,
    "3-1_c": 3,
    "3-2_m": 5,
    "3-2_c": 7,
    "3-3_m": 9,
    "3-3_c": 11,
    "3-4_m": 13,
    "3-4_c": 15,
    "3-5_m": 17,
    "3-5_c": 19,
    "3-6_m": 21,
    "3-6_c": 23,
    "3-7_m": 25,
    "3-7_c": 27,
    "3-8_m": 29,
    "3-8_c": 31,
    "3-9_m": 33,
    "3-9_c": 35,
  };
  let dontManda = [
    "RAILSDP_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSENG_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILNOA_FeeCompDeclFee_NewSubm_Amount10",
    "RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10",
    "RAILSUND_FeeCompDeclFee_NewSubm_Amount10",
    "RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10",
  ];
  let dontCheck = [
    "RAILSDP_FeeCompDeclFee_NewSubm10",
    "RAILSDP_FeeCompDeclFee_Resu10",
    "RAILSENG_FeeCompDeclFee_NewSubm10",
    "RAILSENG_FeeCompDeclFee_Resu10",
    "RAILNOA_FeeCompDeclFee_NewSubm10",
    "RAILNOA_FeeCompDeclFee_Resu10",
    "RAILSUND_FeeCompDeclFee_NewSubm10",
    "RAILSUND_FeeCompDeclFee_Resu10",
  ];
  let dontCheckSection = [
    "RAILSBP_CHECK1",
    "RAILSBP_CHECK2",
    "RAILSENG_CHECK1",
    "RAILSENG_CHECK2",
    "RAILNOA_CHECK1",
    "RAILNOA_CHECK2",
    "RAILNOA_CHECK3",
    "RAILSUND_CHECK1",
    "RAILSUND_CHECK2",
    "RAILSUND_CHECK3",
    "RAILSCOS_CHECK1",
    "RAILSCOS_CHECK2",
    "RAILSCSP_CHECK1",
    "RAILSCSP_CHECK2",
    "RAILSIMR_CHECK1",
    "RAILSIMR_CHECK2",
  ];

  let mandaCheckBox = [
    "RAILSLDP_Decl_Check10",
    "RAILSLDP_Decl_Check20",
    "RAILSLDP_Decl_Check30",
    "RAILSLDP_Decl_Check40",
    "RAILSLDP_Decl_Check70"
  ]

  let removeMandacheckBox = [
    "RAILSBP_CHECK1",
    "RAILSBP_CHECK2",
    "RAILSBP_CHECK3"
  ]

  for (let x of dontCheckSection) {
    document.getElementById(x).checked = false;
    document.getElementById(x).setAttribute("mandatory", "");
    document.getElementById(x).setAttribute("checked", "");
  }

  let page = pageIDs[position];
  let activatePageMandatory = subPages[subPagesCounter[page + "_m"]];
  let activatePageChecked = subPages[subPagesCounter[page + "_c"]];

  // hide/show toggle of sections in page 3 with validating mandatory/checked fields
  for (let i = 0; i < pageIDs.length; i++) {
    if (pageIDs[i] == page) {
      document.getElementById(pageIDs[i]).removeAttribute("hidden");
      // if (activatePageMandatory.length != 0) {
      // 	for (let x of activatePageMandatory) {
      // 		if (dontManda.includes(x.id)) {
      // 			document.getElementById(x.id).value = "";
      // 		} else {
      // 			document.getElementById(x.id).setAttribute("mandatory", "");
      // 		}
      // 	}
      // }
      if (activatePageChecked.length != 0) {
        for (let x of activatePageChecked) {
          if (dontCheck.includes(x.id)) {
            document.getElementById(x.id).checked = false;
            document.getElementById(x.id).removeAttribute("mandatory");
            document.getElementById(x.id).removeAttribute("checked");
          } else {
            document.getElementById(x.id).setAttribute("checked", "");
            document.getElementById(x.id).checked = false;
          }

          if (x.hasAttribute("name")) {
            if (x.getAttribute("name") == "331-lodgeRadio" || x.getAttribute("name") == "331-lodge") {
              x.removeAttribute("checked")
              x.checked = false;
            }
          }

          if (mandaCheckBox.includes(x.id)) {
            document.getElementById(x.id).checked = false;
            document.getElementById(x.id).removeAttribute("mandatory");
            document.getElementById(x.id).removeAttribute("checked");
          }
        }
      }
      let enabledTextbox = document
        .getElementById(pageIDs[i])
        .querySelectorAll("[enabled]");
      for (let x of enabledTextbox) {
        document.getElementById(x.id).removeAttribute("disabled");
      }
    } else {
      document.getElementById(pageIDs[i]).setAttribute("hidden", "");
    }
  }

  delete subPagesCounter[page + "_m"];
  delete subPagesCounter[page + "_c"];

  // removing mandatory/checked fields attribute when section is hidden
  let pagesValues = Object.values(subPagesCounter);
  let counter = 0;
  let mandaList = [];
  let checkList = [];
  for (let x of pagesValues) {
    if (counter % 2 == 0 || (counter == 0 && counter != 1)) {
      mandaList.push(x);
    } else {
      checkList.push(x);
    }
    counter++;
  }
  for (let y of mandaList) {
    let currentPage = subPages[y];
    for (let z of currentPage) {
      z.removeAttribute("mandatory");
      if (z.hasAttribute("checked")) z.removeAttribute("checked");
    }
  }
  for (let a of checkList) {
    let currentPage = subPages[a];
    for (let b of currentPage) {
      b.removeAttribute("checked");
      if (b.hasAttribute("mandatory")) b.removeAttribute("mandatory");
    }
  }
  // setting default value which is '' of textbox
  let textboxCounter = {
    "3-1": 0,
    "3-2": 1,
    "3-3": 2,
    "3-4": 3,
    "3-5": 4,
    "3-6": 5,
    "3-7": 6,
    "3-8": 7,
    "3-9": 8,
  };
  let cloneTextboxes = [...textboxes];

  delete cloneTextboxes[textboxCounter[page]];

  for (let x of cloneTextboxes) {
    if (x) {
      let currentTextBoxPage = cloneTextboxes[textboxCounter[x[0]]][1];
      let currentVals = {};
      for (let a of currentTextBoxPage) {
        a.value = "";
        a.setAttribute("disabled", "");
      }
    }
  }
  // setting default value which is '0' of textbox
  let defaultList = {};
  let defaultKeys = [];
  for (i = 0; i < defaultVals.length; i++) {
    defaultKeys.push(defaultVals[i][0]);
  }
  for (i = 0; i < defaultVals.length; i++) {
    defaultList[defaultVals[i][0]] = defaultVals[i][1];
  }
  if (defaultKeys.includes(page)) {
    let currentDefaults = defaultList[page];
    for (i = 0; i < currentDefaults.length; i++) {
      currentDefaults[i].value = "0";
    }
  }
  // setting default value of checkbox
  for (let x of tickedCheckAll[0]) {
    if (checkedTick.includes(x.id)) {
      x.checked = true;
    } else {
      x.checked = false;
    }
  }
  // setting default value of radio
  for (let y of tickedRadioAll[0]) {
    if (checkedTick.includes(y.id)) {
      y.checked = true;
    } else {
      y.checked = false;
    }
  }

  if (el) {
    if (el.hasAttribute("newID")) {
      if (
        ["ApplType_LodgDevProp", "ApplType_LodgBuilProp_RailProt"].includes(
          el.getAttribute("newID")
        )
      ) {
        let div = document.getElementById("3-2");
        div.querySelector("h2").setAttribute("hidden", "");
        div.querySelector("div:not([id])").setAttribute("hidden", "");
        div.querySelector("div[id='331']").removeAttribute("hidden");
        [...div.querySelector("div[id='331']").querySelectorAll("[dont]")].map(
          (el) => {
            el.removeAttribute("disabled");
            el.setAttribute("mandatory", "");
          }
        );
        [
          ...div
            .querySelector("div[id='331']")
            .querySelectorAll("input[type='radio'], cn2-checkbox"),
        ].map((el) => {
          el.checked = false;
          if (el.getAttribute("name") == "331-lodgeRadio" || el.getAttribute("name") == "331-lodge") {
            el.setAttribute("checked", "");
          }
        });
        [
          ...div
            .querySelector("div[id='331']")
            .querySelectorAll("cn2-textbox, cn2-select, cn2-textarea"),
        ].map((el) => {
        });

        for (let checkBox of mandaCheckBox) {
          document.getElementById(checkBox).setAttribute("checked", "")
        }

        for (let checkBox2 of removeMandacheckBox) {
          document.getElementById(checkBox2).removeAttribute("mandatory");
          document.getElementById(checkBox2).removeAttribute("checked");
        }

        if (el.getAttribute("newID") == "ApplType_LodgBuilProp_RailProt" && el.getAttribute("newID") == "ApplType_LodgDevProp") {
          document.getElementById("RAILSLDP_Decl_ApprGFA10").setAttribute("mandatory", "")
          document.getElementById("RAILSLDP_Decl_ApprDist10").setAttribute("mandatory", "")
          document.getElementById("RAILSLDP_Decl_PurcDate").setAttribute("mandatory", "")
          document.getElementById("RAILSLDP_Decl_ReceNo").setAttribute("mandatory", "")
          document.getElementById("RAILSLDP_Decl_ApprGFA10").value = "";
          document.getElementById("RAILSLDP_Decl_ApprDist10").value = "";
          document.getElementById("RAILSLDP_Decl_PurcDate").value = "";
          document.getElementById("RAILSLDP_Decl_ReceNo").value = "";
        }
      }
    } else {
      if (el.id == "ApplType_RLBldgPlan") {
        let div = document.getElementById("3-2");
        div.querySelector("h2").removeAttribute("hidden");
        div.querySelector("div:not([id])").removeAttribute("hidden");
        div.querySelector("div[id='331']").setAttribute("hidden", "");
      }
    }
  }

  subType(document.querySelector('input[name="subType"]:checked'));
}

function appTypeLabel331(el) {
  let label = document.querySelector("[label331]");
  let rad3 = document.querySelector(`[newid="ApplType_LodgDevProp"]`);
  let rad4 = document.querySelector(`[newid="ApplType_LodgBuilProp_RailProt"]`);

  if (rad3.checked) {
    label.innerHTML = "Lodgement of Development Proposal in Railway Protection Zone";
  } else if (rad4.checked) {
    label.innerHTML = "Lodgement of Building Proposal in Railway Protection Zone";
  }
}

function appTypeRadio(el) {
  let counter = 0;
  let position = 0;
  let radios = [
    "ApplType_RLDeveCntrl",
    "ApplType_RLBldgPlan",
    "ApplType_RLEngWorks",
    "ApplType_RLExtOfNOA",
    "ApplType_RLCertStaComp",
    "ApplType_RLCrane",
    "ApplType_StruInspCert20",
    "ApplType_RLSubofCert",
    "ApplType_RLSubofIns",
  ];
  resetModValidation();
  resetValidationPage10();
  for (let x of radios) {
    if (x == el.id) position = counter;
    counter++;
  }

  let appointfields = document.querySelectorAll(".appointfields");
  for (let i = 0; i < appointfields.length; i++) {
    if (i != 0) {
      let elements = appointfields[i].querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );
      for (let element of elements) delete jsonData[element.id];
      appointfields[i].parentNode.removeChild(appointfields[i]);
    }
  }
  document.getElementById("delete1AP").setAttribute("disabled", "");

  subType(document.querySelector('input[name="subType"]:checked'));
  let checkBoxfee1 = document.getElementById("RAILSDP_sideCheck");
  let checkBoxfee2 = document.getElementById("RAILSENG_sideCheck");
  let checkBoxfee3 = document.getElementById("RAILNOA_sideCheck");
  let checkBoxfee4 = document.getElementById("RAILSUND_sideCheck");

  let fee31 = document.getElementById("fee3-1");
  let fee33 = document.getElementById("fee3-3");
  let fee34 = document.getElementById("fee3-4");
  let fee36 = document.getElementById("fee3-6");

  appTypeLabel331(el)
  feepage = document.querySelector("[target='page4']");
  fee31.setAttribute("hidden", "");
  fee33.setAttribute("hidden", "");
  fee34.setAttribute("hidden", "");
  fee36.setAttribute("hidden", "");
  feepage.setAttribute("hidden", "");
  reset31(false);
  reset33(false);
  reset44(false);
  reset66(false);

  for (let a of document.querySelectorAll("[qpName]")) {
    a.value = ""
  }

  for (let a of document.querySelectorAll("[qpRegNo]")) {
    a.value = ""
  }

  document.getElementById("Member_Member_Name_QPTC10").value = ""
  document.getElementById("Member_Member_Name_QPTC20").value = ""

  let div = document.getElementById("page3");
  let elements = div.querySelectorAll("cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox")

  for (let el of elements) {
    if (el.hasAttribute("mandatory")) {
      el.removeAttribute("mandatory")

    }
    if (el.hasAttribute("checked")) {
      el.removeAttribute("checked")
    }
  }

  let div2 = document.getElementById("page4");
  let elementFee = div2.querySelectorAll("cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox")

  for (let el2 of elementFee) {
    if (el2.hasAttribute("mandatory")) {
      el2.removeAttribute("mandatory")
    }
    if (el2.hasAttribute("checked")) {
      el2.removeAttribute("checked")
    }
  }

  activatePage3(position, el);
  document.querySelector("[switch-id='StatBoar_Yes10']").checked = false

  switch (el.id) {
    case "ApplType_RLDeveCntrl":
      reset31(true);
      fee31.removeAttribute("hidden");
      checkBoxfee1.checked = true;
      activateFee(
        checkBoxfee1,
        [
          RAILSDP_FeeCompDeclFee_Type1Deve_Qty10,
          RAILSDP_FeeCompDeclFee_Type2Deve_Qty10,
          RAILSDP_FeeCompDeclFee_Type3Deve_Qty10,
          RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10,
        ],
        [
          RAILSDP_FeeCompDeclFee_Type1Deve_CompFees10,
          RAILSDP_FeeCompDeclFee_Type2Deve_CompFees10,
          RAILSDP_FeeCompDeclFee_Type3Deve_CompFees10,
          RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10,
        ],
        "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
      );
      break;
    case "ApplType_RLEngWorks":
      reset33(true);
      fee33.removeAttribute("hidden");
      checkBoxfee2.checked = true;
      activateFee(
        checkBoxfee2,
        [
          RAILSENG_FeeCompDeclFee_DevePlan_Qty10,
          RAILSENG_FeeCompDeclFee_BldgPlan_Qty10,
        ],
        [
          RAILSENG_FeeCompDeclFee_DevePlan_CompFees10,
          RAILSENG_FeeCompDeclFee_BldgPlan_CompFees10,
        ],
        "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
      );
      break;
    case "ApplType_RLExtOfNOA":
      reset44(true);
      fee34.removeAttribute("hidden");
      checkBoxfee3.checked = true;
      activateFee(
        checkBoxfee3,
        [
          RAILNOA_FeeCompDeclFee_DevePlan_Qty10,
          RAILNOA_FeeCompDeclFee_BldgPlan_Qty10,
        ],
        [
          RAILNOA_FeeCompDeclFee_DevePlan_CompFees10,
          RAILNOA_FeeCompDeclFee_BldgPlan_CompFees10,
        ],
        "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
      );
      break;
    case "ApplType_RLCrane":
      reset66(true);
      fee36.removeAttribute("hidden");
      checkBoxfee4.checked = true;
      activateFee(
        checkBoxfee4,
        [RAILSUND_FeeCompDeclFee_DevePlan_Qty10],
        [RAILSUND_FeeCompDeclFee_DevePlan_CompFees10],
        "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
      );
      break;
    case "ApplType_RLBldgPlan":
      activatePage3(position, el);
      break;
    case "ApplType_RLCertStaComp":
      document.getElementById("RAILSENG_Drop10").setAttribute("mandatory", "")
      break;
    case "ApplType_RLSubofCert":
      document.getElementById("RAILSCSP_AppModiNo10").setAttribute("mandatory", "")
      break;
    default:
      reset31(false);
      reset33(false);
      reset44(false);
      reset66(false);
      break;
  }
}

function devSubType(el) {
  let InstutionalField = document.getElementById("FIELD1");
  let CivilEngWorkField = document.getElementById("FIELD2");
  let otherField = document.getElementById("FIELD3");
  let devSubType = document.querySelectorAll("[dev-sub-type]");
  let c1 = document.getElementById("DeveSubType_CHECK3");
  let c2 = document.getElementById("DeveSubType_CHECK16");
  let c3 = document.getElementById("DeveSubType_CHECK17");

  if (el.checked) {
    for (let a of devSubType) {
      if (a.id != el.id) a.checked = false;
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
    }
  } else {
    for (let a of devSubType) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
    }
  }


  // Institutional
  if (c1.checked) {
    InstutionalField.removeAttribute("hidden");
    InstutionalField.setAttribute("mandatory", "");
  } else {
    InstutionalField.setAttribute("hidden", "");
    InstutionalField.removeAttribute("mandatory");
    InstutionalField.value = "";
  }
  // Civil Engineering Works
  if (c2.checked) {
    CivilEngWorkField.removeAttribute("hidden");
    CivilEngWorkField.setAttribute("mandatory", "");
  } else {
    CivilEngWorkField.setAttribute("hidden", "");
    CivilEngWorkField.removeAttribute("mandatory");
    CivilEngWorkField.value = "";
  }
  //  Others
  if (c3.checked) {
    otherField.removeAttribute("hidden");
    otherField.setAttribute("mandatory", "");
  } else {
    otherField.setAttribute("hidden", "");
    otherField.removeAttribute("mandatory");
    otherField.value = "";
  }
}

function toggleDopdown(status) {
  let dropdown = document.getElementById("RAILSDP_POPUP1");
  let textbox = document.getElementById("RAILSDP_FIELD8");
  if (status == "yes") {
    dropdown.removeAttribute("disabled");
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"
    ).value = "0";
    document
      .getElementById("RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10")
      .setAttribute("disabled", "");
    textbox.setAttribute("disabled", "");
  } else {
    dropdown.value = "";
    dropdown.setAttribute("disabled", "");

    document.getElementById(
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10"
    ).value = "0";
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"
    ).value = "0";
    document
      .getElementById("RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10")
      .removeAttribute("disabled");
    document.getElementById("RAILSDP_FIELD8").value = "";
    document.getElementById("RAILSDP_FIELD8").setAttribute("disabled", "");
  }

  let data = {
    value: 0,
  };
  computeFee(
    data,
    "RAILSDP_FeeCompDeclFee_TotaFeePaya10",
    "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
    "10500",
    "$"
  );

  // computeFee(
  // 	"",
  // 	"RAILSDP_FeeCompDeclFee_TotaFeePaya10",
  // 	"RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
  // 	"10500",
  // 	"$"
  // );
}

function onTick(el, plus, minus, status) {
  let newRadio = document.getElementById(plus);
  let reRadio = document.getElementById(minus);

  if (newRadio.id == "RAILSDP_RADIO1" && reRadio.id == "RAILSDP_RADIO2") {
    if (el.id == "RAILSDP_RADIO1") {
      reRadio.checked = false;
    } else {
      newRadio.checked = false;
    }

    toggleDopdown(status);
  } else if (
    newRadio.id == "RAILSENG_RADIO1_1" &&
    reRadio.id == "RAILSENG_RADIO2_1"
  ) {
    if (el.id == "RAILSENG_RADIO2_1") {
      let radios = ["RAILSENG_RADIO3", "RAILSENG_RADIO4", "RAILSENG_CHECK3"];
      let fields = [
        "RAILSENG_FIELD1",
        "RAILSENG_FIELD2",
        "RAILSENG_FIELD5",
        "RAILSENG_FIELD3",
        "RAILSENG_POPUP1",
        "MemberRole_Professional_No_QPTC50",
        "RAILSENG_POPUP2",
        "RAILSENG_FIELD3_1",
      ];

      for (let y of radios) {
        document.getElementById(y).checked = false;
        document.getElementById(y).setAttribute("disabled", "");
        document.getElementById(y).removeAttribute("mandatory");
      }
      for (let x of fields) {
        document.getElementById(x).value = "";
        document.getElementById(x).setAttribute("disabled", "");
        document.getElementById(x).removeAttribute("mandatory");
        document.getElementById(x).removeAttribute("data-invalid");
        document.getElementById(x).removeAttribute("data-invalid-message");
      }

      document.getElementById("MemberRole_Professional_No_QPTC50_1").value = "";
      document.getElementById("othersField").setAttribute("hidden", "");

      document.getElementById("RAILSENG_RADIO4_LABEL").innerText =
        "Modification No. :echanical and Electrical Related Modification Request :";
      document.getElementById("RAILSENG_RADIO3_LABEL").innerText =
        "Architectural and Structural Related Modification Request :";
    } else {
      let enabled = [
        "RAILSENG_RADIO3",
        "RAILSENG_RADIO4",
        "RAILSENG_POPUP1",
        "MemberRole_Professional_No_QPTC50",
        "RAILSENG_FIELD5",
        "RAILSENG_POPUP2",
        "RAILSENG_FIELD3",
        "RAILSENG_CHECK3",
        "RAILSENG_FIELD3_1",
      ];
      for (let x of enabled) {
        document.getElementById(x).removeAttribute("disabled");
      }
    }
  }
}

function toggleText(el) {
  let textbox = document.getElementById("RAILSDP_FIELD8");
  if (el.value == "Others") {
    textbox.removeAttribute("disabled");
    textbox.value = "";
  } else {
    textbox.value = 0;
    textbox.setAttribute("disabled", "");
  }
  let data = {
    value:
      document.getElementById(el.id).value != "Others"
        ? document.getElementById(el.id).value
        : 0,
  };
  computeFee(
    data,
    "RAILSDP_FeeCompDeclFee_TotaFeePaya10",
    "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
    "10500",
    "$"
  );
}

function triggerComputeFee(el) {
  let rawEventParams = el
    .getAttribute("event-input")
    .replace("computeFee(this, ", "")
    .slice(0, -2)
    .split(", ");
  for (let i = 0; i < rawEventParams.length; i++) {
    rawEventParams[i] = rawEventParams[i].replace(/'/g, "");
  }
  computeFee(
    el,
    rawEventParams[0],
    rawEventParams[1],
    rawEventParams[2],
    rawEventParams[3]
  );
}

function typeOfDev(el) {
  let types = [
    "RAILSDP_Type1A",
    "RAILSDP_Type1B",
    "RAILSDP_Type1C",
    "RAILSDP_Type1D",
    "RAILSDP_Type1E",
    "RAILSDP_Type1F",
    "RAILSDP_Type2A",
    "RAILSDP_Type2B",
    "RAILSDP_Type2C",
    "RAILSDP_Type3A",
    "RAILSDP_Type3B",
  ];
  let type1 = document.getElementById("RAILSDP_FeeCompDeclFee_Type1Deve_Qty10");
  let type2 = document.getElementById("RAILSDP_FeeCompDeclFee_Type2Deve_Qty10");
  let type3 = document.getElementById("RAILSDP_FeeCompDeclFee_Type3Deve_Qty10");
  let totals = [
    "RAILSDP_FeeCompDeclFee_Type1Deve_CompFees10",
    "RAILSDP_FeeCompDeclFee_Type2Deve_CompFees10",
    "RAILSDP_FeeCompDeclFee_Type3Deve_CompFees10",
  ];

  for (let x of types) {
    if (x != el.id) {
      document.getElementById(x).checked = false;
    } else {
      document.getElementById(x).checked = true;
    }
  }

  for (let x of totals) {
    document.getElementById(x).value = "0";
  }

  if (document.getElementById("RAILSDP_sideCheck").checked) {
    switch (el.getAttribute("data-devType")) {
      case "1":
        type1.value = "1";
        type1.setAttribute("disabled", "");
        triggerComputeFee(type1);
        type2.value = "0";
        type2.setAttribute("disabled", "");
        type3.value = "0";
        type3.setAttribute("disabled", "");
        break;
      case "2":
        type2.value = "1";
        type2.setAttribute("disabled", "");
        triggerComputeFee(type2);
        type1.value = "0";
        type1.setAttribute("disabled", "");
        type3.value = "0";
        type3.setAttribute("disabled", "");
        break;
      case "3":
        type3.value = "1";
        type3.setAttribute("disabled", "");
        triggerComputeFee(type3);
        type2.value = "0";
        type2.setAttribute("disabled", "");
        type1.value = "0";
        type1.setAttribute("disabled", "");
        break;
      default:
        break;
    }
  }
  computeFee("", "RAILSDP_FeeCompDeclFee_TotaFeePaya10", "", "", "$");
}

function amendDevPlan(el) {
  let types = ["RAILSENG_RADIO1", "RAILSENG_RADIO2"];
  let type1 = document.getElementById("RAILSENG_FeeCompDeclFee_DevePlan_Qty10");
  let type2 = document.getElementById("RAILSENG_FeeCompDeclFee_BldgPlan_Qty10");
  let totals = [
    "RAILSENG_FeeCompDeclFee_DevePlan_CompFees10",
    "RAILSENG_FeeCompDeclFee_BldgPlan_CompFees10",
  ];

  for (let x of types) {
    if (x != el.id) {
      document.getElementById(x).checked = false;
    } else {
      document.getElementById(x).checked = true;
    }
  }

  for (let x of totals) {
    document.getElementById(x).value = "0";
  }

  if (document.getElementById("RAILSENG_sideCheck").checked) {
    switch (el.getAttribute("data-devType")) {
      case "1":
        type1.value = "1";
        type1.setAttribute("disabled", "");
        triggerComputeFee(type1);
        type2.value = "0";
        type2.setAttribute("disabled", "");
        break;
      case "2":
        type2.value = "1";
        type2.setAttribute("disabled", "");
        triggerComputeFee(type2);
        type1.value = "0";
        type1.setAttribute("disabled", "");
        break;
      default:
        break;
    }
  }
  computeFee("", "RAILSENG_FeeCompDeclFee_TotaFeePaya10", "", "", "$");
}

function typeOfApp(el) {
  let types = ["RAILNOA_RADIO1", "RAILNOA_RADIO2"];
  let type1 = document.getElementById("RAILNOA_FeeCompDeclFee_DevePlan_Qty10");
  let type2 = document.getElementById("RAILNOA_FeeCompDeclFee_BldgPlan_Qty10");
  let totals = [
    "RAILNOA_FeeCompDeclFee_DevePlan_CompFees10",
    "RAILNOA_FeeCompDeclFee_BldgPlan_CompFees10",
  ];

  for (let x of types) {
    if (x != el.id) {
      document.getElementById(x).checked = false;
    } else {
      document.getElementById(x).checked = true;
    }
  }

  for (let x of totals) {
    document.getElementById(x).value = "0";
  }

  if (document.getElementById("RAILNOA_sideCheck").checked) {
    switch (el.getAttribute("data-devType")) {
      case "1":
        type1.value = "1";
        type1.setAttribute("disabled", "");
        triggerComputeFee(type1);
        type2.value = "0";
        type2.setAttribute("disabled", "");
        break;
      case "2":
        type2.value = "1";
        type2.setAttribute("disabled", "");
        triggerComputeFee(type2);
        type1.value = "0";
        type1.setAttribute("disabled", "");
        break;
      default:
        break;
    }
  }
  computeFee("", "RAILNOA_FeeCompDeclFee_TotaFeePaya10", "", "", "$");
}

function newSubAmntRec(el, amount, receipt, radios, textboxes) {
  let list = [amount, receipt];

  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
    for (let x of list) {
      document.getElementById(x).removeAttribute("disabled");
      document.getElementById(x).setAttribute("mandatory", "");
    }

    for (let x of radios) {
      document.getElementById(x).checked = false;
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).removeAttribute("checked");
      document.getElementById(x).setAttribute("disabled", "");
    }

    for (let x of textboxes) {
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
    }
  } else {
    for (let x of list) {
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
    }
  }

  document
    .getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";
}

function RAILSDP_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSDP_FIELD1"),
    document.getElementById("MemberRole_Professional_No_QPTC10"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSDP_CHECK2_change(element) {
  let textboxes = [
    document.getElementById("RAILSDP_FIELD3"),
    document.getElementById("RAILSDP_FIELD4"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSENG_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSENG_FIELD3"),
    document.getElementById("MemberRole_Professional_No_QPTC50"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILNOA_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILNOA_FIELD4"),
    document.getElementById("MemberRole_Professional_No_QPTC70"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSUND_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSUND_FIELD4"),
    document.getElementById("MemberRole_Professional_No_QPTC80"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSCOS_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSCOS_FIELD1"),
    document.getElementById("MemberRole_Professional_No_QPTC90"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSCSP_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSCSP_FIELD1"),
    document.getElementById("MemberRole_Professional_No_QPTC100"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSIMR_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSIMR_FIELD1"),
    document.getElementById("MemberRole_Professional_No_QPTC110"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function RAILSBP_CHECK1_change(element) {
  let textboxes = [
    document.getElementById("RAILSBP_FIELD1"),
    document.getElementById("MemberRole_Professional_No_QPTC20"),
  ];
  if (element.checked) {
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.value = "";
    }
  }
}

function reTopRadio(el, full, top, textboxes) {
  let list = [full, top];

  if (el.checked) {
    for (let x of list) {
      document.getElementById(x).removeAttribute("disabled");
    }

    for (let x of textboxes) {
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
    }
  } else {
    for (let x of list) {
      document.getElementById(x).checked = false;
      document.getElementById(x).setAttribute("disabled", "");
    }
  }
}

function enableFullPayment(el, textbox, topUp) {
  if (el.checked) {
    document.getElementById(textbox).removeAttribute("disabled");
    document.getElementById(textbox).setAttribute("mandatory", "");

    for (let x of topUp) {
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
    }
  } else {
    document.getElementById(textbox).value = "";
    document.getElementById(textbox).removeAttribute("mandatory");
    document.getElementById(textbox).setAttribute("disabled");
  }
}

function enableTopUp(el, amount, receipt, full) {
  let textbox = [amount, receipt];

  if (el.checked) {
    for (let x of textbox) {
      document.getElementById(x).removeAttribute("disabled");
      document.getElementById(x).setAttribute("mandatory", "");
    }
    document.getElementById(full).value = "";
    document.getElementById(full).removeAttribute("mandatory");
    document.getElementById(full).setAttribute("disabled", "");
  } else {
    for (let x of textbox) {
      document.getElementById(x).value = "";
      document.getElementById(x).removeAttribute("mandatory");
      document.getElementById(x).setAttribute("disabled", "");
    }
  }

  document
    .getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10")
    .setAttribute("disabled", "");
  document.getElementById(
    "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
  ).value = "0";
  document
    .getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10")
    .setAttribute("disabled", "");
  document.getElementById(
    "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
  ).value = "0";
  document
    .getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10")
    .setAttribute("disabled", "");
  document.getElementById(
    "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
  ).value = "0";
  document
    .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10")
    .setAttribute("disabled", "");
  document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";

  if (document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value;
  }
}

function computeFee(el, totalID, partnerID, multiplier, label) {
  let tempSum = 0;
  let total = document.getElementById(totalID);
  let add = ["RAILSUND_FeeCompDeclFee_DevePlan_CompFees10"];
  if (totalID == "RAILSDP_FeeCompDeclFee_TotaFeePaya10") {
    let add = [
      "RAILSDP_FeeCompDeclFee_Type1Deve_CompFees10",
      "RAILSDP_FeeCompDeclFee_Type2Deve_CompFees10",
      "RAILSDP_FeeCompDeclFee_Type3Deve_CompFees10",
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
    ];

    if (el != "") {
      if (partnerID == "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10") {
        let tempVal = "0";
        el.value == 0 ? (tempVal = "0") : (tempVal = el.value);
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"
        ).value = tempVal;
      }

      let partner = document.getElementById(partnerID);
      let amount = parseFloat(multiplier);
      //   let sum = label + " ";
      let sum = "";
      let input = 0;
      !parseFloat(el.value) ? "" : (input = el.value);

      let computation = input * amount;
      computation != 0 ? (sum += computation.toFixed(2)) : (sum += "0");
      partner.value = sum;
    } else {
      if (partnerID == "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10") {
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"
        ).value = "0";
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10"
        ).value = "0";
      }
    }
  } else if (totalID == "RAILSENG_FeeCompDeclFee_TotaFeePaya10") {
    let add = [
      "RAILSENG_FeeCompDeclFee_DevePlan_CompFees10",
      "RAILSENG_FeeCompDeclFee_BldgPlan_CompFees10",
    ];
    if (el != "") {
      let partner = document.getElementById(partnerID);
      let amount = parseFloat(multiplier);
      //   let sum = label + " ";
      let sum = "";
      let input = 0;
      !parseFloat(el.value) ? "" : (input = el.value);

      let computation = input * amount;
      computation != 0 ? (sum += computation.toFixed(2)) : (sum += "0");
      partner.value = sum;
    }
  } else if (totalID == "RAILNOA_FeeCompDeclFee_TotaFeePaya10") {
    let add = [
      "RAILNOA_FeeCompDeclFee_DevePlan_CompFees10",
      "RAILNOA_FeeCompDeclFee_BldgPlan_CompFees10",
    ];
    if (el != "") {
      let partner = document.getElementById(partnerID);
      let amount = parseFloat(multiplier);
      //   let sum = label + " ";
      let sum = "";
      let input = 0;
      !parseFloat(el.value) ? "" : (input = el.value);

      let computation = input * amount;
      computation != 0 ? (sum += computation.toFixed(2)) : (sum += "0");
      partner.value = sum;
    }
  } else if (totalID == "RAILSUND_FeeCompDeclFee_TotaFeePaya10") {
    if (el != "") {
      let partner = document.getElementById(partnerID);
      let amount = parseFloat(multiplier);
      //   let sum = label + " ";
      let sum = "";
      let input = 0;
      !parseFloat(el.value) ? "" : (input = el.value);

      let computation = input * amount;
      computation != 0 ? (sum += computation.toFixed(2)) : (sum += "0");
      partner.value = sum;
    }
  }
  for (let y of add) {
    tempSum += parseFloat(document.getElementById(y).value);
  }
  //   total.value = label + " " + tempSum.toFixed(2);
  tempSum.toFixed(2) != 0
    ? (total.value = tempSum.toFixed(2))
    : (total.value = "0");

  if (document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value = document.getElementById(
      "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  }

  if (document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10").checked) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
    ).value;
  } else if (
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10")
      .checked
  ) {
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
    ).value = document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ).value;
  }
}

function greaterThanFive(el) {
  if (parseInt(el.value)) {
    if (el.value < 6) {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute(
          "data-invalid-message",
          "Only accepts value more than five (5)"
        );
      computeFee(
        "",
        "RAILSDP_FeeCompDeclFee_TotaFeePaya10",
        "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
        "10500",
        "$"
      );
    } else {
      if (document.getElementById(el.id).hasAttribute("data-invalid")) {
        document.getElementById(el.id).removeAttribute("data-invalid");
      }
      if (document.getElementById(el.id).hasAttribute("data-invalid-message")) {
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
      computeFee(
        el,
        "RAILSDP_FeeCompDeclFee_TotaFeePaya10",
        "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
        "10500",
        "$"
      );
    }
  } else {
    if (document.getElementById(el.id).hasAttribute("data-invalid")) {
      document.getElementById(el.id).removeAttribute("data-invalid");
    }
    if (document.getElementById(el.id).hasAttribute("data-invalid-message")) {
      document.getElementById(el.id).removeAttribute("data-invalid-message");
    }
    computeFee(
      el,
      "RAILSDP_FeeCompDeclFee_TotaFeePaya10",
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10",
      "10500",
      "$"
    );
  }
}

function modNo(el) {
  if (el.id == "RAILSENG_RADIO4") {
    document.getElementById("RAILSENG_FIELD1").value = "";
    document.getElementById("RAILSENG_FIELD1").setAttribute("disabled", "");
    document.getElementById("RAILSENG_FIELD1").removeAttribute("mandatory");
    document.getElementById("RAILSENG_FIELD1").removeAttribute("data-invalid");
    document.getElementById("RAILSENG_FIELD1").removeAttribute("data-invalid-message");

    document.getElementById("RAILSENG_FIELD2").removeAttribute("disabled");
    document.getElementById("RAILSENG_FIELD2").setAttribute("mandatory", "");

    document.getElementById("RAILSENG_RADIO3_LABEL").innerHTML =
      "Architectural and Structural Related<br>Modification Request :";
    document.getElementById("RAILSENG_RADIO4_LABEL").innerHTML =
      "Mechanical and Electrical Related<br>Modification Request : *";
  } else {
    document.getElementById("RAILSENG_FIELD2").value = "";
    document.getElementById("RAILSENG_FIELD2").setAttribute("disabled", "");
    document.getElementById("RAILSENG_FIELD2").removeAttribute("mandatory");
    document.getElementById("RAILSENG_FIELD2").removeAttribute("data-invalid");
    document.getElementById("RAILSENG_FIELD2").removeAttribute("data-invalid-message");

    document.getElementById("RAILSENG_FIELD1").removeAttribute("disabled");
    document.getElementById("RAILSENG_FIELD1").setAttribute("mandatory", "");

    document.getElementById("RAILSENG_RADIO4_LABEL").innerHTML =
      "Mechanical and Electrical Related<br>Modification Request :";
    document.getElementById("RAILSENG_RADIO3_LABEL").innerHTML =
      "Architectural and Structural Related<br>Modification Request : *";
  }
}

function hideOthers(value, isNew) {
  if (!isNew) {
    if (value == "Others") {
      document.getElementById("othersField").removeAttribute("hidden");
      document.getElementById("MemberRole_Professional_No_QPTC50_1").removeAttribute("disabled");
    } else {
      document.getElementById("MemberRole_Professional_No_QPTC50_1").value = "";
      document.getElementById("othersField").setAttribute("hidden", "");
    }
  } else {
    if (value.includes("Others")) {
      document.getElementById(isNew).removeAttribute("hidden");
      document.getElementById(isNew).removeAttribute("disabled");
    } else {
      document.getElementById(isNew).value = "";
      document.getElementById(isNew).setAttribute("hidden", "");
    }
  }
}

function hideOthers2(value, isNew) {
  if (!isNew) {
    if (value == "Others") {
      document.getElementById("RAILSENG_other10").removeAttribute("hidden");
      document.getElementById("RAILSENG_other10").setAttribute("mandatory", "");
    } else {
      document.getElementById("MemberRole_Professional_No_QPTC50_1").value = "";
      document.getElementById("RAILSENG_other10").setAttribute("hidden", "");
      document.getElementById("RAILSENG_other10").removeAttribute("mandatory");
    }
  } else {
    if (value.includes("Others")) {
      document.getElementById("RAILSENG_other10").removeAttribute("hidden");
      document.getElementById("RAILSENG_other10").setAttribute("mandatory", "");
    } else {
      document.getElementById("RAILSENG_other10").value = "";
      document.getElementById("RAILSENG_other10").setAttribute("hidden", "");
      document.getElementById("RAILSENG_other10").removeAttribute("mandatory");
    }
  }
}

function toggleCheck(el) {
  if (el.checked) {
    document.getElementById(el.id).removeAttribute("checked");
    document.getElementById(el.id).removeAttribute("mandatory");
  } else {
    document.getElementById(el.id).setAttribute("checked", "");
    document.getElementById(el.id).setAttribute("mandatory", "");
  }
}

function onBlurZero(el) {
  if (!el.value) {
    document.getElementById(el.id).value = "0";
  }
}

function changeAsterisk(el, status, fields1, fields2) {
  if (status == "full") {
    if (
      document
        .querySelector("[full='" + fields1[0] + "']")
        .innerHTML.includes(" *")
    ) {
    } else {
      document.querySelector("[full='" + fields1[0] + "']").innerHTML += " *";
    }
    if (document.getElementById(fields2[0]).innerHTML.includes(" *"))
      document.getElementById(fields2[0]).innerHTML = document
        .getElementById(fields2[0])
        .innerHTML.slice(0, -2);
    if (document.getElementById(fields2[1]).innerHTML.includes(" *"))
      document.getElementById(fields2[1]).innerHTML = document
        .getElementById(fields2[1])
        .innerHTML.slice(0, -2);
  } else {
    if (
      document
        .querySelector("[full='" + fields1[0] + "']")
        .innerHTML.includes(" *")
    );
    document.querySelector(
      "[full='" + fields1[0] + "']"
    ).innerHTML = document
      .querySelector("[full='" + fields1[0] + "']")
      .innerHTML.slice(0, -2);
    if (document.getElementById(fields2[0]).innerHTML.includes(" *")) {
    } else {
      document.getElementById(fields2[0]).innerHTML += " *";
    }
    if (document.getElementById(fields2[1]).innerHTML.includes(" *")) {
    } else {
      document.getElementById(fields2[1]).innerHTML += " *";
    }
  }
}

function activateFee(el, zeroesEnabled, zeroesDisabled, total) {
  if (el.checked) {
    if (el.id == "RAILSDP_sideCheck") {
      if (document.getElementById("RAILSDP_RADIO1").checked) {
        document
          .getElementById("RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10")
          .setAttribute("disabled", "");
      }
      let selected = document.querySelector("[RAILSDP-radios]:checked");
      typeOfDev(selected);
      if (document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked) {
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILSENG_sideCheck") {
      let selected = document.querySelector("[RAILSENG-radios]:checked");
      amendDevPlan(selected);
      if (
        document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10").checked
      ) {
        document.getElementById(
          "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILNOA_sideCheck") {
      let selected = document.querySelector("[RAILNOA-radios]:checked");
      typeOfApp(selected);
      if (document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10").checked) {
        document.getElementById(
          "RAILNOA_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILSUND_sideCheck") {
      document.getElementById("RAILSUND_FeeCompDeclFee_DevePlan_Qty10").value =
        "1";
      document
        .getElementById("RAILSUND_FeeCompDeclFee_DevePlan_Qty10")
        .setAttribute("disabled", "");
      triggerComputeFee(
        document.getElementById("RAILSUND_FeeCompDeclFee_DevePlan_Qty10")
      );
      if (
        document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10").checked
      ) {
        document.getElementById(
          "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value;
      }
    }
  } else {
    if (el.id == "RAILSDP_sideCheck") {
      document.getElementById("RAILSDP_FIELD8").value = "";
    }
    for (let textbox of zeroesEnabled) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    for (let textbox of zeroesDisabled) {
      textbox.setAttribute("disabled", "");
      textbox.value = "0";
    }
    document.getElementById(total).value = "0";

    if (el.id == "RAILSDP_sideCheck") {
      if (document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked) {
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILSDP_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILSENG_sideCheck") {
      if (
        document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10").checked
      ) {
        document.getElementById(
          "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILSENG_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILNOA_sideCheck") {
      if (document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10").checked) {
        document.getElementById(
          "RAILNOA_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value = document.getElementById(
          "RAILNOA_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      }
    } else if (el.id == "RAILSUND_sideCheck") {
      if (
        document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10").checked
      ) {
        document.getElementById(
          "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSUND_FeeCompDeclFee_TotaFeePaya10"
        ).value;
      } else if (
        document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10")
          .checked
      ) {
        document.getElementById(
          "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
        ).value = document.getElementById(
          "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
        ).value;
      }
    }
  }
}

//

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function reset31(condition) {
  let fields = [
    document.getElementById("RAILSDP_FeeCompDeclFee_Type1Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type2Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type3Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type1Deve_CompFees10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type2Deve_CompFees10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type3Deve_CompFees10"),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_InteConnModiExis_CompFees10"
    ),
    document.getElementById("RAILSDP_FeeCompDeclFee_TotaFeePaya10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_TotaFeePaya10"),
  ];

  let disabledFields = [
    document.getElementById("RAILSDP_FeeCompDeclFee_Type1Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type2Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Type3Deve_Qty10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_InteConnModiExis_Qty10"),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10"
    ),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10"
    ),
  ];
  let otherFields = [
    document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10"),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10"
    ),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ),
    document.getElementById(
      "RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10"
    ),
    document.getElementById("RAILSDP_FeeCompDeclFee_RemaComm10"),
    document.getElementById("RAILSDP_POPUP1"),
  ];
  let radios = [
    document.getElementById("RAILSDP_RADIO1"),
    document.getElementById("RAILSDP_RADIO2"),
    document.getElementById("RAILSDP_Type1A"),
    document.getElementById("RAILSDP_Type1B"),
    document.getElementById("RAILSDP_Type1C"),
    document.getElementById("RAILSDP_Type1D"),
    document.getElementById("RAILSDP_Type1E"),
    document.getElementById("RAILSDP_Type1F"),
    document.getElementById("RAILSDP_Type2A"),
    document.getElementById("RAILSDP_Type2B"),
    document.getElementById("RAILSDP_Type2C"),
    document.getElementById("RAILSDP_Type3A"),
    document.getElementById("RAILSDP_Type3B"),
    document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu10"),
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu_TopUpPaymDone10"),
  ];

  document.getElementById("RAILSDP_FIELD8").value = "";
  document.getElementById("RAILSDP_FIELD8").setAttribute("disabled", "");
  document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10").value = "";
  document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm_Amount10").value =
    "0";
  for (r of radios) {
    r.checked = false;
  }
  for (f of fields) {
    f.value = 0;
  }
  for (d of disabledFields) {
    d.setAttribute("disabled", "");
    d.removeAttribute("mandatory");
  }
  for (o of otherFields) {
    o.value = "";
  }

  document.getElementById("RAILSDP_sideCheck").checked = false;
  document.getElementById("RAILSDP_Type2A").checked = true;
  document.getElementById("RAILSDP_RADIO1").checked = true;

  if (document.getElementById("Sub_Type_RADIO1").checked) {
    document.getElementById("RAILSDP_FeeCompDeclFee_NewSubm10").checked = true;
  } else if (document.getElementById("Sub_Type_RADIO2").checked) {
    document.getElementById("RAILSDP_FeeCompDeclFee_Resu10").checked = true;
  }

  if (condition == true) {
    if (document.getElementById("Sub_Type_RADIO1").checked) {
      document
        .getElementById("RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10")
        .setAttribute("mandatory", "");
    }
    document.getElementById("RailProtPlan_PurcDate10").setAttribute("mandatory", "")
    document.getElementById("RailProtPlan_PurcDate10").value = ""
    document.getElementById("RailProtPlan_ReceNo10").setAttribute("mandatory", "")
    document.getElementById("RAILSDP_AppGFA10").setAttribute("mandatory", "")
    document.getElementById("RAILSDP_AppGFA10").value = ""
    document.getElementById("RAILSDP_ApproxDist10").setAttribute("mandatory", "")
    document.getElementById("RAILSDP_ApproxDist10").value = ""
  } else {
    document
      .getElementById("RAILSDP_FeeCompDeclFee_NewSubm_ReceNo10")
      .removeAttribute("mandatory");
    document.getElementById("RailProtPlan_PurcDate10").removeAttribute("mandatory")
    document.getElementById("RailProtPlan_ReceNo10").removeAttribute("mandatory")
    document.getElementById("RailProtPlan_PurcDate10").value = ""
    document.getElementById("RAILSDP_AppGFA10").removeAttribute("mandatory")
    document.getElementById("RAILSDP_AppGFA10").value = ""
    document.getElementById("RAILSDP_ApproxDist10").removeAttribute("mandatory")
    document.getElementById("RAILSDP_ApproxDist10").value = ""
  }
}

function reset33(condition) {
  let radios = [
    document.getElementById("RAILSENG_RADIO1"),
    document.getElementById("RAILSENG_RADIO2"),
    document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone10"),
    document.getElementById("RAILSENG_sideCheck"),
  ];

  let fields = [
    document.getElementById("RAILSENG_FeeCompDeclFee_DevePlan_Qty10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_BldgPlan_Qty10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_DevePlan_CompFees10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_BldgPlan_CompFees10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_TotaFeePaya10"),
  ];

  let otherFields = [
    document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm_Amount10"),
    document.getElementById("RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10"),
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10"
    ),
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ),
    document.getElementById(
      "RAILSENG_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10"
    ),
  ];
  for (r of radios) {
    r.checked = false;
  }
  for (f of fields) {
    f.value = 0;
    f.setAttribute("disabled", "");
  }

  for (o of otherFields) {
    o.value = "";
    o.setAttribute("disabled", "");
    o.removeAttribute("mandatory");
  }
  document.getElementById("RAILSENG_FeeCompDeclFee_RemaComm10").value = "";
  document.getElementById("RAILSENG_RADIO2").checked = true;

  if (condition == true) {
    if (document.getElementById("Sub_Type_RADIO1").checked) {
      document
        .getElementById("RAILSENG_FeeCompDeclFee_NewSubm_Amount10")
        .setAttribute("mandatory", "");
      document.getElementById(
        "RAILSENG_FeeCompDeclFee_NewSubm_Amount10"
      ).value = "0";
      document
        .getElementById("RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10")
        .removeAttribute("disabled");
      document
        .getElementById("RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10")
        .setAttribute("mandatory", "");

      document.getElementById(
        "RAILSENG_FeeCompDeclFee_NewSubm10"
      ).checked = true;
    } else if (document.getElementById("Sub_Type_RADIO2").checked) {
      document.getElementById("RAILSENG_FeeCompDeclFee_Resu10").checked = true;
    }
  } else {
    document
      .getElementById("RAILSENG_FeeCompDeclFee_NewSubm_ReceNo10")
      .removeAttribute("mandatory");
  }
}

function reset44(condition) {
  let radios = [
    document.getElementById("RAILNOA_RADIO1"),
    document.getElementById("RAILNOA_RADIO2"),
    document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone10"),
    document.getElementById("RAILNOA_sideCheck"),
  ];

  let fields = [
    document.getElementById("RAILNOA_FeeCompDeclFee_DevePlan_Qty10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_BldgPlan_Qty10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_DevePlan_CompFees10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_BldgPlan_CompFees10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_TotaFeePaya10"),
  ];

  let otherFields = [
    document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm_Amount10"),
    document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10"),
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10"
    ),
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ),
    document.getElementById(
      "RAILNOA_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10"
    ),
  ];
  for (r of radios) {
    r.checked = false;
  }
  for (f of fields) {
    f.value = 0;
    f.setAttribute("disabled", "");
  }

  for (o of otherFields) {
    o.value = "";
    o.setAttribute("disabled", "");
    o.removeAttribute("mandatory");
  }
  document.getElementById("RAILNOA_FeeCompDeclFee_RemaComm10").value = "";
  document.getElementById("RAILNOA_RADIO2").checked = true;
  if (condition == true) {
    if (document.getElementById("Sub_Type_RADIO1").checked) {
      document.getElementById("RAILNOA_FeeCompDeclFee_NewSubm_Amount10").value =
        "0";
      document
        .getElementById("RAILNOA_FeeCompDeclFee_NewSubm_Amount10")
        .setAttribute("disabled", "");
      document
        .getElementById("RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10")
        .removeAttribute("disabled");
      document
        .getElementById("RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10")
        .setAttribute("mandatory", "");

      document.getElementById(
        "RAILNOA_FeeCompDeclFee_NewSubm10"
      ).checked = true;
    } else if (document.getElementById("Sub_Type_RADIO2").checked) {
      document.getElementById("RAILNOA_FeeCompDeclFee_Resu10").checked = true;
    }
  } else {
    document
      .getElementById("RAILNOA_FeeCompDeclFee_NewSubm_ReceNo10")
      .removeAttribute("mandatory");
  }
}

function reset66(condition) {
  let radios = [
    document.getElementById("RAILSUND_RADIO1"),
    document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone10"),
    document.getElementById("RAILSUND_sideCheck"),
  ];

  let fields = [
    document.getElementById("RAILSUND_FeeCompDeclFee_DevePlan_Qty10"),
    // document.getElementById("RAILSUND_FeeCompDeclFee_BldgPlan_Qty10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_DevePlan_CompFees10"),
    // document.getElementById("RAILSUND_FeeCompDeclFee_BldgPlan_CompFees10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_TotaFeePaya10"),
  ];

  let otherFields = [
    document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10"),
    document.getElementById("RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10"),
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_FullPaymDoneEarl_SubmNoFeePaid10"
    ),
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_Amount10"
    ),
    document.getElementById(
      "RAILSUND_FeeCompDeclFee_Resu_TopUpPaymDone_ReceNo10"
    ),
  ];
  for (r of radios) {
    r.checked = false;
  }
  for (f of fields) {
    f.value = 0;
    f.setAttribute("disabled", "");
  }

  for (o of otherFields) {
    o.value = "";
    o.setAttribute("disabled", "");
    o.removeAttribute("mandatory");
  }
  document.getElementById("RAILSUND_FeeCompDeclFee_RemaComm10").value = "";
  document.getElementById("RAILSUND_RADIO1").checked = true;
  if (condition == true) {
    if (document.getElementById("Sub_Type_RADIO1").checked) {
      document
        .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_Amount10")
        .setAttribute("disabled", "");
      document.getElementById(
        "RAILSUND_FeeCompDeclFee_NewSubm_Amount10"
      ).value = "0";
      document
        .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10")
        .removeAttribute("disabled");
      document
        .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10")
        .setAttribute("mandatory", "");

      document.getElementById(
        "RAILSUND_FeeCompDeclFee_NewSubm10"
      ).checked = true;
    } else if (document.getElementById("Sub_Type_RADIO2").checked) {
      document.getElementById("RAILSUND_FeeCompDeclFee_Resu10").checked = true;
    }
  } else {
    document
      .getElementById("RAILSUND_FeeCompDeclFee_NewSubm_ReceNo10")
      .removeAttribute("mandatory");
  }
}

function totalAmountValidation(amount, totalFee) {
  let amountVal = document.getElementById(amount.id).value;
  let totalFeeVal = document.getElementById(totalFee.id).value;

  if (amountVal !== totalFeeVal) {
    showMessage("Amount must be tally with Total Fee Payable");
    document.getElementById(amount.id).value = totalFeeVal;
  }
}

function onlyOneTick(el, name) {
  let names = document.querySelectorAll("[name='" + name + "']");
  if (el.checked) {
    for (let a of names) {
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
    }
  } else {
    for (let a of names) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
    }
  }

  // if (document.getElementById("RAILSLDP_MinorAA_Check10").checked) {
  //   document.querySelector("[item-5]").removeAttribute("hidden");
  //   document
  //     .querySelector("[item-5]")
  //     .nextElementSibling.querySelector("td").innerHTML = "6.";
  // } else {
  //   document.querySelector("[item-5]").setAttribute("hidden", "");
  //   document
  //     .querySelector("[item-5]")
  //     .nextElementSibling.querySelector("td").innerHTML = "5.";
  // }
}

function unableCheck5(el) {
  if (el.id == "RAILSLDP_MinorAA_Check10") {
    document.getElementById("RAILSLDP_Decl_Check50").removeAttribute("disabled")
    document.getElementById("RAILSLDP_Decl_Check50").setAttribute("checked", "")
    document.getElementById("RAILSLDP_Decl_Check50").setAttribute("mandatory", "")
  } else {
    document.getElementById("RAILSLDP_Decl_Check50").removeAttribute("checked")
    document.getElementById("RAILSLDP_Decl_Check50").removeAttribute("mandatory")
    document.getElementById("RAILSLDP_Decl_Check50").setAttribute("disabled", "")
  }
}

function showCheckboxes(el) {
  if (el.value == "c. The following minor A&A works") {
    document
      .getElementById(el.id)
      .parentElement.querySelector("[select-c]")
      .removeAttribute("hidden");
  } else {
    document
      .getElementById(el.id)
      .parentElement.querySelector("[select-c]")
      .setAttribute("hidden", "");
    for (let a of document
      .getElementById(el.id)
      .parentElement.querySelector("[select-c]")
      .querySelectorAll("cn2-checkbox")) {
      a.checked = false;
    }
  }
}

function less20(el, to) {
  let val = parseFloat(el.value);
  if (!to) {
    if (val) {
      if (val < 20) {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The proposed development work is not eligible for lodgement."
          );
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
    }
  } else {
    if (val) {
      if (val > 12) {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute("data-invalid-message", "Value should be 1-12 only.");
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
    }
  }
}

function less24(el, to) {
  let val = parseFloat(el.value);
  if (!to) {
    if (val) {
      if (val < 20) {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute(
            "data-invalid-message",
            "The proposed development work is not eligible for lodgement."
          );
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
    }
  } else {
    if (val) {
      if (val > 24) {
        document.getElementById(el.id).setAttribute("data-invalid", "");
        document
          .getElementById(el.id)
          .setAttribute("data-invalid-message", "Value should be 1-24 only.");
      } else {
        document.getElementById(el.id).removeAttribute("data-invalid");
        document.getElementById(el.id).removeAttribute("data-invalid-message");
      }
    }
  }
  if (el.value) {
    if (el.value == "0" || el.value == "00") {
      document.getElementById(el.id).setAttribute("data-invalid", "");
      document
        .getElementById(el.id)
        .setAttribute("data-invalid-message", "Value should be 1-24 only.");
    } else {
      document.getElementById(el.id).removeAttribute("data-invalid");
      document.getElementById(el.id).removeAttribute("data-invalid-message");
    }
  }


}

function hideMandas() {
  for (let a of document.querySelectorAll("[hidden]")) {
    for (let b of a.querySelectorAll("[mandatory]")) {
      a.removeAttribute("mandatory");
    }
    for (let b of a.querySelectorAll("[checked]")) {
      a.removeAttribute("checked");
    }
  }
  for (let a of document.querySelectorAll("*")) {
    if (a.style.display == "none") {
      for (let b of a.querySelectorAll("[mandatory]")) {
        a.removeAttribute("mandatory");
      }
      for (let b of a.querySelectorAll("[checked]")) {
        a.removeAttribute("checked");
      }
    }
  }
  for (let a of document.querySelectorAll("[dont]")) {
    a.removeAttribute("disabled");
  }
}

function changeToPage7(el) {
  if (el.checked) {
    //With reference to Project Peference No. fields
    document.getElementById("RAILSENGProjPref_No10").value =
      jsonData["Project_Project_Ref_No10"];
    document.getElementById("RAILSENG_ST20").value = jsonData["RAILSENG_ST20"];

    //DisableField for Declaration Yes/No
    disableDecl7and8("RAILSENG_RADIO1_1", "RAILSENG_RADIO2_1");
  }
}

function disableDecl7and8(el1, el2) {
  let elemYes = document.getElementById(el1);
  let elemNo = document.getElementById(el2);
  let declarations = [
    document.getElementById("RAILSENG_CHECK70"),
    document.getElementById("RAILSENG_CHECK80"),
  ];
  let asterisks = document.querySelectorAll(
    `[group-id="RAILSENG_CHECK_Asterisk"]`
  );

  if (elemYes.checked) {
    for (let target of declarations) {
      target.setAttribute("checked", "");
      target.setAttribute("mandatory", "");
      target.removeAttribute("disabled");
    }
    for (let target of asterisks) {
      target.innerHTML = "*";
    }
  } else if (elemNo.checked) {
    for (let target of declarations) {
      target.removeAttribute("checked");
      target.removeAttribute("mandatory");
      target.setAttribute("disabled", "");
      target.checked = false;
    }
    for (let target of asterisks) {
      target.innerHTML = "";
    }
  }
}

function RAILSENG_CHECK50_change(el) {
  let cb = [
    document.getElementById("RAILSENG_CHECK90_10"),
    document.getElementById("RAILSENG_CHECK90"),
    document.getElementById("RAILSENG_CHECK100"),
    document.getElementById("RAILSENG_CHECK110"),
  ];
  let label = document.querySelectorAll("[app7Sec5Aste]")


  if (el.checked) {
    for (let a of label) {
      a.innerHTML = "";
    }
    for (let a of cb) {
      a.removeAttribute("checked");
      a.removeAttribute("mandatory");
    }
  } else {
    for (let a of label) {
      a.innerHTML = "*";
    }
    for (let a of cb) {
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
  }

}


function StatBoar_change(el) {
  let statBoarYes = document.querySelector(`[switch-id="StatBoar_Yes10"]`);
  let statBoarDropDown = document.getElementById("Member_Member_Name_StatBoar10");

  if (statBoarYes.checked == true) {
    statBoarDropDown.removeAttribute("hidden");
  } else {
    statBoarDropDown.value = ""
    statBoarDropDown.setAttribute("hidden", "");
  }
}
function RAILSUNDchange(num) {
  let validPrevMonthField = document.getElementById(
    "RAILSUND_ValidOf_PrevPermit10"
  );
  let appDate = document.getElementById("Date10");
  let yes10 = document.querySelector(`[switch-id="RAILSUND_Yes10"]`);
  let yes20 = document.querySelector(`[switch-id="RAILSUND_Yes20"]`);
  let message10 = document.getElementById("RAILSUND_Message10");
  let message20 = document.getElementById("RAILSUND_Message20");
  let message30 = document.getElementById("RAILSUND_Message30");


  if (validPrevMonthField.value != "") {
    if (num == 1) {
      if (validPrevMonth(validPrevMonthField.value, appDate.value)) {
        message10.innerHTML =
          "The permit Validity is less than 1 month, you are required to submit Application 7 in other to obtain new permit";
      } else {
        message10.innerHTML = "";
      }
    } else if (num == 2) {
      if (yes10.checked) {
        message20.innerHTML =
          "[You are required to submit Application 7 in order to obtain a new permit]";
      } else {
        message20.innerHTML = "";
      }
    } else if (num == 3) {
      if (yes20.checked) {
        message30.innerHTML =
          " You are required to submit Application 7 in order to obtain a new permit]";
      } else {
        message30.innerHTML = "";
      }
    }
  } else {
    if (num == 1) {
      message10.innerHTML = "";
    } else if (num == 2) {
      message20.innerHTML = "";
    } else if (num == 3) {
      message30.innerHTML = "";
    }
  }
}

function validPrevMonth(value, date) {
  let currentDate = new Date()
  let permitIssueDate = document.getElementById("RAILSUND_DateOf_PrevPermit10")
  let date1_ms = currentDate.getTime();
  let date2_ms = new Date(permitIssueDate.value).getTime();
  let timeDifference = date1_ms - date2_ms
  let months = Math.round(timeDifference / (1000 * 60 * 60 * 24) / 30)
  if (value != "" || date != "") {
    if (months <= value) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function getDateMonth(date) {
  let m1 = date.charAt(3);
  let m2 = date.charAt(4);
  let month = m1 + m2;
  let getmonth = parseInt(month);
  return getmonth;
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



function validateModNoA(mod) {
  let re = /^(([a-zA-Z]{2}))(([0-9]{4}))$/;
  return re.test(mod);
}

function validateModNoB(mod) {
  let re = /^(([a-zA-Z]{3}))(\/)(([a-zA-Z]{3}))(\/)(([0-9]{2}))(\/)(([0-9]{3}))$/;
  return re.test(mod);
}

function validateModNoC(mod) {
  let re = /^(([a-zA-Z]{3}))(\/)(([a-zA-Z]{2}))(\/)(([a-zA-Z]{3}))(\/)(([0-9]{2}))(\/)(([0-9]{3}))$/;
  return re.test(mod);
}

function ModNoChange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateModNoA(field.value) && !validateModNoB(field.value) && !validateModNoC(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Modification No. accept only this formats '@@####', '@@@/@@@/##/###' and '@@@/@@/@@@/##/###' where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function DatePrevPermIssued() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let dateField = document.getElementById("RAILSUND_DateOf_PrevPermit10");

  if (dateField.value == "") {
    today = yyyy + "-" + mm + "-" + dd;
    dateField.value = today.toString();
  }
}

function RAILSCSP_AffeRailLine10_change(element) {
  let otherField = document.getElementById("RAILSCSP_AffeRailLineOthe10");
  let othersShow = document.getElementById("affectedRailOther_Show");
  let jobField = document.getElementById("RAILSCSP_JobNo10");
  let jobShow = document.getElementById("RAILSCSP_JobNo10_Show");


  // Reset
  otherField.value = "";
  othersShow.setAttribute("hidden", "");
  jobField.value = "";
  jobShow.setAttribute("hidden", "");
  jobField.removeAttribute("data-invalid");
  jobField.removeAttribute("data-invalid-message");
  jobField.removeAttribute("event-change");

  // Others
  if (element.value == "Others") {
    othersShow.removeAttribute("hidden");

    // NEL
  } else if (element.value == "NEL") {
    jobShow.removeAttribute("hidden");
    jobField.setAttribute("event-change", "JobNoNelChange(this)");
    // BPLRT
  } else if (element.value == "BPLRT") {
    jobShow.removeAttribute("hidden");

    // SPLRT
  } else if (element.value == "SPLRT") {
    jobShow.removeAttribute("hidden");
    jobField.setAttribute("event-change", "JobNoSPLRTChange(this)");
  }
}

function validateJobNoA(job) {
  let re = /^(([a-zA-Z]{3}))(\/)(([a-zA-Z]{3}))(\/)(([a-zA-Z]{3}))(\/)(([0-9]{2}))(\/)(([0-9]{3}))$/;
  return re.test(job);
}

function JobNoNelChange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateJobNoA(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Job No. accept only this format '@@@/@@@/@@@/##/###' where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function validateJobNoB(job) {
  let re = /^(([a-zA-Z]{3}))(\/)(([a-zA-Z]{2}))(\/)(([a-zA-Z]{3}))(\/)(([0-9]{2}))(\/)(([0-9]{3}))$/;
  return re.test(job);
}

function JobNoSPLRTChange(el) {
  let field = document.getElementById(el.id);
  if (field.value) {
    if (!validateJobNoB(field.value)) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Job No. accept only this format '@@@/@@/@@@/##/###' where # is a numeric [0-9] and @ is an alphabetic [A-Z] character"
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  } else {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
  }
  field.value = field.value.toUpperCase();
}

function resetValidationPage10() {
  let x = [
    document.getElementById("RAILSCSP_AppModiNo10"),
    document.getElementById("RAILSCSP_JobNo10"),
  ];
  let affectedRail = document.getElementById("RAILSCSP_AffeRailLine10");
  let othersShow = document.getElementById("affectedRailOther_Show");
  let jobShow = document.getElementById("RAILSCSP_JobNo10_Show");
  othersShow.setAttribute("hidden", "");
  jobShow.setAttribute("hidden", "");
  affectedRail.value = "NSL";

  for (let a of x) {
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-invalid-message");
    a.value = "";
  }
}

function resetModValidation() {
  let x = [
    document.getElementById("RAILSENG_FIELD1"),
    document.getElementById("RAILSENG_FIELD2"),
  ];
  document.getElementById("RAILSENG_RADIO3").checked = false;
  document.getElementById("RAILSENG_RADIO4").checked = false;
  document.getElementById("RAILSENG_RADIO3_LABEL").innerHTML = "Architectural and Structural Related<br>Modification Request :";
  document.getElementById("RAILSENG_RADIO4_LABEL").innerHTML = "Mechanical and Electrical Related<br>Modification Request :";
  for (let a of x) {
    a.removeAttribute("mandatory");
    a.removeAttribute("data-invalid");
    a.removeAttribute("data-invalid-message");
    a.setAttribute("disabled", "");
  }
}

function date20Validation(el) {
  let datefield = document.getElementById(el.id);
  let date = datefield.value.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  let d = new Date(year, month - 1, day);
  var startDate = new Date(), endDate = d;

  var currentYear = (new Date).getFullYear();
  var disabledDays = ["01/01/" + currentYear, "01/03/" + currentYear, "01/05/" + currentYear];

  var start = new Date(startDate);
  var end = new Date(endDate);

  var weekend_count = 0;
  for (i = start.valueOf(); i <= end.valueOf(); i += 86400000) {
    var temp = new Date(i);
    var holiday;
    for (j = 0; j < disabledDays.length; j++) {
      holiday = disabledDays[j];
      if (!(temp < new Date(holiday)) && !(temp > new Date(holiday))) {
        weekend_count++
      }
    }

    if (temp.getDay() == 0 || temp.getDay() == 6) {
      weekend_count++;
    }
  }

  if (Math.round((end - start) / 86400000 + 1 - weekend_count) < 20) {
    showMessage("Date entered is less than 20 working days")
    datefield.value = "";
  }
}

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

function Member_Name_change(el) {
  for (let a of document.querySelectorAll("[qpName]")) {
    a.value = document.getElementById(el.id).valueLabel
  }
}
