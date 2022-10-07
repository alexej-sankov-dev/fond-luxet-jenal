import React, { useRef } from 'react'
import styles from '../styles/Home.module.scss'
import AboutCollection from './AboutCollection'
import Art from './Art'
import FAQ from './FAQ'
import Giveaway from './Giveaway'
import Mint from './Mint'
import Roadmap from './Roadmap'

const Home = () => {
  const giveawayRef = useRef(null)

  return (
    <div>
        <Mint giveawayRef={giveawayRef} />
        <AboutCollection />
        <Art />
        <Giveaway giveawayRef={giveawayRef} />
        <Roadmap />
        <FAQ />
    </div>
  )
}

export default Home