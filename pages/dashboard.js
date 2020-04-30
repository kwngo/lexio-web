import Layout from '../components/userLayout'


const Dashboard = () => (
  <Layout>
    <div class="sub-navbar">
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
              <p class="level-item"><a class="button">New</a></p>
            </div>
        </nav>
      </div>
    </div>
  </Layout>

)

export default Dashboard
