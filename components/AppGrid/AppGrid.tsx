import { useState } from 'react';
import data from '../../applinks.json'
import AppCard from '../AppCard/AppCard';
import style from './AppGrid.module.css'
import type App from '../Types/App';
import {useComponentStore} from '../store/store';

export default function AppGrid() {
    const ComponentState = useComponentStore(state => state.componentState);
    console.log(`State of App Grid is ${ComponentState}`);
    let dummy:boolean = true;
    switch (ComponentState) {
        case true:
            const boxes: JSX.Element[] = data.apps.map((app: App, i) =>
                AppCard(app)
            );
            return (
                <div className={style.AppGrid}>{boxes}</div>
            );
        default:
            console.log('failed to create App Grid')
            return (<></>);
    }
}
