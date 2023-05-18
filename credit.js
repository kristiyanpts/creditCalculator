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
  let salaryInterestRate = 4.99 / 100;
  let nonSalaryInterestRate = 6.29 / 100;
  let fees = creditMonths * 4.5;
  let monthlyPaymentSalary =
    (creditAmount *
      (salaryInterestRate * (1 + salaryInterestRate) ** creditMonths)) /
    ((1 + salaryInterestRate) ** creditMonths - 1);
  let monthlyPaymentNonSalary =
    (creditAmount *
      (nonSalaryInterestRate * (1 + nonSalaryInterestRate) ** creditMonths)) /
    ((1 + nonSalaryInterestRate) ** creditMonths - 1);
  let totalAmountSalary = creditMonths * monthlyPaymentSalary + fees;
  let totalAmountNonSalary = creditMonths * monthlyPaymentNonSalary + fees;
  let aprSalary = ((totalAmountSalary - creditAmount) / creditAmount) * 100;
  let aprNonSalary =
    ((totalAmountNonSalary - creditAmount) / creditAmount) * 100;

  document.querySelector(".salary-loan #monthly-ins").textContent =
    monthlyPaymentSalary.toFixed(2);
  document.querySelector(".non-salary-loan #monthly-ins").textContent =
    monthlyPaymentNonSalary.toFixed(2);
  document.querySelector(".salary-loan #apr").textContent =
    aprSalary.toFixed(2);
  document.querySelector(".non-salary-loan #apr").textContent =
    aprNonSalary.toFixed(2);
  document.querySelector(".salary-loan #total-amount").textContent =
    totalAmountSalary.toFixed(2);
  document.querySelector(".non-salary-loan #total-amount").textContent =
    totalAmountNonSalary.toFixed(2);
}

function setOtherValues(value) {}
