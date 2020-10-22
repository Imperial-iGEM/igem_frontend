import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));


export default function OpentronsText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h2"}>
                    Our iniative
                </Typography>
                <Typography variant={"h6"}>
                    Opentrons is cool for lots of reasons i will write below dolore magna aliqua. Ut enim ad minim
                    We are an Imperial College iGEM team of students from Bioengineering, Physics, Computing, 
                    and Biochemistry. Our project developed in line with a Tryptophan optimisation project we 
                    were working on that required a lot of combinatorial derivation. 

                    Generating the Opentrons programs ourselves for all our assemblies would be a tedious task 
                    for anyone, which made us realise we could help realise the potential of open-source 
                    automation, and thus SOAP Lab was born.
                </Typography>
            </div>
        </div>
    )
}