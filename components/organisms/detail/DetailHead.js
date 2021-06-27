import Link from 'next/link'
import { ArrowLeft } from 'react-bootstrap-icons'

const DetailHead = () => {
    return (
        <div className='detail__head'>
            <Link href='/'>
                <a className='back__to-link'>
                    <i style={{ marginRight: '4px', paddingTop: '4px' }}><ArrowLeft /></i>
                    <span>back</span>
                </a>
            </Link>
        </div>
    )
}

export default DetailHead
