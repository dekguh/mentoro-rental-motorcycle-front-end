import { connect } from 'react-redux';
import TypeMotorItem from '../../molecules/TypeMotorItem';
import { updateSearchTypeAct } from '../../utils/redux/search/action';

const TypeMotorList = ({ classes, updateTypeMotorAct }) => {
    return (
        <ul className={classes ? `list__type-motor ${classes}` : 'list__type-motor'}>
            <li>
                <TypeMotorItem
                    text='Matic'
                    url='#'
                    img='/images/matic.png'
                    onClick={e => {
                        e.preventDefault()
                        updateTypeMotorAct('matic')
                    }}
                />
            </li>
            <li>
                <TypeMotorItem
                    text='No Cluth'
                    url='#'
                    img='/images/semi-manual.png'
                    onClick={e => {
                        e.preventDefault()
                        updateTypeMotorAct('semimanual')
                    }}
                />
            </li>
            <li>
                <TypeMotorItem
                    text='Clutch'
                    url='#'
                    img='/images/manual.png'
                    onClick={e => {
                        e.preventDefault()
                        updateTypeMotorAct('manual')
                    }}
                />
            </li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateTypeMotorAct: type => dispatch(updateSearchTypeAct(type))
    }
}

export default connect(null, mapDispatchToProps)(TypeMotorList)
