import LabelTag from '../../atomics/LabelTag'
import ListBenefit from '../../molecules/list/ListBenefit'
import ListPrice from '../../molecules/list/ListPrice'
import ReactMarkdown from 'react-markdown'

const DetailContent = ({ classes, image, title, isDiscount, pricePerHour, priceList, description, benefit, ...rest }) => {
    return (
        <div className={classes ? `detail__content-motor ${classes}` : 'detail__content-motor'} {...rest}>
            <div className='detail__content-head margin-bottom-4'>
                <div className='motor-image'>
                    <img src={image} />
                </div>

                <div className='motor-title'>
                    {isDiscount && <LabelTag text='discount' classes='margin-bottom-8'/>}
                    <h4 className='margin-bottom-4'>{title}</h4>
                    <span className='motor-title-price'>
                        start {Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(pricePerHour * 24)}/day
                    </span>
                </div>
            </div>
            <div className='detail__content-body'>
                <ListBenefit
                    classes='margin-bottom-12'
                    listBenefit={benefit}
                />

                <div className='detail__content-description margin-bottom-16'>
                    <ReactMarkdown>
                        {description}
                    </ReactMarkdown>
                </div>

                <ListPrice priceList={priceList} />
            </div>
        </div>
    )
}

DetailContent.defaultProps = {
    isDiscount: false
}

export default DetailContent
