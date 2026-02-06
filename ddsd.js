let word = prompt("Palindrome checker")
let reverse = ""
let noSpace = word.replace(/\s+/g, "");

    for (let i = noSpace.length - 1; i >= 0; i--) {
    reverse += noSpace[i];
    }
    if (reverse === noSpace) {
        console.log("True");
    }
    else {
        console.log("False");
    };
