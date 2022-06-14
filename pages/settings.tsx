import { Container, Paper, Stack, Typography, Switch, FormControlLabel, FormGroup } from '@mui/material';
import style from '../styles/Home.module.css'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

const settings = ({
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                        Clock Settings 2
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
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

export default settings;
