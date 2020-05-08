import Layout from '../components/layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {register} from '../utils/auth'



class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '', teamName: '', error: ''}
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)
    this.handleTeamNameChange = this.handleTeamNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    console.log(this.state)
    this.setState({username: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }
  handlePasswordConfirmationChange(event) {
    this.setState({passwordConfirmation: event.target.value})
  }
  handleTeamNameChange(event) {
    this.setState({teamName: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const username = this.state.username
    const email = this.state.email
    const first_name = this.state.firstName
    const last_name = this.state.lastName
    const password = this.state.password
    const password_confirmation = this.state.passwordConfirmation
    const team_name = this.state.teamName

    try {
      const response = await fetch(process.env.BASE_API_URL + "register", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, first_name, last_name, team_name, password, password_confirmation})
      })
      if(response.ok) {
        register()
      } else {
        console.log("Register failed.")
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
        <section class="hero signup-hero is-fullheight-with-navbar">
        <div class="container">
          <form class="form" onSubmit={this.handleSubmit}>
          <div className="form-inner">
          <h4 className="signup-title">Sign up</h4>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" placeholder="Last name" value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
          </div>

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
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Password confirmation" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange}/>
            </div>
          </div>


          <div class="field">
            <label class="label">Team name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Team name" value={this.state.teamName} onChange={this.handleTeamNameChange}/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button" type="submit">Create your account</button>
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

export default Signup
