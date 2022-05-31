import { Box, Grid } from 'grommet';
import { useState } from 'react';
import data from '../../applinks.json'
import AppCard from '../AppCard/AppCard';




type App = {
    appname: string,
    apptype: string,
    appurl: string,
    appdescription: string,
}

// function itemToApp(item: any){
//    let props: App = {'appname': item.appname, 'apptype':item.apptype, 'appurl':item.appurl,'appdescription':item.appdescription};
//    return props;
// }

export default function AppGrid() {
    const boxes: JSX.Element[] = data.apps.map((item: App, i) =>
        AppCard(item)
    );
    console.log(boxes);
    return (<div>{boxes}</div>);
}