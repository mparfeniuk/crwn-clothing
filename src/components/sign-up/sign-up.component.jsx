import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        signUpStart({ email, password, displayName })
    }

    const handleChange = event => {
        const { value, name } = event.target

        setUserCredentials(
            {
                ...userCredentials,
                [name]: value
            }
        )
    }

    return (
        <div className="sign-up">
            <h2 className="title">I don not have an acconunt</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    required
                    label="Display Name"
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    required
                    label="Email"
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    required
                    label="Password"
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    required
                    label="Confirm Password"
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)