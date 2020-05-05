import {Component} from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import onClickOutside from "react-onclickoutside";


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: 'Docassemble', open: false}
    this.onSelect = this.onSelect.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  onSelect(event) {
    event.preventDefault()
  }

  handleOnClick(event) {
    this.setState({open: !this.state.open})
  }

  handleClickOutside(event) {
    this.setState({open: false})
  }

  render() {
    return (
    <Layout>
      <div class="dashboard-head">
        <div class="container">
          <nav class="sub-navbar level">
              <div class="level-left">
                <div class="level-item">
                  <div class="dropdown">
                    <span class="dropdown-selected" onClick={this.handleOnClick}>{this.state.selected} >></span>
                  </div>
                  <div class={!this.state.open ? 'popup-hidden' : 'popup'}>
                    <div class="popup-heading">
                    <div class="space-head">Spaces</div>
                    <div class="space-item">Docassemble</div>
                    </div>
                    <div class="space">
                    <p class="space-title">Create a new space</p>
                    <p class="space-content">A space lets you collaborate on apps and storage.</p>

                    <Link prefetch href="/new-space">
                      <a className="space-btn">
                        Create a space
                      </a>
                    </Link>
                    </div>


                  </div>

                </div>
              </div>

              <div class="level-right">
                <Link href="/new-app">
                  <p class="level-item"><a class="button dashboard-button">New</a></p>
                </Link>
              </div>
          </nav>
        </div>
      </div>
      <div class="dashboard-body">
      </div>
    </Layout>
    )

  }

}

export default onClickOutside(Dashboard)
