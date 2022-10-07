import React, { useState } from 'react'
import styles from '../styles/FAQ.module.scss'
import FAQImage from '../assets/FAQ.png'

const FAQ = () => {
  const [ open1, setOpen1 ] = useState(false)
  const [ open2, setOpen2 ] = useState(false)
  const [ open3, setOpen3 ] = useState(false)
  const [ open4, setOpen4 ] = useState(false)
  const [ open5, setOpen5 ] = useState(false)
  const [ open6, setOpen6 ] = useState(false)
  const [ open7, setOpen7 ] = useState(false)

  const faqData = {
    1: {
        question : 'IS THERE A DISCORD?',
        answer: `Not yet! We want to build a strong\ncommunity on Twitter first.`
    },
    2: {
        question : 'WHAT IS THE MINT DATE?',
        answer: `17 october 2022 ( 5 pm UTC )`
    },
    3: {
        question : 'WHAT IS THE SUPPLY?',
        answer: `The supply is 8 000`
    },
    4: {
        question : 'WHAT IS THE MINT PRICE?',
        answer: `First 500 NFTs will be minted for free (NFTs reserved by the team doesn't count), then price will be 0,0087 ETH per each.`
    },
    5: {
        question : 'WHAT IS THE MAX MINT NUMBER PER WALLET?',
        answer: `5 NFTs per wallet.`
    },
    6: {
        question : 'WHEN WILL THE ROADMAP BE REVEALED?',
        answer: `We will keep it hidden until the\nright moment comes.`
    },
    7: {
        question : 'WHAT ARE  THE GIVEAWAY TERMS?',
        answer: `The prize raffle will take place 1 week after the\nSOLD OUT. To participate you have to fill in the\nform. 5 holders will be chosen randomly by a\nNTF number and get 1 ETH each. The more\nNFT you hold the better chance to win you\nhave.`
    }
  }

  return (
    <div className={styles.faqWrapper} id='faq'>
        <div className={styles.faq}>
            <div className={styles.faqHeading}>
                FAQ
            </div>
            <div className={styles.faqImage}>
                <img src={FAQImage} alt='faq' />
            </div>
            <div className={styles.faqInner}>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[1].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open1 ? styles.plusOpen : null }`} onClick={() => setOpen1(!open1)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open1 ? styles.faqItemTextOpen : null }`}>
                            {faqData[1].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[2].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open2 ? styles.plusOpen : null }`} onClick={() => setOpen2(!open2)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open2 ? styles.faqItemTextOpen : null }`}>
                            {faqData[2].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[3].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open3 ? styles.plusOpen : null }`} onClick={() => setOpen3(!open3)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open3 ? styles.faqItemTextOpen : null }`}>
                            {faqData[3].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[4].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open4 ? styles.plusOpen : null }`} onClick={() => setOpen4(!open4)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open4 ? styles.faqItemTextOpen : null }`}>
                            {faqData[4].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[5].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open5 ? styles.plusOpen : null }`} onClick={() => setOpen5(!open5)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open5 ? styles.faqItemTextOpen : null }`}>
                            {faqData[5].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.faqItemWrapper}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[6].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open6 ? styles.plusOpen : null }`} onClick={() => setOpen6(!open6)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open6 ? styles.faqItemTextOpen : null }`}>
                            {faqData[6].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
                <div lassName={`${styles.faqItemWrapper} ${styles.faqItemLast}`}>
                    <div className={styles.faqItem}>
                        <div className={styles.faqItemHeading}>
                            {faqData[7].question}
                        </div>
                        <div className={`${styles.faqItemIcon} ${ open7 ? styles.plusOpen : null }`} onClick={() => setOpen7(!open7)}>
                            <span>+</span>
                        </div>
                        <div className={`${styles.faqItemText} ${ open7 ? styles.faqItemTextOpen : null }`}>
                            {faqData[7].answer.split('\n').map(x => <div>{x}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