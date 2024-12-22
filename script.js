
const form = document.querySelector("form");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");
const resultsSection = document.querySelector(".results-content");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const amount = parseFloat(amountInput.value);
  const term = parseInt(termInput.value);
  const rate = parseFloat(rateInput.value);

  if (isNaN(amount) || isNaN(term) || isNaN(rate) || amount <= 0 || term <= 0 || rate <= 0) {
    showResults("Please enter valid numbers for all fields.");
    return;
  }


  const monthlyRate = rate / 100 / 12; 
  const numberOfPayments = term * 12;   
  const monthlyRepayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  showResults(` Your Monthly repayments  <br>  `+`£${monthlyRepayment.toFixed(2)}`+` <br> test `);
});

function showResults(message) {
  resultsSection.innerHTML = `
    <img src="icon.png" alt="Icon" class="results-icon">
    <h2>Results</h2>
    <p>${message}</p>
  `;
}
function showResults(message) {
    resultsSection.innerHTML = `
      <div class="results-box">
        <h2 class="results-title">Results</h2>
        <p class="results-message">${message}</p>
      </div>
    `;
  }
  