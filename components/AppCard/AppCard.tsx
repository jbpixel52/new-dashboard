import React, { useEffect, useState } from 'react';
import { Card, Text, Box, CardHeader, CardFooter, Button, CardBody, Grommet, Anchor, Image } from 'grommet';
import AppIcons from '../AppIcons/AppIcons';
import OnlineIndicator from './OnlineIndicator';
import styles from './AppCard.module.css'
import color from '../../pages/api/color'

type App = {
    appname: string,
    appurl: string,
    appdescription: string,
    apptype: string,
}


export default function AppCard(props: App) {
    ()=> color(AppIcons(props));
    const element = (
        <Card className='AppCard' width="small" background="light-1" gridArea='main' >
            <CardHeader align='center' direction='column'>
                <Box><Image
                    fit="cover"
                    src={AppIcons(props)}
                    alt={props.appname}
                    margin="xxsmall"

                />
                </Box>
                {<Text>{props.appname}</Text>}
                {/* {OnlineIndicator(props)} */}
            </CardHeader>
            {/* <CardBody pad={"none"} margin={"none"} className='CardBody'>
                {props.appdescription}
            </CardBody> */}
            <CardFooter>
                <Anchor href={props.appurl} label={props.appurl.replace(/(^http:\/\/|https:\/\/)/i, "")} />
            </CardFooter>
        </Card>
    );
    return element
}

function removeHTTPfromURL(appurl: string) {
    let cleanURL: string = appurl;
    cleanURL = cleanURL.replace(/(^http:\/\/|https:\/\/)/i, "");
    return cleanURL;
}
