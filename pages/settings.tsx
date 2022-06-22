import { Container, Paper, Stack, Typography, Switch, FormControlLabel, FormGroup } from '@mui/material';
import style from '../styles/Home.module.css'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import useStore from '../components/store/store';


const Settings = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const ComponentState = useStore(state => state.componentState);
    const changeState = useStore(state => state.changeState);
    return (

        <Container className={style.Container}>
            {<Link href={'/'} >Link to Home</Link>}
            <Stack spacing={2}>
                <Paper elevation={10} className={style.paper}>
                    <Typography>
                        Search Bar Settings
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                    </FormGroup>

                </Paper>
                <Paper elevation={11} className={style.paper}>
                    <Typography>
                        Components visibility
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={ComponentState}
                            onChange={changeState}
                        />} label="Apps Grid" />

                    </FormGroup>

                </Paper>
            </Stack>
        </Container>
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
