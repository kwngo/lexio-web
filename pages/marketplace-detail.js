import Layout from '../components/userLayout'
import Link from 'next/link'


const AppPage = () => (
  <Layout>
    <div class="marketplace-detail-body">
      <div class="container">
          <div class="marketplace-detail-header">
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNCNBMWluLTKrCfX2hFSc-brxMCZ3sqiWd63hFAlFFo8uGRENO&usqp=CAU"/>
            </div>
            <div>
            <Link href="/new-app">
              <a className="marketplace-detail-btn">Install docassemble</a>
            </Link>
            </div>
          </div>
            <h1 className="marketplace-detail-title">Docassemble</h1>
            <h2 className="marketplace-detail-head">Description</h2>
            <p>Docassemble is a platform for creating mobile-friendly web applications called Interviews that ask one question at a time in order to reach an end point. This end point may be the presentation of advice, the creation of a signed document, the submission of an application, or something else.</p>
            <h2 className="marketplace-detail-head">Software included</h2>
            <table class="table marketplace-table">
              <thead>
                <th>Package</th>
                <th>Version</th>
                <th>License</th>
              </thead>
              <tbody>
                <tr>
                  <td>Nginx</td>
                  <td>1.18</td>
                  <td>BSD</td>
                </tr>
                <tr>
                  <td>Celery</td>
                  <td>4.4.0</td>
                  <td>BSD</td>
                </tr>
                <tr>
                  <td>PostgreSQL</td>
                  <td>12.2</td>
                  <td>MIT</td>
                </tr>
                <tr>
                  <td>Redis</td>
                  <td>6.0</td>
                  <td>BSD</td>
                </tr>
              </tbody>
            </table>
            <h2 className="marketplace-detail-head">Plans & Pricing</h2>
            <table class="table marketplace-table">
              <thead>
                <th>Plan</th>
                <th>vCPU</th>
                <th>Memory</th>
                <th>Storage</th>
                <th>Bandwidth</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>Hobby</td>
                  <td>1</td>
                  <td>1G</td>
                  <td>3G</td>
                  <td>5G</td>
                  <td>$5/month</td>
                </tr>
                <tr>
                  <td>Micro</td>
                  <td>2</td>
                  <td>2G</td>
                  <td>6G</td>
                  <td>10G</td>
                  <td>$20/month</td>
                </tr>
                <tr>
                  <td>Standard</td>
                  <td>4</td>
                  <td>8G</td>
                  <td>20G</td>
                  <td>30G</td>
                  <td>$40/month</td>
                </tr>
                <tr>
                  <td>Pro</td>
                  <td>8</td>
                  <td>16G</td>
                  <td>30G</td>
                  <td>60G</td>
                  <td>$100/month</td>
                </tr>

              </tbody>
            </table>

          </div>
    </div>
  </Layout>

)

export default AppPage
