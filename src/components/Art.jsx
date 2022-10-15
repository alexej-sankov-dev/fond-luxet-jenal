import React from 'react'
import Slider from 'react-slick/lib/slider';
import styles from '../styles/Art.module.scss'
import NFT1 from '../assets/NFT1.png'
import NFT2 from '../assets/NFT2.png'
import NFT3 from '../assets/NFT3.png'
import NFT4 from '../assets/NFT4.png'
import NFT5 from '../assets/NFT5.png'
import NFT6 from '../assets/NFT6.png'
import NFT7 from '../assets/NFT7.png'

const Art = () => {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    //speed: 3500,
    // useTransform: false,
    variableWidth: true,  
    
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className={styles.artContainer}>
        <div className={styles.artHeading}>
            Art
        </div>
        <div className={styles.sliderWrapper}>
            <div className={styles.artSlider}>
                <Slider {...settings}>
                    <div className={styles.sliderItem}>
                        <img src={NFT1} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT2} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT3} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT4} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT5} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT6} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT7} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT1} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT2} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT3} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT4} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT5} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT6} alt='nft' />
                    </div>
                    <div className={styles.sliderItem}>
                        <img src={NFT7} alt='nft' />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Art