
let printButton = document.querySelector("button");

function printPage() { window.print(); }

printButton.addEventListener("click", printPage);
// For IE < 9
//printButton.onclick = printPage;
