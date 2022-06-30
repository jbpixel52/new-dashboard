import type { NextPage } from 'next'
import Head from 'next/head'
import AppGrid from '../components/AppGrid/AppGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import style from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import Image from 'next/future/image';
import Link from 'next/link'
import {useBackgroundStore} from '../components/store/store'

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${})`
//   }
// };



const Home: NextPage = () => {
  const image = useBackgroundStore((state) => state.source);

  useEffect(() => {
    document.documentElement.lang = "eng-us";
  }, []);
  return (
  <main className={style.main}>
    
      <div className={style.mainStack}>
        <Head>
          <title>Dashboard</title>
        </Head>
        {/* <Spline scene="https://prod.spline.design/KRWPcv2wBCCbH11p/scene.splinecode" className={style.SplineBackground} /> */}
        {/* <header className={style.header}>
            <h1 className={style.pageName}>New BeMOre Dashboard</h1>
            <h2 className={style.headerLinks}><Link href={'/settings'}>settings</Link></h2>
          </header> */}
          <Image src={'https://is2.4chan.org/wg/1655090288638.jpg'}  alt='alt text lol' className={style.gallery}/>
        <AppGrid />
        <div className={style.sidebar}>
          <ul>
          <li>
            <Link href="/settings">
            <b>To Settings</b>
                  </Link>
          </li>
        <li>
          <Link href="/">
            <b>To main</b>
          </Link>
        </li>
          </ul>
        </div>
    
      </div>
  </main>
  )
}

export default Home
