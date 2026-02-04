let grandparentBox = document.querySelector(".grandparent");
let parentBox = document.querySelector(".parent");
let clickBtn = document.querySelector("#click-btn");
let displayAns = document.querySelector("#display-ans");
let clearTag = document.querySelector("#clear");

// let count=0;


grandparentBox.addEventListener("click", () => {
    // count++;
    let ansDetails = document.createElement("div");
    ansDetails.textContent = "Grandparent - Capturing";
    // ansDetails.classList.add("ans"+count);
    ansDetails.classList.add("ans-details");
    displayAns.appendChild(ansDetails);
    // event.stopPropagation();
}, true);

grandparentBox.addEventListener("click", () => {
    //  count++;
    let ansDetails = document.createElement("div");
    ansDetails.textContent = "Grandparent - Bubbling";
    // ansDetails.classList.add("ans"+count);
    ansDetails.classList.add("ans-details");
    displayAns.appendChild(ansDetails);
    // event.stopPropagation();
}, false);

parentBox.addEventListener("click", () => {
    //  count++;
    let ansDetails = document.createElement("div");
    ansDetails.textContent = "Parent - Capturing";
    // ansDetails.classList.add("ans"+count);
    ansDetails.classList.add("ans-details");
    displayAns.appendChild(ansDetails);
    // event.stopPropagation();
}, true);

parentBox.addEventListener("click", (event) => {
    //  count++;
    let ansDetails = document.createElement("div");
    ansDetails.textContent = "Parent - Bubbling";
    // ansDetails.classList.add("ans"+count);
    ansDetails.classList.add("ans-details");
    displayAns.appendChild(ansDetails);
    // event.stopPropagation();
}, false);

clickBtn.addEventListener("click", (event)=>{
    let ansDetails = document.createElement("div");
    ansDetails.textContent="Button -> Captured";
    displayAns.appendChild(ansDetails);
    // event.stopImmediatePropagation();
},false);

clickBtn.addEventListener("click", (event)=>{
    let ansDetails = document.createElement("div");
    ansDetails.textContent="Button -> Bubbling";
    displayAns.appendChild(ansDetails);
    // event.stopImmediatePropagation();
},true);

clearTag.addEventListener("click", () => {
    displayAns.innerHTML = "";
    // count--;
});