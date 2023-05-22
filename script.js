//your JS code here. If required.
let text = document.createElement("h1");
text.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// document.body.append(text)
 
let sizeInfo = document.getElementById("sizeInfo");
sizeInfo.appendChild(text);
window.onresize = function() {
    text.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
   
}
