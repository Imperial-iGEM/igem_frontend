import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      float: 'right'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(true);
  };

  const handleCloseExit = () => {
    setOpen(false);
  };

  const handleClose2Exit = () => {
    setOpen2(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
    setOpen3(true);
  };

  const handleClose3Exit = () => {
    setOpen3(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
    setOpen5(true);
  };

  const handleClose5Exit = () => {
    setOpen5(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  return (
    <div>
        <div className={classes.root}>
        <Fab variant="extended" color="primary" onClick={handleClickOpen}>
            <NavigationIcon className={classes.extendedIcon}/>
            Click For Tutorial
        </Fab>
        </div>
      <Dialog
        open={open}
        onClose={handleCloseExit}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Welcome to the Upload Tutorial
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          As you navigate through the tutorial by clicking "Next" in the bottom corner of the pop up box we will guide you though the features in this page
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseExit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2Exit}
        style={{bottom:'558px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Page Tabs
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            On this page there are three different tabs you can go to, stay here to upload a SBOL file you already have and know is constructed without errors
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2Exit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose2} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open3}
        onClose={handleClose3Exit}
        style={{bottom:'558px',left:'350px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Don't have a SBOL File?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you dont have a SBOL file but still want to trail the software navigate to the Tab below to download an example SBOL file
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose3Exit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose3} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    <Dialog
        open={open5}
        onClose={handleClose5Exit}
        style={{left:'900px', top:'300px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Upload file
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can upload by drag and drop the SBOL file in which you would like to construct
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose5Exit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose5} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open6}
        onClose={handleClose6}
        style={{right:'900px', top:'500px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Thankyou for Listening
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once you have finished input all the required data on this page click Next at the bottom of the screen to continue to the Specifications Page
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autofocus onClick={handleClose6} color="secondary">
            End
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
