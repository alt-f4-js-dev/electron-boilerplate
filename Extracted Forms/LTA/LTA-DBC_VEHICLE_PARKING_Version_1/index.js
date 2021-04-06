document.addEventListener("DOMContentLoaded", function (event) {
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

function CHECKED_change(element) {
  let checkBox = document.getElementById(element.id);
  if (checkBox.checked) {
    checkBox.removeAttribute("mandatory");
    checkBox.removeAttribute("checked");
  } else {
    checkBox.setAttribute("mandatory", "");
    checkBox.setAttribute("checked", "");
  }
}
function enablePage5(pass) {
  let textarea = document.getElementById("VPPRO_Rema10");
  let disabled_checkbox = [
    document.getElementById("VPPRO_CHECK1"),
    document.getElementById("VPPRO_CHECK3"),
  ];

  let mand_checkbox = [
    document.getElementById("VPPRO_CHECK2_1"),
    document.getElementById("VPPRO_CHECK2_2"),
    document.getElementById("VPPRO_CHECK2_3"),
  ];

  let b = document.getElementById("VPPRO_CHECK1");
  let c = document.getElementById("VPPRO_CHECK3");
  b.checked = false;
  c.checked = false;

  if (pass) {
    if (document.getElementById("SubType_Resub10").checked) {
      c.setAttribute("disabled", "");
      b.removeAttribute("disabled");
      for (let a of mand_checkbox) {
        a.setAttribute("mandatory", "");
        a.setAttribute("checked", "");
        a.removeAttribute("disabled");
      }
    } else if (document.getElementById("SubType_NewSub10").checked) {
      c.removeAttribute("disabled");
      b.removeAttribute("disabled");
      for (let a of mand_checkbox) {
        a.setAttribute("mandatory", "");
        a.setAttribute("checked", "");
        a.removeAttribute("disabled");
      }
    }
  } else {
    for (let checkbox of disabled_checkbox) {
      checkbox.checked = false;
      checkbox.setAttribute("disabled", "");
    }
    textarea.value = "";
    for (let a of mand_checkbox) {
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
      a.setAttribute("disabled", "");
    }
  }
}

function enablePage6(pass) {
  let mand_checkboxes = [
    document.getElementById("VPLOD_CHECK1"),
    document.getElementById("VPLOD_CHECK2"),
    document.getElementById("VPLOD_CHECK3"),
    document.getElementById("VPLOD_CHECK4"),
    document.getElementById("VPLOD_CHECK5_1"),
    document.getElementById("VPLOD_CHECK5_2"),
    document.getElementById("VPLOD_CHECK5_3"),
    document.getElementById("VPLOD_CHECK6"),
  ];
  let textarea = document.getElementById("VPLOD_Rema10");
  if (pass) {
    for (let checkbox of mand_checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
    }
  } else {
    textarea.value = "";
    for (let checkbox of mand_checkboxes) {
      checkbox.removeAttribute("mandatory");
      checkbox.removeAttribute("checked");
      checkbox.checked = false;
    }
  }
}
function enablePage8(pass) {
  let comments = document.getElementById("VPMODDIM_Rema10");
  let checkboxes = [
    document.getElementById("VPMODDIM_CHECK1"),
    document.getElementById("VPMODDIM_CHECK3")
  ];
  let mand_checkboxes = [
    document.getElementById("VPMODDIM_CHECK2_1"),
    document.getElementById("VPMODDIM_CHECK2_2"),
    document.getElementById("VPMODDIM_CHECK2_3"),
  ];

  if (pass) {
    if (document.getElementById("SubType_NewSub10").checked) {
      comments.value = "";
      for (let cb of mand_checkboxes) {
        cb.setAttribute("checked", "");
        cb.setAttribute("mandatory", "");
        cb.removeAttribute("disabled");
        cb.checked = false;
      }
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("checked", "");
        checkbox.setAttribute("mandatory", "");
        checkbox.removeAttribute("disabled");
        checkbox.checked = false;
      }

      for (let a of document.querySelectorAll("[page8Asterisk]")) {
        a.innerHTML = "*";
      }
    } else if (!document.getElementById("ApplType_VPModDim").checked || !document.getElementById("SubType_NewSub10").checked) {
      comments.value = "";
      for (let cb of mand_checkboxes) {
        cb.setAttribute("checked", "");
        cb.setAttribute("mandatory", "");
        cb.removeAttribute("disabled");
        cb.checked = false;
      }
      for (let checkbox of checkboxes) {
        if (checkbox.id == "VPMODDIM_CHECK3") {
          checkbox.removeAttribute("checked");
          checkbox.removeAttribute("mandatory");
          checkbox.setAttribute("disabled", "");
          checkbox.checked = false;
        }
        checkbox.setAttribute("checked", "");
        checkbox.setAttribute("mandatory", "");
        checkbox.removeAttribute("disabled");
        checkbox.checked = false;
      }

      for (let a of document.querySelectorAll("[page8Asterisk]")) {
        a.innerHTML = "*";
      }
    }
    if (document.getElementById("SubType_Resub10").checked) {
      document.getElementById("VPMODDIM_CHECK3").removeAttribute("mandatory");
      document.getElementById("VPMODDIM_CHECK3").removeAttribute("checked");
      document.getElementById("VPMODDIM_CHECK3").setAttribute("disabled", "")
      document.getElementById("VPMODDIM_CHECK3").checked = false;
    }
  } else {
    for (let cb of mand_checkboxes) {
      cb.removeAttribute("checked");
      cb.removeAttribute("mandatory");
      cb.setAttribute("disabled", "");
      cb.checked = false;
    }
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }

    for (let a of document.querySelectorAll("[page8Asterisk]")) {
      a.innerHTML = "";
    }
  }
}
function enablePage9(pass) {
  let comments = document.getElementById("VPWAI_Rema10");
  let mand_disabledTextbox = [
    document.getElementById("VPWAI_ReceNum10"),
    document.getElementById("VPWAI_Amount10"),
  ];
  let checkboxes = [
    document.getElementById("VPWAI_CHECK1"),
    document.getElementById("VPWAI_CHECK3"),
  ];
  let mand_cb = [
    document.getElementById("VPWAI_CHECK2_1"),
    document.getElementById("VPWAI_CHECK2_2"),
    document.getElementById("VPWAI_CHECK2_3"),
  ];
  if (pass) {
    if (document.getElementById("SubType_NewSub10").checked || document.getElementById("SubType_Resub10").checked) {
      for (let checkbox of checkboxes) {
        checkbox.removeAttribute("disabled");
        checkbox.checked = false;
      }
      for (let checkbox of mand_cb) {
        checkbox.removeAttribute("disabled");
        checkbox.setAttribute("checked", "");
        checkbox.setAttribute("mandatory", "");
        checkbox.checked = false;
      }
      for (let textbox of mand_disabledTextbox) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }
      for (let a of document.querySelectorAll("[page9Asterisk]")) {
        a.innerHTML = "*";
      }
    }
    if (document.getElementById("SubType_Resub10").checked) {
      document.getElementById("VPWAI_CHECK3").removeAttribute("mandatory");
      document.getElementById("VPWAI_CHECK3").removeAttribute("checked");
      document.getElementById("VPWAI_CHECK3").setAttribute("disabled", "")
      document.getElementById("VPWAI_CHECK3").checked = false;
    }
  } else {
    if (!document.getElementById("ApplType_VPWaiver").checked || !document.getElementById("SubType_NewSub10").checked) {
      comments.value = "";
      for (let checkbox of checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.checked = false;
      }
      for (let checkbox of mand_cb) {
        checkbox.setAttribute("disabled", "");
        checkbox.removeAttribute("checked");
        checkbox.removeAttribute("mandatory");
        checkbox.checked = false;
      }
      for (let textbox of mand_disabledTextbox) {
        textbox.setAttribute("disabled", "");
        textbox.removeAttribute("mandatory");
        textbox.value = "";
      }
      for (let a of document.querySelectorAll("[page9Asterisk]")) {
        a.innerHTML = "";
      }
    }
  }
}
function enablePage7(pass) {
  let comments = document.getElementById("VPCSC_Rema10");
  let mand_checkboxes = [
    document.getElementById("VPCSC_CHECK1"),
    document.getElementById("VPCSC_CHECK2"),
    document.getElementById("VPCSC_CHECK3_1"),
    document.getElementById("VPCSC_CHECK3_2"),
    document.getElementById("VPCSC_CHECK3_3"),
  ];
  let radios = [
    document.getElementById("WithNoDevi10"),
    document.getElementById("WithDevi10"),
    document.getElementById("TheDeviConf10"),
    document.getElementById("TheDeviDoesNot10"),
  ];
  let asterisk = document.querySelectorAll("[page7Asterisk]");
  if (pass) {
  } else {
    comments.value = "";
    if (!document.getElementById("SubType_NewSub10").checked || !document.getElementById("ApplType_VPCertStaComp").checked) {
      for (let checkbox of mand_checkboxes) {
        checkbox.setAttribute("disabled", "");
        checkbox.removeAttribute("mandatory");
        checkbox.removeAttribute("checked");
        checkbox.checked = false;
      }
      for (let radio of radios) {
        radio.setAttribute("disabled", "");
        radio.checked = false;
      }
      for (let a of asterisk) {
        a.innerHTML = "";
      }
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
function ApplType_change(element) {
  let page5 = document.querySelector("[target='page5']");
  let page6 = document.querySelector("[target='page6']");
  let page7 = document.querySelector("[target='page7']");
  let page8 = document.querySelector("[target='page8']");
  let page9 = document.querySelector("[target='page9']");
  subTypeDisabled(element);

  //start reset fiels
  let formField = document.querySelectorAll(".Afields");
  for (let i = 0; i < formField.length; i++) {
    if (i != 0) {
      let elements = formField[i].querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );
      for (let element of elements) delete jsonData[element.id];
      formField[i].parentNode.removeChild(formField[i]);
    }
  }
  let formField2 = document.querySelectorAll(".Bfields");
  for (let i = 0; i < formField2.length; i++) {
    if (i != 0) {
      let elements = formField2[i].querySelectorAll(
        "cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox"
      );
      for (let element of elements) delete jsonData[element.id];
      formField2[i].parentNode.removeChild(formField2[i]);
    }
  }

  document.getElementById("delete1A").setAttribute("disabled", "");
  document.getElementById("delete1B").setAttribute("disabled", "");
  document.querySelector("[switch-id='StatBoar_Yes10']").checked = false

  VPPRO_CHECK3_change(VPPRO_CHECK3);
  VPLOD_CHECK6_change(VPLOD_CHECK6);
  VPMODDIM_CHECK3_change(VPMODDIM_CHECK3);
  VPWAI_CHECK3_change(VPWAI_CHECK3);
  VPCSC_CHECKSD10_change(element);
  fileAttachReset();

  let arrayPage = [page5, page6, page7, page8, page9]

  for (let page of arrayPage) {
    let div = document.getElementById(page.getAttribute("target"))
    let elements = div.querySelectorAll("cn2-textbox,cn2-textarea,cn2-datefield,cn2-select,input,cn2-checkbox")

    for (let el of elements) {
      if (el.hasAttribute("mandatory")) {
        el.removeAttribute("mandatory")
      }
      if (el.hasAttribute("checked")) {
        el.removeAttribute("checked")
      }
    }
  }
  //end reset fields

  switch (element.id) {
    case "ApplType_VPBldgPlan":
      page5.removeAttribute("hidden");
      page6.setAttribute("hidden", "");
      page7.setAttribute("hidden", "");
      page8.setAttribute("hidden", "");
      page9.setAttribute("hidden", "");
      enablePage5(true);
      enablePage6(false);
      enablePage7(false);
      enablePage8(false);
      enablePage9(false);
      break;
    case "ApplType_VPLodgeVP":
      page6.removeAttribute("hidden");
      page5.setAttribute("hidden", "");
      page7.setAttribute("hidden", "");
      page8.setAttribute("hidden", "");
      page9.setAttribute("hidden", "");
      enablePage5(false);
      enablePage6(true);
      enablePage7(false);
      enablePage8(false);
      enablePage9(false);
      break;
    case "ApplType_VPCertStaComp":
      page7.removeAttribute("hidden");
      page5.setAttribute("hidden", "");
      page6.setAttribute("hidden", "");
      page8.setAttribute("hidden", "");
      page9.setAttribute("hidden", "");
      enablePage7(true);
      enablePage5(false);
      enablePage6(false);
      enablePage8(false);
      enablePage9(false);
      break;
    case "ApplType_VPModDim":
      page8.removeAttribute("hidden");
      page5.setAttribute("hidden", "");
      page6.setAttribute("hidden", "");
      page7.setAttribute("hidden", "");
      page9.setAttribute("hidden", "");
      enablePage5(false);
      enablePage6(false);
      enablePage7(false);
      enablePage8(true);
      enablePage9(false);
      break;
    case "ApplType_VPWaiver":
      page9.removeAttribute("hidden");
      page5.setAttribute("hidden", "");
      page6.setAttribute("hidden", "");
      page7.setAttribute("hidden", "");
      page8.setAttribute("hidden", "");
      enablePage5(false);
      enablePage6(false);
      enablePage7(false);
      enablePage8(false);
      enablePage9(true);
      break;
    default:
      break;
  }
}

function subTypeDisabled(el) {
  let resub = document.getElementById("SubType_Resub10");
  let newsub = document.getElementById("SubType_NewSub10");
  if (el.id == "ApplType_VPLodgeVP") {
    resub.setAttribute("disabled", "");
    resub.checked = false;
    resub.removeAttribute("mandatory");
    resub.removeAttribute("checked");
    if (!newsub.checked) {
      newsub.setAttribute("mandatory", "");
      newsub.setAttribute("checked", "");
    }
  } else {
    resub.removeAttribute("disabled");
    if (!resub.checked && !newsub.checked) {
      newsub.setAttribute("mandatory", "");
      newsub.setAttribute("checked", "");
      resub.setAttribute("mandatory", "");
      resub.setAttribute("checked", "");
    }
  }
}

function subTypeChange(element) {
  let resub = document.getElementById("SubType_Resub10");
  let newsub = document.getElementById("SubType_NewSub10");
  resub.removeAttribute("mandatory");
  resub.removeAttribute("checked");
  newsub.removeAttribute("mandatory");
  newsub.removeAttribute("checked");

  VPPRO_CHECKSD10_change(element);
  VPCSC_CHECKSD10_change(element);
  VPMODDIM_CHECKSD10_change(element);
  VPWAI_CHECKSD10_change(element);
  VPPRO_CHECK3_change(VPPRO_CHECK3);
  fileAttachReset();
}

function VPWAI_CHECKSD10_change(element) {
  let comments = document.getElementById("VPWAI_Rema10");
  let checkboxes = [
    document.getElementById("VPWAI_CHECK1"),
    document.getElementById("VPWAI_CHECK3"),
  ];

  let mand_cb = [
    document.getElementById("VPWAI_CHECK2_1"),
    document.getElementById("VPWAI_CHECK2_2"),
    document.getElementById("VPWAI_CHECK2_3"),
  ];

  let mand_disabledTextbox = [
    document.getElementById("VPWAI_ReceNum10"),
    document.getElementById("VPWAI_Amount10"),
  ];


  if (document.getElementById("ApplType_VPWaiver").checked) {
    for (let checkbox of checkboxes) {
      checkbox.removeAttribute("disabled");
      checkbox.checked = false;
    }
    for (let checkbox of mand_cb) {
      checkbox.removeAttribute("disabled");
      checkbox.setAttribute("checked", "");
      checkbox.setAttribute("mandatory", "");
      checkbox.checked = false;
    }
    for (let textbox of mand_disabledTextbox) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let a of document.querySelectorAll("[page9Asterisk]")) {
      a.innerHTML = "*";
    }
    if (document.getElementById("SubType_Resub10").checked) {
      document.getElementById("VPWAI_CHECK3").removeAttribute("mandatory");
      document.getElementById("VPWAI_CHECK3").removeAttribute("checked");
      document.getElementById("VPWAI_CHECK3").setAttribute("disabled", "")
      document.getElementById("VPWAI_CHECK3").checked = false;
    }
  } else {
    comments.value = "";
    for (let checkbox of checkboxes) {
      checkbox.setAttribute("disabled", "");
      checkbox.checked = false;
    }
    for (let checkbox of mand_cb) {
      checkbox.setAttribute("disabled", "");
      checkbox.removeAttribute("checked");
      checkbox.removeAttribute("mandatory");
      checkbox.checked = false;
    }
    for (let textbox of mand_disabledTextbox) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let a of document.querySelectorAll("[page9Asterisk]")) {
      a.innerHTML = "";
    }
  }
}
// to be edited
function VPMODDIM_CHECKSD10_change(element) {
  let checkboxes = [
    document.getElementById("VPMODDIM_CHECK1"),
    document.getElementById("VPMODDIM_CHECK3"),
  ];

  let mand_checkboxes = [
    document.getElementById("VPMODDIM_CHECK2_1"),
    document.getElementById("VPMODDIM_CHECK2_2"),
    document.getElementById("VPMODDIM_CHECK2_3"),
  ];

  let mand_textbox = [
    document.getElementById("VPMODDIM_ReceNum10"),
    document.getElementById("VPMODDIM_Amount10"),
    document.getElementById("VPMODDIM_CHECK2_3"),
  ];

  for (let a of document.querySelectorAll("[page8Asterisk]")) {
    a.innerHTML = "*";
  }

  for (let txtBox of mand_textbox) {
    txtBox.removeAttribute("mandatory");
    txtBox.setAttribute("disabled", "");
    txtBox.value = ""
  }

  for (let cb of mand_checkboxes) {
    cb.setAttribute("checked", "");
    cb.setAttribute("mandatory", "");
    cb.removeAttribute("disabled");
    cb.checked = false;
  }

  for (let checkbox of checkboxes) {
    checkbox.removeAttribute("disabled");
  }

  if (element.id == "SubType_Resub10" || !document.getElementById("ApplType_VPModDim").checked) {
    for (let checkbox of checkboxes) {
      if (checkbox.id != "VPMODDIM_CHECK3") {
        checkbox.setAttribute("checked", "");
        checkbox.setAttribute("mandatory", "");
        checkbox.removeAttribute("disabled");
      } else {
        checkbox.setAttribute("disabled", "");
        checkbox.removeAttribute("checked");
        checkbox.removeAttribute("mandatory");
      }
      checkbox.checked = false;
    }
    for (let cb of mand_checkboxes) {
      cb.setAttribute("checked", "");
      cb.setAttribute("mandatory", "");
      cb.removeAttribute("disabled");
      cb.checked = false;
    }
    for (let a of document.querySelectorAll("[page8Asterisk]")) {
      a.innerHTML = "*";
    }
  } else {
    // for (let cb of mand_checkboxes) {
    //   cb.setAttribute("disabled", "");
    //   cb.removeAttribute("checked");
    //   cb.removeAttribute("mandatory");
    //   cb.checked = false;
    // }

    // for (let checkbox of checkboxes) {
    //   checkbox.setAttribute("disabled", "");
    //   checkbox.removeAttribute("checked");
    //   checkbox.removeAttribute("mandatory");
    //   checkbox.checked = false;
    // }
  }
}

