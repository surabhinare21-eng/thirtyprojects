
const titleEl = document.querySelector(".title");

const headings = [ "The Daily News","Times Now","Hindustan Times","India Today"];

let hc = 0;
let ci =0;
updateText();
function updateText(){
    ci++;
    titleEl.innerHTML = `
    <h1> ${headings[hc].slice(0,ci)} </h1>
    `;

    if(ci === headings[hc].length){
        hc++
        ci = 0;
    }
    setTimeout(updateText,100);
}