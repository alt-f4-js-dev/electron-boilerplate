function checkedManda(element) {
	let checkbox = document.getElementById(element.id);
	if (checkbox.checked) {
		checkbox.removeAttribute('mandatory');
		checkbox.removeAttribute('checked');
	} else {
		checkbox.setAttribute('mandatory', '');
		checkbox.setAttribute('checked', '');
	}
}

function WorkAffeSewe10_change(element) {
	let mainCheck = document.getElementById(element.id);
	let mand_checkboxes = [
		document.getElementById('SitePlanFstStyPlan10'),
		document.getElementById('SewPlan10'),
		document.getElementById('Attachment_CCTV10'),

		document.getElementById('lblDeclaration_A1'),
		document.getElementById('lblDeclaration_Certify1'),
		document.getElementById('lblDeclaration_C1')
	];

	let opt_checkboxes = [
		document.getElementById('Attachment_Pump_install10'),
		document.getElementById('Attachment_Others10'),
		document.getElementById('PluCont_RegLicense_SPChk10'),
		document.getElementById('PluCont_RegLicense_PUBChk10'),
		document.getElementById('PluCont_RegLicense_NAChk10')
	];
	let fields = [
		document.getElementById('Member_Member_Name_QP250'),
		document.getElementById('Member_Member_Name_QP280'),
		document.getElementById('Member_Member_Name_QP290'),
		document.getElementById('Member_Member_Name_LPLUMBCONT30')
	];
	let disabled_fields = [
		document.getElementById('Member_Member_Name_QP270'),
		document.getElementById('Member_Member_Name_QP200'),
		document.getElementById('PluCont_RegLicense_SP10'),
		document.getElementById('PluCont_RegLicense_PUB10'),
		document.getElementById('Member_Professional_No_QP250'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP250'),
		document.getElementById('Member_Tel_No_QP250'),
		document.getElementById('Member_Email_Address1_QP250'),
		document.getElementById('Member_Firm_Name_QP250'),
		document.getElementById('Member_Professional_No_QP280'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP280'),
		document.getElementById('Member_Tel_No_QP280'),
		document.getElementById('Member_Email_Address1_QP280'),
		document.getElementById('Member_Firm_Name_QP280'),
		document.getElementById('Member_Professional_No_QP290'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP290'),
		document.getElementById('Member_Tel_No_QP290'),
		document.getElementById('Member_Email_Address1_QP290'),
		document.getElementById('Member_Firm_Name_QP290'),
		// document.getElementById("Member_IC_Passport_No_LPLUMBCONT30"),
		document.getElementById('Member_Firm_Name_LPLUMBCONT30'),
		document.getElementById('Member_Email_Address1_LPLUMBCONT30')
	];
	if (mainCheck.checked) {
		fields[0].setAttribute('mandatory', '');
		fields[1].setAttribute('mandatory', '');
		fields[3].setAttribute('mandatory', '');
		for (let checkbox of mand_checkboxes) {
			checkbox.removeAttribute('disabled');
			checkbox.setAttribute('mandatory', '');
			checkbox.setAttribute('checked', '');
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.removeAttribute('disabled');
		}
		for (let field of fields) {
			field.removeAttribute('disabled');
		}
	} else {
		fields[3].removeAttribute('mandatory');
		fields[0].removeAttribute('mandatory');
		fields[1].removeAttribute('mandatory');
		for (let field of fields) {
			field.setAttribute('disabled', '');
			field.value = '';
		}
		for (let field of disabled_fields) {
			field.setAttribute('disabled', '');
			field.removeAttribute('mandatory');
			field.value = '';
		}
		for (let checkbox of mand_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.removeAttribute('mandatory');
			checkbox.removeAttribute('checked');
			checkbox.checked = false;
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
	}
}
//////////////////////////////////////////////////////////////////

function WorkAffeSani10_change(element) {
	let mainCheck = document.getElementById(element.id);
	let mand_checkboxes = [
		document.getElementById('SectionA2_Attachment1'),
		document.getElementById('AttachDeclaration_A1'),
		document.getElementById('AttachDeclaration_B1'),
		document.getElementById('AttachDeclaration_C1'),
		document.getElementById('AttachDeclaration_E1'),
		document.getElementById('AttachDeclaration_F1'),
		document.getElementById('CompOfSaniWork_ICertCompSani10'),
		document.getElementById('CompOfSaniWork_A10'),
		document.getElementById('CompOfSaniWork_B10'),
		document.getElementById('CompOfSaniWork_C10'),
		document.getElementById('CompOfSaniWork_D10'),
		document.getElementById('CompOfSaniWork_E10'),
		document.getElementById('CompOfSaniWork_F10')
	];
	let opt_checkboxes = [
		document.getElementById('SectionA2_Attachment2'),
		document.getElementById('PartPlumber_Chk_SPS10'),
		document.getElementById('PartPlumber_Chk_PUBLP10'),
		document.getElementById('PartPlumber_Chk_NA10')
	];
	let fields = [
		document.getElementById('Member_Member_Name_LPLUMBCONT10'),
		// document.getElementById("Member_IC_Passport_No_LPLUMBCONT10"),
		document.getElementById('Member_Firm_Name_LPLUMBCONT10'),
		document.getElementById('Member_Email_Address1_LPLUMBCONT10')
	];
	let disabled_fields = [
		document.getElementById('Member_Member_Name_QP310'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP310'),
		document.getElementById('Member_Tel_No_QP310'),
		document.getElementById('Member_Email_Address1_QP310'),
		document.getElementById('Member_Firm_Name_QP310'),
		document.getElementById('MemberRole_Professional_No_QP310'),
		document.getElementById('Member_Member_Name_QP320'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP320'),
		document.getElementById('Member_Tel_No_QP320'),
		document.getElementById('Member_Email_Address1_QP320'),
		document.getElementById('Member_Firm_Name_QP320'),
		document.getElementById('MemberRole_Professional_No_QP320'),
		document.getElementById('Member_Member_Name_QP330'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP330'),
		document.getElementById('Member_Tel_No_QP330'),
		document.getElementById('Member_Email_Address1_QP330'),
		document.getElementById('Member_Firm_Name_QP330'),
		document.getElementById('MemberRole_Professional_No_QP330'),
		document.getElementById('Member_Member_Name_QP340'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP340'),
		document.getElementById('Member_Tel_No_QP340'),
		document.getElementById('Member_Email_Address1_QP340'),
		document.getElementById('Member_Firm_Name_QP340'),
		document.getElementById('MemberRole_Professional_No_QP340'),
		document.getElementById('Member_Member_Name_QP350'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP350'),
		document.getElementById('Member_Tel_No_QP350'),
		document.getElementById('Member_Email_Address1_QP350'),
		document.getElementById('Member_Firm_Name_QP350'),
		document.getElementById('MemberRole_Professional_No_QP350'),
		document.getElementById('PartPlumber_txt_SPS10'),
		document.getElementById('PartPlumber_txt_PUBLP10')
	];

	if (mainCheck.checked) {
		fields[0].setAttribute('mandatory', '');
		for (let checkbox of mand_checkboxes) {
			checkbox.removeAttribute('disabled');
			checkbox.setAttribute('mandatory', '');
			checkbox.setAttribute('checked', '');
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.removeAttribute('disabled');
		}
		for (let field of fields) {
			field.removeAttribute('disabled');
		}
	} else {
		fields[0].removeAttribute('mandatory');
		for (let field of fields) {
			field.setAttribute('disabled', '');
			field.value = '';
		}
		for (let field of disabled_fields) {
			field.setAttribute('disabled', '');
			field.removeAttribute('mandatory');
			field.value = '';
		}
		for (let checkbox of mand_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.removeAttribute('mandatory');
			checkbox.removeAttribute('checked');
			checkbox.checked = false;
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
	}
}

function RcTrenComp10_change(element) {
	let mand_checkboxes = [
		document.getElementById('Decl_AsBuilPlanEndo20'),
		document.getElementById('Decl_ThePhotTakeIn20')
	];
	let fields = [
		document.getElementById('Decl_IBeinTheProfDate20'),
		document.getElementById('Member_Member_Name_QP540'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP540'),
		document.getElementById('Member_Tel_No_QP540'),
		document.getElementById('Member_Email_Address1_QP540'),
		document.getElementById('Member_Firm_Name_QP540'),
		document.getElementById('MemberRole_Professional_No_QP540')
	];

	if (element.checked) {
		fields[0].setAttribute('mandatory', '');
		fields[1].setAttribute('mandatory', '');
		for (let checkbox of mand_checkboxes) {
			checkbox.removeAttribute('disabled');
			checkbox.setAttribute('mandatory', '');
			checkbox.setAttribute('checked', '');
		}
		fields[0].removeAttribute('disabled');
		fields[1].removeAttribute('disabled');
	} else {
		fields[0].removeAttribute('mandatory');
		fields[1].removeAttribute('mandatory');
		fields[0].setAttribute('disabled', '');
		fields[1].setAttribute('disabled', '');
		for (let field of fields) {
			field.value = '';
		}
		for (let checkbox of mand_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.removeAttribute('mandatory');
			checkbox.removeAttribute('checked');
			checkbox.checked = false;
		}
	}
}

function InfrWorkAffeSewe10_change(element) {
	let mand_checkboxes = [
		document.getElementById('UsedWatePumpSys_Atta_AsBuiltPlansFor10'),
		document.getElementById('UsedWatePumpSys_Decl10')
	];
	let opt_checkboxes = [
		document.getElementById('UsedWatePumpSys_RegiLiceType_SPS10'),
		document.getElementById('UsedWatePumpSys_RegiLiceType_PUBLP10'),
		document.getElementById('UsedWatePumpSys_RegiLiceType_NA10')
	];
	let fields = [
		document.getElementById('Member_Member_Name_LPLUMBCONT20'),
		// document.getElementById("Member_IC_Passport_No_LPLUMBCONT20"),
		document.getElementById('Member_Firm_Name_LPLUMBCONT20'),
		document.getElementById('Member_Email_Address1_LPLUMBCONT20')
	];
	let disabled_fields = [
		document.getElementById('Member_Member_Name_QP530'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP530'),
		document.getElementById('Member_Tel_No_QP530'),
		document.getElementById('Member_Email_Address1_QP530'),
		document.getElementById('Member_Firm_Name_QP530'),
		document.getElementById('MemberRole_Professional_No_QP530'),
		document.getElementById('UsedWatePumpSys_RegiLiceType_SPS20'),
		document.getElementById('UsedWatePumpSys_RegiLiceType_PUBLP20')
	];
	if (element.checked) {
		fields[0].setAttribute('mandatory', '');
		for (let checkbox of mand_checkboxes) {
			checkbox.removeAttribute('disabled');
			checkbox.setAttribute('mandatory', '');
			checkbox.setAttribute('checked', '');
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.removeAttribute('disabled');
		}
		fields[0].removeAttribute('disabled');
	} else {
		fields[0].removeAttribute('mandatory');
		fields[0].setAttribute('disabled', '');
		for (let field of fields) {
			field.value = '';
		}
		for (let field of disabled_fields) {
			field.setAttribute('disabled', '');
			field.removeAttribute('mandatory');
			field.value = '';
		}
		for (let checkbox of mand_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.removeAttribute('mandatory');
			checkbox.removeAttribute('checked');
			checkbox.checked = false;
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
	}
}

function WorkAffeSaniSewe10_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP680'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP680'),
		document.getElementById('Member_Tel_No_QP680'),
		document.getElementById('Member_Email_Address1_QP680'),
		document.getElementById('Member_Firm_Name_QP680'),
		document.getElementById('MemberRole_Professional_No_QP680')
	];
	let opt_checkboxes = [document.getElementById('CHECK2'), document.getElementById('CHECK3')];

	if (element.checked) {
		fields[0].setAttribute('mandatory', '');
		for (let checkbox of opt_checkboxes) {
			checkbox.removeAttribute('disabled');
		}
		fields[0].removeAttribute('disabled');
	} else {
		fields[0].removeAttribute('mandatory');
		fields[0].setAttribute('disabled', '');
		for (let field of fields) {
			field.value = '';
		}
		for (let checkbox of opt_checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
	}
}
//checkbox enable functions (table)
function AttachDeclaration_A1_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP310'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP310'),
		document.getElementById('Member_Tel_No_QP310'),
		document.getElementById('Member_Email_Address1_QP310'),
		document.getElementById('Member_Firm_Name_QP310'),
		document.getElementById('MemberRole_Professional_No_QP310')
	];
	if (element.checked) {
		fields[0].removeAttribute('disabled');
		fields[0].setAttribute('mandatory', '');
	} else {
		for (let field of fields) {
			field.setAttribute('disabled', '');
			field.value = '';
		}
		fields[0].removeAttribute('mandatory');
	}
}

function AttachDeclaration_B1_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP320'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP320'),
		document.getElementById('Member_Tel_No_QP320'),
		document.getElementById('Member_Email_Address1_QP320'),
		document.getElementById('Member_Firm_Name_QP320'),
		document.getElementById('MemberRole_Professional_No_QP320')
	];
	if (element.checked) {
		fields[0].removeAttribute('disabled');
		fields[0].setAttribute('mandatory', '');
	} else {
		for (let field of fields) {
			field.value = '';
		}
		fields[0].setAttribute('disabled', '');
		fields[0].removeAttribute('mandatory');
	}
}

function AttachDeclaration_C1_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP330'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP330'),
		document.getElementById('Member_Tel_No_QP330'),
		document.getElementById('Member_Email_Address1_QP330'),
		document.getElementById('Member_Firm_Name_QP330'),
		document.getElementById('MemberRole_Professional_No_QP330')
	];
	if (element.checked) {
		fields[0].removeAttribute('disabled');
		fields[0].setAttribute('mandatory', '');
	} else {
		for (let field of fields) {
			field.value = '';
		}
		fields[0].setAttribute('disabled', '');
		fields[0].removeAttribute('mandatory');
	}
}

function AttachDeclaration_E1_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP340'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP340'),
		document.getElementById('Member_Tel_No_QP340'),
		document.getElementById('Member_Email_Address1_QP340'),
		document.getElementById('Member_Firm_Name_QP340'),
		document.getElementById('MemberRole_Professional_No_QP340')
	];
	if (element.checked) {
		fields[0].removeAttribute('disabled');
		fields[0].setAttribute('mandatory', '');
	} else {
		for (let field of fields) {
			field.value = '';
		}
		fields[0].setAttribute('disabled', '');
		fields[0].removeAttribute('mandatory');
	}
}

