import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';


import './InputFieldSample.scss';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px'
    }
});


class InputFieldSample extends React.Component {

    render() {
        return (
            <Grid container className="InputFieldSample__root" justify="center">
                <Sample />
            </Grid>
        );
    }
}

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.labelRef = React.createRef();

        this.state = {
            input: ''
        };
    }

    handleChange = (event) => {
        this.setInput(event.target.value);
    }

    handleClear = () => {
        this.setInput('');
    }

    setInput(input) {
        this.setState({ input });
    }

    render() {
        return (
            <div>
                <FormControl variant="outlined">
                    <InputLabel
                        shrink
                        htmlFor="input-outlined"
                    >
                        Input field:
                    </InputLabel>
                    <OutlinedInput
                        id="input-outlined"
                        value={this.state.input}
                        notched={true}
                        onChange={this.handleChange}
                        labelWidth={80}
                        className="InputFieldSample__outlined"
                    />
                </FormControl>
                <div
                    id="textarea-outlined"
                    className="InputFieldSample__square"
                >
                    <div>{this.state.input}</div>
                </div>
                <Grid container className="InputFieldSample__button-root" justify="center">
                    <Button variant="outlined" onClick={this.handleClear}>
                        Clear
                    </Button>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(InputFieldSample);