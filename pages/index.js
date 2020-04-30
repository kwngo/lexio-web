import Layout from '../components/layout'
import Link from 'next/link'




const Home = () => (
  <Layout>
    <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Unleash your inner startup
        </h1>
        <h2 class="subtitle">
          Build your business like a startup. 
          Lexio is the best platform <br/>for building with
          modern architectures, innovating quickly, <br/>
          and scaling precisely to meet demand.
        </h2>
      </div>
    </div>
    </section>
    <footer className="footer">
      <div className="content has-text-centered">
        <span>I'm the footer</span>
      </div>
    </footer>
  </Layout>

)

export default Home
