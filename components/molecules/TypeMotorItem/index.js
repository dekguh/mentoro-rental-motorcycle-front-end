import TextLink from '../../atomics/TextLink'

const TypeMotorItem = ({ img, text, url }) => {
    return (
        <div className='card__type-motor'>
            <TextLink url={url}>
                <i className='card__type-motor-icon'>
                    <img src={img} />
                </i>
                <div className='card__type-motor-text'>
                    <span>{text}</span>
                </div>
            </TextLink>
        </div>
    )
}

TypeMotorItem.defaultProps = {
    url: '#'
}

export default TypeMotorItem
