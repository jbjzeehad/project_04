console.log("ok i am done");

document.getElementById('card-01').addEventListener('click', function () {
    console.log('Card 01 clicked');


})
document.getElementById('card-02').addEventListener('click', function () {
    console.log('Card 02 clicked');
})
document.getElementById('card-03').addEventListener('click', function () {
    console.log('Card 03 clicked');
})
document.getElementById('card-04').addEventListener('click', function () {
    console.log('Card 04 clicked');
})
document.getElementById('card-05').addEventListener('click', function () {
    console.log('Card 05 clicked');
})
document.getElementById('card-06').addEventListener('click', function () {
    console.log('Card 06 clicked');
})
document.getElementById('card-07').addEventListener('click', function () {
    console.log('Card 07 clicked');
})
document.getElementById('card-08').addEventListener('click', function () {
    console.log('Card 08 clicked');
})
// document.getElementById('card-09').addEventListener('click', function () {
//     console.log('Card 09 clicked');
//     const card09Pricestring = document.getElementById('c9price');
//     const card09Price = parseFloat(card09Pricestring.innerText);
//     console.log(card09Price.toFixed(2));
//     const totalPricestring = document.getElementById('total-price');
//     totalPricestring.innerText = card09Price.toFixed(2);

// })

function clickedCard(inputvalue) {
    console.log(inputvalue, " Function called");
    const card09Pricestring = document.getElementById(inputvalue);
    const card09Price = parseFloat(card09Pricestring.innerText);
    console.log(card09Price.toFixed(2));
    console.log(typeof (card09Price));
    const totalPricestring = document.getElementById('total-price');
    totalPricestring.innerText = card09Price.toFixed(2);
}