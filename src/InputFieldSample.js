import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
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
            input: '',
            error: null,
            focused: false
        };
    }

    handleChange = (event) => {
        const input = event.target.value;
        if (input.length <= 10) {
            this.setInput(input);
        } else {
            this.setError('Max. 10 characters!');
        }
        
    }

    handleClear = () => {
        this.setInput('');
    }

    setInput(input) {
        this.setState({ input, error: null });
    }

    setError(error) {
        this.setState({ error });
    }

    handleFocus = () => {
        this.setState({ focused: true });
    }

    handleBlur = () => {
        this.setState({ focused: false });
    }

    render() {
        const label = this.state.input || this.state.focused ? "Input field:" : "Enter input text";

        return (
            <div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} className="InputFieldSample__input-root">
                    <TextField
                        error={!!this.state.error}
                        id="input-outlined"
                        label={label}
                        className="InputFieldSample__outlined"
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        helperText={this.state.error ? "Max. 10 characters!" : ""}
                    />
                </div>
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