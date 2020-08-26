import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {makeStyles} from '@material-ui/core/styles';
import {Redirect, useLocation} from "react-router-dom";
import { SeqViz } from "seqviz";
import axios from "axios"
import {RiseLoader} from "react-spinners";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default function FileUpload(props) {
    const [files, setFiles] = useState([]);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    const [done, setDone] = useState(false)
    let currentLocation = useLocation();
    const [fileString,  setFileString]  = useState("")

    function acceptFiles(acceptedFiles) {
        setFiles(acceptedFiles);

        /*************************************************************************************************************************/
        const reader = new FileReader()
        reader.onload = () => {
            let abba = reader.result;
            setFileString(abba);
            console.log("abba = ", abba);

            console.log("FileString", fileString);
        }
        reader.readAsText(acceptedFiles[0]);
        setDone(true);
        /************************************************************************************************************************/
    }


    useEffect(() => {
        if(fileString === ""){
            return
        }
        (async () => {
            try {

                console.log("we're in async!!");
                console.log("typeof( FileString)",typeof fileString );
                console.log(" FileString", fileString);

                let response = await axios({
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: {
                        'options': {
                            'language': 'SBOL2',
                            'test_equality': false,
                            'check_uri_compliance': true,
                            'check_completeness': true,
                            'check_best_practices': false,
                            'fail_on_first_error': true,
                            'provide_detailed_stack_trace': false,
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

                console.log("Axios has run!!");

                console.log("response.status: ",response.status);

                console.log("response: ", response);
                console.log("response.headers: ", response.request);
                console.log("file: ", (files));
                console.log("files[0]: ", (files[0]));

                console.log("file type: ", (typeof files[0]));
                console.log("filejson: ", JSON.parse(JSON.stringify(files[0])));
            } catch (exception){
                console.log(exception);
                console.log("exception");
            }

        })()
    }, [fileString]);


    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
        console.log(`In FileUpload Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }

    // If we need to navigate render a Redirect object with push to save history
    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }



    return (
        <div>
            {/* Include MenuDraw at top, ensuring props are passed through function for handleTabSelection*/}
            <div className={classes.root}>
                <Paper elevation={3} className={classes.dropZone}>
                    <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles)}>
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
                <RiseLoader
                    css={{alignSelf:'center'}}
                    size={150}
                    color={"#123abc"}
                />
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
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: "#fafafa",
        color: '#bdbdbd',
        outline: 'none',
        margin: 10
    }
}));
