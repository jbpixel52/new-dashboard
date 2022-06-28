import type { NextPage } from 'next'
import Head from 'next/head'
import AppGrid from '../components/AppGrid/AppGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import style from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link'


let backgroundSource = "/images/blackdash.jpg";
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
    <div className={style.mainStack}>
      <Head>
        <title>Dashboard</title>
      </Head>

      {/* <Spline scene="https://prod.spline.design/KRWPcv2wBCCbH11p/scene.splinecode" className={style.SplineBackground} /> */}

      {/* <header className={style.header}>
          <h1 className={style.pageName}>New BeMOre Dashboard</h1>
          <h2 className={style.headerLinks}><Link href={'/settings'}>settings</Link></h2>
        </header> */}
        <div className={style.gallery}>
          <Image src={'https://is2.4chan.org/wg/1655090288638.jpg'} width="200" height="200" layout="fill" alt={''} objectFit='contain' />
        </div>
        <AppGrid />
    </div>
  )
}

export default Home
