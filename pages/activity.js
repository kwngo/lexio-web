import Layout from '../components/userLayout'
import Link from 'next/link'
import OverviewLayout from "../components/overview-layout"


const AppPage = () => (
  <Layout>
    <OverviewLayout>
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
      </OverviewLayout>
  </Layout>

)

export default AppPage
