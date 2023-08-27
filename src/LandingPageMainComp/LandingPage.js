import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import SamplePic1 from '../assets/SamplePic1.png'
import SamplePic2 from '../assets/SamplePic2.png'
import SamplePic3 from '../assets/SamplePic3.png'



function LandingPage() {

    const images = [SamplePic1, SamplePic2, SamplePic3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);  // 3 seconds
  
      return () => clearInterval(timer);
    }, [images.length]);

  return (
    <div>
        <div className={styles.header}>
            Mahdiul Choudhary Real Estate
        </div>
        <div className={styles.navbar}>
            <span className={styles.navItem}>Home</span>
            <span className={styles.navItem}>Listings</span>
            <span className={styles.navItem}>Sell</span>
            <span className={styles.navItem}>Buy</span>
            <span className={styles.navItem}>Town</span>
            <span className={styles.navItem}>Connect</span>
            <span className={styles.navItem}>Market Updates</span>
            <span className={styles.navItem}>Bio</span>
        </div>
        <div className={styles.carousel}>
            {images.map((image, index) => (
            <img 
                key={index}
                src={image}
                alt="House"
                className={`${styles.carouselImg} ${currentImageIndex === index ? styles.active : ''}`}
            />
            ))}
        </div>
    </div>

  );
}

export default LandingPage;
