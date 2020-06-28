import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { makeStyles } from '@material-ui/core/styles';

export default function FileUpload(props) {
    const [files, setFiles] = useState([]);

    function acceptFiles(acceptedFiles) {
        setFiles(files.concat(acceptedFiles))
    }

    useEffect(() => {
        console.log(files);
    }, [files]);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 100,
            justifyContent: 'center',
        },
        dropZone: {
            display: 'flex',
            minHeight: 100,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 10
        },
        list: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        dropZone2: {
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
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.dropZone} >
            <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles) }>
                {({getRootProps, getInputProps}) => (
                    <section className={classes.dropZone2}>
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
                    <ListItem key={index}>
                        <Paper elevation={3} className={classes.dropZone} >
                        <a href={URL.createObjectURL(acceptedFile)} download={acceptedFile.name}>{acceptedFile.name}</a>
                        </Paper>
                    </ListItem>
                ))}
            </List>
    </div>
    )
}
