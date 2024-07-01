import React from 'react';
import BlogImage from '../../assets/home-text.png';
import group2 from '../../assets/Group 2.png';
import './blog.css';

function Blog() {
  return (
    <div className='container'>
      <img className='img-blog' src={BlogImage} alt="blog-image" />
      <div className='text-blog-main'>
        <h6>Workshops & Seminars</h6>
        <h2>Captivating Audiences</h2>
        <p>My passion for sharing my knowledge led me from clinical
          services to publishing books and eventually to reaching
          wider audiences. I started spreading positivity across
          different age groups, different settings, backgrounds 
          across the world. I could never refuse an invitation to a
          school, a university, welfare organization, hospital staff,
          bank employees or insurance company members. Tv appearances,
          and radio interviews were the bigger challenge, Arabic being
          my third language, I found it somewhat more difficult to convey my message.</p>
        <button className="read-more">
          <img src={group2} alt="group icon" className="group-icon" />
          Read more 
        </button>
      </div>
    </div>
  );
}

export default Blog;
