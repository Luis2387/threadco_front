import React from 'react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/Backtotop';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import "../assets/styles/css/flaticon.css";
import "../assets/styles/css/fontawesome.css";
import "../assets/styles/css/animate.css";
import "../assets/styles/css/owl.carousel.min.css";
import "../assets/styles/css/owl.theme.default.min.css";
import "../assets/styles/css/nice-select.css";
import "../assets/styles/css/magnific-popup.css";
import "../assets/styles/css/style.css";


function Home() {
  return (
    <div>
      <BackToTop />
      <Navbar />
      <main class="mt-0">
        <Sidebar />
        <Banner />
        <Feature />
        <WhoWeAre />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
