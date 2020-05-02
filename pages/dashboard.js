import Layout from '../components/userLayout'
import Link from 'next/link'


const Dashboard = () => (
  <Layout>
    <div class="dashboard-head">
      <div class="container">
        <nav class="sub-navbar level">
            <div class="level-left">
              <div class="level-item">
                <p className="button team-name">
                Team name
                </p>
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

export default Dashboard
