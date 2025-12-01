function setAlert(){
    alert("Hello, world!");
    makeBigger();
}

function makeBigger() {
    document.getElementById("fancyInput").style.fontSize = "24pt";
}

function applyStyles() {
    setAlert();
    
    const text = document.getElementById("fancyInput");

    if (document.getElementById("fancy").checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooify() {
    const textArea = document.getElementById("fancyInput");
    let text = textArea.value;
    
    let sentences = text.split(".");

    textArea.value = sentences.join("-MOO. ")
}
