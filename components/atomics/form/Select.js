const Select = ({ classes, listSelect, ...rest }) => {
    return (
        <select
        className={classes ? `form__control ${classes}` : 'form__control'}
        {...rest}>
            {listSelect.map((data, i) => (
                <option key={i} value={data}>{data}</option>
            ))}
        </select>
    )
}

Select.defaultProps = {
    listSelect: []
}

export default Select
