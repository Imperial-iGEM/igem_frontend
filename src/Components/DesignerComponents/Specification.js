import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import SpecCard from './SubComponents/SpecCard';
import SpecCardRun from './SubComponents/SpecCard_run';
import SpecCardOutput from './SubComponents/SpecCard_output';
import SpecCardLabhardware from './SubComponents/SpecCard_labhardware';
import SpecCardLabhardwareEXP from './SubComponents/SpecCard_labhardare_EXPERIMENTAL';
import SpecCardFinal from './SubComponents/SpecCard_final';
import TheDataTable from './SubComponents/datatable'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import  {useMutation} from "@apollo/client"
import gql from "graphql-tag"

// Styling for components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft:40,
    paddingRight:40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  myDialog: {
    textAlign: 'center'
  },
  button: {
      height:'100%',
      width:'100%'
  }
}));

// example graphql linker mutation
const LINKER_MUTATION = gql`
mutation($sbolFileString: String ){
  linkerList(sbolFileString:$sbolFileString) {
    linkerList
  }
}`;

// example specification linker mutation
const SPEC_MUTATION = gql`
mutation finalSpec(
  $assemblyType: String
  $linkerTypes: [LinkerInType]
  $sbolFileString: String
  $specificationsBasic: InputSpecsBASIC
  $specificationsBioBricks: InputSpecsBioBricks
  $specificationsMoClo: InputSpecsMoClo
  ) {
    finalSpec(assemblyType: $assemblyType, linkerTypes: $linkerTypes, sbolFileString:$sbolFileString,
    specificationsBasic: $specificationsBasic, specificationsBioBricks:$specificationsBioBricks, specificationsMoClo: $specificationsMoClo  ){
      outputLinks
    }
}`;

// transition for modal to slide from bottom of the screen
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//          "sbolString": btoa(window.sbolFile),
//"liquidHandler": liquidHandler,
//"removeRepeated": true,
//"outputPlatePositions": outState.plate_position,
//"outputReagentsList": outState.reagents_list,
//"outputPartSequences": outState.part_sequences_to_order,
//"outputLogs": outState.debugging_logs,
//"outputMetaInformation": outState.run_metainformation,
//"assemblyType": props.dnaAssembly
//},
//"linkerTypes":rowData

export default function ExampleSpecification(props) {
  // use styling defined above
  const classes = useStyles();

  // /* Olive const's
  // Common labware 
  const [commonLabwareP10, setCommonLabwareP10] = useState('');
  const [commonLabwareP300, setCommonLabwareP300] = useState('');
  const [commonLabwareP10Type, setCommonLabwareP10Type] = useState('');
  const [commonLabwareP300Type, setCommonLabwareP300Type] = useState('');
  const [commonLabware96WellPlate, setCommonLabware96WellPlate] = useState('');
  // BASIC
  const [basicReagentPlate, setbasicReagentPlate] = useState('');
  const [basicTubeRack, setbasicTubeRack] = useState('');
  const [basicMagPlate, setbasicMagPlate] = useState('');
  const [basicAluminumBlock, setbasicAluminumBlock] = useState('');
  const [basicBeadContainer, setbasicBeadContainer] = useState('');
  const [basicSocPlate, setbasicSocPlate] = useState('');
  const [basicAgarPlate, setbasicAgarPlate] = useState('');

  const [basicEthanolWell, setbasicEthanolWell] = useState('');
  const [basicDeepWellPlate, setbasicDeepWellPlate] = useState('');
  // BioBricks
  const [biobricksTransformationPlate, setbiobricksTransformationPlate] = useState('');
  const [biobricksTubeRack, setbiobricksTubeRack] = useState('');
  const [biobricksSocPlate, setbiobricksSocPlate] = useState('');
  // MoClo (GoldenGate)
  const [moCloTrough, setmoCloTrough] = useState('');
  const [moCloReagentPlate, setmoCloReagentPlate] = useState('');
  const [moCloAgarPlate, setmoCloAgarPlate] = useState('');
  // Handle Changes
  // Common Labware 
  const commonLabwareP10HandleChange = (event) => {
    setCommonLabwareP10(event.target.value);
    console.log(commonLabwareP10)
  };
  const commonLabwareP300HandleChange = (event) => {
    setCommonLabwareP300(event.target.value);
    console.log(commonLabwareP300)
  };
  const commonLabwareP10TypeHandleChange = (event) => {
    setCommonLabwareP10Type(event.target.value);
    console.log(commonLabwareP10Type)
  };
  const commonLabwareP300TypeHandleChange = (event) => {
    setCommonLabwareP300Type(event.target.value);
    console.log(commonLabwareP300Type)
  };
  const commonLabware96WellPlateHandleChange = (event) => {
    setCommonLabware96WellPlate(event.target.value);
    console.log(commonLabware96WellPlate)
  };
  const [stateUseThermocycler, setStateUseThermocycler] = React.useState({
    checkedA: true,
  });
  const handleChangeUseThermocycler = (event) => {
    setStateUseThermocycler({ ...stateUseThermocycler, [event.target.name]: event.target.checked });
  };
  // BASIC
  const basicReagentPlateHandleChange = (event) => {
    setbasicReagentPlate({ ...basicReagentPlate, [event.target.name]: event.target.checked });
  };
  const basicTubeRackHandleChange = (event) => {
    setbasicTubeRack({ ...basicTubeRack, [event.target.name]: event.target.checked });
  };
  const basicMagPlateHandleChange = (event) => {
    setbasicMagPlate({ ...basicMagPlate, [event.target.name]: event.target.checked });
  };
  const basicAluminumBlockHandleChange = (event) => {
    setbasicAluminumBlock({ ...basicAluminumBlock, [event.target.name]: event.target.checked });
  };
  const basicBeadContainerHandleChange = (event) => {
    setbasicBeadContainer({ ...basicBeadContainer, [event.target.name]: event.target.checked });
  };
  const basicSocPlateHandleChange = (event) => {
    setbasicSocPlate({ ...basicSocPlate, [event.target.name]: event.target.checked });
  };
  const basicAgarPlateHandleChange = (event) => {
    setbasicAgarPlate({ ...basicAgarPlate, [event.target.name]: event.target.checked });
  };

  const basicEthanolWellHandleChange = (event) => {
    setbasicEthanolWell({ ...basicEthanolWell, [event.target.name]: event.target.checked });
  };
  const basicDeepWellPlateHandleChange = (event) => {
    setbasicDeepWellPlate({ ...basicDeepWellPlate, [event.target.name]: event.target.checked });
  };
  // BioBricks
  const biobricksTransformationPlateHandleChange = (event) => {
    setbiobricksTransformationPlate({ ...biobricksTransformationPlate, [event.target.name]: event.target.checked });
  };
  const biobricksTubeRackHandleChange = (event) => {
    setbiobricksTubeRack({ ...biobricksTubeRack, [event.target.name]: event.target.checked });
  };
  const biobricksSocPlateHandleChange = (event) => {
    setbiobricksSocPlate({ ...biobricksSocPlate, [event.target.name]: event.target.checked });
  };
  // MoClo (GoldenGate)
  const moCloTroughHandleChange = (event) => {
    setmoCloTrough({ ...moCloTrough, [event.target.name]: event.target.checked });
  };
  const moCloReagentPlateHandleChange = (event) => {
    setmoCloReagentPlate({ ...moCloReagentPlate, [event.target.name]: event.target.checked });
  };
  const moCloAgarPlateHandleChange = (event) => {
    setmoCloAgarPlate({ ...moCloAgarPlate, [event.target.name]: event.target.checked });
  };
  // */ Olive edits


  //to store output links
  const [opentronsOutputLinks, setOpentronsOutputLinks] = useState([]);
  //set state loading
  //const [itemLoading, setItemLoading] = useState('');
  //Controling modal when generate scipts button is pressed
  const [open, setOpen] = useState(false);
  //Run specification States
  const [maxNumWellPerPlate, setMaxNumWellPerPlate] = useState('');
  const [numRunPerPlate, setNumRunPerPlate] = useState('');

  const [wellLabels96 ] = useState(['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12',
                                    'B1','B2','B3','B4','B5','B6','B7','B9','B9','B10','B11','B12',
                                    'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12',
                                    'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12',
                                    'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12',
                                    'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
                                    'G1','G2','G3','G4','V5','G6','G7','G8','G9','G10','G11','G12',
                                    'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12',])
  
  //Opentrons Labware states
  const [liquidHandler, setliquidHandler] = useState('opentronsOT2');
  const [pipette1, setPipette1] = useState('p20singlechannel');
  //Output Files States
  const [outState, setOutState] = useState({
    plate_position: true,
    reagents_list: true,
    part_sequences_to_order: true,
    run_metainformation: true,
    debugging_logs: true,
  });

  const [rowData, setRowData] = useState([
    {linkerId: 'BASIC_mCherry_ORF.1', concentration: '50.0', plateNumber: '1', well: 'A1'},
    {linkerId: 'BASIC_sfGFP_ORF.1', concentration: '50.0', plateNumber: '1', well: 'A2'},
    {linkerId: 'BASIC_mTagBFP2_ORF.1', concentration: '50.0', plateNumber: '1', well: 'A3'}
  ]);

  // Function called Linker used to make the graphql request
  const [
    linkerList,
  ] = useMutation(LINKER_MUTATION, {
    variables: {
      sbolFileString: btoa(window.sbolFile)
    }});

  // Function called finalSpec used to make graphql request
  const [
    finalSpec,
  ] = useMutation(SPEC_MUTATION, {
    variables:
      {
        "assemblyType": props.dnaAssembly,
        "specificationsBasic": {
          "labwareDict": {
            "commonLabware": {
              "p10Mount": "right",
              "p300Mount": "left",
              "p10Type": "p10_single",
              "p300Type": "p300_single",
              "wellPlate": "biorad_96_wellplate_200ul_pcr"
            },
            "reagentPlate": "usascientific_12_reservoir_22ml",
            "tubeRack": "opentrons_24_tuberack_nest_1.5ml_snapcap",
            "magPlate": "biorad_96_wellplate_200ul_pcr",
            "aluminumBlock": "opentrons_96_aluminumblock_biorad_wellplate_200ul",
            "beadContainer": "usascientific_96_wellplate_2.4ml_deep",
            "socPlate": "usascientific_96_wellplate_2.4ml_deep",
            "agarPlate": "thermofisher_96_wellplate_180ul"
          },
          "ethanolWellForStage2": "A1",
          "deepWellPlateStage4": "1"
        },
        "specificationsMoClo": {
          "labwareDict": {
            "commonLabware": {
              "p10Mount": "right",
              "p300Mount": "left",
              "p10Type": "p10_single",
              "p300Type": "p300_single",
              "wellPlate": "biorad_96_wellplate_200ul_pcr"
            },
            "reagentPlate": "biorad_96_wellplate_200ul_pcr",
            "trough": "usascientific_12_reservoir_22ml", 
            "agarPlate": "thermofisher_96_wellplate_180ul"
          },
          "thermocycle": true
        },
        "specificationsBioBricks": {
          "labwareDict": {
            "commonLabware": {
              "p10Mount": "right",
              "p300Mount": "left",
              "p10Type": "p10_single",
              "p300Type": "p300_single",
              "wellPlate": "biorad_96_wellplate_200ul_pcr"
            },
            "tubeRack": "opentrons_24_tuberack_nest_1.5ml_snapcap",
            "socPlate": "usascientific_96_wellplate_2.4ml_deep",
            "transformationPlate": "corning_96_wellplate_360ul_flat"
          },
          "thermocycle": true
        },
        "linkerTypes": rowData,
        "sbolFileString": btoa(window.sbolFile)
      }
    });

  //Run Specification Update functions
  const maxNumWellPerPlateHandleChange = (event) => {
    setMaxNumWellPerPlate(event.target.value);
    console.log(maxNumWellPerPlate)
  };
  const numRunPerPlateHandleChange = (event) => {
    setNumRunPerPlate(event.target.value);
    console.log(numRunPerPlate)
  };
  
  //Opentrons Labware Update functions
  const handleChangeLiquid = (event) => {
    setliquidHandler(event.target.value);
  };

  //Opentrons Pipette Update fucntion
  const handleChangePipette = (event) => {
      setPipette1(event.target.value);
  };

  //Output files state changing functions
  const outputhandleChange = (event) => {
    setOutState({ ...outState, [event.target.name]: event.target.checked });
    console.log(outState)
  };


  //Functions for controlling modal
  const handleClickOpen = async () => {
    // send sbol file for linkers
    console.log(btoa(window.sbolFile))
    let linkers = await linkerList()
    console.log(linkers)

    //creating cool row data
    var outputArray = []
    var i;
    for (i = 0; i < linkers.data.linkerList.linkerList.length; i++) {
        var temp = {
          linkerId: linkers.data.linkerList.linkerList[i], concentration: '50.0', plateNumber: '1', well: wellLabels96[i]
        }
        outputArray.push(temp);
        temp = {};
    }
    setRowData(outputArray)
    console.log(outputArray)
    console.log(btoa(window.sbolFile))
    //setItemLoading(linkers.loading);
    //setTimeout(() => {  setItemLoading(linkers.loading); }, 2000);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseGenerate = async () => {
    console.log(props.dnaAssembly)
    let outputLinks = await finalSpec()
    console.log('output links',outputLinks)
    console.log('array',outputLinks.data.finalSpec.outputLinks)
    setOpentronsOutputLinks(outputLinks.data.finalSpec.outputLinks)
    setOpen(false);
  }

  // Repeats

  const [stateRemoveRepeats, setStateRemoveRepeats] = React.useState({
    checkedA: true,
  });

  const handleChangeRemoveRepeates = (event) => {
    setStateRemoveRepeats({ ...stateRemoveRepeats, [event.target.name]: event.target.checked });
  };

  /// Data table 
  const [columnDefs ] = useState([
    {headerName: 'Part / Linker ID', field: 'linkerId', width: '227'},
    {headerName: 'Concentration (μg/ml)', field: 'concentration', editable: true, width: '227'},
    {headerName: 'Plate Number', field: 'plateNumber', editable: true, width: '227'},
    {headerName: 'Well', field: 'well', editable: true, width: '227'}
  ]);

  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <SpecCard />
        </Grid>
        <Grid item xs={8}>
          <SpecCardRun
            maxNumWellPerPlateHandleChange={maxNumWellPerPlateHandleChange}
            numRunPerPlateHandleChange={numRunPerPlateHandleChange}
            handleChangeRemoveRepeates={handleChangeRemoveRepeates}
            stateRemoveRepeats={stateRemoveRepeats}
          />
        </Grid>
        <Grid item xs={12}>
          {/* <SpecCardLabhardware     OLIVE EDIT*/}
          <SpecCardLabhardwareEXP
            pipette1={pipette1}
            liquidHandler={liquidHandler}
            handleChangeLiquid={handleChangeLiquid}
            handleChangePipette={handleChangePipette}

            // Common labware 
            handleChangeP10={commonLabwareP10HandleChange}
            handleChangeP300={commonLabwareP300HandleChange}
            handleChangeP10Type={commonLabwareP10TypeHandleChange}
            handleChangeP300Type={commonLabwareP300TypeHandleChange}
            handleChange96WellPlate={commonLabware96WellPlateHandleChange}

            handleChangeUseThermocycler={handleChangeUseThermocycler}
            stateUseThermocycler={stateUseThermocycler}

            // BASIC
            handleChangeReagentPlate={basicReagentPlateHandleChange}
            handleChangeBasicTubeRack={basicTubeRackHandleChange}
            handleChangeMagPlate={basicMagPlateHandleChange}
            handleChangeAluminumBlock={basicAluminumBlockHandleChange}
            handleChangeBeadContainer={basicBeadContainerHandleChange}
            handleChangeSocPlate={basicSocPlateHandleChange}
            handleChangeAgarPlate={basicAgarPlateHandleChange}

            handleChangeEthanolWell={basicEthanolWellHandleChange}
            handleChangeDeepWellPlate={basicDeepWellPlateHandleChange}
            // BioBricks
            handleChangeTransformationPlate={biobricksTransformationPlateHandleChange}
            handleChangeBiobricksTubeRack={biobricksTubeRackHandleChange}
            handleChangeBiobricksSocPlate={biobricksSocPlateHandleChange}
            // MoClo (GoldenGate)
            handleChangeMoCloTrough={moCloTroughHandleChange}
            handleChangeMoCloReagentPlate={moCloReagentPlateHandleChange}
            handleChangeMoCloAgarPlate={moCloAgarPlateHandleChange}
          />
          {/* end olive edits */}
        </Grid>
        {/* <Grid item xs={4}>
          <SpecCardOutput
            outState={outState}
            outputhandleChange={outputhandleChange}
          />
        </Grid> */}
        <Grid item xs={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            onClick={
              handleClickOpen
            }
          >
            Process Input
          </Button>
          <Dialog
            maxWidth={"md"}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Fill in the concentrations of each part or accept default value"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please fill the concentrations of each Part / Linker ypu have and also the plate number and well in which you desire to place each Part / Linker that you have
                <TheDataTable
                  columnDefs={columnDefs}
                  rowData={rowData}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary">
                Close
              </Button>
              <Button onClick={handleCloseGenerate} variant="contained" color="secondary">
                Generate Opentrons Scripts
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <SpecCardFinal links={opentronsOutputLinks} />
        </Grid>
      </Grid>
    </div>
  );
}
