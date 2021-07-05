import React from 'react'
import CardNotif from '../card/CardNotif'
import { Bank2 } from 'react-bootstrap-icons'

const TotalTransaction = () => {
    return (
        <div >
            <CardNotif
                classes='margin-bottom-12'
                title='Total Transaction'
                description='Rp. 1.000.000,00'>
                <Bank2 />
            </CardNotif>

            <CardNotif
                classes='margin-bottom-12'
                title='Total Pending'
                description='Rp. 1.000.000,00'>
                <Bank2 />
            </CardNotif>

            <CardNotif
                classes='margin-bottom-12'
                title='Total Success'
                description='Rp. 1.000.000,00'>
                <Bank2 />
            </CardNotif>
        </div>
    )
}

export default TotalTransaction
