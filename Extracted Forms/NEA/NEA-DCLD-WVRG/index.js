function enableAttachmentField(e, pdiv) {
  let element = document.getElementById(e.id);
  let parentDiv = element.parentNode.parentNode.querySelector('cn2-textarea');
  let divs = document.getElementById(pdiv).getElementsByTagName('div');
  let span = document.getElementById('attcOth_id');
  for (let div of divs) {
    if (div.hasAttribute('id')) {
      if (div.querySelector('cn2-checkbox').checked) {
        span.innerHTML = 'Others, please specify*';
        break;
      } else {
        span.innerHTML = 'Others, please specify';
      }
    }
  }
  if (element.checked) {
    parentDiv.removeAttribute('disabled', '');
    parentDiv.setAttribute('mandatory', '');
  } else {
    parentDiv.setAttribute('disabled', '');
    parentDiv.removeAttribute('mandatory', '');
    parentDiv.value = '';
  }
}
function removeSelectUENerror(uenFieldID) {
  let uen = document.getElementById(uenFieldID);
  uen.removeAttribute("data-invalid");
  uen.removeAttribute("data-invalid-message");
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

function addSetDisabled(pDiv) {
  let parent = document.getElementById(pDiv).getElementsByTagName('div');
  let checkbox;
  let textarea;
  for (let x = 0; x < parent.length; x++) {
    if (parent[x].hasAttribute('id')) {
      checkbox = parent[x].querySelector('cn2-checkbox');
      textarea = parent[x].querySelector('cn2-textarea');
      parent[x].querySelector('cn2-button').removeAttribute('disabled');
      if (checkbox.checked) {
        textarea.setAttribute('mandatory', '');
        textarea.removeAttribute('disabled');
      } else {
        textarea.setAttribute('disabled', '');
        textarea.removeAttribute('mandatory');
        textarea.value = '';
      }
    }
  }
}

function attachment_deleteButton(parentDiv) {
  parentDiv = document.getElementById(parentDiv);
  let tempDivs = parentDiv.getElementsByTagName('div');
  let targetDivs = [];
  for (let div of tempDivs) {
    if (div.hasAttribute('id')) {
      targetDivs.push(div);
    }
  }
  if (targetDivs.length == 1) {
    let button = targetDivs[0].querySelector('cn2-button');
    button.setAttribute('disabled', '');
  }
}

function setAsterisk() {
  let el = document.querySelectorAll("[prefix='SubmChec_A']");

  stopHere: for (let x of el) {
    if (x.hasAttribute('mandatory')) {
      document.getElementById('attcOth_id').innerHTML = 'Others, please specify*';
      break stopHere;
    } else {
      document.getElementById('attcOth_id').innerHTML = 'Others, please specify';
    }
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
function showhelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
function hideHelp() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
