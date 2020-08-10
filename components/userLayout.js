import Head from 'next/head'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import '../styles/styles.scss'

const UserLayout = ({ children }) => {
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
      <div class="dashboard-main">
      <div class="sidebar">
        <div class="brand"><Link href="/dashboard"><a>Lexio</a></Link></div>
        <ul>
          <li><Link href="/dashboard"><a>Home</a></Link></li>
          <li><Link href="/clients"><a>Clients</a></Link></li>
          <li><Link href="/teams"><a>Manage Teams</a></Link></li>
          <li><Link href="/settings"><a>Settings</a></Link></li>
        </ul>
      </div>
      {children}
      </div>
    </div>
  )
}

UserLayout.getInitialProps = (ctx) => {
  const { authorization } = parseCookies(ctx);
  const {token} = ctx.query
  console.log("hello")
  console.log(authorization)
  return {
    authorization: authorization || token,
  };
}

export default UserLayout;
