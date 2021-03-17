function logClass(alumniList) {
  if (alumniList.length === 0) {
    console.log("This class is empty");
  } else {
    for (let i = 0; i < alumniList.length; i++) {
      console.log(`#${i + 1} ${alumniList[i]}`);
    }
  }
}

logClass(["Alex", "David", "Eduardo", "Rikki", "Hugh"]);

logClass(["Jörg", "Manuel", "Philipp", "Shari", "Sören", "Yvonne"]);

logClass(["Eduardo", "Rikki", "Hugh", "Johan", "Johannes"]);

logClass([]);
