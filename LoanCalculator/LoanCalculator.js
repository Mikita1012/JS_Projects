document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    const loanAmount = parseInt(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers for all the fields");
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayment = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayment));

    const totalInterest = (monthlyPayment * totalPayment) - loanAmount;

    displayResult(monthlyPayment, totalInterest);

}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <p>
        <strong> 
         Monthly Payment: ${monthlyPayment.toFixed(2)}   
        </strong>
        </p>

        <p>
        <strong> 
         Total Interest: ${totalInterest.toFixed(2)}   
        </strong>
        </p>
    `
}
