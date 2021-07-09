import DatePicker from 'react-datepicker'

const ListCalendar = ({ classes, listDateBooked, ...rest }) => {
    //console.log(listDateBooked)
    return (
        <div className={classes ? `list__calendar ${classes}` : 'list__calendar'}>
            <DatePicker
                {...rest}
            />

            <img src='/images/info-date.png' className='info__date-img' />
        </div>
    )
}

export default ListCalendar
