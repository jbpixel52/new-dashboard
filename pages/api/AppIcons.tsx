import axios from 'axios';
import type App from '../../components/Types/App'

export default async function getIcon(props: App) {

    const imgSrc: string = "https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/png/" +
        props.appname.toLowerCase() +
        ".png";


    const fallback_response: string = "https://raw.githubusercontent.com/google/material-design-icons/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";

    // if (checkAvailability(imgSrc) === 200) {
    //     console.log(`Response:  ${props.appname} ${new Response(imgSrc).status}`);
    //     return imgSrc;
    // }
    if (new Response(props.appurl.toLowerCase() + "/favicon.ico").status === 200) {
        console.log(`falling back to favicon for ${props.appname}`)
        const imageurl: string = props.appurl.toLowerCase() + "/favicon.ico";
        return imageurl;
    }
    return fallback_response
}


// async function checkAvailability(src: string): Promise<any> {
//     // let response = await new Response(src);
//     // console.log(response);
//     // let code:number = response.status;
//     // const response = fetch(src, { mode: "no-cors" }).then((res) => {
//     //     res.ok;
//     //     console.log(response);
//     //     if (res.ok) {

//     //         code = 200;
//     //     }else{
//     //         code = 404;
//     //     }
//     // }).catch(() => {
//     //     false
//     // });

//     //FUCKING FUCK CORS!

//     await fetch(src).then((response) => {
//         console.log(response.ok);
//         console.log(response.url);
//         console.log(response.status);
//         return response.status;
//     });



// }

