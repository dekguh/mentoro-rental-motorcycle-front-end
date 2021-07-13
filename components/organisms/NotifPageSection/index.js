import DetailHead from '../detail/DetailHead'

const NotifPageSection = ({ image, title, description }) => {
    return (
        <div className='booking__page-wrap'>
            <DetailHead />

            <div className='detail__content-wrap margin-bottom-40'>
                <div className='notif__page-body'>
                    <img src={image} className='notif__page-image' />
                    <h4 className='notif__page-title'>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NotifPageSection
