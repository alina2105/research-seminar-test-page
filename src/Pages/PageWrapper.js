import {topnavData} from "../lib/topnavData";
import Topnav from "../Components/Topnav";

export default function Page({keyNavData, pageComponent, topNavStyle}) {
    return (<>
        <Topnav items={topnavData[keyNavData]} styles={topNavStyle}/>
        {pageComponent}
    </>);
}