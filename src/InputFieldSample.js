import React from 'react';
import { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './InputFieldSample.scss';

const InputFieldSample = ({ validate }) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    const [focused, setFocused] = useState(false);

    const handleChange = (event) => {
        const newInput = event.target.value;
        const newError = validate(newInput);
        setError(newError);
        if (!newError) {
            setInput(newInput);
        }
    };

    const handleClear = () => {
        setError(null);
        setInput('');
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const label = input || focused ? "Input field:" : "Enter input text";

    return (
        <Center>
            <div>
                <div onFocus={handleFocus} onBlur={handleBlur} className="InputFieldSample__input-root">
                    <TextField
                        error={error}
                        id="input-outlined"
                        label={label}
                        className="InputFieldSample__outlined"
                        value={input}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        helperText={error ? error : ""}
                    />
                </div>
                <div
                    id="textarea-outlined"
                    className="InputFieldSample__square"
                >
                    <div>{input}</div>
                </div>
                <Center>
                    <div className="InputFieldSample__button">
                        <Button variant="outlined" onClick={handleClear}>
                            Clear
                        </Button>
                    </div>
                </Center>
            </div>
        </Center>
    );
}

const Center = ({ children }) => (
    <Grid container justify="center">
        {children}
    </Grid>
);

export default InputFieldSample;