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
        <h1 class="home-title">
          Deploy and scale applications seamlessly
        </h1>
        <p class="home-subtitle">Do you want to grow like a tech startup? You can innovate quickly, safely, and scale resources on-demand by adopting the latest IT architectures. In the past, this required significant IT investments and engagement of a sizable team of network engineers. Not anymore – with automated tools on the Lexio platform, onboard advance practice-enhancing solutions smoothly and see returns on tech investments quickly. Try and buy solutions easily with our “App Store” features.</p>
      <div class="columns">
        <div class="column">
          <p class="home-heading">Infrastructure in minutes</p>
          <p class="home-content">Spin up a managed cluster in just a few clicks. Simplify specify the size and location of your worker nodes.</p>
        </div>
        <div class="column">
          <p class="home-heading">1-Click app marketplace</p>
          <p class="home-content">Quickly deploy projects using one of our preconfigured 1-Click Apps, like Docassemble, Metabase, and WordPress.</p>
        </div>
        <div class="column">
          <p class="home-heading">Global availability</p>
          <p class="home-content">Deploy to any of our data center locations – New York, SF, London, Hong Kong, Bangalore, and more.</p>
        </div>
      </div>
      </div>
    </section>
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
  </Layout>

)

export default Home
