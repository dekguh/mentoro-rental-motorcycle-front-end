const Alert = ({ text, classes, type, ...rest }) => {
    return (
        <div className={classes ? `alert__box ${type} ${classes}` : `alert__box ${type}`} {...rest}>
            {text}
        </div>
    )
}

export default Alert
