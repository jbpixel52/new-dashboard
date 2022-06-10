
type App = {
    appname: string,
    apptype: string,
    appurl: string,
    appdescription: string,
}
export default function getIcon(props: App) {
    const responseurl : String =            "https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/png/" +
    props.appname.toLowerCase() +
    ".png"
    if (
        new Response( responseurl.toString()
 
        ).status === 200
    ) {
        return responseurl;
    }
    if (new Response(props.appurl + "/favicon.ico").status === 200) {
        const imageurl: String = props.appurl.toLowerCase() + "/favicon.ico"
        return imageurl;
    }
    return "https://github.com/google/material-design-icons/blob/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";

}