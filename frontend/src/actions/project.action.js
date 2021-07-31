import axios from "axios";
import {
    PROJECT_LIST_FAIL,
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
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


export { listProjects };