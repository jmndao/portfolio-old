import axios from "axios";
import {
    ABOUT_PROFILE_INFO_FAIL,
    ABOUT_PROFILE_INFO_REQUEST,
    ABOUT_PROFILE_INFO_SUCCESS,
    ABOUT_PROFILE_UPDATE_REQUEST,
    ABOUT_PROFILE_UPDATE_SUCCESS,
    ABOUT_PROFILE_UPDATE_FAIL
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


const updateAbout = (profileInfo) => async(dispatch, getState) => {

    try {
        dispatch({ type: ABOUT_PROFILE_UPDATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.put('/api/about/jmndao', profileInfo, config);

        dispatch({ type: ABOUT_PROFILE_UPDATE_SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: ABOUT_PROFILE_UPDATE_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
}

export { fetchAbout, updateAbout };