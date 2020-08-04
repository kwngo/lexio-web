import {Component} from 'react'
import Layout from '../components/userLayout'
import Link from 'next/link'
import OverviewLayout from "../components/overview-layout"
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '550px',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class All extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: 'Overview', open: false, showModal: false}
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
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
            <li><Link href="/teams"><a>Manage Teams</a></Link></li>
            <li><Link href="/settings"><a>Settings</a></Link></li>
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
                  <a onClick={this.handleOpenModal} href="#" class="app-btn">+ Create an app</a>
                </div>
                <div className="navbar-item">
                </div>
              </div>
            </div>
          </nav>
          </header>
          <div class="main-content">
            <div class="main-content-section"> 
              <h1 class="main-heading">All Apps</h1> 
                <div class="main-app-row"> 
                  <h1 class="main-app-heading">Intake form</h1> 
                  <p class="main-app-time">Opened 1 hour ago</p> 
                </div> 
              <div class="main-app-row">
                <h1 class="main-app-heading">Intake form</h1>
              <p class="main-app-time">Opened 2 hours ago</p>
            </div>
            </div>
          </div>
          <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
          >
            <div>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Give your new app a name (eg. Mochi, Donut)" />
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
            </div>

            <button class="button modal-btn" type="submit">Create new app</button>
            <button class="button" onClick={this.handleCloseModal}>Cancel</button>
          </Modal>
        </div>
      </div>
    </Layout>
    )

  }

}

export default All;
