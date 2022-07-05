import type { NextPage } from 'next'
import Head from 'next/head'
import AppGrid from '../components/AppGrid/AppGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import style from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import Image from 'next/future/image';
import Link from 'next/link'
import { useBackgroundStore } from '../components/store/store'
import { MdSettings } from "react-icons/md";
import { MdHome } from "react-icons/md"
import Navigation from '../components/navigation/Navigation'



const Home: NextPage = () => {
  const image = useBackgroundStore((state) => state.source);

  useEffect(() => {
    document.documentElement.lang = "eng-us";
  }, []);
  return (
    <main className={style.main}>

      <Image src={'https://images2.alphacoders.com/660/660651.jpg'} alt='alt text lol' className={style.background} />
      <div className={style.blurLayer}></div>
      <div className={style.mainStack}>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className={style.gallery}>
          <h1>BeMOre Dashboard</h1>
          <div className={style.galleryImageWrapper}>          <Image src={'https://images2.alphacoders.com/660/660651.jpg'} alt='painting' className={style.galleryImage} />
          </div>

        </div>

        <AppGrid />
        <Navigation />
      </div>
    </main>
  )
}

export default Home
