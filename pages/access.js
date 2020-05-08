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

        <h1 class="access-form-head">Add a collaborator</h1>
        <form className="access-form">
          <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="text" placeholder="Email addresses" />
              </div>
            </div>
            <div class="field">
              <label class="label">Role</label>
              <div class="control">
                <div className="select is-primary">
                  <select className="select-item">
                    <option>Admin</option>
                    <option>Write</option>
                    <option>Read</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Space</label>
              <div class="control">
                <div className="select is-primary">
                  <select className="select-item">
                    <option>Client space 1</option>
                    <option>Client space 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          </div>
          <button class="button" type="submit">Add collaborator</button>
        </form>
        </OverviewLayout>
      </Layout>
    )

  }

}

export default Access;
