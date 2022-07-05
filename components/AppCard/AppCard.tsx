import React, { useEffect, useState } from 'react';
import AppIcons from '../../pages/api/AppIcons';
import style from '../AppCard/AppCard.module.css'
import type App from '../Types/App'
import OnlineIndicator from '../../pages/api/OnlineIndicator';

function componentToHex(c: number) {
    const hex: string = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



export default function AppCard(props: App) {

    // const [bgColor, setbgColor] = useState<[number, number, number]>([1, 1, 1]);
    const [icon, setIcon] = useState("https://raw.githubusercontent.com/google/material-design-icons/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png");
    const [statusEmoji, setEmoji] = useState<string>('👽');

    useEffect(() => {
        localStorage.setItem(props.appname, JSON.stringify(props));
        const emoji = OnlineIndicator(props);
        emoji.then(value => {
            setEmoji(value);
        })
        try {
            const tempIcon = AppIcons(props);
            tempIcon.then(value =>{
                setIcon(value);
            })
        } catch (error) {
            setIcon("https://raw.githubusercontent.com/google/material-design-icons/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png")
            
        }
        // const color = average(icon, { sample: 100, amount: 1, format: 'array' });
        // color.then(value => {
        //     setbgColor((value));
        // }).catch(err => {
        //     console.log(err);
        // });

    }, []);

    return (

        <div className={style.AppCard} onClick={() => {
            window.open(props.appurl, '_blank');
        }}>
            {/* <Image src={AppIcons(props)} width="20" height="20" layout="fixed" alt={props.appname}/> */}
            <img src={icon} alt='' className={style.icon} />
            <p><b>{props.appname} {statusEmoji}</b></p>
        </div>
    );
}
