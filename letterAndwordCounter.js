let str = document.getElementById("textarea");
str.addEventListener("input", function () {
    let strValue = str.value;
    let convertArrayString = strValue.split(" ");
    let convertStrLen = convertArrayString.length;
    let newLineStr = strValue.split("\n");
    console.log(convertArrayString);
    console.log(newLineStr);

    // to count new line (\n)
    let z = 0,random = 0;
    for (let j = 0; j < convertStrLen; j++) {
        for (let k = 0; k < convertArrayString[j].length; k++) {
            if (convertArrayString[j][k] == "\n") {
                z++;
            }
            else if(convertArrayString[j][k] == "," ||convertArrayString[j][k] == "." || convertArrayString[j][k] == "&" ||convertArrayString[j][k] == "!"){
                random ++;
            }
        }
    }
    
    //  to count zero length of newLine elements
    // let m = 0;
    // for(let k=0; k<newLineStr.length;k++){
    //     if(newLineStr[k].length == 0){

    //     }
    // }
    // console.log(m);

    // to count words = total length - x ; where x is zero length elements
    let x = 0;
    for (let i = 0; i < convertStrLen; i++) {
        if (convertArrayString[i].length == 0) {
            x++;
        }
    }

    let words = convertStrLen - x;
    let inptWords = document.getElementById("words");
    inptWords.value = words;

    // to count letters = string elements length + y; where y = 0
    let y = 0;
    for (let i = 0; i < convertStrLen; i++) {
        y = y + convertArrayString[i].length;
    }

    // total no of letters = count letters - z; where z is new line (\n)
    //  to remove .,! we use letters = y - z - random;
    let letters = y - z;

    let inptletters = document.getElementById("letters");
    inptletters.value = letters;


});