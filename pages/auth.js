import {Component} from 'react'
import fetch from 'isomorphic-fetch'
import { parseCookies } from 'nookies'
import '../styles/auth.scss'
import {login} from '../utils/auth'

async function getUser(authorization) {
  const res = await fetch('http://localhost:5000/user', { headers: { authorization } })
  if(res.status === 200) return {authorization, user: res.data}
  else return {authorization}
}

class Auth extends Component {
  constructor(props) {
    super(props)
    this.handleInstall = this.handleInstall.bind(this)
  }
  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const {token} = ctx.query

    const props = getUser(authorization || token)

    return props;
  }

  async handleInstall(event) {
    event.preventDefault()
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/install/drive`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': this.props.authorization}
      })
      if(response.ok) {
        login()
      } else {
        console.log("Failed")
        return Promise.reject(error)
      }
    } catch(error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
    }
  }
  render() {
    return (
      <div className="auth-page">
        <div class="brand auth-brand">Lexio</div>
        <div className="auth-box">
          <h1 class="subtitle is-5">Connect a gsuite account</h1>
          <div className="auth-box-desc-wrapper">
          <p className="auth-box-desc">To complete your sign up, and for Lexio to do it's magic, we'll need permission to access your gsuite account.</p>
          </div>
          {!this.props.authorization && <a href={"http://localhost:5000/auth/google"} class="button btn-auth-google">Authenticate with Google</a>}
          {this.props.authorization && <a className="button btn-auth-google-success">Google successfully authenticated</a>}
          <p className="auth-box-desc"></p>
          {this.props.authorization && <a onClick={this.handleInstall} className="button">Install Lexio in your google drive</a>}
        </div>
      </div>
    )
  }
}

export default Auth;
