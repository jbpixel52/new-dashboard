import axios from "axios";
import { RadioButton } from "grommet";
import Error from "next/error";
import { useState } from "react";
import type App from '../Types/App';
type AppStatus = {
    code : number,
    color: string,
    logic : boolean,

}
function pingApp(URL:App.appurl, Status:AppStatus){
    Status.code = new Response(URL).status;
    return Status.code;
}



export default async function OnlineIndicator(props:App){
    let AppInfo: AppStatus = {'code': 0, "color": 'green', 'logic': false};
    AppInfo.code = await pingApp(props, AppInfo);
    const [status, setStatus] = useState<number>(0);
   
    console.log(`Status response for ${props.appname} is code: ${status} `)
    switch (true) {
        case (status >=100 && status<=199):
            return('ℹℹ️');
        case (status >=200 && status<=299):
            return('🟢');
        case (status >=300 && status<=399):
            return('🛤️');
        case (status >=400 && status<=499):
            return('☹️');
        case (status >=500 && status<=599):
        default:
            return 'no status code';
    }
}

