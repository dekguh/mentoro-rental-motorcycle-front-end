import LabelTag from '../../atomics/LabelTag'
import ListBenefit from '../../molecules/list/ListBenefit'
import ListPrice from '../../molecules/list/ListPrice'
import ReactMarkdown from 'react-markdown'
import ListCalendar from '../../molecules/bookDate/ListCalendar'
import { useEffect, useState } from 'react'
import Button from '../../atomics/form/Button'
import { JournalPlus } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { updateMotorIdAct } from '../../utils/redux/booking/action'
import { useRouter } from 'next/router'

const DetailContent = ({ classes, image, title, isDiscount, pricePerHour, priceList, description, benefit, id, listDateBooked, actUpdateMotorId, ...rest }) => {
    const Router = useRouter()
    const [pendingDate, setPendingDate] = useState([])
    const [payDate, setPayDate] = useState([])

    useEffect(() => {
        const filterPending = listDateBooked.filter(data => data.status == 'pending_booked').map(data => {
            return new Date(data.currentDate * 1000)
        })
        setPendingDate(filterPending)

        const filterPay = listDateBooked.filter(data => data.status == 'pay_booked').map(data => {
            return new Date(data.currentDate * 1000)
        })
        setPayDate(filterPay)
    }, [])

    const handleAddMotorId = e => {
        actUpdateMotorId(id)
        Router.push('/booking')
    }

    return (
        <div className={classes ? `detail__content-motor ${classes}` : 'detail__content-motor'} {...rest}>
            <div className='detail__content-head margin-bottom-4'>
                <div className='motor-image'>
                    <img src={image} />
                </div>

                <div className='motor-title'>
                    {isDiscount && <LabelTag text='discount' classes='margin-bottom-8'/>}
                    <h4 className='margin-bottom-4'>{title}</h4>
                    <span className='motor-title-price'>
                        start {Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(pricePerHour * 24)}/day
                    </span>
                </div>
            </div>
            <div className='detail__content-body'>
                <ListBenefit
                    classes='margin-bottom-12'
                    listBenefit={benefit}
                />

                <div className='detail__content-description margin-bottom-16'>
                    <ReactMarkdown>
                        {description}
                    </ReactMarkdown>
                </div>

                <ListPrice priceList={priceList} />
                <ListCalendar
                    classes='margin-top-20'
                    highlightDates={[{
                        'pending__date': pendingDate || [new Date(17512200 * 1000)]
                    }, {
                        'pay__date': payDate || [new Date(17512200 * 1000)]
                    }]}
                    excludeDates={[new Date(16821000 * 1000)]}
                    inline
                />

                <div className='detail__content-booking margin-top-20'>
                    <Button text='Booking Now' value={id} onClick={handleAddMotorId}><JournalPlus /></Button>
                </div>
            </div>
        </div>
    )
}

DetailContent.defaultProps = {
    isDiscount: false
}

const mapDispatchToProps = dispatch => {
    return {
        actUpdateMotorId: id => dispatch(updateMotorIdAct(id))
    }
}

export default connect(null, mapDispatchToProps)(DetailContent)
