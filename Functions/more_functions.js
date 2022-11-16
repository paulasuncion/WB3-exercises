function displayMailingLabel(fullname, address, city, state, zip) {
    console.log(`Fullname: ${fullname}`);
    console.log(`address: ${address}`);
    console.log(`city: ${city}`);
    console.log(`state: ${state}`);
    console.log(`zip: ${zip}`);
}
displayMailingLabel('paul asuncion', '268 Oriente St', 'Daly City', 'CA', 94014);

function addNumbers(num1, num2) {
    let number1 = num1;
    let number2 = num2;
    let sum = num1 + num2;
    console.log(sum)
}
addNumbers(5, 10);
   
function displayReceipt(totalDue, amountPaid) {
    let changeDue= Math.abs(totalDue-amountPaid);
    let message;

    if(amountPaid>totalDue) {
        message = "needs to pay";
    }
    else {
        message= "paid more than enough";
    }

    console.log(`Total due: ${totalDue}`);
    console.log(`Amount paid: ${amountPaid}`);
    console.log(`Change due: ${changeDue}`);
    console.log(message + '$ ' +changeDue);
}
displayReceipt(20, 35);

