import nookies from 'nookies'
import { useRouter } from 'next/router'
import { DoorClosed } from 'react-bootstrap-icons'
import Button from '../../atomics/form/Button'

const Logout = () => {
    const Router = useRouter()

    const handleLogout = e => {
        nookies.destroy(undefined, 'dataLogged')
        Router.push('/users/login')
    }
    return (
        <div className='margin-top-20' style={{ textAlign: 'center' }}>
            <Button text='logout' onClick={handleLogout}>
                <DoorClosed />
            </Button>
        </div>
    )
}

export default Logout
