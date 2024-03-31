import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styles from "./Sidenav.module.css"
import { NavLink } from "react-router-dom";
import {useState} from "react";

export default function Sidenav() {
    const [expanded, setExpanded] = useState(true)
    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={expanded ? styles.sidenav : styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleExpanded}>
                {expanded ? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={expanded ? styles.linkText : styles.linkTextClosed}>{item.text}</span>
                </NavLink>
            })}
        </div>
    )
}