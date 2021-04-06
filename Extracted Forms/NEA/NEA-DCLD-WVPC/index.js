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

function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

