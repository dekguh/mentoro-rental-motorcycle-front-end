import Head from 'next/head'
import BookingSection from '../../components/organisms/BookingSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BookingPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Booking</title>
        </Head>
        <PrivateAuth>
            <BookingSection />
        </PrivateAuth>
    </>
    )
}

export default BookingPage
