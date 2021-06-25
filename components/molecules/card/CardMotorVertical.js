import LabelTag from '../../atomics/LabelTag'
import TextLink from '../../atomics/TextLink'

const CardMotorVertical = ({ classes, img, title, url, pricePerHour, isDiscount, ...rest }) => {
    return (
        <div className={classes ? `card__motor-vertical ${classes}` : 'card__motor-vertical'} {...rest}>
            <div className='card__motor-vertical-heading'>
                <img
                    className='card__motor-vertical-image'
                    src={img}
                />
            </div>
            <div className='card__motor-vertical-body'>
                {isDiscount && <LabelTag text='discount' classes='margin-bottom-8'/>}
                <TextLink url={url}>
                    <h6 style={{ marginBottom: '4px' }}>{title}</h6>
                </TextLink>
                <span className='card__motor-vertical-price'>
                start {Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(pricePerHour * 24)}/day
                </span>
            </div>
        </div>
    )
}

export default CardMotorVertical