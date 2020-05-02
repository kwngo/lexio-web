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
          Build your law firm like a startup. 
          Lexio is the best platform <br/>for building with
          modern architectures, innovating quickly, <br/>
          and scaling precisely to meet demand.
        </h2>
      </div>
    </div>
    </section>
    <section className="home-body">
      <div class="container">
        <h1 class="title">
          Deploy and scale applications seamlessly
        </h1>
      <div class="columns">
        <div class="column">
          <p class="home-heading">Infrastructure in minutes</p>
          <p class="home-content">Spin up a managed cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>
        </div>
        <div class="column">
          <p class="home-heading">1-Click app marketplace</p>
          <p class="home-content">Quickly deploy projects using one of our preconfigured 1-Click Apps, like Docassemble, Metabase, and WordPress.</p>
        </div>
        <div class="column">
          <p class="home-heading">Global availability</p>
          <p class="home-content">Deploy to any of our data center locations – New York, SF, London, Amsterdam, Bangalore, and more.</p>
        </div>
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
