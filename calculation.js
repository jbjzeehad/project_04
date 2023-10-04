

// document.getElementById('card-09').addEventListener('click', function () {
//     console.log('Card 09 clicked');
//     const card09Pricestring = document.getElementById('c9price');
//     const card09Price = parseFloat(card09Pricestring.innerText);
//     console.log(card09Price.toFixed(2));
//     const totalPricestring = document.getElementById('total-price');
//     totalPricestring.innerText = card09Price.toFixed(2);

// })

function clickedCard(inputvalue) {
    // console.log(inputvalue, " Function called");
    const cardinPricestring = document.getElementById(inputvalue);
    const cardinPrice = parseFloat(cardinPricestring.innerText);
    // console.log(cardinPrice.toFixed(2));
    // console.log(typeof (cardinPrice));
    const totalPricestring = document.getElementById('total-price');
    const totalPricevalue = parseFloat(totalPricestring.innerText);
    const totalitemprice = totalPricevalue + cardinPrice;
    totalPricestring.innerText = totalitemprice.toFixed(2);

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