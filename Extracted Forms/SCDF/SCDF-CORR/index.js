document.addEventListener("DOMContentLoaded", function (event) {
  // let datefield = document.getElementById("Date10");
  // if (datefield != null) {
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, "0");
  //   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //   var yyyy = today.getFullYear();

  //   today = dd + "/" + mm + "/" + yyyy;
  //   datefield.value = today;
  // }
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

// Function
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

//--------------------------START WEB SERVICE---------------------------

function validateCorrespondence(element) {
  let agencyUrlJSON = jsonData["agencyUrlJSON10"];
  let agencyURL = jsonData["agencyUrl10"].url;
  let bcaRefNo =
    "bcaRefNo=" + document.getElementById("Project_Project_Ref_No10").value;
  let ProjectCorrType10 =
    "Project_CorrType10=" +
    removeSpace(document.getElementById(element.id).value);
  let esNo = "esNo=ES20200404-12345";
  let query = bcaRefNo + ProjectCorrType10 + esNo;
  let mainElement = document.getElementById(element.id);
  let errMsg = document.getElementById("errMsgCorrespondence");
  let dataResponse = ipcRenderer.sendSync(
    "client-request",
    "GET",
    agencyURL,
    query,
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

  if (![501].includes(dataResponse)) {
    if (typeof dataResponse == "object") {
      removeValidations(mainElement);
      errMsg.innerHTML = "";
      if ("Y" == dataResponse.isValid) {
        mainElement.setAttribute("data-valid", "");
      } else if ("N" == dataResponse.isValid) {
        errMsg.innerHTML = "Not valid/No record found in agency database";
      }
    }
  }
}

function removeSpace(getData) {
  let rawData = getData.split(" ");
  let newData = "";
  for (let x of rawData) {
    newData = newData + x;
  }
  return newData.toString();
}

//--------------------------END WEB SERVICE-----------------------------

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
