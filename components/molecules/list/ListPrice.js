const ListPrice = ({ priceList }) => {
    return (
    <>
        <h4 className='margin-bottom-0'>Price</h4>
        <ul className='list__price-rent'>
            {priceList && priceList.map((data, i) => (
                <li key={i}>
                    <div className='pricing-content'>
                        <span className='price'>
                            {data.discount <= 0 && Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(data.pricePerHour * data.totalHour)}
                            {data.discount > 0 && Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format((data.pricePerHour * data.totalHour) * ((100-data.discount)/100))}
                        </span>
                        <span className='discount'>
                            {data.discount > 0 && Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(data.pricePerHour * data.totalHour)}
                        </span>
                    </div>
                    <div className='day-content'>
                        <span className='day'>{data.totalHour/24} day</span>
                    </div>
                </li>
            ))}
        </ul>
    </>
    )
}

export default ListPrice
