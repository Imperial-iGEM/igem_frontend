import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '30px',
        paddingRight: '20px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'15px',
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function OpentronsText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h2"}>
                    Our iniative
                </Typography>
                <Typography variant={"h6"}>
                    We are an Imperial College iGEM team of students
                    from Bioengineering, Physics, Computing, and Biochemistry.
                    Our project developed in line with a Tryptophan
                    optimisation project we were working on that required 
                    a lot of combinatorial derivation. 

                    Generating the Opentrons programs ourselves for 
                    all our assemblies would be a tedious task for 
                    anyone, which made us realise we could help realise 
                    the potential of open-source automation, and thus 
                    SOAP Lab was born.
                </Typography>
            </div>
        </div>
    )
}