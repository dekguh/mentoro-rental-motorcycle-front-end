const LabelTag = ({ text, classes, ...rest }) => {
    return (
        <label className={classes ? `label__custom ${classes}` : 'label__custom'} {...rest}>
            {text}
        </label>
    )
}

export default LabelTag
