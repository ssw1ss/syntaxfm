const fs = require("fs");

const timestampRegex = /([0-9]?[0-9]:)?[0-9]?[0-9]:[0-5][0-9]/gm;
let errFiles = [];

const addTimestamps = (str, fileName) => {
  let start = str.indexOf("## The Buzz Words");
  if (start == -1) {
    // start = str.indexOf("## Show Notes");
    // if episode < 27||28, it starts with The Show Notes or something similar
    start = str.indexOf("## The Show Notes");
  }
  const end = str.indexOf("##", start + 2);
  if (start !== -1 && end !== -1) {
    const showNotes = str.substring(start, end);
    const timestamps = showNotes.replace(timestampRegex, `~~$&~~`);
    return str.substring(0, start) + timestamps + str.substring(end);
  } else {
    errFiles.push(fileName);
    return str;
  }
};

const doStuff = async () => {
  const fileNames = await new Promise((resolve, reject) => {
    fs.readdir("./shows", (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
  const fileNames2 = fileNames.slice(17, 28);
  // console.log("hello", fileNames2);
  fileNames2.forEach(fileName => {
    const baseFile = fs.readFileSync(`./shows/${fileName}`, "utf-8");
    const newFile = addTimestamps(baseFile, fileName);
    fs.writeFileSync(`./newShows/${fileName}x`, newFile, "utf-8");
  });
  console.log(`finished with ${errFiles.length} errors`, errFiles);
};

doStuff();
