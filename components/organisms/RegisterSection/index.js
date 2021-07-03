import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import Link from 'next/link'
import { Person } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { emailValidRegex, usernameValidRegex } from '../../utils/handle/users'
import Alert from '../../atomics/Alert'
import Api from '../../utils/Api'

const RegisterSection = () => {
    const Router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [dataRegister, setDataRegister] = useState({ email: '', password: '', username: '' })
    const [statusErr, setStatusErr] = useState({
        global: {
            message: '',
            valid: true
        },
        email: {
            message: '',
            valid: false
        },
        password: {
            message: '',
            valid: false
        },
        username: {
            message: '',
            valid: false
        }
    })

    const handleEmail = e => {
        if(!emailValidRegex(e.target.value)) return setStatusErr({...statusErr, email: {
            message: 'invalid format email',
            valid: false
        }})

        setStatusErr({...statusErr, email: {
            message: '',
            valid: true
        }})

        return setDataRegister({ ...dataRegister, email: e.target.value });
    }

    const handlePassword = e => {
        if(e.target.value.length < 8) return setStatusErr({...statusErr, password: {
            message: 'password minimal 8 character',
            valid: false
        }})

        setStatusErr({...statusErr, password: {
            message: '',
            valid: true
        }})

        return setDataRegister({ ...dataRegister, password: e.target.value });
    }

    const handleUsername = e => {
        if(e.target.value.length < 6) return setStatusErr({...statusErr, username: {
            message: 'username minimal 6 character',
            valid: false
        }})

        if(!usernameValidRegex(e.target.value)) return setStatusErr({...statusErr, username: {
            message: 'username invalid, please use lower case char, no whitespace & dont use symbol',
            valid: false
        }})

        setStatusErr({...statusErr, username: {
            message: '',
            valid: true
        }})

        return setDataRegister({ ...dataRegister, username: e.target.value });
    }

    const handleRegister = e => {
        e.preventDefault()

        const registerUser = async () => {
            try {
                const response = await Api.post('auth/local/register', {
                    email: dataRegister.email,
                    password: dataRegister.password,
                    username: dataRegister.username
                })
                const result = response.data
                setIsLoading(false)
                setStatusErr({...statusErr, global: {
                    message: 'success registration! you can login now',
                    valid: true
                }})
            }catch(err) {
                setIsLoading(false)
                return setStatusErr({...statusErr, global: {
                    message: err.response.data.message[0].messages[0].message,
                    valid: false
                }})
            }
        }

        if(!statusErr.email.valid || !statusErr.password.valid) return setStatusErr({...statusErr, global: {
            message: 'please check again form',
            valid: false
        }})

        setStatusErr({...statusErr, global: {
            message: '',
            valid: true
        }})

        setIsLoading(true)
        registerUser()
    }

    return (
        <div className='login__wrap margin-bottom-40'>
            <DetailHead />

            <div className='login__content-wrap'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Register</h2>
                    <p className='margin-bottom-0'>Register so you can make a motorbike rental order and use other features</p>
                </div>

                <div className='login__content-body'>
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

                    <form method='POST' onSubmit={handleRegister}>
                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='E-mail'
                            placeholder='email'
                            type='email'
                            onChange={handleEmail}
                        />
                        {statusErr.email.message.length > 0 && <Alert
                            text={statusErr.email.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='Password'
                            placeholder='password'
                            type='password'
                            onChange={handlePassword}
                        />
                        {statusErr.password.message.length > 0 && <Alert
                            text={statusErr.password.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='username'
                            placeholder='username'
                            type='text'
                            onChange={handleUsername}
                        />
                        {statusErr.username.message.length > 0 && <Alert
                            text={statusErr.username.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <Button
                            type='submit'
                            classes='margin-bottom-16'
                            style={{ width: '100%' }}
                            text={isLoading ? `process register..` : 'register now'}
                        >
                            <Person />
                        </Button>

                        <div style={{ textAlign: 'center' }}>
                            <span>already have account? login <Link href='/users/login'><a>here</a></Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterSection
