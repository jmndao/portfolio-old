import {
    CONTACT_FORM_SUBMISSION_FAIL,
    CONTACT_FORM_SUBMISSION_REQUEST,
    CONTACT_FORM_SUBMISSION_SUCCESS,
} from "../constants/contact.constant";

export const formSubmitReducer = (state = { formMessage: {} }, action) => {
    switch (action.type) {
        case CONTACT_FORM_SUBMISSION_REQUEST:
            return { loading: true };
        case CONTACT_FORM_SUBMISSION_SUCCESS:
            return { loading: false, formMessage: action.payload };
        case CONTACT_FORM_SUBMISSION_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};