const CardNotif = ({ children, classes, title, description, ...rest }) => {
    return (
        <div className={classes ? `card__notif ${classes}` : 'card__notif'} {...rest}>
            <div className='card__notif-heading'>
                <div className='card__notif-icon-wrap'>
                    <i className='card__notif-icon'>
                        {children}
                    </i>
                </div>
            </div>
            <div className='card__notif-body'>
                {title && <h5 className='margin-bottom-4'>{title}</h5>}
                <p className='margin-bottom-0'>{description}</p>
            </div>
        </div>
    )
}

export default CardNotif
