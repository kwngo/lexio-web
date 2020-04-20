import Layout from '../components/layout'
import Link from 'next/link'




const Signup = () => (
  <Layout>
    <div class="page container">
      <div class="form">
      <div className="form-inner">
      <h4 className="title is-4">Sign up</h4>
      <div class="field">
        <label class="label">First name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email address" />
        </div>
      </div>
      <div class="field">
        <label class="label">Team name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Team name" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <Link href="/dashboard" passHref>
          <button class="button is-link">Create a free account</button>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  </Layout>

)

export default Signup
