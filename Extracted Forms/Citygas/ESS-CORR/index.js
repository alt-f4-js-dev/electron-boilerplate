document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
  document.getElementById("noteId").innerHTML =
    "< *Reference to WD* > <br> CYT-YYDNNN <br> CZT-YYCNNN ";
});

function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
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

function addRemoveError(element) {
  let email = document.querySelectorAll('[prefix="Project_Project_Email"]');
  let childCount = document.getElementById("psda-container").childElementCount;
  if (childCount > 1) {
    email[email.length - 1].removeAttribute("data-invalid");
    email[email.length - 1].removeAttribute("data-invalid-message");
  }
}
