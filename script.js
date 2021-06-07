const input = document.querySelector('.slider');
const checkbox = document.querySelector('#checkbox');
let priceValue = document.querySelector('.price');
let numViews = document.querySelector('.num-pageviews');

window.oninput = function () {
    let price;
    let views;
    switch (parseInt(input.value)) {
        case 1:
            price = 8;
            views = 10;
            break;
        case 2:
            price = 12;
            views = 50;
            break;
        case 3:
            price = 16;
            views = 100;
            break;
        case 4:
            price = 24;
            views = 500;
            break;
        case 5:
            price = 36;
            views = 1;
            break;
        default:
            price = 16;
            views = 100;
    }
    price = (checkbox.checked) ? price * .75 : price;
    priceValue.textContent = `$${price.toFixed(2)}`;
    if (views === 1)
        numViews.textContent = `${views}M`;
    else
        numViews.textContent = `${views}K`;
    rangeColor(input.value);
}

rangeColor = function (x) {
    let proc = (x - 1) * 25
    input.style.background = `linear-gradient(90deg, var( --slider-background-color) ${proc}%, var(--empty-slider-bar-color) ${proc}%)`
};


