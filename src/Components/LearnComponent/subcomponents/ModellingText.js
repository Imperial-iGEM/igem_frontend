import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    },
    myButton: {
        paddingBottom: '10px',
    }
  }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function ModellingText(props){

    const classes = useStyles();

    const [openBasicLS, setOpenBasicLS] = React.useState(false);

    const handleClickBasicLS = () => {
        setOpenBasicLS(true);
    };

    const handleCloseBasicLS = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenBasicLS(false);
    };

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h6"}>
                    Having a genetic design is all in order, but the ability to analyse its plausibility and dynamic range can determine the success of a transformation. We found that a lot of iGEM teams have very little experience with modelling, so we worked hard to put together a mentorship package. 
                </Typography>
                <Typography className={classes.myButton} variant={"h6"}>
                    If you wanna fresh up on your modelling knowledge, check out our LaTeX or PDF intro package, complete with explanations and coding challenges in deterministic modelling, stochastic modelling, and modelling in practice.
                </Typography>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                    <Grid item xs={7}>
                        <a href={process.env.PUBLIC_URL + 'PDF/Introduction_to_Modelling_in_Synthetic_Biology_Version_1 (1).pdf'} download style={{ textDecoration: 'none' }}>
                            <Button onClick={handleClickBasicLS} variant="outlined" color="secondary">
                                Introduction to Modelling PDF
                            </Button>
                        </a>
                        <Snackbar open={openBasicLS} autoHideDuration={6000} onClose={handleCloseBasicLS}>
                            <Alert onClose={handleCloseBasicLS} severity="success">
                                Successfully Downloaded example Introduction to Modelling PDF.
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}