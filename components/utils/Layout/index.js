import Navigation from '../../organisms/Navigation';

const Layout = ({ children }) => {
    return (
        <div className='container'>
            {children}
            <Navigation />
        </div>
    )
}

export default Layout
