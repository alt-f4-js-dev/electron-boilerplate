document.addEventListener("DOMContentLoaded", function (event) {
  //toggleTypeOfNotice();
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");

  if (
    !document
      .querySelector("cn2-nav-button[target='page1']")
      .hasAttribute("valid")
  ) {
    populateTerminationAppSCDFRefNos();
  }

  showMessage(
    "Please note that QP Company/Firm Name is mandatory for all SCDF submission. Please fill up before any submission."
  );
});
function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
function toggleTypeOfNotice() {
  // //section2
  // let qpPerson = document.getElementById("PartOfAppl_TypeOfNoti_Role10");
  // let fsePerson = document.getElementById("PartOfAppl_TypeOfNoti_Role20");
  // let reviewerPe = document.getElementById("PartOfAppl_TypeOfNoti_Role30");

  // //confirmationSection
  // let qpPers1 = document.getElementById("ConfByTermQP_TermReas10_role10");
  // let fsePers1 = document.getElementById("ConfByTermQP_TermReas10_role20");
  // let pePers1 = document.getElementById("ConfByTermQP_TermReas10_role30");

  // let qpPers2 = document.getElementById("ConfByTermQP_TermReas20_role10");
  // let fsePers2 = document.getElementById("ConfByTermQP_TermReas20_role20");
  // let pePers2 = document.getElementById("ConfByTermQP_TermReas20_role30");

  document
    .getElementById("DeclByAppl_IHaveAppoAs40")
    .removeAttribute("mandatory");
  document
    .getElementById("DeclByAppl_IHaveAppoAs40")
    .removeAttribute("checked");

  document.getElementById("ConfByTermQP_Conf10").removeAttribute("mandatory");
  document.getElementById("ConfByTermQP_Conf10").removeAttribute("checked");
  document.getElementById("ConfByTermQP_Conf10").checked = false;

  document.getElementById("ConfByTermQP_Conf20").removeAttribute("mandatory");
  document.getElementById("ConfByTermQP_Conf20").removeAttribute("checked");
  document.getElementById("ConfByTermQP_Conf20").checked = false;

  document.getElementById("ConfByTermQP_Conf30").removeAttribute("mandatory");
  document.getElementById("ConfByTermQP_Conf30").removeAttribute("checked");
  document.getElementById("ConfByTermQP_Conf30").checked = false;

  for (let a of document.querySelectorAll("[name='termDueToReas']")) {
    a.removeAttribute("checked");
    a.removeAttribute("mandatory");
  }

  document
    .getElementById("DeclByAppl_IHaveAppoAs40")
    .removeAttribute("mandatory");
  document
    .getElementById("DeclByAppl_IHaveAppoAs40")
    .removeAttribute("checked");

  clearParticulars();
  clearAllCheckboxes();
  document.getElementById("apq2").setAttribute("hidden", "");
  if (
    document.getElementById("PartOfAppl_TypeOfNoti10").value === "Termination"
  ) {
    for (let a of document.querySelectorAll("[name='termDueToReas']")) {
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
    document
      .getElementById("mastHead")
      .setAttribute(
        "title",
        "NOTICE OF TERMINATION OF QP/FSE/PEER REVIEWER<br>FIRE SAFETY ACT(CAP 109A)[SECTION 25(2)]"
      );
    document.getElementById("tqpNav2").setAttribute("hidden", "");
    document.getElementById("tqpNav").removeAttribute("hidden");
    document.getElementById("apq2").removeAttribute("hidden");
    document
      .getElementById("partDeclAppl")
      .setAttribute("label", "Particulars of Applicant");
    document.getElementById("partTQP").textContent =
      "Particulars of Terminated Qualified Person/Fire Safety Engineer/Peer Reviewer";
    document.getElementById("dueTo").removeAttribute("hidden");
    document.getElementById("byApplicant").removeAttribute("hidden");
    document.getElementById("unavailability").removeAttribute("hidden");
    document.getElementById("deceased").removeAttribute("hidden");
    document.getElementById("declaration").setAttribute("hidden", "");
    //document.getElementById("taq").setAttribute("hidden", "");
    document
      .getElementById("ConfByTermQP_Conf30")
      .setAttribute("mandatory", "");
    document.getElementById("ConfByTermQP_Conf30").setAttribute("checked", "");
    document.getElementById("ConfByTermQP_Conf30").checked = false;
    document.getElementById("trmqp").removeAttribute("hidden");
    document
      .getElementById("Member_Member_Name_QP20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Member_Firm_Name_QP20")
      .setAttribute("mandatory", "");

    document
      .getElementById("ConfByTermQP_TermDate10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByTermQP_TermDate10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_TermDate10").value = "";

    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_AsRequBySect10").value = "";

    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IConfThatFire10").value = "";

    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IHaveOnNoti10").value = "";
    document.getElementById("apq").setAttribute("hidden", "");
    document.getElementById("declr").removeAttribute("hidden");
    document.getElementById("declr1").removeAttribute("hidden");
    document.getElementById("ctq").setAttribute("hidden", "");
    document.getElementById("confi").setAttribute("hidden", "");
    document.getElementById("confi1").setAttribute("hidden", "");
    document.getElementById("confSection1").setAttribute("hidden", "");
    document.getElementById("confSection2").setAttribute("hidden", "");
    document.getElementById("confSection3").setAttribute("hidden", "");
    document.getElementById("submChecklist").setAttribute("hidden", "");
    document.getElementById("SubmChec_check10").removeAttribute("mandatory");
    document.getElementById("SubmChec_check10").removeAttribute("checked");
    // document
    //   .getElementById("DeclByAppl_IHaveAppoAs40")
    //   .setAttribute("mandatory", "");
    // document
    //   .getElementById("DeclByAppl_IHaveAppoAs40")
    //   .setAttribute("checked", "");
    if (
      document.getElementById("PartOfAppl_TermDueToReas10").checked === true
    ) {
      document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = true;
      //document.getElementById("confAQP").removeAttribute("hidden");
      document.getElementById("ctq").removeAttribute("hidden");
      document.getElementById("confi").removeAttribute("hidden");
      document.getElementById("confi1").removeAttribute("hidden");
      document.getElementById("confSection1").removeAttribute("hidden");
      document.getElementById("confSection2").removeAttribute("hidden");
      document.getElementById("confSection3").removeAttribute("hidden");

      document.getElementById("apq").setAttribute("hidden", "");
      document.getElementById("declr").setAttribute("hidden", "");
      document.getElementById("declr1").setAttribute("hidden", "");

      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");

      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("checked", "");
    } else if (
      document.getElementById("PartOfAppl_TermDueToReas20").checked === true
    ) {
      document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = true;
      //document.getElementById("confAQP").removeAttribute("hidden");
      document.getElementById("ctq").removeAttribute("hidden");
      document.getElementById("confi").removeAttribute("hidden");
      document.getElementById("confi1").removeAttribute("hidden");
      document.getElementById("confSection1").removeAttribute("hidden");
      document.getElementById("confSection2").removeAttribute("hidden");
      document.getElementById("confSection3").removeAttribute("hidden");

      document.getElementById("apq").setAttribute("hidden", "");
      document.getElementById("declr").setAttribute("hidden", "");
      document.getElementById("declr1").setAttribute("hidden", "");

      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");

      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("checked", "");
    } else if (
      document.getElementById("PartOfAppl_TermDueToReas40").checked === true
    ) {
      // document.getElementById("confAQP").setAttribute("hidden", "");
      document.getElementById("submChecklist").removeAttribute("hidden");
      document.getElementById("SubmChec_check10").setAttribute("mandatory", "");
      document.getElementById("SubmChec_check10").setAttribute("checked", "");

      document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = false;
      document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = false;
    } else {
      document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = false;
      document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = false;
      // document.getElementById("confAQP").setAttribute("hidden", "");
      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");
    }
  } else if (
    document.getElementById("PartOfAppl_TypeOfNoti10").value === "Appointment"
  ) {
    document
      .getElementById("mastHead")
      .setAttribute(
        "title",
        "NOTICE OF APPOINTMENT OF QP/FSE/PEER REVIEWER<br>FIRE SAFETY ACT(CAP 109A)[SECTION 25(3)]"
      );
    for (let a of document.querySelectorAll("[name='termDueToReas']")) {
      a.checked = false;
    }
    document
      .getElementById("DeclByAppl_IHaveAppoAs40")
      .setAttribute("mandatory", "");
    document
      .getElementById("DeclByAppl_IHaveAppoAs40")
      .setAttribute("checked", "");
    document.getElementById("tqpNav2").setAttribute("page-number", "5");
    document.getElementById("tqpNav2").removeAttribute("hidden");
    document.getElementById("tqpNav").setAttribute("hidden", "");
    document
      .getElementById("partDeclAppl")
      .setAttribute("label", "Particulars and Declaration of Applicant");

    document.getElementById("partTQP").textContent =
      "Particulars of Appointed Qualified Person/Fire Safety Engineer/Peer Reviewer";
    document.getElementById("dueTo").setAttribute("hidden", "");
    document.getElementById("byApplicant").setAttribute("hidden", "");
    document.getElementById("unavailability").setAttribute("hidden", "");
    document.getElementById("deceased").setAttribute("hidden", "");
    document.getElementById("declaration").removeAttribute("hidden");
    //document.getElementById("taq").setAttribute("hidden", "");

    document.getElementById("trmqp").setAttribute("hidden", "");
    document
      .getElementById("Member_Member_Name_QP20")
      .removeAttribute("mandatory");
    document
      .getElementById("Member_Firm_Name_QP20")
      .removeAttribute("mandatory");

    document.getElementById("ConfByTermQP_Conf10").removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_Conf10").removeAttribute("checked");
    document.getElementById("ConfByTermQP_Conf10").checked = false;

    document.getElementById("ConfByTermQP_Conf20").removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_Conf20").removeAttribute("checked");
    document.getElementById("ConfByTermQP_Conf20").checked = false;

    document
      .getElementById("ConfByTermQP_TermDate10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByTermQP_TermDate10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_TermDate10").value = "";

    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_AsRequBySect10").value = "";

    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IConfThatFire10").value = "";

    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IHaveOnNoti10").value = "";

    document.getElementById("apq").removeAttribute("hidden");
    document.getElementById("trmqp").removeAttribute("hidden", "");
    document.getElementById("declr").removeAttribute("hidden");
    document.getElementById("declr1").removeAttribute("hidden");
    document.getElementById("ctq").setAttribute("hidden", "");
    document.getElementById("confi").setAttribute("hidden", "");
    document.getElementById("confi1").setAttribute("hidden", "");
    document.getElementById("confSection1").setAttribute("hidden", "");
    document.getElementById("confSection2").setAttribute("hidden", "");
    document.getElementById("confSection3").setAttribute("hidden", "");
    document.getElementById("submChecklist").setAttribute("hidden", "");
    document.getElementById("SubmChec_check10").removeAttribute("mandatory");
    document.getElementById("SubmChec_check10").removeAttribute("checked");
    document
      .getElementById("ConfByTermQP_Conf10")
      .setAttribute("mandatory", "");
    document.getElementById("ConfByTermQP_Conf10").setAttribute("checked", "");
    // document
    //   .getElementById("DeclByAppl_IHaveAppoAs40")
    //   .setAttribute("mandatory", "");
    // document
    //   .getElementById("DeclByAppl_IHaveAppoAs40")
    //   .setAttribute("checked", "");
  } else if (
    document.getElementById("PartOfAppl_TypeOfNoti10").value ===
    "Termination & Appointment"
  ) {
    for (let a of document.querySelectorAll("[name='termDueToReas']")) {
      a.setAttribute("checked", "");
      a.setAttribute("mandatory", "");
    }
    document
      .getElementById("mastHead")
      .setAttribute(
        "title",
        "NOTICE OF TERMINATION AND APPOINTMENT OF QP/FSE/PEER REVIEWER<BR>FIRE SAFETY ACT(CAP 109A)[SECTION 25(2) AND SECTION 25(3)]"
      );

    document.getElementById("tqpNav").setAttribute("page-number", "5");
    document.getElementById("tqpNav2").setAttribute("page-number", "6");
    document.getElementById("tqpNav").removeAttribute("hidden");
    document.getElementById("tqpNav2").removeAttribute("hidden");
    document
      .getElementById("partDeclAppl")
      .setAttribute("label", "Particulars and Declaration of Applicant");

    document.getElementById("trmqp").removeAttribute("hidden");
    document
      .getElementById("Member_Member_Name_QP20")
      .setAttribute("mandatory", "");
    document
      .getElementById("Member_Firm_Name_QP20")
      .setAttribute("mandatory", "");

    document.getElementById("partTQP").textContent =
      "Particulars of Appointed Qualified Person/Fire Safety Engineer/Peer Reviewer";
    document.getElementById("dueTo").removeAttribute("hidden");
    document.getElementById("byApplicant").removeAttribute("hidden");
    document.getElementById("unavailability").removeAttribute("hidden");
    document.getElementById("deceased").removeAttribute("hidden");
    document.getElementById("declaration").removeAttribute("hidden");
    document.getElementById("ConfByTermQP_Conf10").removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_Conf10").removeAttribute("checked");
    document.getElementById("ConfByTermQP_Conf10").checked = false;

    document.getElementById("ConfByTermQP_Conf20").removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_Conf20").removeAttribute("checked");
    document.getElementById("ConfByTermQP_Conf20").checked = false;

    document
      .getElementById("ConfByTermQP_TermDate10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByTermQP_TermDate10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_TermDate10").value = "";

    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_AsRequBySect10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_AsRequBySect10").value = "";

    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IConfThatFire10").value = "";

    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .removeAttribute("mandatory");
    document.getElementById("ConfByQualPers_IHaveOnNoti10").value = "";

    document.getElementById("apq").removeAttribute("hidden");
    document.getElementById("declr").removeAttribute("hidden");
    document.getElementById("declr1").removeAttribute("hidden");
    document.getElementById("ctq").setAttribute("hidden", "");
    document.getElementById("confi").setAttribute("hidden", "");
    document.getElementById("confi1").setAttribute("hidden", "");
    document.getElementById("confSection1").setAttribute("hidden", "");
    document.getElementById("confSection2").setAttribute("hidden", "");
    document.getElementById("confSection3").setAttribute("hidden", "");
    document.getElementById("submChecklist").setAttribute("hidden", "");
    document.getElementById("SubmChec_check10").removeAttribute("mandatory");
    document.getElementById("SubmChec_check10").removeAttribute("checked");
    document
      .getElementById("DeclByAppl_IHaveAppoAs40")
      .setAttribute("mandatory", "");
    document
      .getElementById("DeclByAppl_IHaveAppoAs40")
      .setAttribute("checked", "");

    if (
      document.getElementById("PartOfAppl_TermDueToReas40").checked === true
    ) {
      // document.getElementById("confAQP").setAttribute("hidden", "");

      document.getElementById("submChecklist").removeAttribute("hidden");
      document.getElementById("SubmChec_check10").setAttribute("mandatory", "");
      document.getElementById("SubmChec_check10").setAttribute("checked", "");

      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("checked", "");
    } else if (
      document.getElementById("PartOfAppl_TermDueToReas10").checked === true
    ) {
      document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = true;
      //document.getElementById("confAQP").removeAttribute("hidden");
      document.getElementById("ctq").removeAttribute("hidden");
      document.getElementById("confi").removeAttribute("hidden");
      document.getElementById("confi1").removeAttribute("hidden");
      document.getElementById("confSection1").removeAttribute("hidden");
      document.getElementById("confSection2").removeAttribute("hidden");
      document.getElementById("confSection3").removeAttribute("hidden");

      document.getElementById("apq").removeAttribute("hidden");
      document.getElementById("declr").removeAttribute("hidden");
      document.getElementById("declr1").removeAttribute("hidden");

      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");

      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("checked", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("checked", "");
    } else if (
      document.getElementById("PartOfAppl_TermDueToReas20").checked === true
    ) {
      document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = true;
      // document.getElementById("confAQP").removeAttribute("hidden");
      document.getElementById("ctq").removeAttribute("hidden");
      document.getElementById("confi").removeAttribute("hidden");
      document.getElementById("confi1").removeAttribute("hidden");
      document.getElementById("confSection1").removeAttribute("hidden");
      document.getElementById("confSection2").removeAttribute("hidden");
      document.getElementById("confSection3").removeAttribute("hidden");

      document.getElementById("apq").removeAttribute("hidden");
      document.getElementById("declr").removeAttribute("hidden");
      document.getElementById("declr1").removeAttribute("hidden");

      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");

      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf10")
        .setAttribute("checked", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("mandatory", "");
      document
        .getElementById("ConfByTermQP_Conf20")
        .setAttribute("checked", "");
    } else {
      // document.getElementById("confAQP").removeAttribute("hidden");
      document.getElementById("apq").setAttribute("hidden", "");
      document.getElementById("declr").removeAttribute("hidden");
      document.getElementById("declr1").removeAttribute("hidden");
      document.getElementById("ctq").setAttribute("hidden", "");
      document.getElementById("confi").setAttribute("hidden", "");
      document.getElementById("confi1").setAttribute("hidden", "");
      document.getElementById("confSection1").setAttribute("hidden", "");
      document.getElementById("confSection2").setAttribute("hidden", "");
      document.getElementById("confSection3").setAttribute("hidden", "");
      document.getElementById("submChecklist").setAttribute("hidden", "");
      document.getElementById("SubmChec_check10").removeAttribute("mandatory");
      document.getElementById("SubmChec_check10").removeAttribute("checked");
    }
  } else {
    document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = false;
    document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = false;
    document
      .getElementById("mastHead")
      .setAttribute("title", "NOTICE OF QP/FSE/PEER REVIEWER FIRE SAFETY ACT");
    document
      .getElementById("partDeclAppl")
      .setAttribute("label", "Particulars of Applicant");
    document
      .getElementById("tqpNav")
      .setAttribute(
        "label",
        "Particulars of Qualified Person/Fire Safety Engineer/Peer Reviewer"
      );
    document.getElementById("partTQP").textContent =
      "Particulars of Qualified Person/Fire Safety Engineer/Peer Reviewer";
    document.getElementById("ConfByTermQP_Conf10").removeAttribute("mandatory");
    document.getElementById("ConfByTermQP_Conf10").removeAttribute("checked");
  }
}

function clearAllCheckboxes() {
  document.getElementById("ConfByTermQP_TermDate10").value = "";

  //

  document.getElementById("DeclByAppl_IHaveAppoAs40").checked = false;
  document.getElementById("DeclByAppl_IHaveAppoAs10").value = "";
  document
    .getElementById("DeclByAppl_IHaveAppoAs10")
    .removeAttribute("mandatory");
  document
    .getElementById("DeclByAppl_IHaveAppoAs10")
    .setAttribute("disabled", "");
  document.getElementById("DeclByAppl_IHaveAppoAs20").value = "";
  document.getElementById("DeclByAppl_IHaveAppoAs30").value = "";
  document
    .getElementById("DeclByAppl_IHaveAppoAs30")
    .removeAttribute("mandatory");
  document
    .getElementById("DeclByAppl_IHaveAppoAs30")
    .setAttribute("disabled", "");

  //

  document.getElementById("ConfByTermQP_Conf10").checked = false;
  document.getElementById("ConfByTermQP_TermDate10").value = "";
  document
    .getElementById("ConfByTermQP_TermDate10")
    .removeAttribute("mandatory");
  document
    .getElementById("ConfByTermQP_TermDate10")
    .setAttribute("disabled", "");
  document.getElementById("ConfByTermQP_Conf30").checked = false;
  document.getElementById("ConfByTermQP_TermDate30").value = "";
  document
    .getElementById("ConfByTermQP_TermDate30")
    .removeAttribute("mandatory");
  document
    .getElementById("ConfByTermQP_TermDate30")
    .setAttribute("disabled", "");

  //

  document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = false;
  document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = false;
  document.getElementById("ConfByQualPers_IConfThatFire10").value = "";
  document
    .getElementById("ConfByQualPers_IConfThatFire10")
    .removeAttribute("mandatory");
  document
    .getElementById("ConfByQualPers_IConfThatFire10")
    .setAttribute("disabled", "");
  document.getElementById("ConfByQualPers_IHaveOnNoti10").value = "";
  document
    .getElementById("ConfByQualPers_IHaveOnNoti10")
    .removeAttribute("mandatory");
  document
    .getElementById("ConfByQualPers_IHaveOnNoti10")
    .setAttribute("disabled", "");
  document.getElementById("SubmChec_check10").checked = false;
  document.getElementById("SubmChec_check10").removeAttribute("mandatory");
}

function clearParticulars() {
  let page5 = document.getElementById("page5");
  let page6 = document.getElementById("page6");

  for (let page5Boxes of page5.querySelectorAll(
    "cn2-textbox, cn2-datefield, cn2-textarea, cn2-select"
  )) {
    page5Boxes.value = "";
    if (page5Boxes.hasAttribute("data-invalid")) {
      page5Boxes.removeAttribute("data-invalid");
      page5Boxes.removeAttribute("data-invalid-message");
    }
  }

  document
    .getElementById("Member_Member_Name_QP20")
    .shadowRoot.querySelector("select")
    .removeAttribute("class");
  document
    .getElementById("Member_Member_Name_QP20")
    .shadowRoot.querySelector("select")
    .setAttribute("class", "form-control input-text-required");

  for (let page6Boxes of page6.querySelectorAll(
    "cn2-textbox, cn2-datefield, cn2-textarea, cn2-select"
  )) {
    page6Boxes.value = "";
    if (page6Boxes.hasAttribute("data-invalid")) {
      page6Boxes.removeAttribute("data-invalid");
      page6Boxes.removeAttribute("data-invalid-message");
    }
  }

  document
    .getElementById("Member_Member_Name_QP10")
    .shadowRoot.querySelector("select")
    .removeAttribute("class");
  document
    .getElementById("Member_Member_Name_QP10")
    .shadowRoot.querySelector("select")
    .setAttribute("class", "form-control input-text-required");
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

function checkTemplateValid(el) {
  let lastTwo = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{2}(?![0-9])))");
  let lastFour = new RegExp("[A-Z]{3}\/[A-Z][0-9]{5}\/(([0-9]{4}(?![0-9])))");
  if (el.value.match(lastFour) || el.value.match(lastTwo)) {
    // if (/\s/.test(el.value)) {
    document.getElementById(el.id).removeAttribute("data-invalid");
  } else if (el.value.match(/[A-Z]{3}[/][A-Z][0-9]{5}[/][0-9]{3}/)) {
    document.getElementById(el.id).setAttribute("data-invalid", "");
    document
      .getElementById(el.id)
      .setAttribute(
        "data-invalid-message",
        "The SCDF Reference No. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
      );
  } else if (el.value === "   /      /    ") {
    document.getElementById(el.id).removeAttribute("data-invalid");
    document.getElementById(el.id).removeAttribute("mandatory");
    document.getElementById(el.id).setAttribute("mandatory", "");
  } else {
    document.getElementById(el.id).setAttribute("data-invalid", "");
    document
      .getElementById(el.id)
      .setAttribute(
        "data-invalid-message",
        "The SCDF Reference No. format is XXX/XYYYYY/YYYY or XXX/XYYYYY/YY where Y is a valid numeric no. and X is a valid character"
      );
  }
  // } else {
  //   document.getElementById(el.id).removeAttribute("data-invalid");
  // }
}

function ConfByTermQP_TermReas_select() {
  if (document.getElementById("PartOfAppl_TermDueToReas10").checked) {
    document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = false;
    document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = true;
  }
  if (document.getElementById("PartOfAppl_TermDueToReas20").checked) {
    document.getElementById("ConfByQualPers_AsRequBySect_IHaveTermMy20").checked = false;
    document.getElementById("ConfByQualPers_AsRequBySect_MyAppoAsThe30").checked = true;
  }
}

function DeclByAppl_IHaveAppoAs40_change(element) {
  let qpValue = document.getElementById("Member_Member_Name_QP10").valueLabel;

  let textboxValue = document.getElementById("DeclByAppl_IHaveAppoAs20");

  if (element.checked) {
    document
      .getElementById("DeclByAppl_IHaveAppoAs10")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .removeAttribute("disabled");
    document
      .getElementById("DeclByAppl_IHaveAppoAs10")
      .setAttribute("mandatory", "");
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .setAttribute("mandatory", "");
    textboxValue.value = qpValue === "Please Select" ? "" : qpValue;
  } else {
    document
      .getElementById("DeclByAppl_IHaveAppoAs10")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .setAttribute("disabled", "");
    document
      .getElementById("DeclByAppl_IHaveAppoAs10")
      .removeAttribute("mandatory");
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .removeAttribute("mandatory");
    textboxValue.value = "";

    document.getElementById("DeclByAppl_IHaveAppoAs10").value = "";
    document.getElementById("DeclByAppl_IHaveAppoAs20").value = "";
    document.getElementById("DeclByAppl_IHaveAppoAs30").value = "";
  }
}

function toggle_select() {
  let checkBox = document.getElementById("DeclByAppl_IHaveAppoAs40");
  let qpValue = document.getElementById("Member_Member_Name_QP10").valueLabel;

  let textboxValue = document.getElementById("DeclByAppl_IHaveAppoAs20");

  if (checkBox.checked) {
    textboxValue.value = qpValue === "Please Select" ? "" : qpValue;
  } else {
    textboxValue.value = "";
  }
}
function getDetails() {
  let data = [
    {
      SCDF: [
        {
          Email: "TAN_Chung_Yee@scdf.gov.sg",
          TelNo: "68481457",
          AreaOfSupp: "Submissions",
        },
        {
          Email: "",
          TelNo: "62800000",
          AreaOfSupp: "E-Payment / Status Of Application",
        },
      ],
    },
  ];
  return data;
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

function rep(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

function hideRolePR() {
  let role10 = document.getElementById("PartOfAppl_TypeOfNoti_Role10");
  let role20 = document.getElementById("PartOfAppl_TypeOfNoti_Role20");
  let role30 = document.getElementById("PartOfAppl_TypeOfNoti_Role30");

  if (role10.checked === true || role20.checked === true) {
    role30.setAttribute("disabled", "");
  } else {
    role30.removeAttribute("disabled");
  }
}

function hideRoleQPAndFSE() {
  let role10 = document.getElementById("PartOfAppl_TypeOfNoti_Role10");
  let role20 = document.getElementById("PartOfAppl_TypeOfNoti_Role20");
  let role30 = document.getElementById("PartOfAppl_TypeOfNoti_Role30");

  if (role30.checked === true) {
    role10.setAttribute("disabled", "");
    role20.setAttribute("disabled", "");
  } else {
    role10.removeAttribute("disabled");
    role20.removeAttribute("disabled");
  }
}

function setRolesQP(element) {
  if (element.checked) {
    document.getElementById("DeclByApptQP_role10").checked = true;
    document.getElementById("ConfByTermQP_Role10").checked = true;
    document.getElementById("ConfByTermQP_Role40").checked = true;
    document.getElementById("ConfByTermQP_Role70").checked = true;
    document.getElementById("ConfByTermQP_TermReas10_role10").checked = true;
    document.getElementById("ConfByTermQP_TermReas20_role10").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti10_role10").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti20_role10").checked = true;
  } else {
    document.getElementById("ConfByTermQP_Role10").checked = false;
    document.getElementById("ConfByTermQP_Role40").checked = false;
    document.getElementById("DeclByApptQP_role10").checked = false;
    document.getElementById("ConfByTermQP_Role70").checked = false;
    document.getElementById("ConfByTermQP_TermReas10_role10").checked = false;
    document.getElementById("ConfByTermQP_TermReas20_role10").checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti10_role10"
    ).checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti20_role10"
    ).checked = false;
  }
}

function setRolesFSE(element) {
  if (element.checked) {
    document.getElementById("DeclByApptQP_role20").checked = true;
    document.getElementById("ConfByTermQP_Role20").checked = true;
    document.getElementById("ConfByTermQP_Role50").checked = true;
    document.getElementById("ConfByTermQP_Role80").checked = true;
    document.getElementById("ConfByTermQP_TermReas10_role20").checked = true;
    document.getElementById("ConfByTermQP_TermReas20_role20").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti10_role20").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti20_role20").checked = true;
  } else {
    document.getElementById("DeclByApptQP_role20").checked = false;
    document.getElementById("ConfByTermQP_Role50").checked = false;
    document.getElementById("ConfByTermQP_Role20").checked = false;
    document.getElementById("ConfByTermQP_Role80").checked = false;
    document.getElementById("ConfByTermQP_TermReas10_role20").checked = false;
    document.getElementById("ConfByTermQP_TermReas20_role20").checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti10_role20"
    ).checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti20_role20"
    ).checked = false;
  }
}

