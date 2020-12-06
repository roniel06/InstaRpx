import * as React from 'react'
import LoginForm from '../../components/loginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../ducks/Users'
class Login extends React.Component {
  public render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch: any) => ({
  login: payload => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)