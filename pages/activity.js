import Layout from '../components/userLayout'
import Link from 'next/link'


const AppPage = () => (
  <Layout>
    <div class="dashboard-head">
      <div class="container">
        <nav class="sub-navbar level">
            <div class="level-left">
              <div class="level-item">
                <span className="team-name">
                Team name
                </span>
              </div>
            </div>

            <div class="level-right">
              <Link href="/new-app">
                <p class="level-item"><a class="button">New</a></p>
              </Link>
            </div>
        </nav>
      </div>
    </div>
    <div class="app-page-body">
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

      <div class="container">
        <div class="columns">
            <div class="column is-half">
              <h2 className="activity-heading">Latest Activity</h2>
              <div class="content">
                <span className="app-page-activity">
                  Team space setup completed
                </span>
                <p className="app-page-time">May 6, 2020 at 3:45 PM · v42</p>
              </div>

              <div class="content">
                <span className="app-page-activity">
                  Postgres: Database updated.
                </span>
                <p className="app-page-time">April 20, 2020 at 2:13 PM · v42</p>
              </div>
              <div class="content">
                <span className="app-page-activity">
                  Redis: Database updated.
                </span>
                <p className="app-page-time">April 18, 2020 at 1:42 PM · v42</p>
              </div>
              <div class="content">
                <span className="app-page-activity">
                  S3: Backup initiated.
                </span>
                <p className="app-page-time">April 15, 2020 at 5:45 PM · v42</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  </Layout>

)

export default AppPage
