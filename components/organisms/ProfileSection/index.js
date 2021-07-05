import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import Link from 'next/link'
import TotalTransaction from '../../molecules/profile/TotalTransaction'
import TotalOrder from '../../molecules/profile/TotalOrder'
import Logout from '../../molecules/profile/Logout'
import { PencilSquare } from 'react-bootstrap-icons'

const ProfileSection = ({ infoBilling }) => {
    return (
        <div>
            <DetailHead />
            <div className='detail__content-wrap margin-bottom-40'>
                <div className='profile__content-heading margin-bottom-16' style={{ textAlign: 'center' }}>
                    <img className='profile__content-photo margin-bottom-8' src='/images/blank-profile.png' />
                    <h5 className='profile__content-name'>
                        <span>I Kadek Teguh Mahesa</span>
                        <Link href='/users/billing'>
                            <a className='profile__content-edit margin-left-8'><PencilSquare /></a>
                        </Link>
                    </h5>
                    <span className='profile__content-type'>customer</span>
                </div>

                <div className='profile__content-count'>
                    <TotalOrder />
                    <TotalTransaction />
                    <Logout />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        infoBilling: state.user.billingData,
        isBilling: state.user.isBilling
    }
}

export default connect(mapStateToProps, null)(ProfileSection)
