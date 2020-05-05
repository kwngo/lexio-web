import { Component } from 'react'
import Layout from '../components/userLayout'
import Link from 'next/Link'
import {newApp} from '../utils/auth'

class Access extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    newApp()
  }
  render() {
    return (
      <Layout>
        <div class="access-page">
        <nav class="breadcrumb has-dot-separator dashboard-body-nav" aria-label="breadcrumbs">
          <div className="container">
            <ul>
              <li><Link href="/dashboard"><a>Overview</a></Link></li>
              <li><Link href="/usage"><a>Usage</a></Link></li>
              <li><Link href="/activity"><a>Activity</a></Link></li>
              <li><Link href="/access"><a>Access</a></Link></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
        </nav>


        <div class="container">
          <table class="table access-table">
          <thead>
            <tr>
              <th>Collaborators</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kareem.kwong@gmail.com</td>
              <td>
                Admin
              </td>
            </tr>
          </tbody>
          </table>
        </div>
        </div>
      </Layout>
    )

  }

}

export default Access;
