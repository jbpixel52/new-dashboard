import React, { useEffect, useState } from 'react';
import AppIcons from '../AppIcons/AppIcons';
import { prominent, average } from 'color.js'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import style from '../AppCard/AppCard.module.css'
import { CardMedia } from '@mui/material';
import type App from '../Types/App'
import Typography from '@mui/material/Typography';
import OnlineIndicator from '../../pages/api/OnlineIndicator';
import { CardActionArea } from '@mui/material';


function componentToHex(c: number) {
    const hex: string = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



export default function AppCard(props: App) {

    const [bgColor, setbgColor] = useState<[number, number, number]>([1, 1, 1]);
    const theme = useTheme();
    const [icon, setIcon] = useState(AppIcons(props));
    const [statusEmoji, setEmoji] = useState<string>('👽');

    const AppCardStyle = {
        backgroundImage: `linear-gradient(0deg, ${rgbToHex(bgColor[0], bgColor[1], bgColor[2])} 0%,
        ${rgbToHex(255 - bgColor[0], 255 - bgColor[1], 255 - bgColor[2])})`
    }


    useEffect(() => {
        const emoji = OnlineIndicator(props);
        emoji.then(value => {
            setEmoji(value);
        })
        const color = average(icon, { sample: 100, amount: 1, format: 'array' });
        color.then(value => {
            setbgColor((value));
        }).catch(err => {
            console.log(err);
        });

    }, []);

    return (

        <Card style={AppCardStyle} className={style.AppCard}>

            <CardActionArea sx={{ padding: 3 }} className={style.AppCard} onClick={() => {
                window.open(props.appurl, '_blank');
            }}>

                <CardMedia
                    component="img"
                    sx={{ width: 55, height: 55 }}
                    image={AppIcons(props)}
                    alt="app icon"
                />

                <Typography>{`${props.appname} ${statusEmoji}`}</Typography>

            </CardActionArea>
        </Card>
    );
}