function VPCSC_CHECKSD10_change(element) {
  let mand_checkboxes = [
    document.getElementById("VPCSC_CHECK1"),
    document.getElementById("VPCSC_CHECK2"),
    document.getElementById("VPCSC_CHECK3_1"),
    document.getElementById("VPCSC_CHECK3_2"),
    document.getElementById("VPCSC_CHECK3_3"),
    document.getElementById("VPCSC_CHECK4"),
  ];

  function findTbl(el) {
    let els = document.getElementById(el);
    while (els.tagName.toLowerCase() !== "table") {
      els = els.parentElement;
    }

    return els;
  }

  let asterisk = document.querySelectorAll("[page7Asterisk]");
  let asterisk2 = document.querySelectorAll("[page7Asterisk2]");

  if (document.getElementById("ApplType_VPCertStaComp").checked) {
    for (let checkbox of mand_checkboxes) {
      checkbox.setAttribute("mandatory", "");
      checkbox.setAttribute("checked", "");
      checkbox.removeAttribute("disabled");
    }
    for (let a of findTbl("VPCSC_CHECK1").querySelectorAll(
      "input[type='radio']"
    )) {
      a.removeAttribute("disabled");
      a.checked = false;
    }
    for (let a of asterisk) {
      a.innerHTML = "*";
    }
    for (let a of asterisk2) {
      a.innerHTML = "";
    }
  }
  if (element.id == "SubType_Resub10" || !document.getElementById("SubType_NewSub10").checked) {
    for (let a of mand_checkboxes) {
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
      a.setAttribute("disabled", "");
      a.checked = false;
      if (a.id == "VPCSC_CHECK4") {
        a.removeAttribute("disabled", "");
        a.setAttribute("mandatory", "");
        a.setAttribute("checked", "");
      }
    }
    for (let a2 of asterisk2) {
      a2.innerHTML = "*";
    }
    for (let a of asterisk) {
      a.innerHTML = "";
    }

    for (let a of findTbl("VPCSC_CHECK1").querySelectorAll(
      "input[type='radio']"
    )) {
      a.removeAttribute("mandatory");
      a.removeAttribute("checked");
      a.setAttribute("disabled", "");
      a.checked = false;
    }
  } else {
    for (let a of mand_checkboxes) {
      if (a.id != "VPCSC_CHECK4") {
        a.removeAttribute("disabled", "");
        a.setAttribute("mandatory", "");
        a.setAttribute("checked", "");
      } else {
        a.removeAttribute("mandatory");
        a.removeAttribute("checked");
        a.setAttribute("disabled", "");
      }

      a.checked = false;
    }
    for (let a of asterisk) {
      a.innerHTML = "*";
    }

    for (let a of findTbl("VPCSC_CHECK1").querySelectorAll(
      "input[type='radio']"
    )) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
      a.removeAttribute("disabled", "");
      a.checked = false;
    }
  }

}

