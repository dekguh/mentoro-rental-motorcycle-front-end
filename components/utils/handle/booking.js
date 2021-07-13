export function totalPriceByPriceRent(listPrice, totalDay) {
    const findPriceList = listPrice && listPrice
    .sort((a, b) => b.totalHour - a.totalHour)
    .find(data => totalDay >= data.totalHour/24)
    return findPriceList
}

export function discountPrice(totalPrice, discount) {
    return totalPrice - (totalPrice * (discount/100))
}

export function checkDateTodayOrGreater(start, end) {
        const currentDate = new Date().toDateString()
        const currentDateTime = Math.floor(new Date(`${currentDate} 00:00:00 GMT+0800 (Singapore Standard Time)`).getTime()/1000)
        const startDate = Math.floor(new Date(start).getTime()/1000)
        const endDate = Math.floor(new Date(end).getTime()/1000)
        if(startDate < currentDateTime || endDate < currentDateTime) return true
        return false
}