function setRolesPR(element) {
  if (element.checked) {
    document.getElementById("DeclByApptQP_role30").checked = true;
    document.getElementById("ConfByTermQP_Role30").checked = true;
    document.getElementById("ConfByTermQP_Role60").checked = true;
    document.getElementById("ConfByTermQP_Role90").checked = true;
    document.getElementById("ConfByTermQP_TermReas10_role30").checked = true;
    document.getElementById("ConfByTermQP_TermReas20_role30").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti10_role30").checked = true;
    document.getElementById("ConfByTermQP_IHaveOnNoti20_role30").checked = true;
  } else {
    document.getElementById("DeclByApptQP_role30").checked = false;
    document.getElementById("ConfByTermQP_Role30").checked = false;
    document.getElementById("ConfByTermQP_Role60").checked = false;
    document.getElementById("ConfByTermQP_Role90").checked = false;
    document.getElementById("ConfByTermQP_TermReas10_role30").checked = false;
    document.getElementById("ConfByTermQP_TermReas20_role30").checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti10_role30"
    ).checked = false;
    document.getElementById(
      "ConfByTermQP_IHaveOnNoti20_role30"
    ).checked = false;
  }
}

function addTableSdfRef(pDiv) {
  let parent = document.getElementById(pDiv);
  let tempDiv = parent.getElementsByTagName("div");
  let targetDiv = [];
  for (let div of tempDiv) {
    if (div.hasAttribute("id")) {
      targetDiv.push(div);
    }
  }
  if (targetDiv.length > 1) {
    let textbox = targetDiv[targetDiv.length - 1].querySelectorAll(
      "cn2-textbox"
    );
    for (let target of textbox) {
      if (target.hasAttribute("data-invalid")) {
        target.removeAttribute("data-invalid");
      }
    }
  }
}

