const { resolve, basename, dirname } = require("path");
const fs = require("fs-extra");
const Zip = require("node-7z");
const _7zipPath = require("7zip-bin").path7za;
let archiver = require("archiver");
archiver.registerFormat("zip-encryptable", require("archiver-zip-encryptable"));
const find = require("find");

if (fs.pathExistsSync(resolve(__dirname, "Extracted Forms"))) {
  fs.emptyDirSync(resolve(__dirname, "Extracted Forms"));
} else {
  fs.mkdirSync(resolve(__dirname, "Extracted Forms"));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Extracting XFDX files...");
  find.file(/\.XFDX$/, resolve(__dirname, "Raw Forms"), function (forms) {
    function extract(i) {
      const myStream = Zip.extractFull(
        forms[i],
        forms[i].replace(`Raw Forms`, `Extracted Forms`).slice(0, -5),
        {
          recursive: true,
          password: "N0vaS0lut1ons",
          $bin: _7zipPath,
        }
      );
      myStream.on("end", function () {
        if (
          fs.pathExistsSync(
            resolve(
              forms[i].replace(`Raw Forms`, `Extracted Forms`).slice(0, -5),
              "archive-tmp"
            )
          )
        ) {
          fs.rmdirSync(
            resolve(
              forms[i].replace(`Raw Forms`, `Extracted Forms`).slice(0, -5),
              "archive-tmp"
            ),
            { recursive: true }
          );
        }

        if (
          fs.pathExistsSync(
            resolve(
              forms[i].replace(`Raw Forms`, `Extracted Forms`).slice(0, -5),
              "form.hash"
            )
          )
        ) {
          fs.unlinkSync(
            resolve(
              forms[i].replace(`Raw Forms`, `Extracted Forms`).slice(0, -5),
              "form.hash"
            )
          );
        }

        let j = i + 1;
        if (forms[j]) {
          extract(j);
        } else {
          applyChanges();
        }
      });
    }

    extract(0);
  });
});

function applyChanges() {
  console.log("Applying changes...");
  find.file(
    /\.json$/,
    resolve(__dirname, "Extracted Forms"),
    function (jsonsFilePath) {
      jsonsFilePath.forEach((jsonFilePath) => {
        let KeyAndValueNotInForm = {};
        let rawJSON = require(jsonFilePath);
        let rawHTML = fs.readFileSync(
          resolve(dirname(jsonFilePath), "index.html"),
          "utf-8"
        );
        let rawJS = fs.readFileSync(
          resolve(dirname(jsonFilePath), "index.js"),
          "utf-8"
        );

        rawHTML = rawHTML.substring(rawHTML.indexOf("<body>") + 8);
        rawHTML = rawHTML.substring(0, rawHTML.indexOf("</body>"));

        let html = document
          .createRange()
          .createContextualFragment(`<div>${rawHTML}</div>`).firstElementChild;

        let jsonKeys = Object.keys(rawJSON);
        let formKeys = [
          ...html.querySelectorAll(
            "cn2-button, cn2-checkbox, cn2-datefield, cn2-master-head, cn2-select, cn2-switchbutton, cn2-textarea, cn2-textbox, input[type='radio'], table, tbody, tr, td"
          ),
        ].map((el) => el.id);

        jsonKeys
          .filter((id) => !formKeys.includes(id))
          .map((id) => {
            if (
              typeof rawJSON[id] !== "object" &&
              !id.startsWith("fileAttach") &&
              !id.startsWith("form_") &&
              !id.toLowerCase().startsWith("agencyurl") &&
              id !== "FormName10" &&
              id !== "XFDVersion"
            ) {
              KeyAndValueNotInForm[id] = rawJSON[id];
            }
          });

        if (Object.keys(KeyAndValueNotInForm).length > 0) {
          console.log(basename(dirname(jsonFilePath)));
          console.log(KeyAndValueNotInForm);
        }
      });
    }
  );
}
