import { Component } from 'react'
import Layout from '../components/userLayout'
import {newApp} from '../utils/auth'

class NewApp extends Component {
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
        <div class="new-app-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-inner">
              <h4 className="title is-4">Create a new app</h4>
              <div class="field">
                <label class="label">App name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="App name" />
                </div>
              </div>
              <div class="field">
                <label class="label">Region</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>Asia/Pacific</option>
                      <option>Americas</option>
                      <option>Europe</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Installing app</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item" disabled>
                      <option>Docassemble</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Choose a Plan</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>Hobby - $5/month</option>
                      <option>Micro - $20/month</option>
                      <option>Standard - $40/month</option>
                      <option>Pro - $100/month</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Deploy to space</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>Client space 1</option>
                      <option>Client space 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button" type="submit">Create app</button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </Layout>
    )

  }

}

export default NewApp;
