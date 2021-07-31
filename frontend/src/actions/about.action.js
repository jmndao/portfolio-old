import axios from "axios";
import {
    ABOUT_PROFILE_INFO_FAIL,
    ABOUT_PROFILE_INFO_REQUEST,
    ABOUT_PROFILE_INFO_SUCCESS,
} from "../constants/about.constant";

const fetchAbout = () => async(dispatch) => {

    try {
        dispatch({ type: ABOUT_PROFILE_INFO_REQUEST });
        const { data } = await axios.get("/api/about/jmndao");

        dispatch({ type: ABOUT_PROFILE_INFO_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: ABOUT_PROFILE_INFO_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export { fetchAbout };