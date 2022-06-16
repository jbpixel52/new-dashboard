import React, { useEffect, useState } from 'react';
import AppIcons from '../AppIcons/AppIcons';
import { prominent } from 'color.js'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import style from '../AppCard/AppCard.module.css'
import { Box, CardMedia, Paper } from '@mui/material';
import Link from 'next/link';
import type App from '../Types/App'
{   /* <Anchor href={props.appurl} label={props.appurl.replace(/(^http:\/\/|https:\/\/)/i, "")} /> */ }


function removeHTTPfromURL(appurl: string) {
    let cleanURL: string = appurl;
    cleanURL = cleanURL.replace(/(^http:\/\/|https:\/\/)/i, "");
    return cleanURL;
}


export default function AppCard(props: App) {
    const [bgColor, setbgColor] = useState([1,1,1]);
    const theme = useTheme();
    const [icon, setIcon] = useState(AppIcons(props));

    useEffect(() => {
        const color = prominent(icon, { amount: 1, format: 'array' });
        color.then(value => {
            try {
                setbgColor(Number(vaule));
            } catch (error) {
                
            }
            
            console.log(`The promiennt color of ${props.appname} is ${value}`);
        }).catch(err => {
            console.log(err);
        });

    }, [bgColor, icon, props.appname]);

    return (
        <Link href={props.appurl} as={props.appurl} passHref>
            <Box className={style.AppBackground} sx={{
                bgcolor: `rgba(${bgColor[0]},${bgColor[1]},${bgColor[2]},0.6)`}}>


            <Card  sx={{
                display: 'flex', backgroundColor: 'transparent', padding:1
            }} className={style.AppCard}>
                <CardMedia
                    component="img"
                    sx={{ width: 75, height: 75 }}
                    image={AppIcons(props)}
                    alt="app icon"
                />
            </Card>
            </Box>

        </Link>
    );
}
