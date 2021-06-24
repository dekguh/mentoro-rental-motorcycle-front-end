import FormSearch from "../../molecules/form/FormSearch";
import BellNotif from "../../molecules/BellNotif";

const HomeHead = () => {
    return (
        <div className='homesearch__wrap'>
            <div className='homesearch__content'>
                <FormSearch />
            </div>

            <div className='homesearch__notif'>
                <span className='homesearch__notif-icon'>
                    <BellNotif url='#' isNotif={true} />
                </span>
            </div>
        </div>
    )
}

export default HomeHead
