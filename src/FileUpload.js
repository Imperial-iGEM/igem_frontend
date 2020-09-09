import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import {makeStyles} from '@material-ui/core/styles';
import {Redirect, useLocation} from "react-router-dom";
import { SeqViz } from "seqviz";
import {RiseLoader} from "react-spinners";

export default function FileUpload(props) {

    const [files, setFiles] = useState([]);

    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    const [constructCSV, setConstructCSV] = useState("");
    const [pythonLink1, setPythonLink1] = useState("");
    const [pythonLink2, setPythonLink2] = useState("");
    const [pythonLink3, setPythonLink3] = useState("");
    const [pythonLink4, setPythonLink4] = useState("");
    const [fileString, setFileString] = useState("");
    const [done, setDone] = useState(false)
    let currentLocation = useLocation();
    // if(files.length > 0 && !done){
    //
    //         (async () => {
    //             try {
    //                 await fileDebugLogger(files[0]);
    //                 let formData = new FormData();
    //                 formData.append('file', files[0]);
    //                 // Assuming ktor backend is running on localhost:8080
    //                 setDone(true)
    //                 let response = await axios.post("http://localhost:8080/upload", formData);
    //
    //                 if(response.status === 200){
    //                     // test for status you want, etc
    //                     console.log(response.status)
    //                     console.log(response)
    //                     setPythonLink1(response.python_output_1)
    //                     setPythonLink2(response.python_output_2)
    //                     setPythonLink3(response.python_output_3)
    //                     setPythonLink4(response.python_output_4)
    //
    //                 }
    //             } catch (exception){
    //                 console.log(exception)
    //             }
    //         })()
    //
    // }
    function acceptFiles(acceptedFiles) {
        setFiles(acceptedFiles);
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const string = reader.result
                setFileString(string);
                window.testData = string
                console.log(string)
            }
            reader.readAsText(file)
        });

        // (async () => {
        //     try {
        //         await fileDebugLogger(acceptedFiles[0]);
        //         let formData = new FormData();
        //         console.log(acceptedFiles[0]);
        //         formData.append('file', acceptedFiles[0]);
        //         // Assuming ktor backend is running on localhost:8080
        //         setDone(true)
        //         let response = await axios.post("http://localhost:8080/upload", formData);
        //
        //         if(response.status === 200){
        //             // test for status you want, etc
        //             console.log(response.status)
        //             console.log(response)
        //             setPythonLink1(`${response.data.python_output_1}`)
        //             setPythonLink2(`${response.data.python_output_2}`)
        //             setPythonLink3(`${response.data.python_output_3}`)
        //             setPythonLink4(`${response.data.python_output_4}`)
        //
        //         }
        //     } catch (exception){
        //         console.log(exception)
        //     }
        // })()
    }

    useEffect(() => {
        console.log(files);
    }, [files]);


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
                                /></ListItem>]})}
                            {pythonLink1 !== "" && <ListItem key={11} className={classes.listItem}>
                                <Paper elevation={3} className={classes.listItemPaper}>
                                    <a href={pythonLink1}
                                       download="1_clip.ot2.py">1_clip.ot2.py</a>
                                </Paper>
                            </ListItem>}
                            {pythonLink2 !== "" && <ListItem key={12} className={classes.listItem}>
                                <Paper elevation={3} className={classes.listItemPaper}>
                                    <a href={pythonLink2}
                                       download="2_purification.ot2.py">2_purification.ot2.py</a>
                                </Paper>
                            </ListItem>}
                            {pythonLink3 !== "" && <ListItem key={13} className={classes.listItem}>
                                <Paper elevation={3} className={classes.listItemPaper}>
                                    <a href={pythonLink3}
                                       download="3_assembly.ot2.py">3_assembly.ot2.py</a>
                                </Paper>
                            </ListItem>}
                            {pythonLink4 !== "" && <ListItem key={14} className={classes.listItem}>
                                <Paper elevation={3} className={classes.listItemPaper}>
                                    <a href={pythonLink4}
                                       download="4_transformation.ot2.py">4_transformation.ot2.py</a>
                                </Paper>
                            </ListItem>},
                </List>
                <RiseLoader
                    css={{alignSelf:'center'}}
                    size={150}
                    color={"#123abc"}
                    loading={pythonLink1 === "" && pythonLink2 === "" && pythonLink3 === "" && pythonLink4 === "" && files.length > 0}
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
        borderColor: '#FF6F90',
        borderStyle: 'dashed',
        backgroundColor: "#fafafa",
        color: '#bdbdbd',
        outline: 'none',
        margin: 10
    }
}));





