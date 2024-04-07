// import styles from "./Topnav.hist.module.css";
import {NavLink} from "react-router-dom";

export default function Topnav({items, styles}) {
    console.log(styles)
    return (<div className={styles.topnav}>
        {items.map(item => {
            return <NavLink key={item.id} to={item.link}
            className={({isActive}) => isActive ? styles.activeItem : styles.topnavItem}
            >
                <span>{item.text}</span>
            </NavLink>;
        })}
    </div>);
}