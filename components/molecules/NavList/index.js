import { Bookshelf, House, Person, Wallet2 } from 'react-bootstrap-icons';
import NavItem from '../../atomics/NavItem';

export default function NavList() {
    return(
        <ul className='navigation__list'>
            <NavItem title='home' slug='/'>
                <House />
            </NavItem>

            <NavItem title='about' slug='/about'>
                <Bookshelf />
            </NavItem>

            <NavItem title='order' slug='/order'>
                <Wallet2 />
            </NavItem>

            <NavItem title='profile' slug='/users'>
                <Person />
            </NavItem>
        </ul>
    )
}