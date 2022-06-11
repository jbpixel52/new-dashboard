import React, { useEffect, useState } from 'react';
import AppIcons from '../AppIcons/AppIcons';
import OnlineIndicator from './OnlineIndicator';
import styles from './AppCard.module.css'
import { prominent } from 'color.js'
import Image from 'next/image'

type App = {
    appname: string,
    appurl: string,
    appdescription: string,
    apptype: string,
}


export default function AppCard(props: App) {
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
        <div className='AppCard'>
            <Image src={AppIcons(props)} alt='appimage' />
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
    return element
}

function removeHTTPfromURL(appurl: string) {
    let cleanURL: string = appurl;
    cleanURL = cleanURL.replace(/(^http:\/\/|https:\/\/)/i, "");
    return cleanURL;
}