function VPWAI_CHECK3_change(element) {
  let receipt = document.getElementById("VPWAI_ReceNum10");
  let amount = document.getElementById("VPWAI_Amount10");
  if (element.checked) {
    receipt.removeAttribute("disabled");
    receipt.setAttribute("mandatory", "");
    amount.removeAttribute("disabled");
    amount.setAttribute("mandatory", "");
  } else {
    receipt.removeAttribute("mandatory");
    receipt.setAttribute("disabled", "");
    amount.removeAttribute("mandatory");
    amount.setAttribute("disabled", "");
    amount.value = "";
    receipt.value = "";
  }
}
function VPMODDIM_CHECK3_change(element) {
  let receipt = document.getElementById("VPMODDIM_ReceNum10");
  let amount = document.getElementById("VPMODDIM_Amount10");
  if (element.checked) {
    receipt.removeAttribute("disabled");
    receipt.setAttribute("mandatory", "");
    amount.removeAttribute("disabled");
    amount.setAttribute("mandatory", "");
  } else {
    receipt.removeAttribute("mandatory");
    receipt.setAttribute("disabled", "");
    amount.removeAttribute("mandatory");
    amount.setAttribute("disabled", "");
    amount.value = "";
    receipt.value = "";
  }

}

function VPLOD_CHECK6_change(element) {
  let receipt = document.getElementById("VPLOD_ReceNum10");
  let amount = document.getElementById("VPLOD_Amount10");
  if (element.checked) {
    receipt.removeAttribute("disabled");
    receipt.setAttribute("mandatory", "");
    amount.removeAttribute("disabled");
    amount.setAttribute("mandatory", "");
  } else {
    receipt.removeAttribute("mandatory");
    receipt.setAttribute("disabled", "");
    amount.removeAttribute("mandatory");
    amount.setAttribute("disabled", "");
    amount.value = "";
    receipt.value = "";
  }
}

