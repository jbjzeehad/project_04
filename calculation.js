let btnclick = 0;

// document.getElementById('card-09').addEventListener('click', function () {
//     console.log('Card 09 clicked');
//     const card09Pricestring = document.getElementById('c9price');
//     const card09Price = parseFloat(card09Pricestring.innerText);
//     console.log(card09Price.toFixed(2));
//     const totalPricestring = document.getElementById('total-price');
//     totalPricestring.innerText = card09Price.toFixed(2);

// })

document.getElementById('dis-btn').addEventListener('click', function () {
    console.log("running");
    const discode = document.getElementById('discount-code');
    if (discode.value === 'SELL200') {
        // btnclick = 1;
        const currenttotalstring = document.getElementById('total-price');
        const disstring = document.getElementById('discount');
        const currenttotalvalue = parseFloat(currenttotalstring.innerText);
        const saving = currenttotalvalue * 0.2;
        disstring.innerText = saving.toFixed(2);
        const finaltotal = currenttotalvalue - saving;
        const purchasetotal = document.getElementById('total');
        purchasetotal.innerText = finaltotal.toFixed(2);

    }
    // console.log(btnclick);
    // console.log(totalitemprice);
})




function clickedCard(inputvalue) {
    // console.log(inputvalue, " Function called");
    const cardinPricestring = document.getElementById(inputvalue);
    const cardinPrice = parseFloat(cardinPricestring.innerText);
    // console.log(cardinPrice.toFixed(2));
    // console.log(typeof (cardinPrice));
    const totalPricestring = document.getElementById('total-price');
    const totalPricevalue = parseFloat(totalPricestring.innerText);

    // Total price :
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
    par.innerHTML = `${count}. ${cnamestring}`;
    cardentrystring.appendChild(par);

}



function bonusButton(couponcode) {
    console.log(couponcode);
    const inputstring = document.getElementById('discount-code');
    inputstring.value = couponcode;
}