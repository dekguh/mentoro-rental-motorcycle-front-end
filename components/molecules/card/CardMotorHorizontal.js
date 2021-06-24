import LabelTag from '../../atomics/LabelTag'
import TextLink from '../../atomics/TextLink'

const CardMotorHorizontal = ({ classes, img, title, url, pricePerHour, isDiscount, ...rest }) => {
    return (
        <div className={classes ? `card__motor-horizontal ${classes}` : 'card__motor-horizontal'} {...rest}>
            <div className='card__motor-horizontal-heading margin-bottom-12'>
                {isDiscount && <LabelTag text='discount' style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '2'
                }} />}
                <img
                    className='card__motor-horizontal-image'
                    src={img}
                />
            </div>
            <div className='card__motor-horizontal-body'>
                <TextLink url={url}>
                    <h6 style={{ marginBottom: '4px' }}>{title}</h6>
                </TextLink>
                <span className='card__motor-horizontal-price'>
                start {Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(pricePerHour * 24)}/day
                </span>
            </div>
        </div>
    )
}

export default CardMotorHorizontal
