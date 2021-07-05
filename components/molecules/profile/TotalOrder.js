const TotalOrder = () => {
    return (
        <div className='margin-bottom-32'>
            <ul className='list__total'>
                <li className='list__total-item'>
                    <span className='list__total-number'>300</span>
                    <span className='list__total-label'>orders</span>
                </li>
                <li className='list__total-item'>
                    <span className='list__total-number'>300</span>
                    <span className='list__total-label'>success</span>
                </li>
                <li className='list__total-item'>
                    <span className='list__total-number'>300</span>
                    <span className='list__total-label'>pending</span>
                </li>
            </ul>
        </div>
    )
}

export default TotalOrder
