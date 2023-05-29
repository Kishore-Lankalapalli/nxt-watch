import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginBgContainer,
  LoginContainer,
  NxtWatchLogoImage,
  FormContainer,
  InputContainer,
  Input,
  InputLabel,
  ShowPasswordContainer,
  PasswordCheck,
  ShowPasswordLabel,
  SubmitButton,
  ErrorText,
} from './styledComponents'

import Home from '../Home'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isAuthenticateSuccess: true,
    errorMsg: '',
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onSuccessfulAuthentication = token => {
    Cookies.set('jwt_token', token, {expires: 30})

    const {history} = this.props

    history.replace('/')
  }

  onFailureAuthentication = msg => {
    this.setState({isAuthenticateSuccess: false, errorMsg: msg})
  }

  onSubmitCredentials = async e => {
    e.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)

    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.onSuccessfulAuthentication(data.jwt_token)
    } else {
      this.onFailureAuthentication(data.error_msg)
    }
  }

  onPasswordCheck = e => {
    if (e.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      isAuthenticateSuccess,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    console.log(username, password)
    return (
      <LoginBgContainer>
        <LoginContainer>
          <NxtWatchLogoImage
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />

          <FormContainer onSubmit={this.onSubmitCredentials}>
            <InputContainer>
              <InputLabel htmlFor="username">USERNAME</InputLabel>
              <Input
                onChange={this.onChangeUsername}
                id="username"
                type="text"
                placeholder="Username"
                value={username}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="password">PASSWORD</InputLabel>
              <Input
                onChange={this.onChangePassword}
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
              />
            </InputContainer>
            <ShowPasswordContainer>
              <PasswordCheck
                onChange={this.onPasswordCheck}
                id="passwordCheckbox"
                type="checkbox"
              />
              <ShowPasswordLabel htmlFor="passwordCheckbox">
                Show Password
              </ShowPasswordLabel>
            </ShowPasswordContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            {isAuthenticateSuccess === false && (
              <ErrorText>* {errorMsg}</ErrorText>
            )}
          </FormContainer>
        </LoginContainer>
      </LoginBgContainer>
    )
  }
}

export default Login
