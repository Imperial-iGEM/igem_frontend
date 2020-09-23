import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Dropzone from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { SeqViz } from "seqviz";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import SBOLValidatorInput from "./SBOLValidatorInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function SBOLValidator(props) {
    const [state, setState] = React.useState({
        non_compliant_URI: true,
        incomplete_documents: false,
        check_best_practices: true,
        fail_first_error: true,
        display_full_stack_trace: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const [done, setDone] = useState(false)
    const [fileString,  setFileString]  = useState("")

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.


    // code to validate a file
    function acceptFiles(acceptedFiles) {
        setFiles(acceptedFiles);

        /*************************************************************************************************************************/
        const reader = new FileReader()
        reader.onload = () => {
            let abba = reader.result;
            setFileString(abba);
        }
        reader.readAsText(acceptedFiles[0]);
        setDone(true);

        /************************************************************************************************************************/
    }
console.log(state.non_compliant_URI)
    useEffect(() => {
        if(fileString === ""){
            return
        }
        (async () => {
            try {

                /*console.log("we're in async!!");
                console.log("typeof( FileString)",typeof fileString );
                console.log(" FileString", fileString);*/

                let response = await axios({
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: {
                        'options': {
                            'language': 'SBOL2',
                            'test_equality': false,
                            'check_uri_compliance': state.non_compliant_URI,
                            'check_completeness': state.incomplete_documents,
                            'check_best_practices': state.check_best_practices,
                            'fail_on_first_error': state.fail_first_error,
                            'provide_detailed_stack_trace': state.display_full_stack_trace,
                            //   'subset_uri': '',
                            //       'uri_prefix': '',
                            // 'version': '',
                            'insert_type': false,
                            'main_file_name': 'main file',
                        },
                        'return_file': true,
                        'main_file': fileString
                    },
                    url: 'https://validator.sbolstandard.org/validate/',

                });
                var errorString= "Errors:  \n";
                var i;
                console.log("length", response.data.errors.length);
                if(response.data.errors[0] !== "") {
                    for (i = 0; i < response.data.errors.length; i++) {
                        errorString = '\n' + errorString + response.data.errors[i].toString() + '\n' + "             " + '\n';

                    }
                    document.getElementById("errorBox").innerText = errorString;

                }
                else{
                    document.getElementById("errorBox").innerText = "No Errors";

                }
                if(response.data.errors[0] === "") {
                    var outPutFile = response.data.output_file;
                    document.getElementById("outPutFile").innerText = "Link to download validated file: \n" +  outPutFile;

                }
                else{
                    document.getElementById("outPutFile").innerText = "Fix Errors and try again";

                }
                console.log("response: ", response.config.data);

                /* console.log("errorString", errorString);
                 console.log("errorString: ", typeof errorString);
                 console.log("file: ", (files));
                 console.log("files[0]: ", (files[0]));
                 console.log("file type: ", (typeof files[0]));
                 console.log("filejson: ", JSON.parse(JSON.stringify(files[0])));*/
            } catch (exception){
                console.log(exception);
                console.log("exception");
            }

        })()
    }, [fileString, files]);

    //must go after previous part!

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.root} >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.container}>
                        <Grid item sm={6}>
                            <div>
                                <Paper >
                                    <Typography variant="h4" component="h3">
                                        Output File Options

                                        <div>

                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">language</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                >
                                                    <MenuItem value={10}>SBOL1</MenuItem>
                                                    <MenuItem value={20}>SBOL2</MenuItem>
                                                    <MenuItem value={30}>GenBank</MenuItem>
                                                    <MenuItem value={40}>FASTA</MenuItem>
                                                    <MenuItem value={50}>GFF3</MenuItem>

                                                </Select>
                                            </FormControl>
                                        </div>
                                    </Typography>
                                </Paper>
                            </div>

                        </Grid>

                        <Grid item sm={6}>
                            <div>
                                    <Typography variant="h4" component="h3">
                                        Validation Options

                                        <div>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Select options</FormLabel>
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={<Switch checked={state.non_compliant_URI} onChange={handleChange} name="non_compliant_URI" />}
                                                        label="Check URI Compliance"
                                                    />
                                                    <FormControlLabel
                                                        control={<Switch checked={state.incomplete_documents} onChange={handleChange} name="incomplete_documents" />}
                                                        label="Allow incomplete documents"
                                                    />
                                                    <FormControlLabel
                                                        control={<Switch checked={state.check_best_practices} onChange={handleChange} name="check_best_practices" />}
                                                        label="Check best practices"
                                                    />
                                                    <FormControlLabel
                                                        control={<Switch checked={state.fail_first_error} onChange={handleChange} name="fail_first_error" />}
                                                        label="Fail on first error"
                                                    />
                                                    <FormControlLabel
                                                        control={<Switch checked={state.display_full_stack_trace} onChange={handleChange} name="display_full_stack_trace" />}
                                                        label="Display full stack trace"
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                            {console.log("Non Compliant URI",state.non_compliant_URI)}
                                        </div>
                                    </Typography>
                            </div>

                        </Grid>
                    </Grid>
                    <Paper elevation={3} className={classes.dropZone}>
                        <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles)} >
                            {({getRootProps, getInputProps}) => (
                                <section className={classes.dropZoneInner}>
                                    <div {...getRootProps()} >
                                        <input {...getInputProps()}  />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}

                        </Dropzone>

                    </Paper>
                    <List className={classes.list}>
                        {files.length > 0 && files.map((acceptedFile, index) => {
                            return [<ListItem key={index} className={classes.listItem}>
                                <Paper elevation={3} className={classes.listItemPaper}>
                                    <a href={URL.createObjectURL(acceptedFile)}
                                       download={acceptedFile.name}>{acceptedFile.name}</a>
                                </Paper>
                            </ListItem>,
                                <ListItem key={10}>
                                    <SeqViz
                                        style = {{height: '50vh', width:'100vw'}}
                                        file ={acceptedFile}
                                    />
                                </ListItem>

                            ]})}
                    </List>
                    <Paper elevation={3} >
                        <Paper style={{padding:20, marginTop:10, marginBottom:10}} >
                            <Typography variant="h6"  style = {{padding:20}} id={"errorBox"} >
                                Errors
                            </Typography>
                        </Paper>

                        <Paper style={{padding:20, marginTop:10, marginBottom:10}}>

                            <Typography variant="h6"  style = {{padding:20}}  id={"outPutFile"}>
                                OutputFile
                            </Typography>
                        </Paper>
                    </Paper>
                </div>
            </div>
        </div>
    )

}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 100,
        justifyContent: 'center',
        margin: 20
    },
    container:{
        display: 'flex'

    },
    dropZone: {
        display: 'flex',
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    listItemPaper: {
        display: 'flex',
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 0,
    },
    listItem: {
        padding: 0,
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,


    },
    dropZoneInner: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#FF6F90',
        borderStyle: 'dashed',
        backgroundColor: "#fafafa",
        color: '#bdbdbd',
        outline: 'none',
        margin: 10
    }
}));
