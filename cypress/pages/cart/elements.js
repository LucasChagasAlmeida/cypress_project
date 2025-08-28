export const elements = {
    url: 'https://www.saucedemo.com/cart.html',
    removeFromCart: (itemName) => `[data-test="remove-${transform(itemName)}"]`
}

function transform(text){
    return text.replaceAll(' ', '-').toLowerCase()
}