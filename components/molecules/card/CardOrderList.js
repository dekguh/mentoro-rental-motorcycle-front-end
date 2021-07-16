import React from 'react'
import Link from 'next/link'
import { InfoCircle, JournalBookmark, Wallet } from 'react-bootstrap-icons'

const CardOrderList = ({orderId, classes, href, status, totalPay, ...rest}) => {
    return (
        <div className={classes ? `card__order ${classes}` : 'card__order'}>
            <div className='card__order-heading'>
                <div className='card__order-icon-wrap'>
                    <i className='card__order-icon'>
                        <JournalBookmark />
                    </i>
                </div>
            </div>
            <div className='card__order-body'>
                <h5 className='margin-bottom-4'>
                    <Link href={href}>
                        <a className='card__order-link'>#{orderId}</a>
                    </Link>
                </h5>
                <ul className='list__info-order'>
                    <li className='item'>
                        <i className='icon'><InfoCircle /></i>
                        <span className='text'>{status}</span>
                    </li>
                    <li className='item'>
                        <i className='icon'><Wallet /></i>
                        <span className='text'>{totalPay}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardOrderList
