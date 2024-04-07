import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from "./Page.module.css";
import img from "../static/img.png"

export default function Home() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/1");
    }
    return (<>
        <div className={styles.content}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="test image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Entry 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Quite an interesting subtopic
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    </>);
}