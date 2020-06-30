import React, {useState, useEffect} from 'react'
import {Paper, Typography,CardMedia,Card, CardActionArea} from "@material-ui/core";


export default function ConstructViewer(props){


    return(
        <Card style={{ height: 'inherit'}}>
            <CardActionArea style={{ height: 'inherit'}}>
                <CardMedia style={{ height:"inherit"}}
                    image="/logo512.png"
                    title="Preview"
                />
            </CardActionArea>
        </Card>

    )
}
