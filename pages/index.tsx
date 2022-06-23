import { Box, Container, Button, IconButton } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import AppGrid from '../components/AppGrid/AppGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import style from '../styles/Home.module.css'
import FloatingActionButtons from '../components/FAB/FAB'
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import Image from 'next/image';


let backgroundSource = "/images/mountains.png";
const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundSource})`
  }
};


const Home: NextPage = () => {

  


  useEffect(() => {
    document.documentElement.lang = "eng-us";
  }, []);
  return (
    <main className={style.mainStack}>
      <Head>
        <title>Dashboard</title>

      </Head>
      <Box style={styles.paperContainer} className={style.main}>

        <Image src={backgroundSource} alt={'Background image'} layout='fill' />
        {/* <Spline scene="https://prod.spline.design/KRWPcv2wBCCbH11p/scene.splinecode" className={style.SplineBackground} /> */}

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
