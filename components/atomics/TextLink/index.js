import Link from "next/link";

const index = ({ classes, url, children, ...rest }) => {
    return (
        <Link href={url}>
            <a className={classes ? `text__link ${classes}` : 'text__link'} {...rest}>
                {children}
            </a>
        </Link>
    )
}

export default index
