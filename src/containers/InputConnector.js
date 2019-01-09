import React from 'react';

import { connect } from 'react-redux';

import { getInput, getError } from '../store/reducer';
import { changeInputAction } from '../store/actions';

import InputView from '../components/InputView';

class InputConnector extends React.Component {

    render() {
        return (
            <InputView input={this.props.input} error={this.props.error} onChange={this.handleChange} />
        );
    }

    handleChange = (input) => {
        this.props.dispatch(changeInputAction(input));
    }

}

function mapStateToProps(state) {
    const input = getInput(state);
    const error = getError(state);

    return { input, error };
}

export default connect(mapStateToProps)(InputConnector);