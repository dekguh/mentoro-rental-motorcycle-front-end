import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import Link from 'next/link'
import { Person } from 'react-bootstrap-icons'

const LoginSection = () => {
    return (
        <div className='login__wrap'>
            <DetailHead />

            <div className='login__content-wrap'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Login</h2>
                    <p className='margin-bottom-0'>Log in so you can make a motorbike rental order and use other features</p>
                </div>

                <div className='login__content-body'>
                    <FormGroup
                        classes='margin-bottom-16'
                        labelText='E-mail'
                        placeholder='email'
                        type='email'
                    />

                    <FormGroup
                        classes='margin-bottom-16'
                        labelText='Password'
                        placeholder='password'
                        type='password'
                    />

                    <div className='forget__password margin-bottom-16'>
                        <span>forget password? reset <Link href='/users/forget'><a>here</a></Link></span>
                    </div>

                    <Button classes='margin-bottom-16' style={{ width: '100%' }} text='login now'><Person /></Button>

                    <div style={{ textAlign: 'center' }}>
                        <span>dont have account? register <Link href='/users/register'><a>here</a></Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSection
