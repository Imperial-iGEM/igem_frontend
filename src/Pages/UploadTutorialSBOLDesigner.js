import React, {useState} from 'react';
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

export default function SBOLDesignerTutorial() {
    const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

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
    setOpen4(true);
  };

  const handleClose4Exit = () => {
    setOpen4(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
    setOpen5(true);
  };

  const handleClose5Exit = () => {
    setOpen5(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
    setOpen6(true);
  };

  const handleClose6Exit = () => {
    setOpen6(false);
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
            Welcome to the SBOL Designer Tutorial
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          As you navigate through the tutorial by clicking "Next" in the bottom corner of the pop up box we will guide you though the features in this page.
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
          Assembly Method
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can select the assembly method you will be using. <br/><br/>If you are using BASIC, please download the template Linkers file and use that as a starting point when creating your SBOL file.
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
        style={{right:'900px', top:'500px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Ready to start using the embedded SBOL Designer?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can upload an existing SBOL file using the 2nd button from the left in SBOL Designer.
            <br/><br/>
            Make sure to save and download the updated document if you make any changes, using the 5th button from the left.
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
        open={open4}
        onClose={handleClose4Exit}
        style={{left:'900px', top:'500px'}}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Select Assembly Component
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To the right we have a radio select component for you to input the type of dna assembly you would like to use on your SBOL file
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose4Exit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose4} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
          open={open4}
          onClose={handleClose4Exit}
          style={{left:'900px', top:'500px'}}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Combinatorial Design
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you want to specify a variation on a part to make a combinatorial design, select the part you want to put variants on and click on the twisted DNA icon in the top bar (9th from the left).
            <br/><br/>
            You can then specify as many parts as you want as variants! For example if you are testing a lot of different promoters in the same pathway.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose4Exit} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose4} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
          open={open5}
          onClose={handleClose6Exit}
          style={{left:'900px', top:'500px'}}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          BASIC Assembly
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you're using BASIC assembly, make sure you download our set of linkers using the button to the right of the assembly methods (labelled "BASIC linker set").
            <br/><br/>
            To use these linkers, first add a "NGA (No Glyph Assigned)" Part into your design.
            Then, select "Import Part" and choose the BASIC linker set you just downloaded.
            You can sort the parts in this file by clicking on "Display Id". Select the linker you wish to use
            (select linkers without the "_Prefix" and "_Suffix" in their Display IDs - they are automatically imported).
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
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Thank you for Listening
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
