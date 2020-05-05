import Head from 'next/head'
import Link from 'next/link'
import '../styles/styles.scss'

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <div>
      <Head>
        <title>Lexio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <header>
        <nav className="navbar user-navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-start">
              <Link prefetch href="/dashboard">
                <a className="navbar-item">
                Lexio
                </a>
              </Link>
            </div>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
            </div>
            <div className="navbar-item">
              <input class="input search" type="text" placeholder="Find your apps and resources"/>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                kwngo
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer className="footer">
      <div class="container footer-container">
        <div className="columns footer-content">
          <div className="column">
            <p className="footer-head">Company</p>
            <p><a className="footer-link">Home</a></p>
            <p><a className="footer-link">About</a></p>
            <p><a className="footer-link">Careers</a></p>
            <p><a className="footer-link">Partners</a></p>
            <p><a className="footer-link">Blog</a></p>
          </div>
          <div className="column">
            <p className="footer-head">Product</p>
            <p><a className="footer-link">Pricing</a></p>
            <p><a className="footer-link">Marketplace</a></p>
          </div>
          <div className="column">
            <p className="footer-head">Education</p>
            <p><a className="footer-link">Documentation</a></p>
          </div>
          <div className="column">
            <p className="footer-head">More</p>
            <p><a className="footer-link">Security</a></p>
            <p><a className="footer-link">Contact Us</a></p>
          </div>
          <div className="column">
            <p className="footer-head">Legal</p>
            <p><a className="footer-link">Privacy Policy</a></p>
            <p><a className="footer-link">Terms of Service</a></p>
            <p><a className="footer-link">SLA</a></p>
          </div>
        </div>
        <p>Copyright © 2020 Lexio Inc. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
