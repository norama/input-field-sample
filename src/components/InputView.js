import React from 'react';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './InputView.scss';

class InputView extends React.Component {

    constructor(props) {
        super(props);

        this.labelRef = React.createRef();

        this.state = {
            focused: false
        };
    }

    handleChange = (event) => {
        const input = event.target.value;

        this.props.onChange(input);
    }

    handleClear = () => {
        this.props.onChange('');
    }

    handleFocus = () => {
        this.setState({ focused: true });
    }

    handleBlur = () => {
        this.setState({ focused: false });
    }

    render() {
        const label = this.props.input || this.state.focused ? "Input field:" : "Enter input text";

        return (
            <Center>
                <div>
                    <div onFocus={this.handleFocus} onBlur={this.handleBlur} className="InputFieldSample__input-root">
                        <TextField
                            error={!!this.props.error}
                            id="input-outlined"
                            label={label}
                            className="InputFieldSample__outlined"
                            value={this.props.input}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            helperText={this.props.error ? this.props.error : ""}
                        />
                    </div>
                    <div
                        id="textarea-outlined"
                        className="InputFieldSample__square"
                    >
                        <div>{this.props.input}</div>
                    </div>
                    <Center>
                        <div className="InputFieldSample__button">
                            <Button variant="outlined" onClick={this.handleClear}>
                                Clear
                            </Button>
                        </div>
                    </Center>
                </div>
            </Center>
        );
    }

}


const Center = ({ children }) => (
    <Grid container justify="center">
        {children}
    </Grid>
);

export default InputView;