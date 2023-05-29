import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 40px 40px 30px 40px;
  }
`
export const NxtWatchLogoImage = styled.img`
  height: 30px;
  width: 130px;
  align-self: center;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 160px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 14px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #94a3b8;
  margin-top: 8px;
  border: 1px solid #94a3b8;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PasswordCheck = styled.input`
  height: 18px;
  width: 18px;
  border: 1px solid #181818;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: bold;
`

export const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  border-width: 0px;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
  }
`

export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
  margin-top: 6px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
