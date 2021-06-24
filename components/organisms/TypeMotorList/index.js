import TypeMotorItem from '../../molecules/TypeMotorItem';

const TypeMotorList = ({ classes }) => {
    return (
        <ul className={classes ? `list__type-motor ${classes}` : 'list__type-motor'}>
            <li>
                <TypeMotorItem
                    text='Matic'
                    url='#'
                    img='/images/matic.png'
                />
            </li>
            <li>
                <TypeMotorItem
                    text='No Cluth'
                    url='#'
                    img='/images/semi-manual.png'
                />
            </li>
            <li>
                <TypeMotorItem
                    text='Clutch'
                    url='#'
                    img='/images/manual.png'
                />
            </li>
        </ul>
    )
}

export default TypeMotorList
