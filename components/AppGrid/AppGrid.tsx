import { Box, Grid, Page } from 'grommet';
import { useState } from 'react';
import data from '../../applinks.json'
import AppCard from '../AppCard/AppCard';
import style from './AppGrid.module.css'
import type App from '../Types/App';
// function itemToApp(item: any){
//    let props: App = {'appname': item.appname, 'apptype':item.apptype, 'appurl':item.appurl,'appdescription':item.appdescription};
//    return props;
// }

export default function AppGrid() {
    const boxes: JSX.Element[] = data.apps.map((app: App, i) =>
        AppCard(app)
    );
    console.log(boxes);
    return (
        <div className={style.AppGrid}>{boxes}</div>
    );
}