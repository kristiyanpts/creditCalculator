let loanAmountSlider = document.querySelector("#loan-amount-slider");
let loanAmount = document.querySelector("#loan-amount");
let loanMonthsSlider = document.querySelector("#loan-months-slider");
let loanMonths = document.querySelector("#loan-months");

loanAmountSlider.addEventListener("change", calculateCredit);
loanAmount.addEventListener("change", calculateCredit);
loanMonthsSlider.addEventListener("change", calculateCredit);
loanMonths.addEventListener("change", calculateCredit);

let changeValues = {
  "loan-amount-slider": (value) => (loanAmount.value = value.toString()),
  "loan-amount": (value) => (loanAmountSlider.value = value.toString()),
  "loan-months-slider": (value) => (loanMonths.value = value.toString()),
  "loan-months": (value) => (loanMonthsSlider.value = value.toString()),
};

function calculateCredit(e) {
  let amount = Number(e.target.value);
  changeValues[e.target.id](amount);

  let creditAmount = Number(loanAmount.value);
  let creditMonths = Number(loanMonths.value);
  let salaryInterestRate = 4.99;
  let nonSalaryInterestRate = 6.29;
  let fees = creditAmount * 4.5;

  let apr = (1 + salaryInterestRate) ** 12 - 1;
  console.log(apr);
}

function setOtherValues(value) {}
