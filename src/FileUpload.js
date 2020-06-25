import React, {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'

export default function FileUpload(props) {
    const [files, setFiles] = useState([]);

    function acceptFiles(acceptedFiles) {
        setFiles(files.concat(acceptedFiles))
    }

    useEffect(() => {
        console.log(files);
    }, [files]);

    return (
        <div>
            <Dropzone onDrop={acceptedFiles => acceptFiles(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>

            <ul>
                {files.length > 0 && files.map((acceptedFile, index) => (
                    <li key={index}>
                        <a href={URL.createObjectURL(acceptedFile)} download={acceptedFile.name}>{acceptedFile.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
