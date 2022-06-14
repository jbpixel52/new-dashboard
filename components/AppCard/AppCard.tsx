import React, { useEffect, useState } from 'react';
import AppIcons from '../AppIcons/AppIcons';
import OnlineIndicator from './OnlineIndicator';
import { prominent } from 'color.js'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import style from '../AppCard/AppCard.module.css'
import { CardActionArea, CardMedia } from '@mui/material';
import { appendFile } from 'fs';
import Link from 'next/link';

type App = {
    appname: string,
    appurl: string,
    appdescription: string,
    apptype: string,
}


function AppCard2(props: App) {
    const [bgColor, setbgColor] = useState();

    const [icon, setIcon] = useState(AppIcons(props));

    useEffect(() => {
        const color = prominent(icon, { amount: 1, format: 'hex' });
        console.log('${color} =' + color);
        color.then(value => {
            console.log(value);
            setbgColor(value);
        }).catch(err => {
            console.log(err);
        });

    }, []);

    const element = (
        <div>
            <Image src={AppIcons(props)} alt='appimage' layout='responsive' width={100} height={100} />
            {<p>{props.appname}</p>}
            {/* {OnlineIndicator(props)} */}
            {/* <CardBody pad={"none"} margin={"none"} className='CardBody'>
                {props.appdescription}
            </CardBody> */}
            {/* <CardFooter>
                <Anchor href={props.appurl} label={props.appurl.replace(/(^http:\/\/|https:\/\/)/i, "")} />
            </CardFooter> */}
        </div>
    );

    return element;
}

function removeHTTPfromURL(appurl: string) {
    let cleanURL: string = appurl;
    cleanURL = cleanURL.replace(/(^http:\/\/|https:\/\/)/i, "");
    return cleanURL;
}


export default function AppCard(props: App) {
    const [bgColor, setbgColor] = useState();
    const theme = useTheme();
    const [icon, setIcon] = useState(AppIcons(props));

    useEffect(() => {
        const color = prominent(icon, { amount: 1, format: 'hex' });
        console.log('${color} =' + color);
        color.then(value => {
            console.log(value);
            setbgColor(value);
        }).catch(err => {
            console.log(err);
        });

    }, []);

    return (
        <Link href={props.appurl} as={props.appurl} passHref>

        <Card sx={{ display: 'flex', bgcolor: bgColor, padding: 2 }} className={style.AppCard}>
            <CardMedia
                component="img"
                sx={{ width: 50, height:50 }}
                image={AppIcons(props)}
                alt="app icon"
            />
        </Card>
        </Link>
    );
}
