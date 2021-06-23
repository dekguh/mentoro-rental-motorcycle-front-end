import Link from 'next/link';

const NavItem = ({ title, slug, children }) => {
    return (
        <li className='navigation__item'>
            <Link href={slug || '#'}>
                <a className='navigation__item-link'>
                    <i className='navigation__item-icon'>
                        {children}
                    </i>
                    <span className='navigation__item-title'>
                        {title}
                    </span>
                </a>
            </Link>
        </li>
    )
}

export default NavItem
