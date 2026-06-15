import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Starkperfumes</h1>
        <p>Discover the world's finest fragrances</p>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}

export default Home;
