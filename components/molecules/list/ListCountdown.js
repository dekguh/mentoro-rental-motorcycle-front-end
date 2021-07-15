import React from 'react'
import Countdown from 'react-countdown'
import PropTypes from 'prop-types'

const ListCountdown = ({ children, date, millisecond, ...rest }) => {
    return (
        <div className='list__countdown margin-bottom-8'>
            <h6 className='margin-bottom-4'>pay before</h6>
            <Countdown
                date={new Date(date).getTime() + millisecond}
                {...rest}
            >
            {children}
            </Countdown>
        </div>
    )
}

ListCountdown.defaultProps = {
    millisecond: 3600000
}

export default ListCountdown
