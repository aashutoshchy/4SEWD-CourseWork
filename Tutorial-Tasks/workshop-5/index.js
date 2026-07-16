const fs = require("fs");

fs.writeFile("output.txt", "Hello World!", (err) => {
  if (err) {
    console.log("Error Writing File: ", err);
  }
  console.log("File written successfully");
  fs.readFile("output.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file: ", err);
    }
    console.log("File Contents: " + data);
  });
});
