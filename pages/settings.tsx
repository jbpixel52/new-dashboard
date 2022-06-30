import { Container, Paper, Stack, Typography, Switch, FormControlLabel, FormGroup } from '@mui/material';
import style from '../styles/Home.module.css'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { useBackgroundStore, useComponentStore } from '../components/store/store';
import { useState } from 'react';

const Settings = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const storeURL:string = useBackgroundStore((state) => state.source);
    const [url, seturl] = useState(storeURL);
    const changeGalleryURL = useBackgroundStore((state)=>state.changeSource(url));

    return (
        <div className={style.mainStack}>
            <form>
                <div>
                    <label>URL of dashboard gallery: </label>
                    <input type="text" id="url" name="Image URl" onChange={(value)=>{}}></input>
                </div>
                <div>
                    <button>Change</button>
                </div>
            </form>
        </div>
    );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    return {
        props: {
            data: null
        }
    }
}

export default Settings;
