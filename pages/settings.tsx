import { Container, Paper, Stack, Typography, Switch, FormControlLabel, FormGroup } from '@mui/material';
import style from '../styles/Home.module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import {useTheme}from '../components/store/themeStore';
import Navigation from '../components/navigation/Navigation';

const Settings = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const primaryColor = useTheme
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

        <Navigation/>
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
