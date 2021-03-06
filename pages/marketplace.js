import Layout from '../components/userLayout'
import Link from 'next/link'

const Marketplace = () => (
  <Layout>
    <div className="marketplace-container">
      <div className="page">
        <h1 class="marketplace-title">Marketplace</h1>
      <div class="columns">
        <div class="column">
          <Link href="/marketplace-detail" passHref>
          <div className="app">
            <div className="app-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNCNBMWluLTKrCfX2hFSc-brxMCZ3sqiWd63hFAlFFo8uGRENO&usqp=CAU" width="80px" className="logo-center"/>
            </div>
            <h4 className="title is-6">Docassemble</h4>
            <p className="is-small">Docassemble is a platform for creating mobile-friendly web applications called Interview.</p>
          </div>
          </Link>
        </div>
        <div class="column">
          <div className="app">
            <div className="app-logo">
              <img src="https://seeklogo.com/images/M/metabase-logo-AC22E4DDE5-seeklogo.com.png" width="60px" className="logo-center" />
            </div>
            <h4 className="title is-6">Metabase</h4>
            <p className="is-small">Metabase is the easy, open source way for everyone in your company to ask questions and learn from data.</p>
            </div>
        </div>
        <div class="column">
          <div className="app app-disabled">
            <div className="app-logo">
              <img src="https://www.huridocs.org/wp-content/uploads/2016/08/tool-01-casebox.png" width="180px" className="logo-center" />
            </div>
            <h4 className="title is-6">Casebox - Coming Soon</h4>
            <p className="is-small">Casebox is a sophisticated case management solution ooriginally developed for NGO and human rights organizations.</p>
          </div>
        </div>
        <div class="column">
          <div className="app app-disabled">
            <div className="app-logo">
              <img src="https://www.veracode.com/sites/default/files/2020-03/verified-directory-arkcase.jpg" width="180px" className="logo-center" />
            </div>
            <h4 className="title is-6">ArkCase - Coming Soon</h4>
            <p className="is-small">ArkCase provides a low-code adaptive case management / digital transformation platform that is dynamic to support your business requirements.</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  </Layout>

)

export default Marketplace
