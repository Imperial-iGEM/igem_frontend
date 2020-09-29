import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import {Paper, List, ListItem, makeStyles} from '@material-ui/core'

import { SeqViz } from "seqviz";
import {RiseLoader} from "react-spinners";

export default function FileUpload(props) {

    const [files, setFiles] = useState([]);
    const [pythonLink1] = useState("");
    const [pythonLink2] = useState("");
    const [pythonLink3] = useState("");
    const [pythonLink4] = useState("");
    const [fileString, setFileString] = useState("");
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





