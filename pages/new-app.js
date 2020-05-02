import { Component } from 'react'
import Layout from '../components/layout'
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
                <label class="label">Choose an app</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>Docassemble</option>
                      <option>Metabase</option>
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