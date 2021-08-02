import axios from "axios";
import {
    DOWNLOAD_RESUME_FAIL,
    DOWNLOAD_RESUME_REQUEST,
    DOWNLOAD_RESUME_SUCCESS,
} from "../constants/home.constant";

const downloadResume = () => async(dispatch) => {
    try {
        dispatch({ type: DOWNLOAD_RESUME_REQUEST });

        const config = {
            headers: { 'Content-Type': 'application/pdf' },
        };
        await axios.get("/api/download/resume", config);

        dispatch({ type: DOWNLOAD_RESUME_SUCCESS });
    } catch (err) {
        dispatch({
            type: DOWNLOAD_RESUME_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export { downloadResume };