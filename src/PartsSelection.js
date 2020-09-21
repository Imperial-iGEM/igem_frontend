import React, {useState, useEffect} from 'react'
import {Button, Card,  List, ListItem, CardContent} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default function PartsSelection(props) {


    return (
        <Card style={{ height: '50vh'}}>
            <CardContent style={{ display:'flex', justifyContent:'center',  height: 'inherit', alignItems: 'center', justifyItems:'center', alignContent: 'center'}}>
                <List>
                    <ListItem key={1}>
                <Button size="large" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon/>}>
                    Part From Registry
                </Button>
                    </ListItem>
                    <ListItem key={2}>
                <Button size="large" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon/>}>
                    Add Part
                </Button>
                </ListItem>
                </List>
            </CardContent>
        </Card>

    )
}
