import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px'
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});


class InputFieldSample extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify="center">
                <TextField />
            </Grid>
        );
    }
}

class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.labelRef = React.createRef();

        this.state = {
            name: ''
        };
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <FormControl variant="outlined">
                <InputLabel
                    shrink
                    htmlFor="input-outlined"
                >
                    Input field:
                </InputLabel>
                <OutlinedInput
                    id="input-outlined"
                    value={this.state.name}
                    notched={true}
                    onChange={this.handleChange}
                    labelWidth={80}
                />
            </FormControl>
        );
    }
}


export default withStyles(styles)(InputFieldSample);