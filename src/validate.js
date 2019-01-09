const ERROR_MESSAGE = "Max. 10 characters!";

const validate = (input) => {
    return input.length <= 10 ? null : ERROR_MESSAGE;
}

export default validate;