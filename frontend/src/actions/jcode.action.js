import axios from "axios";
import {
    JCODE_CREATE_FAIL,
    JCODE_CREATE_REQUEST,
    JCODE_CREATE_SUCCESS,
    JCODE_DELETE_FAIL,
    JCODE_DELETE_REQUEST,
    JCODE_DELETE_SUCCESS,
    JCODE_GET_FAIL,
    JCODE_GET_REQUEST,
    JCODE_GET_SUCCESS,
    JCODE_LIST_FAIL,
    JCODE_LIST_REQUEST,
    JCODE_LIST_SUCCESS,
    JCODE_UPDATE_FAIL,
    JCODE_UPDATE_REQUEST,
    JCODE_UPDATE_SUCCESS,
} from "../constants/jcode.constant";

const listJCode = () => async(dispatch) => {
    try {
        dispatch({ type: JCODE_LIST_REQUEST });

        const { data } = await axios.get("/api/jcodes");

        dispatch({ type: JCODE_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: JCODE_LIST_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message :
                err.message,
        });
    }
};

const deleteJCode = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: JCODE_DELETE_REQUEST });

        // Get admin user token
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/jcodes/${id}`, config);

        dispatch({ type: JCODE_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: JCODE_DELETE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

const createJCode = (jcode) => async(dispatch, getState) => {
    try {
        dispatch({ type: JCODE_CREATE_REQUEST });

        // Get admin user token
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.post(`/api/jcodes`, jcode, config);

        dispatch({ type: JCODE_CREATE_SUCCESS });
    } catch (error) {
        dispatch({
            type: JCODE_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

const updateJCode = (jcode) => async(dispatch, getState) => {
    try {
        dispatch({ type: JCODE_UPDATE_REQUEST });

        // Get admin user token
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { updatedJCode } = await axios.put(`/api/jcodes`, jcode, config);

        dispatch({ type: JCODE_UPDATE_SUCCESS, payload: updatedJCode });
    } catch (error) {
        dispatch({
            type: JCODE_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

const getJCode = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: JCODE_GET_REQUEST });

        // Get admin user token
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/jcodes/${id}`, config);

        dispatch({ type: JCODE_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: JCODE_GET_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

export { listJCode, deleteJCode, createJCode, updateJCode, getJCode };