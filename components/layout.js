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
        <nav className="navbar home-navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-start">
              <Link prefetch href="/">
                <a className="navbar-item">
                Lexio
                </a>
              </Link>
            </div>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link href="/login" passHref>
                Login
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/signup" passHref>
                Signup
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  )
}
