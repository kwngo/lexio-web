import {Component} from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import onClickOutside from "react-onclickoutside"
import OverviewLayout from "../components/overview-layout"


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: 'Overview', open: false}
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
      <div class="dashboard-main">
      <div class="sidebar">
        <div class="brand"><Link href="/dashboard"><a>Lexio</a></Link></div>
        <ul>
          <li><Link href="/dashboard"><a>Home</a></Link></li>
          <li><Link href="/all"><a>All Apps</a></Link></li>
          <li><Link href="/all"><a>Manage Teams</a></Link></li>
          <li><Link href="/all"><a>Settings</a></Link></li>
          <li class="sidebar-heading">Apps</li>
          <li><Link href="/activity"><a>Intake form</a></Link></li>
          <li><Link href="/activity"><a>Will release</a></Link></li>
        </ul>
        <div class="user"><Link href="#"><a>Kareem</a></Link></div>
      </div>
      <div class="main">
        <header class="main-header">
        <nav className="navbar user-navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-start">
            </div>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <input class="input search" type="text" placeholder="Find your apps and resources"/>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="#" class="app-btn">+ Create an app</a>
              </div>
              <div className="navbar-item">
              </div>
            </div>
          </div>
        </nav>
        </header>
        <div class="main-content">
          <div class="main-content-section"> 
            <h1 class="main-heading">Recent</h1> 
              <div class="main-app-row"> 
                <h1 class="main-app-heading">Intake form</h1> 
                <p class="main-app-time">Opened 1 hour ago</p> 
              </div> 
          <div class="main-app-row">
            <h1 class="main-app-heading">Intake form</h1>
            <p class="main-app-time">Opened 2 hours ago</p>
          </div>
          </div>
          <div class="main-content-section">
            <h1 class="main-heading">Starred</h1> 
          </div>
        </div>
      </div>
      </div>
    </Layout>
    )

  }

}

export default onClickOutside(Dashboard)
