const Button = ({ text, children, classes, ...rest }) => {
    return (
        <button className={classes ? `btn__custom ${classes}` : 'btn__custom'} {...rest}>
            {children && (
                <i className='btn__custom-icon'>
                    {children}
                </i>
            )}
            <span>{text}</span>
        </button>
    )
}

export default Button