function ConfByTermQP_Conf_change(element) {
  let fields = [
    document.getElementById("ConfByQualPers_AsRequBySect10"),
    document.getElementById("ConfByQualPers_IConfThatFire10"),
    document.getElementById("ConfByQualPers_IHaveOnNoti10"),
  ];

  if (element.id == "ConfByTermQP_Conf10") {
    if (element.checked) {
      document
        .getElementById("ConfByTermQP_TermDate10")
        .removeAttribute("disabled");
      document
        .getElementById("ConfByTermQP_TermDate10")
        .setAttribute("mandatory", "");
      document.getElementById("ConfByTermQP_TermDate10").value = "";
    } else {
      document
        .getElementById("ConfByTermQP_TermDate10")
        .removeAttribute("mandatory");
      document
        .getElementById("ConfByTermQP_TermDate10")
        .setAttribute("disabled", "");
      document.getElementById("ConfByTermQP_TermDate10").value = "";
    }
  } else if (element.id == "ConfByTermQP_Conf20") {
    if (element.checked) {
      for (let targets of fields) {
        targets.removeAttribute("disabled");
        targets.setAttribute("mandatory", "");
        targets.value = "";
      }
    } else {
      for (let targets of fields) {
        targets.setAttribute("disabled", "");
        targets.removeAttribute("mandatory");
        targets.value = "";
      }
    }
  } else if (element.id == "ConfByTermQP_Conf30") {
    if (element.checked) {
      document
        .getElementById("ConfByTermQP_TermDate30")
        .removeAttribute("disabled");
      document
        .getElementById("ConfByTermQP_TermDate30")
        .setAttribute("mandatory", "");
      document.getElementById("ConfByTermQP_TermDate30").value = "";
    } else {
      document
        .getElementById("ConfByTermQP_TermDate30")
        .removeAttribute("mandatory");
      document
        .getElementById("ConfByTermQP_TermDate30")
        .setAttribute("disabled", "");
      document.getElementById("ConfByTermQP_TermDate30").value = "";
    }
  }

  if (
    document.getElementById("PartOfAppl_TypeOfNoti10").value === "Appointment"
  ) {
    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .removeAttribute("mandatory");
    document
      .getElementById("ConfByQualPers_IConfThatFire10")
      .setAttribute("disabled", "");
    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .removeAttribute("mandatory");
    document
      .getElementById("ConfByQualPers_IHaveOnNoti10")
      .setAttribute("disabled", "");
  }
}

