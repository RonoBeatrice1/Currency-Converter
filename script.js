// Define a currency exchange rate object.
var crrncy = {
  EUR: { PLN: 4.15, USD: 0.83 }, // Exchange rates for EUR to PLN and USD
  USD: { PLN: 3.45, EUR: 1.2 }, // Exchange rates for USD to PLN and EUR
};

// Select the HTML element with the class "calculate-btn" and store it in the variable btn.
var btn = document.querySelector(".calculate-btn");

// Select the HTML input element with the id "currency-1" and store it in the variable baseCurrencyInput.
var baseCurrencyInput = document.getElementById("currency-1");

// Select the HTML input element with the id "currency-2" and store it in the variable secondCurrencyInput.
var secondCurrencyInput = document.getElementById("currency-2");

// Select the HTML input element with the id "amount" and store it in the variable amountInput.
var amountInput = document.getElementById("amount");

// Select the HTML element with the class "given-amount" and store it in the variable toShowAmount.
var toShowAmount = document.querySelector(".given-amount");

// Select the HTML element with the class "base-currency" and store it in the variable toShowBase.
var toShowBase = document.querySelector(".base-currency");

// Select the HTML element with the class "second-currency" and store it in the variable toShowSecond.
var toShowSecond = document.querySelector(".second-currency");

// Select the HTML element with the class "final-result" and store it in the variable toShowResult.
var toShowResult = document.querySelector(".final-result");

// Define a function called convertCurrency that takes an event as a parameter.
function convertCurrency(event) {
  event.preventDefault(); // Prevent the default form submission behavior.

  // Get the amount entered by the user.
  var amount = amountInput.value;

  // Get the base currency selected by the user.
  var from = baseCurrencyInput.value;

  // Get the target currency selected by the user.
  var to = secondCurrencyInput.value;

  var result = 0; // Initialize the result variable.

  try {
    // Check if the base currency is the same as the target currency.
    if (from == to) {
      result = amount; // If they are the same, no conversion is needed.
    } else {
      // Calculate the converted amount using the exchange rate from the currency object.
      result = amount * crrncy[from][to];
    }
  } catch (err) {
    // If an error occurs (e.g., the currency pair is not in the object), try the reverse conversion.
    result = amount * (1 / crrncy[to][from]);
  }

  // Update the HTML elements to display the calculated results.
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + " = ";
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

// Add a click event listener to the "Calculate" button that triggers the convertCurrency function.
btn.addEventListener("click", convertCurrency);
