import BookingSection from '../../components/organisms/BookingSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BookingPage = () => {
    return (
        <PrivateAuth>
            <BookingSection />
        </PrivateAuth>
    )
}

export default BookingPage
