
// plus button
document.getElementById('btn-phone-plus').addEventListener('click', () => {
    const newPhoneNumber = updateItemNumber(true, 'phone-number-field')

    updateTotalItemPrice(newPhoneNumber, 'phone-total', 'phone')

    // calculate phone total
    calculateSubTotal()
})


// minus button
document.getElementById('btn-phone-minus').addEventListener('click', () => {
    const newPhoneNumber = updateItemNumber(false, 'phone-number-field')

    updateTotalItemPrice(newPhoneNumber, 'phone-total', 'phone')

    // calculating phone total
    calculateSubTotal()
})
