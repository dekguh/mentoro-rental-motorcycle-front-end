import { BellFill } from 'react-bootstrap-icons'
import TextLink from '../../atomics/TextLink'

const BellNotif = ({ url, isNotif }) => {
    return (
        <TextLink url={url}>
            {isNotif && <span className='is__notif'></span>}
            <BellFill />
        </TextLink>
    )
}

BellNotif.defaultProps = {
    url: '#',
    isNotif: false
}

export default BellNotif
