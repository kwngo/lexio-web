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
      <OverviewLayout>
        <h1 class="dashboard-body-head">Client space 1</h1>
        <div className="space-block">
          <h2 class="dashboard-body-space-head">Apps</h2>
          <div className="dashboard-app">
            <div class="dashboard-app-head">
            <Link href="/app-page"><a class="dashboard-app-head">Docassemble</a></Link>
            <a class="dashboard-app-delete-btn">Delete app</a>
            </div>
            <div class="dashboard-app-metadata">
            <p class="dashboard-app-date">Updated: May 5, 2020 at 5:45 PM</p>
            <p class="dashboard-app-region">Region: Asia-Pacific East</p>
            </div>
          </div>
          <div className="dashboard-app">
            <div class="dashboard-app-head">
            <a class="dashboard-app-head">Metabase</a>
            <a class="dashboard-app-delete-btn">Delete app</a>
            </div>
            <div class="dashboard-app-metadata">
            <p class="dashboard-app-date">Updated: May 1, 2020 at 2:45 PM</p>
            <p class="dashboard-app-region">Region: Asia-Pacific East</p>
            </div>
          </div>
        </div>
      </OverviewLayout>
    </Layout>
    )

  }

}

export default onClickOutside(Dashboard)
