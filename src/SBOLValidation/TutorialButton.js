import React from 'react';
import TutorialPageFileUpload from "../TutorialPageFileUpload";
import Modal from "@material-ui/core/Modal";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function TutorialButton(props) {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Tutorial Page</h2>
            <p id="simple-modal-description">
<TutorialPageFileUpload/>
            </p>
        </div>
    );


    return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <img src={process.env.PUBLIC_URL + 'Helper2.svg'}   title={"Open a tutorial page"} height={100} width={100} onClick ={handleOpen} alt="robot"/>


                <Modal
                    open={open}
                    onClose={handleClose}

                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}</Modal>

            </div>
        )


    }
