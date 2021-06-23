const Label = ({ classes, text, ...rest }) => {
    return (
        <label className={classes ? `form__label ${classes}` : 'form__label'} {...rest}>
            {text}
        </label>
    )
}

export default Label
