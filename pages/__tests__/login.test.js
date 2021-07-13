/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginSection from '../../components/organisms/LoginSection'

describe('login page', () => {
    it('should email invalid', () => {
        render(<LoginSection />)
        const inputEmail = screen.getByPlaceholderText('email')
        fireEvent.change(inputEmail, {
            target: {
                value: 'deksa#deksa/com'
            }
        })
        const messageEmail = screen.getByText(/invalid format email/g)
        expect(messageEmail).toBeInTheDocument()
    })

    it('should password invalid', () => {
        render(<LoginSection />)
        const inputPassword = screen.getByPlaceholderText('password')
        fireEvent.change(inputPassword, {
            target: {
                value: '1'
            }
        })
        const messagePassword = screen.getByText(/input password minimal 2 character/g)
        expect(messagePassword).toBeInTheDocument()
    })

    it('should button render', () => {
        render(<LoginSection />)
        const buttonLogin = screen.getByText(/login now/i)
        expect(buttonLogin).toBeInTheDocument()
    })
})