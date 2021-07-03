import { useState } from 'react'
import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import Link from 'next/link'
import { Person } from 'react-bootstrap-icons'
import Alert from '../../atomics/Alert'
import { emailValidRegex } from '../../utils/handle/users'
import Api from '../../utils/Api'
import nookies from 'nookies'
import { useRouter } from 'next/router'

const LoginSection = () => {
    const Router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [dataLogin, setDataLogin] = useState({ email: '', password: ''})
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

        return setDataLogin({ ...dataLogin, email: e.target.value });
    }

    const handlePassword = e => {
        if(e.target.value.length <= 0) return setStatusErr({...statusErr, password: {
            message: 'input password must filled',
            valid: false
        }})

        setStatusErr({...statusErr, password: {
            message: '',
            valid: true
        }})

        return setDataLogin({ ...dataLogin, password: e.target.value });
    }

    const handleLogin = e => {
        e.preventDefault()
        setIsLoading(true)

        const login = async () => {
            try {
                const response = await Api.post('auth/local', {
                    identifier: dataLogin.email,
                    password: dataLogin.password
                })

                const result = response.data
                setIsLoading(false)

                if(result.user.blocked) return setStatusErr({...statusErr, global: {
                    message: 'your account has been blocked! please contact admin',
                    valid: false
                }})

                if(!result.user.confirmed) return setStatusErr({...statusErr, global: {
                    message: 'your account has not been confirmed, please check your email',
                    valid: false
                }})

                if(result.user.confirmed && !result.user.blocked) nookies.set(undefined, 'dataLogged', JSON.stringify({
                    jwt: result.jwt,
                    confirmed: result.user.confirmed,
                    blocked: result.user.blocked,
                    email: result.user.email,
                    username: result.user.username
                }))
                return Router.push('/users')
            }catch(err) {
                setIsLoading(false)
                return setStatusErr({...statusErr, global: {
                    message: 'failed login! please check your email/password',
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

        login()
    }

    return (
        <div className='login__wrap margin-bottom-40'>
            <DetailHead />

            <div className='login__content-wrap'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Login</h2>
                    <p className='margin-bottom-0'>Log in so you can make a motorbike rental order and use other features</p>
                </div>

                <div className='login__content-body'>
                    {statusErr.global.message.length > 0 && <Alert
                        text={statusErr.global.message}
                        type='danger'
                        classes='margin-bottom-16'
                    />}

                    <form method='POST' onSubmit={handleLogin}>
                        <FormGroup
                            classes='margin-bottom-16'
                            labelText='E-mail'
                            placeholder='email'
                            type='email'
                            onChange={handleEmail}
                            required
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
                            required
                        />
                        {statusErr.password.message.length > 0 && <Alert
                            text={statusErr.password.message}
                            type='danger'
                            classes='margin-bottom-16'
                        />}

                        <div className='forget__password margin-bottom-16'>
                            <span>forget password? reset <Link href='/users/forget'><a>here</a></Link></span>
                        </div>

                        <Button
                        type='submit'
                        classes='margin-bottom-16'
                        style={{ width: '100%' }}
                        text={isLoading ? `process login..` : 'login now'}><Person /></Button>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <span>dont have account? register <Link href='/users/register'><a>here</a></Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSection
