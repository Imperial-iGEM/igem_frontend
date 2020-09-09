import React, {useState} from 'react';
//put helper in public and import in style import Helper from 'src/PageComponents/Helper.svg';
import Helper from '../PageComponents/Helper.svg';
import {Card, CardContent, Paper, Typography} from "@material-ui/core";
import TutorialPageFileUpload from "../TutorialPageFileUpload";
import {Redirect, useLocation} from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import GenerateProtocol from "../GenerateProtocol";
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
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();
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
                <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height={100} width={100} onClick ={handleOpen}/>


                <Modal
                    open={open}
                    onClose={handleClose}

                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}</Modal>

            </div>
        )


    }


/*
const images = [
    {
       // url: 'jetbrains://web-storm/navigate/reference?project=igem_frontend&path=public/Helper2.png',
        title: 'Help',
        width: '50%',
        height:'30%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 550,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 400, //ORIGINAL 200
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: '10%',//ORIGINAL 100
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}

                    style={{
                        width: image.width,}}>
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${require("C:\\Users\\User\\Documents\\GitHub\\igem_frontend\\src\\PageComponents\\Helper.svg")})`
                  //backgroundImage: `url(${image.url})`, //fundamental line
                 // <div style={{ backgroundImage: `url(require("images/img.svg"))` }}>
              }}/>
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                </ButtonBase>
            ))}
        </div>
    );

 */
