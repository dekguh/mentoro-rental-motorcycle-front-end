import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import { Person } from 'react-bootstrap-icons'

const BillingSection = () => {
    return (
        <div>
            <DetailHead />
            <div className='detail__content-wrap margin-bottom-40'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Billing Info</h2>
                    <p className='margin-bottom-0'>please update your billing before make transaction or use other feature</p>
                </div>

                <div className='billing__content-body'>
                    <form>
                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Full Name'
                            placeholder='ex: dek saa'
                            type='text'
                            required
                        />

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Address'
                            placeholder='ex: Jl. Bypass Ngurah Rai'
                            type='text'
                            required
                        />

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='District'
                            placeholder='Badung'
                            type='text'
                            required
                        />

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Province'
                            placeholder='Bali'
                            type='text'
                            required
                        />

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Phone Number'
                            placeholder='+62123456789'
                            type='text'
                            required
                        />

                        <Button
                            type='submit'
                            classes='margin-bottom-16'
                            style={{ width: '100%' }}
                            text={'update billing'}
                        >
                            <Person />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingSection)
