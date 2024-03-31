import styles from "./Topnav.module.css";
import {NavLink} from "react-router-dom";

export default function Topnav({items}) {
    return (<div className={styles.topnav}>
        {items.map(item => {
            return <NavLink key={item.id} to={item.link}
                            className={({isActive}) => isActive ? styles.active : ""}>
                <span>{item.text}</span>
            </NavLink>;
        })}
    </div>);
}