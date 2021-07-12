const ListBookingDate = ({ startDate, endDate }) => {
    return (
        <ul className='list__total'>
            <li className='list__total-item'>
                <span className='list__total-number'>start</span>
                <span className='list__total-label'>
                    {startDate ? new Date(startDate * 1000).toDateString() : '-'}
                </span>
            </li>
            <li className='list__total-item'>
                <span className='list__total-number'>end</span>
                <span className='list__total-label'>
                    {endDate ? new Date(endDate * 1000).toDateString() : '-'}
                </span>
            </li>
        </ul>
    )
}

export default ListBookingDate
