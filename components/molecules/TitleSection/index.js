const TitleSection = ({ component: Component, text, classes, ...rest }) => {
    return (
        <div className={classes ? `title__section ${classes}` : 'title__section' } {...rest}>
            <Component className='title__section-title'>
            {text}
            </Component>
            <div className='title__section-divider'></div>
        </div>
    )
}

export default TitleSection
