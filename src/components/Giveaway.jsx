import React from 'react'
import styles from '../styles/Giveaway.module.scss'

const Giveaway = (props) => {
  return (
    <div ref={props.giveawayRef} className={styles.giveawayWrapper} id='giveaway'>
        <div className={styles.giveaway}>
            <div className={styles.heading}>
                <span>Giveaway</span>
            </div>
            <div className={styles.text}>
                <div className={styles.text1}>
                    5 Holders of our collection will be chosen at random and share a prize of 5  
                    <span>
                        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                            <path d="M11.9039 14.6958L0.0273437 20.2443L11.9039 27.452L23.7757 20.2443L11.9039 14.6958Z" fill="url(#paint0_linear_103_362)"/>
                            </g>
                            <g opacity="0.45">
                            <path d="M0 20.2436L11.8765 27.4513L11.8765 0.00146484L0 20.2436Z" fill="url(#paint1_linear_103_362)"/>
                            </g>
                            <g opacity="0.8">
                            <path d="M11.8711 0L11.8711 27.4498L23.7429 20.2421L11.8711 0Z" fill="url(#paint2_linear_103_362)"/>
                            </g>
                            <g opacity="0.45">
                            <path d="M0 22.5566L11.8765 39.744V29.7644L0 22.5566Z" fill="url(#paint3_linear_103_362)"/>
                            </g>
                            <g opacity="0.8">
                            <path d="M11.8711 29.7619V39.7415L23.7523 22.5542L11.8711 29.7619Z" fill="url(#paint4_linear_103_362)"/>
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_103_362" x1="0.0273437" y1="21.0739" x2="23.7757" y2="21.0739" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B134D0"/>
                            <stop offset="1" stop-color="#19C5BF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_103_362" x1="0" y1="13.7264" x2="11.8765" y2="13.7264" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B134D0"/>
                            <stop offset="1" stop-color="#19C5BF"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_103_362" x1="11.8711" y1="13.7249" x2="23.7429" y2="13.7249" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B134D0"/>
                            <stop offset="1" stop-color="#19C5BF"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_103_362" x1="0" y1="31.1503" x2="11.8765" y2="31.1503" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B134D0"/>
                            <stop offset="1" stop-color="#19C5BF"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_103_362" x1="11.8711" y1="31.1479" x2="23.7523" y2="31.1479" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B134D0"/>
                            <stop offset="1" stop-color="#19C5BF"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </span> 
                    ETH after the SOLD OUT!
                </div>
                <div className={styles.text2}>
                    Fill in the form to <br></br> 
                    participate
                    <span>
                        <svg width="54" height="38" viewBox="0 0 54 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_103_357)">
                            <path d="M1.125 19L42.75 19" stroke="#C800DA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27 7.91683L42.75 19.0002L27 30.0835" stroke="#C800DA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_103_357">
                            <path d="M19 38C8.50659 38 -3.71835e-07 29.4934 -8.30516e-07 19C-1.2892e-06 8.50659 8.50659 -3.71835e-07 19 -8.30516e-07L35 -1.5299e-06C45.4934 -1.98858e-06 54 8.50659 54 19C54 29.4934 45.4934 38 35 38L19 38Z" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>

                <div className={styles.text3}>
                    Don't miss your <br></br> chance to win <br></br> a money prize
                </div>
            </div>
            <div className={styles.textBg}>
                <svg width="499" height="637" viewBox="0 0 499 637" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M498.501 0H21C9.40202 0 0 9.40202 0 21V616C0 627.598 9.40201 637 21 637H499C499 637 417.246 452.881 417.246 328.438C417.246 190.305 498.501 0 498.501 0Z" fill="url(#paint0_linear_103_355)"/>
                    <defs>
                    <linearGradient id="paint0_linear_103_355" x1="499.498" y1="311.047" x2="8.47453" y2="311.047" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FDFC47"/>
                    <stop offset="1" stop-color="#24FE41"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={styles.form}>
                <form action="">
                    <label className={styles.inputLabel} for="fname">Wallet address</label>
                    <input className={styles.input} type="text" id="fname" name="fname" />
                    <label className={styles.inputLabel} for="lname">E-mail</label>
                    <input className={styles.input} type="text" id="lname" name="lname" />
                    <button className={styles.submitBtn} type="submit">
                        <span>Send</span>
                    </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Giveaway