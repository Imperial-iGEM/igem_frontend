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
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Link from '@material-ui/core/Link';

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
    //const [done, setDone] = useState(false)
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
            window.sbolFile = abba;
        }
        reader.readAsText(acceptedFiles[0]);
        //setDone(true);

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
                            'language': "SBOL2",
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
                var newLineCharacter = "\n";
                console.log("length", response.data.errors.length);
                if(response.data.errors[0] !== "") {
                    for (i = 0; i < response.data.errors.length; i++) {
                        errorString =  errorString + response.data.errors[i].toString().trim() + newLineCharacter;
                    }
                    document.getElementById("errorBox").innerText = errorString;

                }
                else{
                    document.getElementById("errorBox").innerText = "No Errors";
                }
                if(response.data.errors[0] === "" || response.data.errors[1] ==="Validation successful, no errors.") {
                    var outPutFile = response.data.output_file;
                    document.getElementById("OUTPUTFILEID").innerText="Click to Download";
                    document.getElementById("OUTPUTFILEID").href=outPutFile;
                }




                else{
                    document.getElementById("outPutFile").innerText = "Fix Errors and try again";
                    console.log("response.data.errors[1]",response.data.errors[1]  );
                }
                console.log("response: ", response.config.data);

                console.log("errorString", errorString);
                 /* console.log("errorString: ", typeof errorString);
                 console.log("file: ", (files));
                 console.log("files[0]: ", (files[0]));
                 console.log("file type: ", (typeof files[0]));
                 console.log("filejson: ", JSON.parse(JSON.stringify(files[0])));*/
            } catch (exception){
                console.log(exception);
                console.log("exception");
            }

        })()
    }, [fileString, files,state.check_best_practices,state.display_full_stack_trace,
        state.fail_first_error,state.incomplete_documents,state.non_compliant_URI]);

    //must go after previous part!

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.root} >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.container}>


                        <Grid item xs={4}>
                            <div>
                                    <Typography variant="h4" component="h3">
                                        Validation Options

                                        <div>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Select</FormLabel>
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
                        <Grid item xs={8}>
                            <Paper elevation={3} className={classes.dropZone}>
                                <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles)} >
                                    {({getRootProps, getInputProps}) => (
                                        <section className={classes.dropZoneInner}>
                                            <div {...getRootProps()} >
                                                <input {...getInputProps()}  />
                                                <div className={classes.dropText}>
                                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </Paper>
                        </Grid>
                    </Grid>
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
                    <Paper elevation={1} >
                        <Paper style={{padding:20, marginTop:10, marginBottom:10, overflow:'scroll',maxHeight:"224px" }} >
                            <Typography variant="h7"  style = {{padding:20}} id={"errorBox"} font={"Roboto"}>
                                {files.length > 0 ? "Processing" : "Errors Will Appear Here" }
                            </Typography>
                        </Paper>

                        <Paper style={{padding:20, marginTop:10, marginBottom:10}}  elevation={0}>

                            <Typography variant="h7"  style = {{padding:20}}  id={"outPutFile"}>
                                <Link  id={"OUTPUTFILEID"} a={""}>{files.length > 0 ? "Processing" : "Validate Files Will Appear Here" }</Link>
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
        height: '100%',
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
        height: '75%',
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
    },
    dropText: {
        alignItems: 'center',
        paddingTop: '17%'
    }
}));
