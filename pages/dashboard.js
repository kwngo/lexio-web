import {Component} from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import onClickOutside from "react-onclickoutside";


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: 'Docassemble', open: false}
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
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

        <div className="container">
          <h1 class="dashboard-body-head">Apps</h1>
          <div className="dashboard-app">
            <Link href="/app-page"><p class="dashboard-app-head">Docassemble</p></Link>
            <div class="dashboard-app-metadata">
            <p class="dashboard-app-date">May 5, 2020 at 5:45 PM</p>
            <p class="dashboard-app-region">Asia-Pacific East</p>
            </div>
          </div>
          <div className="dashboard-app">
            <p class="dashboard-app-head">Metabase</p>
            <div class="dashboard-app-metadata">
            <p class="dashboard-app-date">May 1, 2020 at 2:45 PM</p>
            <p class="dashboard-app-region">Asia-Pacific East</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
    )

  }

}

export default onClickOutside(Dashboard)
