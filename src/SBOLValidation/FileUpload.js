import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import {Paper, List, ListItem, makeStyles} from '@material-ui/core'
import { SeqViz } from "seqviz";

export default function FileUpload(props) {

    const [files, setFiles] = useState([]);
    const [pythonLink1] = useState("");
    const [pythonLink2] = useState("");
    const [pythonLink3] = useState("");
    const [pythonLink4] = useState("");
    //const [fileString, setFileString] = useState("");
    function acceptFiles(acceptedFiles) {
        setFiles(acceptedFiles);
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const string = reader.result
                //setFileString(string);
                window.sbolFile = string
            }
            reader.readAsText(file)
        });
    }

    useEffect(() => {
        console.log(files);
    }, [files]);


    const classes = useStyles();

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
                        return (<ListItem key={index} className={classes.listItem}>
                                    <Paper elevation={3} className={classes.listItemPaper}>
                                        <a href={URL.createObjectURL(acceptedFile)}
                                        download={acceptedFile.name}>{acceptedFile.name}</a>
                                    </Paper>
                                </ListItem>)
                        })
                    }
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
        borderColor: '#FF6F90',
        borderStyle: 'dashed',
        backgroundColor: "#fafafa",
        color: '#bdbdbd',
        outline: 'none',
        margin: 10
    }
}));





