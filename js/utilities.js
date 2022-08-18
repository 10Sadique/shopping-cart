function updateItemNumber(isIncrease, inputId) {
    const itemNumberField = document.getElementById(inputId)
    const itemNumberStrng = itemNumberField.value
    const prevItemNumber = parseInt(itemNumberStrng)

    let newItemNumber

    if (isIncrease) {
        newItemNumber = prevItemNumber + 1
    } else {
        newItemNumber = prevItemNumber - 1
    }

    if (newItemNumber >= 0) {
        itemNumberField.value = newItemNumber
    }

    return newItemNumber
}


function updateTotalItemPrice(number, totalPriceId, item) {
    let price
    if (item == 'phone') {
        price = 1213
    } else if(item == 'case') {
        price = 59
    }
    if (number >= 0) {
        const itemTotalPrice = number * price
        const itemTotalElement = document.getElementById(totalPriceId)
        itemTotalElement.innerText = itemTotalPrice
    }
}

function getTextElementById(totalId) {
    const itemTotalElement = document.getElementById(totalId)
    const currItemTotalString = itemTotalElement.innerText
    const currItemTotal = parseInt(currItemTotalString)

    return currItemTotal
}


function setTextElementById(elementId, value) {
    const currSubTotalElement = document.getElementById(elementId)
    currSubTotalElement.innerText = value
}

function calculateSubTotal() {
    // calculate sub total
    const currPhoneTotal = getTextElementById('phone-total')
    const currCaseTotal = getTextElementById('case-total')

    const currSubTotal = currPhoneTotal + currCaseTotal
    setTextElementById('sub-total', currSubTotal)

    // calculate tax
    const taxAmonutString = (currCaseTotal * 0.1).toFixed(2)
    const taxAmonut = parseFloat(taxAmonutString)
    setTextElementById('tax-amount', taxAmonut)

    // final amount
    const finalAmount = currSubTotal + taxAmonut
    setTextElementById('final-total', finalAmount)
}
