// let supplier1= "Google:12345-L";
// let supplier2= "Facebook:678-M";
// let supplier3= "Meta:901-S";
// let supplier, partNum, partSize;

// let colonPosition = supplier1.indexOf(":");
// supplier = supplier1.substring(0,colonPosition);

// let dashPosition= supplier1.indexOf("-");
// partNum = supplier1.substring(colonPosition, dashPosition);

// size = supplier1.substring(dashPosition + 1);

// console.log(supplier, partNum, size)

let supplyCode, supplier, partNum, size;

function getSupplier(code) {
    let colonPosition = supplier.indexOf(":");
    supplier = supplyCode.substring(0,colonPosition);
    return colonPosition
}
function getProductNumber(code) {
    let dashPosition = supplyCode.indexOf("-");
    partNum = supplyCode.substring(colonPosition, dashPosition);
    return dashPosition
}
function getSize(code) {
    let endingPosition = size.substring(dashPosition + 1);
}

getSupplier()
getProductNumber()
getSize()
