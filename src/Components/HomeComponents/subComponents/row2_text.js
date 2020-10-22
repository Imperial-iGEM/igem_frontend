import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center'
    },
    myButton: {
        padding: '10px'
    }
  }));

export default function Row2Text(props){

    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };

    return(
        <div>
            <div>
                <WhiteTextTypography variant={"h3"} color="#FFFFFF">
                    Synthetic Biology made easy
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"} color="#FFFFFF">
                    You're in the lab, you've figured out your genetic circuits,
                    now you have to build them. Instead of  spending another day
                    planning and carrying out repetitive assembly protocols by
                    hand, SOAP Lab helps you to automate the process.
                </WhiteTextTypography>
                <div className={classes.myButton}>
                    <Link style={navStyle} to='/about'>
                        <Button size="medium" color="primary" variant="contained">
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}