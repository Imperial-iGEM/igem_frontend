import React from 'react'
import {Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    myButton: {
      width: '100%',
      minHeight: '100px'
    },
    myGrid: {
        padding: '10px'
    }
  }));

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function DownloadTemplate(props){

    const classes = useStyles();

    const [openBasicLS, setOpenBasicLS] = React.useState(false);
    const [openBasic, setOpenBasic] = React.useState(false);
    const [openMoclo, setOpenMoclo] = React.useState(false);
    const [openBiobricks, setOpenBiobricks] = React.useState(false);

    const handleClickBasicLS = () => {
        setOpenBasicLS(true);
    };

    const handleClickBasic = () => {
        setOpenBasic(true);
    };
    const handleClickMoclo = () => {
        setOpenMoclo(true);
    };
    const handleClickBiobricks = () => {
        setOpenBiobricks(true);
    };

    const handleCloseBasicLS = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenBasicLS(false);
    };

    const handleCloseBasic = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenBasic(false);
    };

    const handleCloseMoclo = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenMoclo(false);
    };

    const handleCloseBiobricks = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenBiobricks(false);
    };

    return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.myGrid}
        >
            <Grid item xs={12} sm={6} md={4} >
                <a href={process.env.PUBLIC_URL + 'SBOL/basic_validation.xml'} download style={{ textDecoration: 'none' }}>
                    <Button onClick={handleClickBasic} className={classes.myButton} variant="outlined" color="secondary">
                        Basic
                    </Button>
                </a>
                <Snackbar open={openBasic} autoHideDuration={6000} onClose={handleCloseBasic}>
                    <Alert onClose={handleCloseBasic} severity="success">
                        Successfully Downloaded example Basic assembly method SBOL File.
                    </Alert>
                </Snackbar>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <a href={process.env.PUBLIC_URL + 'SBOL/moclo_validation.xml'} download style={{ textDecoration: 'none' }}>
                    <Button onClick={handleClickMoclo} className={classes.myButton} variant="outlined" color="secondary">
                        MoClo (Golden Gate)
                    </Button>
                </a>
                <Snackbar open={openMoclo} autoHideDuration={6000} onClose={handleCloseMoclo}>
                    <Alert onClose={handleCloseMoclo} severity="success">
                        Successfully Downloaded example MoClo assembly method SBOL File.
                    </Alert>
                </Snackbar>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <a href={process.env.PUBLIC_URL + 'SBOL/bb_validation_level1.xml'} download style={{ textDecoration: 'none' }}>
                    <Button onClick={handleClickBiobricks} className={classes.myButton} variant="outlined" color="secondary">
                        BioBricks
                    </Button>
                </a>
                <Snackbar open={openBiobricks} autoHideDuration={6000} onClose={handleCloseBiobricks}>
                    <Alert onClose={handleCloseBiobricks} severity="success">
                        Successfully Downloaded example BioBricks assembly method SBOL File.
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
    )
}
