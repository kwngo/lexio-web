import Layout from '../components/layout'
import Link from 'next/link'




const Login = () => (
  <Layout>
    <div class="page container">
      <div class="form">
      <div className="form-inner">
      <h4 className="title is-4">Log in</h4>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email address" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <Link href="/dashboard" passHref>
          <button class="button is-link">Login</button>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  </Layout>

)

export default Login
