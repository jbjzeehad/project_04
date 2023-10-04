
document.getElementById('dis-btn').addEventListener('click', function () {
    console.log("running");
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

function clickedCard(inputvalue) {
    const makePurchasebutton = document.getElementById('purchase-btn');
    makePurchasebutton.removeAttribute('disabled');

    const cardinPricestring = document.getElementById(inputvalue);
    const cardinPrice = parseFloat(cardinPricestring.innerText);
    const totalPricestring = document.getElementById('total-price');
    const totalPricevalue = parseFloat(totalPricestring.innerText);
    const totalitemprice = totalPricevalue + cardinPrice;
    totalPricestring.innerText = totalitemprice.toFixed(2);

    if (totalitemprice >= 200) {
        console.log('Bonus button open');

        const bonusbutton = document.getElementById('dis-btn');
        bonusbutton.removeAttribute('disabled');
    }
    const totalstring = document.getElementById('total');
    totalstring.innerText = totalitemprice.toFixed(2);
}

function cardNameEntry(cardname) {
    console.log("working", cardname);
    const cname = document.getElementById(cardname);
    const cnamestring = cname.innerText;
    const cardentrystring = document.getElementById('card-entry');
    const count = cardentrystring.childElementCount;
    const par = document.createElement('p');
    par.innerHTML = `${count + 1}. ${cnamestring}`;
    cardentrystring.appendChild(par);

}

function bonusButton(couponcode) {
    console.log(couponcode);
    const inputstring = document.getElementById('discount-code');
    inputstring.value = couponcode;
}