import React, { useEffect, useState } from 'react';
import AppIcons from '../AppIcons/AppIcons';
import OnlineIndicator from './OnlineIndicator';
import { prominent } from 'color.js'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

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
      <Card sx={{ display: 'flex', bgcolor:bgColor, padding:2}}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {props.appname}
            </Typography>
          </CardContent>
        </Box> */}
        <CardMedia
          component="img"
          sx={{ width: 100}}
          image={AppIcons(props)}
          alt="app icon"
        />
      </Card>
    );
  }
