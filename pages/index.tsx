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
const styles = {
  paperContainer: {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1654721661424-0d3df2b042db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80'})`
  }
};


const Home: NextPage = () => {

  return (
    <Box style={styles.paperContainer} className={style.main}>
      <Box className={style.blur}>

        <Head>
        <title>Dashboard</title>

        </Head>
        <Container className={style.Container}>
          {SearchBar()}
          {AppGrid()}
          {FloatingActionButtons()}




        </Container>

      </Box></Box>
  )
}

export default Home
