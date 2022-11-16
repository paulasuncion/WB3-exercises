function getSocSecTax(grosspay) {
    let taxrate = (6.2 / 100);
    return taxrate * grosspay;
}

function getMedicareTax(grosspay) {
    let taxrate = (1.45 / 100);
    return taxrate * grosspay;
}

function getFederalTax (grosspay, witholdingCode) {
    if (witholdingCode == 0) {
        let taxrate = (23 / 100);
    }
    else if (witholdingCode == 1) {
        let taxrate = (21 / 100);
    }
    else if(witholdingCode == 2) {
        let taxrate = (19.5 / 100)
    }

    else if(witholdingCode == 3) {
        let taxrate = (18.5 / 100)
    }

    else {
        let result = witholdingCode - 4;
        let taxrate = 18 - (result * 0.5);
        return (taxrate/100) * grosspay;
    }
    
}

let input = 750;
let socSecTax = getSocSecTax(input);
let medicareTax = getMedicareTax(input);
let federalTax = getFederalTax(input,4)

let witholdingCode = 0
let pay = 750
let taxrate = getFederalTax(pay, witholdingCode)
console.log(taxrate)
