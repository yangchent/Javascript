const fs = require("fs");
fs.readFile("jour07.txt" , function (err,data) {
    if (err){
        console.log("error");
        return;
    }
    console.log(data.toString());
});