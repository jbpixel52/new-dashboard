
type App = {
    appname: string,
    apptype: string,
    appurl: string,
    appdescription: string,
}

export default function getIcon(props: App) {
    if (new Response(props.appurl + "/favicon.ico").status === 200) {
        return props.appurl + "/favicon.ico";
    }
    if (
        new Response(
            "https://github.com/walkxhub/dashboard-icons/blob/master/png/" +
            props.appname +
            ".png"
        ).status === 200
    ) {
        return (
            "https://github.com/walkxhub/dashboard-icons/blob/master/png/" +
            props.appname +
            ".png"
        );
    }
    return "https://github.com/google/material-design-icons/blob/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";

}