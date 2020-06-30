import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import {makeStyles} from '@material-ui/core/styles';
import MenuDraw from "./MenuDraw";
import {Redirect, useLocation} from "react-router-dom";

export default function FileUpload(props) {
    const [files, setFiles] = useState([]);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();

    function acceptFiles(acceptedFiles) {
        setFiles(files.concat(acceptedFiles))
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
            <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
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
                    {files.length > 0 && files.map((acceptedFile, index) => (
                        <ListItem key={index} className={classes.listItem}>
                            <Paper elevation={3} className={classes.listItemPaper}>
                                <a href={URL.createObjectURL(acceptedFile)}
                                   download={acceptedFile.name}>{acceptedFile.name}</a>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
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
