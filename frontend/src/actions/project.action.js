import axios from "axios";
import {
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_DELETE_FAIL,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_GET_FAIL,
    PROJECT_GET_REQUEST,
    PROJECT_GET_SUCCESS,
    PROJECT_LIST_FAIL,
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_UPDATE_FAIL,
    PROJECT_UPDATE_REQUEST,
    PROJECT_UPDATE_SUCCESS,
} from "../constants/project.constant";

const listProjects = () => async(dispatch) => {
    try {
        dispatch({ type: PROJECT_LIST_REQUEST });

        const { data } = await axios.get("/api/projects");

        dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

const deleteProject = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_DELETE_REQUEST });

        // Get admin user token
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/projects/${id}`, config);

        dispatch({ type: PROJECT_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: PROJECT_DELETE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

const createProject = (project) => async(dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_CREATE_REQUEST });

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

        await axios.post(`/api/projects`, project, config);

        dispatch({ type: PROJECT_CREATE_SUCCESS });
    } catch (error) {
        dispatch({
            type: PROJECT_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

const updateProject = (project) => async(dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_UPDATE_REQUEST });

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

        const { updatedProject } = await axios.put(`/api/projects`, project, config);

        dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: updatedProject });
    } catch (error) {
        dispatch({
            type: PROJECT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

const getProject = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_GET_REQUEST });

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

        const { data } = await axios.get(`/api/projects/${id}`, config);
        console.log(data);

        dispatch({ type: PROJECT_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PROJECT_GET_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

export {
    listProjects,
    deleteProject,
    createProject,
    updateProject,
    getProject,
};