function VPPRO_CHECKSD10_change(element) {

  document.getElementById("VPPRO_CHECK1").removeAttribute("disabled");
  document.getElementById("VPPRO_CHECK1").checked = false;
  let c = document.getElementById("VPPRO_CHECK3");
  c.checked = false;

  let mand_checkbox = [
    document.getElementById("VPPRO_CHECK2_1"),
    document.getElementById("VPPRO_CHECK2_2"),
    document.getElementById("VPPRO_CHECK2_3"),
  ];

  if (element.id == "SubType_Resub10" && document.getElementById("ApplType_VPBldgPlan").checked) {
    c.setAttribute("disabled", "");
    c.checked = false;
    for (let a of mand_checkbox) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
      a.removeAttribute("disabled");
      a.checked = false;
    }
  } else {
    c.removeAttribute("disabled");
    for (let a of mand_checkbox) {
      a.setAttribute("mandatory", "");
      a.setAttribute("checked", "");
      a.removeAttribute("disabled");
      a.checked = false;
    }
  }



}

function VPPRO_CHECK3_change(element) {
  let receipt = document.getElementById("VPPRO_ReceNum10");
  let amount = document.getElementById("VPPRO_Amount10");
  if (element.checked) {
    receipt.removeAttribute("disabled");
    receipt.setAttribute("mandatory", "");
    amount.removeAttribute("disabled");
    amount.setAttribute("mandatory", "");
  } else {
    receipt.removeAttribute("mandatory");
    receipt.setAttribute("disabled", "");
    amount.removeAttribute("mandatory");
    amount.setAttribute("disabled", "");
    amount.value = "";
    receipt.value = "";
  }
}
function VPPRO_change(element) {
  let gRadio = document.querySelectorAll("[name='VPPRO_name']");
  let textboxes = [
    document.getElementById("VPPRO_NewSubm_Amount20"),
    document.getElementById("VPPRO_NewSubm_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPPRO_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPPRO_Resu_TopUpPaymDone10"),
  ];
  let textboxes2 = [
    document.getElementById("VPPRO_Resu_SubmNoFeePaid10"),
    document.getElementById("VPPRO_Resu_Amount20"),
    document.getElementById("VPPRO_Resu_ReceNo10"),
  ];
  for (let r of gRadio) {
    r.removeAttribute("checked");
    r.removeAttribute("mandatory");
  }
  if (element.id === "VPPRO_NewSubm10") {
    for (let textbox of textboxes) {
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.setAttribute("disabled", "");
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
      radiobutton.checked = false;
    }
    for (let textbox of textboxes2) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("disabled");
      radiobutton.setAttribute("checked", "");
      radiobutton.setAttribute("mandatory", "");
    }
  }
}
function VPLOD_change(element) {
  let gRadio = document.querySelectorAll("[name='VPLOD_name']");
  let textboxes = [
    document.getElementById("VPLOD_NewSubm_Amount20"),
    document.getElementById("VPLOD_NewSubm_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPLOD_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPLOD_Resu_TopUpPaymDone10"),
  ];
  let textboxes2 = [
    document.getElementById("VPLOD_Resu_SubmNoFeePaid10"),
    document.getElementById("VPLOD_Resu_Amount20"),
    document.getElementById("VPLOD_Resu_ReceNo10"),
  ];
  for (let r of gRadio) {
    r.removeAttribute("checked");
    r.removeAttribute("mandatory");
  }
  if (element.id === "VPLOD_NewSubm10") {
    for (let textbox of textboxes) {
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.setAttribute("disabled", "");
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
      radiobutton.checked = false;
    }
    for (let textbox of textboxes2) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("disabled");
      radiobutton.setAttribute("checked", "");
      radiobutton.setAttribute("mandatory", "");
    }
  }
}
function VPMODDIM_change(element) {
  let gRadio = document.querySelectorAll("[name='VPMODDIM_name']");
  let textboxes = [
    document.getElementById("VPMODDIM_NewSubm_Amount20"),
    document.getElementById("VPMODDIM_NewSubm_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPMODDIM_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPMODDIM_Resu_TopUpPaymDone10"),
  ];
  let textboxes2 = [
    document.getElementById("VPMODDIM_Resu_SubmNoFeePaid10"),
    document.getElementById("VPMODDIM_Resu_Amount20"),
    document.getElementById("VPMODDIM_Resu_ReceNo10"),
  ];
  for (let r of gRadio) {
    r.removeAttribute("checked");
    r.removeAttribute("mandatory");
  }
  if (element.id === "VPMODDIM_NewSubm10") {
    for (let textbox of textboxes) {
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.setAttribute("disabled", "");
      radiobutton.checked = false;
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
    for (let textbox of textboxes2) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("disabled");
      radiobutton.setAttribute("checked", "");
      radiobutton.setAttribute("mandatory", "");
    }
  }
}
function VPWAI_change(element) {
  let gRadio = document.querySelectorAll("[name='VPWAI_name']");
  let textboxes = [
    document.getElementById("VPWAI_NewSubm_Amount20"),
    document.getElementById("VPWAI_NewSubm_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPWAI_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPWAI_Resu_TopUpPaymDone10"),
  ];
  let textboxes2 = [
    document.getElementById("VPWAI_Resu_SubmNoFeePaid10"),
    document.getElementById("VPWAI_Resu_Amount20"),
    document.getElementById("VPWAI_Resu_ReceNo10"),
  ];
  for (let r of gRadio) {
    r.removeAttribute("checked");
    r.removeAttribute("mandatory");
  }
  if (element.id === "VPWAI_NewSubm10") {
    for (let textbox of textboxes) {
      textbox.setAttribute("mandatory", "");
      textbox.removeAttribute("disabled");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.setAttribute("disabled", "");
      radiobutton.checked = false;
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
    for (let textbox of textboxes2) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
  } else {
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("disabled");
      radiobutton.setAttribute("checked", "");
      radiobutton.setAttribute("mandatory", "");
    }
  }
}
function VPPRO_Resu_change(element) {
  let textbox1 = document.getElementById("VPPRO_Resu_SubmNoFeePaid10");
  let textboxes = [
    document.getElementById("VPPRO_Resu_Amount20"),
    document.getElementById("VPPRO_Resu_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPPRO_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPPRO_Resu_TopUpPaymDone10"),
  ];

  if (element.id === "VPPRO_Resu_FullPaymDoneEarl10") {
    textbox1.removeAttribute("disabled");
    textbox1.setAttribute("mandatory", "");
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  } else {
    textbox1.setAttribute("disabled", "");
    textbox1.removeAttribute("mandatory");
    textbox1.value = "";
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  }
}
function VPLOD_Resu_change(element) {
  let textbox1 = document.getElementById("VPLOD_Resu_SubmNoFeePaid10");
  let textboxes = [
    document.getElementById("VPLOD_Resu_Amount20"),
    document.getElementById("VPLOD_Resu_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPLOD_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPLOD_Resu_TopUpPaymDone10"),
  ];
  if (element.id === "VPLOD_Resu_FullPaymDoneEarl10") {
    textbox1.removeAttribute("disabled");
    textbox1.setAttribute("mandatory", "");
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  } else {
    textbox1.setAttribute("disabled", "");
    textbox1.removeAttribute("mandatory");
    textbox1.value = "";
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  }
}
function VPMODDIM_Resu_change(element) {
  let textbox1 = document.getElementById("VPMODDIM_Resu_SubmNoFeePaid10");
  let textboxes = [
    document.getElementById("VPMODDIM_Resu_Amount20"),
    document.getElementById("VPMODDIM_Resu_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPMODDIM_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPMODDIM_Resu_TopUpPaymDone10"),
  ];

  if (element.id === "VPMODDIM_Resu_FullPaymDoneEarl10") {
    textbox1.removeAttribute("disabled");
    textbox1.setAttribute("mandatory", "");
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  } else {
    textbox1.setAttribute("disabled", "");
    textbox1.removeAttribute("mandatory");
    textbox1.value = "";
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  }
}
function VPWAI_Resu_change(element) {
  let textbox1 = document.getElementById("VPWAI_Resu_SubmNoFeePaid10");
  let textboxes = [
    document.getElementById("VPWAI_Resu_Amount20"),
    document.getElementById("VPWAI_Resu_ReceNo10"),
  ];
  let radiobuttons = [
    document.getElementById("VPWAI_Resu_FullPaymDoneEarl10"),
    document.getElementById("VPWAI_Resu_TopUpPaymDone10"),
  ];
  if (element.id === "VPWAI_Resu_FullPaymDoneEarl10") {
    textbox1.removeAttribute("disabled");
    textbox1.setAttribute("mandatory", "");
    for (let textbox of textboxes) {
      textbox.setAttribute("disabled", "");
      textbox.removeAttribute("mandatory");
      textbox.value = "";
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  } else {
    textbox1.setAttribute("disabled", "");
    textbox1.removeAttribute("mandatory");
    textbox1.value = "";
    for (let textbox of textboxes) {
      textbox.removeAttribute("disabled");
      textbox.setAttribute("mandatory", "");
    }
    for (let radiobutton of radiobuttons) {
      radiobutton.removeAttribute("mandatory");
      radiobutton.removeAttribute("checked");
    }
  }
}
function VPWAI_QtyGfa10_change(element, compfee_id) {
  let compfee_textbox = document.getElementById(compfee_id);
  let value = parseInt(element.value.trim());
  if (value.length == 0) {
    compfee_textbox.value = "";
  } else {
    let comfVal = parseFloat(120 * value).toFixed(2);
    let floatVal = comfVal.split(".");
    if (getNearest5(floatVal[1]) === 100) {
      floatVal[1] = "00";
      floatVal[0] = floatVal[0] + 1;
      comfVal = floatVal[0] + "." + floatVal[1];
    } else {
      comfVal = floatVal[0] + "." + getNearest5(floatVal[1]);
    }
    compfee_textbox.value = "$ " + comfVal;
  }
}
function VPPRO_QtyGfa10_change(element, compfee_id) {
  let field = document.getElementById(element.id);
  let compfee_textbox = document.getElementById(compfee_id);
  let value = element.value != "" ? parseInt(element.value.trim()) : false;
  if (!value) {
    field.removeAttribute("data-invalid");
    field.removeAttribute("data-invalid-message");
    compfee_textbox.value = "";
  } else {
    let comfVal = Math.ceil(parseFloat(10 * (value / 100)) * 100) / 100;
    compfee_textbox.value = "$ " + comfVal;

    if (comfVal < 120) {
      field.setAttribute("data-invalid", "");
      field.setAttribute(
        "data-invalid-message",
        "Gross floor area involved in the proposal is subject to a minimum of $120."
      );
    } else {
      field.removeAttribute("data-invalid");
      field.removeAttribute("data-invalid-message");
    }
  }
}
function VPMODDIM_QtyGfa10_change(element, compfee_id) {
  let compfee_textbox = document.getElementById(compfee_id);
  let value = parseInt(element.value.trim());
  if (value.length == 0) {
    compfee_textbox.value = "";
  } else {
    let comfVal = parseFloat(80 * value).toFixed(2);
    let floatVal = comfVal.split(".");
    if (getNearest5(floatVal[1]) === 100) {
      floatVal[1] = "00";
      floatVal[0] = floatVal[0] + 1;
      comfVal = floatVal[0] + "." + floatVal[1];
    } else {
      comfVal = floatVal[0] + "." + getNearest5(floatVal[1]);
    }
    compfee_textbox.value = "$ " + comfVal;
  }
}
function getNearest5(x) {
  return x % 5 >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}

function onlyOne(element) {
  let field1 = document.getElementById("DeveSubType_FIELD1");
  let field2 = document.getElementById("DeveSubType_FIELD2");
  let field3 = document.getElementById("DeveSubType_FIELD3");

  //reset
  field1.setAttribute("hidden", "");
  field2.setAttribute("hidden", "");
  field3.setAttribute("hidden", "");
  field1.value = "";
  field2.value = "";
  field3.value = "";


  //only one is checked
  let group = document.querySelectorAll(`[group-id="DeveSubType_CHECK_id"]`);
  if (element.checked) {
    for (let i = 0; i < group.length; i++) {
      if (group[i].id != element.id) {
        group[i].checked = false;
      }
    }
  }

  // Institutional
  if (element.id == "DeveSubType_CHECK24") {
    if (element.checked) {
      field1.removeAttribute("hidden");
    } else {
      field1.setAttribute("hidden", "");
    }
  }
  // Civil Engineering Work	
  if (element.id == "DeveSubType_CHECK25") {
    if (element.checked) {
      field2.removeAttribute("hidden");
    } else {
      field2.setAttribute("hidden", "");
    }
  }
  // Others
  if (element.id == "DeveSubType_CHECK20") {
    if (element.checked) {
      field3.removeAttribute("hidden");
    } else {
      field3.setAttribute("hidden", "");
    }
  }

}


function disableDelete(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    formContainer.querySelector(".deleteBtn").setAttribute("disabled", "");
  } else {
    let deleteBtns = formContainer.querySelectorAll(".deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function add_change(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount > 1) {
    let firstField = document.querySelectorAll(".lotNo_first");
    let lastField = document.querySelectorAll(".lotNo_Last");
    for (let i = 0; i < firstField.length; i++) {
      firstField[firstField.length - 1].value = "MK";
      lastField[firstField.length - 1].value = "Full";
    }
  }
}


// Internal Checklist
function fileAttachCheck(element, objectName, isAllowMultiple, formName, sectionName) {
  if (element.checked) {
    jsonData[objectName] = {
      checkListId: element.id,
      isAllowMultiple: isAllowMultiple,
      formName: formName,
      sectionName: sectionName
    };
  } else {
    delete jsonData[objectName];
  }
}

function fileAttachReset() {
  delete jsonData["fileAttach10"];
  delete jsonData["fileAttach20"];
}

function removeChecked(el) {
  if (el.checked) {
    el.removeAttribute("checked")
  } else {
    el.setAttribute("checked")
  }
}

function removeMandaInser(containerName) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount > 1) {
    let textBox = formContainer.querySelectorAll(".street");
    for (let i = 1; i < textBox.length; i++) {
      textBox[i].removeAttribute("mandatory");
    }
  } else {
    formContainer.querySelector(".street").setAttribute("mandatory", "")
    if (document.getElementById("Project_StreName10").value.length == 0) {
      document.getElementById("Project_StreName10").setAttribute("mandatory", "");
    } else {
      document.getElementById("Project_StreName10").setAttribute("mandatory", "");
      document.getElementById("Project_StreName10").shadowRoot.querySelector("input").removeAttribute("class");
      document.getElementById("Project_StreName10").shadowRoot.querySelector("input").setAttribute("class", "form-control");
    }
  }

  if (document.getElementById("Project_StreName10").value.length == 0) {
    document.getElementById("Project_StreName10").setAttribute("mandatory", "");
  } else {
    document.getElementById("Project_StreName10").setAttribute("mandatory", "");
    document.getElementById("Project_StreName10").shadowRoot.querySelector("input").removeAttribute("class");
    document.getElementById("Project_StreName10").shadowRoot.querySelector("input").setAttribute("class", "form-control");
  }
}