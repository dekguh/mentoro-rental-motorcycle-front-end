export function totalPriceByPriceRent(listPrice, totalDay) {
    const findPriceList = listPrice && listPrice
    .sort((a, b) => b.totalHour - a.totalHour)
    .find(data => totalDay >= data.totalHour/24)
    return findPriceList
}

export function discountPrice(totalPrice, discount) {
    return totalPrice - (totalPrice * (discount/100))
}