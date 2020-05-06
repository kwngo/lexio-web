import { Component } from 'react'
import Layout from '../components/userLayout'
import {newSpace} from '../utils/auth'
import Select from 'react-select';

const users = [
  { value: 'Kareem', label: 'Kareem', color: '#00B8D9', isFixed: true },
  { value: 'Eunice', label: 'Eunice', color: '#0052CC'},
  { value: 'Seb', label: 'Seb', color: '#5243AA' },
  { value: 'Gary', label: 'Gary', color: '#FF5630', isFixed: true },
];

class NewSpace extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    newSpace()
  }
  render() {
    return (
      <Layout>
        <div class="new-app-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-inner">
              <h4 className="title is-4">Create a new space</h4>
              <div class="field">
                <label class="label">Space name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Space name" />
                </div>
              </div>
              <div class="field">
                <label class="label">Space owner</label>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f" className="space-owner"/>
                kareem.kwong@gmail.com
              </div>
              <div class="field">
                <label class="label">Size</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>4 vCPU / 4G Memory / 4G Storage</option>
                      <option>8 vCPU / 8G Memory / 100G Storage</option>
                      <option>16 vCPU / 16GB memory / 200G Storage</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Collaborators</label>
                <div class="control">
                  <Select
                    defaultValue={[users[1]]}
                    isMulti
                    name="colors"
                    options={users}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Use space as template:</label>
                <div class="control">
                  <div className="select is-primary">
                    <select className="select-item">
                      <option>None</option>
                      <option>Client space 1</option>
                      <option>Client space 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button" type="submit">Create space</button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </Layout>
    )

  }

}

export default NewSpace;
