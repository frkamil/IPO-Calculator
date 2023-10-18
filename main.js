// CS10 Grade Calculator

//BUTTON CLICK LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let regular = +document.getElementById("regular-in").value;
  let overtime = +document.getElementById("overtime-in").value;
  let pay = +document.getElementById("pay-in").value;
  let regularpay = regular * pay;
  let overtimepay = overtime * (pay * 1.5);

  // PROCESS
  let totalwage = regularpay + overtimepay;

  // OUTPUT
  document.getElementById("output").innerHTML = totalwage;
}
