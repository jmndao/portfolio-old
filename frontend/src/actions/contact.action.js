import axios from "axios";
import {
    CONTACT_FORM_SUBMISSION_FAIL,
    CONTACT_FORM_SUBMISSION_REQUEST,
    CONTACT_FORM_SUBMISSION_SUCCESS,
} from "../constants/contact.constant";

const submitForm = (name, email, message) => async(dispatch) => {
    try {
        dispatch({ type: CONTACT_FORM_SUBMISSION_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            "/api/contact", { name, email, message },
            config
        );

        dispatch({ type: CONTACT_FORM_SUBMISSION_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: CONTACT_FORM_SUBMISSION_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message :
                err.message,
        });
    }
};

export { submitForm };