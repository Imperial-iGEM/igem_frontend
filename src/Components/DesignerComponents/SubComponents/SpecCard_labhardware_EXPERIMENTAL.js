import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        minWidth: '420px',
        height: '100%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 22,
    },
    inputText: {
        minWidth: '15%'
    },
    inputText2: {
        minWidth: '25%',
        flexBasis:'calc(100% / 4)',
        flex: 1
    }
});

export default function SpecCardLabwareEXP(props) {
    const classes = useStyles();

    const [error_input1, setError_input1] = useState(false)
    const [error_input2, setError_input2] = useState(false)
    const [isBasic, setIsBasic] = useState(false);
    const [isMoclo, setIsMoclo] = useState(false);
    const [isBioBrick, setIsBioBrick] = useState(false);
    const checkError1 = (event) => {
        if (event.target.value < 0) {
            setError_input1(true)
        } else {
            setError_input1(false)
        }
    }

    const checkError2 = (event) => {
        if (event.target.value < 0) {
            setError_input2(true)
        } else {
            setError_input2(false)
        }
    }

    const [error_inputPip1, setError_inputPip1] = useState(false)

    const checkPipError1 = (event) => {
        if (event.target.value < 0) {
            setError_inputPip1(true)
        } else {
            setError_inputPip1(false)
        }
    }




    if(props.assemblyType === 'basic' && !isBasic){
        setIsBasic(true);
    } else if (props.assemblyType === 'bio_bricks' && !isBioBrick){
        setIsBioBrick(true);
    } else if(props.assemblyType === 'moclo' && !isMoclo) {
        setIsMoclo(true);
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Opentrons Labware Specification
                    <Typography className={classes.pos} color="textSecondary">
                        Customise your Opentrons labware. Use the Opentrons API name
                        for your labware if you created it using the Opentrons Custom
                        Labware builder!
                    </Typography>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <CardActions>
                                <TextField   // P10 Mount
                                    className={classes.inputText}
                                    onChange={(event) => {
                                        props.handleChangeP10(event)
                                        checkPipError1(event)
                                    }}
                                    error={error_input1}
                                    id="commonLabwareP10"
                                    label="P10 Pipette Mount"
                                    defaultValue="left"
                                    type="string"/>
                                <TextField   // P300 Mount
                                    className={classes.inputText}
                                    onChange={(event) => {
                                        props.handleChangeP300(event)
                                        checkError1(event)
                                    }}
                                    error={error_input1}
                                    id="commonLabwareP300"
                                    label="P300 Pipette Mount"
                                    defaultValue="right"
                                    type="string"/>
                                <TextField   // P10 Type
                                    className={classes.inputText}
                                    onChange={(event) => {
                                        props.handleChangeP10Type(event)
                                        checkError1(event)
                                    }}
                                    error={error_input1}
                                    id="commonLabwareP10Type"
                                    label="P10 Pipette Type"
                                    defaultValue="single"
                                    type="string"/>
                                <TextField   // P300 Type
                                    className={classes.inputText}
                                    onChange={(event) => {
                                        props.handleChangeP300Type(event)
                                        checkError1(event)
                                    }}
                                    error={error_input1}
                                    id="commonLabwareP300Type"
                                    label="P300 Pipette Type"
                                    defaultValue="single"
                                    type="string"/>
                                <TextField   // 96 Well plate
                                    className={classes.inputText}
                                    onChange={(event) => {
                                        props.handleChange96WellPlate(event)
                                        checkError1(event)
                                    }}
                                    error={error_input1}
                                    id="commonLabware96WellPlate"
                                    label="96 Well Plate Type"
                                    defaultValue="biorad_96_wellplate_200ul_pcr"
                                    type="string"/>
                            </CardActions>
                            <CardActions>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox checked={props.stateUseThermocycler.checkedA}
                                                           onChange={props.handleChangeUseThermocycler}
                                                           name="checkedA"/>}
                                        label="Use Thermocycler Module in Opentrons"
                                    />
                                </FormGroup>
                            </CardActions>
                        </form>
                    </div>

                    {isBasic && (
                        <div>
                            <Typography className={classes.pos} color="textSecondary">
                                BASIC Assembly
                            </Typography>
                            <div>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <CardActions>
                                        <Box flexWrap="wrap" flexGrow={1} style={{width:'100%'}}>
                                            <TextField   // BASIC: Reagent Plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeReagentPlate(event)
                                                checkPipError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicReagentPlate"
                                            label="Reagent Plate"
                                            defaultValue="usascientific_12_reservoir_22ml"
                                            type="string"/>
                                        <TextField   // BASIC: Tube Rack
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeBasicTubeRack(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicTubeRack"
                                            label="Tube Rack"
                                            defaultValue="opentrons_24_tuberack_nest_1.5ml_snapcap"
                                            type="string"/>
                                        <TextField   // BASIC: Purification Plate (called magPlate in DNA-BOT)
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeMagPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicMagPlate"
                                            label="Purification Plate"
                                            defaultValue="biorad_96_wellplate_200ul_pcr"
                                            type="string"/>
                                        <TextField   // BASIC: Aluminum Block
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeAluminumBlock(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicAluminumBlock"
                                            label="Aluminum Block"
                                            defaultValue="opentrons_96_aluminumblock_biorad_wellplate_200ul"
                                            type="string"/>
                                        <TextField   // BASIC: Bead Container
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeBeadContainer(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicBeadContainer"
                                            label="Magnetic Bead Container"
                                            defaultValue="usascientific_96_wellplate_2.4ml_deep"
                                            type="string"/>
                                        <TextField   // BASIC: SOC plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeSocPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicSocPlate"
                                            label="SOC plate"
                                            defaultValue="usascientific_96_wellplate_2.4ml_deep"
                                            type="string"/>
                                        <TextField   // BASIC: Agar Plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeAgarPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="basicAgarPlate"
                                            label="Agar Plate"
                                            defaultValue="thermofisher_96_wellplate_180ul"
                                            type="string"/>

                                        <TextField   // BASIC: Ethanol well for purification
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeEthanolWell(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="ethanolWellForStage2"
                                            label="Ethanol well for purification"
                                            defaultValue="A11"
                                            type="string"/>
                                        <TextField   // BASIC: Deep Well Plate no. for transformation
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeDeepWellPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="deepWellPlateStage4"
                                            label="Deep Well Plate no. for transformation"
                                            defaultValue="1"
                                            type="string"/>
                                        </Box>
                                    </CardActions>
                                </form>
                            </div>
                        </div>)}

                    {isBioBrick && (
                        <div>
                            <Typography className={classes.pos} color="textSecondary">
                                BioBrick Assembly
                            </Typography>
                            <div>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <CardActions>
                                        <Box flexWrap="wrap" flexGrow={1} style={{width:'100%'}}>

                                        <TextField   // BioBricks: Transformation  Plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeTransformationPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="biobricksTransformationPlate"
                                            label="Transformation Plate"
                                            defaultValue="corning_96_wellplate_360ul_flat"
                                            type="string"/>
                                        <TextField   // BioBricks: Tube Rack
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeBiobricksTubeRack(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="biobricksTubeRack"
                                            label="Tube Rack"
                                            defaultValue="opentrons_24_tuberack_nest_1.5ml_snapcap"
                                            type="string"/>
                                        <TextField   // BioBricks: Bead Container & SOC plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeBiobricksSocPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="biobricksSocPlate"
                                            label="SOC plate"
                                            defaultValue="usascientific_96_wellplate_2.4ml_deep"
                                            type="string"/>
                                        </Box>
                                    </CardActions>
                                </form>
                            </div>
                        </div>)
                    }
                    {isMoclo && (
                        <div>
                            <Typography className={classes.pos} color="textSecondary">
                                MoClo (GoldenGate) Assembly
                            </Typography>
                            <div>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <CardActions>
                                        <Box flexWrap="wrap" flexGrow={1} style={{width:'100%'}}>
                                        <TextField   // BioBricks: Transformation  Plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeMoCloReagentPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="moCloReagentPlate"
                                            label="Reagent Plate"
                                            defaultValue="biorad_96_wellplate_200ul_pcr"
                                            type="string"/>
                                        <TextField   // MoClo: Trough
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeMoCloTrough(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="moCloTrough"
                                            label="Trough"
                                            defaultValue="usascientific_12_reservoir_22ml"
                                            type="string"/>
                                        <TextField   // MoClo: Agar Plate
                                            className={classes.inputText2}
                                            onChange={(event) => {
                                                props.handleChangeMoCloAgarPlate(event)
                                                checkError1(event)
                                            }}
                                            error={error_input1}
                                            id="moCloAgarPlate"
                                            label="Agar Plate"
                                            defaultValue="thermofisher_96_wellplate_180ul"
                                            type="string"/>
                                            </Box>
                                    </CardActions>
                                </form>
                            </div>
                        </div>)}
                </Typography>

            </CardContent>
        </Card>
    );
}
