const cards = document.getElementsByClassName("card");
for(const card of cards)
    {
        card.addEventListener('click', function()
       {
            const productPrice = parseFloat(card.getAttribute('product-price'));
            const totalPrice = totalPriceCalc(productPrice);
            if(totalPrice>0)
                {
                    document.getElementById('btn-purchase').classList.remove('hidden');
                }
            const productName = card.getAttribute('product-name');
            addProductName(productName);
        })
    }
function totalPriceCalc(productPrice)
{
    const prevTotalPriceField = document.getElementById('total-price');
    const prevTotalPriceAmount = parseFloat(prevTotalPriceField.innerText);
    const newTotalPrice = productPrice + prevTotalPriceAmount;
    prevTotalPriceField.innerText = newTotalPrice;

    const prevGrandTotalPriceField = document.getElementById('grand-total-price');
    const prevGrandTotalPriceAmount = parseFloat(prevGrandTotalPriceField.innerText);
    const newGrandTotalPrice = productPrice + prevGrandTotalPriceAmount;
    prevGrandTotalPriceField.innerText = newGrandTotalPrice;

    return newTotalPrice;
}
function addProductName(productName)
{
    const productCartName = document.getElementById('product-cart-name');
    const p = document.createElement('p');
    p.innerText = `${productName}`;
    productCartName.appendChild(p);
    console.log(productName, productCartName);
}