// plus button
document.getElementById('btn-case-plus').addEventListener('click', () => {
    const newCaseNumber = updateItemNumber(true, 'case-number-field')

    updateTotalItemPrice(newCaseNumber, 'case-total', 'case')

    // calculate phone total
    calculateSubTotal()
})

// minus button
document.getElementById('btn-case-minus').addEventListener('click', () => {
    const newCaseNumber = updateItemNumber(false, 'case-number-field')

    updateTotalItemPrice(newCaseNumber, 'case-total', 'case')

    // calculate phone total
    calculateSubTotal()
})
