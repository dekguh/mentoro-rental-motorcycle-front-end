import Navigation from '../../organisms/Navigation';

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <Navigation />
        </div>
    )
}

export default Layout
