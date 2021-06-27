const ListBenefit = ({ listBenefit, classes }) => {
    return (
        <ul className={classes ? `list__benefit ${classes}` : 'list__benefit'}>
        {listBenefit && listBenefit.map((data, i) => (
            <li key={i}>
                <span className='benefit-name'>{data.name}:</span>
                <span className='benefit-value'>{data.value}</span>
            </li>
        ))}
        </ul>
    )
}

export default ListBenefit
