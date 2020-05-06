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
      </OverviewLayout>
    </Layout>
    )

  }

}

export default onClickOutside(Dashboard)
