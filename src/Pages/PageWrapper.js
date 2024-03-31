import styles from "./Page.module.css";
import {topnavData} from "../lib/topnavData";
import Topnav from "../Components/Topnav";

export default function Page({keyNavData, pageComponent}) {
    return (<>
        <Topnav items={topnavData[keyNavData]}/>
        {pageComponent}
    </>);
}