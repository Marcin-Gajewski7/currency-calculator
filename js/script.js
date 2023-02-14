console.log("Hello World");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = "0.22";
let USD = "0.23";
let ISK = "33.0";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "ISK":
            result = amount * ISK;
    }

    resultElement.innerText = result.toFixed(2);
});