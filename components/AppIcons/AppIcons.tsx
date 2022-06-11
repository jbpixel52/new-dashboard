
type App = {
    appname: string,
    apptype: string,
    appurl: string,
    appdescription: string,
}
export default function getIcon(props: App) {
    const responseurl: string = "https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/png/" +
        props.appname.toLowerCase() +
        ".png";

    const fallback_response: string = "https://github.com/google/material-design-icons/blob/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";
    if (
        new Response(responseurl).status === 200
    ) {
        return responseurl;
    }
    if (new Response(props.appurl + "/favicon.ico").status === 200) {
        const imageurl: string = props.appurl.toLowerCase() + "/favicon.ico";
        return imageurl;
    }
    return fallback_response;

}