function changeHimHer(element) {
  if (element.value === "Mr") {
    document.getElementById("DeclByAppl_IHaveAppoAs30").value = "him";
  } else if (element.value === "Ms") {
    document.getElementById("DeclByAppl_IHaveAppoAs30").value = "her";
  } else {
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .removeAttribute("mandatory");
    document.getElementById("DeclByAppl_IHaveAppoAs30").value = "";
    document
      .getElementById("DeclByAppl_IHaveAppoAs30")
      .setAttribute("mandatory", "");
  }
}

function removeManda(element) {
  if (element.checked) {
    element.removeAttribute("checked");
    element.removeAttribute("mandatory");
  } else {
    element.setAttribute("checked", "");
    element.setAttribute("mandatory", "");
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

// START WEB SERVICE ---------------------------------------

function getQuery(url, query) {
  let rawQuery = url.split("/");
  let addQuery = rawQuery.pop();
  let newQuery = addQuery.split("?").slice(0, -1);
  let finalQuery = newQuery[0] + query[0];

  for (let i = 1; i < newQuery.length; i++) {
    finalQuery = finalQuery + newQuery[i] + query[i];
  }
  return finalQuery.toString();
}

function getUrl(url) {
  let rawUrl = url.split("/").slice(0, -1);
  let newUrl = rawUrl[0];
  for (let i = 1; i < rawUrl.length; i++) {
    newUrl = newUrl + "/" + rawUrl[i];
  }
  return newUrl.toString();
}

function removeSlash(value) {
  let rawValue = value.split("/");
  let newValue = rawValue[0];
  for (let i = 1; i < rawValue.length; i++) {
    newValue = newValue + rawValue[i];
  }
  return newValue.toString();
}

function addRemoveValidations(parentId) {
  let parent = document.getElementById(parentId);
  let textbox = parent.querySelectorAll("cn2-textbox");
  let errorMsg = parent.querySelectorAll(
    `[prefix="errMsgTerminationAppSCDFRefNos"]`
  );
  for (let i = 0; i < textbox.length; i++) {
    if (!textbox[i].value) {
      removeValidations(textbox[i]);
      errorMsg[i].innerHTML = "";
    }
  }
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

// START WEB SERVICE ---------------------------------------

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

function populateTerminationAppSCDFRefNos() {
  let con = document.getElementById("otherForm");
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON20"]);
  let refNo = document.getElementById("Project_Project_Ref_No10").value;
  let query = getQuery(jsonData["agencyUrlJSON20"], [refNo]);

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
  updateAgencyUrl("agencyUrl20", query);

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse === "object") {
      if (dataResponse.length > 0) {
        jsonData["appvBPplan10"] = [];
        let newOptions = [];
        for (let i = 0; i < dataResponse.length; i++) {
          newOptions.push(
            `${dataResponse[i]["scdfRefNo"]}:${dataResponse[i]["scdfRefNo"]}`
          );
        }

        document
          .getElementById("PartOfAppl_FSSBRefeNumb10")
          .setAttribute("options", newOptions.join(","));

        convertTextToSelect("PartOfAppl_FSSBRefeNumb10");
      }
    }
  }
}

function convertTextToSelect(id) {
  let select = document.getElementById(id);
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

function validateTerminationAppSCDFRefNos(element) {
  let parent = findTable(document.getElementById(element.id));
  let mainElement = removeSlash(document.getElementById(element.id).value);
  let projRefNo = document.getElementById("Project_Project_Ref_No10").value;
  let agencyUrlJSON = getUrl(jsonData["agencyUrlJSON10"]);
  let query = getQuery(jsonData["agencyUrlJSON10"], [projRefNo, mainElement]);
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
  updateAgencyUrl("agencyUrl10", query);
  let errorMsg = parent.querySelector(
    `[prefix="errMsgTerminationAppSCDFRefNos"]`
  );

  errorMsg.innerHTML = "";

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(element);
      if ("Y" == dataResponse.isValid) {
        element.setAttribute("data-valid", "");
        element.removeAttribute("data-invalid-message");
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled");
        errorMsg.innerHTML = "Error: Not Valid/No record in agency database.";
      }
    }
  }
}
// END WEB SERVICE ---------------------------------------

function atLeastOne(element) {
  let name = document.querySelectorAll(`[name=${element.name}]`);
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
}

function clearUEN(element) {
  let uen = document.getElementById(element);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function nricMasking(element) {
  let dd = document.getElementById(element.id).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  document.getElementById(element.id).value = replaced;
}

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
