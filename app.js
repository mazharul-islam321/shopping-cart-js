// product number function
function updateProductNumber(product, price, isIncreseing) {
    const productInput = document.getElementById(product + "-quantity");
    let productNumber = parseInt(productInput.value);

    if (isIncreseing) {
        productNumber = productNumber + 1;
    } else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;

    // update case total
    const productTotal = document.getElementById(product + "-total-price");
    productTotal.innerText = productNumber * price;
    // calling calculatetion
    calculateTotal();
}

//product input value
function getInputvalue(product) {
    const productInput = document.getElementById(product + "-quantity");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate Total
function calculateTotal() {
    const phoneTotal = getInputvalue("phone") * 1219;
    const caseTotal = getInputvalue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // final result
    document.getElementById("sub-total-price").innerText = subTotal;
    document.getElementById("tex-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}

//for mobile
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 1219, false);
});

// for case
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 59, false);
});
