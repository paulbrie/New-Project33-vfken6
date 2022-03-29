import React from 'react'
import Timer from '../../widgets/timer'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project33</title>
        <meta property="og:title" content="New Project33" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello! :) ---</h1>
      </div>
      <AppComponent></AppComponent>
      <div className={styles['container2']}>
        <Timer label="My Prop"></Timer>
      </div>
    </div>
  )
}

export default Home
