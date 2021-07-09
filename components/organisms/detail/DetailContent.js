import LabelTag from '../../atomics/LabelTag'
import ListBenefit from '../../molecules/list/ListBenefit'
import ListPrice from '../../molecules/list/ListPrice'
import ReactMarkdown from 'react-markdown'
import ListCalendar from '../../molecules/bookDate/ListCalendar'
import { useEffect, useState } from 'react'

const DetailContent = ({ classes, image, title, isDiscount, pricePerHour, priceList, description, benefit, listDateBooked, ...rest }) => {
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
            </div>
        </div>
    )
}

DetailContent.defaultProps = {
    isDiscount: false
}

export default DetailContent
