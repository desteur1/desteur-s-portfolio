const validator = require("html-validator");
const fs = require("fs");
const path = require("path");
const { h } = require("vue");
const { error } = require("console");
const htmlFilepath = path.join(__dirname, "dist", "index.html");
const html = fs.readFileSync(htmlFilepath, "utf-8");
const options = {
  data: html,
  format: "text",
};

validator(options)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("HTML validation failed:", error);
  });

/*import validator from "html-validator";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { constants } from "buffer";
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);
const htmlFilepath = path.join(__dirname, "dist", "index.html");
const options = {
  data: htmlFilepath,
  format: "text",
};
validator(options)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("HTML validation failed:", error);
  });*/