function AttachDeclaration_F1_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP350'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP350'),
		document.getElementById('Member_Tel_No_QP350'),
		document.getElementById('Member_Email_Address1_QP350'),
		document.getElementById('Member_Firm_Name_QP350'),
		document.getElementById('MemberRole_Professional_No_QP350')
	];
	if (element.checked) {
		fields[0].removeAttribute('disabled');
		fields[0].setAttribute('mandatory', '');
	} else {
		for (let field of fields) {
			field.value = '';
		}
		fields[0].setAttribute('disabled', '');
		fields[0].removeAttribute('mandatory');
	}
}

function UsedWatePumpSys_Decl10_change(element) {
	let fields = [
		document.getElementById('Member_Member_Name_QP530'),
		document.getElementById('MemberRole_Member_Role_Code_Desc_QP530'),
		document.getElementById('Member_Tel_No_QP530'),
		document.getElementById('Member_Email_Address1_QP530'),
		document.getElementById('Member_Firm_Name_QP530'),
		document.getElementById('MemberRole_Professional_No_QP530')
	];
	if (element.checked) {
		fields[0].setAttribute('mandatory', '');
		fields[0].removeAttribute('disabled');
	} else {
		for (let field of fields) {
			field.value = '';
		}
		fields[0].removeAttribute('mandatory');
		fields[0].setAttribute('disabled', '');
	}
}
//common

