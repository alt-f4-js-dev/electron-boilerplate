function PPC_Change(el) {
	if (el.checked) {
		document.getElementById('PartOfProj_DateOfPrePlan10').setAttribute('mandatory', '');
		document.getElementById('PartOfProj_DateOfPrePlan10').removeAttribute('disabled');
	} else {
		document.getElementById('PartOfProj_DateOfPrePlan10').setAttribute('disabled', '');
		document.getElementById('PartOfProj_DateOfPrePlan10').removeAttribute('mandatory');
		document.getElementById('PartOfProj_DateOfPrePlan10').value = '';
	}
}

function SimpSubm_change(element) {
	let workCheck = document.getElementById('PartOfAppl_BuilProjPlanNumb_WorkAffeOtherDrain10');
	let submCheck = document.getElementById(element.id);
	let checkboxes = [
		document.getElementById('DeteTank_GravDisc10'),
		document.getElementById('DeteTank_PumpDisc10'),
		document.getElementById('ABCWateDesiFeatk10'),
		document.getElementById('FlooProtMeas10'),
		document.getElementById('DrainWrk_PumpDraiSystWith10'),
		document.getElementById('DrainWrk_PumpDraiSystWithNo10'),
		document.getElementById('DrainReceRuno10'),
		document.getElementById('RoadDrain10'),
		document.getElementById('EntrCulv10'),
		document.getElementById('DraiRese10')
	];

	if (submCheck.checked) {
		workCheck.setAttribute('disabled', '');
	} else {
		workCheck.removeAttribute('disabled');
		for (checkbox of checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
	}
}

function workAffeDrai_change(element) {
	let workCheck = document.getElementById(element.id);
	let secondWorkCheck = document.getElementById('SubmChec_InteDraiWork10');
	let submCheck = document.getElementById('PartOfAppl_BuilProjPlanNumb_SimpSubm10');
	let checkboxes = [
		document.getElementById('DeteTank_GravDisc10'),
		document.getElementById('DeteTank_PumpDisc10'),
		document.getElementById('ABCWateDesiFeatk10'),
		document.getElementById('FlooProtMeas10'),
		document.getElementById('DrainWrk_PumpDraiSystWith10'),
		document.getElementById('DrainWrk_PumpDraiSystWithNo10'),
		document.getElementById('DrainReceRuno10'),
		document.getElementById('RoadDrain10'),
		document.getElementById('EntrCulv10'),
		document.getElementById('DraiRese10')
	];

	let submCheckRem = [
		document.getElementById('InteDraiWork_Rema_ThePlatLeveAre10'),
		document.getElementById('InteDraiWork_Rema_AllinterdraiAre10'),
		document.getElementById('InteDraiWork_Rema_TheRunoWithAnd10'),
		document.getElementById('InteDraiWork_Rema_AsconplanForInte10'),

		document.getElementById('ExteDraiWork_Rema_DraiWorkFullComp10'),
		document.getElementById('ExteDraiWork_Rema_NoUnauSlabFenc10'),
		document.getElementById('ExteDraiWork_Rema_NoOverVegeSilt10'),
		document.getElementById('ExteDraiWork_Rema_NoServInsiDrai10'),
		document.getElementById('ExteDraiWork_Rema_DraiReseLeveTurf10'),
		document.getElementById('ExteDraiWork_Rema_DamaToExisDrai10'),
		document.getElementById('ExteDraiWork_Rema_AscoDraiDrawIn10'),
		document.getElementById('ExteDraiWork_Rema_IndiConsCostOf10'),
		document.getElementById('ExteDraiResrv_Rema_DevAffected10'),
		document.getElementById('ExteDraiResrv_Rema_CertSurvPlan10'),
		document.getElementById('ExteDraiResrv_Rema_AsBuilSurvPlan10'),
		document.getElementById('ExteDraiResrv_Rema_BuiltDrawDeteTank10'),
		document.getElementById('ExteDraiResrv_Rema_PostPhoto10'),
		document.getElementById('ExteDraiResrv_Rema_LeakTestCert10'),
		document.getElementById('ExteDraiResrv_Rema_StanOperProc10'),
		document.getElementById('ExteDraiResrv_Rema_StanOperProcFlood10'),
		document.getElementById('ExteDraiResrv_Rema_ThePumpDraiSyst10'),
		document.getElementById('ExteDraiResrv_Rema_CertSurvPlanCons10')
	];

	let submCheckRad = [
		document.getElementById('InteDraiWork_Yes_ThePlatLeveAre10'),
		document.getElementById('InteDraiWork_NA_ThePlatLeveAre10'),
		document.getElementById('InteDraiWork_Yes_AllinterdraiAre10'),
		document.getElementById('InteDraiWork_NA_AllinterdraiAre10'),
		document.getElementById('InteDraiWork_Yes_TheRunoWithAnd10'),
		document.getElementById('InteDraiWork_NA_TheRunoWithAnd10'),
		document.getElementById('InteDraiWork_Yes_AsconplanForInte10'),
		document.getElementById('InteDraiWork_NA_AsconplanForInte10'),

		document.getElementById('ExteDraiWork_Yes_DraiWorkFullComp10'),
		document.getElementById('ExteDraiWork_NA_DraiWorkFullComp10'),
		document.getElementById('ExteDraiWork_Yes_NoUnauSlabFenc10'),
		document.getElementById('ExteDraiWork_NA_NoUnauSlabFenc10'),
		document.getElementById('ExteDraiWork_Yes_NoOverVegeSilt10'),
		document.getElementById('ExteDraiWork_NA_NoOverVegeSilt10'),
		document.getElementById('ExteDraiWork_Yes_NoServInsiDrai10'),
		document.getElementById('ExteDraiWork_NA_NoServInsiDrai10'),
		document.getElementById('ExteDraiWork_Yes_DraiReseLeveTurf10'),
		document.getElementById('ExteDraiWork_NA_DraiReseLeveTurf10'),
		document.getElementById('ExteDraiWork_Yes_DamaToExisDrai10'),
		document.getElementById('ExteDraiWork_NA_DamaToExisDrai10'),
		document.getElementById('ExteDraiWork_Yes_AscoDraiDrawIn10'),
		document.getElementById('ExteDraiWork_NA_AscoDraiDrawIn10'),
		document.getElementById('ExteDraiWork_Yes_IndiConsCostOf10'),
		document.getElementById('ExteDraiWork_NA_IndiConsCostOf10s'),
		document.getElementById('ExteDraiResrv_Yes_DevAffected10'),
		document.getElementById('ExteDraiResrv_NA_DevAffected10'),
		document.getElementById('ExteDraiResrv_Yes_CertSurvPlan10'),
		document.getElementById('ExteDraiResrv_NA_CertSurvPlan10'),
		document.getElementById('ExteDraiResrv_Yes_AsBuilSurvPlan10'),
		document.getElementById('ExteDraiResrv_NA_AsBuilSurvPlan10'),
		document.getElementById('ExteDraiResrv_Yes_BuiltDrawDeteTank10'),
		document.getElementById('ExteDraiResrv_NA_BuiltDrawDeteTank10'),
		document.getElementById('ExteDraiResrv_Yes_PostPhoto10'),
		document.getElementById('ExteDraiResrv_NA_PostPhoto10'),
		document.getElementById('ExteDraiResrv_Yes_LeakTestCert10'),
		document.getElementById('ExteDraiResrv_NA_LeakTestCert10'),
		document.getElementById('ExteDraiResrv_Yes_StanOperProc10'),
		document.getElementById('ExteDraiResrv_NA_StanOperProc10'),
		document.getElementById('ExteDraiResrv_Yes_StanOperProcFlood10'),
		document.getElementById('ExteDraiResrv_NA_StanOperProcFlood10'),
		document.getElementById('ExteDraiResrv_Yes_ThePumpDraiSyst10'),
		document.getElementById('ExteDraiResrv_NA_ThePumpDraiSyst10'),
		document.getElementById('ExteDraiResrv_Yes_CertSurvPlanCons10'),
		document.getElementById('ExteDraiResrv_NA_CertSurvPlanCons10')
	];

	if (workCheck.checked) {
		secondWorkCheck.checked = true;
		submCheck.setAttribute('disabled', '');
		submCheck.checked = false;
		submCheck.removeAttribute('mandatory');
		submCheck.removeAttribute('checked');
		for (checkbox of checkboxes) {
			checkbox.removeAttribute('disabled');
		}
		for (remarks of submCheckRem) {
			remarks.removeAttribute('disabled');
		}
		for (radio of submCheckRad) {
			radio.removeAttribute('disabled');
			radio.setAttribute('mandatory', '');
			radio.setAttribute('checked', '');
		}
	} else {
		secondWorkCheck.checked = false;
		submCheck.removeAttribute('disabled');
		submCheck.setAttribute('mandatory', '');
		submCheck.setAttribute('checked', '');
		for (checkbox of checkboxes) {
			checkbox.setAttribute('disabled', '');
			checkbox.checked = false;
		}
		for (remarks of submCheckRem) {
			remarks.setAttribute('disabled', '');
			remarks.value = '';
		}
		for (radio of submCheckRad) {
			radio.setAttribute('disabled', '');
			radio.removeAttribute('mandatory');
			radio.removeAttribute('checked');
			radio.checked = false;
		}
	}
}

function workAffeDrai2_change(element) {
	let workCheck = document.getElementById(element.id);
	let remarks = [
		document.getElementById('InteDraiWork_Rema_ThePlatLeveAre10'),
		document.getElementById('InteDraiWork_Rema_AllinterdraiAre10'),
		document.getElementById('InteDraiWork_Rema_TheRunoWithAnd10'),
		document.getElementById('InteDraiWork_Rema_AsconplanForInte10')
	];
	if (workCheck.checked) {
		for (remark of remarks) {
			remark.removeAttribute('disabled');
		}
	} else {
		for (remark of remarks) {
			remark.setAttribute('disabled', '');
		}
	}
}
// function workType_Change(el) {
//     switch (el.id) {
//         case "PartOfAppl_BuilProjPlanNumb_SimpSubm10":
//             checkbox_SetState("PartOfAppl_BuilProjPlanNumb_WorkAffeMinorDrain10", !el.checked);
//             checkbox_SetState("PartOfAppl_BuilProjPlanNumb_WorkAffeOtherDrain10", !el.checked);
//             break;
//         case "PartOfAppl_BuilProjPlanNumb_WorkAffeMinorDrain10":
//             checkbox_SetState("IntSurfWaterDrain10", el.checked);
//             document.getElementById("SubmChec_InteDraiWork10").checked = el.checked;

//             checkbox_SetState("InteDraiWork_Yes_ThePlatLeveAre10", el.checked);
//             checkbox_SetState("InteDraiWork_NA_ThePlatLeveAre10", el.checked);
//             checkbox_SetState("InteDraiWork_Yes_AllinterdraiAre10", el.checked);
//             checkbox_SetState("InteDraiWork_NA_AllinterdraiAre10", el.checked);
//             checkbox_SetState("InteDraiWork_Yes_TheRunoWithAnd10", el.checked);
//             checkbox_SetState("InteDraiWork_NA_TheRunoWithAnd10", el.checked);
//             checkbox_SetState("InteDraiWork_Yes_AsconplanForInte10", el.checked);
//             checkbox_SetState("InteDraiWork_NA_AsconplanForInte10", el.checked);

//             remarks_SetState("InteDraiWork_Rema_ThePlatLeveAre10", el.checked);
//             remarks_SetState("InteDraiWork_Rema_AllinterdraiAre10", el.checked);
//             remarks_SetState("InteDraiWork_Rema_TheRunoWithAnd10", el.checked);
//             remarks_SetState("InteDraiWork_Rema_AsconplanForInte10", el.checked);

//             if (el.checked) {
//                 checkbox_SetState("PartOfAppl_BuilProjPlanNumb_SimpSubm10", false);
//             } else {
//                 if (!document.getElementById("PartOfAppl_BuilProjPlanNumb_WorkAffeOtherDrain10").checked)
//                     checkbox_SetState("PartOfAppl_BuilProjPlanNumb_SimpSubm10", true);
//             }
//             break;
//         case "PartOfAppl_BuilProjPlanNumb_WorkAffeOtherDrain10":
//             checkbox_SetState("DeteTank_GravDisc10", el.checked);
//             checkbox_SetState("DeteTank_PumpDisc10", el.checked);
//             checkbox_SetState("ABCWateDesiFeatk10", el.checked);
//             checkbox_SetState("FlooProtMeas10", el.checked);
//             checkbox_SetState("DrainWrk_PumpDraiSystWith10", el.checked);
//             checkbox_SetState("DrainWrk_PumpDraiSystWithNo10", el.checked);
//             checkbox_SetState("DrainReceRuno10", el.checked);
//             checkbox_SetState("RoadDrain10", el.checked);
//             checkbox_SetState("EntrCulv10", el.checked);
//             checkbox_SetState("DraiRese10", el.checked);

//             document.getElementById("SubmChec_ExteDraiWork10").checked = el.checked;
//             checkbox_SetState("ExteDraiWork_Yes_DraiWorkFullComp10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_DraiWorkFullComp10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_NoUnauSlabFenc10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_NoUnauSlabFenc10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_NoOverVegeSilt10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_NoOverVegeSilt10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_NoServInsiDrai10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_NoServInsiDrai10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_DraiReseLeveTurf10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_DraiReseLeveTurf10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_DamaToExisDrai10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_DamaToExisDrai10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_AscoDraiDrawIn10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_AscoDraiDrawIn10", el.checked);
//             checkbox_SetState("ExteDraiWork_Yes_IndiConsCostOf10", el.checked);
//             checkbox_SetState("ExteDraiWork_NA_IndiConsCostOf10s", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_DevAffected10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_DevAffected10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_CertSurvPlan10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_CertSurvPlan10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_AsBuilSurvPlan10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_AsBuilSurvPlan10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_BuiltDrawDeteTank10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_BuiltDrawDeteTank10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_PostPhoto10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_PostPhoto10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_LeakTestCert10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_LeakTestCert10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_StanOperProc10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_StanOperProc10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_StanOperProcFlood10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_StanOperProcFlood10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_ThePumpDraiSyst10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_ThePumpDraiSyst10", el.checked);
//             checkbox_SetState("ExteDraiResrv_Yes_CertSurvPlanCons10", el.checked);
//             checkbox_SetState("ExteDraiResrv_NA_CertSurvPlanCons10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_DraiWorkFullComp10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_NoUnauSlabFenc10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_NoOverVegeSilt10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_NoServInsiDrai10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_DraiReseLeveTurf10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_DamaToExisDrai10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_AscoDraiDrawIn10", el.checked);
//             remarks_SetState("ExteDraiWork_Rema_IndiConsCostOf10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_DevAffected10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_CertSurvPlan10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_AsBuilSurvPlan10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_BuiltDrawDeteTank10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_PostPhoto10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_LeakTestCert10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_StanOperProc10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_StanOperProcFlood10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_ThePumpDraiSyst10", el.checked);
//             remarks_SetState("ExteDraiResrv_Rema_CertSurvPlanCons10", el.checked);

//             if (el.checked) {
//                 checkbox_SetState("PartOfAppl_BuilProjPlanNumb_SimpSubm10", false);
//             } else {
//                 if (!document.getElementById("PartOfAppl_BuilProjPlanNumb_WorkAffeMinorDrain10").checked)
//                     checkbox_SetState("PartOfAppl_BuilProjPlanNumb_SimpSubm10", true);
//             }
//             break;
//     }
// }

function checkbox_SetState(id, enable) {
	if (enable) {
		document.getElementById(id).removeAttribute('disabled');
	} else {
		document.getElementById(id).setAttribute('disabled', '');
		document.getElementById(id).checked = false;
	}
}

function remarks_SetState(id, enable) {
	if (enable) {
		document.getElementById(id).removeAttribute('disabled');
	} else {
		document.getElementById(id).setAttribute('disabled', '');
		document.getElementById(id).value = '';
	}
}

function openUrl(url) {
	ipcRenderer.send('open-default-browser', url);
}

document.addEventListener('DOMContentLoaded', function (event) {

	document.querySelector("cn2-master-head").title = `APPLICATION FOR COMPLIANCE CERTIFICATE FOR COMPLETED DRAINAGE WORKS <br> [UNDER SECTION 33(8) OF THE SEWERAGE AND DRAINAGE ACT, Chapter 294]`.toUpperCase();
	document.querySelector("cn2-master-head").setAttribute("agency", "logo.png");
});

// function PartOfAppl_DateWorkComm10_change(element,datefield){
// 	datefield = document.getElementById(datefield);
// 	let minField =  document.getElementById(element.id);
// 	datefield.setAttribute("min",minField.value);
// }
// function PartOfAppl_DateWorkComp10_change(element,datefield){
// 	datefield = document.getElementById(datefield);
// 	let minField =  document.getElementById(element.id);
// 	datefield.setAttribute("max",minField.value);
// 	console.log
// }

function PartOfAppl_DateWorkComm10_change(element) {
	let minDate = document.getElementById("PartOfAppl_DateWorkComm10");
	let maxDate = document.getElementById("PartOfAppl_DateWorkComp10");

	let minDateArr = minDate.value.split("-");
	// console.log(minDateArr);
	let fminDate = new Date(`${minDateArr[1]}/${minDateArr[2]}/${minDateArr[0]}`);
	// console.log(minDate);

	let maxDateArr = maxDate.value.split("-");
	// console.log(maxDateArr);
	let fmaxDate = new Date(`${maxDateArr[1]}/${maxDateArr[2]}/${maxDateArr[0]}`);
	// console.log(maxDate);

	if (fminDate > fmaxDate) {
		maxDate.value = "";

		showMessage("Date cannot be earlier than WORK COMMENCED DATE. Please re-enter date.")
	}

}

function disableDelete(containerName) {
	let formContainer = document.getElementById(containerName);
	let formCount = formContainer.childElementCount;
	if (formCount < 2) {
		document.querySelector('.deleteBtn').setAttribute('disabled', 'true');
	} else {
		let deleteBtns = document.querySelectorAll('.deleteBtn');
		for (let i = 0; i < deleteBtns.length; i++) {
			deleteBtns[i].removeAttribute('disabled');
		}
	}
}

function radiMand(element) {
	let radBtns = document.querySelectorAll(`[name='${element.name}']`);
	if (radBtns[0].checked) {
		for (let i = 0; i < radBtns.length; i++) {
			radBtns[i].removeAttribute('mandatory');
			radBtns[i].removeAttribute('checked');
		}
	} else if (radBtns[1].checked) {
		for (let i = 0; i < radBtns.length; i++) {
			radBtns[i].removeAttribute('mandatory');
			radBtns[i].removeAttribute('checked');
		}
	} else {
		for (let i = 0; i < radBtns.length; i++) {
			radBtns[i].setAttribute('mandatory', '');
			radBtns[i].setAttribute('checked', '');
		}
	}
}

function checMand(element) {
	let checkbox = document.getElementById(element.id);

	if (checkbox.checked) {
		checkbox.removeAttribute('mandatory');
		checkbox.removeAttribute('checked');
	} else {
		checkbox.setAttribute('mandatory', '');
		checkbox.setAttribute('checked', '');
	}
}

function getDetails() {
	let data = [{
		'PUB (Drainage)	': [{
			Email: 'pub_bpu@pub.gov.sg',
			TelNo: '67313512',
			AreaOfSupp: 'General Enquiry, Policies, Submissions'
		}]
	}];
	return data;
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

//hidden fields function
function setHiddenFieldValue10(element, id) {
	let hide10 = element.value;
	let hide20 = document.getElementById(id);

	if (!hide10 == "") {
		hide20.value = hide10;
	} else {
		hide20.value = false;
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