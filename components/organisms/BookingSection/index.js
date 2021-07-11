import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import { useRouter } from 'next/router'
import { apiCheckCurrentDate, apiCheckMotorId } from '../../utils/Api'
import ListCalendar from '../../molecules/bookDate/ListCalendar'
import Button from '../../atomics/form/Button'
import { JournalPlus } from 'react-bootstrap-icons'
import Alert from '../../atomics/Alert'

const BookingSection = ({ bookingMotorId }) => {
    //current today
    const currentToday = new Date().toDateString()
    const currentTodayTime = Math.floor(new Date(`${currentToday} 00:00:00 GMT+0800 (Singapore Standard Time)`).getTime()/1000)

    const [dateBook, setDateBook] = useState({
        start: new Date(currentTodayTime * 1000),
        end: null,
        totalDay: 0
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [dataMotor, setDataMotor] = useState({})
    const [pendingDate, setPendingDate] = useState([])
    const [payDate, setPayDate] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const Router = useRouter()

    useEffect(() => {
        const checkValidId = async () => {
            const checkId = await apiCheckMotorId(bookingMotorId)
            if(!checkId.valid) return Router.push('/')
            setDataMotor(checkId.data)
            setIsValid(true)
        }

        if(!bookingMotorId) return Router.push('/')
        checkValidId()
    }, [])

    useEffect(() => {
        const filterPending = dataMotor.book_dates?.filter(data => data.status == 'pending_booked').map(data => {
            return new Date(data.currentDate * 1000)
        })
        setPendingDate(filterPending)

        const filterPay = dataMotor.book_dates?.filter(data => data.status == 'pay_booked').map(data => {
            return new Date(data.currentDate * 1000)
        })
        setPayDate(filterPay)
    }, [dataMotor])

    const handleCalendarChange = (dates) => {
        const [start, end] = dates
        const startTime = new Date(start).getTime()/1000
        const endTime = end && new Date(end).getTime()/1000
        const totalDay = (start && end) && (((endTime - startTime) + 86400) / 86400) || 1
        setDateBook({
            start: start,
            end: end,
            totalDay: totalDay
        })
    }

    const handleSubmitDate = e => {
        const checkCurrent = async () => {
            const currentStart = Math.floor(new Date(dateBook.start).getTime()/1000)
            for(let i = 1;i <= dateBook.totalDay;i++) {
                const current = i > 1 ? currentStart + (86400 * (i - 1)) : currentStart
                const checking = await apiCheckCurrentDate(current, bookingMotorId)
                if(checking.valid) {
                    setIsLoading(false)
                    return setErrorMessage(checking.message)
                }
            }
            setErrorMessage(null)
            setIsLoading(false)
        }

        setIsLoading(true)
        checkCurrent()
    }

    return (
    <>
        {isValid && <div className='booking__page-wrap'>
            <DetailHead />

            <div className='detail__content-wrap margin-bottom-40'>
                <div className='booking__page-head'>
                    <h2 className='margin-bottom-8'>Choose Date</h2>
                    <p className='margin-bottom-0'>
                        Please select a date that has not been selected, please see the color information below
                    </p>
                </div>

                <div className='booking__page-body'>
                    <ListCalendar
                        classes='margin-top-20'
                        highlightDates={[{
                            'pending__date': pendingDate || [new Date(17512200 * 1000)]
                        }, {
                            'pay__date': payDate || [new Date(17512200 * 1000)]
                        }]}
                        selected={dateBook.start}
                        onChange={handleCalendarChange}
                        startDate={dateBook.start}
                        endDate={dateBook.end}
                        inline
                        selectsRange
                    />

                    {errorMessage && <Alert
                        text={errorMessage}
                        type='danger'
                        classes='margin-top-20'
                    />}

                    <div className='detail__content-booking margin-top-20'>
                        <Button onClick={handleSubmitDate} text={isLoading ? 'Check Dates...' : 'Choose Date'}><JournalPlus /></Button>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

const mapStateToProps = state => {
    return {
        bookingMotorId: state.booking.motorId
    }
}

export default connect(mapStateToProps, null)(BookingSection)