function lblDeclaration_change(element, selectId) {
	let select = document.getElementById(selectId);
	if (element.checked) {
		select.setAttribute('mandatory', '');
		select.removeAttribute('disabled');
	} else {
		select.setAttribute('disabled', '');
		select.removeAttribute('mandatory');
		select.value = '';
	}
}

function PluCont_change(element, textboxId, ck) {
	let textbox = document.getElementById(textboxId);
	let na = document.getElementById(ck);
	if (element.checked) {
		textbox.setAttribute('mandatory', '');
		textbox.removeAttribute('disabled');
		na.checked = false;
	} else {
		textbox.setAttribute('disabled', '');
		textbox.removeAttribute('mandatory');
		textbox.value = '';
	}
}

function PluCont_RegLicense_NAChk_change(element, ck1, ck2, tx1, tx2) {
	let c1 = document.getElementById(ck1);
	let c2 = document.getElementById(ck2);
	let t1 = document.getElementById(tx1);
	let t2 = document.getElementById(tx2);
	if (element.checked) {
		c1.checked = false;
		c2.checked = false;
		t1.setAttribute('disabled', '');
		t2.setAttribute('disabled', '');
		t1.removeAttribute('mandatory');
		t2.removeAttribute('mandatory');
		t1.value = '';
		t2.value = '';
	}
}

//

document.addEventListener('DOMContentLoaded', function (event) {
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
			if (
			  targetElement.hasAttribute("data-options") &&
			  !targetElement.hasAttribute("options")
			) {
			  let innerSelect = targetElement.shadowRoot.querySelector("select");
			  jsonData[id] = innerSelect.options[innerSelect.selectedIndex].text;
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