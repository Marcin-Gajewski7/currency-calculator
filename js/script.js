
const calculateResult = (amount, currency) => {
    const EUR = "0.22";
    const USD = "0.23";
    const ISK = "33.0";

    switch (currency) {
        case "EUR":
            return amount * EUR;

        case "USD":
            return amount * USD;

        case "ISK":
            return amount * ISK;
    }
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)}PLN=${result.toFixed(2)}${currency} `
};

const onFormSubmit = (event) => {
    event.preventDefault();


    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = + amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency)

    updateResultText(amount, result, currency)

};

const init = () => {

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

};

{

    init();

}