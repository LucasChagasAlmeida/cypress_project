export const elements = {
    url: 'https://www.saucedemo.com/inventory.html',
    addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeFromCart: (itemName) => `[data-test="remove-${transform(itemName)}"]`
    
}

function transform(text){
    return text.replaceAll(' ', '-').toLowerCase()
}