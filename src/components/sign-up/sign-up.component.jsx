import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        signUpStart({ email, password, displayName })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I don not have an acconunt</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                        label="Display Name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                        label="Confirm Password"
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)