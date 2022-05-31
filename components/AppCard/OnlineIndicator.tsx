import axios from "axios";
import { RadioButton } from "grommet";
import { useState } from "react";

type App = {
    appname: string,
    apptype: string,
    appurl: string,
    appdescription: string,
}
type AppStatus = {
    status : number,
    color: string,
    logic : boolean,

}

async function pingApp(props: App, status: AppStatus){

    status.status = await axios({
        url: `{url goes here}`,
        method: "GET"
      });


    status.status = new Response(props.appurl).status;
    console.log('status is '+status.status );
    switch (status.status) {
        case 200:
            console.log(props.appname+' is online');
            status.color = "status-ok";
            status.logic  = true;  
            break;
        default:
            console.log(props.appname+' is not online');
            status.color = "status-error";
            status.logic = false;
            break;
    }
    return status
}



export default function OnlineIndicator(props:App){
    let AppInfo: AppStatus = {'status': 0, "color": 'green', 'logic': false};
    AppInfo = pingApp(props, AppInfo);
    const [status, setStatus] = useState(AppInfo.logic);
    function checkStatus(){
        AppInfo = pingApp(props,AppInfo)
        setStatus(AppInfo.logic);
    }
    const element  = (<RadioButton name="radio" checked={status} onChange={checkStatus} ></RadioButton>);
    return element
}