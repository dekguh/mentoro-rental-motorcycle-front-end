/**
 * @jest-environment jsdom
 */
import LoginSection from '../components/organisms/LoginSection'
import { fireEvent, render, screen } from '@testing-library/react'

describe('login component', () => {
    test('should be rendered', () => {
        render(<LoginSection />)
        const getLogin = screen.getByText('Log in so you can make a motorbike rental order and use other features')
        expect(getLogin).toBeInTheDocument()
    })

    test('should email invalid when input: dek#dek,com', () => {
        render(<LoginSection />)
        const inputEmail = screen.getByPlaceholderText('email')
        fireEvent.change(inputEmail, {
            target: {
                value: 'dek#dek,com'
            }
        })
        const getMessage = screen.getByText('invalid format email')
        expect(getMessage).toBeInTheDocument()
    })

    test('should email valid when input: dek@dek.com', () => {
        render(<LoginSection />)
        const inputEmail = screen.getByPlaceholderText('email')
        fireEvent.change(inputEmail, {
            target: {
                value: 'dek@dek.com'
            }
        })
        const valueEmail = screen.getByDisplayValue('dek@dek.com')
        expect(valueEmail).toBeInTheDocument()
    })

    test('should password invalid when input character < 2', () => {
        render(<LoginSection />)
        const inputPassword = screen.getByPlaceholderText('password')
        fireEvent.change(inputPassword, {
            target: {
                value: '1'
            }
        })
        const getMessage = screen.getByText('input password minimal 2 character')
        expect(getMessage).toBeInTheDocument()
    })

    test('should password valid when input character > 1', () => {
        render(<LoginSection />)
        const inputPassword = screen.getByPlaceholderText('password')
        fireEvent.change(inputPassword, {
            target: {
                value: '123456'
            }
        })
        const valuePass = screen.getByDisplayValue('123456')
        expect(valuePass).toBeInTheDocument()
    })
})