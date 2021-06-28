import DetailHead from '../detail/DetailHead'
import FormGroup from '../../molecules/form/FormGroup'
import Button from '../../atomics/form/Button'
import Link from 'next/link'
import { Person } from 'react-bootstrap-icons'

const RegisterSection = () => {
    return (
        <div className='login__wrap margin-bottom-40'>
            <DetailHead />

            <div className='login__content-wrap'>
                <div className='login__content-head margin-bottom-20'>
                    <h2 className='margin-bottom-8'>Register</h2>
                    <p className='margin-bottom-0'>Register so you can make a motorbike rental order and use other features</p>
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

                    <FormGroup
                        classes='margin-bottom-16'
                        labelText='Re-Password'
                        placeholder='password'
                        type='password'
                    />

                    <FormGroup
                        classes='margin-bottom-16'
                        labelText='username'
                        placeholder='username'
                        type='text'
                    />

                    <Button classes='margin-bottom-16' style={{ width: '100%' }} text='register now'><Person /></Button>

                    <div style={{ textAlign: 'center' }}>
                        <span>already have account? login <Link href='/users/login'><a>here</a></Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSection
