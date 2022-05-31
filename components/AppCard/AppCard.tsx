import React, { useEffect, useState } from 'react';
import { Card, Text, Box, CardHeader, CardFooter, Button, CardBody, Grommet, Anchor, Image } from 'grommet';
import AppIcons from '../AppIcons/AppIcons';
import OnlineIndicator from './OnlineIndicator';



type App = {
    appname: string,
    appurl: string,
    appdescription: string,
    apptype: string,
}


export default function AppCard(props: App) {
    const element = (
        <Card height="small" width="small" background="light-1" gridArea='main'>
            <CardHeader>
                <Box height="xxsmall" width="xxsmall"><Image
                    fit="cover"
                    src={AppIcons(props)}
                    alt={props.appname}
                    margin="xxsmall"

                />
                </Box>
                <Text>{props.appname}</Text>
                {OnlineIndicator(props)}
            </CardHeader>
            <CardBody>
                {props.appdescription}
            </CardBody>
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
