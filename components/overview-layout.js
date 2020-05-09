import {Component} from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import onClickOutside from "react-onclickoutside";


class OverviewLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: 'All spaces', open: false}
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
      <div>
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
                    <div class="space-item">Client space 1</div>
                    <div class="space-item">Client space 2</div>
                    </div>
                    <div class="space">
                    <p class="space-title">Create a new space</p>
                    <p class="space-content">A space lets you collaborate on apps and storage.</p>
                    <Link href="/new-space">
                      <a className="space-btn">
                        Create a space
                      </a>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <Link href="/marketplace">
                  <p class="level-item"><a class="button dashboard-button">New app</a></p>
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
            </ul>
          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    </div>
    )

  }

}

export default onClickOutside(OverviewLayout)
