import { JCODE_CREATE_FAIL, JCODE_CREATE_REQUEST, JCODE_CREATE_SUCCESS, JCODE_DELETE_FAIL, JCODE_DELETE_REQUEST, JCODE_DELETE_SUCCESS, JCODE_GET_FAIL, JCODE_GET_REQUEST, JCODE_GET_SUCCESS, JCODE_LIST_FAIL, JCODE_LIST_REQUEST, JCODE_LIST_SUCCESS, JCODE_UPDATE_FAIL, JCODE_UPDATE_REQUEST, JCODE_UPDATE_SUCCESS } from "../constants/jcode.constant";

export const jcodeGetReducer = (state = { section: [], mention: [] }, action) => {
    switch (action.type) {
        case JCODE_GET_REQUEST:
            return {...state, loading: true };
        case JCODE_GET_SUCCESS:
            return { loading: false, jcode: action.payload };
        case JCODE_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};

export const jcodeListReducer = (state = { section: [], mention: [] }, action) => {
    switch (action.type) {
        case JCODE_LIST_REQUEST:
            return {...state, loading: true };
        case JCODE_LIST_SUCCESS:
            return { loading: false, jcodes: action.payload };
        case JCODE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};

export const jcodeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case JCODE_DELETE_REQUEST:
            return { loading: true };
        case JCODE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case JCODE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};

export const jcodeCreateReducer = (state = { section: [], mention: [] }, action) => {
    switch (action.type) {
        case JCODE_CREATE_REQUEST:
            return {...state, loading: true };
        case JCODE_CREATE_SUCCESS:
            return { loading: false, success: true };
        case JCODE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};

export const jcodeUpdateReducer = (state = { section: [], mention: [] }, action) => {
    switch (action.type) {
        case JCODE_UPDATE_REQUEST:
            return {...state, loading: true };
        case JCODE_UPDATE_SUCCESS:
            return { loading: false, success: true, jcode: action.payload };
        case JCODE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};