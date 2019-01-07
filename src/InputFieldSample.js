import React from 'react';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import './InputFieldSample.scss';


class InputFieldSample extends React.Component {

    render() {
        return (
            <Center>
                <Sample />
            </Center>
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
                <Center>
                    <div className="InputFieldSample__button">
                        <Button variant="outlined" onClick={this.handleClear}>
                            Clear
                        </Button>
                    </div>
                </Center>
            </div>
        );
    }
}

const Center = ({ children }) => (
    <Grid container justify="center">
        {children}
    </Grid>
);


export default InputFieldSample;