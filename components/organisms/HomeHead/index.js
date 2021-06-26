import FormSearch from '../../molecules/form/FormSearch';
import BellNotif from '../../molecules/BellNotif';
import { connect } from 'react-redux';
import { updateSearchTextAct } from '../../utils/redux/search/action';

const HomeHead = ({ updateTextAct }) => {
    const handleChangeText = e => {
        updateTextAct(e.target.value);
    }
    return (
        <div className='homesearch__wrap'>
            <div className='homesearch__content'>
                <FormSearch onChange={handleChangeText} />
            </div>

            <div className='homesearch__notif'>
                <span className='homesearch__notif-icon'>
                    <BellNotif url='#' isNotif={true} />
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateTextAct: text => dispatch(updateSearchTextAct(text))
    }
}

export default connect(null, mapDispatchToProps)(HomeHead)
