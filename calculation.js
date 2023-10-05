
// Discount Calculation and final price

document.getElementById('dis-btn').addEventListener('click', function () {
    const discode = document.getElementById('discount-code');
    if (discode.value === 'SELL200') {
        const currenttotalstring = document.getElementById('total-price');
        const disstring = document.getElementById('discount');
        const currenttotalvalue = parseFloat(currenttotalstring.innerText);
        const saving = currenttotalvalue * 0.2;
        disstring.innerText = saving.toFixed(2);
        const finaltotal = currenttotalvalue - saving;
        const purchasetotal = document.getElementById('total');
        purchasetotal.innerText = finaltotal.toFixed(2);

    }
})

// Clicked card, total and final price

function clickedCard(inputvalue) {

    // Enable purchase button

    const makePurchasebutton = document.getElementById('purchase-btn');
    makePurchasebutton.removeAttribute('disabled');

    const cardinPricestring = document.getElementById(inputvalue);
    const cardinPrice = parseFloat(cardinPricestring.innerText);

    // Total price

    const totalPricestring = document.getElementById('total-price');
    const totalPricevalue = parseFloat(totalPricestring.innerText);
    const totalitemprice = totalPricevalue + cardinPrice;
    totalPricestring.innerText = totalitemprice.toFixed(2);

    // Enable discount button

    if (totalitemprice >= 200) {
        const bonusbutton = document.getElementById('dis-btn');
        bonusbutton.removeAttribute('disabled');
    }

    // Final price

    const totalstring = document.getElementById('total');
    totalstring.innerText = totalitemprice.toFixed(2);
}

// Product name entry

function cardNameEntry(cardname) {

    const cname = document.getElementById(cardname);
    const cnamestring = cname.innerText;
    const cardentrystring = document.getElementById('card-entry');
    const count = cardentrystring.childElementCount;
    const par = document.createElement('p');
    par.innerHTML = `${count + 1}. ${cnamestring}`;
    cardentrystring.appendChild(par);

}

// Promo code button if clicked

function bonusButton(couponcode) {

    const inputstring = document.getElementById('discount-code');
    inputstring.value = couponcode;
}

// Modal button clicked

// Cleared all the value,item name and set default

document.getElementById('home-btn').addEventListener('click', function () {

    const discode = document.getElementById('discount-code');
    discode.value = "";
    const cardentrystring = document.getElementById('card-entry');
    cardentrystring.innerHTML = "";

    const totalstring = document.getElementById('total');
    totalstring.innerText = "00.00";

    const totalPricestring = document.getElementById('total-price');
    totalPricestring.innerText = "00.00";

    const disstring = document.getElementById('discount');
    disstring.innerText = "00.00";

    const modal = document.getElementById('mymodal');
    modal.style.display = "none";
})