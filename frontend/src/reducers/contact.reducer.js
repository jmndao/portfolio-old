import {
    CONTACT_DELETE_REQUEST,
    CONTACT_DELETE_SUCCESS,
    CONTACT_FORM_SUBMISSION_FAIL,
    CONTACT_FORM_SUBMISSION_REQUEST,
    CONTACT_FORM_SUBMISSION_SUCCESS,
    CONTACT_LIST_FAIL,
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
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

export const contactDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_DELETE_REQUEST:
            return { loading: true }
        case CONTACT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case CONTACT_FORM_SUBMISSION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return {}
    }
};

export const contactsGetReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_LIST_REQUEST:
            return { loading: true }
        case CONTACT_LIST_SUCCESS:
            return { loading: false, contacts: action.payload }
        case CONTACT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return {}
    }
};