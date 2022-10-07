import React from 'react'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
        <span>© 2022 Fond Luxet Jenal.</span>
        <span className={styles.text2}>All rights reserved.</span>
    </footer>
  )
}

export default Footer