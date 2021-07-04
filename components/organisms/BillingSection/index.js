import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import { Person } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import Alert from '../../atomics/Alert'
import Api from '../../utils/Api'
import nookies from 'nookies'

const BillingSection = ({ isBilling, infoBilling, getDataBillingAct }) => {
    const cookies = nookies.get(undefined)
    const dataLogged = cookies.dataLogged && JSON.parse(cookies.dataLogged) || undefined
    const Router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [dataBilling, setDataBilling] = useState({
        fullName: '', address: '', district: '', province: '', country: '', phoneNumber: ''
    })
    const [statusErr, setStatusErr] = useState({
        global: {
            message: '',
            valid: true
        },
        fullName: {
            message: '',
            valid: false
        },
        address: {
            message: '',
            valid: false
        },
        district: {
            message: '',
            valid: false
        },
        province: {
            message: '',
            valid: false
        },
        country: {
            message: '',
            valid: false
        },
        phoneNumber: {
            message: '',
            valid: false
        }
    })

    const handleFullName = e => {
        if(e.target.value.length < 3) return setStatusErr({...statusErr, fullName: {
            message: 'name min 3 character',
            valid: false
        }})

        const pattern = /^[a-zA-Z\s]*$/g
        if(!pattern.test(e.target.value)) return setStatusErr({...statusErr, fullName: {
            message: 'use only alphabet and space',
            valid: false
        }})

        setStatusErr({...statusErr, fullName: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, fullName: e.target.value})
    }

    const handleAddress = e => {
        if(e.target.value.length < 8) return setStatusErr({...statusErr, address: {
            message: 'address min 8 character',
            valid: false
        }})

        if(e.target.value.length > 148) return setStatusErr({...statusErr, address: {
            message: 'address max 148 character',
            valid: false
        }})

        setStatusErr({...statusErr, address: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, address: e.target.value})
    }

    const handleDistrict = e => {
        if(e.target.value.length < 3) return setStatusErr({...statusErr, district: {
            message: 'district min 3 character',
            valid: false
        }})

        if(e.target.value.length > 28) return setStatusErr({...statusErr, district: {
            message: 'district max 28 character',
            valid: false
        }})

        setStatusErr({...statusErr, district: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, district: e.target.value})
    }

    const handleProvince = e => {
        if(e.target.value.length < 3) return setStatusErr({...statusErr, province: {
            message: 'province min 3 character',
            valid: false
        }})

        if(e.target.value.length > 28) return setStatusErr({...statusErr, province: {
            message: 'province max 28 character',
            valid: false
        }})

        setStatusErr({...statusErr, province: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, province: e.target.value})
    }

    const handleCountry = e => {
        if(e.target.value.length < 3) return setStatusErr({...statusErr, country: {
            message: 'country min 3 character',
            valid: false
        }})

        if(e.target.value.length > 28) return setStatusErr({...statusErr, country: {
            message: 'country max 28 character',
            valid: false
        }})

        setStatusErr({...statusErr, country: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, country: e.target.value})
    }

    const handlePhoneNumber = e => {
        if(e.target.value.length < 3) return setStatusErr({...statusErr, phoneNumber: {
            message: 'phone number min 3 character',
            valid: false
        }})

        if(e.target.value.length > 28) return setStatusErr({...statusErr, phoneNumber: {
            message: 'phone number max 28 character',
            valid: false
        }})

        const pattern = /^[+0-9]+$/g
        if(!pattern.test(e.target.value)) return setStatusErr({...statusErr, phoneNumber: {
            message: 'format phone number must like +62123456789',
            valid: false
        }})

        setStatusErr({...statusErr, phoneNumber: {
            message: '',
            valid: true
        }})

        setDataBilling({...dataBilling, phoneNumber: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if((!statusErr.fullName.valid || !statusErr.address.valid || !statusErr.district.valid
        || !statusErr.province.valid || !statusErr.country.valid || !statusErr.phoneNumber.valid) && !isBilling) return setStatusErr({...statusErr, global: {
                message: 'please check again all form input',
                valid: false
            }})

        const add = async () => {
            try {
                const response = await Api.post('billing-users', {
                    fullName: dataBilling.fullName,
                    address: dataBilling.address,
                    district: dataBilling.district,
                    province: dataBilling.province,
                    country: dataBilling.country,
                    phoneNumber: dataBilling.phoneNumber
                }, {
                    headers: {
                    Authorization: `Bearer ${dataLogged.jwt}`
                    }
                })
                const result = response.data
                setIsLoading(false)
                setStatusErr({...statusErr, global: {
                    message: 'success update your billing',
                    valid: true
                }})
                if(result) return getDataBillingAct()
            }catch(err) {
                setStatusErr({...statusErr, global: {
                    message: 'failed to update billing',
                    valid: false
                }})
                setIsLoading(false)
            }
        }

        const update = async () => {
            try {
                const response = await Api.put(`billing-users/${infoBilling.id}`, {
                    fullName: dataBilling.fullName || infoBilling.fullName,
                    address: dataBilling.address || infoBilling.address,
                    district: dataBilling.district || infoBilling.district,
                    province: dataBilling.province || infoBilling.province,
                    country: dataBilling.country || infoBilling.country,
                    phoneNumber: dataBilling.phoneNumber || infoBilling.phoneNumber
                }, {
                    headers: {
                    Authorization: `Bearer ${dataLogged.jwt}`
                    }
                })
                const result = response.data
                setIsLoading(false)
                setStatusErr({...statusErr, global: {
                    message: 'success update your billing',
                    valid: true
                }})
                if(result) return getDataBillingAct()
            }catch(err) {
                setStatusErr({...statusErr, global: {
                    message: 'failed to update billing',
                    valid: false
                }})
                setIsLoading(false)
            }
        }

        setStatusErr({...statusErr, global: {
            message: '',
            valid: true
        }})

        setIsLoading(true)
        if(!isBilling) add()
        if(isBilling) update()
    }

    return (
        <div>
            <DetailHead />
            <div className='detail__content-wrap margin-bottom-40'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Billing Info</h2>
                    <p className='margin-bottom-0'>please update your billing before make transaction or use other feature</p>
                </div>

                <div className='billing__content-body'>
                    {(statusErr.global.message.length > 0 && !statusErr.global.valid) && <Alert
                        text={statusErr.global.message}
                        type='danger'
                        classes='margin-bottom-16'
                    />}
                    {(statusErr.global.message.length > 0 && statusErr.global.valid) && <Alert
                        text={statusErr.global.message}
                        type='success'
                        classes='margin-bottom-16'
                    />}
                    <form method='POST' onSubmit={handleSubmit}>
                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Full Name'
                            placeholder='ex: kadek sa'
                            type='text'
                            onChange={handleFullName}
                            defaultValue={infoBilling?.fullName}
                            required
                        />
                        {statusErr.fullName.message.length > 0 && <Alert
                            text={statusErr.fullName.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Address'
                            placeholder='ex: Jl. Bypass Ngurah Rai'
                            type='text'
                            onChange={handleAddress}
                            defaultValue={infoBilling?.address}
                            required
                        />
                        {statusErr.address.message.length > 0 && <Alert
                            text={statusErr.address.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='District'
                            placeholder='Badung'
                            type='text'
                            onChange={handleDistrict}
                            defaultValue={infoBilling?.district}
                            required
                        />
                        {statusErr.district.message.length > 0 && <Alert
                            text={statusErr.district.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Province'
                            placeholder='Bali'
                            type='text'
                            onChange={handleProvince}
                            defaultValue={infoBilling?.province}
                            required
                        />
                        {statusErr.province.message.length > 0 && <Alert
                            text={statusErr.province.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Country'
                            placeholder='Indonesia'
                            type='text'
                            onChange={handleCountry}
                            defaultValue={infoBilling?.country}
                            required
                        />
                        {statusErr.country.message.length > 0 && <Alert
                            text={statusErr.country.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Phone Number'
                            placeholder='+62123456789'
                            type='text'
                            onChange={handlePhoneNumber}
                            defaultValue={infoBilling?.phoneNumber}
                            required
                        />
                        {statusErr.phoneNumber.message.length > 0 && <Alert
                            text={statusErr.phoneNumber.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <Button
                            type='submit'
                            classes='margin-bottom-16'
                            style={{ width: '100%' }}
                            text={isLoading ? 'process update..' :'update billing'}
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
        getDataBillingAct: () => dispatch({ type: 'GET_BILLING_USER' })
    }
}

const mapStateToProps = state => {
    return {
        isBilling: state.user.isBilling,
        infoBilling: state.user.billingData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingSection)
