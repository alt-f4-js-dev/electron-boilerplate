function Member_Member_Name_QP10_change(element) {
  document.getElementById(
    "DeclByAppl_InAccoWithSect10"
  ).value = document.getElementById(element.id).valueLabel;
}

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

function DeclByQualPers_IConfThatI10_change(element) {
  let checkbox = document.getElementById(element.id);
  if (checkbox.checked) {
    checkbox.removeAttribute("checked");
    checkbox.removeAttribute("mandatory");
  } else {
    checkbox.setAttribute("checked", "");
    checkbox.setAttribute("mandatory", "");
  }
}
function removeAddUENerror(element, uenFieldPrefix, suffix) {
  let id = getId(element.id);
  let uen = document.getElementById(uenFieldPrefix + id + suffix);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

function disableDelete(containerName, deleteClass) {
  let formContainer = document.getElementById(containerName);
  let formCount = formContainer.childElementCount;
  if (formCount < 2) {
    document.querySelector(`.${deleteClass}`).setAttribute("disabled", "");
  } else {
    let deleteBtns = document.querySelectorAll(`.${deleteClass}`);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].removeAttribute("disabled");
    }
  }
}

function findTable(el) {
  while (!el.hasAttribute("parent")) {
    el = el.parentElement;
  }
  return el;
}

function nricMaskingAccor(el, prefix) {
  let parent = findTable(document.getElementById(el.id));
  let dd = parent.querySelector(`[prefix="${prefix}"]`).value;
  let replaced = dd.replace(/.(?=.{4,}$)/g, "*");
  parent.querySelector(`[prefix="${prefix}"]`).value = replaced;
}
