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
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3500,
    cssEase: "linear",
    arrows: false,
    useTransform: false,
    variableWidth: true,    
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
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Art