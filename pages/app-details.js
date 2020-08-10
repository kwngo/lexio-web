import Layout from '../components/userLayout'
import Link from 'next/link'

const AppDetails = () => ( 
  <Layout>
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
        <h1 class="main-heading">Intake app</h1>
          <div class="app-detail-links">
            <div class="app-detail-link-div"><a class="app-detail-link form-link">Open google form</a></div>
            <div class="app-detail-link-div"><a class='app-detail-link sheet-link'>Open google sheet</a></div>
            <div class="app-detail-link-div"><a class='app-detail-link doc-link'>Open google doc</a></div>
          </div>
        <h1 class="main-heading">Clients</h1>
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th><abbr title="Position">Client name</abbr></th>
                  <th>Email</th>
                </tr>
              </thead>
            </table>
          </div>
      </div>
    </div>
  </Layout>
)

export default AppDetails
