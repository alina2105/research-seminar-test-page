import styles from "./Page.module.css";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home_1() {
    return (<>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo nisl, rhoncus a euismod ut, porta
            commodo
            diam. Proin volutpat sapien a velit sagittis imperdiet. Nam sollicitudin semper libero vel vulputate. Proin
            consequat risus non massa aliquam, vel euismod libero euismod. Curabitur pulvinar eros magna, sit amet
            finibus
            lectus lobortis sed. Nullam venenatis eget sapien ut elementum. Curabitur et tellus condimentum, ullamcorper
            risus finibus, scelerisque justo. Integer lacinia nulla vitae nisl ultrices, eget luctus velit placerat.
            Vivamus
            sodales tellus a orci ullamcorper interdum. Morbi rutrum tellus sed velit pretium, quis congue est
            consectetur.
            Ut ultricies rhoncus pulvinar. Sed purus justo, ultrices sed arcu et, finibus porttitor nisl. Aliquam erat
            volutpat. Vivamus nulla magna, interdum eu posuere id, blandit a justo. Fusce pretium luctus purus. Cras sit
            amet massa justo.
            <ul>
                <li>A list entry</li>
                <li>Another list entry</li>
                <li>One last entry</li>
            </ul>
        </div>
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>Expanded by default</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Das ist der spannende Text, der beim Ausklappen gezeigt wird :)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Second info, not expanded</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo nisl, rhoncus a euismod ut, porta
            commodo
            diam. Proin volutpat sapien a velit sagittis imperdiet. Nam sollicitudin semper libero vel vulputate. Proin
            consequat risus non massa aliquam, vel euismod libero euismod. Curabitur pulvinar eros magna, sit amet
            finibus
            lectus lobortis sed. Nullam venenatis eget sapien ut elementum. Curabitur et tellus condimentum, ullamcorper
            risus finibus, scelerisque justo. Integer lacinia nulla vitae nisl ultrices, eget luctus velit placerat.
            Vivamus
            sodales tellus a orci ullamcorper interdum. Morbi rutrum tellus sed velit pretium, quis congue est
            consectetur.
            Ut ultricies rhoncus pulvinar. Sed purus justo, ultrices sed arcu et, finibus porttitor nisl. Aliquam erat
            volutpat. Vivamus nulla magna, interdum eu posuere id, blandit a justo. Fusce pretium luctus purus. Cras sit
            amet massa justo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo nisl, rhoncus a euismod ut, porta
            commodo
            diam. Proin volutpat sapien a velit sagittis imperdiet. Nam sollicitudin semper libero vel vulputate. Proin
            consequat risus non massa aliquam, vel euismod libero euismod. Curabitur pulvinar eros magna, sit amet
            finibus
            lectus lobortis sed. Nullam venenatis eget sapien ut elementum. Curabitur et tellus condimentum, ullamcorper
            risus finibus, scelerisque justo. Integer lacinia nulla vitae nisl ultrices, eget luctus velit placerat.
            Vivamus
            sodales tellus a orci ullamcorper interdum. Morbi rutrum tellus sed velit pretium, quis congue est
            consectetur.
            Ut ultricies rhoncus pulvinar. Sed purus justo, ultrices sed arcu et, finibus porttitor nisl. Aliquam erat
            volutpat. Vivamus nulla magna, interdum eu posuere id, blandit a justo. Fusce pretium luctus purus. Cras sit
            amet massa justo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo nisl, rhoncus a euismod ut, porta
            commodo
            diam. Proin volutpat sapien a velit sagittis imperdiet. Nam sollicitudin semper libero vel vulputate. Proin
            consequat risus non massa aliquam, vel euismod libero euismod. Curabitur pulvinar eros magna, sit amet
            finibus
            lectus lobortis sed. Nullam venenatis eget sapien ut elementum. Curabitur et tellus condimentum, ullamcorper
            risus finibus, scelerisque justo. Integer lacinia nulla vitae nisl ultrices, eget luctus velit placerat.
            Vivamus
            sodales tellus a orci ullamcorper interdum. Morbi rutrum tellus sed velit pretium, quis congue est
            consectetur.
            Ut ultricies rhoncus pulvinar. Sed purus justo, ultrices sed arcu et, finibus porttitor nisl. Aliquam erat
            volutpat. Vivamus nulla magna, interdum eu posuere id, blandit a justo. Fusce pretium luctus purus. Cras sit
            amet massa justo.
        </div>
    </>);
}