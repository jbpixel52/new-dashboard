import axios from 'axios';
import type App from '../../components/Types/App'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';


export default async function getIcon(props: App, req: NextApiRequest,
    res: NextApiResponse) {
    const imgSrc: string = "https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/png/" +
        props.appname.toLowerCase() +
        ".png";

    const fallback_response: string = "https://raw.githubusercontent.com/google/material-design-icons/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";

    return fallback_response;
}


type Data = {
    name: string
}

