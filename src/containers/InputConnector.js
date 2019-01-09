import React from 'react';
import PropTypes from 'prop-types';

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

InputConnector.propTypes = {
    input: PropTypes.string.isRequired,
    error: PropTypes.string
};

function mapStateToProps(state) {
    const input = getInput(state);
    const error = getError(state);

    return { input, error };
}

export default connect(mapStateToProps)(InputConnector);