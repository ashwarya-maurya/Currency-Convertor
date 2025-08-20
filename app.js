const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for (let select of dropdown){
    for (currCode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newoption.selected = "selected";
        }else if (select.name === "to" && currCode === "INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
     select.addEventListener("change", (evt) => {
            updateflag(evt.target);
        })
};

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const fromKey = fromCurr.value.toLowerCase();
  const toKey = toCurr.value.toLowerCase();
  const URL = `${BASE_URL}/${fromKey}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromKey][toKey];
  let finalAmount = (amtVal * rate);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

};



const updateflag = (element)=> {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newlink = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let flagImg = element.parentElement.querySelector("img");
    flagImg.src = newlink;
};

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load" , ()=>{
    updateExchangeRate();
});

