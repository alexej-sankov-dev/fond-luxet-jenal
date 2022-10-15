import React from 'react'
import styles from '../styles/AboutCollection.module.scss'
import AboutImg from '../assets/About.png'

const AboutCollection = () => {
  return (
    <div className={styles.aboutWrapper} id='about'>
        <div className={styles.aboutText}>
            <div className={styles.aboutHeading}>
                <span>About</span>
                <br></br>
                <span>collection</span>
            </div>

            <p>
                А bright and stylish <span className={styles.textBlue}>3D</span> collection of <span className={styles.textGreen}>8 000</span> NFTs created by artists and <span className={styles.textYellow}>Web 3.0</span> enthusiasts.
                <br></br>
                It is a unique digital collection on the Ethereum blockchain.
            </p>
            <p>
                <span className={styles.textRed}>Fond Luxet</span> is the planet of the fashion world where the <span className={styles.textRed}>Jenal</span> race appeared.
                <br></br>
                The <span className={styles.textRed}>Jenals</span> are the founders of style in the universe, which is why they are called Stylish.
            </p>
            <p className={styles.lastP}>
                Don’t miss the opportunity to purchase <span className={styles.textRed}>Jenals</span>, because there are a lot of interesting things to be available for you in the nearest future.
            </p>
        </div>
        <div className={styles.aboutImg}>
            <img src={AboutImg} alt='NFT' />
        </div>
        <div className={styles.aboutBg}>
            <svg width="1280" height="600" viewBox="0 0 1280 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-3 572.88V575.546L-0.440689 574.801L-1 572.88C-0.440689 574.801 -0.439904 574.8 -0.437889 574.8L-0.427706 574.797L-0.385247 574.785L-0.212376 574.735C-0.0581942 574.69 0.173645 574.624 0.481885 574.537C1.09837 574.362 2.02044 574.104 3.23807 573.77C5.67332 573.101 9.29071 572.129 14.0098 570.918C23.4481 568.496 37.2927 565.117 54.9004 561.298C90.1168 553.658 140.38 544.254 200.545 537.203C320.894 523.098 480.763 518.422 639.037 556.05C816.471 598.235 976.797 602.082 1092.77 595.384C1150.75 592.034 1197.66 586.048 1230.07 580.898C1246.28 578.322 1258.87 575.955 1267.41 574.231C1271.68 573.369 1274.94 572.667 1277.13 572.181C1277.73 572.048 1278.25 571.931 1278.69 571.831C1279.06 571.748 1279.37 571.677 1279.62 571.619C1279.9 571.554 1280.11 571.505 1280.25 571.471L1280.41 571.433L1280.45 571.423L1280.46 571.42C1280.47 571.42 1280.47 571.419 1280 569.475L1280.47 571.419L1282 571.051V569.475V48.5679V46.0301L1279.53 46.6233L1280 48.5679C1279.53 46.6233 1279.53 46.6234 1279.53 46.6238L1279.52 46.6259L1279.48 46.6348L1279.33 46.6708C1279.2 46.7028 1278.99 46.7508 1278.72 46.8139C1278.17 46.9401 1277.35 47.1267 1276.27 47.3669C1274.1 47.8474 1270.87 48.5423 1266.62 49.3977C1258.13 51.1084 1245.6 53.4608 1229.45 56.0219C1197.16 61.1441 1150.4 67.101 1092.57 70.4306C976.904 77.09 817.005 73.2378 640.062 31.1972C481.131 -6.56372 320.725 -1.72891 200.1 12.525C139.777 19.6531 89.3791 29.1397 54.0555 36.8459C36.3931 40.6991 22.4982 44.1075 13.0144 46.5539C8.27245 47.7771 4.63317 48.7598 2.17702 49.4374C0.948942 49.7763 0.0166305 50.0388 -0.609854 50.217C-0.923097 50.3061 -1.15988 50.3741 -1.31896 50.42L-1.49913 50.4721L-1.54521 50.4856L-1.5572 50.4891C-1.56011 50.4899 -1.56179 50.4904 -1 52.4099L-1.56179 50.4904L-3 50.9113V52.4099V572.88Z" fill="url(#paint0_linear_103_381)" stroke="#1A9E96" strokeWidth="4"/>
                <defs>
                <linearGradient id="paint0_linear_103_381" x1="-1" y1="300" x2="1280" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F0C29"/>
                <stop offset="0.5" stopColor="#302B63"/>
                <stop offset="1" stopColor="#24243E"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className={styles.cutLine}>
            <svg width="1280" height="600" viewBox="0 0 1280 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1267.41 574.231 C 1267.537 574.206 1533.424 549.758 1626.205 600 C 1741.307 662.328 1683.547 803.287 1624.859 820.07 C 1511.17 852.583 -61.42 846.249 -88.344 846.268 C -289.971 846.406 -384.962 675.414 -300 600 C -235.119 542.41 -3 575.546 -3 575.546 C -3 575.546 37.293 565.117 54.9 561.298 C 90.117 553.658 140.38 544.254 200.545 537.203 C 320.894 523.098 480.763 518.422 639.037 556.05 C 816.471 598.235 976.797 602.082 1092.77 595.384 C 1150.75 592.034 1197.66 586.048 1230.07 580.898 C 1246.28 578.322 1258.87 575.955 1267.41 574.231 Z" stroke="#1A9E96" strokeWidth="4" style={{ paintOrder: 'fill', fill: 'rgb(17, 5, 32)'}}/>
            </svg>
        </div>
    </div>
  )
}

export default AboutCollection