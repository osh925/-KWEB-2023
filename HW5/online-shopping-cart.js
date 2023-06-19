let total = 0;
const price = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

for(const addToCartButton of document.getElementsByClassName('add-to-cart')){
    addToCartButton.addEventListener('click', addFruitPrice);
}

function addFruitPrice(event){
    const itemName = event.target.parentNode.parentNode.getAttribute('id');
    total += price[itemName];
    document.getElementById('cost').innerText = total;
};
