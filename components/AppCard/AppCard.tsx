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


    const card = (
        <React.Fragment>
            <CardActionArea>
            <Card sx={{ display: 'flex' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>            
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.apptype}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.appname}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    </Typography>
                    <Typography variant="body2">
                        <br />
                        {removeHTTPfromURL(props.appurl)}
                    </Typography>
                </CardContent></Box>
                <CardMedia
        component="img"
        sx={{width:'md'}}
        image={AppIcons(props)}
        alt="App Icon Image alt"
      />
    </Card>

            </CardActionArea>
        </React.Fragment>
    );

    return card;
}