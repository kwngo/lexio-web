import { Component } from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import {newApp} from '../utils/auth'
import OverviewLayout from "../components/overview-layout"

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
        <OverviewLayout>
          <table class="table access-table">
          <thead>
            <tr>
              <th>Collaborators</th>
              <th>Role</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kareem.kwong@gmail.com</td>
              <td>
                Admin
              </td>
              <td>Staff</td>
            </tr>
          </tbody>
          </table>

        <form>
          <input class="input" type="text" placeholder="Email addresses" />
          <button class="button" type="submit">Add collaborator</button>
        </form>
        </OverviewLayout>
      </Layout>
    )

  }

}

export default Access;
