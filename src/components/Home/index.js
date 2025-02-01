import React from 'react';
import Header from '../Header';
import './index.css';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>  {/* Include Header */}
    <Header />
      <div className="home-container">
        <div className="home-content">
       <h1 className='name-heading'>Hi! I'm Kishore gundelli</h1>
         <p className='description'>
         I'm a B.com graduate in Computer applications with a strong foundation in Frontend Development.
         I specialize in HTML, CSS, JavaScript, and React.js to build responsive and dynamic web applications.
         My passion is to create impactful solutions and solve real-world problems through code.
         </p>
         <p className='description'>
         Explore my work, and let’s connect for new opportunities! Feel free to reach out if you'd like to collaborate.
            </p>
      </div>
      <div>
      <div className="image-container">
        <img src="https://i.postimg.cc/d0vKsY9n/1713697455180.jpg" alt="profile" className='profile-image'/>
        </div>
        </div>
      </div>
      <Footer />  {/* Include Footer */}
    </div>
  );
};

export default Home;