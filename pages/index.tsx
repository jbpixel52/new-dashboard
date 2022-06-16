import { Box, Container, Button, IconButton } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import AppGrid from '../components/AppGrid/AppGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Image from 'next/image'
import { useState } from 'react'
import style from '../styles/Home.module.css'
import Link from 'next/link'
import SettingsIcon from '@mui/icons-material/Settings';
import title from 'next'
import FloatingActionButtons from '../components/FAB/FAB'
import Spline from '@splinetool/react-spline';

const styles = {
  paperContainer: {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1571646305816-f155cec7e16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'})`
  }
};


const Home: NextPage = () => {

  return (
    <main className={style.mainStack}>
        <Head>
          <title>Dashboard</title>

        </Head>
    <Box style={styles.paperContainer} className={style.main}>
      <Spline scene="https://prod.spline.design/KRWPcv2wBCCbH11p/scene.splinecode" className={style.SplineBackground} />

        {/* <Box className={style.blur}/>   */}


        <Container className={style.Container}>
          {SearchBar()}
          {AppGrid()}
          {FloatingActionButtons()}
        </Container>

        
       </Box>
      </main>
  )
}

export default Home
