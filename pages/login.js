import Layout from '../components/layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import {login} from '../utils/auth'




class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password
    try {
      const response = await fetch(process.env.BASE_API_URL + "/authenticate", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify({email, password})
      })
      if(response.ok) {
        console.log(response.body)
        login()
      } else {
        console.log("Login failed.")
        let error = new Error(response.statusText)
        error.response = response
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
      <Layout>
        <section class="hero is-fullheight-with-navbar">
        <div class="container">
          <form class="form" onSubmit={this.handleSubmit}>
          <div className="form-inner">
          <h4 className="login-title">Log in to your account</h4>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button" type="submit">Login</button>
            </div>
          </div>
          </div>
          </form>
        </div>
        </section>
      </Layout>
    )

  }

}

export default Login
