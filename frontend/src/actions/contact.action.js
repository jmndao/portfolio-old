import axios from "axios";
import {
    CONTACT_DELETE_FAIL,
    CONTACT_DELETE_REQUEST,
    CONTACT_DELETE_SUCCESS,
    CONTACT_FORM_SUBMISSION_FAIL,
    CONTACT_FORM_SUBMISSION_REQUEST,
    CONTACT_FORM_SUBMISSION_SUCCESS,
    CONTACT_LIST_FAIL,
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
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
                err.response.data.message : err.message,
        });
    }
};

const deleteContact = (id) => async(dispatch, getState) => {

    try {
        dispatch({ type: CONTACT_DELETE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        await axios.delete(`/api/contact/${id}`, config);

        dispatch({ type: CONTACT_DELETE_SUCCESS });
    } catch (err) {
        dispatch({
            type: CONTACT_DELETE_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

const listContacts = (id) => async(dispatch, getState) => {

    try {
        dispatch({ type: CONTACT_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(`/api/contact/`, config);

        dispatch({ type: CONTACT_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: CONTACT_LIST_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export { submitForm, deleteContact, listContacts };