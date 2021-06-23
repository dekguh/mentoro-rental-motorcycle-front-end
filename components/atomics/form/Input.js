const Input = ({ classes, ...rest }) => {
    return (
        <input
            className={classes ? `form__control ${classes}` : 'form__control'}
            {...rest}
        />
    )
}

export default Input
