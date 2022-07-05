
import type App from '../../components/Types/App';
type AppStatus = {
    code: number,
    color: string,
    logic: boolean,

}


export default async function OnlineIndicator(props: App) {
    let AppInfo: AppStatus = { 'code': 0, "color": 'green', 'logic': false };
    AppInfo.code = new Response(props.appurl).status;
    //console.log(`STATUS CODE FOR ${props.appname} is = ${AppInfo.code}`)


    //console.log(`Status response for ${props.appname} is code: ${AppInfo.code} `)
    switch (true) {
        case (AppInfo.code >= 100 && AppInfo.code <= 199):
            return ('ℹℹ️');
        case (AppInfo.code >= 200 && AppInfo.code <= 299):
            return ('🟢');
        case (AppInfo.code >= 300 && AppInfo.code <= 399):
            return ('🛤️');
        case (AppInfo.code >= 400 && AppInfo.code <= 499):
            return ('☹️');
        case (AppInfo.code >= 500 && AppInfo.code <= 599):
        default:
            return 'no status code';
    }
}

